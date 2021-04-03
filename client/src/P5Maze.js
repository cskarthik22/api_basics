import React from 'react'
import Sketch from 'react-p5'

function P5Maze() {
let grid = []
let cols, rows
let w = 20
let current;
let stack = []

  const setup = (p5, canvasParentRef) => {
   
    p5.createCanvas(400, 400).parent(canvasParentRef)
    cols = p5.floor(p5.width/w);
    rows = p5.floor(p5.height/w);
  
  for(var i=0; i<rows; i++) {
    for(var j=0; j<cols; j++) {
      var cell = new Cell(p5,i,j);
      grid.push(cell);
    }
  }
  p5.frameRate(100)
  current = grid[0]
  }
  
  const draw = p5 => {
    p5.background(100);
    for(var i=0; i<grid.length; i++) {
      grid[i].show();
    }
    
    current.visited = true;
    current.highlight();
    let next = current.checkneighbors();
    if(next) {
      next.visted = true;
      stack.push(current)
      removeWalls(current, next)
      current = next;
    } else {
      if(stack.length > 0) {
        current = stack.pop()
      }
    }
  }

  function index(i, j) {
  
    if(i < 0 || j < 0 || i > rows-1 || j > cols-1 )
      return -1;
    
    return j + i*cols;
  }

  function removeWalls(a, b) {
    var x = a.i - b.i;
    var y = a.j - b.j;
    
    if(x === 1) {
      a.walls[3]= false
      b.walls[1] = false
    } else if(x === -1) {
      a.walls[1] = false;
      b.walls[3] = false;
    }
    
   if(y === 1) {
      a.walls[0]= false
      b.walls[2] = false
    } else if(y === -1) {
      a.walls[2] = false;
      b.walls[0] = false;
    }
    
  }

   function Cell(p5,i,j){
    this.i = i
    this.j = j
    this.p5 = p5;
    this.walls = [true, true, true, true]
    this.visited = false;
    this.checkneighbors = function() {
      var neighbors = []
      
      var top = grid[index(i,j-1)]
      var right = grid[index(i+1,j)]
      var bottom = grid[index(i,j+1)]
      var left= grid[index(i-1,j)]
      
      if(top && !top.visited) 
        neighbors.push(top)
      if(right && !right.visited)
        neighbors.push(right)
      if(bottom && !bottom.visited)
        neighbors.push(bottom)
      if(left && !left.visited)
        neighbors.push(left)
      
      if(neighbors.length > 0) {
        var r = p5.floor(p5.random(0,neighbors.length))
        return neighbors[r]
      } else {
        return undefined;
      }
      
  
    }
    
    this.highlight = function() {
      var x = this.i*w;
      var y = this.j*w;
      p5.noStroke();
      p5.fill(0,0,255,100)
      p5.rect(x,y,w,w)
    }
    
    this.show = function() {
      var x = this.i*w;
      var y = this.j*w;
     
      
      p5.stroke(255)
     // noFill()
     // rect(x,y,w,w);
      
      if(this.walls[0]) 
        p5.line(x,y,x+w,y)
      if(this.walls[1]) 
        p5.line(x+w,y,x+w,y+w)
      if(this.walls[2]) 
        p5.line(x+w,y+w,x,y+w)
      if(this.walls[3]) 
        p5.line(x,y+w,x,y)
      
       if(this.visited) {
         p5.noStroke()
         p5.fill(255,0,255,10)
         p5.rect(x,y,w,w)
       }
      
    }
    
  }
  
  return <Sketch setup={setup} draw={draw} />
}

export default P5Maze