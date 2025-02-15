gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDPlayerObjects2_1final = [];

gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects2_1final = [];

gdjs.Untitled_32sceneCode.GDPlayerObjects1= [];
gdjs.Untitled_32sceneCode.GDPlayerObjects2= [];
gdjs.Untitled_32sceneCode.GDPlayerObjects3= [];
gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects1= [];
gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects2= [];
gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3= [];
gdjs.Untitled_32sceneCode.GDNewSprite3DObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite3DObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite3DObjects3= [];
gdjs.Untitled_32sceneCode.GDBallObjects1= [];
gdjs.Untitled_32sceneCode.GDBallObjects2= [];
gdjs.Untitled_32sceneCode.GDBallObjects3= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects3= [];
gdjs.Untitled_32sceneCode.GDPlanetObjects1= [];
gdjs.Untitled_32sceneCode.GDPlanetObjects2= [];
gdjs.Untitled_32sceneCode.GDPlanetObjects3= [];
gdjs.Untitled_32sceneCode.GDLightObjects1= [];
gdjs.Untitled_32sceneCode.GDLightObjects2= [];
gdjs.Untitled_32sceneCode.GDLightObjects3= [];
gdjs.Untitled_32sceneCode.GDSphereObjects1= [];
gdjs.Untitled_32sceneCode.GDSphereObjects2= [];
gdjs.Untitled_32sceneCode.GDSphereObjects3= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Untitled_32sceneCode.GDPlayerObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite3DObjects1Objects = Hashtable.newFrom({"NewSprite3D": gdjs.Untitled_32sceneCode.GDNewSprite3DObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Untitled_32sceneCode.GDPlayerObjects1, gdjs.Untitled_32sceneCode.GDPlayerObjects2);

gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Untitled_32sceneCode.GDPlayerObjects2_1final.length = 0;
gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDPlayerObjects1, gdjs.Untitled_32sceneCode.GDPlayerObjects3);

