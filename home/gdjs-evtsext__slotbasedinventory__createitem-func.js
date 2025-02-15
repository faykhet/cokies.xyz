
if (typeof gdjs.evtsExt__SlotBasedInventory__CreateItem !== "undefined") {
  gdjs.evtsExt__SlotBasedInventory__CreateItem.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SlotBasedInventory__CreateItem = {};


gdjs.evtsExt__SlotBasedInventory__CreateItem.userFunc0x1d97018 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const itemName = eventsFunctionContext.getArgument('itemName');
const maxQuantity = eventsFunctionContext.getArgument('maxQuantity');
const attributes = eventsFunctionContext.getArgument('attributes');
const item = {'name': itemName, 'max': maxQuantity, 'attributes': (attributes === '') ? {} : JSON.parse(attributes)}

runtimeScene.getGame().getVariables().get('__SlotBasedInventory').getChild('Items').getChild(itemName).fromJSObject(item);

//console.log(runtimeScene.getGame().getVariables().get('__SlotBasedInventory').getChild('Items').getChild(itemName).toJSObject());
};
gdjs.evtsExt__SlotBasedInventory__CreateItem.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__SlotBasedInventory__CreateItem.userFunc0x1d97018(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__SlotBasedInventory__CreateItem.func = function(runtimeScene, itemName, maxQuantity, attributes, parentEventsFunctionContext) {
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
if (argName === "itemName") return itemName;
if (argName === "maxQuantity") return maxQuantity;
if (argName === "attributes") return attributes;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__SlotBasedInventory__CreateItem.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__SlotBasedInventory__CreateItem.registeredGdjsCallbacks = [];