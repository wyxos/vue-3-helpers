<script>
import useFormErrors from './formErrors'

export default {
  name: 'WyxosInput',
  props: {
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required: true
    },
    bag: {
      type: String,
      default: 'default'
    }
  },
  setup() {
    const errors = useFormErrors()

    return {
      errors
    }
  }
}
</script>
<template>
  <o-field :label="label" v-bind="errors.get(name, bag)">
    <o-input v-bind="$attrs" @focus="errors.clear(name, bag)"></o-input>
  </o-field>
</template>
