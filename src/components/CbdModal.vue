<script setup>
import IconX from './icons/IconX.vue'

defineProps({
  show: Boolean
})
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-borde">
          <div class="modal--header">
            <h3>
              <slot name="header">Titulo del modal</slot>
            </h3>
            <label class="modal-default-button" @click="$emit('close')"><IconX /></label>
          </div>
          <hr />
          <slot name="body">Contenido del modal</slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
hr {
  margin: 0;

  padding: 0;
  border: 0;
  height: 1px;
  background-color: #2d323a;
  width: 100%;
}

h3 {
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 0.013rem;
  color: rgb(68, 243, 199);
}

.modal-borde {
  border: 1px solid #ffffff08;
  border-radius: 12px;
  padding: 0.5rem;
}

.modal--header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.64);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 300px;
  margin: auto;
  padding: 0.2rem;
  background-color: #1e2229;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-default-button {
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #757575;
  background-color: transparent;

  cursor: pointer;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
