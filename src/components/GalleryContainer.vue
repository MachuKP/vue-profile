<template>
    <section class="gallery-container bg-light">
        <div class="header-outside">
            <div class="header-inside">
                <p class="text-lg">Gallery</p>
            </div>
        </div>
        <div class="gallery-main">
            <div class="gallery-wrapper">
                <gallery-image v-for="(gImage, index) in galleryImage"
                    :key= gImage.id
                    :id= gImage.id
                    :image= gImage.image
                    :index= index
                    @choose-gallery= openPicture
                ></gallery-image>
            </div>
        </div>
        <div v-if="coverPage">
            <show-picture
                :key= galleryImage[currentPicture].id
                :id= galleryImage[currentPicture].id
                :image= galleryImage[currentPicture].image
                :maxlength= galleryImage.length
                @slide-left= slideLeft
                @slide-right= slideRight
                @close-picture= closePicture
            ></show-picture>
        </div>
    </section>
</template>

<script>
import GalleryImage from "./GalleryImage.vue";
import ShowPicture from "./ShowPicture.vue";

export default({
    components: {
        GalleryImage,
        ShowPicture
    },
    data(){
        return {
            galleryImage: [
                {
                    id: "01",
                    image: "fruit-01.jpg"
                },
                {
                    id: "02",
                    image: "fruit-02.jpg"
                },
                {
                    id: "03",
                    image: "fruit-03.jpg"
                },
                {
                    id: "04",
                    image: "fruit-04.jpg"
                },
                {
                    id: "05",
                    image: "fruit-05.jpg"
                },
                {
                    id: "06",
                    image: "fruit-06.jpg"
                },
                {
                    id: "07",
                    image: "fruit-07.jpg"
                },
                {
                    id: "08",
                    image: "fruit-08.jpg"
                },
                {
                    id: "09",
                    image: "fruit-09.jpg"
                },
                {
                    id: "10",
                    image: "fruit-10.jpg"
                },
                {
                    id: "11",
                    image: "fruit-11.jpg"
                },
                {
                    id: "12",
                    image: "fruit-12.jpg"
                },
            ],
            coverPage: false,
            currentPicture: null
        } 
    },
    methods: {
        openPicture(index) {
            this.coverPage = true;
            this.currentPicture = index;
        },
        closePicture() {
            this.coverPage = false;
            this.currentPicture = null;
        },
        slideLeft() {
            this.currentPicture = Number(this.currentPicture) - 1;
        },
        slideRight() {
            this.currentPicture = Number(this.currentPicture) + 1;
        }
    },
})
</script>

<style scoped>
/* gallery */

.gallery-main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(76vh);
  overflow-y: scroll;
}
.gallery-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.picture-img {
  width: 50vw;
  height: 50vh;
}

@media (max-width: 768px) {
    .gallery-wrapper {
        grid-template-columns: 1fr 1fr;
    }
}

@media (max-width: 400px) {
    .gallery-wrapper {
        grid-template-columns: 1fr;
    }
}
</style>