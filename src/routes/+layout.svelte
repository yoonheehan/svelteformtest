<script>
  import "../../static/style.css"
  import Footer from "$lib/Footer.svelte";
  import Navbar from "$lib/Navbar.svelte";
  import Hero from "$lib/Hero.svelte"
</script>

<div class="app">
  <Navbar />
  <slot></slot>
  <Footer />
</div>

<style>
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>