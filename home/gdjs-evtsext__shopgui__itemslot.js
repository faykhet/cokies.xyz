
gdjs.evtsExt__ShopGUI__ItemSlot = gdjs.evtsExt__ShopGUI__ItemSlot || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot = class ItemSlot extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData) {
    super(parentInstanceContainer, objectData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    this._objectData.Price = objectData.content.Price !== undefined ? objectData.content.Price : Number("25") || 0;
    this._objectData.Title = objectData.content.Title !== undefined ? objectData.content.Title : "";
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.Price !== newObjectData.content.Price)
      this._objectData.Price = newObjectData.content.Price;
    if (oldObjectData.content.Title !== newObjectData.content.Title)
      this._objectData.Title = newObjectData.content.Title;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getPrice() {
    return this._objectData.Price !== undefined ? this._objectData.Price : Number("25") || 0;
  }
  _setPrice(newValue) {
    this._objectData.Price = newValue;
  }
  _getTitle() {
    return this._objectData.Title !== undefined ? this._objectData.Title : "";
  }
  _setTitle(newValue) {
    this._objectData.Title = newValue;
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
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext = {};
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDSquareObjects1= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDSquareObjects2= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDItemIconObjects1= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDItemIconObjects2= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDNewPanelSpriteObjects1= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDNewPanelSpriteObjects2= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDbuy_9595butObjects1= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDbuy_9595butObjects2= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDTitleObjects1= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDTitleObjects2= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDMoneyObjects1= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDMoneyObjects2= [];


gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Money"), gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDMoneyObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Square"), gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDSquareObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Title"), gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDTitleObjects1);
{for(var i = 0, len = gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDSquareObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDSquareObjects1[i].drawChamferRectangle(0, 0, 320, 160, 16);
}
}{for(var i = 0, len = gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDTitleObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDTitleObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText((( gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDObjectObjects1[0]._getTitle()));
}
}{for(var i = 0, len = gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDMoneyObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDMoneyObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(gdjs.evtTools.common.toString((( gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDObjectObjects1[0]._getPrice())) + "$");
}
}}

}


};gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDSquareObjectsList = [...runtimeScene.getObjects("Square")];
var GDSquareObjects = Hashtable.newFrom({"Square": thisGDSquareObjectsList});
var thisGDItemIconObjectsList = [...runtimeScene.getObjects("ItemIcon")];
var GDItemIconObjects = Hashtable.newFrom({"ItemIcon": thisGDItemIconObjectsList});
var thisGDNewPanelSpriteObjectsList = [...runtimeScene.getObjects("NewPanelSprite")];
var GDNewPanelSpriteObjects = Hashtable.newFrom({"NewPanelSprite": thisGDNewPanelSpriteObjectsList});
var thisGDbuy_9595butObjectsList = [...runtimeScene.getObjects("buy_but")];
var GDbuy_9595butObjects = Hashtable.newFrom({"buy_but": thisGDbuy_9595butObjectsList});
var thisGDTitleObjectsList = [...runtimeScene.getObjects("Title")];
var GDTitleObjects = Hashtable.newFrom({"Title": thisGDTitleObjectsList});
var thisGDMoneyObjectsList = [...runtimeScene.getObjects("Money")];
var GDMoneyObjects = Hashtable.newFrom({"Money": thisGDMoneyObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Square": GDSquareObjects
, "ItemIcon": GDItemIconObjects
, "NewPanelSprite": GDNewPanelSpriteObjects
, "buy_but": GDbuy_9595butObjects
, "Title": GDTitleObjects
, "Money": GDMoneyObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Square": thisGDSquareObjectsList
, "ItemIcon": thisGDItemIconObjectsList
, "NewPanelSprite": thisGDNewPanelSpriteObjectsList
, "buy_but": thisGDbuy_9595butObjectsList
, "Title": thisGDTitleObjectsList
, "Money": thisGDMoneyObjectsList
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

gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDSquareObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDSquareObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDItemIconObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDItemIconObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDNewPanelSpriteObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDNewPanelSpriteObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDbuy_9595butObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDbuy_9595butObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDMoneyObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDMoneyObjects2.length = 0;

gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDSquareObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDSquareObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDItemIconObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDItemIconObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDNewPanelSpriteObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDNewPanelSpriteObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDbuy_9595butObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDbuy_9595butObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDMoneyObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.onCreatedContext.GDMoneyObjects2.length = 0;

gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext = {};
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDObjectObjects1= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDObjectObjects2= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDSquareObjects1= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDSquareObjects2= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDItemIconObjects1= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDItemIconObjects2= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDNewPanelSpriteObjects1= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDNewPanelSpriteObjects2= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDbuy_9595butObjects1= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDbuy_9595butObjects2= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDTitleObjects1= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDTitleObjects2= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDMoneyObjects1= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDMoneyObjects2= [];


gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getPrice(); }}}

}


};

gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPrice = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDSquareObjectsList = [...runtimeScene.getObjects("Square")];
var GDSquareObjects = Hashtable.newFrom({"Square": thisGDSquareObjectsList});
var thisGDItemIconObjectsList = [...runtimeScene.getObjects("ItemIcon")];
var GDItemIconObjects = Hashtable.newFrom({"ItemIcon": thisGDItemIconObjectsList});
var thisGDNewPanelSpriteObjectsList = [...runtimeScene.getObjects("NewPanelSprite")];
var GDNewPanelSpriteObjects = Hashtable.newFrom({"NewPanelSprite": thisGDNewPanelSpriteObjectsList});
var thisGDbuy_9595butObjectsList = [...runtimeScene.getObjects("buy_but")];
var GDbuy_9595butObjects = Hashtable.newFrom({"buy_but": thisGDbuy_9595butObjectsList});
var thisGDTitleObjectsList = [...runtimeScene.getObjects("Title")];
var GDTitleObjects = Hashtable.newFrom({"Title": thisGDTitleObjectsList});
var thisGDMoneyObjectsList = [...runtimeScene.getObjects("Money")];
var GDMoneyObjects = Hashtable.newFrom({"Money": thisGDMoneyObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Square": GDSquareObjects
, "ItemIcon": GDItemIconObjects
, "NewPanelSprite": GDNewPanelSpriteObjects
, "buy_but": GDbuy_9595butObjects
, "Title": GDTitleObjects
, "Money": GDMoneyObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Square": thisGDSquareObjectsList
, "ItemIcon": thisGDItemIconObjectsList
, "NewPanelSprite": thisGDNewPanelSpriteObjectsList
, "buy_but": thisGDbuy_9595butObjectsList
, "Title": thisGDTitleObjectsList
, "Money": thisGDMoneyObjectsList
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

gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDSquareObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDSquareObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDItemIconObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDItemIconObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDNewPanelSpriteObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDNewPanelSpriteObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDbuy_9595butObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDbuy_9595butObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDMoneyObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDMoneyObjects2.length = 0;

gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDSquareObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDSquareObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDItemIconObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDItemIconObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDNewPanelSpriteObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDNewPanelSpriteObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDbuy_9595butObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDbuy_9595butObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDMoneyObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.GetPriceContext.GDMoneyObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.doStepPostEventsContext.GDSquareObjects1= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.doStepPostEventsContext.GDItemIconObjects1= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects1= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.doStepPostEventsContext.GDbuy_9595butObjects1= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.doStepPostEventsContext.GDTitleObjects1= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.doStepPostEventsContext.GDMoneyObjects1= [];


gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


};

gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDSquareObjectsList = [...runtimeScene.getObjects("Square")];
var GDSquareObjects = Hashtable.newFrom({"Square": thisGDSquareObjectsList});
var thisGDItemIconObjectsList = [...runtimeScene.getObjects("ItemIcon")];
var GDItemIconObjects = Hashtable.newFrom({"ItemIcon": thisGDItemIconObjectsList});
var thisGDNewPanelSpriteObjectsList = [...runtimeScene.getObjects("NewPanelSprite")];
var GDNewPanelSpriteObjects = Hashtable.newFrom({"NewPanelSprite": thisGDNewPanelSpriteObjectsList});
var thisGDbuy_9595butObjectsList = [...runtimeScene.getObjects("buy_but")];
var GDbuy_9595butObjects = Hashtable.newFrom({"buy_but": thisGDbuy_9595butObjectsList});
var thisGDTitleObjectsList = [...runtimeScene.getObjects("Title")];
var GDTitleObjects = Hashtable.newFrom({"Title": thisGDTitleObjectsList});
var thisGDMoneyObjectsList = [...runtimeScene.getObjects("Money")];
var GDMoneyObjects = Hashtable.newFrom({"Money": thisGDMoneyObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Square": GDSquareObjects
, "ItemIcon": GDItemIconObjects
, "NewPanelSprite": GDNewPanelSpriteObjects
, "buy_but": GDbuy_9595butObjects
, "Title": GDTitleObjects
, "Money": GDMoneyObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Square": thisGDSquareObjectsList
, "ItemIcon": thisGDItemIconObjectsList
, "NewPanelSprite": thisGDNewPanelSpriteObjectsList
, "buy_but": thisGDbuy_9595butObjectsList
, "Title": thisGDTitleObjectsList
, "Money": thisGDMoneyObjectsList
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

gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.doStepPostEventsContext.GDSquareObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.doStepPostEventsContext.GDItemIconObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.doStepPostEventsContext.GDbuy_9595butObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.doStepPostEventsContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.doStepPostEventsContext.GDMoneyObjects1.length = 0;

gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.doStepPostEventsContext.GDSquareObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.doStepPostEventsContext.GDItemIconObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.doStepPostEventsContext.GDNewPanelSpriteObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.doStepPostEventsContext.GDbuy_9595butObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.doStepPostEventsContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.doStepPostEventsContext.GDMoneyObjects1.length = 0;


return;
}
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext = {};
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDObjectObjects1= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDObjectObjects2= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDSquareObjects1= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDSquareObjects2= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDItemIconObjects1= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDItemIconObjects2= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDNewPanelSpriteObjects1= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDNewPanelSpriteObjects2= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDbuy_9595butObjects1= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDbuy_9595butObjects2= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDTitleObjects1= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDTitleObjects2= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDMoneyObjects1= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDMoneyObjects2= [];


gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Money"), gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDMoneyObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDObjectObjects1[i]._setPrice(eventsFunctionContext.getArgument("NewPrice"));
}
}{for(var i = 0, len = gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDMoneyObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDMoneyObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(("" + eventsFunctionContext.getObjects("Object")[0]._getPrice()) + "$");
}
}}

}


};

gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePrice = function(NewPrice, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDSquareObjectsList = [...runtimeScene.getObjects("Square")];
var GDSquareObjects = Hashtable.newFrom({"Square": thisGDSquareObjectsList});
var thisGDItemIconObjectsList = [...runtimeScene.getObjects("ItemIcon")];
var GDItemIconObjects = Hashtable.newFrom({"ItemIcon": thisGDItemIconObjectsList});
var thisGDNewPanelSpriteObjectsList = [...runtimeScene.getObjects("NewPanelSprite")];
var GDNewPanelSpriteObjects = Hashtable.newFrom({"NewPanelSprite": thisGDNewPanelSpriteObjectsList});
var thisGDbuy_9595butObjectsList = [...runtimeScene.getObjects("buy_but")];
var GDbuy_9595butObjects = Hashtable.newFrom({"buy_but": thisGDbuy_9595butObjectsList});
var thisGDTitleObjectsList = [...runtimeScene.getObjects("Title")];
var GDTitleObjects = Hashtable.newFrom({"Title": thisGDTitleObjectsList});
var thisGDMoneyObjectsList = [...runtimeScene.getObjects("Money")];
var GDMoneyObjects = Hashtable.newFrom({"Money": thisGDMoneyObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Square": GDSquareObjects
, "ItemIcon": GDItemIconObjects
, "NewPanelSprite": GDNewPanelSpriteObjects
, "buy_but": GDbuy_9595butObjects
, "Title": GDTitleObjects
, "Money": GDMoneyObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Square": thisGDSquareObjectsList
, "ItemIcon": thisGDItemIconObjectsList
, "NewPanelSprite": thisGDNewPanelSpriteObjectsList
, "buy_but": thisGDbuy_9595butObjectsList
, "Title": thisGDTitleObjectsList
, "Money": thisGDMoneyObjectsList
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
if (argName === "NewPrice") return NewPrice;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDSquareObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDSquareObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDItemIconObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDItemIconObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDNewPanelSpriteObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDNewPanelSpriteObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDbuy_9595butObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDbuy_9595butObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDMoneyObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDMoneyObjects2.length = 0;

gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDSquareObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDSquareObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDItemIconObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDItemIconObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDNewPanelSpriteObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDNewPanelSpriteObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDbuy_9595butObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDbuy_9595butObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDMoneyObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangePriceContext.GDMoneyObjects2.length = 0;


return;
}
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext = {};
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDObjectObjects1= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDObjectObjects2= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDSquareObjects1= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDSquareObjects2= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDItemIconObjects1= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDItemIconObjects2= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDNewPanelSpriteObjects1= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDNewPanelSpriteObjects2= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDbuy_9595butObjects1= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDbuy_9595butObjects2= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDTitleObjects1= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDTitleObjects2= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDMoneyObjects1= [];
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDMoneyObjects2= [];


gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Title"), gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDTitleObjects1);
{for(var i = 0, len = gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDObjectObjects1[i]._setTitle(eventsFunctionContext.getArgument("NewTitle"));
}
}{for(var i = 0, len = gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDTitleObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDTitleObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText((( gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDObjectObjects1[0]._getTitle()));
}
}}

}


};

gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeName = function(NewTitle, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDSquareObjectsList = [...runtimeScene.getObjects("Square")];
var GDSquareObjects = Hashtable.newFrom({"Square": thisGDSquareObjectsList});
var thisGDItemIconObjectsList = [...runtimeScene.getObjects("ItemIcon")];
var GDItemIconObjects = Hashtable.newFrom({"ItemIcon": thisGDItemIconObjectsList});
var thisGDNewPanelSpriteObjectsList = [...runtimeScene.getObjects("NewPanelSprite")];
var GDNewPanelSpriteObjects = Hashtable.newFrom({"NewPanelSprite": thisGDNewPanelSpriteObjectsList});
var thisGDbuy_9595butObjectsList = [...runtimeScene.getObjects("buy_but")];
var GDbuy_9595butObjects = Hashtable.newFrom({"buy_but": thisGDbuy_9595butObjectsList});
var thisGDTitleObjectsList = [...runtimeScene.getObjects("Title")];
var GDTitleObjects = Hashtable.newFrom({"Title": thisGDTitleObjectsList});
var thisGDMoneyObjectsList = [...runtimeScene.getObjects("Money")];
var GDMoneyObjects = Hashtable.newFrom({"Money": thisGDMoneyObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Square": GDSquareObjects
, "ItemIcon": GDItemIconObjects
, "NewPanelSprite": GDNewPanelSpriteObjects
, "buy_but": GDbuy_9595butObjects
, "Title": GDTitleObjects
, "Money": GDMoneyObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Square": thisGDSquareObjectsList
, "ItemIcon": thisGDItemIconObjectsList
, "NewPanelSprite": thisGDNewPanelSpriteObjectsList
, "buy_but": thisGDbuy_9595butObjectsList
, "Title": thisGDTitleObjectsList
, "Money": thisGDMoneyObjectsList
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

gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDSquareObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDSquareObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDItemIconObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDItemIconObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDNewPanelSpriteObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDNewPanelSpriteObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDbuy_9595butObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDbuy_9595butObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDMoneyObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDMoneyObjects2.length = 0;

gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDSquareObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDSquareObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDItemIconObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDItemIconObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDNewPanelSpriteObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDNewPanelSpriteObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDbuy_9595butObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDbuy_9595butObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDTitleObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDTitleObjects2.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDMoneyObjects1.length = 0;
gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.ChangeNameContext.GDMoneyObjects2.length = 0;


return;
}

gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("ShopGUI::ItemSlot", gdjs.evtsExt__ShopGUI__ItemSlot.ItemSlot);
