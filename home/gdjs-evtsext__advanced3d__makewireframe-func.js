
if (typeof gdjs.evtsExt__Advanced3D__MakeWireframe !== "undefined") {
  gdjs.evtsExt__Advanced3D__MakeWireframe.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Advanced3D__MakeWireframe = {};
gdjs.evtsExt__Advanced3D__MakeWireframe.GDObjectObjects1= [];


gdjs.evtsExt__Advanced3D__MakeWireframe.userFunc0xdede88 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
// The `objects` parameter automatically includes objects referenced in this JavaScript event
objects.forEach(object => {
    // Access the Three.js 3D object for this GDevelop 3D object
    const threeObject = object.get3DRendererObject();

    if (threeObject) {
        // Apply a wireframe material to the object
        threeObject.material = new THREE.MeshBasicMaterial({
            color: new THREE.Color(gdjs.rgbOrHexStringToNumber(eventsFunctionContext.getArgument("Color"))), // Set the wireframe color (white in this case)
            wireframe: true, // Enable wireframe mode
            transparent: true,
            opacity: eventsFunctionContext.getArgument("Opacity")
        });
    }
});

};
gdjs.evtsExt__Advanced3D__MakeWireframe.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Advanced3D__MakeWireframe.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Advanced3D__MakeWireframe.GDObjectObjects1);
gdjs.evtsExt__Advanced3D__MakeWireframe.userFunc0xdede88(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Advanced3D__MakeWireframe.func = function(runtimeScene, Object, Color, Opacity, parentEventsFunctionContext) {
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
if (argName === "Color") return Color;
if (argName === "Opacity") return Opacity;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Advanced3D__MakeWireframe.GDObjectObjects1.length = 0;

gdjs.evtsExt__Advanced3D__MakeWireframe.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Advanced3D__MakeWireframe.GDObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__Advanced3D__MakeWireframe.registeredGdjsCallbacks = [];