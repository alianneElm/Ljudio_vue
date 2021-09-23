import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({

  state: {
    searchPhrase: '',  
    browseId:'',
    songList:[],
    artistList:[],
    artistAlbums:[],
    videoIdList:[],
    duration:'',
    thePlaylist:[],
  },
  mutations: {
    setThePlaylist(state, payload) {

      //console.log('mutation'+state.thePlaylist)
      state.thePlaylist = payload
    },
    setDuration(state, payload) {
      state.duration = payload
    },
    setVideoIdList(state, payload) {
      state.videoIdList = payload
    },
    setSearchPhrase(state, payload) {
      state.searchPhrase = payload
    },
    setSongList(state, payload) {
      state.songList = payload;
    },
    setArtistList(state, payload) {
      state.artistList = payload;
    },
    setArtistAlbums(state, payload) {
      state.artistAlbums = payload;
    },
    setBrowseId(state, payload) {
      state.browseId = payload;
    },
  },
  actions: {
    async fetchSongList() {
      await axios.get("https://yt-music-api.herokuapp.com/api/yt/songs/" + this.state.searchPhrase)
      .then(response => {

          console.log(response.data.content)
          this.commit("setSongList", response.data.content)
          this.commit("setVideoIdList", response.data.content)
      
      })
    },
    async fetchArtistList() {
      await axios.get("https://yt-music-api.herokuapp.com/api/yt/artists/" + this.state.searchPhrase)
      .then(response => {

        //console.log(response.data.content)

          this.commit("setArtistList", response.data.content)
      
      })
    },
    
    async fetchArtistAlbums() {
      await axios.get("https://yt-music-api.herokuapp.com/api/yt/search/" + this.state.browseId + ' all albums')
      .then(response => {

        console.log(response.data.content)

          this.commit("setArtistAlbums", response.data.content)
      
      })
    },
    async fetchPlaylist() {
      await axios.get("https://yt-music-api.herokuapp.com/api/yt/playlists/" + this.state.searchPhrase)
      .then(response => {

        

          this.commit("setThePlaylist", response.data.content)
      
      })
    },
   
  },
  getters: {
    getSongList(state){
      return state.songList
    },
    getVideoIdList(state){
      let ids = [];
      let listaCargada = state.videoIdList;
        for(let i = 0; i < listaCargada.length; i++) {
            let esteId = listaCargada[i].videoId;
            ids.push(esteId);
        }
        console.log('ides dest store' + ids)
      return ids
    },
    getArtistList(state){
      return state.artistList
    },
    getSearchPhrase(state){
      return state.searchPhrase
    },
    getArtistAlbums(state){
      return state.artistAlbums
    },
    getDuration(state) {
      return state.duration
  },
  getPlaylist(state) {
    
    return state.thePlaylist
},
}


})
