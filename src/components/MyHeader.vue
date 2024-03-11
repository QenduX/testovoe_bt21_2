<template>
  <header class="header">
    <nav>
      <ul class="header__list">
        <li class="hader__item" v-for="link in links" :key="link.name">
          <router-link :to="link.path">{{ link.name }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'my-header',
  data() {
    return {
      links: [
        { name: 'Главная', path: '/' },
        { name: 'Вторая страница', path: '/second' }
      ]
    }
  }
}
</script>

<style>
.header {
  padding: 16px 32px;
  border-bottom: 1px solid #000000;
}

.header__list {
  display: flex;
  justify-content: center;
}

.hader__item {
  margin-left: 30px;
}

.hader__item:first-child {
  margin-left: 0;
}
</style>
