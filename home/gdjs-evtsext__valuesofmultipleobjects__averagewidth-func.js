
if (typeof gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth !== "undefined") {
  gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth = {};
gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.forEachIndex3 = 0;

gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.forEachObjects3 = [];

gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.forEachTemporary3 = null;

gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.forEachTotalCount3 = 0;

gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.GDObjectObjects1= [];
gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.GDObjectObjects2= [];
gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.GDObjectObjects3= [];


gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.mapOfEmptyGDObjectObjects = Hashtable.newFrom({"Object": []});
gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.mapOfEmptyGDObjectObjects = Hashtable.newFrom({"Object": []});
gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.GDObjectObjects2);

for (gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.forEachIndex3 = 0;gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.forEachIndex3 < gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.GDObjectObjects2.length;++gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.forEachIndex3) {
gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.GDObjectObjects3.length = 0;


gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.forEachTemporary3 = gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.GDObjectObjects2[gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.forEachIndex3];
gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.GDObjectObjects3.push(gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).add((( gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.GDObjectObjects3[0].getZOrder()));
}}
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getPickedInstancesCount(gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.mapOfEmptyGDObjectObjects) > 0;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() / gdjs.evtTools.object.getPickedInstancesCount(gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.mapOfEmptyGDObjectObjects); }}}

}


};gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("SubtotalWidth", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.func = function(runtimeScene, Object, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ValuesOfMultipleObjects"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ValuesOfMultipleObjects"),
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

gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.GDObjectObjects1.length = 0;
gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.GDObjectObjects2.length = 0;
gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.GDObjectObjects3.length = 0;

gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.GDObjectObjects1.length = 0;
gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.GDObjectObjects2.length = 0;
gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.GDObjectObjects3.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__ValuesOfMultipleObjects__AverageWidth.registeredGdjsCallbacks = [];