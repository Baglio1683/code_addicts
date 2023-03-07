<script>

import AppJumbo from './AppJumbo.vue';
import AppAbout from './AppAbout.vue';
import AppFooter from './AppFooter.vue';

export default {

    name: 'AppHome',

    components: {
        AppJumbo, 
        AppAbout, 
        AppFooter
    }

}

</script>


<template>
    <main>
        <AppJumbo></AppJumbo>
        <AppAbout></AppAbout>
        <AppFooter></AppFooter>

    </main>
</template>

<style lang="scss">

</style>