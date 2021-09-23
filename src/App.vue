<template>
  <div class="top">
    <p>Unlimited free music - The best artists - The best songs - The best albums</p>
  </div>
  <div>
    <router-link style="text-decoration: none; color: inherit;" to="/"><h1 >Ljudio</h1></router-link>  
  </div>
  <router-view/>

</template>
<script>
export default{
  name: "App", 
}
</script>


<style>

@import url('https://fonts.googleapis.com/css2?family=Allura&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@100;300;500;700&display=swap');
*{
  
  margin: 0;
  padding: 0;
 
}
body{
  background-color:black;
}

.top{
  background-color: black;
  padding: 0.6%;
  letter-spacing: 0.25em;
  font-weight:400;
  
  
}
#app {
  font-family: 'Josefin Slab', serif;
  color:white;
  text-align: center;
  background-image: url("https://static.vecteezy.com/system/resources/previews/001/270/610/non_2x/red-and-black-gradient-colored-texture-vector.jpg");
  height: 100%;
  min-height:100vh;
  background-size: cover;
  background-repeat: no-repeat; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: rgba(245, 187, 187, 0.301);
}
h1{
    font-family: 'Allura', cursive;
    font-size:750%;
    padding:  0%  0%  0% 5%;
    color: rgba(248, 248, 248, 0.952);
    text-shadow: 2px 2px #ca000ac0;
    padding-right: 0;
    width:1px; 
    height:1px;
    
}

#copy{
  color: white;
  text-align: center;
  padding: 1%;
  bottom: 0;
  }
@media (min-width: 768px) and (max-width: 991.98px) { 
  #app{
    font-size: 12px;
  }
  h1{
    font-weight:100
  }
}
@media (min-width: 400px) and (max-width: 767.98px) { 
  #app {
  font-size: 10px;
  }
  .top{
  display:none;
  }
}





</style>
