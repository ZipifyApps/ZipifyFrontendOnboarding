<template>
    <header class="header">
        <a class="link header__link-logo">Tik Tok Banner</a>
    </header>
</template>

<script>

export default {
    name: 'LayoutPageHeader'
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

    .header__link-logo {
        margin-left: 40px;
        font-size: 48px;
        font-weight: 600;
    }

    @media (max-width: 450px) {
        .header__link-logo {
            margin-left: 20px;
            font-size: 38px;
        }
    }

</style>
