webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./node_modules/luxon/build/cjs-browser/luxon.js":
/*!*******************************************************!*\
  !*** ./node_modules/luxon/build/cjs-browser/luxon.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o) {
  var i = 0;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  i = o[Symbol.iterator]();
  return i.next.bind(i);
}

// these aren't really private, but nor are they really useful to document

/**
 * @private
 */
var LuxonError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(LuxonError, _Error);

  function LuxonError() {
    return _Error.apply(this, arguments) || this;
  }

  return LuxonError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
/**
 * @private
 */


var InvalidDateTimeError = /*#__PURE__*/function (_LuxonError) {
  _inheritsLoose(InvalidDateTimeError, _LuxonError);

  function InvalidDateTimeError(reason) {
    return _LuxonError.call(this, "Invalid DateTime: " + reason.toMessage()) || this;
  }

  return InvalidDateTimeError;
}(LuxonError);
/**
 * @private
 */

var InvalidIntervalError = /*#__PURE__*/function (_LuxonError2) {
  _inheritsLoose(InvalidIntervalError, _LuxonError2);

  function InvalidIntervalError(reason) {
    return _LuxonError2.call(this, "Invalid Interval: " + reason.toMessage()) || this;
  }

  return InvalidIntervalError;
}(LuxonError);
/**
 * @private
 */

var InvalidDurationError = /*#__PURE__*/function (_LuxonError3) {
  _inheritsLoose(InvalidDurationError, _LuxonError3);

  function InvalidDurationError(reason) {
    return _LuxonError3.call(this, "Invalid Duration: " + reason.toMessage()) || this;
  }

  return InvalidDurationError;
}(LuxonError);
/**
 * @private
 */

var ConflictingSpecificationError = /*#__PURE__*/function (_LuxonError4) {
  _inheritsLoose(ConflictingSpecificationError, _LuxonError4);

  function ConflictingSpecificationError() {
    return _LuxonError4.apply(this, arguments) || this;
  }

  return ConflictingSpecificationError;
}(LuxonError);
/**
 * @private
 */

var InvalidUnitError = /*#__PURE__*/function (_LuxonError5) {
  _inheritsLoose(InvalidUnitError, _LuxonError5);

  function InvalidUnitError(unit) {
    return _LuxonError5.call(this, "Invalid unit " + unit) || this;
  }

  return InvalidUnitError;
}(LuxonError);
/**
 * @private
 */

var InvalidArgumentError = /*#__PURE__*/function (_LuxonError6) {
  _inheritsLoose(InvalidArgumentError, _LuxonError6);

  function InvalidArgumentError() {
    return _LuxonError6.apply(this, arguments) || this;
  }

  return InvalidArgumentError;
}(LuxonError);
/**
 * @private
 */

var ZoneIsAbstractError = /*#__PURE__*/function (_LuxonError7) {
  _inheritsLoose(ZoneIsAbstractError, _LuxonError7);

  function ZoneIsAbstractError() {
    return _LuxonError7.call(this, "Zone is an abstract class") || this;
  }

  return ZoneIsAbstractError;
}(LuxonError);

/**
 * @private
 */
var n = "numeric",
    s = "short",
    l = "long";
var DATE_SHORT = {
  year: n,
  month: n,
  day: n
};
var DATE_MED = {
  year: n,
  month: s,
  day: n
};
var DATE_FULL = {
  year: n,
  month: l,
  day: n
};
var DATE_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l
};
var TIME_SIMPLE = {
  hour: n,
  minute: n
};
var TIME_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n
};
var TIME_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
var TIME_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};
var TIME_24_SIMPLE = {
  hour: n,
  minute: n,
  hour12: false
};
/**
 * {@link toLocaleString}; format like '09:30:23', always 24-hour.
 */

var TIME_24_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n,
  hour12: false
};
/**
 * {@link toLocaleString}; format like '09:30:23 EDT', always 24-hour.
 */

var TIME_24_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hour12: false,
  timeZoneName: s
};
/**
 * {@link toLocaleString}; format like '09:30:23 Eastern Daylight Time', always 24-hour.
 */

var TIME_24_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hour12: false,
  timeZoneName: l
};
/**
 * {@link toLocaleString}; format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
 */

var DATETIME_SHORT = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n
};
/**
 * {@link toLocaleString}; format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
 */

var DATETIME_SHORT_WITH_SECONDS = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n,
  second: n
};
var DATETIME_MED = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n
};
var DATETIME_MED_WITH_SECONDS = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n,
  second: n
};
var DATETIME_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s,
  hour: n,
  minute: n
};
var DATETIME_FULL = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  timeZoneName: s
};
var DATETIME_FULL_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
var DATETIME_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  timeZoneName: l
};
var DATETIME_HUGE_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};

/*
  This is just a junk drawer, containing anything used across multiple classes.
  Because Luxon is small(ish), this should stay small and we won't worry about splitting
  it up into, say, parsingUtil.js and basicUtil.js and so on. But they are divided up by feature area.
*/
/**
 * @private
 */
// TYPES

function isUndefined(o) {
  return typeof o === "undefined";
}
function isNumber(o) {
  return typeof o === "number";
}
function isInteger(o) {
  return typeof o === "number" && o % 1 === 0;
}
function isString(o) {
  return typeof o === "string";
}
function isDate(o) {
  return Object.prototype.toString.call(o) === "[object Date]";
} // CAPABILITIES

function hasIntl() {
  try {
    return typeof Intl !== "undefined" && Intl.DateTimeFormat;
  } catch (e) {
    return false;
  }
}
function hasFormatToParts() {
  return !isUndefined(Intl.DateTimeFormat.prototype.formatToParts);
}
function hasRelative() {
  try {
    return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
  } catch (e) {
    return false;
  }
} // OBJECTS AND ARRAYS

function maybeArray(thing) {
  return Array.isArray(thing) ? thing : [thing];
}
function bestBy(arr, by, compare) {
  if (arr.length === 0) {
    return undefined;
  }

  return arr.reduce(function (best, next) {
    var pair = [by(next), next];

    if (!best) {
      return pair;
    } else if (compare(best[0], pair[0]) === best[0]) {
      return best;
    } else {
      return pair;
    }
  }, null)[1];
}
function pick(obj, keys) {
  return keys.reduce(function (a, k) {
    a[k] = obj[k];
    return a;
  }, {});
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
} // NUMBERS AND STRINGS

function integerBetween(thing, bottom, top) {
  return isInteger(thing) && thing >= bottom && thing <= top;
} // x % n but takes the sign of n instead of x

function floorMod(x, n) {
  return x - n * Math.floor(x / n);
}
function padStart(input, n) {
  if (n === void 0) {
    n = 2;
  }

  if (input.toString().length < n) {
    return ("0".repeat(n) + input).slice(-n);
  } else {
    return input.toString();
  }
}
function parseInteger(string) {
  if (isUndefined(string) || string === null || string === "") {
    return undefined;
  } else {
    return parseInt(string, 10);
  }
}
function parseMillis(fraction) {
  // Return undefined (instead of 0) in these cases, where fraction is not set
  if (isUndefined(fraction) || fraction === null || fraction === "") {
    return undefined;
  } else {
    var f = parseFloat("0." + fraction) * 1000;
    return Math.floor(f);
  }
}
function roundTo(number, digits, towardZero) {
  if (towardZero === void 0) {
    towardZero = false;
  }

  var factor = Math.pow(10, digits),
      rounder = towardZero ? Math.trunc : Math.round;
  return rounder(number * factor) / factor;
} // DATE BASICS

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}
function daysInMonth(year, month) {
  var modMonth = floorMod(month - 1, 12) + 1,
      modYear = year + (month - modMonth) / 12;

  if (modMonth === 2) {
    return isLeapYear(modYear) ? 29 : 28;
  } else {
    return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
  }
} // covert a calendar object to a local timestamp (epoch, but with the offset baked in)

function objToLocalTS(obj) {
  var d = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond); // for legacy reasons, years between 0 and 99 are interpreted as 19XX; revert that

  if (obj.year < 100 && obj.year >= 0) {
    d = new Date(d);
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }

  return +d;
}
function weeksInWeekYear(weekYear) {
  var p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7,
      last = weekYear - 1,
      p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
  return p1 === 4 || p2 === 3 ? 53 : 52;
}
function untruncateYear(year) {
  if (year > 99) {
    return year;
  } else return year > 60 ? 1900 + year : 2000 + year;
} // PARSING

function parseZoneInfo(ts, offsetFormat, locale, timeZone) {
  if (timeZone === void 0) {
    timeZone = null;
  }

  var date = new Date(ts),
      intlOpts = {
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };

  if (timeZone) {
    intlOpts.timeZone = timeZone;
  }

  var modified = Object.assign({
    timeZoneName: offsetFormat
  }, intlOpts),
      intl = hasIntl();

  if (intl && hasFormatToParts()) {
    var parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find(function (m) {
      return m.type.toLowerCase() === "timezonename";
    });
    return parsed ? parsed.value : null;
  } else if (intl) {
    // this probably doesn't work for all locales
    var without = new Intl.DateTimeFormat(locale, intlOpts).format(date),
        included = new Intl.DateTimeFormat(locale, modified).format(date),
        diffed = included.substring(without.length),
        trimmed = diffed.replace(/^[, \u200e]+/, "");
    return trimmed;
  } else {
    return null;
  }
} // signedOffset('-5', '30') -> -330

function signedOffset(offHourStr, offMinuteStr) {
  var offHour = parseInt(offHourStr, 10); // don't || this because we want to preserve -0

  if (Number.isNaN(offHour)) {
    offHour = 0;
  }

  var offMin = parseInt(offMinuteStr, 10) || 0,
      offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
  return offHour * 60 + offMinSigned;
} // COERCION

function asNumber(value) {
  var numericValue = Number(value);
  if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue)) throw new InvalidArgumentError("Invalid unit value " + value);
  return numericValue;
}
function normalizeObject(obj, normalizer, nonUnitKeys) {
  var normalized = {};

  for (var u in obj) {
    if (hasOwnProperty(obj, u)) {
      if (nonUnitKeys.indexOf(u) >= 0) continue;
      var v = obj[u];
      if (v === undefined || v === null) continue;
      normalized[normalizer(u)] = asNumber(v);
    }
  }

  return normalized;
}
function formatOffset(offset, format) {
  var hours = Math.trunc(offset / 60),
      minutes = Math.abs(offset % 60),
      sign = hours >= 0 && !Object.is(hours, -0) ? "+" : "-",
      base = "" + sign + Math.abs(hours);

  switch (format) {
    case "short":
      return "" + sign + padStart(Math.abs(hours), 2) + ":" + padStart(minutes, 2);

    case "narrow":
      return minutes > 0 ? base + ":" + minutes : base;

    case "techie":
      return "" + sign + padStart(Math.abs(hours), 2) + padStart(minutes, 2);

    default:
      throw new RangeError("Value format " + format + " is out of range for property format");
  }
}
function timeObject(obj) {
  return pick(obj, ["hour", "minute", "second", "millisecond"]);
}
var ianaRegex = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/;

function stringify(obj) {
  return JSON.stringify(obj, Object.keys(obj).sort());
}
/**
 * @private
 */


var monthsLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function months(length) {
  switch (length) {
    case "narrow":
      return monthsNarrow;

    case "short":
      return monthsShort;

    case "long":
      return monthsLong;

    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

    default:
      return null;
  }
}
var weekdaysLong = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];
function weekdays(length) {
  switch (length) {
    case "narrow":
      return weekdaysNarrow;

    case "short":
      return weekdaysShort;

    case "long":
      return weekdaysLong;

    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];

    default:
      return null;
  }
}
var meridiems = ["AM", "PM"];
var erasLong = ["Before Christ", "Anno Domini"];
var erasShort = ["BC", "AD"];
var erasNarrow = ["B", "A"];
function eras(length) {
  switch (length) {
    case "narrow":
      return erasNarrow;

    case "short":
      return erasShort;

    case "long":
      return erasLong;

    default:
      return null;
  }
}
function meridiemForDateTime(dt) {
  return meridiems[dt.hour < 12 ? 0 : 1];
}
function weekdayForDateTime(dt, length) {
  return weekdays(length)[dt.weekday - 1];
}
function monthForDateTime(dt, length) {
  return months(length)[dt.month - 1];
}
function eraForDateTime(dt, length) {
  return eras(length)[dt.year < 0 ? 0 : 1];
}
function formatRelativeTime(unit, count, numeric, narrow) {
  if (numeric === void 0) {
    numeric = "always";
  }

  if (narrow === void 0) {
    narrow = false;
  }

  var units = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  };
  var lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;

  if (numeric === "auto" && lastable) {
    var isDay = unit === "days";

    switch (count) {
      case 1:
        return isDay ? "tomorrow" : "next " + units[unit][0];

      case -1:
        return isDay ? "yesterday" : "last " + units[unit][0];

      case 0:
        return isDay ? "today" : "this " + units[unit][0];

    }
  }

  var isInPast = Object.is(count, -0) || count < 0,
      fmtValue = Math.abs(count),
      singular = fmtValue === 1,
      lilUnits = units[unit],
      fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
  return isInPast ? fmtValue + " " + fmtUnit + " ago" : "in " + fmtValue + " " + fmtUnit;
}
function formatString(knownFormat) {
  // these all have the offsets removed because we don't have access to them
  // without all the intl stuff this is backfilling
  var filtered = pick(knownFormat, ["weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hour12"]),
      key = stringify(filtered),
      dateTimeHuge = "EEEE, LLLL d, yyyy, h:mm a";

  switch (key) {
    case stringify(DATE_SHORT):
      return "M/d/yyyy";

    case stringify(DATE_MED):
      return "LLL d, yyyy";

    case stringify(DATE_FULL):
      return "LLLL d, yyyy";

    case stringify(DATE_HUGE):
      return "EEEE, LLLL d, yyyy";

    case stringify(TIME_SIMPLE):
      return "h:mm a";

    case stringify(TIME_WITH_SECONDS):
      return "h:mm:ss a";

    case stringify(TIME_WITH_SHORT_OFFSET):
      return "h:mm a";

    case stringify(TIME_WITH_LONG_OFFSET):
      return "h:mm a";

    case stringify(TIME_24_SIMPLE):
      return "HH:mm";

    case stringify(TIME_24_WITH_SECONDS):
      return "HH:mm:ss";

    case stringify(TIME_24_WITH_SHORT_OFFSET):
      return "HH:mm";

    case stringify(TIME_24_WITH_LONG_OFFSET):
      return "HH:mm";

    case stringify(DATETIME_SHORT):
      return "M/d/yyyy, h:mm a";

    case stringify(DATETIME_MED):
      return "LLL d, yyyy, h:mm a";

    case stringify(DATETIME_FULL):
      return "LLLL d, yyyy, h:mm a";

    case stringify(DATETIME_HUGE):
      return dateTimeHuge;

    case stringify(DATETIME_SHORT_WITH_SECONDS):
      return "M/d/yyyy, h:mm:ss a";

    case stringify(DATETIME_MED_WITH_SECONDS):
      return "LLL d, yyyy, h:mm:ss a";

    case stringify(DATETIME_MED_WITH_WEEKDAY):
      return "EEE, d LLL yyyy, h:mm a";

    case stringify(DATETIME_FULL_WITH_SECONDS):
      return "LLLL d, yyyy, h:mm:ss a";

    case stringify(DATETIME_HUGE_WITH_SECONDS):
      return "EEEE, LLLL d, yyyy, h:mm:ss a";

    default:
      return dateTimeHuge;
  }
}

function stringifyTokens(splits, tokenToString) {
  var s = "";

  for (var _iterator = _createForOfIteratorHelperLoose(splits), _step; !(_step = _iterator()).done;) {
    var token = _step.value;

    if (token.literal) {
      s += token.val;
    } else {
      s += tokenToString(token.val);
    }
  }

  return s;
}

var _macroTokenToFormatOpts = {
  D: DATE_SHORT,
  DD: DATE_MED,
  DDD: DATE_FULL,
  DDDD: DATE_HUGE,
  t: TIME_SIMPLE,
  tt: TIME_WITH_SECONDS,
  ttt: TIME_WITH_SHORT_OFFSET,
  tttt: TIME_WITH_LONG_OFFSET,
  T: TIME_24_SIMPLE,
  TT: TIME_24_WITH_SECONDS,
  TTT: TIME_24_WITH_SHORT_OFFSET,
  TTTT: TIME_24_WITH_LONG_OFFSET,
  f: DATETIME_SHORT,
  ff: DATETIME_MED,
  fff: DATETIME_FULL,
  ffff: DATETIME_HUGE,
  F: DATETIME_SHORT_WITH_SECONDS,
  FF: DATETIME_MED_WITH_SECONDS,
  FFF: DATETIME_FULL_WITH_SECONDS,
  FFFF: DATETIME_HUGE_WITH_SECONDS
};
/**
 * @private
 */

var Formatter = /*#__PURE__*/function () {
  Formatter.create = function create(locale, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return new Formatter(locale, opts);
  };

  Formatter.parseFormat = function parseFormat(fmt) {
    var current = null,
        currentFull = "",
        bracketed = false;
    var splits = [];

    for (var i = 0; i < fmt.length; i++) {
      var c = fmt.charAt(i);

      if (c === "'") {
        if (currentFull.length > 0) {
          splits.push({
            literal: bracketed,
            val: currentFull
          });
        }

        current = null;
        currentFull = "";
        bracketed = !bracketed;
      } else if (bracketed) {
        currentFull += c;
      } else if (c === current) {
        currentFull += c;
      } else {
        if (currentFull.length > 0) {
          splits.push({
            literal: false,
            val: currentFull
          });
        }

        currentFull = c;
        current = c;
      }
    }

    if (currentFull.length > 0) {
      splits.push({
        literal: bracketed,
        val: currentFull
      });
    }

    return splits;
  };

  Formatter.macroTokenToFormatOpts = function macroTokenToFormatOpts(token) {
    return _macroTokenToFormatOpts[token];
  };

  function Formatter(locale, formatOpts) {
    this.opts = formatOpts;
    this.loc = locale;
    this.systemLoc = null;
  }

  var _proto = Formatter.prototype;

  _proto.formatWithSystemDefault = function formatWithSystemDefault(dt, opts) {
    if (this.systemLoc === null) {
      this.systemLoc = this.loc.redefaultToSystem();
    }

    var df = this.systemLoc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.format();
  };

  _proto.formatDateTime = function formatDateTime(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.format();
  };

  _proto.formatDateTimeParts = function formatDateTimeParts(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.formatToParts();
  };

  _proto.resolvedOptions = function resolvedOptions(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.resolvedOptions();
  };

  _proto.num = function num(n, p) {
    if (p === void 0) {
      p = 0;
    }

    // we get some perf out of doing this here, annoyingly
    if (this.opts.forceSimple) {
      return padStart(n, p);
    }

    var opts = Object.assign({}, this.opts);

    if (p > 0) {
      opts.padTo = p;
    }

    return this.loc.numberFormatter(opts).format(n);
  };

  _proto.formatDateTimeFromString = function formatDateTimeFromString(dt, fmt) {
    var _this = this;

    var knownEnglish = this.loc.listingMode() === "en",
        useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory" && hasFormatToParts(),
        string = function string(opts, extract) {
      return _this.loc.extract(dt, opts, extract);
    },
        formatOffset = function formatOffset(opts) {
      if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
        return "Z";
      }

      return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
    },
        meridiem = function meridiem() {
      return knownEnglish ? meridiemForDateTime(dt) : string({
        hour: "numeric",
        hour12: true
      }, "dayperiod");
    },
        month = function month(length, standalone) {
      return knownEnglish ? monthForDateTime(dt, length) : string(standalone ? {
        month: length
      } : {
        month: length,
        day: "numeric"
      }, "month");
    },
        weekday = function weekday(length, standalone) {
      return knownEnglish ? weekdayForDateTime(dt, length) : string(standalone ? {
        weekday: length
      } : {
        weekday: length,
        month: "long",
        day: "numeric"
      }, "weekday");
    },
        maybeMacro = function maybeMacro(token) {
      var formatOpts = Formatter.macroTokenToFormatOpts(token);

      if (formatOpts) {
        return _this.formatWithSystemDefault(dt, formatOpts);
      } else {
        return token;
      }
    },
        era = function era(length) {
      return knownEnglish ? eraForDateTime(dt, length) : string({
        era: length
      }, "era");
    },
        tokenToString = function tokenToString(token) {
      // Where possible: http://cldr.unicode.org/translation/date-time#TOC-Stand-Alone-vs.-Format-Styles
      switch (token) {
        // ms
        case "S":
          return _this.num(dt.millisecond);

        case "u": // falls through

        case "SSS":
          return _this.num(dt.millisecond, 3);
        // seconds

        case "s":
          return _this.num(dt.second);

        case "ss":
          return _this.num(dt.second, 2);
        // minutes

        case "m":
          return _this.num(dt.minute);

        case "mm":
          return _this.num(dt.minute, 2);
        // hours

        case "h":
          return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);

        case "hh":
          return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);

        case "H":
          return _this.num(dt.hour);

        case "HH":
          return _this.num(dt.hour, 2);
        // offset

        case "Z":
          // like +6
          return formatOffset({
            format: "narrow",
            allowZ: _this.opts.allowZ
          });

        case "ZZ":
          // like +06:00
          return formatOffset({
            format: "short",
            allowZ: _this.opts.allowZ
          });

        case "ZZZ":
          // like +0600
          return formatOffset({
            format: "techie",
            allowZ: _this.opts.allowZ
          });

        case "ZZZZ":
          // like EST
          return dt.zone.offsetName(dt.ts, {
            format: "short",
            locale: _this.loc.locale
          });

        case "ZZZZZ":
          // like Eastern Standard Time
          return dt.zone.offsetName(dt.ts, {
            format: "long",
            locale: _this.loc.locale
          });
        // zone

        case "z":
          // like America/New_York
          return dt.zoneName;
        // meridiems

        case "a":
          return meridiem();
        // dates

        case "d":
          return useDateTimeFormatter ? string({
            day: "numeric"
          }, "day") : _this.num(dt.day);

        case "dd":
          return useDateTimeFormatter ? string({
            day: "2-digit"
          }, "day") : _this.num(dt.day, 2);
        // weekdays - standalone

        case "c":
          // like 1
          return _this.num(dt.weekday);

        case "ccc":
          // like 'Tues'
          return weekday("short", true);

        case "cccc":
          // like 'Tuesday'
          return weekday("long", true);

        case "ccccc":
          // like 'T'
          return weekday("narrow", true);
        // weekdays - format

        case "E":
          // like 1
          return _this.num(dt.weekday);

        case "EEE":
          // like 'Tues'
          return weekday("short", false);

        case "EEEE":
          // like 'Tuesday'
          return weekday("long", false);

        case "EEEEE":
          // like 'T'
          return weekday("narrow", false);
        // months - standalone

        case "L":
          // like 1
          return useDateTimeFormatter ? string({
            month: "numeric",
            day: "numeric"
          }, "month") : _this.num(dt.month);

        case "LL":
          // like 01, doesn't seem to work
          return useDateTimeFormatter ? string({
            month: "2-digit",
            day: "numeric"
          }, "month") : _this.num(dt.month, 2);

        case "LLL":
          // like Jan
          return month("short", true);

        case "LLLL":
          // like January
          return month("long", true);

        case "LLLLL":
          // like J
          return month("narrow", true);
        // months - format

        case "M":
          // like 1
          return useDateTimeFormatter ? string({
            month: "numeric"
          }, "month") : _this.num(dt.month);

        case "MM":
          // like 01
          return useDateTimeFormatter ? string({
            month: "2-digit"
          }, "month") : _this.num(dt.month, 2);

        case "MMM":
          // like Jan
          return month("short", false);

        case "MMMM":
          // like January
          return month("long", false);

        case "MMMMM":
          // like J
          return month("narrow", false);
        // years

        case "y":
          // like 2014
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year);

        case "yy":
          // like 14
          return useDateTimeFormatter ? string({
            year: "2-digit"
          }, "year") : _this.num(dt.year.toString().slice(-2), 2);

        case "yyyy":
          // like 0012
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year, 4);

        case "yyyyyy":
          // like 000012
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year, 6);
        // eras

        case "G":
          // like AD
          return era("short");

        case "GG":
          // like Anno Domini
          return era("long");

        case "GGGGG":
          return era("narrow");

        case "kk":
          return _this.num(dt.weekYear.toString().slice(-2), 2);

        case "kkkk":
          return _this.num(dt.weekYear, 4);

        case "W":
          return _this.num(dt.weekNumber);

        case "WW":
          return _this.num(dt.weekNumber, 2);

        case "o":
          return _this.num(dt.ordinal);

        case "ooo":
          return _this.num(dt.ordinal, 3);

        case "q":
          // like 1
          return _this.num(dt.quarter);

        case "qq":
          // like 01
          return _this.num(dt.quarter, 2);

        case "X":
          return _this.num(Math.floor(dt.ts / 1000));

        case "x":
          return _this.num(dt.ts);

        default:
          return maybeMacro(token);
      }
    };

    return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
  };

  _proto.formatDurationFromString = function formatDurationFromString(dur, fmt) {
    var _this2 = this;

    var tokenToField = function tokenToField(token) {
      switch (token[0]) {
        case "S":
          return "millisecond";

        case "s":
          return "second";

        case "m":
          return "minute";

        case "h":
          return "hour";

        case "d":
          return "day";

        case "M":
          return "month";

        case "y":
          return "year";

        default:
          return null;
      }
    },
        tokenToString = function tokenToString(lildur) {
      return function (token) {
        var mapped = tokenToField(token);

        if (mapped) {
          return _this2.num(lildur.get(mapped), token.length);
        } else {
          return token;
        }
      };
    },
        tokens = Formatter.parseFormat(fmt),
        realTokens = tokens.reduce(function (found, _ref) {
      var literal = _ref.literal,
          val = _ref.val;
      return literal ? found : found.concat(val);
    }, []),
        collapsed = dur.shiftTo.apply(dur, realTokens.map(tokenToField).filter(function (t) {
      return t;
    }));

    return stringifyTokens(tokens, tokenToString(collapsed));
  };

  return Formatter;
}();

var Invalid = /*#__PURE__*/function () {
  function Invalid(reason, explanation) {
    this.reason = reason;
    this.explanation = explanation;
  }

  var _proto = Invalid.prototype;

  _proto.toMessage = function toMessage() {
    if (this.explanation) {
      return this.reason + ": " + this.explanation;
    } else {
      return this.reason;
    }
  };

  return Invalid;
}();

/**
 * @interface
 */

var Zone = /*#__PURE__*/function () {
  function Zone() {}

  var _proto = Zone.prototype;

  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  _proto.offsetName = function offsetName(ts, opts) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  ;

  _proto.formatOffset = function formatOffset(ts, format) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  ;

  _proto.offset = function offset(ts) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  ;

  _proto.equals = function equals(otherZone) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  ;

  _createClass(Zone, [{
    key: "type",

    /**
     * The type of zone
     * @abstract
     * @type {string}
     */
    get: function get() {
      throw new ZoneIsAbstractError();
    }
    /**
     * The name of this zone.
     * @abstract
     * @type {string}
     */

  }, {
    key: "name",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
    /**
     * Returns whether the offset is known to be fixed for the whole year.
     * @abstract
     * @type {boolean}
     */

  }, {
    key: "universal",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
  }, {
    key: "isValid",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
  }]);

  return Zone;
}();

var singleton = null;
/**
 * Represents the local zone for this Javascript environment.
 * @implements {Zone}
 */

var LocalZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(LocalZone, _Zone);

  function LocalZone() {
    return _Zone.apply(this, arguments) || this;
  }

  var _proto = LocalZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName(ts, _ref) {
    var format = _ref.format,
        locale = _ref.locale;
    return parseZoneInfo(ts, format, locale);
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  /** @override **/
  ;

  _proto.offset = function offset(ts) {
    return -new Date(ts).getTimezoneOffset();
  }
  /** @override **/
  ;

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "local";
  }
  /** @override **/
  ;

  _createClass(LocalZone, [{
    key: "type",

    /** @override **/
    get: function get() {
      return "local";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      if (hasIntl()) {
        return new Intl.DateTimeFormat().resolvedOptions().timeZone;
      } else return "local";
    }
    /** @override **/

  }, {
    key: "universal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return true;
    }
  }], [{
    key: "instance",

    /**
     * Get a singleton instance of the local zone
     * @return {LocalZone}
     */
    get: function get() {
      if (singleton === null) {
        singleton = new LocalZone();
      }

      return singleton;
    }
  }]);

  return LocalZone;
}(Zone);

var matchingRegex = RegExp("^" + ianaRegex.source + "$");
var dtfCache = {};

function makeDTF(zone) {
  if (!dtfCache[zone]) {
    dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: zone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }

  return dtfCache[zone];
}

var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};

function hackyOffset(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, ""),
      parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted),
      fMonth = parsed[1],
      fDay = parsed[2],
      fYear = parsed[3],
      fHour = parsed[4],
      fMinute = parsed[5],
      fSecond = parsed[6];
  return [fYear, fMonth, fDay, fHour, fMinute, fSecond];
}

function partsOffset(dtf, date) {
  var formatted = dtf.formatToParts(date),
      filled = [];

  for (var i = 0; i < formatted.length; i++) {
    var _formatted$i = formatted[i],
        type = _formatted$i.type,
        value = _formatted$i.value,
        pos = typeToPos[type];

    if (!isUndefined(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }

  return filled;
}

var ianaZoneCache = {};
/**
 * A zone identified by an IANA identifier, like America/New_York
 * @implements {Zone}
 */

var IANAZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(IANAZone, _Zone);

  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  IANAZone.create = function create(name) {
    if (!ianaZoneCache[name]) {
      ianaZoneCache[name] = new IANAZone(name);
    }

    return ianaZoneCache[name];
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  ;

  IANAZone.resetCache = function resetCache() {
    ianaZoneCache = {};
    dtfCache = {};
  }
  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Fantasia/Castle") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @return {boolean}
   */
  ;

  IANAZone.isValidSpecifier = function isValidSpecifier(s) {
    return !!(s && s.match(matchingRegex));
  }
  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  ;

  IANAZone.isValidZone = function isValidZone(zone) {
    try {
      new Intl.DateTimeFormat("en-US", {
        timeZone: zone
      }).format();
      return true;
    } catch (e) {
      return false;
    }
  } // Etc/GMT+8 -> -480

  /** @ignore */
  ;

  IANAZone.parseGMTOffset = function parseGMTOffset(specifier) {
    if (specifier) {
      var match = specifier.match(/^Etc\/GMT([+-]\d{1,2})$/i);

      if (match) {
        return -60 * parseInt(match[1]);
      }
    }

    return null;
  };

  function IANAZone(name) {
    var _this;

    _this = _Zone.call(this) || this;
    /** @private **/

    _this.zoneName = name;
    /** @private **/

    _this.valid = IANAZone.isValidZone(name);
    return _this;
  }
  /** @override **/


  var _proto = IANAZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName(ts, _ref) {
    var format = _ref.format,
        locale = _ref.locale;
    return parseZoneInfo(ts, format, locale, this.name);
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  /** @override **/
  ;

  _proto.offset = function offset(ts) {
    var date = new Date(ts),
        dtf = makeDTF(this.name),
        _ref2 = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date),
        year = _ref2[0],
        month = _ref2[1],
        day = _ref2[2],
        hour = _ref2[3],
        minute = _ref2[4],
        second = _ref2[5],
        adjustedHour = hour === 24 ? 0 : hour;

    var asUTC = objToLocalTS({
      year: year,
      month: month,
      day: day,
      hour: adjustedHour,
      minute: minute,
      second: second,
      millisecond: 0
    });
    var asTS = +date;
    var over = asTS % 1000;
    asTS -= over >= 0 ? over : 1000 + over;
    return (asUTC - asTS) / (60 * 1000);
  }
  /** @override **/
  ;

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "iana" && otherZone.name === this.name;
  }
  /** @override **/
  ;

  _createClass(IANAZone, [{
    key: "type",
    get: function get() {
      return "iana";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return this.zoneName;
    }
    /** @override **/

  }, {
    key: "universal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return this.valid;
    }
  }]);

  return IANAZone;
}(Zone);

var singleton$1 = null;
/**
 * A zone with a fixed offset (meaning no DST)
 * @implements {Zone}
 */

var FixedOffsetZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(FixedOffsetZone, _Zone);

  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  FixedOffsetZone.instance = function instance(offset) {
    return offset === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset);
  }
  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  ;

  FixedOffsetZone.parseSpecifier = function parseSpecifier(s) {
    if (s) {
      var r = s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);

      if (r) {
        return new FixedOffsetZone(signedOffset(r[1], r[2]));
      }
    }

    return null;
  };

  _createClass(FixedOffsetZone, null, [{
    key: "utcInstance",

    /**
     * Get a singleton instance of UTC
     * @return {FixedOffsetZone}
     */
    get: function get() {
      if (singleton$1 === null) {
        singleton$1 = new FixedOffsetZone(0);
      }

      return singleton$1;
    }
  }]);

  function FixedOffsetZone(offset) {
    var _this;

    _this = _Zone.call(this) || this;
    /** @private **/

    _this.fixed = offset;
    return _this;
  }
  /** @override **/


  var _proto = FixedOffsetZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName() {
    return this.name;
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset$1(ts, format) {
    return formatOffset(this.fixed, format);
  }
  /** @override **/
  ;

  /** @override **/
  _proto.offset = function offset() {
    return this.fixed;
  }
  /** @override **/
  ;

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
  }
  /** @override **/
  ;

  _createClass(FixedOffsetZone, [{
    key: "type",
    get: function get() {
      return "fixed";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return this.fixed === 0 ? "UTC" : "UTC" + formatOffset(this.fixed, "narrow");
    }
  }, {
    key: "universal",
    get: function get() {
      return true;
    }
  }, {
    key: "isValid",
    get: function get() {
      return true;
    }
  }]);

  return FixedOffsetZone;
}(Zone);

/**
 * A zone that failed to parse. You should never need to instantiate this.
 * @implements {Zone}
 */

var InvalidZone = /*#__PURE__*/function (_Zone) {
  _inheritsLoose(InvalidZone, _Zone);

  function InvalidZone(zoneName) {
    var _this;

    _this = _Zone.call(this) || this;
    /**  @private */

    _this.zoneName = zoneName;
    return _this;
  }
  /** @override **/


  var _proto = InvalidZone.prototype;

  /** @override **/
  _proto.offsetName = function offsetName() {
    return null;
  }
  /** @override **/
  ;

  _proto.formatOffset = function formatOffset() {
    return "";
  }
  /** @override **/
  ;

  _proto.offset = function offset() {
    return NaN;
  }
  /** @override **/
  ;

  _proto.equals = function equals() {
    return false;
  }
  /** @override **/
  ;

  _createClass(InvalidZone, [{
    key: "type",
    get: function get() {
      return "invalid";
    }
    /** @override **/

  }, {
    key: "name",
    get: function get() {
      return this.zoneName;
    }
    /** @override **/

  }, {
    key: "universal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return false;
    }
  }]);

  return InvalidZone;
}(Zone);

/**
 * @private
 */
function normalizeZone(input, defaultZone) {
  var offset;

  if (isUndefined(input) || input === null) {
    return defaultZone;
  } else if (input instanceof Zone) {
    return input;
  } else if (isString(input)) {
    var lowered = input.toLowerCase();
    if (lowered === "local") return defaultZone;else if (lowered === "utc" || lowered === "gmt") return FixedOffsetZone.utcInstance;else if ((offset = IANAZone.parseGMTOffset(input)) != null) {
      // handle Etc/GMT-4, which V8 chokes on
      return FixedOffsetZone.instance(offset);
    } else if (IANAZone.isValidSpecifier(lowered)) return IANAZone.create(input);else return FixedOffsetZone.parseSpecifier(lowered) || new InvalidZone(input);
  } else if (isNumber(input)) {
    return FixedOffsetZone.instance(input);
  } else if (typeof input === "object" && input.offset && typeof input.offset === "number") {
    // This is dumb, but the instanceof check above doesn't seem to really work
    // so we're duck checking it
    return input;
  } else {
    return new InvalidZone(input);
  }
}

var now = function now() {
  return Date.now();
},
    defaultZone = null,
    // not setting this directly to LocalZone.instance bc loading order issues
defaultLocale = null,
    defaultNumberingSystem = null,
    defaultOutputCalendar = null,
    throwOnInvalid = false;
/**
 * Settings contains static getters and setters that control Luxon's overall behavior. Luxon is a simple library with few options, but the ones it does have live here.
 */


var Settings = /*#__PURE__*/function () {
  function Settings() {}

  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  Settings.resetCaches = function resetCaches() {
    Locale.resetCache();
    IANAZone.resetCache();
  };

  _createClass(Settings, null, [{
    key: "now",

    /**
     * Get the callback for returning the current timestamp.
     * @type {function}
     */
    get: function get() {
      return now;
    }
    /**
     * Set the callback for returning the current timestamp.
     * The function should return a number, which will be interpreted as an Epoch millisecond count
     * @type {function}
     * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
     * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
     */
    ,
    set: function set(n) {
      now = n;
    }
    /**
     * Get the default time zone to create DateTimes in.
     * @type {string}
     */

  }, {
    key: "defaultZoneName",
    get: function get() {
      return Settings.defaultZone.name;
    }
    /**
     * Set the default time zone to create DateTimes in. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(z) {
      if (!z) {
        defaultZone = null;
      } else {
        defaultZone = normalizeZone(z);
      }
    }
    /**
     * Get the default time zone object to create DateTimes in. Does not affect existing instances.
     * @type {Zone}
     */

  }, {
    key: "defaultZone",
    get: function get() {
      return defaultZone || LocalZone.instance;
    }
    /**
     * Get the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultLocale",
    get: function get() {
      return defaultLocale;
    }
    /**
     * Set the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(locale) {
      defaultLocale = locale;
    }
    /**
     * Get the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultNumberingSystem",
    get: function get() {
      return defaultNumberingSystem;
    }
    /**
     * Set the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(numberingSystem) {
      defaultNumberingSystem = numberingSystem;
    }
    /**
     * Get the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultOutputCalendar",
    get: function get() {
      return defaultOutputCalendar;
    }
    /**
     * Set the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(outputCalendar) {
      defaultOutputCalendar = outputCalendar;
    }
    /**
     * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */

  }, {
    key: "throwOnInvalid",
    get: function get() {
      return throwOnInvalid;
    }
    /**
     * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */
    ,
    set: function set(t) {
      throwOnInvalid = t;
    }
  }]);

  return Settings;
}();

var intlDTCache = {};

function getCachedDTF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var key = JSON.stringify([locString, opts]);
  var dtf = intlDTCache[key];

  if (!dtf) {
    dtf = new Intl.DateTimeFormat(locString, opts);
    intlDTCache[key] = dtf;
  }

  return dtf;
}

var intlNumCache = {};

function getCachedINF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var key = JSON.stringify([locString, opts]);
  var inf = intlNumCache[key];

  if (!inf) {
    inf = new Intl.NumberFormat(locString, opts);
    intlNumCache[key] = inf;
  }

  return inf;
}

var intlRelCache = {};

function getCachedRTF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var _opts = opts,
      base = _opts.base,
      cacheKeyOpts = _objectWithoutPropertiesLoose(_opts, ["base"]); // exclude `base` from the options


  var key = JSON.stringify([locString, cacheKeyOpts]);
  var inf = intlRelCache[key];

  if (!inf) {
    inf = new Intl.RelativeTimeFormat(locString, opts);
    intlRelCache[key] = inf;
  }

  return inf;
}

var sysLocaleCache = null;

function systemLocale() {
  if (sysLocaleCache) {
    return sysLocaleCache;
  } else if (hasIntl()) {
    var computedSys = new Intl.DateTimeFormat().resolvedOptions().locale; // node sometimes defaults to "und". Override that because that is dumb

    sysLocaleCache = !computedSys || computedSys === "und" ? "en-US" : computedSys;
    return sysLocaleCache;
  } else {
    sysLocaleCache = "en-US";
    return sysLocaleCache;
  }
}

function parseLocaleString(localeStr) {
  // I really want to avoid writing a BCP 47 parser
  // see, e.g. https://github.com/wooorm/bcp-47
  // Instead, we'll do this:
  // a) if the string has no -u extensions, just leave it alone
  // b) if it does, use Intl to resolve everything
  // c) if Intl fails, try again without the -u
  var uIndex = localeStr.indexOf("-u-");

  if (uIndex === -1) {
    return [localeStr];
  } else {
    var options;
    var smaller = localeStr.substring(0, uIndex);

    try {
      options = getCachedDTF(localeStr).resolvedOptions();
    } catch (e) {
      options = getCachedDTF(smaller).resolvedOptions();
    }

    var _options = options,
        numberingSystem = _options.numberingSystem,
        calendar = _options.calendar; // return the smaller one so that we can append the calendar and numbering overrides to it

    return [smaller, numberingSystem, calendar];
  }
}

function intlConfigString(localeStr, numberingSystem, outputCalendar) {
  if (hasIntl()) {
    if (outputCalendar || numberingSystem) {
      localeStr += "-u";

      if (outputCalendar) {
        localeStr += "-ca-" + outputCalendar;
      }

      if (numberingSystem) {
        localeStr += "-nu-" + numberingSystem;
      }

      return localeStr;
    } else {
      return localeStr;
    }
  } else {
    return [];
  }
}

function mapMonths(f) {
  var ms = [];

  for (var i = 1; i <= 12; i++) {
    var dt = DateTime.utc(2016, i, 1);
    ms.push(f(dt));
  }

  return ms;
}

function mapWeekdays(f) {
  var ms = [];

  for (var i = 1; i <= 7; i++) {
    var dt = DateTime.utc(2016, 11, 13 + i);
    ms.push(f(dt));
  }

  return ms;
}

function listStuff(loc, length, defaultOK, englishFn, intlFn) {
  var mode = loc.listingMode(defaultOK);

  if (mode === "error") {
    return null;
  } else if (mode === "en") {
    return englishFn(length);
  } else {
    return intlFn(length);
  }
}

function supportsFastNumbers(loc) {
  if (loc.numberingSystem && loc.numberingSystem !== "latn") {
    return false;
  } else {
    return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || hasIntl() && new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
  }
}
/**
 * @private
 */


var PolyNumberFormatter = /*#__PURE__*/function () {
  function PolyNumberFormatter(intl, forceSimple, opts) {
    this.padTo = opts.padTo || 0;
    this.floor = opts.floor || false;

    if (!forceSimple && hasIntl()) {
      var intlOpts = {
        useGrouping: false
      };
      if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
      this.inf = getCachedINF(intl, intlOpts);
    }
  }

  var _proto = PolyNumberFormatter.prototype;

  _proto.format = function format(i) {
    if (this.inf) {
      var fixed = this.floor ? Math.floor(i) : i;
      return this.inf.format(fixed);
    } else {
      // to match the browser's numberformatter defaults
      var _fixed = this.floor ? Math.floor(i) : roundTo(i, 3);

      return padStart(_fixed, this.padTo);
    }
  };

  return PolyNumberFormatter;
}();
/**
 * @private
 */


var PolyDateFormatter = /*#__PURE__*/function () {
  function PolyDateFormatter(dt, intl, opts) {
    this.opts = opts;
    this.hasIntl = hasIntl();
    var z;

    if (dt.zone.universal && this.hasIntl) {
      // Chromium doesn't support fixed-offset zones like Etc/GMT+8 in its formatter,
      // See https://bugs.chromium.org/p/chromium/issues/detail?id=364374.
      // So we have to make do. Two cases:
      // 1. The format options tell us to show the zone. We can't do that, so the best
      // we can do is format the date in UTC.
      // 2. The format options don't tell us to show the zone. Then we can adjust them
      // the time and tell the formatter to show it to us in UTC, so that the time is right
      // and the bad zone doesn't show up.
      // We can clean all this up when Chrome fixes this.
      z = "UTC";

      if (opts.timeZoneName) {
        this.dt = dt;
      } else {
        this.dt = dt.offset === 0 ? dt : DateTime.fromMillis(dt.ts + dt.offset * 60 * 1000);
      }
    } else if (dt.zone.type === "local") {
      this.dt = dt;
    } else {
      this.dt = dt;
      z = dt.zone.name;
    }

    if (this.hasIntl) {
      var intlOpts = Object.assign({}, this.opts);

      if (z) {
        intlOpts.timeZone = z;
      }

      this.dtf = getCachedDTF(intl, intlOpts);
    }
  }

  var _proto2 = PolyDateFormatter.prototype;

  _proto2.format = function format() {
    if (this.hasIntl) {
      return this.dtf.format(this.dt.toJSDate());
    } else {
      var tokenFormat = formatString(this.opts),
          loc = Locale.create("en-US");
      return Formatter.create(loc).formatDateTimeFromString(this.dt, tokenFormat);
    }
  };

  _proto2.formatToParts = function formatToParts() {
    if (this.hasIntl && hasFormatToParts()) {
      return this.dtf.formatToParts(this.dt.toJSDate());
    } else {
      // This is kind of a cop out. We actually could do this for English. However, we couldn't do it for intl strings
      // and IMO it's too weird to have an uncanny valley like that
      return [];
    }
  };

  _proto2.resolvedOptions = function resolvedOptions() {
    if (this.hasIntl) {
      return this.dtf.resolvedOptions();
    } else {
      return {
        locale: "en-US",
        numberingSystem: "latn",
        outputCalendar: "gregory"
      };
    }
  };

  return PolyDateFormatter;
}();
/**
 * @private
 */


var PolyRelFormatter = /*#__PURE__*/function () {
  function PolyRelFormatter(intl, isEnglish, opts) {
    this.opts = Object.assign({
      style: "long"
    }, opts);

    if (!isEnglish && hasRelative()) {
      this.rtf = getCachedRTF(intl, opts);
    }
  }

  var _proto3 = PolyRelFormatter.prototype;

  _proto3.format = function format(count, unit) {
    if (this.rtf) {
      return this.rtf.format(count, unit);
    } else {
      return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
    }
  };

  _proto3.formatToParts = function formatToParts(count, unit) {
    if (this.rtf) {
      return this.rtf.formatToParts(count, unit);
    } else {
      return [];
    }
  };

  return PolyRelFormatter;
}();
/**
 * @private
 */


var Locale = /*#__PURE__*/function () {
  Locale.fromOpts = function fromOpts(opts) {
    return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
  };

  Locale.create = function create(locale, numberingSystem, outputCalendar, defaultToEN) {
    if (defaultToEN === void 0) {
      defaultToEN = false;
    }

    var specifiedLocale = locale || Settings.defaultLocale,
        // the system locale is useful for human readable strings but annoying for parsing/formatting known formats
    localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale()),
        numberingSystemR = numberingSystem || Settings.defaultNumberingSystem,
        outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
    return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
  };

  Locale.resetCache = function resetCache() {
    sysLocaleCache = null;
    intlDTCache = {};
    intlNumCache = {};
    intlRelCache = {};
  };

  Locale.fromObject = function fromObject(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        locale = _ref.locale,
        numberingSystem = _ref.numberingSystem,
        outputCalendar = _ref.outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar);
  };

  function Locale(locale, numbering, outputCalendar, specifiedLocale) {
    var _parseLocaleString = parseLocaleString(locale),
        parsedLocale = _parseLocaleString[0],
        parsedNumberingSystem = _parseLocaleString[1],
        parsedOutputCalendar = _parseLocaleString[2];

    this.locale = parsedLocale;
    this.numberingSystem = numbering || parsedNumberingSystem || null;
    this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
    this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
    this.weekdaysCache = {
      format: {},
      standalone: {}
    };
    this.monthsCache = {
      format: {},
      standalone: {}
    };
    this.meridiemCache = null;
    this.eraCache = {};
    this.specifiedLocale = specifiedLocale;
    this.fastNumbersCached = null;
  }

  var _proto4 = Locale.prototype;

  _proto4.listingMode = function listingMode(defaultOK) {
    if (defaultOK === void 0) {
      defaultOK = true;
    }

    var intl = hasIntl(),
        hasFTP = intl && hasFormatToParts(),
        isActuallyEn = this.isEnglish(),
        hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");

    if (!hasFTP && !(isActuallyEn && hasNoWeirdness) && !defaultOK) {
      return "error";
    } else if (!hasFTP || isActuallyEn && hasNoWeirdness) {
      return "en";
    } else {
      return "intl";
    }
  };

  _proto4.clone = function clone(alts) {
    if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
      return this;
    } else {
      return Locale.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, alts.defaultToEN || false);
    }
  };

  _proto4.redefaultToEN = function redefaultToEN(alts) {
    if (alts === void 0) {
      alts = {};
    }

    return this.clone(Object.assign({}, alts, {
      defaultToEN: true
    }));
  };

  _proto4.redefaultToSystem = function redefaultToSystem(alts) {
    if (alts === void 0) {
      alts = {};
    }

    return this.clone(Object.assign({}, alts, {
      defaultToEN: false
    }));
  };

  _proto4.months = function months$1(length, format, defaultOK) {
    var _this = this;

    if (format === void 0) {
      format = false;
    }

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, months, function () {
      var intl = format ? {
        month: length,
        day: "numeric"
      } : {
        month: length
      },
          formatStr = format ? "format" : "standalone";

      if (!_this.monthsCache[formatStr][length]) {
        _this.monthsCache[formatStr][length] = mapMonths(function (dt) {
          return _this.extract(dt, intl, "month");
        });
      }

      return _this.monthsCache[formatStr][length];
    });
  };

  _proto4.weekdays = function weekdays$1(length, format, defaultOK) {
    var _this2 = this;

    if (format === void 0) {
      format = false;
    }

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, weekdays, function () {
      var intl = format ? {
        weekday: length,
        year: "numeric",
        month: "long",
        day: "numeric"
      } : {
        weekday: length
      },
          formatStr = format ? "format" : "standalone";

      if (!_this2.weekdaysCache[formatStr][length]) {
        _this2.weekdaysCache[formatStr][length] = mapWeekdays(function (dt) {
          return _this2.extract(dt, intl, "weekday");
        });
      }

      return _this2.weekdaysCache[formatStr][length];
    });
  };

  _proto4.meridiems = function meridiems$1(defaultOK) {
    var _this3 = this;

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, undefined, defaultOK, function () {
      return meridiems;
    }, function () {
      // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
      // for AM and PM. This is probably wrong, but it's makes parsing way easier.
      if (!_this3.meridiemCache) {
        var intl = {
          hour: "numeric",
          hour12: true
        };
        _this3.meridiemCache = [DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19)].map(function (dt) {
          return _this3.extract(dt, intl, "dayperiod");
        });
      }

      return _this3.meridiemCache;
    });
  };

  _proto4.eras = function eras$1(length, defaultOK) {
    var _this4 = this;

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, eras, function () {
      var intl = {
        era: length
      }; // This is utter bullshit. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
      // to definitely enumerate them.

      if (!_this4.eraCache[length]) {
        _this4.eraCache[length] = [DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1)].map(function (dt) {
          return _this4.extract(dt, intl, "era");
        });
      }

      return _this4.eraCache[length];
    });
  };

  _proto4.extract = function extract(dt, intlOpts, field) {
    var df = this.dtFormatter(dt, intlOpts),
        results = df.formatToParts(),
        matching = results.find(function (m) {
      return m.type.toLowerCase() === field;
    });
    return matching ? matching.value : null;
  };

  _proto4.numberFormatter = function numberFormatter(opts) {
    if (opts === void 0) {
      opts = {};
    }

    // this forcesimple option is never used (the only caller short-circuits on it, but it seems safer to leave)
    // (in contrast, the rest of the condition is used heavily)
    return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
  };

  _proto4.dtFormatter = function dtFormatter(dt, intlOpts) {
    if (intlOpts === void 0) {
      intlOpts = {};
    }

    return new PolyDateFormatter(dt, this.intl, intlOpts);
  };

  _proto4.relFormatter = function relFormatter(opts) {
    if (opts === void 0) {
      opts = {};
    }

    return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
  };

  _proto4.isEnglish = function isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || hasIntl() && new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  };

  _proto4.equals = function equals(other) {
    return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
  };

  _createClass(Locale, [{
    key: "fastNumbers",
    get: function get() {
      if (this.fastNumbersCached == null) {
        this.fastNumbersCached = supportsFastNumbers(this);
      }

      return this.fastNumbersCached;
    }
  }]);

  return Locale;
}();

/*
 * This file handles parsing for well-specified formats. Here's how it works:
 * Two things go into parsing: a regex to match with and an extractor to take apart the groups in the match.
 * An extractor is just a function that takes a regex match array and returns a { year: ..., month: ... } object
 * parse() does the work of executing the regex and applying the extractor. It takes multiple regex/extractor pairs to try in sequence.
 * Extractors can take a "cursor" representing the offset in the match to look at. This makes it easy to combine extractors.
 * combineExtractors() does the work of combining them, keeping track of the cursor through multiple extractions.
 * Some extractions are super dumb and simpleParse and fromStrings help DRY them.
 */

function combineRegexes() {
  for (var _len = arguments.length, regexes = new Array(_len), _key = 0; _key < _len; _key++) {
    regexes[_key] = arguments[_key];
  }

  var full = regexes.reduce(function (f, r) {
    return f + r.source;
  }, "");
  return RegExp("^" + full + "$");
}

function combineExtractors() {
  for (var _len2 = arguments.length, extractors = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    extractors[_key2] = arguments[_key2];
  }

  return function (m) {
    return extractors.reduce(function (_ref, ex) {
      var mergedVals = _ref[0],
          mergedZone = _ref[1],
          cursor = _ref[2];

      var _ex = ex(m, cursor),
          val = _ex[0],
          zone = _ex[1],
          next = _ex[2];

      return [Object.assign(mergedVals, val), mergedZone || zone, next];
    }, [{}, null, 1]).slice(0, 2);
  };
}

function parse(s) {
  if (s == null) {
    return [null, null];
  }

  for (var _len3 = arguments.length, patterns = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    patterns[_key3 - 1] = arguments[_key3];
  }

  for (var _i = 0, _patterns = patterns; _i < _patterns.length; _i++) {
    var _patterns$_i = _patterns[_i],
        regex = _patterns$_i[0],
        extractor = _patterns$_i[1];
    var m = regex.exec(s);

    if (m) {
      return extractor(m);
    }
  }

  return [null, null];
}

function simpleParse() {
  for (var _len4 = arguments.length, keys = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    keys[_key4] = arguments[_key4];
  }

  return function (match, cursor) {
    var ret = {};
    var i;

    for (i = 0; i < keys.length; i++) {
      ret[keys[i]] = parseInteger(match[cursor + i]);
    }

    return [ret, null, cursor + i];
  };
} // ISO and SQL parsing


var offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
    isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,9}))?)?)?/,
    isoTimeRegex = RegExp("" + isoTimeBaseRegex.source + offsetRegex.source + "?"),
    isoTimeExtensionRegex = RegExp("(?:T" + isoTimeRegex.source + ")?"),
    isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,
    isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/,
    isoOrdinalRegex = /(\d{4})-?(\d{3})/,
    extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay"),
    extractISOOrdinalData = simpleParse("year", "ordinal"),
    sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/,
    // dumbed-down version of the ISO one
sqlTimeRegex = RegExp(isoTimeBaseRegex.source + " ?(?:" + offsetRegex.source + "|(" + ianaRegex.source + "))?"),
    sqlTimeExtensionRegex = RegExp("(?: " + sqlTimeRegex.source + ")?");

function int(match, pos, fallback) {
  var m = match[pos];
  return isUndefined(m) ? fallback : parseInteger(m);
}

function extractISOYmd(match, cursor) {
  var item = {
    year: int(match, cursor),
    month: int(match, cursor + 1, 1),
    day: int(match, cursor + 2, 1)
  };
  return [item, null, cursor + 3];
}

function extractISOTime(match, cursor) {
  var item = {
    hour: int(match, cursor, 0),
    minute: int(match, cursor + 1, 0),
    second: int(match, cursor + 2, 0),
    millisecond: parseMillis(match[cursor + 3])
  };
  return [item, null, cursor + 4];
}

function extractISOOffset(match, cursor) {
  var local = !match[cursor] && !match[cursor + 1],
      fullOffset = signedOffset(match[cursor + 1], match[cursor + 2]),
      zone = local ? null : FixedOffsetZone.instance(fullOffset);
  return [{}, zone, cursor + 3];
}

function extractIANAZone(match, cursor) {
  var zone = match[cursor] ? IANAZone.create(match[cursor]) : null;
  return [{}, zone, cursor + 1];
} // ISO duration parsing


var isoDuration = /^-?P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})(?:[.,](-?\d{1,9}))?S)?)?)$/;

function extractISODuration(match) {
  var s = match[0],
      yearStr = match[1],
      monthStr = match[2],
      weekStr = match[3],
      dayStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      millisecondsStr = match[8];
  var hasNegativePrefix = s[0] === "-";

  var maybeNegate = function maybeNegate(num) {
    return num && hasNegativePrefix ? -num : num;
  };

  return [{
    years: maybeNegate(parseInteger(yearStr)),
    months: maybeNegate(parseInteger(monthStr)),
    weeks: maybeNegate(parseInteger(weekStr)),
    days: maybeNegate(parseInteger(dayStr)),
    hours: maybeNegate(parseInteger(hourStr)),
    minutes: maybeNegate(parseInteger(minuteStr)),
    seconds: maybeNegate(parseInteger(secondStr)),
    milliseconds: maybeNegate(parseMillis(millisecondsStr))
  }];
} // These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
// and not just that we're in -240 *right now*. But since I don't think these are used that often
// I'm just going to ignore that


var obsOffsets = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};

function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  var result = {
    year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
    month: monthsShort.indexOf(monthStr) + 1,
    day: parseInteger(dayStr),
    hour: parseInteger(hourStr),
    minute: parseInteger(minuteStr)
  };
  if (secondStr) result.second = parseInteger(secondStr);

  if (weekdayStr) {
    result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
  }

  return result;
} // RFC 2822/5322


var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;

function extractRFC2822(match) {
  var weekdayStr = match[1],
      dayStr = match[2],
      monthStr = match[3],
      yearStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      obsOffset = match[8],
      milOffset = match[9],
      offHourStr = match[10],
      offMinuteStr = match[11],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  var offset;

  if (obsOffset) {
    offset = obsOffsets[obsOffset];
  } else if (milOffset) {
    offset = 0;
  } else {
    offset = signedOffset(offHourStr, offMinuteStr);
  }

  return [result, new FixedOffsetZone(offset)];
}

function preprocessRFC2822(s) {
  // Remove comments and folding whitespace and replace multiple-spaces with a single space
  return s.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
} // http date


var rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
    rfc850 = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
    ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;

function extractRFC1123Or850(match) {
  var weekdayStr = match[1],
      dayStr = match[2],
      monthStr = match[3],
      yearStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}

function extractASCII(match) {
  var weekdayStr = match[1],
      monthStr = match[2],
      dayStr = match[3],
      hourStr = match[4],
      minuteStr = match[5],
      secondStr = match[6],
      yearStr = match[7],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}

var isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
var isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
var isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
var isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
var extractISOYmdTimeAndOffset = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset);
var extractISOWeekTimeAndOffset = combineExtractors(extractISOWeekData, extractISOTime, extractISOOffset);
var extractISOOrdinalDataAndTime = combineExtractors(extractISOOrdinalData, extractISOTime);
var extractISOTimeAndOffset = combineExtractors(extractISOTime, extractISOOffset);
/**
 * @private
 */

function parseISODate(s) {
  return parse(s, [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset], [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset], [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDataAndTime], [isoTimeCombinedRegex, extractISOTimeAndOffset]);
}
function parseRFC2822Date(s) {
  return parse(preprocessRFC2822(s), [rfc2822, extractRFC2822]);
}
function parseHTTPDate(s) {
  return parse(s, [rfc1123, extractRFC1123Or850], [rfc850, extractRFC1123Or850], [ascii, extractASCII]);
}
function parseISODuration(s) {
  return parse(s, [isoDuration, extractISODuration]);
}
var sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
var sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
var extractISOYmdTimeOffsetAndIANAZone = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone);
var extractISOTimeOffsetAndIANAZone = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
function parseSQL(s) {
  return parse(s, [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeOffsetAndIANAZone], [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]);
}

var INVALID = "Invalid Duration"; // unit conversion constants

var lowOrderMatrix = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1000
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1000
  },
  hours: {
    minutes: 60,
    seconds: 60 * 60,
    milliseconds: 60 * 60 * 1000
  },
  minutes: {
    seconds: 60,
    milliseconds: 60 * 1000
  },
  seconds: {
    milliseconds: 1000
  }
},
    casualMatrix = Object.assign({
  years: {
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1000
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1000
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1000
  }
}, lowOrderMatrix),
    daysInYearAccurate = 146097.0 / 400,
    daysInMonthAccurate = 146097.0 / 4800,
    accurateMatrix = Object.assign({
  years: {
    months: 12,
    weeks: daysInYearAccurate / 7,
    days: daysInYearAccurate,
    hours: daysInYearAccurate * 24,
    minutes: daysInYearAccurate * 24 * 60,
    seconds: daysInYearAccurate * 24 * 60 * 60,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000
  },
  quarters: {
    months: 3,
    weeks: daysInYearAccurate / 28,
    days: daysInYearAccurate / 4,
    hours: daysInYearAccurate * 24 / 4,
    minutes: daysInYearAccurate * 24 * 60 / 4,
    seconds: daysInYearAccurate * 24 * 60 * 60 / 4,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000 / 4
  },
  months: {
    weeks: daysInMonthAccurate / 7,
    days: daysInMonthAccurate,
    hours: daysInMonthAccurate * 24,
    minutes: daysInMonthAccurate * 24 * 60,
    seconds: daysInMonthAccurate * 24 * 60 * 60,
    milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1000
  }
}, lowOrderMatrix); // units ordered by size

var orderedUnits = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"];
var reverseUnits = orderedUnits.slice(0).reverse(); // clone really means "create another instance just like this one, but with these changes"

function clone(dur, alts, clear) {
  if (clear === void 0) {
    clear = false;
  }

  // deep merge for vals
  var conf = {
    values: clear ? alts.values : Object.assign({}, dur.values, alts.values || {}),
    loc: dur.loc.clone(alts.loc),
    conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy
  };
  return new Duration(conf);
}

function antiTrunc(n) {
  return n < 0 ? Math.floor(n) : Math.ceil(n);
} // NB: mutates parameters


function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
  var conv = matrix[toUnit][fromUnit],
      raw = fromMap[fromUnit] / conv,
      sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]),
      // ok, so this is wild, but see the matrix in the tests
  added = !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
  toMap[toUnit] += added;
  fromMap[fromUnit] -= added * conv;
} // NB: mutates parameters


function normalizeValues(matrix, vals) {
  reverseUnits.reduce(function (previous, current) {
    if (!isUndefined(vals[current])) {
      if (previous) {
        convert(matrix, vals, previous, vals, current);
      }

      return current;
    } else {
      return previous;
    }
  }, null);
}
/**
 * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime.plus} to add a Duration object to a DateTime, producing another DateTime.
 *
 * Here is a brief overview of commonly used methods and getters in Duration:
 *
 * * **Creation** To create a Duration, use {@link Duration.fromMillis}, {@link Duration.fromObject}, or {@link Duration.fromISO}.
 * * **Unit values** See the {@link Duration.years}, {@link Duration.months}, {@link Duration.weeks}, {@link Duration.days}, {@link Duration.hours}, {@link Duration.minutes}, {@link Duration.seconds}, {@link Duration.milliseconds} accessors.
 * * **Configuration** See  {@link Duration.locale} and {@link Duration.numberingSystem} accessors.
 * * **Transformation** To create new Durations out of old ones use {@link Duration.plus}, {@link Duration.minus}, {@link Duration.normalize}, {@link Duration.set}, {@link Duration.reconfigure}, {@link Duration.shiftTo}, and {@link Duration.negate}.
 * * **Output** To convert the Duration into other representations, see {@link Duration.as}, {@link Duration.toISO}, {@link Duration.toFormat}, and {@link Duration.toJSON}
 *
 * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
 */


var Duration = /*#__PURE__*/function () {
  /**
   * @private
   */
  function Duration(config) {
    var accurate = config.conversionAccuracy === "longterm" || false;
    /**
     * @access private
     */

    this.values = config.values;
    /**
     * @access private
     */

    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */

    this.conversionAccuracy = accurate ? "longterm" : "casual";
    /**
     * @access private
     */

    this.invalid = config.invalid || null;
    /**
     * @access private
     */

    this.matrix = accurate ? accurateMatrix : casualMatrix;
    /**
     * @access private
     */

    this.isLuxonDuration = true;
  }
  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */


  Duration.fromMillis = function fromMillis(count, opts) {
    return Duration.fromObject(Object.assign({
      milliseconds: count
    }, opts));
  }
  /**
   * Create a Duration from a Javascript object with keys like 'years' and 'hours.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {string} [obj.locale='en-US'] - the locale to use
   * @param {string} obj.numberingSystem - the numbering system to use
   * @param {string} [obj.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  ;

  Duration.fromObject = function fromObject(obj) {
    if (obj == null || typeof obj !== "object") {
      throw new InvalidArgumentError("Duration.fromObject: argument expected to be an object, got " + (obj === null ? "null" : typeof obj));
    }

    return new Duration({
      values: normalizeObject(obj, Duration.normalizeUnit, ["locale", "numberingSystem", "conversionAccuracy", "zone" // a bit of debt; it's super inconvenient internally not to be able to blindly pass this
      ]),
      loc: Locale.fromObject(obj),
      conversionAccuracy: obj.conversionAccuracy
    });
  }
  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  ;

  Duration.fromISO = function fromISO(text, opts) {
    var _parseISODuration = parseISODuration(text),
        parsed = _parseISODuration[0];

    if (parsed) {
      var obj = Object.assign(parsed, opts);
      return Duration.fromObject(obj);
    } else {
      return Duration.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
    }
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  ;

  Duration.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidDurationError(invalid);
    } else {
      return new Duration({
        invalid: invalid
      });
    }
  }
  /**
   * @private
   */
  ;

  Duration.normalizeUnit = function normalizeUnit(unit) {
    var normalized = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[unit ? unit.toLowerCase() : unit];
    if (!normalized) throw new InvalidUnitError(unit);
    return normalized;
  }
  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  ;

  Duration.isDuration = function isDuration(o) {
    return o && o.isLuxonDuration || false;
  }
  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  ;

  var _proto = Duration.prototype;

  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * The duration will be converted to the set of units in the format string using {@link Duration.shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */
  _proto.toFormat = function toFormat(fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    // reverse-compat since 1.2; we always round down now, never up, and we do it by default
    var fmtOpts = Object.assign({}, opts, {
      floor: opts.round !== false && opts.floor !== false
    });
    return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID;
  }
  /**
   * Returns a Javascript object with this Duration's values.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  ;

  _proto.toObject = function toObject(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) return {};
    var base = Object.assign({}, this.values);

    if (opts.includeConfig) {
      base.conversionAccuracy = this.conversionAccuracy;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }

    return base;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  ;

  _proto.toISO = function toISO() {
    // we could use the formatter, but this is an easier way to get the minimum string
    if (!this.isValid) return null;
    var s = "P";
    if (this.years !== 0) s += this.years + "Y";
    if (this.months !== 0 || this.quarters !== 0) s += this.months + this.quarters * 3 + "M";
    if (this.weeks !== 0) s += this.weeks + "W";
    if (this.days !== 0) s += this.days + "D";
    if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) s += "T";
    if (this.hours !== 0) s += this.hours + "H";
    if (this.minutes !== 0) s += this.minutes + "M";
    if (this.seconds !== 0 || this.milliseconds !== 0) // this will handle "floating point madness" by removing extra decimal places
      // https://stackoverflow.com/questions/588004/is-floating-point-math-broken
      s += roundTo(this.seconds + this.milliseconds / 1000, 3) + "S";
    if (s === "P") s += "T0S";
    return s;
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  ;

  _proto.toJSON = function toJSON() {
    return this.toISO();
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  ;

  _proto.toString = function toString() {
    return this.toISO();
  }
  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  ;

  _proto.valueOf = function valueOf() {
    return this.as("milliseconds");
  }
  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  ;

  _proto.plus = function plus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration),
        result = {};

    for (var _iterator = _createForOfIteratorHelperLoose(orderedUnits), _step; !(_step = _iterator()).done;) {
      var k = _step.value;

      if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) {
        result[k] = dur.get(k) + this.get(k);
      }
    }

    return clone(this, {
      values: result
    }, true);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  ;

  _proto.minus = function minus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration);
    return this.plus(dur.negate());
  }
  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnit(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnit((x, u) => u === "hour" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  ;

  _proto.mapUnits = function mapUnits(fn) {
    if (!this.isValid) return this;
    var result = {};

    for (var _i = 0, _Object$keys = Object.keys(this.values); _i < _Object$keys.length; _i++) {
      var k = _Object$keys[_i];
      result[k] = asNumber(fn(this.values[k], k));
    }

    return clone(this, {
      values: result
    }, true);
  }
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).years //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).months //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).days //=> 3
   * @return {number}
   */
  ;

  _proto.get = function get(unit) {
    return this[Duration.normalizeUnit(unit)];
  }
  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  ;

  _proto.set = function set(values) {
    if (!this.isValid) return this;
    var mixed = Object.assign(this.values, normalizeObject(values, Duration.normalizeUnit, []));
    return clone(this, {
      values: mixed
    });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  ;

  _proto.reconfigure = function reconfigure(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        locale = _ref.locale,
        numberingSystem = _ref.numberingSystem,
        conversionAccuracy = _ref.conversionAccuracy;

    var loc = this.loc.clone({
      locale: locale,
      numberingSystem: numberingSystem
    }),
        opts = {
      loc: loc
    };

    if (conversionAccuracy) {
      opts.conversionAccuracy = conversionAccuracy;
    }

    return clone(this, opts);
  }
  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  ;

  _proto.as = function as(unit) {
    return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
  }
  /**
   * Reduce this Duration to its canonical representation in its current units.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @return {Duration}
   */
  ;

  _proto.normalize = function normalize() {
    if (!this.isValid) return this;
    var vals = this.toObject();
    normalizeValues(this.matrix, vals);
    return clone(this, {
      values: vals
    }, true);
  }
  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  ;

  _proto.shiftTo = function shiftTo() {
    for (var _len = arguments.length, units = new Array(_len), _key = 0; _key < _len; _key++) {
      units[_key] = arguments[_key];
    }

    if (!this.isValid) return this;

    if (units.length === 0) {
      return this;
    }

    units = units.map(function (u) {
      return Duration.normalizeUnit(u);
    });
    var built = {},
        accumulated = {},
        vals = this.toObject();
    var lastUnit;
    normalizeValues(this.matrix, vals);

    for (var _iterator2 = _createForOfIteratorHelperLoose(orderedUnits), _step2; !(_step2 = _iterator2()).done;) {
      var k = _step2.value;

      if (units.indexOf(k) >= 0) {
        lastUnit = k;
        var own = 0; // anything we haven't boiled down yet should get boiled to this unit

        for (var ak in accumulated) {
          own += this.matrix[ak][k] * accumulated[ak];
          accumulated[ak] = 0;
        } // plus anything that's already in this unit


        if (isNumber(vals[k])) {
          own += vals[k];
        }

        var i = Math.trunc(own);
        built[k] = i;
        accumulated[k] = own - i; // we'd like to absorb these fractions in another unit
        // plus anything further down the chain that should be rolled up in to this

        for (var down in vals) {
          if (orderedUnits.indexOf(down) > orderedUnits.indexOf(k)) {
            convert(this.matrix, vals, down, built, k);
          }
        } // otherwise, keep it in the wings to boil it later

      } else if (isNumber(vals[k])) {
        accumulated[k] = vals[k];
      }
    } // anything leftover becomes the decimal for the last unit
    // lastUnit must be defined since units is not empty


    for (var key in accumulated) {
      if (accumulated[key] !== 0) {
        built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
      }
    }

    return clone(this, {
      values: built
    }, true).normalize();
  }
  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  ;

  _proto.negate = function negate() {
    if (!this.isValid) return this;
    var negated = {};

    for (var _i2 = 0, _Object$keys2 = Object.keys(this.values); _i2 < _Object$keys2.length; _i2++) {
      var k = _Object$keys2[_i2];
      negated[k] = -this.values[k];
    }

    return clone(this, {
      values: negated
    }, true);
  }
  /**
   * Get the years.
   * @type {number}
   */
  ;

  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  _proto.equals = function equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    if (!this.loc.equals(other.loc)) {
      return false;
    }

    for (var _iterator3 = _createForOfIteratorHelperLoose(orderedUnits), _step3; !(_step3 = _iterator3()).done;) {
      var u = _step3.value;

      if (this.values[u] !== other.values[u]) {
        return false;
      }
    }

    return true;
  };

  _createClass(Duration, [{
    key: "locale",
    get: function get() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
     *
     * @type {string}
     */

  }, {
    key: "numberingSystem",
    get: function get() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
  }, {
    key: "years",
    get: function get() {
      return this.isValid ? this.values.years || 0 : NaN;
    }
    /**
     * Get the quarters.
     * @type {number}
     */

  }, {
    key: "quarters",
    get: function get() {
      return this.isValid ? this.values.quarters || 0 : NaN;
    }
    /**
     * Get the months.
     * @type {number}
     */

  }, {
    key: "months",
    get: function get() {
      return this.isValid ? this.values.months || 0 : NaN;
    }
    /**
     * Get the weeks
     * @type {number}
     */

  }, {
    key: "weeks",
    get: function get() {
      return this.isValid ? this.values.weeks || 0 : NaN;
    }
    /**
     * Get the days.
     * @type {number}
     */

  }, {
    key: "days",
    get: function get() {
      return this.isValid ? this.values.days || 0 : NaN;
    }
    /**
     * Get the hours.
     * @type {number}
     */

  }, {
    key: "hours",
    get: function get() {
      return this.isValid ? this.values.hours || 0 : NaN;
    }
    /**
     * Get the minutes.
     * @type {number}
     */

  }, {
    key: "minutes",
    get: function get() {
      return this.isValid ? this.values.minutes || 0 : NaN;
    }
    /**
     * Get the seconds.
     * @return {number}
     */

  }, {
    key: "seconds",
    get: function get() {
      return this.isValid ? this.values.seconds || 0 : NaN;
    }
    /**
     * Get the milliseconds.
     * @return {number}
     */

  }, {
    key: "milliseconds",
    get: function get() {
      return this.isValid ? this.values.milliseconds || 0 : NaN;
    }
    /**
     * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
     * on invalid DateTimes or Intervals.
     * @return {boolean}
     */

  }, {
    key: "isValid",
    get: function get() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this Duration became invalid, or null if the Duration is valid
     * @return {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }]);

  return Duration;
}();
function friendlyDuration(durationish) {
  if (isNumber(durationish)) {
    return Duration.fromMillis(durationish);
  } else if (Duration.isDuration(durationish)) {
    return durationish;
  } else if (typeof durationish === "object") {
    return Duration.fromObject(durationish);
  } else {
    throw new InvalidArgumentError("Unknown duration argument " + durationish + " of type " + typeof durationish);
  }
}

var INVALID$1 = "Invalid Interval"; // checks if the start is equal to or before the end

function validateStartEnd(start, end) {
  if (!start || !start.isValid) {
    return Interval.invalid("missing or invalid start");
  } else if (!end || !end.isValid) {
    return Interval.invalid("missing or invalid end");
  } else if (end < start) {
    return Interval.invalid("end before start", "The end of an interval must be after its start, but you had start=" + start.toISO() + " and end=" + end.toISO());
  } else {
    return null;
  }
}
/**
 * An Interval object represents a half-open interval of time, where each endpoint is a {@link DateTime}. Conceptually, it's a container for those two endpoints, accompanied by methods for creating, parsing, interrogating, comparing, transforming, and formatting them.
 *
 * Here is a brief overview of the most commonly used methods and getters in Interval:
 *
 * * **Creation** To create an Interval, use {@link fromDateTimes}, {@link after}, {@link before}, or {@link fromISO}.
 * * **Accessors** Use {@link start} and {@link end} to get the start and end.
 * * **Interrogation** To analyze the Interval, use {@link count}, {@link length}, {@link hasSame}, {@link contains}, {@link isAfter}, or {@link isBefore}.
 * * **Transformation** To create other Intervals out of this one, use {@link set}, {@link splitAt}, {@link splitBy}, {@link divideEqually}, {@link merge}, {@link xor}, {@link union}, {@link intersection}, or {@link difference}.
 * * **Comparison** To compare this Interval to another one, use {@link equals}, {@link overlaps}, {@link abutsStart}, {@link abutsEnd}, {@link engulfs}
 * * **Output** To convert the Interval into other representations, see {@link toString}, {@link toISO}, {@link toISODate}, {@link toISOTime}, {@link toFormat}, and {@link toDuration}.
 */


var Interval = /*#__PURE__*/function () {
  /**
   * @private
   */
  function Interval(config) {
    /**
     * @access private
     */
    this.s = config.start;
    /**
     * @access private
     */

    this.e = config.end;
    /**
     * @access private
     */

    this.invalid = config.invalid || null;
    /**
     * @access private
     */

    this.isLuxonInterval = true;
  }
  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */


  Interval.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidIntervalError(invalid);
    } else {
      return new Interval({
        invalid: invalid
      });
    }
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  ;

  Interval.fromDateTimes = function fromDateTimes(start, end) {
    var builtStart = friendlyDateTime(start),
        builtEnd = friendlyDateTime(end);
    var validateError = validateStartEnd(builtStart, builtEnd);

    if (validateError == null) {
      return new Interval({
        start: builtStart,
        end: builtEnd
      });
    } else {
      return validateError;
    }
  }
  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  ;

  Interval.after = function after(start, duration) {
    var dur = friendlyDuration(duration),
        dt = friendlyDateTime(start);
    return Interval.fromDateTimes(dt, dt.plus(dur));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  ;

  Interval.before = function before(end, duration) {
    var dur = friendlyDuration(duration),
        dt = friendlyDateTime(end);
    return Interval.fromDateTimes(dt.minus(dur), dt);
  }
  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime.fromISO} and optionally {@link Duration.fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  ;

  Interval.fromISO = function fromISO(text, opts) {
    var _split = (text || "").split("/", 2),
        s = _split[0],
        e = _split[1];

    if (s && e) {
      var start = DateTime.fromISO(s, opts),
          end = DateTime.fromISO(e, opts);

      if (start.isValid && end.isValid) {
        return Interval.fromDateTimes(start, end);
      }

      if (start.isValid) {
        var dur = Duration.fromISO(e, opts);

        if (dur.isValid) {
          return Interval.after(start, dur);
        }
      } else if (end.isValid) {
        var _dur = Duration.fromISO(s, opts);

        if (_dur.isValid) {
          return Interval.before(end, _dur);
        }
      }
    }

    return Interval.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
  }
  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  ;

  Interval.isInterval = function isInterval(o) {
    return o && o.isLuxonInterval || false;
  }
  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  ;

  var _proto = Interval.prototype;

  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  _proto.length = function length(unit) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    return this.isValid ? this.toDuration.apply(this, [unit]).get(unit) : NaN;
  }
  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @return {number}
   */
  ;

  _proto.count = function count(unit) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (!this.isValid) return NaN;
    var start = this.start.startOf(unit),
        end = this.end.startOf(unit);
    return Math.floor(end.diff(start, unit).get(unit)) + 1;
  }
  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  ;

  _proto.hasSame = function hasSame(unit) {
    return this.isValid ? this.e.minus(1).hasSame(this.s, unit) : false;
  }
  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  ;

  _proto.isEmpty = function isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  ;

  _proto.isAfter = function isAfter(dateTime) {
    if (!this.isValid) return false;
    return this.s > dateTime;
  }
  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  ;

  _proto.isBefore = function isBefore(dateTime) {
    if (!this.isValid) return false;
    return this.e <= dateTime;
  }
  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  ;

  _proto.contains = function contains(dateTime) {
    if (!this.isValid) return false;
    return this.s <= dateTime && this.e > dateTime;
  }
  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  ;

  _proto.set = function set(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        start = _ref.start,
        end = _ref.end;

    if (!this.isValid) return this;
    return Interval.fromDateTimes(start || this.s, end || this.e);
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...[DateTime]} dateTimes - the unit of time to count.
   * @return {[Interval]}
   */
  ;

  _proto.splitAt = function splitAt() {
    var _this = this;

    if (!this.isValid) return [];

    for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
      dateTimes[_key] = arguments[_key];
    }

    var sorted = dateTimes.map(friendlyDateTime).filter(function (d) {
      return _this.contains(d);
    }).sort(),
        results = [];
    var s = this.s,
        i = 0;

    while (s < this.e) {
      var added = sorted[i] || this.e,
          next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      i += 1;
    }

    return results;
  }
  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {[Interval]}
   */
  ;

  _proto.splitBy = function splitBy(duration) {
    var dur = friendlyDuration(duration);

    if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
      return [];
    }

    var s = this.s,
        added,
        next;
    var results = [];

    while (s < this.e) {
      added = s.plus(dur);
      next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
    }

    return results;
  }
  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {[Interval]}
   */
  ;

  _proto.divideEqually = function divideEqually(numberOfParts) {
    if (!this.isValid) return [];
    return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
  }
  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.overlaps = function overlaps(other) {
    return this.e > other.s && this.s < other.e;
  }
  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.abutsStart = function abutsStart(other) {
    if (!this.isValid) return false;
    return +this.e === +other.s;
  }
  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.abutsEnd = function abutsEnd(other) {
    if (!this.isValid) return false;
    return +other.e === +this.s;
  }
  /**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.engulfs = function engulfs(other) {
    if (!this.isValid) return false;
    return this.s <= other.s && this.e >= other.e;
  }
  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  ;

  _proto.equals = function equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    return this.s.equals(other.s) && this.e.equals(other.e);
  }
  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  ;

  _proto.intersection = function intersection(other) {
    if (!this.isValid) return this;
    var s = this.s > other.s ? this.s : other.s,
        e = this.e < other.e ? this.e : other.e;

    if (s > e) {
      return null;
    } else {
      return Interval.fromDateTimes(s, e);
    }
  }
  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  ;

  _proto.union = function union(other) {
    if (!this.isValid) return this;
    var s = this.s < other.s ? this.s : other.s,
        e = this.e > other.e ? this.e : other.e;
    return Interval.fromDateTimes(s, e);
  }
  /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {[Interval]} intervals
   * @return {[Interval]}
   */
  ;

  Interval.merge = function merge(intervals) {
    var _intervals$sort$reduc = intervals.sort(function (a, b) {
      return a.s - b.s;
    }).reduce(function (_ref2, item) {
      var sofar = _ref2[0],
          current = _ref2[1];

      if (!current) {
        return [sofar, item];
      } else if (current.overlaps(item) || current.abutsStart(item)) {
        return [sofar, current.union(item)];
      } else {
        return [sofar.concat([current]), item];
      }
    }, [[], null]),
        found = _intervals$sort$reduc[0],
        final = _intervals$sort$reduc[1];

    if (final) {
      found.push(final);
    }

    return found;
  }
  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {[Interval]} intervals
   * @return {[Interval]}
   */
  ;

  Interval.xor = function xor(intervals) {
    var _Array$prototype;

    var start = null,
        currentCount = 0;

    var results = [],
        ends = intervals.map(function (i) {
      return [{
        time: i.s,
        type: "s"
      }, {
        time: i.e,
        type: "e"
      }];
    }),
        flattened = (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, ends),
        arr = flattened.sort(function (a, b) {
      return a.time - b.time;
    });

    for (var _iterator = _createForOfIteratorHelperLoose(arr), _step; !(_step = _iterator()).done;) {
      var i = _step.value;
      currentCount += i.type === "s" ? 1 : -1;

      if (currentCount === 1) {
        start = i.time;
      } else {
        if (start && +start !== +i.time) {
          results.push(Interval.fromDateTimes(start, i.time));
        }

        start = null;
      }
    }

    return Interval.merge(results);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {[Interval]}
   */
  ;

  _proto.difference = function difference() {
    var _this2 = this;

    for (var _len2 = arguments.length, intervals = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      intervals[_key2] = arguments[_key2];
    }

    return Interval.xor([this].concat(intervals)).map(function (i) {
      return _this2.intersection(i);
    }).filter(function (i) {
      return i && !i.isEmpty();
    });
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  ;

  _proto.toString = function toString() {
    if (!this.isValid) return INVALID$1;
    return "[" + this.s.toISO() + " \u2013 " + this.e.toISO() + ")";
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime.toISO}
   * @return {string}
   */
  ;

  _proto.toISO = function toISO(opts) {
    if (!this.isValid) return INVALID$1;
    return this.s.toISO(opts) + "/" + this.e.toISO(opts);
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  ;

  _proto.toISODate = function toISODate() {
    if (!this.isValid) return INVALID$1;
    return this.s.toISODate() + "/" + this.e.toISODate();
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime.toISO}
   * @return {string}
   */
  ;

  _proto.toISOTime = function toISOTime(opts) {
    if (!this.isValid) return INVALID$1;
    return this.s.toISOTime(opts) + "/" + this.e.toISOTime(opts);
  }
  /**
   * Returns a string representation of this Interval formatted according to the specified format string.
   * @param {string} dateFormat - the format string. This string formats the start and end time. See {@link DateTime.toFormat} for details.
   * @param {Object} opts - options
   * @param {string} [opts.separator =  ' – '] - a separator to place between the start and end representations
   * @return {string}
   */
  ;

  _proto.toFormat = function toFormat(dateFormat, _temp2) {
    var _ref3 = _temp2 === void 0 ? {} : _temp2,
        _ref3$separator = _ref3.separator,
        separator = _ref3$separator === void 0 ? " – " : _ref3$separator;

    if (!this.isValid) return INVALID$1;
    return "" + this.s.toFormat(dateFormat) + separator + this.e.toFormat(dateFormat);
  }
  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  ;

  _proto.toDuration = function toDuration(unit, opts) {
    if (!this.isValid) {
      return Duration.invalid(this.invalidReason);
    }

    return this.e.diff(this.s, unit, opts);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  ;

  _proto.mapEndpoints = function mapEndpoints(mapFn) {
    return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
  };

  _createClass(Interval, [{
    key: "start",
    get: function get() {
      return this.isValid ? this.s : null;
    }
    /**
     * Returns the end of the Interval
     * @type {DateTime}
     */

  }, {
    key: "end",
    get: function get() {
      return this.isValid ? this.e : null;
    }
    /**
     * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
     * @type {boolean}
     */

  }, {
    key: "isValid",
    get: function get() {
      return this.invalidReason === null;
    }
    /**
     * Returns an error code if this Interval is invalid, or null if the Interval is valid
     * @type {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }]);

  return Interval;
}();

/**
 * The Info class contains static methods for retrieving general time and date related data. For example, it has methods for finding out if a time zone has a DST, for listing the months in any supported locale, and for discovering which of Luxon features are available in the current environment.
 */

var Info = /*#__PURE__*/function () {
  function Info() {}

  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  Info.hasDST = function hasDST(zone) {
    if (zone === void 0) {
      zone = Settings.defaultZone;
    }

    var proto = DateTime.local().setZone(zone).set({
      month: 12
    });
    return !zone.universal && proto.offset !== proto.set({
      month: 6
    }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  ;

  Info.isValidIANAZone = function isValidIANAZone(zone) {
    return IANAZone.isValidSpecifier(zone) && IANAZone.isValidZone(zone);
  }
  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone.isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  ;

  Info.normalizeZone = function normalizeZone$1(input) {
    return normalizeZone(input, Settings.defaultZone);
  }
  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {[string]}
   */
  ;

  Info.months = function months(length, _temp) {
    if (length === void 0) {
      length = "long";
    }

    var _ref = _temp === void 0 ? {} : _temp,
        _ref$locale = _ref.locale,
        locale = _ref$locale === void 0 ? null : _ref$locale,
        _ref$numberingSystem = _ref.numberingSystem,
        numberingSystem = _ref$numberingSystem === void 0 ? null : _ref$numberingSystem,
        _ref$outputCalendar = _ref.outputCalendar,
        outputCalendar = _ref$outputCalendar === void 0 ? "gregory" : _ref$outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar).months(length);
  }
  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {[string]}
   */
  ;

  Info.monthsFormat = function monthsFormat(length, _temp2) {
    if (length === void 0) {
      length = "long";
    }

    var _ref2 = _temp2 === void 0 ? {} : _temp2,
        _ref2$locale = _ref2.locale,
        locale = _ref2$locale === void 0 ? null : _ref2$locale,
        _ref2$numberingSystem = _ref2.numberingSystem,
        numberingSystem = _ref2$numberingSystem === void 0 ? null : _ref2$numberingSystem,
        _ref2$outputCalendar = _ref2.outputCalendar,
        outputCalendar = _ref2$outputCalendar === void 0 ? "gregory" : _ref2$outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar).months(length, true);
  }
  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {[string]}
   */
  ;

  Info.weekdays = function weekdays(length, _temp3) {
    if (length === void 0) {
      length = "long";
    }

    var _ref3 = _temp3 === void 0 ? {} : _temp3,
        _ref3$locale = _ref3.locale,
        locale = _ref3$locale === void 0 ? null : _ref3$locale,
        _ref3$numberingSystem = _ref3.numberingSystem,
        numberingSystem = _ref3$numberingSystem === void 0 ? null : _ref3$numberingSystem;

    return Locale.create(locale, numberingSystem, null).weekdays(length);
  }
  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @return {[string]}
   */
  ;

  Info.weekdaysFormat = function weekdaysFormat(length, _temp4) {
    if (length === void 0) {
      length = "long";
    }

    var _ref4 = _temp4 === void 0 ? {} : _temp4,
        _ref4$locale = _ref4.locale,
        locale = _ref4$locale === void 0 ? null : _ref4$locale,
        _ref4$numberingSystem = _ref4.numberingSystem,
        numberingSystem = _ref4$numberingSystem === void 0 ? null : _ref4$numberingSystem;

    return Locale.create(locale, numberingSystem, null).weekdays(length, true);
  }
  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {[string]}
   */
  ;

  Info.meridiems = function meridiems(_temp5) {
    var _ref5 = _temp5 === void 0 ? {} : _temp5,
        _ref5$locale = _ref5.locale,
        locale = _ref5$locale === void 0 ? null : _ref5$locale;

    return Locale.create(locale).meridiems();
  }
  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {[string]}
   */
  ;

  Info.eras = function eras(length, _temp6) {
    if (length === void 0) {
      length = "short";
    }

    var _ref6 = _temp6 === void 0 ? {} : _temp6,
        _ref6$locale = _ref6.locale,
        locale = _ref6$locale === void 0 ? null : _ref6$locale;

    return Locale.create(locale, null, "gregory").eras(length);
  }
  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, timezone support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `zones`: whether this environment supports IANA timezones
   * * `intlTokens`: whether this environment supports internationalized token-based formatting/parsing
   * * `intl`: whether this environment supports general internationalization
   * * `relative`: whether this environment supports relative time formatting
   * @example Info.features() //=> { intl: true, intlTokens: false, zones: true, relative: false }
   * @return {Object}
   */
  ;

  Info.features = function features() {
    var intl = false,
        intlTokens = false,
        zones = false,
        relative = false;

    if (hasIntl()) {
      intl = true;
      intlTokens = hasFormatToParts();
      relative = hasRelative();

      try {
        zones = new Intl.DateTimeFormat("en", {
          timeZone: "America/New_York"
        }).resolvedOptions().timeZone === "America/New_York";
      } catch (e) {
        zones = false;
      }
    }

    return {
      intl: intl,
      intlTokens: intlTokens,
      zones: zones,
      relative: relative
    };
  };

  return Info;
}();

function dayDiff(earlier, later) {
  var utcDayStart = function utcDayStart(dt) {
    return dt.toUTC(0, {
      keepLocalTime: true
    }).startOf("day").valueOf();
  },
      ms = utcDayStart(later) - utcDayStart(earlier);

  return Math.floor(Duration.fromMillis(ms).as("days"));
}

function highOrderDiffs(cursor, later, units) {
  var differs = [["years", function (a, b) {
    return b.year - a.year;
  }], ["months", function (a, b) {
    return b.month - a.month + (b.year - a.year) * 12;
  }], ["weeks", function (a, b) {
    var days = dayDiff(a, b);
    return (days - days % 7) / 7;
  }], ["days", dayDiff]];
  var results = {};
  var lowestOrder, highWater;

  for (var _i = 0, _differs = differs; _i < _differs.length; _i++) {
    var _differs$_i = _differs[_i],
        unit = _differs$_i[0],
        differ = _differs$_i[1];

    if (units.indexOf(unit) >= 0) {
      var _cursor$plus;

      lowestOrder = unit;
      var delta = differ(cursor, later);
      highWater = cursor.plus((_cursor$plus = {}, _cursor$plus[unit] = delta, _cursor$plus));

      if (highWater > later) {
        var _cursor$plus2;

        cursor = cursor.plus((_cursor$plus2 = {}, _cursor$plus2[unit] = delta - 1, _cursor$plus2));
        delta -= 1;
      } else {
        cursor = highWater;
      }

      results[unit] = delta;
    }
  }

  return [cursor, results, highWater, lowestOrder];
}

function _diff (earlier, later, units, opts) {
  var _highOrderDiffs = highOrderDiffs(earlier, later, units),
      cursor = _highOrderDiffs[0],
      results = _highOrderDiffs[1],
      highWater = _highOrderDiffs[2],
      lowestOrder = _highOrderDiffs[3];

  var remainingMillis = later - cursor;
  var lowerOrderUnits = units.filter(function (u) {
    return ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0;
  });

  if (lowerOrderUnits.length === 0) {
    if (highWater < later) {
      var _cursor$plus3;

      highWater = cursor.plus((_cursor$plus3 = {}, _cursor$plus3[lowestOrder] = 1, _cursor$plus3));
    }

    if (highWater !== cursor) {
      results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
  }

  var duration = Duration.fromObject(Object.assign(results, opts));

  if (lowerOrderUnits.length > 0) {
    var _Duration$fromMillis;

    return (_Duration$fromMillis = Duration.fromMillis(remainingMillis, opts)).shiftTo.apply(_Duration$fromMillis, lowerOrderUnits).plus(duration);
  } else {
    return duration;
  }
}

var numberingSystems = {
  arab: "[\u0660-\u0669]",
  arabext: "[\u06F0-\u06F9]",
  bali: "[\u1B50-\u1B59]",
  beng: "[\u09E6-\u09EF]",
  deva: "[\u0966-\u096F]",
  fullwide: "[\uFF10-\uFF19]",
  gujr: "[\u0AE6-\u0AEF]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[\u17E0-\u17E9]",
  knda: "[\u0CE6-\u0CEF]",
  laoo: "[\u0ED0-\u0ED9]",
  limb: "[\u1946-\u194F]",
  mlym: "[\u0D66-\u0D6F]",
  mong: "[\u1810-\u1819]",
  mymr: "[\u1040-\u1049]",
  orya: "[\u0B66-\u0B6F]",
  tamldec: "[\u0BE6-\u0BEF]",
  telu: "[\u0C66-\u0C6F]",
  thai: "[\u0E50-\u0E59]",
  tibt: "[\u0F20-\u0F29]",
  latn: "\\d"
};
var numberingSystemsUTF16 = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
}; // eslint-disable-next-line

var hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
function parseDigits(str) {
  var value = parseInt(str, 10);

  if (isNaN(value)) {
    value = "";

    for (var i = 0; i < str.length; i++) {
      var code = str.charCodeAt(i);

      if (str[i].search(numberingSystems.hanidec) !== -1) {
        value += hanidecChars.indexOf(str[i]);
      } else {
        for (var key in numberingSystemsUTF16) {
          var _numberingSystemsUTF = numberingSystemsUTF16[key],
              min = _numberingSystemsUTF[0],
              max = _numberingSystemsUTF[1];

          if (code >= min && code <= max) {
            value += code - min;
          }
        }
      }
    }

    return parseInt(value, 10);
  } else {
    return value;
  }
}
function digitRegex(_ref, append) {
  var numberingSystem = _ref.numberingSystem;

  if (append === void 0) {
    append = "";
  }

  return new RegExp("" + numberingSystems[numberingSystem || "latn"] + append);
}

var MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";

function intUnit(regex, post) {
  if (post === void 0) {
    post = function post(i) {
      return i;
    };
  }

  return {
    regex: regex,
    deser: function deser(_ref) {
      var s = _ref[0];
      return post(parseDigits(s));
    }
  };
}

function fixListRegex(s) {
  // make dots optional and also make them literal
  return s.replace(/\./, "\\.?");
}

function stripInsensitivities(s) {
  return s.replace(/\./, "").toLowerCase();
}

function oneOf(strings, startIndex) {
  if (strings === null) {
    return null;
  } else {
    return {
      regex: RegExp(strings.map(fixListRegex).join("|")),
      deser: function deser(_ref2) {
        var s = _ref2[0];
        return strings.findIndex(function (i) {
          return stripInsensitivities(s) === stripInsensitivities(i);
        }) + startIndex;
      }
    };
  }
}

function offset(regex, groups) {
  return {
    regex: regex,
    deser: function deser(_ref3) {
      var h = _ref3[1],
          m = _ref3[2];
      return signedOffset(h, m);
    },
    groups: groups
  };
}

function simple(regex) {
  return {
    regex: regex,
    deser: function deser(_ref4) {
      var s = _ref4[0];
      return s;
    }
  };
}

function escapeToken(value) {
  // eslint-disable-next-line no-useless-escape
  return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}

function unitForToken(token, loc) {
  var one = digitRegex(loc),
      two = digitRegex(loc, "{2}"),
      three = digitRegex(loc, "{3}"),
      four = digitRegex(loc, "{4}"),
      six = digitRegex(loc, "{6}"),
      oneOrTwo = digitRegex(loc, "{1,2}"),
      oneToThree = digitRegex(loc, "{1,3}"),
      oneToSix = digitRegex(loc, "{1,6}"),
      oneToNine = digitRegex(loc, "{1,9}"),
      twoToFour = digitRegex(loc, "{2,4}"),
      fourToSix = digitRegex(loc, "{4,6}"),
      literal = function literal(t) {
    return {
      regex: RegExp(escapeToken(t.val)),
      deser: function deser(_ref5) {
        var s = _ref5[0];
        return s;
      },
      literal: true
    };
  },
      unitate = function unitate(t) {
    if (token.literal) {
      return literal(t);
    }

    switch (t.val) {
      // era
      case "G":
        return oneOf(loc.eras("short", false), 0);

      case "GG":
        return oneOf(loc.eras("long", false), 0);
      // years

      case "y":
        return intUnit(oneToSix);

      case "yy":
        return intUnit(twoToFour, untruncateYear);

      case "yyyy":
        return intUnit(four);

      case "yyyyy":
        return intUnit(fourToSix);

      case "yyyyyy":
        return intUnit(six);
      // months

      case "M":
        return intUnit(oneOrTwo);

      case "MM":
        return intUnit(two);

      case "MMM":
        return oneOf(loc.months("short", true, false), 1);

      case "MMMM":
        return oneOf(loc.months("long", true, false), 1);

      case "L":
        return intUnit(oneOrTwo);

      case "LL":
        return intUnit(two);

      case "LLL":
        return oneOf(loc.months("short", false, false), 1);

      case "LLLL":
        return oneOf(loc.months("long", false, false), 1);
      // dates

      case "d":
        return intUnit(oneOrTwo);

      case "dd":
        return intUnit(two);
      // ordinals

      case "o":
        return intUnit(oneToThree);

      case "ooo":
        return intUnit(three);
      // time

      case "HH":
        return intUnit(two);

      case "H":
        return intUnit(oneOrTwo);

      case "hh":
        return intUnit(two);

      case "h":
        return intUnit(oneOrTwo);

      case "mm":
        return intUnit(two);

      case "m":
        return intUnit(oneOrTwo);

      case "q":
        return intUnit(oneOrTwo);

      case "qq":
        return intUnit(two);

      case "s":
        return intUnit(oneOrTwo);

      case "ss":
        return intUnit(two);

      case "S":
        return intUnit(oneToThree);

      case "SSS":
        return intUnit(three);

      case "u":
        return simple(oneToNine);
      // meridiem

      case "a":
        return oneOf(loc.meridiems(), 0);
      // weekYear (k)

      case "kkkk":
        return intUnit(four);

      case "kk":
        return intUnit(twoToFour, untruncateYear);
      // weekNumber (W)

      case "W":
        return intUnit(oneOrTwo);

      case "WW":
        return intUnit(two);
      // weekdays

      case "E":
      case "c":
        return intUnit(one);

      case "EEE":
        return oneOf(loc.weekdays("short", false, false), 1);

      case "EEEE":
        return oneOf(loc.weekdays("long", false, false), 1);

      case "ccc":
        return oneOf(loc.weekdays("short", true, false), 1);

      case "cccc":
        return oneOf(loc.weekdays("long", true, false), 1);
      // offset/zone

      case "Z":
      case "ZZ":
        return offset(new RegExp("([+-]" + oneOrTwo.source + ")(?::(" + two.source + "))?"), 2);

      case "ZZZ":
        return offset(new RegExp("([+-]" + oneOrTwo.source + ")(" + two.source + ")?"), 2);
      // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
      // because we don't have any way to figure out what they are

      case "z":
        return simple(/[a-z_+-/]{1,256}?/i);

      default:
        return literal(t);
    }
  };

  var unit = unitate(token) || {
    invalidReason: MISSING_FTP
  };
  unit.token = token;
  return unit;
}

var partTypeStyleToTokenVal = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  }
};

function tokenForPart(part, locale, formatOpts) {
  var type = part.type,
      value = part.value;

  if (type === "literal") {
    return {
      literal: true,
      val: value
    };
  }

  var style = formatOpts[type];
  var val = partTypeStyleToTokenVal[type];

  if (typeof val === "object") {
    val = val[style];
  }

  if (val) {
    return {
      literal: false,
      val: val
    };
  }

  return undefined;
}

function buildRegex(units) {
  var re = units.map(function (u) {
    return u.regex;
  }).reduce(function (f, r) {
    return f + "(" + r.source + ")";
  }, "");
  return ["^" + re + "$", units];
}

function match(input, regex, handlers) {
  var matches = input.match(regex);

  if (matches) {
    var all = {};
    var matchIndex = 1;

    for (var i in handlers) {
      if (hasOwnProperty(handlers, i)) {
        var h = handlers[i],
            groups = h.groups ? h.groups + 1 : 1;

        if (!h.literal && h.token) {
          all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
        }

        matchIndex += groups;
      }
    }

    return [matches, all];
  } else {
    return [matches, {}];
  }
}

function dateTimeFromMatches(matches) {
  var toField = function toField(token) {
    switch (token) {
      case "S":
        return "millisecond";

      case "s":
        return "second";

      case "m":
        return "minute";

      case "h":
      case "H":
        return "hour";

      case "d":
        return "day";

      case "o":
        return "ordinal";

      case "L":
      case "M":
        return "month";

      case "y":
        return "year";

      case "E":
      case "c":
        return "weekday";

      case "W":
        return "weekNumber";

      case "k":
        return "weekYear";

      case "q":
        return "quarter";

      default:
        return null;
    }
  };

  var zone;

  if (!isUndefined(matches.Z)) {
    zone = new FixedOffsetZone(matches.Z);
  } else if (!isUndefined(matches.z)) {
    zone = IANAZone.create(matches.z);
  } else {
    zone = null;
  }

  if (!isUndefined(matches.q)) {
    matches.M = (matches.q - 1) * 3 + 1;
  }

  if (!isUndefined(matches.h)) {
    if (matches.h < 12 && matches.a === 1) {
      matches.h += 12;
    } else if (matches.h === 12 && matches.a === 0) {
      matches.h = 0;
    }
  }

  if (matches.G === 0 && matches.y) {
    matches.y = -matches.y;
  }

  if (!isUndefined(matches.u)) {
    matches.S = parseMillis(matches.u);
  }

  var vals = Object.keys(matches).reduce(function (r, k) {
    var f = toField(k);

    if (f) {
      r[f] = matches[k];
    }

    return r;
  }, {});
  return [vals, zone];
}

var dummyDateTimeCache = null;

function getDummyDateTime() {
  if (!dummyDateTimeCache) {
    dummyDateTimeCache = DateTime.fromMillis(1555555555555);
  }

  return dummyDateTimeCache;
}

function maybeExpandMacroToken(token, locale) {
  if (token.literal) {
    return token;
  }

  var formatOpts = Formatter.macroTokenToFormatOpts(token.val);

  if (!formatOpts) {
    return token;
  }

  var formatter = Formatter.create(locale, formatOpts);
  var parts = formatter.formatDateTimeParts(getDummyDateTime());
  var tokens = parts.map(function (p) {
    return tokenForPart(p, locale, formatOpts);
  });

  if (tokens.includes(undefined)) {
    return token;
  }

  return tokens;
}

function expandMacroTokens(tokens, locale) {
  var _Array$prototype;

  return (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, tokens.map(function (t) {
    return maybeExpandMacroToken(t, locale);
  }));
}
/**
 * @private
 */


function explainFromTokens(locale, input, format) {
  var tokens = expandMacroTokens(Formatter.parseFormat(format), locale),
      units = tokens.map(function (t) {
    return unitForToken(t, locale);
  }),
      disqualifyingUnit = units.find(function (t) {
    return t.invalidReason;
  });

  if (disqualifyingUnit) {
    return {
      input: input,
      tokens: tokens,
      invalidReason: disqualifyingUnit.invalidReason
    };
  } else {
    var _buildRegex = buildRegex(units),
        regexString = _buildRegex[0],
        handlers = _buildRegex[1],
        regex = RegExp(regexString, "i"),
        _match = match(input, regex, handlers),
        rawMatches = _match[0],
        matches = _match[1],
        _ref6 = matches ? dateTimeFromMatches(matches) : [null, null],
        result = _ref6[0],
        zone = _ref6[1];

    if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) {
      throw new ConflictingSpecificationError("Can't include meridiem when specifying 24-hour format");
    }

    return {
      input: input,
      tokens: tokens,
      regex: regex,
      rawMatches: rawMatches,
      matches: matches,
      result: result,
      zone: zone
    };
  }
}
function parseFromTokens(locale, input, format) {
  var _explainFromTokens = explainFromTokens(locale, input, format),
      result = _explainFromTokens.result,
      zone = _explainFromTokens.zone,
      invalidReason = _explainFromTokens.invalidReason;

  return [result, zone, invalidReason];
}

var nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
    leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

function unitOutOfRange(unit, value) {
  return new Invalid("unit out of range", "you specified " + value + " (of type " + typeof value + ") as a " + unit + ", which is invalid");
}

function dayOfWeek(year, month, day) {
  var js = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
  return js === 0 ? 7 : js;
}

function computeOrdinal(year, month, day) {
  return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
}

function uncomputeOrdinal(year, ordinal) {
  var table = isLeapYear(year) ? leapLadder : nonLeapLadder,
      month0 = table.findIndex(function (i) {
    return i < ordinal;
  }),
      day = ordinal - table[month0];
  return {
    month: month0 + 1,
    day: day
  };
}
/**
 * @private
 */


function gregorianToWeek(gregObj) {
  var year = gregObj.year,
      month = gregObj.month,
      day = gregObj.day,
      ordinal = computeOrdinal(year, month, day),
      weekday = dayOfWeek(year, month, day);
  var weekNumber = Math.floor((ordinal - weekday + 10) / 7),
      weekYear;

  if (weekNumber < 1) {
    weekYear = year - 1;
    weekNumber = weeksInWeekYear(weekYear);
  } else if (weekNumber > weeksInWeekYear(year)) {
    weekYear = year + 1;
    weekNumber = 1;
  } else {
    weekYear = year;
  }

  return Object.assign({
    weekYear: weekYear,
    weekNumber: weekNumber,
    weekday: weekday
  }, timeObject(gregObj));
}
function weekToGregorian(weekData) {
  var weekYear = weekData.weekYear,
      weekNumber = weekData.weekNumber,
      weekday = weekData.weekday,
      weekdayOfJan4 = dayOfWeek(weekYear, 1, 4),
      yearInDays = daysInYear(weekYear);
  var ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3,
      year;

  if (ordinal < 1) {
    year = weekYear - 1;
    ordinal += daysInYear(year);
  } else if (ordinal > yearInDays) {
    year = weekYear + 1;
    ordinal -= daysInYear(weekYear);
  } else {
    year = weekYear;
  }

  var _uncomputeOrdinal = uncomputeOrdinal(year, ordinal),
      month = _uncomputeOrdinal.month,
      day = _uncomputeOrdinal.day;

  return Object.assign({
    year: year,
    month: month,
    day: day
  }, timeObject(weekData));
}
function gregorianToOrdinal(gregData) {
  var year = gregData.year,
      month = gregData.month,
      day = gregData.day,
      ordinal = computeOrdinal(year, month, day);
  return Object.assign({
    year: year,
    ordinal: ordinal
  }, timeObject(gregData));
}
function ordinalToGregorian(ordinalData) {
  var year = ordinalData.year,
      ordinal = ordinalData.ordinal,
      _uncomputeOrdinal2 = uncomputeOrdinal(year, ordinal),
      month = _uncomputeOrdinal2.month,
      day = _uncomputeOrdinal2.day;

  return Object.assign({
    year: year,
    month: month,
    day: day
  }, timeObject(ordinalData));
}
function hasInvalidWeekData(obj) {
  var validYear = isInteger(obj.weekYear),
      validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear)),
      validWeekday = integerBetween(obj.weekday, 1, 7);

  if (!validYear) {
    return unitOutOfRange("weekYear", obj.weekYear);
  } else if (!validWeek) {
    return unitOutOfRange("week", obj.week);
  } else if (!validWeekday) {
    return unitOutOfRange("weekday", obj.weekday);
  } else return false;
}
function hasInvalidOrdinalData(obj) {
  var validYear = isInteger(obj.year),
      validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validOrdinal) {
    return unitOutOfRange("ordinal", obj.ordinal);
  } else return false;
}
function hasInvalidGregorianData(obj) {
  var validYear = isInteger(obj.year),
      validMonth = integerBetween(obj.month, 1, 12),
      validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validMonth) {
    return unitOutOfRange("month", obj.month);
  } else if (!validDay) {
    return unitOutOfRange("day", obj.day);
  } else return false;
}
function hasInvalidTimeData(obj) {
  var hour = obj.hour,
      minute = obj.minute,
      second = obj.second,
      millisecond = obj.millisecond;
  var validHour = integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0,
      validMinute = integerBetween(minute, 0, 59),
      validSecond = integerBetween(second, 0, 59),
      validMillisecond = integerBetween(millisecond, 0, 999);

  if (!validHour) {
    return unitOutOfRange("hour", hour);
  } else if (!validMinute) {
    return unitOutOfRange("minute", minute);
  } else if (!validSecond) {
    return unitOutOfRange("second", second);
  } else if (!validMillisecond) {
    return unitOutOfRange("millisecond", millisecond);
  } else return false;
}

var INVALID$2 = "Invalid DateTime";
var MAX_DATE = 8.64e15;

function unsupportedZone(zone) {
  return new Invalid("unsupported zone", "the zone \"" + zone.name + "\" is not supported");
} // we cache week data on the DT object and this intermediates the cache


function possiblyCachedWeekData(dt) {
  if (dt.weekData === null) {
    dt.weekData = gregorianToWeek(dt.c);
  }

  return dt.weekData;
} // clone really means, "make a new object with these modifications". all "setters" really use this
// to create a new object while only changing some of the properties


function clone$1(inst, alts) {
  var current = {
    ts: inst.ts,
    zone: inst.zone,
    c: inst.c,
    o: inst.o,
    loc: inst.loc,
    invalid: inst.invalid
  };
  return new DateTime(Object.assign({}, current, alts, {
    old: current
  }));
} // find the right offset a given local time. The o input is our guess, which determines which
// offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)


function fixOffset(localTS, o, tz) {
  // Our UTC time is just a guess because our offset is just a guess
  var utcGuess = localTS - o * 60 * 1000; // Test whether the zone matches the offset for this ts

  var o2 = tz.offset(utcGuess); // If so, offset didn't change and we're done

  if (o === o2) {
    return [utcGuess, o];
  } // If not, change the ts by the difference in the offset


  utcGuess -= (o2 - o) * 60 * 1000; // If that gives us the local time we want, we're done

  var o3 = tz.offset(utcGuess);

  if (o2 === o3) {
    return [utcGuess, o2];
  } // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time


  return [localTS - Math.min(o2, o3) * 60 * 1000, Math.max(o2, o3)];
} // convert an epoch timestamp into a calendar object with the given offset


function tsToObj(ts, offset) {
  ts += offset * 60 * 1000;
  var d = new Date(ts);
  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
    second: d.getUTCSeconds(),
    millisecond: d.getUTCMilliseconds()
  };
} // convert a calendar object to a epoch timestamp


function objToTS(obj, offset, zone) {
  return fixOffset(objToLocalTS(obj), offset, zone);
} // create a new DT instance by adding a duration, adjusting for DSTs


function adjustTime(inst, dur) {
  var _dur;

  var keys = Object.keys(dur.values);

  if (keys.indexOf("milliseconds") === -1) {
    keys.push("milliseconds");
  }

  dur = (_dur = dur).shiftTo.apply(_dur, keys);
  var oPre = inst.o,
      year = inst.c.year + dur.years,
      month = inst.c.month + dur.months + dur.quarters * 3,
      c = Object.assign({}, inst.c, {
    year: year,
    month: month,
    day: Math.min(inst.c.day, daysInMonth(year, month)) + dur.days + dur.weeks * 7
  }),
      millisToAdd = Duration.fromObject({
    hours: dur.hours,
    minutes: dur.minutes,
    seconds: dur.seconds,
    milliseconds: dur.milliseconds
  }).as("milliseconds"),
      localTS = objToLocalTS(c);

  var _fixOffset = fixOffset(localTS, oPre, inst.zone),
      ts = _fixOffset[0],
      o = _fixOffset[1];

  if (millisToAdd !== 0) {
    ts += millisToAdd; // that could have changed the offset by going over a DST, but we want to keep the ts the same

    o = inst.zone.offset(ts);
  }

  return {
    ts: ts,
    o: o
  };
} // helper useful in turning the results of parsing into real dates
// by handling the zone options


function parseDataToDateTime(parsed, parsedZone, opts, format, text) {
  var setZone = opts.setZone,
      zone = opts.zone;

  if (parsed && Object.keys(parsed).length !== 0) {
    var interpretationZone = parsedZone || zone,
        inst = DateTime.fromObject(Object.assign(parsed, opts, {
      zone: interpretationZone,
      // setZone is a valid option in the calling methods, but not in fromObject
      setZone: undefined
    }));
    return setZone ? inst : inst.setZone(zone);
  } else {
    return DateTime.invalid(new Invalid("unparsable", "the input \"" + text + "\" can't be parsed as " + format));
  }
} // if you want to output a technical format (e.g. RFC 2822), this helper
// helps handle the details


function toTechFormat(dt, format, allowZ) {
  if (allowZ === void 0) {
    allowZ = true;
  }

  return dt.isValid ? Formatter.create(Locale.create("en-US"), {
    allowZ: allowZ,
    forceSimple: true
  }).formatDateTimeFromString(dt, format) : null;
} // technical time formats (e.g. the time part of ISO 8601), take some options
// and this commonizes their handling


function toTechTimeFormat(dt, _ref) {
  var _ref$suppressSeconds = _ref.suppressSeconds,
      suppressSeconds = _ref$suppressSeconds === void 0 ? false : _ref$suppressSeconds,
      _ref$suppressMillisec = _ref.suppressMilliseconds,
      suppressMilliseconds = _ref$suppressMillisec === void 0 ? false : _ref$suppressMillisec,
      includeOffset = _ref.includeOffset,
      _ref$includeZone = _ref.includeZone,
      includeZone = _ref$includeZone === void 0 ? false : _ref$includeZone,
      _ref$spaceZone = _ref.spaceZone,
      spaceZone = _ref$spaceZone === void 0 ? false : _ref$spaceZone,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? "extended" : _ref$format;
  var fmt = format === "basic" ? "HHmm" : "HH:mm";

  if (!suppressSeconds || dt.second !== 0 || dt.millisecond !== 0) {
    fmt += format === "basic" ? "ss" : ":ss";

    if (!suppressMilliseconds || dt.millisecond !== 0) {
      fmt += ".SSS";
    }
  }

  if ((includeZone || includeOffset) && spaceZone) {
    fmt += " ";
  }

  if (includeZone) {
    fmt += "z";
  } else if (includeOffset) {
    fmt += format === "basic" ? "ZZZ" : "ZZ";
  }

  return toTechFormat(dt, fmt);
} // defaults for unspecified units in the supported calendars


var defaultUnitValues = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
},
    defaultWeekUnitValues = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
},
    defaultOrdinalUnitValues = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}; // Units in the supported calendars, sorted by bigness

var orderedUnits$1 = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
    orderedWeekUnits = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"],
    orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"]; // standardize case and plurality in units

function normalizeUnit(unit) {
  var normalized = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[unit.toLowerCase()];
  if (!normalized) throw new InvalidUnitError(unit);
  return normalized;
} // this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.


function quickDT(obj, zone) {
  // assume we have the higher-order units
  for (var _iterator = _createForOfIteratorHelperLoose(orderedUnits$1), _step; !(_step = _iterator()).done;) {
    var u = _step.value;

    if (isUndefined(obj[u])) {
      obj[u] = defaultUnitValues[u];
    }
  }

  var invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);

  if (invalid) {
    return DateTime.invalid(invalid);
  }

  var tsNow = Settings.now(),
      offsetProvis = zone.offset(tsNow),
      _objToTS = objToTS(obj, offsetProvis, zone),
      ts = _objToTS[0],
      o = _objToTS[1];

  return new DateTime({
    ts: ts,
    zone: zone,
    o: o
  });
}

function diffRelative(start, end, opts) {
  var round = isUndefined(opts.round) ? true : opts.round,
      format = function format(c, unit) {
    c = roundTo(c, round || opts.calendary ? 0 : 2, true);
    var formatter = end.loc.clone(opts).relFormatter(opts);
    return formatter.format(c, unit);
  },
      differ = function differ(unit) {
    if (opts.calendary) {
      if (!end.hasSame(start, unit)) {
        return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
      } else return 0;
    } else {
      return end.diff(start, unit).get(unit);
    }
  };

  if (opts.unit) {
    return format(differ(opts.unit), opts.unit);
  }

  for (var _iterator2 = _createForOfIteratorHelperLoose(opts.units), _step2; !(_step2 = _iterator2()).done;) {
    var unit = _step2.value;
    var count = differ(unit);

    if (Math.abs(count) >= 1) {
      return format(count, unit);
    }
  }

  return format(0, opts.units[opts.units.length - 1]);
}
/**
 * A DateTime is an immutable data structure representing a specific date and time and accompanying methods. It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
 *
 * A DateTime comprises of:
 * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
 * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
 * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
 *
 * Here is a brief overview of the most commonly used functionality it provides:
 *
 * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link local}, {@link utc}, and (most flexibly) {@link fromObject}. To create one from a standard string format, use {@link fromISO}, {@link fromHTTP}, and {@link fromRFC2822}. To create one from a custom string format, use {@link fromFormat}. To create one from a native JS date, use {@link fromJSDate}.
 * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link toObject}), use the {@link year}, {@link month},
 * {@link day}, {@link hour}, {@link minute}, {@link second}, {@link millisecond} accessors.
 * * **Week calendar**: For ISO week calendar attributes, see the {@link weekYear}, {@link weekNumber}, and {@link weekday} accessors.
 * * **Configuration** See the {@link locale} and {@link numberingSystem} accessors.
 * * **Transformation**: To transform the DateTime into other DateTimes, use {@link set}, {@link reconfigure}, {@link setZone}, {@link setLocale}, {@link plus}, {@link minus}, {@link endOf}, {@link startOf}, {@link toUTC}, and {@link toLocal}.
 * * **Output**: To convert the DateTime to other representations, use the {@link toRelative}, {@link toRelativeCalendar}, {@link toJSON}, {@link toISO}, {@link toHTTP}, {@link toObject}, {@link toRFC2822}, {@link toString}, {@link toLocaleString}, {@link toFormat}, {@link toMillis} and {@link toJSDate}.
 *
 * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
 */


var DateTime = /*#__PURE__*/function () {
  /**
   * @access private
   */
  function DateTime(config) {
    var zone = config.zone || Settings.defaultZone;
    var invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
    /**
     * @access private
     */

    this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
    var c = null,
        o = null;

    if (!invalid) {
      var unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);

      if (unchanged) {
        var _ref2 = [config.old.c, config.old.o];
        c = _ref2[0];
        o = _ref2[1];
      } else {
        var ot = zone.offset(this.ts);
        c = tsToObj(this.ts, ot);
        invalid = Number.isNaN(c.year) ? new Invalid("invalid input") : null;
        c = invalid ? null : c;
        o = invalid ? null : ot;
      }
    }
    /**
     * @access private
     */


    this._zone = zone;
    /**
     * @access private
     */

    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */

    this.invalid = invalid;
    /**
     * @access private
     */

    this.weekData = null;
    /**
     * @access private
     */

    this.c = c;
    /**
     * @access private
     */

    this.o = o;
    /**
     * @access private
     */

    this.isLuxonDateTime = true;
  } // CONSTRUCT

  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                            //~> now
   * @example DateTime.local(2017)                        //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                     //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12)                 //~> 2017-03-12T00:00:00
   * @example DateTime.local(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */


  DateTime.local = function local(year, month, day, hour, minute, second, millisecond) {
    if (isUndefined(year)) {
      return new DateTime({
        ts: Settings.now()
      });
    } else {
      return quickDT({
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond
      }, Settings.defaultZone);
    }
  }
  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.utc()                            //~> now
   * @example DateTime.utc(2017)                        //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                     //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                 //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.765Z
   * @return {DateTime}
   */
  ;

  DateTime.utc = function utc(year, month, day, hour, minute, second, millisecond) {
    if (isUndefined(year)) {
      return new DateTime({
        ts: Settings.now(),
        zone: FixedOffsetZone.utcInstance
      });
    } else {
      return quickDT({
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond
      }, FixedOffsetZone.utcInstance);
    }
  }
  /**
   * Create a DateTime from a Javascript Date object. Uses the default zone.
   * @param {Date} date - a Javascript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  ;

  DateTime.fromJSDate = function fromJSDate(date, options) {
    if (options === void 0) {
      options = {};
    }

    var ts = isDate(date) ? date.valueOf() : NaN;

    if (Number.isNaN(ts)) {
      return DateTime.invalid("invalid input");
    }

    var zoneToUse = normalizeZone(options.zone, Settings.defaultZone);

    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    return new DateTime({
      ts: ts,
      zone: zoneToUse,
      loc: Locale.fromObject(options)
    });
  }
  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  ;

  DateTime.fromMillis = function fromMillis(milliseconds, options) {
    if (options === void 0) {
      options = {};
    }

    if (!isNumber(milliseconds)) {
      throw new InvalidArgumentError("fromMillis requires a numerical input, but received a " + typeof milliseconds + " with value " + milliseconds);
    } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
      // this isn't perfect because because we can still end up out of range because of additional shifting, but it's a start
      return DateTime.invalid("Timestamp out of range");
    } else {
      return new DateTime({
        ts: milliseconds,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  ;

  DateTime.fromSeconds = function fromSeconds(seconds, options) {
    if (options === void 0) {
      options = {};
    }

    if (!isNumber(seconds)) {
      throw new InvalidArgumentError("fromSeconds requires a numerical input");
    } else {
      return new DateTime({
        ts: seconds * 1000,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  /**
   * Create a DateTime from a Javascript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {string|Zone} [obj.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [obj.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} obj.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} obj.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @return {DateTime}
   */
  ;

  DateTime.fromObject = function fromObject(obj) {
    var zoneToUse = normalizeZone(obj.zone, Settings.defaultZone);

    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    var tsNow = Settings.now(),
        offsetProvis = zoneToUse.offset(tsNow),
        normalized = normalizeObject(obj, normalizeUnit, ["zone", "locale", "outputCalendar", "numberingSystem"]),
        containsOrdinal = !isUndefined(normalized.ordinal),
        containsGregorYear = !isUndefined(normalized.year),
        containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day),
        containsGregor = containsGregorYear || containsGregorMD,
        definiteWeekDef = normalized.weekYear || normalized.weekNumber,
        loc = Locale.fromObject(obj); // cases:
    // just a weekday -> this week's instance of that weekday, no worries
    // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
    // (gregorian month or day) + ordinal -> error
    // otherwise just use weeks or ordinals or gregorian, depending on what's specified

    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    }

    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }

    var useWeekData = definiteWeekDef || normalized.weekday && !containsGregor; // configure ourselves to deal with gregorian dates or week stuff

    var units,
        defaultValues,
        objNow = tsToObj(tsNow, offsetProvis);

    if (useWeekData) {
      units = orderedWeekUnits;
      defaultValues = defaultWeekUnitValues;
      objNow = gregorianToWeek(objNow);
    } else if (containsOrdinal) {
      units = orderedOrdinalUnits;
      defaultValues = defaultOrdinalUnitValues;
      objNow = gregorianToOrdinal(objNow);
    } else {
      units = orderedUnits$1;
      defaultValues = defaultUnitValues;
    } // set default values for missing stuff


    var foundFirst = false;

    for (var _iterator3 = _createForOfIteratorHelperLoose(units), _step3; !(_step3 = _iterator3()).done;) {
      var u = _step3.value;
      var v = normalized[u];

      if (!isUndefined(v)) {
        foundFirst = true;
      } else if (foundFirst) {
        normalized[u] = defaultValues[u];
      } else {
        normalized[u] = objNow[u];
      }
    } // make sure the values we have are in range


    var higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized),
        invalid = higherOrderInvalid || hasInvalidTimeData(normalized);

    if (invalid) {
      return DateTime.invalid(invalid);
    } // compute the actual time


    var gregorian = useWeekData ? weekToGregorian(normalized) : containsOrdinal ? ordinalToGregorian(normalized) : normalized,
        _objToTS2 = objToTS(gregorian, offsetProvis, zoneToUse),
        tsFinal = _objToTS2[0],
        offsetFinal = _objToTS2[1],
        inst = new DateTime({
      ts: tsFinal,
      zone: zoneToUse,
      o: offsetFinal,
      loc: loc
    }); // gregorian data + weekday serves only to validate


    if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
      return DateTime.invalid("mismatched weekday", "you can't specify both a weekday of " + normalized.weekday + " and a date of " + inst.toISO());
    }

    return inst;
  }
  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  ;

  DateTime.fromISO = function fromISO(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseISODate = parseISODate(text),
        vals = _parseISODate[0],
        parsedZone = _parseISODate[1];

    return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
  }
  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  ;

  DateTime.fromRFC2822 = function fromRFC2822(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseRFC2822Date = parseRFC2822Date(text),
        vals = _parseRFC2822Date[0],
        parsedZone = _parseRFC2822Date[1];

    return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
  }
  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  ;

  DateTime.fromHTTP = function fromHTTP(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseHTTPDate = parseHTTPDate(text),
        vals = _parseHTTPDate[0],
        parsedZone = _parseHTTPDate[1];

    return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
  }
  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @see https://moment.github.io/luxon/docs/manual/parsing.html#table-of-tokens
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  ;

  DateTime.fromFormat = function fromFormat(text, fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (isUndefined(text) || isUndefined(fmt)) {
      throw new InvalidArgumentError("fromFormat requires an input string and a format");
    }

    var _opts = opts,
        _opts$locale = _opts.locale,
        locale = _opts$locale === void 0 ? null : _opts$locale,
        _opts$numberingSystem = _opts.numberingSystem,
        numberingSystem = _opts$numberingSystem === void 0 ? null : _opts$numberingSystem,
        localeToUse = Locale.fromOpts({
      locale: locale,
      numberingSystem: numberingSystem,
      defaultToEN: true
    }),
        _parseFromTokens = parseFromTokens(localeToUse, text, fmt),
        vals = _parseFromTokens[0],
        parsedZone = _parseFromTokens[1],
        invalid = _parseFromTokens[2];

    if (invalid) {
      return DateTime.invalid(invalid);
    } else {
      return parseDataToDateTime(vals, parsedZone, opts, "format " + fmt, text);
    }
  }
  /**
   * @deprecated use fromFormat instead
   */
  ;

  DateTime.fromString = function fromString(text, fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return DateTime.fromFormat(text, fmt, opts);
  }
  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  ;

  DateTime.fromSQL = function fromSQL(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseSQL = parseSQL(text),
        vals = _parseSQL[0],
        parsedZone = _parseSQL[1];

    return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  ;

  DateTime.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidDateTimeError(invalid);
    } else {
      return new DateTime({
        invalid: invalid
      });
    }
  }
  /**
   * Check if an object is a DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  ;

  DateTime.isDateTime = function isDateTime(o) {
    return o && o.isLuxonDateTime || false;
  } // INFO

  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  ;

  var _proto = DateTime.prototype;

  _proto.get = function get(unit) {
    return this[unit];
  }
  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  ;

  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  _proto.resolvedLocaleOpts = function resolvedLocaleOpts(opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _Formatter$create$res = Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this),
        locale = _Formatter$create$res.locale,
        numberingSystem = _Formatter$create$res.numberingSystem,
        calendar = _Formatter$create$res.calendar;

    return {
      locale: locale,
      numberingSystem: numberingSystem,
      outputCalendar: calendar
    };
  } // TRANSFORM

  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  ;

  _proto.toUTC = function toUTC(offset, opts) {
    if (offset === void 0) {
      offset = 0;
    }

    if (opts === void 0) {
      opts = {};
    }

    return this.setZone(FixedOffsetZone.instance(offset), opts);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  ;

  _proto.toLocal = function toLocal() {
    return this.setZone(Settings.defaultZone);
  }
  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link plus}. You may wish to use {@link toLocal} and {@link toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  ;

  _proto.setZone = function setZone(zone, _temp) {
    var _ref3 = _temp === void 0 ? {} : _temp,
        _ref3$keepLocalTime = _ref3.keepLocalTime,
        keepLocalTime = _ref3$keepLocalTime === void 0 ? false : _ref3$keepLocalTime,
        _ref3$keepCalendarTim = _ref3.keepCalendarTime,
        keepCalendarTime = _ref3$keepCalendarTim === void 0 ? false : _ref3$keepCalendarTim;

    zone = normalizeZone(zone, Settings.defaultZone);

    if (zone.equals(this.zone)) {
      return this;
    } else if (!zone.isValid) {
      return DateTime.invalid(unsupportedZone(zone));
    } else {
      var newTS = this.ts;

      if (keepLocalTime || keepCalendarTime) {
        var offsetGuess = zone.offset(this.ts);
        var asObj = this.toObject();

        var _objToTS3 = objToTS(asObj, offsetGuess, zone);

        newTS = _objToTS3[0];
      }

      return clone$1(this, {
        ts: newTS,
        zone: zone
      });
    }
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  ;

  _proto.reconfigure = function reconfigure(_temp2) {
    var _ref4 = _temp2 === void 0 ? {} : _temp2,
        locale = _ref4.locale,
        numberingSystem = _ref4.numberingSystem,
        outputCalendar = _ref4.outputCalendar;

    var loc = this.loc.clone({
      locale: locale,
      numberingSystem: numberingSystem,
      outputCalendar: outputCalendar
    });
    return clone$1(this, {
      loc: loc
    });
  }
  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  ;

  _proto.setLocale = function setLocale(locale) {
    return this.reconfigure({
      locale: locale
    });
  }
  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link reconfigure} and {@link setZone}.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  ;

  _proto.set = function set(values) {
    if (!this.isValid) return this;
    var normalized = normalizeObject(values, normalizeUnit, []),
        settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday);
    var mixed;

    if (settingWeekStuff) {
      mixed = weekToGregorian(Object.assign(gregorianToWeek(this.c), normalized));
    } else if (!isUndefined(normalized.ordinal)) {
      mixed = ordinalToGregorian(Object.assign(gregorianToOrdinal(this.c), normalized));
    } else {
      mixed = Object.assign(this.toObject(), normalized); // if we didn't set the day but we ended up on an overflow date,
      // use the last day of the right month

      if (isUndefined(normalized.day)) {
        mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
      }
    }

    var _objToTS4 = objToTS(mixed, this.o, this.zone),
        ts = _objToTS4[0],
        o = _objToTS4[1];

    return clone$1(this, {
      ts: ts,
      o: o
    });
  }
  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.local().plus(123) //~> in 123 milliseconds
   * @example DateTime.local().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.local().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.local().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.local().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.local().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  ;

  _proto.plus = function plus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration);
    return clone$1(this, adjustTime(this, dur));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
  */
  ;

  _proto.minus = function minus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration).negate();
    return clone$1(this, adjustTime(this, dur));
  }
  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  ;

  _proto.startOf = function startOf(unit) {
    if (!this.isValid) return this;
    var o = {},
        normalizedUnit = Duration.normalizeUnit(unit);

    switch (normalizedUnit) {
      case "years":
        o.month = 1;
      // falls through

      case "quarters":
      case "months":
        o.day = 1;
      // falls through

      case "weeks":
      case "days":
        o.hour = 0;
      // falls through

      case "hours":
        o.minute = 0;
      // falls through

      case "minutes":
        o.second = 0;
      // falls through

      case "seconds":
        o.millisecond = 0;
        break;
      // no default, invalid units throw in normalizeUnit()
    }

    if (normalizedUnit === "weeks") {
      o.weekday = 1;
    }

    if (normalizedUnit === "quarters") {
      var q = Math.ceil(this.month / 3);
      o.month = (q - 1) * 3 + 1;
    }

    return this.set(o);
  }
  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'month', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  ;

  _proto.endOf = function endOf(unit) {
    var _this$plus;

    return this.isValid ? this.plus((_this$plus = {}, _this$plus[unit] = 1, _this$plus)).startOf(unit).minus(1) : this;
  } // OUTPUT

  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @see https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options
   * @example DateTime.local().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.local().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.local().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.local().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  ;

  _proto.toFormat = function toFormat(fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return this.isValid ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID$2;
  }
  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param opts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @example DateTime.local().toLocaleString(); //=> 4/20/2017
   * @example DateTime.local().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.local().toLocaleString({ locale: 'en-gb' }); //=> '20/04/2017'
   * @example DateTime.local().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.local().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.local().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.local().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.local().toLocaleString({ hour: '2-digit', minute: '2-digit', hour12: false }); //=> '11:32'
   * @return {string}
   */
  ;

  _proto.toLocaleString = function toLocaleString(opts) {
    if (opts === void 0) {
      opts = DATE_SHORT;
    }

    return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTime(this) : INVALID$2;
  }
  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.local().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */
  ;

  _proto.toLocaleParts = function toLocaleParts(opts) {
    if (opts === void 0) {
      opts = {};
    }

    return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.local().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.local().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.local().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */
  ;

  _proto.toISO = function toISO(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) {
      return null;
    }

    return this.toISODate(opts) + "T" + this.toISOTime(opts);
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */
  ;

  _proto.toISODate = function toISODate(_temp3) {
    var _ref5 = _temp3 === void 0 ? {} : _temp3,
        _ref5$format = _ref5.format,
        format = _ref5$format === void 0 ? "extended" : _ref5$format;

    var fmt = format === "basic" ? "yyyyMMdd" : "yyyy-MM-dd";

    if (this.year > 9999) {
      fmt = "+" + fmt;
    }

    return toTechFormat(this, fmt);
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  ;

  _proto.toISOWeekDate = function toISOWeekDate() {
    return toTechFormat(this, "kkkk-'W'WW-c");
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @return {string}
   */
  ;

  _proto.toISOTime = function toISOTime(_temp4) {
    var _ref6 = _temp4 === void 0 ? {} : _temp4,
        _ref6$suppressMillise = _ref6.suppressMilliseconds,
        suppressMilliseconds = _ref6$suppressMillise === void 0 ? false : _ref6$suppressMillise,
        _ref6$suppressSeconds = _ref6.suppressSeconds,
        suppressSeconds = _ref6$suppressSeconds === void 0 ? false : _ref6$suppressSeconds,
        _ref6$includeOffset = _ref6.includeOffset,
        includeOffset = _ref6$includeOffset === void 0 ? true : _ref6$includeOffset,
        _ref6$format = _ref6.format,
        format = _ref6$format === void 0 ? "extended" : _ref6$format;

    return toTechTimeFormat(this, {
      suppressSeconds: suppressSeconds,
      suppressMilliseconds: suppressMilliseconds,
      includeOffset: includeOffset,
      format: format
    });
  }
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime, always in UTC
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  ;

  _proto.toRFC2822 = function toRFC2822() {
    return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  ;

  _proto.toHTTP = function toHTTP() {
    return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */
  ;

  _proto.toSQLDate = function toSQLDate() {
    return toTechFormat(this, "yyyy-MM-dd");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.local().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.local().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.local().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  ;

  _proto.toSQLTime = function toSQLTime(_temp5) {
    var _ref7 = _temp5 === void 0 ? {} : _temp5,
        _ref7$includeOffset = _ref7.includeOffset,
        includeOffset = _ref7$includeOffset === void 0 ? true : _ref7$includeOffset,
        _ref7$includeZone = _ref7.includeZone,
        includeZone = _ref7$includeZone === void 0 ? false : _ref7$includeZone;

    return toTechTimeFormat(this, {
      includeOffset: includeOffset,
      includeZone: includeZone,
      spaceZone: true
    });
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  ;

  _proto.toSQL = function toSQL(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) {
      return null;
    }

    return this.toSQLDate() + " " + this.toSQLTime(opts);
  }
  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  ;

  _proto.toString = function toString() {
    return this.isValid ? this.toISO() : INVALID$2;
  }
  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link toMillis}
   * @return {number}
   */
  ;

  _proto.valueOf = function valueOf() {
    return this.toMillis();
  }
  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  ;

  _proto.toMillis = function toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */
  ;

  _proto.toSeconds = function toSeconds() {
    return this.isValid ? this.ts / 1000 : NaN;
  }
  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  ;

  _proto.toJSON = function toJSON() {
    return this.toISO();
  }
  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  ;

  _proto.toBSON = function toBSON() {
    return this.toJSDate();
  }
  /**
   * Returns a Javascript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.local().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  ;

  _proto.toObject = function toObject(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) return {};
    var base = Object.assign({}, this.c);

    if (opts.includeConfig) {
      base.outputCalendar = this.outputCalendar;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }

    return base;
  }
  /**
   * Returns a Javascript Date equivalent to this DateTime.
   * @return {Date}
   */
  ;

  _proto.toJSDate = function toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  } // COMPARE

  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  ;

  _proto.diff = function diff(otherDateTime, unit, opts) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid || !otherDateTime.isValid) {
      return Duration.invalid(this.invalid || otherDateTime.invalid, "created by diffing an invalid DateTime");
    }

    var durOpts = Object.assign({
      locale: this.locale,
      numberingSystem: this.numberingSystem
    }, opts);

    var units = maybeArray(unit).map(Duration.normalizeUnit),
        otherIsLater = otherDateTime.valueOf() > this.valueOf(),
        earlier = otherIsLater ? this : otherDateTime,
        later = otherIsLater ? otherDateTime : this,
        diffed = _diff(earlier, later, units, durOpts);

    return otherIsLater ? diffed.negate() : diffed;
  }
  /**
   * Return the difference between this DateTime and right now.
   * See {@link diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  ;

  _proto.diffNow = function diffNow(unit, opts) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (opts === void 0) {
      opts = {};
    }

    return this.diff(DateTime.local(), unit, opts);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */
  ;

  _proto.until = function until(otherDateTime) {
    return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
  }
  /**
   * Return whether this DateTime is in the same unit of time as another DateTime
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @example DateTime.local().hasSame(otherDT, 'day'); //~> true if both the same calendar day
   * @return {boolean}
   */
  ;

  _proto.hasSame = function hasSame(otherDateTime, unit) {
    if (!this.isValid) return false;

    if (unit === "millisecond") {
      return this.valueOf() === otherDateTime.valueOf();
    } else {
      var inputMs = otherDateTime.valueOf();
      return this.startOf(unit) <= inputMs && inputMs <= this.endOf(unit);
    }
  }
  /**
   * Equality check
   * Two DateTimes are equal iff they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  ;

  _proto.equals = function equals(other) {
    return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
  }
  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.local()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {boolean} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.local().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.local().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.local().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.local().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.local().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.local().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  ;

  _proto.toRelative = function toRelative(options) {
    if (options === void 0) {
      options = {};
    }

    if (!this.isValid) return null;
    var base = options.base || DateTime.fromObject({
      zone: this.zone
    }),
        padding = options.padding ? this < base ? -options.padding : options.padding : 0;
    return diffRelative(base, this.plus(padding), Object.assign(options, {
      numeric: "always",
      units: ["years", "months", "days", "hours", "minutes", "seconds"]
    }));
  }
  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.local()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.local().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.local().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.local().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.local().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  ;

  _proto.toRelativeCalendar = function toRelativeCalendar(options) {
    if (options === void 0) {
      options = {};
    }

    if (!this.isValid) return null;
    return diffRelative(options.base || DateTime.fromObject({
      zone: this.zone
    }), this, Object.assign(options, {
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: true
    }));
  }
  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  ;

  DateTime.min = function min() {
    for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
      dateTimes[_key] = arguments[_key];
    }

    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("min requires all arguments be DateTimes");
    }

    return bestBy(dateTimes, function (i) {
      return i.valueOf();
    }, Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  ;

  DateTime.max = function max() {
    for (var _len2 = arguments.length, dateTimes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      dateTimes[_key2] = arguments[_key2];
    }

    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("max requires all arguments be DateTimes");
    }

    return bestBy(dateTimes, function (i) {
      return i.valueOf();
    }, Math.max);
  } // MISC

  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  ;

  DateTime.fromFormatExplain = function fromFormatExplain(text, fmt, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        _options$locale = _options.locale,
        locale = _options$locale === void 0 ? null : _options$locale,
        _options$numberingSys = _options.numberingSystem,
        numberingSystem = _options$numberingSys === void 0 ? null : _options$numberingSys,
        localeToUse = Locale.fromOpts({
      locale: locale,
      numberingSystem: numberingSystem,
      defaultToEN: true
    });
    return explainFromTokens(localeToUse, text, fmt);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  ;

  DateTime.fromStringExplain = function fromStringExplain(text, fmt, options) {
    if (options === void 0) {
      options = {};
    }

    return DateTime.fromFormatExplain(text, fmt, options);
  } // FORMAT PRESETS

  /**
   * {@link toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  ;

  _createClass(DateTime, [{
    key: "isValid",
    get: function get() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
     * @type {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
    /**
     * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "locale",
    get: function get() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "numberingSystem",
    get: function get() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
    /**
     * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "outputCalendar",
    get: function get() {
      return this.isValid ? this.loc.outputCalendar : null;
    }
    /**
     * Get the time zone associated with this DateTime.
     * @type {Zone}
     */

  }, {
    key: "zone",
    get: function get() {
      return this._zone;
    }
    /**
     * Get the name of the time zone.
     * @type {string}
     */

  }, {
    key: "zoneName",
    get: function get() {
      return this.isValid ? this.zone.name : null;
    }
    /**
     * Get the year
     * @example DateTime.local(2017, 5, 25).year //=> 2017
     * @type {number}
     */

  }, {
    key: "year",
    get: function get() {
      return this.isValid ? this.c.year : NaN;
    }
    /**
     * Get the quarter
     * @example DateTime.local(2017, 5, 25).quarter //=> 2
     * @type {number}
     */

  }, {
    key: "quarter",
    get: function get() {
      return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
    }
    /**
     * Get the month (1-12).
     * @example DateTime.local(2017, 5, 25).month //=> 5
     * @type {number}
     */

  }, {
    key: "month",
    get: function get() {
      return this.isValid ? this.c.month : NaN;
    }
    /**
     * Get the day of the month (1-30ish).
     * @example DateTime.local(2017, 5, 25).day //=> 25
     * @type {number}
     */

  }, {
    key: "day",
    get: function get() {
      return this.isValid ? this.c.day : NaN;
    }
    /**
     * Get the hour of the day (0-23).
     * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
     * @type {number}
     */

  }, {
    key: "hour",
    get: function get() {
      return this.isValid ? this.c.hour : NaN;
    }
    /**
     * Get the minute of the hour (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
     * @type {number}
     */

  }, {
    key: "minute",
    get: function get() {
      return this.isValid ? this.c.minute : NaN;
    }
    /**
     * Get the second of the minute (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
     * @type {number}
     */

  }, {
    key: "second",
    get: function get() {
      return this.isValid ? this.c.second : NaN;
    }
    /**
     * Get the millisecond of the second (0-999).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
     * @type {number}
     */

  }, {
    key: "millisecond",
    get: function get() {
      return this.isValid ? this.c.millisecond : NaN;
    }
    /**
     * Get the week year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekYear //=> 2015
     * @type {number}
     */

  }, {
    key: "weekYear",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
    }
    /**
     * Get the week number of the week year (1-52ish).
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
     * @type {number}
     */

  }, {
    key: "weekNumber",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
    }
    /**
     * Get the day of the week.
     * 1 is Monday and 7 is Sunday
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekday //=> 4
     * @type {number}
     */

  }, {
    key: "weekday",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
    }
    /**
     * Get the ordinal (meaning the day of the year)
     * @example DateTime.local(2017, 5, 25).ordinal //=> 145
     * @type {number|DateTime}
     */

  }, {
    key: "ordinal",
    get: function get() {
      return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
    }
    /**
     * Get the human readable short month name, such as 'Oct'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
     * @type {string}
     */

  }, {
    key: "monthShort",
    get: function get() {
      return this.isValid ? Info.months("short", {
        locale: this.locale
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable long month name, such as 'October'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthLong //=> October
     * @type {string}
     */

  }, {
    key: "monthLong",
    get: function get() {
      return this.isValid ? Info.months("long", {
        locale: this.locale
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable short weekday, such as 'Mon'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
     * @type {string}
     */

  }, {
    key: "weekdayShort",
    get: function get() {
      return this.isValid ? Info.weekdays("short", {
        locale: this.locale
      })[this.weekday - 1] : null;
    }
    /**
     * Get the human readable long weekday, such as 'Monday'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
     * @type {string}
     */

  }, {
    key: "weekdayLong",
    get: function get() {
      return this.isValid ? Info.weekdays("long", {
        locale: this.locale
      })[this.weekday - 1] : null;
    }
    /**
     * Get the UTC offset of this DateTime in minutes
     * @example DateTime.local().offset //=> -240
     * @example DateTime.utc().offset //=> 0
     * @type {number}
     */

  }, {
    key: "offset",
    get: function get() {
      return this.isValid ? +this.o : NaN;
    }
    /**
     * Get the short human name for the zone's current offset, for example "EST" or "EDT".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */

  }, {
    key: "offsetNameShort",
    get: function get() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: "short",
          locale: this.locale
        });
      } else {
        return null;
      }
    }
    /**
     * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */

  }, {
    key: "offsetNameLong",
    get: function get() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: "long",
          locale: this.locale
        });
      } else {
        return null;
      }
    }
    /**
     * Get whether this zone's offset ever changes, as in a DST.
     * @type {boolean}
     */

  }, {
    key: "isOffsetFixed",
    get: function get() {
      return this.isValid ? this.zone.universal : null;
    }
    /**
     * Get whether the DateTime is in a DST.
     * @type {boolean}
     */

  }, {
    key: "isInDST",
    get: function get() {
      if (this.isOffsetFixed) {
        return false;
      } else {
        return this.offset > this.set({
          month: 1
        }).offset || this.offset > this.set({
          month: 5
        }).offset;
      }
    }
    /**
     * Returns true if this DateTime is in a leap year, false otherwise
     * @example DateTime.local(2016).isInLeapYear //=> true
     * @example DateTime.local(2013).isInLeapYear //=> false
     * @type {boolean}
     */

  }, {
    key: "isInLeapYear",
    get: function get() {
      return isLeapYear(this.year);
    }
    /**
     * Returns the number of days in this DateTime's month
     * @example DateTime.local(2016, 2).daysInMonth //=> 29
     * @example DateTime.local(2016, 3).daysInMonth //=> 31
     * @type {number}
     */

  }, {
    key: "daysInMonth",
    get: function get() {
      return daysInMonth(this.year, this.month);
    }
    /**
     * Returns the number of days in this DateTime's year
     * @example DateTime.local(2016).daysInYear //=> 366
     * @example DateTime.local(2013).daysInYear //=> 365
     * @type {number}
     */

  }, {
    key: "daysInYear",
    get: function get() {
      return this.isValid ? daysInYear(this.year) : NaN;
    }
    /**
     * Returns the number of weeks in this DateTime's year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2004).weeksInWeekYear //=> 53
     * @example DateTime.local(2013).weeksInWeekYear //=> 52
     * @type {number}
     */

  }, {
    key: "weeksInWeekYear",
    get: function get() {
      return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
    }
  }], [{
    key: "DATE_SHORT",
    get: function get() {
      return DATE_SHORT;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_MED",
    get: function get() {
      return DATE_MED;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_FULL",
    get: function get() {
      return DATE_FULL;
    }
    /**
     * {@link toLocaleString} format like 'Tuesday, October 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_HUGE",
    get: function get() {
      return DATE_HUGE;
    }
    /**
     * {@link toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_SIMPLE",
    get: function get() {
      return TIME_SIMPLE;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_SECONDS",
    get: function get() {
      return TIME_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_SHORT_OFFSET",
    get: function get() {
      return TIME_WITH_SHORT_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_LONG_OFFSET",
    get: function get() {
      return TIME_WITH_LONG_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '09:30', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_SIMPLE",
    get: function get() {
      return TIME_24_SIMPLE;
    }
    /**
     * {@link toLocaleString} format like '09:30:23', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_SECONDS",
    get: function get() {
      return TIME_24_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 EDT', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_SHORT_OFFSET",
    get: function get() {
      return TIME_24_WITH_SHORT_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_LONG_OFFSET",
    get: function get() {
      return TIME_24_WITH_LONG_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_SHORT",
    get: function get() {
      return DATETIME_SHORT;
    }
    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_SHORT_WITH_SECONDS",
    get: function get() {
      return DATETIME_SHORT_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED",
    get: function get() {
      return DATETIME_MED;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED_WITH_SECONDS",
    get: function get() {
      return DATETIME_MED_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED_WITH_WEEKDAY",
    get: function get() {
      return DATETIME_MED_WITH_WEEKDAY;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_FULL",
    get: function get() {
      return DATETIME_FULL;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_FULL_WITH_SECONDS",
    get: function get() {
      return DATETIME_FULL_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_HUGE",
    get: function get() {
      return DATETIME_HUGE;
    }
    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_HUGE_WITH_SECONDS",
    get: function get() {
      return DATETIME_HUGE_WITH_SECONDS;
    }
  }]);

  return DateTime;
}();
function friendlyDateTime(dateTimeish) {
  if (DateTime.isDateTime(dateTimeish)) {
    return dateTimeish;
  } else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
    return DateTime.fromJSDate(dateTimeish);
  } else if (dateTimeish && typeof dateTimeish === "object") {
    return DateTime.fromObject(dateTimeish);
  } else {
    throw new InvalidArgumentError("Unknown datetime argument: " + dateTimeish + ", of type " + typeof dateTimeish);
  }
}

exports.DateTime = DateTime;
exports.Duration = Duration;
exports.FixedOffsetZone = FixedOffsetZone;
exports.IANAZone = IANAZone;
exports.Info = Info;
exports.Interval = Interval;
exports.InvalidZone = InvalidZone;
exports.LocalZone = LocalZone;
exports.Settings = Settings;
exports.Zone = Zone;
//# sourceMappingURL=luxon.js.map


/***/ }),

/***/ "./src/utils/commonUtils.js":
/*!**********************************!*\
  !*** ./src/utils/commonUtils.js ***!
  \**********************************/
/*! exports provided: capitalize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return capitalize; });
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_0__);

var capitalize = function capitalize(value) {
  var word = value.split('');
  word[0] = word[0].toUpperCase();
  return word.join('');
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbHV4b24vYnVpbGQvY2pzLWJyb3dzZXIvbHV4b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvbW1vblV0aWxzLmpzIl0sIm5hbWVzIjpbImNhcGl0YWxpemUiLCJ2YWx1ZSIsIndvcmQiLCJzcGxpdCIsInRvVXBwZXJDYXNlIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDhDQUE4QyxjQUFjOztBQUU1RDtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdDQUF3QyxTQUFTOztBQUVqRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNCQUFzQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0JBQXNCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNCQUFzQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzQkFBc0I7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0JBQXNCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLElBQUk7QUFDUDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHdHQUF3Ryx1RUFBdUU7O0FBRS9LO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHlDQUF5Qzs7QUFFekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLE1BQU0saUJBQWlCLE1BQU0sZUFBZSxNQUFNOztBQUUvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNFQUFzRSw2QkFBNkI7QUFDbkc7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsZ0JBQWdCO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNERBQTREO0FBQzVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0RBQXNEO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0RBQXNEO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0RBQXNEO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCOztBQUUvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9B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QTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLGdEQUFnRCxvRkFBb0Y7QUFDcEk7QUFDQTtBQUNBLEtBQUssNEVBQTRFO0FBQ2pGLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0VBQW9FOzs7QUFHcEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCx5RUFBeUU7O0FBRXpFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0M7QUFDdEM7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDO0FBQ3RDO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRCx5REFBeUQsSUFBSSwwREFBMEQsSUFBSTs7QUFFM0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRCw0R0FBNEcsRUFBRTtBQUM5RztBQUNBLGtJQUFrSSxFQUFFOztBQUVwSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsa0JBQWtCOztBQUVuQjtBQUNBLG1EQUFtRDs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtEQUFrRCwrQkFBK0I7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSwyVkFBMlYsMkJBQTJCLG9CQUFvQjtBQUMxWTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsMEJBQTBCLEdBQUcsMEJBQTBCLE1BQU0sdUJBQXVCO0FBQ2pJLDhCQUE4QixxQkFBcUIsR0FBRyxzQkFBc0IsR0FBRyxxQkFBcUIsR0FBRyxvQkFBb0IsR0FBRyxxQkFBcUIsR0FBRyx1QkFBdUIsR0FBRyx1QkFBdUIsR0FBRyw0QkFBNEI7QUFDdE8sNkJBQTZCLHNCQUFzQixNQUFNLCtCQUErQjtBQUN4RixxRUFBcUUsb0JBQW9CLEdBQUcscUJBQXFCLEdBQUcseUJBQXlCLEdBQUcsbUJBQW1CLEdBQUcsMkJBQTJCLEdBQUcsdUJBQXVCLE9BQU8sc0JBQXNCO0FBQ3hQLHlFQUF5RSxrQkFBa0IsR0FBRyxxQkFBcUIsR0FBRyx3QkFBd0IsT0FBTztBQUNySjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsY0FBYztBQUNkOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1SUFBdUk7QUFDdkk7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQSxzRUFBc0U7QUFDdEUseURBQXlEO0FBQ3pELHlEQUF5RDtBQUN6RCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRix1QkFBdUI7QUFDN0csYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLFFBQVE7QUFDckIsbUNBQW1DLGdDQUFnQztBQUNuRSxtQ0FBbUMsZ0NBQWdDO0FBQ25FLG1DQUFtQyxnQ0FBZ0M7QUFDbkUsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDO0FBQ2hDLGtDQUFrQztBQUNsQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLG1DQUFtQyxnQ0FBZ0MsbUJBQW1CO0FBQ3RGLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsd0JBQXdCO0FBQzNELG1DQUFtQyx5QkFBeUI7QUFDNUQsbUNBQW1DLFlBQVk7QUFDL0MsbUNBQW1DLGFBQWE7QUFDaEQsbUNBQW1DLGtCQUFrQjtBQUNyRCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsdUJBQXVCO0FBQ3BDLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhFQUE4RSw2QkFBNkI7QUFDM0c7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxhQUFhLHVCQUF1QjtBQUNwQyxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QixtQ0FBbUMsd0JBQXdCLDRCQUE0QjtBQUN2RixtQ0FBbUMsd0JBQXdCLG9EQUFvRDtBQUMvRyxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNkRBQTZELDBCQUEwQjtBQUN2RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsbUNBQW1DLGtCQUFrQjtBQUNyRCxtQ0FBbUMsa0JBQWtCO0FBQ3JELG1DQUFtQyxrQkFBa0I7QUFDckQsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQix1QkFBdUIsY0FBYztBQUNyQyx1QkFBdUIsd0JBQXdCO0FBQy9DLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGtCQUFrQjtBQUNqRCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsbUNBQW1DLFNBQVM7QUFDNUMsbUNBQW1DLFNBQVM7QUFDNUMsbUNBQW1DLFVBQVU7QUFDN0MsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyx1QkFBdUIsK0JBQStCO0FBQ3pGLG1DQUFtQywwQkFBMEIsK0JBQStCO0FBQzVGLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsd0JBQXdCLHNEQUFzRDtBQUNqSCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBLHdFQUF3RSxhQUFhO0FBQ3JGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsa0JBQWtCO0FBQ2xCLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7O0FBRUEsZ0ZBQWdGLCtCQUErQjtBQUMvRzs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQztBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsd0JBQXdCLDRCQUE0QjtBQUN2RixjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsK0RBQStELDRCQUE0QjtBQUMzRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdGQUFnRiwrQkFBK0I7QUFDL0c7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlGQUF5RixlQUFlO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxvQkFBb0IsR0FBRyxZQUFZLEdBQUcsYUFBYSxNQUFNLGNBQWM7QUFDckgsd0JBQXdCLFlBQVksTUFBTSxVQUFVO0FBQ3BELHFEQUFxRCxZQUFZLEdBQUcsYUFBYSxHQUFHLGNBQWMsR0FBRyxlQUFlLEdBQUcsY0FBYyxNQUFNLGVBQWU7QUFDMUosd0VBQXdFLFVBQVUsR0FBRyxjQUFjLEdBQUcsY0FBYyxHQUFHLG9CQUFvQixHQUFHLFlBQVksR0FBRyxVQUFVLEdBQUcsWUFBWSxHQUFHLG1CQUFtQixNQUFNLGlCQUFpQjtBQUNuTyxrRUFBa0UsYUFBYSxHQUFHLGVBQWUsR0FBRyxpQkFBaUIsR0FBRyxlQUFlLEdBQUc7QUFDMUkseUVBQXlFLGVBQWUsR0FBRyxZQUFZLEdBQUcsZ0JBQWdCLEdBQUcsZ0JBQWdCLEdBQUcsZUFBZSxPQUFPLGlCQUFpQjtBQUN2TDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixjQUFjO0FBQ2Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHFCQUFxQjtBQUNsQyxhQUFhLHFCQUFxQjtBQUNsQyxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEscUJBQXFCO0FBQ2xDLGFBQWEsdUJBQXVCO0FBQ3BDLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxxQkFBcUI7QUFDbEMsYUFBYSx1QkFBdUI7QUFDcEMsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU8sMkJBQTJCLHVCQUF1QixpQkFBaUI7QUFDdkY7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQSxhQUFhLE9BQU87QUFDcEIsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEIsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QixjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxTQUFTO0FBQ3RCLGFBQWEsU0FBUztBQUN0QixjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGNBQWM7QUFDM0IsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSw0RUFBNEUsYUFBYTtBQUN6RjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHVCQUF1QjtBQUNwQyxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEIsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QixjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEIsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsV0FBVztBQUN4QixjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEIsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxxRUFBcUUsNkJBQTZCO0FBQ2xHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0VBQStFLGVBQWU7QUFDOUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPLDZCQUE2QjtBQUNqRCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTyw2QkFBNkI7QUFDakQsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPLGtGQUFrRix3QkFBd0I7QUFDOUgsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGdCQUFnQjtBQUM3QixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLDZFQUE2RTtBQUM3RSxtRkFBbUY7QUFDbkYsaUdBQWlHO0FBQ2pHLDRHQUE0RztBQUM1RyxzRkFBc0Y7QUFDdEYsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEIsY0FBYztBQUNkO0FBQ0EsdUZBQXVGLFdBQVc7QUFDbEc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsWUFBWTtBQUN6QixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFdBQVc7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtQkFBbUI7QUFDekM7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEMsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msa0JBQWtCO0FBQ3RELHNDQUFzQyxlQUFlO0FBQ3JELG1DQUFtQyw0QkFBNEI7QUFDL0QsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBLHNDQUFzQyxrQkFBa0I7QUFDeEQsc0NBQXNDLGVBQWU7QUFDckQsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBLDhCQUE4QixlQUFlO0FBQzdDLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0EsaUNBQWlDLGVBQWU7QUFDaEQsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSxzQ0FBc0Msc0JBQXNCO0FBQzVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnREFBZ0Q7O0FBRWhEO0FBQ0E7O0FBRUEsZ0RBQWdEO0FBQ2hEO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBLGlEQUFpRDtBQUNqRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLGdCQUFnQjtBQUNuQzs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQztBQUNqQzs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLEVBQUU7QUFDaEMsZ0NBQWdDLEVBQUU7QUFDbEMsK0JBQStCLEVBQUU7QUFDakMsOEJBQThCLEVBQUU7QUFDaEMsbUNBQW1DLElBQUk7QUFDdkMscUNBQXFDLElBQUk7QUFDekMsbUNBQW1DLElBQUk7QUFDdkMsb0NBQW9DLElBQUk7QUFDeEMsb0NBQW9DLElBQUk7QUFDeEMsb0NBQW9DLElBQUk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMsTUFBTTs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSCx1QkFBdUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUcsSUFBSTtBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEOzs7QUFHQTtBQUNBO0FBQ0EseUNBQXlDOztBQUV6QywrQkFBK0I7O0FBRS9CO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSCxtQ0FBbUM7O0FBRW5DOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0I7O0FBRXRCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7QUFDRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EseUZBQXlGOztBQUV6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLDhFQUE4RSw2QkFBNkI7QUFDM0c7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDRFQUE0RSwrQkFBK0I7QUFDM0c7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvR0FBb0csWUFBWSxHQUFHLFVBQVUsdUJBQXVCLGlCQUFpQixvREFBb0QsY0FBYyxHQUFHLGVBQWUsT0FBTyxrQkFBa0Isa0RBQWtELGlCQUFpQiw0Q0FBNEMsaUJBQWlCO0FBQ2xaLDhJQUE4SSxlQUFlLFlBQVksV0FBVyxHQUFHLFlBQVk7QUFDbk0sSUFBSSxVQUFVLEdBQUcsV0FBVyxHQUFHLGFBQWEsR0FBRyxhQUFhLEdBQUcsa0JBQWtCO0FBQ2pGLG1FQUFtRSxlQUFlLEdBQUcsaUJBQWlCLE9BQU8sY0FBYztBQUMzSCxnQ0FBZ0MsYUFBYSxNQUFNLHNCQUFzQjtBQUN6RSw4RUFBOEUsVUFBVSxHQUFHLGtCQUFrQixHQUFHLGNBQWMsR0FBRyxnQkFBZ0IsR0FBRyxXQUFXLEdBQUcsWUFBWSxHQUFHLFlBQVksR0FBRyxjQUFjLEdBQUcsWUFBWSxPQUFPLGNBQWM7QUFDbFAsNEVBQTRFLGlCQUFpQixHQUFHLHlCQUF5QixHQUFHLGFBQWEsR0FBRyxZQUFZLEdBQUcsYUFBYSxHQUFHLGVBQWUsR0FBRyxnQkFBZ0IsR0FBRyxlQUFlLEdBQUcscUJBQXFCLEdBQUcsZUFBZSxHQUFHLGVBQWUsTUFBTSxlQUFlO0FBQ2hUO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQ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QUN6QixhQUFhLFFBQVE7QUFDckIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsWUFBWTtBQUN6QixhQUFhLFFBQVE7QUFDckIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsWUFBWTtBQUN6QixhQUFhLFFBQVE7QUFDckIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsWUFBWTtBQUN6QixhQUFhLFFBQVE7QUFDckIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxnQkFBZ0I7QUFD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Q0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFCQUFxQjtBQUM3QixjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFCQUFxQjtBQUM3QixjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFCQUFxQjtBQUM3QixjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFCQUFxQjtBQUM3QixjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFCQUFxQjtBQUM3QixjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFCQUFxQjtBQUM3QixjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFCQUFxQjtBQUM3QixjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFCQUFxQjtBQUM3QixjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFCQUFxQjtBQUM3QixjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFCQUFxQjtBQUM3QixjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFCQUFxQjtBQUM3QixjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFCQUFxQjtBQUM3QixjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFCQUFxQjtBQUM3QixjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFCQUFxQjtBQUM3QixjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFCQUFxQjtBQUM3QixjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFCQUFxQjtBQUM3QixjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFCQUFxQjtBQUM3QixjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFCQUFxQjtBQUM3QixjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFCQUFxQjtBQUM3QixjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFCQUFxQjtBQUM3QixjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3alFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFDbkMsTUFBSUMsSUFBSSxHQUFHRCxLQUFLLENBQUNFLEtBQU4sQ0FBWSxFQUFaLENBQVg7QUFDQUQsTUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVQSxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFFLFdBQVIsRUFBVjtBQUNBLFNBQU9GLElBQUksQ0FBQ0csSUFBTCxDQUFVLEVBQVYsQ0FBUDtBQUNELENBSk0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuZGIxY2EzODliYTQwMWM0YmNhYjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICB0cnkge1xuICAgIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gIGlmIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHtcbiAgICBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3Q7XG4gIH0gZWxzZSB7XG4gICAgX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgICAgdmFyIGEgPSBbbnVsbF07XG4gICAgICBhLnB1c2guYXBwbHkoYSwgYXJncyk7XG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgIGlmIChDbGFzcykgX3NldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2NvbnN0cnVjdC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVGdW5jdGlvbihmbikge1xuICByZXR1cm4gRnVuY3Rpb24udG9TdHJpbmcuY2FsbChmbikuaW5kZXhPZihcIltuYXRpdmUgY29kZV1cIikgIT09IC0xO1xufVxuXG5mdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gIHZhciBfY2FjaGUgPSB0eXBlb2YgTWFwID09PSBcImZ1bmN0aW9uXCIgPyBuZXcgTWFwKCkgOiB1bmRlZmluZWQ7XG5cbiAgX3dyYXBOYXRpdmVTdXBlciA9IGZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHtcbiAgICBpZiAoQ2xhc3MgPT09IG51bGwgfHwgIV9pc05hdGl2ZUZ1bmN0aW9uKENsYXNzKSkgcmV0dXJuIENsYXNzO1xuXG4gICAgaWYgKHR5cGVvZiBDbGFzcyAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBfY2FjaGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGlmIChfY2FjaGUuaGFzKENsYXNzKSkgcmV0dXJuIF9jYWNoZS5nZXQoQ2xhc3MpO1xuXG4gICAgICBfY2FjaGUuc2V0KENsYXNzLCBXcmFwcGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBXcmFwcGVyKCkge1xuICAgICAgcmV0dXJuIF9jb25zdHJ1Y3QoQ2xhc3MsIGFyZ3VtZW50cywgX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yKTtcbiAgICB9XG5cbiAgICBXcmFwcGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogV3JhcHBlcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gX3NldFByb3RvdHlwZU9mKFdyYXBwZXIsIENsYXNzKTtcbiAgfTtcblxuICByZXR1cm4gX3dyYXBOYXRpdmVTdXBlcihDbGFzcyk7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICByZXR1cm4gYXJyMjtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShvKSB7XG4gIHZhciBpID0gMDtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBvW1N5bWJvbC5pdGVyYXRvcl0gPT0gbnVsbCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChvID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSkgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4ge1xuICAgICAgICBkb25lOiB0cnVlXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgIHZhbHVlOiBvW2krK11cbiAgICAgIH07XG4gICAgfTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG4gIH1cblxuICBpID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7XG4gIHJldHVybiBpLm5leHQuYmluZChpKTtcbn1cblxuLy8gdGhlc2UgYXJlbid0IHJlYWxseSBwcml2YXRlLCBidXQgbm9yIGFyZSB0aGV5IHJlYWxseSB1c2VmdWwgdG8gZG9jdW1lbnRcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgTHV4b25FcnJvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0Vycm9yKSB7XG4gIF9pbmhlcml0c0xvb3NlKEx1eG9uRXJyb3IsIF9FcnJvcik7XG5cbiAgZnVuY3Rpb24gTHV4b25FcnJvcigpIHtcbiAgICByZXR1cm4gX0Vycm9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHJldHVybiBMdXhvbkVycm9yO1xufSggLyojX19QVVJFX18qL193cmFwTmF0aXZlU3VwZXIoRXJyb3IpKTtcbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5cbnZhciBJbnZhbGlkRGF0ZVRpbWVFcnJvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0x1eG9uRXJyb3IpIHtcbiAgX2luaGVyaXRzTG9vc2UoSW52YWxpZERhdGVUaW1lRXJyb3IsIF9MdXhvbkVycm9yKTtcblxuICBmdW5jdGlvbiBJbnZhbGlkRGF0ZVRpbWVFcnJvcihyZWFzb24pIHtcbiAgICByZXR1cm4gX0x1eG9uRXJyb3IuY2FsbCh0aGlzLCBcIkludmFsaWQgRGF0ZVRpbWU6IFwiICsgcmVhc29uLnRvTWVzc2FnZSgpKSB8fCB0aGlzO1xuICB9XG5cbiAgcmV0dXJuIEludmFsaWREYXRlVGltZUVycm9yO1xufShMdXhvbkVycm9yKTtcbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgSW52YWxpZEludGVydmFsRXJyb3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9MdXhvbkVycm9yMikge1xuICBfaW5oZXJpdHNMb29zZShJbnZhbGlkSW50ZXJ2YWxFcnJvciwgX0x1eG9uRXJyb3IyKTtcblxuICBmdW5jdGlvbiBJbnZhbGlkSW50ZXJ2YWxFcnJvcihyZWFzb24pIHtcbiAgICByZXR1cm4gX0x1eG9uRXJyb3IyLmNhbGwodGhpcywgXCJJbnZhbGlkIEludGVydmFsOiBcIiArIHJlYXNvbi50b01lc3NhZ2UoKSkgfHwgdGhpcztcbiAgfVxuXG4gIHJldHVybiBJbnZhbGlkSW50ZXJ2YWxFcnJvcjtcbn0oTHV4b25FcnJvcik7XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIEludmFsaWREdXJhdGlvbkVycm9yID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfTHV4b25FcnJvcjMpIHtcbiAgX2luaGVyaXRzTG9vc2UoSW52YWxpZER1cmF0aW9uRXJyb3IsIF9MdXhvbkVycm9yMyk7XG5cbiAgZnVuY3Rpb24gSW52YWxpZER1cmF0aW9uRXJyb3IocmVhc29uKSB7XG4gICAgcmV0dXJuIF9MdXhvbkVycm9yMy5jYWxsKHRoaXMsIFwiSW52YWxpZCBEdXJhdGlvbjogXCIgKyByZWFzb24udG9NZXNzYWdlKCkpIHx8IHRoaXM7XG4gIH1cblxuICByZXR1cm4gSW52YWxpZER1cmF0aW9uRXJyb3I7XG59KEx1eG9uRXJyb3IpO1xuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0x1eG9uRXJyb3I0KSB7XG4gIF9pbmhlcml0c0xvb3NlKENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yLCBfTHV4b25FcnJvcjQpO1xuXG4gIGZ1bmN0aW9uIENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yKCkge1xuICAgIHJldHVybiBfTHV4b25FcnJvcjQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgcmV0dXJuIENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yO1xufShMdXhvbkVycm9yKTtcbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgSW52YWxpZFVuaXRFcnJvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0x1eG9uRXJyb3I1KSB7XG4gIF9pbmhlcml0c0xvb3NlKEludmFsaWRVbml0RXJyb3IsIF9MdXhvbkVycm9yNSk7XG5cbiAgZnVuY3Rpb24gSW52YWxpZFVuaXRFcnJvcih1bml0KSB7XG4gICAgcmV0dXJuIF9MdXhvbkVycm9yNS5jYWxsKHRoaXMsIFwiSW52YWxpZCB1bml0IFwiICsgdW5pdCkgfHwgdGhpcztcbiAgfVxuXG4gIHJldHVybiBJbnZhbGlkVW5pdEVycm9yO1xufShMdXhvbkVycm9yKTtcbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgSW52YWxpZEFyZ3VtZW50RXJyb3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9MdXhvbkVycm9yNikge1xuICBfaW5oZXJpdHNMb29zZShJbnZhbGlkQXJndW1lbnRFcnJvciwgX0x1eG9uRXJyb3I2KTtcblxuICBmdW5jdGlvbiBJbnZhbGlkQXJndW1lbnRFcnJvcigpIHtcbiAgICByZXR1cm4gX0x1eG9uRXJyb3I2LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHJldHVybiBJbnZhbGlkQXJndW1lbnRFcnJvcjtcbn0oTHV4b25FcnJvcik7XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIFpvbmVJc0Fic3RyYWN0RXJyb3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9MdXhvbkVycm9yNykge1xuICBfaW5oZXJpdHNMb29zZShab25lSXNBYnN0cmFjdEVycm9yLCBfTHV4b25FcnJvcjcpO1xuXG4gIGZ1bmN0aW9uIFpvbmVJc0Fic3RyYWN0RXJyb3IoKSB7XG4gICAgcmV0dXJuIF9MdXhvbkVycm9yNy5jYWxsKHRoaXMsIFwiWm9uZSBpcyBhbiBhYnN0cmFjdCBjbGFzc1wiKSB8fCB0aGlzO1xuICB9XG5cbiAgcmV0dXJuIFpvbmVJc0Fic3RyYWN0RXJyb3I7XG59KEx1eG9uRXJyb3IpO1xuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbnZhciBuID0gXCJudW1lcmljXCIsXG4gICAgcyA9IFwic2hvcnRcIixcbiAgICBsID0gXCJsb25nXCI7XG52YXIgREFURV9TSE9SVCA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IG4sXG4gIGRheTogblxufTtcbnZhciBEQVRFX01FRCA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IHMsXG4gIGRheTogblxufTtcbnZhciBEQVRFX0ZVTEwgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBsLFxuICBkYXk6IG5cbn07XG52YXIgREFURV9IVUdFID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbCxcbiAgZGF5OiBuLFxuICB3ZWVrZGF5OiBsXG59O1xudmFyIFRJTUVfU0lNUExFID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG5cbn07XG52YXIgVElNRV9XSVRIX1NFQ09ORFMgPSB7XG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuXG59O1xudmFyIFRJTUVfV0lUSF9TSE9SVF9PRkZTRVQgPSB7XG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuLFxuICB0aW1lWm9uZU5hbWU6IHNcbn07XG52YXIgVElNRV9XSVRIX0xPTkdfT0ZGU0VUID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbiAgdGltZVpvbmVOYW1lOiBsXG59O1xudmFyIFRJTUVfMjRfU0lNUExFID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIGhvdXIxMjogZmFsc2Vcbn07XG4vKipcbiAqIHtAbGluayB0b0xvY2FsZVN0cmluZ307IGZvcm1hdCBsaWtlICcwOTozMDoyMycsIGFsd2F5cyAyNC1ob3VyLlxuICovXG5cbnZhciBUSU1FXzI0X1dJVEhfU0VDT05EUyA9IHtcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG4sXG4gIGhvdXIxMjogZmFsc2Vcbn07XG4vKipcbiAqIHtAbGluayB0b0xvY2FsZVN0cmluZ307IGZvcm1hdCBsaWtlICcwOTozMDoyMyBFRFQnLCBhbHdheXMgMjQtaG91ci5cbiAqL1xuXG52YXIgVElNRV8yNF9XSVRIX1NIT1JUX09GRlNFVCA9IHtcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG4sXG4gIGhvdXIxMjogZmFsc2UsXG4gIHRpbWVab25lTmFtZTogc1xufTtcbi8qKlxuICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfTsgZm9ybWF0IGxpa2UgJzA5OjMwOjIzIEVhc3Rlcm4gRGF5bGlnaHQgVGltZScsIGFsd2F5cyAyNC1ob3VyLlxuICovXG5cbnZhciBUSU1FXzI0X1dJVEhfTE9OR19PRkZTRVQgPSB7XG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuLFxuICBob3VyMTI6IGZhbHNlLFxuICB0aW1lWm9uZU5hbWU6IGxcbn07XG4vKipcbiAqIHtAbGluayB0b0xvY2FsZVN0cmluZ307IGZvcm1hdCBsaWtlICcxMC8xNC8xOTgzLCA5OjMwIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gKi9cblxudmFyIERBVEVUSU1FX1NIT1JUID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbixcbiAgZGF5OiBuLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG5cbn07XG4vKipcbiAqIHtAbGluayB0b0xvY2FsZVN0cmluZ307IGZvcm1hdCBsaWtlICcxMC8xNC8xOTgzLCA5OjMwOjMzIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gKi9cblxudmFyIERBVEVUSU1FX1NIT1JUX1dJVEhfU0VDT05EUyA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IG4sXG4gIGRheTogbixcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG5cbn07XG52YXIgREFURVRJTUVfTUVEID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogcyxcbiAgZGF5OiBuLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG5cbn07XG52YXIgREFURVRJTUVfTUVEX1dJVEhfU0VDT05EUyA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IHMsXG4gIGRheTogbixcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG5cbn07XG52YXIgREFURVRJTUVfTUVEX1dJVEhfV0VFS0RBWSA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IHMsXG4gIGRheTogbixcbiAgd2Vla2RheTogcyxcbiAgaG91cjogbixcbiAgbWludXRlOiBuXG59O1xudmFyIERBVEVUSU1FX0ZVTEwgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBsLFxuICBkYXk6IG4sXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgdGltZVpvbmVOYW1lOiBzXG59O1xudmFyIERBVEVUSU1FX0ZVTExfV0lUSF9TRUNPTkRTID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbCxcbiAgZGF5OiBuLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbiAgdGltZVpvbmVOYW1lOiBzXG59O1xudmFyIERBVEVUSU1FX0hVR0UgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBsLFxuICBkYXk6IG4sXG4gIHdlZWtkYXk6IGwsXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgdGltZVpvbmVOYW1lOiBsXG59O1xudmFyIERBVEVUSU1FX0hVR0VfV0lUSF9TRUNPTkRTID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbCxcbiAgZGF5OiBuLFxuICB3ZWVrZGF5OiBsLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbiAgdGltZVpvbmVOYW1lOiBsXG59O1xuXG4vKlxuICBUaGlzIGlzIGp1c3QgYSBqdW5rIGRyYXdlciwgY29udGFpbmluZyBhbnl0aGluZyB1c2VkIGFjcm9zcyBtdWx0aXBsZSBjbGFzc2VzLlxuICBCZWNhdXNlIEx1eG9uIGlzIHNtYWxsKGlzaCksIHRoaXMgc2hvdWxkIHN0YXkgc21hbGwgYW5kIHdlIHdvbid0IHdvcnJ5IGFib3V0IHNwbGl0dGluZ1xuICBpdCB1cCBpbnRvLCBzYXksIHBhcnNpbmdVdGlsLmpzIGFuZCBiYXNpY1V0aWwuanMgYW5kIHNvIG9uLiBCdXQgdGhleSBhcmUgZGl2aWRlZCB1cCBieSBmZWF0dXJlIGFyZWEuXG4qL1xuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG4vLyBUWVBFU1xuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gXCJ1bmRlZmluZWRcIjtcbn1cbmZ1bmN0aW9uIGlzTnVtYmVyKG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSBcIm51bWJlclwiO1xufVxuZnVuY3Rpb24gaXNJbnRlZ2VyKG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSBcIm51bWJlclwiICYmIG8gJSAxID09PSAwO1xufVxuZnVuY3Rpb24gaXNTdHJpbmcobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09IFwic3RyaW5nXCI7XG59XG5mdW5jdGlvbiBpc0RhdGUobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSBcIltvYmplY3QgRGF0ZV1cIjtcbn0gLy8gQ0FQQUJJTElUSUVTXG5cbmZ1bmN0aW9uIGhhc0ludGwoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHR5cGVvZiBJbnRsICE9PSBcInVuZGVmaW5lZFwiICYmIEludGwuRGF0ZVRpbWVGb3JtYXQ7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbmZ1bmN0aW9uIGhhc0Zvcm1hdFRvUGFydHMoKSB7XG4gIHJldHVybiAhaXNVbmRlZmluZWQoSW50bC5EYXRlVGltZUZvcm1hdC5wcm90b3R5cGUuZm9ybWF0VG9QYXJ0cyk7XG59XG5mdW5jdGlvbiBoYXNSZWxhdGl2ZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gdHlwZW9mIEludGwgIT09IFwidW5kZWZpbmVkXCIgJiYgISFJbnRsLlJlbGF0aXZlVGltZUZvcm1hdDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSAvLyBPQkpFQ1RTIEFORCBBUlJBWVNcblxuZnVuY3Rpb24gbWF5YmVBcnJheSh0aGluZykge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh0aGluZykgPyB0aGluZyA6IFt0aGluZ107XG59XG5mdW5jdGlvbiBiZXN0QnkoYXJyLCBieSwgY29tcGFyZSkge1xuICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4gYXJyLnJlZHVjZShmdW5jdGlvbiAoYmVzdCwgbmV4dCkge1xuICAgIHZhciBwYWlyID0gW2J5KG5leHQpLCBuZXh0XTtcblxuICAgIGlmICghYmVzdCkge1xuICAgICAgcmV0dXJuIHBhaXI7XG4gICAgfSBlbHNlIGlmIChjb21wYXJlKGJlc3RbMF0sIHBhaXJbMF0pID09PSBiZXN0WzBdKSB7XG4gICAgICByZXR1cm4gYmVzdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHBhaXI7XG4gICAgfVxuICB9LCBudWxsKVsxXTtcbn1cbmZ1bmN0aW9uIHBpY2sob2JqLCBrZXlzKSB7XG4gIHJldHVybiBrZXlzLnJlZHVjZShmdW5jdGlvbiAoYSwgaykge1xuICAgIGFba10gPSBvYmpba107XG4gICAgcmV0dXJuIGE7XG4gIH0sIHt9KTtcbn1cbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59IC8vIE5VTUJFUlMgQU5EIFNUUklOR1NcblxuZnVuY3Rpb24gaW50ZWdlckJldHdlZW4odGhpbmcsIGJvdHRvbSwgdG9wKSB7XG4gIHJldHVybiBpc0ludGVnZXIodGhpbmcpICYmIHRoaW5nID49IGJvdHRvbSAmJiB0aGluZyA8PSB0b3A7XG59IC8vIHggJSBuIGJ1dCB0YWtlcyB0aGUgc2lnbiBvZiBuIGluc3RlYWQgb2YgeFxuXG5mdW5jdGlvbiBmbG9vck1vZCh4LCBuKSB7XG4gIHJldHVybiB4IC0gbiAqIE1hdGguZmxvb3IoeCAvIG4pO1xufVxuZnVuY3Rpb24gcGFkU3RhcnQoaW5wdXQsIG4pIHtcbiAgaWYgKG4gPT09IHZvaWQgMCkge1xuICAgIG4gPSAyO1xuICB9XG5cbiAgaWYgKGlucHV0LnRvU3RyaW5nKCkubGVuZ3RoIDwgbikge1xuICAgIHJldHVybiAoXCIwXCIucmVwZWF0KG4pICsgaW5wdXQpLnNsaWNlKC1uKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gaW5wdXQudG9TdHJpbmcoKTtcbiAgfVxufVxuZnVuY3Rpb24gcGFyc2VJbnRlZ2VyKHN0cmluZykge1xuICBpZiAoaXNVbmRlZmluZWQoc3RyaW5nKSB8fCBzdHJpbmcgPT09IG51bGwgfHwgc3RyaW5nID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoc3RyaW5nLCAxMCk7XG4gIH1cbn1cbmZ1bmN0aW9uIHBhcnNlTWlsbGlzKGZyYWN0aW9uKSB7XG4gIC8vIFJldHVybiB1bmRlZmluZWQgKGluc3RlYWQgb2YgMCkgaW4gdGhlc2UgY2FzZXMsIHdoZXJlIGZyYWN0aW9uIGlzIG5vdCBzZXRcbiAgaWYgKGlzVW5kZWZpbmVkKGZyYWN0aW9uKSB8fCBmcmFjdGlvbiA9PT0gbnVsbCB8fCBmcmFjdGlvbiA9PT0gXCJcIikge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGYgPSBwYXJzZUZsb2F0KFwiMC5cIiArIGZyYWN0aW9uKSAqIDEwMDA7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoZik7XG4gIH1cbn1cbmZ1bmN0aW9uIHJvdW5kVG8obnVtYmVyLCBkaWdpdHMsIHRvd2FyZFplcm8pIHtcbiAgaWYgKHRvd2FyZFplcm8gPT09IHZvaWQgMCkge1xuICAgIHRvd2FyZFplcm8gPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBmYWN0b3IgPSBNYXRoLnBvdygxMCwgZGlnaXRzKSxcbiAgICAgIHJvdW5kZXIgPSB0b3dhcmRaZXJvID8gTWF0aC50cnVuYyA6IE1hdGgucm91bmQ7XG4gIHJldHVybiByb3VuZGVyKG51bWJlciAqIGZhY3RvcikgLyBmYWN0b3I7XG59IC8vIERBVEUgQkFTSUNTXG5cbmZ1bmN0aW9uIGlzTGVhcFllYXIoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQgPT09IDAgJiYgKHllYXIgJSAxMDAgIT09IDAgfHwgeWVhciAlIDQwMCA9PT0gMCk7XG59XG5mdW5jdGlvbiBkYXlzSW5ZZWFyKHllYXIpIHtcbiAgcmV0dXJuIGlzTGVhcFllYXIoeWVhcikgPyAzNjYgOiAzNjU7XG59XG5mdW5jdGlvbiBkYXlzSW5Nb250aCh5ZWFyLCBtb250aCkge1xuICB2YXIgbW9kTW9udGggPSBmbG9vck1vZChtb250aCAtIDEsIDEyKSArIDEsXG4gICAgICBtb2RZZWFyID0geWVhciArIChtb250aCAtIG1vZE1vbnRoKSAvIDEyO1xuXG4gIGlmIChtb2RNb250aCA9PT0gMikge1xuICAgIHJldHVybiBpc0xlYXBZZWFyKG1vZFllYXIpID8gMjkgOiAyODtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV1bbW9kTW9udGggLSAxXTtcbiAgfVxufSAvLyBjb3ZlcnQgYSBjYWxlbmRhciBvYmplY3QgdG8gYSBsb2NhbCB0aW1lc3RhbXAgKGVwb2NoLCBidXQgd2l0aCB0aGUgb2Zmc2V0IGJha2VkIGluKVxuXG5mdW5jdGlvbiBvYmpUb0xvY2FsVFMob2JqKSB7XG4gIHZhciBkID0gRGF0ZS5VVEMob2JqLnllYXIsIG9iai5tb250aCAtIDEsIG9iai5kYXksIG9iai5ob3VyLCBvYmoubWludXRlLCBvYmouc2Vjb25kLCBvYmoubWlsbGlzZWNvbmQpOyAvLyBmb3IgbGVnYWN5IHJlYXNvbnMsIHllYXJzIGJldHdlZW4gMCBhbmQgOTkgYXJlIGludGVycHJldGVkIGFzIDE5WFg7IHJldmVydCB0aGF0XG5cbiAgaWYgKG9iai55ZWFyIDwgMTAwICYmIG9iai55ZWFyID49IDApIHtcbiAgICBkID0gbmV3IERhdGUoZCk7XG4gICAgZC5zZXRVVENGdWxsWWVhcihkLmdldFVUQ0Z1bGxZZWFyKCkgLSAxOTAwKTtcbiAgfVxuXG4gIHJldHVybiArZDtcbn1cbmZ1bmN0aW9uIHdlZWtzSW5XZWVrWWVhcih3ZWVrWWVhcikge1xuICB2YXIgcDEgPSAod2Vla1llYXIgKyBNYXRoLmZsb29yKHdlZWtZZWFyIC8gNCkgLSBNYXRoLmZsb29yKHdlZWtZZWFyIC8gMTAwKSArIE1hdGguZmxvb3Iod2Vla1llYXIgLyA0MDApKSAlIDcsXG4gICAgICBsYXN0ID0gd2Vla1llYXIgLSAxLFxuICAgICAgcDIgPSAobGFzdCArIE1hdGguZmxvb3IobGFzdCAvIDQpIC0gTWF0aC5mbG9vcihsYXN0IC8gMTAwKSArIE1hdGguZmxvb3IobGFzdCAvIDQwMCkpICUgNztcbiAgcmV0dXJuIHAxID09PSA0IHx8IHAyID09PSAzID8gNTMgOiA1Mjtcbn1cbmZ1bmN0aW9uIHVudHJ1bmNhdGVZZWFyKHllYXIpIHtcbiAgaWYgKHllYXIgPiA5OSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2UgcmV0dXJuIHllYXIgPiA2MCA/IDE5MDAgKyB5ZWFyIDogMjAwMCArIHllYXI7XG59IC8vIFBBUlNJTkdcblxuZnVuY3Rpb24gcGFyc2Vab25lSW5mbyh0cywgb2Zmc2V0Rm9ybWF0LCBsb2NhbGUsIHRpbWVab25lKSB7XG4gIGlmICh0aW1lWm9uZSA9PT0gdm9pZCAwKSB7XG4gICAgdGltZVpvbmUgPSBudWxsO1xuICB9XG5cbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSh0cyksXG4gICAgICBpbnRsT3B0cyA9IHtcbiAgICBob3VyMTI6IGZhbHNlLFxuICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgIG1vbnRoOiBcIjItZGlnaXRcIixcbiAgICBkYXk6IFwiMi1kaWdpdFwiLFxuICAgIGhvdXI6IFwiMi1kaWdpdFwiLFxuICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCJcbiAgfTtcblxuICBpZiAodGltZVpvbmUpIHtcbiAgICBpbnRsT3B0cy50aW1lWm9uZSA9IHRpbWVab25lO1xuICB9XG5cbiAgdmFyIG1vZGlmaWVkID0gT2JqZWN0LmFzc2lnbih7XG4gICAgdGltZVpvbmVOYW1lOiBvZmZzZXRGb3JtYXRcbiAgfSwgaW50bE9wdHMpLFxuICAgICAgaW50bCA9IGhhc0ludGwoKTtcblxuICBpZiAoaW50bCAmJiBoYXNGb3JtYXRUb1BhcnRzKCkpIHtcbiAgICB2YXIgcGFyc2VkID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCBtb2RpZmllZCkuZm9ybWF0VG9QYXJ0cyhkYXRlKS5maW5kKGZ1bmN0aW9uIChtKSB7XG4gICAgICByZXR1cm4gbS50eXBlLnRvTG93ZXJDYXNlKCkgPT09IFwidGltZXpvbmVuYW1lXCI7XG4gICAgfSk7XG4gICAgcmV0dXJuIHBhcnNlZCA/IHBhcnNlZC52YWx1ZSA6IG51bGw7XG4gIH0gZWxzZSBpZiAoaW50bCkge1xuICAgIC8vIHRoaXMgcHJvYmFibHkgZG9lc24ndCB3b3JrIGZvciBhbGwgbG9jYWxlc1xuICAgIHZhciB3aXRob3V0ID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCBpbnRsT3B0cykuZm9ybWF0KGRhdGUpLFxuICAgICAgICBpbmNsdWRlZCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwgbW9kaWZpZWQpLmZvcm1hdChkYXRlKSxcbiAgICAgICAgZGlmZmVkID0gaW5jbHVkZWQuc3Vic3RyaW5nKHdpdGhvdXQubGVuZ3RoKSxcbiAgICAgICAgdHJpbW1lZCA9IGRpZmZlZC5yZXBsYWNlKC9eWywgXFx1MjAwZV0rLywgXCJcIik7XG4gICAgcmV0dXJuIHRyaW1tZWQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn0gLy8gc2lnbmVkT2Zmc2V0KCctNScsICczMCcpIC0+IC0zMzBcblxuZnVuY3Rpb24gc2lnbmVkT2Zmc2V0KG9mZkhvdXJTdHIsIG9mZk1pbnV0ZVN0cikge1xuICB2YXIgb2ZmSG91ciA9IHBhcnNlSW50KG9mZkhvdXJTdHIsIDEwKTsgLy8gZG9uJ3QgfHwgdGhpcyBiZWNhdXNlIHdlIHdhbnQgdG8gcHJlc2VydmUgLTBcblxuICBpZiAoTnVtYmVyLmlzTmFOKG9mZkhvdXIpKSB7XG4gICAgb2ZmSG91ciA9IDA7XG4gIH1cblxuICB2YXIgb2ZmTWluID0gcGFyc2VJbnQob2ZmTWludXRlU3RyLCAxMCkgfHwgMCxcbiAgICAgIG9mZk1pblNpZ25lZCA9IG9mZkhvdXIgPCAwIHx8IE9iamVjdC5pcyhvZmZIb3VyLCAtMCkgPyAtb2ZmTWluIDogb2ZmTWluO1xuICByZXR1cm4gb2ZmSG91ciAqIDYwICsgb2ZmTWluU2lnbmVkO1xufSAvLyBDT0VSQ0lPTlxuXG5mdW5jdGlvbiBhc051bWJlcih2YWx1ZSkge1xuICB2YXIgbnVtZXJpY1ZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIgfHwgdmFsdWUgPT09IFwiXCIgfHwgTnVtYmVyLmlzTmFOKG51bWVyaWNWYWx1ZSkpIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcIkludmFsaWQgdW5pdCB2YWx1ZSBcIiArIHZhbHVlKTtcbiAgcmV0dXJuIG51bWVyaWNWYWx1ZTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZU9iamVjdChvYmosIG5vcm1hbGl6ZXIsIG5vblVuaXRLZXlzKSB7XG4gIHZhciBub3JtYWxpemVkID0ge307XG5cbiAgZm9yICh2YXIgdSBpbiBvYmopIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkob2JqLCB1KSkge1xuICAgICAgaWYgKG5vblVuaXRLZXlzLmluZGV4T2YodSkgPj0gMCkgY29udGludWU7XG4gICAgICB2YXIgdiA9IG9ialt1XTtcbiAgICAgIGlmICh2ID09PSB1bmRlZmluZWQgfHwgdiA9PT0gbnVsbCkgY29udGludWU7XG4gICAgICBub3JtYWxpemVkW25vcm1hbGl6ZXIodSldID0gYXNOdW1iZXIodik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vcm1hbGl6ZWQ7XG59XG5mdW5jdGlvbiBmb3JtYXRPZmZzZXQob2Zmc2V0LCBmb3JtYXQpIHtcbiAgdmFyIGhvdXJzID0gTWF0aC50cnVuYyhvZmZzZXQgLyA2MCksXG4gICAgICBtaW51dGVzID0gTWF0aC5hYnMob2Zmc2V0ICUgNjApLFxuICAgICAgc2lnbiA9IGhvdXJzID49IDAgJiYgIU9iamVjdC5pcyhob3VycywgLTApID8gXCIrXCIgOiBcIi1cIixcbiAgICAgIGJhc2UgPSBcIlwiICsgc2lnbiArIE1hdGguYWJzKGhvdXJzKTtcblxuICBzd2l0Y2ggKGZvcm1hdCkge1xuICAgIGNhc2UgXCJzaG9ydFwiOlxuICAgICAgcmV0dXJuIFwiXCIgKyBzaWduICsgcGFkU3RhcnQoTWF0aC5hYnMoaG91cnMpLCAyKSArIFwiOlwiICsgcGFkU3RhcnQobWludXRlcywgMik7XG5cbiAgICBjYXNlIFwibmFycm93XCI6XG4gICAgICByZXR1cm4gbWludXRlcyA+IDAgPyBiYXNlICsgXCI6XCIgKyBtaW51dGVzIDogYmFzZTtcblxuICAgIGNhc2UgXCJ0ZWNoaWVcIjpcbiAgICAgIHJldHVybiBcIlwiICsgc2lnbiArIHBhZFN0YXJ0KE1hdGguYWJzKGhvdXJzKSwgMikgKyBwYWRTdGFydChtaW51dGVzLCAyKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlZhbHVlIGZvcm1hdCBcIiArIGZvcm1hdCArIFwiIGlzIG91dCBvZiByYW5nZSBmb3IgcHJvcGVydHkgZm9ybWF0XCIpO1xuICB9XG59XG5mdW5jdGlvbiB0aW1lT2JqZWN0KG9iaikge1xuICByZXR1cm4gcGljayhvYmosIFtcImhvdXJcIiwgXCJtaW51dGVcIiwgXCJzZWNvbmRcIiwgXCJtaWxsaXNlY29uZFwiXSk7XG59XG52YXIgaWFuYVJlZ2V4ID0gL1tBLVphLXpfKy1dezEsMjU2fSg6P1xcL1tBLVphLXpfKy1dezEsMjU2fShcXC9bQS1aYS16XystXXsxLDI1Nn0pPyk/LztcblxuZnVuY3Rpb24gc3RyaW5naWZ5KG9iaikge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqLCBPYmplY3Qua2V5cyhvYmopLnNvcnQoKSk7XG59XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuXG52YXIgbW9udGhzTG9uZyA9IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJdO1xudmFyIG1vbnRoc1Nob3J0ID0gW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdO1xudmFyIG1vbnRoc05hcnJvdyA9IFtcIkpcIiwgXCJGXCIsIFwiTVwiLCBcIkFcIiwgXCJNXCIsIFwiSlwiLCBcIkpcIiwgXCJBXCIsIFwiU1wiLCBcIk9cIiwgXCJOXCIsIFwiRFwiXTtcbmZ1bmN0aW9uIG1vbnRocyhsZW5ndGgpIHtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIFwibmFycm93XCI6XG4gICAgICByZXR1cm4gbW9udGhzTmFycm93O1xuXG4gICAgY2FzZSBcInNob3J0XCI6XG4gICAgICByZXR1cm4gbW9udGhzU2hvcnQ7XG5cbiAgICBjYXNlIFwibG9uZ1wiOlxuICAgICAgcmV0dXJuIG1vbnRoc0xvbmc7XG5cbiAgICBjYXNlIFwibnVtZXJpY1wiOlxuICAgICAgcmV0dXJuIFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIiwgXCI4XCIsIFwiOVwiLCBcIjEwXCIsIFwiMTFcIiwgXCIxMlwiXTtcblxuICAgIGNhc2UgXCIyLWRpZ2l0XCI6XG4gICAgICByZXR1cm4gW1wiMDFcIiwgXCIwMlwiLCBcIjAzXCIsIFwiMDRcIiwgXCIwNVwiLCBcIjA2XCIsIFwiMDdcIiwgXCIwOFwiLCBcIjA5XCIsIFwiMTBcIiwgXCIxMVwiLCBcIjEyXCJdO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG52YXIgd2Vla2RheXNMb25nID0gW1wiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIiwgXCJTdW5kYXlcIl07XG52YXIgd2Vla2RheXNTaG9ydCA9IFtcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiLCBcIlN1blwiXTtcbnZhciB3ZWVrZGF5c05hcnJvdyA9IFtcIk1cIiwgXCJUXCIsIFwiV1wiLCBcIlRcIiwgXCJGXCIsIFwiU1wiLCBcIlNcIl07XG5mdW5jdGlvbiB3ZWVrZGF5cyhsZW5ndGgpIHtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIFwibmFycm93XCI6XG4gICAgICByZXR1cm4gd2Vla2RheXNOYXJyb3c7XG5cbiAgICBjYXNlIFwic2hvcnRcIjpcbiAgICAgIHJldHVybiB3ZWVrZGF5c1Nob3J0O1xuXG4gICAgY2FzZSBcImxvbmdcIjpcbiAgICAgIHJldHVybiB3ZWVrZGF5c0xvbmc7XG5cbiAgICBjYXNlIFwibnVtZXJpY1wiOlxuICAgICAgcmV0dXJuIFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIl07XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbnZhciBtZXJpZGllbXMgPSBbXCJBTVwiLCBcIlBNXCJdO1xudmFyIGVyYXNMb25nID0gW1wiQmVmb3JlIENocmlzdFwiLCBcIkFubm8gRG9taW5pXCJdO1xudmFyIGVyYXNTaG9ydCA9IFtcIkJDXCIsIFwiQURcIl07XG52YXIgZXJhc05hcnJvdyA9IFtcIkJcIiwgXCJBXCJdO1xuZnVuY3Rpb24gZXJhcyhsZW5ndGgpIHtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIFwibmFycm93XCI6XG4gICAgICByZXR1cm4gZXJhc05hcnJvdztcblxuICAgIGNhc2UgXCJzaG9ydFwiOlxuICAgICAgcmV0dXJuIGVyYXNTaG9ydDtcblxuICAgIGNhc2UgXCJsb25nXCI6XG4gICAgICByZXR1cm4gZXJhc0xvbmc7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbmZ1bmN0aW9uIG1lcmlkaWVtRm9yRGF0ZVRpbWUoZHQpIHtcbiAgcmV0dXJuIG1lcmlkaWVtc1tkdC5ob3VyIDwgMTIgPyAwIDogMV07XG59XG5mdW5jdGlvbiB3ZWVrZGF5Rm9yRGF0ZVRpbWUoZHQsIGxlbmd0aCkge1xuICByZXR1cm4gd2Vla2RheXMobGVuZ3RoKVtkdC53ZWVrZGF5IC0gMV07XG59XG5mdW5jdGlvbiBtb250aEZvckRhdGVUaW1lKGR0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIG1vbnRocyhsZW5ndGgpW2R0Lm1vbnRoIC0gMV07XG59XG5mdW5jdGlvbiBlcmFGb3JEYXRlVGltZShkdCwgbGVuZ3RoKSB7XG4gIHJldHVybiBlcmFzKGxlbmd0aClbZHQueWVhciA8IDAgPyAwIDogMV07XG59XG5mdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZVRpbWUodW5pdCwgY291bnQsIG51bWVyaWMsIG5hcnJvdykge1xuICBpZiAobnVtZXJpYyA9PT0gdm9pZCAwKSB7XG4gICAgbnVtZXJpYyA9IFwiYWx3YXlzXCI7XG4gIH1cblxuICBpZiAobmFycm93ID09PSB2b2lkIDApIHtcbiAgICBuYXJyb3cgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciB1bml0cyA9IHtcbiAgICB5ZWFyczogW1wieWVhclwiLCBcInlyLlwiXSxcbiAgICBxdWFydGVyczogW1wicXVhcnRlclwiLCBcInF0ci5cIl0sXG4gICAgbW9udGhzOiBbXCJtb250aFwiLCBcIm1vLlwiXSxcbiAgICB3ZWVrczogW1wid2Vla1wiLCBcIndrLlwiXSxcbiAgICBkYXlzOiBbXCJkYXlcIiwgXCJkYXlcIiwgXCJkYXlzXCJdLFxuICAgIGhvdXJzOiBbXCJob3VyXCIsIFwiaHIuXCJdLFxuICAgIG1pbnV0ZXM6IFtcIm1pbnV0ZVwiLCBcIm1pbi5cIl0sXG4gICAgc2Vjb25kczogW1wic2Vjb25kXCIsIFwic2VjLlwiXVxuICB9O1xuICB2YXIgbGFzdGFibGUgPSBbXCJob3Vyc1wiLCBcIm1pbnV0ZXNcIiwgXCJzZWNvbmRzXCJdLmluZGV4T2YodW5pdCkgPT09IC0xO1xuXG4gIGlmIChudW1lcmljID09PSBcImF1dG9cIiAmJiBsYXN0YWJsZSkge1xuICAgIHZhciBpc0RheSA9IHVuaXQgPT09IFwiZGF5c1wiO1xuXG4gICAgc3dpdGNoIChjb3VudCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gaXNEYXkgPyBcInRvbW9ycm93XCIgOiBcIm5leHQgXCIgKyB1bml0c1t1bml0XVswXTtcblxuICAgICAgY2FzZSAtMTpcbiAgICAgICAgcmV0dXJuIGlzRGF5ID8gXCJ5ZXN0ZXJkYXlcIiA6IFwibGFzdCBcIiArIHVuaXRzW3VuaXRdWzBdO1xuXG4gICAgICBjYXNlIDA6XG4gICAgICAgIHJldHVybiBpc0RheSA/IFwidG9kYXlcIiA6IFwidGhpcyBcIiArIHVuaXRzW3VuaXRdWzBdO1xuXG4gICAgfVxuICB9XG5cbiAgdmFyIGlzSW5QYXN0ID0gT2JqZWN0LmlzKGNvdW50LCAtMCkgfHwgY291bnQgPCAwLFxuICAgICAgZm10VmFsdWUgPSBNYXRoLmFicyhjb3VudCksXG4gICAgICBzaW5ndWxhciA9IGZtdFZhbHVlID09PSAxLFxuICAgICAgbGlsVW5pdHMgPSB1bml0c1t1bml0XSxcbiAgICAgIGZtdFVuaXQgPSBuYXJyb3cgPyBzaW5ndWxhciA/IGxpbFVuaXRzWzFdIDogbGlsVW5pdHNbMl0gfHwgbGlsVW5pdHNbMV0gOiBzaW5ndWxhciA/IHVuaXRzW3VuaXRdWzBdIDogdW5pdDtcbiAgcmV0dXJuIGlzSW5QYXN0ID8gZm10VmFsdWUgKyBcIiBcIiArIGZtdFVuaXQgKyBcIiBhZ29cIiA6IFwiaW4gXCIgKyBmbXRWYWx1ZSArIFwiIFwiICsgZm10VW5pdDtcbn1cbmZ1bmN0aW9uIGZvcm1hdFN0cmluZyhrbm93bkZvcm1hdCkge1xuICAvLyB0aGVzZSBhbGwgaGF2ZSB0aGUgb2Zmc2V0cyByZW1vdmVkIGJlY2F1c2Ugd2UgZG9uJ3QgaGF2ZSBhY2Nlc3MgdG8gdGhlbVxuICAvLyB3aXRob3V0IGFsbCB0aGUgaW50bCBzdHVmZiB0aGlzIGlzIGJhY2tmaWxsaW5nXG4gIHZhciBmaWx0ZXJlZCA9IHBpY2soa25vd25Gb3JtYXQsIFtcIndlZWtkYXlcIiwgXCJlcmFcIiwgXCJ5ZWFyXCIsIFwibW9udGhcIiwgXCJkYXlcIiwgXCJob3VyXCIsIFwibWludXRlXCIsIFwic2Vjb25kXCIsIFwidGltZVpvbmVOYW1lXCIsIFwiaG91cjEyXCJdKSxcbiAgICAgIGtleSA9IHN0cmluZ2lmeShmaWx0ZXJlZCksXG4gICAgICBkYXRlVGltZUh1Z2UgPSBcIkVFRUUsIExMTEwgZCwgeXl5eSwgaDptbSBhXCI7XG5cbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlIHN0cmluZ2lmeShEQVRFX1NIT1JUKTpcbiAgICAgIHJldHVybiBcIk0vZC95eXl5XCI7XG5cbiAgICBjYXNlIHN0cmluZ2lmeShEQVRFX01FRCk6XG4gICAgICByZXR1cm4gXCJMTEwgZCwgeXl5eVwiO1xuXG4gICAgY2FzZSBzdHJpbmdpZnkoREFURV9GVUxMKTpcbiAgICAgIHJldHVybiBcIkxMTEwgZCwgeXl5eVwiO1xuXG4gICAgY2FzZSBzdHJpbmdpZnkoREFURV9IVUdFKTpcbiAgICAgIHJldHVybiBcIkVFRUUsIExMTEwgZCwgeXl5eVwiO1xuXG4gICAgY2FzZSBzdHJpbmdpZnkoVElNRV9TSU1QTEUpOlxuICAgICAgcmV0dXJuIFwiaDptbSBhXCI7XG5cbiAgICBjYXNlIHN0cmluZ2lmeShUSU1FX1dJVEhfU0VDT05EUyk6XG4gICAgICByZXR1cm4gXCJoOm1tOnNzIGFcIjtcblxuICAgIGNhc2Ugc3RyaW5naWZ5KFRJTUVfV0lUSF9TSE9SVF9PRkZTRVQpOlxuICAgICAgcmV0dXJuIFwiaDptbSBhXCI7XG5cbiAgICBjYXNlIHN0cmluZ2lmeShUSU1FX1dJVEhfTE9OR19PRkZTRVQpOlxuICAgICAgcmV0dXJuIFwiaDptbSBhXCI7XG5cbiAgICBjYXNlIHN0cmluZ2lmeShUSU1FXzI0X1NJTVBMRSk6XG4gICAgICByZXR1cm4gXCJISDptbVwiO1xuXG4gICAgY2FzZSBzdHJpbmdpZnkoVElNRV8yNF9XSVRIX1NFQ09ORFMpOlxuICAgICAgcmV0dXJuIFwiSEg6bW06c3NcIjtcblxuICAgIGNhc2Ugc3RyaW5naWZ5KFRJTUVfMjRfV0lUSF9TSE9SVF9PRkZTRVQpOlxuICAgICAgcmV0dXJuIFwiSEg6bW1cIjtcblxuICAgIGNhc2Ugc3RyaW5naWZ5KFRJTUVfMjRfV0lUSF9MT05HX09GRlNFVCk6XG4gICAgICByZXR1cm4gXCJISDptbVwiO1xuXG4gICAgY2FzZSBzdHJpbmdpZnkoREFURVRJTUVfU0hPUlQpOlxuICAgICAgcmV0dXJuIFwiTS9kL3l5eXksIGg6bW0gYVwiO1xuXG4gICAgY2FzZSBzdHJpbmdpZnkoREFURVRJTUVfTUVEKTpcbiAgICAgIHJldHVybiBcIkxMTCBkLCB5eXl5LCBoOm1tIGFcIjtcblxuICAgIGNhc2Ugc3RyaW5naWZ5KERBVEVUSU1FX0ZVTEwpOlxuICAgICAgcmV0dXJuIFwiTExMTCBkLCB5eXl5LCBoOm1tIGFcIjtcblxuICAgIGNhc2Ugc3RyaW5naWZ5KERBVEVUSU1FX0hVR0UpOlxuICAgICAgcmV0dXJuIGRhdGVUaW1lSHVnZTtcblxuICAgIGNhc2Ugc3RyaW5naWZ5KERBVEVUSU1FX1NIT1JUX1dJVEhfU0VDT05EUyk6XG4gICAgICByZXR1cm4gXCJNL2QveXl5eSwgaDptbTpzcyBhXCI7XG5cbiAgICBjYXNlIHN0cmluZ2lmeShEQVRFVElNRV9NRURfV0lUSF9TRUNPTkRTKTpcbiAgICAgIHJldHVybiBcIkxMTCBkLCB5eXl5LCBoOm1tOnNzIGFcIjtcblxuICAgIGNhc2Ugc3RyaW5naWZ5KERBVEVUSU1FX01FRF9XSVRIX1dFRUtEQVkpOlxuICAgICAgcmV0dXJuIFwiRUVFLCBkIExMTCB5eXl5LCBoOm1tIGFcIjtcblxuICAgIGNhc2Ugc3RyaW5naWZ5KERBVEVUSU1FX0ZVTExfV0lUSF9TRUNPTkRTKTpcbiAgICAgIHJldHVybiBcIkxMTEwgZCwgeXl5eSwgaDptbTpzcyBhXCI7XG5cbiAgICBjYXNlIHN0cmluZ2lmeShEQVRFVElNRV9IVUdFX1dJVEhfU0VDT05EUyk6XG4gICAgICByZXR1cm4gXCJFRUVFLCBMTExMIGQsIHl5eXksIGg6bW06c3MgYVwiO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBkYXRlVGltZUh1Z2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VG9rZW5zKHNwbGl0cywgdG9rZW5Ub1N0cmluZykge1xuICB2YXIgcyA9IFwiXCI7XG5cbiAgZm9yICh2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShzcGxpdHMpLCBfc3RlcDsgIShfc3RlcCA9IF9pdGVyYXRvcigpKS5kb25lOykge1xuICAgIHZhciB0b2tlbiA9IF9zdGVwLnZhbHVlO1xuXG4gICAgaWYgKHRva2VuLmxpdGVyYWwpIHtcbiAgICAgIHMgKz0gdG9rZW4udmFsO1xuICAgIH0gZWxzZSB7XG4gICAgICBzICs9IHRva2VuVG9TdHJpbmcodG9rZW4udmFsKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcztcbn1cblxudmFyIF9tYWNyb1Rva2VuVG9Gb3JtYXRPcHRzID0ge1xuICBEOiBEQVRFX1NIT1JULFxuICBERDogREFURV9NRUQsXG4gIERERDogREFURV9GVUxMLFxuICBEREREOiBEQVRFX0hVR0UsXG4gIHQ6IFRJTUVfU0lNUExFLFxuICB0dDogVElNRV9XSVRIX1NFQ09ORFMsXG4gIHR0dDogVElNRV9XSVRIX1NIT1JUX09GRlNFVCxcbiAgdHR0dDogVElNRV9XSVRIX0xPTkdfT0ZGU0VULFxuICBUOiBUSU1FXzI0X1NJTVBMRSxcbiAgVFQ6IFRJTUVfMjRfV0lUSF9TRUNPTkRTLFxuICBUVFQ6IFRJTUVfMjRfV0lUSF9TSE9SVF9PRkZTRVQsXG4gIFRUVFQ6IFRJTUVfMjRfV0lUSF9MT05HX09GRlNFVCxcbiAgZjogREFURVRJTUVfU0hPUlQsXG4gIGZmOiBEQVRFVElNRV9NRUQsXG4gIGZmZjogREFURVRJTUVfRlVMTCxcbiAgZmZmZjogREFURVRJTUVfSFVHRSxcbiAgRjogREFURVRJTUVfU0hPUlRfV0lUSF9TRUNPTkRTLFxuICBGRjogREFURVRJTUVfTUVEX1dJVEhfU0VDT05EUyxcbiAgRkZGOiBEQVRFVElNRV9GVUxMX1dJVEhfU0VDT05EUyxcbiAgRkZGRjogREFURVRJTUVfSFVHRV9XSVRIX1NFQ09ORFNcbn07XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIEZvcm1hdHRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIEZvcm1hdHRlci5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUobG9jYWxlLCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRm9ybWF0dGVyKGxvY2FsZSwgb3B0cyk7XG4gIH07XG5cbiAgRm9ybWF0dGVyLnBhcnNlRm9ybWF0ID0gZnVuY3Rpb24gcGFyc2VGb3JtYXQoZm10KSB7XG4gICAgdmFyIGN1cnJlbnQgPSBudWxsLFxuICAgICAgICBjdXJyZW50RnVsbCA9IFwiXCIsXG4gICAgICAgIGJyYWNrZXRlZCA9IGZhbHNlO1xuICAgIHZhciBzcGxpdHMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm10Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgYyA9IGZtdC5jaGFyQXQoaSk7XG5cbiAgICAgIGlmIChjID09PSBcIidcIikge1xuICAgICAgICBpZiAoY3VycmVudEZ1bGwubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNwbGl0cy5wdXNoKHtcbiAgICAgICAgICAgIGxpdGVyYWw6IGJyYWNrZXRlZCxcbiAgICAgICAgICAgIHZhbDogY3VycmVudEZ1bGxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnQgPSBudWxsO1xuICAgICAgICBjdXJyZW50RnVsbCA9IFwiXCI7XG4gICAgICAgIGJyYWNrZXRlZCA9ICFicmFja2V0ZWQ7XG4gICAgICB9IGVsc2UgaWYgKGJyYWNrZXRlZCkge1xuICAgICAgICBjdXJyZW50RnVsbCArPSBjO1xuICAgICAgfSBlbHNlIGlmIChjID09PSBjdXJyZW50KSB7XG4gICAgICAgIGN1cnJlbnRGdWxsICs9IGM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY3VycmVudEZ1bGwubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNwbGl0cy5wdXNoKHtcbiAgICAgICAgICAgIGxpdGVyYWw6IGZhbHNlLFxuICAgICAgICAgICAgdmFsOiBjdXJyZW50RnVsbFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudEZ1bGwgPSBjO1xuICAgICAgICBjdXJyZW50ID0gYztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY3VycmVudEZ1bGwubGVuZ3RoID4gMCkge1xuICAgICAgc3BsaXRzLnB1c2goe1xuICAgICAgICBsaXRlcmFsOiBicmFja2V0ZWQsXG4gICAgICAgIHZhbDogY3VycmVudEZ1bGxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBzcGxpdHM7XG4gIH07XG5cbiAgRm9ybWF0dGVyLm1hY3JvVG9rZW5Ub0Zvcm1hdE9wdHMgPSBmdW5jdGlvbiBtYWNyb1Rva2VuVG9Gb3JtYXRPcHRzKHRva2VuKSB7XG4gICAgcmV0dXJuIF9tYWNyb1Rva2VuVG9Gb3JtYXRPcHRzW3Rva2VuXTtcbiAgfTtcblxuICBmdW5jdGlvbiBGb3JtYXR0ZXIobG9jYWxlLCBmb3JtYXRPcHRzKSB7XG4gICAgdGhpcy5vcHRzID0gZm9ybWF0T3B0cztcbiAgICB0aGlzLmxvYyA9IGxvY2FsZTtcbiAgICB0aGlzLnN5c3RlbUxvYyA9IG51bGw7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gRm9ybWF0dGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZm9ybWF0V2l0aFN5c3RlbURlZmF1bHQgPSBmdW5jdGlvbiBmb3JtYXRXaXRoU3lzdGVtRGVmYXVsdChkdCwgb3B0cykge1xuICAgIGlmICh0aGlzLnN5c3RlbUxvYyA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zeXN0ZW1Mb2MgPSB0aGlzLmxvYy5yZWRlZmF1bHRUb1N5c3RlbSgpO1xuICAgIH1cblxuICAgIHZhciBkZiA9IHRoaXMuc3lzdGVtTG9jLmR0Rm9ybWF0dGVyKGR0LCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdHMsIG9wdHMpKTtcbiAgICByZXR1cm4gZGYuZm9ybWF0KCk7XG4gIH07XG5cbiAgX3Byb3RvLmZvcm1hdERhdGVUaW1lID0gZnVuY3Rpb24gZm9ybWF0RGF0ZVRpbWUoZHQsIG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuXG4gICAgdmFyIGRmID0gdGhpcy5sb2MuZHRGb3JtYXR0ZXIoZHQsIE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0cywgb3B0cykpO1xuICAgIHJldHVybiBkZi5mb3JtYXQoKTtcbiAgfTtcblxuICBfcHJvdG8uZm9ybWF0RGF0ZVRpbWVQYXJ0cyA9IGZ1bmN0aW9uIGZvcm1hdERhdGVUaW1lUGFydHMoZHQsIG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuXG4gICAgdmFyIGRmID0gdGhpcy5sb2MuZHRGb3JtYXR0ZXIoZHQsIE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0cywgb3B0cykpO1xuICAgIHJldHVybiBkZi5mb3JtYXRUb1BhcnRzKCk7XG4gIH07XG5cbiAgX3Byb3RvLnJlc29sdmVkT3B0aW9ucyA9IGZ1bmN0aW9uIHJlc29sdmVkT3B0aW9ucyhkdCwgb3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgZGYgPSB0aGlzLmxvYy5kdEZvcm1hdHRlcihkdCwgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRzLCBvcHRzKSk7XG4gICAgcmV0dXJuIGRmLnJlc29sdmVkT3B0aW9ucygpO1xuICB9O1xuXG4gIF9wcm90by5udW0gPSBmdW5jdGlvbiBudW0obiwgcCkge1xuICAgIGlmIChwID09PSB2b2lkIDApIHtcbiAgICAgIHAgPSAwO1xuICAgIH1cblxuICAgIC8vIHdlIGdldCBzb21lIHBlcmYgb3V0IG9mIGRvaW5nIHRoaXMgaGVyZSwgYW5ub3lpbmdseVxuICAgIGlmICh0aGlzLm9wdHMuZm9yY2VTaW1wbGUpIHtcbiAgICAgIHJldHVybiBwYWRTdGFydChuLCBwKTtcbiAgICB9XG5cbiAgICB2YXIgb3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0cyk7XG5cbiAgICBpZiAocCA+IDApIHtcbiAgICAgIG9wdHMucGFkVG8gPSBwO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmxvYy5udW1iZXJGb3JtYXR0ZXIob3B0cykuZm9ybWF0KG4pO1xuICB9O1xuXG4gIF9wcm90by5mb3JtYXREYXRlVGltZUZyb21TdHJpbmcgPSBmdW5jdGlvbiBmb3JtYXREYXRlVGltZUZyb21TdHJpbmcoZHQsIGZtdCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIga25vd25FbmdsaXNoID0gdGhpcy5sb2MubGlzdGluZ01vZGUoKSA9PT0gXCJlblwiLFxuICAgICAgICB1c2VEYXRlVGltZUZvcm1hdHRlciA9IHRoaXMubG9jLm91dHB1dENhbGVuZGFyICYmIHRoaXMubG9jLm91dHB1dENhbGVuZGFyICE9PSBcImdyZWdvcnlcIiAmJiBoYXNGb3JtYXRUb1BhcnRzKCksXG4gICAgICAgIHN0cmluZyA9IGZ1bmN0aW9uIHN0cmluZyhvcHRzLCBleHRyYWN0KSB7XG4gICAgICByZXR1cm4gX3RoaXMubG9jLmV4dHJhY3QoZHQsIG9wdHMsIGV4dHJhY3QpO1xuICAgIH0sXG4gICAgICAgIGZvcm1hdE9mZnNldCA9IGZ1bmN0aW9uIGZvcm1hdE9mZnNldChvcHRzKSB7XG4gICAgICBpZiAoZHQuaXNPZmZzZXRGaXhlZCAmJiBkdC5vZmZzZXQgPT09IDAgJiYgb3B0cy5hbGxvd1opIHtcbiAgICAgICAgcmV0dXJuIFwiWlwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZHQuaXNWYWxpZCA/IGR0LnpvbmUuZm9ybWF0T2Zmc2V0KGR0LnRzLCBvcHRzLmZvcm1hdCkgOiBcIlwiO1xuICAgIH0sXG4gICAgICAgIG1lcmlkaWVtID0gZnVuY3Rpb24gbWVyaWRpZW0oKSB7XG4gICAgICByZXR1cm4ga25vd25FbmdsaXNoID8gbWVyaWRpZW1Gb3JEYXRlVGltZShkdCkgOiBzdHJpbmcoe1xuICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgaG91cjEyOiB0cnVlXG4gICAgICB9LCBcImRheXBlcmlvZFwiKTtcbiAgICB9LFxuICAgICAgICBtb250aCA9IGZ1bmN0aW9uIG1vbnRoKGxlbmd0aCwgc3RhbmRhbG9uZSkge1xuICAgICAgcmV0dXJuIGtub3duRW5nbGlzaCA/IG1vbnRoRm9yRGF0ZVRpbWUoZHQsIGxlbmd0aCkgOiBzdHJpbmcoc3RhbmRhbG9uZSA/IHtcbiAgICAgICAgbW9udGg6IGxlbmd0aFxuICAgICAgfSA6IHtcbiAgICAgICAgbW9udGg6IGxlbmd0aCxcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIlxuICAgICAgfSwgXCJtb250aFwiKTtcbiAgICB9LFxuICAgICAgICB3ZWVrZGF5ID0gZnVuY3Rpb24gd2Vla2RheShsZW5ndGgsIHN0YW5kYWxvbmUpIHtcbiAgICAgIHJldHVybiBrbm93bkVuZ2xpc2ggPyB3ZWVrZGF5Rm9yRGF0ZVRpbWUoZHQsIGxlbmd0aCkgOiBzdHJpbmcoc3RhbmRhbG9uZSA/IHtcbiAgICAgICAgd2Vla2RheTogbGVuZ3RoXG4gICAgICB9IDoge1xuICAgICAgICB3ZWVrZGF5OiBsZW5ndGgsXG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIlxuICAgICAgfSwgXCJ3ZWVrZGF5XCIpO1xuICAgIH0sXG4gICAgICAgIG1heWJlTWFjcm8gPSBmdW5jdGlvbiBtYXliZU1hY3JvKHRva2VuKSB7XG4gICAgICB2YXIgZm9ybWF0T3B0cyA9IEZvcm1hdHRlci5tYWNyb1Rva2VuVG9Gb3JtYXRPcHRzKHRva2VuKTtcblxuICAgICAgaWYgKGZvcm1hdE9wdHMpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmZvcm1hdFdpdGhTeXN0ZW1EZWZhdWx0KGR0LCBmb3JtYXRPcHRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgIH1cbiAgICB9LFxuICAgICAgICBlcmEgPSBmdW5jdGlvbiBlcmEobGVuZ3RoKSB7XG4gICAgICByZXR1cm4ga25vd25FbmdsaXNoID8gZXJhRm9yRGF0ZVRpbWUoZHQsIGxlbmd0aCkgOiBzdHJpbmcoe1xuICAgICAgICBlcmE6IGxlbmd0aFxuICAgICAgfSwgXCJlcmFcIik7XG4gICAgfSxcbiAgICAgICAgdG9rZW5Ub1N0cmluZyA9IGZ1bmN0aW9uIHRva2VuVG9TdHJpbmcodG9rZW4pIHtcbiAgICAgIC8vIFdoZXJlIHBvc3NpYmxlOiBodHRwOi8vY2xkci51bmljb2RlLm9yZy90cmFuc2xhdGlvbi9kYXRlLXRpbWUjVE9DLVN0YW5kLUFsb25lLXZzLi1Gb3JtYXQtU3R5bGVzXG4gICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgIC8vIG1zXG4gICAgICAgIGNhc2UgXCJTXCI6XG4gICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC5taWxsaXNlY29uZCk7XG5cbiAgICAgICAgY2FzZSBcInVcIjogLy8gZmFsbHMgdGhyb3VnaFxuXG4gICAgICAgIGNhc2UgXCJTU1NcIjpcbiAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0Lm1pbGxpc2Vjb25kLCAzKTtcbiAgICAgICAgLy8gc2Vjb25kc1xuXG4gICAgICAgIGNhc2UgXCJzXCI6XG4gICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC5zZWNvbmQpO1xuXG4gICAgICAgIGNhc2UgXCJzc1wiOlxuICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQuc2Vjb25kLCAyKTtcbiAgICAgICAgLy8gbWludXRlc1xuXG4gICAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC5taW51dGUpO1xuXG4gICAgICAgIGNhc2UgXCJtbVwiOlxuICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQubWludXRlLCAyKTtcbiAgICAgICAgLy8gaG91cnNcblxuICAgICAgICBjYXNlIFwiaFwiOlxuICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQuaG91ciAlIDEyID09PSAwID8gMTIgOiBkdC5ob3VyICUgMTIpO1xuXG4gICAgICAgIGNhc2UgXCJoaFwiOlxuICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQuaG91ciAlIDEyID09PSAwID8gMTIgOiBkdC5ob3VyICUgMTIsIDIpO1xuXG4gICAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC5ob3VyKTtcblxuICAgICAgICBjYXNlIFwiSEhcIjpcbiAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0LmhvdXIsIDIpO1xuICAgICAgICAvLyBvZmZzZXRcblxuICAgICAgICBjYXNlIFwiWlwiOlxuICAgICAgICAgIC8vIGxpa2UgKzZcbiAgICAgICAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHtcbiAgICAgICAgICAgIGZvcm1hdDogXCJuYXJyb3dcIixcbiAgICAgICAgICAgIGFsbG93WjogX3RoaXMub3B0cy5hbGxvd1pcbiAgICAgICAgICB9KTtcblxuICAgICAgICBjYXNlIFwiWlpcIjpcbiAgICAgICAgICAvLyBsaWtlICswNjowMFxuICAgICAgICAgIHJldHVybiBmb3JtYXRPZmZzZXQoe1xuICAgICAgICAgICAgZm9ybWF0OiBcInNob3J0XCIsXG4gICAgICAgICAgICBhbGxvd1o6IF90aGlzLm9wdHMuYWxsb3daXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgY2FzZSBcIlpaWlwiOlxuICAgICAgICAgIC8vIGxpa2UgKzA2MDBcbiAgICAgICAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHtcbiAgICAgICAgICAgIGZvcm1hdDogXCJ0ZWNoaWVcIixcbiAgICAgICAgICAgIGFsbG93WjogX3RoaXMub3B0cy5hbGxvd1pcbiAgICAgICAgICB9KTtcblxuICAgICAgICBjYXNlIFwiWlpaWlwiOlxuICAgICAgICAgIC8vIGxpa2UgRVNUXG4gICAgICAgICAgcmV0dXJuIGR0LnpvbmUub2Zmc2V0TmFtZShkdC50cywge1xuICAgICAgICAgICAgZm9ybWF0OiBcInNob3J0XCIsXG4gICAgICAgICAgICBsb2NhbGU6IF90aGlzLmxvYy5sb2NhbGVcbiAgICAgICAgICB9KTtcblxuICAgICAgICBjYXNlIFwiWlpaWlpcIjpcbiAgICAgICAgICAvLyBsaWtlIEVhc3Rlcm4gU3RhbmRhcmQgVGltZVxuICAgICAgICAgIHJldHVybiBkdC56b25lLm9mZnNldE5hbWUoZHQudHMsIHtcbiAgICAgICAgICAgIGZvcm1hdDogXCJsb25nXCIsXG4gICAgICAgICAgICBsb2NhbGU6IF90aGlzLmxvYy5sb2NhbGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgLy8gem9uZVxuXG4gICAgICAgIGNhc2UgXCJ6XCI6XG4gICAgICAgICAgLy8gbGlrZSBBbWVyaWNhL05ld19Zb3JrXG4gICAgICAgICAgcmV0dXJuIGR0LnpvbmVOYW1lO1xuICAgICAgICAvLyBtZXJpZGllbXNcblxuICAgICAgICBjYXNlIFwiYVwiOlxuICAgICAgICAgIHJldHVybiBtZXJpZGllbSgpO1xuICAgICAgICAvLyBkYXRlc1xuXG4gICAgICAgIGNhc2UgXCJkXCI6XG4gICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyID8gc3RyaW5nKHtcbiAgICAgICAgICAgIGRheTogXCJudW1lcmljXCJcbiAgICAgICAgICB9LCBcImRheVwiKSA6IF90aGlzLm51bShkdC5kYXkpO1xuXG4gICAgICAgIGNhc2UgXCJkZFwiOlxuICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlciA/IHN0cmluZyh7XG4gICAgICAgICAgICBkYXk6IFwiMi1kaWdpdFwiXG4gICAgICAgICAgfSwgXCJkYXlcIikgOiBfdGhpcy5udW0oZHQuZGF5LCAyKTtcbiAgICAgICAgLy8gd2Vla2RheXMgLSBzdGFuZGFsb25lXG5cbiAgICAgICAgY2FzZSBcImNcIjpcbiAgICAgICAgICAvLyBsaWtlIDFcbiAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0LndlZWtkYXkpO1xuXG4gICAgICAgIGNhc2UgXCJjY2NcIjpcbiAgICAgICAgICAvLyBsaWtlICdUdWVzJ1xuICAgICAgICAgIHJldHVybiB3ZWVrZGF5KFwic2hvcnRcIiwgdHJ1ZSk7XG5cbiAgICAgICAgY2FzZSBcImNjY2NcIjpcbiAgICAgICAgICAvLyBsaWtlICdUdWVzZGF5J1xuICAgICAgICAgIHJldHVybiB3ZWVrZGF5KFwibG9uZ1wiLCB0cnVlKTtcblxuICAgICAgICBjYXNlIFwiY2NjY2NcIjpcbiAgICAgICAgICAvLyBsaWtlICdUJ1xuICAgICAgICAgIHJldHVybiB3ZWVrZGF5KFwibmFycm93XCIsIHRydWUpO1xuICAgICAgICAvLyB3ZWVrZGF5cyAtIGZvcm1hdFxuXG4gICAgICAgIGNhc2UgXCJFXCI6XG4gICAgICAgICAgLy8gbGlrZSAxXG4gICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC53ZWVrZGF5KTtcblxuICAgICAgICBjYXNlIFwiRUVFXCI6XG4gICAgICAgICAgLy8gbGlrZSAnVHVlcydcbiAgICAgICAgICByZXR1cm4gd2Vla2RheShcInNob3J0XCIsIGZhbHNlKTtcblxuICAgICAgICBjYXNlIFwiRUVFRVwiOlxuICAgICAgICAgIC8vIGxpa2UgJ1R1ZXNkYXknXG4gICAgICAgICAgcmV0dXJuIHdlZWtkYXkoXCJsb25nXCIsIGZhbHNlKTtcblxuICAgICAgICBjYXNlIFwiRUVFRUVcIjpcbiAgICAgICAgICAvLyBsaWtlICdUJ1xuICAgICAgICAgIHJldHVybiB3ZWVrZGF5KFwibmFycm93XCIsIGZhbHNlKTtcbiAgICAgICAgLy8gbW9udGhzIC0gc3RhbmRhbG9uZVxuXG4gICAgICAgIGNhc2UgXCJMXCI6XG4gICAgICAgICAgLy8gbGlrZSAxXG4gICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyID8gc3RyaW5nKHtcbiAgICAgICAgICAgIG1vbnRoOiBcIm51bWVyaWNcIixcbiAgICAgICAgICAgIGRheTogXCJudW1lcmljXCJcbiAgICAgICAgICB9LCBcIm1vbnRoXCIpIDogX3RoaXMubnVtKGR0Lm1vbnRoKTtcblxuICAgICAgICBjYXNlIFwiTExcIjpcbiAgICAgICAgICAvLyBsaWtlIDAxLCBkb2Vzbid0IHNlZW0gdG8gd29ya1xuICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlciA/IHN0cmluZyh7XG4gICAgICAgICAgICBtb250aDogXCIyLWRpZ2l0XCIsXG4gICAgICAgICAgICBkYXk6IFwibnVtZXJpY1wiXG4gICAgICAgICAgfSwgXCJtb250aFwiKSA6IF90aGlzLm51bShkdC5tb250aCwgMik7XG5cbiAgICAgICAgY2FzZSBcIkxMTFwiOlxuICAgICAgICAgIC8vIGxpa2UgSmFuXG4gICAgICAgICAgcmV0dXJuIG1vbnRoKFwic2hvcnRcIiwgdHJ1ZSk7XG5cbiAgICAgICAgY2FzZSBcIkxMTExcIjpcbiAgICAgICAgICAvLyBsaWtlIEphbnVhcnlcbiAgICAgICAgICByZXR1cm4gbW9udGgoXCJsb25nXCIsIHRydWUpO1xuXG4gICAgICAgIGNhc2UgXCJMTExMTFwiOlxuICAgICAgICAgIC8vIGxpa2UgSlxuICAgICAgICAgIHJldHVybiBtb250aChcIm5hcnJvd1wiLCB0cnVlKTtcbiAgICAgICAgLy8gbW9udGhzIC0gZm9ybWF0XG5cbiAgICAgICAgY2FzZSBcIk1cIjpcbiAgICAgICAgICAvLyBsaWtlIDFcbiAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPyBzdHJpbmcoe1xuICAgICAgICAgICAgbW9udGg6IFwibnVtZXJpY1wiXG4gICAgICAgICAgfSwgXCJtb250aFwiKSA6IF90aGlzLm51bShkdC5tb250aCk7XG5cbiAgICAgICAgY2FzZSBcIk1NXCI6XG4gICAgICAgICAgLy8gbGlrZSAwMVxuICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlciA/IHN0cmluZyh7XG4gICAgICAgICAgICBtb250aDogXCIyLWRpZ2l0XCJcbiAgICAgICAgICB9LCBcIm1vbnRoXCIpIDogX3RoaXMubnVtKGR0Lm1vbnRoLCAyKTtcblxuICAgICAgICBjYXNlIFwiTU1NXCI6XG4gICAgICAgICAgLy8gbGlrZSBKYW5cbiAgICAgICAgICByZXR1cm4gbW9udGgoXCJzaG9ydFwiLCBmYWxzZSk7XG5cbiAgICAgICAgY2FzZSBcIk1NTU1cIjpcbiAgICAgICAgICAvLyBsaWtlIEphbnVhcnlcbiAgICAgICAgICByZXR1cm4gbW9udGgoXCJsb25nXCIsIGZhbHNlKTtcblxuICAgICAgICBjYXNlIFwiTU1NTU1cIjpcbiAgICAgICAgICAvLyBsaWtlIEpcbiAgICAgICAgICByZXR1cm4gbW9udGgoXCJuYXJyb3dcIiwgZmFsc2UpO1xuICAgICAgICAvLyB5ZWFyc1xuXG4gICAgICAgIGNhc2UgXCJ5XCI6XG4gICAgICAgICAgLy8gbGlrZSAyMDE0XG4gICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyID8gc3RyaW5nKHtcbiAgICAgICAgICAgIHllYXI6IFwibnVtZXJpY1wiXG4gICAgICAgICAgfSwgXCJ5ZWFyXCIpIDogX3RoaXMubnVtKGR0LnllYXIpO1xuXG4gICAgICAgIGNhc2UgXCJ5eVwiOlxuICAgICAgICAgIC8vIGxpa2UgMTRcbiAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPyBzdHJpbmcoe1xuICAgICAgICAgICAgeWVhcjogXCIyLWRpZ2l0XCJcbiAgICAgICAgICB9LCBcInllYXJcIikgOiBfdGhpcy5udW0oZHQueWVhci50b1N0cmluZygpLnNsaWNlKC0yKSwgMik7XG5cbiAgICAgICAgY2FzZSBcInl5eXlcIjpcbiAgICAgICAgICAvLyBsaWtlIDAwMTJcbiAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPyBzdHJpbmcoe1xuICAgICAgICAgICAgeWVhcjogXCJudW1lcmljXCJcbiAgICAgICAgICB9LCBcInllYXJcIikgOiBfdGhpcy5udW0oZHQueWVhciwgNCk7XG5cbiAgICAgICAgY2FzZSBcInl5eXl5eVwiOlxuICAgICAgICAgIC8vIGxpa2UgMDAwMDEyXG4gICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyID8gc3RyaW5nKHtcbiAgICAgICAgICAgIHllYXI6IFwibnVtZXJpY1wiXG4gICAgICAgICAgfSwgXCJ5ZWFyXCIpIDogX3RoaXMubnVtKGR0LnllYXIsIDYpO1xuICAgICAgICAvLyBlcmFzXG5cbiAgICAgICAgY2FzZSBcIkdcIjpcbiAgICAgICAgICAvLyBsaWtlIEFEXG4gICAgICAgICAgcmV0dXJuIGVyYShcInNob3J0XCIpO1xuXG4gICAgICAgIGNhc2UgXCJHR1wiOlxuICAgICAgICAgIC8vIGxpa2UgQW5ubyBEb21pbmlcbiAgICAgICAgICByZXR1cm4gZXJhKFwibG9uZ1wiKTtcblxuICAgICAgICBjYXNlIFwiR0dHR0dcIjpcbiAgICAgICAgICByZXR1cm4gZXJhKFwibmFycm93XCIpO1xuXG4gICAgICAgIGNhc2UgXCJra1wiOlxuICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQud2Vla1llYXIudG9TdHJpbmcoKS5zbGljZSgtMiksIDIpO1xuXG4gICAgICAgIGNhc2UgXCJra2trXCI6XG4gICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC53ZWVrWWVhciwgNCk7XG5cbiAgICAgICAgY2FzZSBcIldcIjpcbiAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0LndlZWtOdW1iZXIpO1xuXG4gICAgICAgIGNhc2UgXCJXV1wiOlxuICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQud2Vla051bWJlciwgMik7XG5cbiAgICAgICAgY2FzZSBcIm9cIjpcbiAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0Lm9yZGluYWwpO1xuXG4gICAgICAgIGNhc2UgXCJvb29cIjpcbiAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0Lm9yZGluYWwsIDMpO1xuXG4gICAgICAgIGNhc2UgXCJxXCI6XG4gICAgICAgICAgLy8gbGlrZSAxXG4gICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC5xdWFydGVyKTtcblxuICAgICAgICBjYXNlIFwicXFcIjpcbiAgICAgICAgICAvLyBsaWtlIDAxXG4gICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC5xdWFydGVyLCAyKTtcblxuICAgICAgICBjYXNlIFwiWFwiOlxuICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oTWF0aC5mbG9vcihkdC50cyAvIDEwMDApKTtcblxuICAgICAgICBjYXNlIFwieFwiOlxuICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQudHMpO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG1heWJlTWFjcm8odG9rZW4pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gc3RyaW5naWZ5VG9rZW5zKEZvcm1hdHRlci5wYXJzZUZvcm1hdChmbXQpLCB0b2tlblRvU3RyaW5nKTtcbiAgfTtcblxuICBfcHJvdG8uZm9ybWF0RHVyYXRpb25Gcm9tU3RyaW5nID0gZnVuY3Rpb24gZm9ybWF0RHVyYXRpb25Gcm9tU3RyaW5nKGR1ciwgZm10KSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgdG9rZW5Ub0ZpZWxkID0gZnVuY3Rpb24gdG9rZW5Ub0ZpZWxkKHRva2VuKSB7XG4gICAgICBzd2l0Y2ggKHRva2VuWzBdKSB7XG4gICAgICAgIGNhc2UgXCJTXCI6XG4gICAgICAgICAgcmV0dXJuIFwibWlsbGlzZWNvbmRcIjtcblxuICAgICAgICBjYXNlIFwic1wiOlxuICAgICAgICAgIHJldHVybiBcInNlY29uZFwiO1xuXG4gICAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgICAgcmV0dXJuIFwibWludXRlXCI7XG5cbiAgICAgICAgY2FzZSBcImhcIjpcbiAgICAgICAgICByZXR1cm4gXCJob3VyXCI7XG5cbiAgICAgICAgY2FzZSBcImRcIjpcbiAgICAgICAgICByZXR1cm4gXCJkYXlcIjtcblxuICAgICAgICBjYXNlIFwiTVwiOlxuICAgICAgICAgIHJldHVybiBcIm1vbnRoXCI7XG5cbiAgICAgICAgY2FzZSBcInlcIjpcbiAgICAgICAgICByZXR1cm4gXCJ5ZWFyXCI7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9LFxuICAgICAgICB0b2tlblRvU3RyaW5nID0gZnVuY3Rpb24gdG9rZW5Ub1N0cmluZyhsaWxkdXIpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgdmFyIG1hcHBlZCA9IHRva2VuVG9GaWVsZCh0b2tlbik7XG5cbiAgICAgICAgaWYgKG1hcHBlZCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIubnVtKGxpbGR1ci5nZXQobWFwcGVkKSwgdG9rZW4ubGVuZ3RoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSxcbiAgICAgICAgdG9rZW5zID0gRm9ybWF0dGVyLnBhcnNlRm9ybWF0KGZtdCksXG4gICAgICAgIHJlYWxUb2tlbnMgPSB0b2tlbnMucmVkdWNlKGZ1bmN0aW9uIChmb3VuZCwgX3JlZikge1xuICAgICAgdmFyIGxpdGVyYWwgPSBfcmVmLmxpdGVyYWwsXG4gICAgICAgICAgdmFsID0gX3JlZi52YWw7XG4gICAgICByZXR1cm4gbGl0ZXJhbCA/IGZvdW5kIDogZm91bmQuY29uY2F0KHZhbCk7XG4gICAgfSwgW10pLFxuICAgICAgICBjb2xsYXBzZWQgPSBkdXIuc2hpZnRUby5hcHBseShkdXIsIHJlYWxUb2tlbnMubWFwKHRva2VuVG9GaWVsZCkuZmlsdGVyKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdDtcbiAgICB9KSk7XG5cbiAgICByZXR1cm4gc3RyaW5naWZ5VG9rZW5zKHRva2VucywgdG9rZW5Ub1N0cmluZyhjb2xsYXBzZWQpKTtcbiAgfTtcblxuICByZXR1cm4gRm9ybWF0dGVyO1xufSgpO1xuXG52YXIgSW52YWxpZCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEludmFsaWQocmVhc29uLCBleHBsYW5hdGlvbikge1xuICAgIHRoaXMucmVhc29uID0gcmVhc29uO1xuICAgIHRoaXMuZXhwbGFuYXRpb24gPSBleHBsYW5hdGlvbjtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBJbnZhbGlkLnByb3RvdHlwZTtcblxuICBfcHJvdG8udG9NZXNzYWdlID0gZnVuY3Rpb24gdG9NZXNzYWdlKCkge1xuICAgIGlmICh0aGlzLmV4cGxhbmF0aW9uKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWFzb24gKyBcIjogXCIgKyB0aGlzLmV4cGxhbmF0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWFzb247XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBJbnZhbGlkO1xufSgpO1xuXG4vKipcbiAqIEBpbnRlcmZhY2VcbiAqL1xuXG52YXIgWm9uZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFpvbmUoKSB7fVxuXG4gIHZhciBfcHJvdG8gPSBab25lLnByb3RvdHlwZTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2Zmc2V0J3MgY29tbW9uIG5hbWUgKHN1Y2ggYXMgRVNUKSBhdCB0aGUgc3BlY2lmaWVkIHRpbWVzdGFtcFxuICAgKiBAYWJzdHJhY3RcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRzIC0gRXBvY2ggbWlsbGlzZWNvbmRzIGZvciB3aGljaCB0byBnZXQgdGhlIG5hbWVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBPcHRpb25zIHRvIGFmZmVjdCB0aGUgZm9ybWF0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLmZvcm1hdCAtIFdoYXQgc3R5bGUgb2Ygb2Zmc2V0IHRvIHJldHVybi4gQWNjZXB0cyAnbG9uZycgb3IgJ3Nob3J0Jy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubG9jYWxlIC0gV2hhdCBsb2NhbGUgdG8gcmV0dXJuIHRoZSBvZmZzZXQgbmFtZSBpbi5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgX3Byb3RvLm9mZnNldE5hbWUgPSBmdW5jdGlvbiBvZmZzZXROYW1lKHRzLCBvcHRzKSB7XG4gICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2Zmc2V0J3MgdmFsdWUgYXMgYSBzdHJpbmdcbiAgICogQGFic3RyYWN0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0cyAtIEVwb2NoIG1pbGxpc2Vjb25kcyBmb3Igd2hpY2ggdG8gZ2V0IHRoZSBvZmZzZXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZvcm1hdCAtIFdoYXQgc3R5bGUgb2Ygb2Zmc2V0IHRvIHJldHVybi5cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgIEFjY2VwdHMgJ25hcnJvdycsICdzaG9ydCcsIG9yICd0ZWNoaWUnLiBSZXR1cm5pbmcgJys2JywgJyswNjowMCcsIG9yICcrMDYwMCcgcmVzcGVjdGl2ZWx5XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZm9ybWF0T2Zmc2V0ID0gZnVuY3Rpb24gZm9ybWF0T2Zmc2V0KHRzLCBmb3JtYXQpIHtcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIG9mZnNldCBpbiBtaW51dGVzIGZvciB0aGlzIHpvbmUgYXQgdGhlIHNwZWNpZmllZCB0aW1lc3RhbXAuXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAcGFyYW0ge251bWJlcn0gdHMgLSBFcG9jaCBtaWxsaXNlY29uZHMgZm9yIHdoaWNoIHRvIGNvbXB1dGUgdGhlIG9mZnNldFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm9mZnNldCA9IGZ1bmN0aW9uIG9mZnNldCh0cykge1xuICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgWm9uZSBpcyBlcXVhbCB0byBhbm90aGVyIHpvbmVcbiAgICogQGFic3RyYWN0XG4gICAqIEBwYXJhbSB7Wm9uZX0gb3RoZXJab25lIC0gdGhlIHpvbmUgdG8gY29tcGFyZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMob3RoZXJab25lKSB7XG4gICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBab25lIGlzIHZhbGlkLlxuICAgKiBAYWJzdHJhY3RcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICA7XG5cbiAgX2NyZWF0ZUNsYXNzKFpvbmUsIFt7XG4gICAga2V5OiBcInR5cGVcIixcblxuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIHpvbmVcbiAgICAgKiBAYWJzdHJhY3RcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgdGhpcyB6b25lLlxuICAgICAqIEBhYnN0cmFjdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJuYW1lXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIG9mZnNldCBpcyBrbm93biB0byBiZSBmaXhlZCBmb3IgdGhlIHdob2xlIHllYXIuXG4gICAgICogQGFic3RyYWN0XG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ1bml2ZXJzYWxcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzVmFsaWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFpvbmU7XG59KCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBsb2NhbCB6b25lIGZvciB0aGlzIEphdmFzY3JpcHQgZW52aXJvbm1lbnQuXG4gKiBAaW1wbGVtZW50cyB7Wm9uZX1cbiAqL1xuXG52YXIgTG9jYWxab25lID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfWm9uZSkge1xuICBfaW5oZXJpdHNMb29zZShMb2NhbFpvbmUsIF9ab25lKTtcblxuICBmdW5jdGlvbiBMb2NhbFpvbmUoKSB7XG4gICAgcmV0dXJuIF9ab25lLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBMb2NhbFpvbmUucHJvdG90eXBlO1xuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIF9wcm90by5vZmZzZXROYW1lID0gZnVuY3Rpb24gb2Zmc2V0TmFtZSh0cywgX3JlZikge1xuICAgIHZhciBmb3JtYXQgPSBfcmVmLmZvcm1hdCxcbiAgICAgICAgbG9jYWxlID0gX3JlZi5sb2NhbGU7XG4gICAgcmV0dXJuIHBhcnNlWm9uZUluZm8odHMsIGZvcm1hdCwgbG9jYWxlKTtcbiAgfVxuICAvKiogQG92ZXJyaWRlICoqL1xuICA7XG5cbiAgX3Byb3RvLmZvcm1hdE9mZnNldCA9IGZ1bmN0aW9uIGZvcm1hdE9mZnNldCQxKHRzLCBmb3JtYXQpIHtcbiAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHRoaXMub2Zmc2V0KHRzKSwgZm9ybWF0KTtcbiAgfVxuICAvKiogQG92ZXJyaWRlICoqL1xuICA7XG5cbiAgX3Byb3RvLm9mZnNldCA9IGZ1bmN0aW9uIG9mZnNldCh0cykge1xuICAgIHJldHVybiAtbmV3IERhdGUodHMpLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gIH1cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgO1xuXG4gIF9wcm90by5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMob3RoZXJab25lKSB7XG4gICAgcmV0dXJuIG90aGVyWm9uZS50eXBlID09PSBcImxvY2FsXCI7XG4gIH1cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgO1xuXG4gIF9jcmVhdGVDbGFzcyhMb2NhbFpvbmUsIFt7XG4gICAga2V5OiBcInR5cGVcIixcblxuICAgIC8qKiBAb3ZlcnJpZGUgKiovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gXCJsb2NhbFwiO1xuICAgIH1cbiAgICAvKiogQG92ZXJyaWRlICoqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibmFtZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgaWYgKGhhc0ludGwoKSkge1xuICAgICAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS50aW1lWm9uZTtcbiAgICAgIH0gZWxzZSByZXR1cm4gXCJsb2NhbFwiO1xuICAgIH1cbiAgICAvKiogQG92ZXJyaWRlICoqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidW5pdmVyc2FsXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzVmFsaWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImluc3RhbmNlXCIsXG5cbiAgICAvKipcbiAgICAgKiBHZXQgYSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIGxvY2FsIHpvbmVcbiAgICAgKiBAcmV0dXJuIHtMb2NhbFpvbmV9XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAoc2luZ2xldG9uID09PSBudWxsKSB7XG4gICAgICAgIHNpbmdsZXRvbiA9IG5ldyBMb2NhbFpvbmUoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNpbmdsZXRvbjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTG9jYWxab25lO1xufShab25lKTtcblxudmFyIG1hdGNoaW5nUmVnZXggPSBSZWdFeHAoXCJeXCIgKyBpYW5hUmVnZXguc291cmNlICsgXCIkXCIpO1xudmFyIGR0ZkNhY2hlID0ge307XG5cbmZ1bmN0aW9uIG1ha2VEVEYoem9uZSkge1xuICBpZiAoIWR0ZkNhY2hlW3pvbmVdKSB7XG4gICAgZHRmQ2FjaGVbem9uZV0gPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVuLVVTXCIsIHtcbiAgICAgIGhvdXIxMjogZmFsc2UsXG4gICAgICB0aW1lWm9uZTogem9uZSxcbiAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgbW9udGg6IFwiMi1kaWdpdFwiLFxuICAgICAgZGF5OiBcIjItZGlnaXRcIixcbiAgICAgIGhvdXI6IFwiMi1kaWdpdFwiLFxuICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICAgIHNlY29uZDogXCIyLWRpZ2l0XCJcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBkdGZDYWNoZVt6b25lXTtcbn1cblxudmFyIHR5cGVUb1BvcyA9IHtcbiAgeWVhcjogMCxcbiAgbW9udGg6IDEsXG4gIGRheTogMixcbiAgaG91cjogMyxcbiAgbWludXRlOiA0LFxuICBzZWNvbmQ6IDVcbn07XG5cbmZ1bmN0aW9uIGhhY2t5T2Zmc2V0KGR0ZiwgZGF0ZSkge1xuICB2YXIgZm9ybWF0dGVkID0gZHRmLmZvcm1hdChkYXRlKS5yZXBsYWNlKC9cXHUyMDBFL2csIFwiXCIpLFxuICAgICAgcGFyc2VkID0gLyhcXGQrKVxcLyhcXGQrKVxcLyhcXGQrKSw/IChcXGQrKTooXFxkKyk6KFxcZCspLy5leGVjKGZvcm1hdHRlZCksXG4gICAgICBmTW9udGggPSBwYXJzZWRbMV0sXG4gICAgICBmRGF5ID0gcGFyc2VkWzJdLFxuICAgICAgZlllYXIgPSBwYXJzZWRbM10sXG4gICAgICBmSG91ciA9IHBhcnNlZFs0XSxcbiAgICAgIGZNaW51dGUgPSBwYXJzZWRbNV0sXG4gICAgICBmU2Vjb25kID0gcGFyc2VkWzZdO1xuICByZXR1cm4gW2ZZZWFyLCBmTW9udGgsIGZEYXksIGZIb3VyLCBmTWludXRlLCBmU2Vjb25kXTtcbn1cblxuZnVuY3Rpb24gcGFydHNPZmZzZXQoZHRmLCBkYXRlKSB7XG4gIHZhciBmb3JtYXR0ZWQgPSBkdGYuZm9ybWF0VG9QYXJ0cyhkYXRlKSxcbiAgICAgIGZpbGxlZCA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZm9ybWF0dGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIF9mb3JtYXR0ZWQkaSA9IGZvcm1hdHRlZFtpXSxcbiAgICAgICAgdHlwZSA9IF9mb3JtYXR0ZWQkaS50eXBlLFxuICAgICAgICB2YWx1ZSA9IF9mb3JtYXR0ZWQkaS52YWx1ZSxcbiAgICAgICAgcG9zID0gdHlwZVRvUG9zW3R5cGVdO1xuXG4gICAgaWYgKCFpc1VuZGVmaW5lZChwb3MpKSB7XG4gICAgICBmaWxsZWRbcG9zXSA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZpbGxlZDtcbn1cblxudmFyIGlhbmFab25lQ2FjaGUgPSB7fTtcbi8qKlxuICogQSB6b25lIGlkZW50aWZpZWQgYnkgYW4gSUFOQSBpZGVudGlmaWVyLCBsaWtlIEFtZXJpY2EvTmV3X1lvcmtcbiAqIEBpbXBsZW1lbnRzIHtab25lfVxuICovXG5cbnZhciBJQU5BWm9uZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1pvbmUpIHtcbiAgX2luaGVyaXRzTG9vc2UoSUFOQVpvbmUsIF9ab25lKTtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBab25lIG5hbWVcbiAgICogQHJldHVybiB7SUFOQVpvbmV9XG4gICAqL1xuICBJQU5BWm9uZS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUobmFtZSkge1xuICAgIGlmICghaWFuYVpvbmVDYWNoZVtuYW1lXSkge1xuICAgICAgaWFuYVpvbmVDYWNoZVtuYW1lXSA9IG5ldyBJQU5BWm9uZShuYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaWFuYVpvbmVDYWNoZVtuYW1lXTtcbiAgfVxuICAvKipcbiAgICogUmVzZXQgbG9jYWwgY2FjaGVzLiBTaG91bGQgb25seSBiZSBuZWNlc3NhcnkgaW4gdGVzdGluZyBzY2VuYXJpb3MuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICA7XG5cbiAgSUFOQVpvbmUucmVzZXRDYWNoZSA9IGZ1bmN0aW9uIHJlc2V0Q2FjaGUoKSB7XG4gICAgaWFuYVpvbmVDYWNoZSA9IHt9O1xuICAgIGR0ZkNhY2hlID0ge307XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgcHJvdmlkZWQgc3RyaW5nIGlzIGEgdmFsaWQgc3BlY2lmaWVyLiBUaGlzIG9ubHkgY2hlY2tzIHRoZSBzdHJpbmcncyBmb3JtYXQsIG5vdCB0aGF0IHRoZSBzcGVjaWZpZXIgaWRlbnRpZmllcyBhIGtub3duIHpvbmU7IHNlZSBpc1ZhbGlkWm9uZSBmb3IgdGhhdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHMgLSBUaGUgc3RyaW5nIHRvIGNoZWNrIHZhbGlkaXR5IG9uXG4gICAqIEBleGFtcGxlIElBTkFab25lLmlzVmFsaWRTcGVjaWZpZXIoXCJBbWVyaWNhL05ld19Zb3JrXCIpIC8vPT4gdHJ1ZVxuICAgKiBAZXhhbXBsZSBJQU5BWm9uZS5pc1ZhbGlkU3BlY2lmaWVyKFwiRmFudGFzaWEvQ2FzdGxlXCIpIC8vPT4gdHJ1ZVxuICAgKiBAZXhhbXBsZSBJQU5BWm9uZS5pc1ZhbGlkU3BlY2lmaWVyKFwiU3BvcnR+fmJsb3JwXCIpIC8vPT4gZmFsc2VcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIDtcblxuICBJQU5BWm9uZS5pc1ZhbGlkU3BlY2lmaWVyID0gZnVuY3Rpb24gaXNWYWxpZFNwZWNpZmllcihzKSB7XG4gICAgcmV0dXJuICEhKHMgJiYgcy5tYXRjaChtYXRjaGluZ1JlZ2V4KSk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgcHJvdmlkZWQgc3RyaW5nIGlkZW50aWZpZXMgYSByZWFsIHpvbmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHpvbmUgLSBUaGUgc3RyaW5nIHRvIGNoZWNrXG4gICAqIEBleGFtcGxlIElBTkFab25lLmlzVmFsaWRab25lKFwiQW1lcmljYS9OZXdfWW9ya1wiKSAvLz0+IHRydWVcbiAgICogQGV4YW1wbGUgSUFOQVpvbmUuaXNWYWxpZFpvbmUoXCJGYW50YXNpYS9DYXN0bGVcIikgLy89PiBmYWxzZVxuICAgKiBAZXhhbXBsZSBJQU5BWm9uZS5pc1ZhbGlkWm9uZShcIlNwb3J0fn5ibG9ycFwiKSAvLz0+IGZhbHNlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICA7XG5cbiAgSUFOQVpvbmUuaXNWYWxpZFpvbmUgPSBmdW5jdGlvbiBpc1ZhbGlkWm9uZSh6b25lKSB7XG4gICAgdHJ5IHtcbiAgICAgIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KFwiZW4tVVNcIiwge1xuICAgICAgICB0aW1lWm9uZTogem9uZVxuICAgICAgfSkuZm9ybWF0KCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IC8vIEV0Yy9HTVQrOCAtPiAtNDgwXG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgO1xuXG4gIElBTkFab25lLnBhcnNlR01UT2Zmc2V0ID0gZnVuY3Rpb24gcGFyc2VHTVRPZmZzZXQoc3BlY2lmaWVyKSB7XG4gICAgaWYgKHNwZWNpZmllcikge1xuICAgICAgdmFyIG1hdGNoID0gc3BlY2lmaWVyLm1hdGNoKC9eRXRjXFwvR01UKFsrLV1cXGR7MSwyfSkkL2kpO1xuXG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIC02MCAqIHBhcnNlSW50KG1hdGNoWzFdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBmdW5jdGlvbiBJQU5BWm9uZShuYW1lKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfWm9uZS5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgLyoqIEBwcml2YXRlICoqL1xuXG4gICAgX3RoaXMuem9uZU5hbWUgPSBuYW1lO1xuICAgIC8qKiBAcHJpdmF0ZSAqKi9cblxuICAgIF90aGlzLnZhbGlkID0gSUFOQVpvbmUuaXNWYWxpZFpvbmUobmFtZSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIC8qKiBAb3ZlcnJpZGUgKiovXG5cblxuICB2YXIgX3Byb3RvID0gSUFOQVpvbmUucHJvdG90eXBlO1xuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIF9wcm90by5vZmZzZXROYW1lID0gZnVuY3Rpb24gb2Zmc2V0TmFtZSh0cywgX3JlZikge1xuICAgIHZhciBmb3JtYXQgPSBfcmVmLmZvcm1hdCxcbiAgICAgICAgbG9jYWxlID0gX3JlZi5sb2NhbGU7XG4gICAgcmV0dXJuIHBhcnNlWm9uZUluZm8odHMsIGZvcm1hdCwgbG9jYWxlLCB0aGlzLm5hbWUpO1xuICB9XG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIDtcblxuICBfcHJvdG8uZm9ybWF0T2Zmc2V0ID0gZnVuY3Rpb24gZm9ybWF0T2Zmc2V0JDEodHMsIGZvcm1hdCkge1xuICAgIHJldHVybiBmb3JtYXRPZmZzZXQodGhpcy5vZmZzZXQodHMpLCBmb3JtYXQpO1xuICB9XG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIDtcblxuICBfcHJvdG8ub2Zmc2V0ID0gZnVuY3Rpb24gb2Zmc2V0KHRzKSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSh0cyksXG4gICAgICAgIGR0ZiA9IG1ha2VEVEYodGhpcy5uYW1lKSxcbiAgICAgICAgX3JlZjIgPSBkdGYuZm9ybWF0VG9QYXJ0cyA/IHBhcnRzT2Zmc2V0KGR0ZiwgZGF0ZSkgOiBoYWNreU9mZnNldChkdGYsIGRhdGUpLFxuICAgICAgICB5ZWFyID0gX3JlZjJbMF0sXG4gICAgICAgIG1vbnRoID0gX3JlZjJbMV0sXG4gICAgICAgIGRheSA9IF9yZWYyWzJdLFxuICAgICAgICBob3VyID0gX3JlZjJbM10sXG4gICAgICAgIG1pbnV0ZSA9IF9yZWYyWzRdLFxuICAgICAgICBzZWNvbmQgPSBfcmVmMls1XSxcbiAgICAgICAgYWRqdXN0ZWRIb3VyID0gaG91ciA9PT0gMjQgPyAwIDogaG91cjtcblxuICAgIHZhciBhc1VUQyA9IG9ialRvTG9jYWxUUyh7XG4gICAgICB5ZWFyOiB5ZWFyLFxuICAgICAgbW9udGg6IG1vbnRoLFxuICAgICAgZGF5OiBkYXksXG4gICAgICBob3VyOiBhZGp1c3RlZEhvdXIsXG4gICAgICBtaW51dGU6IG1pbnV0ZSxcbiAgICAgIHNlY29uZDogc2Vjb25kLFxuICAgICAgbWlsbGlzZWNvbmQ6IDBcbiAgICB9KTtcbiAgICB2YXIgYXNUUyA9ICtkYXRlO1xuICAgIHZhciBvdmVyID0gYXNUUyAlIDEwMDA7XG4gICAgYXNUUyAtPSBvdmVyID49IDAgPyBvdmVyIDogMTAwMCArIG92ZXI7XG4gICAgcmV0dXJuIChhc1VUQyAtIGFzVFMpIC8gKDYwICogMTAwMCk7XG4gIH1cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgO1xuXG4gIF9wcm90by5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMob3RoZXJab25lKSB7XG4gICAgcmV0dXJuIG90aGVyWm9uZS50eXBlID09PSBcImlhbmFcIiAmJiBvdGhlclpvbmUubmFtZSA9PT0gdGhpcy5uYW1lO1xuICB9XG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIDtcblxuICBfY3JlYXRlQ2xhc3MoSUFOQVpvbmUsIFt7XG4gICAga2V5OiBcInR5cGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBcImlhbmFcIjtcbiAgICB9XG4gICAgLyoqIEBvdmVycmlkZSAqKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm5hbWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnpvbmVOYW1lO1xuICAgIH1cbiAgICAvKiogQG92ZXJyaWRlICoqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidW5pdmVyc2FsXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzVmFsaWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbGlkO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBJQU5BWm9uZTtcbn0oWm9uZSk7XG5cbnZhciBzaW5nbGV0b24kMSA9IG51bGw7XG4vKipcbiAqIEEgem9uZSB3aXRoIGEgZml4ZWQgb2Zmc2V0IChtZWFuaW5nIG5vIERTVClcbiAqIEBpbXBsZW1lbnRzIHtab25lfVxuICovXG5cbnZhciBGaXhlZE9mZnNldFpvbmUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9ab25lKSB7XG4gIF9pbmhlcml0c0xvb3NlKEZpeGVkT2Zmc2V0Wm9uZSwgX1pvbmUpO1xuXG4gIC8qKlxuICAgKiBHZXQgYW4gaW5zdGFuY2Ugd2l0aCBhIHNwZWNpZmllZCBvZmZzZXRcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCAtIFRoZSBvZmZzZXQgaW4gbWludXRlc1xuICAgKiBAcmV0dXJuIHtGaXhlZE9mZnNldFpvbmV9XG4gICAqL1xuICBGaXhlZE9mZnNldFpvbmUuaW5zdGFuY2UgPSBmdW5jdGlvbiBpbnN0YW5jZShvZmZzZXQpIHtcbiAgICByZXR1cm4gb2Zmc2V0ID09PSAwID8gRml4ZWRPZmZzZXRab25lLnV0Y0luc3RhbmNlIDogbmV3IEZpeGVkT2Zmc2V0Wm9uZShvZmZzZXQpO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgYW4gaW5zdGFuY2Ugb2YgRml4ZWRPZmZzZXRab25lIGZyb20gYSBVVEMgb2Zmc2V0IHN0cmluZywgbGlrZSBcIlVUQys2XCJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHMgLSBUaGUgb2Zmc2V0IHN0cmluZyB0byBwYXJzZVxuICAgKiBAZXhhbXBsZSBGaXhlZE9mZnNldFpvbmUucGFyc2VTcGVjaWZpZXIoXCJVVEMrNlwiKVxuICAgKiBAZXhhbXBsZSBGaXhlZE9mZnNldFpvbmUucGFyc2VTcGVjaWZpZXIoXCJVVEMrMDZcIilcbiAgICogQGV4YW1wbGUgRml4ZWRPZmZzZXRab25lLnBhcnNlU3BlY2lmaWVyKFwiVVRDLTY6MDBcIilcbiAgICogQHJldHVybiB7Rml4ZWRPZmZzZXRab25lfVxuICAgKi9cbiAgO1xuXG4gIEZpeGVkT2Zmc2V0Wm9uZS5wYXJzZVNwZWNpZmllciA9IGZ1bmN0aW9uIHBhcnNlU3BlY2lmaWVyKHMpIHtcbiAgICBpZiAocykge1xuICAgICAgdmFyIHIgPSBzLm1hdGNoKC9edXRjKD86KFsrLV1cXGR7MSwyfSkoPzo6KFxcZHsyfSkpPyk/JC9pKTtcblxuICAgICAgaWYgKHIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBGaXhlZE9mZnNldFpvbmUoc2lnbmVkT2Zmc2V0KHJbMV0sIHJbMl0pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoRml4ZWRPZmZzZXRab25lLCBudWxsLCBbe1xuICAgIGtleTogXCJ1dGNJbnN0YW5jZVwiLFxuXG4gICAgLyoqXG4gICAgICogR2V0IGEgc2luZ2xldG9uIGluc3RhbmNlIG9mIFVUQ1xuICAgICAqIEByZXR1cm4ge0ZpeGVkT2Zmc2V0Wm9uZX1cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmIChzaW5nbGV0b24kMSA9PT0gbnVsbCkge1xuICAgICAgICBzaW5nbGV0b24kMSA9IG5ldyBGaXhlZE9mZnNldFpvbmUoMCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzaW5nbGV0b24kMTtcbiAgICB9XG4gIH1dKTtcblxuICBmdW5jdGlvbiBGaXhlZE9mZnNldFpvbmUob2Zmc2V0KSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfWm9uZS5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgLyoqIEBwcml2YXRlICoqL1xuXG4gICAgX3RoaXMuZml4ZWQgPSBvZmZzZXQ7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIC8qKiBAb3ZlcnJpZGUgKiovXG5cblxuICB2YXIgX3Byb3RvID0gRml4ZWRPZmZzZXRab25lLnByb3RvdHlwZTtcblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBfcHJvdG8ub2Zmc2V0TmFtZSA9IGZ1bmN0aW9uIG9mZnNldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuICAvKiogQG92ZXJyaWRlICoqL1xuICA7XG5cbiAgX3Byb3RvLmZvcm1hdE9mZnNldCA9IGZ1bmN0aW9uIGZvcm1hdE9mZnNldCQxKHRzLCBmb3JtYXQpIHtcbiAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHRoaXMuZml4ZWQsIGZvcm1hdCk7XG4gIH1cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgO1xuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIF9wcm90by5vZmZzZXQgPSBmdW5jdGlvbiBvZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZml4ZWQ7XG4gIH1cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgO1xuXG4gIF9wcm90by5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMob3RoZXJab25lKSB7XG4gICAgcmV0dXJuIG90aGVyWm9uZS50eXBlID09PSBcImZpeGVkXCIgJiYgb3RoZXJab25lLmZpeGVkID09PSB0aGlzLmZpeGVkO1xuICB9XG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIDtcblxuICBfY3JlYXRlQ2xhc3MoRml4ZWRPZmZzZXRab25lLCBbe1xuICAgIGtleTogXCJ0eXBlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gXCJmaXhlZFwiO1xuICAgIH1cbiAgICAvKiogQG92ZXJyaWRlICoqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibmFtZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZml4ZWQgPT09IDAgPyBcIlVUQ1wiIDogXCJVVENcIiArIGZvcm1hdE9mZnNldCh0aGlzLmZpeGVkLCBcIm5hcnJvd1wiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidW5pdmVyc2FsXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNWYWxpZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEZpeGVkT2Zmc2V0Wm9uZTtcbn0oWm9uZSk7XG5cbi8qKlxuICogQSB6b25lIHRoYXQgZmFpbGVkIHRvIHBhcnNlLiBZb3Ugc2hvdWxkIG5ldmVyIG5lZWQgdG8gaW5zdGFudGlhdGUgdGhpcy5cbiAqIEBpbXBsZW1lbnRzIHtab25lfVxuICovXG5cbnZhciBJbnZhbGlkWm9uZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1pvbmUpIHtcbiAgX2luaGVyaXRzTG9vc2UoSW52YWxpZFpvbmUsIF9ab25lKTtcblxuICBmdW5jdGlvbiBJbnZhbGlkWm9uZSh6b25lTmFtZSkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX1pvbmUuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgIC8qKiAgQHByaXZhdGUgKi9cblxuICAgIF90aGlzLnpvbmVOYW1lID0gem9uZU5hbWU7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIC8qKiBAb3ZlcnJpZGUgKiovXG5cblxuICB2YXIgX3Byb3RvID0gSW52YWxpZFpvbmUucHJvdG90eXBlO1xuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIF9wcm90by5vZmZzZXROYW1lID0gZnVuY3Rpb24gb2Zmc2V0TmFtZSgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAvKiogQG92ZXJyaWRlICoqL1xuICA7XG5cbiAgX3Byb3RvLmZvcm1hdE9mZnNldCA9IGZ1bmN0aW9uIGZvcm1hdE9mZnNldCgpIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuICAvKiogQG92ZXJyaWRlICoqL1xuICA7XG5cbiAgX3Byb3RvLm9mZnNldCA9IGZ1bmN0aW9uIG9mZnNldCgpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIDtcblxuICBfcHJvdG8uZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvKiogQG92ZXJyaWRlICoqL1xuICA7XG5cbiAgX2NyZWF0ZUNsYXNzKEludmFsaWRab25lLCBbe1xuICAgIGtleTogXCJ0eXBlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gXCJpbnZhbGlkXCI7XG4gICAgfVxuICAgIC8qKiBAb3ZlcnJpZGUgKiovXG5cbiAgfSwge1xuICAgIGtleTogXCJuYW1lXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy56b25lTmFtZTtcbiAgICB9XG4gICAgLyoqIEBvdmVycmlkZSAqKi9cblxuICB9LCB7XG4gICAga2V5OiBcInVuaXZlcnNhbFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc1ZhbGlkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEludmFsaWRab25lO1xufShab25lKTtcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBub3JtYWxpemVab25lKGlucHV0LCBkZWZhdWx0Wm9uZSkge1xuICB2YXIgb2Zmc2V0O1xuXG4gIGlmIChpc1VuZGVmaW5lZChpbnB1dCkgfHwgaW5wdXQgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZGVmYXVsdFpvbmU7XG4gIH0gZWxzZSBpZiAoaW5wdXQgaW5zdGFuY2VvZiBab25lKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9IGVsc2UgaWYgKGlzU3RyaW5nKGlucHV0KSkge1xuICAgIHZhciBsb3dlcmVkID0gaW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAobG93ZXJlZCA9PT0gXCJsb2NhbFwiKSByZXR1cm4gZGVmYXVsdFpvbmU7ZWxzZSBpZiAobG93ZXJlZCA9PT0gXCJ1dGNcIiB8fCBsb3dlcmVkID09PSBcImdtdFwiKSByZXR1cm4gRml4ZWRPZmZzZXRab25lLnV0Y0luc3RhbmNlO2Vsc2UgaWYgKChvZmZzZXQgPSBJQU5BWm9uZS5wYXJzZUdNVE9mZnNldChpbnB1dCkpICE9IG51bGwpIHtcbiAgICAgIC8vIGhhbmRsZSBFdGMvR01ULTQsIHdoaWNoIFY4IGNob2tlcyBvblxuICAgICAgcmV0dXJuIEZpeGVkT2Zmc2V0Wm9uZS5pbnN0YW5jZShvZmZzZXQpO1xuICAgIH0gZWxzZSBpZiAoSUFOQVpvbmUuaXNWYWxpZFNwZWNpZmllcihsb3dlcmVkKSkgcmV0dXJuIElBTkFab25lLmNyZWF0ZShpbnB1dCk7ZWxzZSByZXR1cm4gRml4ZWRPZmZzZXRab25lLnBhcnNlU3BlY2lmaWVyKGxvd2VyZWQpIHx8IG5ldyBJbnZhbGlkWm9uZShpbnB1dCk7XG4gIH0gZWxzZSBpZiAoaXNOdW1iZXIoaW5wdXQpKSB7XG4gICAgcmV0dXJuIEZpeGVkT2Zmc2V0Wm9uZS5pbnN0YW5jZShpbnB1dCk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGlucHV0ID09PSBcIm9iamVjdFwiICYmIGlucHV0Lm9mZnNldCAmJiB0eXBlb2YgaW5wdXQub2Zmc2V0ID09PSBcIm51bWJlclwiKSB7XG4gICAgLy8gVGhpcyBpcyBkdW1iLCBidXQgdGhlIGluc3RhbmNlb2YgY2hlY2sgYWJvdmUgZG9lc24ndCBzZWVtIHRvIHJlYWxseSB3b3JrXG4gICAgLy8gc28gd2UncmUgZHVjayBjaGVja2luZyBpdFxuICAgIHJldHVybiBpbnB1dDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IEludmFsaWRab25lKGlucHV0KTtcbiAgfVxufVxuXG52YXIgbm93ID0gZnVuY3Rpb24gbm93KCkge1xuICByZXR1cm4gRGF0ZS5ub3coKTtcbn0sXG4gICAgZGVmYXVsdFpvbmUgPSBudWxsLFxuICAgIC8vIG5vdCBzZXR0aW5nIHRoaXMgZGlyZWN0bHkgdG8gTG9jYWxab25lLmluc3RhbmNlIGJjIGxvYWRpbmcgb3JkZXIgaXNzdWVzXG5kZWZhdWx0TG9jYWxlID0gbnVsbCxcbiAgICBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtID0gbnVsbCxcbiAgICBkZWZhdWx0T3V0cHV0Q2FsZW5kYXIgPSBudWxsLFxuICAgIHRocm93T25JbnZhbGlkID0gZmFsc2U7XG4vKipcbiAqIFNldHRpbmdzIGNvbnRhaW5zIHN0YXRpYyBnZXR0ZXJzIGFuZCBzZXR0ZXJzIHRoYXQgY29udHJvbCBMdXhvbidzIG92ZXJhbGwgYmVoYXZpb3IuIEx1eG9uIGlzIGEgc2ltcGxlIGxpYnJhcnkgd2l0aCBmZXcgb3B0aW9ucywgYnV0IHRoZSBvbmVzIGl0IGRvZXMgaGF2ZSBsaXZlIGhlcmUuXG4gKi9cblxuXG52YXIgU2V0dGluZ3MgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTZXR0aW5ncygpIHt9XG5cbiAgLyoqXG4gICAqIFJlc2V0IEx1eG9uJ3MgZ2xvYmFsIGNhY2hlcy4gU2hvdWxkIG9ubHkgYmUgbmVjZXNzYXJ5IGluIHRlc3Rpbmcgc2NlbmFyaW9zLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgU2V0dGluZ3MucmVzZXRDYWNoZXMgPSBmdW5jdGlvbiByZXNldENhY2hlcygpIHtcbiAgICBMb2NhbGUucmVzZXRDYWNoZSgpO1xuICAgIElBTkFab25lLnJlc2V0Q2FjaGUoKTtcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoU2V0dGluZ3MsIG51bGwsIFt7XG4gICAga2V5OiBcIm5vd1wiLFxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjYWxsYmFjayBmb3IgcmV0dXJuaW5nIHRoZSBjdXJyZW50IHRpbWVzdGFtcC5cbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gbm93O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGNhbGxiYWNrIGZvciByZXR1cm5pbmcgdGhlIGN1cnJlbnQgdGltZXN0YW1wLlxuICAgICAqIFRoZSBmdW5jdGlvbiBzaG91bGQgcmV0dXJuIGEgbnVtYmVyLCB3aGljaCB3aWxsIGJlIGludGVycHJldGVkIGFzIGFuIEVwb2NoIG1pbGxpc2Vjb25kIGNvdW50XG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqIEBleGFtcGxlIFNldHRpbmdzLm5vdyA9ICgpID0+IERhdGUubm93KCkgKyAzMDAwIC8vIHByZXRlbmQgaXQgaXMgMyBzZWNvbmRzIGluIHRoZSBmdXR1cmVcbiAgICAgKiBAZXhhbXBsZSBTZXR0aW5ncy5ub3cgPSAoKSA9PiAwIC8vIGFsd2F5cyBwcmV0ZW5kIGl0J3MgSmFuIDEsIDE5NzAgYXQgbWlkbmlnaHQgaW4gVVRDIHRpbWVcbiAgICAgKi9cbiAgICAsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQobikge1xuICAgICAgbm93ID0gbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkZWZhdWx0IHRpbWUgem9uZSB0byBjcmVhdGUgRGF0ZVRpbWVzIGluLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkZWZhdWx0Wm9uZU5hbWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBTZXR0aW5ncy5kZWZhdWx0Wm9uZS5uYW1lO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGRlZmF1bHQgdGltZSB6b25lIHRvIGNyZWF0ZSBEYXRlVGltZXMgaW4uIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICAsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQoeikge1xuICAgICAgaWYgKCF6KSB7XG4gICAgICAgIGRlZmF1bHRab25lID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlZmF1bHRab25lID0gbm9ybWFsaXplWm9uZSh6KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkZWZhdWx0IHRpbWUgem9uZSBvYmplY3QgdG8gY3JlYXRlIERhdGVUaW1lcyBpbi4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICAgKiBAdHlwZSB7Wm9uZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRlZmF1bHRab25lXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdFpvbmUgfHwgTG9jYWxab25lLmluc3RhbmNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGRlZmF1bHQgbG9jYWxlIHRvIGNyZWF0ZSBEYXRlVGltZXMgd2l0aC4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiZGVmYXVsdExvY2FsZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRMb2NhbGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgZGVmYXVsdCBsb2NhbGUgdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgLFxuICAgIHNldDogZnVuY3Rpb24gc2V0KGxvY2FsZSkge1xuICAgICAgZGVmYXVsdExvY2FsZSA9IGxvY2FsZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkZWZhdWx0IG51bWJlcmluZyBzeXN0ZW0gdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkZWZhdWx0TnVtYmVyaW5nU3lzdGVtXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdE51bWJlcmluZ1N5c3RlbTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBkZWZhdWx0IG51bWJlcmluZyBzeXN0ZW0gdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgLFxuICAgIHNldDogZnVuY3Rpb24gc2V0KG51bWJlcmluZ1N5c3RlbSkge1xuICAgICAgZGVmYXVsdE51bWJlcmluZ1N5c3RlbSA9IG51bWJlcmluZ1N5c3RlbTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkZWZhdWx0IG91dHB1dCBjYWxlbmRhciB0byBjcmVhdGUgRGF0ZVRpbWVzIHdpdGguIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRlZmF1bHRPdXRwdXRDYWxlbmRhclwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRPdXRwdXRDYWxlbmRhcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBkZWZhdWx0IG91dHB1dCBjYWxlbmRhciB0byBjcmVhdGUgRGF0ZVRpbWVzIHdpdGguIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICAsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQob3V0cHV0Q2FsZW5kYXIpIHtcbiAgICAgIGRlZmF1bHRPdXRwdXRDYWxlbmRhciA9IG91dHB1dENhbGVuZGFyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgd2hldGhlciBMdXhvbiB3aWxsIHRocm93IHdoZW4gaXQgZW5jb3VudGVycyBpbnZhbGlkIERhdGVUaW1lcywgRHVyYXRpb25zLCBvciBJbnRlcnZhbHNcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInRocm93T25JbnZhbGlkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhyb3dPbkludmFsaWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCB3aGV0aGVyIEx1eG9uIHdpbGwgdGhyb3cgd2hlbiBpdCBlbmNvdW50ZXJzIGludmFsaWQgRGF0ZVRpbWVzLCBEdXJhdGlvbnMsIG9yIEludGVydmFsc1xuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuICAgICxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh0KSB7XG4gICAgICB0aHJvd09uSW52YWxpZCA9IHQ7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNldHRpbmdzO1xufSgpO1xuXG52YXIgaW50bERUQ2FjaGUgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q2FjaGVkRFRGKGxvY1N0cmluZywgb3B0cykge1xuICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0cyA9IHt9O1xuICB9XG5cbiAgdmFyIGtleSA9IEpTT04uc3RyaW5naWZ5KFtsb2NTdHJpbmcsIG9wdHNdKTtcbiAgdmFyIGR0ZiA9IGludGxEVENhY2hlW2tleV07XG5cbiAgaWYgKCFkdGYpIHtcbiAgICBkdGYgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NTdHJpbmcsIG9wdHMpO1xuICAgIGludGxEVENhY2hlW2tleV0gPSBkdGY7XG4gIH1cblxuICByZXR1cm4gZHRmO1xufVxuXG52YXIgaW50bE51bUNhY2hlID0ge307XG5cbmZ1bmN0aW9uIGdldENhY2hlZElORihsb2NTdHJpbmcsIG9wdHMpIHtcbiAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgIG9wdHMgPSB7fTtcbiAgfVxuXG4gIHZhciBrZXkgPSBKU09OLnN0cmluZ2lmeShbbG9jU3RyaW5nLCBvcHRzXSk7XG4gIHZhciBpbmYgPSBpbnRsTnVtQ2FjaGVba2V5XTtcblxuICBpZiAoIWluZikge1xuICAgIGluZiA9IG5ldyBJbnRsLk51bWJlckZvcm1hdChsb2NTdHJpbmcsIG9wdHMpO1xuICAgIGludGxOdW1DYWNoZVtrZXldID0gaW5mO1xuICB9XG5cbiAgcmV0dXJuIGluZjtcbn1cblxudmFyIGludGxSZWxDYWNoZSA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDYWNoZWRSVEYobG9jU3RyaW5nLCBvcHRzKSB7XG4gIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICBvcHRzID0ge307XG4gIH1cblxuICB2YXIgX29wdHMgPSBvcHRzLFxuICAgICAgYmFzZSA9IF9vcHRzLmJhc2UsXG4gICAgICBjYWNoZUtleU9wdHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfb3B0cywgW1wiYmFzZVwiXSk7IC8vIGV4Y2x1ZGUgYGJhc2VgIGZyb20gdGhlIG9wdGlvbnNcblxuXG4gIHZhciBrZXkgPSBKU09OLnN0cmluZ2lmeShbbG9jU3RyaW5nLCBjYWNoZUtleU9wdHNdKTtcbiAgdmFyIGluZiA9IGludGxSZWxDYWNoZVtrZXldO1xuXG4gIGlmICghaW5mKSB7XG4gICAgaW5mID0gbmV3IEludGwuUmVsYXRpdmVUaW1lRm9ybWF0KGxvY1N0cmluZywgb3B0cyk7XG4gICAgaW50bFJlbENhY2hlW2tleV0gPSBpbmY7XG4gIH1cblxuICByZXR1cm4gaW5mO1xufVxuXG52YXIgc3lzTG9jYWxlQ2FjaGUgPSBudWxsO1xuXG5mdW5jdGlvbiBzeXN0ZW1Mb2NhbGUoKSB7XG4gIGlmIChzeXNMb2NhbGVDYWNoZSkge1xuICAgIHJldHVybiBzeXNMb2NhbGVDYWNoZTtcbiAgfSBlbHNlIGlmIChoYXNJbnRsKCkpIHtcbiAgICB2YXIgY29tcHV0ZWRTeXMgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLmxvY2FsZTsgLy8gbm9kZSBzb21ldGltZXMgZGVmYXVsdHMgdG8gXCJ1bmRcIi4gT3ZlcnJpZGUgdGhhdCBiZWNhdXNlIHRoYXQgaXMgZHVtYlxuXG4gICAgc3lzTG9jYWxlQ2FjaGUgPSAhY29tcHV0ZWRTeXMgfHwgY29tcHV0ZWRTeXMgPT09IFwidW5kXCIgPyBcImVuLVVTXCIgOiBjb21wdXRlZFN5cztcbiAgICByZXR1cm4gc3lzTG9jYWxlQ2FjaGU7XG4gIH0gZWxzZSB7XG4gICAgc3lzTG9jYWxlQ2FjaGUgPSBcImVuLVVTXCI7XG4gICAgcmV0dXJuIHN5c0xvY2FsZUNhY2hlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlTG9jYWxlU3RyaW5nKGxvY2FsZVN0cikge1xuICAvLyBJIHJlYWxseSB3YW50IHRvIGF2b2lkIHdyaXRpbmcgYSBCQ1AgNDcgcGFyc2VyXG4gIC8vIHNlZSwgZS5nLiBodHRwczovL2dpdGh1Yi5jb20vd29vb3JtL2JjcC00N1xuICAvLyBJbnN0ZWFkLCB3ZSdsbCBkbyB0aGlzOlxuICAvLyBhKSBpZiB0aGUgc3RyaW5nIGhhcyBubyAtdSBleHRlbnNpb25zLCBqdXN0IGxlYXZlIGl0IGFsb25lXG4gIC8vIGIpIGlmIGl0IGRvZXMsIHVzZSBJbnRsIHRvIHJlc29sdmUgZXZlcnl0aGluZ1xuICAvLyBjKSBpZiBJbnRsIGZhaWxzLCB0cnkgYWdhaW4gd2l0aG91dCB0aGUgLXVcbiAgdmFyIHVJbmRleCA9IGxvY2FsZVN0ci5pbmRleE9mKFwiLXUtXCIpO1xuXG4gIGlmICh1SW5kZXggPT09IC0xKSB7XG4gICAgcmV0dXJuIFtsb2NhbGVTdHJdO1xuICB9IGVsc2Uge1xuICAgIHZhciBvcHRpb25zO1xuICAgIHZhciBzbWFsbGVyID0gbG9jYWxlU3RyLnN1YnN0cmluZygwLCB1SW5kZXgpO1xuXG4gICAgdHJ5IHtcbiAgICAgIG9wdGlvbnMgPSBnZXRDYWNoZWREVEYobG9jYWxlU3RyKS5yZXNvbHZlZE9wdGlvbnMoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBvcHRpb25zID0gZ2V0Q2FjaGVkRFRGKHNtYWxsZXIpLnJlc29sdmVkT3B0aW9ucygpO1xuICAgIH1cblxuICAgIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbSA9IF9vcHRpb25zLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgY2FsZW5kYXIgPSBfb3B0aW9ucy5jYWxlbmRhcjsgLy8gcmV0dXJuIHRoZSBzbWFsbGVyIG9uZSBzbyB0aGF0IHdlIGNhbiBhcHBlbmQgdGhlIGNhbGVuZGFyIGFuZCBudW1iZXJpbmcgb3ZlcnJpZGVzIHRvIGl0XG5cbiAgICByZXR1cm4gW3NtYWxsZXIsIG51bWJlcmluZ1N5c3RlbSwgY2FsZW5kYXJdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludGxDb25maWdTdHJpbmcobG9jYWxlU3RyLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyKSB7XG4gIGlmIChoYXNJbnRsKCkpIHtcbiAgICBpZiAob3V0cHV0Q2FsZW5kYXIgfHwgbnVtYmVyaW5nU3lzdGVtKSB7XG4gICAgICBsb2NhbGVTdHIgKz0gXCItdVwiO1xuXG4gICAgICBpZiAob3V0cHV0Q2FsZW5kYXIpIHtcbiAgICAgICAgbG9jYWxlU3RyICs9IFwiLWNhLVwiICsgb3V0cHV0Q2FsZW5kYXI7XG4gICAgICB9XG5cbiAgICAgIGlmIChudW1iZXJpbmdTeXN0ZW0pIHtcbiAgICAgICAgbG9jYWxlU3RyICs9IFwiLW51LVwiICsgbnVtYmVyaW5nU3lzdGVtO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbG9jYWxlU3RyO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbG9jYWxlU3RyO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW107XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwTW9udGhzKGYpIHtcbiAgdmFyIG1zID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDE7IGkgPD0gMTI7IGkrKykge1xuICAgIHZhciBkdCA9IERhdGVUaW1lLnV0YygyMDE2LCBpLCAxKTtcbiAgICBtcy5wdXNoKGYoZHQpKTtcbiAgfVxuXG4gIHJldHVybiBtcztcbn1cblxuZnVuY3Rpb24gbWFwV2Vla2RheXMoZikge1xuICB2YXIgbXMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMTsgaSA8PSA3OyBpKyspIHtcbiAgICB2YXIgZHQgPSBEYXRlVGltZS51dGMoMjAxNiwgMTEsIDEzICsgaSk7XG4gICAgbXMucHVzaChmKGR0KSk7XG4gIH1cblxuICByZXR1cm4gbXM7XG59XG5cbmZ1bmN0aW9uIGxpc3RTdHVmZihsb2MsIGxlbmd0aCwgZGVmYXVsdE9LLCBlbmdsaXNoRm4sIGludGxGbikge1xuICB2YXIgbW9kZSA9IGxvYy5saXN0aW5nTW9kZShkZWZhdWx0T0spO1xuXG4gIGlmIChtb2RlID09PSBcImVycm9yXCIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIGlmIChtb2RlID09PSBcImVuXCIpIHtcbiAgICByZXR1cm4gZW5nbGlzaEZuKGxlbmd0aCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGludGxGbihsZW5ndGgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN1cHBvcnRzRmFzdE51bWJlcnMobG9jKSB7XG4gIGlmIChsb2MubnVtYmVyaW5nU3lzdGVtICYmIGxvYy5udW1iZXJpbmdTeXN0ZW0gIT09IFwibGF0blwiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsb2MubnVtYmVyaW5nU3lzdGVtID09PSBcImxhdG5cIiB8fCAhbG9jLmxvY2FsZSB8fCBsb2MubG9jYWxlLnN0YXJ0c1dpdGgoXCJlblwiKSB8fCBoYXNJbnRsKCkgJiYgbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jLmludGwpLnJlc29sdmVkT3B0aW9ucygpLm51bWJlcmluZ1N5c3RlbSA9PT0gXCJsYXRuXCI7XG4gIH1cbn1cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5cbnZhciBQb2x5TnVtYmVyRm9ybWF0dGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUG9seU51bWJlckZvcm1hdHRlcihpbnRsLCBmb3JjZVNpbXBsZSwgb3B0cykge1xuICAgIHRoaXMucGFkVG8gPSBvcHRzLnBhZFRvIHx8IDA7XG4gICAgdGhpcy5mbG9vciA9IG9wdHMuZmxvb3IgfHwgZmFsc2U7XG5cbiAgICBpZiAoIWZvcmNlU2ltcGxlICYmIGhhc0ludGwoKSkge1xuICAgICAgdmFyIGludGxPcHRzID0ge1xuICAgICAgICB1c2VHcm91cGluZzogZmFsc2VcbiAgICAgIH07XG4gICAgICBpZiAob3B0cy5wYWRUbyA+IDApIGludGxPcHRzLm1pbmltdW1JbnRlZ2VyRGlnaXRzID0gb3B0cy5wYWRUbztcbiAgICAgIHRoaXMuaW5mID0gZ2V0Q2FjaGVkSU5GKGludGwsIGludGxPcHRzKTtcbiAgICB9XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUG9seU51bWJlckZvcm1hdHRlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmZvcm1hdCA9IGZ1bmN0aW9uIGZvcm1hdChpKSB7XG4gICAgaWYgKHRoaXMuaW5mKSB7XG4gICAgICB2YXIgZml4ZWQgPSB0aGlzLmZsb29yID8gTWF0aC5mbG9vcihpKSA6IGk7XG4gICAgICByZXR1cm4gdGhpcy5pbmYuZm9ybWF0KGZpeGVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdG8gbWF0Y2ggdGhlIGJyb3dzZXIncyBudW1iZXJmb3JtYXR0ZXIgZGVmYXVsdHNcbiAgICAgIHZhciBfZml4ZWQgPSB0aGlzLmZsb29yID8gTWF0aC5mbG9vcihpKSA6IHJvdW5kVG8oaSwgMyk7XG5cbiAgICAgIHJldHVybiBwYWRTdGFydChfZml4ZWQsIHRoaXMucGFkVG8pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gUG9seU51bWJlckZvcm1hdHRlcjtcbn0oKTtcbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5cbnZhciBQb2x5RGF0ZUZvcm1hdHRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFBvbHlEYXRlRm9ybWF0dGVyKGR0LCBpbnRsLCBvcHRzKSB7XG4gICAgdGhpcy5vcHRzID0gb3B0cztcbiAgICB0aGlzLmhhc0ludGwgPSBoYXNJbnRsKCk7XG4gICAgdmFyIHo7XG5cbiAgICBpZiAoZHQuem9uZS51bml2ZXJzYWwgJiYgdGhpcy5oYXNJbnRsKSB7XG4gICAgICAvLyBDaHJvbWl1bSBkb2Vzbid0IHN1cHBvcnQgZml4ZWQtb2Zmc2V0IHpvbmVzIGxpa2UgRXRjL0dNVCs4IGluIGl0cyBmb3JtYXR0ZXIsXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MzY0Mzc0LlxuICAgICAgLy8gU28gd2UgaGF2ZSB0byBtYWtlIGRvLiBUd28gY2FzZXM6XG4gICAgICAvLyAxLiBUaGUgZm9ybWF0IG9wdGlvbnMgdGVsbCB1cyB0byBzaG93IHRoZSB6b25lLiBXZSBjYW4ndCBkbyB0aGF0LCBzbyB0aGUgYmVzdFxuICAgICAgLy8gd2UgY2FuIGRvIGlzIGZvcm1hdCB0aGUgZGF0ZSBpbiBVVEMuXG4gICAgICAvLyAyLiBUaGUgZm9ybWF0IG9wdGlvbnMgZG9uJ3QgdGVsbCB1cyB0byBzaG93IHRoZSB6b25lLiBUaGVuIHdlIGNhbiBhZGp1c3QgdGhlbVxuICAgICAgLy8gdGhlIHRpbWUgYW5kIHRlbGwgdGhlIGZvcm1hdHRlciB0byBzaG93IGl0IHRvIHVzIGluIFVUQywgc28gdGhhdCB0aGUgdGltZSBpcyByaWdodFxuICAgICAgLy8gYW5kIHRoZSBiYWQgem9uZSBkb2Vzbid0IHNob3cgdXAuXG4gICAgICAvLyBXZSBjYW4gY2xlYW4gYWxsIHRoaXMgdXAgd2hlbiBDaHJvbWUgZml4ZXMgdGhpcy5cbiAgICAgIHogPSBcIlVUQ1wiO1xuXG4gICAgICBpZiAob3B0cy50aW1lWm9uZU5hbWUpIHtcbiAgICAgICAgdGhpcy5kdCA9IGR0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kdCA9IGR0Lm9mZnNldCA9PT0gMCA/IGR0IDogRGF0ZVRpbWUuZnJvbU1pbGxpcyhkdC50cyArIGR0Lm9mZnNldCAqIDYwICogMTAwMCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkdC56b25lLnR5cGUgPT09IFwibG9jYWxcIikge1xuICAgICAgdGhpcy5kdCA9IGR0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmR0ID0gZHQ7XG4gICAgICB6ID0gZHQuem9uZS5uYW1lO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc0ludGwpIHtcbiAgICAgIHZhciBpbnRsT3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0cyk7XG5cbiAgICAgIGlmICh6KSB7XG4gICAgICAgIGludGxPcHRzLnRpbWVab25lID0gejtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kdGYgPSBnZXRDYWNoZWREVEYoaW50bCwgaW50bE9wdHMpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBfcHJvdG8yID0gUG9seURhdGVGb3JtYXR0ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90bzIuZm9ybWF0ID0gZnVuY3Rpb24gZm9ybWF0KCkge1xuICAgIGlmICh0aGlzLmhhc0ludGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmR0Zi5mb3JtYXQodGhpcy5kdC50b0pTRGF0ZSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHRva2VuRm9ybWF0ID0gZm9ybWF0U3RyaW5nKHRoaXMub3B0cyksXG4gICAgICAgICAgbG9jID0gTG9jYWxlLmNyZWF0ZShcImVuLVVTXCIpO1xuICAgICAgcmV0dXJuIEZvcm1hdHRlci5jcmVhdGUobG9jKS5mb3JtYXREYXRlVGltZUZyb21TdHJpbmcodGhpcy5kdCwgdG9rZW5Gb3JtYXQpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8yLmZvcm1hdFRvUGFydHMgPSBmdW5jdGlvbiBmb3JtYXRUb1BhcnRzKCkge1xuICAgIGlmICh0aGlzLmhhc0ludGwgJiYgaGFzRm9ybWF0VG9QYXJ0cygpKSB7XG4gICAgICByZXR1cm4gdGhpcy5kdGYuZm9ybWF0VG9QYXJ0cyh0aGlzLmR0LnRvSlNEYXRlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGlzIGlzIGtpbmQgb2YgYSBjb3Agb3V0LiBXZSBhY3R1YWxseSBjb3VsZCBkbyB0aGlzIGZvciBFbmdsaXNoLiBIb3dldmVyLCB3ZSBjb3VsZG4ndCBkbyBpdCBmb3IgaW50bCBzdHJpbmdzXG4gICAgICAvLyBhbmQgSU1PIGl0J3MgdG9vIHdlaXJkIHRvIGhhdmUgYW4gdW5jYW5ueSB2YWxsZXkgbGlrZSB0aGF0XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9O1xuXG4gIF9wcm90bzIucmVzb2x2ZWRPcHRpb25zID0gZnVuY3Rpb24gcmVzb2x2ZWRPcHRpb25zKCkge1xuICAgIGlmICh0aGlzLmhhc0ludGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmR0Zi5yZXNvbHZlZE9wdGlvbnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbG9jYWxlOiBcImVuLVVTXCIsXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbTogXCJsYXRuXCIsXG4gICAgICAgIG91dHB1dENhbGVuZGFyOiBcImdyZWdvcnlcIlxuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFBvbHlEYXRlRm9ybWF0dGVyO1xufSgpO1xuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cblxudmFyIFBvbHlSZWxGb3JtYXR0ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQb2x5UmVsRm9ybWF0dGVyKGludGwsIGlzRW5nbGlzaCwgb3B0cykge1xuICAgIHRoaXMub3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgc3R5bGU6IFwibG9uZ1wiXG4gICAgfSwgb3B0cyk7XG5cbiAgICBpZiAoIWlzRW5nbGlzaCAmJiBoYXNSZWxhdGl2ZSgpKSB7XG4gICAgICB0aGlzLnJ0ZiA9IGdldENhY2hlZFJURihpbnRsLCBvcHRzKTtcbiAgICB9XG4gIH1cblxuICB2YXIgX3Byb3RvMyA9IFBvbHlSZWxGb3JtYXR0ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90bzMuZm9ybWF0ID0gZnVuY3Rpb24gZm9ybWF0KGNvdW50LCB1bml0KSB7XG4gICAgaWYgKHRoaXMucnRmKSB7XG4gICAgICByZXR1cm4gdGhpcy5ydGYuZm9ybWF0KGNvdW50LCB1bml0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlVGltZSh1bml0LCBjb3VudCwgdGhpcy5vcHRzLm51bWVyaWMsIHRoaXMub3B0cy5zdHlsZSAhPT0gXCJsb25nXCIpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8zLmZvcm1hdFRvUGFydHMgPSBmdW5jdGlvbiBmb3JtYXRUb1BhcnRzKGNvdW50LCB1bml0KSB7XG4gICAgaWYgKHRoaXMucnRmKSB7XG4gICAgICByZXR1cm4gdGhpcy5ydGYuZm9ybWF0VG9QYXJ0cyhjb3VudCwgdW5pdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFBvbHlSZWxGb3JtYXR0ZXI7XG59KCk7XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuXG52YXIgTG9jYWxlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgTG9jYWxlLmZyb21PcHRzID0gZnVuY3Rpb24gZnJvbU9wdHMob3B0cykge1xuICAgIHJldHVybiBMb2NhbGUuY3JlYXRlKG9wdHMubG9jYWxlLCBvcHRzLm51bWJlcmluZ1N5c3RlbSwgb3B0cy5vdXRwdXRDYWxlbmRhciwgb3B0cy5kZWZhdWx0VG9FTik7XG4gIH07XG5cbiAgTG9jYWxlLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXIsIGRlZmF1bHRUb0VOKSB7XG4gICAgaWYgKGRlZmF1bHRUb0VOID09PSB2b2lkIDApIHtcbiAgICAgIGRlZmF1bHRUb0VOID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHNwZWNpZmllZExvY2FsZSA9IGxvY2FsZSB8fCBTZXR0aW5ncy5kZWZhdWx0TG9jYWxlLFxuICAgICAgICAvLyB0aGUgc3lzdGVtIGxvY2FsZSBpcyB1c2VmdWwgZm9yIGh1bWFuIHJlYWRhYmxlIHN0cmluZ3MgYnV0IGFubm95aW5nIGZvciBwYXJzaW5nL2Zvcm1hdHRpbmcga25vd24gZm9ybWF0c1xuICAgIGxvY2FsZVIgPSBzcGVjaWZpZWRMb2NhbGUgfHwgKGRlZmF1bHRUb0VOID8gXCJlbi1VU1wiIDogc3lzdGVtTG9jYWxlKCkpLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW1SID0gbnVtYmVyaW5nU3lzdGVtIHx8IFNldHRpbmdzLmRlZmF1bHROdW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIG91dHB1dENhbGVuZGFyUiA9IG91dHB1dENhbGVuZGFyIHx8IFNldHRpbmdzLmRlZmF1bHRPdXRwdXRDYWxlbmRhcjtcbiAgICByZXR1cm4gbmV3IExvY2FsZShsb2NhbGVSLCBudW1iZXJpbmdTeXN0ZW1SLCBvdXRwdXRDYWxlbmRhclIsIHNwZWNpZmllZExvY2FsZSk7XG4gIH07XG5cbiAgTG9jYWxlLnJlc2V0Q2FjaGUgPSBmdW5jdGlvbiByZXNldENhY2hlKCkge1xuICAgIHN5c0xvY2FsZUNhY2hlID0gbnVsbDtcbiAgICBpbnRsRFRDYWNoZSA9IHt9O1xuICAgIGludGxOdW1DYWNoZSA9IHt9O1xuICAgIGludGxSZWxDYWNoZSA9IHt9O1xuICB9O1xuXG4gIExvY2FsZS5mcm9tT2JqZWN0ID0gZnVuY3Rpb24gZnJvbU9iamVjdChfdGVtcCkge1xuICAgIHZhciBfcmVmID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAsXG4gICAgICAgIGxvY2FsZSA9IF9yZWYubG9jYWxlLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW0gPSBfcmVmLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgb3V0cHV0Q2FsZW5kYXIgPSBfcmVmLm91dHB1dENhbGVuZGFyO1xuXG4gICAgcmV0dXJuIExvY2FsZS5jcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyKTtcbiAgfTtcblxuICBmdW5jdGlvbiBMb2NhbGUobG9jYWxlLCBudW1iZXJpbmcsIG91dHB1dENhbGVuZGFyLCBzcGVjaWZpZWRMb2NhbGUpIHtcbiAgICB2YXIgX3BhcnNlTG9jYWxlU3RyaW5nID0gcGFyc2VMb2NhbGVTdHJpbmcobG9jYWxlKSxcbiAgICAgICAgcGFyc2VkTG9jYWxlID0gX3BhcnNlTG9jYWxlU3RyaW5nWzBdLFxuICAgICAgICBwYXJzZWROdW1iZXJpbmdTeXN0ZW0gPSBfcGFyc2VMb2NhbGVTdHJpbmdbMV0sXG4gICAgICAgIHBhcnNlZE91dHB1dENhbGVuZGFyID0gX3BhcnNlTG9jYWxlU3RyaW5nWzJdO1xuXG4gICAgdGhpcy5sb2NhbGUgPSBwYXJzZWRMb2NhbGU7XG4gICAgdGhpcy5udW1iZXJpbmdTeXN0ZW0gPSBudW1iZXJpbmcgfHwgcGFyc2VkTnVtYmVyaW5nU3lzdGVtIHx8IG51bGw7XG4gICAgdGhpcy5vdXRwdXRDYWxlbmRhciA9IG91dHB1dENhbGVuZGFyIHx8IHBhcnNlZE91dHB1dENhbGVuZGFyIHx8IG51bGw7XG4gICAgdGhpcy5pbnRsID0gaW50bENvbmZpZ1N0cmluZyh0aGlzLmxvY2FsZSwgdGhpcy5udW1iZXJpbmdTeXN0ZW0sIHRoaXMub3V0cHV0Q2FsZW5kYXIpO1xuICAgIHRoaXMud2Vla2RheXNDYWNoZSA9IHtcbiAgICAgIGZvcm1hdDoge30sXG4gICAgICBzdGFuZGFsb25lOiB7fVxuICAgIH07XG4gICAgdGhpcy5tb250aHNDYWNoZSA9IHtcbiAgICAgIGZvcm1hdDoge30sXG4gICAgICBzdGFuZGFsb25lOiB7fVxuICAgIH07XG4gICAgdGhpcy5tZXJpZGllbUNhY2hlID0gbnVsbDtcbiAgICB0aGlzLmVyYUNhY2hlID0ge307XG4gICAgdGhpcy5zcGVjaWZpZWRMb2NhbGUgPSBzcGVjaWZpZWRMb2NhbGU7XG4gICAgdGhpcy5mYXN0TnVtYmVyc0NhY2hlZCA9IG51bGw7XG4gIH1cblxuICB2YXIgX3Byb3RvNCA9IExvY2FsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvNC5saXN0aW5nTW9kZSA9IGZ1bmN0aW9uIGxpc3RpbmdNb2RlKGRlZmF1bHRPSykge1xuICAgIGlmIChkZWZhdWx0T0sgPT09IHZvaWQgMCkge1xuICAgICAgZGVmYXVsdE9LID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgaW50bCA9IGhhc0ludGwoKSxcbiAgICAgICAgaGFzRlRQID0gaW50bCAmJiBoYXNGb3JtYXRUb1BhcnRzKCksXG4gICAgICAgIGlzQWN0dWFsbHlFbiA9IHRoaXMuaXNFbmdsaXNoKCksXG4gICAgICAgIGhhc05vV2VpcmRuZXNzID0gKHRoaXMubnVtYmVyaW5nU3lzdGVtID09PSBudWxsIHx8IHRoaXMubnVtYmVyaW5nU3lzdGVtID09PSBcImxhdG5cIikgJiYgKHRoaXMub3V0cHV0Q2FsZW5kYXIgPT09IG51bGwgfHwgdGhpcy5vdXRwdXRDYWxlbmRhciA9PT0gXCJncmVnb3J5XCIpO1xuXG4gICAgaWYgKCFoYXNGVFAgJiYgIShpc0FjdHVhbGx5RW4gJiYgaGFzTm9XZWlyZG5lc3MpICYmICFkZWZhdWx0T0spIHtcbiAgICAgIHJldHVybiBcImVycm9yXCI7XG4gICAgfSBlbHNlIGlmICghaGFzRlRQIHx8IGlzQWN0dWFsbHlFbiAmJiBoYXNOb1dlaXJkbmVzcykge1xuICAgICAgcmV0dXJuIFwiZW5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiaW50bFwiO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG80LmNsb25lID0gZnVuY3Rpb24gY2xvbmUoYWx0cykge1xuICAgIGlmICghYWx0cyB8fCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhbHRzKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTG9jYWxlLmNyZWF0ZShhbHRzLmxvY2FsZSB8fCB0aGlzLnNwZWNpZmllZExvY2FsZSwgYWx0cy5udW1iZXJpbmdTeXN0ZW0gfHwgdGhpcy5udW1iZXJpbmdTeXN0ZW0sIGFsdHMub3V0cHV0Q2FsZW5kYXIgfHwgdGhpcy5vdXRwdXRDYWxlbmRhciwgYWx0cy5kZWZhdWx0VG9FTiB8fCBmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90bzQucmVkZWZhdWx0VG9FTiA9IGZ1bmN0aW9uIHJlZGVmYXVsdFRvRU4oYWx0cykge1xuICAgIGlmIChhbHRzID09PSB2b2lkIDApIHtcbiAgICAgIGFsdHMgPSB7fTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jbG9uZShPYmplY3QuYXNzaWduKHt9LCBhbHRzLCB7XG4gICAgICBkZWZhdWx0VG9FTjogdHJ1ZVxuICAgIH0pKTtcbiAgfTtcblxuICBfcHJvdG80LnJlZGVmYXVsdFRvU3lzdGVtID0gZnVuY3Rpb24gcmVkZWZhdWx0VG9TeXN0ZW0oYWx0cykge1xuICAgIGlmIChhbHRzID09PSB2b2lkIDApIHtcbiAgICAgIGFsdHMgPSB7fTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jbG9uZShPYmplY3QuYXNzaWduKHt9LCBhbHRzLCB7XG4gICAgICBkZWZhdWx0VG9FTjogZmFsc2VcbiAgICB9KSk7XG4gIH07XG5cbiAgX3Byb3RvNC5tb250aHMgPSBmdW5jdGlvbiBtb250aHMkMShsZW5ndGgsIGZvcm1hdCwgZGVmYXVsdE9LKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmIChmb3JtYXQgPT09IHZvaWQgMCkge1xuICAgICAgZm9ybWF0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGRlZmF1bHRPSyA9PT0gdm9pZCAwKSB7XG4gICAgICBkZWZhdWx0T0sgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBsaXN0U3R1ZmYodGhpcywgbGVuZ3RoLCBkZWZhdWx0T0ssIG1vbnRocywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGludGwgPSBmb3JtYXQgPyB7XG4gICAgICAgIG1vbnRoOiBsZW5ndGgsXG4gICAgICAgIGRheTogXCJudW1lcmljXCJcbiAgICAgIH0gOiB7XG4gICAgICAgIG1vbnRoOiBsZW5ndGhcbiAgICAgIH0sXG4gICAgICAgICAgZm9ybWF0U3RyID0gZm9ybWF0ID8gXCJmb3JtYXRcIiA6IFwic3RhbmRhbG9uZVwiO1xuXG4gICAgICBpZiAoIV90aGlzLm1vbnRoc0NhY2hlW2Zvcm1hdFN0cl1bbGVuZ3RoXSkge1xuICAgICAgICBfdGhpcy5tb250aHNDYWNoZVtmb3JtYXRTdHJdW2xlbmd0aF0gPSBtYXBNb250aHMoZnVuY3Rpb24gKGR0KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLmV4dHJhY3QoZHQsIGludGwsIFwibW9udGhcIik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3RoaXMubW9udGhzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90bzQud2Vla2RheXMgPSBmdW5jdGlvbiB3ZWVrZGF5cyQxKGxlbmd0aCwgZm9ybWF0LCBkZWZhdWx0T0spIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGlmIChmb3JtYXQgPT09IHZvaWQgMCkge1xuICAgICAgZm9ybWF0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGRlZmF1bHRPSyA9PT0gdm9pZCAwKSB7XG4gICAgICBkZWZhdWx0T0sgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBsaXN0U3R1ZmYodGhpcywgbGVuZ3RoLCBkZWZhdWx0T0ssIHdlZWtkYXlzLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaW50bCA9IGZvcm1hdCA/IHtcbiAgICAgICAgd2Vla2RheTogbGVuZ3RoLFxuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiXG4gICAgICB9IDoge1xuICAgICAgICB3ZWVrZGF5OiBsZW5ndGhcbiAgICAgIH0sXG4gICAgICAgICAgZm9ybWF0U3RyID0gZm9ybWF0ID8gXCJmb3JtYXRcIiA6IFwic3RhbmRhbG9uZVwiO1xuXG4gICAgICBpZiAoIV90aGlzMi53ZWVrZGF5c0NhY2hlW2Zvcm1hdFN0cl1bbGVuZ3RoXSkge1xuICAgICAgICBfdGhpczIud2Vla2RheXNDYWNoZVtmb3JtYXRTdHJdW2xlbmd0aF0gPSBtYXBXZWVrZGF5cyhmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLmV4dHJhY3QoZHQsIGludGwsIFwid2Vla2RheVwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdGhpczIud2Vla2RheXNDYWNoZVtmb3JtYXRTdHJdW2xlbmd0aF07XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvNC5tZXJpZGllbXMgPSBmdW5jdGlvbiBtZXJpZGllbXMkMShkZWZhdWx0T0spIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIGlmIChkZWZhdWx0T0sgPT09IHZvaWQgMCkge1xuICAgICAgZGVmYXVsdE9LID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdFN0dWZmKHRoaXMsIHVuZGVmaW5lZCwgZGVmYXVsdE9LLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbWVyaWRpZW1zO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEluIHRoZW9yeSB0aGVyZSBjb3VsZCBiZSBhcmliaXRyYXJ5IGRheSBwZXJpb2RzLiBXZSdyZSBnb25uYSBhc3N1bWUgdGhlcmUgYXJlIGV4YWN0bHkgdHdvXG4gICAgICAvLyBmb3IgQU0gYW5kIFBNLiBUaGlzIGlzIHByb2JhYmx5IHdyb25nLCBidXQgaXQncyBtYWtlcyBwYXJzaW5nIHdheSBlYXNpZXIuXG4gICAgICBpZiAoIV90aGlzMy5tZXJpZGllbUNhY2hlKSB7XG4gICAgICAgIHZhciBpbnRsID0ge1xuICAgICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICAgIGhvdXIxMjogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBfdGhpczMubWVyaWRpZW1DYWNoZSA9IFtEYXRlVGltZS51dGMoMjAxNiwgMTEsIDEzLCA5KSwgRGF0ZVRpbWUudXRjKDIwMTYsIDExLCAxMywgMTkpXS5tYXAoZnVuY3Rpb24gKGR0KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMy5leHRyYWN0KGR0LCBpbnRsLCBcImRheXBlcmlvZFwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdGhpczMubWVyaWRpZW1DYWNoZTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG80LmVyYXMgPSBmdW5jdGlvbiBlcmFzJDEobGVuZ3RoLCBkZWZhdWx0T0spIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIGlmIChkZWZhdWx0T0sgPT09IHZvaWQgMCkge1xuICAgICAgZGVmYXVsdE9LID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdFN0dWZmKHRoaXMsIGxlbmd0aCwgZGVmYXVsdE9LLCBlcmFzLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaW50bCA9IHtcbiAgICAgICAgZXJhOiBsZW5ndGhcbiAgICAgIH07IC8vIFRoaXMgaXMgdXR0ZXIgYnVsbHNoaXQuIERpZmZlcmVudCBjYWxlbmRhcnMgYXJlIGdvaW5nIHRvIGRlZmluZSBlcmFzIHRvdGFsbHkgZGlmZmVyZW50bHkuIFdoYXQgSSBuZWVkIGlzIHRoZSBtaW5pbXVtIHNldCBvZiBkYXRlc1xuICAgICAgLy8gdG8gZGVmaW5pdGVseSBlbnVtZXJhdGUgdGhlbS5cblxuICAgICAgaWYgKCFfdGhpczQuZXJhQ2FjaGVbbGVuZ3RoXSkge1xuICAgICAgICBfdGhpczQuZXJhQ2FjaGVbbGVuZ3RoXSA9IFtEYXRlVGltZS51dGMoLTQwLCAxLCAxKSwgRGF0ZVRpbWUudXRjKDIwMTcsIDEsIDEpXS5tYXAoZnVuY3Rpb24gKGR0KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNC5leHRyYWN0KGR0LCBpbnRsLCBcImVyYVwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdGhpczQuZXJhQ2FjaGVbbGVuZ3RoXTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG80LmV4dHJhY3QgPSBmdW5jdGlvbiBleHRyYWN0KGR0LCBpbnRsT3B0cywgZmllbGQpIHtcbiAgICB2YXIgZGYgPSB0aGlzLmR0Rm9ybWF0dGVyKGR0LCBpbnRsT3B0cyksXG4gICAgICAgIHJlc3VsdHMgPSBkZi5mb3JtYXRUb1BhcnRzKCksXG4gICAgICAgIG1hdGNoaW5nID0gcmVzdWx0cy5maW5kKGZ1bmN0aW9uIChtKSB7XG4gICAgICByZXR1cm4gbS50eXBlLnRvTG93ZXJDYXNlKCkgPT09IGZpZWxkO1xuICAgIH0pO1xuICAgIHJldHVybiBtYXRjaGluZyA/IG1hdGNoaW5nLnZhbHVlIDogbnVsbDtcbiAgfTtcblxuICBfcHJvdG80Lm51bWJlckZvcm1hdHRlciA9IGZ1bmN0aW9uIG51bWJlckZvcm1hdHRlcihvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cblxuICAgIC8vIHRoaXMgZm9yY2VzaW1wbGUgb3B0aW9uIGlzIG5ldmVyIHVzZWQgKHRoZSBvbmx5IGNhbGxlciBzaG9ydC1jaXJjdWl0cyBvbiBpdCwgYnV0IGl0IHNlZW1zIHNhZmVyIHRvIGxlYXZlKVxuICAgIC8vIChpbiBjb250cmFzdCwgdGhlIHJlc3Qgb2YgdGhlIGNvbmRpdGlvbiBpcyB1c2VkIGhlYXZpbHkpXG4gICAgcmV0dXJuIG5ldyBQb2x5TnVtYmVyRm9ybWF0dGVyKHRoaXMuaW50bCwgb3B0cy5mb3JjZVNpbXBsZSB8fCB0aGlzLmZhc3ROdW1iZXJzLCBvcHRzKTtcbiAgfTtcblxuICBfcHJvdG80LmR0Rm9ybWF0dGVyID0gZnVuY3Rpb24gZHRGb3JtYXR0ZXIoZHQsIGludGxPcHRzKSB7XG4gICAgaWYgKGludGxPcHRzID09PSB2b2lkIDApIHtcbiAgICAgIGludGxPcHRzID0ge307XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQb2x5RGF0ZUZvcm1hdHRlcihkdCwgdGhpcy5pbnRsLCBpbnRsT3B0cyk7XG4gIH07XG5cbiAgX3Byb3RvNC5yZWxGb3JtYXR0ZXIgPSBmdW5jdGlvbiByZWxGb3JtYXR0ZXIob3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFBvbHlSZWxGb3JtYXR0ZXIodGhpcy5pbnRsLCB0aGlzLmlzRW5nbGlzaCgpLCBvcHRzKTtcbiAgfTtcblxuICBfcHJvdG80LmlzRW5nbGlzaCA9IGZ1bmN0aW9uIGlzRW5nbGlzaCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGUgPT09IFwiZW5cIiB8fCB0aGlzLmxvY2FsZS50b0xvd2VyQ2FzZSgpID09PSBcImVuLXVzXCIgfHwgaGFzSW50bCgpICYmIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHRoaXMuaW50bCkucmVzb2x2ZWRPcHRpb25zKCkubG9jYWxlLnN0YXJ0c1dpdGgoXCJlbi11c1wiKTtcbiAgfTtcblxuICBfcHJvdG80LmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyhvdGhlcikge1xuICAgIHJldHVybiB0aGlzLmxvY2FsZSA9PT0gb3RoZXIubG9jYWxlICYmIHRoaXMubnVtYmVyaW5nU3lzdGVtID09PSBvdGhlci5udW1iZXJpbmdTeXN0ZW0gJiYgdGhpcy5vdXRwdXRDYWxlbmRhciA9PT0gb3RoZXIub3V0cHV0Q2FsZW5kYXI7XG4gIH07XG5cbiAgX2NyZWF0ZUNsYXNzKExvY2FsZSwgW3tcbiAgICBrZXk6IFwiZmFzdE51bWJlcnNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmICh0aGlzLmZhc3ROdW1iZXJzQ2FjaGVkID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5mYXN0TnVtYmVyc0NhY2hlZCA9IHN1cHBvcnRzRmFzdE51bWJlcnModGhpcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmZhc3ROdW1iZXJzQ2FjaGVkO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMb2NhbGU7XG59KCk7XG5cbi8qXG4gKiBUaGlzIGZpbGUgaGFuZGxlcyBwYXJzaW5nIGZvciB3ZWxsLXNwZWNpZmllZCBmb3JtYXRzLiBIZXJlJ3MgaG93IGl0IHdvcmtzOlxuICogVHdvIHRoaW5ncyBnbyBpbnRvIHBhcnNpbmc6IGEgcmVnZXggdG8gbWF0Y2ggd2l0aCBhbmQgYW4gZXh0cmFjdG9yIHRvIHRha2UgYXBhcnQgdGhlIGdyb3VwcyBpbiB0aGUgbWF0Y2guXG4gKiBBbiBleHRyYWN0b3IgaXMganVzdCBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSByZWdleCBtYXRjaCBhcnJheSBhbmQgcmV0dXJucyBhIHsgeWVhcjogLi4uLCBtb250aDogLi4uIH0gb2JqZWN0XG4gKiBwYXJzZSgpIGRvZXMgdGhlIHdvcmsgb2YgZXhlY3V0aW5nIHRoZSByZWdleCBhbmQgYXBwbHlpbmcgdGhlIGV4dHJhY3Rvci4gSXQgdGFrZXMgbXVsdGlwbGUgcmVnZXgvZXh0cmFjdG9yIHBhaXJzIHRvIHRyeSBpbiBzZXF1ZW5jZS5cbiAqIEV4dHJhY3RvcnMgY2FuIHRha2UgYSBcImN1cnNvclwiIHJlcHJlc2VudGluZyB0aGUgb2Zmc2V0IGluIHRoZSBtYXRjaCB0byBsb29rIGF0LiBUaGlzIG1ha2VzIGl0IGVhc3kgdG8gY29tYmluZSBleHRyYWN0b3JzLlxuICogY29tYmluZUV4dHJhY3RvcnMoKSBkb2VzIHRoZSB3b3JrIG9mIGNvbWJpbmluZyB0aGVtLCBrZWVwaW5nIHRyYWNrIG9mIHRoZSBjdXJzb3IgdGhyb3VnaCBtdWx0aXBsZSBleHRyYWN0aW9ucy5cbiAqIFNvbWUgZXh0cmFjdGlvbnMgYXJlIHN1cGVyIGR1bWIgYW5kIHNpbXBsZVBhcnNlIGFuZCBmcm9tU3RyaW5ncyBoZWxwIERSWSB0aGVtLlxuICovXG5cbmZ1bmN0aW9uIGNvbWJpbmVSZWdleGVzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcmVnZXhlcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICByZWdleGVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIGZ1bGwgPSByZWdleGVzLnJlZHVjZShmdW5jdGlvbiAoZiwgcikge1xuICAgIHJldHVybiBmICsgci5zb3VyY2U7XG4gIH0sIFwiXCIpO1xuICByZXR1cm4gUmVnRXhwKFwiXlwiICsgZnVsbCArIFwiJFwiKTtcbn1cblxuZnVuY3Rpb24gY29tYmluZUV4dHJhY3RvcnMoKSB7XG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgZXh0cmFjdG9ycyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIGV4dHJhY3RvcnNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAobSkge1xuICAgIHJldHVybiBleHRyYWN0b3JzLnJlZHVjZShmdW5jdGlvbiAoX3JlZiwgZXgpIHtcbiAgICAgIHZhciBtZXJnZWRWYWxzID0gX3JlZlswXSxcbiAgICAgICAgICBtZXJnZWRab25lID0gX3JlZlsxXSxcbiAgICAgICAgICBjdXJzb3IgPSBfcmVmWzJdO1xuXG4gICAgICB2YXIgX2V4ID0gZXgobSwgY3Vyc29yKSxcbiAgICAgICAgICB2YWwgPSBfZXhbMF0sXG4gICAgICAgICAgem9uZSA9IF9leFsxXSxcbiAgICAgICAgICBuZXh0ID0gX2V4WzJdO1xuXG4gICAgICByZXR1cm4gW09iamVjdC5hc3NpZ24obWVyZ2VkVmFscywgdmFsKSwgbWVyZ2VkWm9uZSB8fCB6b25lLCBuZXh0XTtcbiAgICB9LCBbe30sIG51bGwsIDFdKS5zbGljZSgwLCAyKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2Uocykge1xuICBpZiAocyA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtudWxsLCBudWxsXTtcbiAgfVxuXG4gIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgcGF0dGVybnMgPSBuZXcgQXJyYXkoX2xlbjMgPiAxID8gX2xlbjMgLSAxIDogMCksIF9rZXkzID0gMTsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgIHBhdHRlcm5zW19rZXkzIC0gMV0gPSBhcmd1bWVudHNbX2tleTNdO1xuICB9XG5cbiAgZm9yICh2YXIgX2kgPSAwLCBfcGF0dGVybnMgPSBwYXR0ZXJuczsgX2kgPCBfcGF0dGVybnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgdmFyIF9wYXR0ZXJucyRfaSA9IF9wYXR0ZXJuc1tfaV0sXG4gICAgICAgIHJlZ2V4ID0gX3BhdHRlcm5zJF9pWzBdLFxuICAgICAgICBleHRyYWN0b3IgPSBfcGF0dGVybnMkX2lbMV07XG4gICAgdmFyIG0gPSByZWdleC5leGVjKHMpO1xuXG4gICAgaWYgKG0pIHtcbiAgICAgIHJldHVybiBleHRyYWN0b3IobSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFtudWxsLCBudWxsXTtcbn1cblxuZnVuY3Rpb24gc2ltcGxlUGFyc2UoKSB7XG4gIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwga2V5cyA9IG5ldyBBcnJheShfbGVuNCksIF9rZXk0ID0gMDsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgIGtleXNbX2tleTRdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAobWF0Y2gsIGN1cnNvcikge1xuICAgIHZhciByZXQgPSB7fTtcbiAgICB2YXIgaTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXRba2V5c1tpXV0gPSBwYXJzZUludGVnZXIobWF0Y2hbY3Vyc29yICsgaV0pO1xuICAgIH1cblxuICAgIHJldHVybiBbcmV0LCBudWxsLCBjdXJzb3IgKyBpXTtcbiAgfTtcbn0gLy8gSVNPIGFuZCBTUUwgcGFyc2luZ1xuXG5cbnZhciBvZmZzZXRSZWdleCA9IC8oPzooWil8KFsrLV1cXGRcXGQpKD86Oj8oXFxkXFxkKSk/KS8sXG4gICAgaXNvVGltZUJhc2VSZWdleCA9IC8oXFxkXFxkKSg/Ojo/KFxcZFxcZCkoPzo6PyhcXGRcXGQpKD86Wy4sXShcXGR7MSw5fSkpPyk/KT8vLFxuICAgIGlzb1RpbWVSZWdleCA9IFJlZ0V4cChcIlwiICsgaXNvVGltZUJhc2VSZWdleC5zb3VyY2UgKyBvZmZzZXRSZWdleC5zb3VyY2UgKyBcIj9cIiksXG4gICAgaXNvVGltZUV4dGVuc2lvblJlZ2V4ID0gUmVnRXhwKFwiKD86VFwiICsgaXNvVGltZVJlZ2V4LnNvdXJjZSArIFwiKT9cIiksXG4gICAgaXNvWW1kUmVnZXggPSAvKFsrLV1cXGR7Nn18XFxkezR9KSg/Oi0/KFxcZFxcZCkoPzotPyhcXGRcXGQpKT8pPy8sXG4gICAgaXNvV2Vla1JlZ2V4ID0gLyhcXGR7NH0pLT9XKFxcZFxcZCkoPzotPyhcXGQpKT8vLFxuICAgIGlzb09yZGluYWxSZWdleCA9IC8oXFxkezR9KS0/KFxcZHszfSkvLFxuICAgIGV4dHJhY3RJU09XZWVrRGF0YSA9IHNpbXBsZVBhcnNlKFwid2Vla1llYXJcIiwgXCJ3ZWVrTnVtYmVyXCIsIFwid2Vla0RheVwiKSxcbiAgICBleHRyYWN0SVNPT3JkaW5hbERhdGEgPSBzaW1wbGVQYXJzZShcInllYXJcIiwgXCJvcmRpbmFsXCIpLFxuICAgIHNxbFltZFJlZ2V4ID0gLyhcXGR7NH0pLShcXGRcXGQpLShcXGRcXGQpLyxcbiAgICAvLyBkdW1iZWQtZG93biB2ZXJzaW9uIG9mIHRoZSBJU08gb25lXG5zcWxUaW1lUmVnZXggPSBSZWdFeHAoaXNvVGltZUJhc2VSZWdleC5zb3VyY2UgKyBcIiA/KD86XCIgKyBvZmZzZXRSZWdleC5zb3VyY2UgKyBcInwoXCIgKyBpYW5hUmVnZXguc291cmNlICsgXCIpKT9cIiksXG4gICAgc3FsVGltZUV4dGVuc2lvblJlZ2V4ID0gUmVnRXhwKFwiKD86IFwiICsgc3FsVGltZVJlZ2V4LnNvdXJjZSArIFwiKT9cIik7XG5cbmZ1bmN0aW9uIGludChtYXRjaCwgcG9zLCBmYWxsYmFjaykge1xuICB2YXIgbSA9IG1hdGNoW3Bvc107XG4gIHJldHVybiBpc1VuZGVmaW5lZChtKSA/IGZhbGxiYWNrIDogcGFyc2VJbnRlZ2VyKG0pO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0SVNPWW1kKG1hdGNoLCBjdXJzb3IpIHtcbiAgdmFyIGl0ZW0gPSB7XG4gICAgeWVhcjogaW50KG1hdGNoLCBjdXJzb3IpLFxuICAgIG1vbnRoOiBpbnQobWF0Y2gsIGN1cnNvciArIDEsIDEpLFxuICAgIGRheTogaW50KG1hdGNoLCBjdXJzb3IgKyAyLCAxKVxuICB9O1xuICByZXR1cm4gW2l0ZW0sIG51bGwsIGN1cnNvciArIDNdO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0SVNPVGltZShtYXRjaCwgY3Vyc29yKSB7XG4gIHZhciBpdGVtID0ge1xuICAgIGhvdXI6IGludChtYXRjaCwgY3Vyc29yLCAwKSxcbiAgICBtaW51dGU6IGludChtYXRjaCwgY3Vyc29yICsgMSwgMCksXG4gICAgc2Vjb25kOiBpbnQobWF0Y2gsIGN1cnNvciArIDIsIDApLFxuICAgIG1pbGxpc2Vjb25kOiBwYXJzZU1pbGxpcyhtYXRjaFtjdXJzb3IgKyAzXSlcbiAgfTtcbiAgcmV0dXJuIFtpdGVtLCBudWxsLCBjdXJzb3IgKyA0XTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdElTT09mZnNldChtYXRjaCwgY3Vyc29yKSB7XG4gIHZhciBsb2NhbCA9ICFtYXRjaFtjdXJzb3JdICYmICFtYXRjaFtjdXJzb3IgKyAxXSxcbiAgICAgIGZ1bGxPZmZzZXQgPSBzaWduZWRPZmZzZXQobWF0Y2hbY3Vyc29yICsgMV0sIG1hdGNoW2N1cnNvciArIDJdKSxcbiAgICAgIHpvbmUgPSBsb2NhbCA/IG51bGwgOiBGaXhlZE9mZnNldFpvbmUuaW5zdGFuY2UoZnVsbE9mZnNldCk7XG4gIHJldHVybiBbe30sIHpvbmUsIGN1cnNvciArIDNdO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0SUFOQVpvbmUobWF0Y2gsIGN1cnNvcikge1xuICB2YXIgem9uZSA9IG1hdGNoW2N1cnNvcl0gPyBJQU5BWm9uZS5jcmVhdGUobWF0Y2hbY3Vyc29yXSkgOiBudWxsO1xuICByZXR1cm4gW3t9LCB6b25lLCBjdXJzb3IgKyAxXTtcbn0gLy8gSVNPIGR1cmF0aW9uIHBhcnNpbmdcblxuXG52YXIgaXNvRHVyYXRpb24gPSAvXi0/UCg/Oig/OigtP1xcZHsxLDl9KVkpPyg/OigtP1xcZHsxLDl9KU0pPyg/OigtP1xcZHsxLDl9KVcpPyg/OigtP1xcZHsxLDl9KUQpPyg/OlQoPzooLT9cXGR7MSw5fSlIKT8oPzooLT9cXGR7MSw5fSlNKT8oPzooLT9cXGR7MSw5fSkoPzpbLixdKC0/XFxkezEsOX0pKT9TKT8pPykkLztcblxuZnVuY3Rpb24gZXh0cmFjdElTT0R1cmF0aW9uKG1hdGNoKSB7XG4gIHZhciBzID0gbWF0Y2hbMF0sXG4gICAgICB5ZWFyU3RyID0gbWF0Y2hbMV0sXG4gICAgICBtb250aFN0ciA9IG1hdGNoWzJdLFxuICAgICAgd2Vla1N0ciA9IG1hdGNoWzNdLFxuICAgICAgZGF5U3RyID0gbWF0Y2hbNF0sXG4gICAgICBob3VyU3RyID0gbWF0Y2hbNV0sXG4gICAgICBtaW51dGVTdHIgPSBtYXRjaFs2XSxcbiAgICAgIHNlY29uZFN0ciA9IG1hdGNoWzddLFxuICAgICAgbWlsbGlzZWNvbmRzU3RyID0gbWF0Y2hbOF07XG4gIHZhciBoYXNOZWdhdGl2ZVByZWZpeCA9IHNbMF0gPT09IFwiLVwiO1xuXG4gIHZhciBtYXliZU5lZ2F0ZSA9IGZ1bmN0aW9uIG1heWJlTmVnYXRlKG51bSkge1xuICAgIHJldHVybiBudW0gJiYgaGFzTmVnYXRpdmVQcmVmaXggPyAtbnVtIDogbnVtO1xuICB9O1xuXG4gIHJldHVybiBbe1xuICAgIHllYXJzOiBtYXliZU5lZ2F0ZShwYXJzZUludGVnZXIoeWVhclN0cikpLFxuICAgIG1vbnRoczogbWF5YmVOZWdhdGUocGFyc2VJbnRlZ2VyKG1vbnRoU3RyKSksXG4gICAgd2Vla3M6IG1heWJlTmVnYXRlKHBhcnNlSW50ZWdlcih3ZWVrU3RyKSksXG4gICAgZGF5czogbWF5YmVOZWdhdGUocGFyc2VJbnRlZ2VyKGRheVN0cikpLFxuICAgIGhvdXJzOiBtYXliZU5lZ2F0ZShwYXJzZUludGVnZXIoaG91clN0cikpLFxuICAgIG1pbnV0ZXM6IG1heWJlTmVnYXRlKHBhcnNlSW50ZWdlcihtaW51dGVTdHIpKSxcbiAgICBzZWNvbmRzOiBtYXliZU5lZ2F0ZShwYXJzZUludGVnZXIoc2Vjb25kU3RyKSksXG4gICAgbWlsbGlzZWNvbmRzOiBtYXliZU5lZ2F0ZShwYXJzZU1pbGxpcyhtaWxsaXNlY29uZHNTdHIpKVxuICB9XTtcbn0gLy8gVGhlc2UgYXJlIGEgbGl0dGxlIGJyYWluZGVhZC4gRURUICpzaG91bGQqIHRlbGwgdXMgdGhhdCB3ZSdyZSBpbiwgc2F5LCBBbWVyaWNhL05ld19Zb3JrXG4vLyBhbmQgbm90IGp1c3QgdGhhdCB3ZSdyZSBpbiAtMjQwICpyaWdodCBub3cqLiBCdXQgc2luY2UgSSBkb24ndCB0aGluayB0aGVzZSBhcmUgdXNlZCB0aGF0IG9mdGVuXG4vLyBJJ20ganVzdCBnb2luZyB0byBpZ25vcmUgdGhhdFxuXG5cbnZhciBvYnNPZmZzZXRzID0ge1xuICBHTVQ6IDAsXG4gIEVEVDogLTQgKiA2MCxcbiAgRVNUOiAtNSAqIDYwLFxuICBDRFQ6IC01ICogNjAsXG4gIENTVDogLTYgKiA2MCxcbiAgTURUOiAtNiAqIDYwLFxuICBNU1Q6IC03ICogNjAsXG4gIFBEVDogLTcgKiA2MCxcbiAgUFNUOiAtOCAqIDYwXG59O1xuXG5mdW5jdGlvbiBmcm9tU3RyaW5ncyh3ZWVrZGF5U3RyLCB5ZWFyU3RyLCBtb250aFN0ciwgZGF5U3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0cikge1xuICB2YXIgcmVzdWx0ID0ge1xuICAgIHllYXI6IHllYXJTdHIubGVuZ3RoID09PSAyID8gdW50cnVuY2F0ZVllYXIocGFyc2VJbnRlZ2VyKHllYXJTdHIpKSA6IHBhcnNlSW50ZWdlcih5ZWFyU3RyKSxcbiAgICBtb250aDogbW9udGhzU2hvcnQuaW5kZXhPZihtb250aFN0cikgKyAxLFxuICAgIGRheTogcGFyc2VJbnRlZ2VyKGRheVN0ciksXG4gICAgaG91cjogcGFyc2VJbnRlZ2VyKGhvdXJTdHIpLFxuICAgIG1pbnV0ZTogcGFyc2VJbnRlZ2VyKG1pbnV0ZVN0cilcbiAgfTtcbiAgaWYgKHNlY29uZFN0cikgcmVzdWx0LnNlY29uZCA9IHBhcnNlSW50ZWdlcihzZWNvbmRTdHIpO1xuXG4gIGlmICh3ZWVrZGF5U3RyKSB7XG4gICAgcmVzdWx0LndlZWtkYXkgPSB3ZWVrZGF5U3RyLmxlbmd0aCA+IDMgPyB3ZWVrZGF5c0xvbmcuaW5kZXhPZih3ZWVrZGF5U3RyKSArIDEgOiB3ZWVrZGF5c1Nob3J0LmluZGV4T2Yod2Vla2RheVN0cikgKyAxO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn0gLy8gUkZDIDI4MjIvNTMyMlxuXG5cbnZhciByZmMyODIyID0gL14oPzooTW9ufFR1ZXxXZWR8VGh1fEZyaXxTYXR8U3VuKSxcXHMpPyhcXGR7MSwyfSlcXHMoSmFufEZlYnxNYXJ8QXByfE1heXxKdW58SnVsfEF1Z3xTZXB8T2N0fE5vdnxEZWMpXFxzKFxcZHsyLDR9KVxccyhcXGRcXGQpOihcXGRcXGQpKD86OihcXGRcXGQpKT9cXHMoPzooVVR8R01UfFtFQ01QXVtTRF1UKXwoW1p6XSl8KD86KFsrLV1cXGRcXGQpKFxcZFxcZCkpKSQvO1xuXG5mdW5jdGlvbiBleHRyYWN0UkZDMjgyMihtYXRjaCkge1xuICB2YXIgd2Vla2RheVN0ciA9IG1hdGNoWzFdLFxuICAgICAgZGF5U3RyID0gbWF0Y2hbMl0sXG4gICAgICBtb250aFN0ciA9IG1hdGNoWzNdLFxuICAgICAgeWVhclN0ciA9IG1hdGNoWzRdLFxuICAgICAgaG91clN0ciA9IG1hdGNoWzVdLFxuICAgICAgbWludXRlU3RyID0gbWF0Y2hbNl0sXG4gICAgICBzZWNvbmRTdHIgPSBtYXRjaFs3XSxcbiAgICAgIG9ic09mZnNldCA9IG1hdGNoWzhdLFxuICAgICAgbWlsT2Zmc2V0ID0gbWF0Y2hbOV0sXG4gICAgICBvZmZIb3VyU3RyID0gbWF0Y2hbMTBdLFxuICAgICAgb2ZmTWludXRlU3RyID0gbWF0Y2hbMTFdLFxuICAgICAgcmVzdWx0ID0gZnJvbVN0cmluZ3Mod2Vla2RheVN0ciwgeWVhclN0ciwgbW9udGhTdHIsIGRheVN0ciwgaG91clN0ciwgbWludXRlU3RyLCBzZWNvbmRTdHIpO1xuICB2YXIgb2Zmc2V0O1xuXG4gIGlmIChvYnNPZmZzZXQpIHtcbiAgICBvZmZzZXQgPSBvYnNPZmZzZXRzW29ic09mZnNldF07XG4gIH0gZWxzZSBpZiAobWlsT2Zmc2V0KSB7XG4gICAgb2Zmc2V0ID0gMDtcbiAgfSBlbHNlIHtcbiAgICBvZmZzZXQgPSBzaWduZWRPZmZzZXQob2ZmSG91clN0ciwgb2ZmTWludXRlU3RyKTtcbiAgfVxuXG4gIHJldHVybiBbcmVzdWx0LCBuZXcgRml4ZWRPZmZzZXRab25lKG9mZnNldCldO1xufVxuXG5mdW5jdGlvbiBwcmVwcm9jZXNzUkZDMjgyMihzKSB7XG4gIC8vIFJlbW92ZSBjb21tZW50cyBhbmQgZm9sZGluZyB3aGl0ZXNwYWNlIGFuZCByZXBsYWNlIG11bHRpcGxlLXNwYWNlcyB3aXRoIGEgc2luZ2xlIHNwYWNlXG4gIHJldHVybiBzLnJlcGxhY2UoL1xcKFteKV0qXFwpfFtcXG5cXHRdL2csIFwiIFwiKS5yZXBsYWNlKC8oXFxzXFxzKykvZywgXCIgXCIpLnRyaW0oKTtcbn0gLy8gaHR0cCBkYXRlXG5cblxudmFyIHJmYzExMjMgPSAvXihNb258VHVlfFdlZHxUaHV8RnJpfFNhdHxTdW4pLCAoXFxkXFxkKSAoSmFufEZlYnxNYXJ8QXByfE1heXxKdW58SnVsfEF1Z3xTZXB8T2N0fE5vdnxEZWMpIChcXGR7NH0pIChcXGRcXGQpOihcXGRcXGQpOihcXGRcXGQpIEdNVCQvLFxuICAgIHJmYzg1MCA9IC9eKE1vbmRheXxUdWVzZGF5fFdlZHNkYXl8VGh1cnNkYXl8RnJpZGF5fFNhdHVyZGF5fFN1bmRheSksIChcXGRcXGQpLShKYW58RmVifE1hcnxBcHJ8TWF5fEp1bnxKdWx8QXVnfFNlcHxPY3R8Tm92fERlYyktKFxcZFxcZCkgKFxcZFxcZCk6KFxcZFxcZCk6KFxcZFxcZCkgR01UJC8sXG4gICAgYXNjaWkgPSAvXihNb258VHVlfFdlZHxUaHV8RnJpfFNhdHxTdW4pIChKYW58RmVifE1hcnxBcHJ8TWF5fEp1bnxKdWx8QXVnfFNlcHxPY3R8Tm92fERlYykgKCBcXGR8XFxkXFxkKSAoXFxkXFxkKTooXFxkXFxkKTooXFxkXFxkKSAoXFxkezR9KSQvO1xuXG5mdW5jdGlvbiBleHRyYWN0UkZDMTEyM09yODUwKG1hdGNoKSB7XG4gIHZhciB3ZWVrZGF5U3RyID0gbWF0Y2hbMV0sXG4gICAgICBkYXlTdHIgPSBtYXRjaFsyXSxcbiAgICAgIG1vbnRoU3RyID0gbWF0Y2hbM10sXG4gICAgICB5ZWFyU3RyID0gbWF0Y2hbNF0sXG4gICAgICBob3VyU3RyID0gbWF0Y2hbNV0sXG4gICAgICBtaW51dGVTdHIgPSBtYXRjaFs2XSxcbiAgICAgIHNlY29uZFN0ciA9IG1hdGNoWzddLFxuICAgICAgcmVzdWx0ID0gZnJvbVN0cmluZ3Mod2Vla2RheVN0ciwgeWVhclN0ciwgbW9udGhTdHIsIGRheVN0ciwgaG91clN0ciwgbWludXRlU3RyLCBzZWNvbmRTdHIpO1xuICByZXR1cm4gW3Jlc3VsdCwgRml4ZWRPZmZzZXRab25lLnV0Y0luc3RhbmNlXTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdEFTQ0lJKG1hdGNoKSB7XG4gIHZhciB3ZWVrZGF5U3RyID0gbWF0Y2hbMV0sXG4gICAgICBtb250aFN0ciA9IG1hdGNoWzJdLFxuICAgICAgZGF5U3RyID0gbWF0Y2hbM10sXG4gICAgICBob3VyU3RyID0gbWF0Y2hbNF0sXG4gICAgICBtaW51dGVTdHIgPSBtYXRjaFs1XSxcbiAgICAgIHNlY29uZFN0ciA9IG1hdGNoWzZdLFxuICAgICAgeWVhclN0ciA9IG1hdGNoWzddLFxuICAgICAgcmVzdWx0ID0gZnJvbVN0cmluZ3Mod2Vla2RheVN0ciwgeWVhclN0ciwgbW9udGhTdHIsIGRheVN0ciwgaG91clN0ciwgbWludXRlU3RyLCBzZWNvbmRTdHIpO1xuICByZXR1cm4gW3Jlc3VsdCwgRml4ZWRPZmZzZXRab25lLnV0Y0luc3RhbmNlXTtcbn1cblxudmFyIGlzb1ltZFdpdGhUaW1lRXh0ZW5zaW9uUmVnZXggPSBjb21iaW5lUmVnZXhlcyhpc29ZbWRSZWdleCwgaXNvVGltZUV4dGVuc2lvblJlZ2V4KTtcbnZhciBpc29XZWVrV2l0aFRpbWVFeHRlbnNpb25SZWdleCA9IGNvbWJpbmVSZWdleGVzKGlzb1dlZWtSZWdleCwgaXNvVGltZUV4dGVuc2lvblJlZ2V4KTtcbnZhciBpc29PcmRpbmFsV2l0aFRpbWVFeHRlbnNpb25SZWdleCA9IGNvbWJpbmVSZWdleGVzKGlzb09yZGluYWxSZWdleCwgaXNvVGltZUV4dGVuc2lvblJlZ2V4KTtcbnZhciBpc29UaW1lQ29tYmluZWRSZWdleCA9IGNvbWJpbmVSZWdleGVzKGlzb1RpbWVSZWdleCk7XG52YXIgZXh0cmFjdElTT1ltZFRpbWVBbmRPZmZzZXQgPSBjb21iaW5lRXh0cmFjdG9ycyhleHRyYWN0SVNPWW1kLCBleHRyYWN0SVNPVGltZSwgZXh0cmFjdElTT09mZnNldCk7XG52YXIgZXh0cmFjdElTT1dlZWtUaW1lQW5kT2Zmc2V0ID0gY29tYmluZUV4dHJhY3RvcnMoZXh0cmFjdElTT1dlZWtEYXRhLCBleHRyYWN0SVNPVGltZSwgZXh0cmFjdElTT09mZnNldCk7XG52YXIgZXh0cmFjdElTT09yZGluYWxEYXRhQW5kVGltZSA9IGNvbWJpbmVFeHRyYWN0b3JzKGV4dHJhY3RJU09PcmRpbmFsRGF0YSwgZXh0cmFjdElTT1RpbWUpO1xudmFyIGV4dHJhY3RJU09UaW1lQW5kT2Zmc2V0ID0gY29tYmluZUV4dHJhY3RvcnMoZXh0cmFjdElTT1RpbWUsIGV4dHJhY3RJU09PZmZzZXQpO1xuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlSVNPRGF0ZShzKSB7XG4gIHJldHVybiBwYXJzZShzLCBbaXNvWW1kV2l0aFRpbWVFeHRlbnNpb25SZWdleCwgZXh0cmFjdElTT1ltZFRpbWVBbmRPZmZzZXRdLCBbaXNvV2Vla1dpdGhUaW1lRXh0ZW5zaW9uUmVnZXgsIGV4dHJhY3RJU09XZWVrVGltZUFuZE9mZnNldF0sIFtpc29PcmRpbmFsV2l0aFRpbWVFeHRlbnNpb25SZWdleCwgZXh0cmFjdElTT09yZGluYWxEYXRhQW5kVGltZV0sIFtpc29UaW1lQ29tYmluZWRSZWdleCwgZXh0cmFjdElTT1RpbWVBbmRPZmZzZXRdKTtcbn1cbmZ1bmN0aW9uIHBhcnNlUkZDMjgyMkRhdGUocykge1xuICByZXR1cm4gcGFyc2UocHJlcHJvY2Vzc1JGQzI4MjIocyksIFtyZmMyODIyLCBleHRyYWN0UkZDMjgyMl0pO1xufVxuZnVuY3Rpb24gcGFyc2VIVFRQRGF0ZShzKSB7XG4gIHJldHVybiBwYXJzZShzLCBbcmZjMTEyMywgZXh0cmFjdFJGQzExMjNPcjg1MF0sIFtyZmM4NTAsIGV4dHJhY3RSRkMxMTIzT3I4NTBdLCBbYXNjaWksIGV4dHJhY3RBU0NJSV0pO1xufVxuZnVuY3Rpb24gcGFyc2VJU09EdXJhdGlvbihzKSB7XG4gIHJldHVybiBwYXJzZShzLCBbaXNvRHVyYXRpb24sIGV4dHJhY3RJU09EdXJhdGlvbl0pO1xufVxudmFyIHNxbFltZFdpdGhUaW1lRXh0ZW5zaW9uUmVnZXggPSBjb21iaW5lUmVnZXhlcyhzcWxZbWRSZWdleCwgc3FsVGltZUV4dGVuc2lvblJlZ2V4KTtcbnZhciBzcWxUaW1lQ29tYmluZWRSZWdleCA9IGNvbWJpbmVSZWdleGVzKHNxbFRpbWVSZWdleCk7XG52YXIgZXh0cmFjdElTT1ltZFRpbWVPZmZzZXRBbmRJQU5BWm9uZSA9IGNvbWJpbmVFeHRyYWN0b3JzKGV4dHJhY3RJU09ZbWQsIGV4dHJhY3RJU09UaW1lLCBleHRyYWN0SVNPT2Zmc2V0LCBleHRyYWN0SUFOQVpvbmUpO1xudmFyIGV4dHJhY3RJU09UaW1lT2Zmc2V0QW5kSUFOQVpvbmUgPSBjb21iaW5lRXh0cmFjdG9ycyhleHRyYWN0SVNPVGltZSwgZXh0cmFjdElTT09mZnNldCwgZXh0cmFjdElBTkFab25lKTtcbmZ1bmN0aW9uIHBhcnNlU1FMKHMpIHtcbiAgcmV0dXJuIHBhcnNlKHMsIFtzcWxZbWRXaXRoVGltZUV4dGVuc2lvblJlZ2V4LCBleHRyYWN0SVNPWW1kVGltZU9mZnNldEFuZElBTkFab25lXSwgW3NxbFRpbWVDb21iaW5lZFJlZ2V4LCBleHRyYWN0SVNPVGltZU9mZnNldEFuZElBTkFab25lXSk7XG59XG5cbnZhciBJTlZBTElEID0gXCJJbnZhbGlkIER1cmF0aW9uXCI7IC8vIHVuaXQgY29udmVyc2lvbiBjb25zdGFudHNcblxudmFyIGxvd09yZGVyTWF0cml4ID0ge1xuICB3ZWVrczoge1xuICAgIGRheXM6IDcsXG4gICAgaG91cnM6IDcgKiAyNCxcbiAgICBtaW51dGVzOiA3ICogMjQgKiA2MCxcbiAgICBzZWNvbmRzOiA3ICogMjQgKiA2MCAqIDYwLFxuICAgIG1pbGxpc2Vjb25kczogNyAqIDI0ICogNjAgKiA2MCAqIDEwMDBcbiAgfSxcbiAgZGF5czoge1xuICAgIGhvdXJzOiAyNCxcbiAgICBtaW51dGVzOiAyNCAqIDYwLFxuICAgIHNlY29uZHM6IDI0ICogNjAgKiA2MCxcbiAgICBtaWxsaXNlY29uZHM6IDI0ICogNjAgKiA2MCAqIDEwMDBcbiAgfSxcbiAgaG91cnM6IHtcbiAgICBtaW51dGVzOiA2MCxcbiAgICBzZWNvbmRzOiA2MCAqIDYwLFxuICAgIG1pbGxpc2Vjb25kczogNjAgKiA2MCAqIDEwMDBcbiAgfSxcbiAgbWludXRlczoge1xuICAgIHNlY29uZHM6IDYwLFxuICAgIG1pbGxpc2Vjb25kczogNjAgKiAxMDAwXG4gIH0sXG4gIHNlY29uZHM6IHtcbiAgICBtaWxsaXNlY29uZHM6IDEwMDBcbiAgfVxufSxcbiAgICBjYXN1YWxNYXRyaXggPSBPYmplY3QuYXNzaWduKHtcbiAgeWVhcnM6IHtcbiAgICBtb250aHM6IDEyLFxuICAgIHdlZWtzOiA1MixcbiAgICBkYXlzOiAzNjUsXG4gICAgaG91cnM6IDM2NSAqIDI0LFxuICAgIG1pbnV0ZXM6IDM2NSAqIDI0ICogNjAsXG4gICAgc2Vjb25kczogMzY1ICogMjQgKiA2MCAqIDYwLFxuICAgIG1pbGxpc2Vjb25kczogMzY1ICogMjQgKiA2MCAqIDYwICogMTAwMFxuICB9LFxuICBxdWFydGVyczoge1xuICAgIG1vbnRoczogMyxcbiAgICB3ZWVrczogMTMsXG4gICAgZGF5czogOTEsXG4gICAgaG91cnM6IDkxICogMjQsXG4gICAgbWludXRlczogOTEgKiAyNCAqIDYwLFxuICAgIG1pbGxpc2Vjb25kczogOTEgKiAyNCAqIDYwICogNjAgKiAxMDAwXG4gIH0sXG4gIG1vbnRoczoge1xuICAgIHdlZWtzOiA0LFxuICAgIGRheXM6IDMwLFxuICAgIGhvdXJzOiAzMCAqIDI0LFxuICAgIG1pbnV0ZXM6IDMwICogMjQgKiA2MCxcbiAgICBzZWNvbmRzOiAzMCAqIDI0ICogNjAgKiA2MCxcbiAgICBtaWxsaXNlY29uZHM6IDMwICogMjQgKiA2MCAqIDYwICogMTAwMFxuICB9XG59LCBsb3dPcmRlck1hdHJpeCksXG4gICAgZGF5c0luWWVhckFjY3VyYXRlID0gMTQ2MDk3LjAgLyA0MDAsXG4gICAgZGF5c0luTW9udGhBY2N1cmF0ZSA9IDE0NjA5Ny4wIC8gNDgwMCxcbiAgICBhY2N1cmF0ZU1hdHJpeCA9IE9iamVjdC5hc3NpZ24oe1xuICB5ZWFyczoge1xuICAgIG1vbnRoczogMTIsXG4gICAgd2Vla3M6IGRheXNJblllYXJBY2N1cmF0ZSAvIDcsXG4gICAgZGF5czogZGF5c0luWWVhckFjY3VyYXRlLFxuICAgIGhvdXJzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCxcbiAgICBtaW51dGVzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwLFxuICAgIHNlY29uZHM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAgKiA2MCxcbiAgICBtaWxsaXNlY29uZHM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAgKiA2MCAqIDEwMDBcbiAgfSxcbiAgcXVhcnRlcnM6IHtcbiAgICBtb250aHM6IDMsXG4gICAgd2Vla3M6IGRheXNJblllYXJBY2N1cmF0ZSAvIDI4LFxuICAgIGRheXM6IGRheXNJblllYXJBY2N1cmF0ZSAvIDQsXG4gICAgaG91cnM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0IC8gNCxcbiAgICBtaW51dGVzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwIC8gNCxcbiAgICBzZWNvbmRzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwICogNjAgLyA0LFxuICAgIG1pbGxpc2Vjb25kczogZGF5c0luWWVhckFjY3VyYXRlICogMjQgKiA2MCAqIDYwICogMTAwMCAvIDRcbiAgfSxcbiAgbW9udGhzOiB7XG4gICAgd2Vla3M6IGRheXNJbk1vbnRoQWNjdXJhdGUgLyA3LFxuICAgIGRheXM6IGRheXNJbk1vbnRoQWNjdXJhdGUsXG4gICAgaG91cnM6IGRheXNJbk1vbnRoQWNjdXJhdGUgKiAyNCxcbiAgICBtaW51dGVzOiBkYXlzSW5Nb250aEFjY3VyYXRlICogMjQgKiA2MCxcbiAgICBzZWNvbmRzOiBkYXlzSW5Nb250aEFjY3VyYXRlICogMjQgKiA2MCAqIDYwLFxuICAgIG1pbGxpc2Vjb25kczogZGF5c0luTW9udGhBY2N1cmF0ZSAqIDI0ICogNjAgKiA2MCAqIDEwMDBcbiAgfVxufSwgbG93T3JkZXJNYXRyaXgpOyAvLyB1bml0cyBvcmRlcmVkIGJ5IHNpemVcblxudmFyIG9yZGVyZWRVbml0cyA9IFtcInllYXJzXCIsIFwicXVhcnRlcnNcIiwgXCJtb250aHNcIiwgXCJ3ZWVrc1wiLCBcImRheXNcIiwgXCJob3Vyc1wiLCBcIm1pbnV0ZXNcIiwgXCJzZWNvbmRzXCIsIFwibWlsbGlzZWNvbmRzXCJdO1xudmFyIHJldmVyc2VVbml0cyA9IG9yZGVyZWRVbml0cy5zbGljZSgwKS5yZXZlcnNlKCk7IC8vIGNsb25lIHJlYWxseSBtZWFucyBcImNyZWF0ZSBhbm90aGVyIGluc3RhbmNlIGp1c3QgbGlrZSB0aGlzIG9uZSwgYnV0IHdpdGggdGhlc2UgY2hhbmdlc1wiXG5cbmZ1bmN0aW9uIGNsb25lKGR1ciwgYWx0cywgY2xlYXIpIHtcbiAgaWYgKGNsZWFyID09PSB2b2lkIDApIHtcbiAgICBjbGVhciA9IGZhbHNlO1xuICB9XG5cbiAgLy8gZGVlcCBtZXJnZSBmb3IgdmFsc1xuICB2YXIgY29uZiA9IHtcbiAgICB2YWx1ZXM6IGNsZWFyID8gYWx0cy52YWx1ZXMgOiBPYmplY3QuYXNzaWduKHt9LCBkdXIudmFsdWVzLCBhbHRzLnZhbHVlcyB8fCB7fSksXG4gICAgbG9jOiBkdXIubG9jLmNsb25lKGFsdHMubG9jKSxcbiAgICBjb252ZXJzaW9uQWNjdXJhY3k6IGFsdHMuY29udmVyc2lvbkFjY3VyYWN5IHx8IGR1ci5jb252ZXJzaW9uQWNjdXJhY3lcbiAgfTtcbiAgcmV0dXJuIG5ldyBEdXJhdGlvbihjb25mKTtcbn1cblxuZnVuY3Rpb24gYW50aVRydW5jKG4pIHtcbiAgcmV0dXJuIG4gPCAwID8gTWF0aC5mbG9vcihuKSA6IE1hdGguY2VpbChuKTtcbn0gLy8gTkI6IG11dGF0ZXMgcGFyYW1ldGVyc1xuXG5cbmZ1bmN0aW9uIGNvbnZlcnQobWF0cml4LCBmcm9tTWFwLCBmcm9tVW5pdCwgdG9NYXAsIHRvVW5pdCkge1xuICB2YXIgY29udiA9IG1hdHJpeFt0b1VuaXRdW2Zyb21Vbml0XSxcbiAgICAgIHJhdyA9IGZyb21NYXBbZnJvbVVuaXRdIC8gY29udixcbiAgICAgIHNhbWVTaWduID0gTWF0aC5zaWduKHJhdykgPT09IE1hdGguc2lnbih0b01hcFt0b1VuaXRdKSxcbiAgICAgIC8vIG9rLCBzbyB0aGlzIGlzIHdpbGQsIGJ1dCBzZWUgdGhlIG1hdHJpeCBpbiB0aGUgdGVzdHNcbiAgYWRkZWQgPSAhc2FtZVNpZ24gJiYgdG9NYXBbdG9Vbml0XSAhPT0gMCAmJiBNYXRoLmFicyhyYXcpIDw9IDEgPyBhbnRpVHJ1bmMocmF3KSA6IE1hdGgudHJ1bmMocmF3KTtcbiAgdG9NYXBbdG9Vbml0XSArPSBhZGRlZDtcbiAgZnJvbU1hcFtmcm9tVW5pdF0gLT0gYWRkZWQgKiBjb252O1xufSAvLyBOQjogbXV0YXRlcyBwYXJhbWV0ZXJzXG5cblxuZnVuY3Rpb24gbm9ybWFsaXplVmFsdWVzKG1hdHJpeCwgdmFscykge1xuICByZXZlcnNlVW5pdHMucmVkdWNlKGZ1bmN0aW9uIChwcmV2aW91cywgY3VycmVudCkge1xuICAgIGlmICghaXNVbmRlZmluZWQodmFsc1tjdXJyZW50XSkpIHtcbiAgICAgIGlmIChwcmV2aW91cykge1xuICAgICAgICBjb252ZXJ0KG1hdHJpeCwgdmFscywgcHJldmlvdXMsIHZhbHMsIGN1cnJlbnQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3VycmVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHByZXZpb3VzO1xuICAgIH1cbiAgfSwgbnVsbCk7XG59XG4vKipcbiAqIEEgRHVyYXRpb24gb2JqZWN0IHJlcHJlc2VudHMgYSBwZXJpb2Qgb2YgdGltZSwgbGlrZSBcIjIgbW9udGhzXCIgb3IgXCIxIGRheSwgMSBob3VyXCIuIENvbmNlcHR1YWxseSwgaXQncyBqdXN0IGEgbWFwIG9mIHVuaXRzIHRvIHRoZWlyIHF1YW50aXRpZXMsIGFjY29tcGFuaWVkIGJ5IHNvbWUgYWRkaXRpb25hbCBjb25maWd1cmF0aW9uIGFuZCBtZXRob2RzIGZvciBjcmVhdGluZywgcGFyc2luZywgaW50ZXJyb2dhdGluZywgdHJhbnNmb3JtaW5nLCBhbmQgZm9ybWF0dGluZyB0aGVtLiBUaGV5IGNhbiBiZSB1c2VkIG9uIHRoZWlyIG93biBvciBpbiBjb25qdW5jdGlvbiB3aXRoIG90aGVyIEx1eG9uIHR5cGVzOyBmb3IgZXhhbXBsZSwgeW91IGNhbiB1c2Uge0BsaW5rIERhdGVUaW1lLnBsdXN9IHRvIGFkZCBhIER1cmF0aW9uIG9iamVjdCB0byBhIERhdGVUaW1lLCBwcm9kdWNpbmcgYW5vdGhlciBEYXRlVGltZS5cbiAqXG4gKiBIZXJlIGlzIGEgYnJpZWYgb3ZlcnZpZXcgb2YgY29tbW9ubHkgdXNlZCBtZXRob2RzIGFuZCBnZXR0ZXJzIGluIER1cmF0aW9uOlxuICpcbiAqICogKipDcmVhdGlvbioqIFRvIGNyZWF0ZSBhIER1cmF0aW9uLCB1c2Uge0BsaW5rIER1cmF0aW9uLmZyb21NaWxsaXN9LCB7QGxpbmsgRHVyYXRpb24uZnJvbU9iamVjdH0sIG9yIHtAbGluayBEdXJhdGlvbi5mcm9tSVNPfS5cbiAqICogKipVbml0IHZhbHVlcyoqIFNlZSB0aGUge0BsaW5rIER1cmF0aW9uLnllYXJzfSwge0BsaW5rIER1cmF0aW9uLm1vbnRoc30sIHtAbGluayBEdXJhdGlvbi53ZWVrc30sIHtAbGluayBEdXJhdGlvbi5kYXlzfSwge0BsaW5rIER1cmF0aW9uLmhvdXJzfSwge0BsaW5rIER1cmF0aW9uLm1pbnV0ZXN9LCB7QGxpbmsgRHVyYXRpb24uc2Vjb25kc30sIHtAbGluayBEdXJhdGlvbi5taWxsaXNlY29uZHN9IGFjY2Vzc29ycy5cbiAqICogKipDb25maWd1cmF0aW9uKiogU2VlICB7QGxpbmsgRHVyYXRpb24ubG9jYWxlfSBhbmQge0BsaW5rIER1cmF0aW9uLm51bWJlcmluZ1N5c3RlbX0gYWNjZXNzb3JzLlxuICogKiAqKlRyYW5zZm9ybWF0aW9uKiogVG8gY3JlYXRlIG5ldyBEdXJhdGlvbnMgb3V0IG9mIG9sZCBvbmVzIHVzZSB7QGxpbmsgRHVyYXRpb24ucGx1c30sIHtAbGluayBEdXJhdGlvbi5taW51c30sIHtAbGluayBEdXJhdGlvbi5ub3JtYWxpemV9LCB7QGxpbmsgRHVyYXRpb24uc2V0fSwge0BsaW5rIER1cmF0aW9uLnJlY29uZmlndXJlfSwge0BsaW5rIER1cmF0aW9uLnNoaWZ0VG99LCBhbmQge0BsaW5rIER1cmF0aW9uLm5lZ2F0ZX0uXG4gKiAqICoqT3V0cHV0KiogVG8gY29udmVydCB0aGUgRHVyYXRpb24gaW50byBvdGhlciByZXByZXNlbnRhdGlvbnMsIHNlZSB7QGxpbmsgRHVyYXRpb24uYXN9LCB7QGxpbmsgRHVyYXRpb24udG9JU099LCB7QGxpbmsgRHVyYXRpb24udG9Gb3JtYXR9LCBhbmQge0BsaW5rIER1cmF0aW9uLnRvSlNPTn1cbiAqXG4gKiBUaGVyZSdzIGFyZSBtb3JlIG1ldGhvZHMgZG9jdW1lbnRlZCBiZWxvdy4gSW4gYWRkaXRpb24sIGZvciBtb3JlIGluZm9ybWF0aW9uIG9uIHN1YnRsZXIgdG9waWNzIGxpa2UgaW50ZXJuYXRpb25hbGl6YXRpb24gYW5kIHZhbGlkaXR5LCBzZWUgdGhlIGV4dGVybmFsIGRvY3VtZW50YXRpb24uXG4gKi9cblxuXG52YXIgRHVyYXRpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZ1bmN0aW9uIER1cmF0aW9uKGNvbmZpZykge1xuICAgIHZhciBhY2N1cmF0ZSA9IGNvbmZpZy5jb252ZXJzaW9uQWNjdXJhY3kgPT09IFwibG9uZ3Rlcm1cIiB8fCBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cblxuICAgIHRoaXMudmFsdWVzID0gY29uZmlnLnZhbHVlcztcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cblxuICAgIHRoaXMubG9jID0gY29uZmlnLmxvYyB8fCBMb2NhbGUuY3JlYXRlKCk7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG5cbiAgICB0aGlzLmNvbnZlcnNpb25BY2N1cmFjeSA9IGFjY3VyYXRlID8gXCJsb25ndGVybVwiIDogXCJjYXN1YWxcIjtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cblxuICAgIHRoaXMuaW52YWxpZCA9IGNvbmZpZy5pbnZhbGlkIHx8IG51bGw7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG5cbiAgICB0aGlzLm1hdHJpeCA9IGFjY3VyYXRlID8gYWNjdXJhdGVNYXRyaXggOiBjYXN1YWxNYXRyaXg7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG5cbiAgICB0aGlzLmlzTHV4b25EdXJhdGlvbiA9IHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBEdXJhdGlvbiBmcm9tIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcy5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50IG9mIG1pbGxpc2Vjb25kc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgZm9yIHBhcnNpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIHRoZSBsb2NhbGUgdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuXG5cbiAgRHVyYXRpb24uZnJvbU1pbGxpcyA9IGZ1bmN0aW9uIGZyb21NaWxsaXMoY291bnQsIG9wdHMpIHtcbiAgICByZXR1cm4gRHVyYXRpb24uZnJvbU9iamVjdChPYmplY3QuYXNzaWduKHtcbiAgICAgIG1pbGxpc2Vjb25kczogY291bnRcbiAgICB9LCBvcHRzKSk7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhIER1cmF0aW9uIGZyb20gYSBKYXZhc2NyaXB0IG9iamVjdCB3aXRoIGtleXMgbGlrZSAneWVhcnMnIGFuZCAnaG91cnMuXG4gICAqIElmIHRoaXMgb2JqZWN0IGlzIGVtcHR5IHRoZW4gYSB6ZXJvIG1pbGxpc2Vjb25kcyBkdXJhdGlvbiBpcyByZXR1cm5lZC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIHRoZSBvYmplY3QgdG8gY3JlYXRlIHRoZSBEYXRlVGltZSBmcm9tXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoueWVhcnNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5xdWFydGVyc1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1vbnRoc1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLndlZWtzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouZGF5c1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLmhvdXJzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubWludXRlc1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLnNlY29uZHNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5taWxsaXNlY29uZHNcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvYmoubG9jYWxlPSdlbi1VUyddIC0gdGhlIGxvY2FsZSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9iai5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvYmouY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICA7XG5cbiAgRHVyYXRpb24uZnJvbU9iamVjdCA9IGZ1bmN0aW9uIGZyb21PYmplY3Qob2JqKSB7XG4gICAgaWYgKG9iaiA9PSBudWxsIHx8IHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcIkR1cmF0aW9uLmZyb21PYmplY3Q6IGFyZ3VtZW50IGV4cGVjdGVkIHRvIGJlIGFuIG9iamVjdCwgZ290IFwiICsgKG9iaiA9PT0gbnVsbCA/IFwibnVsbFwiIDogdHlwZW9mIG9iaikpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRHVyYXRpb24oe1xuICAgICAgdmFsdWVzOiBub3JtYWxpemVPYmplY3Qob2JqLCBEdXJhdGlvbi5ub3JtYWxpemVVbml0LCBbXCJsb2NhbGVcIiwgXCJudW1iZXJpbmdTeXN0ZW1cIiwgXCJjb252ZXJzaW9uQWNjdXJhY3lcIiwgXCJ6b25lXCIgLy8gYSBiaXQgb2YgZGVidDsgaXQncyBzdXBlciBpbmNvbnZlbmllbnQgaW50ZXJuYWxseSBub3QgdG8gYmUgYWJsZSB0byBibGluZGx5IHBhc3MgdGhpc1xuICAgICAgXSksXG4gICAgICBsb2M6IExvY2FsZS5mcm9tT2JqZWN0KG9iaiksXG4gICAgICBjb252ZXJzaW9uQWNjdXJhY3k6IG9iai5jb252ZXJzaW9uQWNjdXJhY3lcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIGEgRHVyYXRpb24gZnJvbSBhbiBJU08gODYwMSBkdXJhdGlvbiBzdHJpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGV4dCB0byBwYXJzZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgZm9yIHBhcnNpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIHRoZSBsb2NhbGUgdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNEdXJhdGlvbnNcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTTygnUDNZNk0xVzREVDEySDMwTTVTJykudG9PYmplY3QoKSAvLz0+IHsgeWVhcnM6IDMsIG1vbnRoczogNiwgd2Vla3M6IDEsIGRheXM6IDQsIGhvdXJzOiAxMiwgbWludXRlczogMzAsIHNlY29uZHM6IDUgfVxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPKCdQVDIzSCcpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAyMyB9XG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU08oJ1A1WTNNJykudG9PYmplY3QoKSAvLz0+IHsgeWVhcnM6IDUsIG1vbnRoczogMyB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgO1xuXG4gIER1cmF0aW9uLmZyb21JU08gPSBmdW5jdGlvbiBmcm9tSVNPKHRleHQsIG9wdHMpIHtcbiAgICB2YXIgX3BhcnNlSVNPRHVyYXRpb24gPSBwYXJzZUlTT0R1cmF0aW9uKHRleHQpLFxuICAgICAgICBwYXJzZWQgPSBfcGFyc2VJU09EdXJhdGlvblswXTtcblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIHZhciBvYmogPSBPYmplY3QuYXNzaWduKHBhcnNlZCwgb3B0cyk7XG4gICAgICByZXR1cm4gRHVyYXRpb24uZnJvbU9iamVjdChvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gRHVyYXRpb24uaW52YWxpZChcInVucGFyc2FibGVcIiwgXCJ0aGUgaW5wdXQgXFxcIlwiICsgdGV4dCArIFwiXFxcIiBjYW4ndCBiZSBwYXJzZWQgYXMgSVNPIDg2MDFcIik7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gaW52YWxpZCBEdXJhdGlvbi5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlYXNvbiAtIHNpbXBsZSBzdHJpbmcgb2Ygd2h5IHRoaXMgZGF0ZXRpbWUgaXMgaW52YWxpZC4gU2hvdWxkIG5vdCBjb250YWluIHBhcmFtZXRlcnMgb3IgYW55dGhpbmcgZWxzZSBkYXRhLWRlcGVuZGVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2V4cGxhbmF0aW9uPW51bGxdIC0gbG9uZ2VyIGV4cGxhbmF0aW9uLCBtYXkgaW5jbHVkZSBwYXJhbWV0ZXJzIGFuZCBvdGhlciB1c2VmdWwgZGVidWdnaW5nIGluZm9ybWF0aW9uXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgO1xuXG4gIER1cmF0aW9uLmludmFsaWQgPSBmdW5jdGlvbiBpbnZhbGlkKHJlYXNvbiwgZXhwbGFuYXRpb24pIHtcbiAgICBpZiAoZXhwbGFuYXRpb24gPT09IHZvaWQgMCkge1xuICAgICAgZXhwbGFuYXRpb24gPSBudWxsO1xuICAgIH1cblxuICAgIGlmICghcmVhc29uKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJuZWVkIHRvIHNwZWNpZnkgYSByZWFzb24gdGhlIER1cmF0aW9uIGlzIGludmFsaWRcIik7XG4gICAgfVxuXG4gICAgdmFyIGludmFsaWQgPSByZWFzb24gaW5zdGFuY2VvZiBJbnZhbGlkID8gcmVhc29uIDogbmV3IEludmFsaWQocmVhc29uLCBleHBsYW5hdGlvbik7XG5cbiAgICBpZiAoU2V0dGluZ3MudGhyb3dPbkludmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkRHVyYXRpb25FcnJvcihpbnZhbGlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBEdXJhdGlvbih7XG4gICAgICAgIGludmFsaWQ6IGludmFsaWRcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIDtcblxuICBEdXJhdGlvbi5ub3JtYWxpemVVbml0ID0gZnVuY3Rpb24gbm9ybWFsaXplVW5pdCh1bml0KSB7XG4gICAgdmFyIG5vcm1hbGl6ZWQgPSB7XG4gICAgICB5ZWFyOiBcInllYXJzXCIsXG4gICAgICB5ZWFyczogXCJ5ZWFyc1wiLFxuICAgICAgcXVhcnRlcjogXCJxdWFydGVyc1wiLFxuICAgICAgcXVhcnRlcnM6IFwicXVhcnRlcnNcIixcbiAgICAgIG1vbnRoOiBcIm1vbnRoc1wiLFxuICAgICAgbW9udGhzOiBcIm1vbnRoc1wiLFxuICAgICAgd2VlazogXCJ3ZWVrc1wiLFxuICAgICAgd2Vla3M6IFwid2Vla3NcIixcbiAgICAgIGRheTogXCJkYXlzXCIsXG4gICAgICBkYXlzOiBcImRheXNcIixcbiAgICAgIGhvdXI6IFwiaG91cnNcIixcbiAgICAgIGhvdXJzOiBcImhvdXJzXCIsXG4gICAgICBtaW51dGU6IFwibWludXRlc1wiLFxuICAgICAgbWludXRlczogXCJtaW51dGVzXCIsXG4gICAgICBzZWNvbmQ6IFwic2Vjb25kc1wiLFxuICAgICAgc2Vjb25kczogXCJzZWNvbmRzXCIsXG4gICAgICBtaWxsaXNlY29uZDogXCJtaWxsaXNlY29uZHNcIixcbiAgICAgIG1pbGxpc2Vjb25kczogXCJtaWxsaXNlY29uZHNcIlxuICAgIH1bdW5pdCA/IHVuaXQudG9Mb3dlckNhc2UoKSA6IHVuaXRdO1xuICAgIGlmICghbm9ybWFsaXplZCkgdGhyb3cgbmV3IEludmFsaWRVbml0RXJyb3IodW5pdCk7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZWQ7XG4gIH1cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuIG9iamVjdCBpcyBhIER1cmF0aW9uLiBXb3JrcyBhY3Jvc3MgY29udGV4dCBib3VuZGFyaWVzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICA7XG5cbiAgRHVyYXRpb24uaXNEdXJhdGlvbiA9IGZ1bmN0aW9uIGlzRHVyYXRpb24obykge1xuICAgIHJldHVybiBvICYmIG8uaXNMdXhvbkR1cmF0aW9uIHx8IGZhbHNlO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgIHRoZSBsb2NhbGUgb2YgYSBEdXJhdGlvbiwgc3VjaCAnZW4tR0InXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICA7XG5cbiAgdmFyIF9wcm90byA9IER1cmF0aW9uLnByb3RvdHlwZTtcblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIER1cmF0aW9uIGZvcm1hdHRlZCBhY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmllZCBmb3JtYXQgc3RyaW5nLiBZb3UgbWF5IHVzZSB0aGVzZSB0b2tlbnM6XG4gICAqICogYFNgIGZvciBtaWxsaXNlY29uZHNcbiAgICogKiBgc2AgZm9yIHNlY29uZHNcbiAgICogKiBgbWAgZm9yIG1pbnV0ZXNcbiAgICogKiBgaGAgZm9yIGhvdXJzXG4gICAqICogYGRgIGZvciBkYXlzXG4gICAqICogYE1gIGZvciBtb250aHNcbiAgICogKiBgeWAgZm9yIHllYXJzXG4gICAqIE5vdGVzOlxuICAgKiAqIEFkZCBwYWRkaW5nIGJ5IHJlcGVhdGluZyB0aGUgdG9rZW4sIGUuZy4gXCJ5eVwiIHBhZHMgdGhlIHllYXJzIHRvIHR3byBkaWdpdHMsIFwiaGhoaFwiIHBhZHMgdGhlIGhvdXJzIG91dCB0byBmb3VyIGRpZ2l0c1xuICAgKiAqIFRoZSBkdXJhdGlvbiB3aWxsIGJlIGNvbnZlcnRlZCB0byB0aGUgc2V0IG9mIHVuaXRzIGluIHRoZSBmb3JtYXQgc3RyaW5nIHVzaW5nIHtAbGluayBEdXJhdGlvbi5zaGlmdFRvfSBhbmQgdGhlIER1cmF0aW9ucydzIGNvbnZlcnNpb24gYWNjdXJhY3kgc2V0dGluZy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGZtdCAtIHRoZSBmb3JtYXQgc3RyaW5nXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmZsb29yPXRydWVdIC0gZmxvb3IgbnVtZXJpY2FsIHZhbHVlc1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgeWVhcnM6IDEsIGRheXM6IDYsIHNlY29uZHM6IDIgfSkudG9Gb3JtYXQoXCJ5IGQgc1wiKSAvLz0+IFwiMSA2IDJcIlxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgeWVhcnM6IDEsIGRheXM6IDYsIHNlY29uZHM6IDIgfSkudG9Gb3JtYXQoXCJ5eSBkZCBzc3NcIikgLy89PiBcIjAxIDA2IDAwMlwiXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMSwgZGF5czogNiwgc2Vjb25kczogMiB9KS50b0Zvcm1hdChcIk0gU1wiKSAvLz0+IFwiMTIgNTE4NDAyMDAwXCJcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgX3Byb3RvLnRvRm9ybWF0ID0gZnVuY3Rpb24gdG9Gb3JtYXQoZm10LCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cblxuICAgIC8vIHJldmVyc2UtY29tcGF0IHNpbmNlIDEuMjsgd2UgYWx3YXlzIHJvdW5kIGRvd24gbm93LCBuZXZlciB1cCwgYW5kIHdlIGRvIGl0IGJ5IGRlZmF1bHRcbiAgICB2YXIgZm10T3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdHMsIHtcbiAgICAgIGZsb29yOiBvcHRzLnJvdW5kICE9PSBmYWxzZSAmJiBvcHRzLmZsb29yICE9PSBmYWxzZVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBGb3JtYXR0ZXIuY3JlYXRlKHRoaXMubG9jLCBmbXRPcHRzKS5mb3JtYXREdXJhdGlvbkZyb21TdHJpbmcodGhpcywgZm10KSA6IElOVkFMSUQ7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYSBKYXZhc2NyaXB0IG9iamVjdCB3aXRoIHRoaXMgRHVyYXRpb24ncyB2YWx1ZXMuXG4gICAqIEBwYXJhbSBvcHRzIC0gb3B0aW9ucyBmb3IgZ2VuZXJhdGluZyB0aGUgb2JqZWN0XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZUNvbmZpZz1mYWxzZV0gLSBpbmNsdWRlIGNvbmZpZ3VyYXRpb24gYXR0cmlidXRlcyBpbiB0aGUgb3V0cHV0XG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMSwgZGF5czogNiwgc2Vjb25kczogMiB9KS50b09iamVjdCgpIC8vPT4geyB5ZWFyczogMSwgZGF5czogNiwgc2Vjb25kczogMiB9XG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9PYmplY3QgPSBmdW5jdGlvbiB0b09iamVjdChvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cblxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4ge307XG4gICAgdmFyIGJhc2UgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnZhbHVlcyk7XG5cbiAgICBpZiAob3B0cy5pbmNsdWRlQ29uZmlnKSB7XG4gICAgICBiYXNlLmNvbnZlcnNpb25BY2N1cmFjeSA9IHRoaXMuY29udmVyc2lvbkFjY3VyYWN5O1xuICAgICAgYmFzZS5udW1iZXJpbmdTeXN0ZW0gPSB0aGlzLmxvYy5udW1iZXJpbmdTeXN0ZW07XG4gICAgICBiYXNlLmxvY2FsZSA9IHRoaXMubG9jLmxvY2FsZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYmFzZTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRHVyYXRpb24uXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjRHVyYXRpb25zXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMywgc2Vjb25kczogNDUgfSkudG9JU08oKSAvLz0+ICdQM1lUNDVTJ1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgbW9udGhzOiA0LCBzZWNvbmRzOiA0NSB9KS50b0lTTygpIC8vPT4gJ1A0TVQ0NVMnXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBtb250aHM6IDUgfSkudG9JU08oKSAvLz0+ICdQNU0nXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBtaW51dGVzOiA1IH0pLnRvSVNPKCkgLy89PiAnUFQ1TSdcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IG1pbGxpc2Vjb25kczogNiB9KS50b0lTTygpIC8vPT4gJ1BUMC4wMDZTJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvSVNPID0gZnVuY3Rpb24gdG9JU08oKSB7XG4gICAgLy8gd2UgY291bGQgdXNlIHRoZSBmb3JtYXR0ZXIsIGJ1dCB0aGlzIGlzIGFuIGVhc2llciB3YXkgdG8gZ2V0IHRoZSBtaW5pbXVtIHN0cmluZ1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgcyA9IFwiUFwiO1xuICAgIGlmICh0aGlzLnllYXJzICE9PSAwKSBzICs9IHRoaXMueWVhcnMgKyBcIllcIjtcbiAgICBpZiAodGhpcy5tb250aHMgIT09IDAgfHwgdGhpcy5xdWFydGVycyAhPT0gMCkgcyArPSB0aGlzLm1vbnRocyArIHRoaXMucXVhcnRlcnMgKiAzICsgXCJNXCI7XG4gICAgaWYgKHRoaXMud2Vla3MgIT09IDApIHMgKz0gdGhpcy53ZWVrcyArIFwiV1wiO1xuICAgIGlmICh0aGlzLmRheXMgIT09IDApIHMgKz0gdGhpcy5kYXlzICsgXCJEXCI7XG4gICAgaWYgKHRoaXMuaG91cnMgIT09IDAgfHwgdGhpcy5taW51dGVzICE9PSAwIHx8IHRoaXMuc2Vjb25kcyAhPT0gMCB8fCB0aGlzLm1pbGxpc2Vjb25kcyAhPT0gMCkgcyArPSBcIlRcIjtcbiAgICBpZiAodGhpcy5ob3VycyAhPT0gMCkgcyArPSB0aGlzLmhvdXJzICsgXCJIXCI7XG4gICAgaWYgKHRoaXMubWludXRlcyAhPT0gMCkgcyArPSB0aGlzLm1pbnV0ZXMgKyBcIk1cIjtcbiAgICBpZiAodGhpcy5zZWNvbmRzICE9PSAwIHx8IHRoaXMubWlsbGlzZWNvbmRzICE9PSAwKSAvLyB0aGlzIHdpbGwgaGFuZGxlIFwiZmxvYXRpbmcgcG9pbnQgbWFkbmVzc1wiIGJ5IHJlbW92aW5nIGV4dHJhIGRlY2ltYWwgcGxhY2VzXG4gICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81ODgwMDQvaXMtZmxvYXRpbmctcG9pbnQtbWF0aC1icm9rZW5cbiAgICAgIHMgKz0gcm91bmRUbyh0aGlzLnNlY29uZHMgKyB0aGlzLm1pbGxpc2Vjb25kcyAvIDEwMDAsIDMpICsgXCJTXCI7XG4gICAgaWYgKHMgPT09IFwiUFwiKSBzICs9IFwiVDBTXCI7XG4gICAgcmV0dXJuIHM7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEdXJhdGlvbiBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIEpTT04uXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvSVNPKCk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEdXJhdGlvbiBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIGRlYnVnZ2luZy5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnRvSVNPKCk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gbWlsbGlzZWNvbmRzIHZhbHVlIG9mIHRoaXMgRHVyYXRpb24uXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIDtcblxuICBfcHJvdG8udmFsdWVPZiA9IGZ1bmN0aW9uIHZhbHVlT2YoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXMoXCJtaWxsaXNlY29uZHNcIik7XG4gIH1cbiAgLyoqXG4gICAqIE1ha2UgdGhpcyBEdXJhdGlvbiBsb25nZXIgYnkgdGhlIHNwZWNpZmllZCBhbW91bnQuIFJldHVybiBhIG5ld2x5LWNvbnN0cnVjdGVkIER1cmF0aW9uLlxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gVGhlIGFtb3VudCB0byBhZGQuIEVpdGhlciBhIEx1eG9uIER1cmF0aW9uLCBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIHRoZSBvYmplY3QgYXJndW1lbnQgdG8gRHVyYXRpb24uZnJvbU9iamVjdCgpXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wbHVzID0gZnVuY3Rpb24gcGx1cyhkdXJhdGlvbikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICB2YXIgZHVyID0gZnJpZW5kbHlEdXJhdGlvbihkdXJhdGlvbiksXG4gICAgICAgIHJlc3VsdCA9IHt9O1xuXG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShvcmRlcmVkVW5pdHMpLCBfc3RlcDsgIShfc3RlcCA9IF9pdGVyYXRvcigpKS5kb25lOykge1xuICAgICAgdmFyIGsgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgaWYgKGhhc093blByb3BlcnR5KGR1ci52YWx1ZXMsIGspIHx8IGhhc093blByb3BlcnR5KHRoaXMudmFsdWVzLCBrKSkge1xuICAgICAgICByZXN1bHRba10gPSBkdXIuZ2V0KGspICsgdGhpcy5nZXQoayk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIHtcbiAgICAgIHZhbHVlczogcmVzdWx0XG4gICAgfSwgdHJ1ZSk7XG4gIH1cbiAgLyoqXG4gICAqIE1ha2UgdGhpcyBEdXJhdGlvbiBzaG9ydGVyIGJ5IHRoZSBzcGVjaWZpZWQgYW1vdW50LiBSZXR1cm4gYSBuZXdseS1jb25zdHJ1Y3RlZCBEdXJhdGlvbi5cbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIFRoZSBhbW91bnQgdG8gc3VidHJhY3QuIEVpdGhlciBhIEx1eG9uIER1cmF0aW9uLCBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIHRoZSBvYmplY3QgYXJndW1lbnQgdG8gRHVyYXRpb24uZnJvbU9iamVjdCgpXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5taW51cyA9IGZ1bmN0aW9uIG1pbnVzKGR1cmF0aW9uKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIHZhciBkdXIgPSBmcmllbmRseUR1cmF0aW9uKGR1cmF0aW9uKTtcbiAgICByZXR1cm4gdGhpcy5wbHVzKGR1ci5uZWdhdGUoKSk7XG4gIH1cbiAgLyoqXG4gICAqIFNjYWxlIHRoaXMgRHVyYXRpb24gYnkgdGhlIHNwZWNpZmllZCBhbW91bnQuIFJldHVybiBhIG5ld2x5LWNvbnN0cnVjdGVkIER1cmF0aW9uLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiAtIFRoZSBmdW5jdGlvbiB0byBhcHBseSB0byBlYWNoIHVuaXQuIEFyaXR5IGlzIDEgb3IgMjogdGhlIHZhbHVlIG9mIHRoZSB1bml0IGFuZCwgb3B0aW9uYWxseSwgdGhlIHVuaXQgbmFtZS4gTXVzdCByZXR1cm4gYSBudW1iZXIuXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMSwgbWludXRlczogMzAgfSkubWFwVW5pdCh4ID0+IHggKiAyKSAvLz0+IHsgaG91cnM6IDIsIG1pbnV0ZXM6IDYwIH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxLCBtaW51dGVzOiAzMCB9KS5tYXBVbml0KCh4LCB1KSA9PiB1ID09PSBcImhvdXJcIiA/IHggKiAyIDogeCkgLy89PiB7IGhvdXJzOiAyLCBtaW51dGVzOiAzMCB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5tYXBVbml0cyA9IGZ1bmN0aW9uIG1hcFVuaXRzKGZuKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIHZhciByZXN1bHQgPSB7fTtcblxuICAgIGZvciAodmFyIF9pID0gMCwgX09iamVjdCRrZXlzID0gT2JqZWN0LmtleXModGhpcy52YWx1ZXMpOyBfaSA8IF9PYmplY3Qka2V5cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBrID0gX09iamVjdCRrZXlzW19pXTtcbiAgICAgIHJlc3VsdFtrXSA9IGFzTnVtYmVyKGZuKHRoaXMudmFsdWVzW2tdLCBrKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIHtcbiAgICAgIHZhbHVlczogcmVzdWx0XG4gICAgfSwgdHJ1ZSk7XG4gIH1cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb2YgdW5pdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBhIHVuaXQgc3VjaCBhcyAnbWludXRlJyBvciAnZGF5J1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHt5ZWFyczogMiwgZGF5czogM30pLnllYXJzIC8vPT4gMlxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHt5ZWFyczogMiwgZGF5czogM30pLm1vbnRocyAvLz0+IDBcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7eWVhcnM6IDIsIGRheXM6IDN9KS5kYXlzIC8vPT4gM1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmdldCA9IGZ1bmN0aW9uIGdldCh1bml0KSB7XG4gICAgcmV0dXJuIHRoaXNbRHVyYXRpb24ubm9ybWFsaXplVW5pdCh1bml0KV07XG4gIH1cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIHZhbHVlcyBvZiBzcGVjaWZpZWQgdW5pdHMuIFJldHVybiBhIG5ld2x5LWNvbnN0cnVjdGVkIER1cmF0aW9uLlxuICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVzIC0gYSBtYXBwaW5nIG9mIHVuaXRzIHRvIG51bWJlcnNcbiAgICogQGV4YW1wbGUgZHVyLnNldCh7IHllYXJzOiAyMDE3IH0pXG4gICAqIEBleGFtcGxlIGR1ci5zZXQoeyBob3VyczogOCwgbWludXRlczogMzAgfSlcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnNldCA9IGZ1bmN0aW9uIHNldCh2YWx1ZXMpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgdmFyIG1peGVkID0gT2JqZWN0LmFzc2lnbih0aGlzLnZhbHVlcywgbm9ybWFsaXplT2JqZWN0KHZhbHVlcywgRHVyYXRpb24ubm9ybWFsaXplVW5pdCwgW10pKTtcbiAgICByZXR1cm4gY2xvbmUodGhpcywge1xuICAgICAgdmFsdWVzOiBtaXhlZFxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSBsb2NhbGUgYW5kL29yIG51bWJlcmluZ1N5c3RlbS4gIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEdXJhdGlvbi5cbiAgICogQGV4YW1wbGUgZHVyLnJlY29uZmlndXJlKHsgbG9jYWxlOiAnZW4tR0InIH0pXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5yZWNvbmZpZ3VyZSA9IGZ1bmN0aW9uIHJlY29uZmlndXJlKF90ZW1wKSB7XG4gICAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgICAgbG9jYWxlID0gX3JlZi5sb2NhbGUsXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbSA9IF9yZWYubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICBjb252ZXJzaW9uQWNjdXJhY3kgPSBfcmVmLmNvbnZlcnNpb25BY2N1cmFjeTtcblxuICAgIHZhciBsb2MgPSB0aGlzLmxvYy5jbG9uZSh7XG4gICAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICAgIG51bWJlcmluZ1N5c3RlbTogbnVtYmVyaW5nU3lzdGVtXG4gICAgfSksXG4gICAgICAgIG9wdHMgPSB7XG4gICAgICBsb2M6IGxvY1xuICAgIH07XG5cbiAgICBpZiAoY29udmVyc2lvbkFjY3VyYWN5KSB7XG4gICAgICBvcHRzLmNvbnZlcnNpb25BY2N1cmFjeSA9IGNvbnZlcnNpb25BY2N1cmFjeTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmUodGhpcywgb3B0cyk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbGVuZ3RoIG9mIHRoZSBkdXJhdGlvbiBpbiB0aGUgc3BlY2lmaWVkIHVuaXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gYSB1bml0IHN1Y2ggYXMgJ21pbnV0ZXMnIG9yICdkYXlzJ1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHt5ZWFyczogMX0pLmFzKCdkYXlzJykgLy89PiAzNjVcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7eWVhcnM6IDF9KS5hcygnbW9udGhzJykgLy89PiAxMlxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHtob3VyczogNjB9KS5hcygnZGF5cycpIC8vPT4gMi41XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uYXMgPSBmdW5jdGlvbiBhcyh1bml0KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuc2hpZnRUbyh1bml0KS5nZXQodW5pdCkgOiBOYU47XG4gIH1cbiAgLyoqXG4gICAqIFJlZHVjZSB0aGlzIER1cmF0aW9uIHRvIGl0cyBjYW5vbmljYWwgcmVwcmVzZW50YXRpb24gaW4gaXRzIGN1cnJlbnQgdW5pdHMuXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMiwgZGF5czogNTAwMCB9KS5ub3JtYWxpemUoKS50b09iamVjdCgpIC8vPT4geyB5ZWFyczogMTUsIGRheXM6IDI1NSB9XG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMTIsIG1pbnV0ZXM6IC00NSB9KS5ub3JtYWxpemUoKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMTEsIG1pbnV0ZXM6IDE1IH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIG5vcm1hbGl6ZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgdmFyIHZhbHMgPSB0aGlzLnRvT2JqZWN0KCk7XG4gICAgbm9ybWFsaXplVmFsdWVzKHRoaXMubWF0cml4LCB2YWxzKTtcbiAgICByZXR1cm4gY2xvbmUodGhpcywge1xuICAgICAgdmFsdWVzOiB2YWxzXG4gICAgfSwgdHJ1ZSk7XG4gIH1cbiAgLyoqXG4gICAqIENvbnZlcnQgdGhpcyBEdXJhdGlvbiBpbnRvIGl0cyByZXByZXNlbnRhdGlvbiBpbiBhIGRpZmZlcmVudCBzZXQgb2YgdW5pdHMuXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMSwgc2Vjb25kczogMzAgfSkuc2hpZnRUbygnbWludXRlcycsICdtaWxsaXNlY29uZHMnKS50b09iamVjdCgpIC8vPT4geyBtaW51dGVzOiA2MCwgbWlsbGlzZWNvbmRzOiAzMDAwMCB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5zaGlmdFRvID0gZnVuY3Rpb24gc2hpZnRUbygpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdW5pdHMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICB1bml0c1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG5cbiAgICBpZiAodW5pdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB1bml0cyA9IHVuaXRzLm1hcChmdW5jdGlvbiAodSkge1xuICAgICAgcmV0dXJuIER1cmF0aW9uLm5vcm1hbGl6ZVVuaXQodSk7XG4gICAgfSk7XG4gICAgdmFyIGJ1aWx0ID0ge30sXG4gICAgICAgIGFjY3VtdWxhdGVkID0ge30sXG4gICAgICAgIHZhbHMgPSB0aGlzLnRvT2JqZWN0KCk7XG4gICAgdmFyIGxhc3RVbml0O1xuICAgIG5vcm1hbGl6ZVZhbHVlcyh0aGlzLm1hdHJpeCwgdmFscyk7XG5cbiAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShvcmRlcmVkVW5pdHMpLCBfc3RlcDI7ICEoX3N0ZXAyID0gX2l0ZXJhdG9yMigpKS5kb25lOykge1xuICAgICAgdmFyIGsgPSBfc3RlcDIudmFsdWU7XG5cbiAgICAgIGlmICh1bml0cy5pbmRleE9mKGspID49IDApIHtcbiAgICAgICAgbGFzdFVuaXQgPSBrO1xuICAgICAgICB2YXIgb3duID0gMDsgLy8gYW55dGhpbmcgd2UgaGF2ZW4ndCBib2lsZWQgZG93biB5ZXQgc2hvdWxkIGdldCBib2lsZWQgdG8gdGhpcyB1bml0XG5cbiAgICAgICAgZm9yICh2YXIgYWsgaW4gYWNjdW11bGF0ZWQpIHtcbiAgICAgICAgICBvd24gKz0gdGhpcy5tYXRyaXhbYWtdW2tdICogYWNjdW11bGF0ZWRbYWtdO1xuICAgICAgICAgIGFjY3VtdWxhdGVkW2FrXSA9IDA7XG4gICAgICAgIH0gLy8gcGx1cyBhbnl0aGluZyB0aGF0J3MgYWxyZWFkeSBpbiB0aGlzIHVuaXRcblxuXG4gICAgICAgIGlmIChpc051bWJlcih2YWxzW2tdKSkge1xuICAgICAgICAgIG93biArPSB2YWxzW2tdO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGkgPSBNYXRoLnRydW5jKG93bik7XG4gICAgICAgIGJ1aWx0W2tdID0gaTtcbiAgICAgICAgYWNjdW11bGF0ZWRba10gPSBvd24gLSBpOyAvLyB3ZSdkIGxpa2UgdG8gYWJzb3JiIHRoZXNlIGZyYWN0aW9ucyBpbiBhbm90aGVyIHVuaXRcbiAgICAgICAgLy8gcGx1cyBhbnl0aGluZyBmdXJ0aGVyIGRvd24gdGhlIGNoYWluIHRoYXQgc2hvdWxkIGJlIHJvbGxlZCB1cCBpbiB0byB0aGlzXG5cbiAgICAgICAgZm9yICh2YXIgZG93biBpbiB2YWxzKSB7XG4gICAgICAgICAgaWYgKG9yZGVyZWRVbml0cy5pbmRleE9mKGRvd24pID4gb3JkZXJlZFVuaXRzLmluZGV4T2YoaykpIHtcbiAgICAgICAgICAgIGNvbnZlcnQodGhpcy5tYXRyaXgsIHZhbHMsIGRvd24sIGJ1aWx0LCBrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gb3RoZXJ3aXNlLCBrZWVwIGl0IGluIHRoZSB3aW5ncyB0byBib2lsIGl0IGxhdGVyXG5cbiAgICAgIH0gZWxzZSBpZiAoaXNOdW1iZXIodmFsc1trXSkpIHtcbiAgICAgICAgYWNjdW11bGF0ZWRba10gPSB2YWxzW2tdO1xuICAgICAgfVxuICAgIH0gLy8gYW55dGhpbmcgbGVmdG92ZXIgYmVjb21lcyB0aGUgZGVjaW1hbCBmb3IgdGhlIGxhc3QgdW5pdFxuICAgIC8vIGxhc3RVbml0IG11c3QgYmUgZGVmaW5lZCBzaW5jZSB1bml0cyBpcyBub3QgZW1wdHlcblxuXG4gICAgZm9yICh2YXIga2V5IGluIGFjY3VtdWxhdGVkKSB7XG4gICAgICBpZiAoYWNjdW11bGF0ZWRba2V5XSAhPT0gMCkge1xuICAgICAgICBidWlsdFtsYXN0VW5pdF0gKz0ga2V5ID09PSBsYXN0VW5pdCA/IGFjY3VtdWxhdGVkW2tleV0gOiBhY2N1bXVsYXRlZFtrZXldIC8gdGhpcy5tYXRyaXhbbGFzdFVuaXRdW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lKHRoaXMsIHtcbiAgICAgIHZhbHVlczogYnVpbHRcbiAgICB9LCB0cnVlKS5ub3JtYWxpemUoKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIHRoZSBuZWdhdGl2ZSBvZiB0aGlzIER1cmF0aW9uLlxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDEsIHNlY29uZHM6IDMwIH0pLm5lZ2F0ZSgpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAtMSwgc2Vjb25kczogLTMwIH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm5lZ2F0ZSA9IGZ1bmN0aW9uIG5lZ2F0ZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgdmFyIG5lZ2F0ZWQgPSB7fTtcblxuICAgIGZvciAodmFyIF9pMiA9IDAsIF9PYmplY3Qka2V5czIgPSBPYmplY3Qua2V5cyh0aGlzLnZhbHVlcyk7IF9pMiA8IF9PYmplY3Qka2V5czIubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGsgPSBfT2JqZWN0JGtleXMyW19pMl07XG4gICAgICBuZWdhdGVkW2tdID0gLXRoaXMudmFsdWVzW2tdO1xuICAgIH1cblxuICAgIHJldHVybiBjbG9uZSh0aGlzLCB7XG4gICAgICB2YWx1ZXM6IG5lZ2F0ZWRcbiAgICB9LCB0cnVlKTtcbiAgfVxuICAvKipcbiAgICogR2V0IHRoZSB5ZWFycy5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIDtcblxuICAvKipcbiAgICogRXF1YWxpdHkgY2hlY2tcbiAgICogVHdvIER1cmF0aW9ucyBhcmUgZXF1YWwgaWZmIHRoZXkgaGF2ZSB0aGUgc2FtZSB1bml0cyBhbmQgdGhlIHNhbWUgdmFsdWVzIGZvciBlYWNoIHVuaXQuXG4gICAqIEBwYXJhbSB7RHVyYXRpb259IG90aGVyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBfcHJvdG8uZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQgfHwgIW90aGVyLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMubG9jLmVxdWFscyhvdGhlci5sb2MpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yMyA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2Uob3JkZXJlZFVuaXRzKSwgX3N0ZXAzOyAhKF9zdGVwMyA9IF9pdGVyYXRvcjMoKSkuZG9uZTspIHtcbiAgICAgIHZhciB1ID0gX3N0ZXAzLnZhbHVlO1xuXG4gICAgICBpZiAodGhpcy52YWx1ZXNbdV0gIT09IG90aGVyLnZhbHVlc1t1XSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgX2NyZWF0ZUNsYXNzKER1cmF0aW9uLCBbe1xuICAgIGtleTogXCJsb2NhbGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmxvYy5sb2NhbGUgOiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG51bWJlcmluZyBzeXN0ZW0gb2YgYSBEdXJhdGlvbiwgc3VjaCAnYmVuZycuIFRoZSBudW1iZXJpbmcgc3lzdGVtIGlzIHVzZWQgd2hlbiBmb3JtYXR0aW5nIHRoZSBEdXJhdGlvblxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm51bWJlcmluZ1N5c3RlbVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMubG9jLm51bWJlcmluZ1N5c3RlbSA6IG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInllYXJzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMueWVhcnMgfHwgMCA6IE5hTjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBxdWFydGVycy5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicXVhcnRlcnNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5xdWFydGVycyB8fCAwIDogTmFOO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG1vbnRocy5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibW9udGhzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMubW9udGhzIHx8IDAgOiBOYU47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgd2Vla3NcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwid2Vla3NcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy53ZWVrcyB8fCAwIDogTmFOO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGRheXMuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRheXNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5kYXlzIHx8IDAgOiBOYU47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaG91cnMuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImhvdXJzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMuaG91cnMgfHwgMCA6IE5hTjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBtaW51dGVzLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJtaW51dGVzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMubWludXRlcyB8fCAwIDogTmFOO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHNlY29uZHMuXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2Vjb25kc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLnNlY29uZHMgfHwgMCA6IE5hTjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBtaWxsaXNlY29uZHMuXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibWlsbGlzZWNvbmRzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMubWlsbGlzZWNvbmRzIHx8IDAgOiBOYU47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgRHVyYXRpb24gaXMgaW52YWxpZC4gSW52YWxpZCBkdXJhdGlvbnMgYXJlIHJldHVybmVkIGJ5IGRpZmYgb3BlcmF0aW9uc1xuICAgICAqIG9uIGludmFsaWQgRGF0ZVRpbWVzIG9yIEludGVydmFscy5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNWYWxpZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW52YWxpZCA9PT0gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBlcnJvciBjb2RlIGlmIHRoaXMgRHVyYXRpb24gYmVjYW1lIGludmFsaWQsIG9yIG51bGwgaWYgdGhlIER1cmF0aW9uIGlzIHZhbGlkXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaW52YWxpZFJlYXNvblwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZC5yZWFzb24gOiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGV4cGxhbmF0aW9uIG9mIHdoeSB0aGlzIER1cmF0aW9uIGJlY2FtZSBpbnZhbGlkLCBvciBudWxsIGlmIHRoZSBEdXJhdGlvbiBpcyB2YWxpZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpbnZhbGlkRXhwbGFuYXRpb25cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmludmFsaWQgPyB0aGlzLmludmFsaWQuZXhwbGFuYXRpb24gOiBudWxsO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBEdXJhdGlvbjtcbn0oKTtcbmZ1bmN0aW9uIGZyaWVuZGx5RHVyYXRpb24oZHVyYXRpb25pc2gpIHtcbiAgaWYgKGlzTnVtYmVyKGR1cmF0aW9uaXNoKSkge1xuICAgIHJldHVybiBEdXJhdGlvbi5mcm9tTWlsbGlzKGR1cmF0aW9uaXNoKTtcbiAgfSBlbHNlIGlmIChEdXJhdGlvbi5pc0R1cmF0aW9uKGR1cmF0aW9uaXNoKSkge1xuICAgIHJldHVybiBkdXJhdGlvbmlzaDtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZHVyYXRpb25pc2ggPT09IFwib2JqZWN0XCIpIHtcbiAgICByZXR1cm4gRHVyYXRpb24uZnJvbU9iamVjdChkdXJhdGlvbmlzaCk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFwiVW5rbm93biBkdXJhdGlvbiBhcmd1bWVudCBcIiArIGR1cmF0aW9uaXNoICsgXCIgb2YgdHlwZSBcIiArIHR5cGVvZiBkdXJhdGlvbmlzaCk7XG4gIH1cbn1cblxudmFyIElOVkFMSUQkMSA9IFwiSW52YWxpZCBJbnRlcnZhbFwiOyAvLyBjaGVja3MgaWYgdGhlIHN0YXJ0IGlzIGVxdWFsIHRvIG9yIGJlZm9yZSB0aGUgZW5kXG5cbmZ1bmN0aW9uIHZhbGlkYXRlU3RhcnRFbmQoc3RhcnQsIGVuZCkge1xuICBpZiAoIXN0YXJ0IHx8ICFzdGFydC5pc1ZhbGlkKSB7XG4gICAgcmV0dXJuIEludGVydmFsLmludmFsaWQoXCJtaXNzaW5nIG9yIGludmFsaWQgc3RhcnRcIik7XG4gIH0gZWxzZSBpZiAoIWVuZCB8fCAhZW5kLmlzVmFsaWQpIHtcbiAgICByZXR1cm4gSW50ZXJ2YWwuaW52YWxpZChcIm1pc3Npbmcgb3IgaW52YWxpZCBlbmRcIik7XG4gIH0gZWxzZSBpZiAoZW5kIDwgc3RhcnQpIHtcbiAgICByZXR1cm4gSW50ZXJ2YWwuaW52YWxpZChcImVuZCBiZWZvcmUgc3RhcnRcIiwgXCJUaGUgZW5kIG9mIGFuIGludGVydmFsIG11c3QgYmUgYWZ0ZXIgaXRzIHN0YXJ0LCBidXQgeW91IGhhZCBzdGFydD1cIiArIHN0YXJ0LnRvSVNPKCkgKyBcIiBhbmQgZW5kPVwiICsgZW5kLnRvSVNPKCkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4vKipcbiAqIEFuIEludGVydmFsIG9iamVjdCByZXByZXNlbnRzIGEgaGFsZi1vcGVuIGludGVydmFsIG9mIHRpbWUsIHdoZXJlIGVhY2ggZW5kcG9pbnQgaXMgYSB7QGxpbmsgRGF0ZVRpbWV9LiBDb25jZXB0dWFsbHksIGl0J3MgYSBjb250YWluZXIgZm9yIHRob3NlIHR3byBlbmRwb2ludHMsIGFjY29tcGFuaWVkIGJ5IG1ldGhvZHMgZm9yIGNyZWF0aW5nLCBwYXJzaW5nLCBpbnRlcnJvZ2F0aW5nLCBjb21wYXJpbmcsIHRyYW5zZm9ybWluZywgYW5kIGZvcm1hdHRpbmcgdGhlbS5cbiAqXG4gKiBIZXJlIGlzIGEgYnJpZWYgb3ZlcnZpZXcgb2YgdGhlIG1vc3QgY29tbW9ubHkgdXNlZCBtZXRob2RzIGFuZCBnZXR0ZXJzIGluIEludGVydmFsOlxuICpcbiAqICogKipDcmVhdGlvbioqIFRvIGNyZWF0ZSBhbiBJbnRlcnZhbCwgdXNlIHtAbGluayBmcm9tRGF0ZVRpbWVzfSwge0BsaW5rIGFmdGVyfSwge0BsaW5rIGJlZm9yZX0sIG9yIHtAbGluayBmcm9tSVNPfS5cbiAqICogKipBY2Nlc3NvcnMqKiBVc2Uge0BsaW5rIHN0YXJ0fSBhbmQge0BsaW5rIGVuZH0gdG8gZ2V0IHRoZSBzdGFydCBhbmQgZW5kLlxuICogKiAqKkludGVycm9nYXRpb24qKiBUbyBhbmFseXplIHRoZSBJbnRlcnZhbCwgdXNlIHtAbGluayBjb3VudH0sIHtAbGluayBsZW5ndGh9LCB7QGxpbmsgaGFzU2FtZX0sIHtAbGluayBjb250YWluc30sIHtAbGluayBpc0FmdGVyfSwgb3Ige0BsaW5rIGlzQmVmb3JlfS5cbiAqICogKipUcmFuc2Zvcm1hdGlvbioqIFRvIGNyZWF0ZSBvdGhlciBJbnRlcnZhbHMgb3V0IG9mIHRoaXMgb25lLCB1c2Uge0BsaW5rIHNldH0sIHtAbGluayBzcGxpdEF0fSwge0BsaW5rIHNwbGl0Qnl9LCB7QGxpbmsgZGl2aWRlRXF1YWxseX0sIHtAbGluayBtZXJnZX0sIHtAbGluayB4b3J9LCB7QGxpbmsgdW5pb259LCB7QGxpbmsgaW50ZXJzZWN0aW9ufSwgb3Ige0BsaW5rIGRpZmZlcmVuY2V9LlxuICogKiAqKkNvbXBhcmlzb24qKiBUbyBjb21wYXJlIHRoaXMgSW50ZXJ2YWwgdG8gYW5vdGhlciBvbmUsIHVzZSB7QGxpbmsgZXF1YWxzfSwge0BsaW5rIG92ZXJsYXBzfSwge0BsaW5rIGFidXRzU3RhcnR9LCB7QGxpbmsgYWJ1dHNFbmR9LCB7QGxpbmsgZW5ndWxmc31cbiAqICogKipPdXRwdXQqKiBUbyBjb252ZXJ0IHRoZSBJbnRlcnZhbCBpbnRvIG90aGVyIHJlcHJlc2VudGF0aW9ucywgc2VlIHtAbGluayB0b1N0cmluZ30sIHtAbGluayB0b0lTT30sIHtAbGluayB0b0lTT0RhdGV9LCB7QGxpbmsgdG9JU09UaW1lfSwge0BsaW5rIHRvRm9ybWF0fSwgYW5kIHtAbGluayB0b0R1cmF0aW9ufS5cbiAqL1xuXG5cbnZhciBJbnRlcnZhbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gSW50ZXJ2YWwoY29uZmlnKSB7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5zID0gY29uZmlnLnN0YXJ0O1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuXG4gICAgdGhpcy5lID0gY29uZmlnLmVuZDtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cblxuICAgIHRoaXMuaW52YWxpZCA9IGNvbmZpZy5pbnZhbGlkIHx8IG51bGw7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG5cbiAgICB0aGlzLmlzTHV4b25JbnRlcnZhbCA9IHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBpbnZhbGlkIEludGVydmFsLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVhc29uIC0gc2ltcGxlIHN0cmluZyBvZiB3aHkgdGhpcyBJbnRlcnZhbCBpcyBpbnZhbGlkLiBTaG91bGQgbm90IGNvbnRhaW4gcGFyYW1ldGVycyBvciBhbnl0aGluZyBlbHNlIGRhdGEtZGVwZW5kZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbZXhwbGFuYXRpb249bnVsbF0gLSBsb25nZXIgZXhwbGFuYXRpb24sIG1heSBpbmNsdWRlIHBhcmFtZXRlcnMgYW5kIG90aGVyIHVzZWZ1bCBkZWJ1Z2dpbmcgaW5mb3JtYXRpb25cbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuXG5cbiAgSW50ZXJ2YWwuaW52YWxpZCA9IGZ1bmN0aW9uIGludmFsaWQocmVhc29uLCBleHBsYW5hdGlvbikge1xuICAgIGlmIChleHBsYW5hdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgICBleHBsYW5hdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCFyZWFzb24pIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcIm5lZWQgdG8gc3BlY2lmeSBhIHJlYXNvbiB0aGUgSW50ZXJ2YWwgaXMgaW52YWxpZFwiKTtcbiAgICB9XG5cbiAgICB2YXIgaW52YWxpZCA9IHJlYXNvbiBpbnN0YW5jZW9mIEludmFsaWQgPyByZWFzb24gOiBuZXcgSW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uKTtcblxuICAgIGlmIChTZXR0aW5ncy50aHJvd09uSW52YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRJbnRlcnZhbEVycm9yKGludmFsaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IEludGVydmFsKHtcbiAgICAgICAgaW52YWxpZDogaW52YWxpZFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gSW50ZXJ2YWwgZnJvbSBhIHN0YXJ0IERhdGVUaW1lIGFuZCBhbiBlbmQgRGF0ZVRpbWUuIEluY2x1c2l2ZSBvZiB0aGUgc3RhcnQgYnV0IG5vdCB0aGUgZW5kLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfERhdGV8T2JqZWN0fSBzdGFydFxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfERhdGV8T2JqZWN0fSBlbmRcbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICA7XG5cbiAgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyA9IGZ1bmN0aW9uIGZyb21EYXRlVGltZXMoc3RhcnQsIGVuZCkge1xuICAgIHZhciBidWlsdFN0YXJ0ID0gZnJpZW5kbHlEYXRlVGltZShzdGFydCksXG4gICAgICAgIGJ1aWx0RW5kID0gZnJpZW5kbHlEYXRlVGltZShlbmQpO1xuICAgIHZhciB2YWxpZGF0ZUVycm9yID0gdmFsaWRhdGVTdGFydEVuZChidWlsdFN0YXJ0LCBidWlsdEVuZCk7XG5cbiAgICBpZiAodmFsaWRhdGVFcnJvciA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbmV3IEludGVydmFsKHtcbiAgICAgICAgc3RhcnQ6IGJ1aWx0U3RhcnQsXG4gICAgICAgIGVuZDogYnVpbHRFbmRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsaWRhdGVFcnJvcjtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBJbnRlcnZhbCBmcm9tIGEgc3RhcnQgRGF0ZVRpbWUgYW5kIGEgRHVyYXRpb24gdG8gZXh0ZW5kIHRvLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfERhdGV8T2JqZWN0fSBzdGFydFxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gdGhlIGxlbmd0aCBvZiB0aGUgSW50ZXJ2YWwuXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi9cbiAgO1xuXG4gIEludGVydmFsLmFmdGVyID0gZnVuY3Rpb24gYWZ0ZXIoc3RhcnQsIGR1cmF0aW9uKSB7XG4gICAgdmFyIGR1ciA9IGZyaWVuZGx5RHVyYXRpb24oZHVyYXRpb24pLFxuICAgICAgICBkdCA9IGZyaWVuZGx5RGF0ZVRpbWUoc3RhcnQpO1xuICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0LCBkdC5wbHVzKGR1cikpO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gSW50ZXJ2YWwgZnJvbSBhbiBlbmQgRGF0ZVRpbWUgYW5kIGEgRHVyYXRpb24gdG8gZXh0ZW5kIGJhY2t3YXJkcyB0by5cbiAgICogQHBhcmFtIHtEYXRlVGltZXxEYXRlfE9iamVjdH0gZW5kXG4gICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSB0aGUgbGVuZ3RoIG9mIHRoZSBJbnRlcnZhbC5cbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICA7XG5cbiAgSW50ZXJ2YWwuYmVmb3JlID0gZnVuY3Rpb24gYmVmb3JlKGVuZCwgZHVyYXRpb24pIHtcbiAgICB2YXIgZHVyID0gZnJpZW5kbHlEdXJhdGlvbihkdXJhdGlvbiksXG4gICAgICAgIGR0ID0gZnJpZW5kbHlEYXRlVGltZShlbmQpO1xuICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0Lm1pbnVzKGR1ciksIGR0KTtcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIGFuIEludGVydmFsIGZyb20gYW4gSVNPIDg2MDEgc3RyaW5nLlxuICAgKiBBY2NlcHRzIGA8c3RhcnQ+LzxlbmQ+YCwgYDxzdGFydD4vPGR1cmF0aW9uPmAsIGFuZCBgPGR1cmF0aW9uPi88ZW5kPmAgZm9ybWF0cy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgSVNPIHN0cmluZyB0byBwYXJzZVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHNdIC0gb3B0aW9ucyB0byBwYXNzIHtAbGluayBEYXRlVGltZS5mcm9tSVNPfSBhbmQgb3B0aW9uYWxseSB7QGxpbmsgRHVyYXRpb24uZnJvbUlTT31cbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lX2ludGVydmFsc1xuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICovXG4gIDtcblxuICBJbnRlcnZhbC5mcm9tSVNPID0gZnVuY3Rpb24gZnJvbUlTTyh0ZXh0LCBvcHRzKSB7XG4gICAgdmFyIF9zcGxpdCA9ICh0ZXh0IHx8IFwiXCIpLnNwbGl0KFwiL1wiLCAyKSxcbiAgICAgICAgcyA9IF9zcGxpdFswXSxcbiAgICAgICAgZSA9IF9zcGxpdFsxXTtcblxuICAgIGlmIChzICYmIGUpIHtcbiAgICAgIHZhciBzdGFydCA9IERhdGVUaW1lLmZyb21JU08ocywgb3B0cyksXG4gICAgICAgICAgZW5kID0gRGF0ZVRpbWUuZnJvbUlTTyhlLCBvcHRzKTtcblxuICAgICAgaWYgKHN0YXJ0LmlzVmFsaWQgJiYgZW5kLmlzVmFsaWQpIHtcbiAgICAgICAgcmV0dXJuIEludGVydmFsLmZyb21EYXRlVGltZXMoc3RhcnQsIGVuZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGFydC5pc1ZhbGlkKSB7XG4gICAgICAgIHZhciBkdXIgPSBEdXJhdGlvbi5mcm9tSVNPKGUsIG9wdHMpO1xuXG4gICAgICAgIGlmIChkdXIuaXNWYWxpZCkge1xuICAgICAgICAgIHJldHVybiBJbnRlcnZhbC5hZnRlcihzdGFydCwgZHVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbmQuaXNWYWxpZCkge1xuICAgICAgICB2YXIgX2R1ciA9IER1cmF0aW9uLmZyb21JU08ocywgb3B0cyk7XG5cbiAgICAgICAgaWYgKF9kdXIuaXNWYWxpZCkge1xuICAgICAgICAgIHJldHVybiBJbnRlcnZhbC5iZWZvcmUoZW5kLCBfZHVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBJbnRlcnZhbC5pbnZhbGlkKFwidW5wYXJzYWJsZVwiLCBcInRoZSBpbnB1dCBcXFwiXCIgKyB0ZXh0ICsgXCJcXFwiIGNhbid0IGJlIHBhcnNlZCBhcyBJU08gODYwMVwiKTtcbiAgfVxuICAvKipcbiAgICogQ2hlY2sgaWYgYW4gb2JqZWN0IGlzIGFuIEludGVydmFsLiBXb3JrcyBhY3Jvc3MgY29udGV4dCBib3VuZGFyaWVzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICA7XG5cbiAgSW50ZXJ2YWwuaXNJbnRlcnZhbCA9IGZ1bmN0aW9uIGlzSW50ZXJ2YWwobykge1xuICAgIHJldHVybiBvICYmIG8uaXNMdXhvbkludGVydmFsIHx8IGZhbHNlO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzdGFydCBvZiB0aGUgSW50ZXJ2YWxcbiAgICogQHR5cGUge0RhdGVUaW1lfVxuICAgKi9cbiAgO1xuXG4gIHZhciBfcHJvdG8gPSBJbnRlcnZhbC5wcm90b3R5cGU7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxlbmd0aCBvZiB0aGUgSW50ZXJ2YWwgaW4gdGhlIHNwZWNpZmllZCB1bml0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIHRoZSB1bml0IChzdWNoIGFzICdob3Vycycgb3IgJ2RheXMnKSB0byByZXR1cm4gdGhlIGxlbmd0aCBpbi5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgX3Byb3RvLmxlbmd0aCA9IGZ1bmN0aW9uIGxlbmd0aCh1bml0KSB7XG4gICAgaWYgKHVuaXQgPT09IHZvaWQgMCkge1xuICAgICAgdW5pdCA9IFwibWlsbGlzZWNvbmRzXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudG9EdXJhdGlvbi5hcHBseSh0aGlzLCBbdW5pdF0pLmdldCh1bml0KSA6IE5hTjtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY291bnQgb2YgbWludXRlcywgaG91cnMsIGRheXMsIG1vbnRocywgb3IgeWVhcnMgaW5jbHVkZWQgaW4gdGhlIEludGVydmFsLCBldmVuIGluIHBhcnQuXG4gICAqIFVubGlrZSB7QGxpbmsgbGVuZ3RofSB0aGlzIGNvdW50cyBzZWN0aW9ucyBvZiB0aGUgY2FsZW5kYXIsIG5vdCBwZXJpb2RzIG9mIHRpbWUsIGUuZy4gc3BlY2lmeWluZyAnZGF5J1xuICAgKiBhc2tzICd3aGF0IGRhdGVzIGFyZSBpbmNsdWRlZCBpbiB0aGlzIGludGVydmFsPycsIG5vdCAnaG93IG1hbnkgZGF5cyBsb25nIGlzIHRoaXMgaW50ZXJ2YWw/J1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW3VuaXQ9J21pbGxpc2Vjb25kcyddIC0gdGhlIHVuaXQgb2YgdGltZSB0byBjb3VudC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5jb3VudCA9IGZ1bmN0aW9uIGNvdW50KHVuaXQpIHtcbiAgICBpZiAodW5pdCA9PT0gdm9pZCAwKSB7XG4gICAgICB1bml0ID0gXCJtaWxsaXNlY29uZHNcIjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIE5hTjtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLnN0YXJ0LnN0YXJ0T2YodW5pdCksXG4gICAgICAgIGVuZCA9IHRoaXMuZW5kLnN0YXJ0T2YodW5pdCk7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoZW5kLmRpZmYoc3RhcnQsIHVuaXQpLmdldCh1bml0KSkgKyAxO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIHN0YXJ0IGFuZCBlbmQgYXJlIGJvdGggaW4gdGhlIHNhbWUgdW5pdCBvZiB0aW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gdGhlIHVuaXQgb2YgdGltZSB0byBjaGVjayBzYW1lbmVzcyBvblxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5oYXNTYW1lID0gZnVuY3Rpb24gaGFzU2FtZSh1bml0KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuZS5taW51cygxKS5oYXNTYW1lKHRoaXMucywgdW5pdCkgOiBmYWxzZTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBoYXMgdGhlIHNhbWUgc3RhcnQgYW5kIGVuZCBEYXRlVGltZXMuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmlzRW1wdHkgPSBmdW5jdGlvbiBpc0VtcHR5KCkge1xuICAgIHJldHVybiB0aGlzLnMudmFsdWVPZigpID09PSB0aGlzLmUudmFsdWVPZigpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsJ3Mgc3RhcnQgaXMgYWZ0ZXIgdGhlIHNwZWNpZmllZCBEYXRlVGltZS5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gZGF0ZVRpbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uaXNBZnRlciA9IGZ1bmN0aW9uIGlzQWZ0ZXIoZGF0ZVRpbWUpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0aGlzLnMgPiBkYXRlVGltZTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIGVuZCBpcyBiZWZvcmUgdGhlIHNwZWNpZmllZCBEYXRlVGltZS5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gZGF0ZVRpbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uaXNCZWZvcmUgPSBmdW5jdGlvbiBpc0JlZm9yZShkYXRlVGltZSkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRoaXMuZSA8PSBkYXRlVGltZTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBjb250YWlucyB0aGUgc3BlY2lmaWVkIERhdGVUaW1lLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBkYXRlVGltZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5jb250YWlucyA9IGZ1bmN0aW9uIGNvbnRhaW5zKGRhdGVUaW1lKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5zIDw9IGRhdGVUaW1lICYmIHRoaXMuZSA+IGRhdGVUaW1lO1xuICB9XG4gIC8qKlxuICAgKiBcIlNldHNcIiB0aGUgc3RhcnQgYW5kL29yIGVuZCBkYXRlcy4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIEludGVydmFsLlxuICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVzIC0gdGhlIHZhbHVlcyB0byBzZXRcbiAgICogQHBhcmFtIHtEYXRlVGltZX0gdmFsdWVzLnN0YXJ0IC0gdGhlIHN0YXJ0aW5nIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IHZhbHVlcy5lbmQgLSB0aGUgZW5kaW5nIERhdGVUaW1lXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5zZXQgPSBmdW5jdGlvbiBzZXQoX3RlbXApIHtcbiAgICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgICBzdGFydCA9IF9yZWYuc3RhcnQsXG4gICAgICAgIGVuZCA9IF9yZWYuZW5kO1xuXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHN0YXJ0IHx8IHRoaXMucywgZW5kIHx8IHRoaXMuZSk7XG4gIH1cbiAgLyoqXG4gICAqIFNwbGl0IHRoaXMgSW50ZXJ2YWwgYXQgZWFjaCBvZiB0aGUgc3BlY2lmaWVkIERhdGVUaW1lc1xuICAgKiBAcGFyYW0gey4uLltEYXRlVGltZV19IGRhdGVUaW1lcyAtIHRoZSB1bml0IG9mIHRpbWUgdG8gY291bnQuXG4gICAqIEByZXR1cm4ge1tJbnRlcnZhbF19XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnNwbGl0QXQgPSBmdW5jdGlvbiBzcGxpdEF0KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIFtdO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGRhdGVUaW1lcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGRhdGVUaW1lc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgc29ydGVkID0gZGF0ZVRpbWVzLm1hcChmcmllbmRseURhdGVUaW1lKS5maWx0ZXIoZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiBfdGhpcy5jb250YWlucyhkKTtcbiAgICB9KS5zb3J0KCksXG4gICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICB2YXIgcyA9IHRoaXMucyxcbiAgICAgICAgaSA9IDA7XG5cbiAgICB3aGlsZSAocyA8IHRoaXMuZSkge1xuICAgICAgdmFyIGFkZGVkID0gc29ydGVkW2ldIHx8IHRoaXMuZSxcbiAgICAgICAgICBuZXh0ID0gK2FkZGVkID4gK3RoaXMuZSA/IHRoaXMuZSA6IGFkZGVkO1xuICAgICAgcmVzdWx0cy5wdXNoKEludGVydmFsLmZyb21EYXRlVGltZXMocywgbmV4dCkpO1xuICAgICAgcyA9IG5leHQ7XG4gICAgICBpICs9IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cbiAgLyoqXG4gICAqIFNwbGl0IHRoaXMgSW50ZXJ2YWwgaW50byBzbWFsbGVyIEludGVydmFscywgZWFjaCBvZiB0aGUgc3BlY2lmaWVkIGxlbmd0aC5cbiAgICogTGVmdCBvdmVyIHRpbWUgaXMgZ3JvdXBlZCBpbnRvIGEgc21hbGxlciBpbnRlcnZhbFxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gVGhlIGxlbmd0aCBvZiBlYWNoIHJlc3VsdGluZyBpbnRlcnZhbC5cbiAgICogQHJldHVybiB7W0ludGVydmFsXX1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uc3BsaXRCeSA9IGZ1bmN0aW9uIHNwbGl0QnkoZHVyYXRpb24pIHtcbiAgICB2YXIgZHVyID0gZnJpZW5kbHlEdXJhdGlvbihkdXJhdGlvbik7XG5cbiAgICBpZiAoIXRoaXMuaXNWYWxpZCB8fCAhZHVyLmlzVmFsaWQgfHwgZHVyLmFzKFwibWlsbGlzZWNvbmRzXCIpID09PSAwKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgdmFyIHMgPSB0aGlzLnMsXG4gICAgICAgIGFkZGVkLFxuICAgICAgICBuZXh0O1xuICAgIHZhciByZXN1bHRzID0gW107XG5cbiAgICB3aGlsZSAocyA8IHRoaXMuZSkge1xuICAgICAgYWRkZWQgPSBzLnBsdXMoZHVyKTtcbiAgICAgIG5leHQgPSArYWRkZWQgPiArdGhpcy5lID8gdGhpcy5lIDogYWRkZWQ7XG4gICAgICByZXN1bHRzLnB1c2goSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzLCBuZXh0KSk7XG4gICAgICBzID0gbmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuICAvKipcbiAgICogU3BsaXQgdGhpcyBJbnRlcnZhbCBpbnRvIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIHNtYWxsZXIgaW50ZXJ2YWxzLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyT2ZQYXJ0cyAtIFRoZSBudW1iZXIgb2YgSW50ZXJ2YWxzIHRvIGRpdmlkZSB0aGUgSW50ZXJ2YWwgaW50by5cbiAgICogQHJldHVybiB7W0ludGVydmFsXX1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZGl2aWRlRXF1YWxseSA9IGZ1bmN0aW9uIGRpdmlkZUVxdWFsbHkobnVtYmVyT2ZQYXJ0cykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gW107XG4gICAgcmV0dXJuIHRoaXMuc3BsaXRCeSh0aGlzLmxlbmd0aCgpIC8gbnVtYmVyT2ZQYXJ0cykuc2xpY2UoMCwgbnVtYmVyT2ZQYXJ0cyk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwgb3ZlcmxhcHMgd2l0aCB0aGUgc3BlY2lmaWVkIEludGVydmFsXG4gICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm92ZXJsYXBzID0gZnVuY3Rpb24gb3ZlcmxhcHMob3RoZXIpIHtcbiAgICByZXR1cm4gdGhpcy5lID4gb3RoZXIucyAmJiB0aGlzLnMgPCBvdGhlci5lO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsJ3MgZW5kIGlzIGFkamFjZW50IHRvIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwncyBzdGFydC5cbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uYWJ1dHNTdGFydCA9IGZ1bmN0aW9uIGFidXRzU3RhcnQob3RoZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiArdGhpcy5lID09PSArb3RoZXIucztcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIHN0YXJ0IGlzIGFkamFjZW50IHRvIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwncyBlbmQuXG4gICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmFidXRzRW5kID0gZnVuY3Rpb24gYWJ1dHNFbmQob3RoZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiArb3RoZXIuZSA9PT0gK3RoaXMucztcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBlbmd1bGZzIHRoZSBzdGFydCBhbmQgZW5kIG9mIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwuXG4gICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmVuZ3VsZnMgPSBmdW5jdGlvbiBlbmd1bGZzKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5zIDw9IG90aGVyLnMgJiYgdGhpcy5lID49IG90aGVyLmU7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwgaGFzIHRoZSBzYW1lIHN0YXJ0IGFuZCBlbmQgYXMgdGhlIHNwZWNpZmllZCBJbnRlcnZhbC5cbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQgfHwgIW90aGVyLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zLmVxdWFscyhvdGhlci5zKSAmJiB0aGlzLmUuZXF1YWxzKG90aGVyLmUpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gSW50ZXJ2YWwgcmVwcmVzZW50aW5nIHRoZSBpbnRlcnNlY3Rpb24gb2YgdGhpcyBJbnRlcnZhbCBhbmQgdGhlIHNwZWNpZmllZCBJbnRlcnZhbC5cbiAgICogU3BlY2lmaWNhbGx5LCB0aGUgcmVzdWx0aW5nIEludGVydmFsIGhhcyB0aGUgbWF4aW11bSBzdGFydCB0aW1lIGFuZCB0aGUgbWluaW11bSBlbmQgdGltZSBvZiB0aGUgdHdvIEludGVydmFscy5cbiAgICogUmV0dXJucyBudWxsIGlmIHRoZSBpbnRlcnNlY3Rpb24gaXMgZW1wdHksIG1lYW5pbmcsIHRoZSBpbnRlcnZhbHMgZG9uJ3QgaW50ZXJzZWN0LlxuICAgKiBAcGFyYW0ge0ludGVydmFsfSBvdGhlclxuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uaW50ZXJzZWN0aW9uID0gZnVuY3Rpb24gaW50ZXJzZWN0aW9uKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIHZhciBzID0gdGhpcy5zID4gb3RoZXIucyA/IHRoaXMucyA6IG90aGVyLnMsXG4gICAgICAgIGUgPSB0aGlzLmUgPCBvdGhlci5lID8gdGhpcy5lIDogb3RoZXIuZTtcblxuICAgIGlmIChzID4gZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHMsIGUpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogUmV0dXJuIGFuIEludGVydmFsIHJlcHJlc2VudGluZyB0aGUgdW5pb24gb2YgdGhpcyBJbnRlcnZhbCBhbmQgdGhlIHNwZWNpZmllZCBJbnRlcnZhbC5cbiAgICogU3BlY2lmaWNhbGx5LCB0aGUgcmVzdWx0aW5nIEludGVydmFsIGhhcyB0aGUgbWluaW11bSBzdGFydCB0aW1lIGFuZCB0aGUgbWF4aW11bSBlbmQgdGltZSBvZiB0aGUgdHdvIEludGVydmFscy5cbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnVuaW9uID0gZnVuY3Rpb24gdW5pb24ob3RoZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgdmFyIHMgPSB0aGlzLnMgPCBvdGhlci5zID8gdGhpcy5zIDogb3RoZXIucyxcbiAgICAgICAgZSA9IHRoaXMuZSA+IG90aGVyLmUgPyB0aGlzLmUgOiBvdGhlci5lO1xuICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHMsIGUpO1xuICB9XG4gIC8qKlxuICAgKiBNZXJnZSBhbiBhcnJheSBvZiBJbnRlcnZhbHMgaW50byBhIGVxdWl2YWxlbnQgbWluaW1hbCBzZXQgb2YgSW50ZXJ2YWxzLlxuICAgKiBDb21iaW5lcyBvdmVybGFwcGluZyBhbmQgYWRqYWNlbnQgSW50ZXJ2YWxzLlxuICAgKiBAcGFyYW0ge1tJbnRlcnZhbF19IGludGVydmFsc1xuICAgKiBAcmV0dXJuIHtbSW50ZXJ2YWxdfVxuICAgKi9cbiAgO1xuXG4gIEludGVydmFsLm1lcmdlID0gZnVuY3Rpb24gbWVyZ2UoaW50ZXJ2YWxzKSB7XG4gICAgdmFyIF9pbnRlcnZhbHMkc29ydCRyZWR1YyA9IGludGVydmFscy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gYS5zIC0gYi5zO1xuICAgIH0pLnJlZHVjZShmdW5jdGlvbiAoX3JlZjIsIGl0ZW0pIHtcbiAgICAgIHZhciBzb2ZhciA9IF9yZWYyWzBdLFxuICAgICAgICAgIGN1cnJlbnQgPSBfcmVmMlsxXTtcblxuICAgICAgaWYgKCFjdXJyZW50KSB7XG4gICAgICAgIHJldHVybiBbc29mYXIsIGl0ZW1dO1xuICAgICAgfSBlbHNlIGlmIChjdXJyZW50Lm92ZXJsYXBzKGl0ZW0pIHx8IGN1cnJlbnQuYWJ1dHNTdGFydChpdGVtKSkge1xuICAgICAgICByZXR1cm4gW3NvZmFyLCBjdXJyZW50LnVuaW9uKGl0ZW0pXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbc29mYXIuY29uY2F0KFtjdXJyZW50XSksIGl0ZW1dO1xuICAgICAgfVxuICAgIH0sIFtbXSwgbnVsbF0pLFxuICAgICAgICBmb3VuZCA9IF9pbnRlcnZhbHMkc29ydCRyZWR1Y1swXSxcbiAgICAgICAgZmluYWwgPSBfaW50ZXJ2YWxzJHNvcnQkcmVkdWNbMV07XG5cbiAgICBpZiAoZmluYWwpIHtcbiAgICAgIGZvdW5kLnB1c2goZmluYWwpO1xuICAgIH1cblxuICAgIHJldHVybiBmb3VuZDtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIEludGVydmFscyByZXByZXNlbnRpbmcgdGhlIHNwYW5zIG9mIHRpbWUgdGhhdCBvbmx5IGFwcGVhciBpbiBvbmUgb2YgdGhlIHNwZWNpZmllZCBJbnRlcnZhbHMuXG4gICAqIEBwYXJhbSB7W0ludGVydmFsXX0gaW50ZXJ2YWxzXG4gICAqIEByZXR1cm4ge1tJbnRlcnZhbF19XG4gICAqL1xuICA7XG5cbiAgSW50ZXJ2YWwueG9yID0gZnVuY3Rpb24geG9yKGludGVydmFscykge1xuICAgIHZhciBfQXJyYXkkcHJvdG90eXBlO1xuXG4gICAgdmFyIHN0YXJ0ID0gbnVsbCxcbiAgICAgICAgY3VycmVudENvdW50ID0gMDtcblxuICAgIHZhciByZXN1bHRzID0gW10sXG4gICAgICAgIGVuZHMgPSBpbnRlcnZhbHMubWFwKGZ1bmN0aW9uIChpKSB7XG4gICAgICByZXR1cm4gW3tcbiAgICAgICAgdGltZTogaS5zLFxuICAgICAgICB0eXBlOiBcInNcIlxuICAgICAgfSwge1xuICAgICAgICB0aW1lOiBpLmUsXG4gICAgICAgIHR5cGU6IFwiZVwiXG4gICAgICB9XTtcbiAgICB9KSxcbiAgICAgICAgZmxhdHRlbmVkID0gKF9BcnJheSRwcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGUpLmNvbmNhdC5hcHBseShfQXJyYXkkcHJvdG90eXBlLCBlbmRzKSxcbiAgICAgICAgYXJyID0gZmxhdHRlbmVkLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBhLnRpbWUgLSBiLnRpbWU7XG4gICAgfSk7XG5cbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKGFyciksIF9zdGVwOyAhKF9zdGVwID0gX2l0ZXJhdG9yKCkpLmRvbmU7KSB7XG4gICAgICB2YXIgaSA9IF9zdGVwLnZhbHVlO1xuICAgICAgY3VycmVudENvdW50ICs9IGkudHlwZSA9PT0gXCJzXCIgPyAxIDogLTE7XG5cbiAgICAgIGlmIChjdXJyZW50Q291bnQgPT09IDEpIHtcbiAgICAgICAgc3RhcnQgPSBpLnRpbWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc3RhcnQgJiYgK3N0YXJ0ICE9PSAraS50aW1lKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKEludGVydmFsLmZyb21EYXRlVGltZXMoc3RhcnQsIGkudGltZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhcnQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBJbnRlcnZhbC5tZXJnZShyZXN1bHRzKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIGFuIEludGVydmFsIHJlcHJlc2VudGluZyB0aGUgc3BhbiBvZiB0aW1lIGluIHRoaXMgSW50ZXJ2YWwgdGhhdCBkb2Vzbid0IG92ZXJsYXAgd2l0aCBhbnkgb2YgdGhlIHNwZWNpZmllZCBJbnRlcnZhbHMuXG4gICAqIEBwYXJhbSB7Li4uSW50ZXJ2YWx9IGludGVydmFsc1xuICAgKiBAcmV0dXJuIHtbSW50ZXJ2YWxdfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5kaWZmZXJlbmNlID0gZnVuY3Rpb24gZGlmZmVyZW5jZSgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgaW50ZXJ2YWxzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBpbnRlcnZhbHNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gSW50ZXJ2YWwueG9yKFt0aGlzXS5jb25jYXQoaW50ZXJ2YWxzKSkubWFwKGZ1bmN0aW9uIChpKSB7XG4gICAgICByZXR1cm4gX3RoaXMyLmludGVyc2VjdGlvbihpKTtcbiAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICAgIHJldHVybiBpICYmICFpLmlzRW1wdHkoKTtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIEludGVydmFsIGFwcHJvcHJpYXRlIGZvciBkZWJ1Z2dpbmcuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQkMTtcbiAgICByZXR1cm4gXCJbXCIgKyB0aGlzLnMudG9JU08oKSArIFwiIFxcdTIwMTMgXCIgKyB0aGlzLmUudG9JU08oKSArIFwiKVwiO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBJbnRlcnZhbC5cbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lX2ludGVydmFsc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIFRoZSBzYW1lIG9wdGlvbnMgYXMge0BsaW5rIERhdGVUaW1lLnRvSVNPfVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvSVNPID0gZnVuY3Rpb24gdG9JU08ob3B0cykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gSU5WQUxJRCQxO1xuICAgIHJldHVybiB0aGlzLnMudG9JU08ob3B0cykgKyBcIi9cIiArIHRoaXMuZS50b0lTTyhvcHRzKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGRhdGUgb2YgdGhpcyBJbnRlcnZhbC5cbiAgICogVGhlIHRpbWUgY29tcG9uZW50cyBhcmUgaWdub3JlZC5cbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lX2ludGVydmFsc1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvSVNPRGF0ZSA9IGZ1bmN0aW9uIHRvSVNPRGF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQkMTtcbiAgICByZXR1cm4gdGhpcy5zLnRvSVNPRGF0ZSgpICsgXCIvXCIgKyB0aGlzLmUudG9JU09EYXRlKCk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aW1lIG9mIHRoaXMgSW50ZXJ2YWwuXG4gICAqIFRoZSBkYXRlIGNvbXBvbmVudHMgYXJlIGlnbm9yZWQuXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjVGltZV9pbnRlcnZhbHNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBUaGUgc2FtZSBvcHRpb25zIGFzIHtAbGluayBEYXRlVGltZS50b0lTT31cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b0lTT1RpbWUgPSBmdW5jdGlvbiB0b0lTT1RpbWUob3B0cykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gSU5WQUxJRCQxO1xuICAgIHJldHVybiB0aGlzLnMudG9JU09UaW1lKG9wdHMpICsgXCIvXCIgKyB0aGlzLmUudG9JU09UaW1lKG9wdHMpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgSW50ZXJ2YWwgZm9ybWF0dGVkIGFjY29yZGluZyB0byB0aGUgc3BlY2lmaWVkIGZvcm1hdCBzdHJpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRlRm9ybWF0IC0gdGhlIGZvcm1hdCBzdHJpbmcuIFRoaXMgc3RyaW5nIGZvcm1hdHMgdGhlIHN0YXJ0IGFuZCBlbmQgdGltZS4gU2VlIHtAbGluayBEYXRlVGltZS50b0Zvcm1hdH0gZm9yIGRldGFpbHMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuc2VwYXJhdG9yID0gICcg4oCTICddIC0gYSBzZXBhcmF0b3IgdG8gcGxhY2UgYmV0d2VlbiB0aGUgc3RhcnQgYW5kIGVuZCByZXByZXNlbnRhdGlvbnNcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b0Zvcm1hdCA9IGZ1bmN0aW9uIHRvRm9ybWF0KGRhdGVGb3JtYXQsIF90ZW1wMikge1xuICAgIHZhciBfcmVmMyA9IF90ZW1wMiA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDIsXG4gICAgICAgIF9yZWYzJHNlcGFyYXRvciA9IF9yZWYzLnNlcGFyYXRvcixcbiAgICAgICAgc2VwYXJhdG9yID0gX3JlZjMkc2VwYXJhdG9yID09PSB2b2lkIDAgPyBcIiDigJMgXCIgOiBfcmVmMyRzZXBhcmF0b3I7XG5cbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQkMTtcbiAgICByZXR1cm4gXCJcIiArIHRoaXMucy50b0Zvcm1hdChkYXRlRm9ybWF0KSArIHNlcGFyYXRvciArIHRoaXMuZS50b0Zvcm1hdChkYXRlRm9ybWF0KTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIGEgRHVyYXRpb24gcmVwcmVzZW50aW5nIHRoZSB0aW1lIHNwYW5uZWQgYnkgdGhpcyBpbnRlcnZhbC5cbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IFt1bml0PVsnbWlsbGlzZWNvbmRzJ11dIC0gdGhlIHVuaXQgb3IgdW5pdHMgKHN1Y2ggYXMgJ2hvdXJzJyBvciAnZGF5cycpIHRvIGluY2x1ZGUgaW4gdGhlIGR1cmF0aW9uLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdGhhdCBhZmZlY3QgdGhlIGNyZWF0aW9uIG9mIHRoZSBEdXJhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikudG9EdXJhdGlvbigpLnRvT2JqZWN0KCkgLy89PiB7IG1pbGxpc2Vjb25kczogODg0ODkyNTcgfVxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS50b0R1cmF0aW9uKCdkYXlzJykudG9PYmplY3QoKSAvLz0+IHsgZGF5czogMS4wMjQxODEyMTUyNzc3Nzc4IH1cbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikudG9EdXJhdGlvbihbJ2hvdXJzJywgJ21pbnV0ZXMnXSkudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDI0LCBtaW51dGVzOiAzNC44MjA5NSB9XG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLnRvRHVyYXRpb24oWydob3VycycsICdtaW51dGVzJywgJ3NlY29uZHMnXSkudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDI0LCBtaW51dGVzOiAzNCwgc2Vjb25kczogNDkuMjU3IH1cbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikudG9EdXJhdGlvbignc2Vjb25kcycpLnRvT2JqZWN0KCkgLy89PiB7IHNlY29uZHM6IDg4NDg5LjI1NyB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b0R1cmF0aW9uID0gZnVuY3Rpb24gdG9EdXJhdGlvbih1bml0LCBvcHRzKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5pbnZhbGlkKHRoaXMuaW52YWxpZFJlYXNvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZS5kaWZmKHRoaXMucywgdW5pdCwgb3B0cyk7XG4gIH1cbiAgLyoqXG4gICAqIFJ1biBtYXBGbiBvbiB0aGUgaW50ZXJ2YWwgc3RhcnQgYW5kIGVuZCwgcmV0dXJuaW5nIGEgbmV3IEludGVydmFsIGZyb20gdGhlIHJlc3VsdGluZyBEYXRlVGltZXNcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWFwRm5cbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLm1hcEVuZHBvaW50cyhlbmRwb2ludCA9PiBlbmRwb2ludC50b1VUQygpKVxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS5tYXBFbmRwb2ludHMoZW5kcG9pbnQgPT4gZW5kcG9pbnQucGx1cyh7IGhvdXJzOiAyIH0pKVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5tYXBFbmRwb2ludHMgPSBmdW5jdGlvbiBtYXBFbmRwb2ludHMobWFwRm4pIHtcbiAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhtYXBGbih0aGlzLnMpLCBtYXBGbih0aGlzLmUpKTtcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoSW50ZXJ2YWwsIFt7XG4gICAga2V5OiBcInN0YXJ0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5zIDogbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZW5kIG9mIHRoZSBJbnRlcnZhbFxuICAgICAqIEB0eXBlIHtEYXRlVGltZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImVuZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuZSA6IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGlzIEludGVydmFsJ3MgZW5kIGlzIGF0IGxlYXN0IGl0cyBzdGFydCwgbWVhbmluZyB0aGF0IHRoZSBJbnRlcnZhbCBpc24ndCAnYmFja3dhcmRzJy5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImlzVmFsaWRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmludmFsaWRSZWFzb24gPT09IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gZXJyb3IgY29kZSBpZiB0aGlzIEludGVydmFsIGlzIGludmFsaWQsIG9yIG51bGwgaWYgdGhlIEludGVydmFsIGlzIHZhbGlkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImludmFsaWRSZWFzb25cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmludmFsaWQgPyB0aGlzLmludmFsaWQucmVhc29uIDogbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBleHBsYW5hdGlvbiBvZiB3aHkgdGhpcyBJbnRlcnZhbCBiZWNhbWUgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgSW50ZXJ2YWwgaXMgdmFsaWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaW52YWxpZEV4cGxhbmF0aW9uXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLmV4cGxhbmF0aW9uIDogbnVsbDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSW50ZXJ2YWw7XG59KCk7XG5cbi8qKlxuICogVGhlIEluZm8gY2xhc3MgY29udGFpbnMgc3RhdGljIG1ldGhvZHMgZm9yIHJldHJpZXZpbmcgZ2VuZXJhbCB0aW1lIGFuZCBkYXRlIHJlbGF0ZWQgZGF0YS4gRm9yIGV4YW1wbGUsIGl0IGhhcyBtZXRob2RzIGZvciBmaW5kaW5nIG91dCBpZiBhIHRpbWUgem9uZSBoYXMgYSBEU1QsIGZvciBsaXN0aW5nIHRoZSBtb250aHMgaW4gYW55IHN1cHBvcnRlZCBsb2NhbGUsIGFuZCBmb3IgZGlzY292ZXJpbmcgd2hpY2ggb2YgTHV4b24gZmVhdHVyZXMgYXJlIGF2YWlsYWJsZSBpbiB0aGUgY3VycmVudCBlbnZpcm9ubWVudC5cbiAqL1xuXG52YXIgSW5mbyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEluZm8oKSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGUgc3BlY2lmaWVkIHpvbmUgY29udGFpbnMgYSBEU1QuXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFt6b25lPSdsb2NhbCddIC0gWm9uZSB0byBjaGVjay4gRGVmYXVsdHMgdG8gdGhlIGVudmlyb25tZW50J3MgbG9jYWwgem9uZS5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEluZm8uaGFzRFNUID0gZnVuY3Rpb24gaGFzRFNUKHpvbmUpIHtcbiAgICBpZiAoem9uZSA9PT0gdm9pZCAwKSB7XG4gICAgICB6b25lID0gU2V0dGluZ3MuZGVmYXVsdFpvbmU7XG4gICAgfVxuXG4gICAgdmFyIHByb3RvID0gRGF0ZVRpbWUubG9jYWwoKS5zZXRab25lKHpvbmUpLnNldCh7XG4gICAgICBtb250aDogMTJcbiAgICB9KTtcbiAgICByZXR1cm4gIXpvbmUudW5pdmVyc2FsICYmIHByb3RvLm9mZnNldCAhPT0gcHJvdG8uc2V0KHtcbiAgICAgIG1vbnRoOiA2XG4gICAgfSkub2Zmc2V0O1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGUgc3BlY2lmaWVkIHpvbmUgaXMgYSB2YWxpZCBJQU5BIHNwZWNpZmllci5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHpvbmUgLSBab25lIHRvIGNoZWNrXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICA7XG5cbiAgSW5mby5pc1ZhbGlkSUFOQVpvbmUgPSBmdW5jdGlvbiBpc1ZhbGlkSUFOQVpvbmUoem9uZSkge1xuICAgIHJldHVybiBJQU5BWm9uZS5pc1ZhbGlkU3BlY2lmaWVyKHpvbmUpICYmIElBTkFab25lLmlzVmFsaWRab25lKHpvbmUpO1xuICB9XG4gIC8qKlxuICAgKiBDb252ZXJ0cyB0aGUgaW5wdXQgaW50byBhIHtAbGluayBab25lfSBpbnN0YW5jZS5cbiAgICpcbiAgICogKiBJZiBgaW5wdXRgIGlzIGFscmVhZHkgYSBab25lIGluc3RhbmNlLCBpdCBpcyByZXR1cm5lZCB1bmNoYW5nZWQuXG4gICAqICogSWYgYGlucHV0YCBpcyBhIHN0cmluZyBjb250YWluaW5nIGEgdmFsaWQgdGltZSB6b25lIG5hbWUsIGEgWm9uZSBpbnN0YW5jZVxuICAgKiAgIHdpdGggdGhhdCBuYW1lIGlzIHJldHVybmVkLlxuICAgKiAqIElmIGBpbnB1dGAgaXMgYSBzdHJpbmcgdGhhdCBkb2Vzbid0IHJlZmVyIHRvIGEga25vd24gdGltZSB6b25lLCBhIFpvbmVcbiAgICogICBpbnN0YW5jZSB3aXRoIHtAbGluayBab25lLmlzVmFsaWR9ID09IGZhbHNlIGlzIHJldHVybmVkLlxuICAgKiAqIElmIGBpbnB1dCBpcyBhIG51bWJlciwgYSBab25lIGluc3RhbmNlIHdpdGggdGhlIHNwZWNpZmllZCBmaXhlZCBvZmZzZXRcbiAgICogICBpbiBtaW51dGVzIGlzIHJldHVybmVkLlxuICAgKiAqIElmIGBpbnB1dGAgaXMgYG51bGxgIG9yIGB1bmRlZmluZWRgLCB0aGUgZGVmYXVsdCB6b25lIGlzIHJldHVybmVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfG51bWJlcn0gW2lucHV0XSAtIHRoZSB2YWx1ZSB0byBiZSBjb252ZXJ0ZWRcbiAgICogQHJldHVybiB7Wm9uZX1cbiAgICovXG4gIDtcblxuICBJbmZvLm5vcm1hbGl6ZVpvbmUgPSBmdW5jdGlvbiBub3JtYWxpemVab25lJDEoaW5wdXQpIHtcbiAgICByZXR1cm4gbm9ybWFsaXplWm9uZShpbnB1dCwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2Ygc3RhbmRhbG9uZSBtb250aCBuYW1lcy5cbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlVGltZUZvcm1hdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xlbmd0aD0nbG9uZyddIC0gdGhlIGxlbmd0aCBvZiB0aGUgbW9udGggcmVwcmVzZW50YXRpb24sIHN1Y2ggYXMgXCJudW1lcmljXCIsIFwiMi1kaWdpdFwiLCBcIm5hcnJvd1wiLCBcInNob3J0XCIsIFwibG9uZ1wiXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlXSAtIHRoZSBsb2NhbGUgY29kZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubnVtYmVyaW5nU3lzdGVtPW51bGxdIC0gdGhlIG51bWJlcmluZyBzeXN0ZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm91dHB1dENhbGVuZGFyPSdncmVnb3J5J10gLSB0aGUgY2FsZW5kYXJcbiAgICogQGV4YW1wbGUgSW5mby5tb250aHMoKVswXSAvLz0+ICdKYW51YXJ5J1xuICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygnc2hvcnQnKVswXSAvLz0+ICdKYW4nXG4gICAqIEBleGFtcGxlIEluZm8ubW9udGhzKCdudW1lcmljJylbMF0gLy89PiAnMSdcbiAgICogQGV4YW1wbGUgSW5mby5tb250aHMoJ3Nob3J0JywgeyBsb2NhbGU6ICdmci1DQScgfSApWzBdIC8vPT4gJ2phbnYuJ1xuICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygnbnVtZXJpYycsIHsgbG9jYWxlOiAnYXInIH0pWzBdIC8vPT4gJ9mhJ1xuICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygnbG9uZycsIHsgb3V0cHV0Q2FsZW5kYXI6ICdpc2xhbWljJyB9KVswXSAvLz0+ICdSYWJpyrsgSSdcbiAgICogQHJldHVybiB7W3N0cmluZ119XG4gICAqL1xuICA7XG5cbiAgSW5mby5tb250aHMgPSBmdW5jdGlvbiBtb250aHMobGVuZ3RoLCBfdGVtcCkge1xuICAgIGlmIChsZW5ndGggPT09IHZvaWQgMCkge1xuICAgICAgbGVuZ3RoID0gXCJsb25nXCI7XG4gICAgfVxuXG4gICAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgICAgX3JlZiRsb2NhbGUgPSBfcmVmLmxvY2FsZSxcbiAgICAgICAgbG9jYWxlID0gX3JlZiRsb2NhbGUgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmJGxvY2FsZSxcbiAgICAgICAgX3JlZiRudW1iZXJpbmdTeXN0ZW0gPSBfcmVmLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgbnVtYmVyaW5nU3lzdGVtID0gX3JlZiRudW1iZXJpbmdTeXN0ZW0gPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmJG51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgX3JlZiRvdXRwdXRDYWxlbmRhciA9IF9yZWYub3V0cHV0Q2FsZW5kYXIsXG4gICAgICAgIG91dHB1dENhbGVuZGFyID0gX3JlZiRvdXRwdXRDYWxlbmRhciA9PT0gdm9pZCAwID8gXCJncmVnb3J5XCIgOiBfcmVmJG91dHB1dENhbGVuZGFyO1xuXG4gICAgcmV0dXJuIExvY2FsZS5jcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyKS5tb250aHMobGVuZ3RoKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIGZvcm1hdCBtb250aCBuYW1lcy5cbiAgICogRm9ybWF0IG1vbnRocyBkaWZmZXIgZnJvbSBzdGFuZGFsb25lIG1vbnRocyBpbiB0aGF0IHRoZXkncmUgbWVhbnQgdG8gYXBwZWFyIG5leHQgdG8gdGhlIGRheSBvZiB0aGUgbW9udGguIEluIHNvbWUgbGFuZ3VhZ2VzLCB0aGF0XG4gICAqIGNoYW5nZXMgdGhlIHN0cmluZy5cbiAgICogU2VlIHtAbGluayBtb250aHN9XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbGVuZ3RoPSdsb25nJ10gLSB0aGUgbGVuZ3RoIG9mIHRoZSBtb250aCByZXByZXNlbnRhdGlvbiwgc3VjaCBhcyBcIm51bWVyaWNcIiwgXCIyLWRpZ2l0XCIsIFwibmFycm93XCIsIFwic2hvcnRcIiwgXCJsb25nXCJcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5udW1iZXJpbmdTeXN0ZW09bnVsbF0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMub3V0cHV0Q2FsZW5kYXI9J2dyZWdvcnknXSAtIHRoZSBjYWxlbmRhclxuICAgKiBAcmV0dXJuIHtbc3RyaW5nXX1cbiAgICovXG4gIDtcblxuICBJbmZvLm1vbnRoc0Zvcm1hdCA9IGZ1bmN0aW9uIG1vbnRoc0Zvcm1hdChsZW5ndGgsIF90ZW1wMikge1xuICAgIGlmIChsZW5ndGggPT09IHZvaWQgMCkge1xuICAgICAgbGVuZ3RoID0gXCJsb25nXCI7XG4gICAgfVxuXG4gICAgdmFyIF9yZWYyID0gX3RlbXAyID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wMixcbiAgICAgICAgX3JlZjIkbG9jYWxlID0gX3JlZjIubG9jYWxlLFxuICAgICAgICBsb2NhbGUgPSBfcmVmMiRsb2NhbGUgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmMiRsb2NhbGUsXG4gICAgICAgIF9yZWYyJG51bWJlcmluZ1N5c3RlbSA9IF9yZWYyLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgbnVtYmVyaW5nU3lzdGVtID0gX3JlZjIkbnVtYmVyaW5nU3lzdGVtID09PSB2b2lkIDAgPyBudWxsIDogX3JlZjIkbnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICBfcmVmMiRvdXRwdXRDYWxlbmRhciA9IF9yZWYyLm91dHB1dENhbGVuZGFyLFxuICAgICAgICBvdXRwdXRDYWxlbmRhciA9IF9yZWYyJG91dHB1dENhbGVuZGFyID09PSB2b2lkIDAgPyBcImdyZWdvcnlcIiA6IF9yZWYyJG91dHB1dENhbGVuZGFyO1xuXG4gICAgcmV0dXJuIExvY2FsZS5jcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyKS5tb250aHMobGVuZ3RoLCB0cnVlKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIHN0YW5kYWxvbmUgd2VlayBuYW1lcy5cbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlVGltZUZvcm1hdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xlbmd0aD0nbG9uZyddIC0gdGhlIGxlbmd0aCBvZiB0aGUgbW9udGggcmVwcmVzZW50YXRpb24sIHN1Y2ggYXMgXCJuYXJyb3dcIiwgXCJzaG9ydFwiLCBcImxvbmdcIi5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5udW1iZXJpbmdTeXN0ZW09bnVsbF0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbVxuICAgKiBAZXhhbXBsZSBJbmZvLndlZWtkYXlzKClbMF0gLy89PiAnTW9uZGF5J1xuICAgKiBAZXhhbXBsZSBJbmZvLndlZWtkYXlzKCdzaG9ydCcpWzBdIC8vPT4gJ01vbidcbiAgICogQGV4YW1wbGUgSW5mby53ZWVrZGF5cygnc2hvcnQnLCB7IGxvY2FsZTogJ2ZyLUNBJyB9KVswXSAvLz0+ICdsdW4uJ1xuICAgKiBAZXhhbXBsZSBJbmZvLndlZWtkYXlzKCdzaG9ydCcsIHsgbG9jYWxlOiAnYXInIH0pWzBdIC8vPT4gJ9in2YTYp9ir2YbZitmGJ1xuICAgKiBAcmV0dXJuIHtbc3RyaW5nXX1cbiAgICovXG4gIDtcblxuICBJbmZvLndlZWtkYXlzID0gZnVuY3Rpb24gd2Vla2RheXMobGVuZ3RoLCBfdGVtcDMpIHtcbiAgICBpZiAobGVuZ3RoID09PSB2b2lkIDApIHtcbiAgICAgIGxlbmd0aCA9IFwibG9uZ1wiO1xuICAgIH1cblxuICAgIHZhciBfcmVmMyA9IF90ZW1wMyA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDMsXG4gICAgICAgIF9yZWYzJGxvY2FsZSA9IF9yZWYzLmxvY2FsZSxcbiAgICAgICAgbG9jYWxlID0gX3JlZjMkbG9jYWxlID09PSB2b2lkIDAgPyBudWxsIDogX3JlZjMkbG9jYWxlLFxuICAgICAgICBfcmVmMyRudW1iZXJpbmdTeXN0ZW0gPSBfcmVmMy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbSA9IF9yZWYzJG51bWJlcmluZ1N5c3RlbSA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYzJG51bWJlcmluZ1N5c3RlbTtcblxuICAgIHJldHVybiBMb2NhbGUuY3JlYXRlKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBudWxsKS53ZWVrZGF5cyhsZW5ndGgpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgZm9ybWF0IHdlZWsgbmFtZXMuXG4gICAqIEZvcm1hdCB3ZWVrZGF5cyBkaWZmZXIgZnJvbSBzdGFuZGFsb25lIHdlZWtkYXlzIGluIHRoYXQgdGhleSdyZSBtZWFudCB0byBhcHBlYXIgbmV4dCB0byBtb3JlIGRhdGUgaW5mb3JtYXRpb24uIEluIHNvbWUgbGFuZ3VhZ2VzLCB0aGF0XG4gICAqIGNoYW5nZXMgdGhlIHN0cmluZy5cbiAgICogU2VlIHtAbGluayB3ZWVrZGF5c31cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsZW5ndGg9J2xvbmcnXSAtIHRoZSBsZW5ndGggb2YgdGhlIG1vbnRoIHJlcHJlc2VudGF0aW9uLCBzdWNoIGFzIFwibmFycm93XCIsIFwic2hvcnRcIiwgXCJsb25nXCIuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPW51bGxdIC0gdGhlIGxvY2FsZSBjb2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5udW1iZXJpbmdTeXN0ZW09bnVsbF0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbVxuICAgKiBAcmV0dXJuIHtbc3RyaW5nXX1cbiAgICovXG4gIDtcblxuICBJbmZvLndlZWtkYXlzRm9ybWF0ID0gZnVuY3Rpb24gd2Vla2RheXNGb3JtYXQobGVuZ3RoLCBfdGVtcDQpIHtcbiAgICBpZiAobGVuZ3RoID09PSB2b2lkIDApIHtcbiAgICAgIGxlbmd0aCA9IFwibG9uZ1wiO1xuICAgIH1cblxuICAgIHZhciBfcmVmNCA9IF90ZW1wNCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDQsXG4gICAgICAgIF9yZWY0JGxvY2FsZSA9IF9yZWY0LmxvY2FsZSxcbiAgICAgICAgbG9jYWxlID0gX3JlZjQkbG9jYWxlID09PSB2b2lkIDAgPyBudWxsIDogX3JlZjQkbG9jYWxlLFxuICAgICAgICBfcmVmNCRudW1iZXJpbmdTeXN0ZW0gPSBfcmVmNC5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbSA9IF9yZWY0JG51bWJlcmluZ1N5c3RlbSA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWY0JG51bWJlcmluZ1N5c3RlbTtcblxuICAgIHJldHVybiBMb2NhbGUuY3JlYXRlKGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBudWxsKS53ZWVrZGF5cyhsZW5ndGgsIHRydWUpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgbWVyaWRpZW1zLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZV0gLSB0aGUgbG9jYWxlIGNvZGVcbiAgICogQGV4YW1wbGUgSW5mby5tZXJpZGllbXMoKSAvLz0+IFsgJ0FNJywgJ1BNJyBdXG4gICAqIEBleGFtcGxlIEluZm8ubWVyaWRpZW1zKHsgbG9jYWxlOiAnbXknIH0pIC8vPT4gWyAn4YCU4YC24YCU4YCA4YC6JywgJ+GAiuGAlOGAsScgXVxuICAgKiBAcmV0dXJuIHtbc3RyaW5nXX1cbiAgICovXG4gIDtcblxuICBJbmZvLm1lcmlkaWVtcyA9IGZ1bmN0aW9uIG1lcmlkaWVtcyhfdGVtcDUpIHtcbiAgICB2YXIgX3JlZjUgPSBfdGVtcDUgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA1LFxuICAgICAgICBfcmVmNSRsb2NhbGUgPSBfcmVmNS5sb2NhbGUsXG4gICAgICAgIGxvY2FsZSA9IF9yZWY1JGxvY2FsZSA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWY1JGxvY2FsZTtcblxuICAgIHJldHVybiBMb2NhbGUuY3JlYXRlKGxvY2FsZSkubWVyaWRpZW1zKCk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybiBhbiBhcnJheSBvZiBlcmFzLCBzdWNoIGFzIFsnQkMnLCAnQUQnXS4gVGhlIGxvY2FsZSBjYW4gYmUgc3BlY2lmaWVkLCBidXQgdGhlIGNhbGVuZGFyIHN5c3RlbSBpcyBhbHdheXMgR3JlZ29yaWFuLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xlbmd0aD0nc2hvcnQnXSAtIHRoZSBsZW5ndGggb2YgdGhlIGVyYSByZXByZXNlbnRhdGlvbiwgc3VjaCBhcyBcInNob3J0XCIgb3IgXCJsb25nXCIuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlXSAtIHRoZSBsb2NhbGUgY29kZVxuICAgKiBAZXhhbXBsZSBJbmZvLmVyYXMoKSAvLz0+IFsgJ0JDJywgJ0FEJyBdXG4gICAqIEBleGFtcGxlIEluZm8uZXJhcygnbG9uZycpIC8vPT4gWyAnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaScgXVxuICAgKiBAZXhhbXBsZSBJbmZvLmVyYXMoJ2xvbmcnLCB7IGxvY2FsZTogJ2ZyJyB9KSAvLz0+IFsgJ2F2YW50IErDqXN1cy1DaHJpc3QnLCAnYXByw6hzIErDqXN1cy1DaHJpc3QnIF1cbiAgICogQHJldHVybiB7W3N0cmluZ119XG4gICAqL1xuICA7XG5cbiAgSW5mby5lcmFzID0gZnVuY3Rpb24gZXJhcyhsZW5ndGgsIF90ZW1wNikge1xuICAgIGlmIChsZW5ndGggPT09IHZvaWQgMCkge1xuICAgICAgbGVuZ3RoID0gXCJzaG9ydFwiO1xuICAgIH1cblxuICAgIHZhciBfcmVmNiA9IF90ZW1wNiA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDYsXG4gICAgICAgIF9yZWY2JGxvY2FsZSA9IF9yZWY2LmxvY2FsZSxcbiAgICAgICAgbG9jYWxlID0gX3JlZjYkbG9jYWxlID09PSB2b2lkIDAgPyBudWxsIDogX3JlZjYkbG9jYWxlO1xuXG4gICAgcmV0dXJuIExvY2FsZS5jcmVhdGUobG9jYWxlLCBudWxsLCBcImdyZWdvcnlcIikuZXJhcyhsZW5ndGgpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHNldCBvZiBhdmFpbGFibGUgZmVhdHVyZXMgaW4gdGhpcyBlbnZpcm9ubWVudC5cbiAgICogU29tZSBmZWF0dXJlcyBvZiBMdXhvbiBhcmUgbm90IGF2YWlsYWJsZSBpbiBhbGwgZW52aXJvbm1lbnRzLiBGb3IgZXhhbXBsZSwgb24gb2xkZXIgYnJvd3NlcnMsIHRpbWV6b25lIHN1cHBvcnQgaXMgbm90IGF2YWlsYWJsZS4gVXNlIHRoaXMgZnVuY3Rpb24gdG8gZmlndXJlIG91dCBpZiB0aGF0J3MgdGhlIGNhc2UuXG4gICAqIEtleXM6XG4gICAqICogYHpvbmVzYDogd2hldGhlciB0aGlzIGVudmlyb25tZW50IHN1cHBvcnRzIElBTkEgdGltZXpvbmVzXG4gICAqICogYGludGxUb2tlbnNgOiB3aGV0aGVyIHRoaXMgZW52aXJvbm1lbnQgc3VwcG9ydHMgaW50ZXJuYXRpb25hbGl6ZWQgdG9rZW4tYmFzZWQgZm9ybWF0dGluZy9wYXJzaW5nXG4gICAqICogYGludGxgOiB3aGV0aGVyIHRoaXMgZW52aXJvbm1lbnQgc3VwcG9ydHMgZ2VuZXJhbCBpbnRlcm5hdGlvbmFsaXphdGlvblxuICAgKiAqIGByZWxhdGl2ZWA6IHdoZXRoZXIgdGhpcyBlbnZpcm9ubWVudCBzdXBwb3J0cyByZWxhdGl2ZSB0aW1lIGZvcm1hdHRpbmdcbiAgICogQGV4YW1wbGUgSW5mby5mZWF0dXJlcygpIC8vPT4geyBpbnRsOiB0cnVlLCBpbnRsVG9rZW5zOiBmYWxzZSwgem9uZXM6IHRydWUsIHJlbGF0aXZlOiBmYWxzZSB9XG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIDtcblxuICBJbmZvLmZlYXR1cmVzID0gZnVuY3Rpb24gZmVhdHVyZXMoKSB7XG4gICAgdmFyIGludGwgPSBmYWxzZSxcbiAgICAgICAgaW50bFRva2VucyA9IGZhbHNlLFxuICAgICAgICB6b25lcyA9IGZhbHNlLFxuICAgICAgICByZWxhdGl2ZSA9IGZhbHNlO1xuXG4gICAgaWYgKGhhc0ludGwoKSkge1xuICAgICAgaW50bCA9IHRydWU7XG4gICAgICBpbnRsVG9rZW5zID0gaGFzRm9ybWF0VG9QYXJ0cygpO1xuICAgICAgcmVsYXRpdmUgPSBoYXNSZWxhdGl2ZSgpO1xuXG4gICAgICB0cnkge1xuICAgICAgICB6b25lcyA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KFwiZW5cIiwge1xuICAgICAgICAgIHRpbWVab25lOiBcIkFtZXJpY2EvTmV3X1lvcmtcIlxuICAgICAgICB9KS5yZXNvbHZlZE9wdGlvbnMoKS50aW1lWm9uZSA9PT0gXCJBbWVyaWNhL05ld19Zb3JrXCI7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHpvbmVzID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGludGw6IGludGwsXG4gICAgICBpbnRsVG9rZW5zOiBpbnRsVG9rZW5zLFxuICAgICAgem9uZXM6IHpvbmVzLFxuICAgICAgcmVsYXRpdmU6IHJlbGF0aXZlXG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gSW5mbztcbn0oKTtcblxuZnVuY3Rpb24gZGF5RGlmZihlYXJsaWVyLCBsYXRlcikge1xuICB2YXIgdXRjRGF5U3RhcnQgPSBmdW5jdGlvbiB1dGNEYXlTdGFydChkdCkge1xuICAgIHJldHVybiBkdC50b1VUQygwLCB7XG4gICAgICBrZWVwTG9jYWxUaW1lOiB0cnVlXG4gICAgfSkuc3RhcnRPZihcImRheVwiKS52YWx1ZU9mKCk7XG4gIH0sXG4gICAgICBtcyA9IHV0Y0RheVN0YXJ0KGxhdGVyKSAtIHV0Y0RheVN0YXJ0KGVhcmxpZXIpO1xuXG4gIHJldHVybiBNYXRoLmZsb29yKER1cmF0aW9uLmZyb21NaWxsaXMobXMpLmFzKFwiZGF5c1wiKSk7XG59XG5cbmZ1bmN0aW9uIGhpZ2hPcmRlckRpZmZzKGN1cnNvciwgbGF0ZXIsIHVuaXRzKSB7XG4gIHZhciBkaWZmZXJzID0gW1tcInllYXJzXCIsIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGIueWVhciAtIGEueWVhcjtcbiAgfV0sIFtcIm1vbnRoc1wiLCBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBiLm1vbnRoIC0gYS5tb250aCArIChiLnllYXIgLSBhLnllYXIpICogMTI7XG4gIH1dLCBbXCJ3ZWVrc1wiLCBmdW5jdGlvbiAoYSwgYikge1xuICAgIHZhciBkYXlzID0gZGF5RGlmZihhLCBiKTtcbiAgICByZXR1cm4gKGRheXMgLSBkYXlzICUgNykgLyA3O1xuICB9XSwgW1wiZGF5c1wiLCBkYXlEaWZmXV07XG4gIHZhciByZXN1bHRzID0ge307XG4gIHZhciBsb3dlc3RPcmRlciwgaGlnaFdhdGVyO1xuXG4gIGZvciAodmFyIF9pID0gMCwgX2RpZmZlcnMgPSBkaWZmZXJzOyBfaSA8IF9kaWZmZXJzLmxlbmd0aDsgX2krKykge1xuICAgIHZhciBfZGlmZmVycyRfaSA9IF9kaWZmZXJzW19pXSxcbiAgICAgICAgdW5pdCA9IF9kaWZmZXJzJF9pWzBdLFxuICAgICAgICBkaWZmZXIgPSBfZGlmZmVycyRfaVsxXTtcblxuICAgIGlmICh1bml0cy5pbmRleE9mKHVuaXQpID49IDApIHtcbiAgICAgIHZhciBfY3Vyc29yJHBsdXM7XG5cbiAgICAgIGxvd2VzdE9yZGVyID0gdW5pdDtcbiAgICAgIHZhciBkZWx0YSA9IGRpZmZlcihjdXJzb3IsIGxhdGVyKTtcbiAgICAgIGhpZ2hXYXRlciA9IGN1cnNvci5wbHVzKChfY3Vyc29yJHBsdXMgPSB7fSwgX2N1cnNvciRwbHVzW3VuaXRdID0gZGVsdGEsIF9jdXJzb3IkcGx1cykpO1xuXG4gICAgICBpZiAoaGlnaFdhdGVyID4gbGF0ZXIpIHtcbiAgICAgICAgdmFyIF9jdXJzb3IkcGx1czI7XG5cbiAgICAgICAgY3Vyc29yID0gY3Vyc29yLnBsdXMoKF9jdXJzb3IkcGx1czIgPSB7fSwgX2N1cnNvciRwbHVzMlt1bml0XSA9IGRlbHRhIC0gMSwgX2N1cnNvciRwbHVzMikpO1xuICAgICAgICBkZWx0YSAtPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3Vyc29yID0gaGlnaFdhdGVyO1xuICAgICAgfVxuXG4gICAgICByZXN1bHRzW3VuaXRdID0gZGVsdGE7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFtjdXJzb3IsIHJlc3VsdHMsIGhpZ2hXYXRlciwgbG93ZXN0T3JkZXJdO1xufVxuXG5mdW5jdGlvbiBfZGlmZiAoZWFybGllciwgbGF0ZXIsIHVuaXRzLCBvcHRzKSB7XG4gIHZhciBfaGlnaE9yZGVyRGlmZnMgPSBoaWdoT3JkZXJEaWZmcyhlYXJsaWVyLCBsYXRlciwgdW5pdHMpLFxuICAgICAgY3Vyc29yID0gX2hpZ2hPcmRlckRpZmZzWzBdLFxuICAgICAgcmVzdWx0cyA9IF9oaWdoT3JkZXJEaWZmc1sxXSxcbiAgICAgIGhpZ2hXYXRlciA9IF9oaWdoT3JkZXJEaWZmc1syXSxcbiAgICAgIGxvd2VzdE9yZGVyID0gX2hpZ2hPcmRlckRpZmZzWzNdO1xuXG4gIHZhciByZW1haW5pbmdNaWxsaXMgPSBsYXRlciAtIGN1cnNvcjtcbiAgdmFyIGxvd2VyT3JkZXJVbml0cyA9IHVuaXRzLmZpbHRlcihmdW5jdGlvbiAodSkge1xuICAgIHJldHVybiBbXCJob3Vyc1wiLCBcIm1pbnV0ZXNcIiwgXCJzZWNvbmRzXCIsIFwibWlsbGlzZWNvbmRzXCJdLmluZGV4T2YodSkgPj0gMDtcbiAgfSk7XG5cbiAgaWYgKGxvd2VyT3JkZXJVbml0cy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAoaGlnaFdhdGVyIDwgbGF0ZXIpIHtcbiAgICAgIHZhciBfY3Vyc29yJHBsdXMzO1xuXG4gICAgICBoaWdoV2F0ZXIgPSBjdXJzb3IucGx1cygoX2N1cnNvciRwbHVzMyA9IHt9LCBfY3Vyc29yJHBsdXMzW2xvd2VzdE9yZGVyXSA9IDEsIF9jdXJzb3IkcGx1czMpKTtcbiAgICB9XG5cbiAgICBpZiAoaGlnaFdhdGVyICE9PSBjdXJzb3IpIHtcbiAgICAgIHJlc3VsdHNbbG93ZXN0T3JkZXJdID0gKHJlc3VsdHNbbG93ZXN0T3JkZXJdIHx8IDApICsgcmVtYWluaW5nTWlsbGlzIC8gKGhpZ2hXYXRlciAtIGN1cnNvcik7XG4gICAgfVxuICB9XG5cbiAgdmFyIGR1cmF0aW9uID0gRHVyYXRpb24uZnJvbU9iamVjdChPYmplY3QuYXNzaWduKHJlc3VsdHMsIG9wdHMpKTtcblxuICBpZiAobG93ZXJPcmRlclVuaXRzLmxlbmd0aCA+IDApIHtcbiAgICB2YXIgX0R1cmF0aW9uJGZyb21NaWxsaXM7XG5cbiAgICByZXR1cm4gKF9EdXJhdGlvbiRmcm9tTWlsbGlzID0gRHVyYXRpb24uZnJvbU1pbGxpcyhyZW1haW5pbmdNaWxsaXMsIG9wdHMpKS5zaGlmdFRvLmFwcGx5KF9EdXJhdGlvbiRmcm9tTWlsbGlzLCBsb3dlck9yZGVyVW5pdHMpLnBsdXMoZHVyYXRpb24pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBkdXJhdGlvbjtcbiAgfVxufVxuXG52YXIgbnVtYmVyaW5nU3lzdGVtcyA9IHtcbiAgYXJhYjogXCJbXFx1MDY2MC1cXHUwNjY5XVwiLFxuICBhcmFiZXh0OiBcIltcXHUwNkYwLVxcdTA2RjldXCIsXG4gIGJhbGk6IFwiW1xcdTFCNTAtXFx1MUI1OV1cIixcbiAgYmVuZzogXCJbXFx1MDlFNi1cXHUwOUVGXVwiLFxuICBkZXZhOiBcIltcXHUwOTY2LVxcdTA5NkZdXCIsXG4gIGZ1bGx3aWRlOiBcIltcXHVGRjEwLVxcdUZGMTldXCIsXG4gIGd1anI6IFwiW1xcdTBBRTYtXFx1MEFFRl1cIixcbiAgaGFuaWRlYzogXCJb44CHfOS4gHzkuox85LiJfOWbm3zkupR85YWtfOS4g3zlhat85LmdXVwiLFxuICBraG1yOiBcIltcXHUxN0UwLVxcdTE3RTldXCIsXG4gIGtuZGE6IFwiW1xcdTBDRTYtXFx1MENFRl1cIixcbiAgbGFvbzogXCJbXFx1MEVEMC1cXHUwRUQ5XVwiLFxuICBsaW1iOiBcIltcXHUxOTQ2LVxcdTE5NEZdXCIsXG4gIG1seW06IFwiW1xcdTBENjYtXFx1MEQ2Rl1cIixcbiAgbW9uZzogXCJbXFx1MTgxMC1cXHUxODE5XVwiLFxuICBteW1yOiBcIltcXHUxMDQwLVxcdTEwNDldXCIsXG4gIG9yeWE6IFwiW1xcdTBCNjYtXFx1MEI2Rl1cIixcbiAgdGFtbGRlYzogXCJbXFx1MEJFNi1cXHUwQkVGXVwiLFxuICB0ZWx1OiBcIltcXHUwQzY2LVxcdTBDNkZdXCIsXG4gIHRoYWk6IFwiW1xcdTBFNTAtXFx1MEU1OV1cIixcbiAgdGlidDogXCJbXFx1MEYyMC1cXHUwRjI5XVwiLFxuICBsYXRuOiBcIlxcXFxkXCJcbn07XG52YXIgbnVtYmVyaW5nU3lzdGVtc1VURjE2ID0ge1xuICBhcmFiOiBbMTYzMiwgMTY0MV0sXG4gIGFyYWJleHQ6IFsxNzc2LCAxNzg1XSxcbiAgYmFsaTogWzY5OTIsIDcwMDFdLFxuICBiZW5nOiBbMjUzNCwgMjU0M10sXG4gIGRldmE6IFsyNDA2LCAyNDE1XSxcbiAgZnVsbHdpZGU6IFs2NTI5NiwgNjUzMDNdLFxuICBndWpyOiBbMjc5MCwgMjc5OV0sXG4gIGtobXI6IFs2MTEyLCA2MTIxXSxcbiAga25kYTogWzMzMDIsIDMzMTFdLFxuICBsYW9vOiBbMzc5MiwgMzgwMV0sXG4gIGxpbWI6IFs2NDcwLCA2NDc5XSxcbiAgbWx5bTogWzM0MzAsIDM0MzldLFxuICBtb25nOiBbNjE2MCwgNjE2OV0sXG4gIG15bXI6IFs0MTYwLCA0MTY5XSxcbiAgb3J5YTogWzI5MTgsIDI5MjddLFxuICB0YW1sZGVjOiBbMzA0NiwgMzA1NV0sXG4gIHRlbHU6IFszMTc0LCAzMTgzXSxcbiAgdGhhaTogWzM2NjQsIDM2NzNdLFxuICB0aWJ0OiBbMzg3MiwgMzg4MV1cbn07IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG52YXIgaGFuaWRlY0NoYXJzID0gbnVtYmVyaW5nU3lzdGVtcy5oYW5pZGVjLnJlcGxhY2UoL1tcXFt8XFxdXS9nLCBcIlwiKS5zcGxpdChcIlwiKTtcbmZ1bmN0aW9uIHBhcnNlRGlnaXRzKHN0cikge1xuICB2YXIgdmFsdWUgPSBwYXJzZUludChzdHIsIDEwKTtcblxuICBpZiAoaXNOYU4odmFsdWUpKSB7XG4gICAgdmFsdWUgPSBcIlwiO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaSk7XG5cbiAgICAgIGlmIChzdHJbaV0uc2VhcmNoKG51bWJlcmluZ1N5c3RlbXMuaGFuaWRlYykgIT09IC0xKSB7XG4gICAgICAgIHZhbHVlICs9IGhhbmlkZWNDaGFycy5pbmRleE9mKHN0cltpXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gbnVtYmVyaW5nU3lzdGVtc1VURjE2KSB7XG4gICAgICAgICAgdmFyIF9udW1iZXJpbmdTeXN0ZW1zVVRGID0gbnVtYmVyaW5nU3lzdGVtc1VURjE2W2tleV0sXG4gICAgICAgICAgICAgIG1pbiA9IF9udW1iZXJpbmdTeXN0ZW1zVVRGWzBdLFxuICAgICAgICAgICAgICBtYXggPSBfbnVtYmVyaW5nU3lzdGVtc1VURlsxXTtcblxuICAgICAgICAgIGlmIChjb2RlID49IG1pbiAmJiBjb2RlIDw9IG1heCkge1xuICAgICAgICAgICAgdmFsdWUgKz0gY29kZSAtIG1pbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cbmZ1bmN0aW9uIGRpZ2l0UmVnZXgoX3JlZiwgYXBwZW5kKSB7XG4gIHZhciBudW1iZXJpbmdTeXN0ZW0gPSBfcmVmLm51bWJlcmluZ1N5c3RlbTtcblxuICBpZiAoYXBwZW5kID09PSB2b2lkIDApIHtcbiAgICBhcHBlbmQgPSBcIlwiO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBSZWdFeHAoXCJcIiArIG51bWJlcmluZ1N5c3RlbXNbbnVtYmVyaW5nU3lzdGVtIHx8IFwibGF0blwiXSArIGFwcGVuZCk7XG59XG5cbnZhciBNSVNTSU5HX0ZUUCA9IFwibWlzc2luZyBJbnRsLkRhdGVUaW1lRm9ybWF0LmZvcm1hdFRvUGFydHMgc3VwcG9ydFwiO1xuXG5mdW5jdGlvbiBpbnRVbml0KHJlZ2V4LCBwb3N0KSB7XG4gIGlmIChwb3N0ID09PSB2b2lkIDApIHtcbiAgICBwb3N0ID0gZnVuY3Rpb24gcG9zdChpKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZWdleDogcmVnZXgsXG4gICAgZGVzZXI6IGZ1bmN0aW9uIGRlc2VyKF9yZWYpIHtcbiAgICAgIHZhciBzID0gX3JlZlswXTtcbiAgICAgIHJldHVybiBwb3N0KHBhcnNlRGlnaXRzKHMpKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpeExpc3RSZWdleChzKSB7XG4gIC8vIG1ha2UgZG90cyBvcHRpb25hbCBhbmQgYWxzbyBtYWtlIHRoZW0gbGl0ZXJhbFxuICByZXR1cm4gcy5yZXBsYWNlKC9cXC4vLCBcIlxcXFwuP1wiKTtcbn1cblxuZnVuY3Rpb24gc3RyaXBJbnNlbnNpdGl2aXRpZXMocykge1xuICByZXR1cm4gcy5yZXBsYWNlKC9cXC4vLCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBvbmVPZihzdHJpbmdzLCBzdGFydEluZGV4KSB7XG4gIGlmIChzdHJpbmdzID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZ2V4OiBSZWdFeHAoc3RyaW5ncy5tYXAoZml4TGlzdFJlZ2V4KS5qb2luKFwifFwiKSksXG4gICAgICBkZXNlcjogZnVuY3Rpb24gZGVzZXIoX3JlZjIpIHtcbiAgICAgICAgdmFyIHMgPSBfcmVmMlswXTtcbiAgICAgICAgcmV0dXJuIHN0cmluZ3MuZmluZEluZGV4KGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgcmV0dXJuIHN0cmlwSW5zZW5zaXRpdml0aWVzKHMpID09PSBzdHJpcEluc2Vuc2l0aXZpdGllcyhpKTtcbiAgICAgICAgfSkgKyBzdGFydEluZGV4O1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gb2Zmc2V0KHJlZ2V4LCBncm91cHMpIHtcbiAgcmV0dXJuIHtcbiAgICByZWdleDogcmVnZXgsXG4gICAgZGVzZXI6IGZ1bmN0aW9uIGRlc2VyKF9yZWYzKSB7XG4gICAgICB2YXIgaCA9IF9yZWYzWzFdLFxuICAgICAgICAgIG0gPSBfcmVmM1syXTtcbiAgICAgIHJldHVybiBzaWduZWRPZmZzZXQoaCwgbSk7XG4gICAgfSxcbiAgICBncm91cHM6IGdyb3Vwc1xuICB9O1xufVxuXG5mdW5jdGlvbiBzaW1wbGUocmVnZXgpIHtcbiAgcmV0dXJuIHtcbiAgICByZWdleDogcmVnZXgsXG4gICAgZGVzZXI6IGZ1bmN0aW9uIGRlc2VyKF9yZWY0KSB7XG4gICAgICB2YXIgcyA9IF9yZWY0WzBdO1xuICAgICAgcmV0dXJuIHM7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBlc2NhcGVUb2tlbih2YWx1ZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbiAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL1tcXC1cXFtcXF17fSgpKis/LixcXFxcXFxeJHwjXFxzXS9nLCBcIlxcXFwkJlwiKTtcbn1cblxuZnVuY3Rpb24gdW5pdEZvclRva2VuKHRva2VuLCBsb2MpIHtcbiAgdmFyIG9uZSA9IGRpZ2l0UmVnZXgobG9jKSxcbiAgICAgIHR3byA9IGRpZ2l0UmVnZXgobG9jLCBcInsyfVwiKSxcbiAgICAgIHRocmVlID0gZGlnaXRSZWdleChsb2MsIFwiezN9XCIpLFxuICAgICAgZm91ciA9IGRpZ2l0UmVnZXgobG9jLCBcIns0fVwiKSxcbiAgICAgIHNpeCA9IGRpZ2l0UmVnZXgobG9jLCBcIns2fVwiKSxcbiAgICAgIG9uZU9yVHdvID0gZGlnaXRSZWdleChsb2MsIFwiezEsMn1cIiksXG4gICAgICBvbmVUb1RocmVlID0gZGlnaXRSZWdleChsb2MsIFwiezEsM31cIiksXG4gICAgICBvbmVUb1NpeCA9IGRpZ2l0UmVnZXgobG9jLCBcInsxLDZ9XCIpLFxuICAgICAgb25lVG9OaW5lID0gZGlnaXRSZWdleChsb2MsIFwiezEsOX1cIiksXG4gICAgICB0d29Ub0ZvdXIgPSBkaWdpdFJlZ2V4KGxvYywgXCJ7Miw0fVwiKSxcbiAgICAgIGZvdXJUb1NpeCA9IGRpZ2l0UmVnZXgobG9jLCBcIns0LDZ9XCIpLFxuICAgICAgbGl0ZXJhbCA9IGZ1bmN0aW9uIGxpdGVyYWwodCkge1xuICAgIHJldHVybiB7XG4gICAgICByZWdleDogUmVnRXhwKGVzY2FwZVRva2VuKHQudmFsKSksXG4gICAgICBkZXNlcjogZnVuY3Rpb24gZGVzZXIoX3JlZjUpIHtcbiAgICAgICAgdmFyIHMgPSBfcmVmNVswXTtcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgICB9LFxuICAgICAgbGl0ZXJhbDogdHJ1ZVxuICAgIH07XG4gIH0sXG4gICAgICB1bml0YXRlID0gZnVuY3Rpb24gdW5pdGF0ZSh0KSB7XG4gICAgaWYgKHRva2VuLmxpdGVyYWwpIHtcbiAgICAgIHJldHVybiBsaXRlcmFsKHQpO1xuICAgIH1cblxuICAgIHN3aXRjaCAodC52YWwpIHtcbiAgICAgIC8vIGVyYVxuICAgICAgY2FzZSBcIkdcIjpcbiAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5lcmFzKFwic2hvcnRcIiwgZmFsc2UpLCAwKTtcblxuICAgICAgY2FzZSBcIkdHXCI6XG4gICAgICAgIHJldHVybiBvbmVPZihsb2MuZXJhcyhcImxvbmdcIiwgZmFsc2UpLCAwKTtcbiAgICAgIC8vIHllYXJzXG5cbiAgICAgIGNhc2UgXCJ5XCI6XG4gICAgICAgIHJldHVybiBpbnRVbml0KG9uZVRvU2l4KTtcblxuICAgICAgY2FzZSBcInl5XCI6XG4gICAgICAgIHJldHVybiBpbnRVbml0KHR3b1RvRm91ciwgdW50cnVuY2F0ZVllYXIpO1xuXG4gICAgICBjYXNlIFwieXl5eVwiOlxuICAgICAgICByZXR1cm4gaW50VW5pdChmb3VyKTtcblxuICAgICAgY2FzZSBcInl5eXl5XCI6XG4gICAgICAgIHJldHVybiBpbnRVbml0KGZvdXJUb1NpeCk7XG5cbiAgICAgIGNhc2UgXCJ5eXl5eXlcIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQoc2l4KTtcbiAgICAgIC8vIG1vbnRoc1xuXG4gICAgICBjYXNlIFwiTVwiOlxuICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG5cbiAgICAgIGNhc2UgXCJNTVwiOlxuICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xuXG4gICAgICBjYXNlIFwiTU1NXCI6XG4gICAgICAgIHJldHVybiBvbmVPZihsb2MubW9udGhzKFwic2hvcnRcIiwgdHJ1ZSwgZmFsc2UpLCAxKTtcblxuICAgICAgY2FzZSBcIk1NTU1cIjpcbiAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5tb250aHMoXCJsb25nXCIsIHRydWUsIGZhbHNlKSwgMSk7XG5cbiAgICAgIGNhc2UgXCJMXCI6XG4gICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcblxuICAgICAgY2FzZSBcIkxMXCI6XG4gICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG5cbiAgICAgIGNhc2UgXCJMTExcIjpcbiAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5tb250aHMoXCJzaG9ydFwiLCBmYWxzZSwgZmFsc2UpLCAxKTtcblxuICAgICAgY2FzZSBcIkxMTExcIjpcbiAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5tb250aHMoXCJsb25nXCIsIGZhbHNlLCBmYWxzZSksIDEpO1xuICAgICAgLy8gZGF0ZXNcblxuICAgICAgY2FzZSBcImRcIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuXG4gICAgICBjYXNlIFwiZGRcIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgIC8vIG9yZGluYWxzXG5cbiAgICAgIGNhc2UgXCJvXCI6XG4gICAgICAgIHJldHVybiBpbnRVbml0KG9uZVRvVGhyZWUpO1xuXG4gICAgICBjYXNlIFwib29vXCI6XG4gICAgICAgIHJldHVybiBpbnRVbml0KHRocmVlKTtcbiAgICAgIC8vIHRpbWVcblxuICAgICAgY2FzZSBcIkhIXCI6XG4gICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG5cbiAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcblxuICAgICAgY2FzZSBcImhoXCI6XG4gICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG5cbiAgICAgIGNhc2UgXCJoXCI6XG4gICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcblxuICAgICAgY2FzZSBcIm1tXCI6XG4gICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG5cbiAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcblxuICAgICAgY2FzZSBcInFcIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuXG4gICAgICBjYXNlIFwicXFcIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcblxuICAgICAgY2FzZSBcInNcIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuXG4gICAgICBjYXNlIFwic3NcIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcblxuICAgICAgY2FzZSBcIlNcIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQob25lVG9UaHJlZSk7XG5cbiAgICAgIGNhc2UgXCJTU1NcIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQodGhyZWUpO1xuXG4gICAgICBjYXNlIFwidVwiOlxuICAgICAgICByZXR1cm4gc2ltcGxlKG9uZVRvTmluZSk7XG4gICAgICAvLyBtZXJpZGllbVxuXG4gICAgICBjYXNlIFwiYVwiOlxuICAgICAgICByZXR1cm4gb25lT2YobG9jLm1lcmlkaWVtcygpLCAwKTtcbiAgICAgIC8vIHdlZWtZZWFyIChrKVxuXG4gICAgICBjYXNlIFwia2tra1wiOlxuICAgICAgICByZXR1cm4gaW50VW5pdChmb3VyKTtcblxuICAgICAgY2FzZSBcImtrXCI6XG4gICAgICAgIHJldHVybiBpbnRVbml0KHR3b1RvRm91ciwgdW50cnVuY2F0ZVllYXIpO1xuICAgICAgLy8gd2Vla051bWJlciAoVylcblxuICAgICAgY2FzZSBcIldcIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuXG4gICAgICBjYXNlIFwiV1dcIjpcbiAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgIC8vIHdlZWtkYXlzXG5cbiAgICAgIGNhc2UgXCJFXCI6XG4gICAgICBjYXNlIFwiY1wiOlxuICAgICAgICByZXR1cm4gaW50VW5pdChvbmUpO1xuXG4gICAgICBjYXNlIFwiRUVFXCI6XG4gICAgICAgIHJldHVybiBvbmVPZihsb2Mud2Vla2RheXMoXCJzaG9ydFwiLCBmYWxzZSwgZmFsc2UpLCAxKTtcblxuICAgICAgY2FzZSBcIkVFRUVcIjpcbiAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy53ZWVrZGF5cyhcImxvbmdcIiwgZmFsc2UsIGZhbHNlKSwgMSk7XG5cbiAgICAgIGNhc2UgXCJjY2NcIjpcbiAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy53ZWVrZGF5cyhcInNob3J0XCIsIHRydWUsIGZhbHNlKSwgMSk7XG5cbiAgICAgIGNhc2UgXCJjY2NjXCI6XG4gICAgICAgIHJldHVybiBvbmVPZihsb2Mud2Vla2RheXMoXCJsb25nXCIsIHRydWUsIGZhbHNlKSwgMSk7XG4gICAgICAvLyBvZmZzZXQvem9uZVxuXG4gICAgICBjYXNlIFwiWlwiOlxuICAgICAgY2FzZSBcIlpaXCI6XG4gICAgICAgIHJldHVybiBvZmZzZXQobmV3IFJlZ0V4cChcIihbKy1dXCIgKyBvbmVPclR3by5zb3VyY2UgKyBcIikoPzo6KFwiICsgdHdvLnNvdXJjZSArIFwiKSk/XCIpLCAyKTtcblxuICAgICAgY2FzZSBcIlpaWlwiOlxuICAgICAgICByZXR1cm4gb2Zmc2V0KG5ldyBSZWdFeHAoXCIoWystXVwiICsgb25lT3JUd28uc291cmNlICsgXCIpKFwiICsgdHdvLnNvdXJjZSArIFwiKT9cIiksIDIpO1xuICAgICAgLy8gd2UgZG9uJ3Qgc3VwcG9ydCBaWlpaIChQU1QpIG9yIFpaWlpaIChQYWNpZmljIFN0YW5kYXJkIFRpbWUpIGluIHBhcnNpbmdcbiAgICAgIC8vIGJlY2F1c2Ugd2UgZG9uJ3QgaGF2ZSBhbnkgd2F5IHRvIGZpZ3VyZSBvdXQgd2hhdCB0aGV5IGFyZVxuXG4gICAgICBjYXNlIFwielwiOlxuICAgICAgICByZXR1cm4gc2ltcGxlKC9bYS16XystL117MSwyNTZ9Py9pKTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxpdGVyYWwodCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciB1bml0ID0gdW5pdGF0ZSh0b2tlbikgfHwge1xuICAgIGludmFsaWRSZWFzb246IE1JU1NJTkdfRlRQXG4gIH07XG4gIHVuaXQudG9rZW4gPSB0b2tlbjtcbiAgcmV0dXJuIHVuaXQ7XG59XG5cbnZhciBwYXJ0VHlwZVN0eWxlVG9Ub2tlblZhbCA9IHtcbiAgeWVhcjoge1xuICAgIFwiMi1kaWdpdFwiOiBcInl5XCIsXG4gICAgbnVtZXJpYzogXCJ5eXl5eVwiXG4gIH0sXG4gIG1vbnRoOiB7XG4gICAgbnVtZXJpYzogXCJNXCIsXG4gICAgXCIyLWRpZ2l0XCI6IFwiTU1cIixcbiAgICBzaG9ydDogXCJNTU1cIixcbiAgICBsb25nOiBcIk1NTU1cIlxuICB9LFxuICBkYXk6IHtcbiAgICBudW1lcmljOiBcImRcIixcbiAgICBcIjItZGlnaXRcIjogXCJkZFwiXG4gIH0sXG4gIHdlZWtkYXk6IHtcbiAgICBzaG9ydDogXCJFRUVcIixcbiAgICBsb25nOiBcIkVFRUVcIlxuICB9LFxuICBkYXlwZXJpb2Q6IFwiYVwiLFxuICBkYXlQZXJpb2Q6IFwiYVwiLFxuICBob3VyOiB7XG4gICAgbnVtZXJpYzogXCJoXCIsXG4gICAgXCIyLWRpZ2l0XCI6IFwiaGhcIlxuICB9LFxuICBtaW51dGU6IHtcbiAgICBudW1lcmljOiBcIm1cIixcbiAgICBcIjItZGlnaXRcIjogXCJtbVwiXG4gIH0sXG4gIHNlY29uZDoge1xuICAgIG51bWVyaWM6IFwic1wiLFxuICAgIFwiMi1kaWdpdFwiOiBcInNzXCJcbiAgfVxufTtcblxuZnVuY3Rpb24gdG9rZW5Gb3JQYXJ0KHBhcnQsIGxvY2FsZSwgZm9ybWF0T3B0cykge1xuICB2YXIgdHlwZSA9IHBhcnQudHlwZSxcbiAgICAgIHZhbHVlID0gcGFydC52YWx1ZTtcblxuICBpZiAodHlwZSA9PT0gXCJsaXRlcmFsXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGl0ZXJhbDogdHJ1ZSxcbiAgICAgIHZhbDogdmFsdWVcbiAgICB9O1xuICB9XG5cbiAgdmFyIHN0eWxlID0gZm9ybWF0T3B0c1t0eXBlXTtcbiAgdmFyIHZhbCA9IHBhcnRUeXBlU3R5bGVUb1Rva2VuVmFsW3R5cGVdO1xuXG4gIGlmICh0eXBlb2YgdmFsID09PSBcIm9iamVjdFwiKSB7XG4gICAgdmFsID0gdmFsW3N0eWxlXTtcbiAgfVxuXG4gIGlmICh2YWwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGl0ZXJhbDogZmFsc2UsXG4gICAgICB2YWw6IHZhbFxuICAgIH07XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBidWlsZFJlZ2V4KHVuaXRzKSB7XG4gIHZhciByZSA9IHVuaXRzLm1hcChmdW5jdGlvbiAodSkge1xuICAgIHJldHVybiB1LnJlZ2V4O1xuICB9KS5yZWR1Y2UoZnVuY3Rpb24gKGYsIHIpIHtcbiAgICByZXR1cm4gZiArIFwiKFwiICsgci5zb3VyY2UgKyBcIilcIjtcbiAgfSwgXCJcIik7XG4gIHJldHVybiBbXCJeXCIgKyByZSArIFwiJFwiLCB1bml0c107XG59XG5cbmZ1bmN0aW9uIG1hdGNoKGlucHV0LCByZWdleCwgaGFuZGxlcnMpIHtcbiAgdmFyIG1hdGNoZXMgPSBpbnB1dC5tYXRjaChyZWdleCk7XG5cbiAgaWYgKG1hdGNoZXMpIHtcbiAgICB2YXIgYWxsID0ge307XG4gICAgdmFyIG1hdGNoSW5kZXggPSAxO1xuXG4gICAgZm9yICh2YXIgaSBpbiBoYW5kbGVycykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5KGhhbmRsZXJzLCBpKSkge1xuICAgICAgICB2YXIgaCA9IGhhbmRsZXJzW2ldLFxuICAgICAgICAgICAgZ3JvdXBzID0gaC5ncm91cHMgPyBoLmdyb3VwcyArIDEgOiAxO1xuXG4gICAgICAgIGlmICghaC5saXRlcmFsICYmIGgudG9rZW4pIHtcbiAgICAgICAgICBhbGxbaC50b2tlbi52YWxbMF1dID0gaC5kZXNlcihtYXRjaGVzLnNsaWNlKG1hdGNoSW5kZXgsIG1hdGNoSW5kZXggKyBncm91cHMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdGNoSW5kZXggKz0gZ3JvdXBzO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBbbWF0Y2hlcywgYWxsXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW21hdGNoZXMsIHt9XTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkYXRlVGltZUZyb21NYXRjaGVzKG1hdGNoZXMpIHtcbiAgdmFyIHRvRmllbGQgPSBmdW5jdGlvbiB0b0ZpZWxkKHRva2VuKSB7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcIlNcIjpcbiAgICAgICAgcmV0dXJuIFwibWlsbGlzZWNvbmRcIjtcblxuICAgICAgY2FzZSBcInNcIjpcbiAgICAgICAgcmV0dXJuIFwic2Vjb25kXCI7XG5cbiAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgIHJldHVybiBcIm1pbnV0ZVwiO1xuXG4gICAgICBjYXNlIFwiaFwiOlxuICAgICAgY2FzZSBcIkhcIjpcbiAgICAgICAgcmV0dXJuIFwiaG91clwiO1xuXG4gICAgICBjYXNlIFwiZFwiOlxuICAgICAgICByZXR1cm4gXCJkYXlcIjtcblxuICAgICAgY2FzZSBcIm9cIjpcbiAgICAgICAgcmV0dXJuIFwib3JkaW5hbFwiO1xuXG4gICAgICBjYXNlIFwiTFwiOlxuICAgICAgY2FzZSBcIk1cIjpcbiAgICAgICAgcmV0dXJuIFwibW9udGhcIjtcblxuICAgICAgY2FzZSBcInlcIjpcbiAgICAgICAgcmV0dXJuIFwieWVhclwiO1xuXG4gICAgICBjYXNlIFwiRVwiOlxuICAgICAgY2FzZSBcImNcIjpcbiAgICAgICAgcmV0dXJuIFwid2Vla2RheVwiO1xuXG4gICAgICBjYXNlIFwiV1wiOlxuICAgICAgICByZXR1cm4gXCJ3ZWVrTnVtYmVyXCI7XG5cbiAgICAgIGNhc2UgXCJrXCI6XG4gICAgICAgIHJldHVybiBcIndlZWtZZWFyXCI7XG5cbiAgICAgIGNhc2UgXCJxXCI6XG4gICAgICAgIHJldHVybiBcInF1YXJ0ZXJcIjtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuXG4gIHZhciB6b25lO1xuXG4gIGlmICghaXNVbmRlZmluZWQobWF0Y2hlcy5aKSkge1xuICAgIHpvbmUgPSBuZXcgRml4ZWRPZmZzZXRab25lKG1hdGNoZXMuWik7XG4gIH0gZWxzZSBpZiAoIWlzVW5kZWZpbmVkKG1hdGNoZXMueikpIHtcbiAgICB6b25lID0gSUFOQVpvbmUuY3JlYXRlKG1hdGNoZXMueik7XG4gIH0gZWxzZSB7XG4gICAgem9uZSA9IG51bGw7XG4gIH1cblxuICBpZiAoIWlzVW5kZWZpbmVkKG1hdGNoZXMucSkpIHtcbiAgICBtYXRjaGVzLk0gPSAobWF0Y2hlcy5xIC0gMSkgKiAzICsgMTtcbiAgfVxuXG4gIGlmICghaXNVbmRlZmluZWQobWF0Y2hlcy5oKSkge1xuICAgIGlmIChtYXRjaGVzLmggPCAxMiAmJiBtYXRjaGVzLmEgPT09IDEpIHtcbiAgICAgIG1hdGNoZXMuaCArPSAxMjtcbiAgICB9IGVsc2UgaWYgKG1hdGNoZXMuaCA9PT0gMTIgJiYgbWF0Y2hlcy5hID09PSAwKSB7XG4gICAgICBtYXRjaGVzLmggPSAwO1xuICAgIH1cbiAgfVxuXG4gIGlmIChtYXRjaGVzLkcgPT09IDAgJiYgbWF0Y2hlcy55KSB7XG4gICAgbWF0Y2hlcy55ID0gLW1hdGNoZXMueTtcbiAgfVxuXG4gIGlmICghaXNVbmRlZmluZWQobWF0Y2hlcy51KSkge1xuICAgIG1hdGNoZXMuUyA9IHBhcnNlTWlsbGlzKG1hdGNoZXMudSk7XG4gIH1cblxuICB2YXIgdmFscyA9IE9iamVjdC5rZXlzKG1hdGNoZXMpLnJlZHVjZShmdW5jdGlvbiAociwgaykge1xuICAgIHZhciBmID0gdG9GaWVsZChrKTtcblxuICAgIGlmIChmKSB7XG4gICAgICByW2ZdID0gbWF0Y2hlc1trXTtcbiAgICB9XG5cbiAgICByZXR1cm4gcjtcbiAgfSwge30pO1xuICByZXR1cm4gW3ZhbHMsIHpvbmVdO1xufVxuXG52YXIgZHVtbXlEYXRlVGltZUNhY2hlID0gbnVsbDtcblxuZnVuY3Rpb24gZ2V0RHVtbXlEYXRlVGltZSgpIHtcbiAgaWYgKCFkdW1teURhdGVUaW1lQ2FjaGUpIHtcbiAgICBkdW1teURhdGVUaW1lQ2FjaGUgPSBEYXRlVGltZS5mcm9tTWlsbGlzKDE1NTU1NTU1NTU1NTUpO1xuICB9XG5cbiAgcmV0dXJuIGR1bW15RGF0ZVRpbWVDYWNoZTtcbn1cblxuZnVuY3Rpb24gbWF5YmVFeHBhbmRNYWNyb1Rva2VuKHRva2VuLCBsb2NhbGUpIHtcbiAgaWYgKHRva2VuLmxpdGVyYWwpIHtcbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICB2YXIgZm9ybWF0T3B0cyA9IEZvcm1hdHRlci5tYWNyb1Rva2VuVG9Gb3JtYXRPcHRzKHRva2VuLnZhbCk7XG5cbiAgaWYgKCFmb3JtYXRPcHRzKSB7XG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgdmFyIGZvcm1hdHRlciA9IEZvcm1hdHRlci5jcmVhdGUobG9jYWxlLCBmb3JtYXRPcHRzKTtcbiAgdmFyIHBhcnRzID0gZm9ybWF0dGVyLmZvcm1hdERhdGVUaW1lUGFydHMoZ2V0RHVtbXlEYXRlVGltZSgpKTtcbiAgdmFyIHRva2VucyA9IHBhcnRzLm1hcChmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiB0b2tlbkZvclBhcnQocCwgbG9jYWxlLCBmb3JtYXRPcHRzKTtcbiAgfSk7XG5cbiAgaWYgKHRva2Vucy5pbmNsdWRlcyh1bmRlZmluZWQpKSB7XG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgcmV0dXJuIHRva2Vucztcbn1cblxuZnVuY3Rpb24gZXhwYW5kTWFjcm9Ub2tlbnModG9rZW5zLCBsb2NhbGUpIHtcbiAgdmFyIF9BcnJheSRwcm90b3R5cGU7XG5cbiAgcmV0dXJuIChfQXJyYXkkcHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlKS5jb25jYXQuYXBwbHkoX0FycmF5JHByb3RvdHlwZSwgdG9rZW5zLm1hcChmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiBtYXliZUV4cGFuZE1hY3JvVG9rZW4odCwgbG9jYWxlKTtcbiAgfSkpO1xufVxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cblxuZnVuY3Rpb24gZXhwbGFpbkZyb21Ub2tlbnMobG9jYWxlLCBpbnB1dCwgZm9ybWF0KSB7XG4gIHZhciB0b2tlbnMgPSBleHBhbmRNYWNyb1Rva2VucyhGb3JtYXR0ZXIucGFyc2VGb3JtYXQoZm9ybWF0KSwgbG9jYWxlKSxcbiAgICAgIHVuaXRzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiB1bml0Rm9yVG9rZW4odCwgbG9jYWxlKTtcbiAgfSksXG4gICAgICBkaXNxdWFsaWZ5aW5nVW5pdCA9IHVuaXRzLmZpbmQoZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4gdC5pbnZhbGlkUmVhc29uO1xuICB9KTtcblxuICBpZiAoZGlzcXVhbGlmeWluZ1VuaXQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW5wdXQ6IGlucHV0LFxuICAgICAgdG9rZW5zOiB0b2tlbnMsXG4gICAgICBpbnZhbGlkUmVhc29uOiBkaXNxdWFsaWZ5aW5nVW5pdC5pbnZhbGlkUmVhc29uXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgX2J1aWxkUmVnZXggPSBidWlsZFJlZ2V4KHVuaXRzKSxcbiAgICAgICAgcmVnZXhTdHJpbmcgPSBfYnVpbGRSZWdleFswXSxcbiAgICAgICAgaGFuZGxlcnMgPSBfYnVpbGRSZWdleFsxXSxcbiAgICAgICAgcmVnZXggPSBSZWdFeHAocmVnZXhTdHJpbmcsIFwiaVwiKSxcbiAgICAgICAgX21hdGNoID0gbWF0Y2goaW5wdXQsIHJlZ2V4LCBoYW5kbGVycyksXG4gICAgICAgIHJhd01hdGNoZXMgPSBfbWF0Y2hbMF0sXG4gICAgICAgIG1hdGNoZXMgPSBfbWF0Y2hbMV0sXG4gICAgICAgIF9yZWY2ID0gbWF0Y2hlcyA/IGRhdGVUaW1lRnJvbU1hdGNoZXMobWF0Y2hlcykgOiBbbnVsbCwgbnVsbF0sXG4gICAgICAgIHJlc3VsdCA9IF9yZWY2WzBdLFxuICAgICAgICB6b25lID0gX3JlZjZbMV07XG5cbiAgICBpZiAoaGFzT3duUHJvcGVydHkobWF0Y2hlcywgXCJhXCIpICYmIGhhc093blByb3BlcnR5KG1hdGNoZXMsIFwiSFwiKSkge1xuICAgICAgdGhyb3cgbmV3IENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yKFwiQ2FuJ3QgaW5jbHVkZSBtZXJpZGllbSB3aGVuIHNwZWNpZnlpbmcgMjQtaG91ciBmb3JtYXRcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlucHV0OiBpbnB1dCxcbiAgICAgIHRva2VuczogdG9rZW5zLFxuICAgICAgcmVnZXg6IHJlZ2V4LFxuICAgICAgcmF3TWF0Y2hlczogcmF3TWF0Y2hlcyxcbiAgICAgIG1hdGNoZXM6IG1hdGNoZXMsXG4gICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgIHpvbmU6IHpvbmVcbiAgICB9O1xuICB9XG59XG5mdW5jdGlvbiBwYXJzZUZyb21Ub2tlbnMobG9jYWxlLCBpbnB1dCwgZm9ybWF0KSB7XG4gIHZhciBfZXhwbGFpbkZyb21Ub2tlbnMgPSBleHBsYWluRnJvbVRva2Vucyhsb2NhbGUsIGlucHV0LCBmb3JtYXQpLFxuICAgICAgcmVzdWx0ID0gX2V4cGxhaW5Gcm9tVG9rZW5zLnJlc3VsdCxcbiAgICAgIHpvbmUgPSBfZXhwbGFpbkZyb21Ub2tlbnMuem9uZSxcbiAgICAgIGludmFsaWRSZWFzb24gPSBfZXhwbGFpbkZyb21Ub2tlbnMuaW52YWxpZFJlYXNvbjtcblxuICByZXR1cm4gW3Jlc3VsdCwgem9uZSwgaW52YWxpZFJlYXNvbl07XG59XG5cbnZhciBub25MZWFwTGFkZGVyID0gWzAsIDMxLCA1OSwgOTAsIDEyMCwgMTUxLCAxODEsIDIxMiwgMjQzLCAyNzMsIDMwNCwgMzM0XSxcbiAgICBsZWFwTGFkZGVyID0gWzAsIDMxLCA2MCwgOTEsIDEyMSwgMTUyLCAxODIsIDIxMywgMjQ0LCAyNzQsIDMwNSwgMzM1XTtcblxuZnVuY3Rpb24gdW5pdE91dE9mUmFuZ2UodW5pdCwgdmFsdWUpIHtcbiAgcmV0dXJuIG5ldyBJbnZhbGlkKFwidW5pdCBvdXQgb2YgcmFuZ2VcIiwgXCJ5b3Ugc3BlY2lmaWVkIFwiICsgdmFsdWUgKyBcIiAob2YgdHlwZSBcIiArIHR5cGVvZiB2YWx1ZSArIFwiKSBhcyBhIFwiICsgdW5pdCArIFwiLCB3aGljaCBpcyBpbnZhbGlkXCIpO1xufVxuXG5mdW5jdGlvbiBkYXlPZldlZWsoeWVhciwgbW9udGgsIGRheSkge1xuICB2YXIganMgPSBuZXcgRGF0ZShEYXRlLlVUQyh5ZWFyLCBtb250aCAtIDEsIGRheSkpLmdldFVUQ0RheSgpO1xuICByZXR1cm4ganMgPT09IDAgPyA3IDoganM7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVPcmRpbmFsKHllYXIsIG1vbnRoLCBkYXkpIHtcbiAgcmV0dXJuIGRheSArIChpc0xlYXBZZWFyKHllYXIpID8gbGVhcExhZGRlciA6IG5vbkxlYXBMYWRkZXIpW21vbnRoIC0gMV07XG59XG5cbmZ1bmN0aW9uIHVuY29tcHV0ZU9yZGluYWwoeWVhciwgb3JkaW5hbCkge1xuICB2YXIgdGFibGUgPSBpc0xlYXBZZWFyKHllYXIpID8gbGVhcExhZGRlciA6IG5vbkxlYXBMYWRkZXIsXG4gICAgICBtb250aDAgPSB0YWJsZS5maW5kSW5kZXgoZnVuY3Rpb24gKGkpIHtcbiAgICByZXR1cm4gaSA8IG9yZGluYWw7XG4gIH0pLFxuICAgICAgZGF5ID0gb3JkaW5hbCAtIHRhYmxlW21vbnRoMF07XG4gIHJldHVybiB7XG4gICAgbW9udGg6IG1vbnRoMCArIDEsXG4gICAgZGF5OiBkYXlcbiAgfTtcbn1cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5cbmZ1bmN0aW9uIGdyZWdvcmlhblRvV2VlayhncmVnT2JqKSB7XG4gIHZhciB5ZWFyID0gZ3JlZ09iai55ZWFyLFxuICAgICAgbW9udGggPSBncmVnT2JqLm1vbnRoLFxuICAgICAgZGF5ID0gZ3JlZ09iai5kYXksXG4gICAgICBvcmRpbmFsID0gY29tcHV0ZU9yZGluYWwoeWVhciwgbW9udGgsIGRheSksXG4gICAgICB3ZWVrZGF5ID0gZGF5T2ZXZWVrKHllYXIsIG1vbnRoLCBkYXkpO1xuICB2YXIgd2Vla051bWJlciA9IE1hdGguZmxvb3IoKG9yZGluYWwgLSB3ZWVrZGF5ICsgMTApIC8gNyksXG4gICAgICB3ZWVrWWVhcjtcblxuICBpZiAod2Vla051bWJlciA8IDEpIHtcbiAgICB3ZWVrWWVhciA9IHllYXIgLSAxO1xuICAgIHdlZWtOdW1iZXIgPSB3ZWVrc0luV2Vla1llYXIod2Vla1llYXIpO1xuICB9IGVsc2UgaWYgKHdlZWtOdW1iZXIgPiB3ZWVrc0luV2Vla1llYXIoeWVhcikpIHtcbiAgICB3ZWVrWWVhciA9IHllYXIgKyAxO1xuICAgIHdlZWtOdW1iZXIgPSAxO1xuICB9IGVsc2Uge1xuICAgIHdlZWtZZWFyID0geWVhcjtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHtcbiAgICB3ZWVrWWVhcjogd2Vla1llYXIsXG4gICAgd2Vla051bWJlcjogd2Vla051bWJlcixcbiAgICB3ZWVrZGF5OiB3ZWVrZGF5XG4gIH0sIHRpbWVPYmplY3QoZ3JlZ09iaikpO1xufVxuZnVuY3Rpb24gd2Vla1RvR3JlZ29yaWFuKHdlZWtEYXRhKSB7XG4gIHZhciB3ZWVrWWVhciA9IHdlZWtEYXRhLndlZWtZZWFyLFxuICAgICAgd2Vla051bWJlciA9IHdlZWtEYXRhLndlZWtOdW1iZXIsXG4gICAgICB3ZWVrZGF5ID0gd2Vla0RhdGEud2Vla2RheSxcbiAgICAgIHdlZWtkYXlPZkphbjQgPSBkYXlPZldlZWsod2Vla1llYXIsIDEsIDQpLFxuICAgICAgeWVhckluRGF5cyA9IGRheXNJblllYXIod2Vla1llYXIpO1xuICB2YXIgb3JkaW5hbCA9IHdlZWtOdW1iZXIgKiA3ICsgd2Vla2RheSAtIHdlZWtkYXlPZkphbjQgLSAzLFxuICAgICAgeWVhcjtcblxuICBpZiAob3JkaW5hbCA8IDEpIHtcbiAgICB5ZWFyID0gd2Vla1llYXIgLSAxO1xuICAgIG9yZGluYWwgKz0gZGF5c0luWWVhcih5ZWFyKTtcbiAgfSBlbHNlIGlmIChvcmRpbmFsID4geWVhckluRGF5cykge1xuICAgIHllYXIgPSB3ZWVrWWVhciArIDE7XG4gICAgb3JkaW5hbCAtPSBkYXlzSW5ZZWFyKHdlZWtZZWFyKTtcbiAgfSBlbHNlIHtcbiAgICB5ZWFyID0gd2Vla1llYXI7XG4gIH1cblxuICB2YXIgX3VuY29tcHV0ZU9yZGluYWwgPSB1bmNvbXB1dGVPcmRpbmFsKHllYXIsIG9yZGluYWwpLFxuICAgICAgbW9udGggPSBfdW5jb21wdXRlT3JkaW5hbC5tb250aCxcbiAgICAgIGRheSA9IF91bmNvbXB1dGVPcmRpbmFsLmRheTtcblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7XG4gICAgeWVhcjogeWVhcixcbiAgICBtb250aDogbW9udGgsXG4gICAgZGF5OiBkYXlcbiAgfSwgdGltZU9iamVjdCh3ZWVrRGF0YSkpO1xufVxuZnVuY3Rpb24gZ3JlZ29yaWFuVG9PcmRpbmFsKGdyZWdEYXRhKSB7XG4gIHZhciB5ZWFyID0gZ3JlZ0RhdGEueWVhcixcbiAgICAgIG1vbnRoID0gZ3JlZ0RhdGEubW9udGgsXG4gICAgICBkYXkgPSBncmVnRGF0YS5kYXksXG4gICAgICBvcmRpbmFsID0gY29tcHV0ZU9yZGluYWwoeWVhciwgbW9udGgsIGRheSk7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHtcbiAgICB5ZWFyOiB5ZWFyLFxuICAgIG9yZGluYWw6IG9yZGluYWxcbiAgfSwgdGltZU9iamVjdChncmVnRGF0YSkpO1xufVxuZnVuY3Rpb24gb3JkaW5hbFRvR3JlZ29yaWFuKG9yZGluYWxEYXRhKSB7XG4gIHZhciB5ZWFyID0gb3JkaW5hbERhdGEueWVhcixcbiAgICAgIG9yZGluYWwgPSBvcmRpbmFsRGF0YS5vcmRpbmFsLFxuICAgICAgX3VuY29tcHV0ZU9yZGluYWwyID0gdW5jb21wdXRlT3JkaW5hbCh5ZWFyLCBvcmRpbmFsKSxcbiAgICAgIG1vbnRoID0gX3VuY29tcHV0ZU9yZGluYWwyLm1vbnRoLFxuICAgICAgZGF5ID0gX3VuY29tcHV0ZU9yZGluYWwyLmRheTtcblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7XG4gICAgeWVhcjogeWVhcixcbiAgICBtb250aDogbW9udGgsXG4gICAgZGF5OiBkYXlcbiAgfSwgdGltZU9iamVjdChvcmRpbmFsRGF0YSkpO1xufVxuZnVuY3Rpb24gaGFzSW52YWxpZFdlZWtEYXRhKG9iaikge1xuICB2YXIgdmFsaWRZZWFyID0gaXNJbnRlZ2VyKG9iai53ZWVrWWVhciksXG4gICAgICB2YWxpZFdlZWsgPSBpbnRlZ2VyQmV0d2VlbihvYmoud2Vla051bWJlciwgMSwgd2Vla3NJbldlZWtZZWFyKG9iai53ZWVrWWVhcikpLFxuICAgICAgdmFsaWRXZWVrZGF5ID0gaW50ZWdlckJldHdlZW4ob2JqLndlZWtkYXksIDEsIDcpO1xuXG4gIGlmICghdmFsaWRZZWFyKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwid2Vla1llYXJcIiwgb2JqLndlZWtZZWFyKTtcbiAgfSBlbHNlIGlmICghdmFsaWRXZWVrKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwid2Vla1wiLCBvYmoud2Vlayk7XG4gIH0gZWxzZSBpZiAoIXZhbGlkV2Vla2RheSkge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcIndlZWtkYXlcIiwgb2JqLndlZWtkYXkpO1xuICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaGFzSW52YWxpZE9yZGluYWxEYXRhKG9iaikge1xuICB2YXIgdmFsaWRZZWFyID0gaXNJbnRlZ2VyKG9iai55ZWFyKSxcbiAgICAgIHZhbGlkT3JkaW5hbCA9IGludGVnZXJCZXR3ZWVuKG9iai5vcmRpbmFsLCAxLCBkYXlzSW5ZZWFyKG9iai55ZWFyKSk7XG5cbiAgaWYgKCF2YWxpZFllYXIpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJ5ZWFyXCIsIG9iai55ZWFyKTtcbiAgfSBlbHNlIGlmICghdmFsaWRPcmRpbmFsKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwib3JkaW5hbFwiLCBvYmoub3JkaW5hbCk7XG4gIH0gZWxzZSByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBoYXNJbnZhbGlkR3JlZ29yaWFuRGF0YShvYmopIHtcbiAgdmFyIHZhbGlkWWVhciA9IGlzSW50ZWdlcihvYmoueWVhciksXG4gICAgICB2YWxpZE1vbnRoID0gaW50ZWdlckJldHdlZW4ob2JqLm1vbnRoLCAxLCAxMiksXG4gICAgICB2YWxpZERheSA9IGludGVnZXJCZXR3ZWVuKG9iai5kYXksIDEsIGRheXNJbk1vbnRoKG9iai55ZWFyLCBvYmoubW9udGgpKTtcblxuICBpZiAoIXZhbGlkWWVhcikge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcInllYXJcIiwgb2JqLnllYXIpO1xuICB9IGVsc2UgaWYgKCF2YWxpZE1vbnRoKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwibW9udGhcIiwgb2JqLm1vbnRoKTtcbiAgfSBlbHNlIGlmICghdmFsaWREYXkpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJkYXlcIiwgb2JqLmRheSk7XG4gIH0gZWxzZSByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBoYXNJbnZhbGlkVGltZURhdGEob2JqKSB7XG4gIHZhciBob3VyID0gb2JqLmhvdXIsXG4gICAgICBtaW51dGUgPSBvYmoubWludXRlLFxuICAgICAgc2Vjb25kID0gb2JqLnNlY29uZCxcbiAgICAgIG1pbGxpc2Vjb25kID0gb2JqLm1pbGxpc2Vjb25kO1xuICB2YXIgdmFsaWRIb3VyID0gaW50ZWdlckJldHdlZW4oaG91ciwgMCwgMjMpIHx8IGhvdXIgPT09IDI0ICYmIG1pbnV0ZSA9PT0gMCAmJiBzZWNvbmQgPT09IDAgJiYgbWlsbGlzZWNvbmQgPT09IDAsXG4gICAgICB2YWxpZE1pbnV0ZSA9IGludGVnZXJCZXR3ZWVuKG1pbnV0ZSwgMCwgNTkpLFxuICAgICAgdmFsaWRTZWNvbmQgPSBpbnRlZ2VyQmV0d2VlbihzZWNvbmQsIDAsIDU5KSxcbiAgICAgIHZhbGlkTWlsbGlzZWNvbmQgPSBpbnRlZ2VyQmV0d2VlbihtaWxsaXNlY29uZCwgMCwgOTk5KTtcblxuICBpZiAoIXZhbGlkSG91cikge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcImhvdXJcIiwgaG91cik7XG4gIH0gZWxzZSBpZiAoIXZhbGlkTWludXRlKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwibWludXRlXCIsIG1pbnV0ZSk7XG4gIH0gZWxzZSBpZiAoIXZhbGlkU2Vjb25kKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwic2Vjb25kXCIsIHNlY29uZCk7XG4gIH0gZWxzZSBpZiAoIXZhbGlkTWlsbGlzZWNvbmQpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJtaWxsaXNlY29uZFwiLCBtaWxsaXNlY29uZCk7XG4gIH0gZWxzZSByZXR1cm4gZmFsc2U7XG59XG5cbnZhciBJTlZBTElEJDIgPSBcIkludmFsaWQgRGF0ZVRpbWVcIjtcbnZhciBNQVhfREFURSA9IDguNjRlMTU7XG5cbmZ1bmN0aW9uIHVuc3VwcG9ydGVkWm9uZSh6b25lKSB7XG4gIHJldHVybiBuZXcgSW52YWxpZChcInVuc3VwcG9ydGVkIHpvbmVcIiwgXCJ0aGUgem9uZSBcXFwiXCIgKyB6b25lLm5hbWUgKyBcIlxcXCIgaXMgbm90IHN1cHBvcnRlZFwiKTtcbn0gLy8gd2UgY2FjaGUgd2VlayBkYXRhIG9uIHRoZSBEVCBvYmplY3QgYW5kIHRoaXMgaW50ZXJtZWRpYXRlcyB0aGUgY2FjaGVcblxuXG5mdW5jdGlvbiBwb3NzaWJseUNhY2hlZFdlZWtEYXRhKGR0KSB7XG4gIGlmIChkdC53ZWVrRGF0YSA9PT0gbnVsbCkge1xuICAgIGR0LndlZWtEYXRhID0gZ3JlZ29yaWFuVG9XZWVrKGR0LmMpO1xuICB9XG5cbiAgcmV0dXJuIGR0LndlZWtEYXRhO1xufSAvLyBjbG9uZSByZWFsbHkgbWVhbnMsIFwibWFrZSBhIG5ldyBvYmplY3Qgd2l0aCB0aGVzZSBtb2RpZmljYXRpb25zXCIuIGFsbCBcInNldHRlcnNcIiByZWFsbHkgdXNlIHRoaXNcbi8vIHRvIGNyZWF0ZSBhIG5ldyBvYmplY3Qgd2hpbGUgb25seSBjaGFuZ2luZyBzb21lIG9mIHRoZSBwcm9wZXJ0aWVzXG5cblxuZnVuY3Rpb24gY2xvbmUkMShpbnN0LCBhbHRzKSB7XG4gIHZhciBjdXJyZW50ID0ge1xuICAgIHRzOiBpbnN0LnRzLFxuICAgIHpvbmU6IGluc3Quem9uZSxcbiAgICBjOiBpbnN0LmMsXG4gICAgbzogaW5zdC5vLFxuICAgIGxvYzogaW5zdC5sb2MsXG4gICAgaW52YWxpZDogaW5zdC5pbnZhbGlkXG4gIH07XG4gIHJldHVybiBuZXcgRGF0ZVRpbWUoT2JqZWN0LmFzc2lnbih7fSwgY3VycmVudCwgYWx0cywge1xuICAgIG9sZDogY3VycmVudFxuICB9KSk7XG59IC8vIGZpbmQgdGhlIHJpZ2h0IG9mZnNldCBhIGdpdmVuIGxvY2FsIHRpbWUuIFRoZSBvIGlucHV0IGlzIG91ciBndWVzcywgd2hpY2ggZGV0ZXJtaW5lcyB3aGljaFxuLy8gb2Zmc2V0IHdlJ2xsIHBpY2sgaW4gYW1iaWd1b3VzIGNhc2VzIChlLmcuIHRoZXJlIGFyZSB0d28gMyBBTXMgYi9jIEZhbGxiYWNrIERTVClcblxuXG5mdW5jdGlvbiBmaXhPZmZzZXQobG9jYWxUUywgbywgdHopIHtcbiAgLy8gT3VyIFVUQyB0aW1lIGlzIGp1c3QgYSBndWVzcyBiZWNhdXNlIG91ciBvZmZzZXQgaXMganVzdCBhIGd1ZXNzXG4gIHZhciB1dGNHdWVzcyA9IGxvY2FsVFMgLSBvICogNjAgKiAxMDAwOyAvLyBUZXN0IHdoZXRoZXIgdGhlIHpvbmUgbWF0Y2hlcyB0aGUgb2Zmc2V0IGZvciB0aGlzIHRzXG5cbiAgdmFyIG8yID0gdHoub2Zmc2V0KHV0Y0d1ZXNzKTsgLy8gSWYgc28sIG9mZnNldCBkaWRuJ3QgY2hhbmdlIGFuZCB3ZSdyZSBkb25lXG5cbiAgaWYgKG8gPT09IG8yKSB7XG4gICAgcmV0dXJuIFt1dGNHdWVzcywgb107XG4gIH0gLy8gSWYgbm90LCBjaGFuZ2UgdGhlIHRzIGJ5IHRoZSBkaWZmZXJlbmNlIGluIHRoZSBvZmZzZXRcblxuXG4gIHV0Y0d1ZXNzIC09IChvMiAtIG8pICogNjAgKiAxMDAwOyAvLyBJZiB0aGF0IGdpdmVzIHVzIHRoZSBsb2NhbCB0aW1lIHdlIHdhbnQsIHdlJ3JlIGRvbmVcblxuICB2YXIgbzMgPSB0ei5vZmZzZXQodXRjR3Vlc3MpO1xuXG4gIGlmIChvMiA9PT0gbzMpIHtcbiAgICByZXR1cm4gW3V0Y0d1ZXNzLCBvMl07XG4gIH0gLy8gSWYgaXQncyBkaWZmZXJlbnQsIHdlJ3JlIGluIGEgaG9sZSB0aW1lLiBUaGUgb2Zmc2V0IGhhcyBjaGFuZ2VkLCBidXQgdGhlIHdlIGRvbid0IGFkanVzdCB0aGUgdGltZVxuXG5cbiAgcmV0dXJuIFtsb2NhbFRTIC0gTWF0aC5taW4obzIsIG8zKSAqIDYwICogMTAwMCwgTWF0aC5tYXgobzIsIG8zKV07XG59IC8vIGNvbnZlcnQgYW4gZXBvY2ggdGltZXN0YW1wIGludG8gYSBjYWxlbmRhciBvYmplY3Qgd2l0aCB0aGUgZ2l2ZW4gb2Zmc2V0XG5cblxuZnVuY3Rpb24gdHNUb09iaih0cywgb2Zmc2V0KSB7XG4gIHRzICs9IG9mZnNldCAqIDYwICogMTAwMDtcbiAgdmFyIGQgPSBuZXcgRGF0ZSh0cyk7XG4gIHJldHVybiB7XG4gICAgeWVhcjogZC5nZXRVVENGdWxsWWVhcigpLFxuICAgIG1vbnRoOiBkLmdldFVUQ01vbnRoKCkgKyAxLFxuICAgIGRheTogZC5nZXRVVENEYXRlKCksXG4gICAgaG91cjogZC5nZXRVVENIb3VycygpLFxuICAgIG1pbnV0ZTogZC5nZXRVVENNaW51dGVzKCksXG4gICAgc2Vjb25kOiBkLmdldFVUQ1NlY29uZHMoKSxcbiAgICBtaWxsaXNlY29uZDogZC5nZXRVVENNaWxsaXNlY29uZHMoKVxuICB9O1xufSAvLyBjb252ZXJ0IGEgY2FsZW5kYXIgb2JqZWN0IHRvIGEgZXBvY2ggdGltZXN0YW1wXG5cblxuZnVuY3Rpb24gb2JqVG9UUyhvYmosIG9mZnNldCwgem9uZSkge1xuICByZXR1cm4gZml4T2Zmc2V0KG9ialRvTG9jYWxUUyhvYmopLCBvZmZzZXQsIHpvbmUpO1xufSAvLyBjcmVhdGUgYSBuZXcgRFQgaW5zdGFuY2UgYnkgYWRkaW5nIGEgZHVyYXRpb24sIGFkanVzdGluZyBmb3IgRFNUc1xuXG5cbmZ1bmN0aW9uIGFkanVzdFRpbWUoaW5zdCwgZHVyKSB7XG4gIHZhciBfZHVyO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZHVyLnZhbHVlcyk7XG5cbiAgaWYgKGtleXMuaW5kZXhPZihcIm1pbGxpc2Vjb25kc1wiKSA9PT0gLTEpIHtcbiAgICBrZXlzLnB1c2goXCJtaWxsaXNlY29uZHNcIik7XG4gIH1cblxuICBkdXIgPSAoX2R1ciA9IGR1cikuc2hpZnRUby5hcHBseShfZHVyLCBrZXlzKTtcbiAgdmFyIG9QcmUgPSBpbnN0Lm8sXG4gICAgICB5ZWFyID0gaW5zdC5jLnllYXIgKyBkdXIueWVhcnMsXG4gICAgICBtb250aCA9IGluc3QuYy5tb250aCArIGR1ci5tb250aHMgKyBkdXIucXVhcnRlcnMgKiAzLFxuICAgICAgYyA9IE9iamVjdC5hc3NpZ24oe30sIGluc3QuYywge1xuICAgIHllYXI6IHllYXIsXG4gICAgbW9udGg6IG1vbnRoLFxuICAgIGRheTogTWF0aC5taW4oaW5zdC5jLmRheSwgZGF5c0luTW9udGgoeWVhciwgbW9udGgpKSArIGR1ci5kYXlzICsgZHVyLndlZWtzICogN1xuICB9KSxcbiAgICAgIG1pbGxpc1RvQWRkID0gRHVyYXRpb24uZnJvbU9iamVjdCh7XG4gICAgaG91cnM6IGR1ci5ob3VycyxcbiAgICBtaW51dGVzOiBkdXIubWludXRlcyxcbiAgICBzZWNvbmRzOiBkdXIuc2Vjb25kcyxcbiAgICBtaWxsaXNlY29uZHM6IGR1ci5taWxsaXNlY29uZHNcbiAgfSkuYXMoXCJtaWxsaXNlY29uZHNcIiksXG4gICAgICBsb2NhbFRTID0gb2JqVG9Mb2NhbFRTKGMpO1xuXG4gIHZhciBfZml4T2Zmc2V0ID0gZml4T2Zmc2V0KGxvY2FsVFMsIG9QcmUsIGluc3Quem9uZSksXG4gICAgICB0cyA9IF9maXhPZmZzZXRbMF0sXG4gICAgICBvID0gX2ZpeE9mZnNldFsxXTtcblxuICBpZiAobWlsbGlzVG9BZGQgIT09IDApIHtcbiAgICB0cyArPSBtaWxsaXNUb0FkZDsgLy8gdGhhdCBjb3VsZCBoYXZlIGNoYW5nZWQgdGhlIG9mZnNldCBieSBnb2luZyBvdmVyIGEgRFNULCBidXQgd2Ugd2FudCB0byBrZWVwIHRoZSB0cyB0aGUgc2FtZVxuXG4gICAgbyA9IGluc3Quem9uZS5vZmZzZXQodHMpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0czogdHMsXG4gICAgbzogb1xuICB9O1xufSAvLyBoZWxwZXIgdXNlZnVsIGluIHR1cm5pbmcgdGhlIHJlc3VsdHMgb2YgcGFyc2luZyBpbnRvIHJlYWwgZGF0ZXNcbi8vIGJ5IGhhbmRsaW5nIHRoZSB6b25lIG9wdGlvbnNcblxuXG5mdW5jdGlvbiBwYXJzZURhdGFUb0RhdGVUaW1lKHBhcnNlZCwgcGFyc2VkWm9uZSwgb3B0cywgZm9ybWF0LCB0ZXh0KSB7XG4gIHZhciBzZXRab25lID0gb3B0cy5zZXRab25lLFxuICAgICAgem9uZSA9IG9wdHMuem9uZTtcblxuICBpZiAocGFyc2VkICYmIE9iamVjdC5rZXlzKHBhcnNlZCkubGVuZ3RoICE9PSAwKSB7XG4gICAgdmFyIGludGVycHJldGF0aW9uWm9uZSA9IHBhcnNlZFpvbmUgfHwgem9uZSxcbiAgICAgICAgaW5zdCA9IERhdGVUaW1lLmZyb21PYmplY3QoT2JqZWN0LmFzc2lnbihwYXJzZWQsIG9wdHMsIHtcbiAgICAgIHpvbmU6IGludGVycHJldGF0aW9uWm9uZSxcbiAgICAgIC8vIHNldFpvbmUgaXMgYSB2YWxpZCBvcHRpb24gaW4gdGhlIGNhbGxpbmcgbWV0aG9kcywgYnV0IG5vdCBpbiBmcm9tT2JqZWN0XG4gICAgICBzZXRab25lOiB1bmRlZmluZWRcbiAgICB9KSk7XG4gICAgcmV0dXJuIHNldFpvbmUgPyBpbnN0IDogaW5zdC5zZXRab25lKHpvbmUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKG5ldyBJbnZhbGlkKFwidW5wYXJzYWJsZVwiLCBcInRoZSBpbnB1dCBcXFwiXCIgKyB0ZXh0ICsgXCJcXFwiIGNhbid0IGJlIHBhcnNlZCBhcyBcIiArIGZvcm1hdCkpO1xuICB9XG59IC8vIGlmIHlvdSB3YW50IHRvIG91dHB1dCBhIHRlY2huaWNhbCBmb3JtYXQgKGUuZy4gUkZDIDI4MjIpLCB0aGlzIGhlbHBlclxuLy8gaGVscHMgaGFuZGxlIHRoZSBkZXRhaWxzXG5cblxuZnVuY3Rpb24gdG9UZWNoRm9ybWF0KGR0LCBmb3JtYXQsIGFsbG93Wikge1xuICBpZiAoYWxsb3daID09PSB2b2lkIDApIHtcbiAgICBhbGxvd1ogPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGR0LmlzVmFsaWQgPyBGb3JtYXR0ZXIuY3JlYXRlKExvY2FsZS5jcmVhdGUoXCJlbi1VU1wiKSwge1xuICAgIGFsbG93WjogYWxsb3daLFxuICAgIGZvcmNlU2ltcGxlOiB0cnVlXG4gIH0pLmZvcm1hdERhdGVUaW1lRnJvbVN0cmluZyhkdCwgZm9ybWF0KSA6IG51bGw7XG59IC8vIHRlY2huaWNhbCB0aW1lIGZvcm1hdHMgKGUuZy4gdGhlIHRpbWUgcGFydCBvZiBJU08gODYwMSksIHRha2Ugc29tZSBvcHRpb25zXG4vLyBhbmQgdGhpcyBjb21tb25pemVzIHRoZWlyIGhhbmRsaW5nXG5cblxuZnVuY3Rpb24gdG9UZWNoVGltZUZvcm1hdChkdCwgX3JlZikge1xuICB2YXIgX3JlZiRzdXBwcmVzc1NlY29uZHMgPSBfcmVmLnN1cHByZXNzU2Vjb25kcyxcbiAgICAgIHN1cHByZXNzU2Vjb25kcyA9IF9yZWYkc3VwcHJlc3NTZWNvbmRzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkc3VwcHJlc3NTZWNvbmRzLFxuICAgICAgX3JlZiRzdXBwcmVzc01pbGxpc2VjID0gX3JlZi5zdXBwcmVzc01pbGxpc2Vjb25kcyxcbiAgICAgIHN1cHByZXNzTWlsbGlzZWNvbmRzID0gX3JlZiRzdXBwcmVzc01pbGxpc2VjID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkc3VwcHJlc3NNaWxsaXNlYyxcbiAgICAgIGluY2x1ZGVPZmZzZXQgPSBfcmVmLmluY2x1ZGVPZmZzZXQsXG4gICAgICBfcmVmJGluY2x1ZGVab25lID0gX3JlZi5pbmNsdWRlWm9uZSxcbiAgICAgIGluY2x1ZGVab25lID0gX3JlZiRpbmNsdWRlWm9uZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGluY2x1ZGVab25lLFxuICAgICAgX3JlZiRzcGFjZVpvbmUgPSBfcmVmLnNwYWNlWm9uZSxcbiAgICAgIHNwYWNlWm9uZSA9IF9yZWYkc3BhY2Vab25lID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkc3BhY2Vab25lLFxuICAgICAgX3JlZiRmb3JtYXQgPSBfcmVmLmZvcm1hdCxcbiAgICAgIGZvcm1hdCA9IF9yZWYkZm9ybWF0ID09PSB2b2lkIDAgPyBcImV4dGVuZGVkXCIgOiBfcmVmJGZvcm1hdDtcbiAgdmFyIGZtdCA9IGZvcm1hdCA9PT0gXCJiYXNpY1wiID8gXCJISG1tXCIgOiBcIkhIOm1tXCI7XG5cbiAgaWYgKCFzdXBwcmVzc1NlY29uZHMgfHwgZHQuc2Vjb25kICE9PSAwIHx8IGR0Lm1pbGxpc2Vjb25kICE9PSAwKSB7XG4gICAgZm10ICs9IGZvcm1hdCA9PT0gXCJiYXNpY1wiID8gXCJzc1wiIDogXCI6c3NcIjtcblxuICAgIGlmICghc3VwcHJlc3NNaWxsaXNlY29uZHMgfHwgZHQubWlsbGlzZWNvbmQgIT09IDApIHtcbiAgICAgIGZtdCArPSBcIi5TU1NcIjtcbiAgICB9XG4gIH1cblxuICBpZiAoKGluY2x1ZGVab25lIHx8IGluY2x1ZGVPZmZzZXQpICYmIHNwYWNlWm9uZSkge1xuICAgIGZtdCArPSBcIiBcIjtcbiAgfVxuXG4gIGlmIChpbmNsdWRlWm9uZSkge1xuICAgIGZtdCArPSBcInpcIjtcbiAgfSBlbHNlIGlmIChpbmNsdWRlT2Zmc2V0KSB7XG4gICAgZm10ICs9IGZvcm1hdCA9PT0gXCJiYXNpY1wiID8gXCJaWlpcIiA6IFwiWlpcIjtcbiAgfVxuXG4gIHJldHVybiB0b1RlY2hGb3JtYXQoZHQsIGZtdCk7XG59IC8vIGRlZmF1bHRzIGZvciB1bnNwZWNpZmllZCB1bml0cyBpbiB0aGUgc3VwcG9ydGVkIGNhbGVuZGFyc1xuXG5cbnZhciBkZWZhdWx0VW5pdFZhbHVlcyA9IHtcbiAgbW9udGg6IDEsXG4gIGRheTogMSxcbiAgaG91cjogMCxcbiAgbWludXRlOiAwLFxuICBzZWNvbmQ6IDAsXG4gIG1pbGxpc2Vjb25kOiAwXG59LFxuICAgIGRlZmF1bHRXZWVrVW5pdFZhbHVlcyA9IHtcbiAgd2Vla051bWJlcjogMSxcbiAgd2Vla2RheTogMSxcbiAgaG91cjogMCxcbiAgbWludXRlOiAwLFxuICBzZWNvbmQ6IDAsXG4gIG1pbGxpc2Vjb25kOiAwXG59LFxuICAgIGRlZmF1bHRPcmRpbmFsVW5pdFZhbHVlcyA9IHtcbiAgb3JkaW5hbDogMSxcbiAgaG91cjogMCxcbiAgbWludXRlOiAwLFxuICBzZWNvbmQ6IDAsXG4gIG1pbGxpc2Vjb25kOiAwXG59OyAvLyBVbml0cyBpbiB0aGUgc3VwcG9ydGVkIGNhbGVuZGFycywgc29ydGVkIGJ5IGJpZ25lc3NcblxudmFyIG9yZGVyZWRVbml0cyQxID0gW1wieWVhclwiLCBcIm1vbnRoXCIsIFwiZGF5XCIsIFwiaG91clwiLCBcIm1pbnV0ZVwiLCBcInNlY29uZFwiLCBcIm1pbGxpc2Vjb25kXCJdLFxuICAgIG9yZGVyZWRXZWVrVW5pdHMgPSBbXCJ3ZWVrWWVhclwiLCBcIndlZWtOdW1iZXJcIiwgXCJ3ZWVrZGF5XCIsIFwiaG91clwiLCBcIm1pbnV0ZVwiLCBcInNlY29uZFwiLCBcIm1pbGxpc2Vjb25kXCJdLFxuICAgIG9yZGVyZWRPcmRpbmFsVW5pdHMgPSBbXCJ5ZWFyXCIsIFwib3JkaW5hbFwiLCBcImhvdXJcIiwgXCJtaW51dGVcIiwgXCJzZWNvbmRcIiwgXCJtaWxsaXNlY29uZFwiXTsgLy8gc3RhbmRhcmRpemUgY2FzZSBhbmQgcGx1cmFsaXR5IGluIHVuaXRzXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVVuaXQodW5pdCkge1xuICB2YXIgbm9ybWFsaXplZCA9IHtcbiAgICB5ZWFyOiBcInllYXJcIixcbiAgICB5ZWFyczogXCJ5ZWFyXCIsXG4gICAgbW9udGg6IFwibW9udGhcIixcbiAgICBtb250aHM6IFwibW9udGhcIixcbiAgICBkYXk6IFwiZGF5XCIsXG4gICAgZGF5czogXCJkYXlcIixcbiAgICBob3VyOiBcImhvdXJcIixcbiAgICBob3VyczogXCJob3VyXCIsXG4gICAgbWludXRlOiBcIm1pbnV0ZVwiLFxuICAgIG1pbnV0ZXM6IFwibWludXRlXCIsXG4gICAgcXVhcnRlcjogXCJxdWFydGVyXCIsXG4gICAgcXVhcnRlcnM6IFwicXVhcnRlclwiLFxuICAgIHNlY29uZDogXCJzZWNvbmRcIixcbiAgICBzZWNvbmRzOiBcInNlY29uZFwiLFxuICAgIG1pbGxpc2Vjb25kOiBcIm1pbGxpc2Vjb25kXCIsXG4gICAgbWlsbGlzZWNvbmRzOiBcIm1pbGxpc2Vjb25kXCIsXG4gICAgd2Vla2RheTogXCJ3ZWVrZGF5XCIsXG4gICAgd2Vla2RheXM6IFwid2Vla2RheVwiLFxuICAgIHdlZWtudW1iZXI6IFwid2Vla051bWJlclwiLFxuICAgIHdlZWtzbnVtYmVyOiBcIndlZWtOdW1iZXJcIixcbiAgICB3ZWVrbnVtYmVyczogXCJ3ZWVrTnVtYmVyXCIsXG4gICAgd2Vla3llYXI6IFwid2Vla1llYXJcIixcbiAgICB3ZWVreWVhcnM6IFwid2Vla1llYXJcIixcbiAgICBvcmRpbmFsOiBcIm9yZGluYWxcIlxuICB9W3VuaXQudG9Mb3dlckNhc2UoKV07XG4gIGlmICghbm9ybWFsaXplZCkgdGhyb3cgbmV3IEludmFsaWRVbml0RXJyb3IodW5pdCk7XG4gIHJldHVybiBub3JtYWxpemVkO1xufSAvLyB0aGlzIGlzIGEgZHVtYmVkIGRvd24gdmVyc2lvbiBvZiBmcm9tT2JqZWN0KCkgdGhhdCBydW5zIGFib3V0IDYwJSBmYXN0ZXJcbi8vIGJ1dCBkb2Vzbid0IGRvIGFueSB2YWxpZGF0aW9uLCBtYWtlcyBhIGJ1bmNoIG9mIGFzc3VtcHRpb25zIGFib3V0IHdoYXQgdW5pdHNcbi8vIGFyZSBwcmVzZW50LCBhbmQgc28gb24uXG5cblxuZnVuY3Rpb24gcXVpY2tEVChvYmosIHpvbmUpIHtcbiAgLy8gYXNzdW1lIHdlIGhhdmUgdGhlIGhpZ2hlci1vcmRlciB1bml0c1xuICBmb3IgKHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKG9yZGVyZWRVbml0cyQxKSwgX3N0ZXA7ICEoX3N0ZXAgPSBfaXRlcmF0b3IoKSkuZG9uZTspIHtcbiAgICB2YXIgdSA9IF9zdGVwLnZhbHVlO1xuXG4gICAgaWYgKGlzVW5kZWZpbmVkKG9ialt1XSkpIHtcbiAgICAgIG9ialt1XSA9IGRlZmF1bHRVbml0VmFsdWVzW3VdO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpbnZhbGlkID0gaGFzSW52YWxpZEdyZWdvcmlhbkRhdGEob2JqKSB8fCBoYXNJbnZhbGlkVGltZURhdGEob2JqKTtcblxuICBpZiAoaW52YWxpZCkge1xuICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKGludmFsaWQpO1xuICB9XG5cbiAgdmFyIHRzTm93ID0gU2V0dGluZ3Mubm93KCksXG4gICAgICBvZmZzZXRQcm92aXMgPSB6b25lLm9mZnNldCh0c05vdyksXG4gICAgICBfb2JqVG9UUyA9IG9ialRvVFMob2JqLCBvZmZzZXRQcm92aXMsIHpvbmUpLFxuICAgICAgdHMgPSBfb2JqVG9UU1swXSxcbiAgICAgIG8gPSBfb2JqVG9UU1sxXTtcblxuICByZXR1cm4gbmV3IERhdGVUaW1lKHtcbiAgICB0czogdHMsXG4gICAgem9uZTogem9uZSxcbiAgICBvOiBvXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkaWZmUmVsYXRpdmUoc3RhcnQsIGVuZCwgb3B0cykge1xuICB2YXIgcm91bmQgPSBpc1VuZGVmaW5lZChvcHRzLnJvdW5kKSA/IHRydWUgOiBvcHRzLnJvdW5kLFxuICAgICAgZm9ybWF0ID0gZnVuY3Rpb24gZm9ybWF0KGMsIHVuaXQpIHtcbiAgICBjID0gcm91bmRUbyhjLCByb3VuZCB8fCBvcHRzLmNhbGVuZGFyeSA/IDAgOiAyLCB0cnVlKTtcbiAgICB2YXIgZm9ybWF0dGVyID0gZW5kLmxvYy5jbG9uZShvcHRzKS5yZWxGb3JtYXR0ZXIob3B0cyk7XG4gICAgcmV0dXJuIGZvcm1hdHRlci5mb3JtYXQoYywgdW5pdCk7XG4gIH0sXG4gICAgICBkaWZmZXIgPSBmdW5jdGlvbiBkaWZmZXIodW5pdCkge1xuICAgIGlmIChvcHRzLmNhbGVuZGFyeSkge1xuICAgICAgaWYgKCFlbmQuaGFzU2FtZShzdGFydCwgdW5pdCkpIHtcbiAgICAgICAgcmV0dXJuIGVuZC5zdGFydE9mKHVuaXQpLmRpZmYoc3RhcnQuc3RhcnRPZih1bml0KSwgdW5pdCkuZ2V0KHVuaXQpO1xuICAgICAgfSBlbHNlIHJldHVybiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZW5kLmRpZmYoc3RhcnQsIHVuaXQpLmdldCh1bml0KTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKG9wdHMudW5pdCkge1xuICAgIHJldHVybiBmb3JtYXQoZGlmZmVyKG9wdHMudW5pdCksIG9wdHMudW5pdCk7XG4gIH1cblxuICBmb3IgKHZhciBfaXRlcmF0b3IyID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShvcHRzLnVuaXRzKSwgX3N0ZXAyOyAhKF9zdGVwMiA9IF9pdGVyYXRvcjIoKSkuZG9uZTspIHtcbiAgICB2YXIgdW5pdCA9IF9zdGVwMi52YWx1ZTtcbiAgICB2YXIgY291bnQgPSBkaWZmZXIodW5pdCk7XG5cbiAgICBpZiAoTWF0aC5hYnMoY291bnQpID49IDEpIHtcbiAgICAgIHJldHVybiBmb3JtYXQoY291bnQsIHVuaXQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXQoMCwgb3B0cy51bml0c1tvcHRzLnVuaXRzLmxlbmd0aCAtIDFdKTtcbn1cbi8qKlxuICogQSBEYXRlVGltZSBpcyBhbiBpbW11dGFibGUgZGF0YSBzdHJ1Y3R1cmUgcmVwcmVzZW50aW5nIGEgc3BlY2lmaWMgZGF0ZSBhbmQgdGltZSBhbmQgYWNjb21wYW55aW5nIG1ldGhvZHMuIEl0IGNvbnRhaW5zIGNsYXNzIGFuZCBpbnN0YW5jZSBtZXRob2RzIGZvciBjcmVhdGluZywgcGFyc2luZywgaW50ZXJyb2dhdGluZywgdHJhbnNmb3JtaW5nLCBhbmQgZm9ybWF0dGluZyB0aGVtLlxuICpcbiAqIEEgRGF0ZVRpbWUgY29tcHJpc2VzIG9mOlxuICogKiBBIHRpbWVzdGFtcC4gRWFjaCBEYXRlVGltZSBpbnN0YW5jZSByZWZlcnMgdG8gYSBzcGVjaWZpYyBtaWxsaXNlY29uZCBvZiB0aGUgVW5peCBlcG9jaC5cbiAqICogQSB0aW1lIHpvbmUuIEVhY2ggaW5zdGFuY2UgaXMgY29uc2lkZXJlZCBpbiB0aGUgY29udGV4dCBvZiBhIHNwZWNpZmljIHpvbmUgKGJ5IGRlZmF1bHQgdGhlIGxvY2FsIHN5c3RlbSdzIHpvbmUpLlxuICogKiBDb25maWd1cmF0aW9uIHByb3BlcnRpZXMgdGhhdCBlZmZlY3QgaG93IG91dHB1dCBzdHJpbmdzIGFyZSBmb3JtYXR0ZWQsIHN1Y2ggYXMgYGxvY2FsZWAsIGBudW1iZXJpbmdTeXN0ZW1gLCBhbmQgYG91dHB1dENhbGVuZGFyYC5cbiAqXG4gKiBIZXJlIGlzIGEgYnJpZWYgb3ZlcnZpZXcgb2YgdGhlIG1vc3QgY29tbW9ubHkgdXNlZCBmdW5jdGlvbmFsaXR5IGl0IHByb3ZpZGVzOlxuICpcbiAqICogKipDcmVhdGlvbioqOiBUbyBjcmVhdGUgYSBEYXRlVGltZSBmcm9tIGl0cyBjb21wb25lbnRzLCB1c2Ugb25lIG9mIGl0cyBmYWN0b3J5IGNsYXNzIG1ldGhvZHM6IHtAbGluayBsb2NhbH0sIHtAbGluayB1dGN9LCBhbmQgKG1vc3QgZmxleGlibHkpIHtAbGluayBmcm9tT2JqZWN0fS4gVG8gY3JlYXRlIG9uZSBmcm9tIGEgc3RhbmRhcmQgc3RyaW5nIGZvcm1hdCwgdXNlIHtAbGluayBmcm9tSVNPfSwge0BsaW5rIGZyb21IVFRQfSwgYW5kIHtAbGluayBmcm9tUkZDMjgyMn0uIFRvIGNyZWF0ZSBvbmUgZnJvbSBhIGN1c3RvbSBzdHJpbmcgZm9ybWF0LCB1c2Uge0BsaW5rIGZyb21Gb3JtYXR9LiBUbyBjcmVhdGUgb25lIGZyb20gYSBuYXRpdmUgSlMgZGF0ZSwgdXNlIHtAbGluayBmcm9tSlNEYXRlfS5cbiAqICogKipHcmVnb3JpYW4gY2FsZW5kYXIgYW5kIHRpbWUqKjogVG8gZXhhbWluZSB0aGUgR3JlZ29yaWFuIHByb3BlcnRpZXMgb2YgYSBEYXRlVGltZSBpbmRpdmlkdWFsbHkgKGkuZSBhcyBvcHBvc2VkIHRvIGNvbGxlY3RpdmVseSB0aHJvdWdoIHtAbGluayB0b09iamVjdH0pLCB1c2UgdGhlIHtAbGluayB5ZWFyfSwge0BsaW5rIG1vbnRofSxcbiAqIHtAbGluayBkYXl9LCB7QGxpbmsgaG91cn0sIHtAbGluayBtaW51dGV9LCB7QGxpbmsgc2Vjb25kfSwge0BsaW5rIG1pbGxpc2Vjb25kfSBhY2Nlc3NvcnMuXG4gKiAqICoqV2VlayBjYWxlbmRhcioqOiBGb3IgSVNPIHdlZWsgY2FsZW5kYXIgYXR0cmlidXRlcywgc2VlIHRoZSB7QGxpbmsgd2Vla1llYXJ9LCB7QGxpbmsgd2Vla051bWJlcn0sIGFuZCB7QGxpbmsgd2Vla2RheX0gYWNjZXNzb3JzLlxuICogKiAqKkNvbmZpZ3VyYXRpb24qKiBTZWUgdGhlIHtAbGluayBsb2NhbGV9IGFuZCB7QGxpbmsgbnVtYmVyaW5nU3lzdGVtfSBhY2Nlc3NvcnMuXG4gKiAqICoqVHJhbnNmb3JtYXRpb24qKjogVG8gdHJhbnNmb3JtIHRoZSBEYXRlVGltZSBpbnRvIG90aGVyIERhdGVUaW1lcywgdXNlIHtAbGluayBzZXR9LCB7QGxpbmsgcmVjb25maWd1cmV9LCB7QGxpbmsgc2V0Wm9uZX0sIHtAbGluayBzZXRMb2NhbGV9LCB7QGxpbmsgcGx1c30sIHtAbGluayBtaW51c30sIHtAbGluayBlbmRPZn0sIHtAbGluayBzdGFydE9mfSwge0BsaW5rIHRvVVRDfSwgYW5kIHtAbGluayB0b0xvY2FsfS5cbiAqICogKipPdXRwdXQqKjogVG8gY29udmVydCB0aGUgRGF0ZVRpbWUgdG8gb3RoZXIgcmVwcmVzZW50YXRpb25zLCB1c2UgdGhlIHtAbGluayB0b1JlbGF0aXZlfSwge0BsaW5rIHRvUmVsYXRpdmVDYWxlbmRhcn0sIHtAbGluayB0b0pTT059LCB7QGxpbmsgdG9JU099LCB7QGxpbmsgdG9IVFRQfSwge0BsaW5rIHRvT2JqZWN0fSwge0BsaW5rIHRvUkZDMjgyMn0sIHtAbGluayB0b1N0cmluZ30sIHtAbGluayB0b0xvY2FsZVN0cmluZ30sIHtAbGluayB0b0Zvcm1hdH0sIHtAbGluayB0b01pbGxpc30gYW5kIHtAbGluayB0b0pTRGF0ZX0uXG4gKlxuICogVGhlcmUncyBwbGVudHkgb3RoZXJzIGRvY3VtZW50ZWQgYmVsb3cuIEluIGFkZGl0aW9uLCBmb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBzdWJ0bGVyIHRvcGljcyBsaWtlIGludGVybmF0aW9uYWxpemF0aW9uLCB0aW1lIHpvbmVzLCBhbHRlcm5hdGl2ZSBjYWxlbmRhcnMsIHZhbGlkaXR5LCBhbmQgc28gb24sIHNlZSB0aGUgZXh0ZXJuYWwgZG9jdW1lbnRhdGlvbi5cbiAqL1xuXG5cbnZhciBEYXRlVGltZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICovXG4gIGZ1bmN0aW9uIERhdGVUaW1lKGNvbmZpZykge1xuICAgIHZhciB6b25lID0gY29uZmlnLnpvbmUgfHwgU2V0dGluZ3MuZGVmYXVsdFpvbmU7XG4gICAgdmFyIGludmFsaWQgPSBjb25maWcuaW52YWxpZCB8fCAoTnVtYmVyLmlzTmFOKGNvbmZpZy50cykgPyBuZXcgSW52YWxpZChcImludmFsaWQgaW5wdXRcIikgOiBudWxsKSB8fCAoIXpvbmUuaXNWYWxpZCA/IHVuc3VwcG9ydGVkWm9uZSh6b25lKSA6IG51bGwpO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuXG4gICAgdGhpcy50cyA9IGlzVW5kZWZpbmVkKGNvbmZpZy50cykgPyBTZXR0aW5ncy5ub3coKSA6IGNvbmZpZy50cztcbiAgICB2YXIgYyA9IG51bGwsXG4gICAgICAgIG8gPSBudWxsO1xuXG4gICAgaWYgKCFpbnZhbGlkKSB7XG4gICAgICB2YXIgdW5jaGFuZ2VkID0gY29uZmlnLm9sZCAmJiBjb25maWcub2xkLnRzID09PSB0aGlzLnRzICYmIGNvbmZpZy5vbGQuem9uZS5lcXVhbHMoem9uZSk7XG5cbiAgICAgIGlmICh1bmNoYW5nZWQpIHtcbiAgICAgICAgdmFyIF9yZWYyID0gW2NvbmZpZy5vbGQuYywgY29uZmlnLm9sZC5vXTtcbiAgICAgICAgYyA9IF9yZWYyWzBdO1xuICAgICAgICBvID0gX3JlZjJbMV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgb3QgPSB6b25lLm9mZnNldCh0aGlzLnRzKTtcbiAgICAgICAgYyA9IHRzVG9PYmoodGhpcy50cywgb3QpO1xuICAgICAgICBpbnZhbGlkID0gTnVtYmVyLmlzTmFOKGMueWVhcikgPyBuZXcgSW52YWxpZChcImludmFsaWQgaW5wdXRcIikgOiBudWxsO1xuICAgICAgICBjID0gaW52YWxpZCA/IG51bGwgOiBjO1xuICAgICAgICBvID0gaW52YWxpZCA/IG51bGwgOiBvdDtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG5cblxuICAgIHRoaXMuX3pvbmUgPSB6b25lO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuXG4gICAgdGhpcy5sb2MgPSBjb25maWcubG9jIHx8IExvY2FsZS5jcmVhdGUoKTtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cblxuICAgIHRoaXMuaW52YWxpZCA9IGludmFsaWQ7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG5cbiAgICB0aGlzLndlZWtEYXRhID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cblxuICAgIHRoaXMuYyA9IGM7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG5cbiAgICB0aGlzLm8gPSBvO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuXG4gICAgdGhpcy5pc0x1eG9uRGF0ZVRpbWUgPSB0cnVlO1xuICB9IC8vIENPTlNUUlVDVFxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBsb2NhbCBEYXRlVGltZVxuICAgKiBAcGFyYW0ge251bWJlcn0gW3llYXJdIC0gVGhlIGNhbGVuZGFyIHllYXIuIElmIG9taXR0ZWQgKGFzIGluLCBjYWxsIGBsb2NhbCgpYCB3aXRoIG5vIGFyZ3VtZW50cyksIHRoZSBjdXJyZW50IHRpbWUgd2lsbCBiZSB1c2VkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbW9udGg9MV0gLSBUaGUgbW9udGgsIDEtaW5kZXhlZFxuICAgKiBAcGFyYW0ge251bWJlcn0gW2RheT0xXSAtIFRoZSBkYXkgb2YgdGhlIG1vbnRoXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbaG91cj0wXSAtIFRoZSBob3VyIG9mIHRoZSBkYXksIGluIDI0LWhvdXIgdGltZVxuICAgKiBAcGFyYW0ge251bWJlcn0gW21pbnV0ZT0wXSAtIFRoZSBtaW51dGUgb2YgdGhlIGhvdXIsIG1lYW5pbmcgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA1OVxuICAgKiBAcGFyYW0ge251bWJlcn0gW3NlY29uZD0wXSAtIFRoZSBzZWNvbmQgb2YgdGhlIG1pbnV0ZSwgbWVhbmluZyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDU5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbWlsbGlzZWNvbmQ9MF0gLSBUaGUgbWlsbGlzZWNvbmQgb2YgdGhlIHNlY29uZCwgbWVhbmluZyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDk5OVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gbm93XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcpICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAxLTAxVDAwOjAwOjAwXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMpICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTAxVDAwOjAwOjAwXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyKSAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDAwOjAwOjAwXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCA1KSAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjAwOjAwXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCA1LCA0NSkgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjAwXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCA1LCA0NSwgMTApICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjEwXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCA1LCA0NSwgMTAsIDc2NSkgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjEwLjc2NVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG5cblxuICBEYXRlVGltZS5sb2NhbCA9IGZ1bmN0aW9uIGxvY2FsKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZCkge1xuICAgIGlmIChpc1VuZGVmaW5lZCh5ZWFyKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlVGltZSh7XG4gICAgICAgIHRzOiBTZXR0aW5ncy5ub3coKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBxdWlja0RUKHtcbiAgICAgICAgeWVhcjogeWVhcixcbiAgICAgICAgbW9udGg6IG1vbnRoLFxuICAgICAgICBkYXk6IGRheSxcbiAgICAgICAgaG91cjogaG91cixcbiAgICAgICAgbWludXRlOiBtaW51dGUsXG4gICAgICAgIHNlY29uZDogc2Vjb25kLFxuICAgICAgICBtaWxsaXNlY29uZDogbWlsbGlzZWNvbmRcbiAgICAgIH0sIFNldHRpbmdzLmRlZmF1bHRab25lKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGluIFVUQ1xuICAgKiBAcGFyYW0ge251bWJlcn0gW3llYXJdIC0gVGhlIGNhbGVuZGFyIHllYXIuIElmIG9taXR0ZWQgKGFzIGluLCBjYWxsIGB1dGMoKWAgd2l0aCBubyBhcmd1bWVudHMpLCB0aGUgY3VycmVudCB0aW1lIHdpbGwgYmUgdXNlZFxuICAgKiBAcGFyYW0ge251bWJlcn0gW21vbnRoPTFdIC0gVGhlIG1vbnRoLCAxLWluZGV4ZWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtkYXk9MV0gLSBUaGUgZGF5IG9mIHRoZSBtb250aFxuICAgKiBAcGFyYW0ge251bWJlcn0gW2hvdXI9MF0gLSBUaGUgaG91ciBvZiB0aGUgZGF5LCBpbiAyNC1ob3VyIHRpbWVcbiAgICogQHBhcmFtIHtudW1iZXJ9IFttaW51dGU9MF0gLSBUaGUgbWludXRlIG9mIHRoZSBob3VyLCBtZWFuaW5nIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgNTlcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtzZWNvbmQ9MF0gLSBUaGUgc2Vjb25kIG9mIHRoZSBtaW51dGUsIG1lYW5pbmcgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA1OVxuICAgKiBAcGFyYW0ge251bWJlcn0gW21pbGxpc2Vjb25kPTBdIC0gVGhlIG1pbGxpc2Vjb25kIG9mIHRoZSBzZWNvbmQsIG1lYW5pbmcgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA5OTlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiBub3dcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcpICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAxLTAxVDAwOjAwOjAwWlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMykgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMDFUMDA6MDA6MDBaXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzLCAxMikgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwMDowMDowMFpcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMsIDEyLCA1KSAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjAwOjAwWlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMywgMTIsIDUsIDQ1KSAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6NDU6MDBaXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzLCAxMiwgNSwgNDUsIDEwKSAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTo0NToxMFpcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMsIDEyLCA1LCA0NSwgMTAsIDc2NSkgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjEwLjc2NVpcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICA7XG5cbiAgRGF0ZVRpbWUudXRjID0gZnVuY3Rpb24gdXRjKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZCkge1xuICAgIGlmIChpc1VuZGVmaW5lZCh5ZWFyKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlVGltZSh7XG4gICAgICAgIHRzOiBTZXR0aW5ncy5ub3coKSxcbiAgICAgICAgem9uZTogRml4ZWRPZmZzZXRab25lLnV0Y0luc3RhbmNlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHF1aWNrRFQoe1xuICAgICAgICB5ZWFyOiB5ZWFyLFxuICAgICAgICBtb250aDogbW9udGgsXG4gICAgICAgIGRheTogZGF5LFxuICAgICAgICBob3VyOiBob3VyLFxuICAgICAgICBtaW51dGU6IG1pbnV0ZSxcbiAgICAgICAgc2Vjb25kOiBzZWNvbmQsXG4gICAgICAgIG1pbGxpc2Vjb25kOiBtaWxsaXNlY29uZFxuICAgICAgfSwgRml4ZWRPZmZzZXRab25lLnV0Y0luc3RhbmNlKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYSBKYXZhc2NyaXB0IERhdGUgb2JqZWN0LiBVc2VzIHRoZSBkZWZhdWx0IHpvbmUuXG4gICAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSAtIGEgSmF2YXNjcmlwdCBEYXRlIG9iamVjdFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdGhlIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRpb25zLnpvbmU9J2xvY2FsJ10gLSB0aGUgem9uZSB0byBwbGFjZSB0aGUgRGF0ZVRpbWUgaW50b1xuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIDtcblxuICBEYXRlVGltZS5mcm9tSlNEYXRlID0gZnVuY3Rpb24gZnJvbUpTRGF0ZShkYXRlLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIHZhciB0cyA9IGlzRGF0ZShkYXRlKSA/IGRhdGUudmFsdWVPZigpIDogTmFOO1xuXG4gICAgaWYgKE51bWJlci5pc05hTih0cykpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKFwiaW52YWxpZCBpbnB1dFwiKTtcbiAgICB9XG5cbiAgICB2YXIgem9uZVRvVXNlID0gbm9ybWFsaXplWm9uZShvcHRpb25zLnpvbmUsIFNldHRpbmdzLmRlZmF1bHRab25lKTtcblxuICAgIGlmICghem9uZVRvVXNlLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKHVuc3VwcG9ydGVkWm9uZSh6b25lVG9Vc2UpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGVUaW1lKHtcbiAgICAgIHRzOiB0cyxcbiAgICAgIHpvbmU6IHpvbmVUb1VzZSxcbiAgICAgIGxvYzogTG9jYWxlLmZyb21PYmplY3Qob3B0aW9ucylcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMgc2luY2UgdGhlIGVwb2NoIChtZWFuaW5nIHNpbmNlIDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuIFVzZXMgdGhlIGRlZmF1bHQgem9uZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG1pbGxpc2Vjb25kcyAtIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBzaW5jZSAxOTcwIFVUQ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdGhlIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRpb25zLnpvbmU9J2xvY2FsJ10gLSB0aGUgem9uZSB0byBwbGFjZSB0aGUgRGF0ZVRpbWUgaW50b1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubG9jYWxlXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIDtcblxuICBEYXRlVGltZS5mcm9tTWlsbGlzID0gZnVuY3Rpb24gZnJvbU1pbGxpcyhtaWxsaXNlY29uZHMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgaWYgKCFpc051bWJlcihtaWxsaXNlY29uZHMpKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJmcm9tTWlsbGlzIHJlcXVpcmVzIGEgbnVtZXJpY2FsIGlucHV0LCBidXQgcmVjZWl2ZWQgYSBcIiArIHR5cGVvZiBtaWxsaXNlY29uZHMgKyBcIiB3aXRoIHZhbHVlIFwiICsgbWlsbGlzZWNvbmRzKTtcbiAgICB9IGVsc2UgaWYgKG1pbGxpc2Vjb25kcyA8IC1NQVhfREFURSB8fCBtaWxsaXNlY29uZHMgPiBNQVhfREFURSkge1xuICAgICAgLy8gdGhpcyBpc24ndCBwZXJmZWN0IGJlY2F1c2UgYmVjYXVzZSB3ZSBjYW4gc3RpbGwgZW5kIHVwIG91dCBvZiByYW5nZSBiZWNhdXNlIG9mIGFkZGl0aW9uYWwgc2hpZnRpbmcsIGJ1dCBpdCdzIGEgc3RhcnRcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKFwiVGltZXN0YW1wIG91dCBvZiByYW5nZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlVGltZSh7XG4gICAgICAgIHRzOiBtaWxsaXNlY29uZHMsXG4gICAgICAgIHpvbmU6IG5vcm1hbGl6ZVpvbmUob3B0aW9ucy56b25lLCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSksXG4gICAgICAgIGxvYzogTG9jYWxlLmZyb21PYmplY3Qob3B0aW9ucylcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhIG51bWJlciBvZiBzZWNvbmRzIHNpbmNlIHRoZSBlcG9jaCAobWVhbmluZyBzaW5jZSAxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLiBVc2VzIHRoZSBkZWZhdWx0IHpvbmUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZWNvbmRzIC0gYSBudW1iZXIgb2Ygc2Vjb25kcyBzaW5jZSAxOTcwIFVUQ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdGhlIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRpb25zLnpvbmU9J2xvY2FsJ10gLSB0aGUgem9uZSB0byBwbGFjZSB0aGUgRGF0ZVRpbWUgaW50b1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubG9jYWxlXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIDtcblxuICBEYXRlVGltZS5mcm9tU2Vjb25kcyA9IGZ1bmN0aW9uIGZyb21TZWNvbmRzKHNlY29uZHMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgaWYgKCFpc051bWJlcihzZWNvbmRzKSkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFwiZnJvbVNlY29uZHMgcmVxdWlyZXMgYSBudW1lcmljYWwgaW5wdXRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZVRpbWUoe1xuICAgICAgICB0czogc2Vjb25kcyAqIDEwMDAsXG4gICAgICAgIHpvbmU6IG5vcm1hbGl6ZVpvbmUob3B0aW9ucy56b25lLCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSksXG4gICAgICAgIGxvYzogTG9jYWxlLmZyb21PYmplY3Qob3B0aW9ucylcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhIEphdmFzY3JpcHQgb2JqZWN0IHdpdGgga2V5cyBsaWtlICd5ZWFyJyBhbmQgJ2hvdXInIHdpdGggcmVhc29uYWJsZSBkZWZhdWx0cy5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIHRoZSBvYmplY3QgdG8gY3JlYXRlIHRoZSBEYXRlVGltZSBmcm9tXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoueWVhciAtIGEgeWVhciwgc3VjaCBhcyAxOTg3XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubW9udGggLSBhIG1vbnRoLCAxLTEyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouZGF5IC0gYSBkYXkgb2YgdGhlIG1vbnRoLCAxLTMxLCBkZXBlbmRpbmcgb24gdGhlIG1vbnRoXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoub3JkaW5hbCAtIGRheSBvZiB0aGUgeWVhciwgMS0zNjUgb3IgMzY2XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoud2Vla1llYXIgLSBhbiBJU08gd2VlayB5ZWFyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoud2Vla051bWJlciAtIGFuIElTTyB3ZWVrIG51bWJlciwgYmV0d2VlbiAxIGFuZCA1MiBvciA1MywgZGVwZW5kaW5nIG9uIHRoZSB5ZWFyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoud2Vla2RheSAtIGFuIElTTyB3ZWVrZGF5LCAxLTcsIHdoZXJlIDEgaXMgTW9uZGF5IGFuZCA3IGlzIFN1bmRheVxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLmhvdXIgLSBob3VyIG9mIHRoZSBkYXksIDAtMjNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5taW51dGUgLSBtaW51dGUgb2YgdGhlIGhvdXIsIDAtNTlcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5zZWNvbmQgLSBzZWNvbmQgb2YgdGhlIG1pbnV0ZSwgMC01OVxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1pbGxpc2Vjb25kIC0gbWlsbGlzZWNvbmQgb2YgdGhlIHNlY29uZCwgMC05OTlcbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29iai56b25lPSdsb2NhbCddIC0gaW50ZXJwcmV0IHRoZSBudW1iZXJzIGluIHRoZSBjb250ZXh0IG9mIGEgcGFydGljdWxhciB6b25lLiBDYW4gdGFrZSBhbnkgdmFsdWUgdGFrZW4gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHNldFpvbmUoKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29iai5sb2NhbGU9J3N5c3RlbSdzIGxvY2FsZSddIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9iai5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9iai5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgeWVhcjogMTk4MiwgbW9udGg6IDUsIGRheTogMjV9KS50b0lTT0RhdGUoKSAvLz0+ICcxOTgyLTA1LTI1J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgeWVhcjogMTk4MiB9KS50b0lTT0RhdGUoKSAvLz0+ICcxOTgyLTAxLTAxJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgaG91cjogMTAsIG1pbnV0ZTogMjYsIHNlY29uZDogNiB9KSAvL34+IHRvZGF5IGF0IDEwOjI2OjA2XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyBob3VyOiAxMCwgbWludXRlOiAyNiwgc2Vjb25kOiA2LCB6b25lOiAndXRjJyB9KSxcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbU9iamVjdCh7IGhvdXI6IDEwLCBtaW51dGU6IDI2LCBzZWNvbmQ6IDYsIHpvbmU6ICdsb2NhbCcgfSlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbU9iamVjdCh7IGhvdXI6IDEwLCBtaW51dGU6IDI2LCBzZWNvbmQ6IDYsIHpvbmU6ICdBbWVyaWNhL05ld19Zb3JrJyB9KVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgd2Vla1llYXI6IDIwMTYsIHdlZWtOdW1iZXI6IDIsIHdlZWtkYXk6IDMgfSkudG9JU09EYXRlKCkgLy89PiAnMjAxNi0wMS0xMydcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICA7XG5cbiAgRGF0ZVRpbWUuZnJvbU9iamVjdCA9IGZ1bmN0aW9uIGZyb21PYmplY3Qob2JqKSB7XG4gICAgdmFyIHpvbmVUb1VzZSA9IG5vcm1hbGl6ZVpvbmUob2JqLnpvbmUsIFNldHRpbmdzLmRlZmF1bHRab25lKTtcblxuICAgIGlmICghem9uZVRvVXNlLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKHVuc3VwcG9ydGVkWm9uZSh6b25lVG9Vc2UpKTtcbiAgICB9XG5cbiAgICB2YXIgdHNOb3cgPSBTZXR0aW5ncy5ub3coKSxcbiAgICAgICAgb2Zmc2V0UHJvdmlzID0gem9uZVRvVXNlLm9mZnNldCh0c05vdyksXG4gICAgICAgIG5vcm1hbGl6ZWQgPSBub3JtYWxpemVPYmplY3Qob2JqLCBub3JtYWxpemVVbml0LCBbXCJ6b25lXCIsIFwibG9jYWxlXCIsIFwib3V0cHV0Q2FsZW5kYXJcIiwgXCJudW1iZXJpbmdTeXN0ZW1cIl0pLFxuICAgICAgICBjb250YWluc09yZGluYWwgPSAhaXNVbmRlZmluZWQobm9ybWFsaXplZC5vcmRpbmFsKSxcbiAgICAgICAgY29udGFpbnNHcmVnb3JZZWFyID0gIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQueWVhciksXG4gICAgICAgIGNvbnRhaW5zR3JlZ29yTUQgPSAhaXNVbmRlZmluZWQobm9ybWFsaXplZC5tb250aCkgfHwgIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQuZGF5KSxcbiAgICAgICAgY29udGFpbnNHcmVnb3IgPSBjb250YWluc0dyZWdvclllYXIgfHwgY29udGFpbnNHcmVnb3JNRCxcbiAgICAgICAgZGVmaW5pdGVXZWVrRGVmID0gbm9ybWFsaXplZC53ZWVrWWVhciB8fCBub3JtYWxpemVkLndlZWtOdW1iZXIsXG4gICAgICAgIGxvYyA9IExvY2FsZS5mcm9tT2JqZWN0KG9iaik7IC8vIGNhc2VzOlxuICAgIC8vIGp1c3QgYSB3ZWVrZGF5IC0+IHRoaXMgd2VlaydzIGluc3RhbmNlIG9mIHRoYXQgd2Vla2RheSwgbm8gd29ycmllc1xuICAgIC8vIChncmVnb3JpYW4gZGF0YSBvciBvcmRpbmFsKSArICh3ZWVrWWVhciBvciB3ZWVrTnVtYmVyKSAtPiBlcnJvclxuICAgIC8vIChncmVnb3JpYW4gbW9udGggb3IgZGF5KSArIG9yZGluYWwgLT4gZXJyb3JcbiAgICAvLyBvdGhlcndpc2UganVzdCB1c2Ugd2Vla3Mgb3Igb3JkaW5hbHMgb3IgZ3JlZ29yaWFuLCBkZXBlbmRpbmcgb24gd2hhdCdzIHNwZWNpZmllZFxuXG4gICAgaWYgKChjb250YWluc0dyZWdvciB8fCBjb250YWluc09yZGluYWwpICYmIGRlZmluaXRlV2Vla0RlZikge1xuICAgICAgdGhyb3cgbmV3IENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yKFwiQ2FuJ3QgbWl4IHdlZWtZZWFyL3dlZWtOdW1iZXIgdW5pdHMgd2l0aCB5ZWFyL21vbnRoL2RheSBvciBvcmRpbmFsc1wiKTtcbiAgICB9XG5cbiAgICBpZiAoY29udGFpbnNHcmVnb3JNRCAmJiBjb250YWluc09yZGluYWwpIHtcbiAgICAgIHRocm93IG5ldyBDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvcihcIkNhbid0IG1peCBvcmRpbmFsIGRhdGVzIHdpdGggbW9udGgvZGF5XCIpO1xuICAgIH1cblxuICAgIHZhciB1c2VXZWVrRGF0YSA9IGRlZmluaXRlV2Vla0RlZiB8fCBub3JtYWxpemVkLndlZWtkYXkgJiYgIWNvbnRhaW5zR3JlZ29yOyAvLyBjb25maWd1cmUgb3Vyc2VsdmVzIHRvIGRlYWwgd2l0aCBncmVnb3JpYW4gZGF0ZXMgb3Igd2VlayBzdHVmZlxuXG4gICAgdmFyIHVuaXRzLFxuICAgICAgICBkZWZhdWx0VmFsdWVzLFxuICAgICAgICBvYmpOb3cgPSB0c1RvT2JqKHRzTm93LCBvZmZzZXRQcm92aXMpO1xuXG4gICAgaWYgKHVzZVdlZWtEYXRhKSB7XG4gICAgICB1bml0cyA9IG9yZGVyZWRXZWVrVW5pdHM7XG4gICAgICBkZWZhdWx0VmFsdWVzID0gZGVmYXVsdFdlZWtVbml0VmFsdWVzO1xuICAgICAgb2JqTm93ID0gZ3JlZ29yaWFuVG9XZWVrKG9iak5vdyk7XG4gICAgfSBlbHNlIGlmIChjb250YWluc09yZGluYWwpIHtcbiAgICAgIHVuaXRzID0gb3JkZXJlZE9yZGluYWxVbml0cztcbiAgICAgIGRlZmF1bHRWYWx1ZXMgPSBkZWZhdWx0T3JkaW5hbFVuaXRWYWx1ZXM7XG4gICAgICBvYmpOb3cgPSBncmVnb3JpYW5Ub09yZGluYWwob2JqTm93KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdW5pdHMgPSBvcmRlcmVkVW5pdHMkMTtcbiAgICAgIGRlZmF1bHRWYWx1ZXMgPSBkZWZhdWx0VW5pdFZhbHVlcztcbiAgICB9IC8vIHNldCBkZWZhdWx0IHZhbHVlcyBmb3IgbWlzc2luZyBzdHVmZlxuXG5cbiAgICB2YXIgZm91bmRGaXJzdCA9IGZhbHNlO1xuXG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yMyA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UodW5pdHMpLCBfc3RlcDM7ICEoX3N0ZXAzID0gX2l0ZXJhdG9yMygpKS5kb25lOykge1xuICAgICAgdmFyIHUgPSBfc3RlcDMudmFsdWU7XG4gICAgICB2YXIgdiA9IG5vcm1hbGl6ZWRbdV07XG5cbiAgICAgIGlmICghaXNVbmRlZmluZWQodikpIHtcbiAgICAgICAgZm91bmRGaXJzdCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKGZvdW5kRmlyc3QpIHtcbiAgICAgICAgbm9ybWFsaXplZFt1XSA9IGRlZmF1bHRWYWx1ZXNbdV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub3JtYWxpemVkW3VdID0gb2JqTm93W3VdO1xuICAgICAgfVxuICAgIH0gLy8gbWFrZSBzdXJlIHRoZSB2YWx1ZXMgd2UgaGF2ZSBhcmUgaW4gcmFuZ2VcblxuXG4gICAgdmFyIGhpZ2hlck9yZGVySW52YWxpZCA9IHVzZVdlZWtEYXRhID8gaGFzSW52YWxpZFdlZWtEYXRhKG5vcm1hbGl6ZWQpIDogY29udGFpbnNPcmRpbmFsID8gaGFzSW52YWxpZE9yZGluYWxEYXRhKG5vcm1hbGl6ZWQpIDogaGFzSW52YWxpZEdyZWdvcmlhbkRhdGEobm9ybWFsaXplZCksXG4gICAgICAgIGludmFsaWQgPSBoaWdoZXJPcmRlckludmFsaWQgfHwgaGFzSW52YWxpZFRpbWVEYXRhKG5vcm1hbGl6ZWQpO1xuXG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKGludmFsaWQpO1xuICAgIH0gLy8gY29tcHV0ZSB0aGUgYWN0dWFsIHRpbWVcblxuXG4gICAgdmFyIGdyZWdvcmlhbiA9IHVzZVdlZWtEYXRhID8gd2Vla1RvR3JlZ29yaWFuKG5vcm1hbGl6ZWQpIDogY29udGFpbnNPcmRpbmFsID8gb3JkaW5hbFRvR3JlZ29yaWFuKG5vcm1hbGl6ZWQpIDogbm9ybWFsaXplZCxcbiAgICAgICAgX29ialRvVFMyID0gb2JqVG9UUyhncmVnb3JpYW4sIG9mZnNldFByb3Zpcywgem9uZVRvVXNlKSxcbiAgICAgICAgdHNGaW5hbCA9IF9vYmpUb1RTMlswXSxcbiAgICAgICAgb2Zmc2V0RmluYWwgPSBfb2JqVG9UUzJbMV0sXG4gICAgICAgIGluc3QgPSBuZXcgRGF0ZVRpbWUoe1xuICAgICAgdHM6IHRzRmluYWwsXG4gICAgICB6b25lOiB6b25lVG9Vc2UsXG4gICAgICBvOiBvZmZzZXRGaW5hbCxcbiAgICAgIGxvYzogbG9jXG4gICAgfSk7IC8vIGdyZWdvcmlhbiBkYXRhICsgd2Vla2RheSBzZXJ2ZXMgb25seSB0byB2YWxpZGF0ZVxuXG5cbiAgICBpZiAobm9ybWFsaXplZC53ZWVrZGF5ICYmIGNvbnRhaW5zR3JlZ29yICYmIG9iai53ZWVrZGF5ICE9PSBpbnN0LndlZWtkYXkpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKFwibWlzbWF0Y2hlZCB3ZWVrZGF5XCIsIFwieW91IGNhbid0IHNwZWNpZnkgYm90aCBhIHdlZWtkYXkgb2YgXCIgKyBub3JtYWxpemVkLndlZWtkYXkgKyBcIiBhbmQgYSBkYXRlIG9mIFwiICsgaW5zdC50b0lTTygpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdDtcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhbiBJU08gODYwMSBzdHJpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgSVNPIHN0cmluZ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdG8gYWZmZWN0IHRoZSBjcmVhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gdXNlIHRoaXMgem9uZSBpZiBubyBvZmZzZXQgaXMgc3BlY2lmaWVkIGluIHRoZSBpbnB1dCBzdHJpbmcgaXRzZWxmLiBXaWxsIGFsc28gY29udmVydCB0aGUgdGltZSB0byB0aGlzIHpvbmVcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zZXRab25lPWZhbHNlXSAtIG92ZXJyaWRlIHRoZSB6b25lIHdpdGggYSBmaXhlZC1vZmZzZXQgem9uZSBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZyBpdHNlbGYsIGlmIGl0IHNwZWNpZmllcyBvbmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nc3lzdGVtJ3MgbG9jYWxlJ10gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUlTTygnMjAxNi0wNS0yNVQwOTowODozNC4xMjMnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSVNPKCcyMDE2LTA1LTI1VDA5OjA4OjM0LjEyMyswNjowMCcpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21JU08oJzIwMTYtMDUtMjVUMDk6MDg6MzQuMTIzKzA2OjAwJywge3NldFpvbmU6IHRydWV9KVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSVNPKCcyMDE2LTA1LTI1VDA5OjA4OjM0LjEyMycsIHt6b25lOiAndXRjJ30pXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21JU08oJzIwMTYtVzA1LTQnKVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIDtcblxuICBEYXRlVGltZS5mcm9tSVNPID0gZnVuY3Rpb24gZnJvbUlTTyh0ZXh0LCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cblxuICAgIHZhciBfcGFyc2VJU09EYXRlID0gcGFyc2VJU09EYXRlKHRleHQpLFxuICAgICAgICB2YWxzID0gX3BhcnNlSVNPRGF0ZVswXSxcbiAgICAgICAgcGFyc2VkWm9uZSA9IF9wYXJzZUlTT0RhdGVbMV07XG5cbiAgICByZXR1cm4gcGFyc2VEYXRhVG9EYXRlVGltZSh2YWxzLCBwYXJzZWRab25lLCBvcHRzLCBcIklTTyA4NjAxXCIsIHRleHQpO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGFuIFJGQyAyODIyIHN0cmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBSRkMgMjgyMiBzdHJpbmdcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRvIGFmZmVjdCB0aGUgY3JlYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdHMuem9uZT0nbG9jYWwnXSAtIGNvbnZlcnQgdGhlIHRpbWUgdG8gdGhpcyB6b25lLiBTaW5jZSB0aGUgb2Zmc2V0IGlzIGFsd2F5cyBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZyBpdHNlbGYsIHRoaXMgaGFzIG5vIGVmZmVjdCBvbiB0aGUgaW50ZXJwcmV0YXRpb24gb2Ygc3RyaW5nLCBtZXJlbHkgdGhlIHpvbmUgdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpcyBleHByZXNzZWQgaW4uXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc2V0Wm9uZT1mYWxzZV0gLSBvdmVycmlkZSB0aGUgem9uZSB3aXRoIGEgZml4ZWQtb2Zmc2V0IHpvbmUgc3BlY2lmaWVkIGluIHRoZSBzdHJpbmcgaXRzZWxmLCBpZiBpdCBzcGVjaWZpZXMgb25lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9J3N5c3RlbSdzIGxvY2FsZSddIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21SRkMyODIyKCcyNSBOb3YgMjAxNiAxMzoyMzoxMiBHTVQnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tUkZDMjgyMignRnJpLCAyNSBOb3YgMjAxNiAxMzoyMzoxMiArMDYwMCcpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21SRkMyODIyKCcyNSBOb3YgMjAxNiAxMzoyMyBaJylcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICA7XG5cbiAgRGF0ZVRpbWUuZnJvbVJGQzI4MjIgPSBmdW5jdGlvbiBmcm9tUkZDMjgyMih0ZXh0LCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cblxuICAgIHZhciBfcGFyc2VSRkMyODIyRGF0ZSA9IHBhcnNlUkZDMjgyMkRhdGUodGV4dCksXG4gICAgICAgIHZhbHMgPSBfcGFyc2VSRkMyODIyRGF0ZVswXSxcbiAgICAgICAgcGFyc2VkWm9uZSA9IF9wYXJzZVJGQzI4MjJEYXRlWzFdO1xuXG4gICAgcmV0dXJuIHBhcnNlRGF0YVRvRGF0ZVRpbWUodmFscywgcGFyc2VkWm9uZSwgb3B0cywgXCJSRkMgMjgyMlwiLCB0ZXh0KTtcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhbiBIVFRQIGhlYWRlciBkYXRlXG4gICAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1Byb3RvY29scy9yZmMyNjE2L3JmYzI2MTYtc2VjMy5odG1sI3NlYzMuMy4xXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIEhUVFAgaGVhZGVyIGRhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRvIGFmZmVjdCB0aGUgY3JlYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdHMuem9uZT0nbG9jYWwnXSAtIGNvbnZlcnQgdGhlIHRpbWUgdG8gdGhpcyB6b25lLiBTaW5jZSBIVFRQIGRhdGVzIGFyZSBhbHdheXMgaW4gVVRDLCB0aGlzIGhhcyBubyBlZmZlY3Qgb24gdGhlIGludGVycHJldGF0aW9uIG9mIHN0cmluZywgbWVyZWx5IHRoZSB6b25lIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaXMgZXhwcmVzc2VkIGluLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnNldFpvbmU9ZmFsc2VdIC0gb3ZlcnJpZGUgdGhlIHpvbmUgd2l0aCB0aGUgZml4ZWQtb2Zmc2V0IHpvbmUgc3BlY2lmaWVkIGluIHRoZSBzdHJpbmcuIEZvciBIVFRQIGRhdGVzLCB0aGlzIGlzIGFsd2F5cyBVVEMsIHNvIHRoaXMgb3B0aW9uIGlzIGVxdWl2YWxlbnQgdG8gc2V0dGluZyB0aGUgYHpvbmVgIG9wdGlvbiB0byAndXRjJywgYnV0IHRoaXMgb3B0aW9uIGlzIGluY2x1ZGVkIGZvciBjb25zaXN0ZW5jeSB3aXRoIHNpbWlsYXIgbWV0aG9kcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nc3lzdGVtJ3MgbG9jYWxlJ10gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUhUVFAoJ1N1biwgMDYgTm92IDE5OTQgMDg6NDk6MzcgR01UJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUhUVFAoJ1N1bmRheSwgMDYtTm92LTk0IDA4OjQ5OjM3IEdNVCcpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21IVFRQKCdTdW4gTm92ICA2IDA4OjQ5OjM3IDE5OTQnKVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIDtcblxuICBEYXRlVGltZS5mcm9tSFRUUCA9IGZ1bmN0aW9uIGZyb21IVFRQKHRleHQsIG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuXG4gICAgdmFyIF9wYXJzZUhUVFBEYXRlID0gcGFyc2VIVFRQRGF0ZSh0ZXh0KSxcbiAgICAgICAgdmFscyA9IF9wYXJzZUhUVFBEYXRlWzBdLFxuICAgICAgICBwYXJzZWRab25lID0gX3BhcnNlSFRUUERhdGVbMV07XG5cbiAgICByZXR1cm4gcGFyc2VEYXRhVG9EYXRlVGltZSh2YWxzLCBwYXJzZWRab25lLCBvcHRzLCBcIkhUVFBcIiwgb3B0cyk7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYW4gaW5wdXQgc3RyaW5nIGFuZCBmb3JtYXQgc3RyaW5nLlxuICAgKiBEZWZhdWx0cyB0byBlbi1VUyBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkLCByZWdhcmRsZXNzIG9mIHRoZSBzeXN0ZW0ncyBsb2NhbGUuXG4gICAqIEBzZWUgaHR0cHM6Ly9tb21lbnQuZ2l0aHViLmlvL2x1eG9uL2RvY3MvbWFudWFsL3BhcnNpbmcuaHRtbCN0YWJsZS1vZi10b2tlbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgc3RyaW5nIHRvIHBhcnNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmbXQgLSB0aGUgZm9ybWF0IHRoZSBzdHJpbmcgaXMgZXhwZWN0ZWQgdG8gYmUgaW4gKHNlZSB0aGUgbGluayBiZWxvdyBmb3IgdGhlIGZvcm1hdHMpXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0byBhZmZlY3QgdGhlIGNyZWF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRzLnpvbmU9J2xvY2FsJ10gLSB1c2UgdGhpcyB6b25lIGlmIG5vIG9mZnNldCBpcyBzcGVjaWZpZWQgaW4gdGhlIGlucHV0IHN0cmluZyBpdHNlbGYuIFdpbGwgYWxzbyBjb252ZXJ0IHRoZSBEYXRlVGltZSB0byB0aGlzIHpvbmVcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zZXRab25lPWZhbHNlXSAtIG92ZXJyaWRlIHRoZSB6b25lIHdpdGggYSB6b25lIHNwZWNpZmllZCBpbiB0aGUgc3RyaW5nIGl0c2VsZiwgaWYgaXQgc3BlY2lmaWVzIG9uZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdlbi1VUyddIC0gYSBsb2NhbGUgc3RyaW5nIHRvIHVzZSB3aGVuIHBhcnNpbmcuIFdpbGwgYWxzbyBzZXQgdGhlIERhdGVUaW1lIHRvIHRoaXMgbG9jYWxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZSB3aGVuIHBhcnNpbmcuIFdpbGwgYWxzbyBzZXQgdGhlIHJlc3VsdGluZyBEYXRlVGltZSB0byB0aGlzIG51bWJlcmluZyBzeXN0ZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgO1xuXG4gIERhdGVUaW1lLmZyb21Gb3JtYXQgPSBmdW5jdGlvbiBmcm9tRm9ybWF0KHRleHQsIGZtdCwgb3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoaXNVbmRlZmluZWQodGV4dCkgfHwgaXNVbmRlZmluZWQoZm10KSkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFwiZnJvbUZvcm1hdCByZXF1aXJlcyBhbiBpbnB1dCBzdHJpbmcgYW5kIGEgZm9ybWF0XCIpO1xuICAgIH1cblxuICAgIHZhciBfb3B0cyA9IG9wdHMsXG4gICAgICAgIF9vcHRzJGxvY2FsZSA9IF9vcHRzLmxvY2FsZSxcbiAgICAgICAgbG9jYWxlID0gX29wdHMkbG9jYWxlID09PSB2b2lkIDAgPyBudWxsIDogX29wdHMkbG9jYWxlLFxuICAgICAgICBfb3B0cyRudW1iZXJpbmdTeXN0ZW0gPSBfb3B0cy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbSA9IF9vcHRzJG51bWJlcmluZ1N5c3RlbSA9PT0gdm9pZCAwID8gbnVsbCA6IF9vcHRzJG51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgbG9jYWxlVG9Vc2UgPSBMb2NhbGUuZnJvbU9wdHMoe1xuICAgICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgICBudW1iZXJpbmdTeXN0ZW06IG51bWJlcmluZ1N5c3RlbSxcbiAgICAgIGRlZmF1bHRUb0VOOiB0cnVlXG4gICAgfSksXG4gICAgICAgIF9wYXJzZUZyb21Ub2tlbnMgPSBwYXJzZUZyb21Ub2tlbnMobG9jYWxlVG9Vc2UsIHRleHQsIGZtdCksXG4gICAgICAgIHZhbHMgPSBfcGFyc2VGcm9tVG9rZW5zWzBdLFxuICAgICAgICBwYXJzZWRab25lID0gX3BhcnNlRnJvbVRva2Vuc1sxXSxcbiAgICAgICAgaW52YWxpZCA9IF9wYXJzZUZyb21Ub2tlbnNbMl07XG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoaW52YWxpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwYXJzZURhdGFUb0RhdGVUaW1lKHZhbHMsIHBhcnNlZFpvbmUsIG9wdHMsIFwiZm9ybWF0IFwiICsgZm10LCB0ZXh0KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHVzZSBmcm9tRm9ybWF0IGluc3RlYWRcbiAgICovXG4gIDtcblxuICBEYXRlVGltZS5mcm9tU3RyaW5nID0gZnVuY3Rpb24gZnJvbVN0cmluZyh0ZXh0LCBmbXQsIG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuXG4gICAgcmV0dXJuIERhdGVUaW1lLmZyb21Gb3JtYXQodGV4dCwgZm10LCBvcHRzKTtcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhIFNRTCBkYXRlLCB0aW1lLCBvciBkYXRldGltZVxuICAgKiBEZWZhdWx0cyB0byBlbi1VUyBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkLCByZWdhcmRsZXNzIG9mIHRoZSBzeXN0ZW0ncyBsb2NhbGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgc3RyaW5nIHRvIHBhcnNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0byBhZmZlY3QgdGhlIGNyZWF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRzLnpvbmU9J2xvY2FsJ10gLSB1c2UgdGhpcyB6b25lIGlmIG5vIG9mZnNldCBpcyBzcGVjaWZpZWQgaW4gdGhlIGlucHV0IHN0cmluZyBpdHNlbGYuIFdpbGwgYWxzbyBjb252ZXJ0IHRoZSBEYXRlVGltZSB0byB0aGlzIHpvbmVcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zZXRab25lPWZhbHNlXSAtIG92ZXJyaWRlIHRoZSB6b25lIHdpdGggYSB6b25lIHNwZWNpZmllZCBpbiB0aGUgc3RyaW5nIGl0c2VsZiwgaWYgaXQgc3BlY2lmaWVzIG9uZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdlbi1VUyddIC0gYSBsb2NhbGUgc3RyaW5nIHRvIHVzZSB3aGVuIHBhcnNpbmcuIFdpbGwgYWxzbyBzZXQgdGhlIERhdGVUaW1lIHRvIHRoaXMgbG9jYWxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZSB3aGVuIHBhcnNpbmcuIFdpbGwgYWxzbyBzZXQgdGhlIHJlc3VsdGluZyBEYXRlVGltZSB0byB0aGlzIG51bWJlcmluZyBzeXN0ZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0JylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNSAwOToxMjozNC4zNDInKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0LjM0MiswNjowMCcpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUgMDk6MTI6MzQuMzQyIEFtZXJpY2EvTG9zX0FuZ2VsZXMnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0LjM0MiBBbWVyaWNhL0xvc19BbmdlbGVzJywgeyBzZXRab25lOiB0cnVlIH0pXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUgMDk6MTI6MzQuMzQyJywgeyB6b25lOiAnQW1lcmljYS9Mb3NfQW5nZWxlcycgfSlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMDk6MTI6MzQuMzQyJylcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICA7XG5cbiAgRGF0ZVRpbWUuZnJvbVNRTCA9IGZ1bmN0aW9uIGZyb21TUUwodGV4dCwgb3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgX3BhcnNlU1FMID0gcGFyc2VTUUwodGV4dCksXG4gICAgICAgIHZhbHMgPSBfcGFyc2VTUUxbMF0sXG4gICAgICAgIHBhcnNlZFpvbmUgPSBfcGFyc2VTUUxbMV07XG5cbiAgICByZXR1cm4gcGFyc2VEYXRhVG9EYXRlVGltZSh2YWxzLCBwYXJzZWRab25lLCBvcHRzLCBcIlNRTFwiLCB0ZXh0KTtcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIGFuIGludmFsaWQgRGF0ZVRpbWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWFzb24gLSBzaW1wbGUgc3RyaW5nIG9mIHdoeSB0aGlzIERhdGVUaW1lIGlzIGludmFsaWQuIFNob3VsZCBub3QgY29udGFpbiBwYXJhbWV0ZXJzIG9yIGFueXRoaW5nIGVsc2UgZGF0YS1kZXBlbmRlbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtleHBsYW5hdGlvbj1udWxsXSAtIGxvbmdlciBleHBsYW5hdGlvbiwgbWF5IGluY2x1ZGUgcGFyYW1ldGVycyBhbmQgb3RoZXIgdXNlZnVsIGRlYnVnZ2luZyBpbmZvcm1hdGlvblxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIDtcblxuICBEYXRlVGltZS5pbnZhbGlkID0gZnVuY3Rpb24gaW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uKSB7XG4gICAgaWYgKGV4cGxhbmF0aW9uID09PSB2b2lkIDApIHtcbiAgICAgIGV4cGxhbmF0aW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoIXJlYXNvbikge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFwibmVlZCB0byBzcGVjaWZ5IGEgcmVhc29uIHRoZSBEYXRlVGltZSBpcyBpbnZhbGlkXCIpO1xuICAgIH1cblxuICAgIHZhciBpbnZhbGlkID0gcmVhc29uIGluc3RhbmNlb2YgSW52YWxpZCA/IHJlYXNvbiA6IG5ldyBJbnZhbGlkKHJlYXNvbiwgZXhwbGFuYXRpb24pO1xuXG4gICAgaWYgKFNldHRpbmdzLnRocm93T25JbnZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZERhdGVUaW1lRXJyb3IoaW52YWxpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZVRpbWUoe1xuICAgICAgICBpbnZhbGlkOiBpbnZhbGlkXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuIG9iamVjdCBpcyBhIERhdGVUaW1lLiBXb3JrcyBhY3Jvc3MgY29udGV4dCBib3VuZGFyaWVzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICA7XG5cbiAgRGF0ZVRpbWUuaXNEYXRlVGltZSA9IGZ1bmN0aW9uIGlzRGF0ZVRpbWUobykge1xuICAgIHJldHVybiBvICYmIG8uaXNMdXhvbkRhdGVUaW1lIHx8IGZhbHNlO1xuICB9IC8vIElORk9cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvZiB1bml0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIGEgdW5pdCBzdWNoIGFzICdtaW51dGUnIG9yICdkYXknXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDcsIDQpLmdldCgnbW9udGgnKTsgLy89PiA3XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDcsIDQpLmdldCgnZGF5Jyk7IC8vPT4gNFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICA7XG5cbiAgdmFyIF9wcm90byA9IERhdGVUaW1lLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZ2V0ID0gZnVuY3Rpb24gZ2V0KHVuaXQpIHtcbiAgICByZXR1cm4gdGhpc1t1bml0XTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBEYXRlVGltZSBpcyB2YWxpZC4gSW52YWxpZCBEYXRlVGltZXMgb2NjdXIgd2hlbjpcbiAgICogKiBUaGUgRGF0ZVRpbWUgd2FzIGNyZWF0ZWQgZnJvbSBpbnZhbGlkIGNhbGVuZGFyIGluZm9ybWF0aW9uLCBzdWNoIGFzIHRoZSAxM3RoIG1vbnRoIG9yIEZlYnJ1YXJ5IDMwXG4gICAqICogVGhlIERhdGVUaW1lIHdhcyBjcmVhdGVkIGJ5IGFuIG9wZXJhdGlvbiBvbiBhbm90aGVyIGludmFsaWQgZGF0ZVxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIDtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcmVzb2x2ZWQgSW50bCBvcHRpb25zIGZvciB0aGlzIERhdGVUaW1lLlxuICAgKiBUaGlzIGlzIHVzZWZ1bCBpbiB1bmRlcnN0YW5kaW5nIHRoZSBiZWhhdmlvciBvZiBmb3JtYXR0aW5nIG1ldGhvZHNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSB0aGUgc2FtZSBvcHRpb25zIGFzIHRvTG9jYWxlU3RyaW5nXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIF9wcm90by5yZXNvbHZlZExvY2FsZU9wdHMgPSBmdW5jdGlvbiByZXNvbHZlZExvY2FsZU9wdHMob3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgX0Zvcm1hdHRlciRjcmVhdGUkcmVzID0gRm9ybWF0dGVyLmNyZWF0ZSh0aGlzLmxvYy5jbG9uZShvcHRzKSwgb3B0cykucmVzb2x2ZWRPcHRpb25zKHRoaXMpLFxuICAgICAgICBsb2NhbGUgPSBfRm9ybWF0dGVyJGNyZWF0ZSRyZXMubG9jYWxlLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW0gPSBfRm9ybWF0dGVyJGNyZWF0ZSRyZXMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICBjYWxlbmRhciA9IF9Gb3JtYXR0ZXIkY3JlYXRlJHJlcy5jYWxlbmRhcjtcblxuICAgIHJldHVybiB7XG4gICAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICAgIG51bWJlcmluZ1N5c3RlbTogbnVtYmVyaW5nU3lzdGVtLFxuICAgICAgb3V0cHV0Q2FsZW5kYXI6IGNhbGVuZGFyXG4gICAgfTtcbiAgfSAvLyBUUkFOU0ZPUk1cblxuICAvKipcbiAgICogXCJTZXRcIiB0aGUgRGF0ZVRpbWUncyB6b25lIHRvIFVUQy4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIERhdGVUaW1lLlxuICAgKlxuICAgKiBFcXVpdmFsZW50IHRvIHtAbGluayBzZXRab25lfSgndXRjJylcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtvZmZzZXQ9MF0gLSBvcHRpb25hbGx5LCBhbiBvZmZzZXQgZnJvbSBVVEMgaW4gbWludXRlc1xuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHM9e31dIC0gb3B0aW9ucyB0byBwYXNzIHRvIGBzZXRab25lKClgXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b1VUQyA9IGZ1bmN0aW9uIHRvVVRDKG9mZnNldCwgb3B0cykge1xuICAgIGlmIChvZmZzZXQgPT09IHZvaWQgMCkge1xuICAgICAgb2Zmc2V0ID0gMDtcbiAgICB9XG5cbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2V0Wm9uZShGaXhlZE9mZnNldFpvbmUuaW5zdGFuY2Uob2Zmc2V0KSwgb3B0cyk7XG4gIH1cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIERhdGVUaW1lJ3Mgem9uZSB0byB0aGUgaG9zdCdzIGxvY2FsIHpvbmUuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEYXRlVGltZS5cbiAgICpcbiAgICogRXF1aXZhbGVudCB0byBgc2V0Wm9uZSgnbG9jYWwnKWBcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvTG9jYWwgPSBmdW5jdGlvbiB0b0xvY2FsKCkge1xuICAgIHJldHVybiB0aGlzLnNldFpvbmUoU2V0dGluZ3MuZGVmYXVsdFpvbmUpO1xuICB9XG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSBEYXRlVGltZSdzIHpvbmUgdG8gc3BlY2lmaWVkIHpvbmUuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEYXRlVGltZS5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgdGhlIHNldHRlciBrZWVwcyB0aGUgdW5kZXJseWluZyB0aW1lIHRoZSBzYW1lIChhcyBpbiwgdGhlIHNhbWUgdGltZXN0YW1wKSwgYnV0IHRoZSBuZXcgaW5zdGFuY2Ugd2lsbCByZXBvcnQgZGlmZmVyZW50IGxvY2FsIHRpbWVzIGFuZCBjb25zaWRlciBEU1RzIHdoZW4gbWFraW5nIGNvbXB1dGF0aW9ucywgYXMgd2l0aCB7QGxpbmsgcGx1c30uIFlvdSBtYXkgd2lzaCB0byB1c2Uge0BsaW5rIHRvTG9jYWx9IGFuZCB7QGxpbmsgdG9VVEN9IHdoaWNoIHByb3ZpZGUgc2ltcGxlIGNvbnZlbmllbmNlIHdyYXBwZXJzIGZvciBjb21tb25seSB1c2VkIHpvbmVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbem9uZT0nbG9jYWwnXSAtIGEgem9uZSBpZGVudGlmaWVyLiBBcyBhIHN0cmluZywgdGhhdCBjYW4gYmUgYW55IElBTkEgem9uZSBzdXBwb3J0ZWQgYnkgdGhlIGhvc3QgZW52aXJvbm1lbnQsIG9yIGEgZml4ZWQtb2Zmc2V0IG5hbWUgb2YgdGhlIGZvcm0gJ1VUQyszJywgb3IgdGhlIHN0cmluZ3MgJ2xvY2FsJyBvciAndXRjJy4gWW91IG1heSBhbHNvIHN1cHBseSBhbiBpbnN0YW5jZSBvZiBhIHtAbGluayBab25lfSBjbGFzcy5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMua2VlcExvY2FsVGltZT1mYWxzZV0gLSBJZiB0cnVlLCBhZGp1c3QgdGhlIHVuZGVybHlpbmcgdGltZSBzbyB0aGF0IHRoZSBsb2NhbCB0aW1lIHN0YXlzIHRoZSBzYW1lLCBidXQgaW4gdGhlIHRhcmdldCB6b25lLiBZb3Ugc2hvdWxkIHJhcmVseSBuZWVkIHRoaXMuXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5zZXRab25lID0gZnVuY3Rpb24gc2V0Wm9uZSh6b25lLCBfdGVtcCkge1xuICAgIHZhciBfcmVmMyA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgICBfcmVmMyRrZWVwTG9jYWxUaW1lID0gX3JlZjMua2VlcExvY2FsVGltZSxcbiAgICAgICAga2VlcExvY2FsVGltZSA9IF9yZWYzJGtlZXBMb2NhbFRpbWUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjMka2VlcExvY2FsVGltZSxcbiAgICAgICAgX3JlZjMka2VlcENhbGVuZGFyVGltID0gX3JlZjMua2VlcENhbGVuZGFyVGltZSxcbiAgICAgICAga2VlcENhbGVuZGFyVGltZSA9IF9yZWYzJGtlZXBDYWxlbmRhclRpbSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmMyRrZWVwQ2FsZW5kYXJUaW07XG5cbiAgICB6b25lID0gbm9ybWFsaXplWm9uZSh6b25lLCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSk7XG5cbiAgICBpZiAoem9uZS5lcXVhbHModGhpcy56b25lKSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIGlmICghem9uZS5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZCh1bnN1cHBvcnRlZFpvbmUoem9uZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbmV3VFMgPSB0aGlzLnRzO1xuXG4gICAgICBpZiAoa2VlcExvY2FsVGltZSB8fCBrZWVwQ2FsZW5kYXJUaW1lKSB7XG4gICAgICAgIHZhciBvZmZzZXRHdWVzcyA9IHpvbmUub2Zmc2V0KHRoaXMudHMpO1xuICAgICAgICB2YXIgYXNPYmogPSB0aGlzLnRvT2JqZWN0KCk7XG5cbiAgICAgICAgdmFyIF9vYmpUb1RTMyA9IG9ialRvVFMoYXNPYmosIG9mZnNldEd1ZXNzLCB6b25lKTtcblxuICAgICAgICBuZXdUUyA9IF9vYmpUb1RTM1swXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNsb25lJDEodGhpcywge1xuICAgICAgICB0czogbmV3VFMsXG4gICAgICAgIHpvbmU6IHpvbmVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogXCJTZXRcIiB0aGUgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG9yIG91dHB1dENhbGVuZGFyLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzIC0gdGhlIHByb3BlcnRpZXMgdG8gc2V0XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS5yZWNvbmZpZ3VyZSh7IGxvY2FsZTogJ2VuLUdCJyB9KVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucmVjb25maWd1cmUgPSBmdW5jdGlvbiByZWNvbmZpZ3VyZShfdGVtcDIpIHtcbiAgICB2YXIgX3JlZjQgPSBfdGVtcDIgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAyLFxuICAgICAgICBsb2NhbGUgPSBfcmVmNC5sb2NhbGUsXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbSA9IF9yZWY0Lm51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgb3V0cHV0Q2FsZW5kYXIgPSBfcmVmNC5vdXRwdXRDYWxlbmRhcjtcblxuICAgIHZhciBsb2MgPSB0aGlzLmxvYy5jbG9uZSh7XG4gICAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICAgIG51bWJlcmluZ1N5c3RlbTogbnVtYmVyaW5nU3lzdGVtLFxuICAgICAgb3V0cHV0Q2FsZW5kYXI6IG91dHB1dENhbGVuZGFyXG4gICAgfSk7XG4gICAgcmV0dXJuIGNsb25lJDEodGhpcywge1xuICAgICAgbG9jOiBsb2NcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogXCJTZXRcIiB0aGUgbG9jYWxlLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuXG4gICAqIEp1c3QgYSBjb252ZW5pZW50IGFsaWFzIGZvciByZWNvbmZpZ3VyZSh7IGxvY2FsZSB9KVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkuc2V0TG9jYWxlKCdlbi1HQicpXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5zZXRMb2NhbGUgPSBmdW5jdGlvbiBzZXRMb2NhbGUobG9jYWxlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVjb25maWd1cmUoe1xuICAgICAgbG9jYWxlOiBsb2NhbGVcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogXCJTZXRcIiB0aGUgdmFsdWVzIG9mIHNwZWNpZmllZCB1bml0cy4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIERhdGVUaW1lLlxuICAgKiBZb3UgY2FuIG9ubHkgc2V0IHVuaXRzIHdpdGggdGhpcyBtZXRob2Q7IGZvciBcInNldHRpbmdcIiBtZXRhZGF0YSwgc2VlIHtAbGluayByZWNvbmZpZ3VyZX0gYW5kIHtAbGluayBzZXRab25lfS5cbiAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcyAtIGEgbWFwcGluZyBvZiB1bml0cyB0byBudW1iZXJzXG4gICAqIEBleGFtcGxlIGR0LnNldCh7IHllYXI6IDIwMTcgfSlcbiAgICogQGV4YW1wbGUgZHQuc2V0KHsgaG91cjogOCwgbWludXRlOiAzMCB9KVxuICAgKiBAZXhhbXBsZSBkdC5zZXQoeyB3ZWVrZGF5OiA1IH0pXG4gICAqIEBleGFtcGxlIGR0LnNldCh7IHllYXI6IDIwMDUsIG9yZGluYWw6IDIzNCB9KVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uc2V0ID0gZnVuY3Rpb24gc2V0KHZhbHVlcykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICB2YXIgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZU9iamVjdCh2YWx1ZXMsIG5vcm1hbGl6ZVVuaXQsIFtdKSxcbiAgICAgICAgc2V0dGluZ1dlZWtTdHVmZiA9ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLndlZWtZZWFyKSB8fCAhaXNVbmRlZmluZWQobm9ybWFsaXplZC53ZWVrTnVtYmVyKSB8fCAhaXNVbmRlZmluZWQobm9ybWFsaXplZC53ZWVrZGF5KTtcbiAgICB2YXIgbWl4ZWQ7XG5cbiAgICBpZiAoc2V0dGluZ1dlZWtTdHVmZikge1xuICAgICAgbWl4ZWQgPSB3ZWVrVG9HcmVnb3JpYW4oT2JqZWN0LmFzc2lnbihncmVnb3JpYW5Ub1dlZWsodGhpcy5jKSwgbm9ybWFsaXplZCkpO1xuICAgIH0gZWxzZSBpZiAoIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQub3JkaW5hbCkpIHtcbiAgICAgIG1peGVkID0gb3JkaW5hbFRvR3JlZ29yaWFuKE9iamVjdC5hc3NpZ24oZ3JlZ29yaWFuVG9PcmRpbmFsKHRoaXMuYyksIG5vcm1hbGl6ZWQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWl4ZWQgPSBPYmplY3QuYXNzaWduKHRoaXMudG9PYmplY3QoKSwgbm9ybWFsaXplZCk7IC8vIGlmIHdlIGRpZG4ndCBzZXQgdGhlIGRheSBidXQgd2UgZW5kZWQgdXAgb24gYW4gb3ZlcmZsb3cgZGF0ZSxcbiAgICAgIC8vIHVzZSB0aGUgbGFzdCBkYXkgb2YgdGhlIHJpZ2h0IG1vbnRoXG5cbiAgICAgIGlmIChpc1VuZGVmaW5lZChub3JtYWxpemVkLmRheSkpIHtcbiAgICAgICAgbWl4ZWQuZGF5ID0gTWF0aC5taW4oZGF5c0luTW9udGgobWl4ZWQueWVhciwgbWl4ZWQubW9udGgpLCBtaXhlZC5kYXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBfb2JqVG9UUzQgPSBvYmpUb1RTKG1peGVkLCB0aGlzLm8sIHRoaXMuem9uZSksXG4gICAgICAgIHRzID0gX29ialRvVFM0WzBdLFxuICAgICAgICBvID0gX29ialRvVFM0WzFdO1xuXG4gICAgcmV0dXJuIGNsb25lJDEodGhpcywge1xuICAgICAgdHM6IHRzLFxuICAgICAgbzogb1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBBZGQgYSBwZXJpb2Qgb2YgdGltZSB0byB0aGlzIERhdGVUaW1lIGFuZCByZXR1cm4gdGhlIHJlc3VsdGluZyBEYXRlVGltZVxuICAgKlxuICAgKiBBZGRpbmcgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIG9yIG1pbGxpc2Vjb25kcyBpbmNyZWFzZXMgdGhlIHRpbWVzdGFtcCBieSB0aGUgcmlnaHQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcy4gQWRkaW5nIGRheXMsIG1vbnRocywgb3IgeWVhcnMgc2hpZnRzIHRoZSBjYWxlbmRhciwgYWNjb3VudGluZyBmb3IgRFNUcyBhbmQgbGVhcCB5ZWFycyBhbG9uZyB0aGUgd2F5LiBUaHVzLCBgZHQucGx1cyh7IGhvdXJzOiAyNCB9KWAgbWF5IHJlc3VsdCBpbiBhIGRpZmZlcmVudCB0aW1lIHRoYW4gYGR0LnBsdXMoeyBkYXlzOiAxIH0pYCBpZiB0aGVyZSdzIGEgRFNUIHNoaWZ0IGluIGJldHdlZW4uXG4gICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSBUaGUgYW1vdW50IHRvIGFkZC4gRWl0aGVyIGEgTHV4b24gRHVyYXRpb24sIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgdGhlIG9iamVjdCBhcmd1bWVudCB0byBEdXJhdGlvbi5mcm9tT2JqZWN0KClcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS5wbHVzKDEyMykgLy9+PiBpbiAxMjMgbWlsbGlzZWNvbmRzXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkucGx1cyh7IG1pbnV0ZXM6IDE1IH0pIC8vfj4gaW4gMTUgbWludXRlc1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnBsdXMoeyBkYXlzOiAxIH0pIC8vfj4gdGhpcyB0aW1lIHRvbW9ycm93XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkucGx1cyh7IGRheXM6IC0xIH0pIC8vfj4gdGhpcyB0aW1lIHllc3RlcmRheVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnBsdXMoeyBob3VyczogMywgbWludXRlczogMTMgfSkgLy9+PiBpbiAzIGhyLCAxMyBtaW5cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS5wbHVzKER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMywgbWludXRlczogMTMgfSkpIC8vfj4gaW4gMyBociwgMTMgbWluXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5wbHVzID0gZnVuY3Rpb24gcGx1cyhkdXJhdGlvbikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICB2YXIgZHVyID0gZnJpZW5kbHlEdXJhdGlvbihkdXJhdGlvbik7XG4gICAgcmV0dXJuIGNsb25lJDEodGhpcywgYWRqdXN0VGltZSh0aGlzLCBkdXIpKTtcbiAgfVxuICAvKipcbiAgICogU3VidHJhY3QgYSBwZXJpb2Qgb2YgdGltZSB0byB0aGlzIERhdGVUaW1lIGFuZCByZXR1cm4gdGhlIHJlc3VsdGluZyBEYXRlVGltZVxuICAgKiBTZWUge0BsaW5rIHBsdXN9XG4gICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSBUaGUgYW1vdW50IHRvIHN1YnRyYWN0LiBFaXRoZXIgYSBMdXhvbiBEdXJhdGlvbiwgYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLCB0aGUgb2JqZWN0IGFyZ3VtZW50IHRvIER1cmF0aW9uLmZyb21PYmplY3QoKVxuICAgQHJldHVybiB7RGF0ZVRpbWV9XG4gICovXG4gIDtcblxuICBfcHJvdG8ubWludXMgPSBmdW5jdGlvbiBtaW51cyhkdXJhdGlvbikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICB2YXIgZHVyID0gZnJpZW5kbHlEdXJhdGlvbihkdXJhdGlvbikubmVnYXRlKCk7XG4gICAgcmV0dXJuIGNsb25lJDEodGhpcywgYWRqdXN0VGltZSh0aGlzLCBkdXIpKTtcbiAgfVxuICAvKipcbiAgICogXCJTZXRcIiB0aGlzIERhdGVUaW1lIHRvIHRoZSBiZWdpbm5pbmcgb2YgYSB1bml0IG9mIHRpbWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gVGhlIHVuaXQgdG8gZ28gdG8gdGhlIGJlZ2lubmluZyBvZi4gQ2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJywgb3IgJ21pbGxpc2Vjb25kJy5cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuc3RhcnRPZignbW9udGgnKS50b0lTT0RhdGUoKTsgLy89PiAnMjAxNC0wMy0wMSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuc3RhcnRPZigneWVhcicpLnRvSVNPRGF0ZSgpOyAvLz0+ICcyMDE0LTAxLTAxJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzLCA1LCAzMCkuc3RhcnRPZignZGF5JykudG9JU09UaW1lKCk7IC8vPT4gJzAwOjAwLjAwMC0wNTowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMywgNSwgMzApLnN0YXJ0T2YoJ2hvdXInKS50b0lTT1RpbWUoKTsgLy89PiAnMDU6MDA6MDAuMDAwLTA1OjAwJ1xuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uc3RhcnRPZiA9IGZ1bmN0aW9uIHN0YXJ0T2YodW5pdCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICB2YXIgbyA9IHt9LFxuICAgICAgICBub3JtYWxpemVkVW5pdCA9IER1cmF0aW9uLm5vcm1hbGl6ZVVuaXQodW5pdCk7XG5cbiAgICBzd2l0Y2ggKG5vcm1hbGl6ZWRVbml0KSB7XG4gICAgICBjYXNlIFwieWVhcnNcIjpcbiAgICAgICAgby5tb250aCA9IDE7XG4gICAgICAvLyBmYWxscyB0aHJvdWdoXG5cbiAgICAgIGNhc2UgXCJxdWFydGVyc1wiOlxuICAgICAgY2FzZSBcIm1vbnRoc1wiOlxuICAgICAgICBvLmRheSA9IDE7XG4gICAgICAvLyBmYWxscyB0aHJvdWdoXG5cbiAgICAgIGNhc2UgXCJ3ZWVrc1wiOlxuICAgICAgY2FzZSBcImRheXNcIjpcbiAgICAgICAgby5ob3VyID0gMDtcbiAgICAgIC8vIGZhbGxzIHRocm91Z2hcblxuICAgICAgY2FzZSBcImhvdXJzXCI6XG4gICAgICAgIG8ubWludXRlID0gMDtcbiAgICAgIC8vIGZhbGxzIHRocm91Z2hcblxuICAgICAgY2FzZSBcIm1pbnV0ZXNcIjpcbiAgICAgICAgby5zZWNvbmQgPSAwO1xuICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuXG4gICAgICBjYXNlIFwic2Vjb25kc1wiOlxuICAgICAgICBvLm1pbGxpc2Vjb25kID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBubyBkZWZhdWx0LCBpbnZhbGlkIHVuaXRzIHRocm93IGluIG5vcm1hbGl6ZVVuaXQoKVxuICAgIH1cblxuICAgIGlmIChub3JtYWxpemVkVW5pdCA9PT0gXCJ3ZWVrc1wiKSB7XG4gICAgICBvLndlZWtkYXkgPSAxO1xuICAgIH1cblxuICAgIGlmIChub3JtYWxpemVkVW5pdCA9PT0gXCJxdWFydGVyc1wiKSB7XG4gICAgICB2YXIgcSA9IE1hdGguY2VpbCh0aGlzLm1vbnRoIC8gMyk7XG4gICAgICBvLm1vbnRoID0gKHEgLSAxKSAqIDMgKyAxO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnNldChvKTtcbiAgfVxuICAvKipcbiAgICogXCJTZXRcIiB0aGlzIERhdGVUaW1lIHRvIHRoZSBlbmQgKG1lYW5pbmcgdGhlIGxhc3QgbWlsbGlzZWNvbmQpIG9mIGEgdW5pdCBvZiB0aW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gVGhlIHVuaXQgdG8gZ28gdG8gdGhlIGVuZCBvZi4gQ2FuIGJlICd5ZWFyJywgJ21vbnRoJywgJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLCBvciAnbWlsbGlzZWNvbmQnLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzKS5lbmRPZignbW9udGgnKS50b0lTTygpOyAvLz0+ICcyMDE0LTAzLTMxVDIzOjU5OjU5Ljk5OS0wNTowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuZW5kT2YoJ3llYXInKS50b0lTTygpOyAvLz0+ICcyMDE0LTEyLTMxVDIzOjU5OjU5Ljk5OS0wNTowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMywgNSwgMzApLmVuZE9mKCdkYXknKS50b0lTTygpOyAvLz0+ICcyMDE0LTAzLTAzVDIzOjU5OjU5Ljk5OS0wNTowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMywgNSwgMzApLmVuZE9mKCdob3VyJykudG9JU08oKTsgLy89PiAnMjAxNC0wMy0wM1QwNTo1OTo1OS45OTktMDU6MDAnXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5lbmRPZiA9IGZ1bmN0aW9uIGVuZE9mKHVuaXQpIHtcbiAgICB2YXIgX3RoaXMkcGx1cztcblxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnBsdXMoKF90aGlzJHBsdXMgPSB7fSwgX3RoaXMkcGx1c1t1bml0XSA9IDEsIF90aGlzJHBsdXMpKS5zdGFydE9mKHVuaXQpLm1pbnVzKDEpIDogdGhpcztcbiAgfSAvLyBPVVRQVVRcblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGZvcm1hdHRlZCBhY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmllZCBmb3JtYXQgc3RyaW5nLlxuICAgKiAqKllvdSBtYXkgbm90IHdhbnQgdGhpcy4qKiBTZWUge0BsaW5rIHRvTG9jYWxlU3RyaW5nfSBmb3IgYSBtb3JlIGZsZXhpYmxlIGZvcm1hdHRpbmcgdG9vbC4gRm9yIGEgdGFibGUgb2YgdG9rZW5zIGFuZCB0aGVpciBpbnRlcnByZXRhdGlvbnMsIHNlZSBbaGVyZV0oaHR0cHM6Ly9tb21lbnQuZ2l0aHViLmlvL2x1eG9uL2RvY3MvbWFudWFsL2Zvcm1hdHRpbmcuaHRtbCN0YWJsZS1vZi10b2tlbnMpLlxuICAgKiBEZWZhdWx0cyB0byBlbi1VUyBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkLCByZWdhcmRsZXNzIG9mIHRoZSBzeXN0ZW0ncyBsb2NhbGUuXG4gICAqIEBzZWUgaHR0cHM6Ly9tb21lbnQuZ2l0aHViLmlvL2x1eG9uL2RvY3MvbWFudWFsL2Zvcm1hdHRpbmcuaHRtbCN0YWJsZS1vZi10b2tlbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZtdCAtIHRoZSBmb3JtYXQgc3RyaW5nXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0cyB0byBvdmVycmlkZSB0aGUgY29uZmlndXJhdGlvbiBvcHRpb25zXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkudG9Gb3JtYXQoJ3l5eXkgTExMIGRkJykgLy89PiAnMjAxNyBBcHIgMjInXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkuc2V0TG9jYWxlKCdmcicpLnRvRm9ybWF0KCd5eXl5IExMTCBkZCcpIC8vPT4gJzIwMTcgYXZyLiAyMidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS50b0Zvcm1hdCgneXl5eSBMTEwgZGQnLCB7IGxvY2FsZTogXCJmclwiIH0pIC8vPT4gJzIwMTcgYXZyLiAyMidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS50b0Zvcm1hdChcIkhIICdob3VycyBhbmQnIG1tICdtaW51dGVzJ1wiKSAvLz0+ICcyMCBob3VycyBhbmQgNTUgbWludXRlcydcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b0Zvcm1hdCA9IGZ1bmN0aW9uIHRvRm9ybWF0KGZtdCwgb3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gRm9ybWF0dGVyLmNyZWF0ZSh0aGlzLmxvYy5yZWRlZmF1bHRUb0VOKG9wdHMpKS5mb3JtYXREYXRlVGltZUZyb21TdHJpbmcodGhpcywgZm10KSA6IElOVkFMSUQkMjtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIGxvY2FsaXplZCBzdHJpbmcgcmVwcmVzZW50aW5nIHRoaXMgZGF0ZS4gQWNjZXB0cyB0aGUgc2FtZSBvcHRpb25zIGFzIHRoZSBJbnRsLkRhdGVUaW1lRm9ybWF0IGNvbnN0cnVjdG9yIGFuZCBhbnkgcHJlc2V0cyBkZWZpbmVkIGJ5IEx1eG9uLCBzdWNoIGFzIGBEYXRlVGltZS5EQVRFX0ZVTExgIG9yIGBEYXRlVGltZS5USU1FX1NJTVBMRWAuXG4gICAqIFRoZSBleGFjdCBiZWhhdmlvciBvZiB0aGlzIG1ldGhvZCBpcyBicm93c2VyLXNwZWNpZmljLCBidXQgaW4gZ2VuZXJhbCBpdCB3aWxsIHJldHVybiBhbiBhcHByb3ByaWF0ZSByZXByZXNlbnRhdGlvblxuICAgKiBvZiB0aGUgRGF0ZVRpbWUgaW4gdGhlIGFzc2lnbmVkIGxvY2FsZS5cbiAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZVRpbWVGb3JtYXRcbiAgICogQHBhcmFtIG9wdHMge09iamVjdH0gLSBJbnRsLkRhdGVUaW1lRm9ybWF0IGNvbnN0cnVjdG9yIG9wdGlvbnMgYW5kIGNvbmZpZ3VyYXRpb24gb3B0aW9uc1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnRvTG9jYWxlU3RyaW5nKCk7IC8vPT4gNC8yMC8yMDE3XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkuc2V0TG9jYWxlKCdlbi1nYicpLnRvTG9jYWxlU3RyaW5nKCk7IC8vPT4gJzIwLzA0LzIwMTcnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkudG9Mb2NhbGVTdHJpbmcoeyBsb2NhbGU6ICdlbi1nYicgfSk7IC8vPT4gJzIwLzA0LzIwMTcnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkudG9Mb2NhbGVTdHJpbmcoRGF0ZVRpbWUuREFURV9GVUxMKTsgLy89PiAnQXByaWwgMjAsIDIwMTcnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkudG9Mb2NhbGVTdHJpbmcoRGF0ZVRpbWUuVElNRV9TSU1QTEUpOyAvLz0+ICcxMTozMiBBTSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS50b0xvY2FsZVN0cmluZyhEYXRlVGltZS5EQVRFVElNRV9TSE9SVCk7IC8vPT4gJzQvMjAvMjAxNywgMTE6MzIgQU0nXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkudG9Mb2NhbGVTdHJpbmcoeyB3ZWVrZGF5OiAnbG9uZycsIG1vbnRoOiAnbG9uZycsIGRheTogJzItZGlnaXQnIH0pOyAvLz0+ICdUaHVyc2RheSwgQXByaWwgMjAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkudG9Mb2NhbGVTdHJpbmcoeyB3ZWVrZGF5OiAnc2hvcnQnLCBtb250aDogJ3Nob3J0JywgZGF5OiAnMi1kaWdpdCcsIGhvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCcgfSk7IC8vPT4gJ1RodSwgQXByIDIwLCAxMToyNyBBTSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS50b0xvY2FsZVN0cmluZyh7IGhvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCcsIGhvdXIxMjogZmFsc2UgfSk7IC8vPT4gJzExOjMyJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvTG9jYWxlU3RyaW5nID0gZnVuY3Rpb24gdG9Mb2NhbGVTdHJpbmcob3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSBEQVRFX1NIT1JUO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBGb3JtYXR0ZXIuY3JlYXRlKHRoaXMubG9jLmNsb25lKG9wdHMpLCBvcHRzKS5mb3JtYXREYXRlVGltZSh0aGlzKSA6IElOVkFMSUQkMjtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiBmb3JtYXQgXCJwYXJ0c1wiLCBtZWFuaW5nIGluZGl2aWR1YWwgdG9rZW5zIGFsb25nIHdpdGggbWV0YWRhdGEuIFRoaXMgaXMgYWxsb3dzIGNhbGxlcnMgdG8gcG9zdC1wcm9jZXNzIGluZGl2aWR1YWwgc2VjdGlvbnMgb2YgdGhlIGZvcm1hdHRlZCBvdXRwdXQuXG4gICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0RhdGVUaW1lRm9ybWF0L2Zvcm1hdFRvUGFydHNcbiAgICogQHBhcmFtIG9wdHMge09iamVjdH0gLSBJbnRsLkRhdGVUaW1lRm9ybWF0IGNvbnN0cnVjdG9yIG9wdGlvbnMsIHNhbWUgYXMgYHRvTG9jYWxlU3RyaW5nYC5cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS50b0xvY2FsZVBhcnRzKCk7IC8vPT4gW1xuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy89PiAgIHsgdHlwZTogJ2RheScsIHZhbHVlOiAnMjUnIH0sXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+ICAgeyB0eXBlOiAnbGl0ZXJhbCcsIHZhbHVlOiAnLycgfSxcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gICB7IHR5cGU6ICdtb250aCcsIHZhbHVlOiAnMDUnIH0sXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+ICAgeyB0eXBlOiAnbGl0ZXJhbCcsIHZhbHVlOiAnLycgfSxcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gICB7IHR5cGU6ICd5ZWFyJywgdmFsdWU6ICcxOTgyJyB9XG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+IF1cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9Mb2NhbGVQYXJ0cyA9IGZ1bmN0aW9uIHRvTG9jYWxlUGFydHMob3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHtcbiAgICAgIG9wdHMgPSB7fTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gRm9ybWF0dGVyLmNyZWF0ZSh0aGlzLmxvYy5jbG9uZShvcHRzKSwgb3B0cykuZm9ybWF0RGF0ZVRpbWVQYXJ0cyh0aGlzKSA6IFtdO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zdXBwcmVzc01pbGxpc2Vjb25kcz1mYWxzZV0gLSBleGNsdWRlIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBmb3JtYXQgaWYgdGhleSdyZSAwXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc3VwcHJlc3NTZWNvbmRzPWZhbHNlXSAtIGV4Y2x1ZGUgc2Vjb25kcyBmcm9tIHRoZSBmb3JtYXQgaWYgdGhleSdyZSAwXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZU9mZnNldD10cnVlXSAtIGluY2x1ZGUgdGhlIG9mZnNldCwgc3VjaCBhcyAnWicgb3IgJy0wNDowMCdcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmZvcm1hdD0nZXh0ZW5kZWQnXSAtIGNob29zZSBiZXR3ZWVuIHRoZSBiYXNpYyBhbmQgZXh0ZW5kZWQgZm9ybWF0XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygxOTgyLCA1LCAyNSkudG9JU08oKSAvLz0+ICcxOTgyLTA1LTI1VDAwOjAwOjAwLjAwMFonXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkudG9JU08oKSAvLz0+ICcyMDE3LTA0LTIyVDIwOjQ3OjA1LjMzNS0wNDowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS50b0lTTyh7IGluY2x1ZGVPZmZzZXQ6IGZhbHNlIH0pIC8vPT4gJzIwMTctMDQtMjJUMjA6NDc6MDUuMzM1J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnRvSVNPKHsgZm9ybWF0OiAnYmFzaWMnIH0pIC8vPT4gJzIwMTcwNDIyVDIwNDcwNS4zMzUtMDQwMCdcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b0lTTyA9IGZ1bmN0aW9uIHRvSVNPKG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnRvSVNPRGF0ZShvcHRzKSArIFwiVFwiICsgdGhpcy50b0lTT1RpbWUob3B0cyk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lJ3MgZGF0ZSBjb21wb25lbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5mb3JtYXQ9J2V4dGVuZGVkJ10gLSBjaG9vc2UgYmV0d2VlbiB0aGUgYmFzaWMgYW5kIGV4dGVuZGVkIGZvcm1hdFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMTk4MiwgNSwgMjUpLnRvSVNPRGF0ZSgpIC8vPT4gJzE5ODItMDUtMjUnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygxOTgyLCA1LCAyNSkudG9JU09EYXRlKHsgZm9ybWF0OiAnYmFzaWMnIH0pIC8vPT4gJzE5ODIwNTI1J1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvSVNPRGF0ZSA9IGZ1bmN0aW9uIHRvSVNPRGF0ZShfdGVtcDMpIHtcbiAgICB2YXIgX3JlZjUgPSBfdGVtcDMgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAzLFxuICAgICAgICBfcmVmNSRmb3JtYXQgPSBfcmVmNS5mb3JtYXQsXG4gICAgICAgIGZvcm1hdCA9IF9yZWY1JGZvcm1hdCA9PT0gdm9pZCAwID8gXCJleHRlbmRlZFwiIDogX3JlZjUkZm9ybWF0O1xuXG4gICAgdmFyIGZtdCA9IGZvcm1hdCA9PT0gXCJiYXNpY1wiID8gXCJ5eXl5TU1kZFwiIDogXCJ5eXl5LU1NLWRkXCI7XG5cbiAgICBpZiAodGhpcy55ZWFyID4gOTk5OSkge1xuICAgICAgZm10ID0gXCIrXCIgKyBmbXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvVGVjaEZvcm1hdCh0aGlzLCBmbXQpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSdzIHdlZWsgZGF0ZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMTk4MiwgNSwgMjUpLnRvSVNPV2Vla0RhdGUoKSAvLz0+ICcxOTgyLVcyMS0yJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvSVNPV2Vla0RhdGUgPSBmdW5jdGlvbiB0b0lTT1dlZWtEYXRlKCkge1xuICAgIHJldHVybiB0b1RlY2hGb3JtYXQodGhpcywgXCJra2trLSdXJ1dXLWNcIik7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lJ3MgdGltZSBjb21wb25lbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc3VwcHJlc3NNaWxsaXNlY29uZHM9ZmFsc2VdIC0gZXhjbHVkZSBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN1cHByZXNzU2Vjb25kcz1mYWxzZV0gLSBleGNsdWRlIHNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVPZmZzZXQ9dHJ1ZV0gLSBpbmNsdWRlIHRoZSBvZmZzZXQsIHN1Y2ggYXMgJ1onIG9yICctMDQ6MDAnXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5mb3JtYXQ9J2V4dGVuZGVkJ10gLSBjaG9vc2UgYmV0d2VlbiB0aGUgYmFzaWMgYW5kIGV4dGVuZGVkIGZvcm1hdFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS5zZXQoeyBob3VyOiA3LCBtaW51dGU6IDM0IH0pLnRvSVNPVGltZSgpIC8vPT4gJzA3OjM0OjE5LjM2MVonXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpLnNldCh7IGhvdXI6IDcsIG1pbnV0ZTogMzQsIHNlY29uZHM6IDAsIG1pbGxpc2Vjb25kczogMCB9KS50b0lTT1RpbWUoeyBzdXBwcmVzc1NlY29uZHM6IHRydWUgfSkgLy89PiAnMDc6MzRaJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS5zZXQoeyBob3VyOiA3LCBtaW51dGU6IDM0IH0pLnRvSVNPVGltZSh7IGZvcm1hdDogJ2Jhc2ljJyB9KSAvLz0+ICcwNzM0MTkuMzYxWidcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b0lTT1RpbWUgPSBmdW5jdGlvbiB0b0lTT1RpbWUoX3RlbXA0KSB7XG4gICAgdmFyIF9yZWY2ID0gX3RlbXA0ID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wNCxcbiAgICAgICAgX3JlZjYkc3VwcHJlc3NNaWxsaXNlID0gX3JlZjYuc3VwcHJlc3NNaWxsaXNlY29uZHMsXG4gICAgICAgIHN1cHByZXNzTWlsbGlzZWNvbmRzID0gX3JlZjYkc3VwcHJlc3NNaWxsaXNlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWY2JHN1cHByZXNzTWlsbGlzZSxcbiAgICAgICAgX3JlZjYkc3VwcHJlc3NTZWNvbmRzID0gX3JlZjYuc3VwcHJlc3NTZWNvbmRzLFxuICAgICAgICBzdXBwcmVzc1NlY29uZHMgPSBfcmVmNiRzdXBwcmVzc1NlY29uZHMgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjYkc3VwcHJlc3NTZWNvbmRzLFxuICAgICAgICBfcmVmNiRpbmNsdWRlT2Zmc2V0ID0gX3JlZjYuaW5jbHVkZU9mZnNldCxcbiAgICAgICAgaW5jbHVkZU9mZnNldCA9IF9yZWY2JGluY2x1ZGVPZmZzZXQgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmNiRpbmNsdWRlT2Zmc2V0LFxuICAgICAgICBfcmVmNiRmb3JtYXQgPSBfcmVmNi5mb3JtYXQsXG4gICAgICAgIGZvcm1hdCA9IF9yZWY2JGZvcm1hdCA9PT0gdm9pZCAwID8gXCJleHRlbmRlZFwiIDogX3JlZjYkZm9ybWF0O1xuXG4gICAgcmV0dXJuIHRvVGVjaFRpbWVGb3JtYXQodGhpcywge1xuICAgICAgc3VwcHJlc3NTZWNvbmRzOiBzdXBwcmVzc1NlY29uZHMsXG4gICAgICBzdXBwcmVzc01pbGxpc2Vjb25kczogc3VwcHJlc3NNaWxsaXNlY29uZHMsXG4gICAgICBpbmNsdWRlT2Zmc2V0OiBpbmNsdWRlT2Zmc2V0LFxuICAgICAgZm9ybWF0OiBmb3JtYXRcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhbiBSRkMgMjgyMi1jb21wYXRpYmxlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lLCBhbHdheXMgaW4gVVRDXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE0LCA3LCAxMykudG9SRkMyODIyKCkgLy89PiAnU3VuLCAxMyBKdWwgMjAxNCAwMDowMDowMCArMDAwMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgNywgMTMpLnRvUkZDMjgyMigpIC8vPT4gJ1N1biwgMTMgSnVsIDIwMTQgMDA6MDA6MDAgLTA0MDAnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9SRkMyODIyID0gZnVuY3Rpb24gdG9SRkMyODIyKCkge1xuICAgIHJldHVybiB0b1RlY2hGb3JtYXQodGhpcywgXCJFRUUsIGRkIExMTCB5eXl5IEhIOm1tOnNzIFpaWlwiLCBmYWxzZSk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIEhUVFAgaGVhZGVycy5cbiAgICogU3BlY2lmaWNhbGx5LCB0aGUgc3RyaW5nIGNvbmZvcm1zIHRvIFJGQyAxMTIzLlxuICAgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9Qcm90b2NvbHMvcmZjMjYxNi9yZmMyNjE2LXNlYzMuaHRtbCNzZWMzLjMuMVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNCwgNywgMTMpLnRvSFRUUCgpIC8vPT4gJ1N1biwgMTMgSnVsIDIwMTQgMDA6MDA6MDAgR01UJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNCwgNywgMTMsIDE5KS50b0hUVFAoKSAvLz0+ICdTdW4sIDEzIEp1bCAyMDE0IDE5OjAwOjAwIEdNVCdcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b0hUVFAgPSBmdW5jdGlvbiB0b0hUVFAoKSB7XG4gICAgcmV0dXJuIHRvVGVjaEZvcm1hdCh0aGlzLnRvVVRDKCksIFwiRUVFLCBkZCBMTEwgeXl5eSBISDptbTpzcyAnR01UJ1wiKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gU1FMIERhdGVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTQsIDcsIDEzKS50b1NRTERhdGUoKSAvLz0+ICcyMDE0LTA3LTEzJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvU1FMRGF0ZSA9IGZ1bmN0aW9uIHRvU1FMRGF0ZSgpIHtcbiAgICByZXR1cm4gdG9UZWNoRm9ybWF0KHRoaXMsIFwieXl5eS1NTS1kZFwiKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gU1FMIFRpbWVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZVpvbmU9ZmFsc2VdIC0gaW5jbHVkZSB0aGUgem9uZSwgc3VjaCBhcyAnQW1lcmljYS9OZXdfWW9yaycuIE92ZXJyaWRlcyBpbmNsdWRlT2Zmc2V0LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVPZmZzZXQ9dHJ1ZV0gLSBpbmNsdWRlIHRoZSBvZmZzZXQsIHN1Y2ggYXMgJ1onIG9yICctMDQ6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpLnRvU1FMKCkgLy89PiAnMDU6MTU6MTYuMzQ1J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnRvU1FMKCkgLy89PiAnMDU6MTU6MTYuMzQ1IC0wNDowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS50b1NRTCh7IGluY2x1ZGVPZmZzZXQ6IGZhbHNlIH0pIC8vPT4gJzA1OjE1OjE2LjM0NSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS50b1NRTCh7IGluY2x1ZGVab25lOiBmYWxzZSB9KSAvLz0+ICcwNToxNToxNi4zNDUgQW1lcmljYS9OZXdfWW9yaydcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b1NRTFRpbWUgPSBmdW5jdGlvbiB0b1NRTFRpbWUoX3RlbXA1KSB7XG4gICAgdmFyIF9yZWY3ID0gX3RlbXA1ID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wNSxcbiAgICAgICAgX3JlZjckaW5jbHVkZU9mZnNldCA9IF9yZWY3LmluY2x1ZGVPZmZzZXQsXG4gICAgICAgIGluY2x1ZGVPZmZzZXQgPSBfcmVmNyRpbmNsdWRlT2Zmc2V0ID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZjckaW5jbHVkZU9mZnNldCxcbiAgICAgICAgX3JlZjckaW5jbHVkZVpvbmUgPSBfcmVmNy5pbmNsdWRlWm9uZSxcbiAgICAgICAgaW5jbHVkZVpvbmUgPSBfcmVmNyRpbmNsdWRlWm9uZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmNyRpbmNsdWRlWm9uZTtcblxuICAgIHJldHVybiB0b1RlY2hUaW1lRm9ybWF0KHRoaXMsIHtcbiAgICAgIGluY2x1ZGVPZmZzZXQ6IGluY2x1ZGVPZmZzZXQsXG4gICAgICBpbmNsdWRlWm9uZTogaW5jbHVkZVpvbmUsXG4gICAgICBzcGFjZVpvbmU6IHRydWVcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gU1FMIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVab25lPWZhbHNlXSAtIGluY2x1ZGUgdGhlIHpvbmUsIHN1Y2ggYXMgJ0FtZXJpY2EvTmV3X1lvcmsnLiBPdmVycmlkZXMgaW5jbHVkZU9mZnNldC5cbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlT2Zmc2V0PXRydWVdIC0gaW5jbHVkZSB0aGUgb2Zmc2V0LCBzdWNoIGFzICdaJyBvciAnLTA0OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNCwgNywgMTMpLnRvU1FMKCkgLy89PiAnMjAxNC0wNy0xMyAwMDowMDowMC4wMDAgWidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgNywgMTMpLnRvU1FMKCkgLy89PiAnMjAxNC0wNy0xMyAwMDowMDowMC4wMDAgLTA0OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCA3LCAxMykudG9TUUwoeyBpbmNsdWRlT2Zmc2V0OiBmYWxzZSB9KSAvLz0+ICcyMDE0LTA3LTEzIDAwOjAwOjAwLjAwMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgNywgMTMpLnRvU1FMKHsgaW5jbHVkZVpvbmU6IHRydWUgfSkgLy89PiAnMjAxNC0wNy0xMyAwMDowMDowMC4wMDAgQW1lcmljYS9OZXdfWW9yaydcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b1NRTCA9IGZ1bmN0aW9uIHRvU1FMKG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnRvU1FMRGF0ZSgpICsgXCIgXCIgKyB0aGlzLnRvU1FMVGltZShvcHRzKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciBkZWJ1Z2dpbmdcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnRvSVNPKCkgOiBJTlZBTElEJDI7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVwb2NoIG1pbGxpc2Vjb25kcyBvZiB0aGlzIERhdGVUaW1lLiBBbGlhcyBvZiB7QGxpbmsgdG9NaWxsaXN9XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIDtcblxuICBfcHJvdG8udmFsdWVPZiA9IGZ1bmN0aW9uIHZhbHVlT2YoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9NaWxsaXMoKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZXBvY2ggbWlsbGlzZWNvbmRzIG9mIHRoaXMgRGF0ZVRpbWUuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9NaWxsaXMgPSBmdW5jdGlvbiB0b01pbGxpcygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy50cyA6IE5hTjtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZXBvY2ggc2Vjb25kcyBvZiB0aGlzIERhdGVUaW1lLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvU2Vjb25kcyA9IGZ1bmN0aW9uIHRvU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy50cyAvIDEwMDAgOiBOYU47XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIEpTT04uXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvSVNPKCk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgYSBCU09OIHNlcmlhbGl6YWJsZSBlcXVpdmFsZW50IHRvIHRoaXMgRGF0ZVRpbWUuXG4gICAqIEByZXR1cm4ge0RhdGV9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvQlNPTiA9IGZ1bmN0aW9uIHRvQlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b0pTRGF0ZSgpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgSmF2YXNjcmlwdCBvYmplY3Qgd2l0aCB0aGlzIERhdGVUaW1lJ3MgeWVhciwgbW9udGgsIGRheSwgYW5kIHNvIG9uLlxuICAgKiBAcGFyYW0gb3B0cyAtIG9wdGlvbnMgZm9yIGdlbmVyYXRpbmcgdGhlIG9iamVjdFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVDb25maWc9ZmFsc2VdIC0gaW5jbHVkZSBjb25maWd1cmF0aW9uIGF0dHJpYnV0ZXMgaW4gdGhlIG91dHB1dFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnRvT2JqZWN0KCkgLy89PiB7IHllYXI6IDIwMTcsIG1vbnRoOiA0LCBkYXk6IDIyLCBob3VyOiAyMCwgbWludXRlOiA0OSwgc2Vjb25kOiA0MiwgbWlsbGlzZWNvbmQ6IDI2OCB9XG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9PYmplY3QgPSBmdW5jdGlvbiB0b09iamVjdChvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cblxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4ge307XG4gICAgdmFyIGJhc2UgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmMpO1xuXG4gICAgaWYgKG9wdHMuaW5jbHVkZUNvbmZpZykge1xuICAgICAgYmFzZS5vdXRwdXRDYWxlbmRhciA9IHRoaXMub3V0cHV0Q2FsZW5kYXI7XG4gICAgICBiYXNlLm51bWJlcmluZ1N5c3RlbSA9IHRoaXMubG9jLm51bWJlcmluZ1N5c3RlbTtcbiAgICAgIGJhc2UubG9jYWxlID0gdGhpcy5sb2MubG9jYWxlO1xuICAgIH1cblxuICAgIHJldHVybiBiYXNlO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgSmF2YXNjcmlwdCBEYXRlIGVxdWl2YWxlbnQgdG8gdGhpcyBEYXRlVGltZS5cbiAgICogQHJldHVybiB7RGF0ZX1cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9KU0RhdGUgPSBmdW5jdGlvbiB0b0pTRGF0ZSgpIHtcbiAgICByZXR1cm4gbmV3IERhdGUodGhpcy5pc1ZhbGlkID8gdGhpcy50cyA6IE5hTik7XG4gIH0gLy8gQ09NUEFSRVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0d28gRGF0ZVRpbWVzIGFzIGEgRHVyYXRpb24uXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IG90aGVyRGF0ZVRpbWUgLSB0aGUgRGF0ZVRpbWUgdG8gY29tcGFyZSB0aGlzIG9uZSB0b1xuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gW3VuaXQ9WydtaWxsaXNlY29uZHMnXV0gLSB0aGUgdW5pdCBvciBhcnJheSBvZiB1bml0cyAoc3VjaCBhcyAnaG91cnMnIG9yICdkYXlzJykgdG8gaW5jbHVkZSBpbiB0aGUgZHVyYXRpb24uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0aGF0IGFmZmVjdCB0aGUgY3JlYXRpb24gb2YgdGhlIER1cmF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAZXhhbXBsZVxuICAgKiB2YXIgaTEgPSBEYXRlVGltZS5mcm9tSVNPKCcxOTgyLTA1LTI1VDA5OjQ1JyksXG4gICAqICAgICBpMiA9IERhdGVUaW1lLmZyb21JU08oJzE5ODMtMTAtMTRUMTA6MzAnKTtcbiAgICogaTIuZGlmZihpMSkudG9PYmplY3QoKSAvLz0+IHsgbWlsbGlzZWNvbmRzOiA0MzgwNzUwMDAwMCB9XG4gICAqIGkyLmRpZmYoaTEsICdob3VycycpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAxMjE2OC43NSB9XG4gICAqIGkyLmRpZmYoaTEsIFsnbW9udGhzJywgJ2RheXMnXSkudG9PYmplY3QoKSAvLz0+IHsgbW9udGhzOiAxNiwgZGF5czogMTkuMDMxMjUgfVxuICAgKiBpMi5kaWZmKGkxLCBbJ21vbnRocycsICdkYXlzJywgJ2hvdXJzJ10pLnRvT2JqZWN0KCkgLy89PiB7IG1vbnRoczogMTYsIGRheXM6IDE5LCBob3VyczogMC43NSB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5kaWZmID0gZnVuY3Rpb24gZGlmZihvdGhlckRhdGVUaW1lLCB1bml0LCBvcHRzKSB7XG4gICAgaWYgKHVuaXQgPT09IHZvaWQgMCkge1xuICAgICAgdW5pdCA9IFwibWlsbGlzZWNvbmRzXCI7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0cyA9IHt9O1xuICAgIH1cblxuICAgIGlmICghdGhpcy5pc1ZhbGlkIHx8ICFvdGhlckRhdGVUaW1lLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5pbnZhbGlkKHRoaXMuaW52YWxpZCB8fCBvdGhlckRhdGVUaW1lLmludmFsaWQsIFwiY3JlYXRlZCBieSBkaWZmaW5nIGFuIGludmFsaWQgRGF0ZVRpbWVcIik7XG4gICAgfVxuXG4gICAgdmFyIGR1ck9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtXG4gICAgfSwgb3B0cyk7XG5cbiAgICB2YXIgdW5pdHMgPSBtYXliZUFycmF5KHVuaXQpLm1hcChEdXJhdGlvbi5ub3JtYWxpemVVbml0KSxcbiAgICAgICAgb3RoZXJJc0xhdGVyID0gb3RoZXJEYXRlVGltZS52YWx1ZU9mKCkgPiB0aGlzLnZhbHVlT2YoKSxcbiAgICAgICAgZWFybGllciA9IG90aGVySXNMYXRlciA/IHRoaXMgOiBvdGhlckRhdGVUaW1lLFxuICAgICAgICBsYXRlciA9IG90aGVySXNMYXRlciA/IG90aGVyRGF0ZVRpbWUgOiB0aGlzLFxuICAgICAgICBkaWZmZWQgPSBfZGlmZihlYXJsaWVyLCBsYXRlciwgdW5pdHMsIGR1ck9wdHMpO1xuXG4gICAgcmV0dXJuIG90aGVySXNMYXRlciA/IGRpZmZlZC5uZWdhdGUoKSA6IGRpZmZlZDtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhpcyBEYXRlVGltZSBhbmQgcmlnaHQgbm93LlxuICAgKiBTZWUge0BsaW5rIGRpZmZ9XG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBbdW5pdD1bJ21pbGxpc2Vjb25kcyddXSAtIHRoZSB1bml0IG9yIHVuaXRzIHVuaXRzIChzdWNoIGFzICdob3Vycycgb3IgJ2RheXMnKSB0byBpbmNsdWRlIGluIHRoZSBkdXJhdGlvblxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdGhhdCBhZmZlY3QgdGhlIGNyZWF0aW9uIG9mIHRoZSBEdXJhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmRpZmZOb3cgPSBmdW5jdGlvbiBkaWZmTm93KHVuaXQsIG9wdHMpIHtcbiAgICBpZiAodW5pdCA9PT0gdm9pZCAwKSB7XG4gICAgICB1bml0ID0gXCJtaWxsaXNlY29uZHNcIjtcbiAgICB9XG5cbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZGlmZihEYXRlVGltZS5sb2NhbCgpLCB1bml0LCBvcHRzKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIGFuIEludGVydmFsIHNwYW5uaW5nIGJldHdlZW4gdGhpcyBEYXRlVGltZSBhbmQgYW5vdGhlciBEYXRlVGltZVxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBvdGhlckRhdGVUaW1lIC0gdGhlIG90aGVyIGVuZCBwb2ludCBvZiB0aGUgSW50ZXJ2YWxcbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnVudGlsID0gZnVuY3Rpb24gdW50aWwob3RoZXJEYXRlVGltZSkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHRoaXMsIG90aGVyRGF0ZVRpbWUpIDogdGhpcztcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBEYXRlVGltZSBpcyBpbiB0aGUgc2FtZSB1bml0IG9mIHRpbWUgYXMgYW5vdGhlciBEYXRlVGltZVxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBvdGhlckRhdGVUaW1lIC0gdGhlIG90aGVyIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gdGhlIHVuaXQgb2YgdGltZSB0byBjaGVjayBzYW1lbmVzcyBvblxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLmhhc1NhbWUob3RoZXJEVCwgJ2RheScpOyAvL34+IHRydWUgaWYgYm90aCB0aGUgc2FtZSBjYWxlbmRhciBkYXlcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uaGFzU2FtZSA9IGZ1bmN0aW9uIGhhc1NhbWUob3RoZXJEYXRlVGltZSwgdW5pdCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAodW5pdCA9PT0gXCJtaWxsaXNlY29uZFwiKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCkgPT09IG90aGVyRGF0ZVRpbWUudmFsdWVPZigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaW5wdXRNcyA9IG90aGVyRGF0ZVRpbWUudmFsdWVPZigpO1xuICAgICAgcmV0dXJuIHRoaXMuc3RhcnRPZih1bml0KSA8PSBpbnB1dE1zICYmIGlucHV0TXMgPD0gdGhpcy5lbmRPZih1bml0KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEVxdWFsaXR5IGNoZWNrXG4gICAqIFR3byBEYXRlVGltZXMgYXJlIGVxdWFsIGlmZiB0aGV5IHJlcHJlc2VudCB0aGUgc2FtZSBtaWxsaXNlY29uZCwgaGF2ZSB0aGUgc2FtZSB6b25lIGFuZCBsb2NhdGlvbiwgYW5kIGFyZSBib3RoIHZhbGlkLlxuICAgKiBUbyBjb21wYXJlIGp1c3QgdGhlIG1pbGxpc2Vjb25kIHZhbHVlcywgdXNlIGArZHQxID09PSArZHQyYC5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gb3RoZXIgLSB0aGUgb3RoZXIgRGF0ZVRpbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzKG90aGVyKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCAmJiBvdGhlci5pc1ZhbGlkICYmIHRoaXMudmFsdWVPZigpID09PSBvdGhlci52YWx1ZU9mKCkgJiYgdGhpcy56b25lLmVxdWFscyhvdGhlci56b25lKSAmJiB0aGlzLmxvYy5lcXVhbHMob3RoZXIubG9jKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHRoaXMgdGltZSByZWxhdGl2ZSB0byBub3csIHN1Y2ggYXMgXCJpbiB0d28gZGF5c1wiLiBDYW4gb25seSBpbnRlcm5hdGlvbmFsaXplIGlmIHlvdXJcbiAgICogcGxhdGZvcm0gc3VwcG9ydHMgSW50bC5SZWxhdGl2ZVRpbWVGb3JtYXQuIFJvdW5kcyBkb3duIGJ5IGRlZmF1bHQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gb3B0aW9ucyB0aGF0IGFmZmVjdCB0aGUgb3V0cHV0XG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IFtvcHRpb25zLmJhc2U9RGF0ZVRpbWUubG9jYWwoKV0gLSB0aGUgRGF0ZVRpbWUgdG8gdXNlIGFzIHRoZSBiYXNpcyB0byB3aGljaCB0aGlzIHRpbWUgaXMgY29tcGFyZWQuIERlZmF1bHRzIHRvIG5vdy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnN0eWxlPVwibG9uZ1wiXSAtIHRoZSBzdHlsZSBvZiB1bml0cywgbXVzdCBiZSBcImxvbmdcIiwgXCJzaG9ydFwiLCBvciBcIm5hcnJvd1wiXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnVuaXQgLSB1c2UgYSBzcGVjaWZpYyB1bml0OyBpZiBvbWl0dGVkLCB0aGUgbWV0aG9kIHdpbGwgcGljayB0aGUgdW5pdC4gVXNlIG9uZSBvZiBcInllYXJzXCIsIFwicXVhcnRlcnNcIiwgXCJtb250aHNcIiwgXCJ3ZWVrc1wiLCBcImRheXNcIiwgXCJob3Vyc1wiLCBcIm1pbnV0ZXNcIiwgb3IgXCJzZWNvbmRzXCJcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5yb3VuZD10cnVlXSAtIHdoZXRoZXIgdG8gcm91bmQgdGhlIG51bWJlcnMgaW4gdGhlIG91dHB1dC5cbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5wYWRkaW5nPTBdIC0gcGFkZGluZyBpbiBtaWxsaXNlY29uZHMuIFRoaXMgYWxsb3dzIHlvdSB0byByb3VuZCB1cCB0aGUgcmVzdWx0IGlmIGl0IGZpdHMgaW5zaWRlIHRoZSB0aHJlc2hvbGQuIERvbid0IHVzZSBpbiBjb21iaW5hdGlvbiB3aXRoIHtyb3VuZDogZmFsc2V9IGJlY2F1c2UgdGhlIGRlY2ltYWwgb3V0cHV0IHdpbGwgaW5jbHVkZSB0aGUgcGFkZGluZy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubG9jYWxlIC0gb3ZlcnJpZGUgdGhlIGxvY2FsZSBvZiB0aGlzIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm51bWJlcmluZ1N5c3RlbSAtIG92ZXJyaWRlIHRoZSBudW1iZXJpbmdTeXN0ZW0gb2YgdGhpcyBEYXRlVGltZS4gVGhlIEludGwgc3lzdGVtIG1heSBjaG9vc2Ugbm90IHRvIGhvbm9yIHRoaXNcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS5wbHVzKHsgZGF5czogMSB9KS50b1JlbGF0aXZlKCkgLy89PiBcImluIDEgZGF5XCJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS5zZXRMb2NhbGUoXCJlc1wiKS50b1JlbGF0aXZlKHsgZGF5czogMSB9KSAvLz0+IFwiZGVudHJvIGRlIDEgZMOtYVwiXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkucGx1cyh7IGRheXM6IDEgfSkudG9SZWxhdGl2ZSh7IGxvY2FsZTogXCJmclwiIH0pIC8vPT4gXCJkYW5zIDIzIGhldXJlc1wiXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkubWludXMoeyBkYXlzOiAyIH0pLnRvUmVsYXRpdmUoKSAvLz0+IFwiMiBkYXlzIGFnb1wiXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkubWludXMoeyBkYXlzOiAyIH0pLnRvUmVsYXRpdmUoeyB1bml0OiBcImhvdXJzXCIgfSkgLy89PiBcIjQ4IGhvdXJzIGFnb1wiXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkubWludXMoeyBob3VyczogMzYgfSkudG9SZWxhdGl2ZSh7IHJvdW5kOiBmYWxzZSB9KSAvLz0+IFwiMS41IGRheXMgYWdvXCJcbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9SZWxhdGl2ZSA9IGZ1bmN0aW9uIHRvUmVsYXRpdmUob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIGJhc2UgPSBvcHRpb25zLmJhc2UgfHwgRGF0ZVRpbWUuZnJvbU9iamVjdCh7XG4gICAgICB6b25lOiB0aGlzLnpvbmVcbiAgICB9KSxcbiAgICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyA/IHRoaXMgPCBiYXNlID8gLW9wdGlvbnMucGFkZGluZyA6IG9wdGlvbnMucGFkZGluZyA6IDA7XG4gICAgcmV0dXJuIGRpZmZSZWxhdGl2ZShiYXNlLCB0aGlzLnBsdXMocGFkZGluZyksIE9iamVjdC5hc3NpZ24ob3B0aW9ucywge1xuICAgICAgbnVtZXJpYzogXCJhbHdheXNcIixcbiAgICAgIHVuaXRzOiBbXCJ5ZWFyc1wiLCBcIm1vbnRoc1wiLCBcImRheXNcIiwgXCJob3Vyc1wiLCBcIm1pbnV0ZXNcIiwgXCJzZWNvbmRzXCJdXG4gICAgfSkpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgZGF0ZSByZWxhdGl2ZSB0byB0b2RheSwgc3VjaCBhcyBcInllc3RlcmRheVwiIG9yIFwibmV4dCBtb250aFwiLlxuICAgKiBPbmx5IGludGVybmF0aW9uYWxpemVzIG9uIHBsYXRmb3JtcyB0aGF0IHN1cHBvcnRzIEludGwuUmVsYXRpdmVUaW1lRm9ybWF0LlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIG9wdGlvbnMgdGhhdCBhZmZlY3QgdGhlIG91dHB1dFxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBbb3B0aW9ucy5iYXNlPURhdGVUaW1lLmxvY2FsKCldIC0gdGhlIERhdGVUaW1lIHRvIHVzZSBhcyB0aGUgYmFzaXMgdG8gd2hpY2ggdGhpcyB0aW1lIGlzIGNvbXBhcmVkLiBEZWZhdWx0cyB0byBub3cuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmxvY2FsZSAtIG92ZXJyaWRlIHRoZSBsb2NhbGUgb2YgdGhpcyBEYXRlVGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy51bml0IC0gdXNlIGEgc3BlY2lmaWMgdW5pdDsgaWYgb21pdHRlZCwgdGhlIG1ldGhvZCB3aWxsIHBpY2sgdGhlIHVuaXQuIFVzZSBvbmUgb2YgXCJ5ZWFyc1wiLCBcInF1YXJ0ZXJzXCIsIFwibW9udGhzXCIsIFwid2Vla3NcIiwgb3IgXCJkYXlzXCJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubnVtYmVyaW5nU3lzdGVtIC0gb3ZlcnJpZGUgdGhlIG51bWJlcmluZ1N5c3RlbSBvZiB0aGlzIERhdGVUaW1lLiBUaGUgSW50bCBzeXN0ZW0gbWF5IGNob29zZSBub3QgdG8gaG9ub3IgdGhpc1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnBsdXMoeyBkYXlzOiAxIH0pLnRvUmVsYXRpdmVDYWxlbmRhcigpIC8vPT4gXCJ0b21vcnJvd1wiXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkuc2V0TG9jYWxlKFwiZXNcIikucGx1cyh7IGRheXM6IDEgfSkudG9SZWxhdGl2ZSgpIC8vPT4gXCJcIm1hw7FhbmFcIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnBsdXMoeyBkYXlzOiAxIH0pLnRvUmVsYXRpdmVDYWxlbmRhcih7IGxvY2FsZTogXCJmclwiIH0pIC8vPT4gXCJkZW1haW5cIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLm1pbnVzKHsgZGF5czogMiB9KS50b1JlbGF0aXZlQ2FsZW5kYXIoKSAvLz0+IFwiMiBkYXlzIGFnb1wiXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvUmVsYXRpdmVDYWxlbmRhciA9IGZ1bmN0aW9uIHRvUmVsYXRpdmVDYWxlbmRhcihvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gZGlmZlJlbGF0aXZlKG9wdGlvbnMuYmFzZSB8fCBEYXRlVGltZS5mcm9tT2JqZWN0KHtcbiAgICAgIHpvbmU6IHRoaXMuem9uZVxuICAgIH0pLCB0aGlzLCBPYmplY3QuYXNzaWduKG9wdGlvbnMsIHtcbiAgICAgIG51bWVyaWM6IFwiYXV0b1wiLFxuICAgICAgdW5pdHM6IFtcInllYXJzXCIsIFwibW9udGhzXCIsIFwiZGF5c1wiXSxcbiAgICAgIGNhbGVuZGFyeTogdHJ1ZVxuICAgIH0pKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIHRoZSBtaW4gb2Ygc2V2ZXJhbCBkYXRlIHRpbWVzXG4gICAqIEBwYXJhbSB7Li4uRGF0ZVRpbWV9IGRhdGVUaW1lcyAtIHRoZSBEYXRlVGltZXMgZnJvbSB3aGljaCB0byBjaG9vc2UgdGhlIG1pbmltdW1cbiAgICogQHJldHVybiB7RGF0ZVRpbWV9IHRoZSBtaW4gRGF0ZVRpbWUsIG9yIHVuZGVmaW5lZCBpZiBjYWxsZWQgd2l0aCBubyBhcmd1bWVudFxuICAgKi9cbiAgO1xuXG4gIERhdGVUaW1lLm1pbiA9IGZ1bmN0aW9uIG1pbigpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZGF0ZVRpbWVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgZGF0ZVRpbWVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmICghZGF0ZVRpbWVzLmV2ZXJ5KERhdGVUaW1lLmlzRGF0ZVRpbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJtaW4gcmVxdWlyZXMgYWxsIGFyZ3VtZW50cyBiZSBEYXRlVGltZXNcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJlc3RCeShkYXRlVGltZXMsIGZ1bmN0aW9uIChpKSB7XG4gICAgICByZXR1cm4gaS52YWx1ZU9mKCk7XG4gICAgfSwgTWF0aC5taW4pO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIG1heCBvZiBzZXZlcmFsIGRhdGUgdGltZXNcbiAgICogQHBhcmFtIHsuLi5EYXRlVGltZX0gZGF0ZVRpbWVzIC0gdGhlIERhdGVUaW1lcyBmcm9tIHdoaWNoIHRvIGNob29zZSB0aGUgbWF4aW11bVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX0gdGhlIG1heCBEYXRlVGltZSwgb3IgdW5kZWZpbmVkIGlmIGNhbGxlZCB3aXRoIG5vIGFyZ3VtZW50XG4gICAqL1xuICA7XG5cbiAgRGF0ZVRpbWUubWF4ID0gZnVuY3Rpb24gbWF4KCkge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgZGF0ZVRpbWVzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBkYXRlVGltZXNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBpZiAoIWRhdGVUaW1lcy5ldmVyeShEYXRlVGltZS5pc0RhdGVUaW1lKSkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFwibWF4IHJlcXVpcmVzIGFsbCBhcmd1bWVudHMgYmUgRGF0ZVRpbWVzXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBiZXN0QnkoZGF0ZVRpbWVzLCBmdW5jdGlvbiAoaSkge1xuICAgICAgcmV0dXJuIGkudmFsdWVPZigpO1xuICAgIH0sIE1hdGgubWF4KTtcbiAgfSAvLyBNSVNDXG5cbiAgLyoqXG4gICAqIEV4cGxhaW4gaG93IGEgc3RyaW5nIHdvdWxkIGJlIHBhcnNlZCBieSBmcm9tRm9ybWF0KClcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgc3RyaW5nIHRvIHBhcnNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmbXQgLSB0aGUgZm9ybWF0IHRoZSBzdHJpbmcgaXMgZXhwZWN0ZWQgdG8gYmUgaW4gKHNlZSBkZXNjcmlwdGlvbilcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zIHRha2VuIGJ5IGZyb21Gb3JtYXQoKVxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICA7XG5cbiAgRGF0ZVRpbWUuZnJvbUZvcm1hdEV4cGxhaW4gPSBmdW5jdGlvbiBmcm9tRm9ybWF0RXhwbGFpbih0ZXh0LCBmbXQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgICAgX29wdGlvbnMkbG9jYWxlID0gX29wdGlvbnMubG9jYWxlLFxuICAgICAgICBsb2NhbGUgPSBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IG51bGwgOiBfb3B0aW9ucyRsb2NhbGUsXG4gICAgICAgIF9vcHRpb25zJG51bWJlcmluZ1N5cyA9IF9vcHRpb25zLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgbnVtYmVyaW5nU3lzdGVtID0gX29wdGlvbnMkbnVtYmVyaW5nU3lzID09PSB2b2lkIDAgPyBudWxsIDogX29wdGlvbnMkbnVtYmVyaW5nU3lzLFxuICAgICAgICBsb2NhbGVUb1VzZSA9IExvY2FsZS5mcm9tT3B0cyh7XG4gICAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICAgIG51bWJlcmluZ1N5c3RlbTogbnVtYmVyaW5nU3lzdGVtLFxuICAgICAgZGVmYXVsdFRvRU46IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gZXhwbGFpbkZyb21Ub2tlbnMobG9jYWxlVG9Vc2UsIHRleHQsIGZtdCk7XG4gIH1cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHVzZSBmcm9tRm9ybWF0RXhwbGFpbiBpbnN0ZWFkXG4gICAqL1xuICA7XG5cbiAgRGF0ZVRpbWUuZnJvbVN0cmluZ0V4cGxhaW4gPSBmdW5jdGlvbiBmcm9tU3RyaW5nRXhwbGFpbih0ZXh0LCBmbXQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgcmV0dXJuIERhdGVUaW1lLmZyb21Gb3JtYXRFeHBsYWluKHRleHQsIGZtdCwgb3B0aW9ucyk7XG4gIH0gLy8gRk9STUFUIFBSRVNFVFNcblxuICAvKipcbiAgICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAxMC8xNC8xOTgzXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICA7XG5cbiAgX2NyZWF0ZUNsYXNzKERhdGVUaW1lLCBbe1xuICAgIGtleTogXCJpc1ZhbGlkXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnZhbGlkID09PSBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGVycm9yIGNvZGUgaWYgdGhpcyBEYXRlVGltZSBpcyBpbnZhbGlkLCBvciBudWxsIGlmIHRoZSBEYXRlVGltZSBpcyB2YWxpZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpbnZhbGlkUmVhc29uXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLnJlYXNvbiA6IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gZXhwbGFuYXRpb24gb2Ygd2h5IHRoaXMgRGF0ZVRpbWUgYmVjYW1lIGludmFsaWQsIG9yIG51bGwgaWYgdGhlIERhdGVUaW1lIGlzIHZhbGlkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImludmFsaWRFeHBsYW5hdGlvblwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZC5leHBsYW5hdGlvbiA6IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbG9jYWxlIG9mIGEgRGF0ZVRpbWUsIHN1Y2ggJ2VuLUdCJy4gVGhlIGxvY2FsZSBpcyB1c2VkIHdoZW4gZm9ybWF0dGluZyB0aGUgRGF0ZVRpbWVcbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJsb2NhbGVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmxvYy5sb2NhbGUgOiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG51bWJlcmluZyBzeXN0ZW0gb2YgYSBEYXRlVGltZSwgc3VjaCAnYmVuZycuIFRoZSBudW1iZXJpbmcgc3lzdGVtIGlzIHVzZWQgd2hlbiBmb3JtYXR0aW5nIHRoZSBEYXRlVGltZVxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm51bWJlcmluZ1N5c3RlbVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMubG9jLm51bWJlcmluZ1N5c3RlbSA6IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgb3V0cHV0IGNhbGVuZGFyIG9mIGEgRGF0ZVRpbWUsIHN1Y2ggJ2lzbGFtaWMnLiBUaGUgb3V0cHV0IGNhbGVuZGFyIGlzIHVzZWQgd2hlbiBmb3JtYXR0aW5nIHRoZSBEYXRlVGltZVxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm91dHB1dENhbGVuZGFyXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5sb2Mub3V0cHV0Q2FsZW5kYXIgOiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHRpbWUgem9uZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBEYXRlVGltZS5cbiAgICAgKiBAdHlwZSB7Wm9uZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInpvbmVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl96b25lO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG5hbWUgb2YgdGhlIHRpbWUgem9uZS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiem9uZU5hbWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnpvbmUubmFtZSA6IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgeWVhclxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS55ZWFyIC8vPT4gMjAxN1xuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ5ZWFyXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLnllYXIgOiBOYU47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgcXVhcnRlclxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS5xdWFydGVyIC8vPT4gMlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJxdWFydGVyXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gTWF0aC5jZWlsKHRoaXMuYy5tb250aCAvIDMpIDogTmFOO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG1vbnRoICgxLTEyKS5cbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkubW9udGggLy89PiA1XG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm1vbnRoXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLm1vbnRoIDogTmFOO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGRheSBvZiB0aGUgbW9udGggKDEtMzBpc2gpLlxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS5kYXkgLy89PiAyNVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkYXlcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMuZGF5IDogTmFOO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGhvdXIgb2YgdGhlIGRheSAoMC0yMykuXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUsIDkpLmhvdXIgLy89PiA5XG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImhvdXJcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMuaG91ciA6IE5hTjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBtaW51dGUgb2YgdGhlIGhvdXIgKDAtNTkpLlxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1LCA5LCAzMCkubWludXRlIC8vPT4gMzBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwibWludXRlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLm1pbnV0ZSA6IE5hTjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBzZWNvbmQgb2YgdGhlIG1pbnV0ZSAoMC01OSkuXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUsIDksIDMwLCA1Mikuc2Vjb25kIC8vPT4gNTJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2Vjb25kXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLnNlY29uZCA6IE5hTjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBtaWxsaXNlY29uZCBvZiB0aGUgc2Vjb25kICgwLTk5OSkuXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUsIDksIDMwLCA1MiwgNjU0KS5taWxsaXNlY29uZCAvLz0+IDY1NFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJtaWxsaXNlY29uZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5taWxsaXNlY29uZCA6IE5hTjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB3ZWVrIHllYXJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAxMSwgMzEpLndlZWtZZWFyIC8vPT4gMjAxNVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ3ZWVrWWVhclwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHBvc3NpYmx5Q2FjaGVkV2Vla0RhdGEodGhpcykud2Vla1llYXIgOiBOYU47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgd2VlayBudW1iZXIgb2YgdGhlIHdlZWsgeWVhciAoMS01MmlzaCkuXG4gICAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLndlZWtOdW1iZXIgLy89PiAyMVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ3ZWVrTnVtYmVyXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gcG9zc2libHlDYWNoZWRXZWVrRGF0YSh0aGlzKS53ZWVrTnVtYmVyIDogTmFOO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGRheSBvZiB0aGUgd2Vlay5cbiAgICAgKiAxIGlzIE1vbmRheSBhbmQgNyBpcyBTdW5kYXlcbiAgICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAxMSwgMzEpLndlZWtkYXkgLy89PiA0XG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIndlZWtkYXlcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBwb3NzaWJseUNhY2hlZFdlZWtEYXRhKHRoaXMpLndlZWtkYXkgOiBOYU47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgb3JkaW5hbCAobWVhbmluZyB0aGUgZGF5IG9mIHRoZSB5ZWFyKVxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS5vcmRpbmFsIC8vPT4gMTQ1XG4gICAgICogQHR5cGUge251bWJlcnxEYXRlVGltZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9yZGluYWxcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBncmVnb3JpYW5Ub09yZGluYWwodGhpcy5jKS5vcmRpbmFsIDogTmFOO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGh1bWFuIHJlYWRhYmxlIHNob3J0IG1vbnRoIG5hbWUsIHN1Y2ggYXMgJ09jdCcuXG4gICAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMTAsIDMwKS5tb250aFNob3J0IC8vPT4gT2N0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm1vbnRoU2hvcnRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBJbmZvLm1vbnRocyhcInNob3J0XCIsIHtcbiAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZVxuICAgICAgfSlbdGhpcy5tb250aCAtIDFdIDogbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBodW1hbiByZWFkYWJsZSBsb25nIG1vbnRoIG5hbWUsIHN1Y2ggYXMgJ09jdG9iZXInLlxuICAgICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDEwLCAzMCkubW9udGhMb25nIC8vPT4gT2N0b2JlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJtb250aExvbmdcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBJbmZvLm1vbnRocyhcImxvbmdcIiwge1xuICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlXG4gICAgICB9KVt0aGlzLm1vbnRoIC0gMV0gOiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGh1bWFuIHJlYWRhYmxlIHNob3J0IHdlZWtkYXksIHN1Y2ggYXMgJ01vbicuXG4gICAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMTAsIDMwKS53ZWVrZGF5U2hvcnQgLy89PiBNb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwid2Vla2RheVNob3J0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gSW5mby53ZWVrZGF5cyhcInNob3J0XCIsIHtcbiAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZVxuICAgICAgfSlbdGhpcy53ZWVrZGF5IC0gMV0gOiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGh1bWFuIHJlYWRhYmxlIGxvbmcgd2Vla2RheSwgc3VjaCBhcyAnTW9uZGF5Jy5cbiAgICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAxMCwgMzApLndlZWtkYXlMb25nIC8vPT4gTW9uZGF5XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIndlZWtkYXlMb25nXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gSW5mby53ZWVrZGF5cyhcImxvbmdcIiwge1xuICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlXG4gICAgICB9KVt0aGlzLndlZWtkYXkgLSAxXSA6IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgVVRDIG9mZnNldCBvZiB0aGlzIERhdGVUaW1lIGluIG1pbnV0ZXNcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLm9mZnNldCAvLz0+IC0yNDBcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS5vZmZzZXQgLy89PiAwXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9mZnNldFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/ICt0aGlzLm8gOiBOYU47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgc2hvcnQgaHVtYW4gbmFtZSBmb3IgdGhlIHpvbmUncyBjdXJyZW50IG9mZnNldCwgZm9yIGV4YW1wbGUgXCJFU1RcIiBvciBcIkVEVFwiLlxuICAgICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJvZmZzZXROYW1lU2hvcnRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmICh0aGlzLmlzVmFsaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuem9uZS5vZmZzZXROYW1lKHRoaXMudHMsIHtcbiAgICAgICAgICBmb3JtYXQ6IFwic2hvcnRcIixcbiAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbG9uZyBodW1hbiBuYW1lIGZvciB0aGUgem9uZSdzIGN1cnJlbnQgb2Zmc2V0LCBmb3IgZXhhbXBsZSBcIkVhc3Rlcm4gU3RhbmRhcmQgVGltZVwiIG9yIFwiRWFzdGVybiBEYXlsaWdodCBUaW1lXCIuXG4gICAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9mZnNldE5hbWVMb25nXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAodGhpcy5pc1ZhbGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnpvbmUub2Zmc2V0TmFtZSh0aGlzLnRzLCB7XG4gICAgICAgICAgZm9ybWF0OiBcImxvbmdcIixcbiAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB3aGV0aGVyIHRoaXMgem9uZSdzIG9mZnNldCBldmVyIGNoYW5nZXMsIGFzIGluIGEgRFNULlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiaXNPZmZzZXRGaXhlZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuem9uZS51bml2ZXJzYWwgOiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgd2hldGhlciB0aGUgRGF0ZVRpbWUgaXMgaW4gYSBEU1QuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpc0luRFNUXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAodGhpcy5pc09mZnNldEZpeGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9mZnNldCA+IHRoaXMuc2V0KHtcbiAgICAgICAgICBtb250aDogMVxuICAgICAgICB9KS5vZmZzZXQgfHwgdGhpcy5vZmZzZXQgPiB0aGlzLnNldCh7XG4gICAgICAgICAgbW9udGg6IDVcbiAgICAgICAgfSkub2Zmc2V0O1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBEYXRlVGltZSBpcyBpbiBhIGxlYXAgeWVhciwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNikuaXNJbkxlYXBZZWFyIC8vPT4gdHJ1ZVxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTMpLmlzSW5MZWFwWWVhciAvLz0+IGZhbHNlXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpc0luTGVhcFllYXJcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBpc0xlYXBZZWFyKHRoaXMueWVhcik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBkYXlzIGluIHRoaXMgRGF0ZVRpbWUncyBtb250aFxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTYsIDIpLmRheXNJbk1vbnRoIC8vPT4gMjlcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE2LCAzKS5kYXlzSW5Nb250aCAvLz0+IDMxXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImRheXNJbk1vbnRoXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZGF5c0luTW9udGgodGhpcy55ZWFyLCB0aGlzLm1vbnRoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGRheXMgaW4gdGhpcyBEYXRlVGltZSdzIHllYXJcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE2KS5kYXlzSW5ZZWFyIC8vPT4gMzY2XG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxMykuZGF5c0luWWVhciAvLz0+IDM2NVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJkYXlzSW5ZZWFyXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gZGF5c0luWWVhcih0aGlzLnllYXIpIDogTmFOO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2Ygd2Vla3MgaW4gdGhpcyBEYXRlVGltZSdzIHllYXJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDA0KS53ZWVrc0luV2Vla1llYXIgLy89PiA1M1xuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTMpLndlZWtzSW5XZWVrWWVhciAvLz0+IDUyXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIndlZWtzSW5XZWVrWWVhclwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHdlZWtzSW5XZWVrWWVhcih0aGlzLndlZWtZZWFyKSA6IE5hTjtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJEQVRFX1NIT1JUXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gREFURV9TSE9SVDtcbiAgICB9XG4gICAgLyoqXG4gICAgICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnT2N0IDE0LCAxOTgzJ1xuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJEQVRFX01FRFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIERBVEVfTUVEO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3RvYmVyIDE0LCAxOTgzJ1xuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJEQVRFX0ZVTExcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBEQVRFX0ZVTEw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ1R1ZXNkYXksIE9jdG9iZXIgMTQsIDE5ODMnXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIkRBVEVfSFVHRVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIERBVEVfSFVHRTtcbiAgICB9XG4gICAgLyoqXG4gICAgICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzAgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiVElNRV9TSU1QTEVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBUSU1FX1NJTVBMRTtcbiAgICB9XG4gICAgLyoqXG4gICAgICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiVElNRV9XSVRIX1NFQ09ORFNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBUSU1FX1dJVEhfU0VDT05EUztcbiAgICB9XG4gICAgLyoqXG4gICAgICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMgQU0gRURUJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIlRJTUVfV0lUSF9TSE9SVF9PRkZTRVRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBUSU1FX1dJVEhfU0hPUlRfT0ZGU0VUO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMDoyMyBBTSBFYXN0ZXJuIERheWxpZ2h0IFRpbWUnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiVElNRV9XSVRIX0xPTkdfT0ZGU0VUXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gVElNRV9XSVRIX0xPTkdfT0ZGU0VUO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMCcsIGFsd2F5cyAyNC1ob3VyLlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJUSU1FXzI0X1NJTVBMRVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFRJTUVfMjRfU0lNUExFO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMDoyMycsIGFsd2F5cyAyNC1ob3VyLlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJUSU1FXzI0X1dJVEhfU0VDT05EU1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFRJTUVfMjRfV0lUSF9TRUNPTkRTO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMDoyMyBFRFQnLCBhbHdheXMgMjQtaG91ci5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiVElNRV8yNF9XSVRIX1NIT1JUX09GRlNFVFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFRJTUVfMjRfV0lUSF9TSE9SVF9PRkZTRVQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwOjIzIEVhc3Rlcm4gRGF5bGlnaHQgVGltZScsIGFsd2F5cyAyNC1ob3VyLlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJUSU1FXzI0X1dJVEhfTE9OR19PRkZTRVRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBUSU1FXzI0X1dJVEhfTE9OR19PRkZTRVQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzEwLzE0LzE5ODMsIDk6MzAgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiREFURVRJTUVfU0hPUlRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBEQVRFVElNRV9TSE9SVDtcbiAgICB9XG4gICAgLyoqXG4gICAgICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMTAvMTQvMTk4MywgOTozMDozMyBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJEQVRFVElNRV9TSE9SVF9XSVRIX1NFQ09ORFNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBEQVRFVElNRV9TSE9SVF9XSVRIX1NFQ09ORFM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdCAxNCwgMTk4MywgOTozMCBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJEQVRFVElNRV9NRURcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBEQVRFVElNRV9NRUQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdCAxNCwgMTk4MywgOTozMDozMyBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJEQVRFVElNRV9NRURfV0lUSF9TRUNPTkRTXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gREFURVRJTUVfTUVEX1dJVEhfU0VDT05EUztcbiAgICB9XG4gICAgLyoqXG4gICAgICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnRnJpLCAxNCBPY3QgMTk4MywgOTozMCBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJEQVRFVElNRV9NRURfV0lUSF9XRUVLREFZXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gREFURVRJTUVfTUVEX1dJVEhfV0VFS0RBWTtcbiAgICB9XG4gICAgLyoqXG4gICAgICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnT2N0b2JlciAxNCwgMTk4MywgOTozMCBBTSBFRFQnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiREFURVRJTUVfRlVMTFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIERBVEVUSU1FX0ZVTEw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdG9iZXIgMTQsIDE5ODMsIDk6MzA6MzMgQU0gRURUJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIkRBVEVUSU1FX0ZVTExfV0lUSF9TRUNPTkRTXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gREFURVRJTUVfRlVMTF9XSVRIX1NFQ09ORFM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ0ZyaWRheSwgT2N0b2JlciAxNCwgMTk4MywgOTozMCBBTSBFYXN0ZXJuIERheWxpZ2h0IFRpbWUnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiREFURVRJTUVfSFVHRVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIERBVEVUSU1FX0hVR0U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ0ZyaWRheSwgT2N0b2JlciAxNCwgMTk4MywgOTozMDozMyBBTSBFYXN0ZXJuIERheWxpZ2h0IFRpbWUnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiREFURVRJTUVfSFVHRV9XSVRIX1NFQ09ORFNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBEQVRFVElNRV9IVUdFX1dJVEhfU0VDT05EUztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRGF0ZVRpbWU7XG59KCk7XG5mdW5jdGlvbiBmcmllbmRseURhdGVUaW1lKGRhdGVUaW1laXNoKSB7XG4gIGlmIChEYXRlVGltZS5pc0RhdGVUaW1lKGRhdGVUaW1laXNoKSkge1xuICAgIHJldHVybiBkYXRlVGltZWlzaDtcbiAgfSBlbHNlIGlmIChkYXRlVGltZWlzaCAmJiBkYXRlVGltZWlzaC52YWx1ZU9mICYmIGlzTnVtYmVyKGRhdGVUaW1laXNoLnZhbHVlT2YoKSkpIHtcbiAgICByZXR1cm4gRGF0ZVRpbWUuZnJvbUpTRGF0ZShkYXRlVGltZWlzaCk7XG4gIH0gZWxzZSBpZiAoZGF0ZVRpbWVpc2ggJiYgdHlwZW9mIGRhdGVUaW1laXNoID09PSBcIm9iamVjdFwiKSB7XG4gICAgcmV0dXJuIERhdGVUaW1lLmZyb21PYmplY3QoZGF0ZVRpbWVpc2gpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcIlVua25vd24gZGF0ZXRpbWUgYXJndW1lbnQ6IFwiICsgZGF0ZVRpbWVpc2ggKyBcIiwgb2YgdHlwZSBcIiArIHR5cGVvZiBkYXRlVGltZWlzaCk7XG4gIH1cbn1cblxuZXhwb3J0cy5EYXRlVGltZSA9IERhdGVUaW1lO1xuZXhwb3J0cy5EdXJhdGlvbiA9IER1cmF0aW9uO1xuZXhwb3J0cy5GaXhlZE9mZnNldFpvbmUgPSBGaXhlZE9mZnNldFpvbmU7XG5leHBvcnRzLklBTkFab25lID0gSUFOQVpvbmU7XG5leHBvcnRzLkluZm8gPSBJbmZvO1xuZXhwb3J0cy5JbnRlcnZhbCA9IEludGVydmFsO1xuZXhwb3J0cy5JbnZhbGlkWm9uZSA9IEludmFsaWRab25lO1xuZXhwb3J0cy5Mb2NhbFpvbmUgPSBMb2NhbFpvbmU7XG5leHBvcnRzLlNldHRpbmdzID0gU2V0dGluZ3M7XG5leHBvcnRzLlpvbmUgPSBab25lO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bHV4b24uanMubWFwXG4iLCJcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSAnbHV4b24nO1xuXG5cbmV4cG9ydCBjb25zdCBjYXBpdGFsaXplID0gKHZhbHVlKSA9PiB7XG4gIGxldCB3b3JkID0gdmFsdWUuc3BsaXQoJycpO1xuICB3b3JkWzBdID0gd29yZFswXS50b1VwcGVyQ2FzZSgpO1xuICByZXR1cm4gd29yZC5qb2luKCcnKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9