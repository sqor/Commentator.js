
$(document).ready(function(){
    console.log(commentStats);


    var addStatsToDom = function(parent, stat, noExtra){
        console.log(stat);

        var bar = $("<div class='barGraph'>  </div>");
        var height = stat.commentDensity * 300 + 2;
        bar.css({
            height:  height + "px"
        });
        console.log(height);
        parent.append(bar);

        // This is for the scale
        if(noExtra) {
            bar.css({
                background: "black"
                , width: "2px"
                , "margin-left": "15px"
            });
            return;
        }
        if ( stat.commentDensity >= 0.50) {
            bar.css({
                background: "rgb(92, 255, 92)" // super green
            });
        }



        if ( stat.commentDensity < 0.30) {
            bar.css({
                background: " rgb(233, 216, 25)" // yellow
            });
        }

        if ( stat.commentDensity < 0.10) {
            bar.css({
                background: "red"
            });
        }

        var titleArea  = $("#currentInfoTitle");
        var rawStats = $("#rawStats");

        var prettyPrintJSONToDOM = function(json, domParent){
            _.each(json, function(value, key){
                var currDom = $("<div><b>" + key + ":</b> " +  value + "</div>"); domParent.append(currDom);
            });
        };

        var densityDom  = $("#bigDensity");
        bar.mouseover(function(){
            // First we add simple info like title name
            titleArea.html(stat.fileName);
            // rawStats.html(JSON.stringify(stat));
            rawStats.empty();
            prettyPrintJSONToDOM( stat, rawStats);

            var commentPercent = Math.floor(stat.commentDensity * 100);
            densityDom.html(commentPercent + "%");

        });


    };

    var parent = $("#commentPercent");
    addStatsToDom(parent, {
        commentDensity: 1.0
    }, true);
    _.each(commentStats, function(stat){
        addStatsToDom(parent, stat);
    });

});
