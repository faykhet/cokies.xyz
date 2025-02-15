
if (typeof gdjs.evtsExt__Material3D__MakeWireframeGLB !== "undefined") {
  gdjs.evtsExt__Material3D__MakeWireframeGLB.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Material3D__MakeWireframeGLB = {};
gdjs.evtsExt__Material3D__MakeWireframeGLB.GDObjectObjects1= [];


gdjs.evtsExt__Material3D__MakeWireframeGLB.userFunc0xadf168 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
objects.forEach(object => {
    const threeObject = object.get3DRendererObject();

    if (threeObject) {
        threeObject.traverse(child => {
            if (child.isMesh) {
                const material = child.material;
                material.wireframe = true;
                material.color = new THREE.Color(gdjs.rgbOrHexStringToNumber(eventsFunctionContext.getArgument("Color")));
                material.transparent = true;
                material.opacity = eventsFunctionContext.getArgument("Opacity");

                child.material = material;
            }
        });
    }
});

};
gdjs.evtsExt__Material3D__MakeWireframeGLB.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Material3D__MakeWireframeGLB.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Material3D__MakeWireframeGLB.GDObjectObjects1);
gdjs.evtsExt__Material3D__MakeWireframeGLB.userFunc0xadf168(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Material3D__MakeWireframeGLB.func = function(runtimeScene, Object, Color, Opacity, parentEventsFunctionContext) {
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
if (argName === "Color") return Color;
if (argName === "Opacity") return Opacity;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Material3D__MakeWireframeGLB.GDObjectObjects1.length = 0;

gdjs.evtsExt__Material3D__MakeWireframeGLB.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Material3D__MakeWireframeGLB.GDObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__Material3D__MakeWireframeGLB.registeredGdjsCallbacks = [];