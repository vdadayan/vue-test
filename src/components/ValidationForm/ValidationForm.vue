<template>
  <va-form style="width: 300px"
           @submit="onSubmit"
  >
    <va-input
        v-model="v$.form.inn.$model"
        class="mt-2"
        type="text"
        label="ИНН"
        :error="v$.form.inn.$error"
        :errorMessages="v$.form.inn.$error? '10 ил 12 символов' : ''"
        placeholder="ИНН"
        @input="checkINN"
    />
    <va-input class="mt-2"
              label="КПП"
              v-model.trim="v$.form.kpp.$model"
              :error="v$.form.kpp.$error"
              :errorMessages="v$.form.kpp.$error? 'sadasdas' : ''"

    />
    <va-date-input class="mt-2" :formatDate="format" v-model="v$.form.date.$model"
                   :error="v$.form.date.$error"

    />
    <div class="date-error" v-if="v$.form.date.$error">Введите дату</div>
    <va-button type="submit" class="mt-4" @click="onSubmit"
               :disabled="v$.form.$invalid"
    >
      Отправить форму
    </va-button>
    <va-button type="submit" class="mt-4" @click="onSubmit"
    >
      Проверить валидация
    </va-button>
  </va-form>
</template>

<script>
import moment from 'moment'
import useVuelidate from '@vuelidate/core'
import {required, requiredIf,} from '@vuelidate/validators'
import {ref} from "vue";

const validateINN = (value) => value.length === 10 || value.length === 12
const fieldLength = ref(10)

export default {
  name: 'Validate',
  setup() {
    return {v$: useVuelidate()}
  },

  data() {
    return {
      form: {
        inn: '',
        kpp: '',
        date: '',
        kppRequired: false
      },
    }
  },
  validations() {
    return {
      form: {
        inn: {required, validateINN},
        kpp: {required: requiredIf(() => this.v$.form.kppRequired.$model)},
        date: {required},
        kppRequired: false
      }
    }
  },
  methods: {
    checkINN() {
      if (this.v$.form.inn.$model.length === 9) {
        this.v$.form.kppRequired.$model = true
      } else {
        this.v$.form.kppRequired.$model = false

      }
    },
    format(date) {
      return moment(date).format('YYYY-MM-DD')
    },
    onSubmit() {
      this.v$.form.$validate()
    }
  },
}
</script>

<style scoped>
.date-error {
  color: red;
}
</style>
