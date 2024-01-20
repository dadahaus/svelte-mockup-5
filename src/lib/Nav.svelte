<div class={$$props.class}>
  <ul>
    <a href="#"><li><h5>home</h5></li></a>
    <a href="#"><li><h5>about</h5></li></a>
    <a href="#"><li><h5>work</h5></li></a>
  </ul>
</div>

<style lang="scss">
  .nav {
    z-index: 99;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: left;
    align-items: center;
    transform: translateY(2vh);

    ul {
      width: 100%;
      display: flex;
      justify-content: flex-start;

      gap: 2rem;
      a {
        position: relative;
        li {
          padding-left: 0.8rem;
          &:before {
            content: " ";
            display: block;
            height: 50%;
            width: 3px;
            transform: translateY(50%);
            position: absolute;
            bottom: 0px;
            top: 0px;
            left: 0;
            background-color: whitesmoke;
          }
        }
      }
    }
  }
</style>
