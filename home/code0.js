gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1= [];
gdjs.Untitled_32sceneCode.GDNew3DBoxObjects2= [];
gdjs.Untitled_32sceneCode.GDNew3DModelObjects1= [];
gdjs.Untitled_32sceneCode.GDNew3DModelObjects2= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects2= [];
gdjs.Untitled_32sceneCode.GDskyObjects1= [];
gdjs.Untitled_32sceneCode.GDskyObjects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDskyObjects1Objects = Hashtable.newFrom({"sky": gdjs.Untitled_32sceneCode.GDskyObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDskyObjects1Objects = Hashtable.newFrom({"sky": gdjs.Untitled_32sceneCode.GDskyObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("New3DModel"), gdjs.Untitled_32sceneCode.GDNew3DModelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(0).getChild("Torque")) < 0 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[k] = gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDNew3DModelObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(0).getChild("Torque")).setNumber(Math.min(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(0).getChild("Torque").getAsNumber() + (10 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), 0));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("New3DModel"), gdjs.Untitled_32sceneCode.GDNew3DModelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(0).getChild("Torque")) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[k] = gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDNew3DModelObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(0).getChild("Torque")).setNumber(Math.max(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(0).getChild("Torque").getAsNumber() - (10 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), 0));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("New3DModel"), gdjs.Untitled_32sceneCode.GDNew3DModelObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(0).getChild("Torque")).sub(360 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("New3DModel"), gdjs.Untitled_32sceneCode.GDNew3DModelObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(0).getChild("Torque")).add(360 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("New3DModel"), gdjs.Untitled_32sceneCode.GDNew3DModelObjects1);
gdjs.copyArray(runtimeScene.getObjects("sky"), gdjs.Untitled_32sceneCode.GDskyObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(0).getChild("Torque")).setNumber(gdjs.evtTools.common.clamp(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(0).getChild("Torque").getAsNumber(), -(720), 720));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].setAngle(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getAngle() + (gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(0).getChild("Torque").getAsNumber() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDskyObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDskyObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDskyObjects1[i].getVariables().getFromIndex(0).getChild("X")).add(0.005 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}{gdjs.evtsExt__Material3D__ChangeTillingScale.func(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDskyObjects1Objects, 50, 50, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__Material3D__ChangeTillingOffset.func(runtimeScene, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDskyObjects1Objects, ((gdjs.Untitled_32sceneCode.GDskyObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDskyObjects1[0].getVariables()).getFromIndex(0).getChild("X").getAsNumber(), ((gdjs.Untitled_32sceneCode.GDskyObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDskyObjects1[0].getVariables()).getFromIndex(0).getChild("Y").getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("New3DModel"), gdjs.Untitled_32sceneCode.GDNew3DModelObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(1).getChild("Offset").getChild("Z")).add(gdjs.evtsExt__MousePointerLock__MovementX.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) / 7);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(1).getChild("Rotation").getChild("Z")).setNumber(gdjs.evtTools.common.lerp(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(1).getChild("Rotation").getChild("Z").getAsNumber(), (gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getAngle()) + gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(1).getChild("Offset").getChild("Z").getAsNumber(), 5 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(1).getChild("Offset").getChild("Y")).add(gdjs.evtsExt__MousePointerLock__MovementY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) / 7);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(1).getChild("Rotation").getChild("Y")).setNumber(gdjs.evtTools.common.lerp(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(1).getChild("Rotation").getChild("Y").getAsNumber(), gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(1).getChild("Offset").getChild("Y").getAsNumber(), 5 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(1).getChild("Position").getChild("X")).setNumber(gdjs.evtTools.common.lerp(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(1).getChild("Position").getChild("X").getAsNumber(), (gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getX()) + (gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(1).getChild("Distance").getAsNumber() * Math.cos(gdjs.toRad(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(1).getChild("Rotation").getChild("Z").getAsNumber() + 90)) * Math.cos(gdjs.toRad(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(1).getChild("Rotation").getChild("Y").getAsNumber()))), 10 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(1).getChild("Position").getChild("Y")).setNumber(gdjs.evtTools.common.lerp(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(1).getChild("Position").getChild("Y").getAsNumber(), (gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getY()) + (gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(1).getChild("Distance").getAsNumber() * Math.sin(gdjs.toRad(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(1).getChild("Rotation").getChild("Z").getAsNumber() + 90)) * Math.cos(gdjs.toRad(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(1).getChild("Rotation").getChild("Y").getAsNumber()))), 10 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(1).getChild("Position").getChild("Z")).setNumber(gdjs.evtTools.common.lerp(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(1).getChild("Position").getChild("Z").getAsNumber(), (gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getZ()) + 10 + (gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(1).getChild("Distance").getAsNumber() * Math.sin(gdjs.toRad(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(1).getChild("Rotation").getChild("Y").getAsNumber()))), 10 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{gdjs.evtTools.camera.setCameraY(runtimeScene, ((gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[0].getVariables()).getFromIndex(1).getChild("Position").getChild("Y").getAsNumber(), "", 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, ((gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[0].getVariables()).getFromIndex(1).getChild("Position").getChild("X").getAsNumber(), "", 0);
}{gdjs.scene3d.camera.setCameraZ(runtimeScene, ((gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[0].getVariables()).getFromIndex(1).getChild("Position").getChild("Z").getAsNumber(), "", 0);
}{gdjs.evtTools.camera.setCameraRotation(runtimeScene, ((gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[0].getVariables()).getFromIndex(1).getChild("Rotation").getChild("Z").getAsNumber(), "", 0);
}{gdjs.scene3d.camera.setCameraRotationX(runtimeScene, -(((gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[0].getVariables()).getFromIndex(1).getChild("Rotation").getChild("Y").getAsNumber()) + 90, "", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__MousePointerLock__isPointerLocked.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("New3DModel"), gdjs.Untitled_32sceneCode.GDNew3DModelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(0).getChild("X")) < 0 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[k] = gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDNew3DModelObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(0).getChild("X")).setNumber(Math.min(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(0).getChild("X").getAsNumber() + (10 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), 0));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("New3DModel"), gdjs.Untitled_32sceneCode.GDNew3DModelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(0).getChild("X")) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[k] = gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDNew3DModelObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(0).getChild("X")).setNumber(Math.max(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(0).getChild("X").getAsNumber() - (10 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), 0));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("New3DModel"), gdjs.Untitled_32sceneCode.GDNew3DModelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(0).getChild("Y")) < 0 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[k] = gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDNew3DModelObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(0).getChild("Y")).setNumber(Math.min(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(0).getChild("Y").getAsNumber() + (10 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), 0));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("New3DModel"), gdjs.Untitled_32sceneCode.GDNew3DModelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(0).getChild("Y")) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[k] = gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDNew3DModelObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(0).getChild("Y")).setNumber(Math.max(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(0).getChild("Y").getAsNumber() - (10 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), 0));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("New3DModel"), gdjs.Untitled_32sceneCode.GDNew3DModelObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(0).getChild("X")).add(Math.sin(gdjs.toRad((gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getAngle()))) * 60 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(0).getChild("Y")).sub(Math.cos(gdjs.toRad((gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getAngle()))) * 60 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("New3DModel"), gdjs.Untitled_32sceneCode.GDNew3DModelObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].setPosition(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getX() +(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(0).getChild("X").getAsNumber() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)),gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getY() +(gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getVariables().getFromIndex(0).getChild("Y").getAsNumber() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{



}


{



}


{



}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8867372);
}
if (isConditionTrue_0) {
{gdjs.evtsExt__water__thing.func(runtimeScene, "water.png", 1000.1, 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNew3DBoxObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNew3DModelObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDskyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDskyObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNew3DBoxObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNew3DModelObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDskyObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDskyObjects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
