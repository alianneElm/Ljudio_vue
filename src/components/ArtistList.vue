<template>
    <div id="theTop">
        <h2></h2>
    </div>
    <div id="name">
        <h2>Best results for: "{{theArtistName}}"</h2> 
    </div>
    <div  v-if="theArtistList.length<0"><p>The search did not return any results</p></div>
        
            <div v-else id="result"> 
                <div id="theLi">
                    <img id="picture" :src="theArtistList[0].thumbnails[1].url" />
                    <p id="title">{{theArtistList[0].artist.name}}</p>
                    <a @click="sendValue(theArtistList[0].artist.name)"  :href="`mailto:?subject=&body=https://www.youtube.com/results?search_query=${name}`"><i class="fas fa-share"></i></a>
            
                </div> 
                <div id="theControl"> 
                    <button @click="theArtistAlbums(theArtistList[0].artist.name)" id="albums">Albums</button> 
                    <button @click="searchSongs(theArtistList[0].artist.name)" id="songs">Songs</button>  
                    <button @click="searchPlaylist(theArtistList[0].artist.name)" id="playlists">Playlist</button>    
                 </div> 
            </div>   
        
    
</template>

<script>

export default {
name: "ArtistList",
data(){
    return {
        searchArtist:'',
        name:'',
        
    }
},

computed: {
    theArtistList() {
      return  this.$store.getters.getSongList;
    }, 
    theArtistName() {
       this.searchArtist=  this.$store.getters.getSearchPhrase; 
       return this.searchArtist
    },
      
},
    mounted(){
},
methods: {
    sendValue(name){
        this.name = name.replace(/\s+/, "");
    },
    theArtistAlbums(name){
        this.$store.commit("setBrowseId", name);
        this.$store.dispatch("fetchArtistAlbums")
        this.$router.push("/artistalbums");
    },
    searchSongs(searchPhrase){
        if(searchPhrase === ''){
            alert("Please enter a search phrase")
        }else{
            this.$store.commit("setSearchPhrase", searchPhrase);
            this.$store.dispatch("fetchSongList")
            this.$router.push("/songs");
        }
    },
      searchPlaylist(searchPhrase){
        console.log('SEARCH '+searchPhrase)
        if(searchPhrase === ''){
            alert("Please enter a search phrase")
        }else{
        this.$store.commit("setSearchPhrase", searchPhrase);
        this.$store.dispatch("fetchPlaylist")
        this.$router.push("/playlist");}
    },
}
}


</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
#theTop {
    padding: 70px;
    background-image: url('https://www.lavanguardia.com/files/image_449_220/uploads/2016/06/20/5fa2d51e3eb72.jpeg');
    object-fit: cover;
    width: 100%;
    height: 100%;
    opacity: 0.5;
}
#name{
    color:white;
    background-color: rgba(0, 0, 0, 0.356);
    padding: 0.5em;
    color: rgba(248, 248, 248, 0.808);
    text-shadow: 2px 2px #ca000a69;
    font-size: 20px;
}
#result {
    margin-top: 6%; 
}

#theLi, #theControl{
    color:rgba(255, 255, 255, 0.541);
    display: flex;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.363);
    border-radius: 10px;
    width: 60%;
    margin-left: 20%;
    padding:0.4%;  
    border-radius: 15px 15px 0 0; 
    padding: 0.9em 0.9em 0em 0.9em;  

}
  
#theControl{
border-radius:0 0 15px 15px ; 
padding:2em 0.9em 0.9em  0.9em;  

}   
#picture{
    border-radius: 50%;
   box-shadow: 10px 5px 5px rgb(15, 3, 3);
}
p{
    
    color: rgba(243, 220, 220, 0.801);
    text-shadow: 3px 3px 3px #0c0203ef;
}
#title{
 font-size: 24px;
 margin-top: 1%;
}
a>i{
font-size: 25px;
margin-top: 1.5%;
color:rgba(255, 0, 0, 0.432);
  
}
.theControl{
   background-color:rgba(20, 4, 6, 0.281);
    padding: 5px 0px 9px 0px;
    border-radius:0 0 20px 20px;
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
  #result{
  margin-top: 30%;
}
}
@media (min-width: 400px) and (max-width: 767.98px) { 
    #result{
         margin-top: 30%;
    }
}


</style>