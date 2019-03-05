<template>
  <div class="hello">
    <h1>{{pageTitle}}</h1>
    Contact us page content!
  </div>
</template>

<script>
export default {
  name: 'Contact',
  props: {
    //msg: String
  },

  data()
  {

    return {
      pageTitle: 'Contat Us'

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