gdjs.copyArray(runtimeScene.getObjects("Player_Hitbox"), gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3[i].getBehavior("Physics3D").getLinearVelocityX() < Math.cos(gdjs.toRad(((gdjs.Untitled_32sceneCode.GDPlayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDPlayerObjects3[0].getVariables()).getFromIndex(0).getAsNumber() + 90)) * 1000 ) {
        isConditionTrue_2 = true;
        gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3[k] = gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = (1 == gdjs.evtTools.common.sign(Math.cos(gdjs.toRad(((gdjs.Untitled_32sceneCode.GDPlayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDPlayerObjects3[0].getVariables()).getFromIndex(0).getAsNumber() + 90))));
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDPlayerObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDPlayerObjects2_1final.indexOf(gdjs.Untitled_32sceneCode.GDPlayerObjects3[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDPlayerObjects2_1final.push(gdjs.Untitled_32sceneCode.GDPlayerObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects2_1final.indexOf(gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects2_1final.push(gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDPlayerObjects1, gdjs.Untitled_32sceneCode.GDPlayerObjects3);

gdjs.copyArray(runtimeScene.getObjects("Player_Hitbox"), gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3[i].getBehavior("Physics3D").getLinearVelocityX() > Math.cos(gdjs.toRad(((gdjs.Untitled_32sceneCode.GDPlayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDPlayerObjects3[0].getVariables()).getFromIndex(0).getAsNumber() + 90)) * 1000 ) {
        isConditionTrue_2 = true;
        gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3[k] = gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = (-(1) == gdjs.evtTools.common.sign(Math.cos(gdjs.toRad(((gdjs.Untitled_32sceneCode.GDPlayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDPlayerObjects3[0].getVariables()).getFromIndex(0).getAsNumber() + 90))));
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDPlayerObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDPlayerObjects2_1final.indexOf(gdjs.Untitled_32sceneCode.GDPlayerObjects3[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDPlayerObjects2_1final.push(gdjs.Untitled_32sceneCode.GDPlayerObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects2_1final.indexOf(gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects2_1final.push(gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDPlayerObjects2_1final, gdjs.Untitled_32sceneCode.GDPlayerObjects2);
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects2_1final, gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects2 */
/* Reuse gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects2[i].getBehavior("Physics3D").setLinearVelocityX(gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects2[i].getBehavior("Physics3D").getLinearVelocityX() + (Math.cos(gdjs.toRad(((gdjs.Untitled_32sceneCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDPlayerObjects2[0].getVariables()).getFromIndex(0).getAsNumber() + 90)) * 5000 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.copyArray(gdjs.Untitled_32sceneCode.GDPlayerObjects1, gdjs.Untitled_32sceneCode.GDPlayerObjects2);

gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Untitled_32sceneCode.GDPlayerObjects2_1final.length = 0;
gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDPlayerObjects1, gdjs.Untitled_32sceneCode.GDPlayerObjects3);

gdjs.copyArray(runtimeScene.getObjects("Player_Hitbox"), gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3[i].getBehavior("Physics3D").getLinearVelocityY() < Math.sin(gdjs.toRad(((gdjs.Untitled_32sceneCode.GDPlayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDPlayerObjects3[0].getVariables()).getFromIndex(0).getAsNumber() + 90)) * 1300 ) {
        isConditionTrue_2 = true;
        gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3[k] = gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = (1 == gdjs.evtTools.common.sign(Math.sin(gdjs.toRad(((gdjs.Untitled_32sceneCode.GDPlayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDPlayerObjects3[0].getVariables()).getFromIndex(0).getAsNumber() + 90))));
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDPlayerObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDPlayerObjects2_1final.indexOf(gdjs.Untitled_32sceneCode.GDPlayerObjects3[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDPlayerObjects2_1final.push(gdjs.Untitled_32sceneCode.GDPlayerObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects2_1final.indexOf(gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects2_1final.push(gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDPlayerObjects1, gdjs.Untitled_32sceneCode.GDPlayerObjects3);

gdjs.copyArray(runtimeScene.getObjects("Player_Hitbox"), gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3[i].getBehavior("Physics3D").getLinearVelocityY() > Math.sin(gdjs.toRad(((gdjs.Untitled_32sceneCode.GDPlayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDPlayerObjects3[0].getVariables()).getFromIndex(0).getAsNumber() + 90)) * 1300 ) {
        isConditionTrue_2 = true;
        gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3[k] = gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
{isConditionTrue_2 = (-(1) == gdjs.evtTools.common.sign(Math.sin(gdjs.toRad(((gdjs.Untitled_32sceneCode.GDPlayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDPlayerObjects3[0].getVariables()).getFromIndex(0).getAsNumber() + 90))));
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDPlayerObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDPlayerObjects2_1final.indexOf(gdjs.Untitled_32sceneCode.GDPlayerObjects3[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDPlayerObjects2_1final.push(gdjs.Untitled_32sceneCode.GDPlayerObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects2_1final.indexOf(gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects2_1final.push(gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDPlayerObjects2_1final, gdjs.Untitled_32sceneCode.GDPlayerObjects2);
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects2_1final, gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects2);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects2 */
/* Reuse gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects2[i].getBehavior("Physics3D").setLinearVelocityY(gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects2[i].getBehavior("Physics3D").getLinearVelocityY() + (Math.sin(gdjs.toRad(((gdjs.Untitled_32sceneCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDPlayerObjects2[0].getVariables()).getFromIndex(0).getAsNumber() + 90)) * 5000 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{



}


};gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.Untitled_32sceneCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3D"), gdjs.Untitled_32sceneCode.GDNewSprite3DObjects1);
gdjs.copyArray(runtimeScene.getObjects("Planet"), gdjs.Untitled_32sceneCode.GDPlanetObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player_Hitbox"), gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBallObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].setCenterPositionInScene((( gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects1[0].getCenterXInScene()),(( gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects1[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Object3D").setCenterZInScene((( gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects1[0].getBehavior("Object3D").getCenterZInScene()));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlanetObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlanetObjects1[i].setCenterPositionInScene((( gdjs.Untitled_32sceneCode.GDBallObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDBallObjects1[0].getCenterXInScene()),(( gdjs.Untitled_32sceneCode.GDBallObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDBallObjects1[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlanetObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlanetObjects1[i].getBehavior("Object3D").setCenterZInScene((( gdjs.Untitled_32sceneCode.GDBallObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDBallObjects1[0].getBehavior("Object3D").getCenterZInScene()));
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.common.clamp(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() + gdjs.evtsExt__MousePointerLock__MovementY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) / 5, -(110), 110));
}{gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtPosition3D.func(runtimeScene, (( gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects1[0].getCenterXInScene()), (( gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects1[0].getCenterYInScene()), (( gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects1[0].getBehavior("Object3D").getCenterZInScene()) + 30, 550, gdjs.evtTools.camera.getCameraRotation(runtimeScene, "", 0) + (gdjs.evtsExt__MousePointerLock__MovementX.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) / 6), runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__Advanced3D__ChangeShadow.func(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayerObjects1Objects, "Object3D", true, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__Advanced3D__ChangeShadow.func(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite3DObjects1Objects, "Object3D", true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationIndex(Math.round(gdjs.evtTools.common.mod(gdjs.evtTools.common.angleDifference(gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0).getAsNumber(), gdjs.evtTools.camera.getCameraRotation(runtimeScene, "", 0)) / 90, 4)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(gdjs.evtTools.camera.getCameraRotation(runtimeScene, "", 0) + 180);
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11703348);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player_Hitbox"), gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects1[i].getBehavior("Physics3D").setLinearVelocityZ(gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects1[i].getBehavior("Physics3D").getLinearVelocityZ() / (50));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects1[i].getBehavior("Physics3D").setLinearVelocityZ(gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects1[i].getBehavior("Physics3D").getLinearVelocityZ() + (1000));
}
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite3DObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite3DObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite3DObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBallObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBallObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBallObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDPlanetObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlanetObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlanetObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDLightObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDLightObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDLightObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDSphereObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSphereObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSphereObjects3.length = 0;

gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayer_9595HitboxObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite3DObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite3DObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite3DObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBallObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBallObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBallObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDPlanetObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlanetObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlanetObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDLightObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDLightObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDLightObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDSphereObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSphereObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDSphereObjects3.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
