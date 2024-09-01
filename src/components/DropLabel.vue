<script>
export default {
  name: 'DropLabel',
  props: {
    portion: {
      type: Number,
      required: true
    }
  }
}
</script>

<template>
  <strong>{{ portion }} {{ portion === 1 ? 'gota ' : 'gotas ' }} </strong>
</template>
