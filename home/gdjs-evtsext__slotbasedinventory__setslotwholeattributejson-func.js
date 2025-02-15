
if (typeof gdjs.evtsExt__SlotBasedInventory__SetSlotWholeAttributeJSON !== "undefined") {
  gdjs.evtsExt__SlotBasedInventory__SetSlotWholeAttributeJSON.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SlotBasedInventory__SetSlotWholeAttributeJSON = {};


gdjs.evtsExt__SlotBasedInventory__SetSlotWholeAttributeJSON.userFunc0x159e548 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const bagName = eventsFunctionContext.getArgument('bagName');
const slot = eventsFunctionContext.getArgument('slot');
const value = eventsFunctionContext.getArgument('JSON');

const bag = runtimeScene.getGame().getVariables().get('__SlotBasedInventory').getChild('Bags').getChild(bagName).toJSObject();

bag[slot].attributes = JSON.parse(value);

runtimeScene.getGame().getVariables().get('__SlotBasedInventory').getChild('Bags').getChild(bagName).fromJSObject(bag);
};
gdjs.evtsExt__SlotBasedInventory__SetSlotWholeAttributeJSON.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__SlotBasedInventory__SetSlotWholeAttributeJSON.userFunc0x159e548(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__SlotBasedInventory__SetSlotWholeAttributeJSON.func = function(runtimeScene, bagName, slot, JSON, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SlotBasedInventory"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SlotBasedInventory"),
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
if (argName === "bagName") return bagName;
if (argName === "slot") return slot;
if (argName === "JSON") return JSON;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__SlotBasedInventory__SetSlotWholeAttributeJSON.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__SlotBasedInventory__SetSlotWholeAttributeJSON.registeredGdjsCallbacks = [];