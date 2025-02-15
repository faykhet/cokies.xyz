
if (typeof gdjs.evtsExt__DamageTracker__StoreDamage !== "undefined") {
  gdjs.evtsExt__DamageTracker__StoreDamage.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DamageTracker__StoreDamage = {};


gdjs.evtsExt__DamageTracker__StoreDamage.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("__DamageTracker").getChild("temp").getChild("damage").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("damage")) || 0 : 0));
}{runtimeScene.getScene().getVariables().get("__DamageTracker").getChild("temp").getChild("cooldown").setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("cooldown")) || 0 : 0));
}{runtimeScene.getScene().getVariables().get("__DamageTracker").getChild("temp").getChild("cause").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("cause") : ""));
}{runtimeScene.getScene().getVariables().get("__DamageTracker").getChild("temp").getChild("extraData").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("extraData") : ""));
}{gdjs.evtTools.variable.variablePushCopy(runtimeScene.getGame().getVariables().get("__DamageTracker").getChild("containers").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("container") : "")), runtimeScene.getScene().getVariables().get("__DamageTracker").getChild("temp"));
}}

}


};

gdjs.evtsExt__DamageTracker__StoreDamage.func = function(runtimeScene, container, damage, cause, cooldown, extraData, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DamageTracker"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DamageTracker"),
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
if (argName === "container") return container;
if (argName === "damage") return damage;
if (argName === "cause") return cause;
if (argName === "cooldown") return cooldown;
if (argName === "extraData") return extraData;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__DamageTracker__StoreDamage.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__DamageTracker__StoreDamage.registeredGdjsCallbacks = [];