<template>
  <div class="container-fluid">
    <!--<h1>{{ msg }} - Jamais</h1>-->
    <br />
    <b-jumbotron>
      <template slot="header">Vue Application Using Bootstrap</template>
      <template slot="lead">
        This is a sample Vue Application that uses bootstrap for styling. This app also
        has a few dynamic pages such as procesing form using basic CRUD, fetching data from api.
        <br />
        <br />Hosting this dynamic application on Azure Storage for almost no cost. Thanks to the
        power of Vue's SPA and Microsoft's Static website hosting ability on Azure Storage.
        <br />
        <br />Successfully Embedded Tableau Reports in Vue app so now I can Develop Dynamic
        Full Stack Applications along with very powerful Reporting Dashboard
        using Vue, React, Restful Web APIs, Tableau, Power BI.
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

    <!--
    <b-alert show>Default Alert</b-alert>

    <div>
      <b-btn v-b-popover.hover="'I am popover content!'" title="Popover Title">Hover Me</b-btn>
    </div>
    -->
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
