// BASIC TEMPLATE

// p5.js template for minting on Hic et Nunc
// Made for Processing's 20th anniversary Fundraiser
// By Raphaël de Courville (@sableraph)
// Find the latest version at https://github.com/SableRaf/HicEtNunc-p5js-templates

// hicetnunc code is adapted from https://github.com/hicetnunc2000/hicetnunc/tree/main/templates/html-p5js-template
// More hicetnunc html templates (three.js, glsl, etc) can be found at
// https://github.com/hicetnunc2000/hicetnunc/tree/main/templates

// 🤓 Note: replace thumbnail.png with your own thumbnail (512×512 pixels is best)

// **************************
// *       PARAMETERS       *
// **************************

// Set this to true when minting
p5.disableFriendlyErrors = false

// The title of your piece goes here (not visible on hicetnunc)
document.title = "My beautiful p5.js sketch"

// Describe what your piece looks like to screen reader users
let description =
  "A white disc in the center of a black canvas is growing and shrinking slowly."

// **************************
// *    GLOBAL VARIABLES    *
// **************************

// **************************
// *        PRELOAD         *
// **************************

function preload() {}

// **************************
// *          SETUP         *
// **************************

function setup() {
  createCanvas(windowWidth, windowHeight)
  describe(description) // Create a screen reader accessible description for the canvas
}

// **************************
// *          DRAW          *
// **************************

function draw() {
  background(0)
  translate(width / 2, height / 2)
  circle(0, 0, sin(frameCount * 0.01) * min(width, height))
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

// **************************
// *         INPUT          *
// **************************

// Find key codes at http://keycode.info/
function keyPressed() {
  if (keyCode === 82) {
    console.log("R was pressed")
  } else if (keyCode === 67) {
    console.log("C was pressed")
  }
}

// **************************
// * HIC ET NUNC VARIABLES  *
// **************************
const creator = new URLSearchParams(window.location.search).get("creator")
const viewer = new URLSearchParams(window.location.search).get("viewer")
const objkt = new URLSearchParams(window.location.search).get("objkt")

console.log("NFT created by", creator)
console.log("NFT viewed by", viewer)
console.log("OBJKT ID", objkt)
