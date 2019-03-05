<template>

<div   class="container-fluid">
  
  <br/>

  <b-card title=""
             header="FETCH DATA FROM AN API USING AXIOS"
              img-alt="Image"
              img-top
              tag="article"
              style=""
              class="mb-2">
        <p class="card-text">
         This is a sample page that is using axios to fetch data from an api using
         a bootstrap table layout.
        </p>
        <!--<b-button href="#" variant="primary">Go somewhere</b-button>--></b-button>
      </b-card>
      <br/>


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

        <!--
        <div v-else  v-for="(contact, index) in contacts" class="contact" :key="index">
            {{ contact.first_name }} {{ contact.last_name }} 
           
        </div>
        -->

          <table class="table table-striped">
            <thead>
              <tr>
                <th>FIRST NAME</th>
                <th>EMAIL</th>
                <th>PHONE</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(contact, index) in contacts" :key="index">
                <td> <router-link :to="{path: '/contactdetails/'+ contact.id }">{{contact.first_name}}</router-link></td>
                <td>{{contact.email}}</td>
                <td>{{contact.mobile_phone}}</td>
              </tr>
              
            </tbody>
          </table>

    </section>

    
</div>


<!--

  <div>
      <b-card title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2">
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </div>


      <div class="col-md-4 col-lg4" v-for="(data,index) in contacts" :key="index">
      
         <router-link :to="{path: '/contactdetails/'+ data.id }"><h3>{{data.first_name}} {{data.last_name}}</h3></router-link>
      </div>
  -->



</template>


<script>

import axios from 'axios';

export default {

name: 'Contacts',

methods:{

   onChange: function() {
      //this.m2 = problem[e.sender.value()];
    }

  },

  

data()
{
    
    return{
    
    //info: null,
    loading: true,
    errored: false,
    contacts: []
    //m2: problem[0],
    /*
    singerOptions: [
      { text: option[0], value: '0' },
      { text: option[1], value: '1' }
    ]
    */
       
    
    }
    
    
}, //DATA

 mounted () {
   axios
      .get('https://api.myjson.com/bins/eitho')
      .then(response => {
        this.contacts = response.data
      })
    /*
      .catch(error => {
       console.log(error)
        this.errored = true
      })  
      */    
      
      .finally(() => this.loading = false)

  }, //MOUNTED
    
    
    }


</script>






<style>

   

</style>