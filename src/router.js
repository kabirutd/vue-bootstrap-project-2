import Vue from 'vue'
import Router from 'vue-router'
import Skills from './components/Skills.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
//import Products from './components/Products.vue'
//import ProductDetails from './components/ProductDetails.vue'
import Contacts from './components/Contacts.vue'
import ContactDetails from './components/ContactDetails.vue'
import Home from './components/Home.vue'

import Form from './components/Form.vue'
//import Misc from './components/Misc.vue'
import EventModifier from './components/EventModifier.vue'
import TwoWayDataBinding from './components/TwoWayDataBinding.vue'
import ComputedProperty from './components/ComputedProperty.vue'
import ListRendering from './components/ListRendering.vue'
import Array from './components/Array.vue'
import Multiselect from './components/Multiselect.vue'
import FormValidation from './components/FormValidation.vue'
import DynamicComponent from './components/dynamicComponent.vue'
import DynamicForm from '@/views/dynamicForm.vue'
import HttpPost from '@/views/httpPost.vue'
import GetBlogPosts from '@/views/getBlogPosts.vue'
import listBlogs from '@/components/listBlogs.vue'

import BntpReport from './Reports/BntpReport.vue'
import MrbReport from './Reports/MrbReport.vue'
import SalesReport from './Reports/SalesReport.vue'
import SalesDashboard from './Reports/SalesDashboard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',  //this will take of # from the URL

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/Reports/MrbReport',
      name: 'MrbReport',
      component: MrbReport
    },
    {
      path: '/Reports/BNtpReport',
      name: 'BNtpReport',
      component: BntpReport
    }
    ,

    {
      path: '/Reports/SalesDashboard',
      name: 'SalesDashboard',
      component: SalesDashboard
    }
    ,

    {
      path: '/Reports/SalesReport',
      name: 'SalesReport',
      component: SalesReport
    }
    ,
    {
      path: '/httppost',
      name: 'http-post',
      component: HttpPost
    },

    {
      path: '/listblogs',
      name: 'list-blogs',
      component: listBlogs
    },

    {
      path: '/getblogposts',
      name: 'get-blog-posts',
      component: GetBlogPosts
    },
    {
      path: '/dynamiccomponent',
      name: 'dynamic-component',
      component: DynamicComponent
    },
    {
      path: '/dynamicform',
      name: 'dynamic-form',
      component: DynamicForm
    },
    {
      path: '/Array',
      name: 'Array',
      component: Array
    },

    {
      path: '/FormValidation',
      name: 'FormValidation',
      component: FormValidation
    },
    {
      path: '/Multiselect',
      name: 'Multiselect',
      component: Multiselect
    },

    {
      path: '/ComputedProperty',
      name: 'ComputedProperty',
      component: ComputedProperty
    },

    {
      path: '/ListRendering',
      name: 'ListRendering',
      component: ListRendering
    },

    {
      path: '/eventmodifier',
      name: 'EventModifier',
      component: EventModifier
    },

    {
      path: '/twoWaydatabinding',
      name: 'TwoWayDataBinding',
      component: TwoWayDataBinding
    },

    
    {
        path: '/skills',
        name: 'Skills',
        component: Skills
      },
      /*
      {
        path: '/products',
        name: 'Products',
        component: Products
      },
      {
        path: '/productdetails/:Pid',
        name: 'ProductDetails',
        component: ProductDetails
      },
      */

      {
        path: '/contacts',
        name: 'Contacts',
        component: Contacts
      },

      {
        path: '/skills',
        name: 'Skills',
        component: Skills
      },

      {
        path: '/contactdetails/:cid',
        name: 'ContactDetails',
        component: ContactDetails
      },
    {
      path: '/about',
      name: 'About',
      component: About
      //alias: 'about-us'
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
        alias: 'contact-us'
      },

      {
        path: '/form',
        name: 'Form',
        component: Form
        //alias: 'contact-us'
      },
     
  ],

  //scrollBehavior (to, from, savedPosition) {
    // return desired position
  //}
})
