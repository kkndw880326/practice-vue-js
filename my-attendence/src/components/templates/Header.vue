<template>
    <div>
        <v-tabs
                color="deep-orange darken-2"
                slider-color="amber lighten-2"
                right
        >
            <v-tab
                v-for="data in linkList"
                :key="data.id"
                class="white--text"
                ripple
            >
                <router-link :to="data.link_rel">{{ data.name }}</router-link>
            </v-tab>
        </v-tabs>
    </div>
</template>

<script>
    export default {
        data: () => ({
            linkList: [
                {
                    id: 1,
                    link_rel: '/',
                    name: 'Go Main'
                },
                {
                    id: 2,
                    link_rel: '/work-time',
                    name: 'Check My Schedule'
                }
            ]
        }),
    }
</script>

<style scoped>

</style>