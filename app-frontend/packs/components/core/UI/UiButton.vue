<template>
    <button class="button" @click="clickUiButton">
        <slot></slot>
    </button>

</template>

<script>
export default {
    name: 'UiButton',
    methods: {
        clickUiButton() {
            this.$emit('clickUiButton')
        }
    }
}
</script>
