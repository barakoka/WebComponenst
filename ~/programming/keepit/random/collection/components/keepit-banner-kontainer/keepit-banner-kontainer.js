import { h } from "@stencil/core";
export class KeepitBannerComponent {
    makeOpen() {
        this.showFullBanner = !this.showFullBanner;
        this.toggleBunner.emit({ value: this.showFullBanner });
    }
    handleUi2() {
        this.redirect.emit();
    }
    render() {
        let mainContent = (h("div", { class: "in-one-line" },
            h("div", { class: "close-btn", onClick: this.makeOpen.bind(this) }),
            h("div", { class: "new-experience-line", onClick: this.handleUi2.bind(this) }, `${this.text1} ${this.text2} ${this.text3}`)));
        if (this.showFullBanner) {
            mainContent = (h("div", { class: "keepit-banner-container" },
                h("div", { class: "close-btn", onClick: this.makeOpen.bind(this) }),
                h("div", { class: "info-container" },
                    h("div", { class: "benefits-info" },
                        h("div", { class: "benefits-info_icon" }),
                        h("div", { class: "benefits-info_icon" }),
                        h("div", { class: "benefits-info_icon" }),
                        h("div", { class: "benefits-info_icon" })),
                    h("div", { class: "new-experience-btn", onClick: this.handleUi2.bind(this) },
                        h("div", { class: "secondary-text" }, this.text1),
                        h("div", { class: "secondary-text" }, this.text2),
                        h("div", { class: "main-text" }, this.text3))),
                h("div", { class: "secondary-info-container" },
                    h("div", { class: "go-back-text" }, this.text4))));
        }
        return mainContent;
    }
    static get is() { return "keepit-banner-container"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["keepit-banner-kontainer.css"]
    }; }
    static get styleUrls() { return {
        "$": ["keepit-banner-kontainer.css"]
    }; }
    static get assetsDirs() { return ["../icons"]; }
    static get properties() { return {
        "showFullBanner": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "show-full-banner",
            "reflect": true
        },
        "text1": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "text1",
            "reflect": false
        },
        "text2": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "text2",
            "reflect": false
        },
        "text3": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "text3",
            "reflect": false
        },
        "text4": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "text4",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "redirect",
            "name": "redirect",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "toggleBunner",
            "name": "toggleBunner",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
