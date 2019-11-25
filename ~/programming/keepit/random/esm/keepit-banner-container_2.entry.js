import { r as registerInstance, c as createEvent, h } from './core-ae4b4131.js';

const KeepitBannerComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.redirect = createEvent(this, "redirect", 7);
        this.toggleBunner = createEvent(this, "toggleBunner", 7);
    }
    makeOpen() {
        this.showFullBanner = !this.showFullBanner;
        this.toggleBunner.emit({ value: this.showFullBanner });
    }
    handleUi2() {
        this.redirect.emit();
    }
    render() {
        let mainContent = (h("div", { class: "in-one-line" }, h("div", { class: "close-btn", onClick: this.makeOpen.bind(this) }), h("div", { class: "new-experience-line", onClick: this.handleUi2.bind(this) }, `${this.text1} ${this.text2} ${this.text3}`)));
        if (this.showFullBanner) {
            mainContent = (h("div", { class: "keepit-banner-container" }, h("div", { class: "close-btn", onClick: this.makeOpen.bind(this) }), h("div", { class: "info-container" }, h("div", { class: "benefits-info" }, h("div", { class: "benefits-info_icon" }), h("div", { class: "benefits-info_icon" }), h("div", { class: "benefits-info_icon" }), h("div", { class: "benefits-info_icon" })), h("div", { class: "new-experience-btn", onClick: this.handleUi2.bind(this) }, h("div", { class: "secondary-text" }, this.text1), h("div", { class: "secondary-text" }, this.text2), h("div", { class: "main-text" }, this.text3))), h("div", { class: "secondary-info-container" }, h("div", { class: "go-back-text" }, this.text4))));
        }
        return mainContent;
    }
    static get assetsDirs() { return ["../icons"]; }
    static get style() { return "*{font-family:Arial,Helvetica,sans-serif;-webkit-box-sizing:border-box;box-sizing:border-box}.keepit-banner-container{background:#fff;position:fixed;right:50px;bottom:0;padding:30px 30px 0 30px;border:1px solid #a9c9d2;-webkit-box-shadow:-2px 1px 28px -3px rgba(0,0,0,.35);-moz-box-shadow:-2px 1px 28px -3px rgba(0,0,0,.35);box-shadow:-2px 1px 28px -3px rgba(0,0,0,.35);z-index:300}.close-btn{position:absolute;right:0;top:0;height:30px;width:30px;cursor:pointer}.keepit-banner-container .close-btn{background-image:url(keepit-web-components/collection/icons/minimize_banner_icon_32x32.png)}.in-one-line .close-btn{background-image:url(keepit-web-components/collection/icons/open_banner_icon_32x32.png)}.info-container{display:-ms-grid;display:grid;grid-template-columns:115px auto;grid-column-gap:15px}.benefits-info{display:grid;display:-ms-grid;grid-template-columns:50px 50px;grid-template-rows:50px 50px;grid-gap:15px}.benefits-info_icon:first-child{background-image:url(keepit-web-components/collection/icons/01_fast_icon_32x32.svg)}.benefits-info_icon:nth-child(2){background-image:url(keepit-web-components/collection/icons/02_new_options_icon_32x32.svg)}.benefits-info_icon:nth-child(3){background-image:url(keepit-web-components/collection/icons/03_step_by_step_icon_32x32.svg)}.benefits-info_icon:nth-child(4){background-image:url(keepit-web-components/collection/icons/04_previewing_icon_32x32.svg)}.new-experience-btn{background:#81bc00;border:1px solid #4cae4c;cursor:pointer;padding:10px 40px 10px 40px;text-align:center;color:#fff}.secondary-text{font-size:23px;line-height:27px}.main-text{font-size:31px;line-height:38px}.secondary-info-container{width:100%;padding-top:30px}.go-back-text{text-align:center;line-height:35px;width:100%;border-top:1px solid #a6cbdc;font-size:12px;color:#009dba;font-weight:400;word-spacing:2px;white-space:nowrap}.in-one-line{font-size:20px;width:495px;color:#81bc00;background-color:#fff;border:1px solid #a9c9d2;-webkit-box-shadow:-2px 1px 28px -3px rgba(0,0,0,.35);-moz-box-shadow:-2px 1px 28px -3px rgba(0,0,0,.35);box-shadow:-2px 1px 28px -3px rgba(0,0,0,.35);line-height:30px;position:fixed;right:50px;bottom:0;z-index:300;padding-left:30px;cursor:pointer}"; }
};

const SideDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.showContact = false;
    }
    onCloseDrawer() {
        this.open = false;
    }
    onContentChange(content) {
        this.showContact = content === 'contact';
    }
    async makeOpen() {
        this.open = true;
    }
    render() {
        let mainContent = h("slot", null);
        if (this.showContact) {
            mainContent = (h("div", { id: "contact-information" }, h("h2", null, "Contact Information"), h("p", null, "Your cant reach us via phone or email."), h("ul", null, h("li", null, "Phone: 1234567890"), h("li", null, "Email:", h("a", { href: "mailto:something@something.com" }, "something@something.com")))));
        }
        let content = (h("aside", null, h("header", null, h("button", { onClick: this.onCloseDrawer.bind(this) }, "X"), h("h1", null, this.titleName)), h("section", { id: "tabs" }, h("button", { class: this.showContact ? '' : 'active', onClick: this.onContentChange.bind(this, 'nav') }, "Navigation"), h("button", { class: this.showContact ? 'active' : '', onClick: this.onContentChange.bind(this, 'contact') }, "Contact")), h("main", null, mainContent)));
        return content;
    }
    static get style() { return "aside{position:fixed;top:0;left:-100%;width:30rem;max-width:80%;height:100vh;background:#f3f3f3;-webkit-box-shadow:0 2px 8px rgba(0,0,0,.26);box-shadow:0 2px 8px rgba(0,0,0,.26);-webkit-transition:left .5s ease-out;transition:left .5s ease-out}:host([open]) aside{left:0}header{padding:1rem;background:#000;position:relative}header h1{font-size:1.5rem;color:#fff;margin:0}header button{position:absolute;top:0;right:0;padding:1.5rem;color:#fff;background:transparent;border:none;cursor:pointer}header button:focus{outline:none}#tabs{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}#tabs button{width:50%;background:#fff;color:#000;text-align:center;border:1px solid #000;font:inherit;padding:1rem;cursor:pointer}#tabs button.active,#tabs button:hover{background:#ccc}#tabs button:focus{outline:none}#contact-information{padding:0 1.5rem}"; }
};

export { KeepitBannerComponent as keepit_banner_container, SideDrawer as keepit_side_drawer };
