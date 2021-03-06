/*
=========================================================
Muse - Vue Ant Design Dashboard - v1.0.0
=========================================================

Product Page: https://www.creative-tim.com/product/vue-ant-design-dashboard
Copyright 2021 Creative Tim (https://www.creative-tim.com)
Coded by Creative Tim

=========================================================
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. 
*/
import ViewUI from 'view-design';
// import style
import 'view-design/dist/styles/iview.css';
import Vue from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import DefaultLayout from './layouts/Default.vue'
import DashboardLayout from './layouts/Dashboard.vue'
import DashboardRTLLayout from './layouts/DashboardRTL.vue'
import router from './router'

// import './plugins/click-away'

import './scss/app.scss';
import common from './common'
import jsonToHtml from './jsonToHtml'
Vue.mixin(common)
Vue.mixin(jsonToHtml)

import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)

import Editor from 'vue-editor-js/src/index'
Vue.use(Editor)

Vue.use(Antd);
Vue.use(ViewUI);

Vue.config.productionTip = false

// Adding template layouts to the vue components.
Vue.component("layout-default", DefaultLayout);
Vue.component("layout-dashboard", DashboardLayout);
Vue.component("layout-dashboard-rtl", DashboardRTLLayout);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')