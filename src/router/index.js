import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import filmRouter from "./routes/film"
import cinemaRouter from "./routes/cinema"
import centerRouter from "./routes/center"

const routes = [
 { path: "/",
 redirect:"/films/nowPlaying",
},

 ...filmRouter,
 cinemaRouter,
 centerRouter,


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
