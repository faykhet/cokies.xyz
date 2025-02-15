gdjs.StartCode = {};
gdjs.StartCode.localVariables = [];
gdjs.StartCode.forEachIndex2 = 0;

gdjs.StartCode.forEachObjects2 = [];

gdjs.StartCode.forEachTemporary2 = null;

gdjs.StartCode.forEachTotalCount2 = 0;

gdjs.StartCode.GDNewSpriteObjects1= [];
gdjs.StartCode.GDNewSpriteObjects2= [];
gdjs.StartCode.GDNewSpriteObjects3= [];
gdjs.StartCode.GDNewSprite2Objects1= [];
gdjs.StartCode.GDNewSprite2Objects2= [];
gdjs.StartCode.GDNewSprite2Objects3= [];
gdjs.StartCode.GDNewSprite3Objects1= [];
gdjs.StartCode.GDNewSprite3Objects2= [];
gdjs.StartCode.GDNewSprite3Objects3= [];
gdjs.StartCode.GDCursorObjects1= [];
gdjs.StartCode.GDCursorObjects2= [];
gdjs.StartCode.GDCursorObjects3= [];
gdjs.StartCode.GDNewTiledSpriteObjects1= [];
gdjs.StartCode.GDNewTiledSpriteObjects2= [];
gdjs.StartCode.GDNewTiledSpriteObjects3= [];
gdjs.StartCode.GDUIObjects1= [];
gdjs.StartCode.GDUIObjects2= [];
gdjs.StartCode.GDUIObjects3= [];
gdjs.StartCode.GDTransitionObjects1= [];
gdjs.StartCode.GDTransitionObjects2= [];
gdjs.StartCode.GDTransitionObjects3= [];
gdjs.StartCode.GDButtonObjects1= [];
gdjs.StartCode.GDButtonObjects2= [];
gdjs.StartCode.GDButtonObjects3= [];
gdjs.StartCode.GDEnemiesObjects1= [];
gdjs.StartCode.GDEnemiesObjects2= [];
gdjs.StartCode.GDEnemiesObjects3= [];
gdjs.StartCode.GDIconObjects1= [];
gdjs.StartCode.GDIconObjects2= [];
gdjs.StartCode.GDIconObjects3= [];
gdjs.StartCode.GDNewTiledSprite2Objects1= [];
gdjs.StartCode.GDNewTiledSprite2Objects2= [];
gdjs.StartCode.GDNewTiledSprite2Objects3= [];
gdjs.StartCode.GDGridObjects1= [];
gdjs.StartCode.GDGridObjects2= [];
gdjs.StartCode.GDGridObjects3= [];
gdjs.StartCode.GDButtonCreatorObjects1= [];
gdjs.StartCode.GDButtonCreatorObjects2= [];
gdjs.StartCode.GDButtonCreatorObjects3= [];
gdjs.StartCode.GDCamera_9595PositionsObjects1= [];
gdjs.StartCode.GDCamera_9595PositionsObjects2= [];
gdjs.StartCode.GDCamera_9595PositionsObjects3= [];
gdjs.StartCode.GDLabelsObjects1= [];
gdjs.StartCode.GDLabelsObjects2= [];
gdjs.StartCode.GDLabelsObjects3= [];
gdjs.StartCode.GDNewShapePainterObjects1= [];
gdjs.StartCode.GDNewShapePainterObjects2= [];
gdjs.StartCode.GDNewShapePainterObjects3= [];


