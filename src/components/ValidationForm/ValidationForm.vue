<template>
  <form @submit.prevent>
    <Input v-for="field of inputs" v-bind:field="field"/>
    <button>Отправить</button>
  </form>
</template>

<script>
import Input from "./Input";

export default {
  components: {Input},
  data() {
    return {
      inputs: [
        {name: 'INN', type: 'text', placeholder: 'ИНН', required: true, maxLength: 10 || 12},
        {name: 'KPP', type: 'text', placeholder: 'КПП', required: false, maxLength: 9},
        {name: 'date_create', type: 'date', placeholder: 'дата создания', required: false}
      ]
    }
  },
  methods: {
    changeInput() {

    }
  }
}
</script>

<style scoped>

</style>
