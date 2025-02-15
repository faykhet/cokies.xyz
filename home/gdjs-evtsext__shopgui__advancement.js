
gdjs.evtsExt__ShopGUI__Advancement = gdjs.evtsExt__ShopGUI__Advancement || {};

/**
 * Object generated from Advancement
 */
gdjs.evtsExt__ShopGUI__Advancement.Advancement = class Advancement extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData) {
    super(parentInstanceContainer, objectData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    this._objectData.TitleText = objectData.content.TitleText !== undefined ? objectData.content.TitleText : "";
    this._objectData.DescriptionText = objectData.content.DescriptionText !== undefined ? objectData.content.DescriptionText : "";
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.TitleText !== newObjectData.content.TitleText)
      this._objectData.TitleText = newObjectData.content.TitleText;
    if (oldObjectData.content.DescriptionText !== newObjectData.content.DescriptionText)
      this._objectData.DescriptionText = newObjectData.content.DescriptionText;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getTitleText() {
    return this._objectData.TitleText !== undefined ? this._objectData.TitleText : "";
  }
  _setTitleText(newValue) {
    this._objectData.TitleText = newValue;
  }
  _getDescriptionText() {
    return this._objectData.DescriptionText !== undefined ? this._objectData.DescriptionText : "";
  }
  _setDescriptionText(newValue) {
    this._objectData.DescriptionText = newValue;
  }

  

  
  // gdjs.TextContainer interface implementation
  _text = '';
  getText() {
    return this._text;
  }
  setText(text) {
    this._text = text;
  }

}

// Methods:
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext = {};
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDNewPanelSpriteObjects1= [];
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDNewPanelSpriteObjects2= [];
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDTitleObjects1= [];
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDTitleObjects2= [];
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDDescriptionObjects1= [];
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDDescriptionObjects2= [];
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDNewSpriteObjects1= [];
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDNewSpriteObjects2= [];


gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Description"), gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDDescriptionObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Title"), gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDTitleObjects1);
{for(var i = 0, len = gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDTitleObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDTitleObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText((( gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDObjectObjects1[0]._getTitleText()));
}
}{for(var i = 0, len = gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDDescriptionObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDDescriptionObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText((( gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDObjectObjects1[0]._getDescriptionText()));
}
}}

}


};gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDNewPanelSpriteObjectsList = [...runtimeScene.getObjects("NewPanelSprite")];
var GDNewPanelSpriteObjects = Hashtable.newFrom({"NewPanelSprite": thisGDNewPanelSpriteObjectsList});
var thisGDTitleObjectsList = [...runtimeScene.getObjects("Title")];
var GDTitleObjects = Hashtable.newFrom({"Title": thisGDTitleObjectsList});
var thisGDDescriptionObjectsList = [...runtimeScene.getObjects("Description")];
var GDDescriptionObjects = Hashtable.newFrom({"Description": thisGDDescriptionObjectsList});
var thisGDNewSpriteObjectsList = [...runtimeScene.getObjects("NewSprite")];
var GDNewSpriteObjects = Hashtable.newFrom({"NewSprite": thisGDNewSpriteObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "NewPanelSprite": GDNewPanelSpriteObjects
, "Title": GDTitleObjects
, "Description": GDDescriptionObjects
, "NewSprite": GDNewSpriteObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "NewPanelSprite": thisGDNewPanelSpriteObjectsList
, "Title": thisGDTitleObjectsList
, "Description": thisGDDescriptionObjectsList
, "NewSprite": thisGDNewSpriteObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ShopGUI"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ShopGUI"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDNewPanelSpriteObjects1.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDNewPanelSpriteObjects2.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDDescriptionObjects1.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDDescriptionObjects2.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDNewSpriteObjects1.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDNewSpriteObjects2.length = 0;

gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDNewPanelSpriteObjects1.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDNewPanelSpriteObjects2.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDDescriptionObjects1.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDDescriptionObjects2.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDNewSpriteObjects1.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.onCreatedContext.GDNewSpriteObjects2.length = 0;

gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext = {};
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.GDObjectObjects1= [];
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.GDObjectObjects2= [];
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.GDNewPanelSpriteObjects1= [];
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.GDNewPanelSpriteObjects2= [];
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.GDTitleObjects1= [];
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.GDTitleObjects2= [];
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.GDDescriptionObjects1= [];
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.GDDescriptionObjects2= [];
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.GDNewSpriteObjects1= [];
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.GDNewSpriteObjects2= [];


gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Title"), gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.GDTitleObjects1);
{for(var i = 0, len = gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.GDObjectObjects1[i]._setTitleText(eventsFunctionContext.getArgument("NewTitle"));
}
}{for(var i = 0, len = gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.GDTitleObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.GDTitleObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getArgument("NewTitle"));
}
}}

}


};

gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitle = function(NewTitle, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDNewPanelSpriteObjectsList = [...runtimeScene.getObjects("NewPanelSprite")];
var GDNewPanelSpriteObjects = Hashtable.newFrom({"NewPanelSprite": thisGDNewPanelSpriteObjectsList});
var thisGDTitleObjectsList = [...runtimeScene.getObjects("Title")];
var GDTitleObjects = Hashtable.newFrom({"Title": thisGDTitleObjectsList});
var thisGDDescriptionObjectsList = [...runtimeScene.getObjects("Description")];
var GDDescriptionObjects = Hashtable.newFrom({"Description": thisGDDescriptionObjectsList});
var thisGDNewSpriteObjectsList = [...runtimeScene.getObjects("NewSprite")];
var GDNewSpriteObjects = Hashtable.newFrom({"NewSprite": thisGDNewSpriteObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "NewPanelSprite": GDNewPanelSpriteObjects
, "Title": GDTitleObjects
, "Description": GDDescriptionObjects
, "NewSprite": GDNewSpriteObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "NewPanelSprite": thisGDNewPanelSpriteObjectsList
, "Title": thisGDTitleObjectsList
, "Description": thisGDDescriptionObjectsList
, "NewSprite": thisGDNewSpriteObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ShopGUI"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ShopGUI"),
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
if (argName === "NewTitle") return NewTitle;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.GDNewPanelSpriteObjects1.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.GDNewPanelSpriteObjects2.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.GDDescriptionObjects1.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.GDDescriptionObjects2.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.GDNewSpriteObjects1.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.GDNewSpriteObjects2.length = 0;

gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.GDNewPanelSpriteObjects1.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.GDNewPanelSpriteObjects2.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.GDDescriptionObjects1.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.GDDescriptionObjects2.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.GDNewSpriteObjects1.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeTitleContext.GDNewSpriteObjects2.length = 0;


return;
}
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext = {};
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.GDObjectObjects1= [];
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.GDObjectObjects2= [];
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.GDNewPanelSpriteObjects1= [];
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.GDNewPanelSpriteObjects2= [];
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.GDTitleObjects1= [];
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.GDTitleObjects2= [];
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.GDDescriptionObjects1= [];
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.GDDescriptionObjects2= [];
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.GDNewSpriteObjects1= [];
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.GDNewSpriteObjects2= [];


gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Description"), gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.GDDescriptionObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.GDObjectObjects1[i]._setDescriptionText(eventsFunctionContext.getArgument("NewDescription"));
}
}{for(var i = 0, len = gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.GDDescriptionObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.GDDescriptionObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getArgument("NewDescription"));
}
}}

}


};

gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescription = function(NewDescription, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDNewPanelSpriteObjectsList = [...runtimeScene.getObjects("NewPanelSprite")];
var GDNewPanelSpriteObjects = Hashtable.newFrom({"NewPanelSprite": thisGDNewPanelSpriteObjectsList});
var thisGDTitleObjectsList = [...runtimeScene.getObjects("Title")];
var GDTitleObjects = Hashtable.newFrom({"Title": thisGDTitleObjectsList});
var thisGDDescriptionObjectsList = [...runtimeScene.getObjects("Description")];
var GDDescriptionObjects = Hashtable.newFrom({"Description": thisGDDescriptionObjectsList});
var thisGDNewSpriteObjectsList = [...runtimeScene.getObjects("NewSprite")];
var GDNewSpriteObjects = Hashtable.newFrom({"NewSprite": thisGDNewSpriteObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "NewPanelSprite": GDNewPanelSpriteObjects
, "Title": GDTitleObjects
, "Description": GDDescriptionObjects
, "NewSprite": GDNewSpriteObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "NewPanelSprite": thisGDNewPanelSpriteObjectsList
, "Title": thisGDTitleObjectsList
, "Description": thisGDDescriptionObjectsList
, "NewSprite": thisGDNewSpriteObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ShopGUI"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ShopGUI"),
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
if (argName === "NewDescription") return NewDescription;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.GDNewPanelSpriteObjects1.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.GDNewPanelSpriteObjects2.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.GDDescriptionObjects1.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.GDDescriptionObjects2.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.GDNewSpriteObjects1.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.GDNewSpriteObjects2.length = 0;

gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.GDNewPanelSpriteObjects1.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.GDNewPanelSpriteObjects2.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.GDDescriptionObjects1.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.GDDescriptionObjects2.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.GDNewSpriteObjects1.length = 0;
gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.ChangeDescriptionContext.GDNewSpriteObjects2.length = 0;


return;
}

gdjs.evtsExt__ShopGUI__Advancement.Advancement.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("ShopGUI::Advancement", gdjs.evtsExt__ShopGUI__Advancement.Advancement);
