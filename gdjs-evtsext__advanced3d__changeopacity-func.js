
if (typeof gdjs.evtsExt__Advanced3D__ChangeOpacity !== "undefined") {
  gdjs.evtsExt__Advanced3D__ChangeOpacity.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Advanced3D__ChangeOpacity = {};
gdjs.evtsExt__Advanced3D__ChangeOpacity.forEachIndex2 = 0;

gdjs.evtsExt__Advanced3D__ChangeOpacity.forEachObjects2 = [];

gdjs.evtsExt__Advanced3D__ChangeOpacity.forEachTemporary2 = null;

gdjs.evtsExt__Advanced3D__ChangeOpacity.forEachTotalCount2 = 0;

gdjs.evtsExt__Advanced3D__ChangeOpacity.GDObjectObjects1= [];
gdjs.evtsExt__Advanced3D__ChangeOpacity.GDObjectObjects2= [];
gdjs.evtsExt__Advanced3D__ChangeOpacity.GDObjectObjects3= [];


gdjs.evtsExt__Advanced3D__ChangeOpacity.userFunc0xde73f0 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const Object2D = objects[0];
const Object3D = Object2D.get3DRendererObject();
const Operator = eventsFunctionContext.getArgument("Operator");
const Opacity = eventsFunctionContext.getArgument("Opacity") / 255;
//
Object3D.traverse((Child) => {
    if (Child.material) {
        if (Array.isArray(Child.material)) {
            for (let i = 0; i < Child.material.length; i++) {
                if (Operator == "+") {
                    Child.material[i].opacity += Opacity;
                } else if (Operator == "-") {
                    Child.material[i].opacity -= Opacity;
                } else if (Operator == "*") {
                    Child.material[i].opacity *= Opacity;
                } else if (Operator == "/") {
                    Child.material[i].opacity /= Opacity;
                } else {
                    // =
                    Child.material[i].opacity = Opacity;
                }
                const Transparent = (Child.material[i].opacity < 1);
                if (Child.material[i].transparent !== Transparent) {
                    Child.material[i].transparent = Transparent;
                    Child.material[i].needsUpdate = true;
                }
            }
        } else {
            if (Operator == "+") {
                Child.material.opacity += Opacity;
            } else if (Operator == "-") {
                Child.material.opacity -= Opacity;
            } else if (Operator == "*") {
                Child.material.opacity *= Opacity;
            } else if (Operator == "/") {
                Child.material.opacity /= Opacity;
            } else {
                // =
                Child.material.opacity = Opacity;
            }
            const Transparent = (Child.material.opacity < 1);
            if (Child.material.transparent !== Transparent) {
                Child.material.transparent = Transparent;
                Child.material.needsUpdate = true;
            }
        }
    }
});


};
gdjs.evtsExt__Advanced3D__ChangeOpacity.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Advanced3D__ChangeOpacity.GDObjectObjects2, gdjs.evtsExt__Advanced3D__ChangeOpacity.GDObjectObjects3);


var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Advanced3D__ChangeOpacity.GDObjectObjects3);
gdjs.evtsExt__Advanced3D__ChangeOpacity.userFunc0xde73f0(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__Advanced3D__ChangeOpacity.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Advanced3D__ChangeOpacity.GDObjectObjects1);

for (gdjs.evtsExt__Advanced3D__ChangeOpacity.forEachIndex2 = 0;gdjs.evtsExt__Advanced3D__ChangeOpacity.forEachIndex2 < gdjs.evtsExt__Advanced3D__ChangeOpacity.GDObjectObjects1.length;++gdjs.evtsExt__Advanced3D__ChangeOpacity.forEachIndex2) {
gdjs.evtsExt__Advanced3D__ChangeOpacity.GDObjectObjects2.length = 0;


gdjs.evtsExt__Advanced3D__ChangeOpacity.forEachTemporary2 = gdjs.evtsExt__Advanced3D__ChangeOpacity.GDObjectObjects1[gdjs.evtsExt__Advanced3D__ChangeOpacity.forEachIndex2];
gdjs.evtsExt__Advanced3D__ChangeOpacity.GDObjectObjects2.push(gdjs.evtsExt__Advanced3D__ChangeOpacity.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__Advanced3D__ChangeOpacity.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__Advanced3D__ChangeOpacity.func = function(runtimeScene, Object, Capability3d, Operator, Opacity, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
"Capability3d": Capability3d
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Advanced3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Advanced3D"),
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
if (argName === "Operator") return Operator;
if (argName === "Opacity") return Opacity;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Advanced3D__ChangeOpacity.GDObjectObjects1.length = 0;
gdjs.evtsExt__Advanced3D__ChangeOpacity.GDObjectObjects2.length = 0;
gdjs.evtsExt__Advanced3D__ChangeOpacity.GDObjectObjects3.length = 0;

gdjs.evtsExt__Advanced3D__ChangeOpacity.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Advanced3D__ChangeOpacity.GDObjectObjects1.length = 0;
gdjs.evtsExt__Advanced3D__ChangeOpacity.GDObjectObjects2.length = 0;
gdjs.evtsExt__Advanced3D__ChangeOpacity.GDObjectObjects3.length = 0;


return;
}

gdjs.evtsExt__Advanced3D__ChangeOpacity.registeredGdjsCallbacks = [];