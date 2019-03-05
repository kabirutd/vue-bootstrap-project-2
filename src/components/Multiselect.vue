<template>
  <div class="container-fluid">
      <br/>

      <h5>MULTISELECT EXAMPLE - USING RESTFUL API DATA</h5>

       <section v-if="errored">
        <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>

    <section v-else>
        <div v-if="loading">Loading contacts...</div>

      <div style="width:400px">

          <!--
    <multiselect
      v-model="selected"
      :options="options"
      :searchable="true"
        :multiple="true"
        :close-on-select="true"

  label="name" 
  track-by="name" 
   placeholder="Pick a value"
   width="350px"
      
      >
    </multiselect><br/>
    -->

     <!-- :custom-label="customLabel(first_name, last_name)"-->

     <multiselect
      v-model="selected"
      :options="contacts"
      :searchable="true"
        :multiple="true"
        :close-on-select="true"
        :max-height="150"
       
       

  label="first_name" 
  track-by="id" 
   placeholder="Pick a value"
   width="350px"
      
      >
    </multiselect>
    </div>

    <br/><br/>

    Selected Values: <br/>
    
    Raw data: <br/>{{selected}}<br/>

     Pretty data:
    <ul>
        <li v-for="item in selected" :key="item.name">
            {{item.id}} - {{item.first_name}} {{item.last_name}} 
        </li>
    </ul>

     </section>


  </div>
</template>

<script>
  import Multiselect from 'vue-multiselect'
  import axios from 'axios';
  export default {
    components: { Multiselect },
    data () {
      return {
        selected: null, //{ first_name: 'jamais', last_name: 'kamais' },
        selectedContact: null,
        loading: true,
        errored: false,
        contacts: [],

       
         options: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Adonis', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP' },
        { name: 'Phoenix', language: 'Elixir' }
      ]
     

       //options: contacts
      }
    },

    methods: {
    customLabel ({ first_name, last_name }) {
      return '${first_name}  ${last_name}'
    }
    },

     mounted () {
   axios
      .get('https://api.myjson.com/bins/eitho')
      .then(response => {
        this.contacts = response.data
      })
    
      .catch(error => {
       //console.log(error)
        this.errored = true
      })         
      
      .finally(() => this.loading = false)

  }, //MOUNTED
  }
</script>

<!--
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
-->
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
  
</style>