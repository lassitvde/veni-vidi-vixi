// must always set precision 
precision mediump float; 

uniform mat4 uModelViewMatrix; 
uniform mat4 uProjectionMatrix; 

// p5.js built-in attribute variables
attribute vec3 aPosition; 

// varying variables that are passed to rasterizer and fragment shader
varying vec3 vTexCoords; 

void main() { 
 vTexCoords = aPosition; 

 vec4 pos = uProjectionMatrix * mat4(mat3(uModelViewMatrix)) * vec4(aPosition, 1.0); 
 gl_Position = pos.xyww; 
} 