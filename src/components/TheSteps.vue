<template>

// each step in div. 
then isVisible - dynamic
current div function depending on the button

// Or make a new arrays of steps then u can push different objects to push function
depending on which id show timer or not
    <div class="container">
    <p>STEP 1. Grind {{ chosenRatio.grams }} grams of Coffee to {{ chosenGrind.grind }}</p>
    <p>STEP 2. Heat {{ chosenRatio.water }} grams of Water to {{ chosenTemp.temp }}</p>
    <!-- <p>{{ chosenOrientation.method}}</p> -->
    <div>
        <p v-if="chosenOrientation.bloom">STEP 3. Place the aeropress on the mug in the normal orientation with wet filter and cap on.</p>
        <p v-else>STEP 3. Place the aeropress in the upside-down orientation.</p>
    </div>
    <p>STEP 4. Pour in Ground Coffee</p>
    <div>
        <p v-if="chosenOrientation.bloom">STEP 5. Add {{ chosenOrientation.water }}g. of water and wait {{chosenOrientation.bloomTime}} seconds for the coffee to bloom.</p>
        <p v-else>STEP 5.No bloom. Pour {{ chosenRatio.water }}</p>
    </div>
    
    <div>
        <p v-if="chosenOrientation.bloom">STEP 6.Add the remaining {{ chosenRatio.water - chosenOrientation.water }}</p>
    </div>
    <p>STEP 7.{{ chosenStir.stir }}</p>
    <p>STEP 8. Wait {{ chosenGrind.time }} seconds to brew.</p>
    <div>
        <p v-if="chosenOrientation.method === 'INVERTED'">Wet the filter paper, and put the cap on. Place the mug upside-down on the aeropress and flip to be the normal orientation.</p>
    </div>
    <p>Press</p>
    <p v-if="chosenRatio.dilute">Please DILUTE</p>


   
  </div>
</template>

<script>
export default {
    props: ['chosenRatio', 'chosenTemp', 'chosenOrientation', 'chosenGrind', 'chosenStir'],
}

// 1.Place the aeropress on the mug in the normal orientation with wet filter and cap on.
// Place the aeropress in the upside-down orientation.
</script>

<style scoped>
.container {
    text-align: left;
    margin: 50px;
    font-size: 21px;
}
</style>