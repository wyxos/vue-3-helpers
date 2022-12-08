import { reactive } from 'vue'
import axios from 'axios'
import State from './State'

export default class Listing {
  api = null

  baseUrl = null

  structure = null

  states = {
    fetch: new State(),
    filter: new State()
  }

  query = reactive({
    items: [],
    perPage: 0,
    total: 0
  })

  params = reactive({
    page: 1
  })

  state = reactive({
    isFilterActive: false
  })

  static create (params, options) {
    const instance = new this()

    instance.structure = Object.assign({}, params)

    Object.assign(instance.params, params)

    instance.api = axios.create(options.axios || {})

    instance.baseUrl = options.baseUrl

    return instance
  }

  tableConfig(){
    return {
      data: this.query.items,
      total: this.query.total,
      perPage: this.query.perPage,
      loading: this.isLoading
    }
  }

  async fetch (path) {
    this.states.fetch.loading()

    const { data } = await this.api.get(path || this.baseUrl, {
      params: this.params
    })
      .catch(error => {
        this.states.fetch.failed()

        throw error
      })

    this.states.fetch.loaded()

    const base = window.location.href.replace(/\?.*/, '')

    const query = new URLSearchParams(this.params)

    const url = base + '?' + query.toString()

    window.history.pushState({}, '', url)

    return data
  }

  async load (path) {
    const data = await this.fetch(path)

    if(!data.query || !data.query.items){
      this.states.fetch.failed()

      throw Error('Response format is invalid.')
    }

    Object.assign(this.query, data.query, {
      items: data.query.items.map((item) => ({
        ...item,
        isProcessing: false
      }))
    })

    return data
  }

  onPageChange (value) {
    this.params.page = value

    return this.load()
  }

  async action (path, { row, index, remove, method }, attributes = {}) {
    row.isProcessing = true

    const payload = {
      id: row.id,
      ...attributes
    }

    if (['delete', 'patch'].includes(method)) {
      if(method === 'delete'){
        const { data } = await this.api.delete(path || this.baseUrl, {
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
      }
      else{
        const { data } = await this.api
          [method](path || this.baseUrl, {
          ...payload
        })
          .catch((error) => {
            row.isProcessing = false

            throw error
          })

        row.isProcessing = false

        if (data.row) {
          Object.assign(row, data.row)
        }
      }


    } else {
      const { data } = await this.api.post(path, payload).catch((error) => {
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

  patch(url, record, payload){
    return this.action(url, { method: 'patch', ...record }, payload)
  }

  delete (url, record, payload) {
    return this.action(url, { remove: true, method: 'delete', ...record }, payload)
  }

  get isLoading () {
    return this.states.fetch.isLoading
  }

  get isLoaded () {
    return this.states.fetch.isLoaded
  }

  get isFailure () {
    return this.states.fetch.isFailure
  }

  get isFilterLoading () {
    return this.states.filter.isLoading
  }

  get isFilterActive () {
    return this.state.isFilterActive
  }

  async applyFilter () {
    await this.load()

    this.state.isFilterActive = false
  }

  showFilter () {
    this.state.isFilterActive = true
  }

  cancelFilter(){
    this.state.isFilterActive = false
  }

  async resetFilter (url = null) {
    Object.assign(this.params, this.structure)

    this.state.isFilterActive = false

    await this.load(url)
  }
}
