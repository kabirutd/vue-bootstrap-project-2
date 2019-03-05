<template>
  <div class="container-fluid">
      <h4>{{pageTitle}}</h4>
      <h5>Hello {{ their_name }}, this is an about page</h5>

    <p>
      ..</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
   
    return {
      their_name: this.$route.params.name,
       pageTitle: 'About Us'
    }
  }
}
</script>

