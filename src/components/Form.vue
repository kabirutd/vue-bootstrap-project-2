<template>
  <div class="container-fluid">
    <br />
    <h5>FORM HANDLING IN VUE</h5>
    <form>
      <select v-model="selected" id="projects">
        <option disabled value selected>Choose a project</option>
        <option
          v-for="(project,index) in projects"
          :key="index"
          :value="project.projectid"
        >{{project.projectname}}</option>
      </select>

      <select v-model="selected">
        <option disabled value selected>Choose a Task</option>
        <option v-for="(project,index) in projects" :key="index">{{project.projectname}}</option>
      </select>

      <input v-model="message" placeholder="Enter a message" />
      <p>Message is: {{ message }}</p>

      <h5>Multi Select Example</h5>
      <Multiselect />RADIO BUTTON
      <br />
      <br />

      <input type="radio" id="male" value="Male" v-model="gender" />
      Male&nbsp;&nbsp;&nbsp;
      <input type="radio" id="female" value="Female" v-model="gender" />
      Female
      <br />
      <br />
      Gender: {{gender}}
      <br />
      <br />CHECK BOX
      <br />
      <br />

      <input type="checbox" id="one" value="One" v-model="numberCheckbox" />
      One&nbsp;&nbsp;&nbsp;
      <input
        type="checbox"
        id="two"
        value="Two"
        v-model="numberCheckbox"
      />
      Two
      <br />
      <br />Number:
    </form>

    <p>
      Project Name:
      Project ID:
    </p>
  </div>
</template>

<script>
import Multiselect from "./Multiselect.vue";
export default {
  project: "",

  components: {
    //HelloWorld,
    Multiselect
  },

  props: {
    //message: 'test msg',
    //selected: ''
  },

  data() {
    return {
      projects: [
        { projectid: 201, projectname: "Boeing SMS" },
        { projectid: 202, projectname: "Aviation SMS" }
      ],

      tasks: [
        { projectid: 201, projectname: "Boeing SMS" },
        { projectid: 202, projectname: "Aviation SMS" }
      ],
      gender: "Male",
      numberCheckbox: []
    };
  },

  methods: {}
};
</script>
