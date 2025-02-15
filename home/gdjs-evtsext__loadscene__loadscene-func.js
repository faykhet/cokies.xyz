
if (typeof gdjs.evtsExt__LoadScene__LoadScene !== "undefined") {
  gdjs.evtsExt__LoadScene__LoadScene.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__LoadScene__LoadScene = {};


gdjs.evtsExt__LoadScene__LoadScene.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().get("Loading").setString(eventsFunctionContext.getArgument("Scene"));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, eventsFunctionContext.getArgument("Load"), false);
}}

}


};

gdjs.evtsExt__LoadScene__LoadScene.func = function(runtimeScene, Scene, Load, Var, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("LoadScene"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("LoadScene"),
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
if (argName === "Scene") return Scene;
if (argName === "Load") return Load;
if (argName === "Var") return Var;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__LoadScene__LoadScene.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__LoadScene__LoadScene.registeredGdjsCallbacks = [];