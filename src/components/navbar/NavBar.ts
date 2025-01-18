import { AnchorElement, Component, ImageElement, Router } from "typecomposer";

class Logo extends Component {
	constructor() {
		super({
			className: "flex text-2xl font-bold align-middle gap-3"
		});
		this.append(new ImageElement({ src: "/typecomposer.svg", alt: "TypeComposer Logo", className: "h-8" }));
		this.append("TypeComposer");
	}
}

class NavLinks extends Component {
	constructor() {
		super({ className: "flex gap-4" });
		this.append(new AnchorElement({ href: "#", text: "Home", className: "hover:text-[#f7df1e]", onclick: () => Router.go("home") }));
		this.append(new AnchorElement({ href: "#", text: "Docs", className: "hover:text-[#f7df1e]", onclick: () => Router.go("getting-started") }));
		this.append(new AnchorElement({ href: "#", text: "About", className: "hover:text-[#f7df1e]" }));
		this.append(new AnchorElement({ href: "#", text: "Contact", className: "hover:text-[#f7df1e]" }));
	}
}

export class NavBar extends Component {

	constructor() {
		super({ className: "flex items-center justify-between w-screen h-16 px-10 bg-[#1a202c] text-[#fcfffa]" });
		this.append(new Logo());
		this.append(new NavLinks());
	}
}