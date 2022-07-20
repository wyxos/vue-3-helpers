import axios from 'axios'
import { reactive, ref } from 'vue'
import useFormErrors from './formErrors'

export default class WyxosFormBuilder {
  loadPath = ''
  submitPath = ''
  bag = 'default'
  model = reactive({})
  form = reactive({})
  original = reactive({})
  isLoading = ref(false)
  isLoaded = ref(true)
  isSubmitting = ref(false)
  isSubmitted = ref(false)

  static create(options) {
    const instance = new WyxosFormBuilder()

    instance.setPath(options.submitPath)

    instance.loadPath = options.loadPath

    instance.setErrors(options.errorBag)

    instance.setAttributes(options.form)

    return instance
  }

  setPath(path) {
    this.submitPath = path
  }

  setErrors(bag) {
    this.bag = bag

    this.errors = useFormErrors()
  }

  setAttributes(attributes) {
    Object.assign(this.form, attributes)

    Object.assign(this.original, attributes)
  }

  getError(key) {
    return this.errors.get(key, this.bag)
  }

  clearError(key){
    this.errors.clear(key, this.bag)
  }

  async submit(path, formatter, config = {}) {
    this.errors.clear(null, this.bag)

    this.isSubmitting.value = true

    this.isSubmitted.value = false

    const payload = formatter
      ? formatter(Object.assign({}, this.form))
      : JSON.parse(JSON.stringify(this.form))

    const { data } = await axios
      .post(path || this.submitPath, payload, config)
      .catch((error) => {
        this.isSubmitting.value = false

        this.errors.set(error, this.bag)

        throw error
      })

    this.errors.clear(null, this.bag)

    Object.assign(this.original, JSON.parse(JSON.stringify(this.form)))

    this.isSubmitting.value = false

    this.isSubmitted.value = true

    return data
  }

  async advancedSubmit(callback) {
    this.isSubmitting.value = true

    this.isSubmitted.value = false

    const { data } = await Promise.resolve(callback(axios, this.form)).catch(
      (error) => {
        this.isSubmitting.value = false

        throw error
      }
    )

    this.isSubmitting.value = false

    this.isSubmitted.value = true

    return data
  }

  async load(path, params) {
    this.isLoading.value = true

    this.isLoaded.value = false

    const { data } = await axios
      .get(this.loadPath ? this.loadPath : path, {
        params
      })
      .catch((error) => {
        this.isLoading.value = false

        this.isLoaded.value = false

        throw error
      })
    this.setAttributes(data.form)

    if (data.model) {
      Object.assign(this.model, data.model)
    }

    this.isLoading.value = false

    this.isLoaded.value = true

    return data
  }

  reset() {
    Object.assign(this.form, JSON.parse(JSON.stringify(this.original)))
  }
}
