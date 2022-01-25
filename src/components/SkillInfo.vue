<template>
    <div class="card-container">
        <div class="skill-card">
            <div class="skill-top">
                <img class="skill-img" :src="require(`../assets/${image}`)" :alt="name" >
            </div>
            <div class="skill-bottom">
                <p class="text-md-dark">{{ name }}</p>
            </div>
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
        },
    },
})
</script>

<style scoped>

.skill-card {
  width: 250px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px -8px #000;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  background-color: var(--primary-color);
  transition: all 1s ease;
}
.skill-card:hover {
  transform: scale(1.1);
}
.skill-img {
  height: 80px;
  width: 80px;
  padding: 5px;
  border-radius: 15%;
  background-color: #fff;
  object-fit: cover;
  margin: 0 30px;
}
.skill-top {
  display: flex;
  align-items: center;
  justify-content: center;
}
.skill-bottom {
  padding: 3px;
  margin-top: 20px;
  border-radius: 10px;
  background-color: var(--light-color);
  display: flex;
  align-items: center;
  justify-content: center;
}
.text-md-dark {
  margin: 0;
}

@media (max-width: 768px) {
  .skill-card {
    margin: 10px;
    height: 50vh;
  }
}

</style>