gdjs.StartCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewShapePainter"), gdjs.StartCode.GDNewShapePainterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDNewShapePainterObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDNewShapePainterObjects2[i].getVariableNumber(gdjs.StartCode.GDNewShapePainterObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDNewShapePainterObjects2[k] = gdjs.StartCode.GDNewShapePainterObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDNewShapePainterObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDNewShapePainterObjects2 */
{for(var i = 0, len = gdjs.StartCode.GDNewShapePainterObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDNewShapePainterObjects2[i].getBehavior("DraggableSliderControl").SetValue(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("vol").getChild("music").getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewShapePainter"), gdjs.StartCode.GDNewShapePainterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDNewShapePainterObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDNewShapePainterObjects2[i].getVariableNumber(gdjs.StartCode.GDNewShapePainterObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDNewShapePainterObjects2[k] = gdjs.StartCode.GDNewShapePainterObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDNewShapePainterObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDNewShapePainterObjects2 */
{for(var i = 0, len = gdjs.StartCode.GDNewShapePainterObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDNewShapePainterObjects2[i].getBehavior("DraggableSliderControl").SetValue(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("vol").getChild("enemy").getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewShapePainter"), gdjs.StartCode.GDNewShapePainterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDNewShapePainterObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDNewShapePainterObjects2[i].getVariableNumber(gdjs.StartCode.GDNewShapePainterObjects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDNewShapePainterObjects2[k] = gdjs.StartCode.GDNewShapePainterObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDNewShapePainterObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDNewShapePainterObjects2 */
{for(var i = 0, len = gdjs.StartCode.GDNewShapePainterObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDNewShapePainterObjects2[i].getBehavior("DraggableSliderControl").SetValue(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("vol").getChild("gun").getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewShapePainter"), gdjs.StartCode.GDNewShapePainterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDNewShapePainterObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDNewShapePainterObjects1[i].getVariableNumber(gdjs.StartCode.GDNewShapePainterObjects1[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDNewShapePainterObjects1[k] = gdjs.StartCode.GDNewShapePainterObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDNewShapePainterObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDNewShapePainterObjects1 */
{for(var i = 0, len = gdjs.StartCode.GDNewShapePainterObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDNewShapePainterObjects1[i].getBehavior("DraggableSliderControl").SetValue(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("vfx").getChild("shake").getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.StartCode.eventsList1 = function(runtimeScene) {

};gdjs.StartCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.StartCode.GDCursorObjects1);
{for(var i = 0, len = gdjs.StartCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDCursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "UI", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "UI", 0));
}
}{for(var i = 0, len = gdjs.StartCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDCursorObjects1[i].rotate(270, runtimeScene);
}
}}

}


};gdjs.StartCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.StartCode.GDButtonCreatorObjects1, gdjs.StartCode.GDButtonCreatorObjects2);

{for(var i = 0, len = gdjs.StartCode.GDButtonCreatorObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDButtonCreatorObjects2[i].setTint("107;116;178");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDButtonCreatorObjects1 */
{gdjs.evtTools.window.openURL(((gdjs.StartCode.GDButtonCreatorObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.StartCode.GDButtonCreatorObjects1[0].getVariables()).getFromIndex(1).getAsString(), runtimeScene);
}}

}


};gdjs.StartCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.StartCode.GDButtonObjects1, gdjs.StartCode.GDButtonObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDButtonObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDButtonObjects2[i].getVariableString(gdjs.StartCode.GDButtonObjects2[i].getVariables().getFromIndex(1)) == "Play" ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDButtonObjects2[k] = gdjs.StartCode.GDButtonObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDButtonObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__LoadScene__LoadScene.func(runtimeScene, "Game", "Loader", runtimeScene.getGame().getVariables().getFromIndex(2), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(gdjs.StartCode.GDButtonObjects1, gdjs.StartCode.GDButtonObjects2);

gdjs.copyArray(runtimeScene.getObjects("Camera_Positions"), gdjs.StartCode.GDCamera_9595PositionsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDButtonObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDButtonObjects2[i].getVariableString(gdjs.StartCode.GDButtonObjects2[i].getVariables().getFromIndex(1)) == "Settings" ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDButtonObjects2[k] = gdjs.StartCode.GDButtonObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDCamera_9595PositionsObjects2.length;i<l;++i) {
    if ( gdjs.StartCode.GDCamera_9595PositionsObjects2[i].getVariableString(gdjs.StartCode.GDCamera_9595PositionsObjects2[i].getVariables().getFromIndex(0)) == "Settings" ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDCamera_9595PositionsObjects2[k] = gdjs.StartCode.GDCamera_9595PositionsObjects2[i];
        ++k;
    }
}
gdjs.StartCode.GDCamera_9595PositionsObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDCamera_9595PositionsObjects2 */
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "Camera position", (( gdjs.StartCode.GDCamera_9595PositionsObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDCamera_9595PositionsObjects2[0].getCenterXInScene()), (( gdjs.StartCode.GDCamera_9595PositionsObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDCamera_9595PositionsObjects2[0].getCenterYInScene()), "", "easeOutExpo", 1);
}}

}


{

/* Reuse gdjs.StartCode.GDButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Camera_Positions"), gdjs.StartCode.GDCamera_9595PositionsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDButtonObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDButtonObjects1[i].getVariableString(gdjs.StartCode.GDButtonObjects1[i].getVariables().getFromIndex(1)) == "Go back" ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDButtonObjects1[k] = gdjs.StartCode.GDButtonObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDCamera_9595PositionsObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDCamera_9595PositionsObjects1[i].getVariableString(gdjs.StartCode.GDCamera_9595PositionsObjects1[i].getVariables().getFromIndex(0)) == "Main" ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDCamera_9595PositionsObjects1[k] = gdjs.StartCode.GDCamera_9595PositionsObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDCamera_9595PositionsObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDCamera_9595PositionsObjects1 */
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "Camera position", (( gdjs.StartCode.GDCamera_9595PositionsObjects1.length === 0 ) ? 0 :gdjs.StartCode.GDCamera_9595PositionsObjects1[0].getCenterXInScene()), (( gdjs.StartCode.GDCamera_9595PositionsObjects1.length === 0 ) ? 0 :gdjs.StartCode.GDCamera_9595PositionsObjects1[0].getCenterYInScene()), "", "easeOutExpo", 1);
}}

}


};gdjs.StartCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.StartCode.GDButtonObjects1, gdjs.StartCode.GDButtonObjects2);

