import { h } from "@stencil/core";
export class SideDrawer {
    constructor() {
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
            mainContent = (h("div", { id: "contact-information" },
                h("h2", null, "Contact Information"),
                h("p", null, "Your cant reach us via phone or email."),
                h("ul", null,
                    h("li", null, "Phone: 1234567890"),
                    h("li", null,
                        "Email:",
                        h("a", { href: "mailto:something@something.com" }, "something@something.com")))));
        }
        let content = (h("aside", null,
            h("header", null,
                h("button", { onClick: this.onCloseDrawer.bind(this) }, "X"),
                h("h1", null, this.titleName)),
            h("section", { id: "tabs" },
                h("button", { class: this.showContact ? '' : 'active', onClick: this.onContentChange.bind(this, 'nav') }, "Navigation"),
                h("button", { class: this.showContact ? 'active' : '', onClick: this.onContentChange.bind(this, 'contact') }, "Contact")),
            h("main", null, mainContent)));
        return content;
    }
    static get is() { return "keepit-side-drawer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./side-drawer.css"]
    }; }
    static get styleUrls() { return {
        "$": ["side-drawer.css"]
    }; }
    static get properties() { return {
        "titleName": {
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
            "attribute": "title",
            "reflect": true
        },
        "open": {
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
            "attribute": "open",
            "reflect": true
        }
    }; }
    static get states() { return {
        "showContact": {}
    }; }
    static get methods() { return {
        "makeOpen": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
}
