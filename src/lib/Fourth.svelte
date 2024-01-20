<section class={$$props.class}>
  <div class="one column">
    <div class="first">
      <p class="subheader">we provide</p>
      <h4>work</h4>
      <p>beause we make the difference</p>
    </div>
    <article class="column">
      <div class="specs-1 row">
        <p>branding • logo • design system</p>
        <p><b>2011</b></p>
      </div>
      <h5 class="specs-2">
        this was commenced during a period of tumoltuous flimflams
      </h5>
    </article>
  </div>

  <div class="two row">
    <article class="column">
      <div class="specs-1 row">
        <p>branding • logo • design system</p>
        <p><b>2011</b></p>
      </div>
      <h5 class="specs-2">
        this was commenced during a period of tumoltuous flimflams
      </h5>
    </article>
    <article class="column">
      <p class="specs-2 button-subheader"><b>hello there</b></p>
      <a href="http://">click me </a>
    </article>
    <article class="column">
      <div class="specs-1 row">
        <p>branding • logo • design system</p>
        <p><b>2011</b></p>
      </div>
      <h5 class="specs-2">
        this was commenced during a period of tumoltuous flimflams
      </h5>
    </article>
  </div>
</section>

<style lang="scss">
  .section {
    &__4 {
      height: 100vh;
      gap: 4rem;
      // justify-content: space-between;
      .first {
        padding-bottom: 0.5rem;
      }
      article {
        flex-basis: 25%;
        gap: 1rem;
        position: relative;
        .button-subheader {
          text-transform: uppercase;
          b {
            font-weight: 900;
          }
        }
        a {
          text-align: center;
          width: 100%;
          background-color: red;
          color: white;
          border-radius: none;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          border-radius: 0.4rem;
        }

        // overflow: hidden;
        .specs-1 {
          padding-top: 0.5rem;
          justify-content: space-between;
          align-items: flex-start;
          width: 100%;
          position: relative;
          &:before {
            content: " ";
            display: block;
            height: 2px;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-color: whitesmoke;
          }
        }
        .specs-2 {
          font-weight: 100;
        }
      }
      .one {
        flex-basis: 30%;
        // flex-flow: nowrap;
        h4 {
          text-transform: uppercase;
          letter-spacing: 0.5rem;
        }
        .subheader {
          text-transform: uppercase;
        }
      }
      .two {
        flex-basis: 30%;
        gap: 1rem;
        padding-right: 20%;
        justify-content: space-between;
        flex-flow: wrap;
      }
    }
  }
</style>
