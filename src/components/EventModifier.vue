<template>

<div class="container-fluid">

    <br/>

    <h5>{{header}}</h5><br/><br/>

    My age is: {{age}} <br/><br/>

    Once Modifier - v-on:click.once: <br/><br/>
    <button class="btn btn-primary btn-sm" v-on:click.once="add(1)">Add a year (only Once)</button>&nbsp;
    <button class="btn btn-primary btn-sm" v-on:click="subtract(1)">Subtract a year</button>&nbsp;
    <button class="btn btn-primary btn-sm" v-on:dblclick="add(10)">Add 10 years (Dbl Click)</button>&nbsp;
    <button class="btn btn-primary btn-sm" v-on:dblclick="subtract(10)">Subtract 10 years (Dbl Click)</button>
    <br/><br/>
    <a v-on:click.prevent="click()" href="">Example of prevent event modifier (v-on:click.prevent="click()" )</a>
    <div id="canvas" v-on:onmousemove="updateXY()">

        X: {{x}}<br/>
        Y: {{y}} <br/>

    </div>


</div>

</template>

<script>

export default{


    data(){

        return{

            header: "VUE - Event & Event Modifier",
            age: 25,
            x:0,
            y:0

        }

    },

    methods:{

        add: function(increase){

            return this.age+=increase;

        },

        subtract: function(decrease){

            return this.age -= decrease;

        },

        updateXY: function(event){

            this.x = event.offsetX;
            this.y = event.offsetY;

        },

        click: function()
        {
            alert ('You clicked me');
        },
        greet: function(time){

            return ('Good ' + time + ' ' + this.name);


        },

        addSkill: function(skill,experience){

            this.skills.push({skill:skill , experience:experience });
            this.skill='';
            this.experience='';
        }


    }


};

</script>

<style>

</style>