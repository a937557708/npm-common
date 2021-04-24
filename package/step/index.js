 import Step from './src/index.vue'

Step.install = function(Vue) {
    console.log('Step', Step)
    Vue.component(Step.name, Step);
};
   
export default Step;