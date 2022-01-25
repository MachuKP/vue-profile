<template>
    <div @click="$emit('choose-gallery', index);" class="gimage-container">
        <img class="gallery-img" :src="require(`../assets/${image}`)" :alt="id" >
    </div>
</template>

<script>

export default({
    props: {
        'id': {
            type: String,
            required: true
        },
        'image': {
            type: String,
            required: true
        },
        'index': {
            type: Number,
            required: true
        }
    },
    emit: ['choose-gallery']
    
})
</script>

<style scoped>
.gimage-container {
    background-color: var(--primary-color);
    margin: 20px;
    border-radius: 1rem;
}
.gallery-img {
  height: 100px;
  width: 120px;
  margin: 5px;
  border-radius: 1rem;
}
</style>
