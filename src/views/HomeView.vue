<template>
  <div>
    <h2>Home</h2>
    <p>Главная страница</p>
    <div>
      <router-link to="/todos">Todos</router-link>
      <router-link to="/chain">Цепочка запросов</router-link>
      <router-link to="/validation">Валидация</router-link>
    </div>
  </div>
</template>

<style scoped>
  div {
    display: flex;
    flex-direction: column;
  }
</style>
