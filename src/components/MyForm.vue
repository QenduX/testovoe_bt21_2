<template>
  <form class="form" name="form" @submit.prevent>
    <div class="form__block">
      <my-input label="Имя" v-model:inputValue="form.name"></my-input>
      <my-input label="Фамилия" v-model:inputValue="form.secondName"></my-input>
      <my-input label="Имя питомца" v-model:inputValue="form.petName"></my-input>
      <my-input label="Телефон" v-model:inputValue="form.tel"></my-input>
      <my-input label="Email" v-model:inputValue="form.mail"></my-input>
    </div>
    <my-button class="form__btn" @click="onUpdateData">Отправить</my-button>
  </form>
</template>

<script>
import MyButton from './UI/MyButton.vue'
import MyInput from './UI/MyInput.vue'
import { mapActions } from 'vuex'

export default {
  components: { MyButton, MyInput },
  name: 'my-form',
  data() {
    return {
      form: {
        name: '',
        secondName: '',
        petName: '',
        tel: '',
        mail: ''
      }
    }
  },
  methods: {
    ...mapActions({
      updateFormData: 'updateFormData'
    }),
    onUpdateData() {
      if (
        this.form.name &&
        this.form.secondName &&
        this.form.petName &&
        this.form.tel &&
        this.form.mail
      ) {
        this.updateFormData(this.form)
        this.$emit('update:isShow', false)
      }
    }
  }
}
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
}

.form__block {
  display: flex;
  flex-flow: row wrap;
  gap: 15px 10px;
}

.form__btn {
  margin-top: 40px;
}
</style>
