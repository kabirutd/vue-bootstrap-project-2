<template>
<div >
        <!-- variant="info" -->
    <b-navbar toggleable="md" type="dark"  variant="secondary">

    <b-navbar-toggle target="nav_collapse">toggle</b-navbar-toggle>

    <b-navbar-brand href="#">VUE BOOTSTRAP APPLICATION</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

        
        <!--
        <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>
        -->

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
        <!--
        <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
        -->

        <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
            <em>Mohammad Kabir</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
        </b-navbar-nav>

    </b-collapse>
    </b-navbar>

    <b-nav>

        <b-nav-item >
        <router-link class="routerLink" to="/">
                <strong>HOME</strong>
            </router-link>          
        </b-nav-item>

        <b-nav-item >
        <router-link class="routerLink"  to="/About">
                <strong>ABOUT</strong>
            </router-link>          
        </b-nav-item>

        <b-nav-item >
        <router-link class="routerLink"  to="/contacts">
                 <strong>CONTACTS </strong>
            </router-link>          
        </b-nav-item>
        <b-nav-item >
        <router-link class="routerLink"  to="/skills">
                 <strong>SKILLS </strong>
            </router-link>          
        </b-nav-item>
        

          <b-nav-item >
        <router-link class="routerLink"  to="/form">
                 <strong>FORM </strong>
            </router-link>          
        </b-nav-item>

        
          <b-nav-item >
        <router-link class="routerLink"  to="/misc">
                 <strong>MISC </strong>
            </router-link>          
        </b-nav-item>

        <b-nav-item-dropdown class="routerLink" text="VUE EXAMPLES" >

            <b-dropdown-item >
                <router-link class="routerLink"  to="/listblogs">
                LIST BLOGS USING MIXINS
                </router-link>
            </b-dropdown-item>

            <b-dropdown-item >
                <router-link class="routerLink"  to="/getblogposts">
                HTTP GET EXAMPLE USING AXIOS
                </router-link>
            </b-dropdown-item>

             <b-dropdown-item >
                <router-link class="routerLink"  to="/httppost">
                HTTP POST EXAMPLE
                </router-link>
            </b-dropdown-item>

             <b-dropdown-item >
                <router-link class="routerLink"  to="/dynamicform">
                DYNAMIC FORM USING SLOT
                </router-link>
            </b-dropdown-item>

            <b-dropdown-item >
                <router-link class="routerLink"  to="/dynamiccomponent">
                DYNAMIC COMPONENT
                </router-link>
            </b-dropdown-item>

            <b-dropdown-item >
                <router-link class="routerLink"  to="/contacts">
                ACCESS WEB API DATA USING AXIOS
                </router-link>
            </b-dropdown-item>

            <b-dropdown-item >
                <router-link class="routerLink"  to="/eventmodifier">
                EVENT MODIFIER
                </router-link>
            </b-dropdown-item>

             <b-dropdown-item >
                <router-link class="routerLink"  to="/Multiselect">
                FORM - MULTISELECT
                </router-link>
            </b-dropdown-item>

             <b-dropdown-item >
                <router-link class="routerLink"  to="/FormValidation">
                FORM - VALIDATION
                </router-link>
            </b-dropdown-item>

            <b-dropdown-item >
                <router-link class="routerLink"  to="/twowaydatabinding">
                TWO WAY DATA BINDING
                </router-link>
            </b-dropdown-item>

             <b-dropdown-item >
                <router-link class="routerLink"  to="/ComputedProperty">
               COMPUTED PROPERTIES
                </router-link>
            </b-dropdown-item>

            <b-dropdown-item >
                <router-link class="routerLink"  to="/ListRendering">
               LIST RENDERING
                </router-link>
            </b-dropdown-item>

            <b-dropdown-item >
                <router-link class="routerLink"  to="/Array">
               ARRAY
                </router-link>
            </b-dropdown-item>

            
          
        </b-nav-item-dropdown>

        <b-nav-item-dropdown class="routerLink" text="REPORTS" >

             <b-dropdown-item >
                <router-link class="routerLink"  to="/Reports/MrbReport">
                MRB REPORTS
                </router-link>
            </b-dropdown-item>

            <b-dropdown-item >
                <router-link class="routerLink"  to="/Reports/BntpReport">
                BNTP REPORTS
                </router-link>
            </b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
    </b-nav>
    <router-view/>
    </div>
</template>


<script>

export default {
  name: 'NavBarMenu',
  props: {
    msg: String
  }
}

</script>


<style scoped>

@import url("//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
.routerLink{
    color: black;
    text-decoration: none;
}
</style>