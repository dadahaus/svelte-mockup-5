<footer>
  

  <a class="two" href="http://"
    ><div>
      write us an email <b>here</b>
      <img class="mail" src="../../assets/mail-2.svg" alt="mail" />
    </div></a
  >

  <div class="one column">
    <a href="http://"><div /></a>
    <a href="http://"><div /></a>
    <a href="http://"><div /></a>
  </div>
</footer>

<style lang="scss">
  footer {
    position: relative;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    height: calc(100vh);
    width: 100vw;
    padding: 4rem;
    gap: 4rem;

    // overflow: hidden;

    .one {
      flex-basis: 100%;
      justify-content: space-evenly;
      gap: 1rem;
      flex-flow: wrap;
      position: relative;
      // &:before {
      //   content: " and beyond...";
      //   display: block;
      //   height: 0px;
      //   width: 20%;
      //   position: absolute;
      //   top: 0;
      //   left: 0;
      //   background-color: whitesmoke;
      //   transform: translateX(-10%);

      // }

      & > * {
        height: 3rem;
        width: 3rem;
        &:nth-child(1) {
          background: center/ cover no-repeat url("../../assets/behance-2.svg");
        }
        &:nth-child(2) {
          background: center/ cover no-repeat url("../../assets/dribbble.svg");
        }
        &:nth-child(3) {
          background: center/ cover no-repeat url("../../assets/instagram.svg");
        }
      }
    }
    .two {
      position: absolute;
      bottom: 10%;
      left: 10%;
      &:before {
        content: " ";
        display: block;
        height: 1px;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: whitesmoke;
        transform: translateY(-1rem);
      }
      .mail {
        width: 2rem;
        height: 2rem;
        transform: translateY(30%);
      }
    }
  }
</style>
