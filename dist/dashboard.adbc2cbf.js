// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"cncRw":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "59ed7715adbc2cbf";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"6JYzJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _auto = require("chart.js/auto");
var _autoDefault = parcelHelpers.interopDefault(_auto);
var _moment = require("moment");
var _momentDefault = parcelHelpers.interopDefault(_moment);
const lodash = require("19f9b7050bb60160");
//=============== ACTUAL DASHBOARD CODE ===============
const todaysTasksContainer = document.querySelector(".Task");
const nextDaysTasksContainer = document.querySelector(".nextDayTasksContainer");
const thisWeeksTasksContainer = document.querySelector(".thisWeeksTasksContainer");
const dashboardBox = document.querySelector(".dashboard-box");
const detailsBox = document.querySelector(".details-box");
// Helper functions
function formatNumber(num) {
    if (Number.isInteger(num)) return num.toString();
    else return num.toFixed(2);
}
const remDays = (currentDay)=>7 - currentDay;
const resetTimeForDates = (startDate, testDate, endDate)=>{
    startDate.setHours(0, 0, 0, 0);
    testDate.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);
};
// Main code
const groupTasks = (tasksArray)=>{
    if (tasksArray.length === 0) return [
        [],
        [],
        []
    ];
    const todayTasks = tasksArray.filter((task)=>{
        const startDate = (0, _momentDefault.default)((0, _momentDefault.default)(task.startDate, "YYYY-MM-DD").format("DD/MM/YYYY"), "DD/MM/YYYY");
        const endDate = (0, _momentDefault.default)((0, _momentDefault.default)(task.endDate, "YYYY-MM-DD").format("DD/MM/YYYY"), "DD/MM/YYYY");
        const currentDate = (0, _momentDefault.default)((0, _momentDefault.default)().format("DD/MM/YYYY"), "DD/MM/YYYY");
        return startDate.isSameOrBefore(currentDate) && currentDate.isSameOrBefore(endDate) && task.progressEachDay.hasOwnProperty(currentDate.format("DD/MM/YYYY"));
    });
    const nextDayTasks = tasksArray.filter((task)=>{
        const startDate = (0, _momentDefault.default)((0, _momentDefault.default)(task.startDate, "YYYY-MM-DD").format("DD/MM/YYYY"), "DD/MM/YYYY");
        const endDate = (0, _momentDefault.default)((0, _momentDefault.default)(task.endDate, "YYYY-MM-DD").format("DD/MM/YYYY"), "DD/MM/YYYY");
        const tomorrowDate = (0, _momentDefault.default)((0, _momentDefault.default)().add(1, "days").format("DD/MM/YYYY"), "DD/MM/YYYY");
        return startDate.isSameOrBefore(tomorrowDate) && tomorrowDate.isSameOrBefore(endDate) && task.progressEachDay.hasOwnProperty(tomorrowDate.format("DD/MM/YYYY"));
    });
    const thisWeekTasks = tasksArray.filter((task)=>{
        const startDate = (0, _momentDefault.default)((0, _momentDefault.default)(task.startDate, "YYYY-MM-DD").format("DD/MM/YYYY"), "DD/MM/YYYY");
        const endDate = (0, _momentDefault.default)((0, _momentDefault.default)(task.endDate, "YYYY-MM-DD").format("DD/MM/YYYY"), "DD/MM/YYYY");
        const thisWeekCurrentDate = (0, _momentDefault.default)((0, _momentDefault.default)().startOf("day").format("DD/MM/YYYY"), "DD/MM/YYYY");
        const thisWeekEndDate = (0, _momentDefault.default)((0, _momentDefault.default)(thisWeekCurrentDate).endOf("week").format("DD/MM/YYYY"), "DD/MM/YYYY");
        while(thisWeekCurrentDate.isSameOrBefore(thisWeekEndDate)){
            if (startDate.isSameOrBefore(thisWeekCurrentDate) && thisWeekCurrentDate.isSameOrBefore(endDate) && task.progressEachDay.hasOwnProperty(thisWeekCurrentDate.format("DD/MM/YYYY"))) return true;
            thisWeekCurrentDate.add(1, "day");
        }
        return false;
    });
    return [
        todayTasks,
        nextDayTasks,
        thisWeekTasks
    ];
};
const updateDashboard = ()=>{
    const tasksArray = JSON.parse(localStorage.getItem("tasks"));
    const [todayTasks, nextDayTasks, thisWeekTasks] = groupTasks(tasksArray);
    todaysTasksContainer.innerHTML = "";
    nextDaysTasksContainer.innerHTML = "";
    thisWeeksTasksContainer.innerHTML = "";
    if (todayTasks.length === 0) todaysTasksContainer.insertAdjacentHTML("beforeend", "<h3>No Tasks Available for today</h3>");
    else {
        const today = (0, _momentDefault.default)().format("DD/MM/YYYY");
        todayTasks.forEach((task, index)=>{
            const { taskName, subTask, startDate, customCategory, progressEachDay } = task;
            const initialProgress = progressEachDay[today] === null ? 0 : progressEachDay[today];
            todaysTasksContainer.insertAdjacentHTML("beforeend", `<div class="Task-name ${"today-task-" + (index + 1)}">
            <div>
              <div class="task-brief">
                <i class='bx bx-check' style='color:#39bc71; font-size: 25px;'></i>
                <span>${taskName}</span>
              </div>
              <div class="details">
                <div class="date">
                <i class='bx bx-calendar' style='color:#118d98; font-size: 25px;'></i>
                  <span>${startDate}</span>
                </div>
                <span class="details__subtask">${subTask.length <= 40 ? subTask : subTask.slice(0, 38) + "..."}</span>
                <span>${customCategory}</span>
              </div>
            </div>
            <div class="progress-container">
              <span class="progress-details">${initialProgress}% Completed</span>
              <input class="progress-bar" type="range" value="${initialProgress}" min="0" max="100" step="1" />
            </div>
            <button class="details-btn" type="button">Details</button>
          </div>`);
        });
    }
    if (nextDayTasks.length === 0) nextDaysTasksContainer.insertAdjacentHTML("beforeend", "<h3>No Tasks Available for tomorrow</h3>");
    else nextDayTasks.forEach((task, index)=>{
        const { taskName } = task;
        nextDaysTasksContainer.insertAdjacentHTML("beforeend", `<div class="Task-name ${"next-day-task-" + (index + 1)}">
        <div>
          <div class="task-brief">
          <i class='bx bx-check' style='color:#39bc71; font-size: 25px;'></i>
            <span>${taskName}</span>
          </div>
        </div>

        <button class="details-btn" type="button">Details</button>
      </div>`);
    });
    if (thisWeekTasks.length === 0) thisWeeksTasksContainer.insertAdjacentHTML("beforeend", "<h3>No Tasks Available for this week</h3>");
    else thisWeekTasks.forEach((task, index)=>{
        const { taskName } = task;
        thisWeeksTasksContainer.insertAdjacentHTML("beforeend", `<div class="Task-name ${"this-week-task-" + (index + 1)}">
        <div>
          <div class="task-brief">
          <i class='bx bx-check' style='color:#39bc71; font-size: 25px;'></i>
            <span>${taskName}</span>
          </div>
        </div>

        <button class="details-btn" type="button">Details</button>
      </div>`);
    });
};
updateDashboard();
// details button click functionality
const getStreak = (task)=>{
    const today = (0, _momentDefault.default)((0, _momentDefault.default)().format("DD/MM/YYYY"), "DD/MM/YYYY");
    const sortedTaskDates = Object.keys(task.progressEachDay).sort((date1, date2)=>{
        const dateA = (0, _momentDefault.default)(date1, "DD/MM/YYYY");
        const dateB = (0, _momentDefault.default)(date2, "DD/MM/YYYY");
        return dateA.diff(dateB);
    });
    // find the date this task was last performed on except today
    let index = 0;
    while(index < sortedTaskDates.length && (0, _momentDefault.default)(sortedTaskDates[index], "DD/MM/YYYY").isBefore(today))++index;
    --index;
    // count the streak
    let count = 0;
    while(index >= 0 && task.progressEachDay[sortedTaskDates[index]] > 0){
        ++count;
        --index;
    }
    return count;
};
const getMissedDaysCount = (task)=>{
    let count = 0;
    for(const key in task.progressEachDay){
        const date = (0, _momentDefault.default)(key, "DD/MM/YYYY");
        const today = (0, _momentDefault.default)();
        if (date.isBefore(today) && task.progressEachDay[date] === 0) ++count;
    }
    return count;
};
const getProgressTillDate = (task)=>{
    let totalProgress = 0;
    let count = 0;
    for(const key in task.progressEachDay){
        const date = (0, _momentDefault.default)(key, "DD/MM/YYYY");
        const today = (0, _momentDefault.default)();
        if (date.isSameOrBefore(today)) ++count;
        if (count === 0) return 0;
        if (date.isSameOrBefore(today) && task.progressEachDay[date._i] > 0) totalProgress += Number(task.progressEachDay[date._i]);
    }
    // const possibleProgress = count * 100;
    const possibleProgress = Object.keys(task.progressEachDay).length * 100;
    const totalProgressPercentage = totalProgress / possibleProgress * 100;
    return formatNumber(totalProgressPercentage);
};
const renderDetailsCard = (sNo, task)=>{
    const progress = getProgressTillDate(task);
    const conicGradientDegree = 3.6 * progress;
    const streak = getStreak(task);
    const { taskName, taskDesc, subTask, startDate, endDate, customCategory, priority, recurringPeriod, duration, progressEachDay } = task;
    const subtasksArray = subTask.split(",").map((subtask)=>subtask.trim());
    detailsBox.innerHTML = "";
    detailsBox.insertAdjacentHTML("beforeend", `
    <!-- Header part -->
    <div class="details-box__header">
      <i
        class="bx bx-arrow-back details-box__back-btn"
        style="color: var(--text-color)"
      ></i>
      <div class="details-box__header-inner-container">
        <i class="bx bxs-trash-alt" style="color:var(--text-color)"></i>
      </div>
    </div>

    <!-- main data part -->
    <div class="details-box__main">
      <!-- S.no, name and description-->
      <div class="details-box__heading-outer-container">
        <span class="task-no">${sNo}</span>
        <div class="details-box__heading-inner-container">
          <span class="details-box__task-name">${taskName}</span>
          <span class="details-box__task-description"
            >${taskDesc}</span
          >
        </div>
      </div>
      <!-- Category -->
      <span class="details-box__category">${customCategory}</span>
      <!-- start date -->
      <div class="details-box__start-date">
        <i class="bx bxs-calendar" style="color: var(--text-color)"></i>
        <span>Start date: ${startDate}</span>
      </div>
      <!-- end date -->
      <div class="details-box__end-date">
        <i class="bx bxs-calendar" style="color: var(--text-color)"></i>
        <span>End date: ${endDate}</span>
      </div>

      <!-- streak -->
      <span class="details-box__streak">
        <span class="details-box__property">Streak:</span>
        <span class="details-box__streak-value">${streak} ${streak === 1 ? "day" : "days"}</span>
      </span>

      <!-- progress -->
      <div class="details-box__progress">
        <span class="details-box__property">Progress:</span>
        <div class="details-box__progress-circle" style="  background: conic-gradient(#45a2a9 ${conicGradientDegree}deg, #bcccbf ${conicGradientDegree}deg 360deg);
        ">
          <span class="details-box__progress-value">${progress}%</span>
        </div>
      </div>

      <!-- Tag details -->
      <div class="details-box__tags-table">
        <div class="details-box__tags-table-item">
          <span class="details-box__property">Type:</span>
          <span class="details-box__property-value details-tag">
            ${recurringPeriod}
          </span>
        </div>
        <div class="details-box__tags-table-item">
          <span class="details-box__property">Recurring:</span>
          <span class="details-box__property-value details-tag">${priority}</span>
        </div>
        <div class="details-box__tags-table-item">
          <span class="details-box__property">Priority:</span>
          <span class="details-box__property-value details-tag details-tag-${duration.toLowerCase()}">
              ${duration}
          </span>
        </div>
        <div class="details-box__tags-table-item">
          <span class="details-box__property">Missed:</span>
          <span class="details-box__property-value details-tag">${getMissedDaysCount(task)}</span>
        </div>
      </div>

      <!-- Subtasks -->
      <div class="details-box__subtasks-table">
        <span class="details-box__property">Subtasks:</span>
        <div class="details-box__subtasks-table-items">
          ${subtasksArray.map((subtask)=>{
        return `<div class="details-box__subtasks-table-item">
                        <i class="bx bx-check-square" style="color: #0e8c87"></i>
                        <span class="subtask-item">
                          ${subtask}
                        </span>
                      </div>`;
    }).join("")}
        </div>
      </div>

      <!-- Graph -->
      <div class="graph">
        <canvas id="progress-by-day"></canvas>
      </div>

      <dialog class="dialog"">
        <p>Are you sure you want to delete this task?</p>
        <div>
          <button class="no-btn">No</button>
          <button class="yes-btn">Yes</button>
        </div>
      </dialog>
    </div>
  </div>
    `);
    /*

  <div class="details-box__subtasks-table-item">
            <i class="bx bx-check-square" style="color: #0e8c87"></i>
            <span class="subtask-item">
              ${subTask}
            </span>
          </div>

  */ const backBtn = document.querySelector(".details-box__back-btn");
    backBtn.addEventListener("click", ()=>{
        detailsBox.setAttribute("hidden", true);
        dashboardBox.removeAttribute("hidden");
    });
    const deleteBtn = document.querySelector(".bxs-trash-alt");
    const dialogBox = document.querySelector(".dialog");
    const noBtn = document.querySelector(".no-btn");
    const yesBtn = document.querySelector(".yes-btn");
    deleteBtn.addEventListener("click", ()=>{
        dialogBox.showModal();
    });
    noBtn.addEventListener("click", ()=>{
        dialogBox.close();
    });
    yesBtn.addEventListener("click", ()=>{
        backBtn.click();
        dialogBox.close();
        const tasksArray = JSON.parse(localStorage.getItem("tasks"));
        const newTasksArray = tasksArray.filter((ele)=>!lodash.isEqual(ele, task));
        localStorage.setItem("tasks", JSON.stringify(newTasksArray));
        updateDashboard();
    });
};
const constructGraph = async (task)=>{
    const data = Object.keys(task.progressEachDay).map((date)=>({
            date,
            progress: task.progressEachDay[date]
        })).filter((obj)=>{
        const objDateMoment = (0, _momentDefault.default)(obj.date, "DD/MM/YYYY");
        const today = (0, _momentDefault.default)((0, _momentDefault.default)().format("DD/MM/YYYY"), "DD/MM/YYYY");
        // console.log(objDateMoment);
        // console.log(today);
        console.log(objDateMoment.isSameOrBefore(today));
        return objDateMoment.isSameOrBefore(today);
    }).sort((obj1, obj2)=>{
        const dateA = (0, _momentDefault.default)(obj1.date, "DD/MM/YYYY");
        const dateB = (0, _momentDefault.default)(obj2.date, "DD/MM/YYYY");
        return dateA.diff(dateB);
    });
    // moment(obj.date).isSameOrBefore(moment().format("DD/MM/YYYY"))
    new (0, _autoDefault.default)(document.getElementById("progress-by-day"), {
        type: "line",
        options: {
            animation: false,
            plugins: {
                legend: {
                    display: true,
                    onClick: null
                }
            }
        },
        data: {
            labels: data.map((row)=>row.date),
            datasets: [
                {
                    label: "Progress each day",
                    data: data.map((row)=>row.progress)
                }
            ]
        }
    });
};
dashboardBox.addEventListener("click", (event)=>{
    if (event.target.classList.contains("details-btn")) {
        dashboardBox.setAttribute("hidden", true);
        detailsBox.removeAttribute("hidden");
        const tasksArray = JSON.parse(localStorage.getItem("tasks"));
        const [todayTasks, nextDayTasks, thisWeekTasks] = groupTasks(tasksArray);
        const classNames = event.target.parentElement.classList;
        const taskType = event.target.parentElement.parentElement.classList[0];
        switch(taskType){
            case "Task":
                {
                    const sNo = +classNames[1].slice(11);
                    const index = sNo - 1;
                    const task = todayTasks[index];
                    renderDetailsCard(sNo, task);
                    constructGraph(task);
                    break;
                }
            case "nextDayTasksContainer":
                {
                    const sNo = +classNames[1].slice(14);
                    const index = sNo - 1;
                    const task = nextDayTasks[index];
                    renderDetailsCard(sNo, task);
                    constructGraph(task);
                    break;
                }
            case "thisWeeksTasksContainer":
                {
                    const sNo = +classNames[1].slice(15);
                    const index = sNo - 1;
                    const task = thisWeekTasks[index];
                    renderDetailsCard(sNo, task);
                    constructGraph(task);
                    break;
                }
            default:
                console.log("something went wrong!");
        }
    }
});
document.querySelector(".TodaysTasks").addEventListener("change", (event)=>{
    const taskIndex = event.target.parentElement.parentElement.classList[1].slice(11) - 1;
    const tasksArray = JSON.parse(localStorage.getItem("tasks"));
    const [todayTasks, nextDayTasks, thisWeekTasks] = groupTasks(tasksArray);
    const taskToBeChanged = todayTasks[taskIndex];
    const date = new Date();
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    taskToBeChanged.progressEachDay[formattedDate] = event.target.value;
    tasksArray.forEach((task)=>{
        if (lodash.isEqual(task, taskToBeChanged)) task.progressEachDay[formattedDate] = event.target.value;
    });
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
    event.target.previousElementSibling.textContent = `${event.target.value}% Completed`;
});

},{"chart.js/auto":"d8NN9","moment":"jwcsj","19f9b7050bb60160":"3qBDj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["cncRw","6JYzJ"], "6JYzJ", "parcelRequire19c4")

//# sourceMappingURL=dashboard.adbc2cbf.js.map
