<template>
  <div class="btn-group">
    <button @click="postRequest">POST</button>
    <button @click="deleteRequest">DELETE</button>
  </div>

  <Loader v-if="loading"/>

  <div v-else-if="!loading && posts.length" class="posts-wrapper">
    <PostElement v-for="post of posts" v-bind:post="post"
                 v-bind:index="post.id"/>
    <div class="pagination">
      <div @click="paginationRequest(str)" class="pagination__item" v-for="str of pagination">{{ str }}</div>
    </div>
  </div>
  <div v-else>{{ messageError }}</div>

</template>

<script>

import PostElement from './PostElement'
import {instance} from "../../api/api";
import Loader from "../Loader";

export default {
  data() {
    return {
      posts: [],
      messageError: '',
      loading: true,
      pagination: [1, 2, 3, 4, 5, 6, 7]
    }
  },
  components: {
    Loader,
    PostElement
  },
  methods: {
    postRequest() {
      instance.post('posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
      })
          .then(response => console.log(response.data))
          .catch(error => console.error(error))
    },
    deleteRequest() {
      instance.delete('posts/1',)
          .then(response => console.log(response))
          .catch(error => console.error(error))
    },
    paginationRequest(str) {
      this.loading = true
      instance.get(`posts?_page=${str}`)
          .then(response => {
            this.posts = response.data
            this.loading = false

          })
          .catch(error => {
            this.messageError = error
            this.loading = false

          })
    }
  },
  mounted() {
    instance.get('posts?_page=1')
        .then(response => {
          this.posts = response.data
          this.loading = false

        })
        .catch(error => {
          this.messageError = error
          this.loading = false

        })
  }
}
</script>

<style scoped>
.btn-group {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}

.btn-group button {
  margin-right: 5px;
  cursor: pointer;
}

.posts-wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 30px;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.pagination__item {
  padding: 5px;
  min-width: 20px;
  border: 1px solid aqua;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.4s ease;
}

.pagination__item:hover {
  border-color: teal;
}
</style>
