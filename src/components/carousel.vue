<template>
     
  <div>
    <div>  <router-link to ="/Login">login </router-link>   </div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#FF5733"
      img-width="300"
      img-height="100"
      style="text-shadow: 1px 1px 2px #373345"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
    
      <b-carousel-slide>
        
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="512px"
            height="240"
            src="../assets/piano.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="512px"
            height="240px"
            src="../assets/guitarra.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="512"
            height="240"
            src="../assets/piano2.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="512"
            height="240"
            src="../assets/piano.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>

    </b-carousel>
    
  </div>
</template>
<script>
export default {
  name: "carousel",
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>
