<template>
  <div class="header">
    <h1>RANDOMIZER</h1>
    <button @click="picker">Randomize</button>
  </div>
  <ul>
   <li v-for="(step, index) in steps" v-bind:key="step.id">{{ index + 1 }}. {{ step.text }}</li>
  </ul>
  <button>
      <router-link to="/launched">Launch Brew</router-link>
  </button>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
 data() {
   return {
      ratios: [
        {id: 'r1', grams: 30, water: 200, dilute: true},
        {id: 'r2', grams: 24, water: 200, dilute: true},
        {id: 'r3', grams: 15, water: 250, dilute: false},
        {id: 'r4', grams: 15, water: 200, dilute: false},
        {id: 'r5', grams: 14, water: 220, dilute: false},
        {id: 'r6', grams: 12, water: 200, dilute: false},
      ],
      temperature: [
        {id: 't1', temp: 80},
        {id: 't2', temp: 85},
        {id: 't3', temp: 90},
        {id: 't4', temp: 95},        
      ],
      orientation: [
        {id: 'm1', method: true, bloom: true, bloomTime: 30, water: 30},
        {id: 'm2', method: true, bloom: true, bloomTime: 30, water: 60},
        {id: 'm3', method: true, bloom: false},
        {id: 'm4', method: false, bloom: true, bloomTime: 30, water: 30},
        {id: 'm5', method: false, bloom: true, bloomTime: 30, water: 60},
        {id: 'm6', method: false, bloom: false},
      ],
      grinds: [
        {id: 'g1', grind: 'Coarse', time: 240},
        {id: 'g2', grind: 'Very Fine', time: 30},
        {id: 'g3', grind: 'Fine', time: 60},
        {id: 'g4', grind: 'Medium Fine', time: 90},
        {id: 'g5', grind: 'Medium', time: 120},
        {id: 'g6', grind: 'Medium', time: 90},
      ],
      stirs: [
        {id: 's1', stir: 'No Stir'},
        {id: 's2', stir: 'Stir once in one direction.'},
        {id: 's3', stir: 'Stir 2 times in one direction.'},
      ],
   }
 },
  methods: {
    //Randomize arrays
    random(arr) {
      return Math.floor(Math.random() * arr.length);
      // this.randomRatio = arr[chosenNumber];
    },
    randomRatio() {
      let chosenNumber = this.random(this.ratios);
      // this.chosenRatio = this.ratios[chosenNumber];
      this.$store.commit('changeRatio', {value: this.ratios[chosenNumber]});
    },
    randomTemp() {
      let chosenNumber = this.random(this.temperature);
      // this.chosenTemp = this.temperature[chosenNumber];
      this.$store.commit('changeTemp', {value: this.temperature[chosenNumber]});
    },
    randomOrientation() {
      let chosenNumber = this.random(this.orientation);
      // this.chosenOrientation = this.orientation[chosenNumber];
      this.$store.commit('changeOrientation', {value: this.orientation[chosenNumber]});
    },
    randomGrind() {
      let chosenNumber = this.random(this.grinds);
      // this.chosenGrind = this.grinds[chosenNumber];
      this.$store.commit('changeGrind', {value: this.grinds[chosenNumber]});
    },
    randomStir() {
      let chosenNumber = this.random(this.stirs);
      // this.chosenStir = this.stirs[chosenNumber];
      this.$store.commit('changeStir', {value: this.stirs[chosenNumber]});
    },
    // Button Event and displaying data of randomized arrays
    picker() {
      // this.steps = [];
      this.$store.commit('clearSteps');
      this.randomRatio();
      this.randomTemp();
      this.randomOrientation();
      this.randomStir();
      this.randomGrind();
      this.pushToSteps();
      //Pushing to Array
    },
    pushToSteps() {
      // First Step
      // Ypu now can set different id for different stuff
      // can now make steps dynamically with routes
      this.$store.commit('pushToSteps', {
          text:'Grind' + this.$store.getters.chosenRatio.grams + 'g of coffee to ' + this.$store.getters.chosenGrind.grind,
          id: 's1',
          img: require('../assets/logo.png'),
          time: false
          });
      // steps.push({text:'Grind' + this.chosenRatio.grams + 'g of coffee to ' + this.chosenGrind.grind + '23',
      //     id:'s2'});
      // Second Step
      this.$store.commit('pushToSteps', {
          text:'Heat ' + this.$store.getters.chosenRatio.water + ' grams of Water to ' + this.$store.getters.chosenTemp.temp + ' Celcius',
          id: 's2',
          time: false,
          });
      // Third Step
      if (this.$store.getters.chosenOrientation.bloom) {
        this.$store.commit('pushToSteps', {text:'Place the aeropress in the upside-down orientation.', id: 's3.1', time: false})
      } else {
        this.$store.commit('pushToSteps', {text:'Place the aeropress on the mug in the normal orientation with wet filter and cap on.', id:'s3.2', time: false})
      }
      // Fourth Step
      this.$store.commit('pushToSteps',{text: 'Pour in Ground Coffee', id: 's4', time: false});
      // Fifth Step
      if (this.$store.getters.chosenOrientation.bloom) {
        this.$store.commit('pushToSteps', {text: 'Add ' + this.$store.getters.chosenOrientation.water + ' g. of water and wait ' + this.$store.getters.chosenOrientation.bloomTime + ' seconds for the coffee to bloom.', id: 's5.1', time: true, totalTime: this.$store.getters.chosenOrientation.bloomTime / 60})
      } else {
        // For Normal Orientation
        this.$store.commit('pushToSteps',{text: 'Pour ' + this.$store.getters.chosenRatio.water, id: 's5.2', time: false})
      }
      // Add Remaining water
      if(this.$store.getters.chosenOrientation.bloom) {
        this.$store.commit('pushToSteps',{text: 'Add the remaining ' + (this.$store.getters.chosenRatio.water - this.$store.getters.chosenOrientation.water) + ' of water', id: 's6', time: false})
      }
      // Seven for bloom Six for normal
       this.$store.commit('pushToSteps',{text: this.$store.getters.chosenStir.stir, id: 's7'});
      // Eight Or Seven
       this.$store.commit('pushToSteps',{text: 'Wait ' + this.$store.getters.chosenGrind.time + ' seconds to brew.', id: 's8', time: true, totalTime: this.$store.getters.chosenGrind.time / 60});
      // Additional step1
      if (!this.$store.getters.chosenOrientation.method) {
         this.$store.commit('pushToSteps',{text: 'Wet the filter paper, and put the cap on. Place the mug upside-down on the aeropress and flip to be the normal orientation.', id: 's9', time: false})
      }
      // Press Step
       this.$store.commit('pushToSteps',{text: 'Press', id:'s10', time: false});
      // Dilute Optional step
      if (this.$store.getters.chosenRatio.dilute) {
         this.$store.commit('pushToSteps', {text: 'Add water by your likable taste', id: 's11', time: false})
      }
    }

  },
  computed: {
    ...mapGetters(['steps'])
  },
  watch: {
    //Watching all exception options
    // chosenGrind(value) {
    //   if (value.grind === 'Coarse') {
    //     this.chosenOrientation = this.orientation[1];
    //   }
    //   else if (value.grind === 'Very Fine') {
    //      this.chosenStir = this.stirs[0];
    //      this.chosenOrientation = this.orientation[1];
    //    }
    // },
  },
}
</script>

<style scoped>
.header {
  width: 100%;
  background: #2c3e50;
}
h1 {
  color: #fff;
  padding-top: 25px;
  padding-bottom: 25px;
}
</style>