
// import page interface
import { Struct } from '@dashup/module';

/**
 * build address helper
 */
export default class UrlBlock extends Struct {

  /**
   * returns page type
   */
  get type() {
    // return page type label
    return 'url';
  }

  /**
   * returns page type
   */
  get icon() {
    // return page type label
    return 'fa fa-browser';
  }

  /**
   * returns page type
   */
  get title() {
    // return page type label
    return 'URL Block';
  }

  /**
   * returns page data
   */
  get data() {
    // return page data
    return {};
  }

  /**
   * returns object of views
   */
  get views() {
    // return object of views
    return {
      view   : 'block/url/view',
      config : 'block/url/config',
    };
  }

  /**
   * returns category list for page
   */
  get categories() {
    // return array of categories
    return ['phone', 'dashboard'];
  }

  /**
   * returns page descripton for list
   */
  get description() {
    // return description string
    return 'Store an embedded url in a handy block';
  }
}