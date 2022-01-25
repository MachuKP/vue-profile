<template>
    <div class="showpicture-container">
        <img class="picture-img" :src="require(`../assets/${image}`)" :alt="id" >
        <img
            @click="$emit('close-picture', index);"
            src="../assets/cross.png"
            className="cross"
            alt=""
        />
        <div v-if="id !== '01'">
            <img
                @click="$emit('slide-left', index);"
                src="../assets/right-arrow.webp"
                className="arrow left"
                alt=""
            />
        </div>
        <div v-if="id != maxlength">
            <img
                @click="$emit('slide-right', index);"
                src="../assets/right-arrow.webp"
                className="arrow right"
                alt=""
            />
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
        'image': {
            type: String,
            required: true
        },
        'index': {
            type: Number,
            require: true
        },
        'maxlength': {
            type: Number,
            require: true
        }
    },
    emit: ['slide-right', 'slide-left']
})
</script>

<style scoped>

/* show picture */
.showpicture-container {
    display: flex;
    align-items: center;
    justify-content:center;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    width: 100vw;
    height: calc(87.7vh);
}
.picture-img {
    width: 80vw;
    height: 80vh;
}

</style>