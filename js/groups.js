// Object group class - contains a group of other objects
function ObjectGroup(game) {
    // objs - the list of objects in the group
    var objs = [];
    
    // views - a phaser group of sprites/views for layering/z-indexing purposes
    var views = game.add.group();
    
    var controller = {};
    
    // Adds an object to the group
    // obj - the object to add
    controller.add = function(obj) {
        objs.push(obj);
        views.add(obj.v);
    };
    
    // Returns the object at a certain index in the group
    // index - the index of the item
    controller.get = function(index) {
        return objs[index];
    };
    
    // Iterates over every object in this object group and call its update
    // function
    controller.update = function() {
        for (var i = 0; i < objs.length; i++) {
            objs[i].c.update();
        }
    };
    
    // Returns the phaser sprite group in which all the objects' views are stored
    // Mainly for use with phaser functions
    controller.getViewGroup = function() {
        return views;
    };
    
    // Add in items to final object for debug purposes only
    // TODO: return only controller instead of _obj
    var _obj = controller;
    _obj.objs = objs;
    _obj.views = views;
    return _obj;
}

// Inventory group class - contains a group of items that the player owns
function InventoryGroup(game) {
    // Inherits from ObjectGroup
    var _superclass = ObjectGroup(game);
    
    // Globals
    // TODO: find better place to define
    var POS_X = game.width - 33 - 5; // the x location of the inventory
    var POS_Y = 33 + 5; // the y location of the inventory
    var SPACING_Y = 66 + 5; // the y-axis spacing between each item
    
    // Properties inherited from ObjectGroup
    var objs = _superclass.objs;
    var views = _superclass.views;
    
    var controller = _superclass;
    
    // Extend the add function so that it position the item in correct location
    // inside inventory
    controller.add = function(item) {
        // Extend from the ObjectGroup add function
        objs.push(item);
        views.add(item.v);
        
        // But determine the destination location of the item based upon what is
        // already in the inventory
        item.c.setDestination({
            "x": POS_X,
            "y": POS_Y + SPACING_Y * (objs.length - 1)
        });
    };
    
    // Add in items to final object for debug purposes only
    // TODO: return only controller instead of _obj
    var _obj = controller;
    _obj.objs = objs;
    _obj.views = views;
    return _obj;
}

// Tower group class - contains a group of towers
// Mostly like ObjectGroup exept has support for the multiple layers of sprites
// (i.e. base and turret) that towers contain
function TowerGroup(game) {
    // Inherits from ObjectGroup
    var _superclass = ObjectGroup(game);
    
    // Properties inherited from ObjectGroup
    var objs = _superclass.objs;
    var views = _superclass.views;
    var views_bases = game.add.group(); // A sprite group for the towers' bases
    
    var controller = _superclass;
    
    // Extend the add function so that it also adds the tower's base
    controller.add = function(item) {
        // Extend from the ObjectGroup add function
        objs.push(item);
        views.add(item.v);
        views_bases.add(item.v.base);
    };
    
    // Returns the phaser sprite group in which all the objects' base views are
    // stored - Mainly for use with phaser functions
    controller.getBaseViewGroup = function() {
        return views_bases;
    };
    
    // Add in items to final object for debug purposes only
    // TODO: return only controller instead of _obj
    var _obj = controller;
    _obj.objs = objs;
    _obj.views = views;
    _obj.views_bases = views_bases;
    return _obj;
}