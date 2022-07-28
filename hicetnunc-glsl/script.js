const canvas = document.getElementById("canvas")

function resize() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

window.addEventListener("resize", resize)
resize()

const creator = new URLSearchParams(window.location.search).get("creator")
const viewer = new URLSearchParams(window.location.search).get("viewer")
const objkt = new URLSearchParams(window.location.search).get("objkt")

console.log("NFT created by", creator)
console.log("NFT viewed by", viewer)
console.log("OBJKT ID", objkt)
