<template>
  <section class="home px-3 sm:px-10">
    <div class="container mx-auto flex justify-between items-center gap-4">
      <div
        style="background: rgb(25, 25, 25)"
        class="
          text
          relative
          z-10
          text-center
          sm:text-left
          flex flex-col
          gap-2
          md:gap-4
          items-center
          sm:items-start
        "
      >
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold">
          Hi, I am Ayman.
        </h1>
        <p class="text-xl sm:text-2xl sm:max-w-2xl tracking-wider">
          I am a Front-end Flutter Mobile Developer, I build custom apps that
          help businesses grow.
        </p>
        <br />
        <button
          @click="contact = true"
          title="contact"
          class="
            border
            rounded
            py-1
            px-5
            sm:px-10
            hover:bg-black
            hover:border-black
            hover:shadow
          "
        >
          Contact
        </button>
      </div>
      <div class="img hidden md:flex md:flex justify-end">
        <img src="../assets/mobile-apps.svg" width="80%" alt="illustration" />
      </div>
      <!-- Contact Modal -->
      <div
        class="overlay fixed top-0 left-0 z-10 w-full h-screen"
        v-if="contact"
        @click="contact = false"
      ></div>
      <aside
        :class="`
          contact
          text-white
          text-center
          p-5
          sm:p-10
          flex flex-col
          justify-center
          items-center
          gap-4
          rounded-lg
          fixed
          z-20
          ${contact ? 'show' : ''}
          `"
      >
        <h3 class="logo text-2xl mb-4">Ayman Alhindi</h3>

        <p class="flex items-center gap-4">
          <span class="lnr lnr-phone-handset mb-1 text-white"></span>
          <a href="tel:0110150229" class="text-xl text-white hover:underline">
            0122436555</a
          >
        </p>
        <p class="flex items-center gap-4">
          <span class="lnr lnr-envelope mb-1 text-white"></span>
          <a
            href="mailto:aymanalhindi76@gmail.com"
            class="text-xl text-white hover:underline"
          >
            aymanalhindi76@gmail.com</a
          >
        </p>
        <div class="flex gap-5 mt-4">
          <a
            href="https://www.facebook.com/profile.php?id=100010328613774"
            target="_blank"
            title="facebook"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
              /></svg
          ></a>
          <a
            href="https://twitter.com/aymandi97?s=09"
            target="_blank"
            title="twitter"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
              /></svg
          ></a>
          <a
            href="https://linkedin.com/in/ayman-alhindi-14119521a"
            target="_blank"
            title="linkedin"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
              /></svg
          ></a>
          <a
            href="https://github.com/ayman-alhindi"
            target="_blank"
            title="github"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              /></svg
          ></a>
        </div>
      </aside>
      <!-- Social Links -->
      <div
        class="
          social-links
          flex
          z-0
          gap-5
          sm:gap-10
          absolute
          bottom-5
          md:bottom-10
          right-1/2
          transform
          translate-x-1/2
          sm:translate-x-0
          sm:left-10
        "
      >
        <a
          href="https://www.facebook.com/profile.php?id=100010328613774"
          target="_blank"
          title="facebook"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="#fff"
          >
            <path
              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
            /></svg
        ></a>
        <a
          href="https://twitter.com/aymandi97?s=09"
          target="_blank"
          title="twitter"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="#fff"
          >
            <path
              d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
            /></svg
        ></a>
        <a
          href="https://linkedin.com/in/ayman-alhindi-14119521a"
          target="_blank"
          title="linkedin"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="#fff"
          >
            <path
              d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
            /></svg
        ></a>
        <a
          href="https://github.com/ayman-alhindi"
          target="_blank"
          title="github"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="#fff"
          >
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            /></svg
        ></a>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "Home",
  data() {
    return {
      contact: false,
    };
  },
  components: {},
  mounted() {
    setTimeout(() => {
      gsap.from(".text > *", {
        delay: 1,
        y: 50,
        opacity: 0,
        stagger: {
          each: 0.1,
          grid: "auto",
          ease: "back",
        },
      });
      gsap.from(".social-links > *", {
        delay: 2,
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: {
          each: 0.2,
          from: "edges",
          ease: "elastic",
        },
      });
      gsap.from("nav .logo", {
        delay: 1,
        y: -30,
        opacity: 0,
        duration: 1,
        ease: "back",
      });
      gsap.from("nav button", {
        delay: 1.2,
        y: -30,
        opacity: 0,
        duration: 1,
        ease: "back",
      });
      gsap.from("img", {
        delay: 2,
        x: 30,
        opacity: 0,
        duration: 1,
        ease: "back",
      });
      // gsap.from(".text p", {
      //   delay: 1,
      //   y: 50,
      //   opacity: 0,
      //   duration: 1,
      // });
      // gsap.from(".text button", {
      //   delay: 2,
      //   x: -50,
      //   opacity: 0,
      //   duration: 1,
      // });
    }, 1000);
  },
};
</script>

<style scoped lang="scss">
.home .container {
  height: 80vh;
}
button {
  font-family: sans-serif;
}
.home p {
  color: #aaa;
}
h3.logo {
  font-family: "Oleo Script Swash Caps", cursive;
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
.overlay {
  background: rgba(#000000, 0.8);
}
.show {
  transform: translateX(-50%) scale(1) !important;
  opacity: 1 !important;
  transition: all 0.2s ease-in-out;
}
aside.contact {
  left: 50%;
  transform: translateX(-50%) scale(0);
  opacity: 0;
  transition: all 0.3s ease-in-out;
  background: #222;
}
</style>
