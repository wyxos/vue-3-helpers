<script>
import AutoCompleteSearch from './AutoCompleteSearch'

export default {
  name: 'WyxosTags',
  props: {
    path: {
      type: String,
      required: true
    },
    modelValue: {
      type: Array,
      required: true
    },
    formatter: {
      type: Function,
      required: true
    },
    excludeFormatter: {
      type: Function,
      default: null
    }
  },
  emits: ['update:modelValue'],
  setup() {
    const search = AutoCompleteSearch.create()

    return {
      search
    }
  },
  data() {
    return {
      query: []
    }
  },
  async mounted() {
    if (this.modelValue && this.modelValue.length) {
      const { result } = await this.search.restore(this.path, {
        values: this.modelValue
      })

      this.query = result

      this.$emit(
        'update:modelValue',
        this.query.map((value) => this.formatter(value))
      )
    }
  },
  methods: {
    searchTags(value) {
      return this.search.search(this.path, {
        value,
        type: 'service-category',
        exclude: this.query.map((tag) => tag.id)
      })
    },
    addedTag() {
      this.$emit(
        'update:modelValue',
        this.query.map((value) => this.formatter(value))
      )
    },
    removedTag() {
      this.$emit(
        'update:modelValue',
        this.query.map((value) => this.formatter(value))
      )
    }
  }
}
</script>
<template>
    <o-inputitems
        v-bind="$attrs"
        v-model="query"
        :data="search.result.value"
        :open-on-focus="true"
        autocomplete
        @add="addedTag($event)"
        @remove="removedTag($event)"
        @focus="searchTags()"
        @typing="searchTags($event)">
    </o-inputitems>
</template>
