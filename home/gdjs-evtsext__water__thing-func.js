
if (typeof gdjs.evtsExt__water__thing !== "undefined") {
  gdjs.evtsExt__water__thing.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__water__thing = {};


gdjs.evtsExt__water__thing.userFunc0xadf168 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const geometry = new THREE.PlaneGeometry(10000, 10000, 1, 5000); // Width, height, widthSegments, heightSegments
const scene = runtimeScene.getLayer("").getRenderer().getThreeScene();
const renderer = gdjs.RuntimeGamePixiRenderer.getThreeRenderer;

// Load texture
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load(eventsFunctionContext.getArgument("Parameter")); // Replace with your texture path
texture.magFilter = THREE.NearestFilter; // For magnification
texture.minFilter = THREE.NearestFilter; // For minification
texture.wrapS = THREE.RepeatWrapping; // Allow wrapping on S-axis
texture.wrapT = THREE.RepeatWrapping; // Allow wrapping on T-axis


const material = new THREE.ShaderMaterial({
  vertexShader: `
    uniform float uTime;
    varying vec2 vUv;

    void main() {
      vUv = uv*400.0;
      vec3 pos = position;
      // Add a simple sine wave
      pos.z = cos(pos.x * 1.0 + uTime ) * 2.7;
      pos.z += sin(pos.y * 0.1 + uTime * 1.5) * 2.7;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 3.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D uTexture;
    varying vec2 vUv;

    void main() {
      // Sample the texture
      vec4 texColor = texture2D(uTexture, vUv);
      gl_FragColor = texColor;
    }
  `,
  uniforms: {
    uTime: { value: 0.0 },
    uTexture: { value: texture },
  },
  wireframe: false, // Turn off wireframe to see the texture
});

const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

function animate() {
  requestAnimationFrame(animate);
  material.uniforms.uTime.value += 0.01; // Increment time
}
animate();

};
gdjs.evtsExt__water__thing.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__water__thing.userFunc0xadf168(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__water__thing.func = function(runtimeScene, Parameter, Tiling, Size, Segments, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("water"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("water"),
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
if (argName === "Parameter") return Parameter;
if (argName === "Tiling") return Tiling;
if (argName === "Size") return Size;
if (argName === "Segments") return Segments;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__water__thing.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__water__thing.registeredGdjsCallbacks = [];