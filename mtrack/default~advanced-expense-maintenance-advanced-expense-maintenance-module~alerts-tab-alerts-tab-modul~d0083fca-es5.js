(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~advanced-expense-maintenance-advanced-expense-maintenance-module~alerts-tab-alerts-tab-modul~d0083fca"],{

/***/ "./node_modules/@google/markerclusterer/dist/markerclusterer.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@google/markerclusterer/dist/markerclusterer.esm.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @name MarkerClusterer for Google Maps v3
 * @author Luke Mahe
 * @fileoverview
 * The library creates and manages per-zoom-level clusters for large amounts of
 * markers.
 */

/**
 * A Marker Clusterer that clusters markers.
 *
 * @param {google.maps.Map} map The Google map to attach to.
 * @param {Array.<google.maps.Marker>=} opt_markers Optional markers to add to
 *   the cluster.
 * @param {Object=} opt_options support the following options:
 *     'gridSize': (number) The grid size of a cluster in pixels.
 *     'maxZoom': (number) The maximum zoom level that a marker can be part of a
 *                cluster.
 *     'zoomOnClick': (boolean) Whether the default behaviour of clicking on a
 *                    cluster is to zoom into it.
 *     'imagePath': (string) The base URL where the images representing
 *                  clusters will be found. The full URL will be:
 *                  {imagePath}[1-5].{imageExtension}
 *                  Default: '../images/m'.
 *     'imageExtension': (string) The suffix for images URL representing
 *                       clusters will be found. See _imagePath_ for details.
 *                       Default: 'png'.
 *     'averageCenter': (boolean) Whether the center of each cluster should be
 *                      the average of all markers in the cluster.
 *     'minimumClusterSize': (number) The minimum number of markers to be in a
 *                           cluster before the markers are hidden and a count
 *                           is shown.
 *     'zIndex': (number) the z-index of a cluster.
 *               Default: google.maps.Marker.MAX_ZINDEX + 1
 *     'styles': (Array.<Object>) An Array of single object that has style properties for all cluster:
 *       'url': (string) The image url.
 *       'height': (number) The image height.
 *       'width': (number) The image width.
 *       'anchor': (Array) The anchor position of the label text.
 *       'textColor': (string) The text color.
 *       'textSize': (number) The text size.
 *       'backgroundPosition': (string) The position of the backgound x, y.
 * @constructor
 * @extends google.maps.OverlayView
 */

class MarkerClusterer {
  constructor(map, opt_markers, opt_options) {
    this.extend(MarkerClusterer, google.maps.OverlayView);
    this.map_ = map;

    /**
     * The marker cluster image path.
     *
     * @type {string}
     * @private
     */
    this.MARKER_CLUSTER_IMAGE_PATH_ = "../images/m";

    /**
     * The marker cluster image path.
     *
     * @type {string}
     * @private
     */
    this.MARKER_CLUSTER_IMAGE_EXTENSION_ = "png";
    /**
     * @type {Array.<google.maps.Marker>}
     * @private
     */
    this.markers_ = [];

    /**
     *  @type {Array.<Cluster>}
     */
    this.clusters_ = [];

    this.sizes = [53, 56, 66, 78, 90];

    /**
     * @type {Array.<Object>}
     * @private
     */
    this.styles_ = [];

    /**
     * @type {boolean}
     * @private
     */
    this.ready_ = false;

    var options = opt_options || {};

    /**
     * @type {number}
     */
    this.zIndex_ = options["zIndex"] || google.maps.Marker.MAX_ZINDEX + 1;

    /**
     * @type {number}
     * @private
     */
    this.gridSize_ = options["gridSize"] || 60;

    /**
     * @private
     */
    this.minClusterSize_ = options["minimumClusterSize"] || 2;

    /**
     * @type {?number}
     * @private
     */
    this.maxZoom_ = options["maxZoom"] || null;

    this.styles_ = options["styles"] || [];

    /**
     * @type {string}
     * @private
     */
    this.imagePath_ = options["imagePath"] || this.MARKER_CLUSTER_IMAGE_PATH_;

    /**
     * @type {string}
     * @private
     */
    this.imageExtension_ =
      options["imageExtension"] || this.MARKER_CLUSTER_IMAGE_EXTENSION_;

    /**
     * @type {boolean}
     * @private
     */
    this.zoomOnClick_ = true;

    if (options["zoomOnClick"] != undefined) {
      this.zoomOnClick_ = options["zoomOnClick"];
    }

    /**
     * @type {boolean}
     * @private
     */
    this.averageCenter_ = false;

    if (options["averageCenter"] != undefined) {
      this.averageCenter_ = options["averageCenter"];
    }

    this.setupStyles_();

    this.setMap(map);

    /**
     * @type {number}
     * @private
     */
    this.prevZoom_ = this.map_.getZoom();

    // Add the map event listeners
    var that = this;
    google.maps.event.addListener(this.map_, "zoom_changed", function() {
      // Determines map type and prevent illegal zoom levels
      var zoom = that.map_.getZoom();
      var minZoom = that.map_.minZoom || 0;
      var maxZoom = Math.min(
        that.map_.maxZoom || 100,
        that.map_.mapTypes[that.map_.getMapTypeId()].maxZoom
      );
      zoom = Math.min(Math.max(zoom, minZoom), maxZoom);

      if (that.prevZoom_ != zoom) {
        that.prevZoom_ = zoom;
        that.resetViewport();
      }
    });

    google.maps.event.addListener(this.map_, "idle", function() {
      that.redraw();
    });

    // Finally, add the markers
    if (
      opt_markers &&
      (opt_markers.length || Object.keys(opt_markers).length)
    ) {
      this.addMarkers(opt_markers, false);
    }
  }

  /**
   * Extends a objects prototype by anothers.
   *
   * @param {Object} obj1 The object to be extended.
   * @param {Object} obj2 The object to extend with.
   * @return {Object} The new extended object.
   * @ignore
   */
  extend(obj1, obj2) {
    return function(object) {
      for (var property in object.prototype) {
        this.prototype[property] = object.prototype[property];
      }
      return this;
    }.apply(obj1, [obj2]);
  }

  /**
   * Implementaion of the interface method.
   * @ignore
   */
  onAdd() {
    this.setReady_(true);
  }

  /**
   * Implementaion of the interface method.
   * @ignore
   */
  draw() {}

  /**
   * Sets up the styles object.
   *
   * @private
   */
  setupStyles_() {
    if (this.styles_.length) {
      return;
    }

    for (var i = 0, size; (size = this.sizes[i]); i++) {
      this.styles_.push({
        url: this.imagePath_ + (i + 1) + "." + this.imageExtension_,
        height: size,
        width: size
      });
    }
  }

  /**
   *  Fit the map to the bounds of the markers in the clusterer.
   */
  fitMapToMarkers() {
    var markers = this.getMarkers();
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0, marker; (marker = markers[i]); i++) {
      bounds.extend(marker.getPosition());
    }

    this.map_.fitBounds(bounds);
  }

  /**
   * @param {number} zIndex
   */
  setZIndex(zIndex) {
    this.zIndex_ = zIndex;
  }

  /**
   * @return {number}
   */
  getZIndex() {
    return this.zIndex_;
  }

  /**
   *  Sets the styles.
   *
   *  @param {Object} styles The style to set.
   */
  setStyles(styles) {
    this.styles_ = styles;
  }

  /**
   *  Gets the styles.
   *
   *  @return {Object} The styles object.
   */
  getStyles() {
    return this.styles_;
  }

  /**
   * Whether zoom on click is set.
   *
   * @return {boolean} True if zoomOnClick_ is set.
   */
  isZoomOnClick() {
    return this.zoomOnClick_;
  }

  /**
   * Whether average center is set.
   *
   * @return {boolean} True if averageCenter_ is set.
   */
  isAverageCenter() {
    return this.averageCenter_;
  }

  /**
   *  Returns the array of markers in the clusterer.
   *
   *  @return {Array.<google.maps.Marker>} The markers.
   */
  getMarkers() {
    return this.markers_;
  }

  /**
   *  Returns the number of markers in the clusterer
   *
   *  @return {Number} The number of markers.
   */
  getTotalMarkers() {
    return this.markers_.length;
  }

  /**
   *  Sets the max zoom for the clusterer.
   *
   *  @param {number} maxZoom The max zoom level.
   */
  setMaxZoom(maxZoom) {
    this.maxZoom_ = maxZoom;
  }

  /**
   *  Gets the max zoom for the clusterer.
   *
   *  @return {number} The max zoom level.
   */
  getMaxZoom() {
    return this.maxZoom_;
  }

  /**
   *  The function for calculating the cluster icon image.
   *
   *  @param {Array.<google.maps.Marker>} markers The markers in the clusterer.
   *  @param {number} numStyles The number of styles available.
   *  @return {Object} A object properties: 'text' (string) and 'index' (number).
   *  @private
   */
  calculator_(markers, numStyles) {
    var index = 0;
    var count = markers.length;
    var dv = count;
    while (dv !== 0) {
      dv = parseInt(dv / 10, 10);
      index++;
    }

    index = Math.min(index, numStyles);
    return {
      text: count,
      index: index
    };
  }

  /**
   * Set the calculator function.
   *
   * @param {function(Array, number)} calculator The function to set as the
   *     calculator. The function should return a object properties:
   *     'text' (string) and 'index' (number).
   *
   */
  setCalculator(calculator) {
    this.calculator_ = calculator;
  }

  /**
   * Get the calculator function.
   *
   * @return {function(Array, number)} the calculator function.
   */
  getCalculator() {
    return this.calculator_;
  }

  /**
   * Add an array of markers to the clusterer.
   *
   * @param {Array.<google.maps.Marker>} markers The markers to add.
   * @param {boolean=} opt_nodraw Whether to redraw the clusters.
   */
  addMarkers(markers, opt_nodraw) {
    if (markers.length) {
      for (let i = 0, marker; (marker = markers[i]); i++) {
        this.pushMarkerTo_(marker);
      }
    } else if (Object.keys(markers).length) {
      for (let marker in markers) {
        this.pushMarkerTo_(markers[marker]);
      }
    }
    if (!opt_nodraw) {
      this.redraw();
    }
  }

  /**
   * Pushes a marker to the clusterer.
   *
   * @param {google.maps.Marker} marker The marker to add.
   * @private
   */
  pushMarkerTo_(marker) {
    marker.isAdded = false;
    if (marker["draggable"]) {
      // If the marker is draggable add a listener so we update the clusters on
      // the drag end.
      var that = this;
      google.maps.event.addListener(marker, "dragend", function() {
        marker.isAdded = false;
        that.repaint();
      });
    }
    this.markers_.push(marker);
  }

  /**
   * Adds a marker to the clusterer and redraws if needed.
   *
   * @param {google.maps.Marker} marker The marker to add.
   * @param {boolean=} opt_nodraw Whether to redraw the clusters.
   */
  addMarker(marker, opt_nodraw) {
    this.pushMarkerTo_(marker);
    if (!opt_nodraw) {
      this.redraw();
    }
  }

  /**
   * Removes a marker and returns true if removed, false if not
   *
   * @param {google.maps.Marker} marker The marker to remove
   * @return {boolean} Whether the marker was removed or not
   * @private
   */
  removeMarker_(marker) {
    var index = -1;
    if (this.markers_.indexOf) {
      index = this.markers_.indexOf(marker);
    } else {
      for (var i = 0, m; (m = this.markers_[i]); i++) {
        if (m == marker) {
          index = i;
          break;
        }
      }
    }

    if (index == -1) {
      // Marker is not in our list of markers.
      return false;
    }

    marker.setMap(null);

    this.markers_.splice(index, 1);

    return true;
  }

  /**
   * Remove a marker from the cluster.
   *
   * @param {google.maps.Marker} marker The marker to remove.
   * @param {boolean=} opt_nodraw Optional boolean to force no redraw.
   * @return {boolean} True if the marker was removed.
   */
  removeMarker(marker, opt_nodraw) {
    var removed = this.removeMarker_(marker);

    if (!opt_nodraw && removed) {
      this.resetViewport();
      this.redraw();
      return true;
    } else {
      return false;
    }
  }

  /**
   * Removes an array of markers from the cluster.
   *
   * @param {Array.<google.maps.Marker>} markers The markers to remove.
   * @param {boolean=} opt_nodraw Optional boolean to force no redraw.
   */
  removeMarkers(markers, opt_nodraw) {
    // create a local copy of markers if required
    // (removeMarker_ modifies the getMarkers() array in place)
    var markersCopy = markers === this.getMarkers() ? markers.slice() : markers;
    var removed = false;

    for (var i = 0, marker; (marker = markersCopy[i]); i++) {
      var r = this.removeMarker_(marker);
      removed = removed || r;
    }

    if (!opt_nodraw && removed) {
      this.resetViewport();
      this.redraw();
      return true;
    }
  }

  /**
   * Sets the clusterer's ready state.
   *
   * @param {boolean} ready The state.
   * @private
   */
  setReady_(ready) {
    if (!this.ready_) {
      this.ready_ = ready;
      this.createClusters_();
    }
  }

  /**
   * Returns the number of clusters in the clusterer.
   *
   * @return {number} The number of clusters.
   */
  getTotalClusters() {
    return this.clusters_.length;
  }

  /**
   * Returns the google map that the clusterer is associated with.
   *
   * @return {google.maps.Map} The map.
   */
  getMap() {
    return this.map_;
  }

  /**
   * Sets the google map that the clusterer is associated with.
   *
   * @param {google.maps.Map} map The map.
   */
  setMap(map) {
    this.map_ = map;
  }

  /**
   * Returns the size of the grid.
   *
   * @return {number} The grid size.
   */
  getGridSize() {
    return this.gridSize_;
  }

  /**
   * Sets the size of the grid.
   *
   * @param {number} size The grid size.
   */
  setGridSize(size) {
    this.gridSize_ = size;
  }

  /**
   * Returns the min cluster size.
   *
   * @return {number} The grid size.
   */
  getMinClusterSize() {
    return this.minClusterSize_;
  }

  /**
   * Sets the min cluster size.
   *
   * @param {number} size The grid size.
   */
  setMinClusterSize(size) {
    this.minClusterSize_ = size;
  }

  /**
   * Extends a bounds object by the grid size.
   *
   * @param {google.maps.LatLngBounds} bounds The bounds to extend.
   * @return {google.maps.LatLngBounds} The extended bounds.
   */
  getExtendedBounds(bounds) {
    var projection = this.getProjection();

    // Turn the bounds into latlng.
    var tr = new google.maps.LatLng(
      bounds.getNorthEast().lat(),
      bounds.getNorthEast().lng()
    );
    var bl = new google.maps.LatLng(
      bounds.getSouthWest().lat(),
      bounds.getSouthWest().lng()
    );

    // Convert the points to pixels and the extend out by the grid size.
    var trPix = projection.fromLatLngToDivPixel(tr);
    trPix.x += this.gridSize_;
    trPix.y -= this.gridSize_;

    var blPix = projection.fromLatLngToDivPixel(bl);
    blPix.x -= this.gridSize_;
    blPix.y += this.gridSize_;

    // Convert the pixel points back to LatLng
    var ne = projection.fromDivPixelToLatLng(trPix);
    var sw = projection.fromDivPixelToLatLng(blPix);

    // Extend the bounds to contain the new bounds.
    bounds.extend(ne);
    bounds.extend(sw);

    return bounds;
  }

  /**
   * Determins if a marker is contained in a bounds.
   *
   * @param {google.maps.Marker} marker The marker to check.
   * @param {google.maps.LatLngBounds} bounds The bounds to check against.
   * @return {boolean} True if the marker is in the bounds.
   * @private
   */
  isMarkerInBounds_(marker, bounds) {
    return bounds.contains(marker.getPosition());
  }

  /**
   * Clears all clusters and markers from the clusterer.
   */
  clearMarkers() {
    this.resetViewport(true);

    // Set the markers a empty array.
    this.markers_ = [];
  }

  /**
   * Clears all existing clusters and recreates them.
   * @param {boolean} opt_hide To also hide the marker.
   */
  resetViewport(opt_hide) {
    // Remove all the clusters
    for (let i = 0, cluster; (cluster = this.clusters_[i]); i++) {
      cluster.remove();
    }

    // Reset the markers to not be added and to be invisible.
    for (let i = 0, marker; (marker = this.markers_[i]); i++) {
      marker.isAdded = false;
      if (opt_hide) {
        marker.setMap(null);
      }
    }

    this.clusters_ = [];
  }

  /**
   *
   */
  repaint() {
    var oldClusters = this.clusters_.slice();
    this.clusters_.length = 0;
    this.resetViewport();
    this.redraw();

    // Remove the old clusters.
    // Do it in a timeout so the other clusters have been drawn first.
    setTimeout(function() {
      for (var i = 0, cluster; (cluster = oldClusters[i]); i++) {
        cluster.remove();
      }
    }, 0);
  }

  /**
   * Redraws the clusters.
   */
  redraw() {
    this.createClusters_();
  }

  /**
   * Calculates the distance between two latlng locations in km.
   * @see http://www.movable-type.co.uk/scripts/latlong.html
   *
   * @param {google.maps.LatLng} p1 The first lat lng point.
   * @param {google.maps.LatLng} p2 The second lat lng point.
   * @return {number} The distance between the two points in km.
   * @private
   */
  distanceBetweenPoints_(p1, p2) {
    if (!p1 || !p2) {
      return 0;
    }

    var R = 6371; // Radius of the Earth in km
    var dLat = ((p2.lat() - p1.lat()) * Math.PI) / 180;
    var dLon = ((p2.lng() - p1.lng()) * Math.PI) / 180;
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((p1.lat() * Math.PI) / 180) *
        Math.cos((p2.lat() * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
  }

  /**
   * Add a marker to a cluster, or creates a new cluster.
   *
   * @param {google.maps.Marker} marker The marker to add.
   * @private
   */
  addToClosestCluster_(marker) {
    var distance = 40000; // Some large number
    var clusterToAddTo = null;
    for (var i = 0, cluster; (cluster = this.clusters_[i]); i++) {
      var center = cluster.getCenter();
      if (center) {
        var d = this.distanceBetweenPoints_(center, marker.getPosition());
        if (d < distance) {
          distance = d;
          clusterToAddTo = cluster;
        }
      }
    }

    if (clusterToAddTo && clusterToAddTo.isMarkerInClusterBounds(marker)) {
      clusterToAddTo.addMarker(marker);
    } else {
      var newCluster = new Cluster(this);
      newCluster.addMarker(marker);
      this.clusters_.push(newCluster);
    }
  }

  /**
   * Creates the clusters.
   *
   * @private
   */
  createClusters_() {
    if (!this.ready_) {
      return;
    }

    // Get our current map view bounds.
    // Create a new bounds object so we don't affect the map.
    var mapBounds = new google.maps.LatLngBounds(
      this.map_.getBounds().getSouthWest(),
      this.map_.getBounds().getNorthEast()
    );
    var bounds = this.getExtendedBounds(mapBounds);

    for (var i = 0, marker; (marker = this.markers_[i]); i++) {
      if (!marker.isAdded && this.isMarkerInBounds_(marker, bounds)) {
        this.addToClosestCluster_(marker);
      }
    }
  }
}

/**
 * A cluster that contains markers.
 *
 * @param {MarkerClusterer} markerClusterer The markerclusterer that this
 *     cluster is associated with.
 * @constructor
 * @ignore
 */
class Cluster {
  constructor(markerClusterer) {
    this.markerClusterer_ = markerClusterer;
    this.map_ = markerClusterer.getMap();
    this.gridSize_ = markerClusterer.getGridSize();
    this.minClusterSize_ = markerClusterer.getMinClusterSize();
    this.averageCenter_ = markerClusterer.isAverageCenter();
    this.center_ = null;
    this.markers_ = [];
    this.bounds_ = null;
    this.clusterIcon_ = new ClusterIcon(
      this,
      markerClusterer.getStyles(),
      markerClusterer.getGridSize()
    );
  }

  /**
   * Determins if a marker is already added to the cluster.
   *
   * @param {google.maps.Marker} marker The marker to check.
   * @return {boolean} True if the marker is already added.
   */
  isMarkerAlreadyAdded(marker) {
    if (this.markers_.indexOf) {
      return this.markers_.indexOf(marker) != -1;
    } else {
      for (var i = 0, m; (m = this.markers_[i]); i++) {
        if (m == marker) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Add a marker the cluster.
   *
   * @param {google.maps.Marker} marker The marker to add.
   * @return {boolean} True if the marker was added.
   */
  addMarker(marker) {
    if (this.isMarkerAlreadyAdded(marker)) {
      return false;
    }

    if (!this.center_) {
      this.center_ = marker.getPosition();
      this.calculateBounds_();
    } else {
      if (this.averageCenter_) {
        var l = this.markers_.length + 1;
        var lat =
          (this.center_.lat() * (l - 1) + marker.getPosition().lat()) / l;
        var lng =
          (this.center_.lng() * (l - 1) + marker.getPosition().lng()) / l;
        this.center_ = new google.maps.LatLng(lat, lng);
        this.calculateBounds_();
      }
    }

    marker.isAdded = true;
    this.markers_.push(marker);

    var len = this.markers_.length;
    if (len < this.minClusterSize_ && marker.getMap() != this.map_) {
      // Min cluster size not reached so show the marker.
      marker.setMap(this.map_);
    }

    if (len == this.minClusterSize_) {
      // Hide the markers that were showing.
      for (var i = 0; i < len; i++) {
        this.markers_[i].setMap(null);
      }
    }

    if (len >= this.minClusterSize_) {
      marker.setMap(null);
    }

    this.updateIcon();
    return true;
  }

  /**
   * Returns the marker clusterer that the cluster is associated with.
   *
   * @return {MarkerClusterer} The associated marker clusterer.
   */
  getMarkerClusterer() {
    return this.markerClusterer_;
  }

  /**
   * Returns the bounds of the cluster.
   *
   * @return {google.maps.LatLngBounds} the cluster bounds.
   */
  getBounds() {
    var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
    var markers = this.getMarkers();
    for (var i = 0, marker; (marker = markers[i]); i++) {
      bounds.extend(marker.getPosition());
    }
    return bounds;
  }

  /**
   * Removes the cluster
   */
  remove() {
    this.clusterIcon_.remove();
    this.markers_.length = 0;
    delete this.markers_;
  }

  /**
   * Returns the number of markers in the cluster.
   *
   * @return {number} The number of markers in the cluster.
   */
  getSize() {
    return this.markers_.length;
  }

  /**
   * Returns a list of the markers in the cluster.
   *
   * @return {Array.<google.maps.Marker>} The markers in the cluster.
   */
  getMarkers() {
    return this.markers_;
  }

  /**
   * Returns the center of the cluster.
   *
   * @return {google.maps.LatLng} The cluster center.
   */
  getCenter() {
    return this.center_;
  }

  /**
   * Calculated the extended bounds of the cluster with the grid.
   *
   * @private
   */
  calculateBounds_() {
    var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
    this.bounds_ = this.markerClusterer_.getExtendedBounds(bounds);
  }

  /**
   * Determines if a marker lies in the clusters bounds.
   *
   * @param {google.maps.Marker} marker The marker to check.
   * @return {boolean} True if the marker lies in the bounds.
   */
  isMarkerInClusterBounds(marker) {
    return this.bounds_.contains(marker.getPosition());
  }

  /**
   * Returns the map that the cluster is associated with.
   *
   * @return {google.maps.Map} The map.
   */
  getMap() {
    return this.map_;
  }

  /**
   * Updates the cluster icon
   */
  updateIcon() {
    var zoom = this.map_.getZoom();
    var mz = this.markerClusterer_.getMaxZoom();

    if (mz && zoom > mz) {
      // The zoom is greater than our max zoom so show all the markers in cluster.
      for (var i = 0, marker; (marker = this.markers_[i]); i++) {
        marker.setMap(this.map_);
      }
      return;
    }

    if (this.markers_.length < this.minClusterSize_) {
      // Min cluster size not yet reached.
      this.clusterIcon_.hide();
      return;
    }

    var numStyles = this.markerClusterer_.getStyles().length;
    var sums = this.markerClusterer_.getCalculator()(this.markers_, numStyles);
    this.clusterIcon_.setCenter(this.center_);
    this.clusterIcon_.setSums(sums);
    this.clusterIcon_.show();
  }
}

/**
 * A cluster icon
 *
 * @param {Cluster} cluster The cluster to be associated with.
 * @param {Object} styles An object that has style properties:
 *     'url': (string) The image url.
 *     'height': (number) The image height.
 *     'width': (number) The image width.
 *     'anchor': (Array) The anchor position of the label text.
 *     'textColor': (string) The text color.
 *     'textSize': (number) The text size.
 *     'backgroundPosition: (string) The background postition x, y.
 * @param {number=} opt_padding Optional padding to apply to the cluster icon.
 * @constructor
 * @extends google.maps.OverlayView
 * @ignore
 */
class ClusterIcon {
  constructor(cluster, styles, opt_padding) {
    cluster.getMarkerClusterer().extend(ClusterIcon, google.maps.OverlayView);

    this.styles_ = styles;
    this.padding_ = opt_padding || 0;
    this.cluster_ = cluster;
    this.center_ = null;
    this.map_ = cluster.getMap();
    this.div_ = null;
    this.sums_ = null;
    this.visible_ = false;

    this.setMap(this.map_);
  }

  /**
   * Triggers the clusterclick event and zoom's if the option is set.
   */
  triggerClusterClick() {
    var clusterBounds = this.cluster_.getBounds();
    var markerClusterer = this.cluster_.getMarkerClusterer();

    // Trigger the clusterclick event.
    google.maps.event.trigger(
      markerClusterer.map_,
      "clusterclick",
      this.cluster_
    );

    if (markerClusterer.isZoomOnClick()) {
      // Zoom into the cluster.
      this.map_.fitBounds(clusterBounds);
      this.map_.setCenter(clusterBounds.getCenter());
    }
  }

  /**
   * Adding the cluster icon to the dom.
   * @ignore
   */
  onAdd() {
    this.div_ = document.createElement("DIV");
    if (this.visible_) {
      var pos = this.getPosFromLatLng_(this.center_);
      this.div_.style.cssText = this.createCss(pos);
      this.div_.innerHTML = this.sums_.text;
    }

    var panes = this.getPanes();
    panes.overlayMouseTarget.appendChild(this.div_);

    var that = this;
    google.maps.event.addDomListener(this.div_, "click", function() {
      that.triggerClusterClick();
    });
  }

  /**
   * Returns the position to place the div dending on the latlng.
   *
   * @param {google.maps.LatLng} latlng The position in latlng.
   * @return {google.maps.Point} The position in pixels.
   * @private
   */
  getPosFromLatLng_(latlng) {
    var pos = this.getProjection().fromLatLngToDivPixel(latlng);
    pos.x -= parseInt(this.width_ / 2, 10);
    pos.y -= parseInt(this.height_ / 2, 10);
    return pos;
  }

  /**
   * Draw the icon.
   * @ignore
   */
  draw() {
    if (this.visible_) {
      var pos = this.getPosFromLatLng_(this.center_);
      this.div_.style.top = pos.y + "px";
      this.div_.style.left = pos.x + "px";
    }
  }

  /**
   * Hide the icon.
   */
  hide() {
    if (this.div_) {
      this.div_.style.display = "none";
    }
    this.visible_ = false;
  }

  /**
   * Position and show the icon.
   */
  show() {
    if (this.div_) {
      var pos = this.getPosFromLatLng_(this.center_);
      this.div_.style.cssText = this.createCss(pos);
      this.div_.style.display = "";
    }
    this.visible_ = true;
  }

  /**
   * Remove the icon from the map
   */
  remove() {
    this.setMap(null);
  }

  /**
   * Implementation of the onRemove interface.
   * @ignore
   */
  onRemove() {
    if (this.div_ && this.div_.parentNode) {
      this.hide();
      this.div_.parentNode.removeChild(this.div_);
      this.div_ = null;
    }
  }

  /**
   * Set the sums of the icon.
   *
   * @param {Object} sums The sums containing:
   *   'text': (string) The text to display in the icon.
   *   'index': (number) The style index of the icon.
   */
  setSums(sums) {
    this.sums_ = sums;
    this.text_ = sums.text;
    this.index_ = sums.index;
    if (this.div_) {
      this.div_.innerHTML = sums.text;
    }

    this.useStyle();
  }

  /**
   * Sets the icon to the the styles.
   */
  useStyle() {
    var index = Math.max(0, this.sums_.index - 1);
    index = Math.min(this.styles_.length - 1, index);
    var style = this.styles_[index];
    this.url_ = style["url"];
    this.height_ = style["height"];
    this.width_ = style["width"];
    this.textColor_ = style["textColor"];
    this.anchor_ = style["anchor"];
    this.textSize_ = style["textSize"];
    this.backgroundPosition_ = style["backgroundPosition"];
  }

  /**
   * Sets the center of the icon.
   *
   * @param {google.maps.LatLng} center The latlng to set as the center.
   */
  setCenter(center) {
    this.center_ = center;
  }

  /**
   * Create the css text based on the position of the icon.
   *
   * @param {google.maps.Point} pos The position.
   * @return {string} The css style text.
   */
  createCss(pos) {
    var style = [];
    style.push("z-index:" + this.cluster_.markerClusterer_.getZIndex() + ";");
    style.push("background-image:url(" + this.url_ + ");");
    var backgroundPosition = this.backgroundPosition_
      ? this.backgroundPosition_
      : "0 0";
    style.push("background-position:" + backgroundPosition + ";");

    if (typeof this.anchor_ === "object") {
      if (
        typeof this.anchor_[0] === "number" &&
        this.anchor_[0] > 0 &&
        this.anchor_[0] < this.height_
      ) {
        style.push(
          "height:" +
            (this.height_ - this.anchor_[0]) +
            "px; padding-top:" +
            this.anchor_[0] +
            "px;"
        );
      } else {
        style.push(
          "height:" + this.height_ + "px; line-height:" + this.height_ + "px;"
        );
      }
      if (
        typeof this.anchor_[1] === "number" &&
        this.anchor_[1] > 0 &&
        this.anchor_[1] < this.width_
      ) {
        style.push(
          "width:" +
            (this.width_ - this.anchor_[1]) +
            "px; padding-left:" +
            this.anchor_[1] +
            "px;"
        );
      } else {
        style.push("width:" + this.width_ + "px; text-align:center;");
      }
    } else {
      style.push(
        "height:" +
          this.height_ +
          "px; line-height:" +
          this.height_ +
          "px; width:" +
          this.width_ +
          "px; text-align:center;"
      );
    }

    var txtColor = this.textColor_ ? this.textColor_ : "black";
    var txtSize = this.textSize_ ? this.textSize_ : 11;

    style.push(
      "cursor:pointer; top:" +
        pos.y +
        "px; left:" +
        pos.x +
        "px; color:" +
        txtColor +
        "; position:absolute; font-size:" +
        txtSize +
        "px; font-family:Arial,sans-serif; font-weight:bold"
    );
    return style.join("");
  }
}

/* harmony default export */ __webpack_exports__["default"] = (MarkerClusterer);


/***/ }),

/***/ "./src/app/services/google-map.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/google-map.service.ts ***!
  \************************************************/
/*! exports provided: GoogleMapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapService", function() { return GoogleMapService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _google_markerclusterer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @google/markerclusterer */ "./node_modules/@google/markerclusterer/dist/markerclusterer.esm.js");



var GoogleMapService = /** @class */ (function () {
    function GoogleMapService() {
        this.gmarkers = [];
        this.locations = [];
        this.image = [];
        this.vehicleData = [];
        this.vehicleModel = {
            BIKE: "M576.13 307.48c-21.1,0 -39.76,10.6 -50.96,26.75l-16.14 -6.91 0 -10.11 50.55 -20.97 12.98 -29.92 5.96 0 29.9 35.51c1.15,1.37 2.8,2.07 4.46,2.07 1.33,0 2.66,-0.45 3.76,-1.37 2.46,-2.07 2.78,-5.75 0.7,-8.21l-23.56 -28 3.75 0c3.22,0 5.83,-2.61 5.83,-5.84 0,-3.22 -2.61,-5.83 -5.83,-5.83l-8.77 0 7.64 -3.62c3.61,-1.71 5.17,-6.03 3.49,-9.66l-4.4 -9.48c-1.19,-2.56 -3.74,-4.2 -6.55,-4.23l-80.94 -0.73c-0.02,0 -0.05,0 -0.07,0 -2.02,0 -3.96,0.84 -5.34,2.32 -0.15,0.16 -16.68,17.28 -47.19,21.26 -1.99,-3.71 -5.27,-8.92 -10.1,-14.1 -11.73,-12.59 -27.15,-19.24 -44.58,-19.24 -3.53,0 -7.2,0.28 -10.89,0.81 -0.02,0 -0.04,0 -0.06,0.01 -0.86,0.13 -21.22,3.3 -49.41,11.2 -0.31,0.02 -0.75,0.03 -1.29,0.03 -3.23,0 -11.08,-0.58 -14.14,-5.91 -0.22,-0.39 -0.44,-0.84 -0.63,-1.34l13.48 -2.45c3.76,-0.68 6.26,-4.29 5.58,-8.06 -0.69,-3.76 -4.29,-6.26 -8.05,-5.58l-10.87 1.98c1.67,-6.87 5.44,-16.25 12.94,-29.03 1.56,-2.67 1.28,-6.03 -0.71,-8.4 -1.42,-1.67 -3.48,-2.59 -5.58,-2.59 -0.86,0 -1.74,0.15 -2.57,0.47 -0.81,0.31 -20.01,7.69 -37.42,25.89 -11.15,11.65 -22.98,29.38 -26.69,54.21 0.98,-1.93 2.21,-3.8 3.76,-5.54 0,0 19.91,13 8.67,31.81l-13.19 0.01c0.32,3.82 0.82,7.76 1.52,11.83 0.27,1.59 1.06,3.04 2.25,4.13l16.29 14.97c-53.56,-7.18 -72.83,27.57 -72.83,27.57 -4.01,5.35 -1.99,11.12 4.49,8.06 -4.35,8.47 -6.83,18.06 -6.83,28.22 0,34.19 27.81,62 61.99,62 34.19,0 62,-27.81 62,-62 0,-2.53 -0.17,-5.03 -0.46,-7.49l75.74 0 -29.9 -22.29c0,0 -35.49,3.43 -60.8,-24.12 2.65,-0.13 5.54,-0.22 8.61,-0.22 20.52,0 49.1,3.7 68.66,21.3 0.26,0.23 0.53,0.44 0.8,0.62l67.1 45.23c1.24,0.83 2.66,1.24 4.07,1.24 1.89,0 3.75,-0.73 5.16,-2.13l27.04 -27.04 16.12 6.91c-0.34,2.62 -0.53,5.28 -0.53,8 0,34.18 27.81,61.99 61.99,61.99 34.18,0 61.99,-27.81 61.99,-61.99 0,-34.19 -27.81,-62 -61.99,-62zm-152.81 -307.48c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm85.7 233.01l45.69 -21.66 -6.18 14.23 -39.51 16.39 0 -8.96zm-238.5 109.84c-18.09,0 -32.81,-14.72 -32.81,-32.82 0,-18.1 14.72,-32.82 32.81,-32.82 0.77,0 1.52,0.04 2.27,0.09l-13.58 27.99 26.25 12.73 12.56 -25.88c3.36,5.15 5.32,11.29 5.32,17.89 0.01,18.1 -14.72,32.82 -32.82,32.82zm305.6 0c-16.61,0 -30.36,-12.4 -32.51,-28.42l24.83 10.63 11.49 -26.81 -26.89 -11.52c5.93,-5.88 14.09,-9.52 23.09,-9.52 18.09,0 32.81,14.73 32.81,32.83 0,18.09 -14.72,32.81 -32.82,32.81z",
            AUTO: "M616.86 348.41c0,-7.3 7.37,-13.21 16.4,-13.21l0 26.43c-9.03,-0.01 -16.4,-5.94 -16.4,-13.22zm-193.54 -348.41c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm-127.32 318.34c25.7,0 46.6,20.91 46.6,46.62 0,25.73 -20.9,46.63 -46.6,46.63 -25.71,0 -46.63,-20.9 -46.63,-46.63 0,-25.7 20.93,-46.62 46.63,-46.62zm0 81.5c19.22,0 34.86,-15.64 34.86,-34.87 0,-19.24 -15.64,-34.88 -34.86,-34.88 -19.25,0 -34.9,15.64 -34.9,34.88 0.01,19.23 15.67,34.87 34.9,34.87zm264.56 -69.12c19.57,-16.79 44.61,-13.97 45.66,-13.86l-1.19 9.86c19.53,4.43 34.19,21.89 34.19,42.75 0,24.17 -19.7,43.85 -43.87,43.85 -23.16,0 -42.14,-18.07 -43.72,-40.81 -0.67,4.08 -1.11,8.4 -1.28,13.03l-11.72 -0.36c0.76,-24.29 8.15,-42.61 21.93,-54.46zm34.79 70.86c17.72,0 32.12,-14.39 32.12,-32.11 0,-17.71 -14.4,-32.11 -32.12,-32.11 -17.72,0 -32.09,14.41 -32.09,32.11 -0.02,17.7 14.37,32.11 32.09,32.11zm-317.44 -290.39l158.64 0 41.12 0 92.04 0 0 23.5 -21.57 0c16.96,10.48 41.16,46.99 41.16,46.99 0,0 47.73,93.33 17.61,133.19 -76.38,-1.97 -70.49,70.49 -70.49,70.49l-188.4 0c2.43,-6.34 3.79,-13.21 3.79,-20.39 0,-31.71 -25.79,-57.52 -57.52,-57.52 -31.71,0 -57.51,25.82 -57.51,57.52 0,2.53 0.21,5.02 0.54,7.47 -18.07,-12.77 -29.91,-33.79 -29.91,-57.59l0 -133.17c0,-38.94 31.55,-70.49 70.5,-70.49zm172.5 253.77l51.88 0c0,0 -8.91,-71.34 51.91,-89.21 0,0 -1.95,-92.97 -47,-128.78l-56.79 0 0 217.99 0 0zm-132.33 -89.21c60.82,17.88 51.9,89.21 51.9,89.21l51.89 0 0 -217.98 -103.79 0 0 128.77z",
            BOBCAT: "M303.39 269.89l149.29 53.73c11.81,10.17 -3.56,12.67 11.24,28.75 6.94,7.55 13.51,11.34 16.56,23.43 4.41,17.49 -0.53,18.92 7.47,35.58 30.63,7.14 79.07,-9.22 113.81,-9.22 -13.89,-20.74 -19.77,-5.62 -38.43,-16.94l-67.94 -61.25c-7.7,-21.6 17.45,-12.44 -62.45,-39.06 -14.18,-4.71 -27.45,-10.17 -43.06,-15.37l-86.49 -30.41 0 30.76zm119.93 -269.89c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm-89.19 139.71l3.08 0c11.15,0 12.06,16.63 12.31,27.68l-27.69 0c0.91,-10.85 1.21,-27.68 12.3,-27.68zm58.45 0l39.99 0c0.31,13.87 3.48,16.24 6.15,27.68l-39.99 0c-0.45,-5.52 -4.48,-23.95 -6.15,-27.68zm-36.91 0l24.61 0c3.21,6.69 5.93,17.69 6.15,27.68l-24.6 0c-0.65,-7.65 -3.53,-22.2 -6.16,-27.68zm-18.46 -30.77c2.11,9.05 3.08,9.39 3.08,21.54l-12.31 0c6.92,-14.42 -2.72,-12.78 9.23,-21.54zm49.22 0l36.91 0c1.7,7.33 3.24,15.47 6.15,21.54l-39.98 0c-0.24,-10.49 -1.86,-12.05 -3.08,-21.54zm-36.91 0l24.61 0c2.11,9.05 3.07,9.39 3.07,21.54l-24.6 0c-0.23,-10.49 -1.87,-12.05 -3.08,-21.54zm-46.14 61.52c11.04,5.3 18.02,8.38 33.95,9.11 34.7,1.58 4.24,10.23 30.65,12.42l0 -12.3 21.53 0c7.94,16.53 -1.28,23.09 18.46,27.69 -0.65,-7.65 -3.53,-22.19 -6.16,-27.69l39.99 0c9.32,40.04 7.26,48.69 30.75,49.22l-27.27 -99.13c-12.32,-48.89 56.49,-42.37 -117.3,-42.37 -17.4,0 -11.22,55.18 -24.6,83.05zm218.39 61.53c0,9.85 -2.78,11.68 -6.62,17.98 -3.64,5.95 -5.63,9.94 -8.75,15.86 9.69,6.48 62.5,58.43 67.67,58.43 16.34,0 10.04,-7.58 25.55,5.06 12.94,10.54 11.36,7.54 11.36,28.77 28.52,0 20.11,1.68 36.91,3.09 12,-51.52 2.68,-23.53 2.04,-55.72 -0.11,-5.54 7.78,-28.12 -18.18,-48.11 -7.18,-5.53 -18.2,-6.91 -30,-6.91 0,-11.49 1.81,-39.99 -15.38,-39.99 -13.3,0 -12.4,6.15 -21.53,6.15 -17.95,0 -26.51,-5.77 -43.07,-6.15l0 21.54zm-93.67 81.46c10.75,0 19.46,8.7 19.46,19.45 0,10.74 -8.71,19.45 -19.46,19.45 -10.73,0 -19.44,-8.71 -19.44,-19.45 0,-10.75 8.71,-19.45 19.44,-19.45zm0 -26c-25.09,0 -45.44,20.35 -45.44,45.45 0,25.1 20.35,45.45 45.44,45.45 25.11,0 45.46,-20.35 45.46,-45.45 0,-25.1 -20.35,-45.45 -45.46,-45.45zm-136.81 26c10.73,0 19.44,8.7 19.44,19.45 0,10.74 -8.71,19.45 -19.44,19.45 -10.74,0 -19.45,-8.71 -19.45,-19.45 0,-10.75 8.71,-19.45 19.45,-19.45zm-49.44 -139.91l9.24 0 0 9.23 -9.24 0 0 -9.23zm-49.21 123.05c19.17,12.83 12.71,18.75 46.14,21.53 5.44,-23.37 26.92,-39.36 55.38,-39.99l0 -107.67c-23.88,-5.56 -38.14,-18.45 -67.68,-18.45 0,11.28 -2.13,25.86 -3.44,39.62 -4.63,48.47 -20.51,-13.91 -30.4,104.96zm98.65 -9.14c-25.1,0 -45.46,20.35 -45.46,45.45 0,25.1 20.36,45.45 45.46,45.45 25.1,0 45.45,-20.35 45.45,-45.45 0,-25.1 -20.35,-45.45 -45.45,-45.45zm12.09 -6.25c43.87,10.22 39.99,46.2 39.99,70.74l33.83 0c-5.67,-24.36 -4.34,-46.39 20.1,-62.95 23.68,-16.05 27.12,-7.79 53.72,-7.79 -1.26,-15.19 -2.44,-11.7 -31.16,-21.12 -19.98,-6.54 -104.31,-39.39 -116.48,-40.39l0 61.51z",
            BUS: "M607.89 180.38l-28.93 0 0 99.52 11.57 0 0 45.7 -21.99 0.01 0 -151.01c0.01,-30.68 -24.86,-55.54 -55.54,-55.54l-182.83 0c-30.67,0 -55.54,24.86 -55.54,55.54l0 148.11 -19.09 0 0 -48.61 12.15 0 0 -99.5 -28.92 0 0 99.5 12.15 0 0 53.26 23.71 0 0 108.77c0,21.01 11.69,39.32 28.93,48.75l0 28.75 48.6 0 0 -21.97 137.69 0 0 21.97 48.61 0 0 -28.19c17.86,-9.22 30.08,-27.84 30.08,-49.32l0 -105.9 26.62 0 0 -50.32 12.73 0 0 -99.52 0 0zm-184.57 -180.38c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm-65.38 71.18l129.59 0 0 30.1 -129.59 0 0 -30.1zm13.88 303.18l-71.73 0 0 -32.38 71.73 0 0 32.38zm173.57 0l-71.74 0 0 -32.38 71.74 0 0 32.38zm0 -104.14c0,0 -13.89,43.98 -124.96,43.98 -111.1,0 -122.67,-43.98 -122.67,-43.98l0 -152.76 247.63 0 0 152.76z",
            CAR: "M589.12 448.77l0 -23.39 -59.43 0 0 23.39c0.17,41.39 59.43,41.87 59.43,0zm-165.8 -448.77c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm197.38 317.2l0 -82.04c-0.08,-28.59 -22.87,-43.7 -35.82,-45.36l-32.37 -83.55c-6.05,-16 -19.29,-29.6 -44.31,-29.73l-45.61 0 -77.98 0 -46.46 0c-24.9,0.13 -38.13,13.73 -44.31,29.73l-32.37 83.55c-12.83,1.66 -35.58,16.77 -35.54,45.36l0 82.04c0,13.44 10.93,24.37 24.37,24.37l346.03 0c13.45,0 24.37,-10.89 24.37,-24.37zm-328.56 -35.78c-0.05,0 -0.05,0 -0.09,0 -0.04,0 -0.04,0 -0.08,0 -15.1,0 -27.29,-12.59 -27.25,-28.1 -0.08,-15.56 12.06,-28.15 27.09,-28.15 0.08,0 0.16,0 0.24,0 0.09,0 0.16,0 0.25,0 14.98,0 27.13,12.59 27.09,28.15 0.04,15.51 -12.19,28.1 -27.25,28.1zm131.18 -92.39l-0.28 0 -101.3 0c-8.94,0 -14.98,-9.1 -11.49,-17.35l17.06 -40.33c2.56,-6.38 7.51,-16.04 18.32,-16.2l155.02 0c10.64,0.16 13.32,6.13 18.31,16.2l17.06 40.33c3.49,8.25 -2.56,17.35 -11.49,17.35l-101.21 0 0 0zm129.27 94.42c-0.04,0 -0.04,0 -0.08,0 -0.04,0 -0.04,0 -0.08,0 -15.19,0 -27.42,-12.59 -27.5,-28.1 0.08,-15.56 12.23,-28.15 27.38,-28.15 0.08,0 0.16,0 0.24,0 0.08,0 0.16,0 0.24,0 14.87,0 27.01,12.59 27.09,28.15 -0.12,15.51 -12.34,28.1 -27.29,28.1zm-235.92 105.88l0 -23.39 -59.18 0 0 23.39c-0.08,41.87 59.18,41.39 59.18,0z",
            CRANE: "M349.18 465.04l42.28 0 0 11.8 -42.28 0 0 -11.8zm74.14 -465.04c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm-204.95 182.34c0,33.42 -6.47,27.54 67.86,27.54 14.68,0 11.81,-13.83 11.81,-28.51 0,-6.9 -5.68,-10.83 -12.79,-10.83l-54.09 0c-7.93,0 -12.79,3.74 -12.79,11.8zm173.08 180.97l0 27.53 -34.4 0c2.76,-2.4 4.98,-4.38 7.99,-6.75 3.05,-2.42 5.62,-4.74 8.59,-7.16l13.12 -10.47c2.59,-2.31 1.14,-2.2 4.7,-3.15zm-42.28 13.77l0 -30.48 37.39 0c-1.65,2.45 -1.67,2.21 -3.93,3.93 -2,1.53 -2.84,2.48 -4.79,4.06 -3.25,2.66 -6.05,4.63 -9.25,7.48 -2.44,2.18 -16.49,14.23 -19.42,15.01zm42.28 -73.77l0 28.53 -34.4 0 34.4 -28.53zm-42.28 14.75l0 -31.47 38.37 0 -38.37 31.47zm42.28 -73.75l0 27.53 -34.4 0c4.55,-3.97 30.36,-26.45 34.4,-27.53zm-42.28 13.77l0 -30.49 37.39 0 -8.72 8c-3.77,3.07 -25.21,21.57 -28.67,22.49zm249.82 -91.47l8.84 0 0 51.14 -8.84 0 0 -51.14zm-207.54 17.7l0 28.53 -34.4 0c1.65,-2.47 1.65,-2.22 3.91,-3.96 7.97,-6.11 23.35,-19.78 30.49,-24.57zm-42.28 14.74l0 -32.44 39.34 0c-1.36,2.05 -6.88,6.34 -9.41,8.3 -8,6.25 -22.61,19.26 -29.93,24.14zm21.64 -123.91l18.69 66.88 -38.35 0c1.28,-5.52 17.67,-64.01 19.66,-66.88zm-38.35 66.88l-81.63 0c3.07,-4.58 68.43,-55.54 78.9,-64.69l26.27 -18.98c-0.8,1.95 -0.31,0.69 -0.95,2.99l-22.59 80.68zm50.16 -91.47l25.15 11.24c40.01,16.62 87.14,39.31 127.99,56.91l48.49 21.35c1.64,0.83 1.71,0.91 2.93,1.97l-178.99 0 -12.68 -45.35c-2.28,-7.86 -4.26,-14.86 -6.56,-22.94 -1.23,-4.31 -2.18,-7.75 -3.27,-11.49 -1.09,-3.76 -2.57,-7.77 -3.06,-11.69zm-164.25 99.34c0,6.64 -1.75,16.72 7.88,16.72l103.25 0 0 250.79 -45.22 0c-2.01,0 -5.05,2.55 -5.92,3.93 -1.69,2.65 -7.3,35.41 7.87,35.41l168.19 0c11.82,0 9.83,-15.61 9.83,-25.57 0,-7.47 -2.56,-13.77 -9.83,-13.77l-43.29 0 0 -250.79 179.99 0 0 50.16c0,6.04 -6.88,-2.57 -6.88,20.66 0,6.25 2.37,15.34 4.3,20.28 1.58,4.04 2.84,4.41 4.34,7.45 2.1,4.28 1.02,5.56 7.09,5.7l0.98 9.82c7.7,1.81 12.78,3.61 12.78,11.82 0,6.85 -3.49,11.47 -10.27,10.33 -11.56,-1.93 -5.9,-10.33 -12.34,-10.33 -9.16,0 0.01,17.7 10.82,17.7 5.91,0 11.19,0.6 15.8,-5.83 5.42,-7.55 4.96,-17.56 -1.29,-24.42 -4.63,-5.09 -8.43,-1.48 -8.62,-9.09 8.08,-0.18 3.21,-1.99 8.1,-7.65 7.87,-9.06 6.66,-22.88 6.66,-35.62 0,-4.71 -3.13,-7.86 -6.88,-8.86l0 -52.12c3,0 4.49,0.33 6.91,-1.94 2.5,-2.36 4.98,-20.25 -3.21,-22.42 -10.25,-2.71 0.64,5.07 -26.04,-6.42 -10.65,-4.58 -20.42,-8.88 -30.75,-13.49l-60.58 -26.97c-23.75,-9.85 -51.54,-23.55 -75.58,-33.57l-30.73 -13.54c-3.54,-1.67 -12.57,-6.27 -16.06,-6.56 -0.62,-7.48 -12.33,-15.56 -18.81,-1.09 -2.27,5.07 -22.44,19.77 -26.74,23.41 -3.23,2.74 -6.04,4.75 -9.3,7.41l-64.46 52.58c-6.17,5.22 -12.77,9.56 -18.57,14.87 -5.26,4.82 -4.58,2.98 -13.65,3.07 -6.07,0.08 -9.77,2.01 -9.77,7.94z",
            FOCKLIFTS: "M638.29 388.46c0,3.16 -2.56,5.73 -5.72,5.73l-82.05 0c-3.17,0 -5.73,-2.57 -5.73,-5.73l0 -82.04c0,-3.16 2.56,-5.73 5.73,-5.73l82.05 0c3.16,0 5.72,2.57 5.72,5.73l0 82.04zm-214.97 -388.46c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm46.05 274.06c-24.9,-40.69 -90.36,-149.72 -91.02,-150.8 -3.33,-5.58 -9.44,-9.05 -15.94,-9.05l-106.04 0c-10.23,0 -18.56,8.33 -18.56,18.56l0 102.19 -29.84 0c-7.07,0 -12.83,5.75 -12.83,12.82l0 118.38c0,7.07 5.76,12.83 12.83,12.83l13.43 0c1.75,0 3.16,-1.41 3.16,-3.15 0,-24.36 19.81,-44.17 44.16,-44.17 24.35,0 44.16,19.81 44.16,44.17 0,0.83 0.33,1.63 0.93,2.22 0.59,0.59 1.38,0.93 2.22,0.93l35.41 0c1.74,0 3.15,-1.41 3.15,-3.15 0,-24.36 19.81,-44.17 44.16,-44.17 24.35,0 44.16,19.81 44.16,44.17 0,1.74 1.41,3.15 3.15,3.15l9.61 0c9.19,0 16.66,-7.48 16.66,-16.66l0 -79.89c0,-3.27 -1.53,-6.04 -2.96,-8.38zm-105.36 -0.2l0 -17.26c0,-2.97 -2.41,-5.37 -5.37,-5.37l-30.42 0 0 -50.81c0,-2.97 -2.41,-5.37 -5.38,-5.37l-17 0c-2.97,0 -5.37,2.4 -5.37,5.37l0 73.44 -25.52 0 -0.01 -122.51 76.93 0 73.21 122.51 -61.07 0 0 0zm-67.67 101.97c0,-15.25 -12.36,-27.62 -27.62,-27.62 -15.25,0 -27.62,12.37 -27.62,27.62 0,15.26 12.37,27.63 27.62,27.63 15.26,0 27.62,-12.37 27.62,-27.63zm130.02 0c0,-15.25 -12.36,-27.62 -27.61,-27.62 -15.26,0 -27.62,12.37 -27.62,27.62 0,15.26 12.36,27.63 27.62,27.63 15.25,0 27.61,-12.37 27.61,-27.63zm199.89 1.87l-111.52 0c-6.64,0 -12.03,-5.39 -12.03,-12.04l0 -258.39c0,-6.65 5.39,-12.04 12.03,-12.04 6.65,0 12.04,5.39 12.04,12.04l0 246.35 99.48 0c6.65,0 12.04,5.4 12.04,12.04 -0.01,6.65 -5.39,12.04 -12.04,12.04zm12.03 -165.63c0,3.16 -2.56,5.72 -5.72,5.72l-82.05 0c-3.17,0 -5.73,-2.56 -5.73,-5.72l0 -82.05c0,-3.17 2.56,-5.73 5.73,-5.73l82.05 0c3.16,0 5.72,2.56 5.72,5.73l0 82.05z",
            LOADER: "M301.98 146.22c-11.14,1.99 -19.4,9.58 -22.69,18.71 -3.18,8.84 -1.77,66.71 -1.8,80.4 -0.07,25.86 12.66,29.05 32.67,49.55 9.54,9.76 11.57,11.7 29.45,11.66 13.7,-0.03 27.4,-0.01 41.1,-0.01 13.47,0 26.99,0.57 35.19,-6.85l9.8 -10.27c10.24,-10.24 25.62,-19.98 19.79,-40.36 -1.97,-6.88 -34.7,-70.51 -40.72,-82.59 -4.9,-9.84 -9.5,-17.04 -21.23,-19.83 -5.81,-1.39 -74.97,-1.6 -81.56,-0.41zm121.34 -146.22c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm-203 349.85c7.42,-65.86 102.19,-105.8 155.64,-39.56 13.64,16.9 20.53,40.57 17.29,68.33l31.75 0c-2.03,-15.95 -1.65,-28.33 3.28,-42.85 5.9,-17.32 10.7,-19.72 17.66,-30.62 -15.26,-1.36 -20.61,-4.85 -28.25,-12.85 -7.34,-7.65 -9.95,-19.05 -8.06,-32.13 -17.2,2.16 -79.16,3.99 -93.19,-1.81 -11.63,-4.78 -29.04,-24.36 -39.29,-34.69 -7.67,-7.73 -7.31,-10.1 -10.62,-13.69 -26.6,4.93 -58.29,21.05 -61.81,46.62 -1.81,13.32 -0.33,38.91 -0.32,53.51 0.01,16.76 -0.05,28.38 15.92,39.74zm290.72 -151.53c-39.47,6.48 -31.11,5.25 -61.22,34.76 -5.32,5.21 -20.55,18.83 -23.67,24.75 -7.48,14.14 1.16,27.58 11.99,31.41 16.01,5.65 25.81,-8.69 32.03,-14.8 8.35,-8.22 16.09,-15.74 24.42,-23.99 8.34,-8.25 9.66,-5.9 26.13,-9.41 6.26,-1.33 5.39,-2 8.86,1.45 23.36,23.16 44.94,19.22 76.74,19.22 15.03,0 33.9,3.07 36.3,-12.12 1.23,-7.73 -3.28,-13.14 -7.83,-15.48 -7.2,-3.69 -12.97,-0.2 -18.02,-6.59 -3.08,-3.92 -28.02,-55.3 -32.51,-64.3 -6.09,-12.19 -9.24,-24.2 -26.86,-15.31 -16.92,8.55 -31.01,15.78 -40.26,31.92 -4.03,7.03 -3.73,10.74 -6.1,18.49zm-8.63 93.24c-37.61,4.78 -69.01,38.32 -63.55,81.95 4.63,37.07 38.96,68.35 81.96,62.95 36.73,-4.6 68.66,-39.03 62.99,-81.73 -4.93,-37.04 -38.45,-68.63 -81.4,-63.17zm3.02 44.04c-39.2,9.21 -24.61,65.02 12.42,56.84 13.85,-3.06 25.88,-17.44 21.85,-34.97 -3.1,-13.57 -17.22,-25.87 -34.27,-21.87zm-207.63 -44.04c-37.45,4.77 -69.05,38.34 -63.58,81.73 4.7,37.23 38.83,68.59 82,63.17 36.98,-4.64 68.39,-38.91 62.98,-81.73 -4.66,-37.01 -38.69,-68.6 -81.4,-63.17zm3.03 44.04c-14.31,3.37 -26.82,16.35 -22.56,35 8.48,37.13 65.56,24.73 56.89,-13.19 -3.1,-13.53 -17.2,-25.83 -34.33,-21.81zm5.9 -197.2l-0.02 50.24 105.93 -0.07 -36.16 -72.97 -69.74 -0.04 -0.01 22.84z",
            "SMALL TRUCK": "M650.22 318.41l-7.34 0 -46.66 -82.87c-1.77,-3.14 -5.13,-4.99 -9.06,-4.99l-54.88 0 10.87 -57.8c1.3,-6.9 -3.24,-12.49 -10.14,-12.49l-290.23 0.12c-7.46,0 -13.5,6.04 -13.5,13.51 0,7.46 6.04,13.51 13.5,13.51l159.74 0c6.36,1.08 11.2,6.62 11.2,13.29 0,7.07 -5.44,12.86 -12.36,13.44l-201.8 0.01c-7.45,0 -13.5,6.05 -13.5,13.51 0,7.45 6.05,13.5 13.5,13.5l202.37 0c6.65,0.84 11.79,6.51 11.79,13.39 0,6.9 -5.19,12.59 -11.88,13.39l-182.46 0c-7.47,0 -13.51,6.05 -13.51,13.51 0,7.46 6.04,13.51 13.51,13.51l42.29 0 -22.26 118.33c-1.3,6.9 3.24,12.5 10.14,12.5l19.93 0c-3.85,28.56 15.58,51.34 44.52,51.34 28.95,0 56.95,-22.78 63.85,-51.34l105.19 0 29.74 0c-3.85,28.56 15.58,51.34 44.52,51.34 28.94,0 56.95,-22.78 63.85,-51.34l8.86 0 11.07 0c6.9,0 13.56,-5.6 14.85,-12.5l4.02 -21.39c1.21,-6.41 -2.63,-11.7 -8.72,-12.41l9.14 -48.56c1.3,-6.91 -3.25,-12.51 -10.15,-12.51zm-226.9 -318.41c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm-69.85 363.42c-3.03,16.13 -18.64,29.27 -34.77,29.27 -16.15,0 -26.8,-13.14 -23.76,-29.27 3.03,-16.14 18.63,-29.27 34.77,-29.27 16.14,0 26.8,13.13 23.76,29.27zm243.3 0c-3.04,16.13 -18.64,29.27 -34.77,29.27 -16.14,0 -26.8,-13.14 -23.76,-29.27 3.03,-16.14 18.63,-29.27 34.78,-29.27 16.13,0 26.79,13.13 23.75,29.27zm-81.04 -104.45l11.83 -62.87 48.64 0 35.41 62.87 -95.88 0z",
            TANKER: "M197.14 334.92c-2.38,-28 -8.08,-103.23 5.89,-125.81 11.02,-17.78 30,-15.17 54.46,-16.5 53.17,-2.92 82.39,-2.63 135.39,-0.07 60.39,2.91 73.28,-1.22 62.33,142.37l-258.07 0.01zm226.18 -334.92c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm-97.6 348.77c-0.14,0.15 0.1,5.89 -6.97,2.67 -3.85,-1.75 -3.21,-3.15 -3.15,-7.98 -1.11,-24.95 -27.01,-45.53 -55.9,-43.23 -25.83,2.05 -45.22,23.35 -47.52,50.22 -21.55,0.11 -21.72,0.4 -21.46,-21.3 0.15,-12.29 -1.37,-27.95 1.79,-37.94 13.96,-3.54 446.3,-3.71 461.47,-0.05 2.29,7.74 3.9,50.34 -1.26,55.77 -3.31,3.55 2.39,1.82 -7.68,3.51 -1.12,0.19 -6.85,0.21 -8.31,0.19 -5.56,-0.03 -11.18,-0.17 -16.76,-0.22l-2.43 -6.48c-7.23,-24.25 -21.84,-43.76 -51.73,-43.87 -43.73,-0.17 -49.65,42.11 -54.17,50.41l-79.16 0.14c-2.75,-4.81 -3.12,-13.29 -6.93,-20.78 -22.89,-44.95 -91.35,-39.23 -99.83,18.94zm272.86 -119.26c2.53,1.51 3.07,0.24 0.91,1.85 -0.46,0.19 -1.12,0.02 -1.37,0.56l-17.73 0.84c-12.21,-0.15 -59.71,1.96 -67.11,-0.75 -6.48,1.71 -2.2,1.32 -1.9,-15.4 0.18,-10.3 -2.58,-40.77 2.2,-48.18l52.59 0.29c2.15,7.18 11.25,22.11 15.72,29.69 4.85,8.18 13.86,23.5 16.69,31.1zm-24.88 128.41c2.52,-15.84 -5.32,-18 -16.73,-10.07l0.47 10.73c8.49,4.21 8.71,4.18 16.26,-0.66zm-302.15 -13.54l-12.41 0.42c-3.81,14.75 3.52,19.3 15.24,14.23 1.76,-9.44 1.76,-7.97 -2.83,-14.65zm100.16 1.06c-6.15,18.49 9.39,19.67 14.9,12.74 5.21,-6.58 -0.66,-17.74 -14.9,-12.74zm0.84 -228.44l-80.61 -0.14c0.89,-22.72 8.22,-18.24 40.54,-18.27 23.24,-0.01 39.25,-6.32 40.07,18.41zm-12.61 243.34c10.29,25.53 50.63,8.69 37.45,-16.95 -11.77,-22.88 -47.52,-8 -37.45,16.95zm56.83 -2.08c-6.22,46.16 -83.31,40.23 -75.56,-12.03 6.79,-45.68 82.47,-39.23 75.56,12.03zm-145.25 -25.56c-26.06,-8.02 -34.18,32.47 -12.98,39.11 29.66,9.3 38.08,-31.38 12.98,-39.11zm32.74 25.56c-6.34,46.03 -83.39,40.51 -75.43,-12.02 7.27,-47.98 82.47,-39.07 75.43,12.02zm266.59 -24.91c-25.02,-9.61 -36.24,31.14 -12.4,38.62 23.81,7.47 42.92,-26.89 12.4,-38.62zm32.35 26.99c-9.26,48.61 -85.61,35.03 -74.9,-16.38 9.78,-46.95 84.71,-35.02 74.9,16.38zm-102.82 -115.72c25.18,4.17 79.99,2.25 102.93,2.24 8.09,0 11.49,-0.92 16.09,-3.61 0.56,-11.83 -24.23,-50.99 -32.98,-65.97 -14.78,-25.3 2.18,-22.86 -72.7,-22.68 -20.58,0.05 -15.98,5.7 -15.88,47.42l2.54 42.6zm-34.14 30.32c4.88,-157.42 -27.96,-145.16 91.23,-145.41 40.54,-0.09 34.4,-1.02 64.41,53.92 22.38,40.96 27.55,35.25 27.18,92.05l-182.82 -0.56z",
            TRUCK: "M233.83 351.18l0 -177.4c0,-9.85 7.99,-17.84 17.85,-17.84l177.31 0c9.85,0 17.84,7.99 17.84,17.84l0 177.4c0,3.28 -2.66,5.96 -5.94,5.96l-201.11 0c-3.28,0 -5.95,-2.68 -5.95,-5.96zm189.49 -351.18c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm-46.32 352.51c0,20.46 -16.57,37.02 -37.03,37.02 -20.43,0 -37.01,-16.56 -37.01,-37.02 0,-20.43 16.58,-37.01 37.01,-37.01 20.46,0 37.03,16.58 37.03,37.01zm-18.5 0c0,-10.22 -8.3,-18.5 -18.53,-18.5 -10.21,0 -18.5,8.28 -18.5,18.5 0,10.23 8.29,18.52 18.5,18.52 10.23,0 18.53,-8.29 18.53,-18.52zm-50.4 -37.01l-82.96 0c-3.29,0 -5.95,2.67 -5.95,5.94l0 18.06c0,3.28 2.66,5.94 5.95,5.94l66.49 0c1.74,-11.9 7.74,-22.42 16.47,-29.94zm262.59 37.01c0,20.46 -16.56,37.02 -37.02,37.02 -20.43,0 -37.02,-16.56 -37.02,-37.02 0,-20.43 16.59,-37.01 37.02,-37.01 20.46,0 37.02,16.58 37.02,37.01zm-18.51 0c0,-10.22 -8.28,-18.5 -18.51,-18.5 -10.22,0 -18.5,8.28 -18.5,18.5 0,10.23 8.28,18.52 18.5,18.52 10.23,0 18.51,-8.29 18.51,-18.52zm83.96 -31.07l0 18.06c0,3.28 -2.66,5.94 -5.95,5.94l-48.17 0c-3.44,-23.62 -23.78,-41.85 -48.34,-41.85 -24.57,0 -44.9,18.23 -48.36,41.85l-96.99 0c-1.74,-11.9 -7.75,-22.42 -16.46,-29.94l91.96 0 0 -170.18c0,-6.58 5.34,-11.9 11.91,-11.9l56.17 0c15.82,0 30.59,7.85 39.44,20.96l36.21 53.64c5.31,7.86 8.15,17.13 8.15,26.62l0 80.86 14.48 0c3.29,0 5.95,2.67 5.95,5.94zm-60.36 -112.04l-28.95 -41.15c-1.12,-1.6 -2.92,-2.54 -4.87,-2.54l-45.17 0c-3.28,0 -5.94,2.67 -5.94,5.95l0 41.15c0,3.29 2.66,5.95 5.94,5.95l74.13 0c4.82,0 7.64,-5.43 4.86,-9.36z",
            COMPRESSORS: "M365.57 176.98c0,-7.96 -6.47,-14.44 -14.44,-14.44 -7.98,0 -14.44,6.48 -14.44,14.44 0,7.98 6.46,14.45 14.44,14.45 7.97,0 14.44,-6.47 14.44,-14.45zm57.75 -176.98c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm195.98 215.08c-1.74,-10.43 -10.74,-18.09 -21.32,-18.11l-349.32 0c-10.56,0.02 -19.56,7.65 -21.32,18.06 -4.02,25.07 -6.09,50.41 -6.19,75.81 0.1,25.38 2.17,50.71 6.19,75.76 1.74,10.43 10.74,18.09 21.32,18.1l23.39 0c3.68,-40.93 37.98,-72.29 79.07,-72.29 41.1,0 75.39,31.36 79.06,72.29l50.9 0 0 -7.22c0,-3.98 3.23,-7.22 7.22,-7.22 3.99,0 7.22,3.24 7.22,7.22l0 50.54 57.77 0 0 -50.54c0,-3.98 3.23,-7.22 7.21,-7.22 4,0 7.23,3.24 7.23,7.22l0 7.22 30.25 0c10.56,-0.01 19.56,-7.64 21.32,-18.05 4.02,-25.07 6.08,-50.43 6.19,-75.82 -0.1,-25.37 -2.17,-50.7 -6.19,-75.75zm-318.72 17.99l-21.67 0c-3.99,0 -7.22,-3.23 -7.22,-7.21 0,-3.99 3.23,-7.23 7.22,-7.23l21.67 0c3.98,0 7.21,3.24 7.21,7.23 0,3.98 -3.23,7.21 -7.21,7.21zm267.15 0l-238.28 0c-3.98,0 -7.21,-3.23 -7.21,-7.21 0,-3.99 3.23,-7.23 7.21,-7.23l238.28 0c3.99,0 7.22,3.24 7.22,7.23 0,3.98 -3.23,7.21 -7.22,7.21zm-216.61 93.87c-26.29,0 -49.99,15.83 -60.04,40.12 -10.05,24.29 -4.5,52.23 14.09,70.82 18.58,18.58 46.54,24.15 70.82,14.08 24.29,-10.05 40.11,-33.75 40.11,-60.04 -0.04,-35.88 -29.11,-64.95 -64.98,-64.98zm0 101.08c-19.94,0 -36.1,-16.16 -36.1,-36.1 0,-19.94 16.16,-36.11 36.1,-36.11 19.93,0 36.1,16.17 36.1,36.1 -0.02,19.95 -16.17,36.09 -36.1,36.11zm144.4 21.66c0,4 3.23,7.23 7.23,7.23l43.31 0c4,0 7.23,-3.23 7.23,-7.23l0 -7.21 -57.77 0 0 7.21zm-122.74 -57.76c0,-11.96 -9.7,-21.65 -21.66,-21.65 -11.96,0 -21.66,9.69 -21.66,21.65 0,11.97 9.7,21.66 21.66,21.66 11.96,0 21.66,-9.69 21.66,-21.66zm-100.72 -267.15l-14.81 0 0 57.76 48.38 0c-19.15,-13.37 -31.43,-34.51 -33.57,-57.76zm223.46 57.76c35.89,0 64.98,-29.09 64.98,-64.99 0,-35.89 -29.09,-64.98 -64.98,-64.98 -35.89,0 -64.98,29.09 -64.98,64.98 0.04,35.88 29.11,64.96 64.98,64.99zm41.51 -79.33c1.89,-0.32 3.83,0.13 5.39,1.23 1.57,1.12 2.62,2.8 2.94,4.69 0.47,2.78 0.7,5.6 0.7,8.42 0,3.99 -3.23,7.22 -7.21,7.22 -4,0 -7.23,-3.23 -7.23,-7.22 0,-2.02 -0.16,-4.02 -0.49,-6.01 -0.67,-3.93 1.97,-7.65 5.9,-8.33zm-7.53 -19.64c2.83,2.82 2.83,7.38 0,10.21l-14.48 14.5c1.42,2.89 2.15,6.05 2.17,9.27 0,11.97 -9.71,21.67 -21.67,21.67 -11.96,0 -21.66,-9.7 -21.66,-21.67 0,-11.96 9.7,-21.65 21.66,-21.65 3.22,0.01 6.4,0.75 9.28,2.16l14.51 -14.5c2.81,-2.82 7.38,-2.82 10.19,0.01zm-84.52 33.98c0.01,-14.86 6.56,-28.98 17.92,-38.58 11.37,-9.6 26.38,-13.7 41.05,-11.24 3.63,0.68 6.18,4.01 5.87,7.7 -0.32,3.7 -3.37,6.56 -7.07,6.62 -0.41,0 -0.81,-0.03 -1.22,-0.09 -10.47,-1.76 -21.19,1.19 -29.31,8.04 -8.1,6.86 -12.79,16.93 -12.8,27.55 0,4 -3.23,7.23 -7.22,7.23 -3.99,0 -7.22,-3.23 -7.22,-7.23zm96.06 64.99l48.35 0 0 -57.76 -14.81 0c-2.13,23.25 -14.4,44.38 -33.54,57.76zm-40.47 -70.04l-0.05 -0.08c-2.86,-2.79 -7.43,-2.75 -10.25,0.1 -2.81,2.84 -2.8,7.43 0.03,10.25 2.83,2.83 7.41,2.84 10.25,0.04 2.85,-2.82 2.9,-7.4 0.1,-10.26l-0.08 -0.05zm-103.92 70.04l53.38 0c-11.59,-8.13 -20.82,-19.21 -26.71,-32.08 -5.88,12.87 -15.1,23.94 -26.67,32.08zm-45.53 0c35.89,0 64.98,-29.09 64.98,-64.99 0,-35.89 -29.09,-64.98 -64.98,-64.98 -35.89,0 -64.98,29.09 -64.98,64.98 0.03,35.88 29.11,64.96 64.98,64.99zm-49.77 -61.71l0 -0.02c-0.87,-1.71 -1.01,-3.69 -0.41,-5.52 0.6,-1.82 1.9,-3.32 3.61,-4.19 6.18,-2.75 12.9,-4.07 19.67,-3.86 0.97,-2.49 2.28,-4.84 3.9,-6.97 -2.85,-2.79 -6.22,-5 -9.93,-6.49 -3.79,-1.27 -5.83,-5.36 -4.57,-9.15 1.27,-3.79 5.36,-5.84 9.15,-4.57 6.3,2.41 11.98,6.22 16.6,11.12 2.45,-1.06 5.03,-1.78 7.67,-2.12 -0.04,-3.99 -0.85,-7.94 -2.42,-11.62 -1.74,-3.56 -0.29,-7.86 3.26,-9.64 3.55,-1.77 7.86,-0.35 9.66,3.19 2.77,6.17 4.09,12.9 3.87,19.67 2.48,0.97 4.83,2.27 6.95,3.88 2.83,-2.77 5.04,-6.11 6.49,-9.8 0.79,-2.46 2.82,-4.31 5.34,-4.86 2.52,-0.55 5.15,0.29 6.89,2.2 1.73,1.9 2.32,4.58 1.54,7.05 -2.36,6.36 -6.18,12.06 -11.18,16.66 1.08,2.45 1.81,5.05 2.17,7.7 3.99,0 7.94,-0.82 11.61,-2.39 3.55,-1.8 7.91,-0.36 9.7,3.2 1.8,3.57 0.36,7.92 -3.2,9.71 -5.72,2.59 -11.92,3.94 -18.19,3.95 -0.48,0 -1,-0.06 -1.5,-0.07 -0.96,2.49 -2.27,4.82 -3.89,6.94 2.85,2.8 6.22,5 9.94,6.5 3.34,1.14 5.38,4.53 4.8,8.01 -0.58,3.5 -3.6,6.05 -7.13,6.05 -0.77,0 -1.54,-0.13 -2.26,-0.37 -6.3,-2.41 -11.98,-6.21 -16.61,-11.11 -2.44,1.06 -5.01,1.76 -7.66,2.11 0.03,4 0.84,7.96 2.42,11.65 1.73,3.56 0.28,7.86 -3.27,9.64 -3.54,1.77 -7.86,0.35 -9.66,-3.19 -2.76,-6.18 -4.08,-12.9 -3.86,-19.67 -2.49,-0.97 -4.84,-2.28 -6.97,-3.89 -2.8,2.84 -5.01,6.22 -6.5,9.93 -1.27,3.79 -5.36,5.83 -9.15,4.56 -3.79,-1.26 -5.83,-5.36 -4.56,-9.15 2.41,-6.29 6.21,-11.97 11.11,-16.6 -1.06,-2.44 -1.77,-5.02 -2.12,-7.66 -3.98,0.01 -7.93,0.83 -11.6,2.4 -1.72,0.85 -3.69,1 -5.52,0.4 -1.82,-0.6 -3.32,-1.9 -4.19,-3.61z",
            BATTERY: "M208.92 205.21l0 246.3 428.81 -0.01 0 -246.29 -428.81 0zm214.4 -205.21c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm-169.95 117.8l104.13 0 0 -41.22 -104.13 0 0 41.22zm235.77 0l104.13 0 0 -41.22 -104.13 0 0 41.22zm-150.74 131.45l0 0 -18.99 0 0 18.98 -27.96 0 0 -18.98 -18.99 0 0 -27.97 18.99 0 0 -18.99 27.96 0 0 18.99 18.99 0 0 27.97zm97.89 100.99l-25.94 -10.44 19.12 -47.5 -53.71 0 34.59 -85.91 25.94 10.44 -19.13 47.51 53.71 -0.01 -34.58 85.91zm137.89 -100.99l-65.95 0 0 -27.97 65.95 0 0 27.97z",
            "WELDING MACHINES": "M336.41 377.24l-12.79 0c-16.05,0 -29.47,13.47 -31.99,27.51 -2.29,12.78 2.55,49.66 -2.19,57.3 -4.36,7.03 -13.98,7.07 -18.7,0.44 -3.59,-5.04 -2.11,-19.69 -2.11,-28.02 0,-19.84 0,-39.67 0,-59.49 5.82,-0.49 12.44,-7.03 15.62,-10.76 3.64,-4.29 6.98,-11.64 6.98,-19.37l0 -57.99 -67.78 0 0 57.99c0,15.1 13.58,29.37 22.6,30.13 0,10.85 -0.99,83.57 0.88,90.24 4.12,14.86 17.06,23.88 30.63,24.98l5.54 0c7.41,-0.6 14.69,-3.65 20.49,-9.48 6.8,-6.85 10.28,-13.13 10.24,-25.91 -0.05,-11.3 0,-22.6 0,-33.9 -0.01,-20.56 2.54,-21.09 22.58,-21.09l0 67.78 22.6 0 0 22.6 67.78 0 0 -22.6 90.38 0 0 22.6 67.78 0 0 -22.6 24.1 0 0 -248.52 -272.64 0 0 158.16zm86.91 -377.24c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm-84.66 67.76c-12.04,0 -24.1,0.03 -36.15,0 -12.31,-0.05 -20.82,3.05 -28.58,7.55 -15,8.68 -27.89,27.41 -27.89,45.16l0 39.17 -22.6 0 0 45.18 67.78 0 0 -45.18 -22.6 0c0,-16.21 -2.21,-41.3 5.11,-52.9 3.11,-4.93 8.65,-10.4 14.25,-12.86 11.98,-5.27 36.33,-3.54 50.68,-3.54 0.8,9.45 16.07,22.6 29.39,22.6 13.65,0 17.1,-3.34 30.02,-7.63l61.32 -21.52c3.05,-1.21 9.32,-3.71 12.58,-3.98 -2.08,-2.85 -19.26,-7.61 -23.78,-9.36l-49.56 -17.47c-8.46,-2.79 -18.01,-7.15 -27.68,-7.82l-4.84 0c-5.65,0.42 -11.28,2.39 -16.69,6.99 -3.73,3.17 -10.27,9.79 -10.76,15.61zm65.53 259.82c0,18.92 22.59,14.43 22.59,3.01 0,-18.92 -22.59,-14.42 -22.59,-3.01zm0 -77.57l90.37 0 0 -22.59 -90.37 0 0 22.59z",
            "TOWED STREET SWEEPER": "M237.28 439.23c24.7,2.37 82.42,39.97 109.99,32.9 27.29,-7.02 17.01,-4.11 41.77,1.32 -7.49,-25.63 -13.6,-19.39 -7.6,-54.95l-12.15 -7.35c7.84,-20.91 19.55,-50.13 39.12,-51.2 -9.44,10.26 -32.47,31.5 -29.95,49.44l22.82 3.75c14.56,-20.24 11.72,-38.99 40.28,-47.53 38.59,-11.53 50.64,24.62 57.76,31.32 30.03,-13.15 -6.26,-17.58 50.91,-29.84 8.26,-1.76 24.69,-3.8 34.55,-7.81l6.65 -5.18c0.35,-0.35 0.75,-0.97 1.12,-1.32 6.73,-6.53 12.79,-7.9 20.3,-2.74l-13.11 2.64c-6.38,0.48 -4.28,1.91 -5.23,9.38 -10.05,1.06 -5.15,0.13 -8.85,3.63 -12.38,-0.8 -40.53,6 -52.92,10.33 -24.43,8.55 -1.33,12.61 -33.56,27.06l3.51 24.64c7.32,-1.41 5.67,-3.08 11.81,-4.18 18.97,-3.45 9.02,6.37 32.74,-10.25l2.75 -2.57c9.22,-6.69 -7.89,3.5 3.22,-2.11 10.08,5.06 6.68,5.95 16,12.24 14.2,-5.29 26.92,-15.05 31.99,-29.84 31.21,3.13 28.84,-13.56 9.16,-22.47l2.15 -6.08 2.36 -2.37c5.52,-13.47 -9.36,-8.99 4.76,-17.74 -9.65,-2.49 -6.48,-0.23 -10.32,-9.39 -2.18,-5.23 -3.3,-10.61 -4.39,-15.85l-73.99 12.77c-7.94,-14.78 -3.82,-18.22 -26.62,-18.12 -19.29,0.1 -54.28,10.29 -69.53,20.19 -10.28,6.68 -17.01,15.05 -25.46,20.16l-0.34 -82.61c-8.78,2.98 -87.74,41.59 -92.91,51.58 -21.4,41.35 -16.52,111.38 -17.83,119.42 -2.78,17 3.99,-11.49 -1.16,4.2l-1.95 3.78c-6.81,-33.38 2.66,-102.88 16.47,-129.03 -11.3,-1.85 -75.82,2.37 -83.15,6.43 -8.68,5.92 -13.81,34.44 -15.11,44.95 -0.58,0.76 -3.8,0.44 -5.43,13.26l2.36 33.48c0.1,-0.39 0.79,1.51 1.49,1.99 1.55,3.63 -6.56,6.02 5.73,2.28l0.83 -0.05 -0.48 0.24c-0.74,0.34 -1.69,1.02 -2.35,1.39 -0.81,0.46 -1.91,2.93 -2.54,2.22 -0.72,-0.81 -1.83,1.7 -2.66,2.65 19,4.67 7.41,6.59 26.99,10.94zm186.04 -439.23c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm143.38 186.47l0.49 -7.19c-5.4,0.92 -5.45,-0.34 -3.81,7.05l-10.07 -0.95 -0.77 12.72 23.83 0.82 0.35 -12.75 -10.02 0.3zm-42.8 -84.05l8.19 -1.56 -0.92 6.76 -16.76 57.87c-27.88,-1.33 -40.14,-5.95 -67.87,1.11 -18.83,4.79 -39.71,11.14 -58.33,14.26 2.31,-12.32 7.12,-35.97 13.63,-44.02 5.89,-6.12 107.87,-32.42 122.06,-34.42zm-2.25 289.07l1.75 -0.02c-15.88,-0.22 -3.72,2.01 -22.06,-0.81l-4.59 22.21c14.14,-4.58 5.12,-5.48 5.12,-5.48 2.23,11.58 8.51,8.37 17.64,7.24l0.7 -0.41 3.41 1.44 -1.97 -24.17zm16.84 23.31c4.36,1.44 0.94,0.64 1.84,-1.68l1.85 1.13 8.86 -1.17c2.23,-4.39 4.36,-0.29 0.21,-7.49 -0.53,-5.23 0.81,-4.79 -2.17,-5.25l0.63 2.82 -1.15 -5.14 0.72 -1.84 5.96 14.95 4.94 -2.57c6.04,-0.09 9.07,-1.38 14.68,-6.31l-5.49 -11.39c3.68,3.79 5.14,5.75 10.14,10.66 -0.16,-18.16 -21.91,-20.5 -14.51,-24.89 6.8,7.67 10.19,10.9 19.04,15.65 -5.77,-15.51 -17.59,-15.58 -17.42,-18.21l3.33 -2.05c2.97,3.36 5.05,5.15 8.84,8.21 5.52,4.46 5.66,4.56 10.13,4.67 -2.94,-10.5 -15.05,-10.79 -16.14,-18.03l-10.41 9.89c-6.24,2.64 -9.69,5.43 -16.36,6.79l2.95 -2.81c0.21,-1.05 0.95,-1.46 1.69,-1.87 5.97,-5.48 5.93,-3.75 9.93,-11.53l-0.09 -5.32 -1.57 -3.75c-3.93,0.6 -3.11,1.63 -3.37,-1.91l-3.92 0.79 -4.05 0.84c-0.02,3.97 0.77,2.4 -4.17,3.02 -16.43,20.69 -39.93,-5.18 -39.79,22.54 10.06,5.52 25.33,1.48 36.71,0.01 9.14,-0.2 3.36,-1.24 6.78,3.79 -9.67,-1.39 -4.26,-1.45 -6.04,2.08l-0.59 -0.59 -6.67 2.19 -4.47 -0.01 -0.39 -0.48 -7.3 0.95 16.84 23.31zm-10.62 0.63l3.36 -0.2 1.88 -0.31 5.38 -0.12 -10.62 0.63zm18.96 -24.14l0.75 0.74 0.08 2 -0.83 -2.74zm0 0l0.83 2.74 -0.83 -2.74zm2.88 11.88l1.33 9.91 -1.33 -9.91zm-326.9 -41.06c-3.06,1.36 -2.65,0.9 -1.54,0.09l1.54 -0.09zm236.28 -1.63c2.64,6.18 6.67,15.39 1.75,23.69 -3.07,5.18 -10.99,8.32 -17.52,4.13 -10.03,-6.45 -11.04,-34.23 15.77,-27.82zm-22.96 42.07c33.94,2.88 42.5,-53.32 6.83,-60.2 -13.28,19.39 -17.33,33.33 -6.83,60.2zm-201.67 -143.87c25.91,0.09 74.05,-1.23 94.85,-13.24 12.65,-7.3 23.3,-11.79 35.36,-18.46 8.87,-4.91 28.16,-13.19 34.79,-20.22 -22.07,0.17 -73.83,9.04 -92.25,16.46 -13.88,5.58 -65.06,28.69 -72.75,35.46zm378.38 31.92c3.48,5.6 2.4,1.03 2.02,10.05l-2.36 2.37 0.34 -12.42zm-278.34 -78.72c27.22,-3.07 47.81,-10.5 79.93,-10.9l0.02 78.85c28.92,-17.44 29.07,-22.33 75.69,-32.55l-8.32 -73.62c-29.44,-4.56 -130.01,25.12 -147.32,38.22zm110.35 124.12c39.7,-17.59 50.65,62 15.59,77.31 -37.54,16.38 -51.82,-61.27 -15.59,-77.31zm-58.02 22.99c-13.43,73.59 52.86,89.53 86.72,72.28 39.2,-19.95 27.85,-108.89 -5.43,-119.3 -37.27,-11.64 -52.97,24.18 -62.25,49.06l-19.04 -2.04zm143.11 -184.76l65.91 -0.33c2.41,11.99 6.79,58.38 4.84,68.46 -14.81,2.63 -51.18,9.76 -63.79,8.51 -2.99,-23.09 -10.37,-53.89 -6.96,-76.64zm13.43 -72.63c30.94,0.85 42.42,8.14 42.56,8.16l9.66 46.89 -64.77 -0.39 12.55 -54.66zm-152.3 31.04c-5.56,46.99 -5.01,24.94 -10.34,55.25 29.69,-4.63 76.39,-25.29 105.4,-18.83l9.81 76.53c21.38,5.57 30.07,-3.81 37.24,18.59 14.05,-1.34 66.96,-10.21 76.42,-15.35 1.74,-23.47 -2.46,-58.79 -6.26,-82.03l-12.53 -54.04c-3.25,-18.67 1.93,-2.03 3.01,-17.44 -15.12,-6.83 -36.05,-8.1 -55.04,-9.49 -43.25,-3.17 -19.53,6.83 -48.42,14.36 -18.58,4.84 -33.85,9.87 -50.81,15.52 -29.21,9.72 -32.89,6.59 -48.48,16.93z",
            COMPACTOR: "M316.51 237.37c-8.45,4.69 -42.76,20.05 -50.36,20.61 0.79,-28.98 4.05,-45.36 -6.16,-66.5 -4.32,-8.96 -4.47,-13.54 -14.96,-8.26 -5.87,11.55 6.33,15.87 6.8,33.43 0.39,15.03 -0.07,30.96 -0.06,46.12 -5.15,10.84 -27.59,7.33 -38.66,28.74 -9.35,18.09 -7.08,39.31 -6.95,61.65 6.41,-3.6 8.55,-7.28 17.12,-12.04 47.22,-26.3 105.28,-3.62 118.87,52.86l3.36 10.5c0.2,0.42 0.52,1.16 0.86,1.7l79.08 -0.04c-10.38,-39.79 -13.17,-63.01 5.42,-100.49 12.81,-25.82 37.82,-51.12 64.7,-60.13 -0.39,-0.4 -1.12,-1.46 -1.32,-1.07 -0.01,0.01 -7.29,-2.32 -9,-15.51 -15.08,-116.42 1.25,-111.86 -75.37,-111.86 -35.12,0.01 -75.2,-9.38 -81.85,24.48 -5.84,29.7 -6.03,65.03 -11.52,95.81zm106.81 -237.37c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm-171.07 288.03c-88.74,16.21 -61.8,144.23 23.72,127.71 82.37,-15.91 59.99,-143.02 -23.72,-127.71zm274.54 -96.12c-18.16,3.4 -26.73,6.03 -41,15.09 -103.03,65.37 -42.77,231.82 83.3,207.98 54.21,-10.25 103.54,-64.86 89.19,-133.69 -11.33,-54.27 -63.65,-102.09 -131.49,-89.38zm-90.57 -15.54l34.08 -0.22c1.07,-13.24 -4.72,-46.17 -6.58,-61.53 -3.45,-28.45 2.38,-42.11 -27.23,-42.48l-0.27 104.23zm-153.97 48.33c-2.59,8.86 -3.14,23.39 1.21,30.76 12.4,2.17 12.83,-5.86 12.51,-17.15 -0.34,-12.05 -2.32,-15.51 -13.72,-13.61zm-25.81 -0.04c-9.58,4.74 -7.9,41.9 7.49,30.31 3.97,-2.99 6.72,-37.31 -7.49,-30.31zm151.95 95.38c4.04,-15.91 -5.58,-14.46 -20.37,-14.31 -9.15,0.1 -29.46,-3.29 -35.44,2.91 -18.08,18.73 48.42,12.66 55.81,11.4zm-76.42 -144.02l88 0.23 0.84 -104.05c-83.32,0.24 -75.86,-8.71 -81.15,34.71 -2.33,19.14 -8.21,52.05 -7.69,69.11z",
            GENERATOR: "M206 206.15l0 226.74c0.01,3.48 3.48,6.3 7.77,6.31l7.76 0 0 -239.34 -7.76 0c-4.29,0 -7.76,2.83 -7.77,6.29zm217.32 -206.15c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm139.71 341.96c-8.57,0 -15.52,-5.64 -15.52,-12.59l0 -18.9c0,-6.95 6.95,-12.58 15.52,-12.59l0 -75.58c-8.57,-0.01 -15.52,-5.64 -15.52,-12.6l0 -18.89c0,-6.96 6.95,-12.59 15.52,-12.6l0 -12.6 -131.94 0 0 188.95 131.94 0 0 -12.6 0 0zm-38.81 0l-69.85 0c-4.29,0 -7.76,-2.81 -7.76,-6.29 0,-3.49 3.47,-6.3 7.76,-6.3l69.85 0c4.28,0 7.76,2.81 7.76,6.3 0,3.48 -3.48,6.29 -7.76,6.29zm0 -25.19l-69.85 0c-4.29,0 -7.76,-2.82 -7.76,-6.29 0,-3.48 3.47,-6.31 7.76,-6.31l69.85 0c4.28,0 7.76,2.83 7.76,6.31 0,3.47 -3.48,6.29 -7.76,6.29zm0 -25.18l-69.85 0c-4.29,0 -7.76,-2.83 -7.76,-6.31 0,-3.48 3.47,-6.3 7.76,-6.3l69.85 0c4.28,0 7.76,2.82 7.76,6.3 0,3.48 -3.48,6.31 -7.76,6.31zm-186.28 -62.99l38.81 0c4.29,0 7.76,-2.82 7.76,-6.3l0 -25.19c0,-3.48 -3.47,-6.3 -7.76,-6.3l-38.81 0c-4.28,0 -7.76,2.82 -7.76,6.3l0 25.19c0,3.48 3.48,6.3 7.76,6.3zm294.94 -88.18l-7.76 0 0 239.34 7.76 0c4.29,-0.01 7.76,-2.83 7.77,-6.31l0 -226.74c-0.01,-3.46 -3.48,-6.29 -7.77,-6.29zm-395.84 239.34l372.56 0 0 -239.34 -372.56 0 0 239.34zm15.52 -69.28c0.01,-6.96 6.96,-12.59 15.53,-12.6l0 -75.58c-8.57,-0.01 -15.52,-5.64 -15.53,-12.6l0 -18.89c0.01,-6.96 6.96,-12.59 15.53,-12.6l0 -18.89c0,-1.67 0.82,-3.28 2.27,-4.45 1.45,-1.19 3.43,-1.85 5.49,-1.85l294.94 0c2.06,0 4.04,0.66 5.49,1.85 1.45,1.17 2.27,2.78 2.27,4.45l0 18.89c8.57,0.01 15.52,5.64 15.53,12.6l0 18.89c-0.01,6.96 -6.96,12.59 -15.53,12.6l0 75.58c8.57,0.01 15.52,5.64 15.53,12.6l0 18.89c-0.01,6.95 -6.96,12.59 -15.53,12.59l0 18.9c0,1.67 -0.82,3.27 -2.27,4.46 -1.45,1.18 -3.43,1.84 -5.49,1.84l-294.94 0c-2.06,0 -4.04,-0.66 -5.49,-1.84 -1.45,-1.19 -2.27,-2.79 -2.27,-4.46l0 -18.9c-8.57,0 -15.52,-5.64 -15.53,-12.59l0 -18.89zm15.53 18.89l15.52 0 0 -18.89 -15.52 0 0 18.89zm31.04 -138.56l0 18.89c0,6.96 -6.95,12.59 -15.52,12.6l0 75.58c8.57,0.01 15.52,5.64 15.52,12.6l0 18.89c0,6.95 -6.95,12.59 -15.52,12.59l0 12.6 131.94 0 0 -188.95 -131.94 0 0 12.6c8.57,0.01 15.52,5.64 15.52,12.6zm15.53 6.3c0.01,-10.43 10.42,-18.89 23.28,-18.9l38.81 0c12.86,0.01 23.27,8.47 23.28,18.9l0 25.19c-0.01,10.43 -10.42,18.88 -23.28,18.89l-38.81 0c-12.86,-0.01 -23.27,-8.46 -23.28,-18.89l0 -25.19zm-46.57 12.59l15.52 0 0 -18.89 -15.52 0 0 18.89zm77.96 -107.06l20.57 0c-3.74,-8.05 -5.57,-16.6 -5.39,-25.21 -0.18,-8.59 1.65,-17.13 5.39,-25.18l-20.92 0c-1.89,0.8 -7.76,9.57 -7.76,25.18 0,15.46 5.73,24.19 8.11,25.21zm46.22 25.19l46.57 0 0 -12.6 -46.57 0 0 12.6zm-7.4 -25.19l43.84 0c-3.73,-8.05 -5.56,-16.6 -5.39,-25.21 -0.17,-8.59 1.66,-17.13 5.39,-25.18l-44.2 0c-1.89,0.8 -7.76,9.57 -7.76,25.18 0,15.46 5.73,24.19 8.12,25.21zm178.16 107.06l15.52 0 0 -18.89 -15.52 0 0 18.89zm-116.07 -107.06l20.56 0c-3.73,-8.05 -5.56,-16.6 -5.39,-25.21 -0.17,-8.59 1.66,-17.13 5.39,-25.18l-20.91 0c-1.9,0.8 -7.77,9.57 -7.77,25.18 0,15.46 5.74,24.19 8.12,25.21zm38.44 -0.18c3.77,-3.89 6.05,-8.59 6.58,-13.51 0.09,-0.22 0.19,-0.45 0.31,-0.66 0.25,-0.79 0.72,-1.52 1.37,-2.14 0.6,-0.64 1.37,-1.16 2.23,-1.53 0.88,-0.41 1.85,-0.66 2.86,-0.74 0.28,-0.06 0.58,-0.11 0.87,-0.14l51.7 0c4.42,-1.4 8.38,-3.66 11.49,-6.58 2.21,-1.82 4.15,-3.84 5.79,-6.02l-68.98 0c-0.3,-0.04 -0.61,-0.08 -0.9,-0.15 -0.49,-0.03 -0.98,-0.12 -1.44,-0.24 -0.49,-0.12 -0.96,-0.29 -1.4,-0.5 -0.42,-0.18 -0.81,-0.4 -1.17,-0.64 -0.38,-0.26 -0.74,-0.55 -1.04,-0.87 -0.65,-0.63 -1.12,-1.36 -1.37,-2.15 -0.12,-0.22 -0.23,-0.43 -0.32,-0.65 -0.53,-4.93 -2.81,-9.62 -6.57,-13.52 -2.56,1.67 -7.75,10.31 -7.75,25.01 0,14.73 5.19,23.36 7.74,25.03zm-233.62 302.48l335.31 0c1.2,-4.57 3.65,-8.88 7.17,-12.59l-349.64 0c3.52,3.71 5.98,8.02 7.16,12.59zm311.25 -75.57l15.52 0 0 -18.89 -15.52 0 0 18.89z",
            "HOOK LIFT": "M533.24 411.73c0,-28.29 42.56,-31.57 42.56,0.89 0,10.18 -9.6,19.5 -22.16,19.5 -10.11,0 -20.4,-10.28 -20.4,-20.39zm-109.92 -411.73c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm226.93 305.31l0 38.26c-1.15,21.52 -8.09,20.25 -42.54,20.25 -0.84,9.92 -11.58,24.91 -18.1,29.79 -22.89,17.15 -47.56,16.72 -70.06,-0.13 -9.24,-6.93 -15.56,-18.21 -18.23,-29.66l-150.69 0c-1.36,2.82 -1.94,5.96 -3.28,9.13 -1.23,2.92 -2.61,5.57 -4.33,8.09 -14.68,21.43 -41.77,31.58 -66.23,21.17 -2.89,-1.24 -6.08,-2.38 -8.37,-4.04 -7.74,-5.55 -12.04,-8.9 -17.81,-17.66 -1.6,-2.42 -3.05,-5.22 -4.23,-8.18 -1.25,-3.14 -1.74,-5.84 -3.02,-8.51 -8.62,0 -13.75,0.94 -19.83,-2.33 -4.61,-2.5 -8.53,-6.93 -8.53,-13.63l0 -80.67c0,-10.72 9.35,-15.95 20.39,-15.95l85.09 0 0 -70.91c0,-2.04 -7.49,-9.81 -9.24,-12.04l-28.87 -32.3c0,9.76 0,19.51 0,29.27 0,4.69 0.56,10.32 -0.53,14.54 -2.75,10.6 -8.31,19.87 -17.18,26.26 -2.57,1.84 -6.28,3.99 -9.12,5.06 -17.12,6.49 -34.04,2.67 -46.97,-10.19 -4.12,-4.07 -5.38,-5.83 -8.08,-11.42 -2.16,-4.52 -3.73,-9.81 -4.11,-14.89l0 -4.57c0.69,-8.51 5.57,-15.43 17.73,-15.43 6.5,0 12.45,5.17 14.12,9.8 2.39,6.58 0.05,12.82 7.54,15.59 6.33,2.35 11.63,-1.06 13.17,-7.4 2.65,-10.9 -1.63,-82.47 1.81,-90.39 1.89,-4.32 8.2,-9.16 13.89,-9.16 7.63,0 25.38,13.67 32.26,18.27 10.19,6.78 20.12,12.97 29.79,19.85 13.51,9.58 34.08,21.76 45.36,30.01 4.59,3.36 9.61,7.42 9.61,15.19l0 94.86 55.84 0 0 -73.57c0,-12.14 7.36,-19.51 19.51,-19.51l73.56 0c15.08,0 18.02,7.45 23.35,17.43l43.13 76.53c7.94,0 15.74,2.86 21.29,5.33 3.11,1.38 5.44,2.92 8.36,4.94 5.11,3.56 6.95,5.92 10.49,9.9 7.4,8.31 13.06,21.13 13.06,33.02zm-374.97 46.1c0,-10.72 8.92,-21.28 19.5,-21.28l4.43 0c9.28,0 18.62,9.35 18.62,18.62 0,7.02 -0.11,12.63 -6.44,18.39 -13.48,12.23 -36.11,2.67 -36.11,-15.73zm195.9 -159.56l54.08 0c0.78,3.36 6.1,11.44 7.97,15.07 2.57,4.99 5.42,9.42 8.27,14.77l8.29 14.76c2.93,5.27 5.49,9.54 8.28,14.79l-86.89 0 0 -59.39z",
            PICKUP: "M360 226.66c8.96,-2.49 14.2,-13.91 58.52,-9.51 0.35,3.17 0.62,34.21 0.11,35.64 -0.89,2.46 -1.67,1.91 -5.66,1.96l-27.24 0.52 -46.93 0.79 -13.71 0.09c3.85,-5.95 31.29,-24.97 34.91,-29.49zm63.32 -226.66c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -141.83,0 -256.81,-114.98 -256.81,-256.81 0,-141.83 114.98,-256.81 256.81,-256.81zm129.37 306.79c-6.59,-2.41 -12.34,-6.48 -11.21,-15.87 1.06,-8.75 7.66,-12.37 17.34,-12.05 6.4,2.64 12.13,6.99 10.46,16.82 -1.3,7.71 -8.13,11.82 -16.59,11.1zm-280.6 -27.62c5.88,2.99 10.73,6.54 9.6,15.58 -0.84,6.78 -5.86,10.6 -11.75,12.12 -22.55,0.51 -21.87,-30.78 2.15,-27.7zm1.95 47.57c7.78,0.7 16.95,-6.24 20.93,-11.14 4.72,-5.78 8.67,-14.59 8.06,-25.03 -1.15,-19.45 -14.83,-30.33 -33.1,-32.97 -22.02,-0.72 -39.23,16.1 -37.47,38.16 2.19,27.06 33.06,37.06 41.58,30.98zm298.7 -65.01c-23.09,-9.14 -43.26,-0.77 -50.67,19.27 -8.62,23.32 9.33,44.87 30.49,46.93 18.95,1.75 31.83,-10.54 36.4,-23.83 6.88,-20.05 -4.68,-34.71 -16.22,-42.37zm55.94 11.45c6.4,-0.97 21.32,-1.9 25.94,-4.61 3.72,-2.18 4.98,-6.43 4.88,-11.4 -0.16,-8.18 -2.89,-5.66 -9.53,-6.53 -0.32,-11.71 1.49,-45.91 -0.83,-54.56 -2.51,-1.7 -4.87,-2.84 -8.98,-2.53l-87.6 -0.12 -31.64 -0.76c-0.17,-0.05 -0.52,-0.18 -0.73,-0.33l-3.86 -18.53 -1.94 -14.07c-2.44,-9.68 -2.13,-13.19 -11.79,-15.19 -25.27,0.82 -51.82,0.09 -77.25,0.09 -23.44,0 -51.73,-2.63 -68.76,8.94 -8.58,3.47 -22.11,15.77 -29.31,22.29 -7.16,6.48 -20.31,20.55 -29.15,22.11 -16.89,1.07 -34.67,4.3 -50.98,7.14 -14.24,2.49 -34.59,4.63 -39.73,18.03l91.74 -1.61c9.85,2.02 15.12,5.86 19.21,12.34 2.66,4.22 6.08,19.69 6.68,25.58 -6.19,-9.6 -7.44,-22.18 -16.46,-28.35 -8.7,-5.96 -28.79,-3.19 -40.71,-2.79 -15.14,-0.02 -30.82,0.82 -45.95,1.32 -20.7,0.68 -23.12,-0.09 -26.91,20.3 -6.47,3.64 -7.76,1.01 -7.85,11.42 -0.05,5.75 -0.35,12.23 2.37,16.9 5.16,8.87 17.12,10.04 29.34,8.12 6.93,-7.09 12.1,-31.79 19.98,-37.3 8.23,-5.75 41.95,-4.2 54.26,-3.16 16.13,5.13 12.08,21.23 20.66,31.93 40.47,1.49 103.55,0.19 148.06,0.02l15.71 0.13c5.66,-0.47 2.91,0.85 5.08,-1.99 1.66,-0.86 12.93,-18.32 15.55,-21.69l-7.63 23.13 20.31 0.26c4.26,-5.14 8,-18.97 12.09,-25.07 6.14,-9.15 18.36,-7.13 31.71,-7.13 10.87,0 26.16,-2.47 33.38,4.4 6.44,6.12 7.5,17.83 12.5,26.32l28.14 -3.05zm-164.89 -78.96l-31.41 0.62 0.07 -37.36 67.51 0.01c1.89,6.81 1.8,19.96 5.01,24.37l0.81 11.58 -39.85 0.74 -2.14 0.04zm-68.09 12.42c3.82,-0.82 8.07,-0.98 12.06,-0.8 6.37,0.3 5.41,0.95 5.07,6.56l-18 -0.2 0.87 -5.56z",
            "STREET SWEEPER": "M407.31 336.31c0,5.26 1.6,6.86 6.87,6.86l237.85 0 0 -89.2c0,-3.67 -9.71,-17.91 -12.36,-21.94 -5.41,-8.21 -8.55,-14.37 -13.76,-22.83 -5.57,-9.05 -24.49,-36.98 -26.48,-44.43l-192.12 0 0 171.54zm16.01 -336.31c-171.86,0 -311.7,139.83 -311.7,311.71 0,44.83 9.17,87.64 27.26,127.24 77.94,170.53 227.35,350.58 271.3,401.69 3.3,3.83 8.1,6.02 13.15,6.02 5.05,0 9.84,-2.19 13.14,-6.02 43.93,-51.1 193.35,-231.14 271.31,-401.69 18.1,-39.6 27.26,-82.41 27.26,-127.24 -0.02,-171.88 -139.85,-311.71 -311.72,-311.71zm0.01 59.44c141.83,0 256.81,114.98 256.81,256.81 0,141.83 -114.98,256.81 -256.81,256.81 -95.41,0 -178.67,-52.03 -222.95,-129.27l17.11 0 0 -45.73 -22.87 0 0 35.1c-17.96,-35.07 -28.1,-74.8 -28.1,-116.91 0,-141.83 114.98,-256.81 256.81,-256.81zm-118.93 139.64l38.87 0c0,-10.86 -2.55,-16.52 -4.57,-25.16l-36.59 0c-0.27,12.02 -9.75,25.16 2.29,25.16zm-9.15 244.71l22.88 0 0 -45.73 -22.88 0 0 45.73zm-34.3 0l22.86 0 0 -45.73 -22.86 0 0 45.73zm-34.32 0l25.16 0 0 -45.73 -25.16 0 0 45.73zm100.64 0l25.16 0 0 -45.73 -25.16 0 0 45.73zm269.88 -43.45c3.9,0 54.88,-7.92 54.88,-18.3l0 -29.73 -77.76 0c4.7,7.01 10.47,10.98 15.15,19.17 5.1,8.91 5.31,18.46 7.73,28.86zm-402.53 -11.44l157.81 0 0 -18.29c0,-5.27 -1.6,-6.86 -6.87,-6.86l-150.94 0 0 25.15zm345.35 27.45c-24.08,0 -24.63,-34.31 0,-34.31 23.56,0 22.76,34.31 0,34.31zm-45.75 -20.59c0,50.95 56.48,60.73 79.48,33.73 29.8,-34.98 -1.23,-77.18 -33.73,-77.18 -22.63,0 -45.75,20.17 -45.75,43.45zm-214.98 -169.23l82.33 0 0 66.32 -114.35 0c1.61,-6.89 4.13,-10.46 6.56,-16.32l14.63 -35.67c2.5,-6.71 3.22,-14.33 10.83,-14.33zm-50.31 70.89l0 57.18 132.64 0 0 45.74 121.23 0c0.69,-31.6 17.61,-36.91 20.58,-48.03l-107.5 0 0 -144.09 -128.07 0c-6.67,0 -5.7,2.78 -8.05,7.97 -6.96,15.35 -30.83,72.13 -30.83,81.23z",
        };
        this.color = {
            Idle: "#1f5baa",
            Running: "#1eb15d",
            Stop: "#FF0000",
            Yet_to_transmit: "#7d410f",
            "No Transmission": "#000000",
            Online: "#00E1BC",
            Overspeed: "#f28918",
            DoorOpen: "#FF851B",
            HighTemp: "#FF0000",
            PowerFail: "#412525",
            Geofence: "#1f5baa",
            Good: "#1eb15d",
            Towed: "#c200b8",
        };
    }
    GoogleMapService.prototype.loadMap = function (mapRef, latLng, cluster, clickEvent) {
        return new google.maps.Map(mapRef, {
            zoom: 15,
            center: latLng,
            streetViewControl: false,
        });
    };
    GoogleMapService.prototype.addMarker = function (map, latLng, id, image) {
        this.marker = new google.maps.Marker({
            position: latLng,
            map: map,
            center: latLng,
            title: id,
            icon: image,
            zoom: 15,
        });
        this.gmarkers.push(this.marker);
        this.setCenter(map, latLng);
    };
    GoogleMapService.prototype.addMarkerWithInfoWindow = function (map, latLng, contentString, icon) {
        var _this = this;
        this.marker = new google.maps.Marker({
            position: latLng,
            map: map,
            title: "id",
            icon: icon,
        });
        var infowindow = new google.maps.InfoWindow();
        //   google.maps.event.addListener(this.marker, 'click', (( this.marker, contentString, infowindow) => {
        //     return () => {
        //        infowindow.setContent(contentString);
        //        infowindow.open(map, this.marker);
        //     };
        // })(this.marker, contentString, infowindow)
        this.marker.addListener("click", function () {
            infowindow.setContent(contentString);
            infowindow.open(map, _this.marker);
        });
        this.gmarkers.push(this.marker);
    };
    GoogleMapService.prototype.setCenter = function (map, latLng) {
        if (latLng)
            map.setCenter(latLng);
    };
    GoogleMapService.prototype.moveMarker = function (map, id, lon, lat, image, content, lineArray) {
        var latLng = { lat: lat, lng: lon };
        this.marker.setPosition(latLng);
        this.marker.setIcon(image);
        this.createLine(map, lineArray);
        // this.setCenter(map, latLng);
    };
    GoogleMapService.prototype.createLine = function (map, path) {
        this.polyLine = new google.maps.Polyline({
            path: path,
            geodesic: true,
            strokeColor: "black",
            strokeOpacity: 1.0,
            strokeWeight: 2,
        });
        this.polyLine.setMap(map);
        //this.setCenter(map, path);
    };
    GoogleMapService.prototype.fitBounds = function (map, path) {
        var bounds = new google.maps.LatLngBounds();
        for (var n = 0; n < path.length; n++) {
            bounds.extend(path[n]);
        }
        map.fitBounds(bounds);
    };
    GoogleMapService.prototype.createCircle = function (map, latLng, radius, type) {
        this.circle = new google.maps.Circle({
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
            map: map,
            center: latLng,
            radius: radius,
        });
        this.setCenter(map, latLng);
        var latLngBounds = this.circle.getBounds();
        latLngBounds =
            latLngBounds.getNorthEast().lat() +
                "," +
                latLngBounds.getNorthEast().lng() +
                "|" +
                latLngBounds.getSouthWest().lat() +
                "," +
                latLngBounds.getSouthWest().lng();
        console.log("geobounds", latLngBounds);
    };
    GoogleMapService.prototype.updateCircle = function (latLng) {
        this.circle.setCenter(latLng);
        // this.setCenter(map, latLng);
        var latLngBounds = this.circle.getBounds();
        latLngBounds =
            latLngBounds.getNorthEast().lat() +
                "," +
                latLngBounds.getNorthEast().lng() +
                "|" +
                latLngBounds.getSouthWest().lat() +
                "," +
                latLngBounds.getSouthWest().lng();
        console.log("geobounds", latLngBounds);
    };
    GoogleMapService.prototype.getRadius = function () {
        console.log("center", {
            lat: this.circle.getCenter().lat(),
            lng: this.circle.getCenter().lng(),
        });
        return this.circle.getRadius();
    };
    GoogleMapService.prototype.getCircleCenter = function () {
        return this.circle.getCenter();
    };
    GoogleMapService.prototype.setCircleRadius = function (center) {
        this.circle.setRadius(center);
    };
    GoogleMapService.prototype.removeMarkers = function () {
        for (var i = 0; i < this.gmarkers.length; i++) {
            this.gmarkers[i].setMap(null);
        }
    };
    GoogleMapService.prototype.removeMarkersById = function (map, id) {
        for (var i = 0; i < this.gmarkers.length; i++) {
            if (this.gmarkers[i].title == id) {
                this.gmarkers[i].setMap(null);
            }
        }
    };
    GoogleMapService.prototype.removePolyLine = function () {
        this.polyLine.setMap(null);
    };
    GoogleMapService.prototype.clearLayers = function (map, data) {
        // tslint:disable-next-line:prefer-for-of
        for (var x = 0; x < data.length; x++) {
            if (data[x] == 1) {
                for (var i = 0; i < this.gmarkers.length; i++) {
                    this.gmarkers[i].setMap(null);
                }
            }
            else if (data[x] == 2) {
                if (this.polyLine) {
                    this.polyLine.setMap(null);
                }
            }
        }
    };
    GoogleMapService.prototype.addClusteringMarkers = function (map, latLng, obj) {
        this.locations = latLng;
        var color = this.color;
        var vehicleModel = this.vehicleModel;
        this.image = obj;
        var mark;
        var imageObj = this.image;
        // this.clearClusteringMarkers(map, this.marker);
        this.marker = this.locations.map(function (location, i) {
            console.log(location + " i " + i);
            mark = new google.maps.Marker({
                position: location,
                zoom: 3,
                icon: imageObj[i].img,
            });
            var contentString = '<div style="font-weight:bold;">' +
                imageObj[i].data.plateNo +
                "</div> <div>Today Odometer:  " +
                imageObj[i].data.odometer +
                "</div> <div>Total Odometer:  " +
                imageObj[i].data.finalOdometer +
                "</div>" +
                "</div> <div>Status:" +
                imageObj[i].data.status +
                "</div> <div>Transmission Time:  " +
                imageObj[i].data.timeStamp +
                "</div> <div>Speed:" +
                imageObj[i].data.speed +
                "</div>";
            // var contentString = '<ion-card style="padding:0px;margin:10px 10px;">' +
            //   ' <ion-card-content class="cardContentPad" style="padding:0px;line-height: 10px;font-family: "Segoe UI";">' +
            //   ' <ion-row><ion-col size="10" style="padding-left:0px;"><ion-row><ion-col size="2" class="cardAlign" style="padding-top: 0px;margin-top: 0px;">' +
            //   ' <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="8mm" height="8mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"' +
            //   ' viewBox="0 0 846.66 846.66" xmlns:xlink="http://www.w3.org/1999/xlink">' +
            //   '<path fill="' + color[imageObj[i].data.status] + '" d="' + vehicleModel[imageObj[i].data.icon] + '"/>' +
            //   '</svg> </ion-col><ion-col size="9"  class="plateno"> ' + imageObj[i].data.plateNo + '</ion-col></ion-row>' +
            //   ' <ion-row><ion-col size="5" style="font-size: 20px;font-weight: bolder;line-height: 5px; " class=" underline ion-text-start cardAlign">' + imageObj[i].data.speed + '<ion-label style="font-size: 10px;">Km/h</ion-label>' +
            //   '   </ion-col><ion-col size="1"><ion-img src="assets/executive_summary_icon/operator.svg" style="height: 16px;width: 16px;" ></ion-img></ion-col>' +
            //   '       <ion-col size="6" style="font-size:12px;font-weight: bold; padding-left: 10px;padding-top: 9px;"> ' + imageObj[i].data.operatorName + '</ion-col></ion-row>' +
            //   '     <ion-row ><ion-col   style="font-size:11px;font-weight: bolder;color:' + color[imageObj[i].data.status] + ';line-height: 0px;margin-left: 5px;padding-top:2px;">SPEED</ion-col> </ion-row>' +
            //   ' <ion-row> <ion-col size="1" style="margin-left: 5px;"><ion-img src="assets/vtstrackhisIcon/odometer.svg" style="height: 15px;width:15px;"></ion-img>' +
            //   ' </ion-col><ion-col size="3.5" class="odometer">Today odometer</ion-col><ion-col size="1">' +
            //   '<ion-img src="assets/vtstrackhisIcon/odometer.svg" style="height: 15px;width:15px;"></ion-img> </ion-col><ion-col size="3.5" class="odometer">Total odometer</ion-col>' +
            //   '<ion-col  style="padding:2px;font-size:16px;font-weight: bolder;" class="underline2 ion-text-start">' + imageObj[i].data.timeDifference + '</ion-col></ion-row>' +
            //   '<ion-row size="4.5"style="font-size:13px;font-weight: bold;line-height: 0px;">' +
            //   '<ion-col style="margin-left: 8px;">' + imageObj[i].data.odometer +
            //   ' </ion-col><ion-col size="4.5"class="ion-text-center">' + imageObj[i].data.finalOdometer + '</ion-col>' +
            //   '<ion-col   style="font-size:11px; font-weight:700;padding-top: 5px; margin-left: 10px;" class="ion-text-start">RUNNING</ion-col></ion-row>' +
            //   '<ion-row> <ion-label style="font-size: 9px; font-weight:bold;margin-top: 8px;"' +
            //   'color: white;padding:2px 10px 2px 12px;background-color:' + color[imageObj[i].data.status] + '; border-top-right-radius: 10px; border-bottom-right-radius: 10px;>' + imageObj[i].data.timeStamp + '</ion-label></ion-row><ion-row ><ion-col class="cardAlign address">' + imageObj[i].data.addresss + '</ion-col></ion-row>' +
            //   '<ion-row ><ion-spinner name="dots"></ion-spinner></ion-row></ion-col>' +
            //   ' <ion-col size="2"  ><ion-row class="iconBackground"><ion-col size="6" style="padding: 0px;" > <ion-row><ion-col ><ion-icon name="locate"  style="font-size: 17px;"></ion-icon>' +
            //   ' </ion-col></ion-row> <ion-row><ion-col><span style="color:' + color[imageObj[i].data.status] + '"; class="icon-gsm svgSize"></span></ion-col></ion-row>' +
            //   '<ion-row><ion-col><span style="color:' + color[imageObj[i].data.status] + '"; class="icon-battery svgSize"></span> </ion-col> </ion-row><ion-row><ion-col>' +
            //   '<span style="color:' + color[imageObj[i].data.status] + '"; class="icon-powerSupplyVoltage svgSize"></span></ion-col></ion-row>' +
            //   '<ion-row><ion-col><span style="color:' + color[imageObj[i].data.status] + '"; class="icon-ignition svgSize"></span></ion-col></ion-row></ion-col><ion-col size="6" style="padding: 0px;"><ion-row> <ion-col><span class="icon-acSensor svgSize"></span></ion-col> </ion-row>' +
            //   '<ion-row><ion-col><span class="icon-doorSensor svgSize"></span></ion-col></ion-row> <ion-row><ion-col><span class="icon-seatBelt svgSize"></span></ion-col></ion-row><ion-row><ion-col>' +
            //   '<span class="icon-tempSensor svgSize"></span></ion-col>' +
            //   '</ion-row><ion-row><ion-col><span class="icon-fuelPercentage svgSize"></span></ion-col>' +
            //   ' </ion-row></ion-col></ion-row> </ion-col> </ion-row></ion-card-content></ion-card>';
            var infowindow = new google.maps.InfoWindow({
                content: contentString,
            });
            google.maps.event.addListener(mark, "click", (function (mark, content, infowindow) {
                return function () {
                    infowindow.setContent(content);
                    infowindow.open(map, mark);
                };
            })(mark, contentString, infowindow));
            return mark;
        });
        // this.marker = this.locations.map(function (location, i) {
        //   return new google.maps.Marker({
        //     position: location[0],
        //     icon: obj.img,
        //     zoom: 5,
        //     map: map
        //   });
        // });
        // var marker = new google.maps.Marker({
        //   position: latLng,
        //   map: map,
        //   icon: obj.img,
        //   title: 'Uluru (Ayers Rock)'
        // });
        //     var contentString = '<div id="content">'+JSON.stringify(obj)+
        //   '</div>';
        // var infowindow = new google.maps.InfoWindow({
        //   content: contentString
        // });
        // mark.addListener('click', function () {
        //   infowindow.open(map, mark);
        // });
        this.markerClusterer = new _google_markerclusterer__WEBPACK_IMPORTED_MODULE_2__["default"](map, this.marker, {
            imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
        });
    };
    GoogleMapService.prototype.clearClusteringMarkers = function (map, data) {
        if (this.markerClusterer) {
            this.markerClusterer.clearMarkers();
            this.marker = [];
            this.image = [];
            this.locations = [];
        }
    };
    GoogleMapService.prototype.fitBoundsForCluster = function (map) {
        var latLngBounds = new google.maps.LatLngBounds();
        for (var i = 0; i < this.locations.length; i++) {
            //var latLng = new google.maps.LatLng(this.locations[i].lat, this.locations[i].lng);
            latLngBounds.extend(this.locations[i]);
            map.fitBounds(latLngBounds);
        }
    };
    GoogleMapService.prototype.circleGeoZone = function () {
        var circleRadius = this.map.getRadius();
        var circleLatLng = this.map.getCircleCenter();
        var moved = google.maps.geometry.spherical.computeOffset(circleLatLng, circleRadius, 90);
        var geoBounds = circleLatLng.lat() +
            "," +
            circleLatLng.lng() +
            "|" +
            moved.lat() +
            "," +
            moved.lng();
        return geoBounds;
    };
    GoogleMapService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GoogleMapService);
    return GoogleMapService;
}());



/***/ })

}]);
//# sourceMappingURL=default~advanced-expense-maintenance-advanced-expense-maintenance-module~alerts-tab-alerts-tab-modul~d0083fca-es5.js.map