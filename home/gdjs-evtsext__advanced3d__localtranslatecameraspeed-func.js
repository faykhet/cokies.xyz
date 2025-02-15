
if (typeof gdjs.evtsExt__Advanced3D__LocalTranslateCameraSpeed !== "undefined") {
  gdjs.evtsExt__Advanced3D__LocalTranslateCameraSpeed.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Advanced3D__LocalTranslateCameraSpeed = {};


gdjs.evtsExt__Advanced3D__LocalTranslateCameraSpeed.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__Advanced3D__LocalTranslateCameraDistance.func(runtimeScene, eventsFunctionContext.getArgument("Axis"), eventsFunctionContext.getArgument("Speed") * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), eventsFunctionContext.getArgument("Layer"), eventsFunctionContext.getArgument("CameraNumber"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.evtsExt__Advanced3D__LocalTranslateCameraSpeed.func = function(runtimeScene, Axis, Speed, Layer, CameraNumber, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Advanced3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Advanced3D"),
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
if (argName === "Axis") return Axis;
if (argName === "Speed") return Speed;
if (argName === "Layer") return Layer;
if (argName === "CameraNumber") return CameraNumber;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Advanced3D__LocalTranslateCameraSpeed.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__Advanced3D__LocalTranslateCameraSpeed.registeredGdjsCallbacks = [];