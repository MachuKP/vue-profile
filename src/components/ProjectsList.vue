<template>
    <section class="bg-secondary">
        <div class="header-outside">
            <div class="header-inside">
                <p class="text-lg">Projects</p>
            </div>
        </div>
        <div class="project-container">
            <project-info :style="slideStyles" v-for="project in projects"
                :key= project.id
                :id= project.id
                :name= project.name
                :image= project.image
            ></project-info>
            <img
                @click="leftSlide"
                src="../assets/right-arrow.webp"
                className="arrow left"
                alt=""
            />
            <img
                @click="rightSlide"
                src="../assets/right-arrow.webp"
                className="arrow right"
                alt=""
            />
        </div>
    </section>
</template>

<script>
import ProjectInfo from "./ProjectInfo.vue";
import { ref } from 'vue';

export default({
    setup() {
        const currentSlide = ref(1);
        const setCurrentSlide = (newValue) => {
          currentSlide.value = newValue;
        };
        return {
            currentSlide,
            setCurrentSlide
        }
    },
    components: {
        ProjectInfo
    },
    data(){
        return {
            projects: [
                {
                    id: "gallery",
                    name: "gallery",
                    image: "gallery.jpg"
                },
                {
                    id: "google",
                    name: "google",
                    image: "google.png",
                },
                {
                    id: "facebook",
                    name: "facebook",
                    image: "facebook.png"
                }
            ]
        }
        
    },
    methods: {
        rightSlide() {
            this.setCurrentSlide(this.currentSlide < this.projects.length - 1 ? this.currentSlide + 1 : 0);
        },
        leftSlide() {
            this.setCurrentSlide(this.currentSlide > 0 ? this.currentSlide - 1 : 2)
        }
    },
    computed: {
        slideStyles() {
            return {
                "transform": `translateX(-${this.currentSlide * 50}vw)`
            }
        }
    }
})
</script>

<style scoped>
/* block D */

.projects-list {
  display: flex;
  align-items: center;
  justify-content: center;
}
.project-container {
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
}

</style>