<script>
export default {
    name: 'WyxosImage',
    props: {
        src: {
            type: [File, String],
            required: true
        },
        resize: {
            type: Object,
            default: null
        }
    },
    emits: ['loaded'],
    data () {
        return {
            width: 0,
            height: 0
        }
    },
    mounted () {
        this.loadImage()
    },
    methods: {
        loadImage () {
            if (typeof this.src === 'object') {
                return this.loadFile()
            }

            return this.loadPath()
        },
        loadFile () {
            const reader = new FileReader()

            reader.onload = (event) => {
                const image = event.target.result

                this.$refs.image.src = image

                this.width = this.resize ? this.resize.width : image.width

                this.height = this.resize ? this.resize.height : image.height

                this.$emit('loaded')
            }

            reader.readAsDataURL(this.src)
        },
        loadPath () {
            const image = new Image()

            image.onload = () => {
                this.$refs.image.src = this.src

                this.width = this.resize ? this.resize.width : image.width

                this.height = this.resize ? this.resize.height : image.height

                this.$emit('loaded')
            }

            image.src = this.src
        }
    }
}
</script>

<template>
    <img ref="image" src="" alt="" :width="width" :height="height"/>
</template>
