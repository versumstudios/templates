# **TITLE**

**DESCRIPTION**

# template

created by: @andrevenancio

# versum templates

Versum templates don't require files to be zipped. You can simply upload the folder.
They also do not require you to have a thumbnail.jpg on the HTML.

1. The HTML file can only be called index.html
2. At the moment calls to external sites are being blocked, even if they seem to work locally when you are testing. So any dependency needs to be included locally in the directory.

Regardless of what content you want to display (three.js, pixi.js, canvas, p5.js, shaders etc), it should always be full width and full height (window.innerWidth and window.innerHeight) so please dont forget to include your own resize function.

# Customisation

If you want to create ITEM's with different seeds, you can access the creator and viewer wallet ids. This values will only be injected once the piece has been minted
they will not work locally.
if the user is not sync, the viewer comes in as false

```javascript
const creator = new URLSearchParams(window.location.search).get("creator")
const viewer = new URLSearchParams(window.location.search).get("viewer")
const tokenId = new URLSearchParams(window.location.search).get("tokenId")
const hash = new URLSearchParams(window.location.search).get("hash")
```
