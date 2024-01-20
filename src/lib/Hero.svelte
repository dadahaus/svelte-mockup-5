<section class={$$props.class}>
  <div class="three" />

  <div class="one column">
    <div class="one__temp">
      <p>we provide</p>
      <h4>WORK</h4>
      <p>quality content for the masses</p>
    </div>
    <div class="one__temp">
      <p>we provide</p>
      <h4>PERSONAL PROJECTS</h4>
      <p>quality content for the masses</p>
    </div>
  </div>

  <div class="two column">
    <p>Method wherein that which is unintended becomes <b>intentional</b></p>
    <h3>dada</h3>
  </div>
</section>

<style lang="scss">
  .section {
    &__1 {
      height: 100vh;
      // transform: translateY(2.5rem);
      align-items: center;
      justify-content: center;
      padding: 0;
      // padding-left: 4rem;
      .one {
        flex-basis: 60%;
        height: 100%;
        background: center/ cover no-repeat hsl(0, 87%, 63%);
        justify-content: space-evenly;
        // align-items: center;
        padding: 1rem;
        &__column{
        }
      }
      .two {
        flex-basis: 30%;

        padding: 2rem 0 2rem 2rem;
        height: 100%;
        justify-content: flex-start;
        padding-right: 2rem;
        // align-items: flex-start;

        h4 {
          font-weight: 100;
          b {
            font-weight: 800;
          }
        }
        p {
          b {
            font-weight: 900;
          }
          text-transform: uppercase;
        }
      }
      .three {
        height: 100%;
        flex-basis: 10%;
      }
    }
  }
</style>
