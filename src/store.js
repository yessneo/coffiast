import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            chosenRatio: '',
            chosenTemp: '',
            chosenOrientation: '',
            chosenGrind: '',
            chosenStir: '',
            steps: [],
            currentActive: 0,
        }
    },
    mutations: {
        changeRatio(state, payload) {
            state.chosenRatio = payload.value;
        },
        changeTemp(state, payload) {
            state.chosenTemp = payload.value;
        },
        changeOrientation(state, payload) {
            state.chosenOrientation = payload.value;
        },
        changeGrind(state, payload) {
            state.chosenGrind = payload.value;
        },
        changeStir(state, payload) {
            state.chosenStir = payload.value;
        },
        pushToSteps(state, payload) {
            state.steps.push(payload);
        },
        clearSteps(state) {
            state.steps = [];
        },
        increment(state) {
            state.currentActive++;
        },
        decrement(state) {
            state.currentActive--;
        }

    },
    getters: {
        chosenRatio: state => state.chosenRatio,
        chosenTemp: state => state.chosenTemp,
        chosenOrientation: state => state.chosenOrientation,
        chosenGrind: state => state.chosenGrind,
        chosenStir: state => state.chosenStir,
        steps: state => state.steps,
        currentActive: state => state.currentActive
    }
});

export default store;