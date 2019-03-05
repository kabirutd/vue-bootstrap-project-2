<template>

<div class="container-fluid">
    <br/>
<h5>DYNAMIC COMPONENT EXAMPLE</h5>

<keep-alive>
<component v-bind:is="selectedComponent">


</component>
</keep-alive>

<button v-on:click="selectedComponent='form-one'" class="btn btn-sm btn-primary">Load Form 1</button>&nbsp;
<button v-on:click="selectedComponent='form-two'" class="btn btn-sm btn-primary">Load Form 2</button>

</div>

</template>

<script>
import FormOne from '@/views/formOne.vue';
import FormTwo from '@/views/formTwo.vue';
 export default  {

     components:{

         'form-one' : FormOne,
         'form-two' : FormTwo
     },

     data (){
         return{
         selectedComponent:'form-one'
        }
     }
 }

</script>