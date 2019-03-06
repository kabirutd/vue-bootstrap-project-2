<template>
  <div class="container-fluid">
    <br>

    <b-card
      title
      header="FETCH DATA FROM AN API USING AXIOS"
      img-alt="Image"
      img-top
      tag="article"
      style
      class="mb-2"
    >
      <p class="card-text">
        This is a sample page that is using axios to fetch data from http://jsonplaceholder.typicode.com/posts along with 
        vue filters such as to-uppercase, array.match
      </p>
      <!--<b-button href="#" variant="primary">Go somewhere</b-button>-->
    </b-card>
    <br>

    <!--

    <kendo-dropdownlist :data-source="singerOptions"
                       :data-text-field="'text'"
                       :data-value-field="'value'"
                       @change="onChange">
  </kendo-dropdownlist>
    -->
    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>

    <section v-else>
      <div v-if="loading">Loading contacts...</div>

      <div id="show-blogs">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="Search Blog" />
        <div v-for="(blog, index)  in filteredBlogs" :key="index" class="single-blog">
          <h2>{{ blog.title | to-uppercase  }}</h2>
          <article>{{ blog.body | snippet }}</article>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import axios from "axios";

// Filters
/*
Vue.filter('to-uppercase', function(value){
    return value.toUpperCase();
});

*/

export default {
  name: "Blogs",

  methods: {
    onChange: function() {
      //this.m2 = problem[e.sender.value()];
    }
  },

  data() {
    return {
      //info: null,
      loading: true,
      errored: false,
      blogs: [],
      search: ''
      //m2: problem[0],
      /*
    singerOptions: [
      { text: option[0], value: '0' },
      { text: option[1], value: '1' }
    ]
    */
    };
  }, //DATA

  mounted() {
    axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then(response => {
        this.blogs = response.data;
      })
      /*
      .catch(error => {
       console.log(error)
        this.errored = true
      })  
      */

      .finally(() => (this.loading = false));
  } //MOUNTED
  ,
  computed:{
      filteredBlogs:function()
      {
          return this.blogs.filter(blog => {
              return blog.title.match(this.search);
          });

      }

      //}
  }
};
</script>



<style>
#show-blogs {
  max-width: 800px;
  margin: 0px auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>