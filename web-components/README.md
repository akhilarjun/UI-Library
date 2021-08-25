# Web Components

Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.

It consists of three main technologies, which can be used together to create versatile custom elements with encapsulated functionality that can be reused wherever you like without fear of code collisions.

- **Custom elements:** A set of JavaScript APIs that allow you to define custom elements and their behavior, which can then be used as desired in your user interface.
- **Shadow DOM:** A set of JavaScript APIs for attaching an encapsulated "shadow" DOM tree to an element — which is rendered separately from the main document DOM — and controlling associated functionality. In this way, you can keep an element's features private, so they can be scripted and styled without the fear of collision with other parts of the document.
- **HTML templates:** The `<template>` and `<slot>` elements enable you to write markup templates that are not displayed in the rendered page. These can then be reused multiple times as the basis of a custom element's structure.

## How to create a Custom Element?

- Create a class which encapsulates your functionality
- Register your new element, using the `CustomElementRegistry.define()` mehtod
- Attach a shadow DOM if required using `Element.attachShadow()` method. And add child elements and event listeners to the Shadow DOM using regular DOM methods
- If required use `<template>` and `<slot>` to parameterize your custom component content.

### CustomElementRegistry API

Create a class which extends the normal `HTMLElement` and add extra functionality as required.

> Make sure to call the `super()` method in the constructor

```javascript
class HelloWorld extends HTMLElement {
  constructor() {
    super(); // <-- Very Important
    this.innerHTML = "Hello World";
  }
}
```

Once the class is complete, register it using the CustomElementRegistry implementation `customElements.define()` method like this

```javascript
customElements.define("hello-world", HelloWorld);
```

Here, `hello-world` is the DOM string that will be used in the HTML files to re-use this component

### LifeCycle Hooks

1. connectedCallback - This lifecycle hook is called once the component is attached to the DOM. This will be after initialization of the component.
2. disconnectedCallback - This lifecycle hook will be called after the component is removed from the DOM
3. attributeChangedCallback - This lifecycle hook will be called whenever the `observed` attributes of the component changes.

> Observed Attributes will be returned from the static method of `observedAttributes`.

example:

```javascript
connectedCallback() {
    console.log("Hello World Attached to DOM");
}

disconnectedCallback() {
    console.log("Hello World Removed from DOM");
}

static get observedAttributes() {
    return ["NAME_OF_ATTRIBUTE_HERE"];
}

attributeChangedCallback(prop, oldValue, newValue) {
    console.log("Attribute changed");
}

```

### Shadow DOM

Shadow DOM allows hidden DOM trees to be attached to elements in the regular DOM tree — this shadow DOM tree starts with a shadow root, underneath which can be attached to any elements you want, in the same way as the normal DOM.

![Shadow Dom Explanation](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM/shadowdom.svg)

Shadow DOM can be attached to the component using

```javascript
let shadow = elementRef.attachShadow({ mode: "open" });
```

> There are two modes in the Shadow DOM method of `attachShadow` namely `open` and `closed`

Shadow DOM with open mode can be accessed via the main application context. And can be used to alter its structure, style or functionality

```javascript
let myShadowDom = myCustomElem.shadowRoot;
```

Shadow DOM with closed mode cannot be accessed outside the custom element context.

```javascript
let myShadowDom = myCustomElem.shadowRoot; // <-- This will return null
```
