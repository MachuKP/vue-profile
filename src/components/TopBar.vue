<template>
    <nav class="topbar bg-primary">
      <div class="topbar-container">
        <div class="nav-left">
            <router-link to="/">
                <img class="logo" src="../assets/logo.svg.png" alt="">
            </router-link>
        </div>
        <div class="nav-right">
          <ul>
              <li>
                <a href="#">Self Info</a>
              </li>
              <li>
                <a href="#">Skills List</a>
              </li>
              <li>
                <a href="#">Hobbies List</a>
              </li>
              <li>
                <a href="#">Projects List</a>
              </li>
              <li>
                <router-link to="/gallery">Gallery</router-link>
              </li>
          </ul>
        </div>

        <button @click="toggleSidebar" :class="{open: isOpen}" class="hamburger">
          <span class="hamburger-top"></span>
          <span class="hamburger-middle"></span>
          <span class="hamburger-bottom"></span>
        </button>
      </div>
    </nav>
    <div :class="{hidden: isHidden}" class="sidebar-menu" id="menu">
      <ul>
        <li>
          <a href="#">Self Info</a>
        </li>
        <li>
          <a href="#">Skills List</a>
        </li>
        <li>
          <a href="#">Hobbies List</a>
        </li>
        <li>
          <a href="#">Projects List</a>
        </li>
        <li>
          <router-link to="/gallery">gallery</router-link>
        </li>
      </ul>
    </div>
</template>

<script>

export default({
  data() {
    return {
      isOpen: false,
      isHidden: true
    }
  },
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
      this.isHidden = !this.isHidden;
    }
  },
})
</script>

<style scoped>

.topbar {
  width: 100%;
  height: auto;
  padding: 3px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 0 2px 2px rgb(0 0 0 / 6%),
    0 0 2px rgb(0 0 0 / 7%);
}
.topbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
}
.logo {
  width: 90px;
  font-weight: bold;
  margin: 0 15px;
}
.topbar ul {
  display: flex;
  align-items: center;
}
.topbar li {
  margin: 0 15px;
  font-weight: bold;
}
.topbar a:hover {
  color: var(--light-color);
}

/* Hamburger Menu Icon */
.hamburger {
  cursor: pointer;
  width: 24px;
  height: 24px;
  position: relative;
  background: none;
  border: none;
  z-index: 10;
  transition: all 0.25s;
  display: none;
  margin: 15px;
}
.hamburger-top,
.hamburger-middle,
.hamburger-bottom {
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 2px;
  background: #000;
  transform: rotate(0);
  transition: all 0.5s;
}
.hamburger-middle {
  transform: translateY(7px);
}
.hamburger-bottom {
  transform: translateY(14px);
}
.open .hamburger-top {
  transform: rotate(45deg) translateY(6px) translateX(6px);
}
.open .hamburger-middle {
  display: none;
}
.open .hamburger-bottom {
  transform: rotate(-45deg) translateY(6px) translateX(-6px);
}

/* Mobile Menu */
.sidebar-menu {
  position: fixed;
  top: 60px;
  right: 0;
  background-color: var(--primary-color);
  color: var(--dark-color);
  width: 60%;
  height: 100%;
  padding: 30px;
  box-shadow: inset 0 4px 3px -3px rgb(0 0 0 / 10%),
    inset 0 4px 2px -2px rgb(0 0 0 / 7%);
  transition: all 0.3s;
}
.sidebar-menu li {
  line-height: 3;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
.sidebar-menu a {
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
}
.sidebar-menu a:hover {
  color: var(--light-color);
}
.hidden {
  transform: translateX(100%);
}

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }
  .nav-right {
    display: none;
  }
}
</style>
