<template>
<div id="theTop">
      <h2></h2>
  </div>
      <div id="name">
      <h2>Playlist</h2> 
  </div>
  <div  id="result"> 
      <ul v-for="(thePlaylist, index) in artistPlaylist" :key="index" >
        <li v-if="thePlaylist.type == playlist" id="theLi">
            <p id="title">{{thePlaylist.title}}</p>  
        </li> 
        <li v-if="thePlaylist.type == playlist" id="theControl">
            <button @click="searchSongs(thePlaylist.title)" id="albums">Listen now</button> 
            <a @click="sendTheValue(thePlaylist.title)"  :href="`mailto:?subject=&body=https://www.youtube.com/results?search_query=${sharePlaylist}+playlist`"><i class="fas fa-share"></i></a>       
     
        </li> 
      </ul>
    </div>  
</template>

<script>
export default {
    data(){
        return {
            playlist : 'playlist',
            sharePlaylist:'',
            year: '',
        }
    },
    computed: {
        artistPlaylist() {
        return this.$store.getters.getPlaylist; 
        }, 
    },  
    methods: {
        sendTheValue(name){
            this.sharePlaylist = name.replace(/\s+/, "");
        },
         searchSongs(phrase){
             let searchPhrase = 'playlist '+ phrase ;
            this.$store.commit("setSearchPhrase", searchPhrase);
            this.$store.dispatch("fetchSongList")
            this.$router.push("/songs");
        }
    },
    
}

</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
 
}
#theTop {
    padding: 70px;
    background-image: url('https://media.v2.siweb.es/uploaded_thumb_small/e6165049acc3a4624d76fc3cb745b470/IMG_1173.jpg');
    object-fit: cover;
    width: 100%;
    height: 100%;
    opacity: 0.5;
}
#result {
    margin-top: 5%;    
}
#name{
    color:white;
    background-color: rgba(0, 0, 0, 0.356);
    padding: 0.5em;
    color: rgba(248, 248, 248, 0.808);
    text-shadow: 2px 2px #ca000a69;
    font-size: 15px;
}
li{
    color:rgba(255, 255, 255, 0.541);
    display: flex;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.363);
    width: 60%;
    margin-left: 20%;
    padding:0.4%; 
   
}
#theLi{
    border-radius: 15px 15px 0 0;
    margin-top: 2%;
} 
#theControl{
    border-radius: 0 0 15px 15px;
    display: flex;
}  
#picture{
    border-radius: 50%;
   box-shadow: 10px 5px 5px rgb(15, 3, 3);
}
li>p{
    
    color: rgba(243, 220, 220, 0.801);
    text-shadow: 3px 3px 3px #0c0203ef;
}
#title{
 font-size: 24px;
 margin-top: 1%;
}
li>a>i{
font-size: 20px;
margin-top: 50%;
color:rgba(255, 0, 0, 0.432);
  
}

button{
background-color: transparent;
color:rgba(245, 197, 197, 0.767);
padding:0.8%;
border-radius: 15px;
border: 2px solid rgba(238, 242, 243, 0.466);
font-family: 'Josefin Slab', serif;
font-size: 16px;
box-shadow: 3px 3px  3px#220202ec;
margin-top:1%;
margin-right: 15px;
font-weight:550;
text-shadow: 1px 2px #14010148;
}
button:hover{
 background-color:rgba(173, 46, 46, 0.288);
    border-radius: 15px;
   border: 0px;
   color:rgba(245, 222, 222, 0.829);
}
#albums{
    margin-left:2%;
}
@media (min-width: 768px) and (max-width: 991.98px) { 
  li{
    width: 70%;
    margin-left: 15%;
    padding:1%; 
}
#theLi{
   
    margin-top: 4%;
} 
li>p{
  padding:1%; 
}
#title{
 font-size: 20px;
}
}
@media (min-width: 400px) and (max-width: 767.98px) { 
    #result{
         margin-top: 5%;
    }
    li{
    width: 80%;
    margin-left: 10%;
    padding:2%;
    }
    #title{
        font-size: 20px;
    }

}
</style>