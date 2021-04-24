import Step from '../package/step/index' 

let componentObj={
    Step
}

 

const install = function(Vue, opts = {}) {
    console.log('componentObj', componentObj)
    Object.keys(componentObj).forEach(ele=>{ 
        let component=componentObj[ele];
        console.log(component.name, component)
        Vue.component(component.name, component);
    })
  
  };
 
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
} 
export  {
  install,Step 
}
export default {
  install,Step 
}
