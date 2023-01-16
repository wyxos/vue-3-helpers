import { ref } from 'vue'

export default class Tab {
  active = ref(null)

  callbacks = {}

  constructor (active) {
    this.active.value = active
  }

  isActive (name) {
    return this.active.value === name
  }

  onChange (callbacks) {
    this.callbacks = callbacks
  }

  activeClass (name, classes) {
    return {
      class: this.isActive(name) ? classes : []
    }
  }

  activate (name) {
    this.active.value = name

    if (this.callbacks[name]) {
      this.callbacks[name]()
    }
  }

  static create (name) {
    return new Tab(name)
  }
}
