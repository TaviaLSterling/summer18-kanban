import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

Vue.use(Vuex)

let auth = Axios.create({
  baseURL: "//localhost:3000/auth/",
  timeout: 3000,
  withCredentials: true
})

let api = Axios.create({
  baseURL: "//localhost:3000/api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    boards: [],
    activeBoard: {},
    lists: [],
    list: {},
    tasks: {},
    comments: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setBoards(state, boards) {
      state.boards = boards
    },
    setActiveBoard(state, boardId) {
      state.activeBoard = state.boards.find(b => b._id == boardId)
    },
    setLists(state, lists) {
      // let listObj = {}
      // lists.forEach(list => {
      //   listObj[list._id] = list
      // });
      // state.lists = listObj
      state.lists = lists
    },
    setTasks(state, tasks) {
      let taskObj = {}
      tasks.forEach(task => {
        if (!taskObj[task.listId]) {
          taskObj[task.listId] = []
          taskObj[task.listId].push(task)
        }
        else {
          taskObj[task.listId].push(task)
        }
      })
      console.log(tasks)
      state.tasks = taskObj
    },
    setComments(state, comments) {
      let commentObj = {}
      comments.forEach(comment => {
        if (!commentObj[comment.taskId]) {
          commentObj[comment.taskId] = []
          commentObj[comment.taskId].push(comment)
        }
        else {
          commentObj[comment.taskId].push(comment)
        }
      })
      console.log(comments)
      state.comments = commentObj
    }
  },
  actions: {
    //AUTH STUFF
    register({ commit, dispatch }, newUser) {
      auth.post('register', newUser)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'boards' })
        })
    },
    authenticate({ commit, dispatch }) {
      auth.get('authenticate')
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'boards' })
        })
    },
    login({ commit, dispatch }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'boards' })
        })
    },

    //BOARDS
    getBoards({ commit, dispatch }) {
      api.get('boards')
        .then(res => {
          commit('setBoards', res.data)
        })
    },
    addBoard({ commit, dispatch }, boardData) {
      api.post('boards', boardData)
        .then(serverBoard => {
          dispatch('getBoards')
        })
    },
    deleteBoard({ commit, dispatch }, boardId) {
      api.delete('boards/' + boardId)
        .then(res => {
          dispatch('getBoards')
        })
    },
    setActiveBoard({ commit, dispatch }, bId) {
      let obj = { boardId: bId }
      commit('setActiveBoard', bId)
      dispatch('getLists', obj)
    },

    //LISTs
    getLists({ commit, dispatch }, newList) {
      api.get('boards/' + newList.boardId + '/lists')
        .then(res => {
          commit('setLists', res.data)
        })
    },
    addList({ commit, dispatch }, newList) {
      api.post('boards/' + newList.boardId + '/lists', newList)
        .then(serverList => {
          dispatch('getLists', serverList.data)
        })
    },
    deleteList({ commit, dispatch }, listData) {
      api.delete('boards/' + listData.boardId + "/lists/" + listData._id)
        .then(res => {
          dispatch('getLists', listData)
        })
    },

    //TASKS
    getTasks({ commit, dispatch }, boardId) {
      api.get('boards/' + boardId + '/lists/tasks')
        .then(res => {
          commit('setTasks', res.data)
        })
    },
    addTask({ commit, dispatch }, newTask) {
      console.log(newTask)
      api.post("boards/" + newTask.boardId + "/lists/" + newTask.listId + "/tasks", newTask)
        .then(serverTask => {
          console.log(serverTask)
          dispatch('getTasks', serverTask.data.boardId)
        })

    },
    deleteTask({ commit, dispatch }, taskData) {

      api.delete('boards/' + taskData.boardId + '/lists/' + taskData.listId + '/tasks/' + taskData._id)
        .then(res => {
          dispatch('getTasks', taskData.boardId)
        })
    },

    ///COMMENTS
    getComments({ commit, dispatch }, boardId) {
      api.get('boards/' + boardId + '/lists/tasks')
        .then(res => {
          commit('setComments', res.data)
        })
    },
    addComment({ commit, dispatch }, newComment) {
      console.log(newComment)
      api.post("boards/" + newComment.boardId + "/lists/" + newComment.listId + "/tasks", newComment)
        .then(serverComment => {
          console.log(serverComment)
          dispatch('getTasks', serverComment.data.boardId)
        })

    },
    deleteComment({ commit, dispatch }, commentData) {

      api.delete('boards/' + commentData.boardId + '/lists/' + commentData.listId + '/comments/' + commentData._id)
        .then(res => {
          dispatch('getTasks', commentData.boardId)
        })
    },

  }
})