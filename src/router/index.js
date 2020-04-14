import Vue from 'vue'
import Router from 'vue-router'
import UserHomePage from '@/components/UserHomePage'
import Login from '@/components/Login'
import Registe from '@/components/Registe'
import Errorpage from "../components/Errorpage";
import Require from "../components/Require";
import EnterPriseApply from "../components/EnterPriseApply";
import JoinTeam from "../components/JoinTeam";
import Activity from "../components/Activity";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'UserHomePage',
      component: UserHomePage,
      meta:{
        title:"湖南工学院创客空间首页"
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta:{
        title:"登陆"
      }
    },
    {
      path: '/Registe',
      name: 'Registe',
      component: Registe,
      meta:{
        title:"注册"
      }
    },
    {
      path: '/Require',
      name: 'Require',
      component: Require,
      meta:{
        title:"需求大厅"
      }
    },
    {
      path: '/EnterPriseApply',
      name: 'EnterpriseApply',
      component: EnterPriseApply,
      meta:{
        title:"企业入驻"
      }
    },
    {
      path: '/JoinTeam',
      name: 'JoinTeam',
      component: JoinTeam,
      meta:{
        title:"加入团队"
      }
    },
    {
      path: '/Activity',
      name: 'Activity',
      component: Activity,
      meta:{
        title:"活动"
      }
    },
    {
      path: '*',
      name: 'error',
      component: Errorpage,
      meta:{
        title:"奇怪的地方"
      }
    },

  ],
})
