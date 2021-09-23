<template>
    <div id="songTitle">
        <p>{{msg}}</p>
    </div>
    <div id="controls-container">
        <div v-if="moreStyle" id="theTop">
            <i v-if="playing"  @click="pause()" class="fas fa-pause"></i>
            <i v-if="!playing"  @click="playAfterPaus()" class="fas fa-play"></i>
            <i @click="backward(), songInformation()"  class="fas fa-backward"></i>
            <p> {{songCurrentTime}}/ {{theSongDuration}} </p>
            <i @click="next(), songInformation()" class="fas fa-forward"></i>
            <a :href="`mailto:?subject=&body=https://www.youtube.com/watch?v=${id}`"><i class="fas fa-share"></i></a>
        </div>
    </div>
    <div @click="seek()"  v-if="moreStyle" id="progress-bar">
        <div @click="updateX" class="loading" style="margin-top: 11px; height: 5px; background-color: rgba(77, 8, 8, 0.582); padding:5px; border-radius:10px;"
        v-bind:style="{width:  progressDuration  + 'px' }">
            <div role="progressbar" class="loading" style=" height: 100%; background-color:rgba(245, 18, 18, 0.61); text-align: center; border-radius:10px"
                 v-bind:style="{width: timeToProgress  + 'px' }"><p></p>
            </div> 
        </div>
    </div>
    <div v-if="!moreStyle"  id="name">
        <h2>Best results for: <em>"{{theSongName}}"</em></h2> 
    </div>
    <div  v-if="theSongList.length<0">
        <p>The search did not return any results</p>
    </div>
    <div id="result"> 
        <ul v-for="(theSong, index) in theSongList" :key="index" >
            <li v-if="theSong.type == song" @click="seekBarInterval(), play(index, theSong.videoId, theSong.name), theFinalDuration(theSong.duration)" id="theLi">
                <img id="picture" :src="theSong.thumbnails[0].url" />
                <p id="title">{{theSong.name}}</p>
                <p id="info">{{theSong.artist.name}}</p>  
            </li>
            <li v-if="id == theSong.videoId" id="theControl">
                <a  :href="`mailto:?subject=&body=https://www.youtube.com/watch?v=${id}`"><i class="fas fa-share"></i></a>
                <p v-if="playing"><em>Playing . </em><span><i id="disco" class="fas fa-compact-disc"></i></span></p>
                <p v-if="!playing"><em>Paused . . .</em></p>
                <p> {{songCurrentTime}}/ {{theSongDuration}} </p>
            </li>    
        </ul>
    </div>
</template>

<script>
export default {
    name: "SongList",
    data(){
        return {
        id:'',
        ids:[],
        theIndex:0,
        songCurrentTime:'',
        theSongDuration: '',
        song: 'song',  
        laLista:[],
        msg:'Play your song!', 
        playing: false, 
        moreStyle:false,
        timeToProgress:0,
        progressDuration:0,
        widthX:0,
        
        }
    },
    computed: {
    theSongList() {
        this.laLista = this.$store.getters.getSongList;
        return this.laLista
    },

    theSongName() {
        return this.$store.getters.getSearchPhrase;
    }, 
     
    },
    methods: {
          
        updateX : function(event){
            this.widthX = event.offsetX;
                 
        },
        
        seek(){
            
            player.seekTo(this.widthX, true);
            
        },
        seekBarInterval() {
            let timeNow='';
            let timeTime =0;
       
            setInterval(()=> {
            timeTime = Math.round(player.getCurrentTime());
            this.timeToProgress = timeTime;
            //console.log('este es time to progress '+this.timeToProgress)// segundos
            let m = Math.floor(timeTime / 60);
            let secd = timeTime % 60;
            let s = Math.ceil(secd)
            timeNow= m + '.'+ s

            this.songCurrentTime= timeNow;
            

        }, 1000);  
        this.songCurrentTime= timeNow;
    },

    play(index, id, name){
        this.id = id;
        this.theIndex = index;
        this.msg = name;
        this.playing = true;
        this.moreStyle= true;

            this.ids = [];
        let listaCargada = this.laLista
            for(let i = 0; i < listaCargada.length; i++) {
                let esteId = listaCargada[i].videoId;
                this.ids.push(esteId); 
            }
        player.loadPlaylist(this.ids, index)       
    },

    songInformation(){
        this.msg = this.laLista[this.theIndex].name;
        this.id = this.laLista[this.theIndex].videoId;
        
        let mind = this.laLista[this.theIndex].duration; 
        this.progressDuration = Number(mind/1000)
       //console.log('la diracion final '+this.progressDuration)
        let m = Math.floor((mind/1000/60) << 0);
        
        
        let s =  Math.floor((mind/1000) % 60);
        this.theSongDuration = m + "." + s
    },

    playAfterPaus(){
        this.playing = true;
        player.playVideo()
    },

   theFinalDuration(duration){
        let mind = duration;  
        this.progressDuration = mind/1000
        //console.log('la diracion final '+this.progressDuration)
        
        let m = Math.floor((mind/1000/60) << 0);
        
        
        let s =  Math.floor((mind/1000) % 60);
        this.theSongDuration = m + ":" + s
        return this.theSongDuration
    },

    pause(){  
        this.playing = !this.playing;
        player.pauseVideo() 
    },

    next(){
        this.theIndex = Number(this.theIndex+1)
       //console.log('index de next '+ this.theIndex)
       this.playing = true;
        player.nextVideo();
        
    },

    backward(){
        this.theIndex = Number(this.theIndex-1)
       //console.log('index de next '+ this.theIndex)
       this.playing = true;
        player.previousVideo() 
        
    },
} 
}
</script>

