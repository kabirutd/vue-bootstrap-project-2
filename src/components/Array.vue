<template>
  <div class="container-fluid">
    <h4>{{headertitle}}</h4>
    <br>

    <h5>ARRAY USING PUSH, POP, SHIFT, UNSHIFT</h5>
    <ul id="example-1">
      <li v-for="user in userArr" :key="user">{{ user }}</li>
    </ul>

    <input type="text" id="" placeholder="Push name to array"  v-model="username"/> &nbsp;
    <button class="btn btn-primary btn-sm" v-on:click="pushName()">Push Name</button>&nbsp;

    <button class="btn btn-primary btn-sm" v-on:click="popName()">Pop Name</button>&nbsp;

    <button class="btn btn-primary btn-sm" v-on:click="shiftName()">Shift Name</button>&nbsp;

    <button class="btn btn-primary btn-sm" v-on:click="unshiftName()">Unshift Name</button>

    <br>

     
 
  </div>
</template>

<script>
export default {
  name: "Array",

  computed: {
    // a computed getter that gets cached..
    reversedMessage: function() {
      // `this` points to the vm instance
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  },
  methods:{

      pushName: function(){
           this.userArr.push(this.username);
      },

      popName: function(){
           this.userArr.pop();
      },

      shiftName: function(){
          alert ("Took off name: " + this.userArr.shift());
      },

      unshiftName: function(){
          alert("New array length: " + this.userArr.unshift(this.username));
      },



  },
  data() {
    return {
        username: '',
      their_name: this.$route.params.name,
      headertitle: "VUE - ARRAY",
      message: "Hello",
      items: [{ message: "Foo" }, { message: "Bar" }],

      object: {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        age: 30
      },

    userArr: [

        "Mohammad Kabir", "Mohammad Sagir", "Mohammad Sabir"

    ],
         
      
      users: [
        {
          id: 1,
          firstName: "Mohammad",
          lastName: "Kabir",
          age: 30
        },

        {
          id: 2,
          firstName: "Mohammad",
          lastName: "Jabir",
          age: 20
        },

        {
          id: 3,
          firstName: "Mohammad",
          lastName: "Sabir",
          age: 40
        }
      ]
    };
  }
  //}
};
</script>