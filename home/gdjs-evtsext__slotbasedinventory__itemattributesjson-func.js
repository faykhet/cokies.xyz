
if (typeof gdjs.evtsExt__SlotBasedInventory__ItemAttributesJSON !== "undefined") {
  gdjs.evtsExt__SlotBasedInventory__ItemAttributesJSON.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SlotBasedInventory__ItemAttributesJSON = {};


gdjs.evtsExt__SlotBasedInventory__ItemAttributesJSON.userFunc0xad9300 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const itemName = eventsFunctionContext.getArgument('itemName');

eventsFunctionContext.returnValue = JSON.stringify(runtimeScene.getGame().getVariables().get('__SlotBasedInventory').getChild('Items').getChild(itemName).toJSObject().attributes);

};
gdjs.evtsExt__SlotBasedInventory__ItemAttributesJSON.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__SlotBasedInventory__ItemAttributesJSON.userFunc0xad9300(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__SlotBasedInventory__ItemAttributesJSON.func = function(runtimeScene, itemName, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__SlotBasedInventory__ItemAttributesJSON.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__SlotBasedInventory__ItemAttributesJSON.registeredGdjsCallbacks = [];