import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

import VeeValidate from 'vee-validate'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueResource from 'vue-resource'

Vue.use(BootstrapVue,router,axios,VueAxios,VeeValidate,VueResource);

// Filters
Vue.filter('to-uppercase', function(value){
  return value.toUpperCase();
});

Vue.filter('snippet', function(value){
  return value.slice(0,100) + '....';
});

Vue.config.productionTip = false


//custom directives 
//========================================================
Vue.directive ('rainbow', {

  bind(el, binding, vnode)
  {
    el.style.color="#" + Math.random().toString().slice(2,8);
  }
});

Vue.directive ('theme', {

  bind(el, binding, vnode)
  {
    if (binding.value=='wide'){
      el.style.maxWidth= "1200px" ;
    }
    else if (binding.value=='narrow')
    {
      el.style.maxWidth= "600px" ;

    }

    if (binding.arg=='column')
    {
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
});

new Vue({

  BootstrapVue,
  router,
  axios,
  VueAxios,
  VeeValidate,
  VueResource,
  render: h => h(App),
}).$mount('#app')
