/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OpenApiPetstore) {
      root.OpenApiPetstore = {};
    }
    root.OpenApiPetstore.BigCatAllOf = factory(root.OpenApiPetstore.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The BigCatAllOf model module.
   * @module model/BigCatAllOf
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>BigCatAllOf</code>.
   * @alias module:model/BigCatAllOf
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>BigCatAllOf</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BigCatAllOf} obj Optional instance to populate.
   * @return {module:model/BigCatAllOf} The populated <code>BigCatAllOf</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('kind')) {
        obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/BigCatAllOf.KindEnum} kind
   */
  exports.prototype['kind'] = undefined;


  /**
   * Allowed values for the <code>kind</code> property.
   * @enum {String}
   * @readonly
   */
  exports.KindEnum = {
    /**
     * value: "lions"
     * @const
     */
    "lions": "lions",
    /**
     * value: "tigers"
     * @const
     */
    "tigers": "tigers",
    /**
     * value: "leopards"
     * @const
     */
    "leopards": "leopards",
    /**
     * value: "jaguars"
     * @const
     */
    "jaguars": "jaguars"  };


  return exports;
}));


