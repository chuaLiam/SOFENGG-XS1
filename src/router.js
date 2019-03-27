import Vue from 'vue'
import Router from 'vue-router'
import GT_Studyspace from './views/GT_Studyspace'
import GT_Funspace from './views/GT_Funspace.vue'
import GT_BHallway from './views/GT_BHallway.vue'
import GT_Canteen from './views/GT_Canteen.vue'
import GT_MPH from './views/GT_MPH.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'GT_Canteen',
      component: GT_Canteen
    },
    {
      path: '/GT_Canteen',
      name: 'GT_Canteen',
      component: GT_Canteen
    },
    {
      path: '/GT_Studyspace',
      name: 'GT_Studyspace',
      component: GT_Studyspace
    },
    {
      path: '/GT_Funspace',
      name: 'GT_Funspace',
      component: GT_Funspace
    },
    {
      path: '/GT_BHallway',
      name: 'GT_BHallway',
      component: GT_BHallway
    },
    {
      path: '/GT_MPH',
      name: 'GT_MPH',
      component: GT_MPH
    }
  ]
})
