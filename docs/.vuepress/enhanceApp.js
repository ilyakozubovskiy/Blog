/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */
import { Carousel, Slide } from '../../node_modules/vue-carousel/src/index.js';
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {

  Vue.component('carousel', Carousel);
  Vue.component('slide', Slide);
  // ...apply enhancements to the app
}
