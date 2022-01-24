<template>
  <div>
    <h2>Home</h2>
    <p>Главная страница
      <va-icon
          name="home"
          size="small"/>
    </p>

    <div>
      <router-link to="/todos">Todos</router-link>
      <router-link to="/chain">Цепочка запросов</router-link>
      <router-link to="/validation">Валидация</router-link>
      <router-link to="/access">Права доступа</router-link>
    </div>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}
</style>
