import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state : {
        count : 0,
    },
    mutations : {
        increment(state){
            state.count++;
        },
        decrement(state){
            state.count--;
        }
    },
    actions : {
        incrementDely(context){
            setTimeout(() =>{
                context.commit('increment');
            },1000)
        },
        decrementDely(context){
            setTimeout(() =>{
                context.commit('decrement');
            },1000)
        }
    }
})
export default store;