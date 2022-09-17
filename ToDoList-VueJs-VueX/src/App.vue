<template>
  <h1 class="important">بسم الله الرحمن الرحیم</h1>
  <hr>

  <div class="text">
    <h1>تودولیست کاربردی</h1>
    <!-- <h4>Create Todo List :</h4> -->
  </div>

  <div class="main">
    <input type="text"
      v-model="newTodo"
      placeholder="Add a New Todo"
      @keyup.enter="addTodo"
    >
    <button @click="addTodo">ADD TODO</button>
  </div>

  <Todo v-for="(todo, index) in $store.state.todos" :key="index" :todo="todo"/>
  <!-- <Todo v-for="(todo, index) in todos" :key="index"/> -->
</template>

<script>
import Todo from './components/Todo.vue';
export default {
  name: 'App',
  components: {Todo},
  data() {
    return {
      newTodo: ''
    }
  },
  methods: {
    addTodo(){
      if(this.newTodo){
        this.$store.dispatch('add_todo', this.newTodo)
        this.newTodo = ''
      }
    }
  },
  computed: {
    todos(){
      return this.$store.state.todos
    }
  }
}
</script>

<style lang="scss">

$color1: #fff;
$color2: rgb(82, 231, 82);
$color3: blue; 
$num: 0.5rem;

@mixin demo($clr, $mb){
  color: $clr;
  margin-bottom: $mb;
}
%btn {
  border-radius: 0.3rem;
  border: none;
  cursor: pointer;
  padding: 0.8rem;
  color: $color1;
  font-weight: bold;
  font-size: 1rem;
}

* {padding: 0; margin: 0; box-sizing: border-box;
  font-family: 'B Yekan', Avenir, Helvetica, Arial, sans-serif;
}
body{background: #152c42;}
#app {  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
h1.important{
    color: $color2;
    margin-bottom: 1rem;
 }
.text{
  h1{
    @include demo($color1, 4rem);
    margin-top: 1rem;

  }
}
.main{
  width: 50%;
  margin: auto;
  text-align: center;
  input{
    width: 20rem;
    padding: $num;
    font-size: 1.5rem;
    background: transparent;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    @include demo($color1, 1.5rem);
    transition: border-color 0.8s;
    &:focus{
      border-color: $color2;
    }
    &::placeholder{
      color: #ccc;
    }
  }
  button{
    @extend %btn;
    background: $color2;
    margin-left: $num;
    color: #000;
    &:active{background: green;}
  }
}

</style>
