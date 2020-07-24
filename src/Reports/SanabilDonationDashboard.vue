<template>
  <div class="container-fluid">
      <h5>{{pageTitle}}</h5>

      <div>
  <b-embed type="iframe"
           aspect="16by9"
           src="https://public.tableau.com/views/SANABIL-FOUNDATION-DONATION-DASHBOARD/Cockpit-Donations?iframeSizedToWindow=true&:embed=true&:showAppBanner=true&:display_count=yes&:showVizHome=no"
           height="500px"
           allowfullscreen

           
  >
  </b-embed>
</div>

  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
   
    return {
      //their_name: this.$route.params.name,
       pageTitle: 'SANABIL DONATION DASHBOARD'
    }
  }
}
</script>

<style scoped>
</style>
