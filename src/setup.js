/**
 * Any setup to Vue should be done here.  All apps will run this
 * script during setup.
 * Pattern adopted from https://westjet.visualstudio.com/Digital/_git/digital-ecomm-widgets
 */

import Vue from 'vue';
import Vuex from 'vuex';
import Vuelidate from 'vuelidate';
import VMdDateRangePicker from "v-md-date-range-picker";

Vue.use(Vuex);
Vue.use(Vuelidate);
Vue.use(VMdDateRangePicker);
