import React from 'react'
import Sketch from 'react-p5'

function P5Sketch() {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(400, 400).parent(canvasParentRef);
    p5.background(220)
  }
  
  const draw = p5 => {
    p5.fill(p5.random(0,255),p5.random(0,255),p5.random(0,255))
    p5.noStroke();  
    p5.ellipse(p5.mouseX,p5.mouseY,25,25)
  }
  
  return <Sketch setup={setup} draw={draw} />
}

export default P5Sketch