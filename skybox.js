function setupCubeMap() {
    gl = this._renderer.GL;
    tex = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_CUBE_MAP, tex);
    gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X, 0, gl.RGBA, gl.RGBA,
        gl.UNSIGNED_BYTE, skybox[1].canvas);
    gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_X, 0, gl.RGBA, gl.RGBA,
        gl.UNSIGNED_BYTE, skybox[0].canvas);
    gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_Y, 0, gl.RGBA, gl.RGBA,
        gl.UNSIGNED_BYTE, skybox[2].canvas);
    gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_Y, 0, gl.RGBA, gl.RGBA,
        gl.UNSIGNED_BYTE, skybox[3].canvas);
    gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_Z, 0, gl.RGBA, gl.RGBA,
        gl.UNSIGNED_BYTE, skybox[5].canvas);
    gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_Z, 0, gl.RGBA, gl.RGBA,
        gl.UNSIGNED_BYTE, skybox[4].canvas);

    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER,
        gl.LINEAR);
}

function renderSkyBox() { 
    shader(skyboxShader); 
    
    texLoc = gl.getUniformLocation(skyboxShader._glProgram, "cubeMap"); 
    gl.uniform1i(texLoc, 0); 
    
    gl.depthFunc(gl.LEQUAL); 
    
    push(); 
    // right 
    beginShape(); 
    vertex(1, -1, -1, 0, 0); 
    vertex(1, 1, -1, 0, 1); 
    vertex(1, 1, 1, 1, 1); 
    vertex(1, -1, 1, 1, 0); 
    endShape(); 
    //left
    beginShape(); 
    vertex(-1, -1, 1, 0, 0); 
    vertex(-1, 1, 1, 0, 1); 
    vertex(-1, 1, -1, 1, 1); 
    vertex(-1, -1, -1, 1, 0); 
    endShape(); 
    // top
    beginShape(); 
    vertex(-1, -1, 1, 0, 0); 
    vertex(-1, -1, -1, 0, 1); 
    vertex(1, -1, -1, 1, 1); 
    vertex(1, -1, 1, 1, 0); 
    endShape(); 
    //bottom
    beginShape(); 
    vertex(-1, 1, -1, 0, 0); 
    vertex(-1, 1, 1, 0, 1); 
    vertex(1, 1, 1, 1, 1); 
    vertex(1, 1, -1, 1, 0); 
    endShape(); 
    //front
    beginShape(); 
    vertex(-1, -1, -1, 0, 0); 
    vertex(-1, 1, -1, 0, 1); 
    vertex(1, 1, -1, 1, 1); 
    vertex(1, -1, -1, 1, 0); 
    endShape(); 
    // back
    beginShape(); 
    vertex(1, -1, 1, 0, 0); 
    vertex(1, 1, 1, 0, 1); 
    vertex(-1, 1, 1, 1, 1); 
    vertex(-1, -1, 1, 1, 0); 
    endShape(); 
    pop(); 
    
    // return z-depth test back to default mode 
    gl.depthFunc(gl.LESS); 
    resetShader(); 
   } 