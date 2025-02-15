
if (typeof gdjs.evtsExt__Util30e__FormatedTimer !== "undefined") {
  gdjs.evtsExt__Util30e__FormatedTimer.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Util30e__FormatedTimer = {};


gdjs.evtsExt__Util30e__FormatedTimer.userFunc0x16d3dc8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
function formatDuration(seconds) {
    if (seconds <= 0) return "Timer has stopped" 
    const months = Math.floor(seconds / (60 * 60 * 24 * 30));
    seconds -= months * 60 * 60 * 24 * 30;
    const days = Math.floor(seconds / (60 * 60 * 24));
    seconds -= days * 60 * 60 * 24;
    const hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
    const minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;

    const paddedHours = String(hours).padStart(2, '0');
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');

    let result = "";

    if (months > 0) result += `${months} ${months == 1 ? 'month' : 'months'} `
    if (days > 0) result += `${days} ${days == 1 ? 'day' : 'days'} `
    if (hours > 0) result +=  `${paddedHours}:${paddedMinutes}:${paddedSeconds}`
    else if (minutes > 0) result +=  `${paddedMinutes}:${paddedSeconds}`
    else result +=  `${seconds} ${days == 1 ? 'second' : 'seconds'}`
    result += ' left'
    

    return result;
}

eventsFunctionContext.returnValue = formatDuration(eventsFunctionContext.getArgument('seconds'))

};
gdjs.evtsExt__Util30e__FormatedTimer.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Util30e__FormatedTimer.userFunc0x16d3dc8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Util30e__FormatedTimer.func = function(runtimeScene, seconds, parentEventsFunctionContext) {
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
if (argName === "seconds") return seconds;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Util30e__FormatedTimer.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Util30e__FormatedTimer.registeredGdjsCallbacks = [];