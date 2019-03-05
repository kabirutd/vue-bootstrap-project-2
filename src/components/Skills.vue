<template>
  <div class="container-fluid">
    <br/>

    <b-card title header="CRUD FORM" img-alt="Image" img-top tag="article" style class="mb-2">
      <p class="card-text">
        This is a sample page that is using form objects and performing basic CRUD using push and splice array
        methods.
      </p>
      <!--<b-button href="#" variant="primary">Go somewhere</b-button>-->
    </b-card>
    <br>

    <!--
    {{btnState ? 'The Button is Disblaed!' : 'The Button is Active!' }}

    <button v-on:click="chanegName"  v-bind:disabled="btnState"> Change name </button>
    -->
    <div class="holder">
      <form @submit.prevent="addSkill">
        <input
          type="text"
          placeholder="INPUT A SKILL AND THEN HIT ENTER TO ADD IN THE SYSTEM.."
          v-model="skill"
          v-validate="'min:5'"
          name="skill"
        >
        <!--<p class="alert" v-if="errors.has('skill')">{{ errors.first('skill') }}</p>-->
        <!--<input type="checkbox" id="checkbox" v-model="checked">-->
        <br>

        {{ skill }}
      </form>
      <ul>
        <li v-for="(data, index) in skills" v-bind:key="index">
          {{index}}. {{data.skill}}
          <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
        </li>

        <p v-if="skills.length>1">You have more than 1 skills.</p>
        <p v-else>You have less than or equal to 1 skill.</p>
      </ul>

      <!--
      <div v-bind:class="{alert: showAlert}">jamais</div>
      <br>
      <br>
      <div v-bind:class="alertObject">jamais using v-bind:class="alertObject"</div>
      -->

      <!--<div v-bind:style="{ backgroundColor: bgColor, width: bgWidth, height: bgHeight }">-->
    </div>
    <!--
    <div v-bind:style="alertObject">using v-bind:style="alertObject"</div>
    -->
  </div>
</template>

<script>
export default {
  name: "Skills",
  props: {
    //msg: String
  },

  data() {
    return {
      //name: 'Coursetro',
      btnState: true,

      skill: "",
      checked: false,

      skills: [
        { skill: "Vue.js" },

        { skill: "React.js" },

        { skill: "Angular" }
      ],
      alertObject: {
        backgroundColor: "lightblue",
        width: "100%",
        height: "30px",
        alert: true,
        textAlign: "center"
      },

      showAlert: true
    };
  },

  methods: {
    addSkill() {
      this.skills.push({ skill: this.skill });
      this.skill = "";
      //console.log('The checkbox value is: '+this.checked) ; // Add this

      /*
         //TO DO: make the validation work..

          this.$validator.validateAll().then((result) => {
            if (result) {
              this.skills.push({skill: this.skill});
              this.skill = '';
            }//..else {
              //console.log('Not valid');
             
          //}
           */
    },

    remove(id) {
      this.skills.splice(id, 1);
    }
  }
};

//}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--
<style src="./Skills.css" scoped>

</style>
-->

<style scoped>
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687f7f;
}
.alert {
  background: #fdf2ce;
  font-weight: bold;
  display: inline-block;
  padding: 5px;
  margin-top: -20px;
}

.holder {
  background: #fff;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  border-left: 5px solid #3eb3f6;
  margin-bottom: 2px;
  color: #3e5252;
}
p {
  /*text-align: center;*/
  padding: 30px 0;
  color: gray;
}
.container {
  box-shadow: 0px 0px 40px lightgray;
}
</style>
