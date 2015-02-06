// UI (the stats display for tower, monsters, and possibly heroes)
function UI(game) {
    // Globals
    var UI_VERTICAL_OFFSET = -28;
    
    // Font objects
    var titleFont = {
        "font": "40px Komika Title"
    };
    var textFont = {
        "font": "26px Komika Text"
    };
    var textFontSmall = {
        "font": "20px Komika Text"
    };
    var textFontReallySmall = {
        "font": "14px Komika Text",
        align: "center" 
    };
    
    // Object's name
    var name = game.add.text(game.width / 2, game.height / 2 + UI_VERTICAL_OFFSET, "Death Knight", titleFont);
    name.anchor.setTo(0.5, 0.5);
    
    // Object's flavor
    var flavor = game.add.text(game.width / 2, game.height / 2 + UI_VERTICAL_OFFSET, "\"Now you see it, now you - oh, wait - now you see it again.\"", textFont);
    flavor.anchor.setTo(0.5, 0.5);
    
    // Object's description
    var description = game.add.text(game.width / 2, game.height / 2 + UI_VERTICAL_OFFSET, "Teleports enemies backwards.", textFont);
    description.anchor.setTo(0.5, 0.5);
    
    // Vertically align text
    name.y = name.y - name.height - 4;
    description.y = description.y + description.height + 4;
    
    var clock = game.add.sprite(game.width / 2 - 45, description.y + 60, "clock");
    clock.anchor.setTo(0.5, 0.5);
    
    // Object's stats
    var timeStat = game.add.text(game.width / 2 - 45, clock.y + 42, "0:23", textFontSmall);
    timeStat.anchor.setTo(0.5, 0.5);
    
    var clock = game.add.sprite(game.width / 2 + 45, description.y + 60, "werewolf-icon");
    clock.anchor.setTo(0.5, 0.5);
    
    // Divider
    /*var div = game.add.graphics(0, 0);
    div.beginFill(0x000000, 1);
    div.drawRect(game.width / 2 - 1, ((clock.y + 46) + (description.y + 60)) / 2 - 40, 1, 80);*/
    
    // Object's stats
    var timeStat = game.add.text(game.width / 2 + 45, clock.y + 46, "upgrade to Werewolf", textFontReallySmall);
    timeStat.anchor.setTo(0.5);
    
    timeStat.wordWrap = true;
    timeStat.wordWrapWidth = 100;
}