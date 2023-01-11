import { ref } from 'vue'
import axios from 'axios'
import LoadState from './LoadState'

export default class Search {
  state = new LoadState

  result = ref([])

  options = {
    url: null,
    payload: null,
    field: null
  }

  constructor (options = {}) {
    Object.assign(this.options, options)
  }

  static create (options) {
    return new Search(options)
  }

  search (value) {
    return this.customSearch({ payload: { value } })
  }

  async customSearch ({ url, payload }) {
    this.state.loading()

    this.result.value = []

    const base = url || this.options.url

    const { data } = await axios
      .post(`${base}/search`, payload || this.options.payload)
      .catch((error) => {
        this.state.failed()

        throw error
      })

    this.result.value = data.result

    this.state.loaded()
  }

  async restore (url, payload) {
    this.state.loading()

    this.result.value = []

    const base = url || this.options.url

    const { data } = await axios
      .post(`${base}/restore`, payload || this.options.payload)
      .catch((error) => {
        this.state.failed()

        throw error
      })

    this.state.loaded()

    return data
  }

  getConfig () {
    return {
      data: this.result.value,
      field: this.options.field
    }
  }
}
