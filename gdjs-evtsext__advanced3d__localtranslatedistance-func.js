
if (typeof gdjs.evtsExt__Advanced3D__LocalTranslateDistance !== "undefined") {
  gdjs.evtsExt__Advanced3D__LocalTranslateDistance.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Advanced3D__LocalTranslateDistance = {};
gdjs.evtsExt__Advanced3D__LocalTranslateDistance.forEachIndex2 = 0;

gdjs.evtsExt__Advanced3D__LocalTranslateDistance.forEachObjects2 = [];

gdjs.evtsExt__Advanced3D__LocalTranslateDistance.forEachTemporary2 = null;

gdjs.evtsExt__Advanced3D__LocalTranslateDistance.forEachTotalCount2 = 0;

gdjs.evtsExt__Advanced3D__LocalTranslateDistance.GDObjectObjects1= [];
gdjs.evtsExt__Advanced3D__LocalTranslateDistance.GDObjectObjects2= [];
gdjs.evtsExt__Advanced3D__LocalTranslateDistance.GDObjectObjects3= [];


gdjs.evtsExt__Advanced3D__LocalTranslateDistance.userFunc0xa7c748 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const Object2D = objects[0];
const Object3D = Object2D.get3DRendererObject();
const Axis = eventsFunctionContext.getArgument("Axis");
const Distance = eventsFunctionContext.getArgument("Distance");

Object3D.updateMatrixWorld(false);
const Elements = Object3D.matrixWorld.elements;
let WorldDirection = new THREE.Vector3();
if (Axis == "X") {
    WorldDirection.set(Elements[0], Elements[1], Elements[2]);
    WorldDirection = WorldDirection.normalize();
} else if (Axis == "Y") {
    WorldDirection.set(Elements[4], Elements[5], Elements[6]);
    WorldDirection = WorldDirection.normalize();
} else {
    Object3D.getWorldDirection(WorldDirection);
}
Object2D.setX(Object2D.getX() + (WorldDirection.x * Distance));
Object2D.setY(Object2D.getY() + (WorldDirection.y * Distance * -1));
Object2D.setZ(Object2D.getZ() + (WorldDirection.z * Distance));
};
gdjs.evtsExt__Advanced3D__LocalTranslateDistance.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Advanced3D__LocalTranslateDistance.GDObjectObjects2, gdjs.evtsExt__Advanced3D__LocalTranslateDistance.GDObjectObjects3);


var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Advanced3D__LocalTranslateDistance.GDObjectObjects3);
gdjs.evtsExt__Advanced3D__LocalTranslateDistance.userFunc0xa7c748(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__Advanced3D__LocalTranslateDistance.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Advanced3D__LocalTranslateDistance.GDObjectObjects1);

for (gdjs.evtsExt__Advanced3D__LocalTranslateDistance.forEachIndex2 = 0;gdjs.evtsExt__Advanced3D__LocalTranslateDistance.forEachIndex2 < gdjs.evtsExt__Advanced3D__LocalTranslateDistance.GDObjectObjects1.length;++gdjs.evtsExt__Advanced3D__LocalTranslateDistance.forEachIndex2) {
gdjs.evtsExt__Advanced3D__LocalTranslateDistance.GDObjectObjects2.length = 0;


gdjs.evtsExt__Advanced3D__LocalTranslateDistance.forEachTemporary2 = gdjs.evtsExt__Advanced3D__LocalTranslateDistance.GDObjectObjects1[gdjs.evtsExt__Advanced3D__LocalTranslateDistance.forEachIndex2];
gdjs.evtsExt__Advanced3D__LocalTranslateDistance.GDObjectObjects2.push(gdjs.evtsExt__Advanced3D__LocalTranslateDistance.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__Advanced3D__LocalTranslateDistance.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__Advanced3D__LocalTranslateDistance.func = function(runtimeScene, Object, Capability3d, Axis, Distance, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
"Capability3d": Capability3d
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
if (argName === "Distance") return Distance;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Advanced3D__LocalTranslateDistance.GDObjectObjects1.length = 0;
gdjs.evtsExt__Advanced3D__LocalTranslateDistance.GDObjectObjects2.length = 0;
gdjs.evtsExt__Advanced3D__LocalTranslateDistance.GDObjectObjects3.length = 0;

gdjs.evtsExt__Advanced3D__LocalTranslateDistance.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Advanced3D__LocalTranslateDistance.GDObjectObjects1.length = 0;
gdjs.evtsExt__Advanced3D__LocalTranslateDistance.GDObjectObjects2.length = 0;
gdjs.evtsExt__Advanced3D__LocalTranslateDistance.GDObjectObjects3.length = 0;


return;
}

gdjs.evtsExt__Advanced3D__LocalTranslateDistance.registeredGdjsCallbacks = [];