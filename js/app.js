let $template = document.createElement("template");
$template.innerHTML = `<div class="information-container-card">
<div class="information-avatar">
    
</div>
<div class="name">Kẻ Vô Danh</div>
<div class="gender">Nobody</div>
<div class="contact">
    <div class="country">
        vietnam
    </div>
    <div class="phone">
        124324234
    </div>
</div>
</div>
`;

export default class information extends HTMLElement {
    constructor() {
        super();

    }
    static get observedAttributes() {}
    attributeChangedCallback(attrName, oldValue, newValue) {}
    connectedCallback() {}
    disconnectedCallback() {}
}
window.customElements.define("list-information", information);
