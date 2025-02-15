
if (typeof gdjs.evtsExt__Material3D__ChangeTillingOffset !== "undefined") {
  gdjs.evtsExt__Material3D__ChangeTillingOffset.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Material3D__ChangeTillingOffset = {};
gdjs.evtsExt__Material3D__ChangeTillingOffset.GDObjectObjects1= [];


gdjs.evtsExt__Material3D__ChangeTillingOffset.userFunc0x1f7a2c0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
objects.forEach(object => {
    // Access the Three.js 3D object
    const threeObject = object.get3DRendererObject();
    
    if (threeObject) {
        // Handle both single and multiple materials
        const materials = Array.isArray(threeObject.material) ? threeObject.material : [threeObject.material];
        
        materials.forEach(material => {
            // Check if material has a texture map
            const texture = material.map;

            if (texture) {
                // Get offset values from parameters
                const offsetX = eventsFunctionContext.getArgument("X");
                const offsetY = eventsFunctionContext.getArgument("Y");

                // Set the offset
                texture.offset.set(offsetX, offsetY);

                // Update the texture
                texture.needsUpdate = true;
            } else {
                console.warn(`Material of object "${object.getName()}" has no texture map.`);
            }
        });
    } else {
        console.warn(`The object "${object.getName()}" does not have a valid 3D renderer object.`);
    }
});
};
gdjs.evtsExt__Material3D__ChangeTillingOffset.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Material3D__ChangeTillingOffset.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Material3D__ChangeTillingOffset.GDObjectObjects1);
gdjs.evtsExt__Material3D__ChangeTillingOffset.userFunc0x1f7a2c0(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Material3D__ChangeTillingOffset.func = function(runtimeScene, Object, X, Y, parentEventsFunctionContext) {
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
if (argName === "X") return X;
if (argName === "Y") return Y;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Material3D__ChangeTillingOffset.GDObjectObjects1.length = 0;

gdjs.evtsExt__Material3D__ChangeTillingOffset.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Material3D__ChangeTillingOffset.GDObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__Material3D__ChangeTillingOffset.registeredGdjsCallbacks = [];