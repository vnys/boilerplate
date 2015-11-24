import { log } from '../lib/bondage.js';

let _HTMLElement = function() {};
_HTMLElement.prototype = HTMLElement.prototype;

class MyElement extends _HTMLElement {

    createdCallback() {
        this.setAttribute('element-created', '');
        log('element created');
    }

    attachedCallback() {
        this.setAttribute('element-attached', '');
        log('element attached');
    }

    detachedCallback() { }

    attributeChangedCallback() { }

}

document.registerElement('my-element', MyElement);
