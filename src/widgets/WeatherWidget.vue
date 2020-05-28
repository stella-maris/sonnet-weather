<template>
    <div id="weatherWidget">
        Hello
        <Sonnets/>
    </div>
</template>

<script>
import Sonnets from '@/components/display/Sonnets.vue';
    export default {
        name: "WeatherWidget",
        components: {
            Sonnets,
        }
    }
</script>

<style lang="scss" scoped>

</style>