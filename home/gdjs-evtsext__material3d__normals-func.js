
if (typeof gdjs.evtsExt__Material3D__Normals !== "undefined") {
  gdjs.evtsExt__Material3D__Normals.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Material3D__Normals = {};
gdjs.evtsExt__Material3D__Normals.GDObjectObjects1= [];


gdjs.evtsExt__Material3D__Normals.userFunc0xadf168 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
objects.forEach(object => {
    const threeObject = object.get3DRendererObject();
    
    if (threeObject) {
        const normalMapTexture = eventsFunctionContext.getArgument("Texture");
        const materialIndex = eventsFunctionContext.getArgument("Face");
        
        // Handle materials (for cube, material should be an array of 6 materials)
        if (Array.isArray(threeObject.material) && threeObject.material[materialIndex]) {
            let material = threeObject.material[materialIndex];
            
            // Convert to MeshStandardMaterial if needed
            if (!(material instanceof THREE.MeshStandardMaterial)) {
                const oldMap = material.map;
                material = new THREE.MeshStandardMaterial({
                    map: oldMap,
                    roughness: 1.0,
                    metalness: 0.0
                });
                threeObject.material[materialIndex] = material;
            }
            
            // Create and apply the normal map
            if (normalMapTexture) {
                const texture = gdjs.getTexture(normalMapTexture);
                const normalMap = new THREE.Texture(texture.getImage());
                
                // Set texture parameters
                normalMap.wrapS = THREE.RepeatWrapping;
                normalMap.wrapT = THREE.RepeatWrapping;
                normalMap.needsUpdate = true;
                
                // Apply to material
                material.normalMap = normalMap;
                material.normalScale.set(
                    eventsFunctionContext.getArgument("NormalStrength"),
                    eventsFunctionContext.getArgument("NormalStrength")
                );
                material.needsUpdate = true;
            }
        } else {
            console.warn('Material array or index not valid');
        }
    }
});
};
gdjs.evtsExt__Material3D__Normals.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


var objects = [];
gdjs.evtsExt__Material3D__Normals.userFunc0xadf168(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Material3D__Normals.func = function(runtimeScene, Object, Face, Texture, NormalStrength, parentEventsFunctionContext) {
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
if (argName === "Face") return Face;
if (argName === "Texture") return Texture;
if (argName === "NormalStrength") return NormalStrength;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Material3D__Normals.GDObjectObjects1.length = 0;

gdjs.evtsExt__Material3D__Normals.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Material3D__Normals.GDObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__Material3D__Normals.registeredGdjsCallbacks = [];