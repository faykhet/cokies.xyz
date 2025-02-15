
if (typeof gdjs.evtsExt__Util30e__Conditional !== "undefined") {
  gdjs.evtsExt__Util30e__Conditional.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Util30e__Conditional = {};


gdjs.evtsExt__Util30e__Conditional.userFunc0x12fb290 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
let num1 = eventsFunctionContext.getArgument('first');
let num2 = eventsFunctionContext.getArgument('second');
let op = eventsFunctionContext.getArgument('operator');

function conditional(num1, op, num2) {
    switch (op) {
        case '>':
            return num1 > num2;
        case '<':
            return num1 < num2;
        case '>=':
            return num1 >= num2;
        case '<=':
            return num1 <= num2;
        case '==':
            return num1 == num2;
        case '===':
            return num1 === num2;
        case '!=':
            return num1 != num2;
        case '!==':
            return num1 !== num2;
        case '&&':
            return num1 && num2;
        case '||':
            return num1 || num2;
        default:
            return false;
    }
}

eventsFunctionContext.returnValue = conditional(num1, op, num2) ? 1 : 0;
};
gdjs.evtsExt__Util30e__Conditional.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Util30e__Conditional.userFunc0x12fb290(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Util30e__Conditional.func = function(runtimeScene, first, operator, second, parentEventsFunctionContext) {
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
if (argName === "first") return first;
if (argName === "operator") return operator;
if (argName === "second") return second;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Util30e__Conditional.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__Util30e__Conditional.registeredGdjsCallbacks = [];