class HelloWorld extends HTMLElement {
    get name() {
        return this.getAttribute("name");
    }
    set name(name) {
        this.setAttribute("name", name);
    }
    /**
     * @type ShadowRoot
     */
    shadow = null;
    events = [];

    renderContent() {
        let salutation = "World";
        if (this.name) {
            salutation = this.name;
        }

        if (!this.shadow) {
            this.shadow = this.attachShadow({ mode: "closed" });
        }
        this.shadow.innerHTML = "";
        let style = document.createElement("style");
        style.textContent = `
            *{
                color: #efff00;
            }
            .log {
                font-size: 13px;
                margin: 5px 0;
                color: #000;
                font-weight: 500;
            }
        `;
        this.shadow.appendChild(style);
        let div = document.createElement("div");
        div.innerText = `Hello ${salutation}!`;
        this.shadow.appendChild(div);
        this.events.forEach((e, index) => {
            if (index > 0) {
                let logDiv = document.createElement("div");
                logDiv.classList.add("log");
                logDiv.innerText = `${e.prop} value changed from ${e.oldValue} to ${e.newValue}`;
                this.shadow.appendChild(logDiv);
            }
        });
    }

    constructor() {
        super();
        console.log("Hello World Component is Initialized");
        this.renderContent();
    }

    attributeChangedCallback(prop, oldValue, newValue) {
        console.log("Attribute changed: " + prop);
        this.events.push({ prop, oldValue, newValue });
        this.renderContent();
    }

    static get observedAttributes() {
        return ["name"];
    }

    connectedCallback() {
        console.log("Hello World Attached to DOM");
    }

    disconnectedCallback() {
        console.log("Hello World Removed from DOM");
    }
}
customElements.define("hello-world", HelloWorld);
