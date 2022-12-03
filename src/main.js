import locomotiveScroll from 'loco-scroll'
import App from './App.svelte'
const app = new App({
  target: document.getElementById('app')
})


gsap.registerPlugin(ScrollTrigger)

const locoScroll = new locomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true,
  lerp: 0.08
})

ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length
  }
})


export default app