<style scoped>
*{
  
  margin: 0;
  padding: 0;
  
}

#songTitle{
    padding-top:2%;
    padding-bottom:1%;
    background-color:rgba(0, 0, 0, 0.514);
}

#songTitle>p {
    margin-right: 5px;
    font-size: 35px;
    color:rgba(255, 0, 0, 0.432);
}

#controls-container{
    background-color:rgba(12, 1, 1, 0.616);
}

#theTop {
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
    object-fit: cover;
    width:60%;
    height: 100%;
   margin-left: 17.5%;  
}

#theTop>i, #theTop>p, #theTop>a {
     display: flex;
    margin-right: 5px;
    font-size: 35px;
    color:rgba(255, 0, 0, 0.432);
    text-decoration: none;
}

#theTop>p{
   font-size: 20px; 
   margin-top: 9px;
}

#name{
    color:rgba(245, 199, 199, 0.644);
    background-color: rgba(0, 0, 0, 0.247);
    padding: 0.8em;
    text-shadow: 2px 2px #ca000a69;
    font-size: 10px;
    width:100%;
    height: 100%;
}

ul{
    margin-top:0.4%;
    transition:1s;
    width: 60%;
    margin-left: 20%;  
}

ul:hover{
    transform: scale(1.04);
    margin-top: 0.1%;    
}

li{
    color:rgba(255, 255, 255, 0.699);
    display: flex;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.363);      
}

#theLi{
    border-radius: 15px 15px 0 0; 
    padding: 0.9em 0.9em 0em 0.9em;   
}

#theControl{
    border-radius:0 0 15px 15px ; 
    padding:0em 0.9em 0.9em  0.9em;     
}

 #theControl>a>i{
    padding-top:70%;
    
}

 #theControl>p{
    position: relative;
}

 #theControl>p>span{
    position: absolute;
    right: 0;
    width:0;
    margin:0% 0 5% 8%;
    padding-top:2%;
    background-color: rgba(75, 5, 5, 0.986);
    color:rgba(243, 229, 229, 0.699);
    font-size:15px;   
}
#theControl>.fa-compact-disc{
    margin-left: 5%;
    font-size: 35px;
    color:rgba(255, 0, 0, 0.658);
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
}

li>a>i{
font-size: 20px;
margin-top: 1.5%;
color:rgba(255, 0, 0, 0.432);
}

#progress-bar{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:rgba(0, 0, 0, 0.514);
    padding-bottom:1.2%;  
}
@media (min-width: 768px) and (max-width: 991.98px) { 
  
  #songTitle{
    padding-top:11%;
    padding-bottom:0%;
  }
  ul{
    margin-top:1.5%; 
    }
    #title{
    font-size: 23px;
    }
    #info{
    font-size: 15px;
    }
    #theControl>p{
        font-size: 15px
    }
}
@media (min-width: 400px) and (max-width: 767.98px) { 
   #songTitle{
    padding-top:19%;
    padding-bottom:1%;
  }
  ul{
    margin-top:1.5%;
     width: 80%;
    margin-left: 10%;   
    }
    #title{
    font-size: 22px;
    }
    #info{
    font-size: 12px;
    }
}
</style>