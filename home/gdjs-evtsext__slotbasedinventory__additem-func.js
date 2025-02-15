
if (typeof gdjs.evtsExt__SlotBasedInventory__AddItem !== "undefined") {
  gdjs.evtsExt__SlotBasedInventory__AddItem.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SlotBasedInventory__AddItem = {};


gdjs.evtsExt__SlotBasedInventory__AddItem.userFunc0xad9f98 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const itemName = eventsFunctionContext.getArgument('itemName');
const bagName = eventsFunctionContext.getArgument('bagName');
let quantity = eventsFunctionContext.getArgument('quantity');
const attributesJSON = eventsFunctionContext.getArgument('attributes');
const extraBagName = eventsFunctionContext.getArgument('extraBag');
const addMoreSlots = eventsFunctionContext.getArgument('addMoreSlots');

const bag = runtimeScene.getGame().getVariables().get('__SlotBasedInventory').getChild('Bags').getChild(bagName).toJSObject();
const item = runtimeScene.getGame().getVariables().get('__SlotBasedInventory').getChild('Items').getChild(itemName).toJSObject();

let attributes = item.attributes;
if (attributesJSON !== '') attributes = JSON.parse(attributesJSON);

let extraBag;
if (extraBagName !== '') extraBag = runtimeScene.getGame().getVariables().get('__SlotBasedInventory').getChild('Bags').getChild(extraBagName).toJSObject();


while (quantity > 0) {
    const emptyIndex = bag.findIndex(slot => slot.quantity === 0);
    const itemIndex = bag.findIndex(slot => slot.name === itemName && JSON.stringify(slot.attributes) == JSON.stringify(attributes) && slot.quantity > 0 && slot.quantity < item.max);
    const foundIndex = (itemIndex !== -1) ? itemIndex : emptyIndex;

    if (foundIndex !== -1) {

        let canAdd = item.max - bag[foundIndex].quantity

        if (bag[foundIndex].quantity === 0) {
            bag[foundIndex].name = item.name
            bag[foundIndex].attributes = attributes
        }
        
        if (quantity <= canAdd) {
            bag[foundIndex].quantity += quantity;
            quantity = 0;
        } else {
            bag[foundIndex].quantity = item.max;
            quantity -= canAdd;
        }
    } else if (addMoreSlots) {
        bag.push({ 'name': '', 'quantity': 0, 'attributes': {} });
    } else {
        break
    }
}

if (extraBagName !== '' && quantity > 0) {
    while (quantity > 0) {
        const emptyIndex = extraBag.findIndex(slot => slot.quantity === 0);
        const itemIndex = extraBag.findIndex(slot => slot.name === itemName && JSON.stringify(slot.attributes) == JSON.stringify(attributes) && slot.quantity > 0 && slot.quantity < item.max);
        const foundIndex = (emptyIndex !== -1) ? emptyIndex : itemIndex;

        if (foundIndex !== -1) {

            if (extraBag[foundIndex].quantity === 0) {
                extraBag[foundIndex].name = item.name
                extraBag[foundIndex].attributes = attributes
            }

            let canAdd = item.max - extraBag[foundIndex].quantity

            if (quantity <= canAdd) {
                extraBag[foundIndex].quantity += quantity;
                quantity = 0;
            } else {
                extraBag[foundIndex].quantity = item.max;
                quantity -= canAdd;
            }
        } else {
            extraBag.push({ 'name': '', 'quantity': 0, 'attributes': {} });
        }
    }
}

runtimeScene.getGame().getVariables().get('__SlotBasedInventory').getChild('Bags').getChild(bagName).fromJSObject(bag);
if (extraBagName !== '') runtimeScene.getGame().getVariables().get('__SlotBasedInventory').getChild('Bags').getChild(extraBagName).fromJSObject(extraBag);

console.log(runtimeScene.getGame().getVariables().get('__SlotBasedInventory').getChild('Bags').getChild(bagName).toJSObject(), runtimeScene.getGame().getVariables().get('__SlotBasedInventory').getChild('Bags').getChild(extraBagName).toJSObject())
};
gdjs.evtsExt__SlotBasedInventory__AddItem.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__SlotBasedInventory__AddItem.userFunc0xad9f98(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__SlotBasedInventory__AddItem.func = function(runtimeScene, itemName, bagName, quantity, attributes, addMoreSlots, extraBag, parentEventsFunctionContext) {
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
if (argName === "attributes") return attributes;
if (argName === "addMoreSlots") return addMoreSlots;
if (argName === "extraBag") return extraBag;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__SlotBasedInventory__AddItem.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__SlotBasedInventory__AddItem.registeredGdjsCallbacks = [];