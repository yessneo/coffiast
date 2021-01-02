<template>
    <ul>
        <li v-for="(step, index) in steps" v-bind:key="step.id">{{ index + 1 }}. {{ step }}</li>
    </ul>
</template>

<script>
export default {
    props: 'steps';
}
</script>