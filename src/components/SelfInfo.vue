<template>
    <section class="self-info bg-light grid-col-2">
        <div class="image-container">
            <img class="self-image" src="../assets/person.png" alt="" />
        </div>
        <div class="box-text">
            <h2 class="text-xl">Hi! I'm <span class="highlight-name">Korn</span></h2>
            <p class="text-md-dark">Software Engineer</p>
      </div>
    </section>
</template>

<script>
export default({

})
</script>

<style scoped>
/* block A */

.image-container {
  height: 70vh;
  width: 70vh;
  background-color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  margin-top: auto;
  float: right;
}
.highlight-name {
  color: red;
}
@media (max-width: 768px) {
  .self-info {
    display: flex;
    flex-direction: column-reverse;
  }
  .grid-col-2 {
      grid-template-columns: 1fr;
  }
  .grid-reversed :first-child {
    order: 0;
  }
  .image-container {
    border-radius: 50% 50% 0 0;
    border-bottom: 0;
    height: 20rem;
    width: 100vw;
    float: right;
  }
  .self-image {
    display: none;
  }
}
</style>
