
if (typeof gdjs.evtsExt__Util30e__PleaseNumber !== "undefined") {
  gdjs.evtsExt__Util30e__PleaseNumber.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Util30e__PleaseNumber = {};


gdjs.evtsExt__Util30e__PleaseNumber.userFunc0x16d3dc8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
let value = eventsFunctionContext.getArgument('value');
function pleaseNumber(input) {
    if (typeof input === 'boolean') {
        return input ? 1 : 0;
    }

    if (typeof input === 'string') {
        // If the string contains "true", return 1
        if (input.toLowerCase().includes('true')) {
            return 1;
        }

        // Try to find the first valid number (positive or negative)
        const match = input.match(/[-+]?\d*\.?\d+$/);
        if (match) {
            return parseFloat(match[0]);
        }
    }

    // If it's a number, return it directly
    if (typeof input === 'number') {
        return input;
    }

    // If it's anything else, return NaN (invalid input case)
    return 0;
}

eventsFunctionContext.returnValue = pleaseNumber(value);

};
gdjs.evtsExt__Util30e__PleaseNumber.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Util30e__PleaseNumber.userFunc0x16d3dc8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Util30e__PleaseNumber.func = function(runtimeScene, value, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Util30e"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Util30e"),
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
if (argName === "value") return value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Util30e__PleaseNumber.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__Util30e__PleaseNumber.registeredGdjsCallbacks = [];