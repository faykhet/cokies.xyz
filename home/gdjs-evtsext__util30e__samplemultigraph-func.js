
if (typeof gdjs.evtsExt__Util30e__SampleMultiGraph !== "undefined") {
  gdjs.evtsExt__Util30e__SampleMultiGraph.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Util30e__SampleMultiGraph = {};


gdjs.evtsExt__Util30e__SampleMultiGraph.userFunc0x14877a0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
let wave = eventsFunctionContext.getArgument('wave');
let waveData = JSON.parse(eventsFunctionContext.getArgument('waveData'));
let path = eventsFunctionContext.getArgument('path');

function getValueByPath(data, path) {
    if (path == "") return data
    const keys = path.split('.');
    let result = data;

    for (const key of keys) {
        if (result && typeof result === 'object' && key in result) {
            result = result[key];
        } else {
            return undefined;
        }
    }

    return result;
}

const clamp = (value, min, max) => Math.max(Math.min(value, max), min);

function findLR(points, x) {
    let lLeft = -1
    let left = -1
    let right = -1
    let rRight = -1

    for (let i = 0; i < points.length; i++) {
        if (points[i][0] == x) return [i]; // If x matches with one of the points, return that point's index.
        if (points[i][0] < x) {
            if (left == -1 || points[i][0] >= points[left][0]) { // If bro finds a point thats closer to X than the current left
                lLeft = left // Sets the previous left to lLeft (just trust me bro)
                left = i;
            } else if (lLeft == -1 || (points[left][0] >= points[lLeft][0] && points[lLeft][0] <= points[i][0])) { // If bro finds a better lLeft that's closer to left. 
                lLeft = i
            }
        } else if (points[i][0] > x) {
            if (right == -1 || points[i][0] < points[right][0]) { // If bro finds a point thats closer to X than the current right
                rRight = right // Sets the previous right to rRight (just trust me bro)
                right = i;
            } else if (rRight == -1 || (points[right][0] < points[rRight][0] && points[rRight][0] > points[i][0])) { // If bro finds a better rRight that's closer to right. 
                rRight = i
            }
        }
    }

    return [lLeft, left, right, rRight]
}

// Linear interpolation function
function linearInterpolation(t, s, e) {
    return [
        (1 - t) * s[0] + t * e[0],
        (1 - t) * s[1] + t * e[1],
    ];
}

// Cubic Bezier interpolation function
function bezierInterpolation(t, s, e, c1, c2) {
    const u = 1 - t;
    const tt = t * t;
    const uu = u * u;
    const uuu = uu * u;
    const ttt = tt * t;

    return [
        uuu * s[0] + 3 * uu * t * c1[0] + 3 * u * tt * c2[0] + ttt * e[0],
        uuu * s[1] + 3 * uu * t * c1[1] + 3 * u * tt * c2[1] + ttt * e[1],
    ];
}

function sampleGraph(points, x) {
    var lr = findLR(points, x)
    // console.log(lr.length);
    if (lr.length == 1) {
        return points[lr[0]][1]
    }
    if (points.length == 1) {
        return points[0][1]
    }
    // console.log(lr);

    if (lr[1] == -1 && lr[2] == -1) {
        if (points.length > 0) return points[0][1];
        else return 0;
    }


    if (lr[1] == -1) {
        return linearInterpolation((points[lr[2]][0] - x) / (points[lr[2]][0] - points[lr[3]][0]), points[lr[2]], points[lr[3]])[1]
    }
    if (lr[2] == -1) {
        return linearInterpolation((points[lr[1]][0] - x) / (points[lr[1]][0] - points[lr[0]][0]), points[lr[1]], points[lr[0]])[1]
    }
    // console.log((x-points[lr[1]][0])/(points[lr[2]][0]-points[lr[1]][0]), points[lr[2]])
    if (points[lr[1]].length <= 2 && points[lr[2]].length <= 2) {
        return linearInterpolation((x - points[lr[1]][0]) / (points[lr[2]][0] - points[lr[1]][0]), points[lr[1]], points[lr[2]])[1]
    }
    else {
        let t = (x - points[lr[1]][0]) / (points[lr[2]][0] - points[lr[1]][0])
        let c1 = points[lr[1]].length > 2 ? [points[lr[1]][4] + points[lr[1]][0], points[lr[1]][5] + points[lr[1]][1]] : [points[lr[1]][0], points[lr[1]][1]]
        let c2 = points[lr[2]].length > 2 ? [points[lr[2]][2] + points[lr[2]][0], points[lr[2]][3] + points[lr[2]][1]] : [points[lr[2]][0], points[lr[2]][1]]
        return bezierInterpolation(t, points[lr[1]], points[lr[2]], c1, c2)[1]
    }
}


function getSpawnData(wave, waveData) {
    let spawnData = {};
    for (let enemyName in waveData) {
        spawnData[enemyName] = sampleGraph(JSON.parse(getValueByPath(waveData[enemyName], path)), wave);
    }
    return spawnData;
}

eventsFunctionContext.returnValue = JSON.stringify(getSpawnData(wave, waveData))
};
gdjs.evtsExt__Util30e__SampleMultiGraph.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Util30e__SampleMultiGraph.userFunc0x14877a0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Util30e__SampleMultiGraph.func = function(runtimeScene, wave, waveData, path, parentEventsFunctionContext) {
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
if (argName === "wave") return wave;
if (argName === "waveData") return waveData;
if (argName === "path") return path;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Util30e__SampleMultiGraph.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Util30e__SampleMultiGraph.registeredGdjsCallbacks = [];