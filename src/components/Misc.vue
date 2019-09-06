<template>
  <div class="container-fluid">
    <br />

    <h5>{{greet('Night')}}</h5>

    <p>Name: {{name}}</p>

    <p>Title: {{title}}</p>

    <span>
      <input type="text" id="input1" v-model="testvmodel" />
    </span>
    <br />

    <p>Test V-Model: {{testvmodel}}</p>

    <hr />
    <h5>Rendering List using v-for:</h5>
    <ul>
      <li v-for="(skill,index) in skills" :key="index">
        Skill: {{skill.skill}}
        <br />
        Experience: {{skill.experience}}
      </li>
    </ul>Add a Skill:
    <br />Skill:
    <input type="text" name="txtSkill" id="txtSkill" v-model="skill" />
    <br />
    <br />Experience:
    <input type="text" name="txtExp" id="txtExp" v-model="experience" />
    <br />
    <br />

    <button class="btn btn-primary btn-sm" @click="addSkill(skill, experience)">ADD SKILL</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Mohammad Kabir",
      title: "Software Engineer",
      testvmodel: "Testing v-model",
      skill: "",
      experience: "",
      skills: [
        { skill: "Vue Js", experience: "5 years" },
        { skill: "React Js", experience: "2 years" },
        { skill: "Angular JS", experience: "1 year" }
      ]
    };
  },

  methods: {
    greet: function(time) {
      return "Good " + time + " " + this.name;
    },

    addSkill: function(skill, experience) {
      this.skills.push({ skill: skill, experience: experience });
      this.skill = "";
      this.experience = "";
    }
  }
};
</script>

<style>
</style>