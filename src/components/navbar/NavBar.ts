import { AnchorElement, Component, ImageElement, Router, SvgElement } from "typecomposer";

class Logo extends Component {
	constructor() {
		super({
			className: "flex text-2xl font-bold align-middle gap-3 cursor-pointer",
			onclick: () => Router.go("/")
		});
		this.append(new ImageElement({ src: "/typecomposer.svg", width: "35px", height: "35px" }));
		this.append("TypeComposer");
	}

}

class NavLinks extends Component {

	constructor() {
		super({ className: "flex gap-4" });
		this.append(new AnchorElement({ href: "#", text: "Home", className: "hover:text-[#f7df1e]", onclick: () => Router.go("/") }));
		this.append(new AnchorElement({ href: "#", text: "Docs", className: "hover:text-[#f7df1e]", onclick: () => Router.go("docs") }));
		this.append(new AnchorElement({ href: "#", text: "Playground", className: "hover:text-[#f7df1e]", onclick: () => Router.go("playground") }));
		this.append(new AnchorElement({ href: "#", text: "Contact", className: "hover:text-[#f7df1e]" }));
	}
}

export class NavBar extends Component {

	constructor() {
		super({ className: "flex items-center justify-between w-screen h-16 px-10 bg-[#1a202c] text-[#fcfffa]" });
		this.append(new Logo());
		this.append(new NavLinks());
	}
	tes() {

	}
}