import {reactive} from 'vue'
import axios from 'axios'

export default class Listing {
  api = null

  structure = null

  query = reactive({
    items: [],
    perPage: 0,
    total: 0,
    isLoading: false,
    isLoaded: false,
    isFilterActive: false
  })

  params = reactive({
    page: 1
  })

  static create(params, options) {
    const instance = new this()

    instance.structure = () => Object.assign({}, params)

    Object.assign(instance.params, params)

    instance.api = axios.create(options.axios || {})

    return instance
  }

  async fetch(path) {
    this.query.isLoading = true

    this.query.isLoaded = false

    const {data} = await this.api.get(path)
      .catch(error => {
        this.query.isLoading = false

        throw error
      })

    this.query.isLoading = false

    this.query.isLoaded = true

    return data
  }

  async load(path) {
    const data = await this.fetch(path)

    Object.assign(this.query, data.query, {
      items: data.query.items.map((item) => ({
        ...item,
        isProcessing: false
      }))
    })

    return data
  }

  onPageChange(value) {
    this.params.page = value

    return this.load()
  }

  async action(path, {item: {row, index}, remove, method}, attributes = {}) {
    row.isProcessing = true

    const payload = {
      id: row.id,
      ...attributes
    }

    if (method === 'delete') {
      const {data} = await this.api
        .delete(path, {
          data: payload
        })
        .catch((error) => {
          row.isProcessing = false

          throw error
        })

      row.isProcessing = false

      if (data.row) {
        Object.assign(row, data.row)
      }
    } else {
      const {data} = await this.api.post(path, payload).catch((error) => {
        row.isProcessing = false

        throw error
      })

      row.isProcessing = false

      if (data.row) {
        Object.assign(row, data.row)
      }
    }

    if (remove) {
      const data = await this.fetch()

      this.query.items.splice(index, 1)

      if (!data.query.items.length) {
        this.params.page--

        await this.load()

        return
      }

      if (this.query.items.length < data.query.items.length) {
        this.query.items.push(data.query.items[data.query.items.length - 1])
      }
    }
  }

  destroy(url, record, payload) {
    return this.action(url, {...record, remove: true}, payload)
  }

  openFilter() {
    this.query.isFilterActive = true
  }

  async resetFilter(url = null) {
    Object.assign(this.params, this.structure)

    this.query.isFilterActive = false

    await this.load(url)
  }
}
