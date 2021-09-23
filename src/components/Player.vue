<template>

    <div id="result"> 
      <ul v-for="(theSong, index) in theSongListId" :key="index" >
        <li id="theLi">
            <img id="picture" :src="theSong.thumbnails[0].url" />
            <p>{{theSong.name}}</p>
            
            <button @click="play(theSong.videoId)">play</button>
    
            <button @click="pause()">Pause</button>
          </li>  
          
      </ul>
    
  </div>
</template>

<script>
export default {
  computed: {
    theSongListId() {
       return this.$store.getters.getSongList;
    }, 
  },
  methods:{
    play(id){
      // calling global variable
      window.player.loadVideoById(id)
      window.player.playVideo()
    },
    pause(){
      window.player.pauseVideo()
    },
  }
}
</script>