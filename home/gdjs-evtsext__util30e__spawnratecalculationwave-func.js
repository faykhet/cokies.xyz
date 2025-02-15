
if (typeof gdjs.evtsExt__Util30e__SpawnRateCalculationWave !== "undefined") {
  gdjs.evtsExt__Util30e__SpawnRateCalculationWave.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Util30e__SpawnRateCalculationWave = {};


gdjs.evtsExt__Util30e__SpawnRateCalculationWave.userFunc0x16d3dc8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
let wave = eventsFunctionContext.getArgument('wave');
let waveData = JSON.parse(eventsFunctionContext.getArgument('waveData'));

const clamp = (value, min, max) => Math.max(Math.min(value, max), min);

function getSpawnData(wave, waveData) {
	let spawnData = {};
	for (let enemyName in waveData) {
		let enemy = waveData[enemyName]
		let num = 0;
		let numOfWaves = wave - enemy.startWave

		if (numOfWaves < 0) {
			spawnData[enemyName] = 0;
			continue;
		}
		else {
			num = (enemy.startNumber + Math.min(numOfWaves, (!shouldFallOff(wave, enemy)) ? numOfWaves: enemy.fallOffWave - enemy.startWave) * enemy.increment); // Initial Value for quantity
			if (isValid(enemy.limit)) num = Math.min(num, enemy.limit)

			if (shouldFallOff(wave, enemy)){
				let fallOffAmount = Math.max(wave - enemy.fallOffWave, 0) * (!enemy.decrement ? enemy.increment : enemy.decrement)

				num = clamp(num - fallOffAmount , enemy.fallOffNumber, enemy.limit)
				
				// if (enemyName == "Collector") console.log(num)
			}
			// if (enemyName == "Collector") console.log(shouldFallOff(wave, enemy, true))
			
		}
		spawnData[enemyName] = num;
	}
	return spawnData;
}

function shouldFallOff(wave, enemy){
	return (!!enemy.fallOffWave && wave >= enemy.fallOffWave && enemy.fallOffWave != -1)
}

function isValid(x){
	return !!x && x != -1;
}

eventsFunctionContext.returnValue = JSON.stringify(getSpawnData(wave, waveData))
};
gdjs.evtsExt__Util30e__SpawnRateCalculationWave.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Util30e__SpawnRateCalculationWave.userFunc0x16d3dc8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Util30e__SpawnRateCalculationWave.func = function(runtimeScene, wave, waveData, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Util30e__SpawnRateCalculationWave.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Util30e__SpawnRateCalculationWave.registeredGdjsCallbacks = [];