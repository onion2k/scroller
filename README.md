# scroller
A bitmap text scroller - See it in action at

Use `npm run start` to run it locally. Or just use the codepen version at https://codepen.io/onion2k/full/zPQvrv/

# How it works

A bitmap is generated from a data uri and used to create a fixed width font. Each letter position is mapped to chars in a string and drawn on to a canvas. This is then 'wobbled' by redrawing vertical slices offset by a sinusoidal value.

The important part is actually in the CSS value from index.html -  the canvas is set to use `image-rendering: pixelated`, which disables resampling and gives a nice '8 bit' look.
