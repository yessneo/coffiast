<template>
<div>
                <div class="tab-details">
                    <div>{{currentActive + 1}} {{ steps[currentActive].text }}</div>
                    <div><img :src="steps[currentActive].img" alt=""></div>
                </div>
                <the-timer ref="resetTimer"></the-timer>
                <br/>
                <button @click="reduce" v-if="currentActive > 0">Previous</button>
                <button @click="add" v-if="currentActive < totalTabs - 1">Next</button>
                <button v-if="currentActive == totalTabs -1">Submit</button>
</div>               
</template>

<script>
import TheTimer from './TheTimer.vue';
import { mapGetters } from 'vuex';

export default {
    components: {TheTimer},
    computed: {
        ...mapGetters(['steps', 'currentActive']),
        // reduce() {
        //    return this.$store.commit('decrement');
        // }
        minutes: function() {
        var min = Math.floor(this.totalTime / 60);
        return min >= 10 ? min : '0' + min;
        },
        seconds: function() {
        var sec = this.totalTime - (this.minutes * 60);
        return sec >= 10 ? sec : '0' + sec;
        }
    },
    methods: {
        add() {
           this.$store.commit('increment');
           this.$refs.resetTimer.timerReset();
        },
        reduce() {
            this.$store.commit('decrement');
            this.$refs.resetTimer.timerReset();
        }
    },
    data(){
        return{
            tabs: [],
            furrentActive: 0,
            totalTabs: 0,
        }
    },
    created(){
        this.tabs = this.$store.getters.steps;
        this.finalCurrentActive = this.$store.getters.finalCurrentActive;
    },
    mounted(){
        this.totalTabs = this.tabs.length;
        // console.log(this.$store.getters.chosenOrientation);
    },
}
</script>