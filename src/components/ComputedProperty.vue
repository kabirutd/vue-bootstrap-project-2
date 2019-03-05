<template>
  <div class="container-fluid">
    <h4>{{headertitle}}</h4>
    <br>

    <div id="example">

        <input type="text" id="txtMsg" v-model="message" />&nbsp;&nbsp;
        <button class="btn btn-primary btn-sm" @click="reversedMessage()"> Reverse the Message</button>
      <p>Original message: "{{ message }}"</p>
      <p>Computed reversed message: "{{ reversedMessage }}"</p>
    </div>
  </div>


</template>

<script>
export default {
  name: "ComputedProperty",

  computed: {
    // a computed getter that gets cached..
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  },
  data() {
    return {
      their_name: this.$route.params.name,
      headertitle: "VUE - COMPUTED PROPERTIES",
      message: 'Hello'
    };
  }
};
</script>