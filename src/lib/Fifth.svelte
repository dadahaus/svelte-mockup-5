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
  <div class="two column">
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

  <div class="three column">
    <a href="#"
      ><div class="image-wrapper" id="heroImage">
        <img class="image" src="../../assets/17.png" alt="some pic" />
      </div></a
    >
    <div class="specs-1 row">
      <p>project name</p>
      <p><b>2011</b> </p>
    </div>
  </div>
</section>

<style lang="scss">
  .section {
    &__5 {
      padding: 1rem;
      gap: 2rem;
      flex-flow: wrap;
      justify-content: center;
      .first{
        padding-bottom: 0.5rem;
      }
      .specs-1 {
          padding-top: 0.5rem;
          justify-content: space-between;
          align-items: flex-start;
          width: 100%;
          position: relative;
          // padding-bottom: 1rem;
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
      .one {
        flex-basis: 25%;
        border-color: red;
        border-width: 0.2rem;
        border-style: solid;
        padding: 1rem;
        border-radius: 1rem;
      }
      .two {
        flex-basis: 25%;
        padding: 1rem;

        
      }
      .three {
        flex-basis: 40%;
        .image-wrapper {
          // flex-basis: 1%;
          // position: relative;
          // overflow: hidden;


          display: flex;
          align-items: center;
          position: relative;

          .image {
            width: 100%;
            // border-radius: 2rem;
            height: 25rem;
            // position: absolute;

            object-fit: cover;
            z-index: -1;
          }
        }
      }
    }
  }
</style>
