
if (typeof gdjs.evtsExt__SlotBasedInventory__SetSlotAttributeText !== "undefined") {
  gdjs.evtsExt__SlotBasedInventory__SetSlotAttributeText.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SlotBasedInventory__SetSlotAttributeText = {};


gdjs.evtsExt__SlotBasedInventory__SetSlotAttributeText.userFunc0xa97a68 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const bagName = eventsFunctionContext.getArgument('bagName');
const slot = eventsFunctionContext.getArgument('slot');
const attributePath = eventsFunctionContext.getArgument('attribute');

const value = eventsFunctionContext.getArgument('Value');

function setValueByPath(attributes, path, value) {
  const keys = path.split('.');
  let currentObj = attributes;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!currentObj.hasOwnProperty(key) || typeof currentObj[key] !== 'object') {
      currentObj[key] = {};
    }
    currentObj = currentObj[key];
  }

  currentObj[keys[keys.length - 1]] = value;
}

const bag = runtimeScene.getGame().getVariables().get('__SlotBasedInventory').getChild('Bags').getChild(bagName).toJSObject();

setValueByPath(bag[slot].attributes, attributePath, value)

runtimeScene.getGame().getVariables().get('__SlotBasedInventory').getChild('Bags').getChild(bagName).fromJSObject(bag);


};
gdjs.evtsExt__SlotBasedInventory__SetSlotAttributeText.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__SlotBasedInventory__SetSlotAttributeText.userFunc0xa97a68(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__SlotBasedInventory__SetSlotAttributeText.func = function(runtimeScene, Value, bagName, slot, attribute, parentEventsFunctionContext) {
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
if (argName === "Value") return Value;
if (argName === "bagName") return bagName;
if (argName === "slot") return slot;
if (argName === "attribute") return attribute;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__SlotBasedInventory__SetSlotAttributeText.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__SlotBasedInventory__SetSlotAttributeText.registeredGdjsCallbacks = [];