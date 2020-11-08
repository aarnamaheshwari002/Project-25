class BALL{

    constructor(x, y, radius){
    
        var options = {
    
            isStatic: false, 
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
                
             }

             this.radius = radius;
            this.object = Bodies.circle(x, y, radius, options);
          
        
            this.image = loadImage("paper.png");
         World.add(world, this.object); 
   
    }
    
    display(){
    
    var pos = this.image.position;
    push();





        imageMode(CENTER);
       image(this.image, 100, 625,this.radius); 
    pop();
    }
    }