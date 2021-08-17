<template>
  <nav class="mt-3 md:mt-8 w-full px-4">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/" title="home" class="logo text-2xl"
        >Ayman Alhindi</router-link
      >
      <button class="navbar-toggler" @click="open = !open">
        <i class="lnr lnr-text-align-right text-3xl"></i>
      </button>
    </div>
    <div
      :class="`fixed top-0 left-0 w-full h-full offcanvas ${
        open ? 'open' : ''
      }`"
    >
      <button @click="open = false" class="absolute top-10 right-10">
        <i class="lnr lnr-cross text-3xl"></i>
      </button>

      <div class="flex flex-col gap-5 justify-center items-center h-full">
        <router-link
          to="/qathara"
          title="qathara"
          class="link text-2xl sm:text-3xl md:text-4xl"
          >Qathara App</router-link
        >
        <router-link
          to="/qythara-delivery"
          title="qythara-delivery"
          class="link text-2xl sm:text-3xl md:text-4xl"
          >Qythara Delivery App</router-link
        >
        <router-link
          to="/sudakart"
          title="sudakart"
          class="link text-2xl sm:text-3xl md:text-4xl"
          >SudaKart App</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      open: false,
    };
  },
  mounted() {
    let links = document.querySelectorAll(".link");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        this.open = false;
      });
    });
  },
};
</script>

<style scoped lang="scss">
.logo {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 90%;
    right: 25%;
    left: 25%;
    width: 50%;
    height: 3px;
    border-radius: 50rem 0 50rem 0;
    background: #fff;
  }
}
.navbar-toggler {
  span {
    width: 1rem;
    height: 4px;
    background: #fff;
    color: #fff;
  }
}
.logo {
  font-family: "Oleo Script Swash Caps", cursive;
}

.open {
  transform: translateY(0%) !important;
  transition: all 0.4s ease-out;
}

.offcanvas {
  font-family: sans-serif;
  transform: translateY(-100%);
  transition: all 0.4s ease-out;
  background: rgba(#000000, 0.9);
}

.link {
  color: #aaa;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #fff;
  }
}
</style>