<section class={$$props.class}>
    <h3 class="one">this is where you find us</h3>
    <p><b> (in social)</b></p>
</section>

<style lang="scss">
  .section {
    &__divider {
      margin-top: 10rem;
      height: 20vh;
      display: grid;
      place-content: center;
      background: center/ cover no-repeat hsl(303, 54%, 41%);
      position: relative;
      h3{
        transform: translateX(-25%);
        max-width: 16ch;
      }
      p{
        position: absolute;
        bottom: 1rem;
        right: 1rem;
      }
    }
  }
</style>
