
// import page interface
import { Struct } from '@dashup/module';

/**
 * build address helper
 */
export default class URLPage extends Struct {
  
  /**
   * construct url page
   *
   * @param args 
   */
  constructor(...args) {
    // super
    super(...args);
  }

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
    return 'fad fa-browser text-info';
  }

  /**
   * returns page type
   */
  get title() {
    // return page type label
    return 'URL';
  }

  /**
   * returns page data
   */
  get actions() {
    // return page data
    return {
    };
  }

  /**
   * returns object of views
   */
  get views() {
    // return object of views
    return {
      view   : 'page/url',
      config : 'page/url/config',
    };
  }

  /**
   * returns category list for page
   */
  get categories() {
    // return array of categories
    return ['Misc'];
  }

  /**
   * returns page descripton for list
   */
  get description() {
    // return description string
    return 'Embed any URL in Dashup';
  }
}