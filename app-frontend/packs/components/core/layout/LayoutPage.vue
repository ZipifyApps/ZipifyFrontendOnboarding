<template>
    <div class="page">

        <LayoutPageHeader></LayoutPageHeader>

        <main class="page__main-content">
            <slot></slot>
        </main>

    </div>
</template>

<script>

import LayoutPageHeader from './LayoutPageHeader';

export default {
    name: 'LayoutPage',
    components: { LayoutPageHeader }
}
</script>

<style scoped>

    .page {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

    }

    .page__main-content {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>
