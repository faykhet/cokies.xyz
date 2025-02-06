
if (typeof gdjs.evtsExt__Advanced3D__Opacity !== "undefined") {
  gdjs.evtsExt__Advanced3D__Opacity.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Advanced3D__Opacity = {};
gdjs.evtsExt__Advanced3D__Opacity.GDObjectObjects1= [];


gdjs.evtsExt__Advanced3D__Opacity.userFunc0xde3db0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = 255;
if (objects.length == 0) {
    return;
}
let Opacity = null;
const Object2D = objects[0];
const Object3D = Object2D.get3DRendererObject();
//
if (Object3D) {
    Object3D.traverse((Child) => {
        if (Opacity === null) {
            if (Child.material) {
                if (Array.isArray(Child.material)) {
                    Opacity = Child.material[0].opacity;
                } else {
                    Opacity = Child.material.opacity;
                }
            }
        }
    });
}
Opacity = (Opacity === null) ? 1 : Opacity;
Opacity *= 255;
eventsFunctionContext.returnValue = Opacity;


};
gdjs.evtsExt__Advanced3D__Opacity.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Advanced3D__Opacity.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Advanced3D__Opacity.GDObjectObjects1);
gdjs.evtsExt__Advanced3D__Opacity.userFunc0xde3db0(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Advanced3D__Opacity.func = function(runtimeScene, Object, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Advanced3D__Opacity.GDObjectObjects1.length = 0;

gdjs.evtsExt__Advanced3D__Opacity.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Advanced3D__Opacity.GDObjectObjects1.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__Advanced3D__Opacity.registeredGdjsCallbacks = [];