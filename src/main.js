import Search from './Search.js'
import FormBuilder from './FormBuilder'
import ResourceList from './ResourceList'
import Listing from './Listing'
import LoadState from './LoadState'
import useFormErrors from './formErrors'
import WyxosButton from './WyxosButton.vue'
import WyxosCollection from './WyxosCollection.vue'
import WyxosDatepicker from './WyxosDatepicker.vue'
import WyxosForm from './WyxosForm.vue'
import WyxosImage from './WyxosImage.vue'
import WyxosInput from './WyxosInput.vue'
import WyxosTags from './WyxosTags.vue'
import WyxosPrompt from './WyxosPrompt.vue'
import Modal from './Modal'
import Tab from './Tab'

const install = (app) => {
  app.component('wyxos-button', WyxosButton)
  app.component('wyxos-collection', WyxosCollection)
  app.component('wyxos-datepicker', WyxosDatepicker)
  app.component('wyxos-form', WyxosForm)
  app.component('wyxos-image', WyxosImage)
  app.component('wyxos-input', WyxosInput)
  app.component('wyxos-tags', WyxosTags)
  app.component('wyxos-prompt', WyxosPrompt)
}

export {
  Search,
  FormBuilder,
  ResourceList,
  Listing,
  LoadState,
  Modal,
  Tab,
  useFormErrors,
  WyxosButton,
  WyxosCollection,
  WyxosDatepicker,
  WyxosForm,
  WyxosImage,
  WyxosInput,
  WyxosTags,
  WyxosPrompt,
  install
}

export default {
  Search,
  FormBuilder,
  ResourceList,
  Listing,
  LoadState,
  Modal,
  useFormErrors,
  WyxosButton,
  WyxosCollection,
  WyxosDatepicker,
  WyxosForm,
  WyxosImage,
  WyxosInput,
  WyxosTags,
  WyxosPrompt,
  Tab,
  install
}
