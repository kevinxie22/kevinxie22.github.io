(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{676:function(e,t,n){e.exports=n(677)},677:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var a=n(0),i=a.__importDefault(n(3)),o=a.__importDefault(n(678)),r=a.__importDefault(n(818)),s=a.__importDefault(n(54)),d=a.__importDefault(n(25)),u=a.__importDefault(n(11)),c=a.__importDefault(n(199)),f=a.__importDefault(n(4)),l=a.__importDefault(n(6)),g=a.__importDefault(n(57)),p=a.__importDefault(n(550)),h=a.__importDefault(n(405)),m=a.__importDefault(n(37)),v=n(407),A=n(349),y=a.__importDefault(n(175)),C=n(364)
function T(){Office.context.mailbox.addHandlerAsync(Office.EventType.OfficeThemeChanged,function(e){var t=v.ThemeUtils.convertToThemeTypes(e.officeTheme.bodyBackgroundColor)
h.default.setTheme(t),f.default.logInformation("User change theme to "+t,C.AgaveType.BackgroundAgave,"ChangeTheme")},function(e){e.status===Office.AsyncResultStatus.Failed&&f.default.logAssert("Failed to register with error: "+e.error.message,C.AgaveType.BackgroundAgave,"registerThemeChangedEventListener")})}n(1044),window.onunhandledrejection=function(e){e.promise
var t=e.reason
f.default.logAssert("Caught error: "+JSON.stringify(null==t?void 0:t.stack),"PromiseRejection","UnhandledRejection")},n(1046),d.default.isInBackgroundMode||(A.AppInsights.downloadAndSetup({instrumentationKey:d.default.AppInsightsId}),A.AppInsights.trackPageView("App",window.location.href,{sessionGuid:g.default.sessionGuid})),Office.initialize=function(e){d.default.isInBackgroundMode&&d.default.stopReloadInBackgroundMode||l.default.onDocumentReady(function(){return f.default.logOnSessionStart(),l.default.officejsHasBeenInitialized=!0,y.default.clearDebugMessage(),s.default.doesSupportRestToken?(Office.context.mailbox.addHandlerAsync&&(d.default.isInBackgroundMode||Office.context.mailbox.addHandlerAsync(Office.EventType.ItemChanged,function(e){var t
e.initialData?(t=e.initialData.internetMessageId?e.initialData.internetMessageId:"null internetMessageId",f.default.logInformation(t,C.AgaveType.StickyAgave,"Office.EventType.ItemChanged"),c.default.resetQueue(),u.default.dispatch({actionType:i.default.RefreshStateForItemChanged,newItem:e})):f.default.logInformation(m.default.currentItemId()||"no item context",C.AgaveType.StickyAgave,"Office.EventType.ItemChanged - null")},function(e){e.status===Office.AsyncResultStatus.Failed&&f.default.logAssert("Failed to register with error: "+e.error.message,C.AgaveType.StickyAgave,"Office.EventType.ItemChanged.Registered")}),!d.default.isInBackgroundMode&&s.default.doesSupportThemeChangedEventListener&&T(),s.default.doesSupportChangeEventListeners&&l.default.isCurrentItemAvailable&&(Office.context.mailbox.item.addHandlerAsync(Office.EventType.RecipientsChanged,function(e){e&&e.changedRecipientFields?(o.default.onRecipientsChanged(e.changedRecipientFields),f.default.logInformation("User has changed the current recipients",C.AgaveType.BackgroundAgave,"registerRecipientsChangedEvent")):f.default.logAssert("Outlook recipients changed event listener is firing incorrect: missing changedRecipientFields",C.AgaveType.BackgroundAgave,"registerRecipientsChangedEvent")},function(e){e.status===Office.AsyncResultStatus.Failed&&f.default.logAssert("Failed to register with error: "+e.error.message,C.AgaveType.BackgroundAgave,"registerRecipientsChangedEvent")}),Office.context.mailbox.item.addHandlerAsync(Office.EventType.AppointmentTimeChanged,function(e){e?(o.default.onAppointmentTimeChanged(e),f.default.logInformation("User has changed the appointment time",C.AgaveType.BackgroundAgave,"AppointmentTimeChangedEvent")):f.default.logAssert("Outlook appointment time changed event listener is firing incorrect.",C.AgaveType.BackgroundAgave,"AppointmentTimeChangedEvent")},function(e){e.status===Office.AsyncResultStatus.Failed&&f.default.logAssert("Failed to register with error: "+e.error.message,C.AgaveType.BackgroundAgave,"registerAppointmentTimeChangedEvent")}),s.default.doesSupportAttachmentApi&&Office.context.mailbox.item.addHandlerAsync(Office.EventType.AttachmentsChanged,function(e){e?(o.default.onAttachmentsChanged(),f.default.logInformation("User has changed the attachment event",C.AgaveType.BackgroundAgave,"AttachmentChangedEvent")):f.default.logAssert("Outlook attachment changed event listener is firing incorrect.",C.AgaveType.BackgroundAgave,"AttachmentChangedEvent")},function(e){e.status===Office.AsyncResultStatus.Failed&&f.default.logAssert("Failed to register with error: "+e.error.message,C.AgaveType.BackgroundAgave,"registerAttachmentsChangedEventListener")}),d.default.isInBackgroundMode&&s.default.doesSupportInfobarClickedCallback&&Office.context.mailbox.item.addHandlerAsync(Office.EventType.InfobarClicked,function(e){e&&e.infobarDetails?(o.default.onInfobarClicked(e),f.default.logInformation("User has clicked the infobar",C.AgaveType.BackgroundAgave,"registerInfobarClickedEvent")):f.default.logAssert("Outlook infobar clicked event listener fired incorrectly: missing infobarEvent",C.AgaveType.BackgroundAgave,"registerInfobarClickedEvent")},function(e){e.status===Office.AsyncResultStatus.Failed&&f.default.logAssert("Failed to register with error: "+e.error.message,C.AgaveType.BackgroundAgave,"registerInfobarClickedEvent")}),s.default.doesSupportRecurrenceChangedEventListeners&&Office.context.mailbox.item.addHandlerAsync(Office.EventType.RecurrenceChanged,function(e){e?(o.default.onRecurrenceChanged(e),f.default.logInformation("User has changed the recurrence event",C.AgaveType.BackgroundAgave,"RecurrenceChangedEvent")):f.default.logAssert("Outlook recurrence changed event listener is firing incorrect.",C.AgaveType.BackgroundAgave,"RecurrenceChangedEvent")},function(e){e.status===Office.AsyncResultStatus.Failed&&f.default.logAssert("Failed to register with error: "+e.error.message,C.AgaveType.BackgroundAgave,"registerRecurrenceChangedEventListener")}))),r.default.registerStoreObserversAndActivate()):Office.context.mailbox.addHandlerAsync&&!d.default.isInBackgroundMode&&s.default.doesSupportThemeChangedEventListener&&T(),void p.default.requestInitializationData()})}},678:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.BackgroundAddinActionCreator=void 0
var a=n(0),i=a.__importDefault(n(3)),o=a.__importDefault(n(11)),r=n(364),s=a.__importDefault(n(4)),d=n(365),u=n(276),c=a.__importDefault(n(196)),f=a.__importDefault(n(37)),l=a.__importDefault(n(89)),g=(p.prototype.onRecipientsChanged=function(e){var t,n,a,i
f.default.getState().isMessage()?(t=e,n=f.default.asComposeMessage(),t.to&&l.default.onMessageToRecipientChanged(n),t.cc&&l.default.onMessageCcRecipientChanged(n),t.bcc&&l.default.onMessageBccRecipientChanged(n)):(a=e,i=f.default.asComposeAppointment(),a.requiredAttendees&&a.optionalAttendees?l.default.onAppointmentBothFieldsChanged(i):a.requiredAttendees?l.default.onAppointmentRequiredRecipientChanged(i):a.optionalAttendees&&l.default.onAppointmentOptionalRecipientsChanged(i))},p.prototype.onAppointmentTimeChanged=function(e){l.default.dispatchAppointmentTimeChanged(new Date(e.start),new Date(e.end))},p.prototype.onRecurrenceChanged=function(e){l.default.dispatchRecurrenceObjectChanged(e.recurrence)},p.prototype.onInfobarClicked=function(e){var t
e.actionDetails="string"==typeof e.infobarDetails?JSON.parse(e.infobarDetails):e.infobarDetails,e.actionDetails.infobarType===d.InfobarType.Insight&&(t=e.actionDetails.actionType,s.default.logClick(c.default.getState().currentInfobarIdentifier().insightName,{getFeatureNameForLogging:function(){return r.AgaveType.BackgroundAgave},getRegionNameForLogging:function(){return u.InfobarConstants.InfobarFeatureName},getLoadEventLoggingProperties:function(){return{}},getClickEventLoggingProperties:function(){return{Action:d.InfobarButtonActionType[t]}}}),t===d.InfobarButtonActionType.Dismiss&&o.default.dispatch({actionType:i.default.DismissInfobarInsight}))},p.prototype.onAttachmentsChanged=function(){f.default.getState().isAppointmentOrMeeting()?l.default.onAttachmentObjectChanged(f.default.asComposeAppointment()):l.default.onAttachmentObjectChanged(f.default.asComposeMessage())},p)
function p(){}t.BackgroundAddinActionCreator=g,t.default=new g},818:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.BootLoader=void 0
var a=n(0),i=a.__importDefault(n(173)),o=a.__importDefault(n(285)),r=a.__importDefault(n(499)),s=a.__importDefault(n(305)),d=a.__importDefault(n(528)),u=a.__importDefault(n(542)),c=(f.prototype.registerStoreObserversAndActivate=function(){this.storeObserver||(this.storeObserver=new s.default(this.onStateChange.bind(this),this.calculateState.bind(this),this.storesToObserve))},f.prototype.disposeStoreObservers=function(){this.storeObserver.dispose(),this.storeObserver=null},Object.defineProperty(f.prototype,"storesToObserve",{get:function(){return[o.default,i.default]},enumerable:!1,configurable:!0}),f.prototype.calculateState=function(e){var t=null==e?void 0:e.hasDependencyLoadTriggered,n=null==e?void 0:e.haveObserversAndComputesActivated
return this.readyToTriggerDependencyLoad()&&!t&&(r.default.triggerLoadAsync(),t=!0),this.readyToActivateObserversAndComputes()&&!n&&(d.default.activateInsightsCompute(),u.default.registerStoreObserversAndActivate(),n=!0),{hasDependencyLoadTriggered:t,haveObserversAndComputesActivated:n}},f.prototype.onStateChange=function(e){e.hasDependencyLoadTriggered&&e.haveObserversAndComputesActivated&&this.disposeStoreObservers()},f.prototype.readyToTriggerDependencyLoad=function(){var e=o.default.getState().userFlights(),t=o.default.isRESTCallbackTokenReady
return e&&t},f.prototype.readyToActivateObserversAndComputes=function(){var e=o.default.isCoreRequiredDataReady,t=i.default.getState().hasLoadedFromStorage()
return e&&t},f)
function f(){}t.BootLoader=c,t.default=new c}},[[676,0,1,2]]])
