
if (typeof gdjs.evtsExt__TextEntry__UpdateText !== "undefined") {
  gdjs.evtsExt__TextEntry__UpdateText.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__TextEntry__UpdateText = {};


gdjs.evtsExt__TextEntry__UpdateText.userFunc0x1e6d660 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
let prevText = eventsFunctionContext.getArgument('prevText');
const cursor = eventsFunctionContext.getArgument('cursor');

function removeCharacter(text, index) {
  if (index === -1) {
    return text.slice(0, -1);
  } else if (index >= 0 && index < text.length) {
    // If index is within the valid range, remove the character at that index
    return text.slice(0, index) + text.slice(index + 1);
  } else {
    // Invalid index, return the original text
    console.error("Invalid cursor index");
    return text;
  }
}

function addTextAtIndex(text, add, index) {
  if (index === -1) {
    // If index is -1, add the new text at the end
    return text + add;
  } else if (index >= 0 && index <= text.length) {
    // If index is within the valid range, add the new text at that index
    return text.slice(0, index) + add + text.slice(index);
  } else {
    // Invalid index, return the original text
    console.error("Invalid cursor index");
    return text;
  }
}

let keys = gdjs.__TextEntry.excuteThisFrame;
// console.log(keys);
for (const key of keys){
    if (key == 'Backspace'){
        prevText = removeCharacter(prevText, cursor);
    } else {
        prevText = addTextAtIndex(prevText, key, cursor);
    }
}

eventsFunctionContext.returnValue = prevText;
};
gdjs.evtsExt__TextEntry__UpdateText.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__TextEntry__UpdateText.userFunc0x1e6d660(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__TextEntry__UpdateText.func = function(runtimeScene, prevText, cursor, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TextEntry"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TextEntry"),
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
if (argName === "prevText") return prevText;
if (argName === "cursor") return cursor;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__TextEntry__UpdateText.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__TextEntry__UpdateText.registeredGdjsCallbacks = [];