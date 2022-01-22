<template>
  <div class="field">
    <input :type="field.type"
           :placeholder="field.placeholder"
           :required="field.required"
           :maxlength="field.maxLength">
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    field: {}
  }
}
</script>

<style>

</style>
