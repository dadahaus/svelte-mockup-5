<script>
  import "./scss/style.css"
  import Nav from "./lib/Nav.svelte"
  import Hero from "./lib/Hero.svelte"
  import Second from "./lib/Second.svelte"
  import Third from "./lib/Third.svelte"

  import Fourth from "./lib/Fourth.svelte"
  import Fifth from "./lib/Fifth.svelte"
  import Divider from "./lib/Divider.svelte"

  import Footer from "./lib/Footer.svelte"
</script>

<Nav class="nav fixed" />
<Hero class="section section__1 row" />
<Second class="section section__2 column" />
<Third class="section section__3 column" />
<Fourth class="section section__4 column" />
<Fifth class="section section__5 row" />
<Divider class="section section__divider" />
<Footer class="section section__3" />

<style lang="scss">
</style>
