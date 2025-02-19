import { CodeComponent } from "@/components/code/CodeComponent";
import { Navigation } from "@/components/navigation/Navigation";
import { AnchorElement, ButtonElement, CardElement, Component, ComponentProps, DialogElement, DialogPanel, DivElement, H1Element, H2Element, H3Element, ParagraphElement, RefList, Router, SpanElement, TableElement, TextAreaElement, VBoxElement } from "typecomposer";
//import data from "@/assets/data.json"


async function send(url: string, type: "edit" | "delete" | "insert", data: {}) {
	console.log("send", JSON.stringify({ url, type, data }));
	try {
		await fetch("http://localhost:3000/update_doc", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				url, type, data
			}),
		});
	} catch (error) {
		console.log(error);
	}
}

interface IDoc {
	component: string,
	url: string,
	props: {
		code?: string, innerText?: string, [key: string]: any
	}, index: number
}

const compoents = {
	"SpanElement": SpanElement,
	"ParagraphElement": ParagraphElement,
	"TableElement": TableElement,
	"CodeComponent": CodeComponent,
	"H1Element": H1Element,
	"H2Element": H2Element
}

export class BaseView extends VBoxElement {
	public docs: IDoc[] = [];
	constructor() {
		super({ className: "flex flex-col gap-2 w-full h-full p-10 overflow-auto" });
	}

	async onInit() {
		this.append(new Navigation());
	}

	get url(): string {
		return (window.location.pathname.charAt(0) === "/" ? window.location.pathname.slice(1) : window.location.pathname);
	}
}

export class EditModal extends DialogPanel {

	private textarea: TextAreaElement;

	constructor(private root: BaseDocItem, public doc: IDoc) {
		super({ className: "flex flex-col gap-2", root: root, show: "modal", width: "80%", height: "80%" });
		const card = new CardElement({ className: "w-full h-full" });
		card.append(new DivElement({ className: "flex justify-end gap-2", children: [new ButtonElement({ text: "Save", onclick: () => this.save() }), new ButtonElement({ text: "Close", onclick: () => this.remove() })] }));
		this.textarea = card.appendChild(new TextAreaElement({ className: "w-full h-full border-2 border-gray-300 p-2", text: doc.props?.code || doc.props?.innerText || "", resize: "none" }));
		this.append(card);
	}

	async save() {
		if (this.doc.props.code) {
			this.doc.props.code = this.textarea.value;
		} else if (this.doc.props.innerText) {
			this.doc.props.innerText = this.textarea.value;
		}
		await send(this.doc.url, "edit", { index: this.doc.index, props: this.doc.props });
		this.root.edit();
		this.remove();
	}
}

export class InsertModal extends DialogPanel {

	constructor(private root: BaseDocItem, public doc: IDoc) {
		super({ className: "flex flex-col gap-2", root: root, show: "modal", });
		const card = new CardElement({ className: "w-full h-full" });
		const keys = Object.keys(compoents);
		card.append(new DivElement({ className: "flex justify-end gap-2", children: [new ButtonElement({ text: "Close", onclick: () => this.remove() })] }));
		card.append(new DivElement({
			className: "flex justify-end gap-2", children:
				keys.map((key) => new DivElement({
					className: "w-30 min-h-50 bg-gray-300 border-2 border-gray-300 flex justify-center items-center hover:bg-gray-400",
					textAlign: "center",
					width: "100px",
					height: "100px",
					cursor: "pointer",
					onclick: () => this.save(key),
					innerText: key.replaceAll("Element", "").replaceAll("Component", ""),
				}))
		}));
		this.append(card);
	}

	items() {
		return [
			{ component: "SpanElement", props: { innerText: "SpanElement" } },
			{ component: "ParagraphElement", props: { innerText: "ParagraphElement" } },
			{ component: "TableElement", props: { innerText: "TableElement" } },
			{ component: "CodeComponent", props: { innerText: "CodeComponent" } },
			{ component: "H1Element", props: { innerText: "H1Element" } },
			{ component: "H2Element", props: { innerText: "H2Element" } },
		]
	}

	async save(key: string) {
		const baseView = this.root.parentElement as BaseView;
		const doc: IDoc = { component: key, props: { innerText: key }, index: this.doc.index, url: this.doc.url };
		baseView.docs.splice(this.doc.index, 0, doc);
		this.root.insert(doc);
		//if (this.doc.props.code) {
		//	this.doc.props.code = this.textarea.value;
		//} else if (this.doc.props.innerText) {
		//	this.doc.props.innerText = this.textarea.value;
		//}
		//await send(this.doc.url, "edit", { index: this.doc.index, props: this.doc.props });
		//this.root.edit();
		//this.remove();
	}
}


export class BaseDocItem extends VBoxElement {
	public url: string
	public doc: IDoc;

	constructor(props: ComponentProps & { url: string, doc: IDoc }) {
		super({ className: "group" });
		this.url = props.url;
		this.doc = props.doc;
		if (props.children)
			this.append(props.children[0] as any)
	}

	onConnected(): void {
		this.append(new DivElement({
			className: "flex w-full  gap-2 justify-center",
			children: [
				new DivElement({
					className: "gap-2 hidden group-hover:flex text-[#fcfffa]",
					children: [
						new AnchorElement({ text: "edit", href: "#", className: "hover:text-[#f7df1e]", onclick: () => new EditModal(this, this.doc) }),
						new AnchorElement({ text: "delete", href: "#", className: "hover:text-[#f7df1e]", onclick: () => this.delete() }),
						new AnchorElement({ text: "insert", href: "#", className: "hover:text-[#f7df1e]", onclick: () => new InsertModal(this, this.doc) }),]
				})
			]
		}));
	}


	edit() {
		// @ts-ignore
		this.replaceChild(new compoents[this.doc.component](this.doc.props), this.children[0]);
	}

	insert(doc: IDoc) {
		// @ts-ignore
		this.parentElement?.insertBefore(new BaseDocItem({ url: this.url, doc: doc, children: [new compoents[doc.component](doc.props)] }), this);
	}

	get index(): number {
		return this.doc.index;
	}

	delete(): void {
		send(this.url, "delete", { index: this.index });
		this.remove();
		console.log("delete", this.index, " url: ", this.url);
	}
}