
if (typeof gdjs.evtsExt__Advanced3D__LocalRotateSpeed !== "undefined") {
  gdjs.evtsExt__Advanced3D__LocalRotateSpeed.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Advanced3D__LocalRotateSpeed = {};
gdjs.evtsExt__Advanced3D__LocalRotateSpeed.GDObjectObjects1= [];
gdjs.evtsExt__Advanced3D__LocalRotateSpeed.GDObjectObjects2= [];


gdjs.evtsExt__Advanced3D__LocalRotateSpeed.mapOfGDgdjs_9546evtsExt_9595_9595Advanced3D_9595_9595LocalRotateSpeed_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Advanced3D__LocalRotateSpeed.GDObjectObjects1});
gdjs.evtsExt__Advanced3D__LocalRotateSpeed.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Advanced3D__LocalRotateSpeed.GDObjectObjects1);
{gdjs.evtsExt__Advanced3D__LocalRotateAngle.func(runtimeScene, gdjs.evtsExt__Advanced3D__LocalRotateSpeed.mapOfGDgdjs_9546evtsExt_9595_9595Advanced3D_9595_9595LocalRotateSpeed_9546GDObjectObjects1Objects, eventsFunctionContext.getBehaviorName("Capability3d"), eventsFunctionContext.getArgument("Axis"), eventsFunctionContext.getArgument("Speed") * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.evtsExt__Advanced3D__LocalRotateSpeed.func = function(runtimeScene, Object, Capability3d, Axis, Speed, parentEventsFunctionContext) {
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
if (argName === "Speed") return Speed;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Advanced3D__LocalRotateSpeed.GDObjectObjects1.length = 0;
gdjs.evtsExt__Advanced3D__LocalRotateSpeed.GDObjectObjects2.length = 0;

gdjs.evtsExt__Advanced3D__LocalRotateSpeed.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Advanced3D__LocalRotateSpeed.GDObjectObjects1.length = 0;
gdjs.evtsExt__Advanced3D__LocalRotateSpeed.GDObjectObjects2.length = 0;


return;
}

gdjs.evtsExt__Advanced3D__LocalRotateSpeed.registeredGdjsCallbacks = [];