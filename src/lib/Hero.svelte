<div class="smooth-scroll">
  <div class="hero-scroller">
    <div class="section copy">
      <div class="section-wrapper">
        <div class="content">
          <h1 class="hero-header h-1">whatevs</h1>
          <h1 class="hero-header h-1">whatesvs</h1>
          <h1 class="hero-header h-1">whateasdvs</h1>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .smooth-scroll {
    overflow: hidden;

    .hero-scroller {
      height: 250vh;
      overflow: hidden;

      .section {
        position: relative;
        display: flex;
        min-height: 100vh;
        padding: 50px;
        justify-content: center;
      }

      .copy {
        background: hsl(0, 100%, 97%), 0%, 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .section-wrapper {
          max-width: 1400px;

          .content {
            width: 100%;
            max-width: 840px;
            margin-right: auto;
            margin-left: auto;
          }
        }
      }
    }
  }
</style>
