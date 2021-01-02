<template>
<div  v-if="steps[currentActive].time">
    <div id="timer2">
        {{minutes}} : {{seconds}}
        <!-- KAROGCHI bratishka prosto delaesh timer reset kazhdiy raz kogda klikaesh na next ili previous okay? -->
    </div>
    <div class="buttons">
      <button @click="timerRun" v-if="!timerRunning">Start</button>
      <button @click="timerPause" v-if="timerRunning">Pause</button>
      <button @click="timerReset" v-if="timerRunning" ref="reset-timer">Restart</button>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    // props: ['minutes', 'seconds', 'totalTime'],
    data() {
        return {
            // finalTime: this.$store.getters.steps[this.$store.getters.currentActive].totalTime,
            totalTime: (this.$store.getters.steps[this.$store.getters.currentActive].totalTime * 60),
            timerRunning: false,
            timerPaused: false,
            interval: null
        }
    },
    methods: {
    timerRun() {
      this.timerRunning = true;
      this.interval = setInterval(this.countdownTimer, 1000);
    },
    timerPause() {
      this.timerRunning = false;
      clearInterval(this.interval);
    },
    timerReset() {
      this.timerRunning = false;
      clearInterval( () => { this.interval; });
      this.totalTime = (this.$store.getters.steps[this.$store.getters.currentActive].totalTime * 60);
      
    },
    timerCountdown() {
      this.timerRunning = true;
      this.interval = setInterval(this.updateCurrentTime, 1000);
      // Counts down from 60 seconds times 1000.
      setInterval( () => {
        this.timerMinutes--
      }, 60 * 1000)
      
      // Check if seconds at double zero and then make it a 59 to countdown from.
      // need another method of checking the number while in the loop and then adding a zero on the number under 10
      if(this.timerSeconds === '00'){
        this.timerSeconds = 59;
        setInterval( () => {
          this.timerSeconds--
        }, 1000);
      } else {
        setInterval( () => {
          this.timerSeconds--
        }, 1000);
      }
    },
    countdownTimer() {
      if (this.timerRunning == true) {
          this.totalTime--;
      }
    }
    },
    computed: {
        ...mapGetters(['steps','currentActive']),
        // time: function() {
        //     return this.minutes + " : " + this.seconds;
        // },
        minutes: function() {
        var min = Math.floor(this.totalTime / 60);
        return min >= 10 ? min : '0' + min;
        },
        seconds: function() {
        var sec = this.totalTime - (this.minutes * 60);
        return sec >= 10 ? sec : '0' + sec;
        }
    },
    // watch: {
    //     totalTime() {
    //         (this.$store.getters.steps[this.$store.getters.currentActive].totalTime * 60)
    //     }
    // }
}
</script>