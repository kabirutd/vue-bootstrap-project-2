<template>
  <div class="container-fluid">
    <br>
    <h3>{{header}}</h3>

    <br/>
    <h5>INPUT BOX:</h5>

    <input
      type="text"
      id="input1"
      placeholder="Two way data binding example using v-model"
      v-model="testvmodel"
    >

    <br>
    <br>

    <span>Test V-Model: {{testvmodel}}</span>
    <br>
    <br>

    <div id="example-3">
      <h5>MULTIPLE CHECK BOXES:</h5>
      <input type="checkbox" id="Kabir" value="Kabir" v-model="checkedNames">&nbsp;
      <label for="Kabir">Kabir</label>&nbsp;
      <input type="checkbox" id="Jabir" value="Jabir" v-model="checkedNames">&nbsp;
      <label for="Jabir">Jabir</label>&nbsp;
      <input type="checkbox" id="Sabir" value="Sabir" v-model="checkedNames">&nbsp;
      <label for="Sabir">Sabir</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>
    <br/>
    <div id="radiobox">
      <h5>MULTIPLE RADIO BOXES:</h5>

      <input type="radio" id="one" value="One" v-model="picked">&nbsp;
      <label for="one">One</label>&nbsp;
      <br>
      <input type="radio" id="two" value="Two" v-model="picked">&nbsp;
      <label for="two">Two</label>&nbsp;
      <br>
      <span>Picked: {{ picked }}</span>
    </div>
    <br/>
    <div id="selectbox">
      <h5>SELECT BOX:</h5>

      <select v-model="selected">
        <option disabled value>Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select><br/>
      <span>Selected: {{ selected }}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      testvmodel: "",
      header: "VUE - Two Way Data Binding",
      checkedNames: [],
      picked: "",
      selected: ''
    };
  }
};
</script>

<style scoped>
input[type="text"] {
  width: 400px;
}
</style>