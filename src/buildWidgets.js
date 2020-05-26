/**
 * This file is the entry point for the widget build script.  Keep
 * it lean - importing things here adds to build size.
 *
 * Everything here is compiled into one CSS and on JS file.
 */

// Everything in this scss file is namespaced within .wj-widgets.
// It should not pollute the global namespace.
// import '@/styles/main.scss';

// Setup JS to configure Vue.  Used to keep dev and prod in sync.
import '@/setup';

import Vue from 'vue';
import * as widgets from '@/widgets'; 
import store from '@/store';


/**
 *
 * @param {string} widget The name of the widget to be initialized
 * @param {string} el The identified of the element that will be replaced with the widget
 * @param {object} settings Props that will be passed to the widget
 */

const initializeWidget = (widget, el, props = {}) => new Vue({
    store,
    el,
    components: { [widget]: widgets[widget] },
    render(h) {
        return h(widget, { props });
    },
});

export {
    store,
    initializeWidget,
};
