
if (typeof gdjs.evtsExt__Material3D__RemoveOutline !== "undefined") {
  gdjs.evtsExt__Material3D__RemoveOutline.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Material3D__RemoveOutline = {};
gdjs.evtsExt__Material3D__RemoveOutline.GDObjectObjects1= [];


gdjs.evtsExt__Material3D__RemoveOutline.userFunc0xadf168 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
objects.forEach(object => {
    const threeObject = object.get3DRendererObject();
    
    if (threeObject) {
        // Remove fill overlay
        if (threeObject.userData.fillOverlay) {
            threeObject.parent.remove(threeObject.userData.fillOverlay);
            threeObject.userData.fillOverlay.material.dispose();
            threeObject.userData.fillOverlay.geometry.dispose();
            delete threeObject.userData.fillOverlay;
        }
        
        // Remove outline mesh
        if (threeObject.userData.outlineMesh) {
            threeObject.parent.remove(threeObject.userData.outlineMesh);
            threeObject.userData.outlineMesh.material.dispose();
            threeObject.userData.outlineMesh.geometry.dispose();
            delete threeObject.userData.outlineMesh;
        }
        
        // Reset render order of original object
        threeObject.renderOrder = 0;
    }
});
};
gdjs.evtsExt__Material3D__RemoveOutline.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Material3D__RemoveOutline.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Material3D__RemoveOutline.GDObjectObjects1);
gdjs.evtsExt__Material3D__RemoveOutline.userFunc0xadf168(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Material3D__RemoveOutline.func = function(runtimeScene, Object, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Material3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Material3D"),
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

gdjs.evtsExt__Material3D__RemoveOutline.GDObjectObjects1.length = 0;

gdjs.evtsExt__Material3D__RemoveOutline.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Material3D__RemoveOutline.GDObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__Material3D__RemoveOutline.registeredGdjsCallbacks = [];