import React from 'react'
import Sketch from 'react-p5'

function P5Bubblesort() {
  let values = [];
  let i=0,j=0;
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(800, 500).parent(canvasParentRef)
    for(let i=0; i<p5.width; i++) {
      values[i] = p5.random(p5.height);
    }
  }
  
  const draw = p5 => {
    p5.background(0);
  
    if( i < values.length) {
      for(j=0; j<values.length-1-i; j++) {
         if(values[j-1] > values[j]) {
          let temp= values[j-1];
          values[j-1]=values[j];
          values[j] = temp;
        }
      }
      i++
    } else {
      console.log("i = " + i)
      p5.noLoop();
      i=0;
      
    }
    for(let i=0; i<values.length; i++){
      p5.stroke(255)
      p5.line(i,p5.height,i, p5.height-values[i]);
    }
  }
  
  return <Sketch setup={setup} draw={draw} />
}

export default P5Bubblesort