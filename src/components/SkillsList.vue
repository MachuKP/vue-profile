<template>
    <section class="skills-list bg-light">
        <div class="header-outside">
            <div class="header-inside">
                <p class="text-lg">Skill List</p>
            </div>
        </div>
        <div class="skill-container">
            <skill-info  v-for="skill in skills"
                :key= skill.id
                :id= skill.id
                :name= skill.name
                :image= skill.image
            ></skill-info>
        </div>
    </section>
</template>

<script>
import SkillInfo from "./SkillInfo.vue";

export default({
    components: {
        SkillInfo
    },
    data() {
        return {
            skills: [
                {
                    id: 'javascript',
                    name: 'JavaScript',
                    image: 'javascript.svg.png',
                },
                {
                    id: 'vue',
                    name: 'Vue',
                    image: 'vue.svg.png',
                },
                {
                    id: 'react',
                    name: 'React',
                    image: 'react.png',
                },
                {
                    id: 'html',
                    name: 'HTML',
                    image: 'html.png',
                },
                {
                    id: 'css',
                    name: 'CSS',
                    image: 'css.png',
                },
                {
                    id: 'sql',
                    name: 'SQL',
                    image: 'sql.webp',
                },
            ]
        }
    }
})
</script>

<style scoped>

/* block C */

.skill-container {
  width: 100%;
  height: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
}
.card-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .skill-container {
    overflow-x: scroll;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
}

</style>
