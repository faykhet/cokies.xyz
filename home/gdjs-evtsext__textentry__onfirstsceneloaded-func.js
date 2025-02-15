
if (typeof gdjs.evtsExt__TextEntry__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__TextEntry__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__TextEntry__onFirstSceneLoaded = {};


gdjs.evtsExt__TextEntry__onFirstSceneLoaded.userFunc0x1e6f900 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs.__TextEntry = {};
gdjs.__TextEntry.excuteThisFrame = [];

const pressHandler = function (evt) {
    evt = evt || window.event;
    const charCode = evt.which || evt.keyCode;
    const charTyped = String.fromCharCode(charCode);
    if (
        charTyped !== undefined &&
        // Skip some non-displayable characters
        charCode !== 8
    ) {
        // On Firefox, backspace is considered as a character
        gdjs.__TextEntry.excuteThisFrame.push(charTyped);
    }
};

const downHandler = function (evt) {
    evt = evt || window.event;
    const charCode = evt.which || evt.keyCode;

    if (charCode === 8) {
        gdjs.__TextEntry.excuteThisFrame.push('Backspace');
    }
};

document.addEventListener('keypress', pressHandler);
document.addEventListener('keydown', downHandler);
};
gdjs.evtsExt__TextEntry__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__TextEntry__onFirstSceneLoaded.userFunc0x1e6f900(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__TextEntry__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__TextEntry__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__TextEntry__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__TextEntry__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__TextEntry__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__TextEntry__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__TextEntry__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);
