import Vue from 'vue'
import Router from 'vue-router'
import Boards from './views/Boards.vue'
import Board from './views/Board.vue'
import Login from './views/Login.vue'
import List from './components/List.vue'
import Task from './components/Task.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'boards',
      component: Boards
    },
    {
      path: '/board/:boardId',
      name: 'board',
      props: true,
      component: Board
    },
    // {
    //   path: '/:boardId/lists',
    //   name: 'list',
    //   props: true,
    //   component: List
    // },
    // {
    //   path: '/listId/tasks',
    //   name: 'task',
    //   props: true,
    //   component: Task
    // },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: "*",
      redirect: '/'
    }
  ]
})