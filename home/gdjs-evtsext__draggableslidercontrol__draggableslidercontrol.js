
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl || {};

/**
 * Behavior generated from Draggable slider
 */
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl = class DraggableSliderControl extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.ValueMin = behaviorData.ValueMin !== undefined ? behaviorData.ValueMin : Number("0") || 0;
    this._behaviorData.ValueMax = behaviorData.ValueMax !== undefined ? behaviorData.ValueMax : Number("1") || 0;
    this._behaviorData.TickSpacing = behaviorData.TickSpacing !== undefined ? behaviorData.TickSpacing : Number("0") || 0;
    this._behaviorData.ThumbShape = behaviorData.ThumbShape !== undefined ? behaviorData.ThumbShape : "circle";
    this._behaviorData.ThumbWidth = behaviorData.ThumbWidth !== undefined ? behaviorData.ThumbWidth : Number("20") || 0;
    this._behaviorData.ThumbHeight = behaviorData.ThumbHeight !== undefined ? behaviorData.ThumbHeight : Number("20") || 0;
    this._behaviorData.ThumbColor = behaviorData.ThumbColor !== undefined ? behaviorData.ThumbColor : " 24;119;211";
    this._behaviorData.ThumbOpacity = behaviorData.ThumbOpacity !== undefined ? behaviorData.ThumbOpacity : Number("255") || 0;
    this._behaviorData.TrackLength = behaviorData.TrackLength !== undefined ? behaviorData.TrackLength : Number("200") || 0;
    this._behaviorData.TrackThickness = behaviorData.TrackThickness !== undefined ? behaviorData.TrackThickness : Number("4") || 0;
    this._behaviorData.InactiveTrackColor = behaviorData.InactiveTrackColor !== undefined ? behaviorData.InactiveTrackColor : "";
    this._behaviorData.InactiveTrackOpacity = behaviorData.InactiveTrackOpacity !== undefined ? behaviorData.InactiveTrackOpacity : Number("96") || 0;
    this._behaviorData.ActiveTrackColor = behaviorData.ActiveTrackColor !== undefined ? behaviorData.ActiveTrackColor : " ";
    this._behaviorData.ActiveTrackOpacity = behaviorData.ActiveTrackOpacity !== undefined ? behaviorData.ActiveTrackOpacity : Number("255") || 0;
    this._behaviorData.HaloRadius = behaviorData.HaloRadius !== undefined ? behaviorData.HaloRadius : Number("24") || 0;
    this._behaviorData.HaloOpacityHover = behaviorData.HaloOpacityHover !== undefined ? behaviorData.HaloOpacityHover : Number("32") || 0;
    this._behaviorData.HaloOpacityClick = behaviorData.HaloOpacityClick !== undefined ? behaviorData.HaloOpacityClick : Number("64") || 0;
    this._behaviorData.RoundedTrack = behaviorData.RoundedTrack !== undefined ? behaviorData.RoundedTrack : true;
    this._behaviorData.Enabled = behaviorData.Enabled !== undefined ? behaviorData.Enabled : true;
    this._behaviorData.IsBeingDragged = false;
    this._behaviorData.Value = Number("0") || 0;
    this._behaviorData.ThumbOffset = Number("0") || 0;
    this._behaviorData.NeedRedraw = true;
    this._behaviorData.IsHovered = false;
    this._behaviorData.MouseX = Number("") || 0;
    this._behaviorData.MouseY = Number("") || 0;
    this._behaviorData.CurrentHaloRadius = Number("") || 0;
    this._behaviorData.HaloGrowSpeed = Number("0.2") || 0;
    this._behaviorData.TargetHaloRadius = Number("") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.ValueMin !== newBehaviorData.ValueMin)
      this._behaviorData.ValueMin = newBehaviorData.ValueMin;
    if (oldBehaviorData.ValueMax !== newBehaviorData.ValueMax)
      this._behaviorData.ValueMax = newBehaviorData.ValueMax;
    if (oldBehaviorData.TickSpacing !== newBehaviorData.TickSpacing)
      this._behaviorData.TickSpacing = newBehaviorData.TickSpacing;
    if (oldBehaviorData.ThumbShape !== newBehaviorData.ThumbShape)
      this._behaviorData.ThumbShape = newBehaviorData.ThumbShape;
    if (oldBehaviorData.ThumbWidth !== newBehaviorData.ThumbWidth)
      this._behaviorData.ThumbWidth = newBehaviorData.ThumbWidth;
    if (oldBehaviorData.ThumbHeight !== newBehaviorData.ThumbHeight)
      this._behaviorData.ThumbHeight = newBehaviorData.ThumbHeight;
    if (oldBehaviorData.ThumbColor !== newBehaviorData.ThumbColor)
      this._behaviorData.ThumbColor = newBehaviorData.ThumbColor;
    if (oldBehaviorData.ThumbOpacity !== newBehaviorData.ThumbOpacity)
      this._behaviorData.ThumbOpacity = newBehaviorData.ThumbOpacity;
    if (oldBehaviorData.TrackLength !== newBehaviorData.TrackLength)
      this._behaviorData.TrackLength = newBehaviorData.TrackLength;
    if (oldBehaviorData.TrackThickness !== newBehaviorData.TrackThickness)
      this._behaviorData.TrackThickness = newBehaviorData.TrackThickness;
    if (oldBehaviorData.InactiveTrackColor !== newBehaviorData.InactiveTrackColor)
      this._behaviorData.InactiveTrackColor = newBehaviorData.InactiveTrackColor;
    if (oldBehaviorData.InactiveTrackOpacity !== newBehaviorData.InactiveTrackOpacity)
      this._behaviorData.InactiveTrackOpacity = newBehaviorData.InactiveTrackOpacity;
    if (oldBehaviorData.ActiveTrackColor !== newBehaviorData.ActiveTrackColor)
      this._behaviorData.ActiveTrackColor = newBehaviorData.ActiveTrackColor;
    if (oldBehaviorData.ActiveTrackOpacity !== newBehaviorData.ActiveTrackOpacity)
      this._behaviorData.ActiveTrackOpacity = newBehaviorData.ActiveTrackOpacity;
    if (oldBehaviorData.HaloRadius !== newBehaviorData.HaloRadius)
      this._behaviorData.HaloRadius = newBehaviorData.HaloRadius;
    if (oldBehaviorData.HaloOpacityHover !== newBehaviorData.HaloOpacityHover)
      this._behaviorData.HaloOpacityHover = newBehaviorData.HaloOpacityHover;
    if (oldBehaviorData.HaloOpacityClick !== newBehaviorData.HaloOpacityClick)
      this._behaviorData.HaloOpacityClick = newBehaviorData.HaloOpacityClick;
    if (oldBehaviorData.RoundedTrack !== newBehaviorData.RoundedTrack)
      this._behaviorData.RoundedTrack = newBehaviorData.RoundedTrack;
    if (oldBehaviorData.Enabled !== newBehaviorData.Enabled)
      this._behaviorData.Enabled = newBehaviorData.Enabled;
    if (oldBehaviorData.IsBeingDragged !== newBehaviorData.IsBeingDragged)
      this._behaviorData.IsBeingDragged = newBehaviorData.IsBeingDragged;
    if (oldBehaviorData.Value !== newBehaviorData.Value)
      this._behaviorData.Value = newBehaviorData.Value;
    if (oldBehaviorData.ThumbOffset !== newBehaviorData.ThumbOffset)
      this._behaviorData.ThumbOffset = newBehaviorData.ThumbOffset;
    if (oldBehaviorData.NeedRedraw !== newBehaviorData.NeedRedraw)
      this._behaviorData.NeedRedraw = newBehaviorData.NeedRedraw;
    if (oldBehaviorData.IsHovered !== newBehaviorData.IsHovered)
      this._behaviorData.IsHovered = newBehaviorData.IsHovered;
    if (oldBehaviorData.MouseX !== newBehaviorData.MouseX)
      this._behaviorData.MouseX = newBehaviorData.MouseX;
    if (oldBehaviorData.MouseY !== newBehaviorData.MouseY)
      this._behaviorData.MouseY = newBehaviorData.MouseY;
    if (oldBehaviorData.CurrentHaloRadius !== newBehaviorData.CurrentHaloRadius)
      this._behaviorData.CurrentHaloRadius = newBehaviorData.CurrentHaloRadius;
    if (oldBehaviorData.HaloGrowSpeed !== newBehaviorData.HaloGrowSpeed)
      this._behaviorData.HaloGrowSpeed = newBehaviorData.HaloGrowSpeed;
    if (oldBehaviorData.TargetHaloRadius !== newBehaviorData.TargetHaloRadius)
      this._behaviorData.TargetHaloRadius = newBehaviorData.TargetHaloRadius;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    ValueMin: this._behaviorData.ValueMin,
    ValueMax: this._behaviorData.ValueMax,
    TickSpacing: this._behaviorData.TickSpacing,
    ThumbShape: this._behaviorData.ThumbShape,
    ThumbWidth: this._behaviorData.ThumbWidth,
    ThumbHeight: this._behaviorData.ThumbHeight,
    ThumbColor: this._behaviorData.ThumbColor,
    ThumbOpacity: this._behaviorData.ThumbOpacity,
    TrackLength: this._behaviorData.TrackLength,
    TrackThickness: this._behaviorData.TrackThickness,
    InactiveTrackColor: this._behaviorData.InactiveTrackColor,
    InactiveTrackOpacity: this._behaviorData.InactiveTrackOpacity,
    ActiveTrackColor: this._behaviorData.ActiveTrackColor,
    ActiveTrackOpacity: this._behaviorData.ActiveTrackOpacity,
    HaloRadius: this._behaviorData.HaloRadius,
    HaloOpacityHover: this._behaviorData.HaloOpacityHover,
    HaloOpacityClick: this._behaviorData.HaloOpacityClick,
    RoundedTrack: this._behaviorData.RoundedTrack,
    Enabled: this._behaviorData.Enabled,
    IsBeingDragged: this._behaviorData.IsBeingDragged,
    Value: this._behaviorData.Value,
    ThumbOffset: this._behaviorData.ThumbOffset,
    NeedRedraw: this._behaviorData.NeedRedraw,
    IsHovered: this._behaviorData.IsHovered,
    MouseX: this._behaviorData.MouseX,
    MouseY: this._behaviorData.MouseY,
    CurrentHaloRadius: this._behaviorData.CurrentHaloRadius,
    HaloGrowSpeed: this._behaviorData.HaloGrowSpeed,
    TargetHaloRadius: this._behaviorData.TargetHaloRadius,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.ValueMin !== undefined)
      this._behaviorData.ValueMin = networkSyncData.props.ValueMin;
    if (networkSyncData.props.ValueMax !== undefined)
      this._behaviorData.ValueMax = networkSyncData.props.ValueMax;
    if (networkSyncData.props.TickSpacing !== undefined)
      this._behaviorData.TickSpacing = networkSyncData.props.TickSpacing;
    if (networkSyncData.props.ThumbShape !== undefined)
      this._behaviorData.ThumbShape = networkSyncData.props.ThumbShape;
    if (networkSyncData.props.ThumbWidth !== undefined)
      this._behaviorData.ThumbWidth = networkSyncData.props.ThumbWidth;
    if (networkSyncData.props.ThumbHeight !== undefined)
      this._behaviorData.ThumbHeight = networkSyncData.props.ThumbHeight;
    if (networkSyncData.props.ThumbColor !== undefined)
      this._behaviorData.ThumbColor = networkSyncData.props.ThumbColor;
    if (networkSyncData.props.ThumbOpacity !== undefined)
      this._behaviorData.ThumbOpacity = networkSyncData.props.ThumbOpacity;
    if (networkSyncData.props.TrackLength !== undefined)
      this._behaviorData.TrackLength = networkSyncData.props.TrackLength;
    if (networkSyncData.props.TrackThickness !== undefined)
      this._behaviorData.TrackThickness = networkSyncData.props.TrackThickness;
    if (networkSyncData.props.InactiveTrackColor !== undefined)
      this._behaviorData.InactiveTrackColor = networkSyncData.props.InactiveTrackColor;
    if (networkSyncData.props.InactiveTrackOpacity !== undefined)
      this._behaviorData.InactiveTrackOpacity = networkSyncData.props.InactiveTrackOpacity;
    if (networkSyncData.props.ActiveTrackColor !== undefined)
      this._behaviorData.ActiveTrackColor = networkSyncData.props.ActiveTrackColor;
    if (networkSyncData.props.ActiveTrackOpacity !== undefined)
      this._behaviorData.ActiveTrackOpacity = networkSyncData.props.ActiveTrackOpacity;
    if (networkSyncData.props.HaloRadius !== undefined)
      this._behaviorData.HaloRadius = networkSyncData.props.HaloRadius;
    if (networkSyncData.props.HaloOpacityHover !== undefined)
      this._behaviorData.HaloOpacityHover = networkSyncData.props.HaloOpacityHover;
    if (networkSyncData.props.HaloOpacityClick !== undefined)
      this._behaviorData.HaloOpacityClick = networkSyncData.props.HaloOpacityClick;
    if (networkSyncData.props.RoundedTrack !== undefined)
      this._behaviorData.RoundedTrack = networkSyncData.props.RoundedTrack;
    if (networkSyncData.props.Enabled !== undefined)
      this._behaviorData.Enabled = networkSyncData.props.Enabled;
    if (networkSyncData.props.IsBeingDragged !== undefined)
      this._behaviorData.IsBeingDragged = networkSyncData.props.IsBeingDragged;
    if (networkSyncData.props.Value !== undefined)
      this._behaviorData.Value = networkSyncData.props.Value;
    if (networkSyncData.props.ThumbOffset !== undefined)
      this._behaviorData.ThumbOffset = networkSyncData.props.ThumbOffset;
    if (networkSyncData.props.NeedRedraw !== undefined)
      this._behaviorData.NeedRedraw = networkSyncData.props.NeedRedraw;
    if (networkSyncData.props.IsHovered !== undefined)
      this._behaviorData.IsHovered = networkSyncData.props.IsHovered;
    if (networkSyncData.props.MouseX !== undefined)
      this._behaviorData.MouseX = networkSyncData.props.MouseX;
    if (networkSyncData.props.MouseY !== undefined)
      this._behaviorData.MouseY = networkSyncData.props.MouseY;
    if (networkSyncData.props.CurrentHaloRadius !== undefined)
      this._behaviorData.CurrentHaloRadius = networkSyncData.props.CurrentHaloRadius;
    if (networkSyncData.props.HaloGrowSpeed !== undefined)
      this._behaviorData.HaloGrowSpeed = networkSyncData.props.HaloGrowSpeed;
    if (networkSyncData.props.TargetHaloRadius !== undefined)
      this._behaviorData.TargetHaloRadius = networkSyncData.props.TargetHaloRadius;
  }

  // Properties:
  
  _getValueMin() {
    return this._behaviorData.ValueMin !== undefined ? this._behaviorData.ValueMin : Number("0") || 0;
  }
  _setValueMin(newValue) {
    this._behaviorData.ValueMin = newValue;
  }
  _getValueMax() {
    return this._behaviorData.ValueMax !== undefined ? this._behaviorData.ValueMax : Number("1") || 0;
  }
  _setValueMax(newValue) {
    this._behaviorData.ValueMax = newValue;
  }
  _getTickSpacing() {
    return this._behaviorData.TickSpacing !== undefined ? this._behaviorData.TickSpacing : Number("0") || 0;
  }
  _setTickSpacing(newValue) {
    this._behaviorData.TickSpacing = newValue;
  }
  _getThumbShape() {
    return this._behaviorData.ThumbShape !== undefined ? this._behaviorData.ThumbShape : "circle";
  }
  _setThumbShape(newValue) {
    this._behaviorData.ThumbShape = newValue;
  }
  _getThumbWidth() {
    return this._behaviorData.ThumbWidth !== undefined ? this._behaviorData.ThumbWidth : Number("20") || 0;
  }
  _setThumbWidth(newValue) {
    this._behaviorData.ThumbWidth = newValue;
  }
  _getThumbHeight() {
    return this._behaviorData.ThumbHeight !== undefined ? this._behaviorData.ThumbHeight : Number("20") || 0;
  }
  _setThumbHeight(newValue) {
    this._behaviorData.ThumbHeight = newValue;
  }
  _getThumbColor() {
    return this._behaviorData.ThumbColor !== undefined ? this._behaviorData.ThumbColor : " 24;119;211";
  }
  _setThumbColor(newValue) {
    this._behaviorData.ThumbColor = newValue;
  }
  _getThumbOpacity() {
    return this._behaviorData.ThumbOpacity !== undefined ? this._behaviorData.ThumbOpacity : Number("255") || 0;
  }
  _setThumbOpacity(newValue) {
    this._behaviorData.ThumbOpacity = newValue;
  }
  _getTrackLength() {
    return this._behaviorData.TrackLength !== undefined ? this._behaviorData.TrackLength : Number("200") || 0;
  }
  _setTrackLength(newValue) {
    this._behaviorData.TrackLength = newValue;
  }
  _getTrackThickness() {
    return this._behaviorData.TrackThickness !== undefined ? this._behaviorData.TrackThickness : Number("4") || 0;
  }
  _setTrackThickness(newValue) {
    this._behaviorData.TrackThickness = newValue;
  }
  _getInactiveTrackColor() {
    return this._behaviorData.InactiveTrackColor !== undefined ? this._behaviorData.InactiveTrackColor : "";
  }
  _setInactiveTrackColor(newValue) {
    this._behaviorData.InactiveTrackColor = newValue;
  }
  _getInactiveTrackOpacity() {
    return this._behaviorData.InactiveTrackOpacity !== undefined ? this._behaviorData.InactiveTrackOpacity : Number("96") || 0;
  }
  _setInactiveTrackOpacity(newValue) {
    this._behaviorData.InactiveTrackOpacity = newValue;
  }
  _getActiveTrackColor() {
    return this._behaviorData.ActiveTrackColor !== undefined ? this._behaviorData.ActiveTrackColor : " ";
  }
  _setActiveTrackColor(newValue) {
    this._behaviorData.ActiveTrackColor = newValue;
  }
  _getActiveTrackOpacity() {
    return this._behaviorData.ActiveTrackOpacity !== undefined ? this._behaviorData.ActiveTrackOpacity : Number("255") || 0;
  }
  _setActiveTrackOpacity(newValue) {
    this._behaviorData.ActiveTrackOpacity = newValue;
  }
  _getHaloRadius() {
    return this._behaviorData.HaloRadius !== undefined ? this._behaviorData.HaloRadius : Number("24") || 0;
  }
  _setHaloRadius(newValue) {
    this._behaviorData.HaloRadius = newValue;
  }
  _getHaloOpacityHover() {
    return this._behaviorData.HaloOpacityHover !== undefined ? this._behaviorData.HaloOpacityHover : Number("32") || 0;
  }
  _setHaloOpacityHover(newValue) {
    this._behaviorData.HaloOpacityHover = newValue;
  }
  _getHaloOpacityClick() {
    return this._behaviorData.HaloOpacityClick !== undefined ? this._behaviorData.HaloOpacityClick : Number("64") || 0;
  }
  _setHaloOpacityClick(newValue) {
    this._behaviorData.HaloOpacityClick = newValue;
  }
  _getRoundedTrack() {
    return this._behaviorData.RoundedTrack !== undefined ? this._behaviorData.RoundedTrack : true;
  }
  _setRoundedTrack(newValue) {
    this._behaviorData.RoundedTrack = newValue;
  }
  _toggleRoundedTrack() {
    this._setRoundedTrack(!this._getRoundedTrack());
  }
  _getEnabled() {
    return this._behaviorData.Enabled !== undefined ? this._behaviorData.Enabled : true;
  }
  _setEnabled(newValue) {
    this._behaviorData.Enabled = newValue;
  }
  _toggleEnabled() {
    this._setEnabled(!this._getEnabled());
  }
  _getIsBeingDragged() {
    return this._behaviorData.IsBeingDragged !== undefined ? this._behaviorData.IsBeingDragged : false;
  }
  _setIsBeingDragged(newValue) {
    this._behaviorData.IsBeingDragged = newValue;
  }
  _toggleIsBeingDragged() {
    this._setIsBeingDragged(!this._getIsBeingDragged());
  }
  _getValue() {
    return this._behaviorData.Value !== undefined ? this._behaviorData.Value : Number("0") || 0;
  }
  _setValue(newValue) {
    this._behaviorData.Value = newValue;
  }
  _getThumbOffset() {
    return this._behaviorData.ThumbOffset !== undefined ? this._behaviorData.ThumbOffset : Number("0") || 0;
  }
  _setThumbOffset(newValue) {
    this._behaviorData.ThumbOffset = newValue;
  }
  _getNeedRedraw() {
    return this._behaviorData.NeedRedraw !== undefined ? this._behaviorData.NeedRedraw : true;
  }
  _setNeedRedraw(newValue) {
    this._behaviorData.NeedRedraw = newValue;
  }
  _toggleNeedRedraw() {
    this._setNeedRedraw(!this._getNeedRedraw());
  }
  _getIsHovered() {
    return this._behaviorData.IsHovered !== undefined ? this._behaviorData.IsHovered : false;
  }
  _setIsHovered(newValue) {
    this._behaviorData.IsHovered = newValue;
  }
  _toggleIsHovered() {
    this._setIsHovered(!this._getIsHovered());
  }
  _getMouseX() {
    return this._behaviorData.MouseX !== undefined ? this._behaviorData.MouseX : Number("") || 0;
  }
  _setMouseX(newValue) {
    this._behaviorData.MouseX = newValue;
  }
  _getMouseY() {
    return this._behaviorData.MouseY !== undefined ? this._behaviorData.MouseY : Number("") || 0;
  }
  _setMouseY(newValue) {
    this._behaviorData.MouseY = newValue;
  }
  _getCurrentHaloRadius() {
    return this._behaviorData.CurrentHaloRadius !== undefined ? this._behaviorData.CurrentHaloRadius : Number("") || 0;
  }
  _setCurrentHaloRadius(newValue) {
    this._behaviorData.CurrentHaloRadius = newValue;
  }
  _getHaloGrowSpeed() {
    return this._behaviorData.HaloGrowSpeed !== undefined ? this._behaviorData.HaloGrowSpeed : Number("0.2") || 0;
  }
  _setHaloGrowSpeed(newValue) {
    this._behaviorData.HaloGrowSpeed = newValue;
  }
  _getTargetHaloRadius() {
    return this._behaviorData.TargetHaloRadius !== undefined ? this._behaviorData.TargetHaloRadius : Number("") || 0;
  }
  _setTargetHaloRadius(newValue) {
    this._behaviorData.TargetHaloRadius = newValue;
  }
}

