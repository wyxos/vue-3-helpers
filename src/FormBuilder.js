import axios from 'axios'
import { reactive, ref } from 'vue'
import useFormErrors from './formErrors'
import State from './State.js'

export default class FormBuilder {
  loadPath = ''
  submitPath = ''
  bag = ''
  model = reactive({})
  form = reactive({})
  original = reactive({})
  errors = null
  states = {
    load: new State(),
    submit: new State()
  }

  constructor(options) {
    this.setPath(options.submitPath)

    this.loadPath = options.loadPath

    this.setErrors(options.bag)

    this.setAttributes(options.form)

    this.states.load.loaded()
  }

  static create(options) {
    return new FormBuilder(options)
  }

  setPath(path) {
    this.submitPath = path
  }

  setErrors(bag) {
    this.bag = bag || 'default'

    this.errors = useFormErrors()

    this.errors.createBag(this.bag)
  }

  setAttributes(attributes) {
    Object.assign(this.form, attributes)

    Object.assign(this.original, attributes)
  }

  getError(key) {
    return this.errors.get(key, this.bag)
  }

  clearError(key) {
    this.errors.clear(key, this.bag)
  }

  async submit(path, formatter, config = {}) {
    this.errors.clear(null, this.bag)

    this.states.submit.loading()

    const payload = formatter
      ? formatter(Object.assign({}, this.form))
      : JSON.parse(JSON.stringify(this.form))

    const { data } = await axios[config.method || 'post'](
      path || this.submitPath,
      payload,
      config
    ).catch((error) => {
      this.states.submit.failed()

      this.errors.set(error, this.bag)

      throw error
    })

    this.errors.clear(null, this.bag)

    Object.assign(this.original, JSON.parse(JSON.stringify(this.form)))

    this.states.submit.loaded()

    return data
  }

  async advancedSubmit(callback) {
    this.states.submit.loading()

    const { data } = await Promise.resolve(callback(axios, this.form)).catch(
      (error) => {
        this.states.submit.failed()

        this.errors.set(error, this.bag)

        throw error
      }
    )

    this.states.submit.loaded()

    return data
  }

  async load(path, params) {
    this.states.load.loading()

    const { data } = await axios
      .get(path || this.loadPath, {
        params
      })
      .catch((error) => {
        this.states.load.failed()

        throw error
      })

    this.setAttributes(data.form)

    if (data.model) {
      Object.assign(this.model, data.model)
    }

    this.states.load.loaded()

    return data
  }

  reset() {
    Object.assign(this.form, JSON.parse(JSON.stringify(this.original)))
  }

  get isSubmitting () {
    return this.states.submit.isLoading
  }

  get isSubmitted () {
    return this.states.submit.isLoaded
  }

  get isSubmitFailed () {
    return this.states.submit.isFailure
  }

  get isLoading () {
    return this.states.load.isLoading
  }

  get isLoaded () {
    return this.states.load.isLoaded
  }

  get isFailure () {
    return this.states.load.isFailure
  }
}
