<template>
    <v-layout>
        <v-flex>
            <v-sheet>
                <v-calendar
                    ref="calendar"
                    :now="today"
                    :value="today"
                    color="primary"
                    type="week"
                >
                    <template v-slot:dayHeadere="{ date }">
                        <template v-for="event in eventsMap[data]">
                            <div
                                v-if="!event.time"
                                :key="event.title"
                                class="my-event"
                                @click="open(event)"
                                v-html="event.title"
                            >
                            </div>
                        </template>
                    </template>
                </v-calendar>
            </v-sheet>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        data: () => ({
            today: (new Date()).toLocaleDateString(),
            events: [
                {
                    title: 'Test Schedule',
                    data: (new Date()).toLocaleDateString(),
                    time: '11:00',
                    duration: 500
                }
            ]
        }),
        computed: {
          eventsMap () {
              const map = {};
              this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e));
              return map;
          }
        },
        mounted () {
            this.$refs.calendar.scrollToTime('08:00');
        },
        methods: {
            open (event) {
                alert(event.title);
            }
        }
    }
</script>

<style scoped>
    .my-event {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        border-radius: 2px;
        background-color: #1867c0;
        color: #ffffff;
        border: 1px solid #1867c0;
        font-size: 12px;
        padding: 3px;
        cursor: pointer;
        margin-bottom: 1px;
        left: 4px;
        margin-right: 8px;
        position: relative;
    }
    my-event.with-time {
        position: absolute;
        right: 4px;
        margin-right: 0px;
    }
</style>