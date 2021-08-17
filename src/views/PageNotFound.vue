<template>
  <section class="h-screen">
    <div
      class="
        container
        mx-auto
        px-4
        flex flex-col
        justify-center
        items-center
        h-full
        gap-2
      "
    >
      <h1 class="text-6xl font-bold text-red-500">404 Error</h1>
      <p class="text-xl">The Page You Are Looking For Not Found</p>
      <router-link
        to="/"
        title="home"
        class="border border-white rounded py-1 px-10 flex gap-2"
        ><i class="lnr lnr-home"></i> Go Home
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style>
</style>