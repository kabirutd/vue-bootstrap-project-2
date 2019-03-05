

<template>
  <div class="container-fluid">
    
    <h1>CONTACT DETAILS</h1>
    <h5>Contact id is :{{$route.params.cid}}</h5>


   

    <!--
     <div class="col-md-12" v-for="(product,index) in products" :key="index">
     <div v-if="$route.params.Pid == product.productId">
        <h3>PRODUCT: {{product.productTitle}}</h3>
   
     </div>
    </div>
    -->
  </div>
</template>


<script>
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'
//import BootstrapVue from 'bootstrap-vue'
//Vue.use(BootstrapVue);

export default {
  /*

Requiring props such as Pid
props:{
  Pid
},

*/

  name: "ContactDetails",
  /*
methods:{
  goTodetail(prodId) {
    this.$router.push({name:'ProductDetails',params:{Pid:proId}})
  }
  },
*/

  data() {
    return {
      contactId: this.$route.params.cid,
      title: "Contact Details"
    };
  }
};
//}

//}
</script>



<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.carousel-inner {
  height: 500px;
}
.carousel-item {
  height: 100%;
}
.single-image {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
#demo {
  margin-left: 30px;
  margin-right: 30px;
}
</style>