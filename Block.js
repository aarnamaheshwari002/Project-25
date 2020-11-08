class block{

    constructor(x, y, width, height){
    
        var options = {
    
            isStatic: true 
                
             }
            this.object = Bodies.rectangle(x, y, width, height,options);
           this.width = width;
           this.height = height;
           this.image = loadImage("dustbin.png");
             World.add(world, this.object); 
    
             
    
    }
    
    display(){
    
    var pos = this.object.position;
    
        imageMode(CENTER);
       image(this.image, pos.x, pos.y,this.width, this.height); 
    
    }
    
    }