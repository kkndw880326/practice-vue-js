<template>
    <v-container style="max-width: 600px;">
        <h1>Today is <span class="deep-orange--text ma3">{{ today }}</span></h1>

        <v-timeline dense clipped>
            <v-timeline-item
                fill-dot
                class="white--text mb-5"
                color="orange"
                large
            >
                <template v-slot:icon>
                    <span>Me</span>
                </template>
                <v-text-field
                    v-model="input"
                    hide-details
                    flat
                    label="Leave a comment..."
                    solo
                    @keydown.enter="comment"
                >
                    <template v-slot:append>
                        <v-btn
                                class="mx-0"
                                depressed
                                @click="comment"
                        >
                            Post
                        </v-btn>
                    </template>
                </v-text-field>
            </v-timeline-item>

            <v-slide-x-transition
                group
            >
                <v-timeline-item
                    v-for="event in timeline"
                    :key="event.id"
                    class="mb-3"
                    color="pink"
                    small
                >
                    <v-layout justify-space-between>
                        <v-flex xs7 v-text="event.text"></v-flex>
                        <v-flex xs5 text-xs-right v-text="event.time"></v-flex>
                    </v-layout>
                </v-timeline-item>
            </v-slide-x-transition>
        </v-timeline>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            events: [],
            input: null,
            nonce: 0,
        }),

        computed: {
          today () {
              return (new Date()).toLocaleDateString();
          },
          timeline () {
              return this.events.slice().reverse()
          }
        },

        methods: {
            comment() {
                const time = (new Date()).toLocaleTimeString();
                this.events.push({
                    id: this.nonce++,
                    text: this.input,
                    time: time.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, (match, contents) => {
                        return `${contents.split(' ').map(v => v.charAt(0)).join('')}`
                    })
                });

                this.input = null;
            }
        }
    }
</script>

<style scoped>

</style>