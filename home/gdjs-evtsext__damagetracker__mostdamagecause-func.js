
if (typeof gdjs.evtsExt__DamageTracker__MostDamageCause !== "undefined") {
  gdjs.evtsExt__DamageTracker__MostDamageCause.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DamageTracker__MostDamageCause = {};


gdjs.evtsExt__DamageTracker__MostDamageCause.userFunc0x1ede4d0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const container = eventsFunctionContext.getArgument('container');
let containers = runtimeScene.getGame().getVariables().get('__DamageTracker').getChild('containers').toJSObject();

if (typeof containers[container] == 'object') eventsFunctionContext.returnValue = containers[container].reduce((acc, damage) => damage.damage > acc.damage ? damage : acc, {damage:0}).cause;

};
gdjs.evtsExt__DamageTracker__MostDamageCause.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DamageTracker__MostDamageCause.userFunc0x1ede4d0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__DamageTracker__MostDamageCause.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__DamageTracker__MostDamageCause.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__DamageTracker__MostDamageCause.func = function(runtimeScene, container, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__DamageTracker__MostDamageCause.eventsList1(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__DamageTracker__MostDamageCause.registeredGdjsCallbacks = [];