const THREE = require('three');

var Physics = function(config)
{
     this.scene = cfg.scene;
     this.gravity = cfg.gravity || 9.82; //m/s strength.
     this.groundItem = cfg.ground || new THREE.PlaneGeometry(1 , 1 , 1);
     this.fps = cfg.fpsLimit || 60; //uses this to work out speeds.
     
     this.enabled = true;
     
     this.update = function()
     {
        if(this.enabled == false)
        {
            return;
        } 
        this.updateMatrix();
        
        
     }
     this.updateMatrix = function(){
          this.scene.children.forEach((child) => {
              
              if(!child.velocity)
              {
                   return;    
              }
              if(!child.physics)
              {
                   return;    
              }
               
              //velocity is m/s.
              var velocityY = (child.velocity.y / this.fps);
              child.translateY((velocityY - (this.gravity / this.fps)));
               
              var velocityX = (child.velocity.x / this.fps);
              child.translateX((velocityX / this.fps));
               
              var velocityZ = (child.velocity.z / this.fps);
              child.translateZ(velocityZ);
          });
     }
};

module.exports = Physics;
