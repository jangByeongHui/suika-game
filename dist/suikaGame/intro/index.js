var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fruit } from '../object/Fruit';
import styles from './index.module.scss';
import classNames from "classnames/bind";
var cx = classNames.bind(styles);
var Intro = function (_a) {
    var isVisible = _a.isVisible, handleGameStart = _a.handleGameStart;
    var positionCircularly = function (totalElements, index) {
        var radius = 150; // 조절 가능한 원의 반지름
        var angle = (2 * Math.PI * index) / totalElements;
        var x = radius * Math.cos(angle);
        var y = radius * Math.sin(angle);
        return {
            top: "calc(50% + ".concat(y, "px - 24px)"),
            left: "calc(50% + ".concat(x, "px - 24px)"),
        };
    };
    var fruitItemEls = Object.keys(Fruit).slice(0, Object.keys(Fruit).length - 1).map(function (fruit, index) {
        var itemPositions = positionCircularly(11, index);
        return (_jsx("li", { className: cx('listItem'), style: {
                backgroundImage: "url(".concat(require('../../../resource/' + fruit + '.png'), ")"),
                top: itemPositions.top,
                left: itemPositions.left
            } }, fruit));
    });
    var onClick = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            handleGameStart();
            return [2 /*return*/];
        });
    }); };
    if (!isVisible)
        return null;
    return (_jsxs("div", __assign({ className: cx('introArea') }, { children: [_jsx("ul", __assign({ className: cx('listWrap') }, { children: fruitItemEls })), _jsx("div", __assign({ className: cx('titleArea') }, { children: _jsx("button", __assign({ className: cx('btn'), onClick: onClick }, { children: "GAME START" })) })), _jsx("a", __assign({ href: 'https://github.com/koreacat/suika-game#readme', target: '_blank', className: cx('patchLink') }, { children: "\uD328\uCE58\uB178\uD2B8" })), _jsx("span", __assign({ className: cx('version') }, { children: "v1.0.4" }))] })));
};
export default Intro;
