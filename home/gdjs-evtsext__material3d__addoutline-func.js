
if (typeof gdjs.evtsExt__Material3D__AddOutline !== "undefined") {
  gdjs.evtsExt__Material3D__AddOutline.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Material3D__AddOutline = {};
gdjs.evtsExt__Material3D__AddOutline.GDObjectObjects1= [];


gdjs.evtsExt__Material3D__AddOutline.userFunc0xadf168 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
objects.forEach(object => {
    const threeObject = object.get3DRendererObject();
    
    if (threeObject) {
        // Get parameters
        const fillColor = gdjs.rgbOrHexStringToNumber(eventsFunctionContext.getArgument("FillColor"));
        const outlineColor = gdjs.rgbOrHexStringToNumber(eventsFunctionContext.getArgument("OutlineColor"));
        const fillOpacity = eventsFunctionContext.getArgument("FillOpacity");
        const outlineOpacity = eventsFunctionContext.getArgument("OutlineOpacity");
        const outlineThickness = eventsFunctionContext.getArgument("OutlineThickness");
        const fillRenderOrder = eventsFunctionContext.getArgument("FillRenderOrder");
        const outlineRenderOrder = eventsFunctionContext.getArgument("OutlineRenderOrder"); // Fixed parameter name

        if (outlineThickness > 0) {
            // Create fill overlay
            if (!threeObject.userData.fillOverlay) {
                const fillMaterial = new THREE.MeshBasicMaterial({
                    color: fillColor,
                    transparent: true,
                    opacity: fillOpacity,
                    side: THREE.FrontSide,
                    depthTest: fillRenderOrder <= 0
                });

                const fillGeometry = threeObject.geometry.clone();
                threeObject.userData.fillOverlay = new THREE.Mesh(fillGeometry, fillMaterial);
                threeObject.parent.add(threeObject.userData.fillOverlay);
            }

            // Create outline
            if (!threeObject.userData.outlineMesh) {
                const outlineMaterial = new THREE.MeshBasicMaterial({
                    color: outlineColor,
                    transparent: true,
                    opacity: outlineOpacity,
                    side: THREE.BackSide,
                    depthTest: outlineRenderOrder <= 0
                });

                const outlineGeometry = threeObject.geometry.clone();
                threeObject.userData.outlineMesh = new THREE.Mesh(outlineGeometry, outlineMaterial);
                threeObject.parent.add(threeObject.userData.outlineMesh);
            }

            // Update materials
            threeObject.userData.fillOverlay.material.color.setHex(fillColor);
            threeObject.userData.fillOverlay.material.opacity = fillOpacity;
            threeObject.userData.fillOverlay.material.depthTest = fillRenderOrder <= 0;
            threeObject.userData.fillOverlay.renderOrder = fillRenderOrder; // Fixed property name
            
            threeObject.userData.outlineMesh.material.color.setHex(outlineColor);
            threeObject.userData.outlineMesh.material.opacity = outlineOpacity;
            threeObject.userData.outlineMesh.material.depthTest = outlineRenderOrder <= 0; // Fixed render order reference
            threeObject.userData.outlineMesh.renderOrder = outlineRenderOrder; // Fixed property name

            // Update positions and scale for fill overlay
            threeObject.userData.fillOverlay.position.copy(threeObject.position);
            threeObject.userData.fillOverlay.rotation.copy(threeObject.rotation);
            threeObject.userData.fillOverlay.scale.copy(threeObject.scale).multiplyScalar(1);

            // Update outline with consistent thickness
            threeObject.userData.outlineMesh.position.copy(threeObject.position);
            threeObject.userData.outlineMesh.rotation.copy(threeObject.rotation);
            
            // Get the original scale
            const originalScale = threeObject.scale.clone();
            
            // Calculate the size-independent thickness
            const thickness = outlineThickness; // Added scaling factor back
            
            // Apply thickness while maintaining object proportions
            threeObject.userData.outlineMesh.scale.set(
                originalScale.x + thickness,
                originalScale.y + thickness,
                originalScale.z + thickness
            );

            // Make visible
            threeObject.userData.fillOverlay.visible = true;
            threeObject.userData.outlineMesh.visible = true;

        } else {
            // Hide overlay effects
            if (threeObject.userData.fillOverlay) {
                threeObject.userData.fillOverlay.visible = false;
            }
            if (threeObject.userData.outlineMesh) {
                threeObject.userData.outlineMesh.visible = false;
            }
        }
    }
});
};
gdjs.evtsExt__Material3D__AddOutline.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Material3D__AddOutline.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Material3D__AddOutline.GDObjectObjects1);
gdjs.evtsExt__Material3D__AddOutline.userFunc0xadf168(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Material3D__AddOutline.func = function(runtimeScene, Object, FillColor, OutlineColor, FillOpacity, OutlineOpacity, OutlineThickness, FillRenderOrder, OutlineRenderOrder, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Material3D"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Material3D"),
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
if (argName === "FillColor") return FillColor;
if (argName === "OutlineColor") return OutlineColor;
if (argName === "FillOpacity") return FillOpacity;
if (argName === "OutlineOpacity") return OutlineOpacity;
if (argName === "OutlineThickness") return OutlineThickness;
if (argName === "FillRenderOrder") return FillRenderOrder;
if (argName === "OutlineRenderOrder") return OutlineRenderOrder;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Material3D__AddOutline.GDObjectObjects1.length = 0;

gdjs.evtsExt__Material3D__AddOutline.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Material3D__AddOutline.GDObjectObjects1.length = 0;


return;
}

gdjs.evtsExt__Material3D__AddOutline.registeredGdjsCallbacks = [];