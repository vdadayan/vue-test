<template>
  <div>
    <h2>Todo Application</h2>
    <router-link to="/">Главная</router-link>
    <AddTodo @add-todo="addTodo"/>
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not Completed</option>
    </select>
    <button @click="sortName">Toggle sort by name</button>
    <hr>
  </div>
  <Loader v-if="loading"/>
  <Todolist v-else-if="filteredTodos" v-bind:todos="filteredTodos" @remove-todo="removeTodo"/>
  <p v-else>No todo</p>
</template>


<script>
import Todolist from '../components/Todo/TodoList'
import AddTodo from '../components/Todo/AddTodo'
import Loader from '../components/Loader'

export default {
  name: 'App',
  data() {
    return {
      todos: [],
      loading: true,
      filter: 'all',
      sort: true
    }
  },
  computed: {
    filteredTodos() {
      if (this.filter === 'all') {
        return this.todos
      }
      if (this.filter === 'completed') {
        return this.todos.filter(item => item.completed)
      }
      if (this.filter === 'not-completed') {
        return this.todos.filter(item => !item.completed)
      }
    }
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },
    addTodo(todo) {
      this.todos.push(todo)
    },
    sortName() {
      this.sort ? this.todos.sort(this.byFieldUp('title')) : this.todos.sort(this.byFieldDown('title'))
      this.sort = !this.sort
    },
    byFieldUp(field) {
      return (a, b) => a[field] > b[field] ? 1 : -1;
    },
    byFieldDown(field) {
      return (a, b) => a[field] < b[field] ? 1 : -1;
    },
  },
  components: {
    Todolist,
    AddTodo,
    Loader
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
        .then(response => response.json())
        .then(json => {
          this.todos = json
          this.loading = false
        })
  }
}
</script>
