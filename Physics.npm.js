const THREE = require('three');

var Physics = function(config)
{
     this.scene = cfg.scene;
     this.gravity = cfg.gravity || 9.82; //m/s strength.
     this.groundItem = cfg.ground || new THREE.PlaneGeometry(1 , 1 , 1);
     
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

     }
};

module.exports = Physics;
