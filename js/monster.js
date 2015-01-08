// Monster class
function Monster(game, type) {
    // Inherits from FightingObject
    var _superclass = FightingObject(game, type);
    
    /**
     * Monster data/model
     */
    var model = _superclass.m;
    
    
    /**
     * Monster sprite/view
     */
    var view = _superclass.v;
    
    // Spawn monster in bottom right corner of screen
    view.x = game.world.width + Math.abs(view.width) / 2;
    view.y = game.world.height - view.height / 2;
    
    view.body.velocity.x = -300;
    
    view.animations.add("move", null, 20, true);
    
    view.animations.play("move");
    
    
    /**
     * Monster actions/controller
     */
    var controller = _superclass.c;
    
    /**
     * Generate object that is an instance of this class
     */
    return {
        m: model,
        v: view,
        c: controller,
        type: "Monster"
    };
}