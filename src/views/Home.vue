<template>
  <div class="home">
    <div class="search-component">
      <Search/>
    </div> 
    <div class="slider-component">
    <Slider :slides="slides" :interval="4000" ></Slider>
  </div>
  </div>
</template>

<script>


import Search from '@/components/Search.vue'
import Slider from '@/components/Slider.vue'
export default {
  name: 'Home',
  components: {
    Search,
    Slider,
  }
  ,
  data: () => ({
    
    slides: [

      "https://cdn.pixabay.com/photo/2018/02/08/02/45/performance-3138563_960_720.jpg",
      "https://cdn.pixabay.com/photo/2015/09/25/22/59/performer-958392_960_720.jpg",
      "https://cdn.pixabay.com/photo/2015/03/08/17/25/musician-664432_960_720.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/06/17/audience-1867754_960_720.jpg",
      "https://cdn.pixabay.com/photo/2017/08/07/07/05/people-2600872_960_720.jpg",
      "https://cdn.pixabay.com/photo/2017/08/01/12/42/concert-2565099_960_720.jpg",
      "https://cdn.pixabay.com/photo/2019/05/27/04/19/guitar-4231782_960_720.jpg",
    ],
  }),
}
</script>
<style scoped>
.search-component{
  margin: 0 35%;
}
.slider-component{
  margin-top:3%;
  
}
@media (min-width: 768px) and (max-width: 991.98px) { 
  .search-component{
  margin: 12% 30% 10% 30%;
}
}
@media (min-width: 400px) and (max-width: 767.98px) { 
  .search-component{
  margin: 18% 10% 5% 10%;
  }
  
}

</style>