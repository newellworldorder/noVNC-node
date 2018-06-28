/**
 * Dependencies.
 */

var DOMKeyTable = require('./lib/input/domkeytable');
var FixedKeys = require('./lib/input/fixedkeys');
var Keyboard = require('./lib/input/keyboard');
var Keysym = require('./lib/input/keysym');
var KeysymDef = require('./lib/input/keysymdef');
var Mouse = require('./lib/input/mouse');
var Util = require('./lib/input/util');
var VKeys = require('./lib/input/vkeys');
var XTScanCodes = require('./lib/input/xtscancodes');
var Browser = require('./lib/util/browser');
var Events = require('./lib/util/events');
var EventTarget = require('./lib/util/eventtarget');
var Logging = require('./lib/util/logging');
var Polyfill = require('./lib/util/polyfill');
var Strings = require('./lib/util/strings');
var Base64 = require('./lib/base64');
var DES = require('./lib/des');
var Display = require('./lib/display');
var Encodings = require('./lib/encodings')
var Inflator = require('./lib/inflator');
var RFB = require('./lib/rfb');
var Websock = require('./lib/websock');



var noVNC = {
	DOMKeyTable: DOMKeyTable,
	FixedKeys: FixedKeys,
	Keyboard: Keyboard,
	Keysym: Keysym,
	KeysymDef: KeysymDef,
	Mouse: Mouse,
	Util: Util,
	VKeys: VKeys,
	XTScanCodes: XTScanCodes,
	Browser: Browser,
	Events: Events,
	EventTarget: EventTarget,
	Logging: Logging,
	Polyfill: Polyfill,
	Strings: Strings,
	Base64: Base64,
	DES: DES,
	Display: Display,
	Encodings: Encodings,
	Inflator: Inflator,
	RFB: RFB,
	Websock: Websock
};


module.exports = noVNC;