<template>
  <button class="btn"><slot></slot></button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.btn {
  font-size: 18px;
  color: #ffffff;
  background: #2e4ce6;
  padding: 16px 32px;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s ease-in;
}

.btn:hover {
  opacity: 0.8;
}
</style>
