
if (typeof gdjs.evtsExt__Material3D__MakePhysics !== "undefined") {
  gdjs.evtsExt__Material3D__MakePhysics.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Material3D__MakePhysics = {};
gdjs.evtsExt__Material3D__MakePhysics.GDObjectObjects1= [];


gdjs.evtsExt__Material3D__MakePhysics.userFunc0x179ee08 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
objects.forEach(object => {
 const threeObject = object.get3DRendererObject();
 if (threeObject) {
   threeObject.material = new THREE.MeshPhysicalMaterial({
     color: gdjs.rgbOrHexStringToNumber(eventsFunctionContext.getArgument("color")),
     roughness: eventsFunctionContext.getArgument("Roughness"),
     metalness: eventsFunctionContext.getArgument("Metalness"),
     specularIntensity: eventsFunctionContext.getArgument("SpecularIntensity"),
     specularColor: eventsFunctionContext.getArgument("Specular"),
     flatShading: true
   });
 }
});
};
gdjs.evtsExt__Material3D__MakePhysics.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Material3D__MakePhysics.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Material3D__MakePhysics.GDObjectObjects1);
gdjs.evtsExt__Material3D__MakePhysics.userFunc0x179ee08(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Material3D__MakePhysics.func = function(runtimeScene, Object, Roughness, Metalness, color, SpecularIntensity, Specular, FlatShading, parentEventsFunctionContext) {
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
if (argName === "Roughness") return Roughness;
if (argName === "Metalness") return Metalness;
if (argName === "color") return color;
if (argName === "SpecularIntensity") return SpecularIntensity;
if (argName === "Specular") return Specular;
if (argName === "FlatShading") return FlatShading;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Material3D__MakePhysics.GDObjectObjects1.length = 0;

gdjs.evtsExt__Material3D__MakePhysics.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Material3D__MakePhysics.GDObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__Material3D__MakePhysics.registeredGdjsCallbacks = [];