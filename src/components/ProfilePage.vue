<template>
    <self-info></self-info>
    <hobbies-list></hobbies-list>
    <skills-list></skills-list>
    <projects-list></projects-list>
</template>

<script>
import SelfInfo from "./SelfInfo.vue";
import SkillsList from "./SkillsList.vue";
import HobbiesList from "./HobbiesList.vue";
import ProjectsList from "./ProjectsList.vue";

export default {
  components: {
    SelfInfo,
    SkillsList,
    HobbiesList,
    ProjectsList,
  }

}
</script>