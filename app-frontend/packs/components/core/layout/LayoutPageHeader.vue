<template>
    <header class="header">
        <a class="link header__link-logo">
            <svg>
<!--                <use xlink:href="../svg/sprites.svg#logo-icon"></use>-->
            </svg>
        </a>
    </header>
</template>

<script>
export default {
    name: "LayoutPageHeader"
}
</script>

<style scoped>

    .header {
        height: 90px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--color-red);
        color: var(--color-white);
    }

</style>
