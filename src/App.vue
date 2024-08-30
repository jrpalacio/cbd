<script setup>
import { RouterLink, RouterView } from 'vue-router'
import IconHelp from './components/icons/IconHelp.vue'
import IconDropper from './components/icons/IconDropper.vue'
import IconUser from './components/icons/IconUser.vue'
</script>

<template>
  <header class="navbar">
    <nav>
      <RouterLink to="/"><IconDropper /> Toma diaria</RouterLink>
      <RouterLink to="/questions"> <IconHelp /> Preguntas frecuentes</RouterLink>
      <RouterLink to="/account"><IconUser /> Cuenta</RouterLink>
    </nav>
  </header>

  <main class="main">
    <RouterView />
  </main>
</template>

<style scoped>
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

@media (min-width: 1024px) {
}
</style>
