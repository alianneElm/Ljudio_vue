<template>
    <div class="search">  
    <form class="form-search">
        <input class="input-search" type="text" v-model="searchPhrase" placeholder="Search..."/>               
    </form>
    <div class="search-buttons">
        <button @click="searchSongs(searchPhrase)" type="button" class="songs btn">Songs</button>
        <button @click="searchArtists(searchPhrase)" type="button" class="artists btn">Artists</button>
        <button @click="theArtistAlbums(searchPhrase)" type="button" class="albums btn">Albums</button>
        <button @click="searchPlaylist(searchPhrase)" type="button" class="playlist btn">Playlist</button>
    </div>
    </div>
</template>

<script>

export default {
    name: 'Search',

 data(){
     return {
         searchPhrase:"",
     }
 },
 methods: {
    searchSongs(searchPhrase){
        if(searchPhrase === ''){
            alert("Please enter a search phrase")
        }else{
            this.$store.commit("setSearchPhrase", searchPhrase);
            this.$store.dispatch("fetchSongList")
            this.$router.push("/songs");
        }
    },
    searchArtists(searchPhrase){
        if(searchPhrase === ''){
            alert("Please enter a search phrase")
        }else{
            this.$store.commit("setSearchPhrase", searchPhrase);
            this.$store.dispatch("fetchSongList")
            this.$router.push("/artists");
        }
    },
    theArtistAlbums(name){
         if(name=== ''){
            alert("Please enter a search phrase")
        }else{
        this.$store.commit("setBrowseId", name);
        this.$store.dispatch("fetchArtistAlbums")
        this.$router.push("/artistalbums");
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
.search{
    margin-top:10%;
   
}

.form-search{
    display: flex;
    justify-content:center;
    background-color:rgba(20, 4, 6, 0.281);
    padding: 9px 0px 5px 0px;
    border-radius: 20px 20px 0 0;     
}
.input-search{
    background-color:rgba(173, 46, 46, 0.288);
    border-radius: 15px;
    border: 0px;
    width: 70%;
    padding: 8px 0 4px 25px;
    position: relative;
    font-family: 'Josefin Slab', serif;
    cursor:pointer;
    font-size: 20px;
    color:rgba(243, 182, 182, 0.747);
    outline: none;
    font-weight:400;
}
.search-buttons{
   background-color:rgba(20, 4, 6, 0.281);
    padding: 5px 0px 9px 0px;
    border-radius:0 0 20px 20px;
}
.btn{
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
.btn:hover{
 background-color:rgba(173, 46, 46, 0.288);
    border-radius: 15px;
   border: 0px;
   color:rgba(245, 222, 222, 0.829);
}
@media (min-width: 400px) and (max-width: 767.98px) { 
  .input-search{
    width: 500%;
   
}
  .search-buttons{
    width: 100%;
   
}
 .btn{
     margin-right: 9px;
 }
}

</style>