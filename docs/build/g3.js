"use strict";
const GS_EVENT_TYPE = "G3_EVENT_TYPE";
const G3_INIT_EVENT = 1;
const G3_RESIZE_EVENT = 2;
const G3_POINTER_EVENT = 3;
const G3_POINTER_MOVE_EVENT = 4;
const G3_BUTTON_DOWN_EVENT = 5;
const G3_BUTTON_UP_EVENT = 6;
const G3_WHEEL_EVENT = 7;
const G3_KEYBOARD_EVENT = 8;
const G3_KEY_DOWN_EVENT = 9;
const G3_KEY_UP_EVENT = 10;
const G3_NEED_FULL_SCREEN = 1;
const G3_NEED_SQAURE_VIEW = 2;
;
{
    const $$ = (query) => Object.values(document.querySelectorAll(query));
    let m_views = [];
    let m_libdir = null;
    let m_cwd = null;
    document.addEventListener("DOMContentLoaded", () => {
        _appendKeyboardEvents();
        _initDirectories();
        _initViews();
        requestAnimationFrame(_watch);
    });
    const _initDirectories = function () {
        var path = null;
        for (const tag of $$("script")) {
            const src = tag.src;
            if (src && src.substr(-5) == "g3.js") {
                const c = src.substr(-6, 1);
                if (src.length > 5 && c != '.' && c != '/')
                    continue;
                path = src;
                break;
            }
        }
        if (path == null)
            throw "Internal error";
        m_libdir = path.substr(0, path.length - 5);
        if (m_libdir.substr(-1) != '/')
            m_libdir += '/';
        m_cwd = location.href;
        const regex = /[^.\/]+\.html?$/i;
        const match = m_cwd.match(regex);
        if (match)
            m_cwd = m_cwd.substr(0, match.index);
        if (m_cwd.substr(-1) != '/')
            m_cwd += '/';
    };
    const _initViews = function () {
        for (const view of $$("canvas[data-sketch]")) {
            const wrk = new Worker(m_libdir + "g3-worker.js");
            wrk.onerror = _onWorkerError;
            wrk.onmessage = _onWorkerMessage;
            const ofs = view.transferControlToOffscreen();
            ofs.width = view.clientWidth;
            ofs.height = view.clientHeight;
            view._worker = wrk;
            view._offscreen = ofs;
            m_views.push(view);
            _post(wrk, G3_INIT_EVENT, {
                canvas: ofs,
                sketch: new URL(view.dataset.sketch, m_cwd).href,
                baseUri: m_cwd,
                libDirectory: m_libdir
            }, [ofs]);
            _appendMouseEvents(view);
        }
    };
    const _watch = function () {
        for (const v of m_views) {
            if (v.clientWidth != v._offscreen.width
                || v.clientHeight != v._offscreen.height) {
                _post(v._worker, G3_RESIZE_EVENT, {
                    Width: (v._offscreen.width = v.clientWidth),
                    Height: (v._offscreen.height = v.clientHeight)
                });
            }
        }
    };
    const _post = function (w, type, msg, t) {
        msg = Object.assign(msg, { [GS_EVENT_TYPE]: type });
        w.postMessage(msg, t);
    };
    const _postToAll = function (type, msg, t) {
        const m = Object.assign(msg, { [GS_EVENT_TYPE]: type });
        for (const v of m_views)
            v._worker.postMessage(m, t);
    };
    const _appendKeyboardEvents = function () {
        window.addEventListener("keydown", _onDown);
        window.addEventListener("keyup", _onUp);
    };
    const _onDown = function (e) {
        _postToAll(G3_KEY_DOWN_EVENT, {
            Key: e.key,
            KeyCode: e.keyCode
        });
    };
    const _onUp = function (e) {
        const view = e.target;
        _postToAll(G3_KEY_UP_EVENT, {
            Key: e.key,
            KeyCode: e.keyCode
        });
    };
    const _appendMouseEvents = function (v) {
        v.addEventListener("mousedown", _onButtonDown);
        v.addEventListener("mouseup", _onButtonUp);
        v.addEventListener("mousemove", _onMouseMove);
        v.addEventListener("touchmove", _onMouseMove, { passive: true });
        v.addEventListener("wheel", _updateWheelEvent, { passive: true });
    };
    const _removeMouseEvents = function (v) {
        v.removeEventListener("mousedown", _onButtonDown);
        v.removeEventListener("mouseup", _onButtonUp);
        v.removeEventListener("mousemove", _onMouseMove);
        v.removeEventListener("touchmove", _onMouseMove);
        v.removeEventListener("wheel", _updateWheelEvent);
    };
    const _onButtonDown = function (e) {
        const view = e.target;
        _post(view._worker, G3_BUTTON_DOWN_EVENT, {
            Button: e.button
        });
    };
    const _onButtonUp = function (e) {
        const view = e.target;
        _post(view._worker, G3_BUTTON_UP_EVENT, {
            Button: e.button
        });
    };
    const _onMouseMove = function (e) {
        const view = e.target;
        _post(view._worker, G3_POINTER_MOVE_EVENT, {
            PointerLocation: [e.clientX, e.clientY],
            PointerMovement: [e.movementX, e.movementY],
            Force: 1
        });
    };
    const _updateWheelEvent = function (e) {
        const view = e.target;
        _post(view._worker, G3_WHEEL_EVENT, {
            WheelDelta: e.deltaY,
            WheelMode: e.deltaMode
        });
    };
    const _onWorkerError = function (e) {
    };
    const _onWorkerMessage = function (e) {
        switch (e.data[GS_EVENT_TYPE]) {
        }
    };
}
//# sourceMappingURL=g3.js.map