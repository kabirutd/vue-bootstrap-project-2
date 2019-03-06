<template>
  <div class="container-fluid">
    <form-helper>
      <div slot="form-header">
        <br>
        <h5>HEALTH QUESTIONS FORM</h5>
      </div>

      <div slot="form-info">
        <br>
        <h5>This is the health questions form for our valued members.</h5>
      </div>

      <div slot="form-fields">
        <br>

        <div class="card draggable">
          <div class="card-header">
            <strong>USER INFO FORM</strong>
          </div>
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                >
                <small
                  id="emailHelp"
                  class="form-text text-muted"
                >We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                >
              </div>
              <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>

      <div slot="form-controls">
        <br>
        <!--<button class="btn btn-primary btn-sm">SUBMIT</button>-->
      </div>
    </form-helper>
  </div>
</template>


<script>
import FormHelper from "@/components/formHelper.vue";

export default {
  components: {
    "form-helper": FormHelper
  }
};
</script>


<style>
</style>