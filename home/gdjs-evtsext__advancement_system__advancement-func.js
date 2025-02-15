
if (typeof gdjs.evtsExt__Advancement_system__Advancement !== "undefined") {
  gdjs.evtsExt__Advancement_system__Advancement.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Advancement_system__Advancement = {};
gdjs.evtsExt__Advancement_system__Advancement.GDObjectObjects1= [];
gdjs.evtsExt__Advancement_system__Advancement.GDObjectObjects2= [];


gdjs.evtsExt__Advancement_system__Advancement.mapOfGDgdjs_9546evtsExt_9595_9595Advancement_9595system_9595_9595Advancement_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Advancement_system__Advancement.GDObjectObjects1});
gdjs.evtsExt__Advancement_system__Advancement.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Advancement_system__Advancement.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Advancement_system__Advancement.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Advancement_system__Advancement.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).stopTween("Move", true);
}
}{for(var i = 0, len = gdjs.evtsExt__Advancement_system__Advancement.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Advancement_system__Advancement.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectPositionYTween2("Move", (gdjs.evtsExt__Advancement_system__Advancement.GDObjectObjects1[i].getY()) + (gdjs.evtsExt__Advancement_system__Advancement.GDObjectObjects1[i].getHeight()) + 8, "easeOutExpo", 0.5, false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.evtsExt__Advancement_system__Advancement.GDObjectObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Advancement_system__Advancement.mapOfGDgdjs_9546evtsExt_9595_9595Advancement_9595system_9595_9595Advancement_9546GDObjectObjects1Objects, 16, 16, "UI");
}{for(var i = 0, len = gdjs.evtsExt__Advancement_system__Advancement.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Advancement_system__Advancement.GDObjectObjects1[i].setX(-((gdjs.evtsExt__Advancement_system__Advancement.GDObjectObjects1[i].getWidth())));
}
}{for(var i = 0, len = gdjs.evtsExt__Advancement_system__Advancement.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Advancement_system__Advancement.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectPositionXTween2("Enter", 16, "easeOutExpo", 0.5, false);
}
}{for(var i = 0, len = gdjs.evtsExt__Advancement_system__Advancement.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Advancement_system__Advancement.GDObjectObjects1[i].ChangeDescription(eventsFunctionContext.getArgument("Description"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Advancement_system__Advancement.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Advancement_system__Advancement.GDObjectObjects1[i].ChangeTitle(eventsFunctionContext.getArgument("Title"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__Advancement_system__Advancement.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Advancement_system__Advancement.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectOpacityTween2("Exit", 0, "easeInExpo", 3, true);
}
}}

}


};

gdjs.evtsExt__Advancement_system__Advancement.func = function(runtimeScene, Object, Tween, Title, Description, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
"Tween": Tween
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Advancement_system"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Advancement_system"),
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
if (argName === "Title") return Title;
if (argName === "Description") return Description;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Advancement_system__Advancement.GDObjectObjects1.length = 0;
gdjs.evtsExt__Advancement_system__Advancement.GDObjectObjects2.length = 0;

gdjs.evtsExt__Advancement_system__Advancement.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Advancement_system__Advancement.GDObjectObjects1.length = 0;
gdjs.evtsExt__Advancement_system__Advancement.GDObjectObjects2.length = 0;


return;
}

gdjs.evtsExt__Advancement_system__Advancement.registeredGdjsCallbacks = [];