
if (typeof gdjs.evtsExt__SlotBasedInventory__MoveItem !== "undefined") {
  gdjs.evtsExt__SlotBasedInventory__MoveItem.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SlotBasedInventory__MoveItem = {};


gdjs.evtsExt__SlotBasedInventory__MoveItem.userFunc0x15a1528 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const slot1 = eventsFunctionContext.getArgument('slot1');
const slot2 = eventsFunctionContext.getArgument('slot2');
const bagName1 = eventsFunctionContext.getArgument('bag1');
const bagName2 = eventsFunctionContext.getArgument('bag2');
const replace = eventsFunctionContext.getArgument('replace');

const bag1 = runtimeScene.getGame().getVariables().get('__SlotBasedInventory').getChild('Bags').getChild(bagName1).toJSObject();
const bag2 = runtimeScene.getGame().getVariables().get('__SlotBasedInventory').getChild('Bags').getChild(bagName2).toJSObject();

const item2 = runtimeScene.getGame().getVariables().get('__SlotBasedInventory').getChild('Items').getChild(bag2[slot2].name).toJSObject();

if (!replace && (slot1 != slot2 || bagName1 != bagName2) && bag1[slot1].name === bag2[slot2].name && JSON.stringify(bag1[slot1].attributes) == JSON.stringify(bag2[slot2].attributes) && bag2[slot2].quantity > 0) {
    let canAdd = item2.max - bag2[slot2].quantity
    if (bag1[slot1].quantity <= canAdd) {
            bag2[slot2].quantity += bag1[slot1].quantity;
            if (bagName1 === bagName2) bag2[slot1].quantity = 0;
            bag1[slot1].quantity = 0;
        } else {
            bag2[slot2].quantity = item2.max;
            if (bagName1 === bagName2) bag2[slot1].quantity -= canAdd;
            bag1[slot1].quantity -= canAdd;
        }
} else {
    const temp = bag1[slot1];
    bag1[slot1] = bag2[slot2];
    if (bagName1 === bagName2) bag2[slot1] = bag2[slot2]
    bag2[slot2] = temp;
}

runtimeScene.getGame().getVariables().get('__SlotBasedInventory').getChild('Bags').getChild(bagName2).fromJSObject(bag2);
if (bagName1 != bagName2) runtimeScene.getGame().getVariables().get('__SlotBasedInventory').getChild('Bags').getChild(bagName1).fromJSObject(bag1);

// console.log(runtimeScene.getGame().getVariables().get('__SlotBasedInventory').getChild('Bags').getChild(bagName).toJSObject(), runtimeScene.getGame().getVariables().get('__SlotBasedInventory').getChild('Bags').getChild(extraBagName).toJSObject())
};
gdjs.evtsExt__SlotBasedInventory__MoveItem.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__SlotBasedInventory__MoveItem.userFunc0x15a1528(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__SlotBasedInventory__MoveItem.func = function(runtimeScene, slot1, bag1, slot2, bag2, replace, parentEventsFunctionContext) {
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
if (argName === "slot1") return slot1;
if (argName === "bag1") return bag1;
if (argName === "slot2") return slot2;
if (argName === "bag2") return bag2;
if (argName === "replace") return replace;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__SlotBasedInventory__MoveItem.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__SlotBasedInventory__MoveItem.registeredGdjsCallbacks = [];