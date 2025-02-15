
if (typeof gdjs.evtsExt__DoubleClick__HasDoubleClicked !== "undefined") {
  gdjs.evtsExt__DoubleClick__HasDoubleClicked.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DoubleClick__HasDoubleClicked = {};


gdjs.evtsExt__DoubleClick__HasDoubleClicked.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() <= eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getAsNumber());
}
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(eventsFunctionContext.getArgument("MouseButton")).setNumber(0);
}{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() > eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getAsNumber());
}
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(eventsFunctionContext.getArgument("MouseButton")).setNumber(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene));
}}

}


};gdjs.evtsExt__DoubleClick__HasDoubleClicked.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Delay", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) - eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(eventsFunctionContext.getArgument("MouseButton")).getAsNumber());
}
{ //Subevents
gdjs.evtsExt__DoubleClick__HasDoubleClicked.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};gdjs.evtsExt__DoubleClick__HasDoubleClicked.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, eventsFunctionContext.getArgument("MouseButton")));
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild(eventsFunctionContext.getArgument("MouseButton")).setBoolean(true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, eventsFunctionContext.getArgument("MouseButton"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild(eventsFunctionContext.getArgument("MouseButton")).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) >= eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getAsNumber());
}
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(1).getChild(eventsFunctionContext.getArgument("MouseButton")).setBoolean(false);
}
{ //Subevents
gdjs.evtsExt__DoubleClick__HasDoubleClicked.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__DoubleClick__HasDoubleClicked.func = function(runtimeScene, MouseButton, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DoubleClick"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DoubleClick"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "MouseButton") return MouseButton;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__DoubleClick__HasDoubleClicked.eventsList2(runtimeScene, eventsFunctionContext);


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__DoubleClick__HasDoubleClicked.registeredGdjsCallbacks = [];