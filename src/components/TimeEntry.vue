<template>
  <div class="container-fluid">
    <!--<h1>{{ msg }} - Jamais</h1>-->
    <br>
    <b-jumbotron>
      <template slot="header">Bootstrap Vue Application</template>
      <template slot="lead">
        This is a sample Bootstrap Vue Application that uses bootstrap for styling. THis app also
        has a few dynamic pages such as procesing form using basic CRUD, fetching data from api.
        .
      </template>
      
    </b-jumbotron>
    <!--<b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">-->
    <!--
    <template slot="header">
      Bootstrap Vue
    </template>
    <template slot="lead">
      This is a simple hero unit, a simple jumbotron-style component for
      calling extra attention to featured content or information.
    </template>
    <hr class="my-4">
    <p>
      It uses utility classes for typography and spacing to space content
      out within the larger container.
    </p>
  </b-jumbotron>
    -->
    <b-alert show>Default Alert</b-alert>

    <div>
      <b-btn v-b-popover.hover="'I am popover content!'" title="Popover Title">Hover Me</b-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String
  }
};
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
