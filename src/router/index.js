import Vue from 'vue'
import Router from 'vue-router'
import UserHomePage from '@/components/UserHomePage'
import Login from '@/components/Login'
import Registe from '@/components/Registe'
import Errorpage from "../components/Errorpage";
import Requires from "../components/Requires";
import EnterPriseApply from "../components/EnterPriseApply";
import Activities from "../components/Activities";
import Forget from "../components/Forget";
import UserPage from "../components/UserPage"
import EnterpriseRegiste from "../components/EnterpriseRegiste";
import EnterpriseFoget from "../components/EnterpriseFoget";
import AddRequire from "../components/AddRequire";
import AddActivity from "../components/AddActivity";
import Activity from "../components/Activity";
import Require from "../components/Require";
import AdminLogin from "../components/amdin/AdminLogin"

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/admin/login',
      name: "AdminLogin",
      component: AdminLogin,
      meta:{
        title:"后台管理",
        keepAlive: true,
        header:false
      }
    },
    {
      path: '/',
      name: 'UserHomePage',
      component: UserHomePage,
      meta: {
        title: "湖南工学院创客空间首页",
        keepAlive: true,
        header:true
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: {
        title: "登录"
      }
    },
    {
      path: '/Registe',
      name: 'Registe',
      component: Registe,
      meta: {
        title: "注册",
        keepAlive: true,
        header:true
      }
    },
    {
      path: '/Requires',
      name: 'Requires',
      component: Requires,
      meta: {
        title: "需求大厅",
        keepAlive: true,
        header:true
      }
    },
    {
      path: '/EnterPriseApply',
      name: 'EnterpriseApply',
      component: EnterPriseApply,
      meta: {
        title: "企业入驻",
        requiresAuth: true,
        keepAlive: true,
        header:true
      }
    },
    {
      path: '/Activities',
      name: 'Activities',
      component: Activities,
      meta: {
        title: "活动",
        keepAlive: true,
        header:true
      }
    },
    {
      path: '/Activity',
      name: 'Activity',
      component: Activity,
      meta: {
        title: "活动详情",
        keepAlive: true,
        header:true
      }
    },
    {
      path: '/Require',
      name: 'Require',
      component: Require,
      meta: {
        title: "项目详情",
        keepAlive: true,
        header:true
      }
    },
    {
      path: '/EnRegiste',
      name: 'EnterpriseRegiste',
      component: EnterpriseRegiste,
      meta: {
        title: '企业用户注册',
        keepAlive: true,
        header:true
      }
    },
    {
      path: '/me',
      name: 'UserPage',
      component: UserPage,
      meta: {
        title: "个人中心",
        keepAlive: true,
        requiresAuth: true,
      header:true
      }
    },
    {
      path: '/EnForget',
      name: 'EnterpriseFoget',
      component: EnterpriseFoget,
      meta: {
        title: "忘记密码",
        keepAlive: true,
        header:true
      }
    },
    {
      path: '/Forget',
      name: 'Forget',
      component: Forget,
      meta: {
        title: "忘记密码",
        keepAlive: true,
        header:true
      }
    },
    {
      path: '/AddRequire',
      name: 'AddRequire',
      component: AddRequire,
      meta: {
        title: "发布需求",
        keepAlive: true,
        requiresAuth: true,
      header:true
      }
    },
    {
      path: '/AddActivity',
      name: 'AddActivity',
      component: AddActivity,
      meta: {
        title: "发布需求",
        keepAlive: true,
        requiresAuth: true,
      header:true
      }
    },
    {
      path: '*',
      name: 'error',
      component: Errorpage,
      meta: {
        title: "奇怪的地方",
        keepAlive: true,
        header:true
      }
    },

  ],
})
