function Pokemon(node){

    this.node = node;
    //this.animations = animations;

    this.grace = false;
    this.replay = 3; 
    this.shield = 3; 
    this.respawnTime = -1;
    this.velocity = 10;

    this.x = 130;
    this.y = 180;
    
    // This function damage the ship and return true if this cause the ship to die 
    this.damage = function(){
        if(!this.grace){
            this.shield--;
            if (this.shield == 0){
                return true;
            }
            return false;
        }
        return false;
    };
    
    // this try to respawn the ship after a death and return true if the game is over
    this.respawn = function(){
        this.replay--;
        if(this.replay==0){
            return true;
        }
        
        this.grace  = true;
        this.shield = 3;
        
        this.respawnTime = (new Date()).getTime();
        $(this.node).fadeTo(0, 0.5); 
        return false;
    };
    
    this.update = function(){
        if((this.respawnTime > 0) && (((new Date()).getTime()-this.respawnTime) > 3000)){
            this.grace = false;
            $(this.node).fadeTo(500, 1); 
            this.respawnTime = -1;
        }
    }
    
    return true;
}