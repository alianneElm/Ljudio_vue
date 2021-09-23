<template>
   <div class="slider">
   <div class="slider-inner">
      <slider-item
        v-for="(slide, index) in slides"
        :slide="slide"
        :key="`item-${index}`"
        :current-slide="currentSlide"
        :index="index"
        :direction="direction"
        @mouseenter="stopSlideTimer"
        @mouseout="startSlideTimer"
      ></slider-item>
    </div>
    </div>
</template>

<script>
import SliderItem from '@/components/SliderItem.vue'
export default {
    name: 'Slider',
    components: {
        SliderItem,
    },

props: {
    slides: {
      type: Array,
      required: true,
    },
    interval: {
      type: Number,
      default: 5000,
    },
  },
  components: { SliderItem},
  data: () => ({
    currentSlide: 0,
    slideInterval: null,
    direction: "right",
  }),
  methods: {
    setCurrentSlide(index) {
      this.currentSlide = index;
    },
    prev(step = -1) {
      const index =
        this.currentSlide > 0
          ? this.currentSlide + step
          : this.slides.length - 1;
      this.setCurrentSlide(index);
      this.direction = "left";
      this.startSlideTimer();
    },
    _next(step = 1) {
      const index =
        this.currentSlide < this.slides.length - 1
          ? this.currentSlide + step
          : 0;
      this.setCurrentSlide(index);
      this.direction = "right";
    },
    next(step = 1) {
      this._next(step);
      this.startSlideTimer();
    },
    startSlideTimer() {
      this.stopSlideTimer();
      this.slideInterval = setInterval(() => {
        this._next();
      }, this.interval);
    },
    stopSlideTimer() {
      clearInterval(this.slideInterval);
    },
    switchSlide(index) {
      const step = index - this.currentSlide;
      if (step > 0) {
        this.next(step);
      } else {
        this.prev(step);
      }
    },
  },
  mounted() {
    this.startSlideTimer();
  },
  beforeUnmount() {
    this.stopSlideTimer();
  },
};
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
 
}
.slider{
  display: flex;
  justify-content: center;
}
.slider-inner {
  position: relative;
  width: 900px;
  height: 600px;
  overflow: hidden;
}
@media (min-width: 400px) and (max-width: 767.98px) { 
  .slider-inner {
  position: relative;
  width: 400px;
  height: 500px;
  overflow: hidden;
  object-fit: cover;
}
}
</style>
