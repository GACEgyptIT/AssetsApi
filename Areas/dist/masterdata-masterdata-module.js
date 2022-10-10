(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["masterdata-masterdata-module"],{

/***/ "./node_modules/json2csv/dist/json2csv.umd.js":
/*!****************************************************!*\
  !*** ./node_modules/json2csv/dist/json2csv.umd.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports) :
  undefined;
}(this, function (exports) { 'use strict';

  var domain;

  // This constructor is used to store event handlers. Instantiating this is
  // faster than explicitly calling `Object.create(null)` to get a "clean" empty
  // object (tested with v8 v4.9).
  function EventHandlers() {}
  EventHandlers.prototype = Object.create(null);

  function EventEmitter() {
    EventEmitter.init.call(this);
  }

  // nodejs oddity
  // require('events') === require('events').EventEmitter
  EventEmitter.EventEmitter = EventEmitter;

  EventEmitter.usingDomains = false;

  EventEmitter.prototype.domain = undefined;
  EventEmitter.prototype._events = undefined;
  EventEmitter.prototype._maxListeners = undefined;

  // By default EventEmitters will print a warning if more than 10 listeners are
  // added to it. This is a useful default which helps finding memory leaks.
  EventEmitter.defaultMaxListeners = 10;

  EventEmitter.init = function() {
    this.domain = null;
    if (EventEmitter.usingDomains) {
      // if there is an active domain, then attach to it.
      if (domain.active && !(this instanceof domain.Domain)) ;
    }

    if (!this._events || this._events === Object.getPrototypeOf(this)._events) {
      this._events = new EventHandlers();
      this._eventsCount = 0;
    }

    this._maxListeners = this._maxListeners || undefined;
  };

  // Obviously not all Emitters should be limited to 10. This function allows
  // that to be increased. Set to zero for unlimited.
  EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== 'number' || n < 0 || isNaN(n))
      throw new TypeError('"n" argument must be a positive number');
    this._maxListeners = n;
    return this;
  };

  function $getMaxListeners(that) {
    if (that._maxListeners === undefined)
      return EventEmitter.defaultMaxListeners;
    return that._maxListeners;
  }

  EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return $getMaxListeners(this);
  };

  // These standalone emit* functions are used to optimize calling of event
  // handlers for fast cases because emit() itself often has a variable number of
  // arguments and can be deoptimized because of that. These functions always have
  // the same number of arguments and thus do not get deoptimized, so the code
  // inside them can execute faster.
  function emitNone(handler, isFn, self) {
    if (isFn)
      handler.call(self);
    else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        listeners[i].call(self);
    }
  }
  function emitOne(handler, isFn, self, arg1) {
    if (isFn)
      handler.call(self, arg1);
    else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        listeners[i].call(self, arg1);
    }
  }
  function emitTwo(handler, isFn, self, arg1, arg2) {
    if (isFn)
      handler.call(self, arg1, arg2);
    else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        listeners[i].call(self, arg1, arg2);
    }
  }
  function emitThree(handler, isFn, self, arg1, arg2, arg3) {
    if (isFn)
      handler.call(self, arg1, arg2, arg3);
    else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        listeners[i].call(self, arg1, arg2, arg3);
    }
  }

  function emitMany(handler, isFn, self, args) {
    if (isFn)
      handler.apply(self, args);
    else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        listeners[i].apply(self, args);
    }
  }

  EventEmitter.prototype.emit = function emit(type) {
    var er, handler, len, args, i, events, domain;
    var doError = (type === 'error');

    events = this._events;
    if (events)
      doError = (doError && events.error == null);
    else if (!doError)
      return false;

    domain = this.domain;

    // If there is no 'error' event listener then throw.
    if (doError) {
      er = arguments[1];
      if (domain) {
        if (!er)
          er = new Error('Uncaught, unspecified "error" event');
        er.domainEmitter = this;
        er.domain = domain;
        er.domainThrown = false;
        domain.emit('error', er);
      } else if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
      return false;
    }

    handler = events[type];

    if (!handler)
      return false;

    var isFn = typeof handler === 'function';
    len = arguments.length;
    switch (len) {
      // fast cases
      case 1:
        emitNone(handler, isFn, this);
        break;
      case 2:
        emitOne(handler, isFn, this, arguments[1]);
        break;
      case 3:
        emitTwo(handler, isFn, this, arguments[1], arguments[2]);
        break;
      case 4:
        emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
        break;
      // slower
      default:
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        emitMany(handler, isFn, this, args);
    }

    return true;
  };

  function _addListener(target, type, listener, prepend) {
    var m;
    var events;
    var existing;

    if (typeof listener !== 'function')
      throw new TypeError('"listener" argument must be a function');

    events = target._events;
    if (!events) {
      events = target._events = new EventHandlers();
      target._eventsCount = 0;
    } else {
      // To avoid recursion in the case that type === "newListener"! Before
      // adding it to the listeners, first emit "newListener".
      if (events.newListener) {
        target.emit('newListener', type,
                    listener.listener ? listener.listener : listener);

        // Re-assign `events` because a newListener handler could have caused the
        // this._events to be assigned to a new object
        events = target._events;
      }
      existing = events[type];
    }

    if (!existing) {
      // Optimize the case of one listener. Don't need the extra array object.
      existing = events[type] = listener;
      ++target._eventsCount;
    } else {
      if (typeof existing === 'function') {
        // Adding the second element, need to change to array.
        existing = events[type] = prepend ? [listener, existing] :
                                            [existing, listener];
      } else {
        // If we've already got an array, just append.
        if (prepend) {
          existing.unshift(listener);
        } else {
          existing.push(listener);
        }
      }

      // Check for listener leak
      if (!existing.warned) {
        m = $getMaxListeners(target);
        if (m && m > 0 && existing.length > m) {
          existing.warned = true;
          var w = new Error('Possible EventEmitter memory leak detected. ' +
                              existing.length + ' ' + type + ' listeners added. ' +
                              'Use emitter.setMaxListeners() to increase limit');
          w.name = 'MaxListenersExceededWarning';
          w.emitter = target;
          w.type = type;
          w.count = existing.length;
          emitWarning(w);
        }
      }
    }

    return target;
  }
  function emitWarning(e) {
    typeof console.warn === 'function' ? console.warn(e) : console.log(e);
  }
  EventEmitter.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false);
  };

  EventEmitter.prototype.on = EventEmitter.prototype.addListener;

  EventEmitter.prototype.prependListener =
      function prependListener(type, listener) {
        return _addListener(this, type, listener, true);
      };

  function _onceWrap(target, type, listener) {
    var fired = false;
    function g() {
      target.removeListener(type, g);
      if (!fired) {
        fired = true;
        listener.apply(target, arguments);
      }
    }
    g.listener = listener;
    return g;
  }

  EventEmitter.prototype.once = function once(type, listener) {
    if (typeof listener !== 'function')
      throw new TypeError('"listener" argument must be a function');
    this.on(type, _onceWrap(this, type, listener));
    return this;
  };

  EventEmitter.prototype.prependOnceListener =
      function prependOnceListener(type, listener) {
        if (typeof listener !== 'function')
          throw new TypeError('"listener" argument must be a function');
        this.prependListener(type, _onceWrap(this, type, listener));
        return this;
      };

  // emits a 'removeListener' event iff the listener was removed
  EventEmitter.prototype.removeListener =
      function removeListener(type, listener) {
        var list, events, position, i, originalListener;

        if (typeof listener !== 'function')
          throw new TypeError('"listener" argument must be a function');

        events = this._events;
        if (!events)
          return this;

        list = events[type];
        if (!list)
          return this;

        if (list === listener || (list.listener && list.listener === listener)) {
          if (--this._eventsCount === 0)
            this._events = new EventHandlers();
          else {
            delete events[type];
            if (events.removeListener)
              this.emit('removeListener', type, list.listener || listener);
          }
        } else if (typeof list !== 'function') {
          position = -1;

          for (i = list.length; i-- > 0;) {
            if (list[i] === listener ||
                (list[i].listener && list[i].listener === listener)) {
              originalListener = list[i].listener;
              position = i;
              break;
            }
          }

          if (position < 0)
            return this;

          if (list.length === 1) {
            list[0] = undefined;
            if (--this._eventsCount === 0) {
              this._events = new EventHandlers();
              return this;
            } else {
              delete events[type];
            }
          } else {
            spliceOne(list, position);
          }

          if (events.removeListener)
            this.emit('removeListener', type, originalListener || listener);
        }

        return this;
      };

  EventEmitter.prototype.removeAllListeners =
      function removeAllListeners(type) {
        var listeners, events;

        events = this._events;
        if (!events)
          return this;

        // not listening for removeListener, no need to emit
        if (!events.removeListener) {
          if (arguments.length === 0) {
            this._events = new EventHandlers();
            this._eventsCount = 0;
          } else if (events[type]) {
            if (--this._eventsCount === 0)
              this._events = new EventHandlers();
            else
              delete events[type];
          }
          return this;
        }

        // emit removeListener for all listeners on all events
        if (arguments.length === 0) {
          var keys = Object.keys(events);
          for (var i = 0, key; i < keys.length; ++i) {
            key = keys[i];
            if (key === 'removeListener') continue;
            this.removeAllListeners(key);
          }
          this.removeAllListeners('removeListener');
          this._events = new EventHandlers();
          this._eventsCount = 0;
          return this;
        }

        listeners = events[type];

        if (typeof listeners === 'function') {
          this.removeListener(type, listeners);
        } else if (listeners) {
          // LIFO order
          do {
            this.removeListener(type, listeners[listeners.length - 1]);
          } while (listeners[0]);
        }

        return this;
      };

  EventEmitter.prototype.listeners = function listeners(type) {
    var evlistener;
    var ret;
    var events = this._events;

    if (!events)
      ret = [];
    else {
      evlistener = events[type];
      if (!evlistener)
        ret = [];
      else if (typeof evlistener === 'function')
        ret = [evlistener.listener || evlistener];
      else
        ret = unwrapListeners(evlistener);
    }

    return ret;
  };

  EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === 'function') {
      return emitter.listenerCount(type);
    } else {
      return listenerCount.call(emitter, type);
    }
  };

  EventEmitter.prototype.listenerCount = listenerCount;
  function listenerCount(type) {
    var events = this._events;

    if (events) {
      var evlistener = events[type];

      if (typeof evlistener === 'function') {
        return 1;
      } else if (evlistener) {
        return evlistener.length;
      }
    }

    return 0;
  }

  EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
  };

  // About 1.5x faster than the two-arg version of Array#splice().
  function spliceOne(list, index) {
    for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
      list[i] = list[k];
    list.pop();
  }

  function arrayClone(arr, i) {
    var copy = new Array(i);
    while (i--)
      copy[i] = arr[i];
    return copy;
  }

  function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for (var i = 0; i < ret.length; ++i) {
      ret[i] = arr[i].listener || arr[i];
    }
    return ret;
  }

  var global$1 = (typeof global !== "undefined" ? global :
              typeof self !== "undefined" ? self :
              typeof window !== "undefined" ? window : {});

  var lookup = [];
  var revLookup = [];
  var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
  var inited = false;
  function init () {
    inited = true;
    var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    for (var i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }

    revLookup['-'.charCodeAt(0)] = 62;
    revLookup['_'.charCodeAt(0)] = 63;
  }

  function toByteArray (b64) {
    if (!inited) {
      init();
    }
    var i, j, l, tmp, placeHolders, arr;
    var len = b64.length;

    if (len % 4 > 0) {
      throw new Error('Invalid string. Length must be a multiple of 4')
    }

    // the number of equal signs (place holders)
    // if there are two placeholders, than the two characters before it
    // represent one byte
    // if there is only one, then the three characters before it represent 2 bytes
    // this is just a cheap hack to not do indexOf twice
    placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

    // base64 is 4/3 + up to two characters of the original data
    arr = new Arr(len * 3 / 4 - placeHolders);

    // if there are placeholders, only get up to the last complete 4 chars
    l = placeHolders > 0 ? len - 4 : len;

    var L = 0;

    for (i = 0, j = 0; i < l; i += 4, j += 3) {
      tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
      arr[L++] = (tmp >> 16) & 0xFF;
      arr[L++] = (tmp >> 8) & 0xFF;
      arr[L++] = tmp & 0xFF;
    }

    if (placeHolders === 2) {
      tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
      arr[L++] = tmp & 0xFF;
    } else if (placeHolders === 1) {
      tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
      arr[L++] = (tmp >> 8) & 0xFF;
      arr[L++] = tmp & 0xFF;
    }

    return arr
  }

  function tripletToBase64 (num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
  }

  function encodeChunk (uint8, start, end) {
    var tmp;
    var output = [];
    for (var i = start; i < end; i += 3) {
      tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
      output.push(tripletToBase64(tmp));
    }
    return output.join('')
  }

  function fromByteArray (uint8) {
    if (!inited) {
      init();
    }
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
    var output = '';
    var parts = [];
    var maxChunkLength = 16383; // must be multiple of 3

    // go through the array every three bytes, we'll deal with trailing stuff later
    for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
      parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
    }

    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
      tmp = uint8[len - 1];
      output += lookup[tmp >> 2];
      output += lookup[(tmp << 4) & 0x3F];
      output += '==';
    } else if (extraBytes === 2) {
      tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
      output += lookup[tmp >> 10];
      output += lookup[(tmp >> 4) & 0x3F];
      output += lookup[(tmp << 2) & 0x3F];
      output += '=';
    }

    parts.push(output);

    return parts.join('')
  }

  function read (buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? (nBytes - 1) : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];

    i += d;

    e = s & ((1 << (-nBits)) - 1);
    s >>= (-nBits);
    nBits += eLen;
    for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

    m = e & ((1 << (-nBits)) - 1);
    e >>= (-nBits);
    nBits += mLen;
    for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : ((s ? -1 : 1) * Infinity)
    } else {
      m = m + Math.pow(2, mLen);
      e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
  }

  function write (buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
    var i = isLE ? 0 : (nBytes - 1);
    var d = isLE ? 1 : -1;
    var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

    value = Math.abs(value);

    if (isNaN(value) || value === Infinity) {
      m = isNaN(value) ? 1 : 0;
      e = eMax;
    } else {
      e = Math.floor(Math.log(value) / Math.LN2);
      if (value * (c = Math.pow(2, -e)) < 1) {
        e--;
        c *= 2;
      }
      if (e + eBias >= 1) {
        value += rt / c;
      } else {
        value += rt * Math.pow(2, 1 - eBias);
      }
      if (value * c >= 2) {
        e++;
        c /= 2;
      }

      if (e + eBias >= eMax) {
        m = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m = (value * c - 1) * Math.pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
        e = 0;
      }
    }

    for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

    e = (e << mLen) | m;
    eLen += mLen;
    for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

    buffer[offset + i - d] |= s * 128;
  }

  var toString = {}.toString;

  var isArray = Array.isArray || function (arr) {
    return toString.call(arr) == '[object Array]';
  };

  var INSPECT_MAX_BYTES = 50;

  /**
   * If `Buffer.TYPED_ARRAY_SUPPORT`:
   *   === true    Use Uint8Array implementation (fastest)
   *   === false   Use Object implementation (most compatible, even IE6)
   *
   * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
   * Opera 11.6+, iOS 4.2+.
   *
   * Due to various browser bugs, sometimes the Object implementation will be used even
   * when the browser supports typed arrays.
   *
   * Note:
   *
   *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
   *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
   *
   *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
   *
   *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
   *     incorrect length in some situations.

   * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
   * get the Object implementation, which is slower but behaves correctly.
   */
  Buffer.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== undefined
    ? global$1.TYPED_ARRAY_SUPPORT
    : true;

  function kMaxLength () {
    return Buffer.TYPED_ARRAY_SUPPORT
      ? 0x7fffffff
      : 0x3fffffff
  }

  function createBuffer (that, length) {
    if (kMaxLength() < length) {
      throw new RangeError('Invalid typed array length')
    }
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      // Return an augmented `Uint8Array` instance, for best performance
      that = new Uint8Array(length);
      that.__proto__ = Buffer.prototype;
    } else {
      // Fallback: Return an object instance of the Buffer class
      if (that === null) {
        that = new Buffer(length);
      }
      that.length = length;
    }

    return that
  }

  /**
   * The Buffer constructor returns instances of `Uint8Array` that have their
   * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
   * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
   * and the `Uint8Array` methods. Square bracket notation works as expected -- it
   * returns a single octet.
   *
   * The `Uint8Array` prototype remains unmodified.
   */

  function Buffer (arg, encodingOrOffset, length) {
    if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
      return new Buffer(arg, encodingOrOffset, length)
    }

    // Common case.
    if (typeof arg === 'number') {
      if (typeof encodingOrOffset === 'string') {
        throw new Error(
          'If encoding is specified then the first argument must be a string'
        )
      }
      return allocUnsafe(this, arg)
    }
    return from(this, arg, encodingOrOffset, length)
  }

  Buffer.poolSize = 8192; // not used by this implementation

  // TODO: Legacy, not needed anymore. Remove in next major version.
  Buffer._augment = function (arr) {
    arr.__proto__ = Buffer.prototype;
    return arr
  };

  function from (that, value, encodingOrOffset, length) {
    if (typeof value === 'number') {
      throw new TypeError('"value" argument must not be a number')
    }

    if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
      return fromArrayBuffer(that, value, encodingOrOffset, length)
    }

    if (typeof value === 'string') {
      return fromString(that, value, encodingOrOffset)
    }

    return fromObject(that, value)
  }

  /**
   * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
   * if value is a number.
   * Buffer.from(str[, encoding])
   * Buffer.from(array)
   * Buffer.from(buffer)
   * Buffer.from(arrayBuffer[, byteOffset[, length]])
   **/
  Buffer.from = function (value, encodingOrOffset, length) {
    return from(null, value, encodingOrOffset, length)
  };

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    Buffer.prototype.__proto__ = Uint8Array.prototype;
    Buffer.__proto__ = Uint8Array;
  }

  function assertSize (size) {
    if (typeof size !== 'number') {
      throw new TypeError('"size" argument must be a number')
    } else if (size < 0) {
      throw new RangeError('"size" argument must not be negative')
    }
  }

  function alloc (that, size, fill, encoding) {
    assertSize(size);
    if (size <= 0) {
      return createBuffer(that, size)
    }
    if (fill !== undefined) {
      // Only pay attention to encoding if it's a string. This
      // prevents accidentally sending in a number that would
      // be interpretted as a start offset.
      return typeof encoding === 'string'
        ? createBuffer(that, size).fill(fill, encoding)
        : createBuffer(that, size).fill(fill)
    }
    return createBuffer(that, size)
  }

  /**
   * Creates a new filled Buffer instance.
   * alloc(size[, fill[, encoding]])
   **/
  Buffer.alloc = function (size, fill, encoding) {
    return alloc(null, size, fill, encoding)
  };

  function allocUnsafe (that, size) {
    assertSize(size);
    that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
    if (!Buffer.TYPED_ARRAY_SUPPORT) {
      for (var i = 0; i < size; ++i) {
        that[i] = 0;
      }
    }
    return that
  }

  /**
   * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
   * */
  Buffer.allocUnsafe = function (size) {
    return allocUnsafe(null, size)
  };
  /**
   * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
   */
  Buffer.allocUnsafeSlow = function (size) {
    return allocUnsafe(null, size)
  };

  function fromString (that, string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') {
      encoding = 'utf8';
    }

    if (!Buffer.isEncoding(encoding)) {
      throw new TypeError('"encoding" must be a valid string encoding')
    }

    var length = byteLength(string, encoding) | 0;
    that = createBuffer(that, length);

    var actual = that.write(string, encoding);

    if (actual !== length) {
      // Writing a hex string, for example, that contains invalid characters will
      // cause everything after the first invalid character to be ignored. (e.g.
      // 'abxxcd' will be treated as 'ab')
      that = that.slice(0, actual);
    }

    return that
  }

  function fromArrayLike (that, array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0;
    that = createBuffer(that, length);
    for (var i = 0; i < length; i += 1) {
      that[i] = array[i] & 255;
    }
    return that
  }

  function fromArrayBuffer (that, array, byteOffset, length) {
    array.byteLength; // this throws if `array` is not a valid ArrayBuffer

    if (byteOffset < 0 || array.byteLength < byteOffset) {
      throw new RangeError('\'offset\' is out of bounds')
    }

    if (array.byteLength < byteOffset + (length || 0)) {
      throw new RangeError('\'length\' is out of bounds')
    }

    if (byteOffset === undefined && length === undefined) {
      array = new Uint8Array(array);
    } else if (length === undefined) {
      array = new Uint8Array(array, byteOffset);
    } else {
      array = new Uint8Array(array, byteOffset, length);
    }

    if (Buffer.TYPED_ARRAY_SUPPORT) {
      // Return an augmented `Uint8Array` instance, for best performance
      that = array;
      that.__proto__ = Buffer.prototype;
    } else {
      // Fallback: Return an object instance of the Buffer class
      that = fromArrayLike(that, array);
    }
    return that
  }

  function fromObject (that, obj) {
    if (internalIsBuffer(obj)) {
      var len = checked(obj.length) | 0;
      that = createBuffer(that, len);

      if (that.length === 0) {
        return that
      }

      obj.copy(that, 0, 0, len);
      return that
    }

    if (obj) {
      if ((typeof ArrayBuffer !== 'undefined' &&
          obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
        if (typeof obj.length !== 'number' || isnan(obj.length)) {
          return createBuffer(that, 0)
        }
        return fromArrayLike(that, obj)
      }

      if (obj.type === 'Buffer' && isArray(obj.data)) {
        return fromArrayLike(that, obj.data)
      }
    }

    throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
  }

  function checked (length) {
    // Note: cannot use `length < kMaxLength()` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= kMaxLength()) {
      throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                           'size: 0x' + kMaxLength().toString(16) + ' bytes')
    }
    return length | 0
  }
  Buffer.isBuffer = isBuffer;
  function internalIsBuffer (b) {
    return !!(b != null && b._isBuffer)
  }

  Buffer.compare = function compare (a, b) {
    if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
      throw new TypeError('Arguments must be Buffers')
    }

    if (a === b) return 0

    var x = a.length;
    var y = b.length;

    for (var i = 0, len = Math.min(x, y); i < len; ++i) {
      if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break
      }
    }

    if (x < y) return -1
    if (y < x) return 1
    return 0
  };

  Buffer.isEncoding = function isEncoding (encoding) {
    switch (String(encoding).toLowerCase()) {
      case 'hex':
      case 'utf8':
      case 'utf-8':
      case 'ascii':
      case 'latin1':
      case 'binary':
      case 'base64':
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return true
      default:
        return false
    }
  };

  Buffer.concat = function concat (list, length) {
    if (!isArray(list)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }

    if (list.length === 0) {
      return Buffer.alloc(0)
    }

    var i;
    if (length === undefined) {
      length = 0;
      for (i = 0; i < list.length; ++i) {
        length += list[i].length;
      }
    }

    var buffer = Buffer.allocUnsafe(length);
    var pos = 0;
    for (i = 0; i < list.length; ++i) {
      var buf = list[i];
      if (!internalIsBuffer(buf)) {
        throw new TypeError('"list" argument must be an Array of Buffers')
      }
      buf.copy(buffer, pos);
      pos += buf.length;
    }
    return buffer
  };

  function byteLength (string, encoding) {
    if (internalIsBuffer(string)) {
      return string.length
    }
    if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
        (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
      return string.byteLength
    }
    if (typeof string !== 'string') {
      string = '' + string;
    }

    var len = string.length;
    if (len === 0) return 0

    // Use a for loop to avoid recursion
    var loweredCase = false;
    for (;;) {
      switch (encoding) {
        case 'ascii':
        case 'latin1':
        case 'binary':
          return len
        case 'utf8':
        case 'utf-8':
        case undefined:
          return utf8ToBytes(string).length
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return len * 2
        case 'hex':
          return len >>> 1
        case 'base64':
          return base64ToBytes(string).length
        default:
          if (loweredCase) return utf8ToBytes(string).length // assume utf8
          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  }
  Buffer.byteLength = byteLength;

  function slowToString (encoding, start, end) {
    var loweredCase = false;

    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.

    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) {
      start = 0;
    }
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) {
      return ''
    }

    if (end === undefined || end > this.length) {
      end = this.length;
    }

    if (end <= 0) {
      return ''
    }

    // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;

    if (end <= start) {
      return ''
    }

    if (!encoding) encoding = 'utf8';

    while (true) {
      switch (encoding) {
        case 'hex':
          return hexSlice(this, start, end)

        case 'utf8':
        case 'utf-8':
          return utf8Slice(this, start, end)

        case 'ascii':
          return asciiSlice(this, start, end)

        case 'latin1':
        case 'binary':
          return latin1Slice(this, start, end)

        case 'base64':
          return base64Slice(this, start, end)

        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return utf16leSlice(this, start, end)

        default:
          if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
          encoding = (encoding + '').toLowerCase();
          loweredCase = true;
      }
    }
  }

  // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
  // Buffer instances.
  Buffer.prototype._isBuffer = true;

  function swap (b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
  }

  Buffer.prototype.swap16 = function swap16 () {
    var len = this.length;
    if (len % 2 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 16-bits')
    }
    for (var i = 0; i < len; i += 2) {
      swap(this, i, i + 1);
    }
    return this
  };

  Buffer.prototype.swap32 = function swap32 () {
    var len = this.length;
    if (len % 4 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 32-bits')
    }
    for (var i = 0; i < len; i += 4) {
      swap(this, i, i + 3);
      swap(this, i + 1, i + 2);
    }
    return this
  };

  Buffer.prototype.swap64 = function swap64 () {
    var len = this.length;
    if (len % 8 !== 0) {
      throw new RangeError('Buffer size must be a multiple of 64-bits')
    }
    for (var i = 0; i < len; i += 8) {
      swap(this, i, i + 7);
      swap(this, i + 1, i + 6);
      swap(this, i + 2, i + 5);
      swap(this, i + 3, i + 4);
    }
    return this
  };

  Buffer.prototype.toString = function toString () {
    var length = this.length | 0;
    if (length === 0) return ''
    if (arguments.length === 0) return utf8Slice(this, 0, length)
    return slowToString.apply(this, arguments)
  };

  Buffer.prototype.equals = function equals (b) {
    if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer')
    if (this === b) return true
    return Buffer.compare(this, b) === 0
  };

  Buffer.prototype.inspect = function inspect () {
    var str = '';
    var max = INSPECT_MAX_BYTES;
    if (this.length > 0) {
      str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
      if (this.length > max) str += ' ... ';
    }
    return '<Buffer ' + str + '>'
  };

  Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
    if (!internalIsBuffer(target)) {
      throw new TypeError('Argument must be a Buffer')
    }

    if (start === undefined) {
      start = 0;
    }
    if (end === undefined) {
      end = target ? target.length : 0;
    }
    if (thisStart === undefined) {
      thisStart = 0;
    }
    if (thisEnd === undefined) {
      thisEnd = this.length;
    }

    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
      throw new RangeError('out of range index')
    }

    if (thisStart >= thisEnd && start >= end) {
      return 0
    }
    if (thisStart >= thisEnd) {
      return -1
    }
    if (start >= end) {
      return 1
    }

    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;

    if (this === target) return 0

    var x = thisEnd - thisStart;
    var y = end - start;
    var len = Math.min(x, y);

    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);

    for (var i = 0; i < len; ++i) {
      if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break
      }
    }

    if (x < y) return -1
    if (y < x) return 1
    return 0
  };

  // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
  // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
  //
  // Arguments:
  // - buffer - a Buffer to search
  // - val - a string, Buffer, or number
  // - byteOffset - an index into `buffer`; will be clamped to an int32
  // - encoding - an optional encoding, relevant is val is a string
  // - dir - true for indexOf, false for lastIndexOf
  function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1

    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
      encoding = byteOffset;
      byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) {
      byteOffset = 0x7fffffff;
    } else if (byteOffset < -0x80000000) {
      byteOffset = -0x80000000;
    }
    byteOffset = +byteOffset;  // Coerce to Number.
    if (isNaN(byteOffset)) {
      // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
      byteOffset = dir ? 0 : (buffer.length - 1);
    }

    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
      if (dir) return -1
      else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
      if (dir) byteOffset = 0;
      else return -1
    }

    // Normalize val
    if (typeof val === 'string') {
      val = Buffer.from(val, encoding);
    }

    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (internalIsBuffer(val)) {
      // Special case: looking for empty string/buffer always fails
      if (val.length === 0) {
        return -1
      }
      return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
    } else if (typeof val === 'number') {
      val = val & 0xFF; // Search for a byte value [0-255]
      if (Buffer.TYPED_ARRAY_SUPPORT &&
          typeof Uint8Array.prototype.indexOf === 'function') {
        if (dir) {
          return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
        } else {
          return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
        }
      }
      return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
    }

    throw new TypeError('val must be string, number or Buffer')
  }

  function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;

    if (encoding !== undefined) {
      encoding = String(encoding).toLowerCase();
      if (encoding === 'ucs2' || encoding === 'ucs-2' ||
          encoding === 'utf16le' || encoding === 'utf-16le') {
        if (arr.length < 2 || val.length < 2) {
          return -1
        }
        indexSize = 2;
        arrLength /= 2;
        valLength /= 2;
        byteOffset /= 2;
      }
    }

    function read (buf, i) {
      if (indexSize === 1) {
        return buf[i]
      } else {
        return buf.readUInt16BE(i * indexSize)
      }
    }

    var i;
    if (dir) {
      var foundIndex = -1;
      for (i = byteOffset; i < arrLength; i++) {
        if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
          if (foundIndex === -1) foundIndex = i;
          if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
        } else {
          if (foundIndex !== -1) i -= i - foundIndex;
          foundIndex = -1;
        }
      }
    } else {
      if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
      for (i = byteOffset; i >= 0; i--) {
        var found = true;
        for (var j = 0; j < valLength; j++) {
          if (read(arr, i + j) !== read(val, j)) {
            found = false;
            break
          }
        }
        if (found) return i
      }
    }

    return -1
  }

  Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1
  };

  Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
  };

  Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
  };

  function hexWrite (buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) {
      length = remaining;
    } else {
      length = Number(length);
      if (length > remaining) {
        length = remaining;
      }
    }

    // must be an even number of digits
    var strLen = string.length;
    if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

    if (length > strLen / 2) {
      length = strLen / 2;
    }
    for (var i = 0; i < length; ++i) {
      var parsed = parseInt(string.substr(i * 2, 2), 16);
      if (isNaN(parsed)) return i
      buf[offset + i] = parsed;
    }
    return i
  }

  function utf8Write (buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
  }

  function asciiWrite (buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length)
  }

  function latin1Write (buf, string, offset, length) {
    return asciiWrite(buf, string, offset, length)
  }

  function base64Write (buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length)
  }

  function ucs2Write (buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
  }

  Buffer.prototype.write = function write (string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
      encoding = 'utf8';
      length = this.length;
      offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
      encoding = offset;
      length = this.length;
      offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
      offset = offset | 0;
      if (isFinite(length)) {
        length = length | 0;
        if (encoding === undefined) encoding = 'utf8';
      } else {
        encoding = length;
        length = undefined;
      }
    // legacy write(string, encoding, offset, length) - remove in v0.13
    } else {
      throw new Error(
        'Buffer.write(string, encoding, offset[, length]) is no longer supported'
      )
    }

    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;

    if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
      throw new RangeError('Attempt to write outside buffer bounds')
    }

    if (!encoding) encoding = 'utf8';

    var loweredCase = false;
    for (;;) {
      switch (encoding) {
        case 'hex':
          return hexWrite(this, string, offset, length)

        case 'utf8':
        case 'utf-8':
          return utf8Write(this, string, offset, length)

        case 'ascii':
          return asciiWrite(this, string, offset, length)

        case 'latin1':
        case 'binary':
          return latin1Write(this, string, offset, length)

        case 'base64':
          // Warning: maxLength not taken into account in base64Write
          return base64Write(this, string, offset, length)

        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return ucs2Write(this, string, offset, length)

        default:
          if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
          encoding = ('' + encoding).toLowerCase();
          loweredCase = true;
      }
    }
  };

  Buffer.prototype.toJSON = function toJSON () {
    return {
      type: 'Buffer',
      data: Array.prototype.slice.call(this._arr || this, 0)
    }
  };

  function base64Slice (buf, start, end) {
    if (start === 0 && end === buf.length) {
      return fromByteArray(buf)
    } else {
      return fromByteArray(buf.slice(start, end))
    }
  }

  function utf8Slice (buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];

    var i = start;
    while (i < end) {
      var firstByte = buf[i];
      var codePoint = null;
      var bytesPerSequence = (firstByte > 0xEF) ? 4
        : (firstByte > 0xDF) ? 3
        : (firstByte > 0xBF) ? 2
        : 1;

      if (i + bytesPerSequence <= end) {
        var secondByte, thirdByte, fourthByte, tempCodePoint;

        switch (bytesPerSequence) {
          case 1:
            if (firstByte < 0x80) {
              codePoint = firstByte;
            }
            break
          case 2:
            secondByte = buf[i + 1];
            if ((secondByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
              if (tempCodePoint > 0x7F) {
                codePoint = tempCodePoint;
              }
            }
            break
          case 3:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
              if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                codePoint = tempCodePoint;
              }
            }
            break
          case 4:
            secondByte = buf[i + 1];
            thirdByte = buf[i + 2];
            fourthByte = buf[i + 3];
            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
              tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
              if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                codePoint = tempCodePoint;
              }
            }
        }
      }

      if (codePoint === null) {
        // we did not generate a valid codePoint so insert a
        // replacement char (U+FFFD) and advance only 1 byte
        codePoint = 0xFFFD;
        bytesPerSequence = 1;
      } else if (codePoint > 0xFFFF) {
        // encode to utf16 (surrogate pair dance)
        codePoint -= 0x10000;
        res.push(codePoint >>> 10 & 0x3FF | 0xD800);
        codePoint = 0xDC00 | codePoint & 0x3FF;
      }

      res.push(codePoint);
      i += bytesPerSequence;
    }

    return decodeCodePointsArray(res)
  }

  // Based on http://stackoverflow.com/a/22747272/680742, the browser with
  // the lowest limit is Chrome, with 0x10000 args.
  // We go 1 magnitude less, for safety
  var MAX_ARGUMENTS_LENGTH = 0x1000;

  function decodeCodePointsArray (codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) {
      return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    }

    // Decode in chunks to avoid "call stack size exceeded".
    var res = '';
    var i = 0;
    while (i < len) {
      res += String.fromCharCode.apply(
        String,
        codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
      );
    }
    return res
  }

  function asciiSlice (buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);

    for (var i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i] & 0x7F);
    }
    return ret
  }

  function latin1Slice (buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);

    for (var i = start; i < end; ++i) {
      ret += String.fromCharCode(buf[i]);
    }
    return ret
  }

  function hexSlice (buf, start, end) {
    var len = buf.length;

    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;

    var out = '';
    for (var i = start; i < end; ++i) {
      out += toHex(buf[i]);
    }
    return out
  }

  function utf16leSlice (buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';
    for (var i = 0; i < bytes.length; i += 2) {
      res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    }
    return res
  }

  Buffer.prototype.slice = function slice (start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;

    if (start < 0) {
      start += len;
      if (start < 0) start = 0;
    } else if (start > len) {
      start = len;
    }

    if (end < 0) {
      end += len;
      if (end < 0) end = 0;
    } else if (end > len) {
      end = len;
    }

    if (end < start) end = start;

    var newBuf;
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      newBuf = this.subarray(start, end);
      newBuf.__proto__ = Buffer.prototype;
    } else {
      var sliceLen = end - start;
      newBuf = new Buffer(sliceLen, undefined);
      for (var i = 0; i < sliceLen; ++i) {
        newBuf[i] = this[i + start];
      }
    }

    return newBuf
  };

  /*
   * Need to make sure that buffer isn't trying to write out of bounds.
   */
  function checkOffset (offset, ext, length) {
    if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
  }

  Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);

    var val = this[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }

    return val
  };

  Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
      checkOffset(offset, byteLength, this.length);
    }

    var val = this[offset + --byteLength];
    var mul = 1;
    while (byteLength > 0 && (mul *= 0x100)) {
      val += this[offset + --byteLength] * mul;
    }

    return val
  };

  Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset]
  };

  Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | (this[offset + 1] << 8)
  };

  Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    return (this[offset] << 8) | this[offset + 1]
  };

  Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);

    return ((this[offset]) |
        (this[offset + 1] << 8) |
        (this[offset + 2] << 16)) +
        (this[offset + 3] * 0x1000000)
  };

  Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);

    return (this[offset] * 0x1000000) +
      ((this[offset + 1] << 16) |
      (this[offset + 2] << 8) |
      this[offset + 3])
  };

  Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);

    var val = this[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
      val += this[offset + i] * mul;
    }
    mul *= 0x80;

    if (val >= mul) val -= Math.pow(2, 8 * byteLength);

    return val
  };

  Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);

    var i = byteLength;
    var mul = 1;
    var val = this[offset + --i];
    while (i > 0 && (mul *= 0x100)) {
      val += this[offset + --i] * mul;
    }
    mul *= 0x80;

    if (val >= mul) val -= Math.pow(2, 8 * byteLength);

    return val
  };

  Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return (this[offset])
    return ((0xff - this[offset] + 1) * -1)
  };

  Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset] | (this[offset + 1] << 8);
    return (val & 0x8000) ? val | 0xFFFF0000 : val
  };

  Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | (this[offset] << 8);
    return (val & 0x8000) ? val | 0xFFFF0000 : val
  };

  Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);

    return (this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16) |
      (this[offset + 3] << 24)
  };

  Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);

    return (this[offset] << 24) |
      (this[offset + 1] << 16) |
      (this[offset + 2] << 8) |
      (this[offset + 3])
  };

  Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);
    return read(this, offset, true, 23, 4)
  };

  Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 4, this.length);
    return read(this, offset, false, 23, 4)
  };

  Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 8, this.length);
    return read(this, offset, true, 52, 8)
  };

  Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
    if (!noAssert) checkOffset(offset, 8, this.length);
    return read(this, offset, false, 52, 8)
  };

  function checkInt (buf, value, offset, ext, max, min) {
    if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
    if (offset + ext > buf.length) throw new RangeError('Index out of range')
  }

  Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
      var maxBytes = Math.pow(2, 8 * byteLength) - 1;
      checkInt(this, value, offset, byteLength, maxBytes, 0);
    }

    var mul = 1;
    var i = 0;
    this[offset] = value & 0xFF;
    while (++i < byteLength && (mul *= 0x100)) {
      this[offset + i] = (value / mul) & 0xFF;
    }

    return offset + byteLength
  };

  Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
      var maxBytes = Math.pow(2, 8 * byteLength) - 1;
      checkInt(this, value, offset, byteLength, maxBytes, 0);
    }

    var i = byteLength - 1;
    var mul = 1;
    this[offset + i] = value & 0xFF;
    while (--i >= 0 && (mul *= 0x100)) {
      this[offset + i] = (value / mul) & 0xFF;
    }

    return offset + byteLength
  };

  Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
    this[offset] = (value & 0xff);
    return offset + 1
  };

  function objectWriteUInt16 (buf, value, offset, littleEndian) {
    if (value < 0) value = 0xffff + value + 1;
    for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
      buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
        (littleEndian ? i : 1 - i) * 8;
    }
  }

  Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value & 0xff);
      this[offset + 1] = (value >>> 8);
    } else {
      objectWriteUInt16(this, value, offset, true);
    }
    return offset + 2
  };

  Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 8);
      this[offset + 1] = (value & 0xff);
    } else {
      objectWriteUInt16(this, value, offset, false);
    }
    return offset + 2
  };

  function objectWriteUInt32 (buf, value, offset, littleEndian) {
    if (value < 0) value = 0xffffffff + value + 1;
    for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
      buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
    }
  }

  Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset + 3] = (value >>> 24);
      this[offset + 2] = (value >>> 16);
      this[offset + 1] = (value >>> 8);
      this[offset] = (value & 0xff);
    } else {
      objectWriteUInt32(this, value, offset, true);
    }
    return offset + 4
  };

  Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 24);
      this[offset + 1] = (value >>> 16);
      this[offset + 2] = (value >>> 8);
      this[offset + 3] = (value & 0xff);
    } else {
      objectWriteUInt32(this, value, offset, false);
    }
    return offset + 4
  };

  Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);

      checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }

    var i = 0;
    var mul = 1;
    var sub = 0;
    this[offset] = value & 0xFF;
    while (++i < byteLength && (mul *= 0x100)) {
      if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
        sub = 1;
      }
      this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
    }

    return offset + byteLength
  };

  Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
      var limit = Math.pow(2, 8 * byteLength - 1);

      checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }

    var i = byteLength - 1;
    var mul = 1;
    var sub = 0;
    this[offset + i] = value & 0xFF;
    while (--i >= 0 && (mul *= 0x100)) {
      if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
        sub = 1;
      }
      this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
    }

    return offset + byteLength
  };

  Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
    if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = (value & 0xff);
    return offset + 1
  };

  Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value & 0xff);
      this[offset + 1] = (value >>> 8);
    } else {
      objectWriteUInt16(this, value, offset, true);
    }
    return offset + 2
  };

  Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 8);
      this[offset + 1] = (value & 0xff);
    } else {
      objectWriteUInt16(this, value, offset, false);
    }
    return offset + 2
  };

  Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value & 0xff);
      this[offset + 1] = (value >>> 8);
      this[offset + 2] = (value >>> 16);
      this[offset + 3] = (value >>> 24);
    } else {
      objectWriteUInt32(this, value, offset, true);
    }
    return offset + 4
  };

  Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    if (value < 0) value = 0xffffffff + value + 1;
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      this[offset] = (value >>> 24);
      this[offset + 1] = (value >>> 16);
      this[offset + 2] = (value >>> 8);
      this[offset + 3] = (value & 0xff);
    } else {
      objectWriteUInt32(this, value, offset, false);
    }
    return offset + 4
  };

  function checkIEEE754 (buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range')
    if (offset < 0) throw new RangeError('Index out of range')
  }

  function writeFloat (buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
    }
    write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4
  }

  Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert)
  };

  Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert)
  };

  function writeDouble (buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
      checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
    }
    write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8
  }

  Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert)
  };

  Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert)
  };

  // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
  Buffer.prototype.copy = function copy (target, targetStart, start, end) {
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;

    // Copy 0 bytes; we're done
    if (end === start) return 0
    if (target.length === 0 || this.length === 0) return 0

    // Fatal error conditions
    if (targetStart < 0) {
      throw new RangeError('targetStart out of bounds')
    }
    if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
    if (end < 0) throw new RangeError('sourceEnd out of bounds')

    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) {
      end = target.length - targetStart + start;
    }

    var len = end - start;
    var i;

    if (this === target && start < targetStart && targetStart < end) {
      // descending copy from end
      for (i = len - 1; i >= 0; --i) {
        target[i + targetStart] = this[i + start];
      }
    } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
      // ascending copy from start
      for (i = 0; i < len; ++i) {
        target[i + targetStart] = this[i + start];
      }
    } else {
      Uint8Array.prototype.set.call(
        target,
        this.subarray(start, start + len),
        targetStart
      );
    }

    return len
  };

  // Usage:
  //    buffer.fill(number[, offset[, end]])
  //    buffer.fill(buffer[, offset[, end]])
  //    buffer.fill(string[, offset[, end]][, encoding])
  Buffer.prototype.fill = function fill (val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
      if (typeof start === 'string') {
        encoding = start;
        start = 0;
        end = this.length;
      } else if (typeof end === 'string') {
        encoding = end;
        end = this.length;
      }
      if (val.length === 1) {
        var code = val.charCodeAt(0);
        if (code < 256) {
          val = code;
        }
      }
      if (encoding !== undefined && typeof encoding !== 'string') {
        throw new TypeError('encoding must be a string')
      }
      if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
        throw new TypeError('Unknown encoding: ' + encoding)
      }
    } else if (typeof val === 'number') {
      val = val & 255;
    }

    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) {
      throw new RangeError('Out of range index')
    }

    if (end <= start) {
      return this
    }

    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;

    if (!val) val = 0;

    var i;
    if (typeof val === 'number') {
      for (i = start; i < end; ++i) {
        this[i] = val;
      }
    } else {
      var bytes = internalIsBuffer(val)
        ? val
        : utf8ToBytes(new Buffer(val, encoding).toString());
      var len = bytes.length;
      for (i = 0; i < end - start; ++i) {
        this[i + start] = bytes[i % len];
      }
    }

    return this
  };

  // HELPER FUNCTIONS
  // ================

  var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

  function base64clean (str) {
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = stringtrim(str).replace(INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return ''
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while (str.length % 4 !== 0) {
      str = str + '=';
    }
    return str
  }

  function stringtrim (str) {
    if (str.trim) return str.trim()
    return str.replace(/^\s+|\s+$/g, '')
  }

  function toHex (n) {
    if (n < 16) return '0' + n.toString(16)
    return n.toString(16)
  }

  function utf8ToBytes (string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];

    for (var i = 0; i < length; ++i) {
      codePoint = string.charCodeAt(i);

      // is surrogate component
      if (codePoint > 0xD7FF && codePoint < 0xE000) {
        // last char was a lead
        if (!leadSurrogate) {
          // no lead yet
          if (codePoint > 0xDBFF) {
            // unexpected trail
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            continue
          } else if (i + 1 === length) {
            // unpaired lead
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            continue
          }

          // valid lead
          leadSurrogate = codePoint;

          continue
        }

        // 2 leads in a row
        if (codePoint < 0xDC00) {
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          leadSurrogate = codePoint;
          continue
        }

        // valid surrogate pair
        codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
      } else if (leadSurrogate) {
        // valid bmp char, but last char was a lead
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
      }

      leadSurrogate = null;

      // encode utf8
      if (codePoint < 0x80) {
        if ((units -= 1) < 0) break
        bytes.push(codePoint);
      } else if (codePoint < 0x800) {
        if ((units -= 2) < 0) break
        bytes.push(
          codePoint >> 0x6 | 0xC0,
          codePoint & 0x3F | 0x80
        );
      } else if (codePoint < 0x10000) {
        if ((units -= 3) < 0) break
        bytes.push(
          codePoint >> 0xC | 0xE0,
          codePoint >> 0x6 & 0x3F | 0x80,
          codePoint & 0x3F | 0x80
        );
      } else if (codePoint < 0x110000) {
        if ((units -= 4) < 0) break
        bytes.push(
          codePoint >> 0x12 | 0xF0,
          codePoint >> 0xC & 0x3F | 0x80,
          codePoint >> 0x6 & 0x3F | 0x80,
          codePoint & 0x3F | 0x80
        );
      } else {
        throw new Error('Invalid code point')
      }
    }

    return bytes
  }

  function asciiToBytes (str) {
    var byteArray = [];
    for (var i = 0; i < str.length; ++i) {
      // Node's code seems to be doing this and not & 0x7F..
      byteArray.push(str.charCodeAt(i) & 0xFF);
    }
    return byteArray
  }

  function utf16leToBytes (str, units) {
    var c, hi, lo;
    var byteArray = [];
    for (var i = 0; i < str.length; ++i) {
      if ((units -= 2) < 0) break

      c = str.charCodeAt(i);
      hi = c >> 8;
      lo = c % 256;
      byteArray.push(lo);
      byteArray.push(hi);
    }

    return byteArray
  }


  function base64ToBytes (str) {
    return toByteArray(base64clean(str))
  }

  function blitBuffer (src, dst, offset, length) {
    for (var i = 0; i < length; ++i) {
      if ((i + offset >= dst.length) || (i >= src.length)) break
      dst[i + offset] = src[i];
    }
    return i
  }

  function isnan (val) {
    return val !== val // eslint-disable-line no-self-compare
  }


  // the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
  // The _isBuffer check is for Safari 5-7 support, because it's missing
  // Object.prototype.constructor. Remove this eventually
  function isBuffer(obj) {
    return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj))
  }

  function isFastBuffer (obj) {
    return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
  }

  // For Node v0.10 support. Remove this eventually.
  function isSlowBuffer (obj) {
    return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0))
  }

  // shim for using process in browser
  // based off https://github.com/defunctzombie/node-process/blob/master/browser.js

  function defaultSetTimout() {
      throw new Error('setTimeout has not been defined');
  }
  function defaultClearTimeout () {
      throw new Error('clearTimeout has not been defined');
  }
  var cachedSetTimeout = defaultSetTimout;
  var cachedClearTimeout = defaultClearTimeout;
  if (typeof global$1.setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
  }
  if (typeof global$1.clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
  }

  function runTimeout(fun) {
      if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
      }
      // if setTimeout wasn't available but was latter defined
      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
      }
      try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
      } catch(e){
          try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
              return cachedSetTimeout.call(null, fun, 0);
          } catch(e){
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
              return cachedSetTimeout.call(this, fun, 0);
          }
      }


  }
  function runClearTimeout(marker) {
      if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
      }
      // if clearTimeout wasn't available but was latter defined
      if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
      }
      try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
      } catch (e){
          try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
              return cachedClearTimeout.call(null, marker);
          } catch (e){
              // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
              // Some versions of I.E. have different rules for clearTimeout vs setTimeout
              return cachedClearTimeout.call(this, marker);
          }
      }



  }
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;

  function cleanUpNextTick() {
      if (!draining || !currentQueue) {
          return;
      }
      draining = false;
      if (currentQueue.length) {
          queue = currentQueue.concat(queue);
      } else {
          queueIndex = -1;
      }
      if (queue.length) {
          drainQueue();
      }
  }

  function drainQueue() {
      if (draining) {
          return;
      }
      var timeout = runTimeout(cleanUpNextTick);
      draining = true;

      var len = queue.length;
      while(len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
              if (currentQueue) {
                  currentQueue[queueIndex].run();
              }
          }
          queueIndex = -1;
          len = queue.length;
      }
      currentQueue = null;
      draining = false;
      runClearTimeout(timeout);
  }
  function nextTick(fun) {
      var args = new Array(arguments.length - 1);
      if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
              args[i - 1] = arguments[i];
          }
      }
      queue.push(new Item(fun, args));
      if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
      }
  }
  // v8 likes predictible objects
  function Item(fun, array) {
      this.fun = fun;
      this.array = array;
  }
  Item.prototype.run = function () {
      this.fun.apply(null, this.array);
  };
  var title = 'browser';
  var platform = 'browser';
  var browser = true;
  var env = {};
  var argv = [];
  var version = ''; // empty string to avoid regexp issues
  var versions = {};
  var release = {};
  var config = {};

  function noop() {}

  var on = noop;
  var addListener = noop;
  var once = noop;
  var off = noop;
  var removeListener = noop;
  var removeAllListeners = noop;
  var emit = noop;

  function binding(name) {
      throw new Error('process.binding is not supported');
  }

  function cwd () { return '/' }
  function chdir (dir) {
      throw new Error('process.chdir is not supported');
  }function umask() { return 0; }

  // from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
  var performance = global$1.performance || {};
  var performanceNow =
    performance.now        ||
    performance.mozNow     ||
    performance.msNow      ||
    performance.oNow       ||
    performance.webkitNow  ||
    function(){ return (new Date()).getTime() };

  // generate timestamp or delta
  // see http://nodejs.org/api/process.html#process_process_hrtime
  function hrtime(previousTimestamp){
    var clocktime = performanceNow.call(performance)*1e-3;
    var seconds = Math.floor(clocktime);
    var nanoseconds = Math.floor((clocktime%1)*1e9);
    if (previousTimestamp) {
      seconds = seconds - previousTimestamp[0];
      nanoseconds = nanoseconds - previousTimestamp[1];
      if (nanoseconds<0) {
        seconds--;
        nanoseconds += 1e9;
      }
    }
    return [seconds,nanoseconds]
  }

  var startTime = new Date();
  function uptime() {
    var currentTime = new Date();
    var dif = currentTime - startTime;
    return dif / 1000;
  }

  var process = {
    nextTick: nextTick,
    title: title,
    browser: browser,
    env: env,
    argv: argv,
    version: version,
    versions: versions,
    on: on,
    addListener: addListener,
    once: once,
    off: off,
    removeListener: removeListener,
    removeAllListeners: removeAllListeners,
    emit: emit,
    binding: binding,
    cwd: cwd,
    chdir: chdir,
    umask: umask,
    hrtime: hrtime,
    platform: platform,
    release: release,
    config: config,
    uptime: uptime
  };

  var inherits;
  if (typeof Object.create === 'function'){
    inherits = function inherits(ctor, superCtor) {
      // implementation from standard node.js 'util' module
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    };
  } else {
    inherits = function inherits(ctor, superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function () {};
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    };
  }
  var inherits$1 = inherits;

  var formatRegExp = /%[sdj%]/g;
  function format(f) {
    if (!isString(f)) {
      var objects = [];
      for (var i = 0; i < arguments.length; i++) {
        objects.push(inspect(arguments[i]));
      }
      return objects.join(' ');
    }

    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace(formatRegExp, function(x) {
      if (x === '%%') return '%';
      if (i >= len) return x;
      switch (x) {
        case '%s': return String(args[i++]);
        case '%d': return Number(args[i++]);
        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }
        default:
          return x;
      }
    });
    for (var x = args[i]; i < len; x = args[++i]) {
      if (isNull(x) || !isObject(x)) {
        str += ' ' + x;
      } else {
        str += ' ' + inspect(x);
      }
    }
    return str;
  }

  // Mark that a method should not be used.
  // Returns a modified function which warns once by default.
  // If --no-deprecation is set, then it is a no-op.
  function deprecate(fn, msg) {
    // Allow for deprecating things in the process of starting up.
    if (isUndefined(global$1.process)) {
      return function() {
        return deprecate(fn, msg).apply(this, arguments);
      };
    }

    var warned = false;
    function deprecated() {
      if (!warned) {
        {
          console.error(msg);
        }
        warned = true;
      }
      return fn.apply(this, arguments);
    }

    return deprecated;
  }

  var debugs = {};
  var debugEnviron;
  function debuglog(set) {
    if (isUndefined(debugEnviron))
      debugEnviron = process.env.NODE_DEBUG || '';
    set = set.toUpperCase();
    if (!debugs[set]) {
      if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
        var pid = 0;
        debugs[set] = function() {
          var msg = format.apply(null, arguments);
          console.error('%s %d: %s', set, pid, msg);
        };
      } else {
        debugs[set] = function() {};
      }
    }
    return debugs[set];
  }

  /**
   * Echos the value of a value. Trys to print the value out
   * in the best way possible given the different types.
   *
   * @param {Object} obj The object to print out.
   * @param {Object} opts Optional options object that alters the output.
   */
  /* legacy: obj, showHidden, depth, colors*/
  function inspect(obj, opts) {
    // default options
    var ctx = {
      seen: [],
      stylize: stylizeNoColor
    };
    // legacy...
    if (arguments.length >= 3) ctx.depth = arguments[2];
    if (arguments.length >= 4) ctx.colors = arguments[3];
    if (isBoolean(opts)) {
      // legacy...
      ctx.showHidden = opts;
    } else if (opts) {
      // got an "options" object
      _extend(ctx, opts);
    }
    // set default options
    if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
    if (isUndefined(ctx.depth)) ctx.depth = 2;
    if (isUndefined(ctx.colors)) ctx.colors = false;
    if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
    if (ctx.colors) ctx.stylize = stylizeWithColor;
    return formatValue(ctx, obj, ctx.depth);
  }

  // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
  inspect.colors = {
    'bold' : [1, 22],
    'italic' : [3, 23],
    'underline' : [4, 24],
    'inverse' : [7, 27],
    'white' : [37, 39],
    'grey' : [90, 39],
    'black' : [30, 39],
    'blue' : [34, 39],
    'cyan' : [36, 39],
    'green' : [32, 39],
    'magenta' : [35, 39],
    'red' : [31, 39],
    'yellow' : [33, 39]
  };

  // Don't use 'blue' not visible on cmd.exe
  inspect.styles = {
    'special': 'cyan',
    'number': 'yellow',
    'boolean': 'yellow',
    'undefined': 'grey',
    'null': 'bold',
    'string': 'green',
    'date': 'magenta',
    // "name": intentionally not styling
    'regexp': 'red'
  };


  function stylizeWithColor(str, styleType) {
    var style = inspect.styles[styleType];

    if (style) {
      return '\u001b[' + inspect.colors[style][0] + 'm' + str +
             '\u001b[' + inspect.colors[style][1] + 'm';
    } else {
      return str;
    }
  }


  function stylizeNoColor(str, styleType) {
    return str;
  }


  function arrayToHash(array) {
    var hash = {};

    array.forEach(function(val, idx) {
      hash[val] = true;
    });

    return hash;
  }


  function formatValue(ctx, value, recurseTimes) {
    // Provide a hook for user-specified inspect functions.
    // Check that value is an object with an inspect function on it
    if (ctx.customInspect &&
        value &&
        isFunction(value.inspect) &&
        // Filter out the util module, it's inspect function is special
        value.inspect !== inspect &&
        // Also filter out any prototype objects using the circular check.
        !(value.constructor && value.constructor.prototype === value)) {
      var ret = value.inspect(recurseTimes, ctx);
      if (!isString(ret)) {
        ret = formatValue(ctx, ret, recurseTimes);
      }
      return ret;
    }

    // Primitive types cannot have properties
    var primitive = formatPrimitive(ctx, value);
    if (primitive) {
      return primitive;
    }

    // Look up the keys of the object.
    var keys = Object.keys(value);
    var visibleKeys = arrayToHash(keys);

    if (ctx.showHidden) {
      keys = Object.getOwnPropertyNames(value);
    }

    // IE doesn't make error fields non-enumerable
    // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
    if (isError(value)
        && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
      return formatError(value);
    }

    // Some type of object without properties can be shortcutted.
    if (keys.length === 0) {
      if (isFunction(value)) {
        var name = value.name ? ': ' + value.name : '';
        return ctx.stylize('[Function' + name + ']', 'special');
      }
      if (isRegExp(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
      }
      if (isDate(value)) {
        return ctx.stylize(Date.prototype.toString.call(value), 'date');
      }
      if (isError(value)) {
        return formatError(value);
      }
    }

    var base = '', array = false, braces = ['{', '}'];

    // Make Array say that they are Array
    if (isArray$1(value)) {
      array = true;
      braces = ['[', ']'];
    }

    // Make functions say that they are functions
    if (isFunction(value)) {
      var n = value.name ? ': ' + value.name : '';
      base = ' [Function' + n + ']';
    }

    // Make RegExps say that they are RegExps
    if (isRegExp(value)) {
      base = ' ' + RegExp.prototype.toString.call(value);
    }

    // Make dates with properties first say the date
    if (isDate(value)) {
      base = ' ' + Date.prototype.toUTCString.call(value);
    }

    // Make error with message first say the error
    if (isError(value)) {
      base = ' ' + formatError(value);
    }

    if (keys.length === 0 && (!array || value.length == 0)) {
      return braces[0] + base + braces[1];
    }

    if (recurseTimes < 0) {
      if (isRegExp(value)) {
        return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
      } else {
        return ctx.stylize('[Object]', 'special');
      }
    }

    ctx.seen.push(value);

    var output;
    if (array) {
      output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
    } else {
      output = keys.map(function(key) {
        return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
      });
    }

    ctx.seen.pop();

    return reduceToSingleString(output, base, braces);
  }


  function formatPrimitive(ctx, value) {
    if (isUndefined(value))
      return ctx.stylize('undefined', 'undefined');
    if (isString(value)) {
      var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                               .replace(/'/g, "\\'")
                                               .replace(/\\"/g, '"') + '\'';
      return ctx.stylize(simple, 'string');
    }
    if (isNumber(value))
      return ctx.stylize('' + value, 'number');
    if (isBoolean(value))
      return ctx.stylize('' + value, 'boolean');
    // For some reason typeof null is "object", so special case here.
    if (isNull(value))
      return ctx.stylize('null', 'null');
  }


  function formatError(value) {
    return '[' + Error.prototype.toString.call(value) + ']';
  }


  function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    var output = [];
    for (var i = 0, l = value.length; i < l; ++i) {
      if (hasOwnProperty(value, String(i))) {
        output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
            String(i), true));
      } else {
        output.push('');
      }
    }
    keys.forEach(function(key) {
      if (!key.match(/^\d+$/)) {
        output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
            key, true));
      }
    });
    return output;
  }


  function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    var name, str, desc;
    desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
    if (desc.get) {
      if (desc.set) {
        str = ctx.stylize('[Getter/Setter]', 'special');
      } else {
        str = ctx.stylize('[Getter]', 'special');
      }
    } else {
      if (desc.set) {
        str = ctx.stylize('[Setter]', 'special');
      }
    }
    if (!hasOwnProperty(visibleKeys, key)) {
      name = '[' + key + ']';
    }
    if (!str) {
      if (ctx.seen.indexOf(desc.value) < 0) {
        if (isNull(recurseTimes)) {
          str = formatValue(ctx, desc.value, null);
        } else {
          str = formatValue(ctx, desc.value, recurseTimes - 1);
        }
        if (str.indexOf('\n') > -1) {
          if (array) {
            str = str.split('\n').map(function(line) {
              return '  ' + line;
            }).join('\n').substr(2);
          } else {
            str = '\n' + str.split('\n').map(function(line) {
              return '   ' + line;
            }).join('\n');
          }
        }
      } else {
        str = ctx.stylize('[Circular]', 'special');
      }
    }
    if (isUndefined(name)) {
      if (array && key.match(/^\d+$/)) {
        return str;
      }
      name = JSON.stringify('' + key);
      if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
        name = name.substr(1, name.length - 2);
        name = ctx.stylize(name, 'name');
      } else {
        name = name.replace(/'/g, "\\'")
                   .replace(/\\"/g, '"')
                   .replace(/(^"|"$)/g, "'");
        name = ctx.stylize(name, 'string');
      }
    }

    return name + ': ' + str;
  }


  function reduceToSingleString(output, base, braces) {
    var length = output.reduce(function(prev, cur) {
      if (cur.indexOf('\n') >= 0) ;
      return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
    }, 0);

    if (length > 60) {
      return braces[0] +
             (base === '' ? '' : base + '\n ') +
             ' ' +
             output.join(',\n  ') +
             ' ' +
             braces[1];
    }

    return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
  }


  // NOTE: These type checking functions intentionally don't use `instanceof`
  // because it is fragile and can be easily faked with `Object.create()`.
  function isArray$1(ar) {
    return Array.isArray(ar);
  }

  function isBoolean(arg) {
    return typeof arg === 'boolean';
  }

  function isNull(arg) {
    return arg === null;
  }

  function isNumber(arg) {
    return typeof arg === 'number';
  }

  function isString(arg) {
    return typeof arg === 'string';
  }

  function isUndefined(arg) {
    return arg === void 0;
  }

  function isRegExp(re) {
    return isObject(re) && objectToString(re) === '[object RegExp]';
  }

  function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
  }

  function isDate(d) {
    return isObject(d) && objectToString(d) === '[object Date]';
  }

  function isError(e) {
    return isObject(e) &&
        (objectToString(e) === '[object Error]' || e instanceof Error);
  }

  function isFunction(arg) {
    return typeof arg === 'function';
  }

  function objectToString(o) {
    return Object.prototype.toString.call(o);
  }

  function _extend(origin, add) {
    // Don't do anything if add isn't an object
    if (!add || !isObject(add)) return origin;

    var keys = Object.keys(add);
    var i = keys.length;
    while (i--) {
      origin[keys[i]] = add[keys[i]];
    }
    return origin;
  }
  function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }

  function BufferList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  BufferList.prototype.push = function (v) {
    var entry = { data: v, next: null };
    if (this.length > 0) this.tail.next = entry;else this.head = entry;
    this.tail = entry;
    ++this.length;
  };

  BufferList.prototype.unshift = function (v) {
    var entry = { data: v, next: this.head };
    if (this.length === 0) this.tail = entry;
    this.head = entry;
    ++this.length;
  };

  BufferList.prototype.shift = function () {
    if (this.length === 0) return;
    var ret = this.head.data;
    if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
    --this.length;
    return ret;
  };

  BufferList.prototype.clear = function () {
    this.head = this.tail = null;
    this.length = 0;
  };

  BufferList.prototype.join = function (s) {
    if (this.length === 0) return '';
    var p = this.head;
    var ret = '' + p.data;
    while (p = p.next) {
      ret += s + p.data;
    }return ret;
  };

  BufferList.prototype.concat = function (n) {
    if (this.length === 0) return Buffer.alloc(0);
    if (this.length === 1) return this.head.data;
    var ret = Buffer.allocUnsafe(n >>> 0);
    var p = this.head;
    var i = 0;
    while (p) {
      p.data.copy(ret, i);
      i += p.data.length;
      p = p.next;
    }
    return ret;
  };

  // Copyright Joyent, Inc. and other Node contributors.
  var isBufferEncoding = Buffer.isEncoding
    || function(encoding) {
         switch (encoding && encoding.toLowerCase()) {
           case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
           default: return false;
         }
       };


  function assertEncoding(encoding) {
    if (encoding && !isBufferEncoding(encoding)) {
      throw new Error('Unknown encoding: ' + encoding);
    }
  }

  // StringDecoder provides an interface for efficiently splitting a series of
  // buffers into a series of JS strings without breaking apart multi-byte
  // characters. CESU-8 is handled as part of the UTF-8 encoding.
  //
  // @TODO Handling all encodings inside a single object makes it very difficult
  // to reason about this code, so it should be split up in the future.
  // @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
  // points as used by CESU-8.
  function StringDecoder(encoding) {
    this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
    assertEncoding(encoding);
    switch (this.encoding) {
      case 'utf8':
        // CESU-8 represents each of Surrogate Pair by 3-bytes
        this.surrogateSize = 3;
        break;
      case 'ucs2':
      case 'utf16le':
        // UTF-16 represents each of Surrogate Pair by 2-bytes
        this.surrogateSize = 2;
        this.detectIncompleteChar = utf16DetectIncompleteChar;
        break;
      case 'base64':
        // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
        this.surrogateSize = 3;
        this.detectIncompleteChar = base64DetectIncompleteChar;
        break;
      default:
        this.write = passThroughWrite;
        return;
    }

    // Enough space to store all bytes of a single character. UTF-8 needs 4
    // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
    this.charBuffer = new Buffer(6);
    // Number of bytes received for the current incomplete multi-byte character.
    this.charReceived = 0;
    // Number of bytes expected for the current incomplete multi-byte character.
    this.charLength = 0;
  }

  // write decodes the given buffer and returns it as JS string that is
  // guaranteed to not contain any partial multi-byte characters. Any partial
  // character found at the end of the buffer is buffered up, and will be
  // returned when calling write again with the remaining bytes.
  //
  // Note: Converting a Buffer containing an orphan surrogate to a String
  // currently works, but converting a String to a Buffer (via `new Buffer`, or
  // Buffer#write) will replace incomplete surrogates with the unicode
  // replacement character. See https://codereview.chromium.org/121173009/ .
  StringDecoder.prototype.write = function(buffer) {
    var charStr = '';
    // if our last write ended with an incomplete multibyte character
    while (this.charLength) {
      // determine how many remaining bytes this buffer has to offer for this char
      var available = (buffer.length >= this.charLength - this.charReceived) ?
          this.charLength - this.charReceived :
          buffer.length;

      // add the new bytes to the char buffer
      buffer.copy(this.charBuffer, this.charReceived, 0, available);
      this.charReceived += available;

      if (this.charReceived < this.charLength) {
        // still not enough chars in this buffer? wait for more ...
        return '';
      }

      // remove bytes belonging to the current character from the buffer
      buffer = buffer.slice(available, buffer.length);

      // get the character that was split
      charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

      // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
      var charCode = charStr.charCodeAt(charStr.length - 1);
      if (charCode >= 0xD800 && charCode <= 0xDBFF) {
        this.charLength += this.surrogateSize;
        charStr = '';
        continue;
      }
      this.charReceived = this.charLength = 0;

      // if there are no more bytes in this buffer, just emit our char
      if (buffer.length === 0) {
        return charStr;
      }
      break;
    }

    // determine and set charLength / charReceived
    this.detectIncompleteChar(buffer);

    var end = buffer.length;
    if (this.charLength) {
      // buffer the incomplete character bytes we got
      buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
      end -= this.charReceived;
    }

    charStr += buffer.toString(this.encoding, 0, end);

    var end = charStr.length - 1;
    var charCode = charStr.charCodeAt(end);
    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      var size = this.surrogateSize;
      this.charLength += size;
      this.charReceived += size;
      this.charBuffer.copy(this.charBuffer, size, 0, size);
      buffer.copy(this.charBuffer, 0, 0, size);
      return charStr.substring(0, end);
    }

    // or just emit the charStr
    return charStr;
  };

  // detectIncompleteChar determines if there is an incomplete UTF-8 character at
  // the end of the given buffer. If so, it sets this.charLength to the byte
  // length that character, and sets this.charReceived to the number of bytes
  // that are available for this character.
  StringDecoder.prototype.detectIncompleteChar = function(buffer) {
    // determine how many bytes we have to check at the end of this buffer
    var i = (buffer.length >= 3) ? 3 : buffer.length;

    // Figure out if one of the last i bytes of our buffer announces an
    // incomplete char.
    for (; i > 0; i--) {
      var c = buffer[buffer.length - i];

      // See http://en.wikipedia.org/wiki/UTF-8#Description

      // 110XXXXX
      if (i == 1 && c >> 5 == 0x06) {
        this.charLength = 2;
        break;
      }

      // 1110XXXX
      if (i <= 2 && c >> 4 == 0x0E) {
        this.charLength = 3;
        break;
      }

      // 11110XXX
      if (i <= 3 && c >> 3 == 0x1E) {
        this.charLength = 4;
        break;
      }
    }
    this.charReceived = i;
  };

  StringDecoder.prototype.end = function(buffer) {
    var res = '';
    if (buffer && buffer.length)
      res = this.write(buffer);

    if (this.charReceived) {
      var cr = this.charReceived;
      var buf = this.charBuffer;
      var enc = this.encoding;
      res += buf.slice(0, cr).toString(enc);
    }

    return res;
  };

  function passThroughWrite(buffer) {
    return buffer.toString(this.encoding);
  }

  function utf16DetectIncompleteChar(buffer) {
    this.charReceived = buffer.length % 2;
    this.charLength = this.charReceived ? 2 : 0;
  }

  function base64DetectIncompleteChar(buffer) {
    this.charReceived = buffer.length % 3;
    this.charLength = this.charReceived ? 3 : 0;
  }

  Readable.ReadableState = ReadableState;

  var debug = debuglog('stream');
  inherits$1(Readable, EventEmitter);

  function prependListener(emitter, event, fn) {
    // Sadly this is not cacheable as some libraries bundle their own
    // event emitter implementation with them.
    if (typeof emitter.prependListener === 'function') {
      return emitter.prependListener(event, fn);
    } else {
      // This is a hack to make sure that our error handler is attached before any
      // userland ones.  NEVER DO THIS. This is here only because this code needs
      // to continue to work with older versions of Node.js that do not include
      // the prependListener() method. The goal is to eventually remove this hack.
      if (!emitter._events || !emitter._events[event])
        emitter.on(event, fn);
      else if (Array.isArray(emitter._events[event]))
        emitter._events[event].unshift(fn);
      else
        emitter._events[event] = [fn, emitter._events[event]];
    }
  }
  function listenerCount$1 (emitter, type) {
    return emitter.listeners(type).length;
  }
  function ReadableState(options, stream) {

    options = options || {};

    // object stream flag. Used to make read(n) ignore n and to
    // make all the buffer merging and length checks go away
    this.objectMode = !!options.objectMode;

    if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

    // the point at which it stops calling _read() to fill the buffer
    // Note: 0 is a valid value, means "don't call _read preemptively ever"
    var hwm = options.highWaterMark;
    var defaultHwm = this.objectMode ? 16 : 16 * 1024;
    this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

    // cast to ints.
    this.highWaterMark = ~ ~this.highWaterMark;

    // A linked list is used to store data chunks instead of an array because the
    // linked list can remove elements from the beginning faster than
    // array.shift()
    this.buffer = new BufferList();
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false;

    // a flag to be able to tell if the onwrite cb is called immediately,
    // or on a later tick.  We set this to true at first, because any
    // actions that shouldn't happen until "later" should generally also
    // not happen before the first write call.
    this.sync = true;

    // whenever we return null, then we set a flag to say
    // that we're awaiting a 'readable' event emission.
    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    this.resumeScheduled = false;

    // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || 'utf8';

    // when piping, we only care about 'readable' events that happen
    // after read()ing all the bytes and not getting any pushback.
    this.ranOut = false;

    // the number of writers that are awaiting a drain event in .pipe()s
    this.awaitDrain = 0;

    // if true, a maybeReadMore has been scheduled
    this.readingMore = false;

    this.decoder = null;
    this.encoding = null;
    if (options.encoding) {
      this.decoder = new StringDecoder(options.encoding);
      this.encoding = options.encoding;
    }
  }
  function Readable(options) {

    if (!(this instanceof Readable)) return new Readable(options);

    this._readableState = new ReadableState(options, this);

    // legacy
    this.readable = true;

    if (options && typeof options.read === 'function') this._read = options.read;

    EventEmitter.call(this);
  }

  // Manually shove something into the read() buffer.
  // This returns true if the highWaterMark has not been hit yet,
  // similar to how Writable.write() returns true if you should
  // write() some more.
  Readable.prototype.push = function (chunk, encoding) {
    var state = this._readableState;

    if (!state.objectMode && typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;
      if (encoding !== state.encoding) {
        chunk = Buffer.from(chunk, encoding);
        encoding = '';
      }
    }

    return readableAddChunk(this, state, chunk, encoding, false);
  };

  // Unshift should *always* be something directly out of read()
  Readable.prototype.unshift = function (chunk) {
    var state = this._readableState;
    return readableAddChunk(this, state, chunk, '', true);
  };

  Readable.prototype.isPaused = function () {
    return this._readableState.flowing === false;
  };

  function readableAddChunk(stream, state, chunk, encoding, addToFront) {
    var er = chunkInvalid(state, chunk);
    if (er) {
      stream.emit('error', er);
    } else if (chunk === null) {
      state.reading = false;
      onEofChunk(stream, state);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (state.ended && !addToFront) {
        var e = new Error('stream.push() after EOF');
        stream.emit('error', e);
      } else if (state.endEmitted && addToFront) {
        var _e = new Error('stream.unshift() after end event');
        stream.emit('error', _e);
      } else {
        var skipAdd;
        if (state.decoder && !addToFront && !encoding) {
          chunk = state.decoder.write(chunk);
          skipAdd = !state.objectMode && chunk.length === 0;
        }

        if (!addToFront) state.reading = false;

        // Don't add to the buffer if we've decoded to an empty string chunk and
        // we're not in object mode
        if (!skipAdd) {
          // if we want the data now, just emit it.
          if (state.flowing && state.length === 0 && !state.sync) {
            stream.emit('data', chunk);
            stream.read(0);
          } else {
            // update the buffer info.
            state.length += state.objectMode ? 1 : chunk.length;
            if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

            if (state.needReadable) emitReadable(stream);
          }
        }

        maybeReadMore(stream, state);
      }
    } else if (!addToFront) {
      state.reading = false;
    }

    return needMoreData(state);
  }

  // if it's past the high water mark, we can push in some more.
  // Also, if we have no data yet, we can stand some
  // more bytes.  This is to work around cases where hwm=0,
  // such as the repl.  Also, if the push() triggered a
  // readable event, and the user called read(largeNumber) such that
  // needReadable was set, then we ought to push more, so that another
  // 'readable' event will be triggered.
  function needMoreData(state) {
    return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
  }

  // backwards compatibility.
  Readable.prototype.setEncoding = function (enc) {
    this._readableState.decoder = new StringDecoder(enc);
    this._readableState.encoding = enc;
    return this;
  };

  // Don't raise the hwm > 8MB
  var MAX_HWM = 0x800000;
  function computeNewHighWaterMark(n) {
    if (n >= MAX_HWM) {
      n = MAX_HWM;
    } else {
      // Get the next highest power of 2 to prevent increasing hwm excessively in
      // tiny amounts
      n--;
      n |= n >>> 1;
      n |= n >>> 2;
      n |= n >>> 4;
      n |= n >>> 8;
      n |= n >>> 16;
      n++;
    }
    return n;
  }

  // This function is designed to be inlinable, so please take care when making
  // changes to the function body.
  function howMuchToRead(n, state) {
    if (n <= 0 || state.length === 0 && state.ended) return 0;
    if (state.objectMode) return 1;
    if (n !== n) {
      // Only flow one buffer at a time
      if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
    }
    // If we're asking for more than the current hwm, then raise the hwm.
    if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
    if (n <= state.length) return n;
    // Don't have enough
    if (!state.ended) {
      state.needReadable = true;
      return 0;
    }
    return state.length;
  }

  // you can override either this method, or the async _read(n) below.
  Readable.prototype.read = function (n) {
    debug('read', n);
    n = parseInt(n, 10);
    var state = this._readableState;
    var nOrig = n;

    if (n !== 0) state.emittedReadable = false;

    // if we're doing read(0) to trigger a readable event, but we
    // already have a bunch of data in the buffer, then just trigger
    // the 'readable' event and move on.
    if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
      debug('read: emitReadable', state.length, state.ended);
      if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
      return null;
    }

    n = howMuchToRead(n, state);

    // if we've ended, and we're now clear, then finish it up.
    if (n === 0 && state.ended) {
      if (state.length === 0) endReadable(this);
      return null;
    }

    // All the actual chunk generation logic needs to be
    // *below* the call to _read.  The reason is that in certain
    // synthetic stream cases, such as passthrough streams, _read
    // may be a completely synchronous operation which may change
    // the state of the read buffer, providing enough data when
    // before there was *not* enough.
    //
    // So, the steps are:
    // 1. Figure out what the state of things will be after we do
    // a read from the buffer.
    //
    // 2. If that resulting state will trigger a _read, then call _read.
    // Note that this may be asynchronous, or synchronous.  Yes, it is
    // deeply ugly to write APIs this way, but that still doesn't mean
    // that the Readable class should behave improperly, as streams are
    // designed to be sync/async agnostic.
    // Take note if the _read call is sync or async (ie, if the read call
    // has returned yet), so that we know whether or not it's safe to emit
    // 'readable' etc.
    //
    // 3. Actually pull the requested chunks out of the buffer and return.

    // if we need a readable event, then we need to do some reading.
    var doRead = state.needReadable;
    debug('need readable', doRead);

    // if we currently have less than the highWaterMark, then also read some
    if (state.length === 0 || state.length - n < state.highWaterMark) {
      doRead = true;
      debug('length less than watermark', doRead);
    }

    // however, if we've ended, then there's no point, and if we're already
    // reading, then it's unnecessary.
    if (state.ended || state.reading) {
      doRead = false;
      debug('reading or ended', doRead);
    } else if (doRead) {
      debug('do read');
      state.reading = true;
      state.sync = true;
      // if the length is currently zero, then we *need* a readable event.
      if (state.length === 0) state.needReadable = true;
      // call internal read method
      this._read(state.highWaterMark);
      state.sync = false;
      // If _read pushed data synchronously, then `reading` will be false,
      // and we need to re-evaluate how much data we can return to the user.
      if (!state.reading) n = howMuchToRead(nOrig, state);
    }

    var ret;
    if (n > 0) ret = fromList(n, state);else ret = null;

    if (ret === null) {
      state.needReadable = true;
      n = 0;
    } else {
      state.length -= n;
    }

    if (state.length === 0) {
      // If we have nothing in the buffer, then we want to know
      // as soon as we *do* get something into the buffer.
      if (!state.ended) state.needReadable = true;

      // If we tried to read() past the EOF, then emit end on the next tick.
      if (nOrig !== n && state.ended) endReadable(this);
    }

    if (ret !== null) this.emit('data', ret);

    return ret;
  };

  function chunkInvalid(state, chunk) {
    var er = null;
    if (!isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
      er = new TypeError('Invalid non-string/buffer chunk');
    }
    return er;
  }

  function onEofChunk(stream, state) {
    if (state.ended) return;
    if (state.decoder) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) {
        state.buffer.push(chunk);
        state.length += state.objectMode ? 1 : chunk.length;
      }
    }
    state.ended = true;

    // emit 'readable' now to make sure it gets picked up.
    emitReadable(stream);
  }

  // Don't emit readable right away in sync mode, because this can trigger
  // another read() call => stack overflow.  This way, it might trigger
  // a nextTick recursion warning, but that's not so bad.
  function emitReadable(stream) {
    var state = stream._readableState;
    state.needReadable = false;
    if (!state.emittedReadable) {
      debug('emitReadable', state.flowing);
      state.emittedReadable = true;
      if (state.sync) nextTick(emitReadable_, stream);else emitReadable_(stream);
    }
  }

  function emitReadable_(stream) {
    debug('emit readable');
    stream.emit('readable');
    flow(stream);
  }

  // at this point, the user has presumably seen the 'readable' event,
  // and called read() to consume some data.  that may have triggered
  // in turn another _read(n) call, in which case reading = true if
  // it's in progress.
  // However, if we're not ended, or reading, and the length < hwm,
  // then go ahead and try to read some more preemptively.
  function maybeReadMore(stream, state) {
    if (!state.readingMore) {
      state.readingMore = true;
      nextTick(maybeReadMore_, stream, state);
    }
  }

  function maybeReadMore_(stream, state) {
    var len = state.length;
    while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
      debug('maybeReadMore read 0');
      stream.read(0);
      if (len === state.length)
        // didn't get any data, stop spinning.
        break;else len = state.length;
    }
    state.readingMore = false;
  }

  // abstract method.  to be overridden in specific implementation classes.
  // call cb(er, data) where data is <= n in length.
  // for virtual (non-string, non-buffer) streams, "length" is somewhat
  // arbitrary, and perhaps not very meaningful.
  Readable.prototype._read = function (n) {
    this.emit('error', new Error('not implemented'));
  };

  Readable.prototype.pipe = function (dest, pipeOpts) {
    var src = this;
    var state = this._readableState;

    switch (state.pipesCount) {
      case 0:
        state.pipes = dest;
        break;
      case 1:
        state.pipes = [state.pipes, dest];
        break;
      default:
        state.pipes.push(dest);
        break;
    }
    state.pipesCount += 1;
    debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

    var doEnd = (!pipeOpts || pipeOpts.end !== false);

    var endFn = doEnd ? onend : cleanup;
    if (state.endEmitted) nextTick(endFn);else src.once('end', endFn);

    dest.on('unpipe', onunpipe);
    function onunpipe(readable) {
      debug('onunpipe');
      if (readable === src) {
        cleanup();
      }
    }

    function onend() {
      debug('onend');
      dest.end();
    }

    // when the dest drains, it reduces the awaitDrain counter
    // on the source.  This would be more elegant with a .once()
    // handler in flow(), but adding and removing repeatedly is
    // too slow.
    var ondrain = pipeOnDrain(src);
    dest.on('drain', ondrain);

    var cleanedUp = false;
    function cleanup() {
      debug('cleanup');
      // cleanup event handlers once the pipe is broken
      dest.removeListener('close', onclose);
      dest.removeListener('finish', onfinish);
      dest.removeListener('drain', ondrain);
      dest.removeListener('error', onerror);
      dest.removeListener('unpipe', onunpipe);
      src.removeListener('end', onend);
      src.removeListener('end', cleanup);
      src.removeListener('data', ondata);

      cleanedUp = true;

      // if the reader is waiting for a drain event from this
      // specific writer, then it would cause it to never start
      // flowing again.
      // So, if this is awaiting a drain, then we just call it now.
      // If we don't know, then assume that we are waiting for one.
      if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
    }

    // If the user pushes more data while we're writing to dest then we'll end up
    // in ondata again. However, we only want to increase awaitDrain once because
    // dest will only emit one 'drain' event for the multiple writes.
    // => Introduce a guard on increasing awaitDrain.
    var increasedAwaitDrain = false;
    src.on('data', ondata);
    function ondata(chunk) {
      debug('ondata');
      increasedAwaitDrain = false;
      var ret = dest.write(chunk);
      if (false === ret && !increasedAwaitDrain) {
        // If the user unpiped during `dest.write()`, it is possible
        // to get stuck in a permanently paused state if that write
        // also returned false.
        // => Check whether `dest` is still a piping destination.
        if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
          debug('false write response, pause', src._readableState.awaitDrain);
          src._readableState.awaitDrain++;
          increasedAwaitDrain = true;
        }
        src.pause();
      }
    }

    // if the dest has an error, then stop piping into it.
    // however, don't suppress the throwing behavior for this.
    function onerror(er) {
      debug('onerror', er);
      unpipe();
      dest.removeListener('error', onerror);
      if (listenerCount$1(dest, 'error') === 0) dest.emit('error', er);
    }

    // Make sure our error handler is attached before userland ones.
    prependListener(dest, 'error', onerror);

    // Both close and finish should trigger unpipe, but only once.
    function onclose() {
      dest.removeListener('finish', onfinish);
      unpipe();
    }
    dest.once('close', onclose);
    function onfinish() {
      debug('onfinish');
      dest.removeListener('close', onclose);
      unpipe();
    }
    dest.once('finish', onfinish);

    function unpipe() {
      debug('unpipe');
      src.unpipe(dest);
    }

    // tell the dest that it's being piped to
    dest.emit('pipe', src);

    // start the flow if it hasn't been started already.
    if (!state.flowing) {
      debug('pipe resume');
      src.resume();
    }

    return dest;
  };

  function pipeOnDrain(src) {
    return function () {
      var state = src._readableState;
      debug('pipeOnDrain', state.awaitDrain);
      if (state.awaitDrain) state.awaitDrain--;
      if (state.awaitDrain === 0 && src.listeners('data').length) {
        state.flowing = true;
        flow(src);
      }
    };
  }

  Readable.prototype.unpipe = function (dest) {
    var state = this._readableState;

    // if we're not piping anywhere, then do nothing.
    if (state.pipesCount === 0) return this;

    // just one destination.  most common case.
    if (state.pipesCount === 1) {
      // passed in one, but it's not the right one.
      if (dest && dest !== state.pipes) return this;

      if (!dest) dest = state.pipes;

      // got a match.
      state.pipes = null;
      state.pipesCount = 0;
      state.flowing = false;
      if (dest) dest.emit('unpipe', this);
      return this;
    }

    // slow case. multiple pipe destinations.

    if (!dest) {
      // remove all.
      var dests = state.pipes;
      var len = state.pipesCount;
      state.pipes = null;
      state.pipesCount = 0;
      state.flowing = false;

      for (var _i = 0; _i < len; _i++) {
        dests[_i].emit('unpipe', this);
      }return this;
    }

    // try to find the right one.
    var i = indexOf(state.pipes, dest);
    if (i === -1) return this;

    state.pipes.splice(i, 1);
    state.pipesCount -= 1;
    if (state.pipesCount === 1) state.pipes = state.pipes[0];

    dest.emit('unpipe', this);

    return this;
  };

  // set up data events if they are asked for
  // Ensure readable listeners eventually get something
  Readable.prototype.on = function (ev, fn) {
    var res = EventEmitter.prototype.on.call(this, ev, fn);

    if (ev === 'data') {
      // Start flowing on next tick if stream isn't explicitly paused
      if (this._readableState.flowing !== false) this.resume();
    } else if (ev === 'readable') {
      var state = this._readableState;
      if (!state.endEmitted && !state.readableListening) {
        state.readableListening = state.needReadable = true;
        state.emittedReadable = false;
        if (!state.reading) {
          nextTick(nReadingNextTick, this);
        } else if (state.length) {
          emitReadable(this, state);
        }
      }
    }

    return res;
  };
  Readable.prototype.addListener = Readable.prototype.on;

  function nReadingNextTick(self) {
    debug('readable nexttick read 0');
    self.read(0);
  }

  // pause() and resume() are remnants of the legacy readable stream API
  // If the user uses them, then switch into old mode.
  Readable.prototype.resume = function () {
    var state = this._readableState;
    if (!state.flowing) {
      debug('resume');
      state.flowing = true;
      resume(this, state);
    }
    return this;
  };

  function resume(stream, state) {
    if (!state.resumeScheduled) {
      state.resumeScheduled = true;
      nextTick(resume_, stream, state);
    }
  }

  function resume_(stream, state) {
    if (!state.reading) {
      debug('resume read 0');
      stream.read(0);
    }

    state.resumeScheduled = false;
    state.awaitDrain = 0;
    stream.emit('resume');
    flow(stream);
    if (state.flowing && !state.reading) stream.read(0);
  }

  Readable.prototype.pause = function () {
    debug('call pause flowing=%j', this._readableState.flowing);
    if (false !== this._readableState.flowing) {
      debug('pause');
      this._readableState.flowing = false;
      this.emit('pause');
    }
    return this;
  };

  function flow(stream) {
    var state = stream._readableState;
    debug('flow', state.flowing);
    while (state.flowing && stream.read() !== null) {}
  }

  // wrap an old-style stream as the async data source.
  // This is *not* part of the readable stream interface.
  // It is an ugly unfortunate mess of history.
  Readable.prototype.wrap = function (stream) {
    var state = this._readableState;
    var paused = false;

    var self = this;
    stream.on('end', function () {
      debug('wrapped end');
      if (state.decoder && !state.ended) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) self.push(chunk);
      }

      self.push(null);
    });

    stream.on('data', function (chunk) {
      debug('wrapped data');
      if (state.decoder) chunk = state.decoder.write(chunk);

      // don't skip over falsy values in objectMode
      if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

      var ret = self.push(chunk);
      if (!ret) {
        paused = true;
        stream.pause();
      }
    });

    // proxy all the other methods.
    // important when wrapping filters and duplexes.
    for (var i in stream) {
      if (this[i] === undefined && typeof stream[i] === 'function') {
        this[i] = function (method) {
          return function () {
            return stream[method].apply(stream, arguments);
          };
        }(i);
      }
    }

    // proxy certain important events.
    var events = ['error', 'close', 'destroy', 'pause', 'resume'];
    forEach(events, function (ev) {
      stream.on(ev, self.emit.bind(self, ev));
    });

    // when we try to consume some more bytes, simply unpause the
    // underlying stream.
    self._read = function (n) {
      debug('wrapped _read', n);
      if (paused) {
        paused = false;
        stream.resume();
      }
    };

    return self;
  };

  // exposed for testing purposes only.
  Readable._fromList = fromList;

  // Pluck off n bytes from an array of buffers.
  // Length is the combined lengths of all the buffers in the list.
  // This function is designed to be inlinable, so please take care when making
  // changes to the function body.
  function fromList(n, state) {
    // nothing buffered
    if (state.length === 0) return null;

    var ret;
    if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
      // read it all, truncate the list
      if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
      state.buffer.clear();
    } else {
      // read part of list
      ret = fromListPartial(n, state.buffer, state.decoder);
    }

    return ret;
  }

  // Extracts only enough buffered data to satisfy the amount requested.
  // This function is designed to be inlinable, so please take care when making
  // changes to the function body.
  function fromListPartial(n, list, hasStrings) {
    var ret;
    if (n < list.head.data.length) {
      // slice is the same for buffers and strings
      ret = list.head.data.slice(0, n);
      list.head.data = list.head.data.slice(n);
    } else if (n === list.head.data.length) {
      // first chunk is a perfect match
      ret = list.shift();
    } else {
      // result spans more than one buffer
      ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
    }
    return ret;
  }

  // Copies a specified amount of characters from the list of buffered data
  // chunks.
  // This function is designed to be inlinable, so please take care when making
  // changes to the function body.
  function copyFromBufferString(n, list) {
    var p = list.head;
    var c = 1;
    var ret = p.data;
    n -= ret.length;
    while (p = p.next) {
      var str = p.data;
      var nb = n > str.length ? str.length : n;
      if (nb === str.length) ret += str;else ret += str.slice(0, n);
      n -= nb;
      if (n === 0) {
        if (nb === str.length) {
          ++c;
          if (p.next) list.head = p.next;else list.head = list.tail = null;
        } else {
          list.head = p;
          p.data = str.slice(nb);
        }
        break;
      }
      ++c;
    }
    list.length -= c;
    return ret;
  }

  // Copies a specified amount of bytes from the list of buffered data chunks.
  // This function is designed to be inlinable, so please take care when making
  // changes to the function body.
  function copyFromBuffer(n, list) {
    var ret = Buffer.allocUnsafe(n);
    var p = list.head;
    var c = 1;
    p.data.copy(ret);
    n -= p.data.length;
    while (p = p.next) {
      var buf = p.data;
      var nb = n > buf.length ? buf.length : n;
      buf.copy(ret, ret.length - n, 0, nb);
      n -= nb;
      if (n === 0) {
        if (nb === buf.length) {
          ++c;
          if (p.next) list.head = p.next;else list.head = list.tail = null;
        } else {
          list.head = p;
          p.data = buf.slice(nb);
        }
        break;
      }
      ++c;
    }
    list.length -= c;
    return ret;
  }

  function endReadable(stream) {
    var state = stream._readableState;

    // If we get here before consuming all the bytes, then that is a
    // bug in node.  Should never happen.
    if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

    if (!state.endEmitted) {
      state.ended = true;
      nextTick(endReadableNT, state, stream);
    }
  }

  function endReadableNT(state, stream) {
    // Check that we didn't get one last unshift.
    if (!state.endEmitted && state.length === 0) {
      state.endEmitted = true;
      stream.readable = false;
      stream.emit('end');
    }
  }

  function forEach(xs, f) {
    for (var i = 0, l = xs.length; i < l; i++) {
      f(xs[i], i);
    }
  }

  function indexOf(xs, x) {
    for (var i = 0, l = xs.length; i < l; i++) {
      if (xs[i] === x) return i;
    }
    return -1;
  }

  // A bit simpler than readable streams.
  Writable.WritableState = WritableState;
  inherits$1(Writable, EventEmitter);

  function nop() {}

  function WriteReq(chunk, encoding, cb) {
    this.chunk = chunk;
    this.encoding = encoding;
    this.callback = cb;
    this.next = null;
  }

  function WritableState(options, stream) {
    Object.defineProperty(this, 'buffer', {
      get: deprecate(function () {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')
    });
    options = options || {};

    // object stream flag to indicate whether or not this stream
    // contains buffers or objects.
    this.objectMode = !!options.objectMode;

    if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

    // the point at which write() starts returning false
    // Note: 0 is a valid value, means that we always return false if
    // the entire buffer is not flushed immediately on write()
    var hwm = options.highWaterMark;
    var defaultHwm = this.objectMode ? 16 : 16 * 1024;
    this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

    // cast to ints.
    this.highWaterMark = ~ ~this.highWaterMark;

    this.needDrain = false;
    // at the start of calling end()
    this.ending = false;
    // when end() has been called, and returned
    this.ended = false;
    // when 'finish' is emitted
    this.finished = false;

    // should we decode strings into buffers before passing to _write?
    // this is here so that some node-core streams can optimize string
    // handling at a lower level.
    var noDecode = options.decodeStrings === false;
    this.decodeStrings = !noDecode;

    // Crypto is kind of old and crusty.  Historically, its default string
    // encoding is 'binary' so we have to make this configurable.
    // Everything else in the universe uses 'utf8', though.
    this.defaultEncoding = options.defaultEncoding || 'utf8';

    // not an actual buffer we keep track of, but a measurement
    // of how much we're waiting to get pushed to some underlying
    // socket or file.
    this.length = 0;

    // a flag to see when we're in the middle of a write.
    this.writing = false;

    // when true all writes will be buffered until .uncork() call
    this.corked = 0;

    // a flag to be able to tell if the onwrite cb is called immediately,
    // or on a later tick.  We set this to true at first, because any
    // actions that shouldn't happen until "later" should generally also
    // not happen before the first write call.
    this.sync = true;

    // a flag to know if we're processing previously buffered items, which
    // may call the _write() callback in the same tick, so that we don't
    // end up in an overlapped onwrite situation.
    this.bufferProcessing = false;

    // the callback that's passed to _write(chunk,cb)
    this.onwrite = function (er) {
      onwrite(stream, er);
    };

    // the callback that the user supplies to write(chunk,encoding,cb)
    this.writecb = null;

    // the amount that is being written when _write is called.
    this.writelen = 0;

    this.bufferedRequest = null;
    this.lastBufferedRequest = null;

    // number of pending user-supplied write callbacks
    // this must be 0 before 'finish' can be emitted
    this.pendingcb = 0;

    // emit prefinish if the only thing we're waiting for is _write cbs
    // This is relevant for synchronous Transform streams
    this.prefinished = false;

    // True if the error was already emitted and should not be thrown again
    this.errorEmitted = false;

    // count buffered requests
    this.bufferedRequestCount = 0;

    // allocate the first CorkedRequest, there is always
    // one allocated and free to use, and we maintain at most two
    this.corkedRequestsFree = new CorkedRequest(this);
  }

  WritableState.prototype.getBuffer = function writableStateGetBuffer() {
    var current = this.bufferedRequest;
    var out = [];
    while (current) {
      out.push(current);
      current = current.next;
    }
    return out;
  };
  function Writable(options) {

    // Writable ctor is applied to Duplexes, though they're not
    // instanceof Writable, they're instanceof Readable.
    if (!(this instanceof Writable) && !(this instanceof Duplex)) return new Writable(options);

    this._writableState = new WritableState(options, this);

    // legacy.
    this.writable = true;

    if (options) {
      if (typeof options.write === 'function') this._write = options.write;

      if (typeof options.writev === 'function') this._writev = options.writev;
    }

    EventEmitter.call(this);
  }

  // Otherwise people can pipe Writable streams, which is just wrong.
  Writable.prototype.pipe = function () {
    this.emit('error', new Error('Cannot pipe, not readable'));
  };

  function writeAfterEnd(stream, cb) {
    var er = new Error('write after end');
    // TODO: defer error events consistently everywhere, not just the cb
    stream.emit('error', er);
    nextTick(cb, er);
  }

  // If we get something that is not a buffer, string, null, or undefined,
  // and we're not in objectMode, then that's an error.
  // Otherwise stream chunks are all considered to be of length=1, and the
  // watermarks determine how many objects to keep in the buffer, rather than
  // how many bytes or characters.
  function validChunk(stream, state, chunk, cb) {
    var valid = true;
    var er = false;
    // Always throw error if a null is written
    // if we are not in object mode then throw
    // if it is not a buffer, string, or undefined.
    if (chunk === null) {
      er = new TypeError('May not write null values to stream');
    } else if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
      er = new TypeError('Invalid non-string/buffer chunk');
    }
    if (er) {
      stream.emit('error', er);
      nextTick(cb, er);
      valid = false;
    }
    return valid;
  }

  Writable.prototype.write = function (chunk, encoding, cb) {
    var state = this._writableState;
    var ret = false;

    if (typeof encoding === 'function') {
      cb = encoding;
      encoding = null;
    }

    if (Buffer.isBuffer(chunk)) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

    if (typeof cb !== 'function') cb = nop;

    if (state.ended) writeAfterEnd(this, cb);else if (validChunk(this, state, chunk, cb)) {
      state.pendingcb++;
      ret = writeOrBuffer(this, state, chunk, encoding, cb);
    }

    return ret;
  };

  Writable.prototype.cork = function () {
    var state = this._writableState;

    state.corked++;
  };

  Writable.prototype.uncork = function () {
    var state = this._writableState;

    if (state.corked) {
      state.corked--;

      if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
    }
  };

  Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
    // node::ParseEncoding() requires lower case.
    if (typeof encoding === 'string') encoding = encoding.toLowerCase();
    if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
    this._writableState.defaultEncoding = encoding;
    return this;
  };

  function decodeChunk(state, chunk, encoding) {
    if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
      chunk = Buffer.from(chunk, encoding);
    }
    return chunk;
  }

  // if we're already writing something, then just put this
  // in the queue, and wait our turn.  Otherwise, call _write
  // If we return false, then we need a drain event, so set that flag.
  function writeOrBuffer(stream, state, chunk, encoding, cb) {
    chunk = decodeChunk(state, chunk, encoding);

    if (Buffer.isBuffer(chunk)) encoding = 'buffer';
    var len = state.objectMode ? 1 : chunk.length;

    state.length += len;

    var ret = state.length < state.highWaterMark;
    // we must ensure that previous needDrain will not be reset to false.
    if (!ret) state.needDrain = true;

    if (state.writing || state.corked) {
      var last = state.lastBufferedRequest;
      state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
      if (last) {
        last.next = state.lastBufferedRequest;
      } else {
        state.bufferedRequest = state.lastBufferedRequest;
      }
      state.bufferedRequestCount += 1;
    } else {
      doWrite(stream, state, false, len, chunk, encoding, cb);
    }

    return ret;
  }

  function doWrite(stream, state, writev, len, chunk, encoding, cb) {
    state.writelen = len;
    state.writecb = cb;
    state.writing = true;
    state.sync = true;
    if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
    state.sync = false;
  }

  function onwriteError(stream, state, sync, er, cb) {
    --state.pendingcb;
    if (sync) nextTick(cb, er);else cb(er);

    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
  }

  function onwriteStateUpdate(state) {
    state.writing = false;
    state.writecb = null;
    state.length -= state.writelen;
    state.writelen = 0;
  }

  function onwrite(stream, er) {
    var state = stream._writableState;
    var sync = state.sync;
    var cb = state.writecb;

    onwriteStateUpdate(state);

    if (er) onwriteError(stream, state, sync, er, cb);else {
      // Check if we're actually ready to finish, but don't emit yet
      var finished = needFinish(state);

      if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
        clearBuffer(stream, state);
      }

      if (sync) {
        /*<replacement>*/
          nextTick(afterWrite, stream, state, finished, cb);
        /*</replacement>*/
      } else {
          afterWrite(stream, state, finished, cb);
        }
    }
  }

  function afterWrite(stream, state, finished, cb) {
    if (!finished) onwriteDrain(stream, state);
    state.pendingcb--;
    cb();
    finishMaybe(stream, state);
  }

  // Must force callback to be called on nextTick, so that we don't
  // emit 'drain' before the write() consumer gets the 'false' return
  // value, and has a chance to attach a 'drain' listener.
  function onwriteDrain(stream, state) {
    if (state.length === 0 && state.needDrain) {
      state.needDrain = false;
      stream.emit('drain');
    }
  }

  // if there's something in the buffer waiting, then process it
  function clearBuffer(stream, state) {
    state.bufferProcessing = true;
    var entry = state.bufferedRequest;

    if (stream._writev && entry && entry.next) {
      // Fast case, write everything using _writev()
      var l = state.bufferedRequestCount;
      var buffer = new Array(l);
      var holder = state.corkedRequestsFree;
      holder.entry = entry;

      var count = 0;
      while (entry) {
        buffer[count] = entry;
        entry = entry.next;
        count += 1;
      }

      doWrite(stream, state, true, state.length, buffer, '', holder.finish);

      // doWrite is almost always async, defer these to save a bit of time
      // as the hot path ends with doWrite
      state.pendingcb++;
      state.lastBufferedRequest = null;
      if (holder.next) {
        state.corkedRequestsFree = holder.next;
        holder.next = null;
      } else {
        state.corkedRequestsFree = new CorkedRequest(state);
      }
    } else {
      // Slow case, write chunks one-by-one
      while (entry) {
        var chunk = entry.chunk;
        var encoding = entry.encoding;
        var cb = entry.callback;
        var len = state.objectMode ? 1 : chunk.length;

        doWrite(stream, state, false, len, chunk, encoding, cb);
        entry = entry.next;
        // if we didn't call the onwrite immediately, then
        // it means that we need to wait until it does.
        // also, that means that the chunk and cb are currently
        // being processed, so move the buffer counter past them.
        if (state.writing) {
          break;
        }
      }

      if (entry === null) state.lastBufferedRequest = null;
    }

    state.bufferedRequestCount = 0;
    state.bufferedRequest = entry;
    state.bufferProcessing = false;
  }

  Writable.prototype._write = function (chunk, encoding, cb) {
    cb(new Error('not implemented'));
  };

  Writable.prototype._writev = null;

  Writable.prototype.end = function (chunk, encoding, cb) {
    var state = this._writableState;

    if (typeof chunk === 'function') {
      cb = chunk;
      chunk = null;
      encoding = null;
    } else if (typeof encoding === 'function') {
      cb = encoding;
      encoding = null;
    }

    if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

    // .end() fully uncorks
    if (state.corked) {
      state.corked = 1;
      this.uncork();
    }

    // ignore unnecessary end() calls.
    if (!state.ending && !state.finished) endWritable(this, state, cb);
  };

  function needFinish(state) {
    return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
  }

  function prefinish(stream, state) {
    if (!state.prefinished) {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }

  function finishMaybe(stream, state) {
    var need = needFinish(state);
    if (need) {
      if (state.pendingcb === 0) {
        prefinish(stream, state);
        state.finished = true;
        stream.emit('finish');
      } else {
        prefinish(stream, state);
      }
    }
    return need;
  }

  function endWritable(stream, state, cb) {
    state.ending = true;
    finishMaybe(stream, state);
    if (cb) {
      if (state.finished) nextTick(cb);else stream.once('finish', cb);
    }
    state.ended = true;
    stream.writable = false;
  }

  // It seems a linked list but it is not
  // there will be only 2 of these for each stream
  function CorkedRequest(state) {
    var _this = this;

    this.next = null;
    this.entry = null;

    this.finish = function (err) {
      var entry = _this.entry;
      _this.entry = null;
      while (entry) {
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
      }
      if (state.corkedRequestsFree) {
        state.corkedRequestsFree.next = _this;
      } else {
        state.corkedRequestsFree = _this;
      }
    };
  }

  inherits$1(Duplex, Readable);

  var keys = Object.keys(Writable.prototype);
  for (var v = 0; v < keys.length; v++) {
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
  }
  function Duplex(options) {
    if (!(this instanceof Duplex)) return new Duplex(options);

    Readable.call(this, options);
    Writable.call(this, options);

    if (options && options.readable === false) this.readable = false;

    if (options && options.writable === false) this.writable = false;

    this.allowHalfOpen = true;
    if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

    this.once('end', onend);
  }

  // the no-half-open enforcer
  function onend() {
    // if we allow half-open state, or if the writable side ended,
    // then we're ok.
    if (this.allowHalfOpen || this._writableState.ended) return;

    // no more data can be written.
    // But allow more writes to happen in this tick.
    nextTick(onEndNT, this);
  }

  function onEndNT(self) {
    self.end();
  }

  // a transform stream is a readable/writable stream where you do
  inherits$1(Transform, Duplex);

  function TransformState(stream) {
    this.afterTransform = function (er, data) {
      return afterTransform(stream, er, data);
    };

    this.needTransform = false;
    this.transforming = false;
    this.writecb = null;
    this.writechunk = null;
    this.writeencoding = null;
  }

  function afterTransform(stream, er, data) {
    var ts = stream._transformState;
    ts.transforming = false;

    var cb = ts.writecb;

    if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));

    ts.writechunk = null;
    ts.writecb = null;

    if (data !== null && data !== undefined) stream.push(data);

    cb(er);

    var rs = stream._readableState;
    rs.reading = false;
    if (rs.needReadable || rs.length < rs.highWaterMark) {
      stream._read(rs.highWaterMark);
    }
  }
  function Transform(options) {
    if (!(this instanceof Transform)) return new Transform(options);

    Duplex.call(this, options);

    this._transformState = new TransformState(this);

    // when the writable side finishes, then flush out anything remaining.
    var stream = this;

    // start out asking for a readable event once data is transformed.
    this._readableState.needReadable = true;

    // we have implemented the _read method, and done the other things
    // that Readable wants before the first _read call, so unset the
    // sync guard flag.
    this._readableState.sync = false;

    if (options) {
      if (typeof options.transform === 'function') this._transform = options.transform;

      if (typeof options.flush === 'function') this._flush = options.flush;
    }

    this.once('prefinish', function () {
      if (typeof this._flush === 'function') this._flush(function (er) {
        done(stream, er);
      });else done(stream);
    });
  }

  Transform.prototype.push = function (chunk, encoding) {
    this._transformState.needTransform = false;
    return Duplex.prototype.push.call(this, chunk, encoding);
  };

  // This is the part where you do stuff!
  // override this function in implementation classes.
  // 'chunk' is an input chunk.
  //
  // Call `push(newChunk)` to pass along transformed output
  // to the readable side.  You may call 'push' zero or more times.
  //
  // Call `cb(err)` when you are done with this chunk.  If you pass
  // an error, then that'll put the hurt on the whole operation.  If you
  // never call cb(), then you'll never get another chunk.
  Transform.prototype._transform = function (chunk, encoding, cb) {
    throw new Error('Not implemented');
  };

  Transform.prototype._write = function (chunk, encoding, cb) {
    var ts = this._transformState;
    ts.writecb = cb;
    ts.writechunk = chunk;
    ts.writeencoding = encoding;
    if (!ts.transforming) {
      var rs = this._readableState;
      if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
    }
  };

  // Doesn't matter what the args are here.
  // _transform does all the work.
  // That we got here means that the readable side wants more data.
  Transform.prototype._read = function (n) {
    var ts = this._transformState;

    if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
      ts.transforming = true;
      this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
    } else {
      // mark that we need a transform, so that any data that comes in
      // will get processed, now that we've asked for it.
      ts.needTransform = true;
    }
  };

  function done(stream, er) {
    if (er) return stream.emit('error', er);

    // if there's nothing in the write buffer, then that means
    // that nothing more will ever be provided
    var ws = stream._writableState;
    var ts = stream._transformState;

    if (ws.length) throw new Error('Calling transform done when ws.length != 0');

    if (ts.transforming) throw new Error('Calling transform done when still transforming');

    return stream.push(null);
  }

  inherits$1(PassThrough, Transform);
  function PassThrough(options) {
    if (!(this instanceof PassThrough)) return new PassThrough(options);

    Transform.call(this, options);
  }

  PassThrough.prototype._transform = function (chunk, encoding, cb) {
    cb(null, chunk);
  };

  inherits$1(Stream, EventEmitter);
  Stream.Readable = Readable;
  Stream.Writable = Writable;
  Stream.Duplex = Duplex;
  Stream.Transform = Transform;
  Stream.PassThrough = PassThrough;

  // Backwards-compat with node 0.4.x
  Stream.Stream = Stream;

  // old-style streams.  Note that the pipe method (the only relevant
  // part of this class) is overridden in the Readable class.

  function Stream() {
    EventEmitter.call(this);
  }

  Stream.prototype.pipe = function(dest, options) {
    var source = this;

    function ondata(chunk) {
      if (dest.writable) {
        if (false === dest.write(chunk) && source.pause) {
          source.pause();
        }
      }
    }

    source.on('data', ondata);

    function ondrain() {
      if (source.readable && source.resume) {
        source.resume();
      }
    }

    dest.on('drain', ondrain);

    // If the 'end' option is not supplied, dest.end() will be called when
    // source gets the 'end' or 'close' events.  Only dest.end() once.
    if (!dest._isStdio && (!options || options.end !== false)) {
      source.on('end', onend);
      source.on('close', onclose);
    }

    var didOnEnd = false;
    function onend() {
      if (didOnEnd) return;
      didOnEnd = true;

      dest.end();
    }


    function onclose() {
      if (didOnEnd) return;
      didOnEnd = true;

      if (typeof dest.destroy === 'function') dest.destroy();
    }

    // don't leave dangling pipes when there are errors.
    function onerror(er) {
      cleanup();
      if (EventEmitter.listenerCount(this, 'error') === 0) {
        throw er; // Unhandled stream error in pipe.
      }
    }

    source.on('error', onerror);
    dest.on('error', onerror);

    // remove all the event listeners that were added.
    function cleanup() {
      source.removeListener('data', ondata);
      dest.removeListener('drain', ondrain);

      source.removeListener('end', onend);
      source.removeListener('close', onclose);

      source.removeListener('error', onerror);
      dest.removeListener('error', onerror);

      source.removeListener('end', cleanup);
      source.removeListener('close', cleanup);

      dest.removeListener('close', cleanup);
    }

    source.on('end', cleanup);
    source.on('close', cleanup);

    dest.on('close', cleanup);

    dest.emit('pipe', source);

    // Allow for unix-like usage: A.pipe(B).pipe(C)
    return dest;
  };

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

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

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
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

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  /*
  The MIT License (MIT)

  Copyright (c) 2016 CoderPuppy

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

  */
  var _endianness;
  function endianness() {
    if (typeof _endianness === 'undefined') {
      var a = new ArrayBuffer(2);
      var b = new Uint8Array(a);
      var c = new Uint16Array(a);
      b[0] = 1;
      b[1] = 2;
      if (c[0] === 258) {
        _endianness = 'BE';
      } else if (c[0] === 513){
        _endianness = 'LE';
      } else {
        throw new Error('unable to figure out endianess');
      }
    }
    return _endianness;
  }

  function hostname() {
    if (typeof global$1.location !== 'undefined') {
      return global$1.location.hostname
    } else return '';
  }

  function loadavg() {
    return [];
  }

  function uptime$1() {
    return 0;
  }

  function freemem() {
    return Number.MAX_VALUE;
  }

  function totalmem() {
    return Number.MAX_VALUE;
  }

  function cpus() {
    return [];
  }

  function type() {
    return 'Browser';
  }

  function release$1 () {
    if (typeof global$1.navigator !== 'undefined') {
      return global$1.navigator.appVersion;
    }
    return '';
  }

  function networkInterfaces(){}
  function getNetworkInterfaces(){}

  function tmpDir() {
    return '/tmp';
  }
  var tmpdir = tmpDir;

  var EOL = '\n';
  var os = {
    EOL: EOL,
    tmpdir: tmpdir,
    tmpDir: tmpDir,
    networkInterfaces:networkInterfaces,
    getNetworkInterfaces: getNetworkInterfaces,
    release: release$1,
    type: type,
    cpus: cpus,
    totalmem: totalmem,
    freemem: freemem,
    uptime: uptime$1,
    loadavg: loadavg,
    hostname: hostname,
    endianness: endianness,
  };

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  /**
   * lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright jQuery Foundation and other contributors <https://jquery.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  /** Used as the `TypeError` message for "Functions" methods. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0;

  /** `Object#toString` result references. */
  var funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      symbolTag = '[object Symbol]';

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      reLeadingDot = /^\./,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Checks if `value` is a host object in IE < 9.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
   */
  function isHostObject(value) {
    // Many host objects are `Object` objects that can coerce to strings
    // despite having improperly defined `toString` methods.
    var result = false;
    if (value != null && typeof value.toString != 'function') {
      try {
        result = !!(value + '');
      } catch (e) {}
    }
    return result;
  }

  /** Used for built-in method references. */
  var arrayProto = Array.prototype,
      funcProto = Function.prototype,
      objectProto = Object.prototype;

  /** Used to detect overreaching core-js shims. */
  var coreJsData = root['__core-js_shared__'];

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? ('Symbol(src)_1.' + uid) : '';
  }());

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$1 = objectProto.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var objectToString$1 = objectProto.toString;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' +
    funcToString.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
  );

  /** Built-in value references. */
  var Symbol$1 = root.Symbol,
      splice = arrayProto.splice;

  /* Built-in method references that are verified to be native. */
  var Map = getNative(root, 'Map'),
      nativeCreate = getNative(Object, 'create');

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
      symbolToString = symbolProto ? symbolProto.toString : undefined;

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
        length = entries ? entries.length : 0;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
  }

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    return this.has(key) && delete this.__data__[key];
  }

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty$1.call(data, key) ? data[key] : undefined;
  }

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty$1.call(data, key);
  }

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__;
    data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
    return this;
  }

  // Add methods to `Hash`.
  Hash.prototype.clear = hashClear;
  Hash.prototype['delete'] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
        length = entries ? entries.length : 0;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
  }

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    return true;
  }

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    return index < 0 ? undefined : data[index][1];
  }

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet(key, value) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  // Add methods to `ListCache`.
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype['delete'] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
        length = entries ? entries.length : 0;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.__data__ = {
      'hash': new Hash,
      'map': new (Map || ListCache),
      'string': new Hash
    };
  }

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete(key) {
    return getMapData(this, key)['delete'](key);
  }

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet(key, value) {
    getMapData(this, key).set(key, value);
    return this;
  }

  // Add methods to `MapCache`.
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype['delete'] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.get` without support for default values.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @returns {*} Returns the resolved value.
   */
  function baseGet(object, path) {
    path = isKey(path, object) ? [path] : castPath(path);

    var index = 0,
        length = path.length;

    while (object != null && index < length) {
      object = object[toKey(path[index++])];
    }
    return (index && index == length) ? object : undefined;
  }

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject$1(value) || isMasked(value)) {
      return false;
    }
    var pattern = (isFunction$1(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }

  /**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */
  function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value;
    }
    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
  }

  /**
   * Casts `value` to a path array if it's not one.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {Array} Returns the cast property path array.
   */
  function castPath(value) {
    return isArray$2(value) ? value : stringToPath(value);
  }

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key)
      ? data[typeof key == 'string' ? 'string' : 'hash']
      : data.map;
  }

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  /**
   * Checks if `value` is a property name and not a property path.
   *
   * @private
   * @param {*} value The value to check.
   * @param {Object} [object] The object to query keys on.
   * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
   */
  function isKey(value, object) {
    if (isArray$2(value)) {
      return false;
    }
    var type = typeof value;
    if (type == 'number' || type == 'symbol' || type == 'boolean' ||
        value == null || isSymbol(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
      (object != null && value in Object(object));
  }

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = typeof value;
    return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
      ? (value !== '__proto__')
      : (value === null);
  }

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && (maskSrcKey in func);
  }

  /**
   * Converts `string` to a property path array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the property path array.
   */
  var stringToPath = memoize(function(string) {
    string = toString$1(string);

    var result = [];
    if (reLeadingDot.test(string)) {
      result.push('');
    }
    string.replace(rePropName, function(match, number, quote, string) {
      result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
    });
    return result;
  });

  /**
   * Converts `value` to a string key if it's not a string or symbol.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {string|symbol} Returns the key.
   */
  function toKey(value) {
    if (typeof value == 'string' || isSymbol(value)) {
      return value;
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
  }

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to process.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {}
      try {
        return (func + '');
      } catch (e) {}
    }
    return '';
  }

  /**
   * Creates a function that memoizes the result of `func`. If `resolver` is
   * provided, it determines the cache key for storing the result based on the
   * arguments provided to the memoized function. By default, the first argument
   * provided to the memoized function is used as the map cache key. The `func`
   * is invoked with the `this` binding of the memoized function.
   *
   * **Note:** The cache is exposed as the `cache` property on the memoized
   * function. Its creation may be customized by replacing the `_.memoize.Cache`
   * constructor with one whose instances implement the
   * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
   * method interface of `delete`, `get`, `has`, and `set`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to have its output memoized.
   * @param {Function} [resolver] The function to resolve the cache key.
   * @returns {Function} Returns the new memoized function.
   * @example
   *
   * var object = { 'a': 1, 'b': 2 };
   * var other = { 'c': 3, 'd': 4 };
   *
   * var values = _.memoize(_.values);
   * values(object);
   * // => [1, 2]
   *
   * values(other);
   * // => [3, 4]
   *
   * object.a = 2;
   * values(object);
   * // => [1, 2]
   *
   * // Modify the result cache.
   * values.cache.set(object, ['a', 'b']);
   * values(object);
   * // => ['a', 'b']
   *
   * // Replace `_.memoize.Cache`.
   * _.memoize.Cache = WeakMap;
   */
  function memoize(func, resolver) {
    if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function() {
      var args = arguments,
          key = resolver ? resolver.apply(this, args) : args[0],
          cache = memoized.cache;

      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result);
      return result;
    };
    memoized.cache = new (memoize.Cache || MapCache);
    return memoized;
  }

  // Assign cache to `_.memoize`.
  memoize.Cache = MapCache;

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || (value !== value && other !== other);
  }

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray$2 = Array.isArray;

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction$1(value) {
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 8-9 which returns 'object' for typed array and other constructors.
    var tag = isObject$1(value) ? objectToString$1.call(value) : '';
    return tag == funcTag || tag == genTag;
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject$1(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return typeof value == 'symbol' ||
      (isObjectLike(value) && objectToString$1.call(value) == symbolTag);
  }

  /**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   * @example
   *
   * _.toString(null);
   * // => ''
   *
   * _.toString(-0);
   * // => '-0'
   *
   * _.toString([1, 2, 3]);
   * // => '1,2,3'
   */
  function toString$1(value) {
    return value == null ? '' : baseToString(value);
  }

  /**
   * Gets the value at `path` of `object`. If the resolved value is
   * `undefined`, the `defaultValue` is returned in its place.
   *
   * @static
   * @memberOf _
   * @since 3.7.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @param {*} [defaultValue] The value returned for `undefined` resolved values.
   * @returns {*} Returns the resolved value.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 3 } }] };
   *
   * _.get(object, 'a[0].b.c');
   * // => 3
   *
   * _.get(object, ['a', '0', 'b', 'c']);
   * // => 3
   *
   * _.get(object, 'a.b.c', 'default');
   * // => 'default'
   */
  function get(object, path, defaultValue) {
    var result = object == null ? undefined : baseGet(object, path);
    return result === undefined ? defaultValue : result;
  }

  var lodash_get = get;

  function getProp(obj, path, defaultValue) {
    return obj[path] === undefined || obj[path] === null ? defaultValue : obj[path];
  }

  function setProp(obj, path, value) {
    var pathArray = Array.isArray(path) ? path : path.split('.');
    var key = pathArray[0];
    var newValue = pathArray.length > 1 ? setProp(obj[key] || {}, pathArray.slice(1), value) : value;
    return Object.assign({}, obj, _defineProperty({}, key, newValue));
  }

  function flattenReducer(acc, arr) {
    try {
      // This is faster but susceptible to `RangeError: Maximum call stack size exceeded`
      acc.push.apply(acc, _toConsumableArray(arr));
      return acc;
    } catch (err) {
      // Fallback to a slower but safer option
      return acc.concat(arr);
    }
  }

  function fastJoin(arr, separator) {
    var isFirst = true;
    return arr.reduce(function (acc, elem) {
      if (elem === null || elem === undefined) {
        elem = '';
      }

      if (isFirst) {
        isFirst = false;
        return "".concat(elem);
      }

      return "".concat(acc).concat(separator).concat(elem);
    }, '');
  }

  var utils = {
    getProp: getProp,
    setProp: setProp,
    fastJoin: fastJoin,
    flattenReducer: flattenReducer
  };

  var getProp$1 = utils.getProp,
      setProp$1 = utils.setProp,
      fastJoin$1 = utils.fastJoin,
      flattenReducer$1 = utils.flattenReducer;

  var JSON2CSVBase =
  /*#__PURE__*/
  function () {
    function JSON2CSVBase(opts) {
      _classCallCheck(this, JSON2CSVBase);

      this.opts = this.preprocessOpts(opts);
      this.preprocessRow = this.memoizePreprocessRow();
    }
    /**
     * Check passing opts and set defaults.
     *
     * @param {Json2CsvOptions} opts Options object containing fields,
     * delimiter, default value, quote mark, header, etc.
     */


    _createClass(JSON2CSVBase, [{
      key: "preprocessOpts",
      value: function preprocessOpts(opts) {
        var processedOpts = Object.assign({}, opts);
        processedOpts.unwind = !Array.isArray(processedOpts.unwind) ? processedOpts.unwind ? [processedOpts.unwind] : [] : processedOpts.unwind;
        processedOpts.delimiter = processedOpts.delimiter || ',';
        processedOpts.flattenSeparator = processedOpts.flattenSeparator || '.';
        processedOpts.eol = processedOpts.eol || os.EOL;
        processedOpts.quote = typeof processedOpts.quote === 'string' ? opts.quote : '"';
        processedOpts.doubleQuote = typeof processedOpts.doubleQuote === 'string' ? processedOpts.doubleQuote : processedOpts.quote + processedOpts.quote;
        processedOpts.header = processedOpts.header !== false;
        processedOpts.includeEmptyRows = processedOpts.includeEmptyRows || false;
        processedOpts.withBOM = processedOpts.withBOM || false;
        return processedOpts;
      }
      /**
       * Check and normalize the fields configuration.
       *
       * @param {(string|object)[]} fields Fields configuration provided by the user
       * or inferred from the data
       * @returns {object[]} preprocessed FieldsInfo array
       */

    }, {
      key: "preprocessFieldsInfo",
      value: function preprocessFieldsInfo(fields) {
        var _this = this;

        return fields.map(function (fieldInfo) {
          if (typeof fieldInfo === 'string') {
            return {
              label: fieldInfo,
              value: fieldInfo.includes('.') || fieldInfo.includes('[') ? function (row) {
                return lodash_get(row, fieldInfo, _this.opts.defaultValue);
              } : function (row) {
                return getProp$1(row, fieldInfo, _this.opts.defaultValue);
              },
              stringify: true
            };
          }

          if (_typeof(fieldInfo) === 'object') {
            var defaultValue = 'default' in fieldInfo ? fieldInfo.default : _this.opts.defaultValue;

            if (typeof fieldInfo.value === 'string') {
              return {
                label: fieldInfo.label || fieldInfo.value,
                value: fieldInfo.value.includes('.') || fieldInfo.value.includes('[') ? function (row) {
                  return lodash_get(row, fieldInfo.value, defaultValue);
                } : function (row) {
                  return getProp$1(row, fieldInfo.value, defaultValue);
                },
                stringify: fieldInfo.stringify !== undefined ? fieldInfo.stringify : true
              };
            }

            if (typeof fieldInfo.value === 'function') {
              var label = fieldInfo.label || fieldInfo.value.name || '';
              var field = {
                label: label,
                default: defaultValue
              };
              return {
                label: label,
                value: function value(row) {
                  var value = fieldInfo.value(row, field);
                  return value === null || value === undefined ? defaultValue : value;
                },
                stringify: fieldInfo.stringify !== undefined ? fieldInfo.stringify : true
              };
            }
          }

          throw new Error('Invalid field info option. ' + JSON.stringify(fieldInfo));
        });
      }
      /**
       * Create the title row with all the provided fields as column headings
       *
       * @returns {String} titles as a string
       */

    }, {
      key: "getHeader",
      value: function getHeader() {
        var _this2 = this;

        return fastJoin$1(this.opts.fields.map(function (fieldInfo) {
          return _this2.processValue(fieldInfo.label, true);
        }), this.opts.delimiter);
      }
    }, {
      key: "memoizePreprocessRow",
      value: function memoizePreprocessRow() {
        if (this.opts.unwind && this.opts.unwind.length) {
          if (this.opts.flatten) {
            return function (row) {
              var _this3 = this;

              return this.unwindData(row, this.opts.unwind).map(function (row) {
                return _this3.flatten(row, _this3.opts.flattenSeparator);
              });
            };
          }

          return function (row) {
            return this.unwindData(row, this.opts.unwind);
          };
        }

        if (this.opts.flatten) {
          return function (row) {
            return [this.flatten(row, this.opts.flattenSeparator)];
          };
        }

        return function (row) {
          return [row];
        };
      }
      /**
       * Preprocess each object according to the give opts (unwind, flatten, etc.).
       * The actual body of the function is dynamically set on the constructor by the
       *  `memoizePreprocessRow` method after parsing the options.
       *
       * @param {Object} row JSON object to be converted in a CSV row
       */

    }, {
      key: "preprocessRow",
      value: function preprocessRow() {}
      /**
       * Create the content of a specific CSV row
       *
       * @param {Object} row JSON object to be converted in a CSV row
       * @returns {String} CSV string (row)
       */

    }, {
      key: "processRow",
      value: function processRow(row) {
        var _this4 = this;

        if (!row) {
          return undefined;
        }

        var processedRow = this.opts.fields.map(function (fieldInfo) {
          return _this4.processCell(row, fieldInfo);
        });

        if (!this.opts.includeEmptyRows && processedRow.every(function (field) {
          return field === undefined;
        })) {
          return undefined;
        }

        return fastJoin$1(processedRow, this.opts.delimiter);
      }
      /**
       * Create the content of a specfic CSV row cell
       *
       * @param {Object} row JSON object representing the  CSV row that the cell belongs to
       * @param {FieldInfo} fieldInfo Details of the field to process to be a CSV cell
       * @returns {String} CSV string (cell)
       */

    }, {
      key: "processCell",
      value: function processCell(row, fieldInfo) {
        return this.processValue(fieldInfo.value(row), fieldInfo.stringify);
      }
      /**
       * Create the content of a specfic CSV row cell
       *
       * @param {Any} value Value to be included in a CSV cell
       * @param {Boolean} stringify Details of the field to process to be a CSV cell
       * @returns {String} Value stringified and processed
       */

    }, {
      key: "processValue",
      value: function processValue(value, stringify) {
        if (value === null || value === undefined) {
          return undefined;
        }

        var valueType = _typeof(value);

        if (valueType !== 'boolean' && valueType !== 'number' && valueType !== 'string') {
          value = JSON.stringify(value);

          if (value === undefined) {
            return undefined;
          }

          if (value[0] === '"') {
            value = value.replace(/^"(.+)"$/, '$1');
          }
        }

        if (typeof value === 'string') {
          if (value.includes(this.opts.quote)) {
            value = value.replace(new RegExp(this.opts.quote, 'g'), this.opts.doubleQuote);
          } // This should probably be remove together with the whole strignify option


          if (stringify) {
            value = "".concat(this.opts.quote).concat(value).concat(this.opts.quote);
          } else {
            value = value.replace(new RegExp("^".concat(this.opts.doubleQuote)), this.opts.quote).replace(new RegExp("".concat(this.opts.doubleQuote, "$")), this.opts.quote);
          }

          if (this.opts.excelStrings) {
            value = "\"=\"".concat(value, "\"\"");
          }
        }

        return value;
      }
      /**
       * Performs the flattening of a data row recursively
       *
       * @param {Object} dataRow Original JSON object
       * @param {String} separator Separator to be used as the flattened field name
       * @returns {Object} Flattened object
       */

    }, {
      key: "flatten",
      value: function flatten(dataRow, separator) {
        function step(obj, flatDataRow, currentPath) {
          Object.keys(obj).forEach(function (key) {
            var value = obj[key];
            var newPath = currentPath ? "".concat(currentPath).concat(separator).concat(key) : key;

            if (_typeof(value) !== 'object' || value === null || Array.isArray(value) || Object.prototype.toString.call(value.toJSON) === '[object Function]' || !Object.keys(value).length) {
              flatDataRow[newPath] = value;
              return;
            }

            step(value, flatDataRow, newPath);
          });
          return flatDataRow;
        }

        return step(dataRow, {});
      }
      /**
       * Performs the unwind recursively in specified sequence
       *
       * @param {Object} dataRow Original JSON object
       * @param {String[]} unwindPaths The paths as strings to be used to deconstruct the array
       * @returns {Array} Array of objects containing all rows after unwind of chosen paths
      */

    }, {
      key: "unwindData",
      value: function unwindData(dataRow, unwindPaths) {
        var _this5 = this;

        var unwind = function unwind(rows, unwindPath) {
          return rows.map(function (row) {
            var unwindArray = lodash_get(row, unwindPath);

            if (!Array.isArray(unwindArray)) {
              return row;
            }

            if (!unwindArray.length) {
              return setProp$1(row, unwindPath, undefined);
            }

            return unwindArray.map(function (unwindRow, index) {
              var clonedRow = _this5.opts.unwindBlank && index > 0 ? {} : row;
              return setProp$1(clonedRow, unwindPath, unwindRow);
            });
          }).reduce(flattenReducer$1, []);
        };

        return unwindPaths.reduce(unwind, [dataRow]);
      }
    }]);

    return JSON2CSVBase;
  }();

  var JSON2CSVBase_1 = JSON2CSVBase;

  var fastJoin$2 = utils.fastJoin,
      flattenReducer$2 = utils.flattenReducer;

  var JSON2CSVParser =
  /*#__PURE__*/
  function (_JSON2CSVBase) {
    _inherits(JSON2CSVParser, _JSON2CSVBase);

    function JSON2CSVParser(opts) {
      var _this;

      _classCallCheck(this, JSON2CSVParser);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(JSON2CSVParser).call(this, opts));

      if (_this.opts.fields) {
        _this.opts.fields = _this.preprocessFieldsInfo(_this.opts.fields);
      }

      return _this;
    }
    /**
     * Main function that converts json to csv.
     *
     * @param {Array|Object} data Array of JSON objects to be converted to CSV
     * @returns {String} The CSV formated data as a string
     */


    _createClass(JSON2CSVParser, [{
      key: "parse",
      value: function parse(data) {
        var processedData = this.preprocessData(data);

        if (!this.opts.fields) {
          this.opts.fields = processedData.reduce(function (fields, item) {
            Object.keys(item).forEach(function (field) {
              if (!fields.includes(field)) {
                fields.push(field);
              }
            });
            return fields;
          }, []);
          this.opts.fields = this.preprocessFieldsInfo(this.opts.fields);
        }

        var header = this.opts.header ? this.getHeader() : '';
        var rows = this.processData(processedData);
        var csv = (this.opts.withBOM ? "\uFEFF" : '') + header + (header && rows ? this.opts.eol : '') + rows;
        return csv;
      }
      /**
       * Preprocess the data according to the give opts (unwind, flatten, etc.)
        and calculate the fields and field names if they are not provided.
       *
       * @param {Array|Object} data Array or object to be converted to CSV
       */

    }, {
      key: "preprocessData",
      value: function preprocessData(data) {
        var _this2 = this;

        var processedData = Array.isArray(data) ? data : [data];

        if (!this.opts.fields && (processedData.length === 0 || _typeof(processedData[0]) !== 'object')) {
          throw new Error('Data should not be empty or the "fields" option should be included');
        }

        if ((!this.opts.unwind || !this.opts.unwind.length) && !this.opts.flatten) {
          return processedData;
        }

        return processedData.map(function (row) {
          return _this2.preprocessRow(row);
        }).reduce(flattenReducer$2, []);
      }
      /**
       * Create the content row by row below the header
       *
       * @param {Array} data Array of JSON objects to be converted to CSV
       * @returns {String} CSV string (body)
       */

    }, {
      key: "processData",
      value: function processData(data) {
        var _this3 = this;

        return fastJoin$2(data.map(function (row) {
          return _this3.processRow(row);
        }).filter(function (row) {
          return row;
        }), // Filter empty rows
        this.opts.eol);
      }
    }]);

    return JSON2CSVParser;
  }(JSON2CSVBase_1);

  var JSON2CSVParser_1 = JSON2CSVParser;

  /*global Buffer*/
  // Named constants with unique integer values
  var C = {};
  // Tokens
  var LEFT_BRACE    = C.LEFT_BRACE    = 0x1;
  var RIGHT_BRACE   = C.RIGHT_BRACE   = 0x2;
  var LEFT_BRACKET  = C.LEFT_BRACKET  = 0x3;
  var RIGHT_BRACKET = C.RIGHT_BRACKET = 0x4;
  var COLON         = C.COLON         = 0x5;
  var COMMA         = C.COMMA         = 0x6;
  var TRUE          = C.TRUE          = 0x7;
  var FALSE         = C.FALSE         = 0x8;
  var NULL          = C.NULL          = 0x9;
  var STRING        = C.STRING        = 0xa;
  var NUMBER        = C.NUMBER        = 0xb;
  // Tokenizer States
  var START   = C.START   = 0x11;
  var STOP    = C.STOP    = 0x12;
  var TRUE1   = C.TRUE1   = 0x21;
  var TRUE2   = C.TRUE2   = 0x22;
  var TRUE3   = C.TRUE3   = 0x23;
  var FALSE1  = C.FALSE1  = 0x31;
  var FALSE2  = C.FALSE2  = 0x32;
  var FALSE3  = C.FALSE3  = 0x33;
  var FALSE4  = C.FALSE4  = 0x34;
  var NULL1   = C.NULL1   = 0x41;
  var NULL2   = C.NULL2   = 0x42;
  var NULL3   = C.NULL3   = 0x43;
  var NUMBER1 = C.NUMBER1 = 0x51;
  var NUMBER3 = C.NUMBER3 = 0x53;
  var STRING1 = C.STRING1 = 0x61;
  var STRING2 = C.STRING2 = 0x62;
  var STRING3 = C.STRING3 = 0x63;
  var STRING4 = C.STRING4 = 0x64;
  var STRING5 = C.STRING5 = 0x65;
  var STRING6 = C.STRING6 = 0x66;
  // Parser States
  var VALUE   = C.VALUE   = 0x71;
  var KEY     = C.KEY     = 0x72;
  // Parser Modes
  var OBJECT  = C.OBJECT  = 0x81;
  var ARRAY   = C.ARRAY   = 0x82;
  // Character constants
  var BACK_SLASH =      "\\".charCodeAt(0);
  var FORWARD_SLASH =   "\/".charCodeAt(0);
  var BACKSPACE =       "\b".charCodeAt(0);
  var FORM_FEED =       "\f".charCodeAt(0);
  var NEWLINE =         "\n".charCodeAt(0);
  var CARRIAGE_RETURN = "\r".charCodeAt(0);
  var TAB =             "\t".charCodeAt(0);

  var STRING_BUFFER_SIZE = 64 * 1024;

  function Parser() {
    this.tState = START;
    this.value = undefined;

    this.string = undefined; // string data
    this.stringBuffer = Buffer.alloc ? Buffer.alloc(STRING_BUFFER_SIZE) : new Buffer(STRING_BUFFER_SIZE);
    this.stringBufferOffset = 0;
    this.unicode = undefined; // unicode escapes
    this.highSurrogate = undefined;

    this.key = undefined;
    this.mode = undefined;
    this.stack = [];
    this.state = VALUE;
    this.bytes_remaining = 0; // number of bytes remaining in multi byte utf8 char to read after split boundary
    this.bytes_in_sequence = 0; // bytes in multi byte utf8 char to read
    this.temp_buffs = { "2": new Buffer(2), "3": new Buffer(3), "4": new Buffer(4) }; // for rebuilding chars split before boundary is reached

    // Stream offset
    this.offset = -1;
  }

  // Slow code to string converter (only used when throwing syntax errors)
  Parser.toknam = function (code) {
    var keys = Object.keys(C);
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      if (C[key] === code) { return key; }
    }
    return code && ("0x" + code.toString(16));
  };

  var proto = Parser.prototype;
  proto.onError = function (err) { throw err; };
  proto.charError = function (buffer, i) {
    this.tState = STOP;
    this.onError(new Error("Unexpected " + JSON.stringify(String.fromCharCode(buffer[i])) + " at position " + i + " in state " + Parser.toknam(this.tState)));
  };
  proto.appendStringChar = function (char) {
    if (this.stringBufferOffset >= STRING_BUFFER_SIZE) {
      this.string += this.stringBuffer.toString('utf8');
      this.stringBufferOffset = 0;
    }

    this.stringBuffer[this.stringBufferOffset++] = char;
  };
  proto.appendStringBuf = function (buf, start, end) {
    var size = buf.length;
    if (typeof start === 'number') {
      if (typeof end === 'number') {
        if (end < 0) {
          // adding a negative end decreeses the size
          size = buf.length - start + end;
        } else {
          size = end - start;
        }
      } else {
        size = buf.length - start;
      }
    }

    if (size < 0) {
      size = 0;
    }

    if (this.stringBufferOffset + size > STRING_BUFFER_SIZE) {
      this.string += this.stringBuffer.toString('utf8', 0, this.stringBufferOffset);
      this.stringBufferOffset = 0;
    }

    buf.copy(this.stringBuffer, this.stringBufferOffset, start, end);
    this.stringBufferOffset += size;
  };
  proto.write = function (buffer) {
    if (typeof buffer === "string") buffer = new Buffer(buffer);
    var n;
    for (var i = 0, l = buffer.length; i < l; i++) {
      if (this.tState === START){
        n = buffer[i];
        this.offset++;
        if(n === 0x7b){ this.onToken(LEFT_BRACE, "{"); // {
        }else if(n === 0x7d){ this.onToken(RIGHT_BRACE, "}"); // }
        }else if(n === 0x5b){ this.onToken(LEFT_BRACKET, "["); // [
        }else if(n === 0x5d){ this.onToken(RIGHT_BRACKET, "]"); // ]
        }else if(n === 0x3a){ this.onToken(COLON, ":");  // :
        }else if(n === 0x2c){ this.onToken(COMMA, ","); // ,
        }else if(n === 0x74){ this.tState = TRUE1;  // t
        }else if(n === 0x66){ this.tState = FALSE1;  // f
        }else if(n === 0x6e){ this.tState = NULL1; // n
        }else if(n === 0x22){ // "
          this.string = "";
          this.stringBufferOffset = 0;
          this.tState = STRING1;
        }else if(n === 0x2d){ this.string = "-"; this.tState = NUMBER1; // -
        }else{
          if (n >= 0x30 && n < 0x40) { // 1-9
            this.string = String.fromCharCode(n); this.tState = NUMBER3;
          } else if (n === 0x20 || n === 0x09 || n === 0x0a || n === 0x0d) ; else {
            return this.charError(buffer, i);
          }
        }
      }else if (this.tState === STRING1){ // After open quote
        n = buffer[i]; // get current byte from buffer
        // check for carry over of a multi byte char split between data chunks
        // & fill temp buffer it with start of this data chunk up to the boundary limit set in the last iteration
        if (this.bytes_remaining > 0) {
          for (var j = 0; j < this.bytes_remaining; j++) {
            this.temp_buffs[this.bytes_in_sequence][this.bytes_in_sequence - this.bytes_remaining + j] = buffer[j];
          }

          this.appendStringBuf(this.temp_buffs[this.bytes_in_sequence]);
          this.bytes_in_sequence = this.bytes_remaining = 0;
          i = i + j - 1;
        } else if (this.bytes_remaining === 0 && n >= 128) { // else if no remainder bytes carried over, parse multi byte (>=128) chars one at a time
          if (n <= 193 || n > 244) {
            return this.onError(new Error("Invalid UTF-8 character at position " + i + " in state " + Parser.toknam(this.tState)));
          }
          if ((n >= 194) && (n <= 223)) this.bytes_in_sequence = 2;
          if ((n >= 224) && (n <= 239)) this.bytes_in_sequence = 3;
          if ((n >= 240) && (n <= 244)) this.bytes_in_sequence = 4;
          if ((this.bytes_in_sequence + i) > buffer.length) { // if bytes needed to complete char fall outside buffer length, we have a boundary split
            for (var k = 0; k <= (buffer.length - 1 - i); k++) {
              this.temp_buffs[this.bytes_in_sequence][k] = buffer[i + k]; // fill temp buffer of correct size with bytes available in this chunk
            }
            this.bytes_remaining = (i + this.bytes_in_sequence) - buffer.length;
            i = buffer.length - 1;
          } else {
            this.appendStringBuf(buffer, i, i + this.bytes_in_sequence);
            i = i + this.bytes_in_sequence - 1;
          }
        } else if (n === 0x22) {
          this.tState = START;
          this.string += this.stringBuffer.toString('utf8', 0, this.stringBufferOffset);
          this.stringBufferOffset = 0;
          this.onToken(STRING, this.string);
          this.offset += Buffer.byteLength(this.string, 'utf8') + 1;
          this.string = undefined;
        }
        else if (n === 0x5c) {
          this.tState = STRING2;
        }
        else if (n >= 0x20) { this.appendStringChar(n); }
        else {
            return this.charError(buffer, i);
        }
      }else if (this.tState === STRING2){ // After backslash
        n = buffer[i];
        if(n === 0x22){ this.appendStringChar(n); this.tState = STRING1;
        }else if(n === 0x5c){ this.appendStringChar(BACK_SLASH); this.tState = STRING1;
        }else if(n === 0x2f){ this.appendStringChar(FORWARD_SLASH); this.tState = STRING1;
        }else if(n === 0x62){ this.appendStringChar(BACKSPACE); this.tState = STRING1;
        }else if(n === 0x66){ this.appendStringChar(FORM_FEED); this.tState = STRING1;
        }else if(n === 0x6e){ this.appendStringChar(NEWLINE); this.tState = STRING1;
        }else if(n === 0x72){ this.appendStringChar(CARRIAGE_RETURN); this.tState = STRING1;
        }else if(n === 0x74){ this.appendStringChar(TAB); this.tState = STRING1;
        }else if(n === 0x75){ this.unicode = ""; this.tState = STRING3;
        }else{
          return this.charError(buffer, i);
        }
      }else if (this.tState === STRING3 || this.tState === STRING4 || this.tState === STRING5 || this.tState === STRING6){ // unicode hex codes
        n = buffer[i];
        // 0-9 A-F a-f
        if ((n >= 0x30 && n < 0x40) || (n > 0x40 && n <= 0x46) || (n > 0x60 && n <= 0x66)) {
          this.unicode += String.fromCharCode(n);
          if (this.tState++ === STRING6) {
            var intVal = parseInt(this.unicode, 16);
            this.unicode = undefined;
            if (this.highSurrogate !== undefined && intVal >= 0xDC00 && intVal < (0xDFFF + 1)) { //<56320,57343> - lowSurrogate
              this.appendStringBuf(new Buffer(String.fromCharCode(this.highSurrogate, intVal)));
              this.highSurrogate = undefined;
            } else if (this.highSurrogate === undefined && intVal >= 0xD800 && intVal < (0xDBFF + 1)) { //<55296,56319> - highSurrogate
              this.highSurrogate = intVal;
            } else {
              if (this.highSurrogate !== undefined) {
                this.appendStringBuf(new Buffer(String.fromCharCode(this.highSurrogate)));
                this.highSurrogate = undefined;
              }
              this.appendStringBuf(new Buffer(String.fromCharCode(intVal)));
            }
            this.tState = STRING1;
          }
        } else {
          return this.charError(buffer, i);
        }
      } else if (this.tState === NUMBER1 || this.tState === NUMBER3) {
          n = buffer[i];

          switch (n) {
            case 0x30: // 0
            case 0x31: // 1
            case 0x32: // 2
            case 0x33: // 3
            case 0x34: // 4
            case 0x35: // 5
            case 0x36: // 6
            case 0x37: // 7
            case 0x38: // 8
            case 0x39: // 9
            case 0x2e: // .
            case 0x65: // e
            case 0x45: // E
            case 0x2b: // +
            case 0x2d: // -
              this.string += String.fromCharCode(n);
              this.tState = NUMBER3;
              break;
            default:
              this.tState = START;
              var result = Number(this.string);

              if (isNaN(result)){
                return this.charError(buffer, i);
              }

              if ((this.string.match(/[0-9]+/) == this.string) && (result.toString() != this.string)) {
                // Long string of digits which is an ID string and not valid and/or safe JavaScript integer Number
                this.onToken(STRING, this.string);
              } else {
                this.onToken(NUMBER, result);
              }

              this.offset += this.string.length - 1;
              this.string = undefined;
              i--;
              break;
          }
      }else if (this.tState === TRUE1){ // r
        if (buffer[i] === 0x72) { this.tState = TRUE2; }
        else { return this.charError(buffer, i); }
      }else if (this.tState === TRUE2){ // u
        if (buffer[i] === 0x75) { this.tState = TRUE3; }
        else { return this.charError(buffer, i); }
      }else if (this.tState === TRUE3){ // e
        if (buffer[i] === 0x65) { this.tState = START; this.onToken(TRUE, true); this.offset+= 3; }
        else { return this.charError(buffer, i); }
      }else if (this.tState === FALSE1){ // a
        if (buffer[i] === 0x61) { this.tState = FALSE2; }
        else { return this.charError(buffer, i); }
      }else if (this.tState === FALSE2){ // l
        if (buffer[i] === 0x6c) { this.tState = FALSE3; }
        else { return this.charError(buffer, i); }
      }else if (this.tState === FALSE3){ // s
        if (buffer[i] === 0x73) { this.tState = FALSE4; }
        else { return this.charError(buffer, i); }
      }else if (this.tState === FALSE4){ // e
        if (buffer[i] === 0x65) { this.tState = START; this.onToken(FALSE, false); this.offset+= 4; }
        else { return this.charError(buffer, i); }
      }else if (this.tState === NULL1){ // u
        if (buffer[i] === 0x75) { this.tState = NULL2; }
        else { return this.charError(buffer, i); }
      }else if (this.tState === NULL2){ // l
        if (buffer[i] === 0x6c) { this.tState = NULL3; }
        else { return this.charError(buffer, i); }
      }else if (this.tState === NULL3){ // l
        if (buffer[i] === 0x6c) { this.tState = START; this.onToken(NULL, null); this.offset += 3; }
        else { return this.charError(buffer, i); }
      }
    }
  };
  proto.onToken = function (token, value) {
    // Override this to get events
  };

  proto.parseError = function (token, value) {
    this.tState = STOP;
    this.onError(new Error("Unexpected " + Parser.toknam(token) + (value ? ("(" + JSON.stringify(value) + ")") : "") + " in state " + Parser.toknam(this.state)));
  };
  proto.push = function () {
    this.stack.push({value: this.value, key: this.key, mode: this.mode});
  };
  proto.pop = function () {
    var value = this.value;
    var parent = this.stack.pop();
    this.value = parent.value;
    this.key = parent.key;
    this.mode = parent.mode;
    this.emit(value);
    if (!this.mode) { this.state = VALUE; }
  };
  proto.emit = function (value) {
    if (this.mode) { this.state = COMMA; }
    this.onValue(value);
  };
  proto.onValue = function (value) {
    // Override me
  };
  proto.onToken = function (token, value) {
    if(this.state === VALUE){
      if(token === STRING || token === NUMBER || token === TRUE || token === FALSE || token === NULL){
        if (this.value) {
          this.value[this.key] = value;
        }
        this.emit(value);
      }else if(token === LEFT_BRACE){
        this.push();
        if (this.value) {
          this.value = this.value[this.key] = {};
        } else {
          this.value = {};
        }
        this.key = undefined;
        this.state = KEY;
        this.mode = OBJECT;
      }else if(token === LEFT_BRACKET){
        this.push();
        if (this.value) {
          this.value = this.value[this.key] = [];
        } else {
          this.value = [];
        }
        this.key = 0;
        this.mode = ARRAY;
        this.state = VALUE;
      }else if(token === RIGHT_BRACE){
        if (this.mode === OBJECT) {
          this.pop();
        } else {
          return this.parseError(token, value);
        }
      }else if(token === RIGHT_BRACKET){
        if (this.mode === ARRAY) {
          this.pop();
        } else {
          return this.parseError(token, value);
        }
      }else{
        return this.parseError(token, value);
      }
    }else if(this.state === KEY){
      if (token === STRING) {
        this.key = value;
        this.state = COLON;
      } else if (token === RIGHT_BRACE) {
        this.pop();
      } else {
        return this.parseError(token, value);
      }
    }else if(this.state === COLON){
      if (token === COLON) { this.state = VALUE; }
      else { return this.parseError(token, value); }
    }else if(this.state === COMMA){
      if (token === COMMA) {
        if (this.mode === ARRAY) { this.key++; this.state = VALUE; }
        else if (this.mode === OBJECT) { this.state = KEY; }

      } else if (token === RIGHT_BRACKET && this.mode === ARRAY || token === RIGHT_BRACE && this.mode === OBJECT) {
        this.pop();
      } else {
        return this.parseError(token, value);
      }
    }else{
      return this.parseError(token, value);
    }
  };

  Parser.C = C;

  var jsonparse = Parser;

  var Transform$1 = Stream.Transform;

  var JSON2CSVTransform =
  /*#__PURE__*/
  function (_Transform) {
    _inherits(JSON2CSVTransform, _Transform);

    function JSON2CSVTransform(opts, transformOpts) {
      var _this;

      _classCallCheck(this, JSON2CSVTransform);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(JSON2CSVTransform).call(this, transformOpts)); // Inherit methods from JSON2CSVBase since extends doesn't
      // allow multiple inheritance and manually preprocess opts

      Object.getOwnPropertyNames(JSON2CSVBase_1.prototype).forEach(function (key) {
        return _this[key] = JSON2CSVBase_1.prototype[key];
      });
      _this.opts = _this.preprocessOpts(opts);
      _this.preprocessRow = _this.memoizePreprocessRow();
      _this._data = '';
      _this._hasWritten = false;

      if (_this._readableState.objectMode) {
        _this.initObjectModeParse();
      } else if (_this.opts.ndjson) {
        _this.initNDJSONParse();
      } else {
        _this.initJSONParser();
      }

      if (_this.opts.withBOM) {
        _this.push("\uFEFF");
      }

      if (_this.opts.fields) {
        _this.opts.fields = _this.preprocessFieldsInfo(_this.opts.fields);

        _this.pushHeader();
      }

      return _this;
    }
    /**
     * Init the transform with a parser to process data in object mode.
     * It receives JSON objects one by one and send them to `pushLine for processing.
     */


    _createClass(JSON2CSVTransform, [{
      key: "initObjectModeParse",
      value: function initObjectModeParse() {
        var transform = this;
        this.parser = {
          write: function write(line) {
            transform.pushLine(line);
          },
          getPendingData: function getPendingData() {
            return undefined;
          }
        };
      }
      /**
       * Init the transform with a parser to process NDJSON data.
       * It maintains a buffer of received data, parses each line
       * as JSON and send it to `pushLine for processing.
       */

    }, {
      key: "initNDJSONParse",
      value: function initNDJSONParse() {
        var transform = this;
        this.parser = {
          _data: '',
          write: function write(chunk) {
            this._data += chunk.toString();

            var lines = this._data.split('\n').map(function (line) {
              return line.trim();
            }).filter(function (line) {
              return line !== '';
            });

            var pendingData = false;
            lines.forEach(function (line, i) {
              try {
                transform.pushLine(JSON.parse(line));
              } catch (e) {
                if (i === lines.length - 1) {
                  pendingData = true;
                } else {
                  e.message = 'Invalid JSON (' + line + ')';
                  transform.emit('error', e);
                }
              }
            });
            this._data = pendingData ? this._data.slice(this._data.lastIndexOf('\n')) : '';
          },
          getPendingData: function getPendingData() {
            return this._data;
          }
        };
      }
      /**
       * Init the transform with a parser to process JSON data.
       * It maintains a buffer of received data, parses each as JSON 
       * item if the data is an array or the data itself otherwise
       * and send it to `pushLine` for processing.
       */

    }, {
      key: "initJSONParser",
      value: function initJSONParser() {
        var transform = this;
        this.parser = new jsonparse();

        this.parser.onValue = function (value) {
          if (this.stack.length !== this.depthToEmit) return;
          transform.pushLine(value);
        };

        this.parser._onToken = this.parser.onToken;

        this.parser.onToken = function (token, value) {
          transform.parser._onToken(token, value);

          if (this.stack.length === 0 && !transform.opts.fields && this.mode !== jsonparse.C.ARRAY && this.mode !== jsonparse.C.OBJECT) {
            this.onError(new Error('Data should not be empty or the "fields" option should be included'));
          }

          if (this.stack.length === 1) {
            if (this.depthToEmit === undefined) {
              // If Array emit its content, else emit itself
              this.depthToEmit = this.mode === jsonparse.C.ARRAY ? 1 : 0;
            }

            if (this.depthToEmit !== 0 && this.stack.length === 1) {
              // No need to store the whole root array in memory
              this.value = undefined;
            }
          }
        };

        this.parser.getPendingData = function () {
          return this.value;
        };

        this.parser.onError = function (err) {
          if (err.message.includes('Unexpected')) {
            err.message = 'Invalid JSON (' + err.message + ')';
          }

          transform.emit('error', err);
        };
      }
      /**
       * Main function that send data to the parse to be processed.
       *
       * @param {Buffer} chunk Incoming data
       * @param {String} encoding Encoding of the incoming data. Defaults to 'utf8'
       * @param {Function} done Called when the proceesing of the supplied chunk is done
       */

    }, {
      key: "_transform",
      value: function _transform(chunk, encoding, done) {
        this.parser.write(chunk);
        done();
      }
    }, {
      key: "_flush",
      value: function _flush(done) {
        if (this.parser.getPendingData()) {
          done(new Error('Invalid data received from stdin', this.parser.getPendingData()));
        }

        done();
      }
      /**
       * Generate the csv header and pushes it downstream.
       */

    }, {
      key: "pushHeader",
      value: function pushHeader() {
        if (this.opts.header) {
          var header = this.getHeader();
          this.emit('header', header);
          this.push(header);
          this._hasWritten = true;
        }
      }
      /**
       * Transforms an incoming json data to csv and pushes it downstream.
       *
       * @param {Object} data JSON object to be converted in a CSV row
       */

    }, {
      key: "pushLine",
      value: function pushLine(data) {
        var _this2 = this;

        var processedData = this.preprocessRow(data);

        if (!this._hasWritten) {
          this.opts.fields = this.opts.fields || this.preprocessFieldsInfo(Object.keys(processedData[0]));
          this.pushHeader();
        }

        processedData.forEach(function (row) {
          var line = _this2.processRow(row, _this2.opts);

          if (line === undefined) return;

          _this2.emit('line', line);

          _this2.push(_this2._hasWritten ? _this2.opts.eol + line : line);

          _this2._hasWritten = true;
        });
      }
    }]);

    return JSON2CSVTransform;
  }(Transform$1);

  var JSON2CSVTransform_1 = JSON2CSVTransform;

  var Transform$2 = Stream.Transform;
  var fastJoin$3 = utils.fastJoin;

  var JSON2CSVAsyncParser =
  /*#__PURE__*/
  function () {
    function JSON2CSVAsyncParser(opts, transformOpts) {
      _classCallCheck(this, JSON2CSVAsyncParser);

      this.input = new Transform$2(transformOpts);

      this.input._read = function () {};

      this.transform = new JSON2CSVTransform_1(opts, transformOpts);
      this.processor = this.input.pipe(this.transform);
    }

    _createClass(JSON2CSVAsyncParser, [{
      key: "fromInput",
      value: function fromInput(input) {
        if (this._input) {
          throw new Error('Async parser already has an input.');
        }

        this._input = input;
        this.input = this._input.pipe(this.processor);
        return this;
      }
    }, {
      key: "throughTransform",
      value: function throughTransform(transform) {
        if (this._output) {
          throw new Error('Can\'t add transforms once an output has been added.');
        }

        this.processor = this.processor.pipe(transform);
        return this;
      }
    }, {
      key: "toOutput",
      value: function toOutput(output) {
        if (this._output) {
          throw new Error('Async parser already has an output.');
        }

        this._output = output;
        this.processor = this.processor.pipe(output);
        return this;
      }
    }, {
      key: "promise",
      value: function promise() {
        var _this = this;

        return new Promise(function (resolve, reject) {
          var csvBuffer = [];

          _this.processor.on('data', function (chunk) {
            return csvBuffer.push(chunk.toString());
          }).on('finish', function () {
            return resolve(fastJoin$3(csvBuffer, ''));
          }).on('error', function (err) {
            return reject(err);
          });
        });
      }
    }]);

    return JSON2CSVAsyncParser;
  }();

  var JSON2CSVAsyncParser_1 = JSON2CSVAsyncParser;

  var Readable$1 = Stream.Readable;
  var Parser$1 = JSON2CSVParser_1;
  var AsyncParser = JSON2CSVAsyncParser_1;
  var Transform$3 = JSON2CSVTransform_1; // Convenience method to keep the API similar to version 3.X

  var parse = function parse(data, opts) {
    return new JSON2CSVParser_1(opts).parse(data);
  };

  var parseAsync = function parseAsync(data, opts, transformOpts) {
    try {
      if (!(data instanceof Readable$1)) {
        transformOpts = Object.assign({}, transformOpts, {
          objectMode: true
        });
      }

      var asyncParser = new JSON2CSVAsyncParser_1(opts, transformOpts);
      var promise = asyncParser.promise();

      if (Array.isArray(data)) {
        data.forEach(function (item) {
          return asyncParser.input.push(item);
        });
        asyncParser.input.push(null);
      } else if (data instanceof Readable$1) {
        asyncParser.fromInput(data);
      } else {
        asyncParser.input.push(data);
        asyncParser.input.push(null);
      }

      return promise;
    } catch (err) {
      return Promise.reject(err);
    }
  };

  var json2csv = {
    Parser: Parser$1,
    AsyncParser: AsyncParser,
    Transform: Transform$3,
    parse: parse,
    parseAsync: parseAsync
  };

  exports.default = json2csv;
  exports.Parser = Parser$1;
  exports.AsyncParser = AsyncParser;
  exports.Transform = Transform$3;
  exports.parse = parse;
  exports.parseAsync = parseAsync;

  Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/asset/asset.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/asset/asset.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <ngx-alerts></ngx-alerts>\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" ></ngx-loading>\n    <div class=\"content\" >\n      <!-- Add-Edit Section -->\n      <div class=\"row card col-md-12\"  [hidden]=\"getAssetId.value == null\"   >\n          <div class=\"content\" >\n                   <form [formGroup]=\"assetForm\" (ngSubmit)=\"onSubmit()\">\n                            <h4 class=\"title\">\n                              Add/Edit Asset Code: {{ getastCode.value }}   \n                              <span [ngStyle]=\"{'color': IsScrap ? 'black' : 'red'}\" class=\"pull-right\" >   <input id=\"ScrapCheckbox\"  class=\"pull-right\"  (click)=\"onSelectScrap($event)\"  class=\" form-check-input \"  type=\"checkbox\"  value=\"!checked\" />  Scrap  </span>\n                            </h4> \n                            <div class=\"row card col-md-12\" style=\"background-color: #f9f9f9;\" >\n                                      <!-- Basic Details -->\n                                      <div class=\"col-md-12\">\n                                          <br>\n                                          <div class=\"form-group col-md-3\">\n                                            <label class=\"control-label\" for=\"\">Asset Types:\n                                              <span class=\"star\">*</span>\n                                            </label>\n                                            <select  (change)=\"onSelectAssetType($event)\"  formControlName=\"asttypId\"  required    \n                                            class=\"form-control\" data-title=\"Single Select\" data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                                            <option  value=\"\">--Select--</option>\n                                            <option *ngFor=\"let typ of AssetTypes\"  value={{typ.asttypId}}  >\n                                                {{typ.asttypName }} \n                                            </option>\n                                            </select>\n                                            <small [hidden]=\"getAssetId.valid || getAssetId.pristine\"  class=\"text-danger\">\n                                                Asset Type is required.\n                                            </small>\n                                          </div>\n                                          <div class=\"form-group col-md-3\">\n                                            <!-- <label class=\"control-label\" for=\"\">Company:\n                                              <span class=\"star\">*</span>\n                                            </label>\n                                   \n                                            <select class=\"form-control\" required data-title=\"Single Select\" [value]=\"1\" (change)=\"onChangeComId($event)\" \n                                            formControlName=\"comId\" data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                  \n                                            <option *ngFor=\"let co of Companys\"  value={{co.comId}}   >\n                                                {{co.comName }}\n                                            </option>\n                                          </select> \n                                          <small [hidden]=\"getCompanyId.valid || getCompanyId.pristine\" class=\"text-danger\">\n                                            Company is required.\n                                          </small> -->\n                                        \n                                          </div>\n                                          <div class=\"form-group col-md-3\">\n                                              <!-- <label class=\"control-label\" for=\"\">Branch:\n                                                  <span class=\"star\">*</span>\n                                              </label>\n                                              <select [value]=\"1\" (change)=\"onChangeBrnId($event)\" required   formControlName=\"brnId\"\n                                              class=\"form-control\" data-title=\"Single Select\" data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                \n                                                <option *ngFor=\"let brnch of Branchs\" value={{brnch.brnId}} >\n                                                    {{brnch.brnName}}\n                                                </option>\n                            \n                                              </select> \n                                              <small [hidden]=\"getBranchId.valid || getBranchId.pristine\" class=\"text-danger\">\n                                                Branch is required.\n                                              </small> -->\n                                          </div>\n                                          <div class=\"form-group col-md-3\">\n\n                                              <label class=\"control-label\" for=\"\">Purchased Date:\n                                                  <span class=\"star\">*</span>\n                                              </label>\n                                              <div class=\"form-group\">\n                                                <input    \n                                                      formControlName=\"astPurchaseDate\"\n                                                      class=\"form-control\"\n                                                      #datepickerYMD=\"bsDatepicker\"\n                                                      bsDatepicker\n                                                      [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD HH:mm' }\">\n                                              </div> \n                                              <span *ngIf=\"assetForm.value.astPurchaseDate != null\" style=\"color: green;\" >   {{ assetForm.value.astPurchaseDate | json }} </span>\n                                          </div>\n                                      </div>\n                                      <!-- Computing Details -->\n                                      <div class=\"col-md-12\" [hidden]=\"hideAssetTypeVoiceLine == true || hideAssetTypeDataLine == true || hideAssetTypeOthers == true\" >  \n                                        <legend>     \n                                          Computing/Mobile Details:  \n                                        </legend>\n                                        <div class=\"form-group col-md-3\">\n                                          <label class=\"control-label\" for=\"\">Description:\n                                            <span class=\"star\">*</span>\n                                        </label>\n                                        <input type=\"text\" placeholder=\"Description\" required formControlName=\"astDescription\" class=\"form-control\" >\n                                        <small [hidden]=\"getDescription.valid || (getDescription.pristine)\" class=\"text-danger\">\n                                          Description is required.\n                                        </small>\n                                        </div>\n                                        <div class=\"form-group col-md-3\">\n                                            <label  for=\"\" class=\"control-label\">Code:\n                                                <span class=\"star\">*</span>                                \n                                            </label>\n                                            <input type=\"text\" placeholder=\"Show Code Guide \" (keyup)=\"OnCodeChange($event)\" required class=\"form-control\" formControlName=\"astCode\">\n                                            <small [hidden]=\"getastCode.valid || getastCode.pristine\" class=\"text-danger\">\n                                              Format(6 Digits): Laptop 100xxx/Mobile-MiFi 200xxx  <br>\n                                            </small>\n                                            <small *ngIf=\"CodeExist\" class=\"text-danger\">\n                                              Code is already exist, <a (click)=\"onBringExistingAsset()\" > Get the existing One for editing </a>\n                                            </small>\n                                            <small *ngIf=\"!CodeExist && loading == false && getastCode.valid && !getastCode.pristine && assetForm.controls.astCode.value != null \" style=\"color: green;\">\n                                              Code is valid\n                                            </small>\n                                        </div>\n                                        <div class=\"form-group col-md-3\">\n                                          <label class=\"control-label\" for=\"\">SN:\n                                            <!-- <span class=\"star\">*</span>  -->\n                                          </label>\n                                          <input type=\"text\" placeholder=\"Serial Numder\"  class=\"form-control\" (keyup)=\"OnSerialNumberChange($event)\" formControlName=\"astSerialNumber\">\n                                          <small  *ngIf=\"SerialNumberUnValid\" class=\"text-danger\">\n                                            - At least 3 characters    <br>\n                                          </small>\n                                          <small *ngIf=\"SerialNumberExist\" class=\"text-danger\">\n                                            - SN already used.\n                                          </small>\n                                          <small [hidden]=\"SerialNumberExist || assetForm.controls.astSerialNumber.status == 'INVALID' \" style=\"color: green;\">\n                                            - SN is valid.\n                                          </small>\n                                        </div>\n                                        <div class=\"form-group col-md-3\">\n                                        <label  for=\"\" class=\"control-label\">PN/IMEI:\n   \n                                          </label>\n                                          <input type=\"text\" placeholder=\"Part Number\"  class=\"form-control\" formControlName=\"astPartNumber\" >\n                                          <!-- <small [hidden]=\"getPN.valid || getPN.pristine\" class=\"text-danger\">\n                                            PartNumber is required\n                                          </small> -->\n                                        </div>\n                                      </div>\n                                      <!-- Lines Details -->\n                                      <div class=\"col-md-12\" [hidden]=\"hideAssetTypeDesktop == true || hideAssetTypeLaptop == true || hideAssetTypeMiFi == true || hideAssetTypeMobile == true || hideAssetTypeServer == true || hideAssetTypeStorage == true || hideAssetTypeOthers == true\" >\n                                        <legend>     \n                                          Line Details:  \n                                        </legend>\n                                        <div class=\"form-group col-md-3\">\n                                            <label class=\"control-label\" for=\"\">Description:\n                                                <span class=\"star\">*</span>\n                                            </label>\n                                            <input type=\"text\" placeholder=\"Description\" required formControlName=\"astDescription\" class=\"form-control\" >\n                                            <small [hidden]=\"getDescription.valid || getDescription.pristine\" class=\"text-danger\">\n                                              Description is required.\n                                            </small>\n                                        </div>\n                                        <div class=\"form-group col-md-3\">\n                                            <label  for=\"\" class=\"control-label\">Code:\n                                                <span class=\"star\">*</span>\n                                            </label>\n                                            <input type=\"text\" placeholder=\"Show Code Guide \" (keyup)=\"OnCodeChange($event)\" required class=\"form-control\" formControlName=\"astCode\">\n                                            <small [hidden]=\"getastCode.valid || getastCode.pristine\" class=\"text-danger\">\n                                              Format(6 Digits): Lines 300xxx\n                                            </small>\n                                            <small *ngIf=\"CodeExist\" class=\"text-danger\">\n                                              Code is already exist, <a (click)=\"onBringExistingAsset()\"> Get the existing One for editing </a>\n                                            </small>\n                                        </div>\n                                        <div class=\"form-group col-md-3\">\n                                          <label  for=\"\" class=\"control-label\">SIM/Circuit #:\n                                          </label>\n                                          <input type=\"text\" placeholder=\"Circuit Number\"  class=\"form-control\" formControlName=\"astCircuitNumber\">\n                                        </div>\n                                        <div class=\"form-group col-md-3\">\n                                          <label class=\"control-label\" for=\"\">Dail Number:\n                                         </label>\n                                          <input type=\"text\" placeholder=\"Dial Numder\" (keyup)=\"OnDailNumberChange($event)\"   class=\"form-control\" formControlName=\"astDialNumber\">\n             \n                                              <small  *ngIf=\"DailNumberUnValid\" class=\"text-danger\">\n                                                - Must be 11 digits   <br>\n                                              </small>\n                                              <small *ngIf=\"DailNumberExist\" class=\"text-danger\">\n                                                - Number already used.\n                                              </small>\n                                              <small [hidden]=\"DailNumberExist || assetForm.controls.astDialNumber.status == 'INVALID' \" style=\"color: green;\">\n                                                - Number is valid.\n                                              </small>\n                                        </div>\n                                        <div class=\"form-group col-md-3\">\n                                          <label  for=\"\" class=\"control-label\">Charging:\n                                          </label>\n                                        <select formControlName=\"Charging\" value=\"Business\"\n                                          class=\"form-control\" data-title=\"Single Select\" data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                                          <option value=\"Business\" > Business  </option>\n                                          <option value=\"Private\" > Private </option>\n                                          <option value=\"Shared\" > Shared </option>\n                                        </select> \n                                        <!-- <small [hidden]=\"assetForm.controls.oprId.valid || getBranchId.pristine\" class=\"text-danger\">\n                                          Branch is required.\n                                        </small> -->\n                                        </div>                                       \n                                        <div class=\"form-group col-md-3\">\n                                          <label  for=\"\" class=\"control-label\">Operator:\n                                          </label>\n                                        <select value=\"0\" (change)=\"onChangeOperatorId($event)\"\n                                        class=\"form-control\" data-title=\"Single Select\" data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                                          <option value=\"0\" >--Select--</option>\n                                          <option *ngFor=\"let opr of Operators\" value={{opr.oprId}} >\n                                              {{opr.oprName}}\n                                          </option>\n                                         </select> \n                                        <!-- <small [hidden]=\"assetForm.controls.oprId.valid || getBranchId.pristine\" class=\"text-danger\">\n                                          Branch is required.\n                                        </small> -->\n                                        </div>                                       \n                                        <div class=\"form-group col-md-3\">\n                                           <label  for=\"\" class=\"control-label\">Acc#:\n                                            <!-- <span class=\"star\">*</span> -->\n                                          </label>\n                                       \n                                        <select value=\"0\" formControlName=\"OprAccNumberId\"\n                                           class=\"form-control\" data-title=\"Single Select\" data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                                          <option value=\"0\" >--Select--</option>\n                                          <option *ngFor=\"let a of Accounts\" value={{a.OprAccNumberId}} >\n                                              {{a.OprAccNumberName}}\n                                          </option>\n                                         </select> \n                                        <!-- <small [hidden]=\"getDescription.valid || getDescription.pristine\" class=\"text-danger\">\n                                          Description is required.\n                                        </small> -->\n                                        </div>\n                                        <div class=\"form-group col-md-3\">\n   \n                                          <label  for=\"\" class=\"control-label\">Rate Plan:\n                                            <!-- <span class=\"star\">*</span> -->\n                                          </label>\n                                        <select value=\"0\" formControlName=\"OperatorRatePlanId\"\n                                        class=\"form-control\" data-title=\"Single Select\" data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                                          <option value=\"0\" >--Select--</option>\n                                          <option *ngFor=\"let a of Plans\" value={{a.OperatorRatePlanId}} >\n                                              {{a.OperatorRatePlanName}}\n                                          </option>\n                                         </select> \n                                        <!-- <small [hidden]=\"getDescription.valid || getDescription.pristine\" class=\"text-danger\">\n                                          Description is required.\n                                        </small> -->\n                                        </div>\n                                      </div>\n                                      <!-- Others Details -->\n                                      <div class=\"col-md-12\" [hidden]=\"hideAssetTypeVoiceLine == true || hideAssetTypeDataLine == true || hideAssetTypeStorage == true || hideAssetTypeLaptop == true || hideAssetTypeDesktop == true || hideAssetTypeServer == true || hideAssetTypeMobile == true || hideAssetTypeMiFi == true\" >\n                                                    <legend>     \n                                                      Others  Details:  \n                                                    </legend>\n                                                    <div class=\"form-group col-md-2\">\n                                                        <label class=\"control-label\" for=\"\">Description:\n                                                            <span class=\"star\">*</span>\n                                                        </label>\n                                                        <input type=\"text\" placeholder=\"Description\" required formControlName=\"astDescription\" class=\"form-control\" >\n                                                        <small [hidden]=\"getDescription.valid || getDescription.pristine\" class=\"text-danger\">\n                                                          Description is required.\n                                                        </small>\n                                                    </div>\n                                                    <div class=\"form-group col-md-3\">\n                                                        <label  for=\"\" class=\"control-label\">Code:\n                                                            <span class=\"star\">*</span>\n                                                        </label>\n                                                        <input type=\"text\" placeholder=\"Show Code Guide \" (keyup)=\"OnCodeChange($event)\" required class=\"form-control\" formControlName=\"astCode\">\n                                                        <small [hidden]=\"getastCode.valid || getastCode.pristine\" class=\"text-danger\">\n                                                          Format(6 Digits): Others 400xxx\n                                                        </small>\n                                                        <small *ngIf=\"CodeExist\" class=\"text-danger\">\n                                                          Code is already exist, <a (click)=\"onBringExistingAsset()\"> Get the existing One for editing </a>\n                                                        </small>\n                                                    </div>\n                                                    <div class=\"form-group col-md-2\">\n                           \n                                                    </div>\n                                                    <div class=\"form-group col-md-3\">\n\n                                                    </div>\n                                                    <div class=\"form-group col-md-3\">\n\n                                                    </div>\n                                      </div>\n                                      <!-- Employee Details -->\n                                      <div class=\"col-md-12\" >\n                                        <legend>     \n                                          Assigned To Employee: <span class=\"star\">*</span> <span *ngIf=\"assetForm.value.EmployeeName\"> {{ assetForm.value.EmployeeName | json }} </span> \n                                        </legend>\n                                            <div class=\"form-group col-md-4\">\n                                                      <ngx-autocomplete\n                                                        required\n                                                        ngDefaultControl\n                                                        formControlName=\"empId\"\n                                                        [searchKeyword]=\"'empFullName'\" \n                                                        [inputId]=\"'searchEmployee'\" \n                                                        [placeholderValue]=\"'Enter the Employee Name'\" \n                                                        [entries]=\"EmployeesList\" \n                                                        (selectedValue)=\"selectEmployeeEvent($event)\">\n                                                    </ngx-autocomplete>\n                                            </div> \n                                      </div>\n                            </div>\n                            <div class=\"row col-md-12\">\n                                <div class=\"col-md-9\">\n                                  <button type=\"button\" (click)=\"onSubmit('AddAndClose')\" class=\"btn btn-primary\" *ngIf=\"getAssetId.value == 0\" [disabled]=\"assetForm.status == 'INVALID' \"> Add & Colse </button> \n                                  <button type=\"button\" (click)=\"onSubmit('AddAndAddAnother')\" class=\"btn btn-primary\" *ngIf=\"getAssetId.value == 0\" [disabled]=\"assetForm.status == 'INVALID' \"> Add & Add Another </button>\n                                  <button type=\"button\" (click)=\"onSubmit('Save')\"  class=\"btn btn-primary \" *ngIf=\"getAssetId.value > 0\" [disabled]=\"assetForm.status == 'INVALID' \"> Save </button>\n                                </div>\n                                <div class=\"col-md-3\">\n                                  <button type=\"button\" (click)=\"onCancel()\" class=\"btn btn-primary pull-right\" > Cancel </button>\n                                </div>\n                                <br><br><br>  \n                            </div>\n                   </form>\n          </div>\n        </div>\n\n      <!-- Statistics -->\n      <div class=\"row card col-md-12\" [hidden]=\"!showStatistics\" >\n        <div class=\"content\" >\n                        <br>\n                         <a class=\"pull-right\" (click)=\"onShowHideStatistics()\" [hidden]=\"!showStatistics\">Hide Statistics</a>\n                                    <legend>   <h4 class=\"title\"> Assets Statistics</h4>   </legend>\n                     \n                                    <div class=\"col-md-3\">\n                                     Laptops:  <span style=\"color: green;\">  {{totalLaptops}} </span>\n                                    </div>\n                                    <div class=\"col-md-3\">\n                                     Desktops :  <span style=\"color: green;\">  {{totalDesktops}} </span>\n                                    </div>\n                                    <div class=\"col-md-3\">\n                                  \n                                       Screens: <span  style=\"color: green;\"> {{ totalScreens }} </span> \n                                    </div>\n                                    <div class=\"col-md-3\">\n                                     Assets: <span  style=\"color: black;\">  {{totalAssets}} </span>\n                                    </div>\n                                  <br>\n                             \n                              <br>\n                                <div class=\"col-md-3\">\n                                   Servers :   <span  style=\"color: green;\">  {{totalServers}} </span>\n                                </div>\n                                <div class=\"col-md-3\">\n                                   Printers:  <span  style=\"color: green;\">  {{totalPrinters}} </span>\n                                </div>\n                                <div class=\"col-md-3\">\n                                   Data Lines: <span  style=\"color: green;\">  {{ totalDataLines }} </span> \n                                </div>\n                                <div class=\"col-md-3\">\n                                   Voice Lines: <span  style=\"color: green;\">  {{ totalVoiceLines }} </span> \n                                </div>\n                              <br>\n                              <br>\n                                <div class=\"col-md-3\">\n                                  Selected:   <span  style=\"color: black;\">  {{selectedAssets}} </span>\n                                </div>\n                                <div class=\"col-md-3\">\n                                   MiFi: <span  style=\"color: green;\">  {{ totalMiFis }} </span> \n                                </div>\n                                <div class=\"col-md-3\">\n                                   Mobiles: <span  style=\"color: green;\">  {{ totalMobiles }} </span>\n                                </div>\n                                <div class=\"col-md-3\">\n                                  Not assigned to Emp:  <span  style=\"color: red;\">   {{noEmployee}} </span>\n                                </div>\n                           <br>\n        </div>\n      </div>\n\n      <!-- Assets List Section -->\n      <!-- <div hidden id=\"print-section\"> -->\n      <div class=\"row card col-md-12\">\n          <div class=\"content\">\n                  <div class=\"row col-md-12\"  >\n                    <h4 class=\"title\">Assets List</h4>  \n                    <!-- <span> -->\n                      <a routerLink=\"/masterdata/assetsupload\" routerLinkActive=\"active\" class=\"pull-right\">Upload Assets File</a> <br>\n                      <a class=\"pull-right\" (click)=\"onShowHideStatistics()\" [hidden]=\"showStatistics\">Show Statistics</a>\n                      <a class=\"pull-right\" (click)=\"onShowHideStatistics()\" [hidden]=\"!showStatistics\">Hide Statistics</a>\n                    <!-- </span> -->\n                  </div>\n\n\n                           <!-- Toolbar -->\n                           <form novalidate [formGroup]=\"searchForm\"> \n                            <div class=\"card col-md-12 toolbarCard\" >\n                              <div class=\" col-md-12\">\n                                <div class=\" col-md-4\" >\n                                  <i class=\"pe-7s-plus toolbarIcon\" (click)=\"onShowAddEdit()\"  ></i>\n                                  <i class=\"pe-7s-cloud-download toolbarIcon\" (click)=\"onExportExcel()\" ></i>\n                                  <i class=\"pe-7s-print toolbarIcon\"  printTitle=\"Assets-List\" printSectionId=\"print-section\" ngxPrint> </i>\n                                  <i class=\"pe-7s-refresh-2 toolbarIcon\" (click)=\"onGetAllAssets()\" ></i>   \n                                  <i class=\"pe-7s-trash toolbarIcon\" (click)=\"onDeleteAllSellected()\"  > </i>  \n                                </div>\n                                <div class=\" col-md-2\">\n                                  <select id=\"PerPage\" (change)=\"onChangeRowsPerPage($event)\" class=\"marginsDropdownList form-control\" value=\"5\">\n                                    <option value=\"5\">Rows</option>\n                                    <option value=\"5\">5</option>\n                                    <option value=\"10\">10</option>\n                                    <option value=\"25\">25</option>\n                                    <option value=\"50\">50</option>\n                                    <option value=\"100\">100</option>\n          \n                                    </select> \n                                </div>\n                                <div class=\" col-md-6 marginsPaging\" >\n                                  <pagination-controls  (pageChange)=\"pageIndex = $event\" > </pagination-controls>\n                                </div>\n                                  <br><br>     <br>\n                              \n                              </div>\n                              <div class=\" col-md-12\">\n                                <div class=\" col-md-2\">\n                                  <select formControlName=\"DepartmentName\" \n                                  [ngStyle]=\"{'background-color': DepartmentNameIsSelected ? 'gray' : 'white'}\" (change)=\"checkDepartmentFilterSelection($event.target.value)\" \n                                  class=\"form-control\" data-title=\"Single Select\" placeholder=\"Departments\"\n                                  data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                                  <option value=\"\" >All-Departments</option>\n                                  <option *ngFor=\"let a of Departments\" value={{a.dptName}} > {{a.dptName}} </option>\n                                </select>\n                                </div>\n                                <div class=\"col-md-2\">\n                                  <select value=\"0\"  formControlName=\"BranchName\"\n                                  [ngStyle]=\"{'background-color': BranchNameIsSelected ? 'gray' : 'white'}\" (change)=\"checkBranchFilterSelection($event.target.value)\"\n                                    class=\"form-control\" data-title=\"Single Select\" \n                                    data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                                    <option value=\"\">All-Branchs</option>\n                                    <option *ngFor=\"let a of Branchs\" value={{a.brnName}} > {{a.brnName}} </option>\n                                  </select>\n                                </div>\n                                <div class=\"col-md-2\">\n                                  <select value=\"0\"  formControlName=\"CompanyName\"  class=\"form-control\" data-title=\"Single Select\" \n                                  [ngStyle]=\"{'background-color': CompanyNameIsSelected ? 'gray' : 'white'}\" (change)=\"checkCompanyFilterSelection($event.target.value)\"\n                                    data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                                    <option value=\"\">All-Companies</option>\n                                    <option *ngFor=\"let a of Companys\" value={{a.comName}} > {{a.comName}} </option>\n                                  </select>\n                                </div>\n                                <div class=\"col-md-2\">\n                                  <select value=\"0\" formControlName=\"AssetTypeName\" \n                                  [ngStyle]=\"{'background-color': AssetTypeNameIsSelected ? 'gray' : 'white'}\" (change)=\"checkTypeFilterSelection($event.target.value)\"\n                                    class=\"form-control\" data-title=\"Single Select\" data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                                    <option value=\"\">All-Types</option>\n                                    <option *ngFor=\"let a of AssetTypes\" value={{a.asttypName}} > {{a.asttypName}} </option>\n                                  </select>\n                                </div>\n                                <div class=\"col-md-2\">\n                                    <button type=\"button\" class=\"btn btn-primary pe-7s-search\"  (click)=\"searchFilter(searchForm.value)\"> Search </button> \n                                </div>\n                                <div class=\" col-md-2 marginsSearch \">\n                                  <input #search id=\"search\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\" aria-describedby=\"basic-addon1\" class=\"form-control\" >       \n                                </div>\n                            <br><br><br>\n                              </div>\n                            </div>\n                          </form>\n\n                  <div id=\"print-section\" class=\"row card col-md-12 fresh-datatables\" style=\"overflow-x:auto;\" >\n                  <!-- <div  > -->\n\n                    <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n              \n                    <thead>\n                          <tr>\n                            <th> \n                              <div class=\" form-check\">\n                                <label class=\" form-check-label\">\n                                  <input id=\"assetItemALL--\" (change)=\"onSelectAll($event)\" class=\" form-check-input\"  type=\"checkbox\" value=\"\" />\n                                  <span class=\" form-check-sign\">\n                                    <span class=\" check\"> </span>\n                                  </span>\n                                </label>\n                              </div>\n                             </th>\n                            <th [class.active]=\"order === 'astId'\" (click)=\"setOrder('astId')\">\n                              # <span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span>\n                            </th>\n                            <th [class.active]=\"order === 'astDescription'\" (click)=\"setOrder('astDescription')\"\n                              class=\"mdl-data-table__cell--non-numeric\">\n                              Description <span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span>\n                            </th>\n                            <th [class.active]=\"order === 'astCode'\" (click)=\"setOrder('astCode')\">\n                              Code <span [hidden]=\"reverse\">▼</span>\n                              <span [hidden]=\"!reverse\">▲</span>\n                            </th>\n                            <th [class.active]=\"order === 'astSerialNumber'\" (click)=\"setOrder('astSerialNumber')\" *ngIf=\"IsSerialNumberExist()\" >\n                              SN <span [hidden]=\"reverse\">▼</span>\n                              <span [hidden]=\"!reverse\">▲</span>\n                            </th>\n                            <th [class.active]=\"order === 'astPartNumber'\" (click)=\"setOrder('astPartNumber')\"  *ngIf=\"IsPartNumberExist()\">\n                              PN <span [hidden]=\"reverse\">▼</span>\n                              <span [hidden]=\"!reverse\">▲</span>\n                            </th>\n                            <th [class.active]=\"order === 'astDialNumber'\" (click)=\"setOrder('astDialNumber')\" *ngIf=\"IsDialNumberExist()\" >\n                              Dial Number <span [hidden]=\"reverse\">▼</span>\n                              <span [hidden]=\"!reverse\">▲</span>\n                            </th>\n                            <th [class.active]=\"order === 'astCircuitNumber'\" (click)=\"setOrder('astCircuitNumber')\" *ngIf=\"IsCircuitNumberExist()\">\n                              Circuit Number <span [hidden]=\"reverse\">▼</span>\n                              <span [hidden]=\"!reverse\">▲</span>\n                            </th>\n                            <th [class.active]=\"order === 'astPurchaseDate'\" (click)=\"setOrder('astPurchaseDate')\">\n                              Purchase Date <span [hidden]=\"reverse\">▼</span>\n                              <span [hidden]=\"!reverse\">▲</span>\n                            </th>\n                            <th [class.active]=\"order === 'asttypName'\" (click)=\"setOrder('asttypName')\">\n                              Asset Type <span [hidden]=\"reverse\">▼</span>\n                              <span [hidden]=\"!reverse\">▲</span>\n                            </th>\n\n                            <th [class.active]=\"order === 'empFullName'\" (click)=\"setOrder('empFullName')\">\n                              Employee <span [hidden]=\"reverse\">▼</span>\n                              <span [hidden]=\"!reverse\">▲</span>\n                            </th>\n                            <th [class.active]=\"order === 'dptName'\" (click)=\"setOrder('dptName')\">\n                              Department <span [hidden]=\"reverse\">▼</span>\n                              <span [hidden]=\"!reverse\">▲</span>\n                            </th>\n                            <th [class.active]=\"order === 'brnName'\" (click)=\"setOrder('brnName')\">\n                              Branch <span [hidden]=\"reverse\">▼</span>\n                              <span [hidden]=\"!reverse\">▲</span>\n                            </th>\n                            <th [class.active]=\"order === 'comName'\" (click)=\"setOrder('comName')\">\n                              Company <span [hidden]=\"reverse\">▼</span>\n                              <span [hidden]=\"!reverse\">▲</span>\n                            </th>\n                            <th >\n                              Actions \n                            </th>\n\n                          </tr>\n                    </thead>\n                    <tbody>\n                          <tr  *ngFor=\"let row of Assets | orderBy: order:reverse:'case-insensitive' | paginate: { itemsPerPage: pageSize, currentPage: pageIndex }; let i = index\">\n                            <td>\n                              <div class=\"form-check\">\n                                <label class=\" form-check-label\">\n                                  <input id=\"assetItem--{{i}}\" class=\" form-check-input\" (change)=\"onSelect($event, row)\" [(ngModel)]=\"row.checkbox\" [value]=\"row.checkbox\" type=\"checkbox\" value=\"\" />\n                                  <span class=\" form-check-sign\">\n                                    <span class=\" check\"> </span>\n                                  </span>\n                                </label>\n                              </div>\n                            </td>\n                            <td>{{ i+1 }}</td>\n                            <td>{{ row?.astDescription }}</td>\n                            <td>{{ row?.astCode }}</td>\n                            <td *ngIf=\"IsSerialNumberExist()\">{{ row?.astSerialNumber }}</td> \n                            <td *ngIf=\"IsPartNumberExist()\">{{ row?.astPartNumber }}</td>\n                            <td *ngIf=\"IsDialNumberExist()\">{{ row?.astDialNumber}}</td>\n                            <td *ngIf=\"IsCircuitNumberExist()\">{{ row?.astCircuitNumber}}</td>\n                            <td>{{ row?.astPurchaseDate }}</td>\n                            <td>{{ row?.AssetTypeName }}</td>\n                            <td> ({{ row.EmployeeHrCode }}) {{ row?.EmployeeName }}</td>\n                            <td>{{ row?.DepartmentName }}</td>\n                            <td>{{ row?.BranchName }}</td>\n                            <td>{{ row?.CompanyName }}</td>\n                            <td>\n                              <a (click)=\"onGetAssetLog(row)\" class=\"btn btn-simple btn-warning btn-icon\"><i>Hist</i></a>\n                              <a (click)=\"onEditAsset(row)\" class=\"btn btn-simple btn-warning btn-icon edit\"><i class=\"fa fa-edit\"></i></a>\n                              <a (click)=\"onDeleteAsset(row)\" class=\"btn btn-simple btn-danger btn-icon remove \"><i class=\"fa fa-times\"></i></a> </td>\n                          </tr>\n                          <tr>\n                            <td>\n                                  <div  class=\"text-center\" style=\"color: red; width: auto\">\n                                    <p *ngIf=\"Assets.length === 0\">\n                                        No Entry found\n                                    </p>\n                                  </div>\n                            </td>\n                          </tr>\n                    </tbody>\n                    </table>\n                  <!-- </div> -->\n                 </div> \n                 <!-- endprintsection -->\n               \n                <!-- end content-->\n            <!-- </div> -->\n            <!--  end card  -->\n          \n          <!-- end col-md-12 -->\n          <div class=\"col-md-12\">\n            <div class=\"col-md-1\">\n              <select class=\"col-md-1\" id=\"PerPage\" (change)=\"onChangeRowsPerPage($event)\" class=\"form-control col-sm-1\" >\n                <option value=\"5\">#Rows</option>\n                <option value=\"5\">5</option>\n                <option value=\"10\">10</option>\n                <option value=\"25\">25</option>\n                <option value=\"50\">50</option>\n                <option value=\"100\">100</option>\n          \n                </select> \n            </div>\n            <div class=\"col-md-3\">\n              <pagination-controls (pageChange)=\"pageIndex = $event\">    </pagination-controls>\n            </div>\n           </div>\n          </div>\n      </div>\n   \n    \n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/asset/assettrackinglog/assettrackinglog.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/asset/assettrackinglog/assettrackinglog.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n\n            <div class=\"card col-md-12\">\n                <div class=\"col-md-3\"> \n                    <span>\n                        Code:  {{ Asset.astCode }}\n                    </span>\n                </div>\n                <div class=\"col-md-3\"> \n                    <span>\n                      Type:   {{ Asset.AssetTypeName }}\n                    </span>\n                </div>\n                <div class=\"col-md-3\"> \n                    <span>\n                     Descripion:   {{ Asset.astDescription }}\n                    </span>\n                </div>\n                <div class=\"col-md-3\"> \n                    <span>\n                     Current Employee: {{ Asset.EmployeeName }}\n                    </span>\n                </div>\n            \n            </div> \n            <!-- style=\"overflow-x:auto;\"  -->\n            <div class=\"fresh-datatables\" >\n              <a routerLink=\"/masterdata/assets\" routerLinkActive=\"active\">Back to Assets List</a>  \n              <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n        \n              <thead>\n                    <tr>\n                      <th >\n                        #\n                      </th>\n                      <th >\n                        Date/Time\n                      </th>\n                      <th >\n                        User Name\n                      </th>\n                      <th>\n                          From               \n                      </th>\n                      <th>\n                          To\n                      </th>\n                    </tr>\n              </thead>\n              <tbody>\n                    <tr  *ngFor=\"let row of AssetTrackingVMs | paginate: { itemsPerPage: pageSize, currentPage: pageIndex }; let i = index\">\n                      <td>{{ i+1 }}</td>\n                      <td>{{ row.DateTime }}</td>\n                      <td>{{ row.usrAccountName }}</td>\n                      <td>{{ row.From }}</td>\n                      <td>{{ row.To }}</td>\n                    </tr>\n              </tbody>\n              </table>\n            </div>\n      \n    </div>\n</div>\n\n\n           \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/asset/assetupload/assetupload.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/asset/assetupload/assetupload.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n      <ngx-alerts></ngx-alerts>\n      <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" ></ngx-loading>\n      <div class=\"content\" >\n                            <!-- Add-Edit -->\n                            <div class=\"row card col-md-12\" >\n                              <div class=\"content\" >\n                                        <form #f=\"ngForm\" novalidate >\n                                                  <h4 class=\"title\"> Assets Excel Upload </h4>\n                                                  <div class=\"row card col-md-12\" style=\"background-color:  #f9f9f9;\">\n                                                    <br>\n                                                      <div class=\"col-md-6\">\n                                                        <input class=\"form-control col-md-6\" type=\"file\" #fileInput />\n                                                      </div>\n                                                      <div class=\"col-md-2\">\n                                                        <button class=\"btn btn-primary\" (click)=\"uploadFile()\">Upload</button>\n                                                      </div>\n                                                      <br><br><br>\n                                                  </div>\n                                                    <div class=\"col-md-12\">\n                                                      The uploaded Assets will remain in hereunder list until you save it to the existing assets (Is Exist) column shows the status. \n                                                    </div>\n                                                    <div class=\"col-md-2\">    <a routerLink=\"/masterdata/assets\" routerLinkActive=\"active\">Back to Assets List</a>    </div>\n                                                    <div class=\"col-md-3\">    <a href=\"#\" (click)=\"download()\">Download Sample File of Assets</a>   <br>  <br>    </div>\n                                                    \n                                                  <div [hidden]=\"!loading\" > \n                                                    <img src=\"../../../../assets/animatedImg/loadingShip.gif\" alt=\"Moving Ship\" />\n                                                  </div>\n                                            <!-- </div> -->\n                                        </form>\n                              </div>\n                            </div>\n                            <!-- Statistics -->\n                            <div class=\"row card col-md-12\"  [hidden]=\"!showStatistics\">\n                              <div class=\"content\">\n                                  <br>\n                                  <a class=\"pull-right\" (click)=\"onShowHideStatistics()\" [hidden]=\"!showStatistics\">Hide Statistics</a>\n                                              \n                                              <legend>   \n                                                <h4 class=\"title\"> Uploaded Assets Statistics</h4> \n                                              </legend>\n                              \n                                              <div class=\"col-md-3\">\n                                                Asset Code Duplicated: <span  style=\"color: red;\"> {{ astCodeDuplication }} </span> \n                                              </div>\n                                              <div class=\"col-md-3\">\n                                                Asset SN Duplicated: <span  style=\"color: red;\"> {{ astSNDuplication }} </span> \n                                              </div>\n                                              <div class=\"col-md-3\">\n                                                Asset Dial num Duplicated: <span  style=\"color: red;\"> {{ astDialNumDuplication }} </span> \n                                              </div>\n                                              <div class=\"col-md-3\">\n                                              Total Uploaded: <span>  {{upLoadedAssets}} </span>\n                                              </div>\n                                              <br><br>\n                                          <div class=\"col-md-3\">\n                                            <!-- No Company :  <span  style=\"color: red;\">   {{noCompany}} </span> -->\n                                            No Hr Code: <span  style=\"color: red;\">  {{ noHrCode }} </span> \n                                          </div>\n                                          <div class=\"col-md-3\">\n                                            No AssetCode:  <span  style=\"color: red;\">  {{noAssetCode}} </span>\n                                          </div>\n                                          <div class=\"col-md-3\">\n                                            No Asset Type:   <span  style=\"color: red;\">  {{noAssetTypeCode}} </span>\n                                          \n                                          </div>\n                                          <div class=\"col-md-3\">\n                                        \n                                          </div>\n                                          <br>\n                                          <br>\n                                          <div class=\"col-md-3\">\n                                            Selected:  <span style=\"color: black;\">  {{selectedAssets}} </span>\n                                          </div>\n                                          <div class=\"col-md-3\">\n                                            <!-- No Branch:   <span  style=\"color: red;\">  {{noBranch}} </span> -->\n                                            New Assets :  <span style=\"color: green;\">  {{isNew}} </span>\n                                          </div>\n                                          <div class=\"col-md-3\">\n                                            Already Exist: <span  style=\"color: red;\">  {{ isExist }} </span>\n                                          </div>\n                                          <div class=\"col-md-3\">\n                                        \n                                          \n                                          </div>\n                                    <br>\n                              </div>\n                            </div>\n                            <!-- Assets List -->\n                            <div class=\"row card col-md-12\" >\n                              <div class=\"content\">\n                                  <div class=\"row col-md-12\" >\n                                        <div class=\"row col-md-6\">\n                                          <br>\n                                          <h4 class=\"title\">Preview Uploaded Assets List</h4>  \n                                        </div>\n                                        <div class=\"row col-md-6\">\n                                          <a class=\"pull-right\" (click)=\"onShowHideStatistics()\" [hidden]=\"showStatistics\">Show Statistics</a>\n                                          <a class=\"pull-right\" (click)=\"onShowHideStatistics()\" [hidden]=\"!showStatistics\">Hide Statistics</a><br> \n                                        </div>\n                                  </div>\n                                  <!-- Toolbar -->\n                                  <div class=\"row card col-md-12 toolbarCard \" >\n                                    <div class=\"content\">\n                                          <div class=\"col-md-3\" >\n                                            <i class=\"pe-7s-refresh-2 toolbarIcon\" (click)=\"onGetAllAssets()\" ></i>\n                                            <i class=\"pe-7s-diskette toolbarIcon\" (click)=\"onSaveToAssetsList()\" ></i>     \n                                            <i class=\"pe-7s-trash toolbarIcon\" (click)=\"onDeleteAllSellected()\" ></i>  \n                                          </div>\n                                          <div class=\"col-md-2\">\n                                            <select id=\"PerPage\" (change)=\"onChangeRowsPerPage($event)\" class=\"marginsDropdownList form-control\" value=\"5\">\n                                              <option value=\"5\">Rows</option>\n                                              <option value=\"5\">5</option>\n                                              <option value=\"10\">10</option>\n                                              <option value=\"25\">25</option>\n                                              <option value=\"50\">50</option>\n                                              <option value=\"100\">100</option>\n                              \n                                              </select> \n                                          </div>\n                                          <div class=\"col-md-5 marginsPaging\" >\n                                            <pagination-controls  (pageChange)=\"pageIndex = $event\" > </pagination-controls>\n                                          </div>\n                                          <div class=\"col-md-2 marginsSearch \">\n                                            <input #search id=\"search\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\" aria-describedby=\"basic-addon1\" class=\"form-control\" >       \n                                          </div>\n                                    </div>\n                                  </div>\n                                  <!-- <div class=\"row col-md-12\">.</div> -->\n                                  <!-- Table -->\n                                  <div id=\"print-section\" class=\"row card col-md-12 \" style=\"overflow-x:auto;\"  >\n                                    <div class=\"content\">\n                                        <table  id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\"  width=\"100%\" style=\"width:100%\">\n                                          <thead>\n                                            <tr>\n                                              <th> \n                                                <div class=\" form-check\">\n                                                  <label class=\" form-check-label\">\n                                                    <input id=\"assetItemALL--\" (change)=\"onSelectAll($event)\" class=\" form-check-input\"  type=\"checkbox\" value=\"\" />\n                                                    <span class=\" form-check-sign\">\n                                                      <span class=\" check\"> </span>\n                                                    </span>\n                                                  </label>\n                                                </div>\n                                              </th>\n                                              <th> \n                                                #\n                                              </th>\n                                              <th [class.active]=\"order === 'IsExist'\" (click)=\"setOrder('IsExist')\">\n                                                Is Exist <span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span>\n                                              </th>\n                                              <th [class.active]=\"order === 'astCode'\" (click)=\"setOrder('astCode')\">\n                                                Code <span [hidden]=\"reverse\">▼</span>\n                                                <span [hidden]=\"!reverse\">▲</span>\n                                              </th>\n                                              <th [class.active]=\"order === 'astDescription'\" (click)=\"setOrder('astDescription')\" *ngIf=\"IsDescriptionExist()\" \n                                                class=\"mdl-data-table__cell--non-numeric\">\n                                                Description <span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span>\n                                              </th>\n                                              <th [class.active]=\"order === 'SerialNumber'\" (click)=\"setOrder('SerialNumber')\" *ngIf=\"IsSerialNumberExist()\">\n                                                SN <span [hidden]=\"reverse\">▼</span>\n                                                <span [hidden]=\"!reverse\">▲</span>\n                                              </th>\n                                              <th [class.active]=\"order === 'PartNumber'\" (click)=\"setOrder('PartNumber')\" *ngIf=\"IsPartNumberExist()\">\n                                                PN <span [hidden]=\"reverse\">▼</span>\n                                                <span [hidden]=\"!reverse\">▲</span>\n                                              </th>\n                                              <th [class.active]=\"order === 'DialNumber'\" (click)=\"setOrder('DialNumber')\"  *ngIf=\"IsDialNumberExist()\"  >\n                                                Dail Number <span [hidden]=\"reverse\">▼</span>\n                                                <span [hidden]=\"!reverse\">▲</span>\n                                              </th>\n                                              <th [class.active]=\"order === 'CircuitNumber'\" (click)=\"setOrder('CircuitNumber')\" *ngIf=\"IsCircuitNumberExist()\">\n                                                CircuitNumber <span [hidden]=\"reverse\">▼</span>\n                                                <span [hidden]=\"!reverse\">▲</span>\n                                              </th>\n                                              <th [class.active]=\"order === 'TypeName'\" (click)=\"setOrder('TypeName')\" *ngIf=\"IsTypeNameExist()\">\n                                                Type Name <span [hidden]=\"reverse\">▼</span>\n                                                <span [hidden]=\"!reverse\">▲</span>\n                                              </th>\n                                              <th [class.active]=\"order === 'EmpHRCode'\" (click)=\"setOrder('EmpHRCode')\" *ngIf=\"IsEmpHRCodeExist()\">\n                                                Emp HR Code<span [hidden]=\"reverse\">▼</span>\n                                                <span [hidden]=\"!reverse\">▲</span>\n                                              </th>\n                                              <th [class.active]=\"order === 'EmpName'\" (click)=\"setOrder('EmpName')\" *ngIf=\"IsEmpNameExist()\">\n                                                Emp Name <span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span>\n                                              </th>\n                                              <!-- <th [class.active]=\"order === 'CompanyName'\" (click)=\"setOrder('CompanyName')\" *ngIf=\"IsCompanyNameExist()\">\n                                                Company Name <span [hidden]=\"reverse\">▼</span>\n                                                <span [hidden]=\"!reverse\">▲</span>\n                                              </th>  \n                                              <th [class.active]=\"order === 'BranchName'\" (click)=\"setOrder('BranchName')\" *ngIf=\"IsBranchNameExist()\">\n                                                Branch Name <span [hidden]=\"reverse\">▼</span>\n                                                <span [hidden]=\"!reverse\">▲</span>\n                                              </th> -->\n                                            </tr>\n                                          </thead>\n                                          <tbody>\n                                            <tr  *ngFor=\"let row of Assets | orderBy: order:reverse:'case-insensitive' | paginate: { itemsPerPage: pageSize, currentPage: pageIndex }; let i = index\">\n                                              <td>\n                                                <div class=\"form-check\">\n                                                  <label class=\" form-check-label\">\n                                                    <input id=\"assetItem--{{i}}\" class=\" form-check-input\" (change)=\"onSelect($event, row)\" \n                                                    [(ngModel)]=\"row.checkbox\" [value]=\"row.checkbox\" type=\"checkbox\" value=\"\" />\n                                                    <span class=\" form-check-sign\">\n                                                      <span class=\" check\"> </span>\n                                                    </span>\n                                                  </label>\n                                                </div>\n                                              </td>\n                                              <td>\n                                                {{i+1}}\n                                              </td>\n                                              <td>\n                                                <span *ngIf=\"row?.IsExist == true\" style=\"color: red;\"  >  Exist  </span>\n                                                <span *ngIf=\"row?.IsExist == false\" style=\"color: green;\"  >  New  </span>\n                                              </td> \n                                              <td [ngStyle]=\"{'color': row?.duplicatCode? 'red' : 'black'}\">\n                                                {{ row?.AssetCode }}  \n                                                <span *ngIf=\"row?.duplicatCode == true\" style=\"color: red;\"  >  duplicated  </span>\n                                                <span *ngIf=\"row?.AssetCode == ''\" style=\"color: red;\"  >  missed  </span>\n                                              </td>\n                                              <td *ngIf=\"IsDescriptionExist()\" >{{ row?.Description }}</td>\n                                              <!-- *ngIf=\"IsSerialNumberExist()\" -->\n                                              <td *ngIf=\"IsSerialNumberExist()\" [ngStyle]=\"{'color': row?.duplicatSerialNumber? 'red' : 'black'}\" >\n                                                {{ row?.SerialNumber }}\n                                                <span *ngIf=\"row?.duplicatSerialNumber == true\" style=\"color: red;\"  >  duplicated  </span>\n                                              </td>\n                                              <td *ngIf=\"IsPartNumberExist()\" >{{ row?.PartNumber }}</td>\n                                              <!-- *ngIf=\"IsDialNumberExist()\"  -->\n                                              <td [ngStyle]=\"{'color': row?.duplicatDailNumber? 'red' : 'black'}\" >\n                                                {{ row?.DialNumber }}\n                                                <span  *ngIf=\"row?.duplicatDailNumber == true\" style=\"color: red;\"  >  duplicated  </span>\n                                              </td>\n                                              <td *ngIf=\"IsCircuitNumberExist()\"  >\n                                                {{ row?.CircuitNumber }}\n                                              </td>\n                                              <td *ngIf=\"IsTypeNameExist()\" [ngStyle]=\"{'color': row?.TypeName? 'black' : 'red'}\">{{ row?.TypeName ? row?.TypeName : 'missed' }}</td> \n                                              <td *ngIf=\"IsEmpHRCodeExist()\" [ngStyle]=\"{'color': row?.EmpHRCode? 'black' : 'red'}\">{{ row?.EmpHRCode ? row?.EmpHRCode : 'missed' }}</td> \n                                              <td *ngIf=\"IsEmpNameExist()\" [ngStyle]=\"{'color': row?.EmpName? 'black' : 'red'}\">{{ row?.EmpName ? row?.EmpName : 'missed' }}</td> \n                                              <!-- <td *ngIf=\"IsCompanyNameExist()\" [ngStyle]=\"{'color': row?.CompanyName? 'black' : 'red'}\">{{ row?.CompanyName ? row?.CompanyName : 'missed' }}</td>  \n                                              <td *ngIf=\"IsBranchNameExist()\" [ngStyle]=\"{'color': row?.BranchName? 'black' : 'red'}\">{{ row?.BranchName ? row?.BranchName : 'missed' }}</td> \n                                            </tr> -->\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                  </div>\n                                  <div class=\"row col-md-12\">\n                                    <div class=\"col-md-1\">\n                                      <select class=\"col-md-1\" id=\"PerPage\" (change)=\"onChangeRowsPerPage($event)\" class=\"form-control col-sm-1\" >\n                                        <option value=\"5\">#Rows</option>\n                                        <option value=\"5\">5</option>\n                                        <option value=\"10\">10</option>\n                                        <option value=\"25\">25</option>\n                                        <option value=\"50\">50</option>\n                            \n                                     \n                                      </select> \n                                    </div>\n                                    <div class=\"col-md-3\">\n                                      <pagination-controls (pageChange)=\"pageIndex = $event\">    </pagination-controls>\n                                      <br>\n                                    </div>\n                                  </div>\n                              </div>\n                            </div>\n      </div>\n    </div>\n</div>\n  \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/assettype/assettype.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/assettype/assettype.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n \n\n   <div class=\"main-content\">\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" ></ngx-loading>\n    <ngx-alerts></ngx-alerts>\n      <div class=\"container-fluid\">\n        <div class=\"row\" >\n             <div class=\"card\">\n                    <div class=\"content\">\n                      <h4 class=\"title\">Assets Type List</h4>  \n                      <form [formGroup]=\"astTyForm\" (ngSubmit)=\"onSubmit()\">\n                      <button type=\"button\" class=\"btn btn-primary pe-7s-diskette\" (click)=\"onDBUpdate()\"  > DB Update </button> <span style=\"color: red;\">         Assets Types are Hard Coded, Managed only By IT  </span> \n                       </form>          \n                    </div>\n                      <div class=\"fresh-datatables\">\n                        <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n\n                        <thead>\n                              <tr>\n                                <th >\n                                 #\n                                </th>\n                                <th >\n                                  Asset Type Name\n                                </th>\n                              </tr>\n                        </thead>\n                        <tbody  >\n                              <tr  *ngFor=\"let row of AssetTypes; let i = index\">\n                                <td>{{ i+1 }}</td>\n                                <td>{{ row?.asttypName }}</td>\n                              </tr>\n                        </tbody>\n                        </table>\n                      </div>\n             </div>\n        </div>\n      </div>\n</div>\n                        \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/branch/branch.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/branch/branch.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" ></ngx-loading>\n    <ngx-alerts></ngx-alerts>\n      <div class=\"container-fluid\">\n        <div class=\"row\"   >\n              <div class=\"card col-md-12\">\n                <form [formGroup]=\"branchForm\" (ngSubmit)=\"onSubmit()\">\n                <!-- <div class=\"content\"> -->\n          \n                        <div class=\"form-group col-md-12\">\n                              <legend>         \n                                Branch ID: {{ getBranchForm.brnId.value }}\n                              </legend>\n                            <div class=\"row\">\n                              <div class=\"form-group col-md-3\">\n                                <label class=\"control-label\" for=\"\">Branch Name: <span class=\"star\">*</span> </label>\n                                <input type=\"text\" placeholder=\"Branch Name\" formControlName=\"brnName\"  class=\"form-control\" >\n                                <small [hidden]=\"branchForm.controls.brnName.valid || branchForm.controls.brnName.pristine\" class=\"text-danger\">\n                                      Branch Name is required.\n                                </small>\n                              </div>\n               \n                              <div class=\"form-group col-md-3\">\n                                <label class=\"control-label\" for=\"\">Code: <span class=\"star\">*</span> </label>\n                                <input type=\"text\" placeholder=\"Branch Code\" formControlName=\"brnCode\"  class=\"form-control\" >\n                                <small [hidden]=\"branchForm.controls.brnCode.valid || branchForm.controls.brnCode.pristine\" class=\"text-danger\">\n                                      Code is required.\n                                </small>\n                              </div>\n\n                       \n                            </div>\n                            <div class=\"footer\">\n                        \n                                    <button type=\"submit\" class=\"btn btn-primary pe-7s-diskette\"  *ngIf=\"getBranchForm.brnId.value == 0\" [disabled]=\"branchForm.status == 'INVALID' \"> Add </button> <!--  [disabled]=\"branchForm.status == 'INVALID' \" -->\n                                    <button type=\"submit\" class=\"btn btn-primary pe-7s-diskette\"  *ngIf=\"getBranchForm.brnId.value > 0\" [disabled]=\"branchForm.status == 'INVALID' \"> Save </button> <!--*ngIf=\"getBranchForm.brnId.value > 0\" [disabled]=\"branchForm.status == 'INVALID' \"-->\n                                    <button type=\"button\" (click)=\"onCancel()\" class=\"btn btn-primary pull-right\" > Cancel </button>\n                            </div>\n                        </div>\n          \n                <!-- </div> -->\n              </form>\n        \n              </div>\n        </div>\n        <div class=\"row\" >\n             <div class=\"card\">\n                    <div class=\"content\">\n                      <h4 class=\"title\">branchs List</h4>\n                    </div>\n                      <div class=\"fresh-datatables\">\n                        <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                        <!-- Table Headers -->\n                        <thead>\n                              <tr>\n                                <th >\n                                  ID \n                                </th>\n                                <th >\n                                  Branch Name \n                                </th>\n                                <th>\n                                  Code\n                                </th>\n                        \n                                <th >\n                                  Actions \n                                </th>\n                              </tr>\n                        </thead>\n                        <!-- Table Body -->\n                        <tbody  >\n                              <tr  *ngFor=\"let row of Branchs\">\n                                <td>{{ row?.brnId }}</td>\n                                <td>{{ row?.brnName }}</td>\n                                <td>{{  row?.brnCode  }}                                </td>\n                                <td>\n                                  <a (click)=\"onEditBranch(row)\" class=\"btn btn-simple btn-warning btn-icon edit\"><i class=\"fa fa-edit\"></i></a>\n                                  <a (click)=\"onDeleteBranch(row)\" class=\"btn btn-simple btn-danger btn-icon remove \"><i class=\"fa fa-times\"></i></a> </td>\n                              </tr>\n                        </tbody>\n                        </table>\n                      </div>\n              </div>\n \n        </div>\n      </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/codeguide/codeguide.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/codeguide/codeguide.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"container-fluid\">\n                          <!-- <a class=\"pull-right\" (click)=\"onShowHideCodeGuide()\" [hidden]=\"!showCodeGuide\">Hide Code Guide</a>   -->\n                        <legend>   <h4 class=\"title\"> Code Guide   (   Name / Code   ) </h4>   </legend>\n    \n                        <div class=\"col-md-12\">\n                            <div class=\"col-md-12\">\n        \n                                    <div class=\"col-md-4\">\n                                      <b>  Asset Types Code   </b> \n                                    </div>\n                                    <div class=\"col-md-4\">\n                                        <b>   Companies Code   </b> \n                                    </div>\n                                    <div class=\"col-md-4\">\n                                        <b>   Branchs Code   </b> \n                                    </div>\n                            </div>\n                            <br>\n                         <div class=\"col-md-4\" >\n                            <br>\n                            <ul  *ngFor=\"let row of AssetTypes\">\n                                <li>\n                                {{ row.asttypName}}\n                                </li>\n                            </ul>\n                         </div>\n                         <div class=\"col-md-4\" >\n                            <ul  *ngFor=\"let row of Companies\">\n                                <li>\n                                {{ row.comName}} ({{ row.CompanyCode }})\n                                </li>\n                            </ul>\n                                    <br>\n                                    <div>\n                                        <b>   Employees Code   </b> <br>\n                                        <ul >\n                                            <li>\n                                            First Last ( XXXX )\n                                            </li>\n                                        </ul>\n                                    </div>\n                         </div>\n                         <div class=\"col-md-4\" >\n                            <ul  *ngFor=\"let row of Branchs\">\n                                <li>\n                                {{ row.brnName}} ({{ row.BranchCode }})\n                                </li>\n                            </ul>\n                         </div>\n                              \n                       \n                                    <!-- <div class=\"tr col-md-4\"  *ngFor=\"let row of Companies\">\n                                        <span class=\"td col-md-6\">\n                                        {{ row.comName}} ({{ row.CompanyCode }})\n                                        </span>\n                                    </div>\n                    \n                                    <div class=\"tr col-md-4\"  *ngFor=\"let row of Branchs\">\n                                        <span class=\"td col-md-6\">\n                                        {{ row.brnName}} ({{ row.BranchCode }})\n                                        </span>\n                                    </div> -->\n                       \n                        </div>\n</div>\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/company/company.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/company/company.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" ></ngx-loading>\n    <ngx-alerts></ngx-alerts>\n      <div class=\"container-fluid\">\n        <div class=\"row\"   >\n              <div class=\"card col-md-12\">\n                <form [formGroup]=\"companyForm\" (ngSubmit)=\"onSubmit()\">\n                <!-- <div class=\"content\"> -->\n          \n                        <div class=\"form-group col-md-12\">\n                              <legend>         \n                                Company ID: {{ getCompanyForm.comId.value }}\n                              </legend>\n                            <div class=\"row\">\n                              <div class=\"form-group col-md-3\">\n                                <label class=\"control-label\" for=\"\">Company Name: <span class=\"star\">*</span> </label>\n                                <input type=\"text\" placeholder=\"Company Name\" formControlName=\"comName\"  class=\"form-control\" >\n                                <small [hidden]=\"companyForm.controls.comName.valid || companyForm.controls.comName.pristine\" class=\"text-danger\">\n                                      Company Name is required.\n                                </small>\n                              </div>\n                              <div class=\"form-group col-md-3\">\n                                <label class=\"control-label\" for=\"\">Code: <span class=\"star\">*</span> </label>\n                                <input type=\"text\" placeholder=\"Company Code\" formControlName=\"comCode\"  class=\"form-control\" >\n                                <small [hidden]=\"companyForm.controls.comCode.valid || companyForm.controls.comCode.pristine\" class=\"text-danger\">\n                                      Company Code is required.\n                                </small>\n                              </div>\n                       \n                            </div>\n                            <div class=\"footer\">\n                        \n                                    <button type=\"submit\" class=\"btn btn-primary pe-7s-diskette\" (click)=\"setStatus('Add')\" *ngIf=\"getCompanyForm.comId.value == 0\" [disabled]=\"companyForm.status == 'INVALID' \"> Add </button> <!--  [disabled]=\"companyForm.status == 'INVALID' \" -->\n                                    <button type=\"submit\" class=\"btn btn-primary pe-7s-diskette\" (click)=\"setStatus('Save')\" *ngIf=\"getCompanyForm.comId.value > 0\" [disabled]=\"companyForm.status == 'INVALID' \"> Save </button> <!--*ngIf=\"getCompanyForm.comId.value > 0\" [disabled]=\"companyForm.status == 'INVALID' \"-->\n                                    <button type=\"button\" (click)=\"onCancel()\" class=\"btn btn-primary pull-right\" > Cancel </button>\n                            </div>\n                        </div>\n          \n                <!-- </div> -->\n              </form>\n        \n              </div>\n        </div>\n        <div class=\"row\" >\n             <div class=\"card\">\n                    <div class=\"content\">\n                      <h4 class=\"title\">Companys List</h4>\n                    </div>\n                      <div class=\"fresh-datatables\">\n                        <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                        <!-- Table Headers -->\n                        <thead>\n                              <tr>\n                                <th >\n                                  ID \n                                </th>\n                                <th >\n                                  Company Name \n                                </th>\n                                <th >\n                                  Code\n                                </th>\n                                <th >\n                                  Actions \n                                </th>\n                              </tr>\n                        </thead>\n                        <!-- Table Body -->\n                        <tbody  >\n                              <tr  *ngFor=\"let row of Companys\">\n                                <td>{{ row?.comId }}</td>\n                                <td>{{ row?.comName }}</td>\n                                <td>{{ row?.comCode }}</td>\n                                <td>\n                                  <a (click)=\"onEditCompany(row)\" class=\"btn btn-simple btn-warning btn-icon edit\"><i class=\"fa fa-edit\"></i></a>\n                                  <a (click)=\"onDeleteCompany(row)\" class=\"btn btn-simple btn-danger btn-icon remove \"><i class=\"fa fa-times\"></i></a> </td>\n                              </tr>\n                        </tbody>\n                        </table>\n                      </div>\n              </div>\n \n        </div>\n      </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/costcenter/costcenter.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/costcenter/costcenter.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" ></ngx-loading>\n    <ngx-alerts></ngx-alerts>\n      <div class=\"container-fluid\">\n        <div class=\"row\"   >\n              <div class=\"card col-md-12\">\n                <form [formGroup]=\"costcenterForm\" (ngSubmit)=\"onSubmit()\">\n                <!-- <div class=\"content\"> -->\n          \n                        <div class=\"form-group col-md-12\">\n                              <legend>         \n                                costcenter ID: {{ getcostcenterForm.CostCenterId.value }}\n                              </legend>\n                            <div class=\"row\">\n                              <div class=\"form-group col-md-3\">\n                                <label class=\"control-label\" for=\"\">costcenter Name  ( Brn-Name / Dpt-Name / Emp-Name ) : <span class=\"star\">*</span> </label>\n                                <input type=\"text\" placeholder=\"costcenter Name\" formControlName=\"ccName\"  class=\"form-control\" >\n                                <small [hidden]=\"costcenterForm.controls.ccName.valid || costcenterForm.controls.ccName.pristine\" class=\"text-danger\">\n                                      costcenter Name is required.\n                                </small>\n                              </div>\n                              <!-- <div class=\"form-group col-md-3\">\n                                <label class=\"control-label\" for=\"\">costcenter Code: <span class=\"star\">*</span> </label>\n                                <input type=\"text\" placeholder=\"costcenter Code\" formControlName=\"costcenterCode\"  class=\"form-control\" >\n                                <small [hidden]=\"costcenterForm.controls.costcenterCode.valid || costcenterForm.controls.costcenterCode.pristine\" class=\"text-danger\">\n                                      costcenter Code is required.\n                                </small>\n                              </div> -->\n                       \n                            </div>\n                            <div class=\"footer\">\n                              <!-- *ngIf=\"getcostcenterForm.CostCenterId.value == 0\"  *ngIf=\"getcostcenterForm.CostCenterId.value > 0\" -->\n                                    <button type=\"submit\" class=\"btn btn-primary pe-7s-diskette\" *ngIf=\"getcostcenterForm.CostCenterId.value == null\" [disabled]=\"costcenterForm.status == 'INVALID' \"> Add </button> <!--  [disabled]=\"costcenterForm.status == 'INVALID' \" -->\n                                    <button type=\"submit\" class=\"btn btn-primary pe-7s-diskette\" *ngIf=\"getcostcenterForm.CostCenterId.value != null\"  [disabled]=\"costcenterForm.status == 'INVALID' \"> Save </button> <!--*ngIf=\"getcostcenterForm.CostCenterId.value > 0\" [disabled]=\"costcenterForm.status == 'INVALID' \"-->\n                                    <button type=\"button\" (click)=\"onCancel()\" class=\"btn btn-primary pull-right\" > Cancel </button>\n                            </div>\n                        </div>\n          \n                <!-- </div> -->\n              </form>\n        \n              </div>\n        </div>\n        <div class=\"row\" >\n             <div class=\"card\">\n                    <div class=\"content\">\n                      <h4 class=\"title\">costcenters List</h4>\n                    </div>\n                      <div class=\"fresh-datatables\">\n                        <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                        <!-- Table Headers -->\n                        <thead>\n                              <tr>\n                                <th >\n                                  ID \n                                </th>\n                                <th >\n                                  costcenter Name \n                                </th>\n                                <th >\n                                  Actions \n                                </th>\n                              </tr>\n                        </thead>\n                        <!-- Table Body -->\n                        <tbody  >\n                              <tr  *ngFor=\"let row of costcenters\">\n                                <td>{{ row?.CostCenterId }}</td>\n                                <td>{{ row?.ccName }}</td>\n                                <td>\n                                  <a (click)=\"onEditcostcenter(row)\" class=\"btn btn-simple btn-warning btn-icon edit\"><i class=\"fa fa-edit\"></i></a>\n                                  <a (click)=\"onDeletecostcenter(row)\" class=\"btn btn-simple btn-danger btn-icon remove \"><i class=\"fa fa-times\"></i></a> </td>\n                              </tr>\n                        </tbody>\n                        </table>\n                      </div>\n              </div>\n \n        </div>\n      </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/department/department.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/department/department.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" ></ngx-loading>\n    <ngx-alerts></ngx-alerts>\n      <div class=\"container-fluid\">\n        <div class=\"row\"   >\n              <div class=\"card col-md-12\">\n                <form [formGroup]=\"departmetForm\" (ngSubmit)=\"onSubmit()\">\n                <!-- <div class=\"content\"> -->\n          \n                        <div class=\"form-group col-md-12\">\n                              <legend>         \n                                Department ID: {{ getDepartmentForm.dptId.value }}\n                              </legend>\n                            <div class=\"row\">\n                              <div class=\"form-group col-md-3\">\n                                <label class=\"control-label\" for=\"\">Department Name: <span class=\"star\">*</span> </label>\n                                <input type=\"text\" placeholder=\"Department Name\" formControlName=\"dptName\"  class=\"form-control\" >\n                                <small [hidden]=\"departmetForm.controls.dptName.valid || departmetForm.controls.dptName.pristine\" class=\"text-danger\">\n                                      Department Name is required.\n                                </small>\n                              </div>\n                              <div class=\"form-group col-md-3\">\n                                <label class=\"control-label\" for=\"\">Code: <span class=\"star\">*</span> </label>\n                                <input type=\"text\" placeholder=\"Code\" formControlName=\"dptCode\"  class=\"form-control\" >\n                                <small [hidden]=\"departmetForm.controls.dptCode.valid || departmetForm.controls.dptCode.pristine\" class=\"text-danger\">\n                                      Code is required.\n                                </small>\n                              </div>\n                       \n                            </div>\n                            <div class=\"footer\">\n                        \n                                    <button type=\"submit\" class=\"btn btn-primary pe-7s-diskette\" *ngIf=\"getDepartmentForm.dptId.value == 0\" [disabled]=\"departmetForm.status == 'INVALID' \"> Add </button> <!--  [disabled]=\"departmetForm.status == 'INVALID' \" -->\n                                    <button type=\"submit\" class=\"btn btn-primary pe-7s-diskette\"  *ngIf=\"getDepartmentForm.dptId.value > 0\" [disabled]=\"departmetForm.status == 'INVALID' \"> Save </button> <!--*ngIf=\"getDepartmentForm.dptId.value > 0\" [disabled]=\"departmetForm.status == 'INVALID' \"-->\n                                    <button type=\"button\" (click)=\"onCancel()\" class=\"btn btn-primary pull-right\" > Cancel </button>\n                            </div>\n                        </div>\n          \n                <!-- </div> -->\n              </form>\n        \n              </div>\n        </div>\n        <div class=\"row\" >\n             <div class=\"card\">\n                    <div class=\"content\">\n                      <h4 class=\"title\">Departments List</h4>\n                    </div>\n                      <div class=\"fresh-datatables\">\n                        <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                        <!-- Table Headers -->\n                        <thead>\n                              <tr>\n                                <th >\n                                  ID \n                                </th>\n                                <th >\n                                  Department Name \n                                </th>\n                                <th>\n                                  Code\n                                </th>\n                                <th >\n                                  Actions \n                                </th>\n                              </tr>\n                        </thead>\n                        <!-- Table Body -->\n                        <tbody  >\n                              <tr  *ngFor=\"let row of Departments\">\n                                <td>{{ row?.dptId }}</td>\n                                <td>{{ row?.dptName }}</td>\n                                <td> {{ row.dptCode }} </td>\n                                <td>\n                                  <a (click)=\"onEditDepartment(row)\" class=\"btn btn-simple btn-warning btn-icon edit\"><i class=\"fa fa-edit\"></i></a>\n                                  <a (click)=\"onDeleteDepartment(row)\" class=\"btn btn-simple btn-danger btn-icon remove \"><i class=\"fa fa-times\"></i></a> </td>\n                              </tr>\n                        </tbody>\n                        </table>\n                      </div>\n              </div>\n \n        </div>\n      </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/domain/domain.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/domain/domain.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" ></ngx-loading>\n    <ngx-alerts></ngx-alerts>\n      <div class=\"container-fluid\">\n        <div class=\"row\"   >\n              <div class=\"card col-md-12\">\n                <form [formGroup]=\"domainForm\" (ngSubmit)=\"onSubmit()\">\n                <!-- <div class=\"content\"> -->\n          \n                        <div class=\"form-group col-md-12\">\n                              <legend>         \n                                Domain ID: {{ getDomainForm.domId.value }}\n                              </legend>\n                            <div class=\"row\">\n                              <div class=\"form-group col-md-3\">\n                                <label class=\"control-label\" for=\"\">Domain Name: <span class=\"star\">*</span> </label>\n                                <input type=\"text\" placeholder=\"Domain Name\" formControlName=\"domName\"  class=\"form-control\" >\n                                <small [hidden]=\"domainForm.controls.domName.valid || domainForm.controls.domName.pristine\" class=\"text-danger\">\n                                      Domain Name is required.\n                                </small>\n                              </div>\n                       \n                            </div>\n                            <div class=\"footer\">\n                        \n                                    <button type=\"submit\" class=\"btn btn-primary pe-7s-diskette\"  *ngIf=\"getDomainForm.domId.value == 0\" [disabled]=\"domainForm.status == 'INVALID' \"> Add </button> <!--  [disabled]=\"domainForm.status == 'INVALID' \" -->\n                                    <button type=\"submit\" class=\"btn btn-primary pe-7s-diskette\"  *ngIf=\"getDomainForm.domId.value > 0\" [disabled]=\"domainForm.status == 'INVALID' \"> Save </button> <!--*ngIf=\"getDomainForm.domId.value > 0\" [disabled]=\"domainForm.status == 'INVALID' \"-->\n                                    <button type=\"button\" (click)=\"onCancel()\" class=\"btn btn-primary pull-right\" > Cancel </button>\n                            </div>\n                        </div>\n          \n                <!-- </div> -->\n              </form>\n        \n              </div>\n        </div>\n        <div class=\"row\" >\n             <div class=\"card\">\n                    <div class=\"content\">\n                      <h4 class=\"title\">Domains List</h4>\n                    </div>\n                      <div class=\"fresh-datatables\">\n                        <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                        <!-- Table Headers -->\n                        <thead>\n                              <tr>\n                                <th >\n                                  ID \n                                </th>\n                                <th >\n                                  Domain Name \n                                </th>\n                                <th >\n                                  Actions \n                                </th>\n                              </tr>\n                        </thead>\n                        <!-- Table Body -->\n                        <tbody  >\n                              <tr  *ngFor=\"let row of Domains\">\n                                <td>{{ row?.domId }}</td>\n                                <td>{{ row?.domName }}</td>\n                                <td>\n                                  <a (click)=\"onEditDomain(row)\" class=\"btn btn-simple btn-warning btn-icon edit\"><i class=\"fa fa-edit\"></i></a>\n                                  <a (click)=\"onDeleteDomain(row)\" class=\"btn btn-simple btn-danger btn-icon remove \"><i class=\"fa fa-times\"></i></a> </td>\n                              </tr>\n                        </tbody>\n                        </table>\n                      </div>\n              </div>\n \n        </div>\n      </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/employee/empdirectory/empdirectory.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/employee/empdirectory/empdirectory.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <ngx-alerts></ngx-alerts>\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" ></ngx-loading>\n    <ngx-alerts></ngx-alerts>\n    <div class=\"container-fluid\">\n               <div class=\"row card col-md-12\" >\n                <div class=\"content\">\n                <br>\n                <h4 class=\"title\">Company Directory</h4>\n                          <!-- Toolbar -->\n                          <form novalidate [formGroup]=\"searchForm\"> \n                            <div class=\"card col-md-12 toolbarCard\" >\n                              <div class=\" col-md-12\">\n                                <div class=\" col-md-4\" > \n                                  <i class=\"pe-7s-refresh-2 toolbarIcon\" (click)=\"onGetAllEmployees()\" ></i>   \n                                  <i class=\"pe-7s-cloud-download toolbarIcon\"  (click)=\"onExportExcel()\"  ></i>  \n                               </div>\n                                <div class=\" col-md-2\">\n                                  <select id=\"PerPage\" (change)=\"onChangeRowsPerPage($event)\" class=\"marginsDropdownList form-control\" value=\"5\">\n                                    <option value=\"5\">Rows</option>\n                                    <option value=\"5\">5</option>\n                                    <option value=\"10\">10</option>\n                                    <option value=\"25\">25</option>\n                                    <option value=\"50\">50</option>\n                                    <option value=\"100\">100</option>\n                         \n                                    </select> \n                                </div>\n                                <div class=\" col-md-6 marginsPaging\" >\n                                  <pagination-controls  (pageChange)=\"pageIndex = $event\" > </pagination-controls>\n                                </div>\n                                <br>\n                              </div>\n                              <div class=\" col-md-12\">\n                                <div class=\" col-md-2\">\n                                  <select formControlName=\"DepartmentName\" [ngStyle]=\"{'background-color': searchForm.controls.DepartmentName.value ? 'gray' : 'white'}\"\n                                  class=\"form-control\" data-title=\"Single Select\" placeholder=\"Departments\"\n                                  data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                                  <option value=\"\" >All-Departments</option>\n                                  <option *ngFor=\"let a of Departments\" value={{a.dptName}} > {{a.dptName}} </option>\n                                </select>\n                                </div>\n                                <div class=\"col-md-2\">\n                                  <select value=\"0\"  formControlName=\"BranchName\"   [ngStyle]=\"{'background-color': searchForm.controls.BranchName.value ? 'gray' : 'white'}\"\n                                    class=\"form-control\" data-title=\"Single Select\" \n                                    data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                                    <option value=\"\">All-Branchs</option>\n                                    <option *ngFor=\"let a of Branchs\" value={{a.brnName}} > {{a.brnName}} </option>\n                                  </select>\n                                </div>\n                                <div class=\"col-md-2\">\n                                  <select value=\"0\"  formControlName=\"CompanyName\"  [ngStyle]=\"{'background-color': searchForm.controls.CompanyName.value ? 'gray' : 'white'}\"\n                                    class=\"form-control\" data-title=\"Single Select\" \n                                    data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                                    <option value=\"\">All-Companies</option>\n                                    <option *ngFor=\"let a of Companys\" value={{a.comName}} > {{a.comName}} </option>\n                                  </select>\n                                </div>\n                     \n                                <div class=\"col-md-2\">\n                                    <button type=\"button\" class=\"btn btn-primary pe-7s-search\"  (click)=\"searchFilter(searchForm.value)\"> Search </button> \n                                </div>\n                                <div class=\" col-md-2 marginsSearch \">\n                                  <input #search id=\"search\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\" aria-describedby=\"basic-addon1\" class=\"form-control\" >       \n                                </div>\n                              </div>\n                            </div>\n                          </form>\n                        <br><br>\n  \n                          <div id=\"print-section\" class=\"row card col-md-12 \" style=\"overflow-x:auto;\"  >\n                              <div class=\"content\">\n                                    <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                                              <!-- Table Headers -->\n                                              <thead>\n                                                    <tr>\n                                                      <th> \n                                                        <div class=\" form-check\">\n                                                          <label class=\" form-check-label\">\n                                                            <input id=\"assetItemALL--\" (change)=\"onSelectAll()\" class=\" form-check-input\"  type=\"checkbox\" value=\"\" />\n                                                            <span class=\" form-check-sign\">\n                                                              <span class=\" check\"> </span>\n                                                            </span>\n                                                          </label>\n                                                        </div>\n                                                      </th>\n                                                      <th>\n                                                        #\n                                                      </th>\n                                                      <th>\n                                                        Pic\n                                                      </th>\n                                                      <th>\n                                                        Name / Dpt\n                                                      </th>\n                                                      <th>\n                                                        Contacts\n                                                      </th>\n                                                      <th>\n                                                        Emails\n                                                      </th>\n                                                      <th>\n                                                       Company / Branch\n                                                      </th>\n                                                     \n                                                    </tr>\n                                              </thead>\n                                              <!-- Table Body -->\n                                              <tbody *ngIf=\"Employees.length == 0\" ><tr  [ngStyle]=\"{'color': 'red'}\" style=\"text-align:center;\"> No Enties Found</tr></tbody>\n                                              <tbody *ngIf=\"Employees.length > 0\" >\n                                                    <tr  *ngFor=\"let row of Employees | paginate: { itemsPerPage: pageSize, currentPage: pageIndex }; let i = index\">\n                                                      <td>\n                                                        <div class=\"form-check\">\n                                                          <label class=\" form-check-label\">\n                                                            <input id=\"assetItem--{{i}}\" class=\" form-check-input\" (change)=\"onSelect($event, row)\" [(ngModel)]=\"row.checkbox\" [value]=\"row.checkbox\" type=\"checkbox\" value=\"\" />\n                                                            <span class=\" form-check-sign\">\n                                                              <span class=\" check\"> </span>\n                                                            </span>\n                                                          </label>\n                                                        </div>\n                                                        <!-- <div *ngFor=\"let checkbox of checkboxes\">\n                                                          <input type=\"checkbox\" [(ngModel)]=\"checkbox.checked\" [value]=\"checkbox.value\"><span>{{checkbox.name}}</span>\n                                                      </div> -->\n                              \n                                                      </td>\n                                                      <td>\n                                                        {{ i+1 }}\n                                                      </td>\n                                                      <td>\n                                                          <img [src]=\"row.EmpImg\" width=\"100\" class=\"img-rounded\" >   \n                                                      </td>\n                                                      <td>\n                        \n                                                        - Name: {{ row?.empFullName }} <br>\n                                                        <!-- - Title: {{ row?.Position }} <br> -->\n                                                        - Dir Mng: {{ row?.DirectMngName}}\n                                                      </td>\n\n                                                      <td >\n                                                        - Ext: {{ row?.empExt }} <br>\n                                                        - Pri: {{ row?.empPri }}\n                                                       \n                                                        <ul >\n                                                          <li >     {{ row?.empMobile0 }}  </li>\n                                                          <li >     {{ row?.empMobile1 }}  </li>\n                                                          <li >     {{ row?.empMobile2 }}  </li>\n                                                        </ul>\n                                                      </td>\n                                                      <td >\n                                                        <ul >\n                                                          <li  *ngIf=\"row?.empIndividualEmail0 != null\">     {{ row?.empIndividualEmail0 }}  </li>\n                                                          <li  *ngIf=\"row?.empIndividualEmail1 != null\">     {{ row?.empIndividualEmail1 }}  </li>\n                                                          <li  *ngIf=\"row?.empIndividualEmail2 != null\">     {{ row?.empIndividualEmail2 }}  </li>\n                                                          <li  *ngIf=\"row?.empIndividualEmail3 != null\">     {{ row?.empIndividualEmail3 }}  </li>\n                                                        </ul>\n                                                      </td>\n                                                      <td>  \n                                                        - {{ row?.DepartmentName }} <br> \n                                                        - {{ row?.BranchName }} <br>\n                                                        - {{ row?.CompanyName }}  <br>\n                                                           \n                                                      </td>\n     \n                                                    </tr>\n                                              </tbody>\n                                    </table>\n                              </div> \n                          </div> \n                </div>\n              </div>\n              <div class=\"col-md-12\">\n                <div class=\"col-md-1\">\n                  <select class=\"col-md-1\" id=\"PerPage\" (change)=\"onChangeRowsPerPage($event)\" class=\"form-control col-sm-1\" >\n                    <option value=\"5\">#Rows</option>\n                    <option value=\"5\">5</option>\n                    <option value=\"10\">10</option>\n                    <option value=\"25\">25</option>\n                    <option value=\"50\">50</option>\n                    <option value=\"100\">100</option>\n             \n                    </select> \n                </div>\n                <div class=\"col-md-3\">\n                  <pagination-controls (pageChange)=\"pageIndex = $event\">    </pagination-controls>\n                </div>\n              </div>\n    </div>\n  \n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/employee/employee.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/employee/employee.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <ngx-alerts></ngx-alerts>\n  <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" ></ngx-loading>\n\n  <div class=\"container-fluid\">\n            <!-- Add-Edit Section -->\n            <div class=\"row\" [hidden]=\"getEmployeeId.value === null\"   >\n            <div class=\"card col-md-12\">\n                <form [formGroup]=\"employeeForm\" (ngSubmit)=\"onSubmit()\">\n                  <div class=\"content\">\n                    <h4>  Add/Edit Employee : (  {{ getCode.value }}     )  \n                      <span [ngStyle]=\"{'color': IsEmployeeActive ? 'black' : 'red'}\" >   <input id=\"EmployeeActive\" (click)=\"onActivate($event)\"  class=\" form-check-input\"  type=\"checkbox\" checked=\"checked\" value=\"checked\" />  Active  </span>\n                    </h4> \n                          <!-- Employee Profile-->\n                          <div class=\"row card col-md-12\" style=\"background-color:  #f9f9f9;\">\n                                    <br>\n                                    <div class=\"form-group col-md-2\">\n                                        <div class=\"col-md-2\">\n                                            <img [src]=\"getEmpImg.value || '../../../assets/img/profile/ProfilePhoto.png'\" [width]=\"65\" [height]=\"90\" class=\"img-rounded\" >\n                                        </div>\n                                        <div>\n                                            <input id=\"custom-input\" type=\"file\" (change)=\"onChangeChangeProfileImg($event)\">\n                                        </div>\n                                    </div>\n                                    <div class=\" form-group col-md-12\">\n                                                <div class=\"form-group col-md-3\">\n                                                              <label class=\"control-label\" for=\"\">First Name:\n                                                                <!-- <span class=\"star\">*</span> -->\n                                                                </label> \n                                                                <input type=\"text\" placeholder=\"First Name\" formControlName=\"empFirstName\" (keyup)=\"onFillFullName()\" class=\"form-control\" >\n                                                                <!-- <small [hidden]=\"employeeForm.controls.empFirstName.valid || employeeForm.controls.empFirstName.pristine\" class=\"text-danger\">\n                                                                  First Name is required.\n                                                                </small> -->\n                                                </div>\n                                                <div class=\"form-group col-md-4\">\n                                                            <label class=\"control-label\" for=\"\">Second Name:\n                                                              <!-- <span class=\"star\">*</span> -->\n                                                              </label>\n                                                              <input type=\"text\" placeholder=\"Second Name\" formControlName=\"empSecondName\" (keyup)=\"onFillFullName()\" class=\"form-control\" >\n                                                              <!-- <small [hidden]=\"employeeForm.controls.empSecondName.valid || employeeForm.controls.empSecondName.pristine\" class=\"text-danger\">\n                                                                Second Name is required.\n                                                              </small> -->\n                                                </div>\n                                                <div class=\"form-group col-md-3\">\n                                                            Last\n                                                            <label class=\"control-label\" for=\"\">Last Name:\n                                                              <!-- <span class=\"star\">*</span> -->\n                                                              </label>\n                                                              <input type=\"text\" placeholder=\"Last Name\" formControlName=\"empLastName\" (keyup)=\"onFillFullName()\" class=\"form-control\" >\n                                                              <!-- <small [hidden]=\"employeeForm.controls.empLastName.valid || employeeForm.controls.empLastName.pristine\" class=\"text-danger\">\n                                                                Last Name is required.\n                                                              </small> -->\n                                                </div> \n                                    </div>\n                                    <div class=\" form-group col-md-12\">\n                                                <div class=\"form-group col-md-6\">\n                                                  <label class=\"control-label\" for=\"\">Full Name:\n                                                    <span class=\"star\">*</span>\n                                                    </label>\n                                                    <input type=\"text\" placeholder=\"FirstName  SecondName  LastName\" required formControlName=\"empFullName\" class=\"form-control\" >\n                                                    <small [hidden]=\"employeeForm.controls.empFullName.valid || employeeForm.controls.empFullName.pristine\" class=\"text-danger\">\n                                                      Full Name is required.\n                                                    </small>\n                                                </div>\n                                                <div class=\"form-group col-md-2\">\n                                                  <label class=\"control-label\" for=\"\">AD Account :\n                                                    <!-- <span class=\"star\">*</span> -->\n                                                    </label>\n                                                    <input type=\"text\" placeholder=\"AD Account Name\" formControlName=\"accountName\" class=\"form-control\" >\n                                                    <!-- <small [hidden]=\"employeeForm.controls.accountName.valid || employeeForm.controls.accountName.pristine\" class=\"text-danger\">\n                                                      Account Name is required.\n                                                    </small> -->\n                                                </div>\n                                                <div class=\"form-group col-md-2\">\n                                                  <label class=\"control-label\" for=\"\">Gender:\n                                                    <!-- <span class=\"star\">*</span> -->\n                                                </label>\n                                                <select  (change)=\"onChangeEmpGender($event)\" value=\"Male\" class=\"form-control\" data-title=\"Single Select\" data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                                                  <option value=\"Male\">Male</option>\n                                                  <option value=\"Female\">Female</option>\n                                                </select> \n                                                \n                                                </div>\n                                    </div>\n                                    <div class=\" form-group col-md-12\">\n      \n                                          <div class=\"form-group col-md-2\">\n                                              <label  for=\"\" class=\"control-label\">HR Code:\n                                                  <span class=\"star\">*</span>   \n                                              </label> \n                                               <!-- {{ employeeForm.get('empId').value | json}} -->\n                                              <input type=\"text\" placeholder=\"XXXX 4 Digits  \" (keyup)=\"IsHRCodeExist($event)\"  class=\"form-control\" formControlName=\"empHRCode\" required>\n                                             \n                                              <small  *ngIf=\"CodePatternNotValid\" class=\"text-danger\">\n                                                - Code Format 4 Digits: XXXX   <br>\n                                              </small>\n                                              <small *ngIf=\"CodeExist\" class=\"text-danger\">\n                                                - Code already used.\n                                              </small>\n                                              <small [hidden]=\"CodeExist || employeeForm.controls.empHRCode.status == 'INVALID' \" style=\"color: green;\">\n                                                - Code is valid.\n                                              </small>\n                                        \n                                          </div>\n                                          <div class=\"form-group col-md-6\">\n                                              <label class=\"control-label\" for=\"\">Address:\n                                                <!-- <span class=\"star\">*</span> -->\n                                                </label>\n                                                <input type=\"text\" placeholder=\"Employee Full Name\" formControlName=\"empAddress\" class=\"form-control\" >\n                                                <!-- <small [hidden]=\"employeeForm.controls.empAddress.valid || employeeForm.controls.empAddress.pristine\" class=\"text-danger\">\n                                                  Address is required.\n                                                </small> -->\n                                          </div>\n                                          <div class=\"form-group col-md-2\">\n\n                                              <label class=\"control-label\" for=\"\">Birthday Date:\n                                                  <!-- <span class=\"star\">*</span> --> \n                                              </label> <span> {{ employeeForm.value.empBirhtday | json }}</span>\n                                              <div class=\"form-group\">\n                                                <input\n                                                formControlName=\"empBirhtday\"\n                                                class=\"form-control\"\n                                                #datepickerYMD=\"bsDatepicker\"\n                                                bsDatepicker\n                                                [bsConfig]=\"{ dateInputFormat: 'YYYY-MM-DD HH:mm' }\">\n                                                <!-- <input formControlName=\"empBirhtday\" type=\"text\" class=\"form-control datepicker\" placeholder=\"Date Picker Here\"/> -->\n                                              </div> \n                                              <!-- <small [hidden]=\"employeeForm.controls.Birthday.valid || employeeForm.controls.Birthday.pristine \" class=\"text-danger\">\n                                                    PR Date is required.\n                                              </small> -->\n                                          </div>\n                                    </div>\n                                    <div class=\" form-group col-md-12\">\n                                          <div class=\"form-group col-md-2\" >\n                                            <label class=\"control-label\" for=\"\">Company:\n                                              <!-- <span class=\"star\">*</span> -->\n                                          </label>\n                                          <select   (change)=\"onChangeCompanyId($event)\"  value=\"0\"  formControlName=\"comId\"\n                                          class=\"form-control\" data-title=\"Single Select\" data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                                          <option value=\"0\" >--Select--</option>\n                                            <option *ngFor=\"let com of Companys\" value={{com.comId}} >   {{com.comName}}</option>\n                                          </select> \n                                          <!-- <small [hidden]=\"employeeForm.controls.posId.valid || employeeForm.controls.posId.pristine\" class=\"text-danger\">\n                                            Company is required.\n                                          </small> -->\n                                          \n                                          </div>\n                                          <div class=\"form-group col-md-2\">\n                \n                                            <label class=\"control-label\" for=\"\">Department:\n                                              <!-- <span class=\"star\">*</span> -->\n                                          </label>\n                                          <select  (change)=\"onChangeDepartmentId($event)\"  value=\"0\"   formControlName=\"dptId\"\n                                          class=\"form-control\" data-title=\"Single Select\" data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                                            <option value=\"0\" >--Select--</option>\n                                            <option *ngFor=\"let dpt of Departments\" value={{dpt.dptId}} >   {{dpt.dptName}}   </option>\n                                          </select> \n                                          <!-- <small [hidden]=\"employeeForm.controls.dptId.valid || employeeForm.controls.dptId.pristine\" class=\"text-danger\">\n                                            Department is required.\n                                          </small> -->\n                                          </div>\n                                          <div class=\"form-group col-md-2\">\n                        \n                                            <label class=\"control-label\" for=\"\">Branch:\n                                              <!-- <span class=\"star\">*</span> -->\n                                          </label>\n                                          <select   (change)=\"onChangeBranchId($event)\"  value=\"0\"   formControlName=\"brnId\"  \n                                          class=\"form-control\" data-title=\"Single Select\" data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                                            <option value=\"0\" >--Select--</option>\n                                            <option *ngFor=\"let brn of Branchs\" value={{brn.brnId}} >\n                                                {{brn.brnName}}\n                                            </option>\n                        \n                                          </select> \n                                          <!-- <small [hidden]=\"employeeForm.controls.brnId.valid || employeeForm.controls.brnId.pristine\" class=\"text-danger\">\n                                            Branch is required.\n                                          </small> -->\n                                          </div>                          \n                                          <div class=\"form-group col-md-2\">\n                  \n                                              <label class=\"control-label\" for=\"\">Direct Manager: <span style=\"color: green;\" *ngIf=\"employeeForm.controls.DirectMngName.value\"> {{ employeeForm.controls.DirectMngName.value | json }} </span> \n                                              </label>\n                                         \n                                              <ngx-autocomplete\n                                                  formControlName=\"DirectMngName\" \n                                                  [searchKeyword]=\"'empFullName'\"\n                                                  [inputId]=\"'searchEmployee'\" \n                                                  [placeholderValue]=\"'Enter Direct Manager Name'\" \n                                                  [entries]=\"EmployeesList\" \n                                                \n                                                  (selectedValue)=\"selectDirectMngEvent($event)\">\n                                              </ngx-autocomplete>\n                                              <!-- <small [hidden]=\"!emailIsTaken1\" class=\"text-danger\">\n                                                This Email is duplicate .\n                                              </small>  -->\n                        \n                                          </div>\n                                          <div class=\"form-group col-md-2\">\n                                            <label class=\"control-label\" for=\"\">Position:\n                                              <!-- <span class=\"star\">*</span> -->\n                                          </label>\n                                          <select (change)=\"onChangePositionId($event)\" value=\"0\" formControlName=\"posId\" \n                                          class=\"form-control\" data-title=\"Single Select\" data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                                            <option value=\"0\" >--Select--</option>\n                                            <option *ngFor=\"let pos of Positions\" value={{pos.posId}} >\n                                                {{pos.posTitle}}\n                                            </option>\n                        \n                                          </select> \n                                          <!-- <small [hidden]=\"employeeForm.controls.posId.valid || employeeForm.controls.posId.pristine\" class=\"text-danger\">\n                                            Position is required.\n                                          </small> -->\n                                        \n                                          </div>\n                                    </div>\n                                    <div class=\" form-group col-md-12\">\n                                      <div class=\"form-group col-md-2\" >\n                                        <label class=\"control-label\" for=\"\">Office Ext:\n                                      </label>\n                                      <input type=\"text\" placeholder=\"Office Extention\" formControlName=\"empExt\" class=\"form-control\" >                     \n                                      </div>\n                                      <div class=\"form-group col-md-2\" >\n                                        <label class=\"control-label\" for=\"\">Office Pri:\n                                      </label>\n                                      <input type=\"text\" placeholder=\"Office Pri\" formControlName=\"empPri\" class=\"form-control\" >                     \n                                      </div>\n                                      <div class=\"form-group col-md-2\">\n                                        <label class=\"control-label\" for=\"\">Mobile 1:\n                                      </label>\n                                      <input type=\"text\" placeholder=\"Mobile 1\" formControlName=\"empMobile0\" class=\"form-control\" >                      \n                                      </div>\n                                      <div class=\"form-group col-md-2\">\n                                        <label class=\"control-label\" for=\"\">Mobile 2:\n                                      </label>\n                                      <input type=\"text\" placeholder=\"Mobile 2\" formControlName=\"empMobile1\" class=\"form-control\" >                       \n                                      </div>                          \n                                      <div class=\"form-group col-md-2\">\n                                          <label class=\"control-label\" for=\"\">Mobile 3: \n                                          </label>\n                                          <input type=\"text\" placeholder=\"Mobile 3\" formControlName=\"empMobile2\" class=\"form-control\" >\n                                      </div>\n                                    </div>\n                                    <div class=\"row form-group col-md-12\">\n                                            <div class=\"form-group col-md-2\">\n                                              <div class=\" form-check\">\n                                                <label class=\" form-check-label\">\n                                                  <input id=\"mailCheckBox\"   formControlName=\"mailCheckBox\" (click)=\"setEmails($event)\"  class=\" form-check-input\"  type=\"checkbox\" value=\"\" />\n                                                  <span class=\" form-check-sign\">\n                                                    <span class=\" check\"> Show Emails </span>\n                                                    <!-- {{employeeForm.value | json}} -->\n                                                  </span>\n                                                </label>\n                                         \n                                            </div>\n                                            </div>\n                                    </div>\n                          </div>\n                          <!-- Email Section -->\n                          <div class=\"row card col-md-12\" [hidden]=\"!getEmailCheckBox.value\" style=\"background-color:  #f9f9f9;\" >\n                            <br>\n                            <legend>  \n                                  Email Details:                        \n                            </legend>\n                            <!-- Individual -->\n                            <div class=\"col-md-3\" >\n                              <select class=\"form-control\"  (change)=\"onAddIndividualEmail(employeeForm.controls.emailsINDIV, 'onAdd', $event)\"   data-title=\"Single Select\" data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\" [value]=\"0\">\n                                <option value=\"0\" selected=\"true\">-- Add Individual Email --</option>\n                                <option *ngFor=\"let dom of Domains\" value={{dom.domId}} >   {{dom.domName}}</option>\n                              </select> \n                            </div>\n                            <div formArrayName=\"emailsINDIV\" class=\"col-md-12\">\n                                  <div *ngFor=\"let mail of getIndividualEmailsForm?.controls; let i = index\" >\n                                  <div [formGroupName]=\"i\" class=\"col-md-3\" >\n                                      <label> Individulal {{i+1 }} : <a (click)=\"deleteIndividualEmail(i)\" routerLink=\"active\" style=\"color: crimson;\" >   X </a>   </label>\n                                      <input  formControlName=\"emailAddress\" required type=\"email\" class=\"form-control\" placeholder=\"Email Address\"  />  \n                                     \n                                      <small [hidden]=\"getIndividualEmailsForm.controls[i].get('emailAddress').valid  \" class=\"text-danger\">\n                                          Use Email Format as myname@mydomain.com\n                                      </small>\n                                      <br>\n                                    </div>\n                              </div>\n                            </div>\n                            <!-- Archive -->\n                            <div formArrayName=\"emailsARCH\" class=\"col-md-12\">\n                              <legend></legend>\n                              <a  (click)=\"onAddArchiveEmail(getArchiveEmailsForm, getEmpArchivesForm , 'onAdd')\" routerLinkActive=\"active\" >Add Archive Email</a><br>\n                            <div *ngFor=\"let arch of getArchiveEmailsForm.controls; let i = index\" >\n                              <div [formGroupName]=\"i\" class=\"col-md-5\" >\n                                  <label *ngIf=\"arch.value.archName != null\" > Archive {{i+1 }} :   {{ arch.value.archName | json }}       </label> \n                                  <label *ngIf=\"arch.value.archName == null\" > Archive {{i+1 }} :   No Email Selected     </label> \n                                  <ngx-autocomplete\n                                        [formControlName]=\"'ADArchiveAccountId'\"\n                                        [searchKeyword]=\"'archName'\" \n                                        [inputId]=\"'searchArchEmail'\" \n                                        [placeholderValue]=\"'Enter Archive Email'\" \n                                        [entries]=\"ArchiveEmails\" \n                                        (selectedValue)=\"onSelectArchiveEmail(i, $event)\"\n                                  >\n                                  </ngx-autocomplete>\n                                  <a (click)=\"deleteArchiveEmail(i)\" routerLink=\"active\" style=\"color: crimson;\" > X </a> \n                              </div>\n                            </div>\n                            </div>\n                            <!-- Genaric -->\n                            <div formArrayName=\"emailsGEN\" class=\"col-md-12\">\n                              <legend></legend>\n                              <a  (click)=\"onAddGenaricEmail(getGenaricEmailsForm, getEmpGmailsForm , 'onAdd')\" routerLinkActive=\"active\" >Add Genaric Email</a><br>\n                            <div *ngFor=\"let mail of getGenaricEmailsForm.controls; let i = index\" >\n                              <div [formGroupName]=\"i\" class=\"col-md-5\" >\n                                  <label *ngIf=\"mail.value.genEmailAddress != null\" > Genaeic {{i+1 }} :   {{ mail.value.genEmailAddress | json }}       </label> \n                                  <label *ngIf=\"mail.value.genEmailAddress == null\" > Genaeic {{i+1 }} :   No Email Selected     </label> \n                                  <ngx-autocomplete\n                                        [formControlName]=\"'genEmailId'\"\n                                        [searchKeyword]=\"'genEmailAddress'\" \n                                        [inputId]=\"'searchGmail'\" \n                                        [placeholderValue]=\"'Enter Genaric Email'\" \n                                        [entries]=\"Gemails\" \n                                        (selectedValue)=\"onSelectGenaricEmail(i, $event)\"\n                                  >\n                                  </ngx-autocomplete>\n                                  <a (click)=\"deleteGenaricEmail(i)\" routerLink=\"active\" style=\"color: crimson;\" > X </a> \n                              </div>\n                            </div>\n                            </div>\n                            </div>\n                          <!-- Footer -->\n                          <div class=\"row footer col-md-12\">\n                            <!-- [disabled]=\"employeeForm.status == 'INVALID' \" -->\n                                  <button type=\"submit\" class=\"btn btn-primary pe-7s-diskette\" (click)=\"setStatus('AddAndClose')\" *ngIf=\"getEmployeeId.value == 0\" [disabled]=\"employeeForm.status == 'INVALID' \" > Add & Colse </button>\n                                  <button type=\"submit\" class=\"btn btn-primary pe-7s-diskette\" (click)=\"setStatus('AddAndAddAnother')\" *ngIf=\"getEmployeeId.value == 0\" [disabled]=\"employeeForm.status == 'INVALID' \"> Add & Add Another </button>\n                                  <button type=\"submit\" class=\"btn btn-primary pe-7s-diskette\" (click)=\"setStatus('Save')\" *ngIf=\"getEmployeeId.value > 0\" [disabled]=\"employeeForm.status == 'INVALID' \"> Save </button>\n                                  <button type=\"button\" (click)=\"onCancel()\" class=\"btn btn-primary pull-right\" > Cancel </button>\n                                  <!-- Form is:  {{ employeeForm.status }} -->\n                          </div>\n                  </div>\n                </form>\n            </div>\n            </div>\n            <!-- Statistics -->\n            <div class=\"row card col-md-12\" >\n                <div class=\"content \">\n    \n                  <a routerLink=\"/masterdata/employeeimport\" routerLinkActive=\"active\">Import Employees From AD</a>\n                  <br> \n                  <a routerLink=\"/masterdata/uploademployee\" routerLinkActive=\"active\">Upload Employees Excel</a>\n                  <br>\n                  <a routerLink=\"/masterdata/showadaccounts\" routerLinkActive=\"active\">Show AD Accounts</a>\n   \n                </div>\n            </div>\n\n            <!-- Employees List Section -->\n            <div class=\"row card col-md-12\" >\n              <div class=\"content\">\n              <br>\n              <h4 class=\"title\">Employees List</h4>\n\n                      <!-- Toolbar -->\n                      <form novalidate [formGroup]=\"searchForm\"> \n                        <div class=\"card col-md-12 toolbarCard\" >\n                          <div class=\" col-md-12\">\n                            <div class=\" col-md-4\" >\n                              <i class=\"pe-7s-add-user toolbarIcon\" (click)=\"onShowAddEdit()\"  ></i>    \n                              <i class=\"pe-7s-refresh-2 toolbarIcon\" (click)=\"onGetAllEmployees()\" ></i>   \n                              <i class=\"pe-7s-trash toolbarIcon\" (click)=\"onDeleteAllSellected()\" ></i>  \n                              <i class=\"pe-7s-cloud-download toolbarIcon\"  (click)=\"onExportExcel()\"  ></i>  \n                           </div>\n                            <div class=\" col-md-2\">\n                              <select id=\"PerPage\" (change)=\"onChangeRowsPerPage($event)\" class=\"marginsDropdownList form-control\" value=\"5\">\n                                <option value=\"5\">Rows</option>\n                                <option value=\"5\">5</option>\n                                <option value=\"10\">10</option>\n                                <option value=\"25\">25</option>\n                                <option value=\"50\">50</option>\n                                <option value=\"100\">100</option>\n                    \n                                </select> \n                            </div>\n                            <div class=\" col-md-6 marginsPaging\" >\n                              <pagination-controls  (pageChange)=\"pageIndex = $event\" > </pagination-controls>\n                            </div>\n                            <br>\n                          </div>\n                          <div class=\" col-md-12\">\n                            <div class=\" col-md-2\">\n                              <select formControlName=\"DepartmentName\" [ngStyle]=\"{'background-color': searchForm.controls.DepartmentName.value ? 'gray' : 'white'}\"\n                              class=\"form-control\" data-title=\"Single Select\" placeholder=\"Departments\"\n                              data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                              <option value=\"\" >All-Departments</option>\n                              <option *ngFor=\"let a of Departments\" value={{a.dptName}} > {{a.dptName}} </option>\n                            </select>\n                            </div>\n                            <div class=\"col-md-2\">\n                              <select value=\"0\"  formControlName=\"BranchName\"   [ngStyle]=\"{'background-color': searchForm.controls.BranchName.value ? 'gray' : 'white'}\"\n                                class=\"form-control\" data-title=\"Single Select\" \n                                data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                                <option value=\"\">All-Branchs</option>\n                                <option *ngFor=\"let a of Branchs\" value={{a.brnName}} > {{a.brnName}} </option>\n                              </select>\n                            </div>\n                            <div class=\"col-md-2\">\n                              <select value=\"0\"  formControlName=\"CompanyName\"  [ngStyle]=\"{'background-color': searchForm.controls.CompanyName.value ? 'gray' : 'white'}\"\n                                class=\"form-control\" data-title=\"Single Select\" \n                                data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                                <option value=\"\">All-Companies</option>\n                                <option *ngFor=\"let a of Companys\" value={{a.comName}} > {{a.comName}} </option>\n                              </select>\n                            </div>\n                 \n                            <div class=\"col-md-2\">\n                                <button type=\"button\" class=\"btn btn-primary pe-7s-search\"  (click)=\"searchFilter(searchForm.value)\"> Search </button> \n                            </div>\n                            <div class=\" col-md-2 marginsSearch \">\n                              <input #search id=\"search\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\" aria-describedby=\"basic-addon1\" class=\"form-control\" >       \n                            </div>\n                          </div>\n                        </div>\n                      </form>\n\n                        <div id=\"print-section\" class=\"row card col-md-12 \" style=\"overflow-x:auto;\"  >\n                            <div class=\"content\">\n                                  <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                                            <!-- Table Headers -->\n                                            <thead>\n                                                  <tr>\n                                                    <th> \n                                                      <div class=\" form-check\">\n                                                        <label class=\" form-check-label\">\n                                                          <input id=\"assetItemALL--\" (change)=\"onSelectAll()\" class=\" form-check-input\"  type=\"checkbox\" value=\"\" />\n                                                          <span class=\" form-check-sign\">\n                                                            <span class=\" check\"> </span>\n                                                          </span>\n                                                        </label>\n                                                      </div>\n                                                    </th>\n                                                    <th>\n                                                      #\n                                                    </th>\n                                                    <th>\n                                                      Pic\n                                                    </th>\n                                                    <th [class.active]=\"order === 'empHRCode'\" (click)=\"setOrder('empHRCode')\"\n                                                      class=\"mdl-data-table__cell--non-numeric\">\n                                                      Code <span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span>\n                                                    </th>\n                                                    <th [class.active]=\"order === 'empFullName'\" (click)=\"setOrder('empFullName')\">\n                                                      Full Name <span [hidden]=\"reverse\">▼</span>\n                                                      <span [hidden]=\"!reverse\">▲</span>\n                                                    </th>\n                                                    <th [class.active]=\"order === 'accountName'\" (click)=\"setOrder('accountName')\">\n                                                      Account Name <span [hidden]=\"reverse\">▼</span>\n                                                      <span [hidden]=\"!reverse\">▲</span>\n                                                    </th>\n                                                    <th [class.active]=\"order === 'PositionTitle?.posTitle'\" (click)=\"setOrder('PositionTitle?.posTitle')\" >\n                                                      Position <span [hidden]=\"reverse\">▼</span>\n                                                      <span [hidden]=\"!reverse\">▲</span>\n                                                    </th>\n                                                    <th [class.active]=\"order === 'empindividualEmail1'\" (click)=\"setOrder('empindividualEmail1')\">\n                                                      Assets <span [hidden]=\"reverse\">▼</span>\n                                                      <span [hidden]=\"!reverse\">▲</span>\n                                                    </th>\n                                                    <th [class.active]=\"order === 'GenaricEmail1?.genEmailAddress'\" (click)=\"setOrder('GenaricEmail1?.genEmailAddress')\"  >\n                                                      Department  <span [hidden]=\"reverse\">▼</span>\n                                                      <span [hidden]=\"!reverse\">▲</span>\n                                                    </th>\n                                                    <th [class.active]=\"order === 'GenaricEmail1?.archName'\" (click)=\"setOrder('GenaricEmail1?.archName')\"  >\n                                                      Branch  <span [hidden]=\"reverse\">▼</span>\n                                                      <span [hidden]=\"!reverse\">▲</span>\n                                                    </th>\n                                                    <th [class.active]=\"order === 'GenaricEmail1?.archName'\" (click)=\"setOrder('GenaricEmail1?.archName')\"  >\n                                                      Company  <span [hidden]=\"reverse\">▼</span>\n                                                      <span [hidden]=\"!reverse\">▲</span>\n                                                    </th>\n                                                    <th >\n                                                      Actions \n                                                    </th>\n                                                  </tr>\n                                            </thead>\n                                            <!-- Table Body -->\n                                            <tbody *ngIf=\"Employees.length == 0\" ><tr  [ngStyle]=\"{'color': 'red'}\" style=\"text-align:center;\"> No Enties Found</tr></tbody>\n                                            <tbody *ngIf=\"Employees.length > 0\" >\n                                                  <tr  *ngFor=\"let row of Employees | orderBy: order:reverse:'case-insensitive' | paginate: { itemsPerPage: pageSize, currentPage: pageIndex }; let i = index\">\n                                                    <td>\n                                                      <div class=\"form-check\">\n                                                        <label class=\" form-check-label\">\n                                                          <input id=\"assetItem--{{i}}\" class=\" form-check-input\" (change)=\"onSelect($event, row)\" [(ngModel)]=\"row.checkbox\" [value]=\"row.checkbox\" type=\"checkbox\" value=\"\" />\n                                                          <span class=\" form-check-sign\">\n                                                            <span class=\" check\"> </span>\n                                                          </span>\n                                                        </label>\n                                                      </div>\n                                                      <!-- <div *ngFor=\"let checkbox of checkboxes\">\n                                                        <input type=\"checkbox\" [(ngModel)]=\"checkbox.checked\" [value]=\"checkbox.value\"><span>{{checkbox.name}}</span>\n                                                    </div> -->\n                            \n                                                    </td>\n                                                    <td>\n                                                      {{ i+1 }}\n                                                    </td>\n                                                    <td>\n                                                        <img [src]=\"row.EmpImg\" width=\"25\" class=\"img-rounded\" >   \n                                                    </td>\n                                                    <td>{{ row?.empHRCode }}</td>\n                                                    <td>{{ row?.empFullName }}</td>  \n                                                    <td>{{ row?.accountName }}</td> \n                                                    <td>{{ row?.Position }}</td>\n                                                    <td >\n                                                      <span *ngIf=\"row.assetsCurrent?.length == 0\">No Assets</span>\n                                                      <ul *ngFor=\"let ast of row.assetsCurrent\" >\n                                                       \n                                                        <li *ngIf=\"ast != ''\" > ( {{ast.astCode}} ) {{ ast.astDescription}}  </li>\n                                                      </ul>\n                                                     \n                                                    </td>\n                                                    <td >\n                                                       {{ row.DepartmentName }} \n                                                    </td>\n                                                    <td >\n                                                      {{ row.BranchName }} \n                                                    </td>\n                                                    <td >\n                                                      {{ row.CompanyName }} \n                                                    </td>\n                                                    <td>\n                                                      <a (click)=\"onRegisterEmployee(row)\" class=\"btn btn-simple btn-warning btn-icon edit\"><i class=\"pe-7s-add-user\"></i></a>\n                                                      <a (click)=\"onEditEmployee(row)\" class=\"btn btn-simple btn-warning btn-icon edit\"><i class=\"fa fa-edit\"></i></a>\n                                                      <a (click)=\"onDeleteEmployee(row)\" class=\"btn btn-simple btn-danger btn-icon remove \"><i class=\"fa fa-times\"></i></a> \n                                                    </td>\n                                                  </tr>\n                                                  <tr>\n                                                    <td>\n                                                          <div  class=\"text-center\" style=\"color: red; width: auto\">\n                                                            <p *ngIf=\"Employees.length === 0\">\n                                                                No Entry found\n                                                            </p>\n                                                          </div>\n                                                    </td>\n                                                  </tr>\n                                            </tbody>\n                                  </table>\n                            </div> \n                        </div> \n              </div>\n            </div>\n            <div class=\"col-md-12\">\n              <div class=\"col-md-1\">\n                <select class=\"col-md-1\" id=\"PerPage\" (change)=\"onChangeRowsPerPage($event)\" class=\"form-control col-sm-1\" >\n                  <option value=\"5\">#Rows</option>\n                  <option value=\"5\">5</option>\n                  <option value=\"10\">10</option>\n                  <option value=\"25\">25</option>\n                  <option value=\"50\">50</option>\n                  <option value=\"100\">100</option>\n          \n                  </select> \n              </div>\n              <div class=\"col-md-3\">\n                <pagination-controls (pageChange)=\"pageIndex = $event\">    </pagination-controls>\n              </div>\n            </div>\n  </div>\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/employee/employeeimport/employeeimport.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/employee/employeeimport/employeeimport.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <ngx-alerts></ngx-alerts>\n    <div class=\"content\" >\n      <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" ></ngx-loading>\n    \n          <!-- Statistics -->\n          <div class=\"card row col-md-12\" >\n            <legend>      <h5 class=\"title\"> Accounts Statistics</h5>  </legend>\n            <div class=\"col-md-12\">\n                <div class=\"col-md-2\">           \n                  Total Employees:  <span style=\"color: black;\">  {{totalEmplyees}} </span>\n                </div>\n                <div class=\"col-md-2\">\n                  Employees:  <span style=\"color: black;\">  {{ActiveEmployeesNoHrCode}} </span>\n              \n                </div>\n                <div class=\"col-md-2\">\n                  No-HrCode:  <span style=\"color: red;\">  {{noHrCode}} </span>\n             \n                </div>\n                <div class=\"col-md-2\">\n                  Archive Accounts:  <span style=\"color: black;\"> {{ArchiveAccounts}} </span>\n            \n                </div>\n                <div class=\"col-md-2\">\n                  Service Accounts:  <span style=\"color: black;\">  {{ServiceAccounts}} </span>\n\n                </div>\n                <div class=\"col-md-2\">\n                  Total Imported Accounts: <span>  {{totalImportedEmplyees}} </span>\n            \n                </div>\n            </div> \n            <div class=\"col-md-12\">\n              <div class=\"col-md-2\">\n              Selected:  <span style=\"color: black;\">  {{selectedEmployess}} </span>\n              </div>\n              <div class=\"col-md-2\">\n                New Employees :  <span style=\"color: green;\">  {{newEmplyees}} </span>\n\n              </div>\n                <div class=\"col-md-2\">\n                  Emps Already Exist: <span  style=\"color: red;\">  {{aleadyExistEmplyees}} </span>\n           \n\n                </div>\n              <div class=\"col-md-2\">\n          \n            \n              </div>\n              <div class=\"col-md-2\">\n               InActive Accounts:  <span style=\"color: black;\">  {{InActiveAccounts}} </span>\n         \n              </div>\n              <div class=\"col-md-2\">\n                Active Accounts:  <span style=\"color: green;\">  {{ActiveAccounts}} </span>\n             \n              </div>\n            </div> \n            <br>\n              <a  routerLink=\"/masterdata/employee\" routerLinkActive=\"active\">Back to Employee List</a> <br> \n              <a  routerLink=\"/masterdata/showadaccounts\" routerLinkActive=\"active\">Show AD Accounts</a>\n          </div>\n    \n          <!-- Imported List -->\n          <div class=\"row card col-md-12\" >\n            <div class=\"content\">\n                  <br>\n                  <!-- Toolbar -->\n                  <div class=\"row card col-md-12 toolbarCard\" >\n                      <div class=\" col-md-3\" >\n                        <i class=\"pe-7s-users toolbarIcon\" (click)=\"ImportADEmployees()\" ></i>    \n                        <i class=\"pe-7s-diskette toolbarIcon\" (click)=\"onSaveToEmployeeList()\"  ></i>    \n                        <i class=\"pe-7s-refresh-2 toolbarIcon\" (click)=\"onGetAllImportedEmployees()\" ></i> \n                        <i class=\"pe-7s-cloud-download toolbarIcon\"  (click)=\"onExportExcel()\"></i>\n                        <i class=\"pe-7s-trash toolbarIcon\" (click)=\"onDeleteAllSellected()\" ></i>  \n                        <i class=\"pe-7s-print toolbarIcon\"  printTitle=\"MyTitle\" printSectionId=\"print-section\" ngxPrint></i>\n                    \n                      </div>\n                      <div class=\" col-md-2\">\n                        <select id=\"PerPage\" (change)=\"onChangeRowsPerPage($event)\" class=\"marginsDropdownList form-control\" value=\"5\">\n                          <option value=\"5\">Rows</option>\n                          <option value=\"5\">5</option>\n                          <option value=\"10\">10</option>\n                          <option value=\"25\">25</option>\n                          <option value=\"50\">50</option>\n                          <option value=\"100\">100</option>\n                  \n                          </select> \n                      </div>\n                      <div class=\" col-md-3 marginsPaging\" >\n                        <pagination-controls  (pageChange)=\"pageIndex = $event\" > </pagination-controls>\n                      </div>\n                      <div class=\"col-md-2\">\n                        <select \n                          (change)=\"onFilterByNoHrCode($event)\" class=\"form-control\" data-title=\"Single Select\" value=\"0\"\n                          data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                                  <option value=\"ShowAll\"> Show All </option>\n                                  <option value=\"No-HrCode\"> No-HrCode </option>\n                                  <option value=\"EmployeesAccs\"> Employees Accs </option>\n                                  <option value=\"ServiceAccounts\"> Service Accounts </option>\n                                  <option value=\"ArchiveAccounts\"> Archive Accounts </option>\n                                  <option value=\"ActiveEmpsNoCode\"> Active Emps NoCode </option>\n                                  <option value=\"NewEmps\"> New Emps ??</option>\n                                  <option value=\"AlreadyExist\"> Already Exist  ??</option>\n                        </select>\n                      </div>\n                      <div class=\" col-md-1 marginsSearch \">\n                        <input #search id=\"search\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\" aria-describedby=\"basic-addon1\" class=\"form-control\" >       \n                    \n                      </div>\n                  </div>\n                  <br><br>\n                  <div id=\"print-section\" class=\"row card col-md-12 \" style=\"overflow-x:auto;\"  >\n                      <div class=\"content\">\n                          <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\" >\n                            <thead>\n                              <tr>\n                                <th> \n                                  <div class=\" form-check\">\n                                    <label class=\" form-check-label\">\n                                      <input id=\"impEmpAllCheckBox--\" (change)=\"onSelectAll()\" class=\" form-check-input\"  type=\"checkbox\" value=\"\" />\n                                      <span class=\" form-check-sign\">\n                                        <span class=\" check\"> </span>\n                                      </span>\n                                    </label>\n                                  </div>\n                                </th>\n                                <th>\n                                  #\n                                </th>\n                                <th>\n                                  Type\n                                </th>\n                                <th [class.active]=\"order === 'IsExist'\" (click)=\"setOrder('IsExist')\">\n                                  Is Exist <span [hidden]=\"reverse\">▼</span> <span [hidden]=\"!reverse\">▲</span>\n                                </th>\n                                <th [class.active]=\"order === 'hrCode'\" (click)=\"setOrder('hrCode')\">\n                                  Hr Code <span [hidden]=\"reverse\">▼</span> <span [hidden]=\"!reverse\">▲</span>\n                                </th>\n                                <th [class.active]=\"order === 'accountName'\" (click)=\"setOrder('accountName')\">\n                                  Account Name <span [hidden]=\"reverse\">▼</span> <span [hidden]=\"!reverse\">▲</span>\n                                </th>\n                                <th [class.active]=\"order === 'firstName'\" (click)=\"setOrder('firstName')\">\n                                  First Name <span [hidden]=\"reverse\">▼</span>\n                                  <span [hidden]=\"!reverse\">▲</span>\n                                </th>\n                                <th [class.active]=\"order === 'lastName'\" (click)=\"setOrder('lastName')\">\n                                  Last Name <span [hidden]=\"reverse\">▼</span>\n                                  <span [hidden]=\"!reverse\">▲</span>\n                                </th>\n                                <th [class.active]=\"order === 'displayName'\" (click)=\"setOrder('displayName')\">\n                                  Display Name<span [hidden]=\"reverse\">▼</span>\n                                  <span [hidden]=\"!reverse\">▲</span>\n                                </th>\n                                <th [class.active]=\"order === 'email'\" (click)=\"setOrder('email')\">\n                                  Email <span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span>\n                                </th>\n                                <th >\n                                  Acc Enabled\n                                </th>\n                              </tr>\n                            </thead>\n                            <tbody *ngIf=\"Employees.length == 0\" ><tr [ngStyle]=\"{'color': 'red'}\" style=\"text-align:center;\"> No Enties Found </tr></tbody>\n                            <tbody *ngIf=\"Employees.length > 0\" >\n                              <tr *ngFor=\"let row of Employees | orderBy: order:reverse:'case-insensitive' | paginate: { itemsPerPage: pageSize, currentPage: pageIndex }; let i = index\" >\n                                <td>\n                                  <div class=\"form-check\">\n                                    <label class=\" form-check-label\">\n                                      <input id=\"assetItem--{{i}}\" class=\" form-check-input\" (change)=\"onSelect($event, row, i)\" \n                                      [(ngModel)]=\"row.checkbox\" [value]=\"row.checkbox\" type=\"checkbox\" value=\"\" />\n                                      <span class=\" form-check-sign\">\n                                        <span class=\" check\"> </span>\n                                      </span>\n                                    </label>\n                                  </div>\n                                </td>\n                                <td>\n                                  {{ i+1 }}\n                                </td>\n                                <td>\n                                  {{ row.accountType }}\n                                </td>\n                                <td *ngIf=\"row.IsExist == true\"  [ngStyle]=\"{'color': row.IsExist? 'red' : 'red'}\">{{ row.IsExist }}</td>\n                                <td *ngIf=\"row.IsExist == false\"  [ngStyle]=\"{'color': row.IsExist? 'green' : 'green'}\">{{ row.IsExist }}</td>\n                                <td  [ngStyle]=\"{'color': row?.hrCode? 'black' : 'red'}\">{{ row?.hrCode ? row?.hrCode : 'missed' }}</td> \n                                <td [style.color] = \"row.IsExist == true ? 'red' : 'green'\">{{ row?.accountName }}</td>\n                                <td>{{ row?.firstName }}</td>\n                                <td>{{ row?.lastName }}</td>\n                                <td>{{ row?.displayName }}</td>\n                                <td>{{ row?.email }}</td>\n                                <td> {{ row.enabled }} </td> \n                              </tr>\n                          \n                            </tbody>\n                            \n                          </table>\n                      </div>  \n                  </div>\n                  <div class=\"row col-md-12\">\n                    <div class=\"col-md-1\">\n                      <select class=\"col-md-1\" id=\"PerPage\" (change)=\"onChangeRowsPerPage($event)\" class=\"form-control col-sm-1\" >\n                        <option value=\"5\">#Rows</option>\n                        <option value=\"5\">5</option>\n                        <option value=\"10\">10</option>\n                        <option value=\"25\">25</option>\n                        <option value=\"50\">50</option>\n                        <option value=\"100\">100</option>\n                   \n                      </select> \n                    </div>\n                    <div class=\"col-md-6\">\n                      <pagination-controls (pageChange)=\"p = $event\">    </pagination-controls>\n                    </div>\n                  \n                  </div>\n\n            </div>\n          </div>\n    </div>\n </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/employee/showadaccounts/showadaccounts.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/employee/showadaccounts/showadaccounts.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" ></ngx-loading>\n    <ngx-alerts></ngx-alerts>\n      <div class=\"container-fluid\">\n        <div class=\"row\" >\n             <div class=\"card\">\n                    <div class=\"content\">\n                      <h4 class=\"title\">AD Accounts List</h4> \n                      <a  routerLink=\"/masterdata/employeeimport\" routerLinkActive=\"active\">Go To Import Page</a>\n              <br>    <a  routerLink=\"/masterdata/employee\" routerLinkActive=\"active\">Go To Employees Page</a>\n              <br>  \n                     \n                      <button type=\"button\" class=\"btn btn-primary pe-7s-diskette\" (click)=\"onShowBy()\"  > Refresh </button> <span style=\"color: red;\">         Accounts Imported from AD  </span> \n                      <div class=\" col-md-2\">\n                        <select id=\"PerPage\" (change)=\"onShowBy($event)\" class=\"marginsDropdownList form-control\" value=\"5\">\n                          <option value=\"ShowAll\">Show All</option>\n                          <option value=\"ServiceAccounts\">Service Accounts</option>\n                          <option value=\"ArchiveAccounts\">Archive Accounts</option>\n                        </select> \n                      </div>\n                    </div>\n                      <div class=\"fresh-datatables\">\n                        <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                        <!-- Table Headers -->\n                        <thead>\n                              <tr>\n                                <th >\n                                 #\n                                </th>\n                                <th >\n                                  Account Name\n                                </th>\n\n                              </tr>\n                        </thead>\n                        <!-- Table Body -->\n                        <tbody>\n                              <tr  *ngFor=\"let row of AllAccounts; let i = index\">\n                                <td>{{ i+1 }}</td>\n                                 <td *ngIf=\"row?.saName\" > {{ row?.saName }} </td>\n                                 <td *ngIf=\"row?.archName\" > {{ row?.archName }} </td>\n                              </tr>\n  \n                        </tbody>\n                        </table>\n                      </div>\n              </div>\n \n        </div>\n      </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/employee/uploademployee/uploademployee.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/employee/uploademployee/uploademployee.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n      <ngx-alerts></ngx-alerts>\n      <div class=\"content\" >\n                            <!-- Add-Edit -->\n                            <div class=\"row card col-md-12\" >\n                              <div class=\"content\" >\n                                        <form #f=\"ngForm\" novalidate >\n                                                  <h4 class=\"title\"> Employees Excel Upload </h4>\n                                                  <div class=\"row card col-md-12\" style=\"background-color:  #f9f9f9;\">\n                                                    <br>\n                                                      <div class=\"col-md-6\">\n                                                        <input class=\"form-control col-md-6\" type=\"file\" #fileInput />\n                                                      </div>\n                                                      <div class=\"col-md-2\">\n                                                        <button class=\"btn btn-primary\" (click)=\"uploadFile()\">Upload</button>\n                                                      </div>\n                                                      <br><br><br>\n                                                  </div>\n                                                    <div class=\"col-md-12\">\n                                                      The uploaded Employees will remain in hereunder list until you save it to the existing assets (Is Exist) column shows the status. \n                                                    </div>\n                                                    <div class=\"col-md-2\">    <a routerLink=\"/masterdata/employee\" routerLinkActive=\"active\">Back to Employees List</a>    </div>\n                                                    <div class=\"col-md-3\">    <a href=\"#\" (click)=\"download()\">Download Sample File of Employees</a>   <br>  <br>    </div>\n                                                    \n                                                  <div [hidden]=\"!loading\" > \n                                                    <img src=\"../../../../assets/animatedImg/loadingShip.gif\" alt=\"Moving Ship\" />\n                                                  </div>\n                                            <!-- </div> -->\n                                        </form>\n                              </div>\n                            </div>\n                            <!-- Statistics -->\n                            <div class=\"row card col-md-12\"  [hidden]=\"!showStatistics\">\n                              <div class=\"content\">\n                                  <br>\n                                  <a class=\"pull-right\" (click)=\"onShowHideStatistics()\" [hidden]=\"!showStatistics\">Hide Statistics</a>\n                                              \n                                              <legend>   \n                                                <h4 class=\"title\"> Uploaded Employees Statistics</h4> \n                                              </legend>\n                              \n                                              <div class=\"col-md-3\">\n                                                Duplicated Code: <span  style=\"color: red;\"> {{ isDuplicated }} </span> \n                                              </div>\n                                              <div class=\"col-md-3\">\n                                                Already Exist: <span  style=\"color: red;\">  {{ isExist }} </span>\n                                              </div>\n                                              <div class=\"col-md-3\">\n                                                New Employees :  <span style=\"color: green;\">  {{isNew}} </span>\n                                          \n                                              </div>\n                                              <div class=\"col-md-3\">\n                                              Total Uploaded: <span>  {{upLoadedEmployees}} </span>\n                                              </div>\n                                              <br><br>\n                                          <div class=\"col-md-3\">\n                                            No Company :  <span  style=\"color: red;\">   {{noCompany}} </span>\n                                          </div>\n                                          <div class=\"col-md-3\">\n                                            No Branch :  <span  style=\"color: red;\">   {{noBranch}} </span>\n                                          </div>\n                                          <div class=\"col-md-3\">\n                                            No Department :  <span  style=\"color: red;\">   {{noDepartment}} </span>\n                                          \n                                          </div>\n                                          <div class=\"col-md-3\">\n                                            No Hr Code: <span  style=\"color: red;\">  {{ noHrCode }} </span> \n                                          </div>\n                                          <br>\n                                          <br>\n                                          <div class=\"col-md-3\">\n                                            Selected:  <span style=\"color: black;\">  {{selectedEmployees}} </span>\n                                          </div>\n                                          <div class=\"col-md-3\">\n                                            No Dir Mngr:   <span  style=\"color: red;\">  {{noDirMngr}} </span>\n                                          </div>\n                                          <div class=\"col-md-3\">\n                                          -----\n                                          </div>\n                                          <div class=\"col-md-3\">\n                                          -----\n                                          </div>\n                                    <br>\n                              </div>\n                            </div>\n                            <!-- Employees List -->\n                            <div class=\"row card col-md-12\" >\n                              <div class=\"content\">\n                                  <div class=\"row col-md-12\" >\n                                        <div class=\"row col-md-6\">\n                                          <br>\n                                          <h4 class=\"title\">Preview Uploaded Employees List</h4>  \n                                        </div>\n                                        <div class=\"row col-md-6\">\n                                          <a class=\"pull-right\" (click)=\"onShowHideStatistics()\" [hidden]=\"showStatistics\">Show Statistics</a>\n                                          <a class=\"pull-right\" (click)=\"onShowHideStatistics()\" [hidden]=\"!showStatistics\">Hide Statistics</a><br> \n                                        </div>\n                                  </div>\n                                  <!-- Toolbar -->\n                                  <div class=\"row card col-md-12 toolbarCard \" >\n                                    <div class=\"content\">\n                                          <div class=\"col-md-3\" >\n                                            <i class=\"pe-7s-refresh-2 toolbarIcon\" (click)=\"onGetAllUploadedEmployees()\" ></i>\n                                            <i class=\"pe-7s-diskette toolbarIcon\" (click)=\"onSaveToEmployeesList()\" ></i>     \n                                            <i class=\"pe-7s-trash toolbarIcon\" (click)=\"onDeleteAllSellected()\" ></i>  \n                                          </div>\n                                          <div class=\"col-md-2\">\n                                            <select id=\"PerPage\" (change)=\"onChangeRowsPerPage($event)\" class=\"marginsDropdownList form-control\" value=\"5\">\n                                              <option value=\"5\">Rows</option>\n                                              <option value=\"5\">5</option>\n                                              <option value=\"10\">10</option>\n                                              <option value=\"25\">25</option>\n                                              <option value=\"50\">50</option>\n                                              <option value=\"100\">100</option>\n                                          \n                                              </select> \n                                          </div>\n                                          <div class=\"col-md-5 marginsPaging\" >\n                                            <pagination-controls  (pageChange)=\"pageIndex = $event\" > </pagination-controls>\n                                          </div>\n                                          <div class=\"col-md-2 marginsSearch \">\n                                            <input #search id=\"search\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\" aria-describedby=\"basic-addon1\" class=\"form-control\" >       \n                                          </div>\n                                    </div>\n                                  </div>\n                                  <!-- <div class=\"row col-md-12\">.</div> -->\n                                  <!-- Table -->\n                                  <div id=\"print-section\" class=\"row card col-md-12 \" style=\"overflow-x:auto;\"  >\n                                    <div class=\"content\">\n                                        <table  id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\"  width=\"100%\" style=\"width:100%\">\n                                          <thead>\n                                            <tr>\n                                              <th> \n                                                <div class=\" form-check\">\n                                                  <label class=\" form-check-label\">\n                                                    <input id=\"assetItemALL--\" (change)=\"onSelectAll($event)\" class=\" form-check-input\"  type=\"checkbox\" value=\"\" />\n                                                    <span class=\" form-check-sign\">\n                                                      <span class=\" check\"> </span>\n                                                    </span>\n                                                  </label>\n                                                </div>\n                                              </th>\n                                              <th> \n                                                #\n                                              </th>\n                                              <th [class.active]=\"order === 'IsExist'\" (click)=\"setOrder('IsExist')\">\n                                                Code <span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span>\n                                              </th>\n                                              <th [class.active]=\"order === 'astCode'\" (click)=\"setOrder('astCode')\">\n                                                Emp Name <span [hidden]=\"reverse\">▼</span>\n                                                <span [hidden]=\"!reverse\">▲</span>\n                                              </th>\n                                              <th [class.active]=\"order === 'Position'\" (click)=\"setOrder('Position')\">\n                                                Position <span [hidden]=\"reverse\">▼</span>\n                                                <span [hidden]=\"!reverse\">▲</span>\n                                              </th>\n                                              <th [class.active]=\"order === 'DirectMngName'\" (click)=\"setOrder('DirectMngName')\">\n                                                Direct Manager <span [hidden]=\"reverse\">▼</span>\n                                                <span [hidden]=\"!reverse\">▲</span>\n                                              </th>\n                                              <th [class.active]=\"order === 'DepartmentName'\" (click)=\"setOrder('DepartmentName')\">\n                                                Department <span [hidden]=\"reverse\">▼</span>\n                                                <span [hidden]=\"!reverse\">▲</span>\n                                              </th>\n                                              <th [class.active]=\"order === 'BranchName'\" (click)=\"setOrder('BranchName')\">\n                                                Branch <span [hidden]=\"reverse\">▼</span>\n                                                <span [hidden]=\"!reverse\">▲</span>\n                                              </th>\n                                              <th [class.active]=\"order === 'CompanyName'\" (click)=\"setOrder('CompanyName')\">\n                                                Company <span [hidden]=\"reverse\">▼</span>\n                                                <span [hidden]=\"!reverse\">▲</span>\n                                              </th>\n                                              <th [class.active]=\"order === 'astDescription'\" (click)=\"setOrder('astDescription')\" \n                                                class=\"mdl-data-table__cell--non-numeric\">\n                                                Ext / PRI / Mobiles<span [hidden]=\"reverse\">▼</span><span [hidden]=\"!reverse\">▲</span>\n                                              </th>\n                                              <th [class.active]=\"order === 'PartNumber'\" (click)=\"setOrder('PartNumber')\" >\n                                                Individual Emails <span [hidden]=\"reverse\">▼</span>\n                                                <span [hidden]=\"!reverse\">▲</span>\n                                              </th>\n                                              <th [class.active]=\"order === 'DialNumber'\" (click)=\"setOrder('DialNumber')\"    >\n                                                Genaric Emails <span [hidden]=\"reverse\">▼</span>\n                                                <span [hidden]=\"!reverse\">▲</span>\n                                              </th>\n                                              <th [class.active]=\"order === 'CircuitNumber'\" (click)=\"setOrder('CircuitNumber')\" >\n                                                Archives Emails <span [hidden]=\"reverse\">▼</span>\n                                                <span [hidden]=\"!reverse\">▲</span>\n                                              </th>\n                                            </tr>\n                                          </thead>\n                                          <tbody>\n                                            <tr  *ngFor=\"let row of Employees | orderBy: order:reverse:'case-insensitive' | paginate: { itemsPerPage: pageSize, currentPage: pageIndex }; let i = index\">\n                                              <td>\n                                                <div class=\"form-check\">\n                                                  <label class=\" form-check-label\">\n                                                    <input id=\"assetItem--{{i}}\" class=\" form-check-input\" (change)=\"onSelect($event, row)\" \n                                                    [(ngModel)]=\"row.checkbox\" [value]=\"row.checkbox\" type=\"checkbox\" value=\"\" />\n                                                    <span class=\" form-check-sign\">\n                                                      <span class=\" check\"> </span>\n                                                    </span>\n                                                  </label>\n                                                </div>\n                                              </td>\n                                              <td>\n                                                {{i+1}}\n                                              </td>\n                                              <td [ngStyle]=\"{'color': row?.duplicatHrCode? 'red' : 'black'}\" > \n\n                                                {{ row?.empHRCode }} <br>\n                                                <span *ngIf=\"row?.duplicatHrCode == true\" style=\"color: red;\"  >  duplicated  </span>\n                                              </td> \n                                              <td >\n                                                {{ row?.empFullName }}  \n                                              </td>\n                                              <td >\n                                                <span *ngIf=\"row?.Position == 'missing'\" style=\"color: red;\"  >    {{ row?.Position }}    </span>\n                                                <span *ngIf=\"row?.Position != 'missing'\"  >    {{ row?.Position }}    </span>\n                                              </td>\n                                              <td >             \n                                                <span *ngIf=\"row?.DirectMngName == 'missing'\" style=\"color: red;\"  >    {{ row?.DirectMngName }}    </span>\n                                                <span *ngIf=\"row?.DirectMngName != 'missing'\"  >    {{ row?.DirectMngName }}    </span>\n                                              </td>\n                                              <td >\n                                                <span *ngIf=\"row?.DepartmentName == 'missing'\" style=\"color: red;\"  >    {{ row?.DepartmentName }}    </span>\n                                                <span *ngIf=\"row?.DepartmentName != 'missing'\"  >    {{ row?.DepartmentName }}    </span>\n                                          \n                                              </td>\n                                              <td >\n                                                <span *ngIf=\"row?.BranchName == 'missing'\" style=\"color: red;\"  >    {{ row?.BranchName }}    </span>\n                                                <span *ngIf=\"row?.BranchName != 'missing'\"  >    {{ row?.BranchName }}    </span>\n                                              </td>\n                                              <td >\n                                                <span *ngIf=\"row?.CompanyName == 'missing'\" style=\"color: red;\"  >    {{ row?.CompanyName }}    </span>\n                                                <span *ngIf=\"row?.CompanyName != 'missing'\"  >    {{ row?.CompanyName }}    </span>\n                                              </td>\n                                              <td  >\n                                                 Ext: {{ row?.empExt }} -  Pri: {{ row?.empPri}} <br>\n                                                 <ul >\n                                                  <li  *ngIf=\"row?.empMobile0 != null\">  Mob 1:    {{ row?.empMobile0 }}  </li>\n                                                  <li  *ngIf=\"row?.empMobile1 != null\">  Mob 2:   {{ row?.empMobile1 }}  </li>\n                                                  <li  *ngIf=\"row?.empMobile2 != null\">  Mob 3:   {{ row?.empMobile2 }}  </li>\n                                                </ul>\n                                                \n                                                </td>\n                                              <td  >\n                                                <ul *ngFor=\"let mail of row.emailsINDIV\">\n                                                  <li *ngIf=\"mail != ''\" >  {{ mail.emailAddress }}  </li>\n                                                </ul>\n                                              </td>\n                                              <td  >\n                                                <ul *ngFor=\"let mail of row.emailsGEN\">\n                                                  <li *ngIf=\"mail != ''\" >  {{ mail.genEmailAddress }}  </li>\n                                                </ul>\n                                                \n                                              </td>\n                                              <td  >\n                                                <ul *ngFor=\"let mail of row.emailsARCH\">\n                                                  <li *ngIf=\"mail != ''\" >  {{ mail.archName }}  </li>\n                                                </ul>\n                                              </td>\n                 \n                                          </tbody>\n                                        </table>\n                                      </div>\n                                  </div>\n                                  <div class=\"row col-md-12\">\n                                    <div class=\"col-md-1\">\n                                      <select class=\"col-md-1\" id=\"PerPage\" (change)=\"onChangeRowsPerPage($event)\" class=\"form-control col-sm-1\" >\n                                        <option value=\"5\">#Rows</option>\n                                        <option value=\"5\">5</option>\n                                        <option value=\"10\">10</option>\n                                        <option value=\"25\">25</option>\n                                        <option value=\"50\">50</option>\n                                        <option value=\"100\">100</option>\n               \n                                      </select> \n                                    </div>\n                                    <div class=\"col-md-3\">\n                                      <pagination-controls (pageChange)=\"pageIndex = $event\">    </pagination-controls>\n                                      <br>\n                                    </div>\n                                  </div>\n                              </div>\n                            </div>\n      </div>\n    </div>\n</div>\n  \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/genaricemail/genaricemail.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/genaricemail/genaricemail.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" ></ngx-loading>\n    <ngx-alerts></ngx-alerts>\n      <div class=\"container-fluid\">\n        <div class=\"row\"   >\n              <div class=\"card col-md-12\">\n                <form [formGroup]=\"departmetForm\" (ngSubmit)=\"onSubmit()\">\n                <!-- <div class=\"content\"> -->\n          \n                        <div class=\"form-group col-md-12\">\n                              <legend>         \n                                Genaricemail ID: {{ getGenaricemailForm.genEmailId.value }}\n                              </legend>\n                              <div class=\"row card col-md-12\">\n                                  <div class=\"content\">\n                                    <div class=\"row card col-md-12\" style=\"background-color:  #f9f9f9;\">\n                                            <div class=\"form-group col-md-3\">\n                                              <label class=\"control-label\" for=\"\">Generic Email Name: <span class=\"star\">*</span> </label>\n                                              <input type=\"text\" placeholder=\"Genaricemail Name\" formControlName=\"genEmailAddress\"  class=\"form-control\" >\n                                              <small [hidden]=\"departmetForm.controls.genEmailAddress.valid || departmetForm.controls.genEmailAddress.pristine\" class=\"text-danger\">\n                                                    Genaricemail Name is required.\n                                              </small>\n                                            </div>\n                                            <div class=\"form-group col-md-3\">\n                                              <label class=\"control-label\" for=\"\">Excel File: </label>\n                                              <input type=\"file\" #fileInput />\n                                            </div>\n                                            <div class=\"form-group col-md-3\">\n                                              <label class=\"control-label\" for=\"\"> </label>\n                                              <button class=\"btn btn-primary\" (click)=\"uploadFile()\">Upload Excel File</button>\n                                            </div>\n                                            <div class=\"form-group col-md-3\">  \n                                              <label class=\"control-label\" for=\"\">  </label>\n                                                  <a href=\"#\" (click)=\"download()\">Download Sample File</a>    \n                                            </div>\n\n                                    </div>\n                                  </div>\n                              </div>\n\n                            <div class=\"footer\">\n                        \n                                    <button type=\"submit\" class=\"btn btn-primary pe-7s-diskette\" *ngIf=\"getGenaricemailForm.genEmailId.value == null\" [disabled]=\"departmetForm.status == 'INVALID' \"> Add </button> <!--  [disabled]=\"departmetForm.status == 'INVALID' \" -->\n                                    <button type=\"submit\" class=\"btn btn-primary pe-7s-diskette\" *ngIf=\"getGenaricemailForm.genEmailId.value != null\" [disabled]=\"departmetForm.status == 'INVALID' \"> Save </button> <!--*ngIf=\"getGenaricemailForm.genEmailId.value > 0\" [disabled]=\"departmetForm.status == 'INVALID' \"-->\n                                    <button type=\"button\" (click)=\"onCancel()\" class=\"btn btn-primary pull-right\" > Cancel </button>\n                            </div>\n                        </div>\n          \n                <!-- </div> -->\n              </form>\n        \n              </div>\n        </div>\n        <div class=\"row\" >\n             <div class=\"card\">\n                    <div class=\"content\">\n                      <h4 class=\"title\">Generic Emails List</h4>\n                    </div>\n                      <div class=\"fresh-datatables\">\n                        <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                        <!-- Table Headers -->\n                        <thead>\n                              <tr>\n                                <th >\n                                  ID \n                                </th>\n                                <th >\n                                  Genaricemail Name \n                                </th>\n                                <th >\n                                  Actions \n                                </th>\n                              </tr>\n                        </thead>\n                        <!-- Table Body -->\n                        <tbody  >\n                              <tr  *ngFor=\"let row of Genaricemails\">\n                                <td>{{ row?.genEmailId }}</td>\n                                <td>{{ row?.genEmailAddress }}</td>\n                                <td>\n                                  <a (click)=\"onEditGenaricemail(row)\" class=\"btn btn-simple btn-warning btn-icon edit\"><i class=\"fa fa-edit\"></i></a>\n                                  <a (click)=\"onDeleteGenaricemail(row)\" class=\"btn btn-simple btn-danger btn-icon remove \"><i class=\"fa fa-times\"></i></a> </td>\n                              </tr>\n                        </tbody>\n                        </table>\n                      </div>\n              </div>\n \n        </div>\n      </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/itemscategory/itemscategory.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/itemscategory/itemscategory.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" ></ngx-loading>\n    <ngx-alerts></ngx-alerts>\n      <div class=\"container-fluid\">\n        <div class=\"row\"   >\n              <div class=\"card col-md-12\">\n                <form [formGroup]=\"ItemsCategoryForm\" (ngSubmit)=\"onSubmit()\">\n                <!-- <div class=\"content\"> -->\n          \n                        <div class=\"form-group col-md-12\">\n                              <legend>         \n                                ItemsCategory ID: {{ getItemsCategoryForm.icId.value }}\n                              </legend>\n                            <div class=\"row\">\n                              <div class=\"form-group col-md-3\">\n                                <label class=\"control-label\" for=\"\">ItemsCategory Name: <span class=\"star\">*</span> </label>\n                                <input type=\"text\" placeholder=\"ItemsCategory Name\" formControlName=\"icName\"  class=\"form-control\" >\n                                <small [hidden]=\"ItemsCategoryForm.controls.icName.valid || ItemsCategoryForm.controls.icName.pristine\" class=\"text-danger\">\n                                      ItemsCategory Name is required.\n                                </small>\n                              </div>\n                       \n                            </div>\n                            <div class=\"footer\">\n                        \n                                    <button type=\"submit\" class=\"btn btn-primary pe-7s-diskette\" *ngIf=\"getItemsCategoryForm.icId.value == null\" [disabled]=\"ItemsCategoryForm.status == 'INVALID' \"> Add </button> <!--  [disabled]=\"ItemsCategoryForm.status == 'INVALID' \" -->\n                                    <button type=\"submit\" class=\"btn btn-primary pe-7s-diskette\" *ngIf=\"getItemsCategoryForm.icId.value != null\" [disabled]=\"ItemsCategoryForm.status == 'INVALID' \"> Save </button> <!--*ngIf=\"getItemsCategoryForm.icId.value > 0\" [disabled]=\"ItemsCategoryForm.status == 'INVALID' \"-->\n                                    <button type=\"button\" (click)=\"onCancel()\" class=\"btn btn-primary pull-right\" > Cancel </button>\n                            </div>\n                        </div>\n          \n                <!-- </div> -->\n              </form>\n        \n              </div>\n        </div>\n        <div class=\"row\" >\n             <div class=\"card\">\n                    <div class=\"content\">\n                      <h4 class=\"title\">Categories List</h4>\n                    </div>\n                      <div class=\"fresh-datatables\">\n                        <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                        <!-- Table Headers -->\n                        <thead>\n                              <tr>\n                                <th >\n                                  ID \n                                </th>\n                                <th >\n                                  ItemsCategory Name \n                                </th>\n                                <th >\n                                  Actions \n                                </th>\n                              </tr>\n                        </thead>\n                        <!-- Table Body -->\n                        <tbody  >\n                              <tr  *ngFor=\"let row of ItemsCategorys\">\n                                <td>{{ row?.icId }}</td>\n                                <td>{{ row?.icName }}</td>\n                                <td>\n                                  <a (click)=\"onEditItemsCategory(row)\" class=\"btn btn-simple btn-warning btn-icon edit\"><i class=\"fa fa-edit\"></i></a>\n                                  <a (click)=\"onDeleteItemsCategory(row)\" class=\"btn btn-simple btn-danger btn-icon remove \"><i class=\"fa fa-times\"></i></a> </td>\n                              </tr>\n                        </tbody>\n                        </table>\n                      </div>\n              </div>\n \n        </div>\n      </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/operator/operator.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/operator/operator.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" ></ngx-loading>\n    <ngx-alerts></ngx-alerts>\n      <div class=\"container-fluid\">\n        <div class=\"row\"   >\n              <div class=\"card col-md-12\">\n                <form [formGroup]=\"OperatorForm\" (ngSubmit)=\"onSubmit()\">\n                <!-- <div class=\"content\"> -->\n          \n                        <div class=\"form-group col-md-12\">\n                              <legend>         \n                                Operator ID: {{ getOperatorForm.oprId.value }}\n                              </legend>\n                            <div class=\"row\">\n                              <div class=\"form-group col-md-3\">\n                                <label class=\"control-label\" for=\"\">Operator Name: <span class=\"star\">*</span> </label>\n                                <input type=\"text\" placeholder=\"Operator Name\" formControlName=\"oprName\"  class=\"form-control\" >\n                                <small [hidden]=\"OperatorForm.controls.oprName.valid || OperatorForm.controls.oprName.pristine\" class=\"text-danger\">\n                                      Operator Name is required.\n                                </small>\n                              </div>\n<!--                \n                              <div class=\"form-group col-md-3\">\n                                <label class=\"control-label\" for=\"\">Operator Code: <span class=\"star\">*</span> </label>\n                                <input type=\"text\" placeholder=\"Operator Code\" formControlName=\"OperatorCode\"  class=\"form-control\" >\n                                <small [hidden]=\"OperatorForm.controls.OperatorCode.valid || OperatorForm.controls.OperatorCode.pristine\" class=\"text-danger\">\n                                      Operator Name is required.\n                                </small>\n                              </div> -->\n                            </div>\n                            <div class=\"footer\">\n                        \n                                    <button type=\"submit\" class=\"btn btn-primary pe-7s-diskette\" *ngIf=\"getOperatorForm.oprId.value == null\" [disabled]=\"OperatorForm.status == 'INVALID' \"> Add </button> <!--  [disabled]=\"OperatorForm.status == 'INVALID' \" -->\n                                    <button type=\"submit\" class=\"btn btn-primary pe-7s-diskette\" *ngIf=\"getOperatorForm.oprId.value != null\" [disabled]=\"OperatorForm.status == 'INVALID' \"> Save </button> <!--*ngIf=\"getOperatorForm.oprId.value > 0\" [disabled]=\"OperatorForm.status == 'INVALID' \"-->\n                                    <button type=\"button\" (click)=\"onCancel()\" class=\"btn btn-primary pull-right\" > Cancel </button>\n                            </div>\n                        </div>\n          \n                <!-- </div> -->\n              </form>\n        \n              </div>\n        </div>\n        <div class=\"row\" >\n             <div class=\"card\">\n                    <div class=\"content\">\n                      <h4 class=\"title\">Operators List</h4>\n                    </div>\n                      <div class=\"fresh-datatables\">\n                        <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                        <!-- Table Headers -->\n                        <thead>\n                              <tr>\n                                <th >\n                                  ID \n                                </th>\n                                <th >\n                                  Operator Name \n                                </th>\n                                <th >\n                                  Actions \n                                </th>\n                              </tr>\n                        </thead>\n                        <!-- Table Body -->\n                        <tbody  >\n                              <tr  *ngFor=\"let row of Operators\">\n                                <td>{{ row?.oprId }}</td>\n                                <td>{{ row?.oprName }}</td>\n                                <td>\n                                  <a (click)=\"onEditOperator(row)\" class=\"btn btn-simple btn-warning btn-icon edit\"><i class=\"fa fa-edit\"></i></a>\n                                  <a (click)=\"onDeleteOperator(row)\" class=\"btn btn-simple btn-danger btn-icon remove \"><i class=\"fa fa-times\"></i></a> </td>\n                              </tr>\n                        </tbody>\n                        </table>\n                      </div>\n              </div>\n \n        </div>\n      </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/operatorrateplan/operatorrateplan.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/operatorrateplan/operatorrateplan.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" ></ngx-loading>\n    <ngx-alerts></ngx-alerts>\n      <div class=\"container-fluid\">\n        <div class=\"row\"   >\n              <div class=\"card col-md-12\">\n                <form [formGroup]=\"OperatorForm\" (ngSubmit)=\"onSubmit()\">\n                <!-- <div class=\"content\"> -->\n          \n                        <div class=\"form-group col-md-12\">\n                              <legend>         \n                                 Rate Paln ID: {{ getOperatorForm.OperatorRatePlanId.value }}\n                              </legend>\n                            <div class=\"row\">\n                              <div class=\" col-md-3\">\n                                <label class=\"control-label\" for=\"\">Operators: <span class=\"star\">*</span> </label>\n                                <select formControlName=\"oprId\"   value=\"\"\n                                class=\"form-control\" data-title=\"Single Select\" placeholder=\"Operators\"\n                                data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                                <option *ngFor=\"let a of Operators\" value={{a.oprId}} > {{a.oprName}} </option>\n                                <small [hidden]=\"OperatorForm.controls.oprId.valid || OperatorForm.controls.oprId.pristine\" class=\"text-danger\">\n                                  Operator is required.\n                            </small>\n                              </select>\n                              </div>\n                              <div class=\"form-group col-md-3\">\n                                <label class=\"control-label\" for=\"\">Plan Name: <span class=\"star\">*</span> </label>\n                                <input type=\"text\" placeholder=\"Plan Name\" formControlName=\"OperatorRatePlanName\"  class=\"form-control\" >\n                                <small [hidden]=\"OperatorForm.controls.OperatorRatePlanName.valid || OperatorForm.controls.OperatorRatePlanName.pristine\" class=\"text-danger\">\n                                      OperatorRatePaln Name is required.\n                                </small>\n                              </div>\n<!--                \n                              <div class=\"form-group col-md-3\">\n                                <label class=\"control-label\" for=\"\">OperatorRatePaln Code: <span class=\"star\">*</span> </label>\n                                <input type=\"text\" placeholder=\"OperatorRatePaln Code\" formControlName=\"OperatorCode\"  class=\"form-control\" >\n                                <small [hidden]=\"OperatorForm.controls.OperatorCode.valid || OperatorForm.controls.OperatorCode.pristine\" class=\"text-danger\">\n                                      OperatorRatePaln Name is required.\n                                </small>\n                              </div> -->\n                            </div>\n                            <div class=\"footer\">\n                        \n                                    <button type=\"submit\" class=\"btn btn-primary pe-7s-diskette\" *ngIf=\"getOperatorForm.OperatorRatePlanId.value == null\" [disabled]=\"OperatorForm.status == 'INVALID' \"> Add </button> <!--  [disabled]=\"OperatorForm.status == 'INVALID' \" -->\n                                    <button type=\"submit\" class=\"btn btn-primary pe-7s-diskette\" *ngIf=\"getOperatorForm.OperatorRatePlanId.value != null\" [disabled]=\"OperatorForm.status == 'INVALID' \"> Save </button> <!--*ngIf=\"getOperatorForm.oprId.value > 0\" [disabled]=\"OperatorForm.status == 'INVALID' \"-->\n                                    <button type=\"button\" (click)=\"onCancel()\" class=\"btn btn-primary pull-right\" > Cancel </button>\n                            </div>\n                        </div>\n          \n                <!-- </div> -->\n              </form>\n        \n              </div>\n        </div>\n        <div class=\"row\" >\n             <div class=\"card\">\n                    <div class=\"content\">\n                      <h4 class=\"title\">Plans List</h4>\n                    </div>\n                      <div class=\"fresh-datatables\">\n                        <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                        <!-- Table Headers -->\n                        <thead>\n                              <tr>\n                                <th >\n                                  ID \n                                </th>\n                                <th >\n                                  OperatorRatePaln Name \n                                </th>\n                                <th >\n                                  Operator Name \n                                </th>\n                                <th >\n                                  Actions \n                                </th>\n                              </tr>\n                        </thead>\n                        <!-- Table Body -->\n                        <tbody  >\n                              <tr  *ngFor=\"let row of Plans\">\n                                <td>{{ row?.OperatorRatePlanId }}</td>\n                                <td>{{ row?.OperatorRatePlanName }}</td>\n                                <td>{{ row?.OperatorName }}</td>\n                                <td>\n                                  <a (click)=\"onEditOperator(row)\" class=\"btn btn-simple btn-warning btn-icon edit\"><i class=\"fa fa-edit\"></i></a>\n                                  <a (click)=\"onDeleteOperator(row)\" class=\"btn btn-simple btn-danger btn-icon remove \"><i class=\"fa fa-times\"></i></a> </td>\n                              </tr>\n                        </tbody>\n                        </table>\n                      </div>\n              </div>\n \n        </div>\n      </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/opraccnumber/opraccnumber.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/opraccnumber/opraccnumber.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" ></ngx-loading>\n  <ngx-alerts></ngx-alerts>\n    <div class=\"container-fluid\">\n      <div class=\"row\"   >\n            <div class=\"card col-md-12\">\n              <form [formGroup]=\"AccountNumberForm\" (ngSubmit)=\"onSubmit()\">\n              <!-- <div class=\"content\"> -->\n        \n                      <div class=\"form-group col-md-12\">\n                            <legend>         \n                              Account Number ID: {{ getOperatorForm.OprAccNumberId.value }}\n                            </legend>\n                          <div class=\"row\">\n                            <div class=\" col-md-3\">\n                              <label class=\"control-label\" for=\"\">Operators: <span class=\"star\">*</span> </label>\n                              <select formControlName=\"oprId\"   value=\"\"\n                              class=\"form-control\" data-title=\"Single Select\" placeholder=\"Operators\"\n                              data-style=\"btn-default btn-block\" data-menu-style=\"dropdown-blue\">\n                              <option *ngFor=\"let a of Operators\" value={{a.oprId}} > {{a.oprName}} </option>\n                              <small [hidden]=\"AccountNumberForm.controls.oprId.valid || AccountNumberForm.controls.oprId.pristine\" class=\"text-danger\">\n                                Operator is required.\n                          </small>\n                            </select>\n                            </div>\n                            <div class=\"form-group col-md-3\">\n                              <label class=\"control-label\" for=\"\">Plan Name: <span class=\"star\">*</span> </label>\n                              <input type=\"text\" placeholder=\"Acc Number\" formControlName=\"OprAccNumberName\"  class=\"form-control\" >\n                              <small [hidden]=\"AccountNumberForm.controls.OprAccNumberName.valid || AccountNumberForm.controls.OprAccNumberName.pristine\" class=\"text-danger\">\n                                    OperatorRatePaln Name is required.\n                              </small>\n                            </div>\n<!--                \n                            <div class=\"form-group col-md-3\">\n                              <label class=\"control-label\" for=\"\">OperatorRatePaln Code: <span class=\"star\">*</span> </label>\n                              <input type=\"text\" placeholder=\"OperatorRatePaln Code\" formControlName=\"OperatorCode\"  class=\"form-control\" >\n                              <small [hidden]=\"AccountNumberForm.controls.OperatorCode.valid || AccountNumberForm.controls.OperatorCode.pristine\" class=\"text-danger\">\n                                    OperatorRatePaln Name is required.\n                              </small>\n                            </div> -->\n                          </div>\n                          <div class=\"footer\">\n                      \n                                  <button type=\"submit\" class=\"btn btn-primary pe-7s-diskette\" *ngIf=\"getOperatorForm.OprAccNumberId.value == null\" [disabled]=\"AccountNumberForm.status == 'INVALID' \"> Add </button> <!--  [disabled]=\"AccountNumberForm.status == 'INVALID' \" -->\n                                  <button type=\"submit\" class=\"btn btn-primary pe-7s-diskette\" *ngIf=\"getOperatorForm.OprAccNumberId.value != null\" [disabled]=\"AccountNumberForm.status == 'INVALID' \"> Save </button> <!--*ngIf=\"getOperatorForm.oprId.value > 0\" [disabled]=\"AccountNumberForm.status == 'INVALID' \"-->\n                                  <button type=\"button\" (click)=\"onCancel()\" class=\"btn btn-primary pull-right\" > Cancel </button>\n                          </div>\n                      </div>\n        \n              <!-- </div> -->\n            </form>\n      \n            </div>\n      </div>\n      <div class=\"row\" >\n           <div class=\"card\">\n                  <div class=\"content\">\n                    <h4 class=\"title\">Accounts # List</h4>\n                  </div>\n                    <div class=\"fresh-datatables\">\n                      <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                      <!-- Table Headers -->\n                      <thead>\n                            <tr>\n                              <th >\n                                ID \n                              </th>\n                              <th >\n                                OperatorRatePaln Name \n                              </th>\n                              <th >\n                                Operator Name \n                              </th>\n                              <th >\n                                Actions \n                              </th>\n                            </tr>\n                      </thead>\n                      <!-- Table Body -->\n                      <tbody  >\n                            <tr  *ngFor=\"let row of AccountsNumbers\">\n                              <td>{{ row?.OprAccNumberId }}</td>\n                              <td>{{ row?.OprAccNumberName }}</td>\n                              <td>{{ row?.OperatorName }}</td>\n                              <td>\n                                <a (click)=\"onEditOperator(row)\" class=\"btn btn-simple btn-warning btn-icon edit\"><i class=\"fa fa-edit\"></i></a>\n                                <a (click)=\"onDeleteOperator(row)\" class=\"btn btn-simple btn-danger btn-icon remove \"><i class=\"fa fa-times\"></i></a> </td>\n                            </tr>\n                      </tbody>\n                      </table>\n                    </div>\n            </div>\n\n      </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/position/position.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/position/position.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" ></ngx-loading>\n    <ngx-alerts></ngx-alerts>\n      <div class=\"container-fluid\">\n        <div class=\"row\"   >\n              <div class=\"card col-md-12\">\n                <form [formGroup]=\"positionForm\" (ngSubmit)=\"onSubmit()\">\n                        <div class=\"form-group col-md-12\">\n                              <legend>         \n                                Position ID: {{ getPositionForm.posId.value }}\n                              </legend>\n                            <div class=\"row\">\n                              <div class=\"form-group col-md-3\">\n                                <label class=\"control-label\" for=\"\">Position Name: <span class=\"star\">*</span> </label>\n                                <input type=\"text\" placeholder=\"Position Name\" formControlName=\"posTitle\"  class=\"form-control\" >\n                                <small [hidden]=\"positionForm.controls.posTitle.valid || positionForm.controls.posTitle.pristine\" class=\"text-danger\">\n                                      Position Name is required.\n                                </small>\n                              </div>\n                            </div>\n                            <div class=\"footer\">\n                                    <button type=\"submit\" class=\"btn btn-primary pe-7s-diskette\" *ngIf=\"getPositionForm.posId.value == null\" [disabled]=\"positionForm.status == 'INVALID' \"> Add </button> <!--  [disabled]=\"positionForm.status == 'INVALID' \" -->\n                                    <button type=\"submit\" class=\"btn btn-primary pe-7s-diskette\" *ngIf=\"getPositionForm.posId.value != null\" [disabled]=\"positionForm.status == 'INVALID' \"> Save </button> <!--*ngIf=\"getPositionForm.posId.value > 0\" [disabled]=\"positionForm.status == 'INVALID' \"-->\n                                    <button type=\"button\" (click)=\"onCancel()\" class=\"btn btn-primary pull-right\" > Cancel </button>\n                            </div>\n                        </div>\n              </form>\n         </div>\n        </div>\n        <div class=\"row\" >\n             <div class=\"card\">\n                    <div class=\"content\">\n                      <h4 class=\"title\">Positions List</h4>\n                    </div>\n                      <div class=\"fresh-datatables\">\n                        <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                        <!-- Table Headers -->\n                        <thead>\n                              <tr>\n                                <th >\n                                  ID \n                                </th>\n                                <th >\n                                  Position Name \n                                </th>\n                                <th >\n                                  Actions \n                                </th>\n                              </tr>\n                        </thead>\n                        <!-- Table Body -->\n                        <tbody  >\n                              <tr  *ngFor=\"let row of Positions\">\n                                <td>{{ row?.posId }}</td>\n                                <td>{{ row?.posTitle }}</td>\n                                <td>\n                                  <a (click)=\"onEditPosition(row)\" class=\"btn btn-simple btn-warning btn-icon edit\"><i class=\"fa fa-edit\"></i></a>\n                                  <a (click)=\"onDeletePosition(row)\" class=\"btn btn-simple btn-danger btn-icon remove \"><i class=\"fa fa-times\"></i></a> </td>\n                              </tr>\n                        </tbody>\n                        </table>\n                      </div>\n              </div>\n \n        </div>\n      </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/supplier/supplier.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/supplier/supplier.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" ></ngx-loading>\n    <ngx-alerts></ngx-alerts>\n      <div class=\"container-fluid\">\n        <div class=\"row\"   >\n              <div class=\"card col-md-12\">\n                <form [formGroup]=\"SupplierForm\" (ngSubmit)=\"onSubmit()\">\n                        <div class=\"form-group col-md-12\">\n                              <legend>         \n                                Supplier ID: {{ getSupplierForm.splId.value }}\n                              </legend>\n                            <div class=\"row\">\n                              <div class=\"form-group col-md-3\">\n                                <label class=\"control-label\" for=\"\">Supplier Name: <span class=\"star\">*</span> </label>\n                                <input type=\"text\" placeholder=\"Supplier Name\" formControlName=\"splName\"  class=\"form-control\" >\n                                <small [hidden]=\"SupplierForm.controls.splName.valid || SupplierForm.controls.splName.pristine\" class=\"text-danger\">\n                                      Supplier Name is required.\n                                </small>\n                              </div>\n                            </div>\n                            <div class=\"footer\">\n                                    <button type=\"submit\" class=\"btn btn-primary pe-7s-diskette\"  *ngIf=\"getSupplierForm.splId.value == null\" [disabled]=\"SupplierForm.status == 'INVALID' \"> Add </button> <!--  [disabled]=\"SupplierForm.status == 'INVALID' \" -->\n                                    <button type=\"submit\" class=\"btn btn-primary pe-7s-diskette\"  *ngIf=\"getSupplierForm.splId.value != null\" [disabled]=\"SupplierForm.status == 'INVALID' \"> Save </button> <!--*ngIf=\"getSupplierForm.splId.value > 0\" [disabled]=\"SupplierForm.status == 'INVALID' \"-->\n                                    <button type=\"button\" (click)=\"onCancel()\" class=\"btn btn-primary pull-right\" > Cancel </button>\n                            </div>\n                        </div>\n              </form>     \n              </div>\n        </div>\n        <div class=\"row\" >\n             <div class=\"card\">\n                    <div class=\"content\">\n                      <h4 class=\"title\">Suppliers List</h4>\n                    </div>\n                      <div class=\"fresh-datatables\">\n                        <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                        <thead>\n                              <tr>\n                                <th >\n                                  ID \n                                </th>\n                                <th >\n                                  Supplier Name \n                                </th>\n                                <th >\n                                  Actions \n                                </th>\n                              </tr>\n                        </thead>\n                        <tbody  >\n                              <tr  *ngFor=\"let row of Suppliers; let i = index\">\n                                <td>{{ i+1 }}</td>\n                                <td>{{ row?.splName }}</td>\n                                <td>\n                                  <a (click)=\"onEditSupplier(row)\" class=\"btn btn-simple btn-warning btn-icon edit\"><i class=\"fa fa-edit\"></i></a>\n                                  <a (click)=\"onDeleteSupplier(row)\" class=\"btn btn-simple btn-danger btn-icon remove \"><i class=\"fa fa-times\"></i></a> </td>\n                              </tr>\n                        </tbody>\n                        </table>\n                      </div>\n              </div>\n \n        </div>\n      </div>\n</div>");

/***/ }),

/***/ "./src/app/masterdata/asset/asset.component.css":
/*!******************************************************!*\
  !*** ./src/app/masterdata/asset/asset.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n/* .toolbarIcon{\r\n    font-size: 25px;\r\n    color: black;\r\n    padding-top: 13px;\r\n    padding-bottom: 7px;\r\n    padding-right: 10px;\r\n    padding-left: 10px;\r\n    cursor: pointer;\r\n\r\n}\r\n.toolbarIcon:hover {\r\n    margin-top: 6px;\r\n    font-size: 28px;\r\n    color: blue;\r\n    padding-top: 7px;\r\n    padding-bottom: 7px;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    cursor: pointer;\r\n    border: 1px solid #f9f9f900;\r\n    background-color: white;\r\n} */\r\n\r\n.toolbarIcon{\r\n    font-size: 25px;\r\n    color: black;\r\n    padding-top: 13px;\r\n    padding-bottom: 7px;\r\n    padding-right: 10px;\r\n    padding-left: 10px;\r\n    cursor: pointer;\r\n    /* box-shadow: 1px 2px grey; */\r\n}\r\n\r\n.toolbarIcon:hover {\r\n    margin-top: 6px;\r\n    font-size: 28px;\r\n    color: blue;\r\n    padding-top: 7px;\r\n    padding-bottom: 7px;\r\n    padding-right: 11px;\r\n    padding-left: 11px;\r\n    cursor: pointer;\r\n    border: 1px solid #f9f9f900;\r\n    background-color: white;\r\n}\r\n\r\n.marginsDropdownList{\r\n    margin-top: 8px;\r\n    padding-top: 7px;\r\n    padding-bottom: 7px;\r\n}\r\n\r\n.marginsPaging{\r\n    margin-top: 8px;\r\n    padding-top: 7px;\r\n    padding-bottom: 7px;\r\n}\r\n\r\n.marginsSearch{\r\n    /* margin-right: 10px; */\r\n    padding-top: 7px;\r\n    padding-bottom: 7px;\r\n}\r\n\r\n.toolbarCard{\r\n    box-shadow: 1px 1px 1px 1px grey; \r\n    /* margin: auto; */\r\n    /* height: 40px; */\r\n    background-color: #f9f9f9;\r\n    border: 1px solid rgb(212, 212, 212);\r\n}\r\n\r\n/* #f9f9f9; */\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyZGF0YS9hc3NldC9hc3NldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQkc7O0FBRUg7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsOEJBQThCO0FBQ2xDOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsdUJBQXVCO0FBQzNCOztBQUdBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLG9DQUFvQztBQUN4Qzs7QUFHQSxhQUFhIiwiZmlsZSI6InNyYy9hcHAvbWFzdGVyZGF0YS9hc3NldC9hc3NldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuLyogLnRvb2xiYXJJY29ue1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZy10b3A6IDEzcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbn1cclxuLnRvb2xiYXJJY29uOmhvdmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y5ZjlmOTAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn0gKi9cclxuXHJcbi50b29sYmFySWNvbntcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmctdG9wOiAxM3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAvKiBib3gtc2hhZG93OiAxcHggMnB4IGdyZXk7ICovXHJcbn1cclxuLnRvb2xiYXJJY29uOmhvdmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y5ZjlmOTAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4ubWFyZ2luc0Ryb3Bkb3duTGlzdHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG59XHJcbi5tYXJnaW5zUGFnaW5ne1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbn1cclxuLm1hcmdpbnNTZWFyY2h7XHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDEwcHg7ICovXHJcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcclxufVxyXG4udG9vbGJhckNhcmR7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggZ3JleTsgXHJcbiAgICAvKiBtYXJnaW46IGF1dG87ICovXHJcbiAgICAvKiBoZWlnaHQ6IDQwcHg7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMiwgMjEyLCAyMTIpO1xyXG59XHJcblxyXG5cclxuLyogI2Y5ZjlmOTsgKi9cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/masterdata/asset/asset.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/masterdata/asset/asset.component.ts ***!
  \*****************************************************/
/*! exports provided: AssetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetComponent", function() { return AssetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_asset_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/asset.service */ "./src/app/masterdata/asset/services/asset.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _employee_services_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../employee/services/employee.service */ "./src/app/masterdata/employee/services/employee.service.ts");
/* harmony import */ var _assettype_services_assettype_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assettype/services/assettype.service */ "./src/app/masterdata/assettype/services/assettype.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/__ivy_ngcc__/fesm5/ngx-order-pipe.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_exportexcel_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/services/exportexcel.service */ "./src/app/shared/services/exportexcel.service.ts");
/* harmony import */ var _branch_services_branch_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../branch/services/branch.service */ "./src/app/masterdata/branch/services/branch.service.ts");
/* harmony import */ var _company_services_company_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../company/services/company.service */ "./src/app/masterdata/company/services/company.service.ts");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/__ivy_ngcc__/fesm5/ngx-alerts.js");
/* harmony import */ var app_shared_services_sweetalert_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/shared/services/sweetalert.service */ "./src/app/shared/services/sweetalert.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _operator_services_operator_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../operator/services/operator.service */ "./src/app/masterdata/operator/services/operator.service.ts");
/* harmony import */ var app_shared_services_logs_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/shared/services/logs.service */ "./src/app/shared/services/logs.service.ts");
/* harmony import */ var app_shared_services_shareddata_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/shared/services/shareddata.service */ "./src/app/shared/services/shareddata.service.ts");
/* harmony import */ var _department_services_department_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../department/services/department.service */ "./src/app/masterdata/department/services/department.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



















var AssetComponent = /** @class */ (function () {
    function AssetComponent(router, dptSrv, brnSrv, comSrv, shrdSrv, logSrv, astSrv, astTypeSrv, empSrv, oprSrv, expExcelSrv, orderPipe, fb, alrtSrv, swalSrv) {
        this.router = router;
        this.dptSrv = dptSrv;
        this.brnSrv = brnSrv;
        this.comSrv = comSrv;
        this.shrdSrv = shrdSrv;
        this.logSrv = logSrv;
        this.astSrv = astSrv;
        this.astTypeSrv = astTypeSrv;
        this.empSrv = empSrv;
        this.oprSrv = oprSrv;
        this.expExcelSrv = expExcelSrv;
        this.orderPipe = orderPipe;
        this.fb = fb;
        this.alrtSrv = alrtSrv;
        this.swalSrv = swalSrv;
        this.totalLaptops = 0;
        this.totalDesktops = 0;
        this.totalMiFis = 0;
        this.totalMobiles = 0;
        this.totalAssets = 0;
        this.totalScreens = 0;
        this.totalPrinters = 0;
        this.totalServers = 0;
        this.totalDataLines = 0;
        this.selectedAssets = 0;
        this.noCompany = 0;
        this.noBranch = 0;
        this.noEmployee = 0;
        this.totalVoiceLines = 0;
        this.noAssetType = 0;
        this.hideAssetTypeLaptop = true;
        this.hideAssetTypeDesktop = true;
        this.hideAssetTypeServer = true;
        this.hideAssetTypeStorage = true;
        this.hideAssetTypeMobile = true;
        this.hideAssetTypeMiFi = true;
        this.hideAssetTypeOthers = true;
        this.hideAssetTypeVoiceLine = true;
        this.hideAssetTypeDataLine = true;
        this.IsScrap = false;
        this.comIdValue = 0;
        this.showCodeGuide = false;
        this.showStatistics = false;
        this.CodeExist = false;
        this.DailNumberExist = false;
        this.DailNumberUnValid = false;
        this.SerialNumberExist = false;
        this.SerialNumberUnValid = false;
        this.AssetTemp = {};
        this.loading = false;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.fullNameKeyword = 'empFullName';
        this.temp = [];
        this.Assets = [];
        this.order = "info.name";
        this.reverse = false;
        this.Plans = [];
        this.Accounts = [];
        this.SelectedAssets = [];
        this.AssetTypes = [];
        this.Branchs = [];
        this.Departments = [];
        this.Operators = [];
        this.Employees = [];
        this.EmployeesList = [];
        this.Companys = [];
        this.currentDate = new Date();
        this.notificationMessage = '';
        /////////// Filters ////////////////////
        this.AssetTypeNameIsSelected = false;
        this.CompanyNameIsSelected = false;
        this.BranchNameIsSelected = false;
        this.DepartmentNameIsSelected = false;
        this.sortedCollection = orderPipe.transform(this.Assets, 'astDescription');
    }
    AssetComponent.prototype.notifcationMessegeTimer = function (messege) {
        var _this = this;
        //   
        var x = setInterval(function () {
            return _this.notificationMessage = '';
        }, 10000);
        return this.notificationMessage = messege;
    };
    AssetComponent.prototype.onUpdatestatistics = function () {
        var _this = this;
        debugger;
        this.totalLaptops = 0;
        this.totalDesktops = 0;
        this.totalMobiles = 0;
        this.totalMiFis = 0;
        this.noBranch = 0;
        this.totalScreens = 0;
        this.totalPrinters = 0;
        this.totalServers = 0;
        this.totalDataLines = 0;
        this.totalVoiceLines = 0;
        this.selectedAssets = 0;
        this.noCompany = 0;
        this.noEmployee = 0;
        this.selectedAssets = this.SelectedAssets.length;
        this.totalAssets = this.Assets.length;
        this.Assets.forEach(function (a) {
            // 
            if (a.AssetTypeName == "Laptop") {
                _this.totalLaptops += 1;
            }
            if (a.AssetTypeName == 'Desktop') {
                _this.totalDesktops += 1;
            }
            if (a.AssetTypeName == 'Mobile') {
                _this.totalMobiles += 1;
            }
            if (a.AssetTypeName == 'MiFi') {
                _this.totalMiFis += 1;
            }
            if (a.AssetTypeName == 'Desktop') {
                _this.totalDesktops += 1;
            }
            if (a.AssetTypeName == 'Screen') {
                _this.totalScreens += 1;
            }
            if (a.AssetTypeName == 'DataLine') { // need review
                _this.totalDataLines += 1;
            }
            if (a.AssetTypeName == 'VoiceLine') {
                _this.totalVoiceLines += 1;
            }
            if (a.EmployeeName == null) {
                _this.noEmployee += 1;
            }
            if (a.BranchName == null) {
                _this.noBranch += 1;
            }
            if (a.CompanyName == null) {
                _this.noCompany += 1;
            }
            ;
        });
    };
    AssetComponent.prototype.onAssetCodePatternValidation = function () {
    };
    AssetComponent.prototype.getCodePattern = function (AssetTypeName) {
        if (AssetTypeName == 'Laptop' || AssetTypeName == 'Desktop' || AssetTypeName == 'Server' || AssetTypeName == 'Storage') {
            this.assetForm.get('astCode').clearValidators();
            this.assetForm.get('astCode').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(100)?[0-9]{3}$/)]);
            this.assetForm.get('astCode').updateValueAndValidity();
        }
        else if (AssetTypeName == 'Mobile' || AssetTypeName == 'MiFi') {
            this.assetForm.get('astCode').clearValidators();
            this.assetForm.get('astCode').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(200)?[0-9]{3}$/)]);
            this.assetForm.get('astCode').updateValueAndValidity();
        }
        else if (AssetTypeName == 'DataLine' || AssetTypeName == 'VoiceLine') {
            this.assetForm.get('astCode').clearValidators();
            this.assetForm.get('astCode').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(300)?[0-9]{3}$/)]);
            this.assetForm.get('astCode').updateValueAndValidity();
        }
        else if (AssetTypeName == 'Others') {
            this.assetForm.get('astCode').clearValidators();
            this.assetForm.get('astCode').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(400)?[0-9]{3}$/)]);
            this.assetForm.get('astCode').updateValueAndValidity();
        }
    };
    AssetComponent.prototype.ngOnInit = function () {
        this.buildAssetForm();
        this.buildSearchForm();
        this.onGetAllEmployees();
        this.onGetAllDepartments();
        this.onGetAllBranchs();
        this.onGetAllCompanys();
        this.onGetAllAssetsTypes();
        this.onGetAllAssets();
        this.onGetAllOperators();
        this.getCodePattern('Laptop');
        $('.datepicker').datetimepicker({
            format: 'MM/DD/YYYY',
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove'
            }
        });
    };
    AssetComponent.prototype.buildAssetForm = function () {
        this.assetForm = this.fb.group({
            astId: null,
            astDescription: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            astCode: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(100)?[0-9]{3}$/)]],
            astSerialNumber: null,
            astPartNumber: null,
            astDialNumber: null,
            astCircuitNumber: null,
            astPurchaseDate: this.currentDate,
            Charging: 'Business',
            IsScrap: false,
            asttypId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            empId: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            oprId: null,
            OprAccNumberId: null,
            OperatorRatePlanId: null,
            checkbox: false,
            assignedToEmp: false,
            AssetTypeName: null,
            AssetTypeCode: null,
            EmployeeName: null,
            FromEmployeeName: "Created",
            ToEmployeeName: null,
            currentUserId: null
        });
    };
    AssetComponent.prototype.checkTypeFilterSelection = function (e) {
        debugger;
        if (e != "") {
            this.AssetTypeNameIsSelected = true;
        }
        if (e == "") {
            this.AssetTypeNameIsSelected = false;
        }
    };
    AssetComponent.prototype.checkCompanyFilterSelection = function (e) {
        debugger;
        if (e != "") {
            this.CompanyNameIsSelected = true;
        }
        if (e == "") {
            this.CompanyNameIsSelected = false;
        }
    };
    AssetComponent.prototype.checkBranchFilterSelection = function (e) {
        debugger;
        if (e != "") {
            this.BranchNameIsSelected = true;
        }
        if (e == "") {
            this.BranchNameIsSelected = false;
        }
    };
    AssetComponent.prototype.checkDepartmentFilterSelection = function (e) {
        debugger;
        if (e != "") {
            this.DepartmentNameIsSelected = true;
        }
        if (e == "") {
            this.DepartmentNameIsSelected = false;
        }
    };
    AssetComponent.prototype.buildSearchForm = function () {
        this.searchForm = this.fb.group({
            DepartmentName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            BranchName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            CompanyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            AssetTypeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    };
    AssetComponent.prototype.searchFilter = function (filters) {
        var _this = this;
        this.loading = true;
        this.astSrv.getAllAssets().subscribe(function (assets) {
            debugger;
            _this.Employees = [];
            _this.Assets = assets;
            Object.keys(filters).forEach(function (key) { return filters[key] === '' ? delete filters[key] : key; });
            var keys = Object.keys(filters);
            var filterEmps = function (ass) { return keys.every(function (key) { return ass[key] === filters[key]; }); };
            var asses = _this.Assets.filter(filterEmps);
            _this.Assets = asses;
            _this.loading = false;
            _this.onUpdatestatistics();
            _this.pageIndex = 1;
        });
    };
    AssetComponent.prototype.onChangeComId = function (e) {
        // 
        this.assetForm.get('comId').setValue(e.target.value);
    };
    AssetComponent.prototype.onChangeBrnId = function (e) {
        this.assetForm.get('brnId').setValue(e.target.value);
    };
    AssetComponent.prototype.onChangeOperatorId = function (e) {
        var _this = this;
        debugger;
        this.assetForm.get('oprId').setValue(e.target.value);
        this.astSrv.GetOperatorPlansByOpId(e.target.value).subscribe(function (res) {
            debugger;
            _this.Plans = res;
        });
        this.astSrv.GetAccountsNumbersByOpId(e.target.value).subscribe(function (res) {
            _this.Accounts = res;
            debugger;
        });
    };
    AssetComponent.prototype.onGetAllAssets = function () {
        var _this = this;
        this.loading = true;
        this.astSrv.getAllAssets().subscribe(function (asts) {
            debugger;
            _this.loading = false;
            _this.Assets = asts;
            _this.temp = asts;
            _this.pageIndex = 1;
            _this.onUpdatestatistics();
        }, function (err) {
            _this.alrtSrv.danger('Server Error');
            _this.loading = false;
        });
    };
    AssetComponent.prototype.onGetAllAssetsTypes = function () {
        var _this = this;
        //    
        this.astTypeSrv.getAllAssetsTypes().subscribe(function (astTypes) {
            _this.AssetTypes = [];
            _this.AssetTypes = astTypes;
        });
    };
    AssetComponent.prototype.onGetAllEmployees = function () {
        var _this = this;
        this.empSrv.getAllEmployees().subscribe(function (emps) {
            _this.Employees = emps;
            emps.forEach(function (e) {
                var employee = { empId: 0, empFullName: '' };
                employee.empId = e.empId;
                employee.empFullName = e.empFullName;
                if (employee.empFullName != null) {
                    _this.EmployeesList.push(employee);
                }
            });
        });
    };
    AssetComponent.prototype.onGetAllOperators = function () {
        var _this = this;
        this.oprSrv.getAllOperators().subscribe(function (oprs) {
            _this.Operators = oprs;
        });
    };
    AssetComponent.prototype.onGetAllCompanys = function () {
        var _this = this;
        this.loading = true;
        this.comSrv.getAllCompanys().subscribe(function (coms) {
            _this.Companys = coms;
        }, function (error) {
            _this.loading = false;
            if (error.message.includes('Http failure response for http://')) {
                _this.alrtSrv.danger('Server error');
            }
        });
    };
    AssetComponent.prototype.onGetAllDepartments = function () {
        var _this = this;
        this.dptSrv.getAllDepartments().subscribe(function (dpts) {
            _this.Departments = dpts;
        });
    };
    AssetComponent.prototype.onGetAllBranchs = function () {
        var _this = this;
        this.brnSrv.getAllBranchs().subscribe(function (brns) {
            _this.Branchs = brns;
        });
    };
    AssetComponent.prototype.onAssignToEmp = function (e) {
        if (e.target.checked) {
            this.assetForm.controls.assignedToEmp.setValue(true);
        }
        else if (!e.target.checked) {
            this.assetForm.controls.assignedToEmp.setValue(false);
            this.assetForm.controls.empId.setValue('');
        }
    };
    AssetComponent.prototype.selectEmployeeEvent = function (event) {
        this.assetForm.controls['empId'].setValue(event.empId);
        this.assetForm.controls['EmployeeName'].setValue(event.empFullName);
        this.assetForm.controls['ToEmployeeName'].setValue(event.empFullName);
    };
    AssetComponent.prototype.onFocused = function (e) {
        //
        // do something when input is focused
    };
    AssetComponent.prototype.onSubmit = function (status) {
        var _this = this;
        this.loading = true;
        //   debugger;
        this.shrdSrv.getCurrentUser().subscribe(function (res) {
            _this.assetForm.get('currentUserId').setValue(res.usrId);
        });
        if (this.assetForm.value.astId == 0) {
            var finalDate = new Date(this.getPRDate.value).toLocaleString();
            this.assetForm.get('astPurchaseDate').setValue(finalDate);
            this.astSrv.addAsset(this.assetForm.value).subscribe(function (ast) {
                _this.onGetAllAssets();
                if (status == 'AddAndClose') {
                    _this.assetForm.reset();
                    _this.CodeExist = false;
                    _this.loading = false;
                    _this.alrtSrv.success('Asset Created Successfully');
                    // this.logSrv.sendUserLog('Asset Created Successfully').subscribe(res=>{
                    //   this.logSrv.sendAssetTrackingLog(ast,  "Created", ast.EmployeeName).subscribe(res=>{
                    //   });
                    // });
                }
                else if (status == 'AddAndAddAnother') {
                    _this.CodeExist = false;
                    _this.loading = false;
                    _this.alrtSrv.success('Asset Created Successfully');
                    _this.assetForm.controls['astCode'].setValue('');
                    // this.logSrv.sendUserLog('Asset Created Successfully').subscribe(res=>{
                    //   debugger;
                    //   this.logSrv.sendAssetTrackingLog(ast,  "Created", ast.EmployeeName).subscribe(res=>{
                    //   });
                    // });
                }
            }, function (err) {
                _this.alrtSrv.danger('Server Error');
                _this.loading = false;
            });
        }
        else if (this.assetForm.value.astId > 0) {
            this.astSrv.editAsset(this.assetForm.controls.astId.value, this.assetForm.value).subscribe(function (ast) {
                debugger;
                console.log(ast);
                _this.loading = false;
                _this.onGetAllAssets();
                _this.alrtSrv.success('Asset Saved Successfully');
                // let to = this.getEmployeeName.value;
                // if(ast){
                //   this.assetForm.reset();
                //   this.CodeExist = false;
                //   this.onGetAllAssets();
                //   // this.logSrv.sendUserLog('Asset Saved Successfully').subscribe(res=>{
                //   //     if(this.AssetTemp.EmployeeName != to){
                //   //       this.logSrv.sendAssetTrackingLog(ast, this.AssetTemp.EmployeeName, to).subscribe(res=>{
                //   //         this.onGetAllAssets();
                //   //       });
                //   //     }
                //   //     this.onGetAllAssets();
                //   // });
                // }
            }, function (err) {
                debugger;
                _this.logSrv.sendUserLog("Server connection Error ( " + err + " )");
                _this.loading = false;
            });
        }
    };
    AssetComponent.prototype.IsDialNumberExist = function () {
        var is = false;
        this.Assets.forEach(function (x) { if (x.astDialNumber != '') {
            is = true;
        } });
        return is;
    };
    AssetComponent.prototype.IsCircuitNumberExist = function () {
        var is = false;
        this.Assets.forEach(function (x) { if (x.astCircuitNumber != '') {
            is = true;
        } });
        return is;
    };
    AssetComponent.prototype.IsSerialNumberExist = function () {
        // debugger;
        var is = false;
        this.Assets.forEach(function (x) { if (x.astSerialNumber != '') {
            is = true;
        } });
        return is;
    };
    AssetComponent.prototype.IsPartNumberExist = function () {
        var is = false;
        this.Assets.forEach(function (x) { if (x.astPartNumber != '') {
            is = true;
        } });
        return is;
    };
    AssetComponent.prototype.onSelectAssetType = function (e) {
        var index = e.target.options.selectedIndex;
        var assetTypeName = e.target.options[index].label;
        // this.assetForm.reset(); //////////////////////////////////////////////////////
        this.assetForm.controls['astCode'].setValue(null);
        this.assetForm.controls['astSerialNumber'].setValue(null);
        this.assetForm.controls['astPartNumber'].setValue(null);
        this.assetForm.controls['astDialNumber'].setValue(null);
        this.assetForm.controls['astCircuitNumber'].setValue(null);
        this.assetForm.get('asttypId').patchValue(e.target.value);
        this.CodeExist = false;
        this.hideAssetTypeLaptop = false;
        this.hideAssetTypeDesktop = false;
        this.hideAssetTypeServer = false;
        this.hideAssetTypeStorage = false;
        this.hideAssetTypeMobile = false;
        this.hideAssetTypeVoiceLine = false;
        this.hideAssetTypeDataLine = false;
        this.hideAssetTypeOthers = false;
        this.hideAssetTypeMiFi = false;
        if (assetTypeName == 'Laptop')
            this.hideAssetTypeLaptop = true;
        if (assetTypeName == 'Desktop')
            this.hideAssetTypeDesktop = true;
        if (assetTypeName == 'Server')
            this.hideAssetTypeServer = true;
        if (assetTypeName == 'Storage')
            this.hideAssetTypeStorage = true;
        if (assetTypeName == 'Mobile')
            this.hideAssetTypeMobile = true;
        if (assetTypeName == 'MiFi')
            this.hideAssetTypeMiFi = true;
        if (assetTypeName == 'Others')
            this.hideAssetTypeOthers = true;
        if (assetTypeName == 'VoiceLine')
            this.hideAssetTypeVoiceLine = true;
        if (assetTypeName == 'DataLine')
            this.hideAssetTypeDataLine = true;
        this.assetForm.get('AssetTypeName').setValue(assetTypeName);
        this.getCodePattern(assetTypeName);
    };
    AssetComponent.prototype.onFilterByAssetType = function (e) {
        //  
        if (e.target.selectedOptions[0].text.toString() == '--All--') {
            this.onGetAllAssets();
        }
        else {
            //  this.onGetAllAssets();
            var val = e.target.selectedOptions[0].text.toString();
            var value_1 = val.toString().toLowerCase().trim();
            //     
            // get the amount of columns in the table
            var count_1 = Object.keys(this.temp[0]).length;
            //    
            // get the key names of each column in the dataset
            var keys_1 = Object.keys(this.temp[0]);
            //    
            // assign filtered matches to the active datatable
            this.Assets = this.temp.filter(function (item) {
                //       
                // iterate through each row's column data
                for (var i = 0; i < count_1; i++) {
                    // check for a match
                    if ((item[keys_1[i]] &&
                        item[keys_1[i]]
                            .toString()
                            .toLowerCase()
                            .indexOf(value_1) !== -1) ||
                        !value_1) {
                        // found match, return true to add to result set
                        // console.log(item, 1);
                        return true;
                    }
                }
            });
        }
    };
    AssetComponent.prototype.onShowAddEdit = function () {
        this.assetForm.reset();
        this.assetForm.controls['astId'].setValue(0);
        this.assetForm.get('FromEmployeeName').patchValue('Created');
    };
    AssetComponent.prototype.onGetAssetLog = function (ast) {
        // let newemp = {empFullName: emp.empFullName, empHRCode: emp.empHRCode, assetsCurrent: JSON.stringify(emp.assetsCurrent)  }
        // this.router.navigate(['/operation/assetmng'], { queryParams: newemp });
        var a = { astId: ast.astId, astCode: ast.astCode, astDescription: ast.astDescription, AssetTypeName: ast.AssetTypeName, EmployeeName: JSON.stringify(ast.EmployeeName) };
        this.router.navigate(['/masterdata/assettrackinglog'], { queryParams: a });
    };
    AssetComponent.prototype.onEditAsset = function (ast) {
        debugger;
        this.AssetTemp = ast;
        this.assetForm.reset();
        this.assetForm.patchValue(ast);
        this.assetForm.get('asttypId').patchValue(ast.asttypId);
        this.assetForm.get('oprId').patchValue(ast.oprId);
        this.assetForm.get('OperatorRatePlanId').patchValue(ast.OperatorRatePlanId);
        this.assetForm.get('OprAccNumberId').patchValue(ast.OprAccNumberId);
        this.assetForm.get('FromEmployeeName').patchValue(ast.EmployeeName);
        this.assetForm.get('ToEmployeeName').patchValue(ast.EmployeeName);
        this.assetForm.get('EmployeeName').patchValue(ast.EmployeeName);
        this.CodeExist = false;
        this.DailNumberExist = false;
        this.DailNumberUnValid = false;
        this.SerialNumberExist = false;
        this.SerialNumberUnValid = false;
        this.hideAssetTypeLaptop = false;
        this.hideAssetTypeDesktop = false;
        this.hideAssetTypeServer = false;
        this.hideAssetTypeStorage = false;
        this.hideAssetTypeMobile = false;
        this.hideAssetTypeVoiceLine = false;
        this.hideAssetTypeDataLine = false;
        this.hideAssetTypeMiFi = false;
        this.hideAssetTypeOthers = false;
        if (ast.AssetTypeName == 'Laptop')
            this.hideAssetTypeLaptop = true;
        if (ast.AssetTypeName == 'Desktop')
            this.hideAssetTypeDesktop = true;
        if (ast.AssetTypeName == 'Server')
            this.hideAssetTypeServer = true;
        if (ast.AssetTypeName == 'Storage')
            this.hideAssetTypeStorage = true;
        if (ast.AssetTypeName == 'Mobile')
            this.hideAssetTypeMobile = true;
        if (ast.AssetTypeName == 'VoiceLine')
            this.hideAssetTypeVoiceLine = true;
        if (ast.AssetTypeName == 'DataLine')
            this.hideAssetTypeDataLine = true;
        if (ast.AssetTypeName == 'MiFi')
            this.hideAssetTypeDataLine = true;
        if (ast.AssetTypeName == 'Others')
            this.hideAssetTypeDataLine = true;
        if (ast.empId != null) {
            // this.assetForm.get('assignedToEmp').setValue(true);
            // this.getEmployeeId.patchValue(ast.empId);
        }
        if (ast.IsScrap) {
            var ScrapCheckbox = document.getElementById('ScrapCheckbox');
            ScrapCheckbox.checked = true;
            this.IsScrap = true;
            this.assetForm.get('IsScrap').setValue(true);
        }
        if (!ast.IsScrap) {
            var ScrapCheckbox = document.getElementById('ScrapCheckbox');
            ScrapCheckbox.checked = false;
            this.IsScrap = false;
            this.assetForm.get('IsScrap').setValue(false);
        }
        this.assetForm.updateValueAndValidity();
    };
    AssetComponent.prototype.onDeleteAsset = function (ast) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_14___default.a.fire({
            title: '( ' + ast.astCode + ' ) Will be deleted permanently</h4>',
            icon: 'info',
            // html: ' <ul *ngFor=" let a of assets "> <li> a.astCode  </li>   </ul> ',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: '<i class="fa "></i>Yes Delete It',
            confirmButtonAriaLabel: '',
            cancelButtonText: '<i class="fa ">Cancel</i>',
            cancelButtonAriaLabel: ''
        }).then(function (res) {
            if (res.value) {
                _this.astSrv.deleteAsset(ast.astId).subscribe(function (Assetdlt) {
                    _this.onGetAllAssets();
                    _this.swalSrv.showSwal('basic-success', "Asset with code( " + Assetdlt.astCode + " ) has been deleted successfully ");
                    _this.logSrv.sendUserLog("( " + Assetdlt.astCode + "-" + ast.astDescription + " ) Deleted Successfully").subscribe(function (res) {
                        _this.logSrv.sendAssetTrackingLog(Assetdlt, ast.EmployeeName, "Deleted");
                    });
                    // this.logSrv.sendUserLog( "( " +  Assetdlt.astCode + "-" + ast.astDescription + " ) Deleted Successfully");
                    // this.strSrv.sendAssetTrackingLog(Assetdlt, ast.EmployeeName, "Deleted").subscribe(logged=>{
                    // }); 
                }, function (error) {
                    _this.loading = false;
                    if (error.message.includes('Http failure response for http://')) {
                        _this.swalSrv.showSwal('basic-error', " Server connection Error / Data is not updated ");
                    }
                });
            }
        });
    };
    AssetComponent.prototype.onCancel = function () {
        this.assetForm.reset();
        this.CodeExist = false;
    };
    AssetComponent.prototype.onSelectAll = function (e) {
        var _this = this;
        this.SelectedAssets = [];
        if (e.target.checked) {
            this.Assets.forEach(function (val) {
                val.checkbox = true;
                _this.SelectedAssets.push(val);
            });
        }
        else if (!e.target.checked) {
            this.Assets.forEach(function (val) { val.checkbox = false; });
        }
        this.onUpdatestatistics();
    };
    AssetComponent.prototype.onSelect = function (e, ast) {
        var _this = this;
        // 
        // console.log(e);
        if (e.target.checked) {
            this.SelectedAssets.push(ast);
            var allChecked_1 = true;
            this.Assets.forEach(function (asset, index) {
                var assetItemHTMLelemnt = document.getElementById('assetItem--' + index);
                if (!assetItemHTMLelemnt.checked)
                    allChecked_1 = false;
                _this.onUpdatestatistics();
            });
            if (allChecked_1)
                var assetItemALLHTMLelemnt = document.getElementById("assetItemALL--");
            assetItemALLHTMLelemnt.checked = true;
            // this.onUpdatestatistics();
        }
        else if (!e.target.checked) {
            var assetItemALLHTMLelemnt = document.getElementById("assetItemALL--");
            if (assetItemALLHTMLelemnt.checked)
                assetItemALLHTMLelemnt.checked = false;
            this.SelectedAssets.filter(function (asset, selectedIndex) {
                if (asset.astId === ast.astId) {
                    _this.SelectedAssets.splice(selectedIndex, 1);
                    _this.onUpdatestatistics();
                }
            });
        }
        this.onUpdatestatistics();
    };
    AssetComponent.prototype.onSelectScrap = function (e) {
        var _this = this;
        if (e.target.checked == true) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_14___default.a.fire({
                title: '<h4>Assets Will be out of Operation</h4>',
                icon: 'info',
                // html: ' <ul *ngFor=" let a of assets "> <li> a.astCode  </li>   </ul> ',
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: '<i class="fa "></i>Yes Proceed',
                confirmButtonAriaLabel: '',
                cancelButtonText: '<i class="fa "> Cancel</i>',
                cancelButtonAriaLabel: ''
            }).then(function (res) {
                if (res.value) {
                    debugger;
                    // this.astSrv.getAssetId(this.getAssetId.value).subscribe((a: AssetModel)=>{
                    //   debugger;
                    _this.IsScrap = true;
                    _this.assetForm.get('IsScrap').setValue(true);
                    _this.swalSrv.showSwal('basic-success', "Done, Please Save to apply Changes ");
                    //  this.swalSrv.showSwal('basic-success', "Asset with code( " + this.assetForm.get('astCode').value + " ) went to scrap successfully ");
                    _this.logSrv.sendUserLog("Asset with code( " + _this.assetForm.get('astCode').value + " ) went to scrap successfully ");
                    // this.logSrv.sendAssetTrackingLog(this.assetForm.value, this.assetForm.get('EmployeeName').value, "Scrap").subscribe(logged=>{
                    // }, error => {
                    //   this.loading = false;
                    //   if(error.message.includes('Http failure response for http://')){
                    //     this.swalSrv.showSwal('basic-error', " Server connection Error / Data is not updated ");
                    //     this.logSrv.sendUserLog( "Server connection Error ( " + error + " )" );
                    //   }
                    // });
                }
            });
        }
        if (e.target.checked == false) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_14___default.a.fire({
                title: 'Assets Will Back to Operate</h4>',
                icon: 'info',
                // html: ' <ul *ngFor=" let a of assets "> <li> a.astCode  </li>   </ul> ',
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: '<i class="fa "></i>Yes Proceed',
                confirmButtonAriaLabel: '',
                cancelButtonText: '<i class="fa "> Cancel</i>',
                cancelButtonAriaLabel: ''
            }).then(function (res) {
                if (res.value) {
                    //   this.astSrv.getAssetId(this.getAssetId.value).subscribe((a: AssetModel)=>{
                    _this.IsScrap = false;
                    _this.assetForm.get('IsScrap').setValue(false);
                    _this.swalSrv.showSwal('basic-success', "Done, Please Save to apply Changes");
                    _this.logSrv.sendUserLog("Asset with code( " + _this.assetForm.get('astCode').value + " ) Back to operation successfully ");
                    //     this.logSrv.sendAssetTrackingLog(this.assetForm.value, 'Scrap', this.assetForm.get('EmployeeName').value).subscribe(logged=>{
                    //   //    this.onGetAllAssets();
                    //  //   }); 
                    // //    this.onGetAllAssets();
                    //     }, error => {
                    //     this.loading = false;
                    //     if(error.message.includes('Http failure response for http://')){
                    //       this.swalSrv.showSwal('basic-error', " Server connection Error / Data is not updated ");
                    //       this.logSrv.sendUserLog( "Server connection Error ( " + error + " )" );
                    //     }
                    //     });
                }
            });
        }
    };
    AssetComponent.prototype.onExportExcel = function () {
        if (this.SelectedAssets.length == 0) {
            this.swalSrv.showSwal('basic-info', 'At least one asset must be selected');
        }
        else {
            this.expExcelSrv.exportAsExcelFile(this.SelectedAssets, 'Assets List');
        }
    };
    AssetComponent.prototype.onPrintPreviewSelectedAssets = function () {
        // console.log(ast);
        // 
        // this.bsModaleRef = this.modalService.show(AddeditasstComponent, {initialState: {ast}});
        // this.bsModaleRef.content.onClose = (updated) => {
        //   if (updated) {
        //     this.onGetAllAssets();
        //     console.log('Edit clicked inside');
        //   }
        // };
        // console.log('Edit clicked');
    };
    AssetComponent.prototype.setOrder = function (value) {
        // 
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    AssetComponent.prototype.onSort = function (event) {
        // console.log(event);
    };
    AssetComponent.prototype.onShowHideStatistics = function () {
        this.showStatistics = !this.showStatistics;
    };
    AssetComponent.prototype.onShowHideCodeGuide = function () {
        this.showCodeGuide = !this.showCodeGuide;
    };
    AssetComponent.prototype.updateFilter = function (val) {
        // console.log(Object.keys(this.temp[0]).length);
        var value = val.toString().toLowerCase().trim();
        // get the amount of columns in the table
        var count = Object.keys(this.temp[0]).length;
        // get the key names of each column in the dataset
        var keys = Object.keys(this.temp[0]);
        // assign filtered matches to the active datatable
        this.Assets = this.temp.filter(function (item) {
            // iterate through each row's column data
            for (var i = 0; i < count; i++) {
                // check for a match
                if ((item[keys[i]] &&
                    item[keys[i]]
                        .toString()
                        .toLowerCase()
                        .indexOf(value) !== -1) ||
                    !value) {
                    // found match, return true to add to result set
                    // console.log(item, 1);
                    return true;
                }
            }
        });
        //Whenever the filter changes, always go back to the first page
    };
    AssetComponent.prototype.OnCodeChange = function (e) {
        var _this = this;
        this.loading = true;
        var assetTypeName = this.getAssetTypeName.value;
        this.getCodePattern(assetTypeName);
        this.CodeExist = false;
        if (e.target.value.length == 6) {
            debugger;
            this.astSrv.isAsssetCodeExist(e.target.value).subscribe(function (res) {
                debugger;
                _this.CodeExist = false;
                if ((res && _this.AssetTemp.astCode != e.target.value) || (res && _this.assetForm.get('astId').value == 0)) {
                    debugger;
                    _this.CodeExist = true;
                    _this.assetForm.get('astCode').setErrors({ 'incorrect': true });
                    _this.assetForm.get('astCode').updateValueAndValidity();
                    _this.loading = false;
                }
                else if (!res || (res && _this.AssetTemp.astCode == e.target.value)) {
                    debugger;
                    _this.CodeExist = false;
                    _this.assetForm.get('astCode').setErrors({ 'incorrect': false });
                    _this.assetForm.get('astCode').updateValueAndValidity();
                    _this.loading = false;
                }
                // this.loading = false;
            });
        }
        else if (e.target.value.length != 6) {
            this.getCodePattern(assetTypeName);
            this.loading = false;
        }
    };
    AssetComponent.prototype.OnSerialNumberChange = function (e) {
        var _this = this;
        debugger;
        this.loading = true;
        if (e.target.value != null && e.target.value.length < 3) {
            this.SerialNumberExist = false;
            this.SerialNumberUnValid = true;
            this.loading = false;
        }
        else if (e.target.value.length >= 3) {
            this.SerialNumberUnValid = false;
            this.astSrv.GetSerialNumber(e.target.value).subscribe(function (num) {
                debugger;
                if ((num && _this.AssetTemp.astSerialNumber != num) || (num && _this.assetForm.get('astId').value == 0)) {
                    _this.SerialNumberExist = true;
                }
                if (num == '' || num && _this.AssetTemp.astSerialNumber == num) {
                    _this.SerialNumberExist = false;
                }
                _this.loading = false;
            });
        }
    };
    AssetComponent.prototype.OnDailNumberChange = function (e) {
        var _this = this;
        debugger;
        this.loading = true;
        if (e.target.value != null && e.target.value.length != 11) {
            this.DailNumberExist = false;
            this.DailNumberUnValid = true;
            this.loading = false;
        }
        else if (e.target.value.length == 11) {
            this.DailNumberUnValid = false;
            this.astSrv.GetDailNumber(e.target.value).subscribe(function (num) {
                debugger;
                if ((num && _this.AssetTemp.astDialNumber != num) || (num && _this.assetForm.get('astId').value == 0)) {
                    _this.DailNumberExist = true;
                }
                if (num == null || num && _this.AssetTemp.astDialNumber == num) {
                    _this.DailNumberExist = false;
                }
                _this.loading = false;
            });
        }
    };
    AssetComponent.prototype.onBringExistingAsset = function () {
        this.astSrv.GetAsssetByCode(this.assetForm.get('astCode').value).subscribe(function (res) {
            debugger;
        });
        //  this.astSrv.GetAsssetByCode(this.assetForm.get('astCode').value).subscribe(res=>{
        //            console.log(res);
        //  });
        // //  .subscribe(re=>{
        // //         debugger;
        // //         console.log(re);
        // //   });
        //   debugger;
        // this.astSrv.GetAsssetByCode(existingCode).subscribe((as: any) => {
        //   debugger;
        //   console.log(as);
        //   this.assetForm.patchValue(as);
        // });
    };
    AssetComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        //  
        // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        // Add 'implements AfterViewInit' to the class.
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this.search.nativeElement, 'keydown')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(550), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (x) { return x['target']['value']; }))
            .subscribe(function (value) {
            _this.updateFilter(value);
        });
    };
    AssetComponent.prototype.onChangeRowsPerPage = function (event) {
        // console.log(event);
        // console.log(event.target.value);
        this.pageSize = event.target.value;
        this.pageIndex = 1;
    };
    AssetComponent.prototype.onDeleteAllSellected = function () {
        var _this = this;
        if (this.SelectedAssets.length == 0) {
            this.swalSrv.showSwal('basic-info', 'At least one asset must be selected');
        }
        else {
            var ids_1 = [];
            this.SelectedAssets.forEach(function (em) {
                ids_1.push(em.astId);
            });
            sweetalert2__WEBPACK_IMPORTED_MODULE_14___default.a.fire({
                title: this.SelectedAssets.length + 'Assets Will be deleted permanently</h4>',
                icon: 'info',
                // html: ' <ul *ngFor=" let a of assets "> <li> a.astCode  </li>   </ul> ',
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: '<i class="fa "></i>Yes Delete',
                confirmButtonAriaLabel: '',
                cancelButtonText: '<i class="fa "> Cancel</i>',
                cancelButtonAriaLabel: ''
            }).then(function (res) {
                if (res.value) {
                    _this.loading = true;
                    _this.astSrv.deleteSelectedAssets(ids_1).subscribe(function (ast) {
                        _this.onUpdatestatistics();
                        _this.loading = false;
                        _this.swalSrv.showSwal('basic-success', "( " + ast.length + " ) Assets have been deleted successfully ");
                        _this.logSrv.sendUserLog("( " + ast.length + " )Deleted Successfully");
                        _this.SelectedAssets = [];
                        _this.onGetAllAssets();
                    }, function (error) {
                        _this.loading = false;
                        if (error.message.includes('Http failure response for http://')) {
                            _this.swalSrv.showSwal('basic-error', " Server connection Error / Data is not updated ");
                            _this.logSrv.sendUserLog("Server connection Error ( " + error + " )");
                        }
                    });
                }
            });
        }
    };
    Object.defineProperty(AssetComponent.prototype, "getAssetForm", {
        get: function () {
            return this.assetForm.value.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssetComponent.prototype, "getAssetTypeName", {
        get: function () {
            return this.assetForm.get('AssetTypeName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssetComponent.prototype, "getEmployeeName", {
        get: function () {
            return this.assetForm.get('EmployeeName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssetComponent.prototype, "getAssetTypeId", {
        get: function () {
            return this.assetForm.get('asttypId');
            //  return this.assetForm.controls.AssetTypes.get('asttypName') as FormControl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssetComponent.prototype, "getDescription", {
        get: function () {
            return this.assetForm.get('astDescription');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssetComponent.prototype, "getSN", {
        get: function () {
            return this.assetForm.get('astSerialNumber');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssetComponent.prototype, "getPN", {
        get: function () {
            return this.assetForm.get('astPartNumber');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssetComponent.prototype, "getDN", {
        // get getCode() {
        //   return this.assetForm.get('astCode') as FormControl;
        // }
        get: function () {
            return this.assetForm.get('astDialNumber');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssetComponent.prototype, "getCN", {
        get: function () {
            return this.assetForm.get('astCircuitNumber');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssetComponent.prototype, "getAssetId", {
        get: function () {
            return this.assetForm.get('astId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssetComponent.prototype, "getastCode", {
        get: function () {
            return this.assetForm.get('astCode');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssetComponent.prototype, "getDailNumber", {
        get: function () {
            return this.assetForm.get('astDialNumber');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssetComponent.prototype, "getEmployeeId", {
        get: function () {
            return this.assetForm.get('empId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssetComponent.prototype, "getBranchId", {
        get: function () {
            return this.assetForm.get('brnId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssetComponent.prototype, "getCompanyId", {
        get: function () {
            return this.assetForm.get('comId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AssetComponent.prototype, "getPRDate", {
        get: function () {
            return this.assetForm.get('astPurchaseDate');
        },
        enumerable: true,
        configurable: true
    });
    AssetComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _department_services_department_service__WEBPACK_IMPORTED_MODULE_18__["DepartmentService"] },
        { type: _branch_services_branch_service__WEBPACK_IMPORTED_MODULE_10__["BranchService"] },
        { type: _company_services_company_service__WEBPACK_IMPORTED_MODULE_11__["CompanyService"] },
        { type: app_shared_services_shareddata_service__WEBPACK_IMPORTED_MODULE_17__["ShareddataService"] },
        { type: app_shared_services_logs_service__WEBPACK_IMPORTED_MODULE_16__["LogsService"] },
        { type: _services_asset_service__WEBPACK_IMPORTED_MODULE_1__["AssetService"] },
        { type: _assettype_services_assettype_service__WEBPACK_IMPORTED_MODULE_4__["AssettypeService"] },
        { type: _employee_services_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"] },
        { type: _operator_services_operator_service__WEBPACK_IMPORTED_MODULE_15__["OperatorService"] },
        { type: _shared_services_exportexcel_service__WEBPACK_IMPORTED_MODULE_9__["ExportexcelService"] },
        { type: ngx_order_pipe__WEBPACK_IMPORTED_MODULE_6__["OrderPipe"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_alerts__WEBPACK_IMPORTED_MODULE_12__["AlertService"] },
        { type: app_shared_services_sweetalert_service__WEBPACK_IMPORTED_MODULE_13__["SweetalertService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('search'),
        __metadata("design:type", Object)
    ], AssetComponent.prototype, "search", void 0);
    AssetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assets',
            template: __importDefault(__webpack_require__(/*! raw-loader!./asset.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/asset/asset.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./asset.component.css */ "./src/app/masterdata/asset/asset.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _department_services_department_service__WEBPACK_IMPORTED_MODULE_18__["DepartmentService"],
            _branch_services_branch_service__WEBPACK_IMPORTED_MODULE_10__["BranchService"],
            _company_services_company_service__WEBPACK_IMPORTED_MODULE_11__["CompanyService"],
            app_shared_services_shareddata_service__WEBPACK_IMPORTED_MODULE_17__["ShareddataService"],
            app_shared_services_logs_service__WEBPACK_IMPORTED_MODULE_16__["LogsService"],
            _services_asset_service__WEBPACK_IMPORTED_MODULE_1__["AssetService"],
            _assettype_services_assettype_service__WEBPACK_IMPORTED_MODULE_4__["AssettypeService"],
            _employee_services_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"],
            _operator_services_operator_service__WEBPACK_IMPORTED_MODULE_15__["OperatorService"],
            _shared_services_exportexcel_service__WEBPACK_IMPORTED_MODULE_9__["ExportexcelService"],
            ngx_order_pipe__WEBPACK_IMPORTED_MODULE_6__["OrderPipe"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_alerts__WEBPACK_IMPORTED_MODULE_12__["AlertService"],
            app_shared_services_sweetalert_service__WEBPACK_IMPORTED_MODULE_13__["SweetalertService"]])
    ], AssetComponent);
    return AssetComponent;
}());



/***/ }),

/***/ "./src/app/masterdata/asset/assettrackinglog/assettrackinglog.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/masterdata/asset/assettrackinglog/assettrackinglog.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3RlcmRhdGEvYXNzZXQvYXNzZXR0cmFja2luZ2xvZy9hc3NldHRyYWNraW5nbG9nLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/masterdata/asset/assettrackinglog/assettrackinglog.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/masterdata/asset/assettrackinglog/assettrackinglog.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AssettrackinglogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssettrackinglogComponent", function() { return AssettrackinglogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_asset_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/asset.service */ "./src/app/masterdata/asset/services/asset.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var AssettrackinglogComponent = /** @class */ (function () {
    function AssettrackinglogComponent(route, astSrv) {
        this.route = route;
        this.astSrv = astSrv;
        this.AssetTrackingVMs = [];
        this.pageIndex = 1;
        this.pageSize = 10;
    }
    AssettrackinglogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            debugger;
            _this.Asset = params;
            _this.onGetLogsByAssetId(params.astId);
        });
    };
    AssettrackinglogComponent.prototype.onGetLogsByAssetId = function (id) {
        var _this = this;
        debugger;
        this.astSrv.getLogsByAssetId(id).subscribe(function (res) {
            debugger;
            _this.AssetTrackingVMs = res;
        });
    };
    AssettrackinglogComponent.prototype.onChangeRowsPerPage = function (event) {
        debugger;
        // console.log(event);
        // console.log(event.target.value);
        this.pageSize = event.target.value;
        this.pageIndex = 1;
    };
    AssettrackinglogComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _services_asset_service__WEBPACK_IMPORTED_MODULE_2__["AssetService"] }
    ]; };
    AssettrackinglogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assettrackinglog',
            template: __importDefault(__webpack_require__(/*! raw-loader!./assettrackinglog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/asset/assettrackinglog/assettrackinglog.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./assettrackinglog.component.css */ "./src/app/masterdata/asset/assettrackinglog/assettrackinglog.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_asset_service__WEBPACK_IMPORTED_MODULE_2__["AssetService"]])
    ], AssettrackinglogComponent);
    return AssettrackinglogComponent;
}());



/***/ }),

/***/ "./src/app/masterdata/asset/assetupload/assetupload.component.css":
/*!************************************************************************!*\
  !*** ./src/app/masterdata/asset/assetupload/assetupload.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n.toolbarIcon{\r\n    font-size: 25px;\r\n    color: black;\r\n    padding-top: 13px;\r\n    padding-bottom: 7px;\r\n    padding-right: 10px;\r\n    padding-left: 10px;\r\n    cursor: pointer;\r\n    /* box-shadow: 1px 2px grey; */\r\n}\r\n.toolbarIcon:hover {\r\n    margin-top: 6px;\r\n    font-size: 28px;\r\n    color: blue;\r\n    padding-top: 7px;\r\n    padding-bottom: 7px;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    cursor: pointer;\r\n    border: 1px solid #f9f9f900;\r\n    background-color: white;\r\n}\r\n.marginsDropdownList{\r\n    margin-top: 8px;\r\n    padding-top: 7px;\r\n    padding-bottom: 7px;\r\n}\r\n.marginsPaging{\r\n    margin-top: 8px;\r\n    padding-top: 7px;\r\n    padding-bottom: 7px;\r\n}\r\n.marginsSearch{\r\n    /* margin-right: 10px; */\r\n    padding-top: 7px;\r\n    padding-bottom: 7px;\r\n}\r\n.toolbarCard{\r\n    box-shadow: 1px 1px 1px 1px grey; \r\n    /* margin: auto; */\r\n    /* height: 40px; */\r\n    background-color: #f9f9f9;\r\n    border: 1px solid rgb(212, 212, 212);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyZGF0YS9hc3NldC9hc3NldHVwbG9hZC9hc3NldHVwbG9hZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixvQ0FBb0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9tYXN0ZXJkYXRhL2Fzc2V0L2Fzc2V0dXBsb2FkL2Fzc2V0dXBsb2FkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi50b29sYmFySWNvbntcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmctdG9wOiAxM3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAvKiBib3gtc2hhZG93OiAxcHggMnB4IGdyZXk7ICovXHJcbn1cclxuLnRvb2xiYXJJY29uOmhvdmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y5ZjlmOTAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLm1hcmdpbnNEcm9wZG93bkxpc3R7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcclxufVxyXG4ubWFyZ2luc1BhZ2luZ3tcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG59XHJcbi5tYXJnaW5zU2VhcmNoe1xyXG4gICAgLyogbWFyZ2luLXJpZ2h0OiAxMHB4OyAqL1xyXG4gICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbn1cclxuXHJcbi50b29sYmFyQ2FyZHtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCBncmV5OyBcclxuICAgIC8qIG1hcmdpbjogYXV0bzsgKi9cclxuICAgIC8qIGhlaWdodDogNDBweDsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjEyLCAyMTIsIDIxMik7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/masterdata/asset/assetupload/assetupload.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/masterdata/asset/assetupload/assetupload.component.ts ***!
  \***********************************************************************/
/*! exports provided: AssetuploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetuploadComponent", function() { return AssetuploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var json2csv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! json2csv */ "./node_modules/json2csv/dist/json2csv.umd.js");
/* harmony import */ var json2csv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json2csv__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_asset_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/asset.service */ "./src/app/masterdata/asset/services/asset.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_shared_services_downloadfile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/services/downloadfile.service */ "./src/app/shared/services/downloadfile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/__ivy_ngcc__/fesm5/ngx-alerts.js");
/* harmony import */ var app_shared_services_exportexcel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/services/exportexcel.service */ "./src/app/shared/services/exportexcel.service.ts");
/* harmony import */ var app_shared_services_sweetalert_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/services/sweetalert.service */ "./src/app/shared/services/sweetalert.service.ts");
/* harmony import */ var app_shared_services_appstorage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/shared/services/appstorage.service */ "./src/app/shared/services/appstorage.service.ts");
/* harmony import */ var app_shared_services_logs_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/shared/services/logs.service */ "./src/app/shared/services/logs.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};














var AssetuploadComponent = /** @class */ (function () {
    function AssetuploadComponent(http, astSrv, strSrv, logSrv, domSanitizer, fileService, sanitizer, router, alrtSrv, swalSrv, expExcelSrv, alertService) {
        this.http = http;
        this.astSrv = astSrv;
        this.strSrv = strSrv;
        this.logSrv = logSrv;
        this.domSanitizer = domSanitizer;
        this.fileService = fileService;
        this.sanitizer = sanitizer;
        this.router = router;
        this.alrtSrv = alrtSrv;
        this.swalSrv = swalSrv;
        this.expExcelSrv = expExcelSrv;
        this.alertService = alertService;
        this.upLoadedAssets = 0;
        this.noAssetCode = 0;
        this.noAssetTypeCode = 0;
        this.noHrCode = 0;
        this.noBranch = 0;
        this.noCompany = 0;
        this.isExist = 0;
        this.isNew = 0;
        this.selectedAssets = 0;
        this.astCodeDuplication = 0;
        this.astSNDuplication = 0;
        this.astDialNumDuplication = 0;
        this.showStatistics = false;
        this.pageIndex = 1;
        this.loading = false;
        this.temp = [];
        this.Assets = [];
        this.pageSize = 5;
        this.order = "info.name";
        this.reverse = false;
        this.SelectedAssets = [];
        this.notificationMessage = '';
        // Export File
        this.csvFileName = "test.csv";
        this.Assets_DATA = [];
        // AddUserLog(action: string) {
        //   this.logSrv.sendUserLog(action).subscribe(res=>{
        //   });
        // }
        // notifcationMessegeTimer(messege : string) {
        //   //   
        //   var x  = setInterval(() => 
        //    {
        //         return this.notificationMessage = '';
        //    },10000);
        //         return this.notificationMessage = messege;
        // }
        this.showCodeGuide = false;
    }
    // noticationMessegeTimer(messege : string, saved?: number, selected?: number) {
    //   var x  = setInterval(() => 
    //    {
    //         return this.notificationMessage = '';
    //    },10000);
    //         return this.notificationMessage = saved + messege + selected;
    // }
    // AddAssetTrackingLog(ast: any) {
    //    
    //   var assetTracking = new AssetTrackingModel();
    //   var usr = this.strSrv.getUserFromStorage(); 
    //   assetTracking.From = "Uploaded-Saved";
    //   assetTracking.To = ast.EmployeeName;
    //   assetTracking.astId = ast.astId;
    //   assetTracking.usrId = usr.usrId;
    //   this.logSrv.sendAssetTrackingLog(assetTracking).subscribe(res=>{
    //     console.log(res);
    //     
    //   });
    // }
    // Hide Empty Column
    AssetuploadComponent.prototype.IsDescriptionExist = function () {
        var is = false;
        this.Assets.forEach(function (x) { if (x.Description != '') {
            is = true;
        } });
        return is;
    };
    AssetuploadComponent.prototype.IsSerialNumberExist = function () {
        var is = false;
        this.Assets.forEach(function (x) { if (x.SerialNumber != '') {
            is = true;
        } });
        return is;
    };
    AssetuploadComponent.prototype.IsPartNumberExist = function () {
        var is = false;
        this.Assets.forEach(function (x) { if (x.PartNumber != '') {
            is = true;
        } });
        return is;
    };
    AssetuploadComponent.prototype.IsDialNumberExist = function () {
        var is = false;
        this.Assets.forEach(function (x) { if (x.DialNumber != '') {
            is = true;
        } });
        return is;
    };
    AssetuploadComponent.prototype.IsCircuitNumberExist = function () {
        var is = false;
        this.Assets.forEach(function (x) { if (x.CircuitNumber != '') {
            is = true;
        } });
        return is;
    };
    AssetuploadComponent.prototype.IsTypeCodeExist = function () {
        var is = false;
        this.Assets.forEach(function (x) { if (x.TypeCode != '') {
            is = true;
        } });
        return is;
    };
    AssetuploadComponent.prototype.IsTypeNameExist = function () {
        var is = false;
        this.Assets.forEach(function (x) { if (x.TypeName != '') {
            is = true;
        } });
        return is;
    };
    AssetuploadComponent.prototype.IsEmpHRCodeExist = function () {
        var is = false;
        this.Assets.forEach(function (x) { if (x.EmpHRCode != '') {
            is = true;
        } });
        return is;
    };
    AssetuploadComponent.prototype.IsEmpNameExist = function () {
        var is = false;
        this.Assets.forEach(function (x) { if (x.EmpName != '') {
            is = true;
        } });
        return is;
    };
    AssetuploadComponent.prototype.IsCompanyCodeExist = function () {
        var is = false;
        this.Assets.forEach(function (x) { if (x.CompanyCode != '') {
            is = true;
        } });
        return is;
    };
    AssetuploadComponent.prototype.IsCompanyNameExist = function () {
        var is = false;
        this.Assets.forEach(function (x) { if (x.CompanyName != '') {
            is = true;
        } });
        return is;
    };
    AssetuploadComponent.prototype.IsBranchCodeExist = function () {
        var is = false;
        this.Assets.forEach(function (x) { if (x.BranchCode != '') {
            is = true;
        } });
        return is;
    };
    AssetuploadComponent.prototype.IsBranchNameExist = function () {
        var is = false;
        this.Assets.forEach(function (x) { if (x.BranchName != '') {
            is = true;
        } });
        return is;
    };
    AssetuploadComponent.prototype.ngOnInit = function () {
        this.onGetAllAssets();
        // const data = 'some text';
        // const blob = new Blob([data], { type: 'application/octet-stream' });
        // this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
    };
    AssetuploadComponent.prototype.onShowHideCodeGuide = function () {
        this.showCodeGuide = !this.showCodeGuide;
    };
    AssetuploadComponent.prototype.onUpdatestatistics = function () {
        var _this = this;
        //    
        this.upLoadedAssets = 0;
        this.noAssetCode = 0;
        this.noAssetTypeCode = 0;
        this.noHrCode = 0;
        this.noBranch = 0;
        this.noCompany = 0;
        this.isExist = 0;
        this.isNew = 0;
        this.astCodeDuplication = 0;
        this.astSNDuplication = 0;
        this.astDialNumDuplication = 0;
        this.selectedAssets = 0;
        this.selectedAssets = this.SelectedAssets.length;
        this.upLoadedAssets = this.Assets.length;
        this.Assets.forEach(function (a) {
            //    
            if (a.BranchName == null) {
                _this.noBranch += 1;
            }
            if (a.CompanyName == null) {
                _this.noCompany += 1;
            }
            if (a.EmpHRCode == null) {
                _this.noHrCode += 1;
            }
            if (a.TypeName == null) { // need review
                _this.noAssetTypeCode += 1;
            }
            if (a.AssetCode == '') {
                _this.noAssetCode += 1;
            }
            if (a.IsExist == true) {
                _this.isExist += 1;
            }
            if (a.IsExist == false) {
                _this.isNew += 1;
            }
            if (a.duplicatCode == true) {
                _this.astCodeDuplication += 1;
            }
            if (a.duplicatSerialNumber == true) {
                _this.astSNDuplication += 1;
            }
            if (a.duplicatDailNumber == true) {
                _this.astDialNumDuplication += 1;
            }
            ;
        });
    };
    AssetuploadComponent.prototype.onShowHideStatistics = function () {
        this.showStatistics = !this.showStatistics;
    };
    AssetuploadComponent.prototype.onSaveToAssetsList = function () {
        var _this = this;
        if (this.SelectedAssets.length > 0) {
            this.loading = true;
            debugger;
            this.astSrv.saveUploadedAssets(this.SelectedAssets).subscribe(function (asts) {
                _this.onGetAllAssets();
                _this.loading = false;
                _this.swalSrv.showSwal('basic-info', 'Either Code exist or duplicated or Employee missing !!', "(" + asts.length + ")  Saved Successfully out of (" + _this.SelectedAssets.length + ")");
                _this.logSrv.sendUserLog("( " + asts.length + " )  Saved Successfully out of ( " + _this.SelectedAssets.length + " )");
                _this.SelectedAssets = [];
                asts.forEach(function (ast) {
                    debugger;
                    // this.logSrv.sendAssetTrackingLog(ast, "Uploaded-Saved", ast.EmployeeName).subscribe(logged=>{ 
                    //   debugger;
                    //   this.onGetAllAssets();
                    // });
                    _this.logSrv.sendUserLog('Asset Created Successfully').subscribe(function (res) {
                        _this.logSrv.sendAssetTrackingLog(ast, "Uploaded-Saved", ast.EmployeeName).subscribe(function (res) {
                        });
                    });
                });
            }, function (err) { debugger; console.log(err); });
        }
        else if (this.SelectedAssets.length == 0) {
            this.swalSrv.showSwal('basic-error', 'You Must Select At Lease One Asset');
            //  this.alrtSrv.danger('No Asset Selected');
            //  this.noticationMessegeTimer("Please Select Item to Save");
        }
    };
    AssetuploadComponent.prototype.onClear = function () {
        var _this = this;
        this.astSrv.deleteAllUploadedAssets(this.Assets).subscribe(function (res) {
            _this.alrtSrv.success('Deleted Successfully');
            _this.logSrv.sendUserLog("Uploaded Assets Deleted Successfully");
            _this.onGetAllAssets();
            //  console.log(res);
        });
    };
    AssetuploadComponent.prototype.onGetAllAssets = function () {
        var _this = this;
        this.loading = true;
        this.astSrv.getAllUploadedAssets().subscribe(function (assets) {
            debugger;
            _this.Assets = assets;
            _this.temp = assets;
            _this.pageIndex = 1;
            _this.loading = false;
            var allAssetsCheckBox = document.getElementById('assetItemALL--');
            allAssetsCheckBox.checked = false;
            _this.onUpdatestatistics();
        }, function (error) {
            _this.loading = false;
            if (error.message.includes('Http failure response for http://')) {
                _this.alertService.danger('Server error');
            }
        });
    };
    AssetuploadComponent.prototype.uploadFile = function () {
        var _this = this;
        this.Assets = [];
        var formData = new FormData();
        this.loading = true;
        formData.append("upload", this.fileInput.nativeElement.files[0]);
        this.astSrv.UploadExcel(formData).subscribe(function (result) {
            _this.logSrv.sendUserLog("Assets File ( " + _this.fileInput.nativeElement.files[0].name + " ) Uploaded").subscribe(function (re) {
            });
            _this.message = result.toString();
            _this.onGetAllAssets();
            _this.onUpdatestatistics();
            _this.loading = false;
            _this.alrtSrv.success('File Uploaded Successfully');
        });
    };
    // Export File
    AssetuploadComponent.prototype.getCSVDownloadLink = function () {
        //   
        return this.generateCSVDownloadLink({
            filename: this.csvFileName,
            data: this.Assets_DATA,
            columns: ['AssetId', "AssetDescription", "AssetType", "AssetSN", "AssetPN"]
        });
        // 
    };
    // example: any = { Description: 'aaa', AssetCode: 'aaa', SerialNumber: 'aa',PartNumber: 'rrr', DialNumber: 'rr',TypeName: 'rr', EmpHRCode: 'rr', EmpName: 'rrr', CompanyName: 'rrr', BranchName: 'rrr'}
    // onExportExcel() {
    //   
    //   this.expExcelSrv.exportAsExcelFile(this.SelectedAssets, 'AssetsList');
    // }
    // you can move this method to a astSrv  // Function to convert the file
    AssetuploadComponent.prototype.generateCSVDownloadLink = function (options) {
        var fields = options.columns;
        var opts = { fields: fields, output: options.filename };
        var csv = json2csv__WEBPACK_IMPORTED_MODULE_1__["parse"](options.data, opts);
        return this.domSanitizer.bypassSecurityTrustUrl("data:text/csv," + encodeURIComponent(csv));
    };
    AssetuploadComponent.prototype.onAddToEmployeeList = function (e, Assets) {
        if (!e.target.checked) {
            // let itemIndex = this.Assets_DATA.filter(value => {value.AssetsId === Assets.AssetsId});
            var index = this.Assets_DATA.findIndex(function (x) { return x.AssetsId === Assets.AssetsId; });
            this.Assets_DATA.splice(index, 1);
        }
        else if (e.target.checked) {
            this.Assets_DATA.push({
                AssetsId: Assets.AssetsId,
                AssetsName: Assets.AssetsName,
                EmailId: Assets.EmailId,
                Address: Assets.Address
            });
        }
    };
    AssetuploadComponent.prototype.onSelectAll = function (e) {
        var _this = this;
        this.SelectedAssets = [];
        if (e.target.checked) {
            this.Assets.forEach(function (val) {
                val.checkbox = true;
                _this.SelectedAssets.push(val);
            });
        }
        else if (!e.target.checked) {
            this.Assets.forEach(function (val) { val.checkbox = false; });
        }
        this.onUpdatestatistics();
    };
    AssetuploadComponent.prototype.onSelect = function (e, ast) {
        var _this = this;
        if (e.target.checked) {
            this.SelectedAssets.push(ast);
            this.onUpdatestatistics();
            var allChecked_1 = true;
            this.Assets.forEach(function (asset, index) {
                var assetItemHTMLelemnt = document.getElementById('assetItem--' + index);
                if (!assetItemHTMLelemnt.checked) {
                    allChecked_1 = false;
                }
                ;
            });
            if (allChecked_1) {
                var assetItemALLHTMLelemnt = document.getElementById("assetItemALL--");
                assetItemALLHTMLelemnt.checked = true;
            }
        }
        else if (!e.target.checked) {
            var assetItemALLHTMLelemnt = document.getElementById("assetItemALL--");
            if (assetItemALLHTMLelemnt.checked) {
                assetItemALLHTMLelemnt.checked = false;
            }
            this.onUpdatestatistics();
            this.SelectedAssets.filter(function (asset, selectedIndex) {
                if (asset.astId === ast.astId) {
                    _this.SelectedAssets.splice(selectedIndex, 1);
                    _this.onUpdatestatistics();
                }
            });
        }
    };
    AssetuploadComponent.prototype.onPrintPreviewSelectedAssets = function () {
        // console.log(ast);
        // 
        // this.bsModaleRef = this.modalService.show(AddeditasstComponent, {initialState: {ast}});
        // this.bsModaleRef.content.onClose = (updated) => {
        //   if (updated) {
        //     this.onGetAllAssets();
        //     console.log('Edit clicked inside');
        //   }
        // };
        // console.log('Edit clicked');
    };
    AssetuploadComponent.prototype.setOrder = function (value) {
        //
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    AssetuploadComponent.prototype.onSort = function (event) {
    };
    AssetuploadComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        debugger;
        // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        // Add 'implements AfterViewInit' to the class.
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this.search.nativeElement, 'keydown')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(550), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (x) { return x['target']['value']; }))
            .subscribe(function (value) {
            _this.updateFilter(value);
        });
    };
    AssetuploadComponent.prototype.onChangeRowsPerPage = function (event) {
        this.pageSize = event.target.value;
        this.pageIndex = 1;
    };
    AssetuploadComponent.prototype.updateFilter = function (val) {
        debugger;
        var value = val.toString().toLowerCase().trim();
        // get the amount of columns in the table
        var count = Object.keys(this.temp[0]).length;
        // get the key names of each column in the dataset
        var keys = Object.keys(this.temp[0]);
        // assign filtered matches to the active datatable
        this.Assets = this.temp.filter(function (item) {
            //  
            // iterate through each row's column data
            for (var i = 0; i < count; i++) {
                // check for a match
                if ((item[keys[i]] &&
                    item[keys[i]]
                        .toString()
                        .toLowerCase()
                        .indexOf(value) !== -1) ||
                    !value) {
                    // found match, return true to add to result set
                    // console.log(item, 1);
                    return true;
                }
            }
        });
        //Whenever the filter changes, always go back to the first page
    };
    // Download File
    AssetuploadComponent.prototype.download = function () {
        this.fileService.downloadFile().subscribe(function (response) {
            var blob = new Blob([response.blob()], { type: 'text/json; charset=utf-8' });
            var url = window.URL.createObjectURL(blob);
            window.open(response.url);
        }), function (error) { return console.log('Error downloading the file'); },
            function () { return console.info('File downloaded successfully'); };
    };
    AssetuploadComponent.prototype.onDeleteAllSellected = function () {
        var _this = this;
        this.loading = true;
        if (this.SelectedAssets.length == 0) {
            this.swalSrv.showSwal('basic-error', 'You Must Select At Least One Asset');
            this.loading = false;
            // this.notifcationMessegeTimer('No Record Selected');
        }
        else {
            var ids_1 = [];
            this.SelectedAssets.forEach(function (em) {
                ids_1.push(em.astId);
            });
            this.astSrv.deleteSelectedUploadedAssets(ids_1).subscribe(function (dltemps) {
                _this.onUpdatestatistics();
                _this.alrtSrv.success("( " + dltemps.length + " ) Assets have been deleted Successfully ");
                _this.logSrv.sendUserLog("( " + dltemps.length + " ) Uploaded Assets Deleted Successfully");
                _this.SelectedAssets = [];
                _this.onGetAllAssets();
                _this.loading = false;
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alrtSrv.danger('Server error');
                }
            });
        }
    };
    AssetuploadComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _services_asset_service__WEBPACK_IMPORTED_MODULE_5__["AssetService"] },
        { type: app_shared_services_appstorage_service__WEBPACK_IMPORTED_MODULE_12__["AppstorageService"] },
        { type: app_shared_services_logs_service__WEBPACK_IMPORTED_MODULE_13__["LogsService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
        { type: app_shared_services_downloadfile_service__WEBPACK_IMPORTED_MODULE_7__["FileService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: ngx_alerts__WEBPACK_IMPORTED_MODULE_9__["AlertService"] },
        { type: app_shared_services_sweetalert_service__WEBPACK_IMPORTED_MODULE_11__["SweetalertService"] },
        { type: app_shared_services_exportexcel_service__WEBPACK_IMPORTED_MODULE_10__["ExportexcelService"] },
        { type: ngx_alerts__WEBPACK_IMPORTED_MODULE_9__["AlertService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('search'),
        __metadata("design:type", Object)
    ], AssetuploadComponent.prototype, "search", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("fileInput"),
        __metadata("design:type", Object)
    ], AssetuploadComponent.prototype, "fileInput", void 0);
    AssetuploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assetupload',
            template: __importDefault(__webpack_require__(/*! raw-loader!./assetupload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/asset/assetupload/assetupload.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./assetupload.component.css */ "./src/app/masterdata/asset/assetupload/assetupload.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _services_asset_service__WEBPACK_IMPORTED_MODULE_5__["AssetService"],
            app_shared_services_appstorage_service__WEBPACK_IMPORTED_MODULE_12__["AppstorageService"],
            app_shared_services_logs_service__WEBPACK_IMPORTED_MODULE_13__["LogsService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            app_shared_services_downloadfile_service__WEBPACK_IMPORTED_MODULE_7__["FileService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            ngx_alerts__WEBPACK_IMPORTED_MODULE_9__["AlertService"],
            app_shared_services_sweetalert_service__WEBPACK_IMPORTED_MODULE_11__["SweetalertService"],
            app_shared_services_exportexcel_service__WEBPACK_IMPORTED_MODULE_10__["ExportexcelService"],
            ngx_alerts__WEBPACK_IMPORTED_MODULE_9__["AlertService"]])
    ], AssetuploadComponent);
    return AssetuploadComponent;
}());



/***/ }),

/***/ "./src/app/masterdata/assettype/assettype.component.css":
/*!**************************************************************!*\
  !*** ./src/app/masterdata/assettype/assettype.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3RlcmRhdGEvYXNzZXR0eXBlL2Fzc2V0dHlwZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/masterdata/assettype/assettype.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/masterdata/assettype/assettype.component.ts ***!
  \*************************************************************/
/*! exports provided: AssettypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssettypeComponent", function() { return AssettypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _services_assettype_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/assettype.service */ "./src/app/masterdata/assettype/services/assettype.service.ts");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/__ivy_ngcc__/fesm5/ngx-alerts.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var AssettypeComponent = /** @class */ (function () {
    function AssettypeComponent(astTySrv, fb, alertService) {
        this.astTySrv = astTySrv;
        this.fb = fb;
        this.alertService = alertService;
        this.loading = false;
        this.notificationMessage = '';
        this.AssetTypes = [];
        this.showAsTypCodGuid = false;
        this.onGetAllAssetTypes();
    }
    AssettypeComponent.prototype.showAssetTypeCodeGuide = function () {
        return this.showAsTypCodGuid;
    };
    AssettypeComponent.prototype.ngOnInit = function () {
        this.astTyForm = this.fb.group({
            asttypId: 0,
            // AssetTypeCode: [null, Validators.required],
            asttypName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    AssettypeComponent.prototype.fillAssetType = function () {
        this.AssetTypes = [
            { asttypName: 'Laptop' },
            { asttypName: 'Desktop' },
            { asttypName: 'Server' },
            { asttypName: 'Storage' },
            { asttypName: 'Mobile' },
            { asttypName: 'MiFi' },
            { asttypName: 'USB' },
            { asttypName: 'VoiceLine' },
            { asttypName: 'DataLine' },
            { asttypName: 'DataLine-ADSL' },
            { asttypName: 'Stamp' },
            { asttypName: 'Others' }
        ];
    };
    AssettypeComponent.prototype.onDBUpdate = function () {
        var _this = this;
        this.fillAssetType();
        this.astTySrv.addMultipleAssetsTypes(this.AssetTypes).subscribe(function (res) {
            _this.onGetAllAssetTypes();
        });
    };
    AssettypeComponent.prototype.onGetAllAssetTypes = function () {
        var _this = this;
        this.loading = true;
        this.astTySrv.getAllAssetsTypes().subscribe(function (astTys) {
            _this.AssetTypes = astTys;
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
            if (error.message.includes('Http failure response for http://')) {
            }
        });
    };
    AssettypeComponent.prototype.onSubmit = function (status) {
        var _this = this;
        if (this.astTyForm.value.asttypId == 0) {
            //  
            this.loading = true;
            this.astTySrv.addAssetType(this.astTyForm.value).subscribe(function (AssetTypeAdded) {
                if (status == 'Add') {
                    _this.astTyForm.reset();
                    _this.astTyForm.controls['asttypId'].setValue(0);
                    _this.loading = false;
                    //     this.noticationMessegeTimer('AssetType Added Successfully');
                    _this.alertService.success('Added Successfully');
                    _this.onGetAllAssetTypes();
                }
                else if (status == 'Save') {
                    _this.loading = false;
                    _this.alertService.success('Saved Successfully');
                    //   this.noticationMessegeTimer('AssetType Added Successfully');
                    _this.onGetAllAssetTypes();
                }
                ;
            }, function (error) {
                _this.alertService.danger('Server Error, data has not been saved');
                //       console.log('Data is not Imported ...' ,  error.message);
                _this.loading = false;
                //       if(error.message.includes('Http failure response for http://')) {
                //  //       this.noticationMessegeTimer('Server connection Error / Data has NOT been saved to the DB');
                //       }
            });
        }
        else if (this.astTyForm.value.asttypId > 0) {
            this.astTySrv.editAssetType(this.astTyForm.value.asttypId, this.astTyForm.value).subscribe(function (AssetTypeAdded) {
                _this.astTyForm.reset();
                _this.astTyForm.controls['asttypId'].setValue(0);
                _this.onGetAllAssetTypes();
                //         this.noticationMessegeTimer('AssetType Saved Successfully');
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    //          this.noticationMessegeTimer('Server connection Error / Data has NOT been saved to the DB') ;
                }
            });
        }
    };
    AssettypeComponent.prototype.onEditAssetType = function (emp) {
        //  
        this.astTyForm.reset();
        this.astTyForm.patchValue(emp);
        //  this.astTyForm.controls.AssetTypeTypes.get('emptypName').patchValue(emp.AssetTypeType.emptypName);
    };
    AssettypeComponent.prototype.onDeleteAssetType = function (emp) {
        var _this = this;
        //   if(confirm("Are you sure to delete AssetType " + emp.astTyName)){
        //   
        this.astTySrv.deleteAssetType(emp.asttypId).subscribe(function (empdlt) {
            _this.alertService.success('AssetType: ' + empdlt.asttypName + ' is deleted');
            // this.alertService.info('this is an info alert');
            //this.alertService.danger('this is a danger alert');
            // this.alertService.success('this is a success alert');
            // this.alertService.warning('this is a warning alert');
            // this.alertService.warning({html: '<a (click)="okAlertFn()"><b>Yes Proceed</b></a> '});
            _this.onGetAllAssetTypes();
        }, function (error) {
            _this.alertService.danger('Server Error, Operation Apported ');
            _this.loading = false;
            //   if(error.message.includes('Http failure response for http://')) {
            //  //  this.noticationMessegeTimer('Server connection Error / Data has NOT been saved to the DB');
            //   }
        });
    };
    AssettypeComponent.prototype.onCancel = function () {
        this.astTyForm.reset();
    };
    Object.defineProperty(AssettypeComponent.prototype, "getAssetTypeForm", {
        get: function () { return this.astTyForm.controls; },
        enumerable: true,
        configurable: true
    });
    AssettypeComponent.ctorParameters = function () { return [
        { type: _services_assettype_service__WEBPACK_IMPORTED_MODULE_2__["AssettypeService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: ngx_alerts__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }
    ]; };
    AssettypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assettype',
            template: __importDefault(__webpack_require__(/*! raw-loader!./assettype.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/assettype/assettype.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./assettype.component.css */ "./src/app/masterdata/assettype/assettype.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_assettype_service__WEBPACK_IMPORTED_MODULE_2__["AssettypeService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_alerts__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], AssettypeComponent);
    return AssettypeComponent;
}());



/***/ }),

/***/ "./src/app/masterdata/branch/branch.component.css":
/*!********************************************************!*\
  !*** ./src/app/masterdata/branch/branch.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3RlcmRhdGEvYnJhbmNoL2JyYW5jaC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/masterdata/branch/branch.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/masterdata/branch/branch.component.ts ***!
  \*******************************************************/
/*! exports provided: BranchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchComponent", function() { return BranchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/branch.service */ "./src/app/masterdata/branch/services/branch.service.ts");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/__ivy_ngcc__/fesm5/ngx-alerts.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var BranchComponent = /** @class */ (function () {
    function BranchComponent(brnSrv, fb, alertService) {
        this.brnSrv = brnSrv;
        this.fb = fb;
        this.alertService = alertService;
        this.loading = false;
        this.notificationMessage = '';
        this.Branchs = [];
        this.onGetAllBranchs();
    }
    BranchComponent.prototype.ngOnInit = function () {
        this.branchForm = this.fb.group({
            brnId: 0,
            brnCode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            brnName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    BranchComponent.prototype.onGetAllBranchs = function () {
        var _this = this;
        //    
        this.loading = true;
        this.brnSrv.getAllBranchs().subscribe(function (brns) {
            _this.Branchs = brns;
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
            if (error.message.includes('Http failure response for http://')) {
                _this.alertService.danger('Server error ');
            }
        });
    };
    BranchComponent.prototype.onSubmit = function (status) {
        var _this = this;
        if (this.branchForm.value.brnId == 0) {
            //  
            this.loading = true;
            this.brnSrv.addBranch(this.branchForm.value).subscribe(function (BranchAdded) {
                _this.branchForm.reset();
                _this.branchForm.controls['brnId'].setValue(0);
                _this.loading = false;
                _this.alertService.success('Created Successfully ');
                _this.onGetAllBranchs();
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error ');
                }
            });
        }
        else if (this.branchForm.value.brnId > 0) {
            this.brnSrv.editBranch(this.branchForm.value.brnId, this.branchForm.value).subscribe(function (BranchAdded) {
                _this.branchForm.reset();
                _this.branchForm.controls['brnId'].setValue(0);
                _this.onGetAllBranchs();
                _this.alertService.success('Chnaged Successfully ');
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error ');
                }
            });
        }
    };
    BranchComponent.prototype.onEditBranch = function (emp) {
        //  
        this.branchForm.reset();
        this.branchForm.patchValue(emp);
        //  this.branchForm.controls.BranchTypes.get('emptypName').patchValue(emp.BranchType.emptypName);
    };
    BranchComponent.prototype.onDeleteBranch = function (emp) {
        var _this = this;
        if (confirm("Are you sure to delete Branch " + emp.brnName)) {
            this.brnSrv.deleteBranch(emp.brnId).subscribe(function (empdlt) {
                _this.alertService.success('Deleted Successfully');
                // this.alertService.info('this is an info alert');
                // this.alertService.danger('this is a danger alert');
                // this.alertService.success('this is a success alert');
                // this.alertService.warning('this is a warning alert');
                // this.alertService.warning({html: '<a (click)="okAlertFn()"><b>Yes Proceed</b></a> '});
                _this.onGetAllBranchs();
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error');
                }
            });
        }
    };
    BranchComponent.prototype.onCancel = function () {
        this.branchForm.reset();
    };
    Object.defineProperty(BranchComponent.prototype, "getBranchForm", {
        get: function () { return this.branchForm.controls; },
        enumerable: true,
        configurable: true
    });
    BranchComponent.ctorParameters = function () { return [
        { type: _services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: ngx_alerts__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }
    ]; };
    BranchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-branch',
            template: __importDefault(__webpack_require__(/*! raw-loader!./branch.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/branch/branch.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./branch.component.css */ "./src/app/masterdata/branch/branch.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_alerts__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], BranchComponent);
    return BranchComponent;
}());



/***/ }),

/***/ "./src/app/masterdata/codeguide/codeguide.component.css":
/*!**************************************************************!*\
  !*** ./src/app/masterdata/codeguide/codeguide.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3RlcmRhdGEvY29kZWd1aWRlL2NvZGVndWlkZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/masterdata/codeguide/codeguide.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/masterdata/codeguide/codeguide.component.ts ***!
  \*************************************************************/
/*! exports provided: CodeguideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeguideComponent", function() { return CodeguideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _assettype_services_assettype_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assettype/services/assettype.service */ "./src/app/masterdata/assettype/services/assettype.service.ts");
/* harmony import */ var _company_services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../company/services/company.service */ "./src/app/masterdata/company/services/company.service.ts");
/* harmony import */ var _branch_services_branch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../branch/services/branch.service */ "./src/app/masterdata/branch/services/branch.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var CodeguideComponent = /** @class */ (function () {
    function CodeguideComponent(astTypSrv, comSrv, brnSrv) {
        this.astTypSrv = astTypSrv;
        this.comSrv = comSrv;
        this.brnSrv = brnSrv;
        // public AssetCodes: any[] = [
        //   { Laptops: "100100",   },
        // ];
        this.AssetTypes = [];
        this.Companies = [];
        this.Branchs = [];
    }
    CodeguideComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.astTypSrv.getAllAssetsTypes().subscribe(function (astTyps) {
            _this.AssetTypes = astTyps;
        });
        this.comSrv.getAllCompanys().subscribe(function (coms) {
            _this.Companies = coms;
        });
        this.brnSrv.getAllBranchs().subscribe(function (brns) {
            _this.Branchs = brns;
        });
    };
    CodeguideComponent.ctorParameters = function () { return [
        { type: _assettype_services_assettype_service__WEBPACK_IMPORTED_MODULE_1__["AssettypeService"] },
        { type: _company_services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"] },
        { type: _branch_services_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"] }
    ]; };
    CodeguideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-codeguide',
            template: __importDefault(__webpack_require__(/*! raw-loader!./codeguide.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/codeguide/codeguide.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./codeguide.component.css */ "./src/app/masterdata/codeguide/codeguide.component.css")).default]
        }),
        __metadata("design:paramtypes", [_assettype_services_assettype_service__WEBPACK_IMPORTED_MODULE_1__["AssettypeService"],
            _company_services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"],
            _branch_services_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"]])
    ], CodeguideComponent);
    return CodeguideComponent;
}());



/***/ }),

/***/ "./src/app/masterdata/company/company.component.css":
/*!**********************************************************!*\
  !*** ./src/app/masterdata/company/company.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3RlcmRhdGEvY29tcGFueS9jb21wYW55LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/masterdata/company/company.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/masterdata/company/company.component.ts ***!
  \*********************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/__ivy_ngcc__/fesm5/ngx-alerts.js");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/company.service */ "./src/app/masterdata/company/services/company.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var CompanyComponent = /** @class */ (function () {
    function CompanyComponent(brnSrv, fb, alertService) {
        this.brnSrv = brnSrv;
        this.fb = fb;
        this.alertService = alertService;
        this.loading = false;
        this.notificationMessage = '';
        this.Companys = [];
        this.status = '';
        this.onGetAllCompanys();
    }
    CompanyComponent.prototype.ngOnInit = function () {
        this.companyForm = this.fb.group({
            comId: 0,
            comCode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            comName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    CompanyComponent.prototype.onGetAllCompanys = function () {
        var _this = this;
        //    debugger;
        this.loading = true;
        this.brnSrv.getAllCompanys().subscribe(function (coms) {
            _this.Companys = coms;
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
            if (error.message.includes('Http failure response for http://')) {
                _this.alertService.danger('Server error ');
            }
        });
    };
    CompanyComponent.prototype.setStatus = function (s) {
        this.status = s;
    };
    CompanyComponent.prototype.onSubmit = function () {
        var _this = this;
        debugger;
        if (this.companyForm.value.comId == 0) {
            //  debugger;
            this.loading = true;
            this.brnSrv.addCompany(this.companyForm.value).subscribe(function (CompanyAdded) {
                _this.companyForm.reset();
                _this.companyForm.controls['comId'].setValue(0);
                _this.loading = false;
                _this.alertService.success('Cearted Successfully ');
                _this.onGetAllCompanys();
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error ');
                }
            });
        }
        else if (this.companyForm.value.comId > 0) {
            debugger;
            this.brnSrv.editCompany(this.companyForm.value.comId, this.companyForm.value).subscribe(function (CompanyAdded) {
                _this.onGetAllCompanys();
                _this.companyForm.reset();
                _this.companyForm.controls['comId'].setValue(0);
                _this.alertService.success('Changed Successfully ');
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error ');
                }
            });
        }
    };
    CompanyComponent.prototype.onEditCompany = function (emp) {
        //  debugger;
        this.companyForm.reset();
        this.companyForm.patchValue(emp);
        //  this.companyForm.controls.CompanyTypes.get('emptypName').patchValue(emp.CompanyType.emptypName);
    };
    CompanyComponent.prototype.onDeleteCompany = function (emp) {
        var _this = this;
        if (confirm("Are you sure to delete Company " + emp.comName)) {
            debugger;
            this.brnSrv.deleteCompany(emp.comId).subscribe(function (empdlt) {
                _this.alertService.success('Company: ' + empdlt.comName + '  Deleted Successfully');
                // this.alertService.info('this is an info alert');
                // this.alertService.danger('this is a danger alert');
                // this.alertService.success('this is a success alert');
                // this.alertService.warning('this is a warning alert');
                // this.alertService.warning({html: '<a (click)="okAlertFn()"><b>Yes Proceed</b></a> '});
                _this.onGetAllCompanys();
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('server error ');
                }
            });
        }
    };
    CompanyComponent.prototype.onCancel = function () {
        this.companyForm.reset();
    };
    Object.defineProperty(CompanyComponent.prototype, "getCompanyForm", {
        get: function () { return this.companyForm.controls; },
        enumerable: true,
        configurable: true
    });
    CompanyComponent.ctorParameters = function () { return [
        { type: _services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: ngx_alerts__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }
    ]; };
    CompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company',
            template: __importDefault(__webpack_require__(/*! raw-loader!./company.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/company/company.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./company.component.css */ "./src/app/masterdata/company/company.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_alerts__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/masterdata/costcenter/costcenter.component.css":
/*!****************************************************************!*\
  !*** ./src/app/masterdata/costcenter/costcenter.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3RlcmRhdGEvY29zdGNlbnRlci9jb3N0Y2VudGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/masterdata/costcenter/costcenter.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/masterdata/costcenter/costcenter.component.ts ***!
  \***************************************************************/
/*! exports provided: CostCenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostCenterComponent", function() { return CostCenterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/__ivy_ngcc__/fesm5/ngx-alerts.js");
/* harmony import */ var _Services_costcenter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services/costcenter.service */ "./src/app/masterdata/costcenter/Services/costcenter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var CostCenterComponent = /** @class */ (function () {
    function CostCenterComponent(brnSrv, fb, alertService) {
        this.brnSrv = brnSrv;
        this.fb = fb;
        this.alertService = alertService;
        this.loading = false;
        this.notificationMessage = '';
        this.costcenters = [];
        this.onGetAllcostcenters();
    }
    CostCenterComponent.prototype.ngOnInit = function () {
        this.costcenterForm = this.fb.group({
            CostCenterId: null,
            //   costcenterCode: [null, Validators.required],
            ccName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    CostCenterComponent.prototype.onGetAllcostcenters = function () {
        var _this = this;
        //    
        this.loading = true;
        this.brnSrv.getAllCostCenters().subscribe(function (coms) {
            _this.costcenters = coms;
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
            if (error.message.includes('Http failure response for http://')) {
                _this.alertService.danger('Server error');
            }
        });
    };
    CostCenterComponent.prototype.onSubmit = function (status) {
        var _this = this;
        if (this.costcenterForm.value.CostCenterId == null) {
            this.loading = true;
            this.brnSrv.addCostCenter(this.costcenterForm.value).subscribe(function (costcenterAdded) {
                _this.loading = false;
                _this.costcenterForm.reset();
                _this.costcenterForm.get('CostCenterId').setValue(null);
                _this.alertService.success('Created Successfully');
                _this.onGetAllcostcenters();
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error');
                }
            });
        }
        else if (this.costcenterForm.value.CostCenterId > 0) {
            this.brnSrv.editCostCenter(this.costcenterForm.value.CostCenterId, this.costcenterForm.value).subscribe(function (costcenterAdded) {
                _this.loading = false;
                _this.costcenterForm.reset();
                _this.onGetAllcostcenters();
                _this.alertService.success('Chaned Successfully');
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error');
                }
            });
        }
    };
    CostCenterComponent.prototype.onEditcostcenter = function (cc) {
        //  
        this.costcenterForm.reset();
        this.costcenterForm.patchValue(cc);
        //  this.costcenterForm.controls.costcenterTypes.get('cstypName').patchValue(cs.costcenterType.cstypName);
    };
    CostCenterComponent.prototype.onDeletecostcenter = function (cc) {
        var _this = this;
        if (confirm("Are you sure to delete costcenter " + cc.ccName)) {
            this.brnSrv.deleteCostCenter(cc.CostCenterId).subscribe(function (csdlt) {
                // this.alertService.danger('costcenter: ' +  csdlt.ccName + ' is deleted');
                // this.alertService.info('this is an info alert');
                // this.alertService.danger('this is a danger alert');
                _this.alertService.success('Deleted Successfully');
                // this.alertService.warning('this is a warning alert');
                // this.alertService.warning({html: '<a (click)="okAlertFn()"><b>Yes Proceed</b></a> '});
                _this.onGetAllcostcenters();
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error');
                }
            });
        }
    };
    CostCenterComponent.prototype.onCancel = function () {
        this.costcenterForm.reset();
    };
    Object.defineProperty(CostCenterComponent.prototype, "getcostcenterForm", {
        get: function () { return this.costcenterForm.controls; },
        enumerable: true,
        configurable: true
    });
    CostCenterComponent.ctorParameters = function () { return [
        { type: _Services_costcenter_service__WEBPACK_IMPORTED_MODULE_3__["CostcenterService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: ngx_alerts__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }
    ]; };
    CostCenterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cost-center',
            template: __importDefault(__webpack_require__(/*! raw-loader!./costcenter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/costcenter/costcenter.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./costcenter.component.css */ "./src/app/masterdata/costcenter/costcenter.component.css")).default]
        }),
        __metadata("design:paramtypes", [_Services_costcenter_service__WEBPACK_IMPORTED_MODULE_3__["CostcenterService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_alerts__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], CostCenterComponent);
    return CostCenterComponent;
}());



/***/ }),

/***/ "./src/app/masterdata/department/department.component.css":
/*!****************************************************************!*\
  !*** ./src/app/masterdata/department/department.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3RlcmRhdGEvZGVwYXJ0bWVudC9kZXBhcnRtZW50LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/masterdata/department/department.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/masterdata/department/department.component.ts ***!
  \***************************************************************/
/*! exports provided: DepartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentComponent", function() { return DepartmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/__ivy_ngcc__/fesm5/ngx-alerts.js");
/* harmony import */ var _services_department_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/department.service */ "./src/app/masterdata/department/services/department.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var DepartmentComponent = /** @class */ (function () {
    function DepartmentComponent(brnSrv, fb, alertService) {
        this.brnSrv = brnSrv;
        this.fb = fb;
        this.alertService = alertService;
        this.loading = false;
        this.notificationMessage = '';
        this.departmetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            dptId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            dptName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            dptCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.Departments = [];
        this.onGetAllDepartments();
    }
    DepartmentComponent.prototype.ngOnInit = function () {
        this.departmetForm = this.fb.group({
            dptId: 0,
            dptName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dptCode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    DepartmentComponent.prototype.onGetAllDepartments = function () {
        var _this = this;
        //    
        this.loading = true;
        this.brnSrv.getAllDepartments().subscribe(function (brns) {
            _this.Departments = brns;
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
            if (error.message.includes('Http failure response for http://')) {
                _this.alertService.danger('Server error');
            }
        });
    };
    DepartmentComponent.prototype.onSubmit = function (status) {
        var _this = this;
        if (this.departmetForm.value.dptId == 0) {
            //  
            this.loading = true;
            this.brnSrv.addDepartment(this.departmetForm.value).subscribe(function (DepartmentAdded) {
                _this.departmetForm.reset();
                _this.departmetForm.controls['dptId'].setValue(0);
                _this.loading = false;
                _this.alertService.success('Operator Created Successfully');
                _this.onGetAllDepartments();
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error');
                }
            });
        }
        else if (this.departmetForm.value.dptId > 0) {
            this.brnSrv.editDepartment(this.departmetForm.value.dptId, this.departmetForm.value).subscribe(function (DepartmentAdded) {
                _this.departmetForm.reset();
                _this.departmetForm.controls['dptId'].setValue(0);
                _this.onGetAllDepartments();
                _this.alertService.success('Changed Successfully');
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error');
                }
            });
        }
    };
    DepartmentComponent.prototype.onEditDepartment = function (emp) {
        this.departmetForm.reset();
        this.departmetForm.patchValue(emp);
    };
    DepartmentComponent.prototype.onDeleteDepartment = function (emp) {
        var _this = this;
        if (confirm("Are you sure to delete Department " + emp.dptName)) {
            this.brnSrv.deleteDepartment(emp.dptId).subscribe(function (empdlt) {
                _this.alertService.success('Department: ' + empdlt.dptName + ' Deleted Successfully');
                _this.onGetAllDepartments();
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error');
                }
            });
        }
    };
    DepartmentComponent.prototype.onCancel = function () {
        this.departmetForm.reset();
    };
    Object.defineProperty(DepartmentComponent.prototype, "getDepartmentForm", {
        get: function () { return this.departmetForm.controls; },
        enumerable: true,
        configurable: true
    });
    DepartmentComponent.ctorParameters = function () { return [
        { type: _services_department_service__WEBPACK_IMPORTED_MODULE_3__["DepartmentService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: ngx_alerts__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }
    ]; };
    DepartmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-department',
            template: __importDefault(__webpack_require__(/*! raw-loader!./department.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/department/department.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./department.component.css */ "./src/app/masterdata/department/department.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_department_service__WEBPACK_IMPORTED_MODULE_3__["DepartmentService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_alerts__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], DepartmentComponent);
    return DepartmentComponent;
}());



/***/ }),

/***/ "./src/app/masterdata/department/services/department.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/masterdata/department/services/department.service.ts ***!
  \**********************************************************************/
/*! exports provided: DepartmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentService", function() { return DepartmentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var DepartmentService = /** @class */ (function () {
    // Categorys: any = [];
    function DepartmentService(http) {
        this.http = http;
    }
    DepartmentService.prototype.getAllDepartments = function () {
        //  
        return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'Departments');
    };
    DepartmentService.prototype.addDepartment = function (body) {
        //    
        return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'Departments', body);
    };
    DepartmentService.prototype.editDepartment = function (id, body) {
        return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'Departments/' + id, body);
    };
    // deleteDepartment(id: number){
    //   return this.Department.delete(environment.apiURL + `Departments/$(id)`);
    // }
    DepartmentService.prototype.deleteDepartment = function (id) {
        return this.http.delete(environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'Departments/' + id);
    };
    DepartmentService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DepartmentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DepartmentService);
    return DepartmentService;
}());



/***/ }),

/***/ "./src/app/masterdata/domain/domain.component.css":
/*!********************************************************!*\
  !*** ./src/app/masterdata/domain/domain.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3RlcmRhdGEvZG9tYWluL2RvbWFpbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/masterdata/domain/domain.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/masterdata/domain/domain.component.ts ***!
  \*******************************************************/
/*! exports provided: DomainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainComponent", function() { return DomainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/__ivy_ngcc__/fesm5/ngx-alerts.js");
/* harmony import */ var _services_domain_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/domain.service */ "./src/app/masterdata/domain/services/domain.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




// import { DomainService } from './services/genaricemail.service';
var DomainComponent = /** @class */ (function () {
    function DomainComponent(domSrv, fb, alertService) {
        this.domSrv = domSrv;
        this.fb = fb;
        this.alertService = alertService;
        this.loading = false;
        this.notificationMessage = '';
        this.domainForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            domId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            genEmailAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.Domains = [];
        this.onGetAllDomains();
    }
    DomainComponent.prototype.ngOnInit = function () {
        this.domainForm = this.fb.group({
            domId: 0,
            domName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    DomainComponent.prototype.onGetAllDomains = function () {
        var _this = this;
        //    
        this.loading = true;
        this.domSrv.getAllDomains().subscribe(function (brns) {
            _this.Domains = brns;
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
            if (error.message.includes('Http failure response for http://')) {
                _this.alertService.danger('Server error ');
            }
        });
    };
    DomainComponent.prototype.onSubmit = function (status) {
        var _this = this;
        if (this.domainForm.value.domId == 0) {
            this.loading = true;
            this.domSrv.addDomain(this.domainForm.value).subscribe(function (DomainAdded) {
                _this.domainForm.reset();
                _this.domainForm.controls['domId'].setValue(0);
                _this.loading = false;
                _this.onGetAllDomains();
                _this.alertService.success('Created Successfully ');
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error ');
                }
            });
        }
        else if (this.domainForm.value.domId > 0) {
            this.domSrv.editDomain(this.domainForm.value.domId, this.domainForm.value).subscribe(function (DomainAdded) {
                _this.domainForm.reset();
                _this.domainForm.controls['domId'].setValue(0);
                _this.onGetAllDomains();
                _this.alertService.success('Saved Successfully ');
            }, function (error) {
                console.log('Data is not Imported ...', error.message);
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error ');
                }
            });
        }
    };
    DomainComponent.prototype.onEditDomain = function (dom) {
        this.domainForm.reset();
        this.domainForm.patchValue(dom);
    };
    DomainComponent.prototype.onDeleteDomain = function (dom) {
        var _this = this;
        if (confirm("Are you sure to delete Domain " + dom.domName)) {
            this.domSrv.deleteDomain(dom.domId).subscribe(function (domdlt) {
                _this.alertService.success('Deleted Successfully ');
                _this.onGetAllDomains();
            }, function (error) {
                console.log('Data is not Imported ...', error.message);
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error ');
                }
            });
        }
    };
    DomainComponent.prototype.onCancel = function () {
        this.domainForm.reset();
    };
    Object.defineProperty(DomainComponent.prototype, "getDomainForm", {
        get: function () { return this.domainForm.controls; },
        enumerable: true,
        configurable: true
    });
    DomainComponent.ctorParameters = function () { return [
        { type: _services_domain_service__WEBPACK_IMPORTED_MODULE_3__["DomainService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: ngx_alerts__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }
    ]; };
    DomainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-domain',
            template: __importDefault(__webpack_require__(/*! raw-loader!./domain.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/domain/domain.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./domain.component.css */ "./src/app/masterdata/domain/domain.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_domain_service__WEBPACK_IMPORTED_MODULE_3__["DomainService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_alerts__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], DomainComponent);
    return DomainComponent;
}());



/***/ }),

/***/ "./src/app/masterdata/domain/services/domain.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/masterdata/domain/services/domain.service.ts ***!
  \**************************************************************/
/*! exports provided: DomainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainService", function() { return DomainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var DomainService = /** @class */ (function () {
    // Categorys: any = [];
    function DomainService(http) {
        this.http = http;
    }
    DomainService.prototype.getAllDomains = function () {
        //  debugger;
        return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'Domains');
    };
    DomainService.prototype.addDomain = function (body) {
        //    debugger;
        return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'Domains', body);
    };
    DomainService.prototype.editDomain = function (id, body) {
        return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'Domains/' + id, body);
    };
    // deleteDomain(id: number){
    //   return this.Domain.delete(environment.apiURL + `Domains/$(id)`);
    // }
    DomainService.prototype.deleteDomain = function (id) {
        return this.http.delete(environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'Domains/' + id);
    };
    DomainService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DomainService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DomainService);
    return DomainService;
}());



/***/ }),

/***/ "./src/app/masterdata/employee/empdirectory/empdirectory.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/masterdata/employee/empdirectory/empdirectory.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-rounded{\r\n\r\n    border-radius: 30%;\r\n}\r\n\r\n.toolbarIcon{\r\n    font-size: 25px;\r\n    color: black;\r\n    padding-top: 13px;\r\n    padding-bottom: 7px;\r\n    padding-right: 10px;\r\n    padding-left: 10px;\r\n    cursor: pointer;\r\n    /* box-shadow: 1px 2px grey; */\r\n}\r\n\r\n.toolbarIcon:hover {\r\n    margin-top: 6px;\r\n    font-size: 28px;\r\n    color: blue;\r\n    padding-top: 7px;\r\n    padding-bottom: 7px;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    cursor: pointer;\r\n    border: 1px solid #f9f9f900;\r\n    background-color: white;\r\n}\r\n\r\n.marginsDropdownList{\r\n    margin-top: 8px;\r\n    padding-top: 7px;\r\n    padding-bottom: 7px;\r\n}\r\n\r\n.marginsPaging{\r\n    margin-top: 8px;\r\n    padding-top: 7px;\r\n    padding-bottom: 7px;\r\n}\r\n\r\n.marginsSearch{\r\n    /* margin-right: 10px; */\r\n    padding-top: 7px;\r\n    padding-bottom: 7px;\r\n}\r\n\r\n.toolbarCard{\r\n    box-shadow: 1px 1px 1px 1px grey; \r\n    /* margin: auto; */\r\n    /* height: 40px; */\r\n    background-color: #f9f9f9;\r\n    border: 1px solid rgb(212, 212, 212);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyZGF0YS9lbXBsb3llZS9lbXBkaXJlY3RvcnkvZW1wZGlyZWN0b3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDhCQUE4QjtBQUNsQzs7QUFDQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixvQ0FBb0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9tYXN0ZXJkYXRhL2VtcGxveWVlL2VtcGRpcmVjdG9yeS9lbXBkaXJlY3RvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctcm91bmRlZHtcclxuXHJcbiAgICBib3JkZXItcmFkaXVzOiAzMCU7XHJcbn1cclxuXHJcbi50b29sYmFySWNvbntcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmctdG9wOiAxM3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAvKiBib3gtc2hhZG93OiAxcHggMnB4IGdyZXk7ICovXHJcbn1cclxuLnRvb2xiYXJJY29uOmhvdmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y5ZjlmOTAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLm1hcmdpbnNEcm9wZG93bkxpc3R7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcclxufVxyXG4ubWFyZ2luc1BhZ2luZ3tcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG59XHJcbi5tYXJnaW5zU2VhcmNoe1xyXG4gICAgLyogbWFyZ2luLXJpZ2h0OiAxMHB4OyAqL1xyXG4gICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbn1cclxuLnRvb2xiYXJDYXJke1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4IGdyZXk7IFxyXG4gICAgLyogbWFyZ2luOiBhdXRvOyAqL1xyXG4gICAgLyogaGVpZ2h0OiA0MHB4OyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTIsIDIxMiwgMjEyKTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/masterdata/employee/empdirectory/empdirectory.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/masterdata/employee/empdirectory/empdirectory.component.ts ***!
  \****************************************************************************/
/*! exports provided: EmpdirectoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpdirectoryComponent", function() { return EmpdirectoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/employee.service */ "./src/app/masterdata/employee/services/employee.service.ts");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/__ivy_ngcc__/fesm5/ngx-alerts.js");
/* harmony import */ var app_shared_services_exportexcel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/exportexcel.service */ "./src/app/shared/services/exportexcel.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var app_masterdata_branch_services_branch_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/masterdata/branch/services/branch.service */ "./src/app/masterdata/branch/services/branch.service.ts");
/* harmony import */ var app_masterdata_company_services_company_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/masterdata/company/services/company.service */ "./src/app/masterdata/company/services/company.service.ts");
/* harmony import */ var app_masterdata_department_services_department_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/masterdata/department/services/department.service */ "./src/app/masterdata/department/services/department.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};











var EmpdirectoryComponent = /** @class */ (function () {
    function EmpdirectoryComponent(empSrv, alertService, expExcelSrv, fb, brnSrv, dptSrv, comSrv) {
        this.empSrv = empSrv;
        this.alertService = alertService;
        this.expExcelSrv = expExcelSrv;
        this.fb = fb;
        this.brnSrv = brnSrv;
        this.dptSrv = dptSrv;
        this.comSrv = comSrv;
        this.loading = false;
        this.temp = [];
        this.EmployeesList = [];
        this.Employees = [];
        this.SelectedEmployees = [];
        this.pageSize = 10;
        this.pageIndex = 1;
        this.Departments = [];
        this.Branchs = [];
        this.Companys = [];
    }
    EmpdirectoryComponent.prototype.ngOnInit = function () {
        this.buildSearchForm();
        this.onGetAllEmployees();
        this.onGetAllCompanys();
        this.onGetAllBranchs();
        this.onGetAllDepartments();
    };
    EmpdirectoryComponent.prototype.buildSearchForm = function () {
        this.searchForm = this.fb.group({
            DepartmentName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            BranchName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            CompanyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
        });
    };
    EmpdirectoryComponent.prototype.searchFilter = function (filters) {
        var _this = this;
        this.loading = true;
        this.empSrv.getAllEmployeesWithAssets().subscribe(function (employees) {
            debugger;
            _this.Employees = [];
            _this.Employees = employees;
            Object.keys(filters).forEach(function (key) { return filters[key] === '' ? delete filters[key] : key; });
            var keys = Object.keys(filters);
            var filterEmps = function (invoice) { return keys.every(function (key) { return invoice[key] === filters[key]; }); };
            var emps = _this.Employees.filter(filterEmps);
            _this.Employees = emps;
            _this.loading = false;
            //  this.onUpdatestatistics();
            _this.pageIndex = 1;
        });
    };
    EmpdirectoryComponent.prototype.onGetAllEmployees = function () {
        var _this = this;
        this.loading = true;
        this.empSrv.getAllEmployeesWithEmails().subscribe(function (emps) {
            debugger;
            _this.Employees = emps;
            _this.temp = emps; // for search
            _this.EmployeesList = emps;
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
            if (error.message.includes('Http failure response for http://')) {
                _this.alertService.danger('Server Error');
            }
        });
    };
    EmpdirectoryComponent.prototype.onGetAllCompanys = function () {
        var _this = this;
        this.loading = true;
        this.comSrv.getAllCompanys().subscribe(function (coms) {
            _this.Companys = coms;
        }, function (error) {
            _this.loading = false;
            if (error.message.includes('Http failure response for http://')) {
                _this.alertService.danger('Server error');
            }
        });
    };
    EmpdirectoryComponent.prototype.onGetAllDepartments = function () {
        var _this = this;
        //  
        this.dptSrv.getAllDepartments().subscribe(function (dpts) {
            //    
            _this.Departments = dpts;
        });
    };
    EmpdirectoryComponent.prototype.onGetAllBranchs = function () {
        var _this = this;
        //  
        this.brnSrv.getAllBranchs().subscribe(function (brns) {
            //    
            _this.Branchs = brns;
        });
    };
    EmpdirectoryComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        // Add 'implements AfterViewInit' to the class.
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this.search.nativeElement, 'keydown')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(550), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (x) { return x['target']['value']; }))
            .subscribe(function (value) {
            _this.updateFilter(value);
        });
    };
    EmpdirectoryComponent.prototype.updateFilter = function (val) {
        // console.log(Object.keys(this.temp[0]).length);
        var value = val.toString().toLowerCase().trim();
        // 
        // get the amount of columns in the table
        var count = Object.keys(this.temp[0]).length;
        // 
        // get the key names of each column in the dataset
        var keys = Object.keys(this.temp[0]);
        // 
        // assign filtered matches to the active datatable
        this.Employees = this.temp.filter(function (item) {
            // 
            // iterate through each row's column data
            for (var i = 0; i < count; i++) {
                // check for a match
                if ((item[keys[i]] &&
                    item[keys[i]]
                        .toString()
                        .toLowerCase()
                        .indexOf(value) !== -1) ||
                    !value) {
                    // found match, return true to add to result set
                    // console.log(item, 1);
                    return true;
                }
            }
        });
        //Whenever the filter changes, always go back to the first page
    };
    EmpdirectoryComponent.prototype.onFilterBy = function (e) {
        if (e.target.selectedOptions[0].text.toString() == 'Show All') {
            // this.showByEmployees = false;
            this.onGetAllEmployees();
        }
        else if (e.target.selectedOptions[0].text.toString() == 'No-Hr-Code') {
            // this.showByEmployees = false;
            //  this.onGetAllAssets();
            var val = e.target.selectedOptions[0].text.toString();
            // console.log(Object.keys(this.temp[0]).length);
            var value_1 = val.toString().toLowerCase().trim();
            // get the amount of columns in the table
            var count_1 = Object.keys(this.temp[0]).length;
            // get the key names of each column in the dataset
            var keys_1 = Object.keys(this.temp[0]);
            // assign filtered matches to the active datatable
            this.Employees = this.temp.filter(function (item) {
                // iterate through each row's column data
                for (var i = 0; i < count_1; i++) {
                    // check for a match
                    if ((item[keys_1[i]] &&
                        item[keys_1[i]]
                            .toString()
                            .toLowerCase()
                            .indexOf(value_1) !== -1) ||
                        !value_1) {
                        // found match, return true to add to result set
                        // console.log(item, 1);
                        return true;
                    }
                }
            });
        }
    };
    EmpdirectoryComponent.prototype.onSelectAll = function () {
        var _this = this;
        var assetItemALLHTMLelemnt = document.getElementById("assetItemALL--");
        this.SelectedEmployees = [];
        if (assetItemALLHTMLelemnt.checked) {
            this.Employees.forEach(function (val) { val.checkbox = true; });
            this.Employees.forEach(function (emp) { _this.SelectedEmployees.push(emp); });
        }
        else if (!assetItemALLHTMLelemnt.checked) {
            this.Employees.forEach(function (val) { val.checkbox = false; });
        }
    };
    EmpdirectoryComponent.prototype.onSelect = function (e, emp) {
        var _this = this;
        if (e.target.checked) {
            this.SelectedEmployees.push(emp);
            var allChecked_1 = true;
            this.Employees.forEach(function (asset, index) {
                var assetItemHTMLelemnt = document.getElementById('assetItem--' + index);
                if (!assetItemHTMLelemnt.checked)
                    allChecked_1 = false;
            });
            if (allChecked_1)
                var assetItemALLHTMLelemnt = document.getElementById("assetItemALL--");
            assetItemALLHTMLelemnt.checked = true;
            // this.onUpdatestatistics();
        }
        else if (!e.target.checked) {
            var assetItemALLHTMLelemnt = document.getElementById("assetItemALL--");
            if (assetItemALLHTMLelemnt.checked)
                assetItemALLHTMLelemnt.checked = false;
            this.SelectedEmployees.filter(function (asset, selectedIndex) {
                if (asset.empId === emp.empId) {
                    _this.SelectedEmployees.splice(selectedIndex, 1);
                }
            });
        }
        // console.log('Selected Employees:  ' ,  this.SelectedEmployees);
        // console.log(' Employees:  ' ,  this.Employees);
        // 
    };
    EmpdirectoryComponent.prototype.onChangeRowsPerPage = function (event) {
        this.pageSize = event.target.value;
    };
    EmpdirectoryComponent.prototype.onExportExcel = function () {
        this.expExcelSrv.exportAsExcelFile(this.SelectedEmployees, 'AddressBook');
    };
    EmpdirectoryComponent.ctorParameters = function () { return [
        { type: _services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"] },
        { type: ngx_alerts__WEBPACK_IMPORTED_MODULE_2__["AlertService"] },
        { type: app_shared_services_exportexcel_service__WEBPACK_IMPORTED_MODULE_3__["ExportexcelService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: app_masterdata_branch_services_branch_service__WEBPACK_IMPORTED_MODULE_7__["BranchService"] },
        { type: app_masterdata_department_services_department_service__WEBPACK_IMPORTED_MODULE_9__["DepartmentService"] },
        { type: app_masterdata_company_services_company_service__WEBPACK_IMPORTED_MODULE_8__["CompanyService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('search'),
        __metadata("design:type", Object)
    ], EmpdirectoryComponent.prototype, "search", void 0);
    EmpdirectoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-empdirectory',
            template: __importDefault(__webpack_require__(/*! raw-loader!./empdirectory.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/employee/empdirectory/empdirectory.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./empdirectory.component.css */ "./src/app/masterdata/employee/empdirectory/empdirectory.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"],
            ngx_alerts__WEBPACK_IMPORTED_MODULE_2__["AlertService"],
            app_shared_services_exportexcel_service__WEBPACK_IMPORTED_MODULE_3__["ExportexcelService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            app_masterdata_branch_services_branch_service__WEBPACK_IMPORTED_MODULE_7__["BranchService"],
            app_masterdata_department_services_department_service__WEBPACK_IMPORTED_MODULE_9__["DepartmentService"],
            app_masterdata_company_services_company_service__WEBPACK_IMPORTED_MODULE_8__["CompanyService"]])
    ], EmpdirectoryComponent);
    return EmpdirectoryComponent;
}());



/***/ }),

/***/ "./src/app/masterdata/employee/employee.component.css":
/*!************************************************************!*\
  !*** ./src/app/masterdata/employee/employee.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-rounded{\r\n\r\n    border-radius: 30%;\r\n}\r\n\r\n.toolbarIcon{\r\n    font-size: 25px;\r\n    color: black;\r\n    padding-top: 13px;\r\n    padding-bottom: 7px;\r\n    padding-right: 10px;\r\n    padding-left: 10px;\r\n    cursor: pointer;\r\n    /* box-shadow: 1px 2px grey; */\r\n}\r\n\r\n.toolbarIcon:hover {\r\n    margin-top: 6px;\r\n    font-size: 28px;\r\n    color: blue;\r\n    padding-top: 7px;\r\n    padding-bottom: 7px;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    cursor: pointer;\r\n    border: 1px solid #f9f9f900;\r\n    background-color: white;\r\n}\r\n\r\n.marginsDropdownList{\r\n    margin-top: 8px;\r\n    padding-top: 7px;\r\n    padding-bottom: 7px;\r\n}\r\n\r\n.marginsPaging{\r\n    margin-top: 8px;\r\n    padding-top: 7px;\r\n    padding-bottom: 7px;\r\n}\r\n\r\n.marginsSearch{\r\n    /* margin-right: 10px; */\r\n    padding-top: 7px;\r\n    padding-bottom: 7px;\r\n}\r\n\r\n.toolbarCard{\r\n    box-shadow: 1px 1px 1px 1px grey; \r\n    /* margin: auto; */\r\n    /* height: 40px; */\r\n    background-color: #f9f9f9;\r\n    border: 1px solid rgb(212, 212, 212);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyZGF0YS9lbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiw4QkFBOEI7QUFDbEM7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQix1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsb0NBQW9DO0FBQ3hDIiwiZmlsZSI6InNyYy9hcHAvbWFzdGVyZGF0YS9lbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1yb3VuZGVke1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcclxufVxyXG5cclxuLnRvb2xiYXJJY29ue1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZy10b3A6IDEzcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC8qIGJveC1zaGFkb3c6IDFweCAycHggZ3JleTsgKi9cclxufVxyXG4udG9vbGJhckljb246aG92ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjlmOWY5MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubWFyZ2luc0Ryb3Bkb3duTGlzdHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG59XHJcbi5tYXJnaW5zUGFnaW5ne1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbn1cclxuLm1hcmdpbnNTZWFyY2h7XHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDEwcHg7ICovXHJcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcclxufVxyXG4udG9vbGJhckNhcmR7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggZ3JleTsgXHJcbiAgICAvKiBtYXJnaW46IGF1dG87ICovXHJcbiAgICAvKiBoZWlnaHQ6IDQwcHg7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMiwgMjEyLCAyMTIpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/masterdata/employee/employee.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/masterdata/employee/employee.component.ts ***!
  \***********************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _asset_services_asset_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../asset/services/asset.service */ "./src/app/masterdata/asset/services/asset.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _employee_services_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../employee/services/employee.service */ "./src/app/masterdata/employee/services/employee.service.ts");
/* harmony import */ var app_shared_models_EmployeeModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/models/EmployeeModel */ "./src/app/shared/models/EmployeeModel.ts");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/__ivy_ngcc__/fesm5/ngx-order-pipe.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_exportexcel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/exportexcel.service */ "./src/app/shared/services/exportexcel.service.ts");
/* harmony import */ var _branch_services_branch_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../branch/services/branch.service */ "./src/app/masterdata/branch/services/branch.service.ts");
/* harmony import */ var _company_services_company_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../company/services/company.service */ "./src/app/masterdata/company/services/company.service.ts");
/* harmony import */ var _genaricemail_service_genaricemail_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../genaricemail/service/genaricemail.service */ "./src/app/masterdata/genaricemail/service/genaricemail.service.ts");
/* harmony import */ var _department_services_department_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../department/services/department.service */ "./src/app/masterdata/department/services/department.service.ts");
/* harmony import */ var _position_service_position_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../position/service/position.service */ "./src/app/masterdata/position/service/position.service.ts");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/__ivy_ngcc__/fesm5/ngx-alerts.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
/* harmony import */ var app_operation_uploadimg_uploadimg_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/operation/uploadimg/uploadimg.component */ "./src/app/operation/uploadimg/uploadimg.component.ts");
/* harmony import */ var ngx_img_cropper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-img-cropper */ "./node_modules/ngx-img-cropper/__ivy_ngcc__/fesm5/ngx-img-cropper.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _domain_services_domain_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../domain/services/domain.service */ "./src/app/masterdata/domain/services/domain.service.ts");
/* harmony import */ var app_shared_services_sweetalert_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! app/shared/services/sweetalert.service */ "./src/app/shared/services/sweetalert.service.ts");
/* harmony import */ var app_shared_services_email_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! app/shared/services/email.service */ "./src/app/shared/services/email.service.ts");
/* harmony import */ var _showadaccounts_services_showadaccounts_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./showadaccounts/services/showadaccounts.service */ "./src/app/masterdata/employee/showadaccounts/services/showadaccounts.service.ts");
/* harmony import */ var app_shared_services_logs_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! app/shared/services/logs.service */ "./src/app/shared/services/logs.service.ts");
/* harmony import */ var app_shared_services_shareddata_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! app/shared/services/shareddata.service */ "./src/app/shared/services/shareddata.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



















// import swal from 'sweetalert2';







var EmployeeComponent = /** @class */ (function () {
    // AddUserLog(action: string) {
    //   this.strSrv.sendUserLog(action).subscribe(res=>{
    //   });
    // }
    /////////////////////////////////////////////////////////////// constructor()  ngOnInit()  //////////////////////////////////////////////////////////////////////////
    function EmployeeComponent(showSrv, shrdSrv, emlSrv, swalSrv, logSrv, astSrv, gemailSrv, dptSrv, posSrv, empSrv, brnSrv, domSrv, comSrv, expExcelSrv, orderPipe, fb, alertService, modalService, router) {
        this.showSrv = showSrv;
        this.shrdSrv = shrdSrv;
        this.emlSrv = emlSrv;
        this.swalSrv = swalSrv;
        this.logSrv = logSrv;
        this.astSrv = astSrv;
        this.gemailSrv = gemailSrv;
        this.dptSrv = dptSrv;
        this.posSrv = posSrv;
        this.empSrv = empSrv;
        this.brnSrv = brnSrv;
        this.domSrv = domSrv;
        this.comSrv = comSrv;
        this.expExcelSrv = expExcelSrv;
        this.orderPipe = orderPipe;
        this.fb = fb;
        this.alertService = alertService;
        this.modalService = modalService;
        this.router = router;
        this.loading = false;
        this.showEmailDetails = false;
        this.totalEmplyees = 0;
        this.noHrCode = 0;
        this.noDepartment = 0;
        this.noCompany = 0;
        this.noBranch = 0;
        this.newEmplyees = 0;
        this.selectedEmployess = 0;
        this.EmployeeActive = true;
        this.CodeExist = false;
        this.CodePatternNotValid = false;
        this.EmployeeTemp = {};
        this.EmpTemp = {};
        this.fullNameKeyword = 'empFullName';
        this.temp = [];
        this.EmployeesList = [];
        this.Employees = [];
        this.Positions = [];
        this.Gemails = [];
        this.ArchiveEmails = [];
        this.Departments = [];
        this.Domains = [];
        this.pageSize = 5;
        this.pageIndex = 1;
        this.order = "info.name";
        this.reverse = false;
        this.SelectedEmployees = [];
        this.Branchs = [];
        this.Companys = [];
        this.date = new Date();
        ////////////////////////////////////////////////////////////  Create New Employee Functions  ////////////////////////////////////////////////////////////////
        this.status = '';
        this.emailsToBeCanceled = [];
        this.employeeForm = this.fb.group({
            empId: null,
            empHRCode: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4)]],
            empFirstName: null,
            empSecondName: null,
            empLastName: null,
            empFullName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            accountName: null,
            empAddress: null,
            empBirhtday: null,
            empGender: Date(),
            comId: null,
            dptId: null,
            brnId: null,
            posId: null,
            directMngId: null,
            DirectMngName: null,
            mailCheckBox: false,
            EmployeeActive: true,
            empExt: null,
            empPri: null,
            empMobile0: null,
            empMobile1: null,
            empMobile2: null,
            empIndividualEmail0: null,
            empIndividualEmail1: null,
            empIndividualEmail2: null,
            empIndividualEmail3: null,
            emailsINDIV: this.fb.array([]),
            emailsGEN: this.fb.array([]),
            emailsARCH: this.fb.array([]),
            EmpGmails: this.fb.array([]),
            EmpArchives: this.fb.array([]),
            EmpImg: null,
        });
        this.onGetAllEmployees();
        //this.onGetAllEmployeesNamesOnly();
        this.onGetAllPositions();
        this.onGetAllGEmails();
        this.onGetAllArchiveEmails();
        this.onGetAllDepartments();
        this.onGetAllCompanys();
        this.onGetAllBranchs();
        this.onGetAllDomains();
        this.sortedCollection = orderPipe.transform(this.Employees, 'astDescription');
        // console.log('sortedCollection....' , this.sortedCollection);
        // for (let i = 1; i <= this.Employees.length; i++) {
        //   this.Employees.push();
        // }
        this.cropperSettings = new ngx_img_cropper__WEBPACK_IMPORTED_MODULE_17__["CropperSettings"]();
        this.cropperSettings.noFileInput = true;
        this.cropperSettings.width = 50;
        this.cropperSettings.height = 50;
        this.cropperSettings.croppedWidth = 150;
        this.cropperSettings.croppedHeight = 150;
        this.cropperSettings.canvasWidth = 250;
        this.cropperSettings.canvasHeight = 300;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.buildSearchForm();
        $('.datepicker').datetimepicker({
            format: 'MM/DD/YYYY',
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove'
            }
        });
    };
    /////////// Filters ////////////////////
    EmployeeComponent.prototype.buildSearchForm = function () {
        this.searchForm = this.fb.group({
            DepartmentName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            BranchName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            CompanyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    };
    EmployeeComponent.prototype.searchFilter = function (filters) {
        var _this = this;
        this.loading = true;
        this.empSrv.getAllEmployeesWithAssets().subscribe(function (employees) {
            debugger;
            _this.Employees = [];
            _this.Employees = employees;
            Object.keys(filters).forEach(function (key) { return filters[key] === '' ? delete filters[key] : key; });
            var keys = Object.keys(filters);
            var filterEmps = function (invoice) { return keys.every(function (key) { return invoice[key] === filters[key]; }); };
            var emps = _this.Employees.filter(filterEmps);
            _this.Employees = emps;
            _this.loading = false;
            _this.onUpdatestatistics();
            _this.pageIndex = 1;
        });
    };
    /////////////////////////////////////////////////////////////   Email Section  ///////////////////////////////////////////////////
    EmployeeComponent.prototype.onAddIndividualEmail = function (indivCtl, status, e) {
        var _this = this;
        debugger;
        var lnth = indivCtl.length;
        if (lnth >= 4 && status == 'onAdd') {
            this.alertService.danger('Maximum Individual Emails are 4');
        }
        else if (status == 'onEdit') {
            var indivCtlArr_1 = this.employeeForm.controls.emailsINDIV;
            indivCtl.forEach(function (e) {
                if (e.emailAddress != null) {
                    indivCtlArr_1.push(_this.fb.group({ emailAddress: e.emailAddress }));
                }
            });
        }
        else {
            var fName = this.employeeForm.get('empFirstName').value;
            var lName = this.employeeForm.get('empLastName').value;
            var domName = e.target.selectedOptions[0].text.toString();
            if (fName == null) {
                fName = "FirstName";
            }
            if (lName == null) {
                lName = "LastName";
            }
            if (domName != "-- Add Individual Email --") {
                var fullemail = fName.trim() + "." + lName.trim() + domName;
                indivCtl.push(this.fb.group({ emailAddress: [fullemail, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]] }));
            }
            if (domName == "-- Add Individual Email --") {
                domName = "@DomainName.com";
                var fullemail = fName + "." + lName.trim() + domName.trim();
                indivCtl.push(this.fb.group({ emailAddress: [fullemail, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]] }));
            }
        }
    };
    EmployeeComponent.prototype.onAddGenaricEmail = function (emailsGENCtrl, getEmpGmailsCtl, status) {
        var _this = this;
        var lnth = emailsGENCtrl.length;
        if (lnth >= 6 && status == 'onAdd') {
            this.alertService.danger('Maximum Individual Emails are 4');
        }
        else if (status == 'onEdit') {
            var genCtl_1 = this.employeeForm.controls.emailsGEN;
            genCtl_1.removeAt(0);
            genCtl_1.reset();
            emailsGENCtrl.forEach(function (e) {
                genCtl_1.push(_this.fb.group({ genEmailId: e.genEmailId, genEmailAddress: e.genEmailAddress }));
            });
            var empgenCtl_1 = this.employeeForm.controls.EmpGmails;
            empgenCtl_1.removeAt(0);
            empgenCtl_1.reset();
            emailsGENCtrl.forEach(function (e) {
                empgenCtl_1.push(_this.fb.group({ EmpGmailId: 0, empId: 0, genEmailId: e.genEmailId }));
            });
        }
        else {
            emailsGENCtrl.push(this.fb.group({ genEmailId: 0, genEmailAddress: [] }));
            getEmpGmailsCtl.push(this.fb.group({ EmpGmailId: 0, empId: 0, genEmailId: 0 }));
        }
    };
    EmployeeComponent.prototype.onAddArchiveEmail = function (emailsARCCtrl, getEmpArchivesCtl, status) {
        var _this = this;
        var lnth = emailsARCCtrl.length;
        if (lnth >= 6 && status == 'onAdd') {
            this.alertService.danger('Maximum Archives Emails are 6');
        }
        else if (status == 'onEdit') {
            var archCtl_1 = this.employeeForm.controls.emailsARCH;
            archCtl_1.removeAt(0);
            archCtl_1.reset();
            emailsARCCtrl.forEach(function (e) {
                archCtl_1.push(_this.fb.group({ ADArchiveAccountId: e.ADArchiveAccountId, archName: e.archName }));
            });
            var emparchCtl_1 = this.employeeForm.controls.EmpArchives;
            emparchCtl_1.removeAt(0);
            emparchCtl_1.reset();
            emailsARCCtrl.forEach(function (e) {
                emparchCtl_1.push(_this.fb.group({ EmpArchAccountId: 0, empId: 0, ADArchiveAccountId: e.ADArchiveAccountId }));
            });
        }
        else {
            emailsARCCtrl.push(this.fb.group({ ADArchiveAccountId: 0, archName: [] }));
            getEmpArchivesCtl.push(this.fb.group({ EmpArchAccountId: 0, empId: 0, ADArchiveAccountId: 0 }));
        }
    };
    EmployeeComponent.prototype.deleteIndividualEmail = function (index) {
        var control = this.employeeForm.controls.emailsINDIV;
        control.removeAt(index);
    };
    EmployeeComponent.prototype.deleteGenaricEmail = function (index) {
        var control = this.employeeForm.controls.emailsGEN;
        control.removeAt(index);
        var empGmailCtl = this.employeeForm.controls.EmpGmails;
        empGmailCtl.removeAt(index);
    };
    EmployeeComponent.prototype.deleteArchiveEmail = function (index) {
        var control = this.employeeForm.controls.emailsARCH;
        control.removeAt(index);
        var emparchCtl = this.employeeForm.controls.EmpArchives;
        emparchCtl.removeAt(index);
    };
    EmployeeComponent.prototype.setEmails = function () {
        var _this = this;
        // var mailCheckBox = <HTMLInputElement> document.getElementById('mailCheckBox');
        // mailCheckBox.checked = false;
        var indivCtl = this.employeeForm.controls.emailsINDIV;
        var genCtl = this.employeeForm.controls.emailsGEN;
        var empGmailsCtl = this.employeeForm.controls.EmpGmails;
        var archCtl = this.employeeForm.controls.emailsARCH;
        var emparchCtl = this.employeeForm.controls.EmpArchives;
        this.employeeForm.setControl('emailsINDIV', this.fb.array([]));
        this.employeeForm.setControl('emailsGEN', this.fb.array([]));
        this.employeeForm.setControl('EmpGmails', this.fb.array([]));
        this.employeeForm.setControl('emailsARCH', this.fb.array([]));
        this.employeeForm.setControl('EmpArchives', this.fb.array([]));
        this.employeeForm.controls.emailsINDIV.value.forEach(function (x, index) {
            indivCtl.push(_this.fb.group({
                emailAddress: x.emailAddress
            })); // 
        });
        this.employeeForm.controls.emailsGEN.value.forEach(function (x, index) {
            genCtl.push(_this.fb.group({
                genEmailId: x.genEmailId,
                genEmailAddress: x.genEmailAddress
            }));
        });
        this.employeeForm.controls.EmpGmails.value.forEach(function (x, index) {
            empGmailsCtl.push(_this.fb.group({
                EmpGmailId: x.EmpGmailId,
                empId: x.empId,
                genEmailId: x.genEmailId
            }));
        });
        this.employeeForm.controls.emailsARCH.value.forEach(function (x, index) {
            archCtl.push(_this.fb.group({
                ADArchiveAccountId: x.ADArchiveAccountId,
                archName: x.archName
            }));
        });
        this.employeeForm.controls.EmpArchives.value.forEach(function (x, index) {
            emparchCtl.push(_this.fb.group({
                EmpArchAccountId: x.EmpArchAccountId,
                empId: x.empId,
                ADArchiveAccountId: x.ADArchiveAccountId
            }));
        });
    };
    EmployeeComponent.prototype.onSelectGenaricEmail = function (index, event) {
        var genEmalCtl = this.getGenaricEmailsForm.at(index);
        genEmalCtl.controls['genEmailId'].setValue(event.genEmailId);
        genEmalCtl.controls['genEmailAddress'].setValue(event.genEmailAddress);
        var empGmailsCtl = this.getEmpGmailsForm.at(index);
        empGmailsCtl.controls['empId'].setValue(this.getEmployeeForm.empId.value);
        empGmailsCtl.controls['genEmailId'].setValue(event.genEmailId);
    };
    EmployeeComponent.prototype.onSelectArchiveEmail = function (index, event) {
        var archEmalCtl = this.getArchiveEmailsForm.at(index);
        archEmalCtl.controls['ADArchiveAccountId'].setValue(event.ADArchiveAccountId);
        archEmalCtl.controls['archName'].setValue(event.archName);
        var empArchivesCtl = this.getEmpArchivesForm.at(index);
        empArchivesCtl.controls['empId'].setValue(this.getEmployeeForm.empId.value);
        empArchivesCtl.controls['ADArchiveAccountId'].setValue(event.ADArchiveAccountId);
    };
    EmployeeComponent.prototype.onGetAllEmployees = function () {
        var _this = this;
        this.loading = true;
        this.empSrv.getAllEmployeesWithAssets().subscribe(function (emps) {
            debugger;
            _this.Employees = emps;
            _this.temp = emps;
            _this.pageIndex = 1;
            _this.loading = false;
            emps.forEach(function (e) {
                var em = new app_shared_models_EmployeeModel__WEBPACK_IMPORTED_MODULE_4__["EmployeeModel"]();
                em.empId = e.empId;
                em.empFullName = e.empFullName;
                _this.EmployeesList.push(em);
            });
            _this.onUpdatestatistics();
        }, function (error) {
            _this.loading = false;
            if (error.message.includes('Http failure response for http://')) {
                _this.alertService.danger('Server Error');
            }
        });
    };
    EmployeeComponent.prototype.onGetAllPositions = function () {
        var _this = this;
        this.posSrv.getAllpositions().subscribe(function (poss) {
            _this.Positions = poss;
        });
    };
    EmployeeComponent.prototype.onGetAllGEmails = function () {
        var _this = this;
        //   
        this.gemailSrv.getAllGenaricemails().subscribe(function (gmails) {
            //         
            _this.Gemails = gmails;
        });
    };
    EmployeeComponent.prototype.onGetAllArchiveEmails = function () {
        var _this = this;
        this.showSrv.getAllArchives().subscribe(function (arcs) {
            _this.ArchiveEmails = arcs;
        });
    };
    EmployeeComponent.prototype.onGetAllCompanys = function () {
        var _this = this;
        this.loading = true;
        this.comSrv.getAllCompanys().subscribe(function (coms) {
            _this.Companys = coms;
        }, function (error) {
            _this.loading = false;
            if (error.message.includes('Http failure response for http://')) {
                _this.alertService.danger('Server error');
            }
        });
    };
    EmployeeComponent.prototype.onGetAllDepartments = function () {
        var _this = this;
        //  
        this.dptSrv.getAllDepartments().subscribe(function (dpts) {
            //    
            _this.Departments = dpts;
        });
    };
    EmployeeComponent.prototype.onGetAllBranchs = function () {
        var _this = this;
        //  
        this.brnSrv.getAllBranchs().subscribe(function (brns) {
            //    
            _this.Branchs = brns;
        });
    };
    EmployeeComponent.prototype.onGetAllDomains = function () {
        var _this = this;
        //  
        this.domSrv.getAllDomains().subscribe(function (doms) {
            //    
            _this.Domains = doms;
        });
    };
    EmployeeComponent.prototype.setStatus = function (st) {
        this.status = st;
    };
    EmployeeComponent.prototype.updateEmployeesObj = function (e) {
        var emp = this.Employees.find(e);
        if (emp == null) {
            this.Employees.push(e);
            this.temp.push(e);
            var em = new app_shared_models_EmployeeModel__WEBPACK_IMPORTED_MODULE_4__["EmployeeModel"]();
            em.empId = e.empId;
            em.empFullName = e.empFullName;
            this.EmployeesList.push(e);
            debugger;
        }
        else if (emp) {
            this.Employees.splice(emp.empId);
            this.temp.splice(emp.empId);
            this.Employees.push(e);
            this.temp.push(e);
            var em = new app_shared_models_EmployeeModel__WEBPACK_IMPORTED_MODULE_4__["EmployeeModel"]();
            em.empId = e.empId;
            em.empFullName = e.empFullName;
            this.EmployeesList.push(e);
            debugger;
        }
    };
    EmployeeComponent.prototype.onSubmit = function () {
        var _this = this;
        debugger;
        var indivCtl = this.employeeForm.controls.emailsINDIV;
        indivCtl.value.forEach(function (mail, index) {
            if (index == 0) {
                _this.employeeForm.get('empIndividualEmail0').setValue(mail.emailAddress);
            }
            if (index == 1) {
                _this.employeeForm.get('empIndividualEmail1').setValue(mail.emailAddress);
            }
            if (index == 2) {
                _this.employeeForm.get('empIndividualEmail2').setValue(mail.emailAddress);
            }
            if (index == 3) {
                _this.employeeForm.get('empIndividualEmail3').setValue(mail.emailAddress);
            }
        });
        if (this.employeeForm.value.empId == 0) {
            this.loading = true;
            this.empSrv.addEmployee(this.employeeForm.value).subscribe(function (EmployeeAdded) {
                _this.onGetAllEmployees();
                _this.onUpdatestatistics();
                if (_this.status == 'AddAndClose') {
                    _this.employeeForm.reset();
                    _this.alertService.success('Created Successfully');
                    _this.logSrv.sendUserLog("( " + EmployeeAdded.empFullName + " ) Employee Successfully");
                }
                else if (_this.status == 'AddAndAddAnother') {
                    _this.employeeForm.get('empHRCode').patchValue('');
                    _this.alertService.success('Created Successfully');
                    _this.logSrv.sendUserLog("( " + EmployeeAdded.empFullName + " ) Employee Successfully");
                }
                ;
                _this.CodeExist = false;
                _this.loading = false;
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.logSrv.sendUserLog("( " + error + " ) Http error");
                    _this.alertService.danger('Server error');
                }
            });
            this.loading = false;
        }
        else if (this.employeeForm.value.empId > 0) {
            this.empSrv.editEmployee(this.employeeForm.value.empId, this.employeeForm.value).subscribe(function (EmployeeAdded) {
                debugger;
                _this.onGetAllEmployees();
                //  this.IsHRCodeExist(this.employeeForm.get('empHRCode').value);
                _this.employeeForm.reset();
                _this.employeeForm.get('empId').patchValue(null);
                //    this.IsHRCodeExist(this.employeeForm.get('empHRCode').value);
                _this.CodeExist = false;
                _this.alertService.success('Saved Successfully');
                _this.onUpdatestatistics();
                _this.logSrv.sendUserLog("( " + EmployeeAdded.empFullName + " ) Saved Successfully");
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error');
                }
            });
        }
        this.loading = false; //test
    };
    EmployeeComponent.prototype.onUpdatestatistics = function () {
        var _this = this;
        // 
        this.totalEmplyees = 0;
        this.noHrCode = 0;
        this.noBranch = 0;
        this.noDepartment = 0;
        this.noCompany = 0;
        this.newEmplyees = 0;
        this.selectedEmployess = 0;
        this.selectedEmployess = this.SelectedEmployees.length;
        this.totalEmplyees = this.Employees.length;
        this.Employees.forEach(function (e) {
            // 
            if (e.empHRCode == "No-Hr-Code") {
                _this.noHrCode += 1;
            }
            if (e.DepartmentName == null) {
                _this.noDepartment += 1;
            }
            if (e.BranchName == null) {
                _this.noBranch += 1;
            }
            if (e.CompanyName == null) {
                _this.noCompany += 1;
            }
            ;
        });
    };
    EmployeeComponent.prototype.onFillFullName = function () {
        var fName = this.employeeForm.get('empFirstName').value;
        var sName = this.employeeForm.get('empSecondName').value;
        var lName = this.employeeForm.get('empLastName').value;
        if (fName == null) {
            fName = "FirstName";
        }
        if (sName == null) {
            sName = "SecondtName";
        }
        if (lName == null) {
            lName = "LastName";
        }
        var fullName = fName + " " + sName + " " + lName;
        this.employeeForm.get('empFullName').setValue(fullName);
    };
    EmployeeComponent.prototype.onChangeEmpGender = function (e) {
        // 
        this.employeeForm.get('empGender').setValue(e.target.value);
    };
    EmployeeComponent.prototype.onChangeCompanyId = function (e) {
        // 
        this.employeeForm.get('comId').setValue(e.target.value);
    };
    EmployeeComponent.prototype.onChangeDepartmentId = function (e) {
        // 
        this.employeeForm.get('dptId').setValue(e.target.value);
    };
    EmployeeComponent.prototype.onChangeBranchId = function (e) {
        // 
        this.employeeForm.get('brnId').setValue(e.target.value);
    };
    EmployeeComponent.prototype.onChangePositionId = function (e) {
        // 
        this.employeeForm.get('posId').setValue(e.target.value);
    };
    EmployeeComponent.prototype.onChangeChangeProfileImg = function (event) {
        var _this = this;
        var me = this;
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            _this.employeeForm.get('EmpImg').setValue(reader.result);
        };
        reader.onerror = function (error) {
        };
    };
    EmployeeComponent.prototype.setImage = function (image) {
        // 
        throw new Error("Method not implemented.");
    };
    EmployeeComponent.prototype.onUploadEmployeeImage = function (fd) {
        this.empSrv.uploadEmplyeeImage(fd).subscribe(function (res) {
        });
    };
    EmployeeComponent.prototype.IsHRCodeExist = function (e) {
        var _this = this;
        debugger;
        if (e.target.value != null && e.target.value.length != 4) {
            this.CodePatternNotValid = true;
            this.CodeExist = false;
        }
        else if (e.target.value.length == 4) {
            this.CodePatternNotValid = false;
            this.empSrv.GetEmployeeByCode(e.target.value).subscribe(function (code) {
                debugger;
                if ((code && _this.EmpTemp.empHRCode != code) || (code && _this.employeeForm.get('empId').value == 0)) {
                    _this.CodeExist = true;
                }
                if (code == null || code && _this.EmpTemp.empHRCode == code) {
                    _this.CodeExist = false;
                }
            });
        }
    };
    EmployeeComponent.prototype.onSelectEmployeeType = function (e) {
        this.employeeForm.controls['empId'].setValue(null);
    };
    EmployeeComponent.prototype.onFilterByEmployeeType = function (e) {
        if (e.target.selectedOptions[0].text.toString() == '--All--') {
            debugger;
            // this.onGetAllEmployees();
        }
        else {
            //  this.onGetAllEmployees();
            var val = e.target.selectedOptions[0].text.toString();
            // 
            // console.log(Object.keys(this.temp[0]).length);
            var value_1 = val.toString().toLowerCase().trim();
            // 
            // get the amount of columns in the table
            var count_1 = Object.keys(this.temp[0]).length;
            // 
            // get the key names of each column in the dataset
            var keys_1 = Object.keys(this.temp[0]);
            // 
            // assign filtered matches to the active datatable
            this.Employees = this.temp.filter(function (item) {
                // 
                // iterate through each row's column data
                for (var i = 0; i < count_1; i++) {
                    // check for a match
                    if ((item[keys_1[i]] &&
                        item[keys_1[i]]
                            .toString()
                            .toLowerCase()
                            .indexOf(value_1) !== -1) ||
                        !value_1) {
                        // found match, return true to add to result set
                        // console.log(item, 1);
                        return true;
                    }
                }
            });
        }
    };
    EmployeeComponent.prototype.onShowAddEdit = function () {
        this.employeeForm.reset();
        this.employeeForm.controls['empId'].setValue(0);
        this.setEmails();
        this.showEmailDetails = false;
    };
    EmployeeComponent.prototype.onEditEmployee = function (e) {
        var _this = this;
        debugger;
        this.empSrv.GetEmployeeById(e.empId).subscribe(function (emp) {
            _this.EmpTemp = emp;
            _this.employeeForm.patchValue(emp);
            _this.employeeForm.get('comId').setValue(emp.comId);
            _this.employeeForm.get('brnId').setValue(emp.brnId);
            _this.employeeForm.get('dptId').setValue(emp.dptId);
            _this.employeeForm.get('posId').setValue(emp.posId);
            _this.employeeForm.get('EmpImg').setValue(emp.EmpImg);
            _this.employeeForm.setControl('emailsINDIV', _this.fb.array([]));
            _this.employeeForm.setControl('emailsGEN', _this.fb.array([]));
            _this.employeeForm.setControl('EmpGmails', _this.fb.array([]));
            _this.employeeForm.setControl('emailsARCH', _this.fb.array([]));
            _this.employeeForm.setControl('EmpArchives', _this.fb.array([]));
            debugger;
            _this.onAddIndividualEmail(emp.emailsINDIV, 'onEdit');
            _this.onAddGenaricEmail(emp.emailsGEN, emp.EmpGmails, 'onEdit');
            _this.onAddArchiveEmail(emp.emailsARCH, emp.EmpArchives, 'onEdit');
            _this.showEmailDetails = true;
            if (emp.emailsARCH.length > 0 || emp.emailsGEN.length > 0 || (emp.emailsINDIV[0].emailAddress != null || emp.emailsINDIV[1].emailAddress != null || emp.emailsINDIV[2].emailAddress != null || emp.emailsINDIV[3].emailAddress != null)) {
                _this.employeeForm.get('mailCheckBox').patchValue(true);
            }
            else {
                _this.employeeForm.get('mailCheckBox').patchValue(false);
            }
            var EmployeeActiveBox = document.getElementById('EmployeeActive');
            if (emp.EmployeeActive == true) {
                EmployeeActiveBox.checked = true;
                _this.EmployeeActive = true;
            }
            if (emp.EmployeeActive == false) {
                EmployeeActiveBox.checked = false;
                _this.EmployeeActive = false;
            }
        });
    };
    // options = {
    //   words: ["chuck", "norris", "vs", "keanu", "reeves"]
    // }
    EmployeeComponent.prototype.onRegisterEmployee = function (emp) {
        debugger;
        this.router.navigate(['/users/user'], { queryParams: emp });
    };
    EmployeeComponent.prototype.onActivate = function (e) {
        var _this = this;
        if (!e.target.checked) {
            //
            sweetalert2__WEBPACK_IMPORTED_MODULE_19___default.a.fire({
                title: 'Employee Will be Disabled</h4>',
                icon: 'info',
                html: '<span style="color= red"> A ticket will be oppened for attached emails accounts </span>',
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: '<i class="fa "></i>Yes Disable',
                confirmButtonAriaLabel: '',
                cancelButtonText: '<i class="fa "> Cancel</i>',
                cancelButtonAriaLabel: ''
            }).then(function (res) {
                if (res.value) {
                    // let usr =  this.shrdSrv.getCurrentUser();
                    _this.empSrv.changeEmployeeActivation(_this.getEmployeeId.value).subscribe(function (emp) {
                        if (!emp.EmployeeActive) {
                            //    this.sendEmail(emp);
                            //   this.emlSrv.sendEmailEmployeeActivation(emp).subscribe(res => {
                            // //     
                            //   });
                            _this.EmployeeActive = false;
                            _this.employeeForm.get('EmployeeActive').setValue(false);
                            _this.swalSrv.showSwal('basic-success', " Employee ( " + emp.empFullName + " ) Disabled successfully ");
                            _this.logSrv.sendUserLog(" Employee ( " + emp.empFullName + " ) Disabled successfully  ");
                        }
                        debugger;
                        _this.onGetAllEmployees();
                    }, function (error) {
                        _this.loading = false;
                        if (error.message.includes('Http failure response for http://')) {
                            _this.swalSrv.showSwal('basic-error', " Server connection Error / Data is not updated ");
                            _this.logSrv.sendUserLog("Server connection Error ( " + error + " )");
                        }
                    });
                }
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_19___default.a.fire({
                title: 'Employee Will be Enabled</h4>',
                icon: 'info',
                // html: ' <ul *ngFor=" let a of assets "> <li> a.astCode  </li>   </ul> ',
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: '<i class="fa "></i>Yes Enable',
                confirmButtonAriaLabel: '',
                cancelButtonText: '<i class="fa "> Cancel</i>',
                cancelButtonAriaLabel: ''
            }).then(function (res) {
                if (res.value) {
                    _this.empSrv.changeEmployeeActivation(_this.getEmployeeId.value).subscribe(function (a) {
                        // this.sendEmail(a);
                        _this.EmployeeActive = true;
                        _this.employeeForm.get('EmployeeActive').setValue(true);
                        _this.swalSrv.showSwal('basic-success', " Employee ( " + a.empFullName + " ) Enabled successfully ");
                        _this.logSrv.sendUserLog(" Employee ( " + a.empFullName + " ) Enabled successfully  ");
                        debugger;
                        _this.onGetAllEmployees();
                    }, function (error) {
                        _this.loading = false;
                        if (error.message.includes('Http failure response for http://')) {
                            _this.swalSrv.showSwal('basic-error', " Server connection Error / Data is not updated ");
                            _this.logSrv.sendUserLog("Server connection Error ( " + error + " )");
                        }
                    });
                }
            });
        }
    };
    EmployeeComponent.prototype.onCancel = function () {
        this.employeeForm.reset();
        this.CodeExist = false;
    };
    EmployeeComponent.prototype.onSelectAll = function () {
        var _this = this;
        var assetItemALLHTMLelemnt = document.getElementById("assetItemALL--");
        this.SelectedEmployees = [];
        if (assetItemALLHTMLelemnt.checked) {
            this.Employees.forEach(function (val) { val.checkbox = true; });
            this.Employees.forEach(function (emp) { _this.SelectedEmployees.push(emp); });
            this.onUpdatestatistics();
        }
        else if (!assetItemALLHTMLelemnt.checked) {
            this.Employees.forEach(function (val) { val.checkbox = false; });
            this.onUpdatestatistics();
        }
    };
    EmployeeComponent.prototype.onSelect = function (e, emp) {
        var _this = this;
        if (e.target.checked) {
            this.SelectedEmployees.push(emp);
            var allChecked_1 = true;
            this.onUpdatestatistics();
            this.Employees.forEach(function (asset, index) {
                var assetItemHTMLelemnt = document.getElementById('assetItem--' + index);
                if (!assetItemHTMLelemnt.checked)
                    allChecked_1 = false;
            });
            if (allChecked_1)
                var assetItemALLHTMLelemnt = document.getElementById("assetItemALL--");
            assetItemALLHTMLelemnt.checked = true;
            // this.onUpdatestatistics();
        }
        else if (!e.target.checked) {
            var assetItemALLHTMLelemnt = document.getElementById("assetItemALL--");
            if (assetItemALLHTMLelemnt.checked)
                assetItemALLHTMLelemnt.checked = false;
            this.SelectedEmployees.filter(function (asset, selectedIndex) {
                if (asset.empId === emp.empId) {
                    _this.SelectedEmployees.splice(selectedIndex, 1);
                    _this.onUpdatestatistics();
                }
            });
        }
        // console.log('Selected Employees:  ' ,  this.SelectedEmployees);
        // console.log(' Employees:  ' ,  this.Employees);
        // 
    };
    EmployeeComponent.prototype.goTransferAssetPage = function () {
        this.router.navigate(['/operation/assetmng']);
    };
    EmployeeComponent.prototype.showSwal = function (emp, res) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_19___default.a.fire({
            title: '<h4>Employee Can NOT be deleted</h4>',
            icon: 'info',
            html: '{{ assetsAssigned.value }}' +
                '<a href="//sweetalert2.github.io">links</a> ' +
                'and other HTML tags',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: '<i class="fa "></i>Transfer Assets',
            confirmButtonAriaLabel: '',
            cancelButtonText: '<i class="fa "> Cancel</i>',
            cancelButtonAriaLabel: ''
        }).then(function (res) {
            return res.value;
            // console.log(res);
            // if(res.value == true){
            //   
            // //  this.goTransferAssetPage();
            // //  this.router.navigate(['/operation/assetmng'], { queryParams: emp });
            //  } if( res.value == false){
            // }
        });
        return res.value;
    };
    EmployeeComponent.prototype.onDeleteEmployee = function (emp) {
        // let prince = 24;
        //  let list = $(`<table> <tr>  <th>Asset Code</th>  </tr>  <tr > <td> ${prince} </td>  </tr>    </table>`);  //  $
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_19___default.a.fire({
            title: '<h4> Employee Will be deleted Permanently!!</h4>',
            icon: 'info',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: '<i class="fa "></i>Yes, Delete it',
            confirmButtonAriaLabel: '',
            cancelButtonText: '<i class="fa ">Cancel</i>',
            cancelButtonAriaLabel: ''
        }).then(function (res) {
            _this.empSrv.deleteEmployee(emp.empId).subscribe(function (assets) {
                var list = $('<ul></ul>');
                assets.forEach(function (x, index) {
                    list.append("<ul> <tr>  <th> " + (index + 1) + " - Asset Code: </th>  </tr>  <tr > <td> " + x.astCode + " </td>  </tr>    </ul>");
                });
                if (assets.length > 0) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_19___default.a.fire({
                        title: '<h4>Employee Can NOT be Deleted <br> Unless Asstes are Transfered</h4>',
                        icon: 'info',
                        html: list,
                        showCloseButton: true,
                        showCancelButton: true,
                        focusConfirm: false,
                        confirmButtonText: '<i class="fa "></i>Go Assets Transfer',
                        confirmButtonAriaLabel: '',
                        cancelButtonText: '<i class="fa ">Cancel</i>',
                        cancelButtonAriaLabel: ''
                    }).then(function (res) {
                        var newemp = { empId: emp.empId, empFullName: emp.empFullName, empHRCode: emp.empHRCode, assetsCurrent: JSON.stringify(emp.assetsCurrent) };
                        _this.router.navigate(['/operation/assetmng'], { queryParams: newemp });
                    });
                }
                else if (assets.length == 0) {
                    _this.alertService.success('Deleted Successfully');
                    _this.logSrv.sendUserLog("( " + assets.length + " )  deleted Successfully");
                }
                _this.onGetAllEmployees();
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.logSrv.sendUserLog("( " + error + " )  Http error");
                    _this.alertService.danger('Server error');
                }
            });
        });
    };
    EmployeeComponent.prototype.onDeleteAllSellected = function () {
        var _this = this;
        if (this.SelectedEmployees.length == 0) {
            this.alertService.danger('No Record Sellected');
        }
        else {
            this.loading = true;
            var ids_1 = [];
            this.SelectedEmployees.forEach(function (em) {
                ids_1.push(em.empId);
            });
            debugger;
            this.empSrv.deleteSelectedEmployees(ids_1).subscribe(function (count) {
                _this.onUpdatestatistics();
                _this.swalSrv.showSwal('basic-success', "( " + count + " ) Employees Deleted out of  " + ids_1.length);
                _this.SelectedEmployees = [];
                _this.onGetAllEmployees();
                _this.loading = false;
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error');
                }
            });
        }
    };
    EmployeeComponent.prototype.onClear = function () {
        var _this = this;
        this.empSrv.deleteALLEmployees().subscribe(function (res) {
            _this.onGetAllEmployees();
            _this.alertService.success('Cleared Successfully');
        });
    };
    EmployeeComponent.prototype.onExportExcel = function () {
        this.expExcelSrv.exportAsExcelFile(this.SelectedEmployees, 'Employees List');
    };
    EmployeeComponent.prototype.onPrintPreviewSelectedEmployees = function () {
        // console.log(emp);
        // 
        // this.bsModaleRef = this.modalService.show(AddeditasstComponent, {initialState: {emp}});
        // this.bsModaleRef.content.onClose = (updated) => {
        //   if (updated) {
        //     this.onGetAllEmployees();
        //     console.log('Edit clicked inside');
        //   }
        // };
        // console.log('Edit clicked');
    };
    EmployeeComponent.prototype.setOrder = function (value) {
        // 
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    EmployeeComponent.prototype.onSort = function (event) {
        // console.log(event);
    };
    EmployeeComponent.prototype.updateFilter = function (val) {
        // console.log(Object.keys(this.temp[0]).length);
        var value = val.toString().toLowerCase().trim();
        // get the amount of columns in the table
        var count = Object.keys(this.temp[0]).length;
        // get the key names of each column in the dataset
        var keys = Object.keys(this.temp[0]);
        // assign filtered matches to the active datatable
        this.Employees = this.temp.filter(function (item) {
            // iterate through each row's column data
            for (var i = 0; i < count; i++) {
                // check for a match
                if ((item[keys[i]] &&
                    item[keys[i]]
                        .toString()
                        .toLowerCase()
                        .indexOf(value) !== -1) ||
                    !value) {
                    // found match, return true to add to result set
                    // console.log(item, 1);
                    return true;
                }
            }
        });
        //Whenever the filter changes, always go back to the first page
        this.pageIndex = 1;
    };
    EmployeeComponent.prototype.onBringExistingEmployee = function () {
        this.employeeForm.patchValue(this.EmployeeTemp);
        this.employeeForm.controls.EmployeeTypes.get('emptypName').patchValue(this.EmployeeTemp.EmployeeType.emptypName);
    };
    EmployeeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        //   
        // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        // Add 'implements AfterViewInit' to the class.
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this.search.nativeElement, 'keydown')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(550), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (x) { return x['target']['value']; }))
            .subscribe(function (value) {
            _this.updateFilter(value);
        });
    };
    EmployeeComponent.prototype.onChangeRowsPerPage = function (event) {
        this.pageSize = event.target.value;
        this.pageIndex = 1;
    };
    EmployeeComponent.prototype.selectDirectMngEvent = function (event) {
        debugger;
        this.employeeForm.controls['directMngId'].setValue(event.empId);
        this.employeeForm.controls['DirectMngName'].setValue(event.empFullName);
        this.fullNameKeyword = event.target.value.empFullName;
    };
    EmployeeComponent.prototype.onFilterByNoHrCode = function (e) {
        debugger;
        if (e.target.selectedOptions[0].text.toString() == 'Show All') {
            this.onGetAllEmployees();
        }
        else if (e.target.selectedOptions[0].text.toString() == 'No-Hr-Code') {
            // this.showByEmployees = false;
            //  this.onGetAllAssets();
            var val = e.target.selectedOptions[0].text.toString();
            // console.log(Object.keys(this.temp[0]).length);
            var value_2 = val.toString().toLowerCase().trim();
            // get the amount of columns in the table
            var count_2 = Object.keys(this.temp[0]).length;
            // get the key names of each column in the dataset
            var keys_2 = Object.keys(this.temp[0]);
            // assign filtered matches to the active datatable
            this.Employees = this.temp.filter(function (item) {
                // iterate through each row's column data
                for (var i = 0; i < count_2; i++) {
                    // check for a match
                    if ((item[keys_2[i]] &&
                        item[keys_2[i]]
                            .toString()
                            .toLowerCase()
                            .indexOf(value_2) !== -1) ||
                        !value_2) {
                        // found match, return true to add to result set
                        // console.log(item, 1);
                        return true;
                    }
                }
            });
        }
        this.pageIndex = 1;
    };
    Object.defineProperty(EmployeeComponent.prototype, "getCode", {
        get: function () {
            return this.employeeForm.get('empHRCode');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeComponent.prototype, "getFullName", {
        get: function () {
            return this.employeeForm.get('empFullName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeComponent.prototype, "getEmployeeId", {
        get: function () {
            return this.employeeForm.get('empId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeComponent.prototype, "getBranchId", {
        get: function () {
            return this.employeeForm.get('brnId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeComponent.prototype, "getCompanyId", {
        get: function () {
            return this.employeeForm.get('comId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeComponent.prototype, "getPRDate", {
        get: function () {
            return this.employeeForm.get('empPurchaseDate');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeComponent.prototype, "getIndividualEmailsForm", {
        get: function () {
            return this.employeeForm.get('emailsINDIV');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeComponent.prototype, "getGenaricEmailsForm", {
        get: function () {
            return this.employeeForm.get('emailsGEN');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeComponent.prototype, "getArchiveEmailsForm", {
        get: function () {
            return this.employeeForm.get('emailsARCH');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeComponent.prototype, "getEmpGmailsForm", {
        get: function () {
            return this.employeeForm.get('EmpGmails');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeComponent.prototype, "getEmpArchivesForm", {
        get: function () {
            return this.employeeForm.get('EmpArchives');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeComponent.prototype, "getEmployeeForm", {
        get: function () {
            return this.employeeForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeComponent.prototype, "getEmpImg", {
        get: function () {
            return this.employeeForm.get('EmpImg');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeComponent.prototype, "IsEmployeeActive", {
        get: function () {
            return this.employeeForm.get('EmployeeActive');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmployeeComponent.prototype, "getEmailCheckBox", {
        get: function () {
            return this.employeeForm.get('mailCheckBox');
        },
        enumerable: true,
        configurable: true
    });
    EmployeeComponent.ctorParameters = function () { return [
        { type: _showadaccounts_services_showadaccounts_service__WEBPACK_IMPORTED_MODULE_23__["ShowadaccountsService"] },
        { type: app_shared_services_shareddata_service__WEBPACK_IMPORTED_MODULE_25__["ShareddataService"] },
        { type: app_shared_services_email_service__WEBPACK_IMPORTED_MODULE_22__["EmailService"] },
        { type: app_shared_services_sweetalert_service__WEBPACK_IMPORTED_MODULE_21__["SweetalertService"] },
        { type: app_shared_services_logs_service__WEBPACK_IMPORTED_MODULE_24__["LogsService"] },
        { type: _asset_services_asset_service__WEBPACK_IMPORTED_MODULE_1__["AssetService"] },
        { type: _genaricemail_service_genaricemail_service__WEBPACK_IMPORTED_MODULE_11__["GenaricemailService"] },
        { type: _department_services_department_service__WEBPACK_IMPORTED_MODULE_12__["DepartmentService"] },
        { type: _position_service_position_service__WEBPACK_IMPORTED_MODULE_13__["PositionService"] },
        { type: _employee_services_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"] },
        { type: _branch_services_branch_service__WEBPACK_IMPORTED_MODULE_9__["BranchService"] },
        { type: _domain_services_domain_service__WEBPACK_IMPORTED_MODULE_20__["DomainService"] },
        { type: _company_services_company_service__WEBPACK_IMPORTED_MODULE_10__["CompanyService"] },
        { type: _shared_services_exportexcel_service__WEBPACK_IMPORTED_MODULE_8__["ExportexcelService"] },
        { type: ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__["OrderPipe"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: ngx_alerts__WEBPACK_IMPORTED_MODULE_14__["AlertService"] },
        { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_15__["BsModalService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('search'),
        __metadata("design:type", Object)
    ], EmployeeComponent.prototype, "search", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EmployeeComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('cropper', undefined),
        __metadata("design:type", app_operation_uploadimg_uploadimg_component__WEBPACK_IMPORTED_MODULE_16__["UploadimgComponent"])
    ], EmployeeComponent.prototype, "cropper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], EmployeeComponent.prototype, "fileInput", void 0);
    EmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee',
            template: __importDefault(__webpack_require__(/*! raw-loader!./employee.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/employee/employee.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./employee.component.css */ "./src/app/masterdata/employee/employee.component.css")).default]
        }),
        __metadata("design:paramtypes", [_showadaccounts_services_showadaccounts_service__WEBPACK_IMPORTED_MODULE_23__["ShowadaccountsService"],
            app_shared_services_shareddata_service__WEBPACK_IMPORTED_MODULE_25__["ShareddataService"],
            app_shared_services_email_service__WEBPACK_IMPORTED_MODULE_22__["EmailService"],
            app_shared_services_sweetalert_service__WEBPACK_IMPORTED_MODULE_21__["SweetalertService"],
            app_shared_services_logs_service__WEBPACK_IMPORTED_MODULE_24__["LogsService"],
            _asset_services_asset_service__WEBPACK_IMPORTED_MODULE_1__["AssetService"],
            _genaricemail_service_genaricemail_service__WEBPACK_IMPORTED_MODULE_11__["GenaricemailService"],
            _department_services_department_service__WEBPACK_IMPORTED_MODULE_12__["DepartmentService"],
            _position_service_position_service__WEBPACK_IMPORTED_MODULE_13__["PositionService"],
            _employee_services_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"],
            _branch_services_branch_service__WEBPACK_IMPORTED_MODULE_9__["BranchService"],
            _domain_services_domain_service__WEBPACK_IMPORTED_MODULE_20__["DomainService"],
            _company_services_company_service__WEBPACK_IMPORTED_MODULE_10__["CompanyService"],
            _shared_services_exportexcel_service__WEBPACK_IMPORTED_MODULE_8__["ExportexcelService"],
            ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__["OrderPipe"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            ngx_alerts__WEBPACK_IMPORTED_MODULE_14__["AlertService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_15__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_18__["Router"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/masterdata/employee/employeeimport/employeeimport.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/masterdata/employee/employeeimport/employeeimport.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-rounded{\r\n\r\n    border-radius: 30%;\r\n}\r\n\r\n\r\n\r\n\r\n.toolbarIcon{\r\n    font-size: 25px;\r\n    color: black;\r\n    padding-top: 13px;\r\n    padding-bottom: 7px;\r\n    padding-right: 7px;\r\n    padding-left: 7px;\r\n    cursor: pointer;\r\n    /* box-shadow: 1px 2px grey; */\r\n}\r\n\r\n\r\n\r\n\r\ni:hover {\r\n    margin-top: 6px;\r\n    font-size: 28px;\r\n    color: blue;\r\n    padding-top: 7px;\r\n    padding-bottom: 7px;\r\n    padding-right: 10px;\r\n    padding-left: 10px;\r\n    cursor: pointer;\r\n    border: 1px solid #f9f9f900;\r\n    background-color: white;\r\n}\r\n\r\n\r\n\r\n\r\n.marginsDropdownList{\r\n    margin-top: 8px;\r\n    padding-top: 7px;\r\n    padding-bottom: 7px;\r\n}\r\n\r\n\r\n\r\n\r\n.marginsPaging{\r\n    margin-top: 8px;\r\n    padding-top: 7px;\r\n    padding-bottom: 7px;\r\n}\r\n\r\n\r\n\r\n\r\n.marginsSearch{\r\n    /* margin-right: 10px; */\r\n    padding-top: 7px;\r\n    padding-bottom: 7px;\r\n}\r\n\r\n\r\n\r\n\r\n.toolbarCard{\r\n    box-shadow: 1px 1px 1px 1px grey; \r\n    /* margin: auto; */\r\n    /* height: 40px; */\r\n    background-color: #f9f9f9;\r\n    border: 1px solid rgb(212, 212, 212);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyZGF0YS9lbXBsb3llZS9lbXBsb3llZWltcG9ydC9lbXBsb3llZWltcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGtCQUFrQjtBQUN0Qjs7Ozs7QUFLQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiw4QkFBOEI7QUFDbEM7Ozs7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQix1QkFBdUI7QUFDM0I7Ozs7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7Ozs7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOzs7OztBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7Ozs7O0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsb0NBQW9DO0FBQ3hDIiwiZmlsZSI6InNyYy9hcHAvbWFzdGVyZGF0YS9lbXBsb3llZS9lbXBsb3llZWltcG9ydC9lbXBsb3llZWltcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1yb3VuZGVke1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLnRvb2xiYXJJY29ue1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZy10b3A6IDEzcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogN3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAvKiBib3gtc2hhZG93OiAxcHggMnB4IGdyZXk7ICovXHJcbn1cclxuaTpob3ZlciB7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmOWY5ZjkwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5tYXJnaW5zRHJvcGRvd25MaXN0e1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbn1cclxuLm1hcmdpbnNQYWdpbmd7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcclxufVxyXG4ubWFyZ2luc1NlYXJjaHtcclxuICAgIC8qIG1hcmdpbi1yaWdodDogMTBweDsgKi9cclxuICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG59XHJcbi50b29sYmFyQ2FyZHtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCBncmV5OyBcclxuICAgIC8qIG1hcmdpbjogYXV0bzsgKi9cclxuICAgIC8qIGhlaWdodDogNDBweDsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjEyLCAyMTIsIDIxMik7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/masterdata/employee/employeeimport/employeeimport.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/masterdata/employee/employeeimport/employeeimport.component.ts ***!
  \********************************************************************************/
/*! exports provided: EmployeeimportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeimportComponent", function() { return EmployeeimportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/employee.service */ "./src/app/masterdata/employee/services/employee.service.ts");
/* harmony import */ var app_shared_services_exportexcel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/services/exportexcel.service */ "./src/app/shared/services/exportexcel.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/__ivy_ngcc__/fesm5/ngx-order-pipe.js");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/__ivy_ngcc__/fesm5/ngx-alerts.js");
/* harmony import */ var app_shared_services_sweetalert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/services/sweetalert.service */ "./src/app/shared/services/sweetalert.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var app_shared_services_logs_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/services/logs.service */ "./src/app/shared/services/logs.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



// import { EmployeeModel } from 'app/shared/models/EmployeeModel';







var EmployeeimportComponent = /** @class */ (function () {
    // AddUserLog(action: string) {
    //   this.strSrv.sendUserLog(action).subscribe(res=>{
    //   });
    // }
    function EmployeeimportComponent(logSrv, alrtSrv, empSrv, expExcelSrv, orderPipe, swalSrv) {
        this.logSrv = logSrv;
        this.alrtSrv = alrtSrv;
        this.empSrv = empSrv;
        this.expExcelSrv = expExcelSrv;
        this.orderPipe = orderPipe;
        this.swalSrv = swalSrv;
        this.totalImportedEmplyees = 0;
        this.aleadyExistEmplyees = 0;
        this.newEmplyees = 0;
        this.selectedEmployess = 0;
        this.noHrCode = 0;
        this.totalEmplyees = 0;
        this.ActiveEmployees = 0;
        this.ActiveEmployeesNoHrCode = 0;
        this.ActiveAccounts = 0;
        this.ServiceAccounts = 0;
        this.ArchiveAccounts = 0;
        this.InActiveAccounts = 0; // ActiveAccounts: number;   ActiveAccounts: number;
        this.notificationMessage = '';
        this.loading = false;
        this.Employees = [];
        this.temp = [];
        this.FilteredAccounts = [];
        this.SelectedEmployees = [];
        this.pageSize = 5;
        this.pageIndex = 1;
        this.order = "info.name";
        this.reverse = false;
        this.valid = true;
        this.sortedCollection = orderPipe.transform(this.Employees, 'IsExist');
        this.onGetAllImportedEmployees();
    }
    EmployeeimportComponent.prototype.ngOnInit = function () {
    };
    EmployeeimportComponent.prototype.onExportExcel = function () {
        this.expExcelSrv.exportAsExcelFile(this.SelectedEmployees, 'AD-Accounts');
    };
    EmployeeimportComponent.prototype.onUpdatestatistics = function () {
        var _this = this;
        this.ActiveEmployees = 0;
        this.ServiceAccounts = 0;
        this.ArchiveAccounts = 0;
        this.ActiveAccounts = 0;
        this.InActiveAccounts = 0;
        this.ActiveEmployeesNoHrCode = 0;
        this.noHrCode = 0;
        this.totalImportedEmplyees = 0;
        this.aleadyExistEmplyees = 0;
        this.newEmplyees = 0;
        this.totalEmplyees = 0;
        this.selectedEmployess = 0;
        this.selectedEmployess = this.SelectedEmployees.length;
        this.totalImportedEmplyees = this.Employees.length;
        this.Employees.forEach(function (e) {
            if (e.enabled == false) {
                _this.InActiveAccounts += 1;
            }
            if (e.accountType == 'Employee') {
                _this.totalEmplyees += 1;
            }
            if (e.archiveAccount == true) {
                _this.ArchiveAccounts += 1;
            }
            if (e.serviceAccount == true) {
                _this.ServiceAccounts += 1;
            }
            if (e.enabled == true) {
                _this.ActiveAccounts += 1;
            }
            if (e.enabled == true && e.hrCode == "No-HrCode") {
                //  this.ActiveNoHrCode += 1;
            }
            if (e.IsExist == true) {
                _this.aleadyExistEmplyees += 1;
            }
            if (e.IsExist == false) {
                _this.newEmplyees += 1;
            }
            if (e.hrCode == "No-HrCode") {
                _this.noHrCode += 1;
            }
            if (e.enabled == true) {
            }
            ;
        });
        this.ActiveEmployees = this.totalImportedEmplyees;
        this.ActiveEmployees -= this.ArchiveAccounts;
        this.ActiveEmployees -= this.ServiceAccounts;
        this.ActiveEmployeesNoHrCode = this.ActiveEmployees - this.noHrCode;
    };
    EmployeeimportComponent.prototype.onGetAllImportedEmployees = function () {
        var _this = this;
        this.loading = true;
        this.empSrv.getAllImportedEmployees().subscribe(function (emps) {
            emps.forEach(function (em) {
                if (em.hrCode == "") {
                    if (em.accountType == 'Employee') {
                        em.hrCode = 'No-HrCode';
                    }
                    if (em.accountType == 'Archive' || em.accountType == 'Service') {
                        em.hrCode = 'N/A';
                    }
                }
            });
            _this.Employees = emps;
            _this.temp = _this.Employees; // for search
            _this.selectedEmployess = 0;
            _this.onUpdatestatistics();
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
            if (error.message.includes('Http failure response for http://')) {
                _this.swalSrv.showSwal('basic-error', " Server connection Error / Data is not updated ");
                _this.logSrv.sendUserLog("Server connection Error ( " + error + " )");
            }
        });
    };
    EmployeeimportComponent.prototype.ImportADEmployees = function () {
        var _this = this;
        this.loading = true;
        this.empSrv.ImportADEmployees().subscribe(function (emps) {
            var activeEmps = [];
            emps.forEach(function (e) {
                if (e.enabled) {
                    activeEmps.push(e);
                }
                ;
                //   if(e.accountName == 'tamer.youssry') {     console.log('HR Code' ,e.hrCode)}
            });
            _this.empSrv.addImportedAccounts(activeEmps).subscribe(function (employees) {
                _this.Employees = employees;
                _this.onGetAllImportedEmployees();
                _this.loading = false;
                var impEmpAllCheckBox = document.getElementById('impEmpAllCheckBox--');
                impEmpAllCheckBox.checked = false;
                _this.alrtSrv.success("( " + employees.length + " ) Imported Employees Successfully");
                _this.logSrv.sendUserLog("( " + employees.length + " ) Imported Employees Successfully");
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alrtSrv.danger('Server Error');
                }
            });
        }, function (error) {
            _this.loading = false;
            if (error.message.includes('Http failure response for http://')) {
                _this.alrtSrv.danger('Server Error');
            }
            ;
        });
    };
    EmployeeimportComponent.prototype.onSaveToEmployeeList = function () {
        var _this = this;
        if (this.SelectedEmployees.length == 0) {
            this.swalSrv.showSwal('basic-info', 'At least one Employee must be selected');
        }
        else if (this.SelectedEmployees.length > 0) {
            this.FilteredAccounts = [];
            this.SelectedEmployees.forEach(function (ac) {
                if (ac.hrCode == 'No-HrCode' || ac.IsExist == true || ac.enabled == false) {
                    _this.valid = false;
                }
                if (_this.valid) {
                    _this.FilteredAccounts.push(ac);
                }
                _this.valid = true;
            });
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                title: '</h4>( ' + this.FilteredAccounts.length + ' )  Will be Saved <br> Out of ( ' + this.totalImportedEmplyees + ' ) </h4>',
                icon: 'info',
                html: ' <span> Include accounts for New Employees / Services / Archive  </span> ',
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: '<i class="fa "></i>Yes Save',
                confirmButtonAriaLabel: '',
                cancelButtonText: '<i class="fa ">Cancel</i>',
                cancelButtonAriaLabel: ''
            }).then(function (res) {
                if (res.value) {
                    _this.loading = true;
                    _this.empSrv.saveEmployees(_this.FilteredAccounts).subscribe(function (emps) {
                        _this.swalSrv.showSwal('basic-success', '( ' + emps.length + ' ) Employees saved Successfully');
                        _this.logSrv.sendUserLog("( " + emps.length + " ) Saved Successfully");
                        _this.SelectedEmployees = [];
                        _this.onGetAllImportedEmployees();
                        _this.loading = false;
                    }, function (error) {
                        _this.loading = false;
                        if (error.message.includes('Http failure response for http://')) {
                            _this.swalSrv.showSwal('basic-error', " Server connection Error / Data is not updated ");
                        }
                    });
                }
            });
        }
    };
    EmployeeimportComponent.prototype.onClear = function () {
        var _this = this;
        this.empSrv.deleteALLimportedEmployees().subscribe(function (res) {
            _this.onGetAllImportedEmployees();
            _this.alrtSrv.success('Cleared Successfully');
        });
    };
    EmployeeimportComponent.prototype.onChangeSearch = function (val) {
        // fetch remote data from here
        // And reassign the 'data' which is binded to 'data' property.
    };
    EmployeeimportComponent.prototype.onFocused = function (e) {
        // do something when input is focused
    };
    EmployeeimportComponent.prototype.IsHRCodeExist = function (e) {
        if (e.target.value.length >= 4) {
            this.empSrv.GetEmployeeByCode(e.target.value).subscribe(function (emp) {
                if (emp) {
                }
                else if (!emp) {
                }
            });
        }
    };
    EmployeeimportComponent.prototype.onDeleteEmployee = function (id) {
        var _this = this;
        this.empSrv.deleteEmployee(id).subscribe(function (EmployeeAdded) {
            _this.ImportADEmployees();
        });
    };
    EmployeeimportComponent.prototype.onSelectAll = function () {
        var _this = this;
        var impEmpAllCheckBox = document.getElementById("impEmpAllCheckBox--");
        this.SelectedEmployees = [];
        if (impEmpAllCheckBox.checked) {
            this.Employees.forEach(function (val) { val.checkbox = true; });
            this.Employees.forEach(function (emp) { _this.SelectedEmployees.push(emp); });
        }
        else if (!impEmpAllCheckBox.checked) {
            this.Employees.forEach(function (val) { val.checkbox = false; });
        }
        this.onUpdatestatistics();
    };
    EmployeeimportComponent.prototype.onSelect = function (e, emp, i) {
        var _this = this;
        if (e.target.checked) {
            console.log(this.SelectedEmployees);
            this.SelectedEmployees.push(emp);
            this.onUpdatestatistics();
            var allChecked_1 = true;
            this.Employees.forEach(function (asset, index) {
                var assetItemHTMLelemnt = document.getElementById('assetItem--' + index);
                if (!assetItemHTMLelemnt.checked) {
                    allChecked_1 = false;
                }
            });
            if (allChecked_1)
                var impEmpAllCheckBox = document.getElementById("impEmpAllCheckBox--");
            impEmpAllCheckBox.checked = true;
            this.onUpdatestatistics();
        }
        else if (!e.target.checked) {
            var impEmpAllCheckBox = document.getElementById("impEmpAllCheckBox--");
            if (impEmpAllCheckBox.checked) {
                impEmpAllCheckBox.checked = false;
                this.onUpdatestatistics();
            }
            this.SelectedEmployees.filter(function (empployee, selectedIndex) {
                if (i === selectedIndex) {
                    _this.SelectedEmployees.splice(selectedIndex, 1);
                    _this.onUpdatestatistics();
                }
            });
            this.onUpdatestatistics();
        }
    };
    EmployeeimportComponent.prototype.IsCheckBoxsSelected = function () {
        var x = this.SelectedEmployees.length;
        if (x >= 0) {
            return true;
        }
        else {
            return false;
        }
    };
    EmployeeimportComponent.prototype.onDeleteAllSellected = function () {
        var _this = this;
        if (this.SelectedEmployees.length == 0) {
            this.alrtSrv.danger('No Record selected');
        }
        else {
            this.loading = true;
            this.empSrv.deleteSelectedImportedEmployees(this.SelectedEmployees).subscribe(function (dltemps) {
                _this.alrtSrv.success("( " + dltemps.length + " ) Employees Deleted ");
                _this.logSrv.sendUserLog("( " + dltemps.length + " ) Imported Employees Deleted Successfully");
                _this.SelectedEmployees = [];
                _this.onGetAllImportedEmployees();
                _this.loading = false;
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alrtSrv.danger('Server Error');
                }
            });
        }
    };
    EmployeeimportComponent.prototype.onPrintPreviewSelectedEmployees = function () {
        // console.log(emp);
        // 
        // this.bsModaleRef = this.modalService.show(AddeditasstComponent, {initialState: {emp}});
        // this.bsModaleRef.content.onClose = (updated) => {
        //   if (updated) {
        //     this.onGetAllEmployees();
        //     console.log('Edit clicked inside');
        //   }
        // };
        // console.log('Edit clicked');
    };
    EmployeeimportComponent.prototype.setOrder = function (value) {
        //  if (this.order === value) {
        //    this.reverse = !this.reverse;
        //  }
        // if(this.reverse == false){
        //   this.reverse = true;
        // } else {
        //   this.reverse = false;
        // }
        this.reverse = !this.reverse;
        this.order = value;
    };
    EmployeeimportComponent.prototype.onSort = function (event) {
        // console.log(event);
    };
    EmployeeimportComponent.prototype.updateFilter = function (val) {
        // 
        // console.log(Object.keys(this.temp[0]).length);
        var value = val.toString().toLowerCase().trim();
        //  
        // get the amount of columns in the table
        var count = Object.keys(this.temp[0]).length;
        //  
        // get the key names of each column in the dataset
        var keys = Object.keys(this.temp[0]);
        //  
        // assign filtered matches to the active datatable
        this.Employees = this.temp.filter(function (item) {
            //  
            // iterate through each row's column data
            for (var i = 0; i < count; i++) {
                // check for a match
                if ((item[keys[i]] &&
                    item[keys[i]]
                        .toString()
                        .toLowerCase()
                        .indexOf(value) !== -1) ||
                    !value) {
                    // found match, return true to add to result set
                    // console.log(item, 1);
                    return true;
                }
            }
        });
        //Whenever the filter changes, always go back to the first page
    };
    EmployeeimportComponent.prototype.ngAfterViewInit = function () {
        // 
        // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        // Add 'implements AfterViewInit' to the class.
        var _this = this;
        //  this.onUpdatestatistics();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this.search.nativeElement, 'keydown')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(550), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (x) { return x['target']['value']; }))
            .subscribe(function (value) {
            _this.updateFilter(value);
        });
        //  this.onUpdatestatistics();
    };
    EmployeeimportComponent.prototype.onChangeRowsPerPage = function (event) {
        this.pageSize = event.target.value;
        this.pageIndex = 1;
    };
    EmployeeimportComponent.prototype.onFilterByNoHrCode = function (e) {
        var _this = this;
        if (e.target.value == 'ShowAll') {
            this.onGetAllImportedEmployees();
        }
        else if (e.target.value == 'No-HrCode') {
            this.Employees = [];
            this.temp.forEach(function (emp) {
                if (emp.hrCode == 'No-HrCode') {
                    _this.Employees.push(emp);
                }
            });
        }
        else if (e.target.value == 'EmployeesAccs') {
            this.Employees = [];
            this.temp.forEach(function (emp) {
                if (emp.accountType == "Employee") {
                    _this.Employees.push(emp);
                }
            });
        }
        else if (e.target.value == 'ServiceAccounts') {
            this.Employees = [];
            this.temp.forEach(function (emp) {
                if (emp.serviceAccount == true) {
                    _this.Employees.push(emp);
                }
            });
        }
        else if (e.target.value == 'ArchiveAccounts') {
            this.Employees = [];
            this.temp.forEach(function (emp) {
                if (emp.archiveAccount == true) {
                    _this.Employees.push(emp);
                }
            });
        }
        else if (e.target.value == 'ActiveEmpsNoCode') {
            this.Employees = [];
            this.temp.forEach(function (emp) {
                if (emp.enabled == true && emp.hrCode == 'No-HrCode'
                    && emp.archiveAccount == false && emp.serviceAccount == false) {
                    _this.Employees.push(emp);
                }
            });
        }
    };
    EmployeeimportComponent.ctorParameters = function () { return [
        { type: app_shared_services_logs_service__WEBPACK_IMPORTED_MODULE_9__["LogsService"] },
        { type: ngx_alerts__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
        { type: _services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"] },
        { type: app_shared_services_exportexcel_service__WEBPACK_IMPORTED_MODULE_2__["ExportexcelService"] },
        { type: ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__["OrderPipe"] },
        { type: app_shared_services_sweetalert_service__WEBPACK_IMPORTED_MODULE_7__["SweetalertService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('search'),
        __metadata("design:type", Object)
    ], EmployeeimportComponent.prototype, "search", void 0);
    EmployeeimportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employeeimport',
            template: __importDefault(__webpack_require__(/*! raw-loader!./employeeimport.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/employee/employeeimport/employeeimport.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./employeeimport.component.css */ "./src/app/masterdata/employee/employeeimport/employeeimport.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_shared_services_logs_service__WEBPACK_IMPORTED_MODULE_9__["LogsService"],
            ngx_alerts__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
            _services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"],
            app_shared_services_exportexcel_service__WEBPACK_IMPORTED_MODULE_2__["ExportexcelService"],
            ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__["OrderPipe"],
            app_shared_services_sweetalert_service__WEBPACK_IMPORTED_MODULE_7__["SweetalertService"]])
    ], EmployeeimportComponent);
    return EmployeeimportComponent;
}());



/***/ }),

/***/ "./src/app/masterdata/employee/showadaccounts/services/showadaccounts.service.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/masterdata/employee/showadaccounts/services/showadaccounts.service.ts ***!
  \***************************************************************************************/
/*! exports provided: ShowadaccountsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowadaccountsService", function() { return ShowadaccountsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var ShowadaccountsService = /** @class */ (function () {
    function ShowadaccountsService(http) {
        this.http = http;
    }
    ShowadaccountsService.prototype.getAllArchives = function () {
        //  debugger;
        return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'ADArchiveAccounts');
    };
    ShowadaccountsService.prototype.getAllServices = function () {
        //   debugger;
        return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'ADServiceAccounts');
    };
    ShowadaccountsService.prototype.deleteSelectedArchives = function (body) {
        // debugger;
        return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'ADArchiveAccounts/DeleteSelectedArchives/', body);
    };
    ShowadaccountsService.prototype.deleteSelectedServices = function (body) {
        // debugger;
        return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'ADServiceAccounts/DeleteSelectedServices/', body);
    };
    ShowadaccountsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ShowadaccountsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ShowadaccountsService);
    return ShowadaccountsService;
}());



/***/ }),

/***/ "./src/app/masterdata/employee/showadaccounts/showadaccounts.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/masterdata/employee/showadaccounts/showadaccounts.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3RlcmRhdGEvZW1wbG95ZWUvc2hvd2FkYWNjb3VudHMvc2hvd2FkYWNjb3VudHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/masterdata/employee/showadaccounts/showadaccounts.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/masterdata/employee/showadaccounts/showadaccounts.component.ts ***!
  \********************************************************************************/
/*! exports provided: ShowadaccountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowadaccountsComponent", function() { return ShowadaccountsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_showadaccounts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/showadaccounts.service */ "./src/app/masterdata/employee/showadaccounts/services/showadaccounts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ShowadaccountsComponent = /** @class */ (function () {
    function ShowadaccountsComponent(shwSrv) {
        this.shwSrv = shwSrv;
        this.AllAccounts = [];
        this.ADServiceAccs = [];
        this.SelectedADServiceAccs = [];
        this.ADServiceAccsTemp = [];
        this.ADArchiveAccs = [];
        this.SelectedADArchiveAccs = [];
        this.ADArchiveAccsTemp = [];
        this.loading = false;
        this.onShowBy();
    }
    ShowadaccountsComponent.prototype.ngOnInit = function () {
    };
    ShowadaccountsComponent.prototype.onShowBy = function (e) {
        var _this = this;
        debugger;
        this.loading = true;
        //Services
        this.shwSrv.getAllServices().subscribe(function (accs) {
            debugger;
            _this.ADServiceAccs = accs;
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
            if (error.message.includes('Http failure response for http://')) {
                //  this.notifcationMessegeTimer('Server connection Error / Data is not updated');
            }
        });
        //Archives
        this.shwSrv.getAllArchives().subscribe(function (accs) {
            debugger;
            _this.ADArchiveAccs = accs;
            debugger;
            _this.AllAccounts = [];
            if (e == undefined || e.target.value == 'ShowAll') {
                _this.AllAccounts = _this.ADServiceAccs;
                _this.ADArchiveAccs.forEach(function (acc) {
                    _this.AllAccounts.push(acc);
                });
            }
            if (e.target.value == 'ServiceAccounts') {
                _this.AllAccounts = _this.ADServiceAccs;
            }
            if (e.target.value == 'ArchiveAccounts') {
                _this.AllAccounts = _this.ADArchiveAccs;
            }
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
            if (error.message.includes('Http failure response for http://')) {
                //  this.notifcationMessegeTimer('Server connection Error / Data is not updated');
            }
        });
        this.loading = false;
    };
    ShowadaccountsComponent.prototype.onDeleteAllSellectedSA = function () {
        var _this = this;
        // debugger;
        this.loading = true;
        if (this.SelectedADServiceAccs.length == 0) {
            //  this.notifcationMessegeTimer('No Record Selected');
        }
        else {
            var ids_1 = [];
            this.SelectedADServiceAccs.forEach(function (em) {
                ids_1.push(em.ADServiceAccountId);
            });
            this.shwSrv.deleteSelectedServices(ids_1).subscribe(function (dltemps) {
                _this.SelectedADServiceAccs = [];
                _this.loading = false;
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    //  this.notifcationMessegeTimer( 'Server connection Error / Data is not updated');
                }
            });
        }
    };
    ShowadaccountsComponent.prototype.onDeleteAllSellectedArchive = function () {
        var _this = this;
        // debugger;
        this.loading = true;
        if (this.SelectedADArchiveAccs.length == 0) {
            //    this.notifcationMessegeTimer('No Record Selected');
        }
        else {
            var ids_2 = [];
            this.SelectedADArchiveAccs.forEach(function (em) {
                ids_2.push(em.ADArchiveAccountId);
            });
            this.shwSrv.deleteSelectedArchives(ids_2).subscribe(function (dltemps) {
                _this.SelectedADArchiveAccs = [];
                _this.loading = false;
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    //     this.notifcationMessegeTimer( 'Server connection Error / Data is not updated');
                }
            });
        }
    };
    ShowadaccountsComponent.ctorParameters = function () { return [
        { type: _services_showadaccounts_service__WEBPACK_IMPORTED_MODULE_1__["ShowadaccountsService"] }
    ]; };
    ShowadaccountsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-showadaccounts',
            template: __importDefault(__webpack_require__(/*! raw-loader!./showadaccounts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/employee/showadaccounts/showadaccounts.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./showadaccounts.component.css */ "./src/app/masterdata/employee/showadaccounts/showadaccounts.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_showadaccounts_service__WEBPACK_IMPORTED_MODULE_1__["ShowadaccountsService"]])
    ], ShowadaccountsComponent);
    return ShowadaccountsComponent;
}());



/***/ }),

/***/ "./src/app/masterdata/employee/uploademployee/uploademployee.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/masterdata/employee/uploademployee/uploademployee.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-rounded{\r\n\r\n    border-radius: 30%;\r\n}\r\n\r\n.toolbarIcon{\r\n    font-size: 25px;\r\n    color: black;\r\n    padding-top: 13px;\r\n    padding-bottom: 7px;\r\n    padding-right: 10px;\r\n    padding-left: 10px;\r\n    cursor: pointer;\r\n    /* box-shadow: 1px 2px grey; */\r\n}\r\n\r\n.toolbarIcon:hover {\r\n    margin-top: 6px;\r\n    font-size: 28px;\r\n    color: blue;\r\n    padding-top: 7px;\r\n    padding-bottom: 7px;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    cursor: pointer;\r\n    border: 1px solid #f9f9f900;\r\n    background-color: white;\r\n}\r\n\r\n.marginsDropdownList{\r\n    margin-top: 8px;\r\n    padding-top: 7px;\r\n    padding-bottom: 7px;\r\n}\r\n\r\n.marginsPaging{\r\n    margin-top: 8px;\r\n    padding-top: 7px;\r\n    padding-bottom: 7px;\r\n}\r\n\r\n.marginsSearch{\r\n    /* margin-right: 10px; */\r\n    padding-top: 7px;\r\n    padding-bottom: 7px;\r\n}\r\n\r\n.toolbarCard{\r\n    box-shadow: 1px 1px 1px 1px grey; \r\n    /* margin: auto; */\r\n    /* height: 40px; */\r\n    background-color: #f9f9f9;\r\n    border: 1px solid rgb(212, 212, 212);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFzdGVyZGF0YS9lbXBsb3llZS91cGxvYWRlbXBsb3llZS91cGxvYWRlbXBsb3llZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiw4QkFBOEI7QUFDbEM7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQix1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsb0NBQW9DO0FBQ3hDIiwiZmlsZSI6InNyYy9hcHAvbWFzdGVyZGF0YS9lbXBsb3llZS91cGxvYWRlbXBsb3llZS91cGxvYWRlbXBsb3llZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1yb3VuZGVke1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcclxufVxyXG5cclxuLnRvb2xiYXJJY29ue1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZy10b3A6IDEzcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC8qIGJveC1zaGFkb3c6IDFweCAycHggZ3JleTsgKi9cclxufVxyXG4udG9vbGJhckljb246aG92ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjlmOWY5MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubWFyZ2luc0Ryb3Bkb3duTGlzdHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG59XHJcbi5tYXJnaW5zUGFnaW5ne1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDdweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbn1cclxuLm1hcmdpbnNTZWFyY2h7XHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDEwcHg7ICovXHJcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcclxufVxyXG4udG9vbGJhckNhcmR7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggZ3JleTsgXHJcbiAgICAvKiBtYXJnaW46IGF1dG87ICovXHJcbiAgICAvKiBoZWlnaHQ6IDQwcHg7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMiwgMjEyLCAyMTIpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/masterdata/employee/uploademployee/uploademployee.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/masterdata/employee/uploademployee/uploademployee.component.ts ***!
  \********************************************************************************/
/*! exports provided: UploademployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploademployeeComponent", function() { return UploademployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var json2csv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! json2csv */ "./node_modules/json2csv/dist/json2csv.umd.js");
/* harmony import */ var json2csv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json2csv__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/employee.service */ "./src/app/masterdata/employee/services/employee.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_shared_services_downloadfile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/services/downloadfile.service */ "./src/app/shared/services/downloadfile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/__ivy_ngcc__/fesm5/ngx-alerts.js");
/* harmony import */ var app_shared_services_exportexcel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/services/exportexcel.service */ "./src/app/shared/services/exportexcel.service.ts");
/* harmony import */ var app_shared_services_sweetalert_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/services/sweetalert.service */ "./src/app/shared/services/sweetalert.service.ts");
/* harmony import */ var app_shared_services_appstorage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/shared/services/appstorage.service */ "./src/app/shared/services/appstorage.service.ts");
/* harmony import */ var app_shared_services_logs_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/shared/services/logs.service */ "./src/app/shared/services/logs.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};














var UploademployeeComponent = /** @class */ (function () {
    function UploademployeeComponent(http, empSrv, strSrv, logSrv, domSanitizer, fileService, sanitizer, router, alrtSrv, swalSrv, expExcelSrv, alertService) {
        this.http = http;
        this.empSrv = empSrv;
        this.strSrv = strSrv;
        this.logSrv = logSrv;
        this.domSanitizer = domSanitizer;
        this.fileService = fileService;
        this.sanitizer = sanitizer;
        this.router = router;
        this.alrtSrv = alrtSrv;
        this.swalSrv = swalSrv;
        this.expExcelSrv = expExcelSrv;
        this.alertService = alertService;
        this.upLoadedEmployees = 0;
        this.noHrCode = 0;
        this.noBranch = 0;
        this.noCompany = 0;
        this.noDepartment = 0;
        this.noDirMngr = 0;
        this.isExist = 0;
        this.isNew = 0;
        this.isDuplicated = 0;
        this.selectedEmployees = 0;
        this.showStatistics = false;
        this.pageIndex = 1;
        this.loading = false;
        this.temp = [];
        this.Employees = [];
        this.pageSize = 5;
        this.order = "info.name";
        this.reverse = false;
        this.SelectedEmployees = [];
        this.notificationMessage = '';
        // Export File
        this.csvFileName = "test.csv";
        this.Assets_DATA = [];
        // AddUserLog(action: string) {
        //   this.logSrv.sendUserLog(action).subscribe(res=>{
        //   });
        // }
        // notifcationMessegeTimer(messege : string) {
        //   //   
        //   var x  = setInterval(() => 
        //    {
        //         return this.notificationMessage = '';
        //    },10000);
        //         return this.notificationMessage = messege;
        // }
        this.showCodeGuide = false;
    }
    // noticationMessegeTimer(messege : string, saved?: number, selected?: number) {
    //   var x  = setInterval(() => 
    //    {
    //         return this.notificationMessage = '';
    //    },10000);
    //         return this.notificationMessage = saved + messege + selected;
    // }
    // AddAssetTrackingLog(ast: any) {
    //    
    //   var assetTracking = new AssetTrackingModel();
    //   var usr = this.strSrv.getUserFromStorage(); 
    //   assetTracking.From = "Uploaded-Saved";
    //   assetTracking.To = ast.EmployeeName;
    //   assetTracking.empId = ast.empId;
    //   assetTracking.usrId = usr.usrId;
    //   this.logSrv.sendAssetTrackingLog(assetTracking).subscribe(res=>{
    //     console.log(res);
    //     
    //   });
    // }
    // Hide Empty Column
    UploademployeeComponent.prototype.IsDescriptionExist = function () {
        var is = false;
        //   this.Employees.forEach(x=>{ if(x.Description != '') { is = true } });
        return is;
    };
    UploademployeeComponent.prototype.IsSerialNumberExist = function () {
        var is = false;
        //   this.Employees.forEach(x=>{ if(x.SerialNumber != '') { is = true } });
        return is;
    };
    UploademployeeComponent.prototype.IsPartNumberExist = function () {
        var is = false;
        //    this.Employees.forEach(x=>{ if(x.PartNumber != '') { is = true } });
        return is;
    };
    UploademployeeComponent.prototype.IsDialNumberExist = function () {
        var is = false;
        this.Employees.forEach(function (x) { if (x.empFullName != '') {
            is = true;
        } });
        return is;
    };
    UploademployeeComponent.prototype.IsCircuitNumberExist = function () {
        var is = false;
        //    this.Employees.forEach(x=>{ if(x.CircuitNumber != '') { is = true } });
        return is;
    };
    UploademployeeComponent.prototype.IsTypeCodeExist = function () {
        var is = false;
        //   this.Employees.forEach(x=>{ if(x.TypeCode != '') { is = true } });
        return is;
    };
    UploademployeeComponent.prototype.IsTypeNameExist = function () {
        var is = false;
        //   this.Employees.forEach(x=>{ if(x.TypeName != '') { is = true } });
        return is;
    };
    UploademployeeComponent.prototype.IsEmpHRCodeExist = function () {
        var is = false;
        //   this.Employees.forEach(x=>{ if(x.EmpHRCode != '') { is = true } });
        return is;
    };
    UploademployeeComponent.prototype.IsEmpNameExist = function () {
        var is = false;
        //   this.Employees.forEach(x=>{ if(x.EmpName != '') { is = true } });
        return is;
    };
    UploademployeeComponent.prototype.IsCompanyCodeExist = function () {
        var is = false;
        this.Employees.forEach(function (x) { if (x.empFullName != '') {
            is = true;
        } });
        return is;
    };
    UploademployeeComponent.prototype.IsCompanyNameExist = function () {
        var is = false;
        //   this.Employees.forEach(x=>{ if(x.CompanyName != '') { is = true } });
        return is;
    };
    UploademployeeComponent.prototype.IsBranchCodeExist = function () {
        var is = false;
        //   this.Employees.forEach(x=>{ if(x.BranchCode != '') { is = true } });
        return is;
    };
    UploademployeeComponent.prototype.IsBranchNameExist = function () {
        var is = false;
        //    this.Employees.forEach(x=>{ if(x.BranchName != '') { is = true } });
        return is;
    };
    UploademployeeComponent.prototype.ngOnInit = function () {
        this.onGetAllUploadedEmployees();
        // const data = 'some text';
        // const blob = new Blob([data], { type: 'application/octet-stream' });
        // this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
    };
    UploademployeeComponent.prototype.onShowHideCodeGuide = function () {
        this.showCodeGuide = !this.showCodeGuide;
    };
    UploademployeeComponent.prototype.onUpdatestatistics = function () {
        var _this = this;
        debugger;
        this.noDepartment = 0;
        this.noHrCode = 0;
        this.noBranch = 0;
        this.noCompany = 0;
        this.isExist = 0;
        this.isNew = 0;
        this.isDuplicated = 0;
        this.selectedEmployees = 0;
        this.selectedEmployees = this.SelectedEmployees.length;
        this.upLoadedEmployees = this.Employees.length;
        this.Employees.forEach(function (a) {
            debugger;
            if (a.BranchName == "missing") {
                _this.noBranch += 1;
            }
            if (a.CompanyName == "missing") {
                _this.noCompany += 1;
            }
            if (a.DepartmentName == "missing") {
                _this.noDepartment += 1;
            }
            if (a.empFullName == "missing") {
                _this.noHrCode += 1;
            }
            if (a.DirectMngName == "missing") {
                _this.noDirMngr += 1;
            }
            if (a.checkbox == true) {
                _this.isExist += 1;
            }
            if (a.checkbox == false) {
                _this.isNew += 1;
            }
            if (a.duplicatHrCode == true) {
                _this.isDuplicated += 1;
            }
            ;
        });
    };
    UploademployeeComponent.prototype.onShowHideStatistics = function () {
        this.showStatistics = !this.showStatistics;
    };
    UploademployeeComponent.prototype.onSaveToEmployeesList = function () {
        var _this = this;
        if (this.SelectedEmployees.length > 0) {
            this.loading = true;
            this.empSrv.saveUploadedEmployees(this.SelectedEmployees).subscribe(function (emps) {
                debugger;
                if (emps) {
                    _this.loading = false;
                }
                _this.onGetAllUploadedEmployees();
                _this.onUpdatestatistics();
                _this.swalSrv.showSwal('basic-info', 'Employees With Same Hr Code Are NOT Saved !!', "(" + emps.length + ")  Saved Successfully out of (" + _this.SelectedEmployees.length + ")");
                _this.logSrv.sendUserLog("( " + emps.length + " )  Saved Successfully out of ( " + _this.SelectedEmployees.length + " )");
                _this.SelectedEmployees = [];
                emps.forEach(function (ast) {
                    debugger;
                    _this.logSrv.sendAssetTrackingLog(ast, "Uploaded-Saved", ast.EmployeeName).subscribe(function (logged) {
                        _this.onGetAllUploadedEmployees();
                    });
                });
            });
        }
        else if (this.SelectedEmployees.length == 0) {
            this.swalSrv.showSwal('basic-error', 'You Must Select At Lease One Asset');
            //  this.alrtSrv.danger('No Asset Selected');
            //  this.noticationMessegeTimer("Please Select Item to Save");
        }
    };
    UploademployeeComponent.prototype.onClear = function () {
        //  this.empSrv.deleteAllUploadedAssets(this.Employees).subscribe(res => {
        //   this.alrtSrv.success('Deleted Successfully');
        //   this.logSrv.sendUserLog("Uploaded Employees Deleted Successfully");
        //   this.onGetAllUploadedEmployees();
        //   //  console.log(res);
        // });
    };
    UploademployeeComponent.prototype.onGetAllUploadedEmployees = function () {
        var _this = this;
        this.empSrv.getAllUploadedEmployees().subscribe(function (employees) {
            debugger;
            _this.Employees = employees;
            _this.temp = employees;
            _this.pageIndex = 1;
            var allAssetsCheckBox = document.getElementById('assetItemALL--');
            allAssetsCheckBox.checked = false;
            _this.onUpdatestatistics();
        }, function (error) {
            _this.loading = false;
            if (error.message.includes('Http failure response for http://')) {
                _this.alertService.danger('Server error');
            }
        });
    };
    UploademployeeComponent.prototype.uploadFile = function () {
        var _this = this;
        this.Employees = [];
        var formData = new FormData();
        this.loading = true;
        formData.append("upload", this.fileInput.nativeElement.files[0]);
        this.empSrv.UploadExcel(formData).subscribe(function (result) {
            debugger;
            _this.logSrv.sendUserLog("Employees File ( " + _this.fileInput.nativeElement.files[0].name + " ) Uploaded");
            _this.message = result.toString();
            _this.onGetAllUploadedEmployees();
            _this.onUpdatestatistics();
            _this.loading = false;
            _this.alrtSrv.success('File Uploaded Successfully');
        });
    };
    // Export File
    UploademployeeComponent.prototype.getCSVDownloadLink = function () {
        //   
        return this.generateCSVDownloadLink({
            filename: this.csvFileName,
            data: this.Assets_DATA,
            columns: ['AssetId', "AssetDescription", "AssetType", "AssetSN", "AssetPN"]
        });
        // 
    };
    // example: any = { Description: 'aaa', AssetCode: 'aaa', SerialNumber: 'aa',PartNumber: 'rrr', DialNumber: 'rr',TypeName: 'rr', EmpHRCode: 'rr', EmpName: 'rrr', CompanyName: 'rrr', BranchName: 'rrr'}
    // onExportExcel() {
    //   
    //   this.expExcelSrv.exportAsExcelFile(this.SelectedEmployees, 'AssetsList');
    // }
    // you can move this method to a empSrv  // Function to convert the file
    UploademployeeComponent.prototype.generateCSVDownloadLink = function (options) {
        var fields = options.columns;
        var opts = { fields: fields, output: options.filename };
        var csv = json2csv__WEBPACK_IMPORTED_MODULE_1__["parse"](options.data, opts);
        return this.domSanitizer.bypassSecurityTrustUrl("data:text/csv," + encodeURIComponent(csv));
    };
    UploademployeeComponent.prototype.onAddToEmployeeList = function (e, Employees) {
        if (!e.target.checked) {
            // let itemIndex = this.Assets_DATA.filter(value => {value.AssetsId === Employees.AssetsId});
            var index = this.Assets_DATA.findIndex(function (x) { return x.AssetsId === Employees.AssetsId; });
            this.Assets_DATA.splice(index, 1);
        }
        else if (e.target.checked) {
            this.Assets_DATA.push({
                AssetsId: Employees.AssetsId,
                AssetsName: Employees.AssetsName,
                EmailId: Employees.EmailId,
                Address: Employees.Address
            });
        }
    };
    UploademployeeComponent.prototype.onSelectAll = function (e) {
        var _this = this;
        this.SelectedEmployees = [];
        if (e.target.checked) {
            this.Employees.forEach(function (val) {
                val.checkbox = true;
                _this.SelectedEmployees.push(val);
            });
        }
        else if (!e.target.checked) {
            this.Employees.forEach(function (val) { val.checkbox = false; });
        }
        this.onUpdatestatistics();
    };
    UploademployeeComponent.prototype.onSelect = function (e, ast) {
        var _this = this;
        debugger;
        if (e.target.checked) {
            this.SelectedEmployees.push(ast);
            this.onUpdatestatistics();
            var allChecked_1 = true;
            this.Employees.forEach(function (employee, index) {
                var assetItemHTMLelemnt = document.getElementById('assetItem--' + index);
                if (!assetItemHTMLelemnt.checked)
                    allChecked_1 = false;
            });
            if (allChecked_1)
                var assetItemALLHTMLelemnt = document.getElementById("assetItemALL--");
            assetItemALLHTMLelemnt.checked = true;
        }
        else if (!e.target.checked) {
            var assetItemALLHTMLelemnt = document.getElementById("assetItemALL--");
            if (assetItemALLHTMLelemnt.checked)
                assetItemALLHTMLelemnt.checked = false;
            this.onUpdatestatistics();
            this.SelectedEmployees.filter(function (employee, selectedIndex) {
                if (employee.empId === ast.empId) {
                    debugger;
                    _this.SelectedEmployees.splice(selectedIndex, 1);
                    _this.onUpdatestatistics();
                }
            });
        }
    };
    UploademployeeComponent.prototype.onPrintPreviewSelectedAssets = function () {
        // console.log(ast);
        // 
        // this.bsModaleRef = this.modalService.show(AddeditasstComponent, {initialState: {ast}});
        // this.bsModaleRef.content.onClose = (updated) => {
        //   if (updated) {
        //     this.onGetAllUploadedEmployees();
        //     console.log('Edit clicked inside');
        //   }
        // };
        // console.log('Edit clicked');
    };
    UploademployeeComponent.prototype.setOrder = function (value) {
        //
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    UploademployeeComponent.prototype.onSort = function (event) {
    };
    UploademployeeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        //  
        // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        // Add 'implements AfterViewInit' to the class.
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this.search.nativeElement, 'keydown')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(550), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (x) { return x['target']['value']; }))
            .subscribe(function (value) {
            _this.updateFilter(value);
        });
    };
    UploademployeeComponent.prototype.onChangeRowsPerPage = function (event) {
        this.pageSize = event.target.value;
        this.pageIndex = 1;
    };
    UploademployeeComponent.prototype.updateFilter = function (val) {
        var value = val.toString().toLowerCase().trim();
        // get the amount of columns in the table
        var count = Object.keys(this.temp[0]).length;
        // get the key names of each column in the dataset
        var keys = Object.keys(this.temp[0]);
        // assign filtered matches to the active datatable
        this.Employees = this.temp.filter(function (item) {
            //  
            // iterate through each row's column data
            for (var i = 0; i < count; i++) {
                // check for a match
                if ((item[keys[i]] &&
                    item[keys[i]]
                        .toString()
                        .toLowerCase()
                        .indexOf(value) !== -1) ||
                    !value) {
                    // found match, return true to add to result set
                    // console.log(item, 1);
                    return true;
                }
            }
        });
        //Whenever the filter changes, always go back to the first page
    };
    // Download File
    UploademployeeComponent.prototype.download = function () {
        this.fileService.downloadEmployeeFile().subscribe(function (response) {
            debugger;
            var blob = new Blob([response.blob()], { type: 'text/json; charset=utf-8' });
            var url = window.URL.createObjectURL(blob);
            window.open(response.url);
        }), function (error) { return console.log('Error downloading the file'); },
            function () { return console.info('File downloaded successfully'); };
    };
    UploademployeeComponent.prototype.onDeleteAllSellected = function () {
        var _this = this;
        this.loading = true;
        if (this.SelectedEmployees.length == 0) {
            this.swalSrv.showSwal('basic-error', 'You Must Select At Least One Asset');
            this.loading = false;
            // this.notifcationMessegeTimer('No Record Selected');
        }
        else {
            var ids_1 = [];
            this.SelectedEmployees.forEach(function (em) {
                ids_1.push(em.empId);
            });
            this.empSrv.deleteSelectedUploadedEmployees(ids_1).subscribe(function (dltemps) {
                debugger;
                _this.onUpdatestatistics();
                _this.alrtSrv.success("( " + dltemps + " ) Employees have been deleted Successfully ");
                _this.logSrv.sendUserLog("( " + dltemps + " ) Uploaded Employees Deleted Successfully");
                _this.SelectedEmployees = [];
                _this.onGetAllUploadedEmployees();
                _this.loading = false;
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alrtSrv.danger('Server error');
                }
            });
        }
    };
    UploademployeeComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _services_employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"] },
        { type: app_shared_services_appstorage_service__WEBPACK_IMPORTED_MODULE_12__["AppstorageService"] },
        { type: app_shared_services_logs_service__WEBPACK_IMPORTED_MODULE_13__["LogsService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
        { type: app_shared_services_downloadfile_service__WEBPACK_IMPORTED_MODULE_7__["FileService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: ngx_alerts__WEBPACK_IMPORTED_MODULE_9__["AlertService"] },
        { type: app_shared_services_sweetalert_service__WEBPACK_IMPORTED_MODULE_11__["SweetalertService"] },
        { type: app_shared_services_exportexcel_service__WEBPACK_IMPORTED_MODULE_10__["ExportexcelService"] },
        { type: ngx_alerts__WEBPACK_IMPORTED_MODULE_9__["AlertService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('search'),
        __metadata("design:type", Object)
    ], UploademployeeComponent.prototype, "search", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("fileInput"),
        __metadata("design:type", Object)
    ], UploademployeeComponent.prototype, "fileInput", void 0);
    UploademployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-uploademployee',
            template: __importDefault(__webpack_require__(/*! raw-loader!./uploademployee.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/employee/uploademployee/uploademployee.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./uploademployee.component.css */ "./src/app/masterdata/employee/uploademployee/uploademployee.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _services_employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"],
            app_shared_services_appstorage_service__WEBPACK_IMPORTED_MODULE_12__["AppstorageService"],
            app_shared_services_logs_service__WEBPACK_IMPORTED_MODULE_13__["LogsService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            app_shared_services_downloadfile_service__WEBPACK_IMPORTED_MODULE_7__["FileService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            ngx_alerts__WEBPACK_IMPORTED_MODULE_9__["AlertService"],
            app_shared_services_sweetalert_service__WEBPACK_IMPORTED_MODULE_11__["SweetalertService"],
            app_shared_services_exportexcel_service__WEBPACK_IMPORTED_MODULE_10__["ExportexcelService"],
            ngx_alerts__WEBPACK_IMPORTED_MODULE_9__["AlertService"]])
    ], UploademployeeComponent);
    return UploademployeeComponent;
}());



/***/ }),

/***/ "./src/app/masterdata/genaricemail/genaricemail.component.css":
/*!********************************************************************!*\
  !*** ./src/app/masterdata/genaricemail/genaricemail.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3RlcmRhdGEvZ2VuYXJpY2VtYWlsL2dlbmFyaWNlbWFpbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/masterdata/genaricemail/genaricemail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/masterdata/genaricemail/genaricemail.component.ts ***!
  \*******************************************************************/
/*! exports provided: GenaricemailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenaricemailComponent", function() { return GenaricemailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/__ivy_ngcc__/fesm5/ngx-alerts.js");
/* harmony import */ var _service_genaricemail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/genaricemail.service */ "./src/app/masterdata/genaricemail/service/genaricemail.service.ts");
/* harmony import */ var app_shared_services_downloadfile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/downloadfile.service */ "./src/app/shared/services/downloadfile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





// import { GenaricemailService } from './services/genaricemail.service';
var GenaricemailComponent = /** @class */ (function () {
    function GenaricemailComponent(fileService, gmailSrv, fb, alertService) {
        this.fileService = fileService;
        this.gmailSrv = gmailSrv;
        this.fb = fb;
        this.alertService = alertService;
        this.loading = false;
        this.notificationMessage = '';
        this.departmetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            genEmailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            genEmailAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.Genaricemails = [];
        this.onGetAllGenaricemails();
    }
    GenaricemailComponent.prototype.ngOnInit = function () {
        this.departmetForm = this.fb.group({
            genEmailId: null,
            genEmailAddress: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    GenaricemailComponent.prototype.onGetAllGenaricemails = function () {
        var _this = this;
        this.loading = true;
        this.gmailSrv.getAllGenaricemails().subscribe(function (brns) {
            _this.Genaricemails = brns;
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
            if (error.message.includes('Http failure response for http://')) {
                _this.alertService.danger('Server error');
            }
        });
    };
    GenaricemailComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.departmetForm.value.genEmailId) {
            this.loading = true;
            this.gmailSrv.addGenaricemail(this.departmetForm.value).subscribe(function (GenaricemailAdded) {
                _this.departmetForm.reset();
                _this.loading = false;
                _this.alertService.success('Created Successfully');
                _this.onGetAllGenaricemails();
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error');
                }
            });
        }
        else if (this.departmetForm.value.genEmailId) {
            this.gmailSrv.editGenaricemail(this.departmetForm.value.genEmailId, this.departmetForm.value).subscribe(function (GenaricemailAdded) {
                _this.departmetForm.reset();
                _this.onGetAllGenaricemails();
                _this.alertService.success('Changed Successfully');
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error');
                }
            });
        }
    };
    GenaricemailComponent.prototype.uploadFile = function () {
        var _this = this;
        debugger;
        this.Genaricemails = [];
        var formData = new FormData();
        this.loading = true;
        formData.append("upload", this.fileInput.nativeElement.files[0]);
        this.gmailSrv.UploadExcel(formData).subscribe(function (result) {
            _this.onGetAllGenaricemails();
            // this.AddUserLog("Assets File ( " + this.fileInput.nativeElement.files[0].name +  " ) Uploaded" );
            // this.message = result.toString();
            // this.onUpdatestatistics();
            // this.loading = false;
            _this.alertService.success('File Uploaded Successfully');
        });
    };
    GenaricemailComponent.prototype.download = function () {
        this.fileService.downloadFileGenericEmailSample().subscribe(function (response) {
            var blob = new Blob([response.blob()], { type: 'text/json; charset=utf-8' });
            var url = window.URL.createObjectURL(blob);
            window.open(response.url);
        }), function (error) { return console.log('Error downloading the file'); },
            function () { return console.info('File downloaded successfully'); };
    };
    GenaricemailComponent.prototype.onEditGenaricemail = function (emp) {
        //  
        this.departmetForm.reset();
        this.departmetForm.patchValue(emp);
        //  this.departmetForm.controls.GenaricemailTypes.get('emptypName').patchValue(emp.GenaricemailType.emptypName);
    };
    GenaricemailComponent.prototype.onDeleteGenaricemail = function (emp) {
        var _this = this;
        if (confirm("Are you sure to delete Genaricemail " + emp.genEmailAddress)) {
            this.gmailSrv.deleteGenaricemail(emp.genEmailId).subscribe(function (empdlt) {
                _this.alertService.success('Genaricemail: ' + empdlt.genEmailAddress + ' deleted successfully');
                _this.onGetAllGenaricemails();
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error');
                }
            });
        }
    };
    GenaricemailComponent.prototype.onCancel = function () {
        this.departmetForm.reset();
    };
    Object.defineProperty(GenaricemailComponent.prototype, "getGenaricemailForm", {
        get: function () { return this.departmetForm.controls; },
        enumerable: true,
        configurable: true
    });
    GenaricemailComponent.ctorParameters = function () { return [
        { type: app_shared_services_downloadfile_service__WEBPACK_IMPORTED_MODULE_4__["FileService"] },
        { type: _service_genaricemail_service__WEBPACK_IMPORTED_MODULE_3__["GenaricemailService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: ngx_alerts__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("fileInput"),
        __metadata("design:type", Object)
    ], GenaricemailComponent.prototype, "fileInput", void 0);
    GenaricemailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-genaricemail',
            template: __importDefault(__webpack_require__(/*! raw-loader!./genaricemail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/genaricemail/genaricemail.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./genaricemail.component.css */ "./src/app/masterdata/genaricemail/genaricemail.component.css")).default]
        }),
        __metadata("design:paramtypes", [app_shared_services_downloadfile_service__WEBPACK_IMPORTED_MODULE_4__["FileService"],
            _service_genaricemail_service__WEBPACK_IMPORTED_MODULE_3__["GenaricemailService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_alerts__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], GenaricemailComponent);
    return GenaricemailComponent;
}());



/***/ }),

/***/ "./src/app/masterdata/itemscategory/itemscategory.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/masterdata/itemscategory/itemscategory.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3RlcmRhdGEvaXRlbXNjYXRlZ29yeS9pdGVtc2NhdGVnb3J5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/masterdata/itemscategory/itemscategory.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/masterdata/itemscategory/itemscategory.component.ts ***!
  \*********************************************************************/
/*! exports provided: ItemscategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemscategoryComponent", function() { return ItemscategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _service_itemcategory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/itemcategory.service */ "./src/app/masterdata/itemscategory/service/itemcategory.service.ts");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/__ivy_ngcc__/fesm5/ngx-alerts.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var ItemscategoryComponent = /** @class */ (function () {
    function ItemscategoryComponent(icSrv, fb, alertService) {
        this.icSrv = icSrv;
        this.fb = fb;
        this.alertService = alertService;
        this.loading = false;
        this.notificationMessage = '';
        this.ItemsCategorys = [];
        this.ItemsCategoryForm = this.fb.group({
            icId: null,
            icName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    ItemscategoryComponent.prototype.ngOnInit = function () {
        this.onGetAllItemsCategorys();
    };
    ItemscategoryComponent.prototype.onGetAllItemsCategorys = function () {
        var _this = this;
        this.loading = true;
        this.icSrv.getAllItemsCategorys().subscribe(function (brns) {
            _this.ItemsCategorys = brns;
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
            if (error.message.includes('Http failure response for http://')) {
                _this.alertService.danger('server error');
            }
        });
    };
    ItemscategoryComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.ItemsCategoryForm.value.icId) {
            this.loading = true;
            this.icSrv.addItemsCategory(this.ItemsCategoryForm.value).subscribe(function (ItemsCategoryAdded) {
                _this.ItemsCategoryForm.reset();
                _this.loading = false;
                _this.alertService.success('Added successfully ');
                _this.onGetAllItemsCategorys();
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('server error ');
                }
            });
        }
        else if (this.ItemsCategoryForm.value.icId) {
            this.icSrv.editItemsCategory(this.ItemsCategoryForm.value.icId, this.ItemsCategoryForm.value).subscribe(function (ItemsCategoryAdded) {
                _this.ItemsCategoryForm.reset();
                _this.ItemsCategoryForm.controls['icId'].setValue(0);
                _this.onGetAllItemsCategorys();
                _this.alertService.success('Changed successfully ');
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error ');
                }
            });
        }
    };
    ItemscategoryComponent.prototype.onEditItemsCategory = function (ic) {
        this.ItemsCategoryForm.reset();
        this.ItemsCategoryForm.patchValue(ic);
    };
    ItemscategoryComponent.prototype.onDeleteItemsCategory = function (ic) {
        var _this = this;
        if (confirm("Are you sure to delete ItemsCategory " + ic.icName)) {
            this.icSrv.deleteItemsCategory(ic.icId).subscribe(function (icdlt) {
                _this.alertService.success('Deleted successfully ');
                _this.onGetAllItemsCategorys();
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('server error ');
                }
            });
        }
    };
    ItemscategoryComponent.prototype.onCancel = function () {
        this.ItemsCategoryForm.reset();
    };
    Object.defineProperty(ItemscategoryComponent.prototype, "getItemsCategoryForm", {
        get: function () { return this.ItemsCategoryForm.controls; },
        enumerable: true,
        configurable: true
    });
    ItemscategoryComponent.ctorParameters = function () { return [
        { type: _service_itemcategory_service__WEBPACK_IMPORTED_MODULE_2__["ItemcategoryService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: ngx_alerts__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }
    ]; };
    ItemscategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-itemscategory',
            template: __importDefault(__webpack_require__(/*! raw-loader!./itemscategory.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/itemscategory/itemscategory.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./itemscategory.component.css */ "./src/app/masterdata/itemscategory/itemscategory.component.css")).default]
        }),
        __metadata("design:paramtypes", [_service_itemcategory_service__WEBPACK_IMPORTED_MODULE_2__["ItemcategoryService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_alerts__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], ItemscategoryComponent);
    return ItemscategoryComponent;
}());



/***/ }),

/***/ "./src/app/masterdata/masterdata.module.ts":
/*!*************************************************!*\
  !*** ./src/app/masterdata/masterdata.module.ts ***!
  \*************************************************/
/*! exports provided: MasterdataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterdataModule", function() { return MasterdataModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/__ivy_ngcc__/fesm5/ngx-order-pipe.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _asset_asset_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./asset/asset.component */ "./src/app/masterdata/asset/asset.component.ts");
/* harmony import */ var _asset_assetupload_assetupload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asset/assetupload/assetupload.component */ "./src/app/masterdata/asset/assetupload/assetupload.component.ts");
/* harmony import */ var _masterdata_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./masterdata.routing */ "./src/app/masterdata/masterdata.routing.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _assettype_assettype_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assettype/assettype.component */ "./src/app/masterdata/assettype/assettype.component.ts");
/* harmony import */ var _branch_branch_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./branch/branch.component */ "./src/app/masterdata/branch/branch.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/masterdata/employee/employee.component.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./company/company.component */ "./src/app/masterdata/company/company.component.ts");
/* harmony import */ var _department_department_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./department/department.component */ "./src/app/masterdata/department/department.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var ngx_angular_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-angular-autocomplete */ "./node_modules/ngx-angular-autocomplete/__ivy_ngcc__/fesm5/ngx-angular-autocomplete.js");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/__ivy_ngcc__/fesm5/ngx-print.js");
/* harmony import */ var _genaricemail_genaricemail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./genaricemail/genaricemail.component */ "./src/app/masterdata/genaricemail/genaricemail.component.ts");
/* harmony import */ var _position_position_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./position/position.component */ "./src/app/masterdata/position/position.component.ts");
/* harmony import */ var _employee_employeeimport_employeeimport_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./employee/employeeimport/employeeimport.component */ "./src/app/masterdata/employee/employeeimport/employeeimport.component.ts");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/__ivy_ngcc__/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/__ivy_ngcc__/fesm5/ngx-alerts.js");
/* harmony import */ var _codeguide_codeguide_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./codeguide/codeguide.component */ "./src/app/masterdata/codeguide/codeguide.component.ts");
/* harmony import */ var _domain_domain_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./domain/domain.component */ "./src/app/masterdata/domain/domain.component.ts");
/* harmony import */ var _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./supplier/supplier.component */ "./src/app/masterdata/supplier/supplier.component.ts");
/* harmony import */ var _costcenter_costcenter_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./costcenter/costcenter.component */ "./src/app/masterdata/costcenter/costcenter.component.ts");
/* harmony import */ var _itemscategory_itemscategory_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./itemscategory/itemscategory.component */ "./src/app/masterdata/itemscategory/itemscategory.component.ts");
/* harmony import */ var _asset_assettrackinglog_assettrackinglog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./asset/assettrackinglog/assettrackinglog.component */ "./src/app/masterdata/asset/assettrackinglog/assettrackinglog.component.ts");
/* harmony import */ var _employee_showadaccounts_showadaccounts_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./employee/showadaccounts/showadaccounts.component */ "./src/app/masterdata/employee/showadaccounts/showadaccounts.component.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _operator_operator_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./operator/operator.component */ "./src/app/masterdata/operator/operator.component.ts");
/* harmony import */ var _employee_empdirectory_empdirectory_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./employee/empdirectory/empdirectory.component */ "./src/app/masterdata/employee/empdirectory/empdirectory.component.ts");
/* harmony import */ var _employee_uploademployee_uploademployee_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./employee/uploademployee/uploademployee.component */ "./src/app/masterdata/employee/uploademployee/uploademployee.component.ts");
/* harmony import */ var _opraccnumber_opraccnumber_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./opraccnumber/opraccnumber.component */ "./src/app/masterdata/opraccnumber/opraccnumber.component.ts");
/* harmony import */ var _operatorrateplan_operatorrateplan_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./operatorrateplan/operatorrateplan.component */ "./src/app/masterdata/operatorrateplan/operatorrateplan.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
























// import { ImageCropperComponent } from 'ngx-img-cropper';











var MasterdataModule = /** @class */ (function () {
    function MasterdataModule() {
    }
    MasterdataModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                // SweetAlertComponent,
                // ImageCropperComponent, 
                _asset_asset_component__WEBPACK_IMPORTED_MODULE_4__["AssetComponent"],
                _asset_assetupload_assetupload_component__WEBPACK_IMPORTED_MODULE_5__["AssetuploadComponent"],
                _assettype_assettype_component__WEBPACK_IMPORTED_MODULE_8__["AssettypeComponent"],
                _branch_branch_component__WEBPACK_IMPORTED_MODULE_9__["BranchComponent"],
                _employee_employee_component__WEBPACK_IMPORTED_MODULE_10__["EmployeeComponent"],
                _company_company_component__WEBPACK_IMPORTED_MODULE_11__["CompanyComponent"],
                _department_department_component__WEBPACK_IMPORTED_MODULE_12__["DepartmentComponent"],
                _genaricemail_genaricemail_component__WEBPACK_IMPORTED_MODULE_16__["GenaricemailComponent"],
                _position_position_component__WEBPACK_IMPORTED_MODULE_17__["PositionComponent"],
                _employee_employeeimport_employeeimport_component__WEBPACK_IMPORTED_MODULE_18__["EmployeeimportComponent"],
                _codeguide_codeguide_component__WEBPACK_IMPORTED_MODULE_22__["CodeguideComponent"],
                _domain_domain_component__WEBPACK_IMPORTED_MODULE_23__["DomainComponent"], _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_24__["SupplierComponent"], _costcenter_costcenter_component__WEBPACK_IMPORTED_MODULE_25__["CostCenterComponent"], _itemscategory_itemscategory_component__WEBPACK_IMPORTED_MODULE_26__["ItemscategoryComponent"], _asset_assettrackinglog_assettrackinglog_component__WEBPACK_IMPORTED_MODULE_27__["AssettrackinglogComponent"], _employee_showadaccounts_showadaccounts_component__WEBPACK_IMPORTED_MODULE_28__["ShowadaccountsComponent"], _operator_operator_component__WEBPACK_IMPORTED_MODULE_30__["OperatorComponent"], _employee_empdirectory_empdirectory_component__WEBPACK_IMPORTED_MODULE_31__["EmpdirectoryComponent"], _employee_uploademployee_uploademployee_component__WEBPACK_IMPORTED_MODULE_32__["UploademployeeComponent"], _opraccnumber_opraccnumber_component__WEBPACK_IMPORTED_MODULE_33__["OpraccnumberComponent"], _operatorrateplan_operatorrateplan_component__WEBPACK_IMPORTED_MODULE_34__["OperatorrateplanComponent"]
            ],
            imports: [
                ngx_print__WEBPACK_IMPORTED_MODULE_15__["NgxPrintModule"],
                ngx_angular_autocomplete__WEBPACK_IMPORTED_MODULE_14__["NgxAutocompleteModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_13__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_2__["OrderModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(_masterdata_routing__WEBPACK_IMPORTED_MODULE_6__["MasterDataRoutes"]),
                ngx_loading__WEBPACK_IMPORTED_MODULE_19__["NgxLoadingModule"].forRoot({
                    animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_19__["ngxLoadingAnimationTypes"].wanderingCubes,
                    backdropBackgroundColour: 'rgba(0,0,0,0.1)',
                    backdropBorderRadius: '4px',
                    primaryColour: '#ffffff',
                    secondaryColour: '#ffffff',
                    tertiaryColour: '#ffffff'
                }),
                // Specify your library as an import (set timeout to -1 for unlimited timeout, the message can only be closed by the user clicking on it)
                ngx_alerts__WEBPACK_IMPORTED_MODULE_21__["AlertModule"].forRoot({ maxMessages: 5, timeout: 5000, position: 'right' }),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_20__["ModalModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_29__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_29__["DatepickerModule"].forRoot()
            ]
            // providers: [
            //   { 
            //     provide: NG_VALUE_ACCESSOR,
            //     multi: true,
            //     useExisting: forwardRef(() => EmployeeComponent),
            //   }
            // ]
        })
    ], MasterdataModule);
    return MasterdataModule;
}());



/***/ }),

/***/ "./src/app/masterdata/masterdata.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/masterdata/masterdata.routing.ts ***!
  \**************************************************/
/*! exports provided: MasterDataRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterDataRoutes", function() { return MasterDataRoutes; });
/* harmony import */ var _asset_asset_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asset/asset.component */ "./src/app/masterdata/asset/asset.component.ts");
/* harmony import */ var _asset_assetupload_assetupload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset/assetupload/assetupload.component */ "./src/app/masterdata/asset/assetupload/assetupload.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/masterdata/employee/employee.component.ts");
/* harmony import */ var _employee_employeeimport_employeeimport_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee/employeeimport/employeeimport.component */ "./src/app/masterdata/employee/employeeimport/employeeimport.component.ts");
/* harmony import */ var _shared_authentication_service_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/authentication/service/auth.guard */ "./src/app/shared/authentication/service/auth.guard.ts");
/* harmony import */ var _assettype_assettype_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assettype/assettype.component */ "./src/app/masterdata/assettype/assettype.component.ts");
/* harmony import */ var _branch_branch_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./branch/branch.component */ "./src/app/masterdata/branch/branch.component.ts");
/* harmony import */ var _genaricemail_genaricemail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./genaricemail/genaricemail.component */ "./src/app/masterdata/genaricemail/genaricemail.component.ts");
/* harmony import */ var _position_position_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./position/position.component */ "./src/app/masterdata/position/position.component.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./company/company.component */ "./src/app/masterdata/company/company.component.ts");
/* harmony import */ var _department_department_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./department/department.component */ "./src/app/masterdata/department/department.component.ts");
/* harmony import */ var _domain_domain_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./domain/domain.component */ "./src/app/masterdata/domain/domain.component.ts");
/* harmony import */ var _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./supplier/supplier.component */ "./src/app/masterdata/supplier/supplier.component.ts");
/* harmony import */ var _costcenter_costcenter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./costcenter/costcenter.component */ "./src/app/masterdata/costcenter/costcenter.component.ts");
/* harmony import */ var _itemscategory_itemscategory_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./itemscategory/itemscategory.component */ "./src/app/masterdata/itemscategory/itemscategory.component.ts");
/* harmony import */ var _asset_assettrackinglog_assettrackinglog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./asset/assettrackinglog/assettrackinglog.component */ "./src/app/masterdata/asset/assettrackinglog/assettrackinglog.component.ts");
/* harmony import */ var _employee_showadaccounts_showadaccounts_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./employee/showadaccounts/showadaccounts.component */ "./src/app/masterdata/employee/showadaccounts/showadaccounts.component.ts");
/* harmony import */ var _operator_operator_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./operator/operator.component */ "./src/app/masterdata/operator/operator.component.ts");
/* harmony import */ var _employee_empdirectory_empdirectory_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./employee/empdirectory/empdirectory.component */ "./src/app/masterdata/employee/empdirectory/empdirectory.component.ts");
/* harmony import */ var _employee_uploademployee_uploademployee_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./employee/uploademployee/uploademployee.component */ "./src/app/masterdata/employee/uploademployee/uploademployee.component.ts");
/* harmony import */ var _operatorrateplan_operatorrateplan_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./operatorrateplan/operatorrateplan.component */ "./src/app/masterdata/operatorrateplan/operatorrateplan.component.ts");
/* harmony import */ var _opraccnumber_opraccnumber_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./opraccnumber/opraccnumber.component */ "./src/app/masterdata/opraccnumber/opraccnumber.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






















var MasterDataRoutes = [{
        path: '',
        children: [
            {
                path: 'assets',
                canActivate: [_shared_authentication_service_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                component: _asset_asset_component__WEBPACK_IMPORTED_MODULE_0__["AssetComponent"]
            }, {
                path: 'assettrackinglog',
                //  canActivate: [AuthGuard],
                component: _asset_assettrackinglog_assettrackinglog_component__WEBPACK_IMPORTED_MODULE_15__["AssettrackinglogComponent"]
            }, {
                path: 'assetsupload',
                canActivate: [_shared_authentication_service_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                component: _asset_assetupload_assetupload_component__WEBPACK_IMPORTED_MODULE_1__["AssetuploadComponent"]
            }, {
                path: 'showadaccounts',
                component: _employee_showadaccounts_showadaccounts_component__WEBPACK_IMPORTED_MODULE_16__["ShowadaccountsComponent"]
            }, {
                path: 'employee',
                canActivate: [_shared_authentication_service_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeComponent"]
            }, {
                path: 'uploademployee',
                component: _employee_uploademployee_uploademployee_component__WEBPACK_IMPORTED_MODULE_19__["UploademployeeComponent"]
            }, {
                path: 'empdirectory',
                component: _employee_empdirectory_empdirectory_component__WEBPACK_IMPORTED_MODULE_18__["EmpdirectoryComponent"]
            }, {
                path: 'employeeimport',
                canActivate: [_shared_authentication_service_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                component: _employee_employeeimport_employeeimport_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeimportComponent"]
            },
            {
                path: 'assettype',
                //   canActivate: [AuthGuard],  
                component: _assettype_assettype_component__WEBPACK_IMPORTED_MODULE_5__["AssettypeComponent"]
            }, {
                path: 'branch',
                canActivate: [_shared_authentication_service_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                component: _branch_branch_component__WEBPACK_IMPORTED_MODULE_6__["BranchComponent"]
            }, {
                path: 'company',
                canActivate: [_shared_authentication_service_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                component: _company_company_component__WEBPACK_IMPORTED_MODULE_9__["CompanyComponent"]
            }, {
                path: 'opraccnumber',
                //  canActivate: [AuthGuard],  
                component: _opraccnumber_opraccnumber_component__WEBPACK_IMPORTED_MODULE_21__["OpraccnumberComponent"]
            }, {
                path: 'operatorrateplan',
                //  canActivate: [AuthGuard],  
                component: _operatorrateplan_operatorrateplan_component__WEBPACK_IMPORTED_MODULE_20__["OperatorrateplanComponent"]
            }, {
                path: 'operator',
                canActivate: [_shared_authentication_service_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                component: _operator_operator_component__WEBPACK_IMPORTED_MODULE_17__["OperatorComponent"]
            }, {
                path: 'genaricemail',
                canActivate: [_shared_authentication_service_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                component: _genaricemail_genaricemail_component__WEBPACK_IMPORTED_MODULE_7__["GenaricemailComponent"]
            }, {
                path: 'domain',
                canActivate: [_shared_authentication_service_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                component: _domain_domain_component__WEBPACK_IMPORTED_MODULE_11__["DomainComponent"]
            }, {
                path: 'position',
                canActivate: [_shared_authentication_service_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                component: _position_position_component__WEBPACK_IMPORTED_MODULE_8__["PositionComponent"]
            }, {
                path: 'department',
                canActivate: [_shared_authentication_service_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                component: _department_department_component__WEBPACK_IMPORTED_MODULE_10__["DepartmentComponent"]
            }, {
                path: 'supplier',
                canActivate: [_shared_authentication_service_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                component: _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_12__["SupplierComponent"]
            }, {
                path: 'CostCenter',
                canActivate: [_shared_authentication_service_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                component: _costcenter_costcenter_component__WEBPACK_IMPORTED_MODULE_13__["CostCenterComponent"]
            }, {
                path: 'itemscategory',
                canActivate: [_shared_authentication_service_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                component: _itemscategory_itemscategory_component__WEBPACK_IMPORTED_MODULE_14__["ItemscategoryComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/masterdata/operator/operator.component.css":
/*!************************************************************!*\
  !*** ./src/app/masterdata/operator/operator.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3RlcmRhdGEvb3BlcmF0b3Ivb3BlcmF0b3IuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/masterdata/operator/operator.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/masterdata/operator/operator.component.ts ***!
  \***********************************************************/
/*! exports provided: OperatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorComponent", function() { return OperatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _services_operator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/operator.service */ "./src/app/masterdata/operator/services/operator.service.ts");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/__ivy_ngcc__/fesm5/ngx-alerts.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var OperatorComponent = /** @class */ (function () {
    function OperatorComponent(brnSrv, fb, alertService) {
        this.brnSrv = brnSrv;
        this.fb = fb;
        this.alertService = alertService;
        this.loading = false;
        this.notificationMessage = '';
        this.Operators = [];
        this.onGetAllOperators();
    }
    OperatorComponent.prototype.ngOnInit = function () {
        this.OperatorForm = this.fb.group({
            oprId: null,
            oprName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    OperatorComponent.prototype.onGetAllOperators = function () {
        var _this = this;
        this.loading = true;
        this.brnSrv.getAllOperators().subscribe(function (brns) {
            _this.Operators = brns;
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
            if (error.message.includes('Http failure response for http://')) {
                _this.alertService.danger('Server error ');
            }
        });
    };
    OperatorComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.OperatorForm.value.oprId) {
            this.loading = true;
            this.brnSrv.addOperator(this.OperatorForm.value).subscribe(function (OperatorAdded) {
                _this.OperatorForm.reset();
                _this.loading = false;
                _this.alertService.success('Created successfully ');
                _this.onGetAllOperators();
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error ');
                }
            });
        }
        else if (this.OperatorForm.value.oprId) {
            this.brnSrv.editOperator(this.OperatorForm.value.oprId, this.OperatorForm.value).subscribe(function (OperatorAdded) {
                _this.OperatorForm.reset();
                _this.onGetAllOperators();
                _this.alertService.success('Changed successfully ');
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error ');
                }
            });
        }
    };
    OperatorComponent.prototype.onEditOperator = function (opr) {
        this.OperatorForm.reset();
        this.OperatorForm.patchValue(opr);
    };
    OperatorComponent.prototype.onDeleteOperator = function (opr) {
        var _this = this;
        if (confirm("Are you sure to delete Operator " + opr.oprName)) {
            this.brnSrv.deleteOperator(opr.oprId).subscribe(function (oprdlt) {
                _this.alertService.success('Operator: ' + oprdlt.oprName + ' deleted Successfully');
                _this.onGetAllOperators();
            }, function (error) {
                console.log('Data is not Imported ...', error.message);
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error ');
                }
            });
        }
    };
    OperatorComponent.prototype.onCancel = function () {
        this.OperatorForm.reset();
    };
    Object.defineProperty(OperatorComponent.prototype, "getOperatorForm", {
        get: function () { return this.OperatorForm.controls; },
        enumerable: true,
        configurable: true
    });
    OperatorComponent.ctorParameters = function () { return [
        { type: _services_operator_service__WEBPACK_IMPORTED_MODULE_2__["OperatorService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: ngx_alerts__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }
    ]; };
    OperatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-operator',
            template: __importDefault(__webpack_require__(/*! raw-loader!./operator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/operator/operator.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./operator.component.css */ "./src/app/masterdata/operator/operator.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_operator_service__WEBPACK_IMPORTED_MODULE_2__["OperatorService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_alerts__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], OperatorComponent);
    return OperatorComponent;
}());



/***/ }),

/***/ "./src/app/masterdata/operator/services/operator.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/masterdata/operator/services/operator.service.ts ***!
  \******************************************************************/
/*! exports provided: OperatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorService", function() { return OperatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var OperatorService = /** @class */ (function () {
    // Categorys: any = [];
    function OperatorService(http) {
        this.http = http;
    }
    OperatorService.prototype.getAllOperators = function () {
        //  
        return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'Operators');
    };
    OperatorService.prototype.addOperator = function (body) {
        //    
        return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'Operators', body);
    };
    OperatorService.prototype.editOperator = function (id, body) {
        return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'Operators/' + id, body);
    };
    // deleteEmployee(id: number){
    //   return this.Employee.delete(environment.apiURL + `Operators/$(id)`);
    // }
    OperatorService.prototype.deleteOperator = function (id) {
        return this.http.delete(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'Operators/' + id);
    };
    OperatorService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    OperatorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OperatorService);
    return OperatorService;
}());



/***/ }),

/***/ "./src/app/masterdata/operatorrateplan/operatorrateplan.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/masterdata/operatorrateplan/operatorrateplan.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3RlcmRhdGEvb3BlcmF0b3JyYXRlcGxhbi9vcGVyYXRvcnJhdGVwbGFuLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/masterdata/operatorrateplan/operatorrateplan.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/masterdata/operatorrateplan/operatorrateplan.component.ts ***!
  \***************************************************************************/
/*! exports provided: OperatorrateplanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorrateplanComponent", function() { return OperatorrateplanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _service_operatorrateplan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/operatorrateplan.service */ "./src/app/masterdata/operatorrateplan/service/operatorrateplan.service.ts");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/__ivy_ngcc__/fesm5/ngx-alerts.js");
/* harmony import */ var _operator_services_operator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operator/services/operator.service */ "./src/app/masterdata/operator/services/operator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var OperatorrateplanComponent = /** @class */ (function () {
    function OperatorrateplanComponent(mainoprSrv, oprSrv, fb, alertService) {
        this.mainoprSrv = mainoprSrv;
        this.oprSrv = oprSrv;
        this.fb = fb;
        this.alertService = alertService;
        this.loading = false;
        this.notificationMessage = '';
        this.Operators = [];
        this.Plans = [];
        this.onGetAllPlans();
        this.onGetAllOperators();
    }
    OperatorrateplanComponent.prototype.ngOnInit = function () {
        this.OperatorForm = this.fb.group({
            OperatorRatePlanId: null,
            OperatorRatePlanName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            oprId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    OperatorrateplanComponent.prototype.onGetAllOperators = function () {
        var _this = this;
        this.loading = true;
        this.mainoprSrv.getAllOperators().subscribe(function (brns) {
            debugger;
            _this.Operators = brns;
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
            if (error.message.includes('Http failure response for http://')) {
                _this.alertService.danger('Server error ');
            }
        });
    };
    OperatorrateplanComponent.prototype.onGetAllPlans = function () {
        var _this = this;
        this.loading = true;
        this.oprSrv.getAllOperatorRatePlans().subscribe(function (brns) {
            debugger;
            _this.Plans = brns;
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
            if (error.message.includes('Http failure response for http://')) {
                _this.alertService.danger('Server error ');
            }
        });
    };
    OperatorrateplanComponent.prototype.onSubmit = function () {
        var _this = this;
        debugger;
        if (this.OperatorForm.value.OperatorRatePlanId == null) {
            this.loading = true;
            this.oprSrv.addOperatorRatePlans(this.OperatorForm.value).subscribe(function (OperatorAdded) {
                _this.OperatorForm.reset();
                _this.loading = false;
                _this.alertService.success('Created successfully ');
                _this.onGetAllPlans();
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error ');
                }
            });
        }
        else if (this.OperatorForm.value.OperatorRatePlanId != null) {
            this.oprSrv.editOperatorRatePlans(this.OperatorForm.value.oprId, this.OperatorForm.value).subscribe(function (OperatorAdded) {
                _this.OperatorForm.reset();
                _this.onGetAllPlans();
                _this.alertService.success('Changed successfully ');
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error ');
                }
            });
        }
    };
    OperatorrateplanComponent.prototype.onEditOperator = function (opr) {
        this.OperatorForm.reset();
        this.OperatorForm.patchValue(opr);
        this.OperatorForm.get('oprId').patchValue(opr.oprId);
        debugger;
    };
    OperatorrateplanComponent.prototype.onDeleteOperator = function (opr) {
        var _this = this;
        if (confirm("Are you sure to delete Plan " + opr.OperatorRatePlanName)) {
            this.oprSrv.deleteOperatorRatePlans(opr.OperatorRatePlanId).subscribe(function (oprdlt) {
                _this.alertService.success('Plan: ' + oprdlt.OperatorRatePlanName + ' deleted Successfully');
                _this.onGetAllPlans();
            }, function (error) {
                console.log('Data is not Imported ...', error.message);
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error ');
                }
            });
        }
    };
    OperatorrateplanComponent.prototype.onCancel = function () {
        this.OperatorForm.reset();
    };
    Object.defineProperty(OperatorrateplanComponent.prototype, "getOperatorForm", {
        get: function () { return this.OperatorForm.controls; },
        enumerable: true,
        configurable: true
    });
    OperatorrateplanComponent.ctorParameters = function () { return [
        { type: _operator_services_operator_service__WEBPACK_IMPORTED_MODULE_4__["OperatorService"] },
        { type: _service_operatorrateplan_service__WEBPACK_IMPORTED_MODULE_2__["OperatorrateplanService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: ngx_alerts__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }
    ]; };
    OperatorrateplanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-operatorrateplan',
            template: __importDefault(__webpack_require__(/*! raw-loader!./operatorrateplan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/operatorrateplan/operatorrateplan.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./operatorrateplan.component.css */ "./src/app/masterdata/operatorrateplan/operatorrateplan.component.css")).default]
        }),
        __metadata("design:paramtypes", [_operator_services_operator_service__WEBPACK_IMPORTED_MODULE_4__["OperatorService"],
            _service_operatorrateplan_service__WEBPACK_IMPORTED_MODULE_2__["OperatorrateplanService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_alerts__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], OperatorrateplanComponent);
    return OperatorrateplanComponent;
}());



/***/ }),

/***/ "./src/app/masterdata/operatorrateplan/service/operatorrateplan.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/masterdata/operatorrateplan/service/operatorrateplan.service.ts ***!
  \*********************************************************************************/
/*! exports provided: OperatorrateplanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorrateplanService", function() { return OperatorrateplanService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var OperatorrateplanService = /** @class */ (function () {
    // Categorys: any = [];
    function OperatorrateplanService(http) {
        this.http = http;
    }
    OperatorrateplanService.prototype.getAllOperatorRatePlans = function () {
        //  
        return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'OperatorRatePlans');
    };
    OperatorrateplanService.prototype.addOperatorRatePlans = function (body) {
        return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'OperatorRatePlans', body);
    };
    OperatorrateplanService.prototype.editOperatorRatePlans = function (id, body) {
        return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'OperatorRatePlans/' + id, body);
    };
    // deleteEmployee(id: number){
    //   return this.Employee.delete(environment.apiURL + `OperatorRatePlans/$(id)`);
    // }
    OperatorrateplanService.prototype.deleteOperatorRatePlans = function (id) {
        debugger;
        return this.http.delete(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'OperatorRatePlans/' + id);
    };
    OperatorrateplanService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    OperatorrateplanService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OperatorrateplanService);
    return OperatorrateplanService;
}());



/***/ }),

/***/ "./src/app/masterdata/opraccnumber/opraccnumber.component.css":
/*!********************************************************************!*\
  !*** ./src/app/masterdata/opraccnumber/opraccnumber.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3RlcmRhdGEvb3ByYWNjbnVtYmVyL29wcmFjY251bWJlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/masterdata/opraccnumber/opraccnumber.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/masterdata/opraccnumber/opraccnumber.component.ts ***!
  \*******************************************************************/
/*! exports provided: OpraccnumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpraccnumberComponent", function() { return OpraccnumberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _service_opraccnumber_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/opraccnumber.service */ "./src/app/masterdata/opraccnumber/service/opraccnumber.service.ts");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/__ivy_ngcc__/fesm5/ngx-alerts.js");
/* harmony import */ var _operator_services_operator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operator/services/operator.service */ "./src/app/masterdata/operator/services/operator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var OpraccnumberComponent = /** @class */ (function () {
    function OpraccnumberComponent(mainoprSrv, opraccSrv, fb, alertService) {
        this.mainoprSrv = mainoprSrv;
        this.opraccSrv = opraccSrv;
        this.fb = fb;
        this.alertService = alertService;
        this.loading = false;
        this.notificationMessage = '';
        this.Operators = [];
        this.AccountsNumbers = [];
        this.onGetAllAccounts();
        this.onGetAllOperators();
    }
    OpraccnumberComponent.prototype.ngOnInit = function () {
        this.AccountNumberForm = this.fb.group({
            OprAccNumberId: null,
            OprAccNumberName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            oprId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    OpraccnumberComponent.prototype.onGetAllOperators = function () {
        var _this = this;
        this.loading = true;
        this.mainoprSrv.getAllOperators().subscribe(function (brns) {
            debugger;
            _this.Operators = brns;
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
            if (error.message.includes('Http failure response for http://')) {
                _this.alertService.danger('Server error ');
            }
        });
    };
    OpraccnumberComponent.prototype.onGetAllAccounts = function () {
        var _this = this;
        this.loading = true;
        this.opraccSrv.getAllOprAccNumbers().subscribe(function (brns) {
            debugger;
            _this.AccountsNumbers = brns;
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
            if (error.message.includes('Http failure response for http://')) {
                _this.alertService.danger('Server error ');
            }
        });
    };
    OpraccnumberComponent.prototype.onSubmit = function () {
        var _this = this;
        debugger;
        if (this.AccountNumberForm.value.OprAccNumberId == null) {
            this.loading = true;
            this.opraccSrv.addOprAccNumbers(this.AccountNumberForm.value).subscribe(function (OperatorAdded) {
                _this.AccountNumberForm.reset();
                _this.loading = false;
                _this.alertService.success('Created successfully ');
                _this.onGetAllAccounts();
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error ');
                }
            });
        }
        else if (this.AccountNumberForm.value.OprAccNumberId != null) {
            this.opraccSrv.editOprAccNumbers(this.AccountNumberForm.value.oprId, this.AccountNumberForm.value).subscribe(function (OperatorAdded) {
                _this.AccountNumberForm.reset();
                _this.onGetAllAccounts();
                _this.alertService.success('Changed successfully ');
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error ');
                }
            });
        }
    };
    OpraccnumberComponent.prototype.onEditOperator = function (opr) {
        this.AccountNumberForm.reset();
        this.AccountNumberForm.patchValue(opr);
        this.AccountNumberForm.get('oprId').patchValue(opr.oprId);
        debugger;
    };
    OpraccnumberComponent.prototype.onDeleteOperator = function (opr) {
        var _this = this;
        if (confirm("Are you sure to delete Account Number " + opr.OprAccNumberName)) {
            this.opraccSrv.deleteOprAccNumbers(opr.OprAccNumberId).subscribe(function (oprdlt) {
                _this.alertService.success('Account Number: ' + oprdlt.OprAccNumberName + ' deleted Successfully');
                _this.onGetAllAccounts();
            }, function (error) {
                console.log('Data is not Imported ...', error.message);
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error ');
                }
            });
        }
    };
    OpraccnumberComponent.prototype.onCancel = function () {
        this.AccountNumberForm.reset();
    };
    Object.defineProperty(OpraccnumberComponent.prototype, "getOperatorForm", {
        get: function () { return this.AccountNumberForm.controls; },
        enumerable: true,
        configurable: true
    });
    OpraccnumberComponent.ctorParameters = function () { return [
        { type: _operator_services_operator_service__WEBPACK_IMPORTED_MODULE_4__["OperatorService"] },
        { type: _service_opraccnumber_service__WEBPACK_IMPORTED_MODULE_2__["OpraccnumberService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: ngx_alerts__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }
    ]; };
    OpraccnumberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-opraccnumber',
            template: __importDefault(__webpack_require__(/*! raw-loader!./opraccnumber.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/opraccnumber/opraccnumber.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./opraccnumber.component.css */ "./src/app/masterdata/opraccnumber/opraccnumber.component.css")).default]
        }),
        __metadata("design:paramtypes", [_operator_services_operator_service__WEBPACK_IMPORTED_MODULE_4__["OperatorService"],
            _service_opraccnumber_service__WEBPACK_IMPORTED_MODULE_2__["OpraccnumberService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_alerts__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], OpraccnumberComponent);
    return OpraccnumberComponent;
}());



/***/ }),

/***/ "./src/app/masterdata/opraccnumber/service/opraccnumber.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/masterdata/opraccnumber/service/opraccnumber.service.ts ***!
  \*************************************************************************/
/*! exports provided: OpraccnumberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpraccnumberService", function() { return OpraccnumberService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var OpraccnumberService = /** @class */ (function () {
    // Categorys: any = [];
    function OpraccnumberService(http) {
        this.http = http;
    }
    OpraccnumberService.prototype.getAllOprAccNumbers = function () {
        //  
        return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'OprAccNumbers');
    };
    OpraccnumberService.prototype.addOprAccNumbers = function (body) {
        //    
        return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'OprAccNumbers', body);
    };
    OpraccnumberService.prototype.editOprAccNumbers = function (id, body) {
        return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'OprAccNumbers/' + id, body);
    };
    // deleteEmployee(id: number){
    //   return this.Employee.delete(environment.apiURL + `OprAccNumbers/$(id)`);
    // }
    OpraccnumberService.prototype.deleteOprAccNumbers = function (id) {
        return this.http.delete(environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL + 'OprAccNumbers/' + id);
    };
    OpraccnumberService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    OpraccnumberService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OpraccnumberService);
    return OpraccnumberService;
}());



/***/ }),

/***/ "./src/app/masterdata/position/position.component.css":
/*!************************************************************!*\
  !*** ./src/app/masterdata/position/position.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3RlcmRhdGEvcG9zaXRpb24vcG9zaXRpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/masterdata/position/position.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/masterdata/position/position.component.ts ***!
  \***********************************************************/
/*! exports provided: PositionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionComponent", function() { return PositionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/__ivy_ngcc__/fesm5/ngx-alerts.js");
/* harmony import */ var _service_position_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/position.service */ "./src/app/masterdata/position/service/position.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var PositionComponent = /** @class */ (function () {
    function PositionComponent(posSrv, fb, alertService) {
        this.posSrv = posSrv;
        this.fb = fb;
        this.alertService = alertService;
        this.loading = false;
        this.notificationMessage = '';
        this.positionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            posId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            posTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.Positions = [];
        this.onGetAllPositions();
    }
    PositionComponent.prototype.ngOnInit = function () {
        this.positionForm = this.fb.group({
            posId: null,
            posTitle: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    PositionComponent.prototype.onGetAllPositions = function () {
        var _this = this;
        this.loading = true;
        this.posSrv.getAllpositions().subscribe(function (brns) {
            _this.Positions = brns;
            _this.loading = false;
        }, function (error) {
            console.log('error ...', error.message);
            _this.loading = false;
            if (error.message.includes('Http failure response for http://')) {
                _this.alertService.danger('Server error ');
            }
        });
    };
    PositionComponent.prototype.onSubmit = function () {
        var _this = this;
        debugger;
        if (!this.positionForm.value.posId) {
            this.loading = true;
            this.posSrv.addposition(this.positionForm.value).subscribe(function (pos) {
                _this.positionForm.reset();
                _this.loading = false;
                _this.alertService.success('Position: ' + pos.posTitle + ' Created Successfully ');
                _this.onGetAllPositions();
            }, function (error) {
                console.log('Data is not Imported ...', error.message);
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('server error');
                }
            });
        }
        else if (this.positionForm.value.posId) {
            this.posSrv.editposition(this.positionForm.value.posId, this.positionForm.value).subscribe(function (pos) {
                _this.positionForm.reset();
                _this.onGetAllPositions();
                _this.alertService.success('Position: ' + pos.posTitle + ' Changed Successfully ');
            }, function (error) {
                console.log('Data is not Imported ...', error.message);
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error');
                }
            });
        }
    };
    PositionComponent.prototype.onEditPosition = function (pos) {
        this.positionForm.reset();
        this.positionForm.patchValue(pos);
    };
    PositionComponent.prototype.onDeletePosition = function (pos) {
        var _this = this;
        if (confirm("Are you sure to delete Position " + pos.posTitle)) {
            this.posSrv.deleteposition(pos.posId).subscribe(function (posdlt) {
                _this.alertService.success('Position: ' + pos.posTitle + ' deleted Successfully ');
                _this.onGetAllPositions();
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alertService.danger('Server error');
                }
            });
        }
    };
    PositionComponent.prototype.onCancel = function () {
        this.positionForm.reset();
    };
    Object.defineProperty(PositionComponent.prototype, "getPositionForm", {
        get: function () { return this.positionForm.controls; },
        enumerable: true,
        configurable: true
    });
    PositionComponent.ctorParameters = function () { return [
        { type: _service_position_service__WEBPACK_IMPORTED_MODULE_3__["PositionService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: ngx_alerts__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }
    ]; };
    PositionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-position',
            template: __importDefault(__webpack_require__(/*! raw-loader!./position.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/position/position.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./position.component.css */ "./src/app/masterdata/position/position.component.css")).default]
        }),
        __metadata("design:paramtypes", [_service_position_service__WEBPACK_IMPORTED_MODULE_3__["PositionService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_alerts__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], PositionComponent);
    return PositionComponent;
}());



/***/ }),

/***/ "./src/app/masterdata/position/service/position.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/masterdata/position/service/position.service.ts ***!
  \*****************************************************************/
/*! exports provided: PositionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionService", function() { return PositionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var PositionService = /** @class */ (function () {
    function PositionService(http) {
        this.http = http;
    }
    PositionService.prototype.getAllpositions = function () {
        //  debugger;
        return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'PositionTitles');
    };
    // GetAsssetByCode(assetcode) {
    //   return this.http.get(environment.apiURL + 'Assetss/GetAsssetByCode/' + assetcode);
    // }
    PositionService.prototype.addposition = function (body) {
        debugger;
        return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'PositionTitles', body);
    };
    PositionService.prototype.editposition = function (id, body) {
        //   debugger;
        return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'PositionTitles/' + id, body);
    };
    PositionService.prototype.editMultipleposition = function (id, body) {
        // debugger;
        return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'PositionTitles/' + id, body);
    };
    PositionService.prototype.deleteposition = function (id) {
        return this.http.delete(environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'PositionTitles/' + id);
    };
    PositionService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PositionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PositionService);
    return PositionService;
}());



/***/ }),

/***/ "./src/app/masterdata/supplier/supplier.component.css":
/*!************************************************************!*\
  !*** ./src/app/masterdata/supplier/supplier.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc3RlcmRhdGEvc3VwcGxpZXIvc3VwcGxpZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/masterdata/supplier/supplier.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/masterdata/supplier/supplier.component.ts ***!
  \***********************************************************/
/*! exports provided: SupplierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierComponent", function() { return SupplierComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ngx_alerts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-alerts */ "./node_modules/ngx-alerts/__ivy_ngcc__/fesm5/ngx-alerts.js");
/* harmony import */ var _service_supplier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/supplier.service */ "./src/app/masterdata/supplier/service/supplier.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var SupplierComponent = /** @class */ (function () {
    function SupplierComponent(alrtSrv, splSrv, fb, alertService) {
        this.alrtSrv = alrtSrv;
        this.splSrv = splSrv;
        this.fb = fb;
        this.alertService = alertService;
        this.loading = false;
        this.notificationMessage = '';
        this.Suppliers = [];
        this.SupplierForm = this.fb.group({
            splId: null,
            splName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.onGetAllSuppliers();
    }
    SupplierComponent.prototype.ngOnInit = function () {
    };
    SupplierComponent.prototype.onGetAllSuppliers = function () {
        var _this = this;
        this.loading = true;
        this.splSrv.getAllSuppliers().subscribe(function (coms) {
            _this.Suppliers = coms;
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
            if (error.message.includes('Http failure response for http://')) {
                _this.alertService.danger('Server error');
            }
        });
    };
    SupplierComponent.prototype.onSubmit = function () {
        var _this = this;
        debugger;
        if (!this.SupplierForm.value.splId) {
            this.loading = true;
            this.splSrv.addSupplier(this.SupplierForm.value).subscribe(function (SupplierAdded) {
                _this.SupplierForm.reset();
                _this.SupplierForm.controls['splId'].setValue(null);
                _this.loading = false;
                _this.alrtSrv.success('Created Successfully');
                _this.onGetAllSuppliers();
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alrtSrv.danger('Server error');
                }
            });
        }
        else if (this.SupplierForm.value.splId) {
            this.splSrv.editSupplier(this.SupplierForm.value.splId, this.SupplierForm.value).subscribe(function (SupplierAdded) {
                _this.SupplierForm.reset();
                _this.SupplierForm.controls['splId'].setValue(null);
                _this.onGetAllSuppliers();
                _this.alrtSrv.success('Changed Successfully');
            }, function (error) {
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alrtSrv.danger('Server error');
                }
            });
        }
    };
    SupplierComponent.prototype.onEditSupplier = function (spl) {
        this.SupplierForm.reset();
        this.SupplierForm.patchValue(spl);
        this.SupplierForm.get('splId').patchValue(spl.splId);
    };
    SupplierComponent.prototype.onDeleteSupplier = function (spl) {
        var _this = this;
        if (confirm("Are you sure to delete Supplier " + spl.splName)) {
            this.splSrv.deleteSupplier(spl.splId).subscribe(function (spldlt) {
                _this.alertService.success('Supplier: ' + spldlt.splName + ' Deleted Successfully');
                _this.onGetAllSuppliers();
            }, function (error) {
                console.log('Data is not Imported ...', error.message);
                _this.loading = false;
                if (error.message.includes('Http failure response for http://')) {
                    _this.alrtSrv.danger('Server error');
                }
            });
        }
    };
    SupplierComponent.prototype.onCancel = function () {
        this.SupplierForm.reset();
    };
    Object.defineProperty(SupplierComponent.prototype, "getSupplierForm", {
        get: function () { return this.SupplierForm.controls; },
        enumerable: true,
        configurable: true
    });
    SupplierComponent.ctorParameters = function () { return [
        { type: ngx_alerts__WEBPACK_IMPORTED_MODULE_2__["AlertService"] },
        { type: _service_supplier_service__WEBPACK_IMPORTED_MODULE_3__["SupplierService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: ngx_alerts__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }
    ]; };
    SupplierComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-supplier',
            template: __importDefault(__webpack_require__(/*! raw-loader!./supplier.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/masterdata/supplier/supplier.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./supplier.component.css */ "./src/app/masterdata/supplier/supplier.component.css")).default]
        }),
        __metadata("design:paramtypes", [ngx_alerts__WEBPACK_IMPORTED_MODULE_2__["AlertService"],
            _service_supplier_service__WEBPACK_IMPORTED_MODULE_3__["SupplierService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            ngx_alerts__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], SupplierComponent);
    return SupplierComponent;
}());



/***/ }),

/***/ "./src/app/shared/models/EmployeeModel.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/EmployeeModel.ts ***!
  \************************************************/
/*! exports provided: EmployeeModel, emailsINDIVModel, emailsGENModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeModel", function() { return EmployeeModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailsINDIVModel", function() { return emailsINDIVModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailsGENModel", function() { return emailsGENModel; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var EmployeeModel = /** @class */ (function () {
    function EmployeeModel() {
    }
    return EmployeeModel;
}());

var emailsINDIVModel = /** @class */ (function () {
    function emailsINDIVModel() {
    }
    return emailsINDIVModel;
}());

var emailsGENModel = /** @class */ (function () {
    function emailsGENModel() {
    }
    return emailsGENModel;
}());



/***/ }),

/***/ "./src/app/shared/services/email.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/email.service.ts ***!
  \**************************************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _appstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appstorage.service */ "./src/app/shared/services/appstorage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var EmailService = /** @class */ (function () {
    function EmailService(http, strSrv) {
        this.http = http;
        this.strSrv = strSrv;
    }
    EmailService.prototype.sendEmailEmployeeActivation = function (body) {
        //  let user = JSON.stringify(this.strSrv.getUserFromStorage()) 
        var user = this.strSrv.getUserFromStorage();
        Object.assign(body, { userAccName: user.usrAccountName });
        return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL + 'Emails/', body);
    };
    EmailService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _appstorage_service__WEBPACK_IMPORTED_MODULE_3__["AppstorageService"] }
    ]; };
    EmailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _appstorage_service__WEBPACK_IMPORTED_MODULE_3__["AppstorageService"]])
    ], EmailService);
    return EmailService;
}());



/***/ })

}]);
//# sourceMappingURL=masterdata-masterdata-module.js.map