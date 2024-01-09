import { AnchorElement, Component, DivElement, IconElement, ImageElement, InputElement, ListElement, ListItemElement, ParagraphElement, SpanElement, StyleOptional } from "typecompose";

export class SideBarItem extends ListItemElement {

    constructor(options?: StyleOptional & {
        text: string,
        icon?: string,
        orientation?: "top" | "bottom" | "center",
        onclick?: () => void
    }) {
        super({ ...options, text: undefined });
        this.addClasName("link-item", options?.orientation || "center");
        const pane = this.appendChild(new AnchorElement({ href: "#", className: "link" }));
        pane.innerHTML = `
        <ion-icon name="${options?.icon || "home-outline"}"></ion-icon>
        <span style="--i: 1">${options?.text || ""}</span>`;
    }
}

export class SideBarElement extends Component {

    private _list = new ListElement({ className: "container" });
    private _expanded: "auto" | "always" | "manual" = "auto";

    constructor(options?: StyleOptional & {
        expanded?: "auto" | "always" | "manual",
    }) {
        super({ display: "flex", position: "relative", ...options });
        this.addClasName("sidebar");
        this._list.container.addClasName("link-items");
        this._list.addClasName("container");
        const logo = new DivElement({ className: "logo" });

        logo.innerHTML = `
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32.519"
            height="30.7"
            viewBox="0 0 32.519 30.7"
            fill="#363b46"
        >
            <g id="Logo" transform="translate(-90.74 -84.875)">
            <path
                id="B"
                d="M14.378-30.915c-5.124,0-9.292,3.767-9.292,10.228S9.254-10.46,14.378-10.46h1.471c5.124,0,9.292-3.767,9.292-10.228s-4.168-10.228-9.292-10.228H14.378M11.7-33.456h6.819A12.768,12.768,0,0,1,31.29-20.687,12.768,12.768,0,0,1,18.522-7.919H11.7A12.768,12.768,0,0,1-1.065-20.687C-2.4-51.282,4.652-33.456,11.7-33.456Z"
                transform="translate(91.969 123.494)"
            />
            </g>
        </svg>`;

        this._list.insertBefore(logo, this._list.firstChild);
        this.appendChild(this._list);
        this.expanded = options?.expanded || "auto";
        if (this.expanded === "auto") {
            this.addEventListener("mouseenter", () => this.open());
            this.addEventListener("mouseleave", () => this.close());
        }
    }

    get expanded(): string {
        return this._expanded;
    }

    set expanded(value: "auto" | "always" | "manual") {
        this._expanded = value;
        if (value === "always") this.open();
    }

    public addItem(text: string, icon?: string, orientation: "top" | "bottom" | "center" = "center", onclick?: () => void): SideBarItem {
        const _onclick = typeof orientation === "function" ? orientation : onclick;
        const _orientation: "top" | "bottom" | "center" | undefined = typeof orientation === "function" ? "center" : orientation;
        return this._list.addItem(new SideBarItem({ text, icon, orientation: _orientation, onclick: _onclick }));
    }

    public open(): void {
        if (this.classList.contains("active")) return;
        this._list?.classList.add("active");
        this.classList?.add("active");
    }

    public close(): void {
        if (this.expanded === "always") return;
        this._list?.classList?.remove("active");
        this.classList?.remove("active");
    }

    public toggle(): void {
        if (this.classList.contains("active")) this.close();
        else this.open();
    }

}