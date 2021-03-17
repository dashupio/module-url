// require first
const { Module, Query } = require('@dashup/module');

// import base
const URLPage = require('./pages/url');
const UrlBlock = require('./blocks/url');

/**
 * export module
 */
class URLModule extends Module {
  
  /**
   * registers dashup structs
   *
   * @param {*} register 
   */
  register(fn) {
    // register pages
    fn('page', URLPage);

    // register blocks
    fn('block', UrlBlock);
  }
}

// create new
module.exports = new URLModule();
