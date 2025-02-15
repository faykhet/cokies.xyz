
if (typeof gdjs.evtsExt__TriggerOncePerObject__TriggerOnce !== "undefined") {
  gdjs.evtsExt__TriggerOncePerObject__TriggerOnce.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__TriggerOncePerObject__TriggerOnce = {};
gdjs.evtsExt__TriggerOncePerObject__TriggerOnce.GDObjectObjects1= [];


gdjs.evtsExt__TriggerOncePerObject__TriggerOnce.userFunc0x1eddc98 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const lists = eventsFunctionContext.getObjectsLists("Object").items;

for (const listName in lists) {
    const list = lists[listName];
    const len = list.length;
    let k = 0;
    for (let i = 0; i < len; i++) {
        const object = list[i];
        if (!object.t) {
            let stop = false;
            object.t = new gdjs.OnceTriggers();
            runtimeScene.getAsyncTasksManager().addTask(new class Trigger extends gdjs.AsyncTask {
                update() {
                    object.t.startNewFrame();
                    return stop;
                }
            }, () => {});
            object.registerDestroyCallback(() => { stop = true; })
        }
        /** @type {gdjs.OnceTriggers} */
        const t = object.t;
        if (t.triggerOnce(eventsFunctionContext.getArgument("TriggerOnceID"))) {
            list[k++] = object;
            eventsFunctionContext.returnValue=true;
        }
    }
    list.length = k;
}

};
gdjs.evtsExt__TriggerOncePerObject__TriggerOnce.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__TriggerOncePerObject__TriggerOnce.userFunc0x1eddc98(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__TriggerOncePerObject__TriggerOnce.func = function(runtimeScene, Object, TriggerOnceID, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TriggerOncePerObject"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TriggerOncePerObject"),
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
if (argName === "TriggerOnceID") return TriggerOnceID;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__TriggerOncePerObject__TriggerOnce.GDObjectObjects1.length = 0;

gdjs.evtsExt__TriggerOncePerObject__TriggerOnce.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TriggerOncePerObject__TriggerOnce.GDObjectObjects1.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__TriggerOncePerObject__TriggerOnce.registeredGdjsCallbacks = [];