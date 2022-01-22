<template>
  <h2>Цепочка запросов</h2>
  <router-link to="/">Главная</router-link>
  <Posts/>
</template>
<script>
import Posts from "../components/Request/Posts";

export default {
  components: {Posts},

}
</script>
