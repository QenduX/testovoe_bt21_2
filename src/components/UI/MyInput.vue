<template>
  <label class="input">
    <span class="input__text">{{ label }}:</span>
    <input
      class="input__area"
      type="text"
      name="name"
      required
      @input="updateValue"
      :value="inputValue"
    />
  </label>
</template>

<script>
export default {
  name: 'my-input',
  props: {
    label: String,
    inputValue: [String, Number]
  },
  methods: {
    updateValue(event) {
      this.$emit('update:inputValue', event.target.value)
    }
  }
}
</script>

<style>
.input {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: calc(50% - 5px);
}

.input__text {
  font-size: 16px;
  margin: 0 0 4px 4px;
}

.input__area {
  font-size: 16px;
  width: 100%;
  padding: 4px 8px;
  border: 1px solid #acacac;
  border-radius: 8px;
}
</style>
