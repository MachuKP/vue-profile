<template>
  <header>
    <top-bar></top-bar>
  </header>
  <body>
    <router-view></router-view>
  </body>
  <footer>
    <footer-content></footer-content>
  </footer>
</template>

<script>
import TopBar from "./components/TopBar.vue";
import FooterContent from "./components/FooterContent.vue";

export default {
  components: {
    TopBar,
    FooterContent
  }

}
</script>

<style>
:root {
  --primary-color: #cf6711;
  --secondary-color: #dfee0ff8;
  --dark-green: #a0ee0ff8;
  --dark-color: #331803;
  --light-color: #f0e5dc;
}
* {
  box-sizing: border-box;
}

/* element */

html, body {
  font-family: sans-serif;
  line-height: 1.4;
  color: #000;
}
a {
  color: var(--dark-color);
  text-decoration: none;
}
p {
  margin: 0;
  line-height: 1.7;
}
li {
    list-style: none;
}
header {
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  z-index: 9;
}
body {
  margin: 0;
  height: calc(100vh - 95px);
  scroll-snap-type: y mandatory;
  overflow:scroll;
  position: relative;
  top: 30px;
}
section {
  height: inherit;
  width: 100%;
  scroll-snap-align: start;
}
footer {
  width: 100%;
  height: 35px;
  position: fixed;
  bottom: 0;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* box */

.box-text {
  max-width: 500px;
  text-align: center;
  justify-self: center;
  padding: 20px 0;
  margin: 0 auto;
}
.header-outside {
  width: calc(100vw - 20px);
  height: 90px;
  background-color: #31475e;
  position:relative;
  top: 20px;
  left: 20px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 0 2px 2px rgb(0 0 0 / 6%),
  0 0 2px rgb(0 0 0 / 7%);
}
.header-inside {
  width: calc(100vw - 40px);
  height: 80px;
  display: flex;
  align-items: center;
  background-color: #3fba84;
  position:absolute;
  bottom:0;
  right:0;
}

/* Grid Styles */

.grid-col-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
}
.grid-reversed :first-child {
  order: 2;
}

/* Backgrounds */

.bg-primary {
  background-color: var(--primary-color);
  color: var(--dark-color);
}
.bg-secondary {
  background-color: yellow;
  color: #000;
}
.bg-light {
  background-color: var(--light-color);
  color: #000;
}
.bg-dark {
  background-color: var(--dark-color);
  color: #fff;
}

/* Text Styling */

.text-center {
  text-align: center;
}
.text-xl {
  font-size: 50px;
  text-transform: uppercase;
  letter-spacing: 6px;
  font-weight: 600;
  margin-bottom: 20px;
}
.text-lg {
  font-size: 35px;
  font-weight: bold;
  margin-left: 20px;
  text-transform: uppercase;
}
.text-md-dark {
  font-size: 28px;
  margin-bottom: 20px;
  color: var(--dark-color);
}
.text-md-light {
  font-size: 28px;
  margin-bottom: 20px;
  color: var(--light-color)
}
.text-sm {
  font-size: 19px;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .text-xl {
    font-size: 35px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  .text-md-dark {
    font-size: 24px;
    margin-bottom: 8px;
    color: var(--dark-color);
  }
  .text-md-light {
    font-size: 24px;
    margin-bottom: 8px;
    color: var(--light-color)
  }
  .text-sm {
    font-size: 14px;
  }
}

/* icons */

.arrow {
  height: 50px;
  position: absolute;
  cursor: pointer;
}
.left {
  left: 5vw;
  transform: rotateY(180deg);
}
.right {
  right: 5vw;
}
.cross {
  width: 25px;
  height: 25px;
  position: absolute;
  cursor: pointer;
  top: 20px;
  left: 20px;
}

</style>