/**
 * Shared data generated from Draggable slider
 */
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.SharedData = class DraggableSliderControlSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._DraggableSliderControl_DraggableSliderControlSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._DraggableSliderControl_DraggableSliderControlSharedData = new gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.SharedData(
      initialData
    );
  }
  return instanceContainer._DraggableSliderControl_DraggableSliderControlSharedData;
}

// Methods:
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1[i].setClearBetweenFrames(false);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setValue(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValueMin());
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTrackThickness(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackThickness());
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentHaloRadius(Math.min(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbHeight() / 2, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbWidth() / 2));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdateHitbox((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DraggableSliderControl"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DraggableSliderControl"),
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

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.onCreatedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects4= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects5= [];


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects4);

{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsBeingDragged(false);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects4);

{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects4.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetValue(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValueMin() + (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValueMax() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValueMin()) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbOffset() / eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackLength(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetHaloRadius(1.25 * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadius());
}
}}

}


};gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMouseX() >= -(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadius()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMouseX() <= eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackLength() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadius());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMouseY() >= -(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadius()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMouseY() <= eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadius());
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsBeingDragged(true);
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(14632180);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsHovered(false);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMouseX() >= eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbOffset() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadius());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMouseX() <= eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbOffset() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadius());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMouseY() >= -(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadius()));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMouseY() <= eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadius());
}
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsHovered(true);
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetHaloRadius(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloRadius());
}
}}

}


