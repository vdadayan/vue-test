<template>
  <h2>Права доступа</h2>
  <router-link to="/">Главная</router-link>
  <div class="access-wrapper">
    <div class="link-group">
      <router-link active-class="active"  to="/access/home">Home</router-link>
      <router-link active-class="active" v-if="permissions !== 'Admin'" to="/access/reports">Reports</router-link>
      <router-link active-class="active" v-if="permissions !== 'User'" to="/access/settings">Settings</router-link>
    </div>
    <div class="access-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      permissions: ''
    }
  },
  mounted() {
    localStorage.setItem('permissions', this.permissions)
  }
}
</script>

<style scoped>
.access-wrapper {
  display: flex;

}

.link-group {
  display: flex;
  flex-direction: column;
}

.access-content {
  display: flex;
  justify-content: center;
  flex-grow: 1;
}
.active {
  color: orange;
}
</style>
