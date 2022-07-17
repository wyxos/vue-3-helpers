<template>
  <div>
    <form v-if="form.isLoaded.value" @submit.prevent="$emit('submit')">
      <slot></slot>
    </form>
    <o-loading :active="form.isLoading.value"></o-loading>
    <o-button
      v-if="!form.isLoaded.value && !form.isLoading.value"
      @click="form.load()">
      An error occurred. Try again?
    </o-button>
  </div>
</template>

<script>
export default {
  name: 'WyxosForm',
  props: {
    form: {
      type: Object,
      required: true
    }
  },
  emits: ['submit']
}
</script>
