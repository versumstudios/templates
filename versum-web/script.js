const creator = new URLSearchParams(window.location.search).get("creator")
const viewer = new URLSearchParams(window.location.search).get("viewer")
const tokenId = new URLSearchParams(window.location.search).get("tokenId")
const hash = new URLSearchParams(window.location.search).get("hash")

console.log("NFT created by", creator)
console.log("NFT viewed by", viewer)
console.log("Token ID", tokenId)
console.log("hash", hash)
