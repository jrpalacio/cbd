<script setup>
import { RouterLink, RouterView } from 'vue-router'
import IconHelp from './components/icons/IconHelp.vue'
import IconDropper from './components/icons/IconDropper.vue'
import IconUser from './components/icons/IconUser.vue'
</script>

<template>
  <header class="navbar">
    <nav>
      <RouterLink to="/"> <IconDropper /> <span>Toma diaria</span> </RouterLink>
      <RouterLink to="/questions"> <IconHelp /> <span>Preguntas frecuentes</span></RouterLink>
      <RouterLink to="/account"><IconUser /> <span>Tienda en linea</span></RouterLink>
    </nav>
  </header>

  <main class="main">
    <RouterView />
  </main>
</template>

<style scoped>
a {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  display: flex;
  gap: 0.8rem;
}

nav a.router-link-exact-active {
  color: rgba(60, 60, 60.29);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}
</style>