{



}


{

/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsHovered()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetHaloRadius(Math.min(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbHeight(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbWidth()) / 2);
}
}}

}


};gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMouseX((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3[i].transformToDrawingX(gdjs.evtTools.input.getCursorX(runtimeScene, (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3[i].getLayer()), 0), gdjs.evtTools.input.getCursorY(runtimeScene, (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3[i].getLayer()), 0))));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMouseY((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3[i].transformToDrawingY(gdjs.evtTools.input.getCursorX(runtimeScene, (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3[i].getLayer()), 0), gdjs.evtTools.input.getCursorY(runtimeScene, (gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3[i].getLayer()), 0))));
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsBeingDragged() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setThumbOffset(gdjs.evtTools.common.clamp(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMouseX(), 0, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackLength()));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}
{ //Subevents
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{

/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsBeingDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentHaloRadius() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetHaloRadius()) < 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentHaloRadius(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetHaloRadius());
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


{

/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentHaloRadius() != eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetHaloRadius() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentHaloRadius(gdjs.evtTools.common.lerp(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentHaloRadius(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetHaloRadius(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloGrowSpeed()));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsEnabled((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentHaloRadius() != eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetHaloRadius() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.eventsList5(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DraggableSliderControl"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DraggableSliderControl"),
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

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects5.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.eventsList6(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPreEventsContext.GDObjectObjects5.length = 0;


return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects4= [];


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInactiveTrackColor() == "" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3[i].setFillColor(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbColor());
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInactiveTrackColor() != "" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3[i].setFillColor(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInactiveTrackColor());
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3[i].setFillOpacity(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInactiveTrackOpacity());
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3[i].setOutlineOpacity(0);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3[i].drawRectangle(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbOffset(), -(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackThickness()) / 2, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackLength(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackThickness() / 2);
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRoundedTrack() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].drawArc(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackLength(), 0, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackThickness() / 2, 270, 90, false, true);
}
}}

}


};gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getActiveTrackColor() == "" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3[i].setFillColor(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbColor());
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getActiveTrackColor() != "" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3[i].setFillColor(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getActiveTrackColor());
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3[i].setFillOpacity(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getActiveTrackOpacity());
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3[i].drawRectangle(0, -((eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackThickness() / 2 + 1)), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbOffset(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackThickness() / 2 + 1);
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRoundedTrack() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].drawArc(0, 0, 1 + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackThickness() / 2, 90, 270, false, true);
}
}}

}


};gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3[i].setFillColor(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbColor());
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3[i].setOutlineOpacity(0);
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsBeingDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3[i].setFillOpacity(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloOpacityHover());
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3[i].drawCircle(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbOffset(), 0, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentHaloRadius());
}
}}

}


