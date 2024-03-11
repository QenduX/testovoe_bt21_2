<template>
  <div class="main">
    <h1>Главная</h1>
    <div class="main__block">
      <div class="main__info" v-if="formData.name">
        <span> name: {{ formData.name }}</span>
        <span> secondName: {{ formData.secondName }}</span>
        <span> petName: {{ formData.petName }}</span>
        <span> tel: {{ formData.tel }}</span>
        <span> mail: {{ formData.mail }}</span>

        <span> {{ formData }}</span>
      </div>
      <my-button class="main__btn" @click="onShowPopup">Начать</my-button>
    </div>
    <my-popup v-model:isShow="popupState">
      <my-form v-model:isShow="popupState"></my-form>
    </my-popup>
  </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue'
import MyPopup from '@/components/MyPopup.vue'
import MyForm from '@/components/MyForm.vue'
import { mapState } from 'vuex'

export default {
  components: { MyButton, MyPopup, MyForm },
  data() {
    return {
      popupState: false
    }
  },
  methods: {
    onShowPopup() {
      this.popupState = true
    }
  },
  computed: {
    ...mapState({
      formData: (state) => state.formData
    })
  }
}
</script>

<style>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
}

.main__block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.main__info {
  display: flex;
  flex-direction: column;
}

.main__btn {
  width: 150px;
  margin-top: 24px;
}
</style>
