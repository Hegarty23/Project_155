AFRAME.registerComponent("game-play", {
    schema: {
        elementid:{type:"string",default:"#ring1"}
    },
    update: function(){
        this.isCollided(this.data.elementid)
    },
    isCollided: function(elementid){
        const element=document.querySelector(elementid)
        element.addEventListener("collide", (e)=>{
            if(elementid.includes("#ring")){
                console.log(elementid+"collision")
            }
            else if(elementid.includes("#hurdle")){
                console.log("birdcollision")
            }
        })
    }
})