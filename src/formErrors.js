import { ref } from 'vue'

const formErrors = ref({
  default: []
})

export default function useFormErrors() {
  return {
    createBag(bag){
      formErrors.value[bag] = []
    },
    set(error, bag = 'default') {
      const hasValidationErrors =
        error.response && error.response.data && error.response.data.errors

      if (!hasValidationErrors) {
        throw error
      }

      formErrors.value[bag] = Object.keys(error.response.data.errors).map(
        (key) => {
          return {
            key,
            message: error.response.data.errors[key][0]
          }
        }
      )

      throw error
    },
    get(key, bag = 'default') {
      const target = formErrors.value[bag]

      if (!target) {
        return
      }

      const match = target.find((error) => error.key === key)

      if (!match) {
        return
      }

      return {
        message: match.message,
        variant: 'danger'
      }
    },
    clear(key, bag = 'default') {
      if (key) {
        const target = formErrors.value[bag]

        if (!target) {
          console.warn(`Bag ${bag} is not defined.`)
          return
        }

        const index = target.findIndex((error) => error.key === key)

        target.splice(index, 1)

        return
      }

      formErrors.value[bag] = []
    }
  }
}
