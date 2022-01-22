<template>
  <div class="post">
    <ins>{{post.id}}</ins>
    <h4 class="post__title">{{ post.title}}</h4>
    <div class="post__body">{{post.body}}</div>
  </div>
</template>

<script>
export default {
  props: {
    post: {

    }
  }
}
</script>

<style scoped>
  .post {
    display: flex;
    max-width: 30%;
    flex-direction: column;
    align-items: center;
    border-radius: 12px;
    border: 1px solid #cceeff;
    padding: 10px;
    margin-bottom: 10px;
  }
</style>
