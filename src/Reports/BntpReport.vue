<template>
  <div class="container-fluid">
      <h5>{{pageTitle}}</h5>

      <div>
  <b-embed type="iframe"
           aspect="16by9"
           src="https://public.tableau.com/views/BNTP_REPORT/BNTP-REQS-WEEKLY-DR-DT?iframeSizedToWindow=true&:embed=true&:showAppBanner=true&:display_count=yes&:showVizHome=no"
           height="500px"
           allowfullscreen
  >
  </b-embed>
</div>
<!--
<div>
  <b-embed type="iframe"
           aspect="16by9"
           src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
           allowfullscreen
  ></b-embed>
</div>
-->
     <!--
       <iframe src="http://tableau.luminatorusa.com:8000/views/ORDERS/Orders-DB?iframeSizedToWindow=false&:embed=y&:showAppBanner=true&:display_count=no&:showVizHome=yes" width="1400" height="600" style="border:none;"></iframe>

    -->
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
   
    return {
      //their_name: this.$route.params.name,
       pageTitle: 'BNTP REPORT'
    }
  }
}
</script>

<style scoped>

</style>

