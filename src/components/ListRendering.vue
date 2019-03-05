<template>
  <div class="container-fluid">
    <h4>{{headertitle}}</h4>
    <br>

    <h5>Simple v-for</h5>
    <ul id="example-1">
      <li v-for="item in items" :key="item.message">{{ item.message }}</li>
    </ul>

    <br>

    <h5>v-for with one item Object  using key and index</h5>

    <ul id="v-for-object" class="demo">
      <li v-for="(value,key,index) in object" :key="value.id">
        
         {{index}}. {{key}}: {{ value }}
        
        </li>
    </ul>
    
    
  <!--<h5>v-for with Multiple Items Object rendered in a table</h5>-->

  
     <h5>Simple Todo List with Add and Delete Option</h5>

      <input type="text" id="" placeholder="i.e Do homwwork"  v-model="todoitem"/> &nbsp;
    <button class="btn btn-primary btn-sm" v-on:click="addTodo()">Push Name</button>&nbsp;
    <br/><br/>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th></th>
       
        </tr>
      </thead>
      <tbody>
        <tr v-for="(todo,index) in todos" :key="todo.id">
          <td>{{todo.id}}</td>
          <td>{{todo.title}}</td>
          <td><button class="btn btn-primary btn-sm" @click="deleteTodo(index)">REMOVE</button></td>
        
        </tr>
      </tbody>
    </table>

    <br/>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>FIRST NAME</th>
          <th>LAST NAME</th>
          <th>AGE</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{user.id}}</td>
          <td>{{user.firstName}}</td>
          <td>{{user.lastName}}</td>
          <td>{{user.age}}</td>
        </tr>
      </tbody>
    </table>

    <br/>
    <h5>v-for with Multiple Items Object</h5>
    
    <ul id="v-for-object" class="demo">
      <li v-for="(user, key) in users" :key="key">
        {{ user.id }}
        <br>
        {{ user.firstName }}
        <br>
        {{ user.lastName }}
        <br>
         {{ user.age }}
        <br>
      </li>
    </ul>

   


  </div>
</template>

<script>
export default {
  name: "ListRendering",

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
    addTodo: function()
    {
      this.todos.push(
        {
          id: this.nextTodoId++,
          title: this.todoitem

        }

      )
      this.todoitem=''
    },

     deleteTodo: function(index)
    {
      this.$delete(this.todos, index)
      //this.todos.$remove
      //this.items.splice(index, 1);
      
    }
  },
  data() {
    return {
      their_name: this.$route.params.name,
      headertitle: "VUE - LIST RENDERING",
      message: "Hello",
      todoitem: '',
      items: [{ message: "Foo" }, { message: "Bar" }],

      object: {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        age: 30
      },

      todos: [
        {id:1, title: "Take Trash out.."},
        {id:2, title: "Drive home.."},
        {id:3, title: "Play hoops.."}

      ],

      nextTodoId: 4,
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