import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../components/Search.vue'
import SongList from '../components/SongList.vue'
import ArtistList from '../components/ArtistList.vue'
import ArtistAlbums from '../components/ArtistAlbums.vue'
import Player from '../components/Player.vue'
import Playlist from '../components/Playlist.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/songs',
    name: 'SongList',
    component: SongList
  },
  {
    path: '/artists',
    name: 'ArtistList',
    component: ArtistList
  },
  {
    path: '/artistalbums',
    name: 'ArtistAlbums',
    component: ArtistAlbums
  },
  {
    path: '/player',
    name: 'Player',
    component: Player
  },
  {
    path: '/playlist',
    name: 'Playlist',
    component: Playlist
  },
  

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
