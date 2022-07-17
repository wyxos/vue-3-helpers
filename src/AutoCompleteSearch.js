import { ref } from 'vue'
import axios from 'axios'

export default class AutoCompleteSearch {
  loading = ref(false)
  result = ref([])

  static create() {
    return new AutoCompleteSearch()
  }

  async search(url, payload) {
    this.loading.value = true

    this.result.value = []

    const { data } = await axios
      .post(`${url}/search`, payload)
      .catch((error) => {
        this.loading.value = false

        throw error
      })

    this.result.value = data.result

    this.loading.value = false
  }

  async restore(url, payload) {
    this.loading.value = true

    this.result.value = []

    const { data } = await axios
      .post(`${url}/restore`, payload)
      .catch((error) => {
        this.loading.value = false

        throw error
      })

    this.loading.value = false

    return data
  }
}
