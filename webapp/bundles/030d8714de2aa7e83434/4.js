(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1079:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.scorePassword=function(e){if(0===e.length)return null;var t=l.slice();t.push(n.default.get().getUserIdLocalpart());var a=(0,s.default)(e,t);if(e.includes(" ")){var o=(0,s.default)(e.replace(/ /g,""),t);o.score<a.score&&(a=o)}for(var i=0;i<a.feedback.suggestions.length;++i)a.feedback.suggestions[i]=(0,r._t)(a.feedback.suggestions[i]);a.feedback.warning&&(a.feedback.warning=(0,r._t)(a.feedback.warning));return a};var s=o(a(1080)),n=o(a(8)),r=a(2);function o(e){return e&&e.__esModule?e:{default:e}}var l=["riot","matrix"];(0,r._td)("Use a few words, avoid common phrases"),(0,r._td)("No need for symbols, digits, or uppercase letters"),(0,r._td)("Use a longer keyboard pattern with more turns"),(0,r._td)("Avoid repeated words and characters"),(0,r._td)("Avoid sequences"),(0,r._td)("Avoid recent years"),(0,r._td)("Avoid years that are associated with you"),(0,r._td)("Avoid dates and years that are associated with you"),(0,r._td)("Capitalization doesn't help very much"),(0,r._td)("All-uppercase is almost as easy to guess as all-lowercase"),(0,r._td)("Reversed words aren't much harder to guess"),(0,r._td)("Predictable substitutions like '@' instead of 'a' don't help very much"),(0,r._td)("Add another word or two. Uncommon words are better."),(0,r._td)('Repeats like "aaa" are easy to guess'),(0,r._td)('Repeats like "abcabcabc" are only slightly harder to guess than "abc"'),(0,r._td)("Sequences like abc or 6543 are easy to guess"),(0,r._td)("Recent years are easy to guess"),(0,r._td)("Dates are often easy to guess"),(0,r._td)("This is a top-10 common password"),(0,r._td)("This is a top-100 common password"),(0,r._td)("This is a very common password"),(0,r._td)("This is similar to a commonly used password"),(0,r._td)("A word by itself is easy to guess"),(0,r._td)("Names and surnames by themselves are easy to guess"),(0,r._td)("Common names and surnames are easy to guess")},701:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=d(a(24)),n=a(14),r=d(a(0)),o=d(a(3)),l=d(a(8)),i=a(1079),u=d(a(690)),c=a(2);function d(e){return e&&e.__esModule?e:{default:e}}var h=5;t.default=r.default.createClass({displayName:"CreateKeyBackupDialog",getInitialState:function(){return{phase:0,passPhrase:"",passPhraseConfirm:"",copied:!1,downloaded:!1,zxcvbnResult:null,setPassPhrase:!1}},componentWillMount:function(){this._recoveryKeyNode=null,this._keyBackupInfo=null},_collectRecoveryKeyNode:function(e){this._recoveryKeyNode=e},_onCopyClick:function(){!function(e){var t=document.createRange();t.selectNodeContents(e);var a=window.getSelection();a.removeAllRanges(),a.addRange(t)}(this._recoveryKeyNode),document.execCommand("copy")&&this.setState({copied:!0,phase:3})},_onDownloadClick:function(){var e=new Blob([this._keyBackupInfo.recovery_key],{type:"text/plain;charset=us-ascii"});u.default.saveAs(e,"recovery-key.txt"),this.setState({downloaded:!0,phase:3})},_createBackup:function(){var e=this;this.setState({phase:4,error:null}),this._createBackupPromise=l.default.get().createKeyBackupVersion(this._keyBackupInfo).then(function(e){return l.default.get().backupAllGroupSessions(e.version)}).then(function(){e.setState({phase:h})}).catch(function(t){console.log("Error creating key backup",t),e.setState({error:t})})},_onCancel:function(){this.props.onFinished(!1)},_onDone:function(){this.props.onFinished(!0)},_onOptOutClick:function(){this.setState({phase:6})},_onSetUpClick:function(){this.setState({phase:0})},_onSkipPassPhraseClick:function(){var e=(0,n.coroutine)(s.default.mark(function e(){return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,n.resolve)(l.default.get().prepareKeyBackupVersion());case 2:this._keyBackupInfo=e.sent,this.setState({copied:!1,downloaded:!1,phase:2});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),_onPassPhraseNextClick:function(){this.setState({phase:1})},_onPassPhraseKeyPress:function(e){"Enter"===e.key&&this._passPhraseIsValid()&&this._onPassPhraseNextClick()},_onPassPhraseConfirmNextClick:function(){var e=(0,n.coroutine)(s.default.mark(function e(){return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,n.resolve)(l.default.get().prepareKeyBackupVersion(this.state.passPhrase));case 2:this._keyBackupInfo=e.sent,this.setState({setPassPhrase:!0,copied:!1,downloaded:!1,phase:2});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),_onPassPhraseConfirmKeyPress:function(e){"Enter"===e.key&&this.state.passPhrase===this.state.passPhraseConfirm&&this._onPassPhraseConfirmNextClick()},_onSetAgainClick:function(){this.setState({passPhrase:"",passPhraseConfirm:"",phase:0})},_onKeepItSafeGotItClick:function(){this.setState({phase:2})},_onPassPhraseChange:function(e){this.setState({passPhrase:e.target.value,zxcvbnResult:(0,i.scorePassword)(e.target.value)})},_onPassPhraseConfirmChange:function(e){this.setState({passPhraseConfirm:e.target.value})},_passPhraseIsValid:function(){return this.state.zxcvbnResult&&this.state.zxcvbnResult.score>=4},_renderPhasePassPhrase:function(){var e=this,t=o.default.getComponent("views.elements.DialogButtons"),a=o.default.getComponent("elements.AccessibleButton"),s=void 0,n=void 0;if(this.state.zxcvbnResult){if(this.state.zxcvbnResult.score>=4)n=(0,c._t)("Great! This passphrase looks strong enough.");else{for(var l=[],i=0;i<this.state.zxcvbnResult.feedback.suggestions.length;++i)l.push(r.default.createElement("div",{key:i},this.state.zxcvbnResult.feedback.suggestions[i]));var u=l.length>0?r.default.createElement("div",null,l):null;n=r.default.createElement("div",null,this.state.zxcvbnResult.feedback.warning,u)}s=r.default.createElement("div",null,r.default.createElement("progress",{max:4,value:this.state.zxcvbnResult.score}))}return r.default.createElement("div",null,r.default.createElement("p",null,(0,c._t)("Secure your encrypted message history with a Recovery Passphrase.")),r.default.createElement("p",null,(0,c._t)("You'll need it if you log out or lose access to this device.")),r.default.createElement("div",{className:"mx_CreateKeyBackupDialog_primaryContainer"},r.default.createElement("div",{className:"mx_CreateKeyBackupDialog_passPhraseHelp"},s,n),r.default.createElement("input",{type:"password",onChange:this._onPassPhraseChange,onKeyPress:this._onPassPhraseKeyPress,value:this.state.passPhrase,className:"mx_CreateKeyBackupDialog_passPhraseInput",placeholder:(0,c._t)("Enter a passphrase...")})),r.default.createElement(t,{primaryButton:(0,c._t)("Next"),onPrimaryButtonClick:this._onPassPhraseNextClick,hasCancel:!1,disabled:!this._passPhraseIsValid()}),r.default.createElement("p",null,(0,c._t)("If you don't want encrypted message history to be availble on other devices, <button>opt out</button>.",{},{button:function(t){return r.default.createElement(a,{element:"span",className:"mx_linkButton",onClick:e._onOptOutClick},t)}})),r.default.createElement("p",null,(0,c._t)("Or, if you don't want to create a Recovery Passphrase, skip this step and <button>download a recovery key</button>.",{},{button:function(t){return r.default.createElement(a,{element:"span",className:"mx_linkButton",onClick:e._onSkipPassPhraseClick},t)}})))},_renderPhasePassPhraseConfirm:function(){var e=o.default.getComponent("elements.AccessibleButton"),t=null;if(this.state.passPhraseConfirm.length>0){var a=void 0;a=this.state.passPhraseConfirm===this.state.passPhrase?(0,c._t)("That matches!"):(0,c._t)("That doesn't match."),t=r.default.createElement("div",{className:"mx_CreateKeyBackupDialog_passPhraseMatch"},r.default.createElement("div",null,a),r.default.createElement("div",null,r.default.createElement(e,{element:"span",className:"mx_linkButton",onClick:this._onSetAgainClick},(0,c._t)("Go back to set it again."))))}var s=o.default.getComponent("views.elements.DialogButtons");return r.default.createElement("div",null,r.default.createElement("p",null,(0,c._t)("Type in your Recovery Passphrase to confirm you remember it. If it helps, add it to your password manager or store it somewhere safe.")),r.default.createElement("div",{className:"mx_CreateKeyBackupDialog_primaryContainer"},t,r.default.createElement("div",null,r.default.createElement("input",{type:"password",onChange:this._onPassPhraseConfirmChange,onKeyPress:this._onPassPhraseConfirmKeyPress,value:this.state.passPhraseConfirm,className:"mx_CreateKeyBackupDialog_passPhraseInput",placeholder:(0,c._t)("Repeat your passphrase..."),autoFocus:!0}))),r.default.createElement(s,{primaryButton:(0,c._t)("Next"),onPrimaryButtonClick:this._onPassPhraseConfirmNextClick,hasCancel:!1,disabled:this.state.passPhrase!==this.state.passPhraseConfirm}))},_renderPhaseShowKey:function(){var e=o.default.getComponent("views.elements.DialogButtons"),t=void 0;return t=this.state.setPassPhrase?(0,c._t)("As a safety net, you can use it to restore your encrypted message history if you forget your Recovery Passphrase."):(0,c._t)("As a safety net, you can use it to restore your encrypted message history."),r.default.createElement("div",null,r.default.createElement("p",null,(0,c._t)("Make a copy of this Recovery Key and keep it safe.")),r.default.createElement("p",null,t),r.default.createElement("p",{className:"mx_CreateKeyBackupDialog_primaryContainer"},r.default.createElement("div",null,(0,c._t)("Your Recovery Key")),r.default.createElement("div",{className:"mx_CreateKeyBackupDialog_recoveryKeyButtons"},r.default.createElement("button",{onClick:this._onCopyClick},(0,c._t)("Copy to clipboard")),r.default.createElement("br",null),r.default.createElement("br",null),r.default.createElement("button",{onClick:this._onDownloadClick},(0,c._t)("Download"))),r.default.createElement("div",{className:"mx_CreateKeyBackupDialog_recoveryKey"},r.default.createElement("code",{ref:this._collectRecoveryKeyNode},this._keyBackupInfo.recovery_key))),r.default.createElement("br",null),r.default.createElement(e,{primaryButton:(0,c._t)("I've made a copy"),onPrimaryButtonClick:this._createBackup,hasCancel:!1,disabled:!this.state.copied&&!this.state.downloaded}))},_renderPhaseKeepItSafe:function(){var e=void 0;this.state.copied?e=(0,c._t)("Your Recovery Key has been <b>copied to your clipboard</b>, paste it to:",{},{b:function(e){return r.default.createElement("b",null,e)}}):this.state.downloaded&&(e=(0,c._t)("Your Recovery Key is in your <b>Downloads</b> folder.",{},{b:function(e){return r.default.createElement("b",null,e)}}));var t=o.default.getComponent("views.elements.DialogButtons");return r.default.createElement("div",null,e,r.default.createElement("ul",null,r.default.createElement("li",null,(0,c._t)("<b>Print it</b> and store it somewhere safe",{},{b:function(e){return r.default.createElement("b",null,e)}})),r.default.createElement("li",null,(0,c._t)("<b>Save it</b> on a USB key or backup drive",{},{b:function(e){return r.default.createElement("b",null,e)}})),r.default.createElement("li",null,(0,c._t)("<b>Copy it</b> to your personal cloud storage",{},{b:function(e){return r.default.createElement("b",null,e)}}))),r.default.createElement(t,{primaryButton:(0,c._t)("Got it"),onPrimaryButtonClick:this._onKeepItSafeGotItClick,hasCancel:!1}))},_renderBusyPhase:function(e){var t=o.default.getComponent("views.elements.Spinner");return r.default.createElement("div",null,r.default.createElement("p",null,(0,c._t)(e)),r.default.createElement(t,null))},_renderPhaseDone:function(){var e=o.default.getComponent("views.elements.DialogButtons");return r.default.createElement("div",null,r.default.createElement("p",null,(0,c._t)("Backup created")),r.default.createElement("p",null,(0,c._t)("Your encryption keys are now being backed up to your Homeserver.")),r.default.createElement(e,{primaryButton:(0,c._t)("Close"),onPrimaryButtonClick:this._onDone,hasCancel:!1}))},_renderPhaseOptOutConfirm:function(){var e=o.default.getComponent("views.elements.DialogButtons");return r.default.createElement("div",null,(0,c._t)("Without setting up Secure Message Recovery, you won't be able to restore your encrypted message history if you log out or use another device."),r.default.createElement(e,{primaryButton:(0,c._t)("Set up Secure Message Recovery"),onPrimaryButtonClick:this._onSetUpClick,hasCancel:!1},r.default.createElement("button",{onClick:this._onCancel},"I understand, continue without")))},_titleForPhase:function(e){switch(e){case 0:return(0,c._t)("Create a Recovery Passphrase");case 1:return(0,c._t)("Confirm Recovery Passphrase");case 6:return(0,c._t)("Warning!");case 2:return(0,c._t)("Recovery Key");case 3:return(0,c._t)("Keep it safe");case 4:return(0,c._t)("Backing up...");default:return(0,c._t)("Create Key Backup")}},render:function(){var e=o.default.getComponent("views.dialogs.BaseDialog"),t=void 0;if(this.state.error){var a=o.default.getComponent("views.elements.DialogButtons");t=r.default.createElement("div",null,r.default.createElement("p",null,(0,c._t)("Unable to create key backup")),r.default.createElement("div",{className:"mx_Dialog_buttons"},r.default.createElement(a,{primaryButton:(0,c._t)("Retry"),onPrimaryButtonClick:this._createBackup,hasCancel:!0,onCancel:this._onCancel})))}else switch(this.state.phase){case 0:t=this._renderPhasePassPhrase();break;case 1:t=this._renderPhasePassPhraseConfirm();break;case 2:t=this._renderPhaseShowKey();break;case 3:t=this._renderPhaseKeepItSafe();break;case 4:t=this._renderBusyPhase((0,c._td)("Backing up..."));break;case h:t=this._renderPhaseDone();break;case 6:t=this._renderPhaseOptOutConfirm()}return r.default.createElement(e,{className:"mx_CreateKeyBackupDialog",onFinished:this.props.onFinished,title:this._titleForPhase(this.state.phase),hasCancel:[h].includes(this.state.phase)},r.default.createElement("div",null,t))}}),e.exports=t.default}}]);
//# sourceMappingURL=4.js.map