<script setup>
import ChevronRight from '@/components/icons/ChevronRight.vue'
import logo from '@/assets/logo-happylive.webp'

const urlShop =
  'https://s.happylive.mx:1035/h/iCommerce/templates/Happylive/CarritoCompras/index.jsp?ID=2270'
</script>

<template>
  <div>
    <img class="logo--happy" :src="logo" alt="logo happy live" />
    <a :href="urlShop" target="_blank" rel="noopener noreferrer">Tienda en linea</a>
    <ul>
      <li>
        <p>Cedis</p>
        <ChevronRight />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.logo--happy {
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
  display: block;
}
ul {
  list-style: none;
  cursor: pointer;
  & li {
    background-color: #565656;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
}
</style>
