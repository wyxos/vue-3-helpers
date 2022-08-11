<script>
    import WyxosForm from '@wyxos-helpers/WyxosForm.vue'
    import FormBuilder from '@wyxos-helpers/FormBuilder'
    import WyxosButton from '@wyxos-helpers/WyxosButton.vue'
    import WyxosInput from '@wyxos-helpers/WyxosInput.vue'

    export default {
        components: {
            WyxosForm,
            WyxosInput,
            WyxosButton
        },
        setup(){
            return {
                errors: FormBuilder.create({
                    path: '',
                    errorBag: 'form'
                })
            }
        },
        methods: {
            submit(){
                class ValidationError extends Error {
                    constructor (message, data) {
                        super(message)

                        Object.assign(this, data)
                    }
                }

                this.errors.advancedSubmit(() => new Promise((resolve, reject) => {
                    setTimeout(() => {
                        reject(new ValidationError('Validation error', {
                            response: {
                                status: 422,
                                data: {
                                    errors: {
                                        email: ['The email field is required.']
                                    }
                                }
                            }
                        }))
                    }, 1000)
                }))
            }
        }
    }
</script>

<template>
    <wyxos-form :form="errors" @submit="submit()">
        <wyxos-input name="email" label="Email" :bag="errors.bag"></wyxos-input>

        <wyxos-button native-type="submit">Submit</wyxos-button>
    </wyxos-form>
</template>
