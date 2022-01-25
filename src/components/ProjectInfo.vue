<template>
    <div class="project-box">
        <img class="project-img" :src="require(`../assets/${image}`)" :alt="name" >
        <div>
            <h2 class="text-md">{{ name }}</h2>
        </div>
    </div>
</template>

<script>

export default({
    props: {
        'id': {
            type: String,
            required: true
        },
        'name': {
            type: String,
            required: true
        },
        'image': {
            type: String,
            required: true
        }
    }
    
})
</script>

<style scoped>

.project-box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 40px;
  background-color: var(--primary-color);
  padding: 4px;
  border-radius: 20px;
}
.project-img {
  width: 70vw;
  height: 50vh;
  background-color: white;
  border-radius: 20px;
}
</style>
