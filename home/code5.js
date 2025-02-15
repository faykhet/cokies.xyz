gdjs.LoaderCode = {};
gdjs.LoaderCode.localVariables = [];
gdjs.LoaderCode.GDspinnerObjects1= [];
gdjs.LoaderCode.GDspinnerObjects2= [];
gdjs.LoaderCode.GDLogoObjects1= [];
gdjs.LoaderCode.GDLogoObjects2= [];
gdjs.LoaderCode.GDTipObjects1= [];
gdjs.LoaderCode.GDTipObjects2= [];


gdjs.LoaderCode.asyncCallback27138668 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LoaderCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("spinner"), gdjs.LoaderCode.GDspinnerObjects2);

{for(var i = 0, len = gdjs.LoaderCode.GDspinnerObjects2.length ;i < len;++i) {
    gdjs.LoaderCode.GDspinnerObjects2[i].getBehavior("Tween").addObjectAngleTween2("Spin", (gdjs.LoaderCode.GDspinnerObjects2[i].getAngle()) + 180, "swingFromTo", 1, false);
}
}gdjs.LoaderCode.localVariables.length = 0;
}
gdjs.LoaderCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LoaderCode.localVariables);
for (const obj of gdjs.LoaderCode.GDspinnerObjects1) asyncObjectsList.addObject("spinner", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.LoaderCode.asyncCallback27138668(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoaderCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("spinner"), gdjs.LoaderCode.GDspinnerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoaderCode.GDspinnerObjects1.length;i<l;++i) {
    if ( !(gdjs.LoaderCode.GDspinnerObjects1[i].getBehavior("Tween").isPlaying("Spin")) ) {
        isConditionTrue_0 = true;
        gdjs.LoaderCode.GDspinnerObjects1[k] = gdjs.LoaderCode.GDspinnerObjects1[i];
        ++k;
    }
}
gdjs.LoaderCode.GDspinnerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(27138460);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LoaderCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(27139820);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Tip"), gdjs.LoaderCode.GDTipObjects1);
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}{for(var i = 0, len = gdjs.LoaderCode.GDTipObjects1.length ;i < len;++i) {
    gdjs.LoaderCode.GDTipObjects1[i].getBehavior("Text").setText("Tip: " + runtimeScene.getScene().getVariables().getFromIndex(0).getChild(gdjs.random(gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0)) - 1)).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(2).getAsString(), false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.LoaderCode.GDLogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tip"), gdjs.LoaderCode.GDTipObjects1);
gdjs.copyArray(runtimeScene.getObjects("spinner"), gdjs.LoaderCode.GDspinnerObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, 0, "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, 0, "", 0);
}{for(var i = 0, len = gdjs.LoaderCode.GDspinnerObjects1.length ;i < len;++i) {
    gdjs.LoaderCode.GDspinnerObjects1[i].setPosition((gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 2) - 64,(gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 2) - 64);
}
}{for(var i = 0, len = gdjs.LoaderCode.GDLogoObjects1.length ;i < len;++i) {
    gdjs.LoaderCode.GDLogoObjects1[i].getBehavior("Text").setText("Loading: " + gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.runtimeScene.getSceneLoadingProgress(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(2).getAsString()) * 100)) + "%");
}
}{for(var i = 0, len = gdjs.LoaderCode.GDLogoObjects1.length ;i < len;++i) {
    gdjs.LoaderCode.GDLogoObjects1[i].setCenterPositionInScene((( gdjs.LoaderCode.GDspinnerObjects1.length === 0 ) ? 0 :gdjs.LoaderCode.GDspinnerObjects1[0].getCenterXInScene()) - 64,(( gdjs.LoaderCode.GDspinnerObjects1.length === 0 ) ? 0 :gdjs.LoaderCode.GDspinnerObjects1[0].getCenterYInScene()) + (Math.sin(gdjs.toRad((( gdjs.LoaderCode.GDspinnerObjects1.length === 0 ) ? 0 :gdjs.LoaderCode.GDspinnerObjects1[0].getAngle()))) * 2));
}
}{for(var i = 0, len = gdjs.LoaderCode.GDLogoObjects1.length ;i < len;++i) {
    gdjs.LoaderCode.GDLogoObjects1[i].setX(((( gdjs.LoaderCode.GDspinnerObjects1.length === 0 ) ? 0 :gdjs.LoaderCode.GDspinnerObjects1[0].getCenterXInScene()) - 24) - (gdjs.LoaderCode.GDLogoObjects1[i].getWidth()));
}
}{for(var i = 0, len = gdjs.LoaderCode.GDTipObjects1.length ;i < len;++i) {
    gdjs.LoaderCode.GDTipObjects1[i].setX(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0) + 24);
}
}{for(var i = 0, len = gdjs.LoaderCode.GDTipObjects1.length ;i < len;++i) {
    gdjs.LoaderCode.GDTipObjects1[i].setY(((gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) + (Math.sin(gdjs.toRad((( gdjs.LoaderCode.GDspinnerObjects1.length === 0 ) ? 0 :gdjs.LoaderCode.GDspinnerObjects1[0].getAngle()))) * 2)) - 32) - (gdjs.LoaderCode.GDTipObjects1[i].getHeight()));
}
}}

}


};

gdjs.LoaderCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoaderCode.GDspinnerObjects1.length = 0;
gdjs.LoaderCode.GDspinnerObjects2.length = 0;
gdjs.LoaderCode.GDLogoObjects1.length = 0;
gdjs.LoaderCode.GDLogoObjects2.length = 0;
gdjs.LoaderCode.GDTipObjects1.length = 0;
gdjs.LoaderCode.GDTipObjects2.length = 0;

gdjs.LoaderCode.eventsList1(runtimeScene);
gdjs.LoaderCode.GDspinnerObjects1.length = 0;
gdjs.LoaderCode.GDspinnerObjects2.length = 0;
gdjs.LoaderCode.GDLogoObjects1.length = 0;
gdjs.LoaderCode.GDLogoObjects2.length = 0;
gdjs.LoaderCode.GDTipObjects1.length = 0;
gdjs.LoaderCode.GDTipObjects2.length = 0;


return;

}

gdjs['LoaderCode'] = gdjs.LoaderCode;
