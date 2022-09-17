<template>
    <div class="ju-sp-between">
      <h2 :class="{complete: todo.completed}">{{ todo.title }}</h2>
      <div class="btns">
        <button @click="deleteTodo" class="btn1">DELETE</button>
        <button @click="toggleTodo" class="btn2">{{ todo.complete ? 'UNDO' : 'DONE' }}</button>
      </div>
    </div>
</template>

<script>

export default {
props: ['todo'],
data() {
    return {
       
       }
    },
    methods: { 
        deleteTodo(){
          this.$store.dispatch('delete_todo', this.todo)
        },
        toggleTodo(){
          this.$store.dispatch('toggle_todo', this.todo)
        }
    },
}
</script>

<style lang="scss">
  $color1: #fff;
  $color2: rgb(45, 240, 181);
  $num: 0.8rem;

  %btn {
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  padding: $num;
  color: #000;
  font-weight: bold;
  font-size: $num;
  margin: 0 0.2rem;
  width: 5rem;
}
%box{
  border-radius: 0.5rem;
  background: rgb(48, 48, 136);
  padding: $num;
  color: $color1;
}
  .complete{
    text-decoration: line-through;
    border-color: red;
  }
  .ju-sp-between{
    width: 30rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @extend %box;
    margin-bottom: $num;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
    button.btn1{
      @extend %btn;
      background: rgb(82, 231, 82);
      &:active{background: green}
    }
    button.btn2{
      @extend %btn;
      background: red;
      color: $color1;
      &:active{background: rgb(216, 0, 0)}
    }
    h2{
      color: $color1;
    }
  }
</style>