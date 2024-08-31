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
      <RouterLink to="/account"><IconUser /> <span>Mi perfil</span></RouterLink>
    </nav>
  </header>

  <main class="main">
    <RouterView />
  </main>
</template>

<style scoped>
nav a.router-link-exact-active {
  color: rgba(60, 60, 60.29);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}
</style>
