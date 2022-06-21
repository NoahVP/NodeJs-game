class Character{
    constructor()
    {
        this.width = 50
        this.height = 70
        this.x = 100
        this.y = 100
        this.yvel = 0;
        this.xvel = 0;
        this.speed = 3;
        this.grounded = false
        this.m = 0.4;
        this.jumpheight = 10;
        this.faceing = 'right'
        this.state = 'idle'
    }
    //show and animate the player
    show(){
        //chose faceing
    {
        if(mouseX > width/2){
            this.faceing = 'right'
        }
        else if(mouseX < width/2){
            this.faceing = 'left'
        }
    }
        switch(this.state){
            case 'idle':
                if(this.faceing == 'right'){
                    switch(playerId){
                        case 1:
                            image(playerOneIdle,this.x, this.y, this.width, this.height)
                            break;
                        case 2:
                            image(playerTwoIdle,this.x, this.y, this.width, this.height)
                            break;
                        case 3:
                            image(playerThreeIdle,this.x, this.y, this.width, this.height)
                            break;
                        case 4:
                            image(playerFourIdle,this.x, this.y, this.width, this.height)
                            break;
                        default:
                            ""
                    }  
                }
                else if(this.faceing == 'left'){
                    switch(playerId){
                        case 1:
                            scale(-1, 1);image(playerOneIdle,-this.x - this.width, this.y, this.width, this.height)
                            break;
                        case 2:
                            scale(-1, 1);image(playerTwoIdle,-this.x - this.width, this.y, this.width, this.height)
                            break;
                        case 3:
                            scale(-1, 1);image(playerThreeIdle,-this.x - this.width, this.y, this.width, this.height)
                            break;
                        case 4:
                            scale(-1, 1);image(playerFourIdle,-this.x - this.width, this.y, this.width, this.height)
                            break;
                        default:
                            ""
                    }   
                }
                break;
            case 'runningLeft':
                switch(playerId){
                    case 1:
                        image(playerOneRun,this.x, this.y, this.width, this.height)
                        break;
                    case 2:
                        image(playerTwoRun,this.x, this.y, this.width, this.height)
                        break;
                    case 3:
                        image(playerThreeRun,this.x, this.y, this.width, this.height)
                        break;
                    case 4:
                        image(playerFourRun,this.x, this.y, this.width, this.height)
                        break;
                    default:
                        ""
                }  
                break;
            case 'runningRight':
                switch(playerId){
                    case 1:
                        scale(-1, 1);image(playerOneRun,-this.x - this.width, this.y, this.width, this.height)
                        break;
                    case 2:
                        scale(-1, 1);image(playerTwoRun,-this.x - this.width, this.y, this.width, this.height)
                        break;
                    case 3:
                        scale(-1, 1);image(playerThreeRun,-this.x - this.width, this.y, this.width, this.height)
                        break;
                    case 4:
                        scale(-1, 1);image(playerFourRun,-this.x - this.width, this.y, this.width, this.height)
                        break;
                    default:
                        ""
                    }
                break;
        } 
    }
    //move the player
    move(){
        if (this.xvel == 0.1 || this.xvel == -0.1){
            this.xvel = 0; this.yvel = 0;
        }
        if (keyIsDown(65)){
            this.xvel = this.speed
        }
        else if(keyIsDown(68)){
            this.xvel = -this.speed
        }
        else{
            if (this.xvel != 0){
                if(this.xvel < 0){
                    this.xvel += 1;
                }
                else if(this.xvel > 0){
                    this.xvel -= 1;
                }
            }
        }
        this.x -= this.xvel;
        this.y += this.yvel
        if (this.grounded){
            this.yvel = 0;
        }
        if (keyIsDown(87)){
            if(this.grounded){
                this.yvel = -this.jumpheight;
            }
        }
        if(this.grounded == false){
            this.yvel += this.m 
        }    
    if(this.xvel > 1){
        this.state = 'runningRight'
    }
    else if(this.xvel < -1){
        this.state = 'runningLeft'
    }
    else{
        this.state = 'idle'
    }
    }
}