{for(var i = 0, len = gdjs.StartCode.GDButtonObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDButtonObjects2[i].setTint("107;116;178");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.StartCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.StartCode.eventsList6 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ButtonCreator"), gdjs.StartCode.GDButtonCreatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemies"), gdjs.StartCode.GDEnemiesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Grid"), gdjs.StartCode.GDGridObjects1);
gdjs.copyArray(runtimeScene.getObjects("Labels"), gdjs.StartCode.GDLabelsObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.StartCode.GDNewTiledSpriteObjects1);
{for(var i = 0, len = gdjs.StartCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDNewTiledSpriteObjects1[i].setXOffset(gdjs.StartCode.GDNewTiledSpriteObjects1[i].getXOffset() + (75 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.StartCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDNewTiledSpriteObjects1[i].setYOffset(gdjs.StartCode.GDNewTiledSpriteObjects1[i].getYOffset() + (75 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{for(var i = 0, len = gdjs.StartCode.GDGridObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDGridObjects1[i].setXOffset(gdjs.StartCode.GDGridObjects1[i].getXOffset() + (32 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.StartCode.GDGridObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDGridObjects1[i].setYOffset(gdjs.StartCode.GDGridObjects1[i].getYOffset() + (16 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.StartCode.GDEnemiesObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDEnemiesObjects1[i].getBehavior("BoidsMovement").AvoidPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 16, 4, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.StartCode.GDButtonCreatorObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDButtonCreatorObjects1[i].getBehavior("Text").setText(gdjs.StartCode.GDButtonCreatorObjects1[i].getVariables().getFromIndex(0).getAsString());
}
}{for(var i = 0, len = gdjs.StartCode.GDLabelsObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDLabelsObjects1[i].getBehavior("Text").setText(gdjs.StartCode.GDLabelsObjects1[i].getVariables().getFromIndex(0).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(27048492);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.StartCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewShapePainter"), gdjs.StartCode.GDNewShapePainterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDNewShapePainterObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDNewShapePainterObjects1[i].getVariableNumber(gdjs.StartCode.GDNewShapePainterObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDNewShapePainterObjects1[k] = gdjs.StartCode.GDNewShapePainterObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDNewShapePainterObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDNewShapePainterObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("vol").getChild("music").setNumber((( gdjs.StartCode.GDNewShapePainterObjects1.length === 0 ) ? 0 :gdjs.StartCode.GDNewShapePainterObjects1[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewShapePainter"), gdjs.StartCode.GDNewShapePainterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDNewShapePainterObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDNewShapePainterObjects1[i].getVariableNumber(gdjs.StartCode.GDNewShapePainterObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDNewShapePainterObjects1[k] = gdjs.StartCode.GDNewShapePainterObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDNewShapePainterObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDNewShapePainterObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("vol").getChild("enemy").setNumber((( gdjs.StartCode.GDNewShapePainterObjects1.length === 0 ) ? 0 :gdjs.StartCode.GDNewShapePainterObjects1[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewShapePainter"), gdjs.StartCode.GDNewShapePainterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDNewShapePainterObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDNewShapePainterObjects1[i].getVariableNumber(gdjs.StartCode.GDNewShapePainterObjects1[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDNewShapePainterObjects1[k] = gdjs.StartCode.GDNewShapePainterObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDNewShapePainterObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDNewShapePainterObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("vol").getChild("gun").setNumber((( gdjs.StartCode.GDNewShapePainterObjects1.length === 0 ) ? 0 :gdjs.StartCode.GDNewShapePainterObjects1[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewShapePainter"), gdjs.StartCode.GDNewShapePainterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDNewShapePainterObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDNewShapePainterObjects1[i].getVariableNumber(gdjs.StartCode.GDNewShapePainterObjects1[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDNewShapePainterObjects1[k] = gdjs.StartCode.GDNewShapePainterObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDNewShapePainterObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDNewShapePainterObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("vfx").getChild("shake").setNumber((( gdjs.StartCode.GDNewShapePainterObjects1.length === 0 ) ? 0 :gdjs.StartCode.GDNewShapePainterObjects1[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemies"), gdjs.StartCode.GDEnemiesObjects1);

for (gdjs.StartCode.forEachIndex2 = 0;gdjs.StartCode.forEachIndex2 < gdjs.StartCode.GDEnemiesObjects1.length;++gdjs.StartCode.forEachIndex2) {
gdjs.StartCode.GDEnemiesObjects2.length = 0;


gdjs.StartCode.forEachTemporary2 = gdjs.StartCode.GDEnemiesObjects1[gdjs.StartCode.forEachIndex2];
gdjs.StartCode.GDEnemiesObjects2.push(gdjs.StartCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.StartCode.GDEnemiesObjects2.length === 0 ) ? 0 :gdjs.StartCode.GDEnemiesObjects2[0].getDistanceToPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0))) > 256);
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.StartCode.GDEnemiesObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDEnemiesObjects2[i].getBehavior("BoidsMovement").MoveToPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}
}

}


{


gdjs.StartCode.eventsList2(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 1);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 2);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 3);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 4);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 5);
}
}
}
}
isConditionTrue_0 = !isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(26994748);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\music\\DyanamicMusic\\Layer 1.wav", 1, true, 0, 1);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\music\\DyanamicMusic\\Layer 2.wav", 2, true, 0, 1);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\music\\DyanamicMusic\\Layer 3.wav", 3, true, 100, 1);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\music\\DyanamicMusic\\Layer 4.wav", 4, true, 0, 1);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\music\\DyanamicMusic\\Layer 5.wav", 5, true, 0, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonCreator"), gdjs.StartCode.GDButtonCreatorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDButtonCreatorObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDButtonCreatorObjects1[i].getVariableNumber(gdjs.StartCode.GDButtonCreatorObjects1[i].getVariables().getFromIndex(2)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDButtonCreatorObjects1[k] = gdjs.StartCode.GDButtonCreatorObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDButtonCreatorObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDButtonCreatorObjects1 */
{for(var i = 0, len = gdjs.StartCode.GDButtonCreatorObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDButtonCreatorObjects1[i].getBehavior("Text").setText("Ahnaf30e\nThe silly guy and artist");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonCreator"), gdjs.StartCode.GDButtonCreatorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDButtonCreatorObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDButtonCreatorObjects1[i].getVariableNumber(gdjs.StartCode.GDButtonCreatorObjects1[i].getVariables().getFromIndex(2)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDButtonCreatorObjects1[k] = gdjs.StartCode.GDButtonCreatorObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDButtonCreatorObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDButtonCreatorObjects1 */
{for(var i = 0, len = gdjs.StartCode.GDButtonCreatorObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDButtonCreatorObjects1[i].getBehavior("Text").setText("Cokiesyum\nVery cool very awesome");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonCreator"), gdjs.StartCode.GDButtonCreatorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDButtonCreatorObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDButtonCreatorObjects1[i].getVariableNumber(gdjs.StartCode.GDButtonCreatorObjects1[i].getVariables().getFromIndex(2)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDButtonCreatorObjects1[k] = gdjs.StartCode.GDButtonCreatorObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDButtonCreatorObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDButtonCreatorObjects1 */
{for(var i = 0, len = gdjs.StartCode.GDButtonCreatorObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDButtonCreatorObjects1[i].getBehavior("Text").setText("RebzyTV\nthe inforcer (tyrant)");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonCreator"), gdjs.StartCode.GDButtonCreatorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDButtonCreatorObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDButtonCreatorObjects1[i].getVariableNumber(gdjs.StartCode.GDButtonCreatorObjects1[i].getVariables().getFromIndex(2)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDButtonCreatorObjects1[k] = gdjs.StartCode.GDButtonCreatorObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDButtonCreatorObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDButtonCreatorObjects1 */
{for(var i = 0, len = gdjs.StartCode.GDButtonCreatorObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDButtonCreatorObjects1[i].getBehavior("Text").setText("Chrisruptive\nbeep baaaaaa (music goes brrr)");
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.StartCode.GDButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonCreator"), gdjs.StartCode.GDButtonCreatorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Camera_Positions"), gdjs.StartCode.GDCamera_9595PositionsObjects1);
{for(var i = 0, len = gdjs.StartCode.GDButtonCreatorObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDButtonCreatorObjects1[i].setTint("255;255;255");
}
}{for(var i = 0, len = gdjs.StartCode.GDButtonObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDButtonObjects1[i].setTint("255;255;255");
}
}{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "auto", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.StartCode.GDButtonObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDButtonObjects1[i].getBehavior("Text").setText(gdjs.StartCode.GDButtonObjects1[i].getVariables().getFromIndex(0).getAsString());
}
}{for(var i = 0, len = gdjs.StartCode.GDCamera_9595PositionsObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDCamera_9595PositionsObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonCreator"), gdjs.StartCode.GDButtonCreatorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDButtonCreatorObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDButtonCreatorObjects1[i].getAABBLeft() < gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) + 48 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDButtonCreatorObjects1[k] = gdjs.StartCode.GDButtonCreatorObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDButtonCreatorObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDButtonCreatorObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDButtonCreatorObjects1[i].getAABBLeft() > gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) - 320 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDButtonCreatorObjects1[k] = gdjs.StartCode.GDButtonCreatorObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDButtonCreatorObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDButtonCreatorObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDButtonCreatorObjects1[i].getAABBTop() < gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDButtonCreatorObjects1[k] = gdjs.StartCode.GDButtonCreatorObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDButtonCreatorObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDButtonCreatorObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDButtonCreatorObjects1[i].getY() > gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) - 32 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDButtonCreatorObjects1[k] = gdjs.StartCode.GDButtonCreatorObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDButtonCreatorObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDButtonCreatorObjects1 */
{for(var i = 0, len = gdjs.StartCode.GDButtonCreatorObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDButtonCreatorObjects1[i].setTint("193;217;242");
}
}{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "pointer", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.StartCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.StartCode.GDButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDButtonObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDButtonObjects1[i].getAABBLeft() < gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) + 48 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDButtonObjects1[k] = gdjs.StartCode.GDButtonObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDButtonObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDButtonObjects1[i].getAABBLeft() > gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) - 320 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDButtonObjects1[k] = gdjs.StartCode.GDButtonObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDButtonObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDButtonObjects1[i].getAABBTop() < gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDButtonObjects1[k] = gdjs.StartCode.GDButtonObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDButtonObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDButtonObjects1[i].getAABBTop() > gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) - 32 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDButtonObjects1[k] = gdjs.StartCode.GDButtonObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDButtonObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.StartCode.GDButtonObjects1 */
{for(var i = 0, len = gdjs.StartCode.GDButtonObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDButtonObjects1[i].setTint("193;217;242");
}
}{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "pointer", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.StartCode.eventsList5(runtimeScene);} //End of subevents
}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDNewSpriteObjects1.length = 0;
gdjs.StartCode.GDNewSpriteObjects2.length = 0;
gdjs.StartCode.GDNewSpriteObjects3.length = 0;
gdjs.StartCode.GDNewSprite2Objects1.length = 0;
gdjs.StartCode.GDNewSprite2Objects2.length = 0;
gdjs.StartCode.GDNewSprite2Objects3.length = 0;
gdjs.StartCode.GDNewSprite3Objects1.length = 0;
gdjs.StartCode.GDNewSprite3Objects2.length = 0;
gdjs.StartCode.GDNewSprite3Objects3.length = 0;
gdjs.StartCode.GDCursorObjects1.length = 0;
gdjs.StartCode.GDCursorObjects2.length = 0;
gdjs.StartCode.GDCursorObjects3.length = 0;
gdjs.StartCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.StartCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.StartCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.StartCode.GDUIObjects1.length = 0;
gdjs.StartCode.GDUIObjects2.length = 0;
gdjs.StartCode.GDUIObjects3.length = 0;
gdjs.StartCode.GDTransitionObjects1.length = 0;
gdjs.StartCode.GDTransitionObjects2.length = 0;
gdjs.StartCode.GDTransitionObjects3.length = 0;
gdjs.StartCode.GDButtonObjects1.length = 0;
gdjs.StartCode.GDButtonObjects2.length = 0;
gdjs.StartCode.GDButtonObjects3.length = 0;
gdjs.StartCode.GDEnemiesObjects1.length = 0;
gdjs.StartCode.GDEnemiesObjects2.length = 0;
gdjs.StartCode.GDEnemiesObjects3.length = 0;
gdjs.StartCode.GDIconObjects1.length = 0;
gdjs.StartCode.GDIconObjects2.length = 0;
gdjs.StartCode.GDIconObjects3.length = 0;
gdjs.StartCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.StartCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.StartCode.GDNewTiledSprite2Objects3.length = 0;
gdjs.StartCode.GDGridObjects1.length = 0;
gdjs.StartCode.GDGridObjects2.length = 0;
gdjs.StartCode.GDGridObjects3.length = 0;
gdjs.StartCode.GDButtonCreatorObjects1.length = 0;
gdjs.StartCode.GDButtonCreatorObjects2.length = 0;
gdjs.StartCode.GDButtonCreatorObjects3.length = 0;
gdjs.StartCode.GDCamera_9595PositionsObjects1.length = 0;
gdjs.StartCode.GDCamera_9595PositionsObjects2.length = 0;
gdjs.StartCode.GDCamera_9595PositionsObjects3.length = 0;
gdjs.StartCode.GDLabelsObjects1.length = 0;
gdjs.StartCode.GDLabelsObjects2.length = 0;
gdjs.StartCode.GDLabelsObjects3.length = 0;
gdjs.StartCode.GDNewShapePainterObjects1.length = 0;
gdjs.StartCode.GDNewShapePainterObjects2.length = 0;
gdjs.StartCode.GDNewShapePainterObjects3.length = 0;

gdjs.StartCode.eventsList6(runtimeScene);
gdjs.StartCode.GDNewSpriteObjects1.length = 0;
gdjs.StartCode.GDNewSpriteObjects2.length = 0;
gdjs.StartCode.GDNewSpriteObjects3.length = 0;
gdjs.StartCode.GDNewSprite2Objects1.length = 0;
gdjs.StartCode.GDNewSprite2Objects2.length = 0;
gdjs.StartCode.GDNewSprite2Objects3.length = 0;
gdjs.StartCode.GDNewSprite3Objects1.length = 0;
gdjs.StartCode.GDNewSprite3Objects2.length = 0;
gdjs.StartCode.GDNewSprite3Objects3.length = 0;
gdjs.StartCode.GDCursorObjects1.length = 0;
gdjs.StartCode.GDCursorObjects2.length = 0;
gdjs.StartCode.GDCursorObjects3.length = 0;
gdjs.StartCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.StartCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.StartCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.StartCode.GDUIObjects1.length = 0;
gdjs.StartCode.GDUIObjects2.length = 0;
gdjs.StartCode.GDUIObjects3.length = 0;
gdjs.StartCode.GDTransitionObjects1.length = 0;
gdjs.StartCode.GDTransitionObjects2.length = 0;
gdjs.StartCode.GDTransitionObjects3.length = 0;
gdjs.StartCode.GDButtonObjects1.length = 0;
gdjs.StartCode.GDButtonObjects2.length = 0;
gdjs.StartCode.GDButtonObjects3.length = 0;
gdjs.StartCode.GDEnemiesObjects1.length = 0;
gdjs.StartCode.GDEnemiesObjects2.length = 0;
gdjs.StartCode.GDEnemiesObjects3.length = 0;
gdjs.StartCode.GDIconObjects1.length = 0;
gdjs.StartCode.GDIconObjects2.length = 0;
gdjs.StartCode.GDIconObjects3.length = 0;
gdjs.StartCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.StartCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.StartCode.GDNewTiledSprite2Objects3.length = 0;
gdjs.StartCode.GDGridObjects1.length = 0;
gdjs.StartCode.GDGridObjects2.length = 0;
gdjs.StartCode.GDGridObjects3.length = 0;
gdjs.StartCode.GDButtonCreatorObjects1.length = 0;
gdjs.StartCode.GDButtonCreatorObjects2.length = 0;
gdjs.StartCode.GDButtonCreatorObjects3.length = 0;
gdjs.StartCode.GDCamera_9595PositionsObjects1.length = 0;
gdjs.StartCode.GDCamera_9595PositionsObjects2.length = 0;
gdjs.StartCode.GDCamera_9595PositionsObjects3.length = 0;
gdjs.StartCode.GDLabelsObjects1.length = 0;
gdjs.StartCode.GDLabelsObjects2.length = 0;
gdjs.StartCode.GDLabelsObjects3.length = 0;
gdjs.StartCode.GDNewShapePainterObjects1.length = 0;
gdjs.StartCode.GDNewShapePainterObjects2.length = 0;
gdjs.StartCode.GDNewShapePainterObjects3.length = 0;


return;

}

gdjs['StartCode'] = gdjs.StartCode;
