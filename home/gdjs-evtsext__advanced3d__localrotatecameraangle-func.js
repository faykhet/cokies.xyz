
if (typeof gdjs.evtsExt__Advanced3D__LocalRotateCameraAngle !== "undefined") {
  gdjs.evtsExt__Advanced3D__LocalRotateCameraAngle.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Advanced3D__LocalRotateCameraAngle = {};


gdjs.evtsExt__Advanced3D__LocalRotateCameraAngle.userFunc0x972f50 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const Axis = eventsFunctionContext.getArgument("Axis");
const Angle = eventsFunctionContext.getArgument("Angle");
const Layer = eventsFunctionContext.getArgument("Layer");
// const CameraNumber = eventsFunctionContext.getArgument("CameraNumber");

const Camera3D = runtimeScene.getLayer(Layer).getRenderer().getThreeCamera();
if (!Camera3D) {
    return;
}
if (Axis == "X") {
    Camera3D.rotateX(gdjs.toRad(-Angle));
} else if (Axis == "Y") {
    Camera3D.rotateY(gdjs.toRad(Angle));
} else {
    Camera3D.rotateZ(gdjs.toRad(-Angle));
}
runtimeScene.getLayer(Layer).setCameraRotation(gdjs.toDegrees(-Camera3D.rotation.z));
};
gdjs.evtsExt__Advanced3D__LocalRotateCameraAngle.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


var objects = [];
gdjs.evtsExt__Advanced3D__LocalRotateCameraAngle.userFunc0x972f50(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Advanced3D__LocalRotateCameraAngle.func = function(runtimeScene, Axis, Angle, Layer, CameraNumber, parentEventsFunctionContext) {
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
if (argName === "Angle") return Angle;
if (argName === "Layer") return Layer;
if (argName === "CameraNumber") return CameraNumber;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Advanced3D__LocalRotateCameraAngle.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__Advanced3D__LocalRotateCameraAngle.registeredGdjsCallbacks = [];