{



}


{

/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsBeingDragged() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillOpacity(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHaloOpacityClick());
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].drawCircle(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbOffset(), 0, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentHaloRadius());
}
}}

}


};gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentHaloRadius() > Math.min(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbHeight(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbWidth()) / 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillColor(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbColor());
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].setFillOpacity(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbOpacity());
}
}}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbShape() == "circle" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].drawCircle(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbOffset(), 0, Math.ceil(Math.max(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbWidth(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbHeight()) / 2));
}
}}

}


{



}


{

/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbShape() == "rectangle" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1[i].drawRectangle(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbOffset() - (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbWidth() / 2), -(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbHeight()) / 2, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbOffset() + (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbWidth() / 2), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbHeight() / 2);
}
}}

}


};gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.eventsList3(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.eventsList4(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getNeedRedraw() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, (( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1[0].getLayer()));
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(false);
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1[i].clear();
}
}
{ //Subevents
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.eventsList6(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DraggableSliderControl"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DraggableSliderControl"),
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

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.eventsList7(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.doStepPostEventsContext.GDObjectObjects4.length = 0;


return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsBeingDraggedContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsBeingDraggedContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsBeingDraggedContext.GDObjectObjects2= [];


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsBeingDraggedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsBeingDraggedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsBeingDraggedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsBeingDraggedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsBeingDragged() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsBeingDraggedContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsBeingDraggedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsBeingDraggedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsBeingDragged = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DraggableSliderControl"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DraggableSliderControl"),
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

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsBeingDraggedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsBeingDraggedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsBeingDraggedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsBeingDraggedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsBeingDraggedContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsEnabledContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsEnabledContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsEnabledContext.GDObjectObjects2= [];


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsEnabledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsEnabledContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsEnabledContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsEnabledContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getEnabled() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsEnabledContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsEnabledContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsEnabledContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsEnabled = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DraggableSliderControl"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DraggableSliderControl"),
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

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsEnabledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsEnabledContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsEnabledContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsEnabledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.IsEnabledContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetEnabledContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetEnabledContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetEnabledContext.GDObjectObjects2= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetEnabledContext.GDObjectObjects3= [];


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetEnabledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetEnabledContext.GDObjectObjects1, gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetEnabledContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetEnabledContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetEnabledContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsBeingDragged(false);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetEnabledContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetEnabledContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetEnabledContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetHaloRadius(Math.min(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbHeight(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbWidth()) / 2);
}
}}

}


};gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetEnabledContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Enable") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetEnabledContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetEnabledContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetEnabledContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setEnabled(false);
}
}
{ //Subevents
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetEnabledContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Enable") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetEnabledContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetEnabledContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetEnabledContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setEnabled(true);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetEnabledContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetEnabledContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetEnabledContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetEnabled = function(Enable, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DraggableSliderControl"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DraggableSliderControl"),
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
if (argName === "Enable") return Enable;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetEnabledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetEnabledContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetEnabledContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetEnabledContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetEnabledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetEnabledContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetEnabledContext.GDObjectObjects3.length = 0;


return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueContext.GDObjectObjects2= [];


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValue(); }}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.Value = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DraggableSliderControl"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DraggableSliderControl"),
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

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects2= [];


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTickSpacing() <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setValue(eventsFunctionContext.getArgument("Value"));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTickSpacing() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setValue(Math.round(eventsFunctionContext.getArgument("Value") / eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTickSpacing()) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTickSpacing());
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValue() < eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValueMin() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setValue(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValueMin());
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValue() > eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValueMax() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setValue(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValueMax());
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setThumbOffset(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackLength() * (eventsFunctionContext.getArgument("Value") - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValueMin()) / (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValueMax() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValueMin()));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValue = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DraggableSliderControl"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DraggableSliderControl"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueMinContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueMinContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueMinContext.GDObjectObjects2= [];


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueMinContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValueMin(); }}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueMin = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DraggableSliderControl"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DraggableSliderControl"),
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

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueMinContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueMinContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueMinContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueMinContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueMinContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueMinContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueMinContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueMinContext.GDObjectObjects2= [];


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueMinContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueMinContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueMinContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueMinContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setValueMin(eventsFunctionContext.getArgument("ValueMin"));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueMinContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueMinContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetValue((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueMinContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueMin = function(ValueMin, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DraggableSliderControl"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DraggableSliderControl"),
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
if (argName === "ValueMin") return ValueMin;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueMinContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueMinContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueMinContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueMinContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueMinContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueMaxContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getValueMax(); }}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueMax = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DraggableSliderControl"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DraggableSliderControl"),
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

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueMaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ValueMaxContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.TrackThicknessContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.TrackThicknessContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.TrackThicknessContext.GDObjectObjects2= [];


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.TrackThicknessContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackThickness(); }}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.TrackThickness = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DraggableSliderControl"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DraggableSliderControl"),
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

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.TrackThicknessContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.TrackThicknessContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.TrackThicknessContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.TrackThicknessContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.TrackThicknessContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.TrackLengthContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.TrackLengthContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.TrackLengthContext.GDObjectObjects2= [];


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.TrackLengthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackLength(); }}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.TrackLength = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DraggableSliderControl"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DraggableSliderControl"),
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

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.TrackLengthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.TrackLengthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.TrackLengthContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.TrackLengthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.TrackLengthContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ThumbHeightContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ThumbHeightContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ThumbHeightContext.GDObjectObjects2= [];


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ThumbHeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbHeight(); }}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ThumbHeight = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DraggableSliderControl"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DraggableSliderControl"),
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

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ThumbHeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ThumbHeightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ThumbHeightContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ThumbHeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.ThumbHeightContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueMaxContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueMaxContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueMaxContext.GDObjectObjects2= [];


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueMaxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueMaxContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueMaxContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueMaxContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setValueMax(eventsFunctionContext.getArgument("ValueMax"));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueMaxContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueMaxContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetValue((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueMaxContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueMax = function(ValueMax, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DraggableSliderControl"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DraggableSliderControl"),
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
if (argName === "ValueMax") return ValueMax;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueMaxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueMaxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueMaxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetValueMaxContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.TickSpacingContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.TickSpacingContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.TickSpacingContext.GDObjectObjects2= [];


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.TickSpacingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getArgument("TickSpacing"); }}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.TickSpacing = function(TickSpacing, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DraggableSliderControl"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DraggableSliderControl"),
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
if (argName === "TickSpacing") return TickSpacing;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.TickSpacingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.TickSpacingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.TickSpacingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.TickSpacingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.TickSpacingContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTickSpacingContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTickSpacingContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTickSpacingContext.GDObjectObjects2= [];


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTickSpacingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTickSpacingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTickSpacingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTickSpacingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTickSpacing(eventsFunctionContext.getArgument("TickSpacing"));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTickSpacingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTickSpacingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetValue((gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTickSpacingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTickSpacing = function(TickSpacing, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DraggableSliderControl"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DraggableSliderControl"),
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
if (argName === "TickSpacing") return TickSpacing;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTickSpacingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTickSpacingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTickSpacingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTickSpacingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTickSpacingContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackLengthContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackLengthContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackLengthContext.GDObjectObjects2= [];


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackLengthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackLengthContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackLengthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackLengthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTrackLength(eventsFunctionContext.getArgument("Value"));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackLengthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackLengthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdateHitbox((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackLengthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackLengthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackLengthContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackLengthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackLengthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetValue(eventsFunctionContext.getArgument("Value"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackLength = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DraggableSliderControl"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DraggableSliderControl"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackLengthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackLengthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackLengthContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackLengthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackLengthContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackThicknessContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackThicknessContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackThicknessContext.GDObjectObjects2= [];


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackThicknessContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackThicknessContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackThicknessContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackThicknessContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTrackThickness(eventsFunctionContext.getArgument("Value"));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackThicknessContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackThicknessContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackThicknessContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackThicknessContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackThicknessContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbWidth() < eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackThickness() + 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackThicknessContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackThicknessContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackThicknessContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackThicknessContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackThicknessContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackThicknessContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetThumbWidth(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackThickness() + 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackThicknessContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackThicknessContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackThicknessContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbHeight() < eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackThickness() + 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackThicknessContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackThicknessContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackThicknessContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackThicknessContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackThicknessContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackThicknessContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetThumbHeight(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackThickness() + 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackThickness = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DraggableSliderControl"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DraggableSliderControl"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackThicknessContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackThicknessContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackThicknessContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackThicknessContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetTrackThicknessContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects2= [];


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setThumbWidth(Math.max(eventsFunctionContext.getArgument("Value"), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackThickness() + 2));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdateHitbox((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidth = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DraggableSliderControl"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DraggableSliderControl"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbWidthContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbHeightContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbHeightContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbHeightContext.GDObjectObjects2= [];


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbHeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbHeightContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbHeightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbHeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setThumbHeight(Math.max(eventsFunctionContext.getArgument("Value"), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackThickness() + 2));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbHeightContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbHeightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbHeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).UpdateHitbox((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbHeightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbHeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbHeight = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DraggableSliderControl"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DraggableSliderControl"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbHeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbHeightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbHeightContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbHeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbHeightContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloRadiusContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloRadiusContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloRadiusContext.GDObjectObjects2= [];


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloRadiusContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloRadiusContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloRadiusContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloRadiusContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHaloRadius(eventsFunctionContext.getArgument("Value"));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloRadiusContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloRadiusContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloRadius = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DraggableSliderControl"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DraggableSliderControl"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloRadiusContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloRadiusContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloRadiusContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloRadiusContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloRadiusContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloOpacityHoverContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloOpacityHoverContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloOpacityHoverContext.GDObjectObjects2= [];


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloOpacityHoverContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloOpacityHoverContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloOpacityHoverContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloOpacityHoverContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHaloOpacityHover(eventsFunctionContext.getArgument("Value"));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloOpacityHoverContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloOpacityHoverContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloOpacityHover = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DraggableSliderControl"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DraggableSliderControl"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloOpacityHoverContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloOpacityHoverContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloOpacityHoverContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloOpacityHoverContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloOpacityHoverContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloOpacityPressedContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloOpacityPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloOpacityPressedContext.GDObjectObjects2= [];


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloOpacityPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloOpacityPressedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloOpacityPressedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloOpacityPressedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setHaloOpacityClick(eventsFunctionContext.getArgument("Value"));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloOpacityPressedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloOpacityPressedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloOpacityPressed = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DraggableSliderControl"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DraggableSliderControl"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloOpacityPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloOpacityPressedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloOpacityPressedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloOpacityPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetHaloOpacityPressedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects2= [];


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setThumbShape(eventsFunctionContext.getArgument("Shape"));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbShape() == "rectangle" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbWidth() < eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackThickness() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1[k] = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetThumbWidth(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackThickness(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShape = function(Shape, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DraggableSliderControl"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DraggableSliderControl"),
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
if (argName === "Shape") return Shape;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbShapeContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.GDObjectObjects2= [];


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((eventsFunctionContext.getArgument("Value") ? 1 : 0) == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRoundedTrack(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((eventsFunctionContext.getArgument("Value") ? 1 : 0) == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRoundedTrack(true);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrack = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DraggableSliderControl"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DraggableSliderControl"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetRoundedTrackContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbOpacityContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbOpacityContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbOpacityContext.GDObjectObjects2= [];


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbOpacityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbOpacityContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbOpacityContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbOpacityContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setThumbOpacity(eventsFunctionContext.getArgument("Value"));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbOpacityContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbOpacityContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbOpacity = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DraggableSliderControl"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DraggableSliderControl"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbOpacityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbOpacityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbOpacityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbOpacityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbOpacityContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackOpacityContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackOpacityContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackOpacityContext.GDObjectObjects2= [];


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackOpacityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackOpacityContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackOpacityContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackOpacityContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setInactiveTrackOpacity(eventsFunctionContext.getArgument("Value"));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackOpacityContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackOpacityContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackOpacity = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DraggableSliderControl"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DraggableSliderControl"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackOpacityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackOpacityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackOpacityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackOpacityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackOpacityContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackOpacityContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackOpacityContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackOpacityContext.GDObjectObjects2= [];


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackOpacityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackOpacityContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackOpacityContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackOpacityContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setActiveTrackOpacity(eventsFunctionContext.getArgument("Value"));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackOpacityContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackOpacityContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackOpacity = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DraggableSliderControl"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DraggableSliderControl"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackOpacityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackOpacityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackOpacityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackOpacityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackOpacityContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackColorContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackColorContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackColorContext.GDObjectObjects2= [];


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackColorContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackColorContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackColorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setActiveTrackColor(eventsFunctionContext.getArgument("Color"));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackColorContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackColorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackColor = function(Color, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DraggableSliderControl"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DraggableSliderControl"),
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
if (argName === "Color") return Color;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackColorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackColorContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackColorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackColorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetActiveTrackColorContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackColorContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackColorContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackColorContext.GDObjectObjects2= [];


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackColorContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackColorContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackColorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setInactiveTrackColor(eventsFunctionContext.getArgument("Color"));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackColorContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackColorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackColor = function(Color, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DraggableSliderControl"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DraggableSliderControl"),
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
if (argName === "Color") return Color;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackColorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackColorContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackColorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackColorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetInactiveTrackColorContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbColorContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbColorContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbColorContext.GDObjectObjects2= [];


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbColorContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbColorContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbColorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setThumbColor(eventsFunctionContext.getArgument("Color"));
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbColorContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbColorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setNeedRedraw(true);
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbColor = function(Color, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DraggableSliderControl"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DraggableSliderControl"),
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
if (argName === "Color") return Color;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbColorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbColorContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbColorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbColorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.SetThumbColorContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.UpdateHitboxContext = {};
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.UpdateHitboxContext.GDObjectObjects1= [];
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.UpdateHitboxContext.GDObjectObjects2= [];


gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.UpdateHitboxContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.UpdateHitboxContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.UpdateHitboxContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.UpdateHitboxContext.GDObjectObjects1[i].setRotationCenter(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackLength() / 2, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackThickness() / 2);
}
}{for(var i = 0, len = gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.UpdateHitboxContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.UpdateHitboxContext.GDObjectObjects1[i].setRectangularCollisionMask(-(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbWidth()) / 2, -(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbHeight()) / 2, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTrackLength() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbWidth() / 2, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThumbHeight() / 2);
}
}}

}


};

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.UpdateHitbox = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DraggableSliderControl"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DraggableSliderControl"),
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

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.UpdateHitboxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.UpdateHitboxContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.UpdateHitboxContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.UpdateHitboxContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl.prototype.UpdateHitboxContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("DraggableSliderControl::DraggableSliderControl", gdjs.evtsExt__DraggableSliderControl__DraggableSliderControl.DraggableSliderControl);
