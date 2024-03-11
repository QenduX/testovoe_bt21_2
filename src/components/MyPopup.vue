<template>
  <div class="popup" :class="isShow ? 'popup--active' : ''" @click="onHidePopup">
    <div class="popup__bg"></div>
    <div class="popup__wrapper" @click.stop>
      <h2 class="popup__title">Заголовок</h2>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-popup',
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onHidePopup() {
      this.$emit('update:isShow', false)
    }
  }
}
</script>

<style>
.popup {
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  pointer-events: none;
  user-select: none;
  transition: opacity 0.2s ease;
}

.popup--active {
  opacity: 1;
  pointer-events: all;
  user-select: auto;
}

.popup__bg {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.popup__wrapper {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  background: #ffffff;
  width: 100%;
  max-width: 500px;
  padding: 20px;
  border-radius: 8px;
}

.popup__title {
  font-size: 24px;
  text-align: center;
  margin-bottom: 24px;
}
</style>
