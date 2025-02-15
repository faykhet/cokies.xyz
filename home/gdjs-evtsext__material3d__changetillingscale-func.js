
if (typeof gdjs.evtsExt__Material3D__ChangeTillingScale !== "undefined") {
  gdjs.evtsExt__Material3D__ChangeTillingScale.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Material3D__ChangeTillingScale = {};
gdjs.evtsExt__Material3D__ChangeTillingScale.GDObjectObjects1= [];


gdjs.evtsExt__Material3D__ChangeTillingScale.userFunc0x1f7a2c0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
objects.forEach(object => {
    // Access the Three.js 3D object for the GDevelop 3D object
    const threeObject = object.get3DRendererObject();
    
    if (threeObject) {
        // Ensure the object has a valid material
        const materials = Array.isArray(threeObject.material) ? threeObject.material : [threeObject.material];
        
        materials.forEach(material => {
            // Check if any texture map is present
            const texture = material.map

            if (texture) {
                // Set the tiling size for the texture
                const tilingX = 1 /eventsFunctionContext.getArgument("X");
                const tilingY = 1/eventsFunctionContext.getArgument("Y");
                texture.repeat.set(tilingX, tilingY);

                // Enable texture wrapping to allow repeating
                texture.wrapS = THREE.RepeatWrapping; // Horizontal wrapping
                texture.wrapT = THREE.RepeatWrapping; // Vertical wrapping

                // Update the texture to apply changes
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
gdjs.evtsExt__Material3D__ChangeTillingScale.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Material3D__ChangeTillingScale.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Material3D__ChangeTillingScale.GDObjectObjects1);
gdjs.evtsExt__Material3D__ChangeTillingScale.userFunc0x1f7a2c0(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Material3D__ChangeTillingScale.func = function(runtimeScene, Object, X, Y, parentEventsFunctionContext) {
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

gdjs.evtsExt__Material3D__ChangeTillingScale.GDObjectObjects1.length = 0;

gdjs.evtsExt__Material3D__ChangeTillingScale.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Material3D__ChangeTillingScale.GDObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__Material3D__ChangeTillingScale.registeredGdjsCallbacks = [];