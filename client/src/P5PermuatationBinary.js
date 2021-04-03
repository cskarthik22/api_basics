import React from 'react'
import Sketch from 'react-p5'

function P5PermutationBinary() {
  let w =20;
  let grid = [];
  let i,j=0;
  function showbinarypermute(n, output) {
    if(n==output.length) {
        grid.push(output);
        return;
    }
        
    showbinarypermute(n, output + "0");
    showbinarypermute(n, output + "1");
  }
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(400, 400).parent(canvasParentRef)
    p5.textSize(10);
    p5.textAlign(p5.CENTER, p5.CENTER);
    showbinarypermute(4, "");
  }
  
  const draw = p5 => {
    p5.background(220);
    p5.stroke(200)
    p5.translate(10,10)
    p5.rectMode(p5.CENTER);
    for(i=0; i<grid.length; i++) {
      for(j=0; j<grid[i].length; j++) {
        if(grid[i][j]==0) {
          p5.fill(255,0,0,150)
          p5.rect(j*w, i*w,w,w);
    
          p5.fill(255, 255, 255);
          p5.text("F", j*w, i*w);
        } else {
          p5.fill(0,255,0,150)
          p5.rect(j*w, i*w,w,w);
          
          p5.fill(0, 0, 0);
          p5.text("T", j*w, i*w);
        }  
        
      }
    
    }
    if( i>=grid.length) {
      console.log("DONE...")
      p5.noLoop()
    }
  }
  
  return <Sketch setup={setup} draw={draw} />
}

export default P5PermutationBinary