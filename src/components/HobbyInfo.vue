<template>
    <li>
        <button @click="$emit('choose-hobby', id); toggleActive">{{ name }}</button>
    </li>
</template>

<script>

export default ({
    props: {
        'id': {
            type: String,
            required: true
        },
        'name': {
            type: String,
            required: true
        },
    },
    emit: ['choose-hobby'],
})
</script>

<style scoped>
/* button */

.hobby-button {
    margin: 5px;
}
button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 5px 3px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  width: 200px;
}
button:hover {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
