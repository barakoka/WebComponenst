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
        while (_) try {
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
import { r as registerInstance, c as createEvent, h } from './core-db7150c2.js';
var KeepitBannerComponent = /** @class */ (function () {
    function KeepitBannerComponent(hostRef) {
        registerInstance(this, hostRef);
        this.redirect = createEvent(this, "redirect", 7);
        this.toggleBunner = createEvent(this, "toggleBunner", 7);
    }
    KeepitBannerComponent.prototype.makeOpen = function () {
        this.showFullBanner = !this.showFullBanner;
        this.toggleBunner.emit({ value: this.showFullBanner });
    };
    KeepitBannerComponent.prototype.handleUi2 = function () {
        this.redirect.emit();
    };
    KeepitBannerComponent.prototype.render = function () {
        var mainContent = (h("div", { class: "in-one-line" }, h("div", { class: "close-btn", onClick: this.makeOpen.bind(this) }), h("div", { class: "new-experience-line", onClick: this.handleUi2.bind(this) }, this.text1 + " " + this.text2 + " " + this.text3)));
        if (this.showFullBanner) {
            mainContent = (h("div", { class: "keepit-banner-container" }, h("div", { class: "close-btn", onClick: this.makeOpen.bind(this) }), h("div", { class: "info-container" }, h("div", { class: "benefits-info" }, h("div", { class: "benefits-info_icon" }), h("div", { class: "benefits-info_icon" }), h("div", { class: "benefits-info_icon" }), h("div", { class: "benefits-info_icon" })), h("div", { class: "new-experience-btn", onClick: this.handleUi2.bind(this) }, h("div", { class: "secondary-text" }, this.text1), h("div", { class: "secondary-text" }, this.text2), h("div", { class: "main-text" }, this.text3))), h("div", { class: "secondary-info-container" }, h("div", { class: "go-back-text" }, this.text4))));
        }
        return mainContent;
    };
    Object.defineProperty(KeepitBannerComponent, "assetsDirs", {
        get: function () { return ["../icons"]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KeepitBannerComponent, "style", {
        get: function () { return "*{font-family:Open Sans;-webkit-box-sizing:border-box;box-sizing:border-box}.keepit-banner-container{background:#fff;position:fixed;right:50px;bottom:0;padding:30px 30px 0 30px;border:1px solid #a9c9d2;-webkit-box-shadow:-2px 1px 28px -3px rgba(0,0,0,.35);-moz-box-shadow:-2px 1px 28px -3px rgba(0,0,0,.35);box-shadow:-2px 1px 28px -3px rgba(0,0,0,.35);z-index:300}.close-btn{position:absolute;right:0;top:0;height:30px;width:30px;cursor:pointer}.keepit-banner-container .close-btn{background-image:url(keepit-web-components/collection/icons/minimize_banner_icon_32x32.png)}.in-one-line .close-btn{background-image:url(keepit-web-components/collection/icons/open_banner_icon_32x32.png)}.benefits-info,.info-container{display:-ms-flexbox;display:flex}.benefits-info{width:115px;margin-right:15px;height:115px;-ms-flex-wrap:wrap;flex-wrap:wrap}.benefits-info_icon{width:50px;height:50px}.benefits-info_icon:first-child{margin-right:15px;margin-bottom:15px;background-image:url(keepit-web-components/collection/icons/01_fast_icon_32x32.svg)}.benefits-info_icon:nth-child(2){margin-bottom:15px;background-image:url(keepit-web-components/collection/icons/02_new_options_icon_32x32.svg)}.benefits-info_icon:nth-child(3){margin-right:15px;background-image:url(keepit-web-components/collection/icons/03_step_by_step_icon_32x32.svg)}.benefits-info_icon:nth-child(4){background-image:url(keepit-web-components/collection/icons/04_previewing_icon_32x32.svg)}.new-experience-btn{width:calc(100% - 130px);background:#81bc00;border:1px solid #4cae4c;cursor:pointer;padding:10px 40px 10px 40px;text-align:center;color:#fff}.secondary-text{font-size:23px;line-height:27px}.main-text{font-size:31px;line-height:38px}.secondary-info-container{width:100%;padding-top:30px}.go-back-text{text-align:center;line-height:35px;width:100%;border-top:1px solid #a6cbdc;font-size:12px;color:#009dba;font-weight:400;word-spacing:2px;white-space:nowrap}.in-one-line{font-size:20px;width:495px;color:#81bc00;background-color:#fff;border:1px solid #a9c9d2;-webkit-box-shadow:-2px 1px 28px -3px rgba(0,0,0,.35);-moz-box-shadow:-2px 1px 28px -3px rgba(0,0,0,.35);box-shadow:-2px 1px 28px -3px rgba(0,0,0,.35);line-height:30px;position:fixed;right:50px;bottom:0;z-index:300;padding-left:30px;cursor:pointer}"; },
        enumerable: true,
        configurable: true
    });
    return KeepitBannerComponent;
}());
var SideDrawer = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.showContact = false;
    }
    class_1.prototype.onCloseDrawer = function () {
        this.open = false;
    };
    class_1.prototype.onContentChange = function (content) {
        this.showContact = content === 'contact';
    };
    class_1.prototype.makeOpen = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.open = true;
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.render = function () {
        var mainContent = h("slot", null);
        if (this.showContact) {
            mainContent = (h("div", { id: "contact-information" }, h("h2", null, "Contact Information"), h("p", null, "Your cant reach us via phone or email."), h("ul", null, h("li", null, "Phone: 1234567890"), h("li", null, "Email:", h("a", { href: "mailto:something@something.com" }, "something@something.com")))));
        }
        var content = (h("aside", null, h("header", null, h("button", { onClick: this.onCloseDrawer.bind(this) }, "X"), h("h1", null, this.titleName)), h("section", { id: "tabs" }, h("button", { class: this.showContact ? '' : 'active', onClick: this.onContentChange.bind(this, 'nav') }, "Navigation"), h("button", { class: this.showContact ? 'active' : '', onClick: this.onContentChange.bind(this, 'contact') }, "Contact")), h("main", null, mainContent)));
        return content;
    };
    Object.defineProperty(class_1, "style", {
        get: function () { return "aside{position:fixed;top:0;left:-100%;width:30rem;max-width:80%;height:100vh;background:#f3f3f3;-webkit-box-shadow:0 2px 8px rgba(0,0,0,.26);box-shadow:0 2px 8px rgba(0,0,0,.26);-webkit-transition:left .5s ease-out;transition:left .5s ease-out}:host([open]) aside{left:0}header{padding:1rem;background:#000;position:relative}header h1{font-size:1.5rem;color:#fff;margin:0}header button{position:absolute;top:0;right:0;padding:1.5rem;color:#fff;background:transparent;border:none;cursor:pointer}header button:focus{outline:none}#tabs{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}#tabs button{width:50%;background:#fff;color:#000;text-align:center;border:1px solid #000;font:inherit;padding:1rem;cursor:pointer}#tabs button.active,#tabs button:hover{background:#ccc}#tabs button:focus{outline:none}#contact-information{padding:0 1.5rem}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { KeepitBannerComponent as keepit_banner_container, SideDrawer as keepit_side_drawer };
