<template>
    <section class="hobbies-list bg-secondary grid-col-2 grid-reversed">
        <div class="box-text">
            <img class="hobby-image bounce-6" :src="require(`../assets/${isChosen}`)" :alt="isChosen" />
        </div>
        <div class="hobbies-container">
            <p class="text-xl">My Hobbies</p>
            <ul class="button-container">
                <hobby-info v-for="hobby in hobbies"
                    :key= hobby.id
                    :id= hobby.id
                    :name= hobby.name
                    @choose-hobby= chooseHobby
                ></hobby-info>
            </ul>
        </div>
    </section>
</template>

<script>
import HobbyInfo from "./HobbyInfo.vue";

export default({
    components: {
        HobbyInfo
    },
    data(){
        return {
            hobbies: [
                {
                    id: "playgame",
                    name: "Play Game",
                    image: "playing-game.png",
                },
                {
                    id: "listenmusic",
                    name: "Listen to Music",
                    image: "listen-music.png",
                },
                {
                    id: "readingcreepy",
                    name: "Read Creepy Story",
                    image: "ghost.png",
                }
            ],
            isChosen: "playing-game.png",
        }
    },
    methods: {
        chooseHobby(hobbyId) {
            const chosenHobby = this.hobbies.find(hobby => hobby.id === hobbyId);
            this.isChosen = chosenHobby.image;
        }
    },
})
</script>

<style scoped>
/* block B */

.hobby-image  {
  height: 35vh;
  width: 30vw;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
.bounce-6 {
  animation-name: bounce-6;
  animation-timing-function: ease;
}
@keyframes bounce-6 {
  0%   { transform: scale(1,1)      translateY(0); }
  10%  { transform: scale(1.1,.9)   translateY(0); }
  30%  { transform: scale(.9,1.1)   translateY(-100px); }
  50%  { transform: scale(1.05,.95) translateY(0); }
  57%  { transform: scale(1,1)      translateY(-7px); }
  64%  { transform: scale(1,1)      translateY(0); }
  100% { transform: scale(1,1)      translateY(0); }
}
.hobbies-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
}
.button-container {
    padding-left: 0px;
}

@media (max-width: 768px) {
    .text-xl {
        margin-top: 20px;
    }
    .hobbies-list {
    display: flex;
    flex-direction: column;
    }
    .hobby-image {
    width: 60vw;
    }
}

</style>
