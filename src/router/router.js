import { createRouter,createWebHistory } from "vue-router"
import Home from '../view/Home.vue'
import Posts from '../view/Posts.vue'
import Post from '../view/Post.vue'
import Contact from '../view/Contact.vue'
import Protected from '../view/protected.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component : Home
    },
    {
        path: '/posts',
        name: 'Posts',
        component : Posts,
    },                                                                   
    {
        path: '/post/:id',
        name: 'Post',
        component : Post
    },
    {
        path: '/contact',
        name: 'Contact',
        component : Contact
    }, 
    {
        path: '/protected',
        name: 'Protected',
        component : Protected,
        meta: {
            isAuthRequire : true
        }
    },
]

const isAuthenticate = ()=>{
    return localStorage.getItem('token')
}

const router = createRouter({
    history : createWebHistory(),
    routes
});

// protected route check
router.beforeEach((to, from, next) => {
   if(to.meta.isAuthRequire && !isAuthenticate()){
    next('/')
   }else{
    next()
   }
});

export default router;

