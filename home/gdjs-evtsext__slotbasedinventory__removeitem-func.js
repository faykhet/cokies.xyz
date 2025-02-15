
if (typeof gdjs.evtsExt__SlotBasedInventory__RemoveItem !== "undefined") {
  gdjs.evtsExt__SlotBasedInventory__RemoveItem.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SlotBasedInventory__RemoveItem = {};


gdjs.evtsExt__SlotBasedInventory__RemoveItem.userFunc0xad9f98 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const itemName = eventsFunctionContext.getArgument('itemName');
const bagName = eventsFunctionContext.getArgument('bagName');
let quantity = eventsFunctionContext.getArgument('quantity');

const bag = runtimeScene.getGame().getVariables().get('__SlotBasedInventory').getChild('Bags').getChild(bagName).toJSObject();
const item = runtimeScene.getGame().getVariables().get('__SlotBasedInventory').getChild('Items').getChild(itemName).toJSObject();


while (quantity > 0) {
    const foundIndex = bag.findLastIndex(slot => slot.name === itemName);

    if (foundIndex !== -1) {

        if (bag[foundIndex].quantity === 0) {
            bag[foundIndex].name = ''
            bag[foundIndex].attributes = {}
        } else if (quantity < bag[foundIndex].quantity) {
            bag[foundIndex].quantity -= quantity;
            quantity = 0;
        } else {
            quantity -= bag[foundIndex].quantity;
            bag[foundIndex].quantity = 0;
            bag[foundIndex].name = '';
            bag[foundIndex].attributes = {};
        }
    } else {
        break
    }
}


runtimeScene.getGame().getVariables().get('__SlotBasedInventory').getChild('Bags').getChild(bagName).fromJSObject(bag);

console.log(runtimeScene.getGame().getVariables().get('__SlotBasedInventory').getChild('Bags').getChild(bagName).toJSObject())
};
gdjs.evtsExt__SlotBasedInventory__RemoveItem.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__SlotBasedInventory__RemoveItem.userFunc0xad9f98(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__SlotBasedInventory__RemoveItem.func = function(runtimeScene, itemName, bagName, quantity, parentEventsFunctionContext) {
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
if (argName === "bagName") return bagName;
if (argName === "quantity") return quantity;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__SlotBasedInventory__RemoveItem.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__SlotBasedInventory__RemoveItem.registeredGdjsCallbacks = [];