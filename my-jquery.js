class MyJQuery {
    constructor(elements) {
        this.elements = elements;
    }

    on(eventName, cb) {
        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i].addEventListener(eventName, cb);
        }
        return this;
    }

    addClass(className) {
        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i].classList.add(className);
        }
        return this;
    }

    removeClass(className) {
        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i].classList.remove(className);
        }
        return this;
    }
    
    toggleClass(className) {
        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i].classList.toggle(className);
        }
        return this;
    }

    html(html) {
        if (typeof html === `undefined`) {
            return this.elements[0].innerHTML;
        }

        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i].innerHTML = html;
        }
        return this;
    }
}

const $ = (selector) => {
    let elements = (selector instanceof HTMLElement) ? [selector] : document.querySelectorAll(selector);
    return new MyJQuery(elements);
};
