<script>
export default {
  name: 'WyxosButton',
  props: {
    loading: {
      default: false,
      type: Boolean
    }
  }
}
</script>
<template>
  <o-button :disabled="loading">
    <slot>Button content</slot>
    <i v-if="loading" class="fas fa-spinner fa-spin"></i>
  </o-button>
</template>
