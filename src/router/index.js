import VueRouter from 'vue-router'
import  Vue  from 'vue'

import  App from '../../src/App'
Vue.use(VueRouter)
const router= new VueRouter({
    mode:'history',
    
    routes: [
        {
            path: '/',
            redirect:App
          }
    ]
       
})
  export default router