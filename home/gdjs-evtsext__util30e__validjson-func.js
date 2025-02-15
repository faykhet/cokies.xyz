
if (typeof gdjs.evtsExt__Util30e__ValidJSON !== "undefined") {
  gdjs.evtsExt__Util30e__ValidJSON.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Util30e__ValidJSON = {};


gdjs.evtsExt__Util30e__ValidJSON.userFunc0x14877a0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
let json = eventsFunctionContext.getArgument('json');

function isValidJSON(jsonString) {
    try {
        // ATTEMPT TO PARSE THE STRING AS JSON
        JSON.parse(jsonString);
        return jsonString; // VALID JSON
    } catch (error) {
        return "0"; // INVALID JSON
    }
}

eventsFunctionContext.returnValue = isValidJSON(json);
};
gdjs.evtsExt__Util30e__ValidJSON.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Util30e__ValidJSON.userFunc0x14877a0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Util30e__ValidJSON.func = function(runtimeScene, json, parentEventsFunctionContext) {
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
if (argName === "json") return json;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Util30e__ValidJSON.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Util30e__ValidJSON.registeredGdjsCallbacks = [];