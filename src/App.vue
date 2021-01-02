<template>
  <!-- <div class="header"><h1>RANDOMIZER</h1></div> -->
  <!-- <the-steps 
  :chosenRatio="this.chosenRatio"
  :chosenTemp="this.chosenTemp"
  :chosenOrientation="this.chosenOrientation"
  :chosenStir="this.chosenStir"
  :chosenGrind="this.chosenGrind"
  ></the-steps> -->
  
  
    <!-- <ul>
    <li v-for="num in steps.length" v-bind:key="num.id">{{ num }}</li>
  </ul> -->
  
  <!-- <button @click="picker">Randomize</button> -->

  <!-- <the-randomizer :steps="this.steps" :picker="this.picker"></the-randomizer> -->
 
<router-view></router-view>


</template>

<script>
// import TheRandomizer from './components/TheRandomizer.vue';
// import TheSteps from './components/TheSteps.vue';

// import TheRandomizer from './steps/TheRandomizer';
export default {
  // components: { TheRandomizer },

  data() {
    return {
      chosenRatio: '',
      chosenTemp: '',
      chosenOrientation: '',
      chosenGrind: '',
      chosenStir: '',
      steps: [],
    }
  },


}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
}
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
ul {
  text-align: left;
  margin: 25px;
  font-size: 30px;
}

button {
  padding: 20px 40px;
  color: #fff;
  background: #2c3e50;
  font-size: 30px;

}
</style>
