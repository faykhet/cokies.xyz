
if (typeof gdjs.evtsExt__CameraShake__DeleteAll !== "undefined") {
  gdjs.evtsExt__CameraShake__DeleteAll.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CameraShake__DeleteAll = {};


gdjs.evtsExt__CameraShake__DeleteAll.userFunc0x1f0f838 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs._cameraShakeExtension.noiseManager.deleteAllGenerators();
};
gdjs.evtsExt__CameraShake__DeleteAll.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CameraShake__DeleteAll.userFunc0x1f0f838(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CameraShake__DeleteAll.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CameraShake"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CameraShake"),
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CameraShake__DeleteAll.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__CameraShake__DeleteAll.registeredGdjsCallbacks = [];