import { AnchorElement, Component, DetailsElement, ListItemElement, NavElement, OrderedListElement, Router, SpanElement, SummaryElement, UListElement, VBoxElement } from "typecomposer";
import data from "@/assets/data.json"

export class SidebarItem extends ListItemElement {
	private static select: ListItemElement | null = null;
	constructor(public props: {
		text: string, items: {
			title: string;
			link: string;
		}[],
		link?: string
	}) {
		super({ className: "sidebar-item" });
		if (props.link && props.text) {
			this.append(...this.items([{ title: props.text, link: props.link }]));
		}
		else
			this.append(new DetailsElement({
				className: "details",
				children: [
					new SummaryElement({
						className: "summary",
						children: [new SpanElement({ text: props.text })]
					}),
					new OrderedListElement({
						className: "gap-4 p-4 pt-2 pb-2",
						children: this.items(props.items)
					}),
				]
			}));
	}

	static removeSelected() {
		if (SidebarItem.select) {
			SidebarItem.select.classList.remove("selected");
			SidebarItem.select = null;
		}
	}

	items(r: { title: string; link: string; }[]): Component[] {
		const elements: Component[] = [];
		for (let i = 0; i < r.length; i++) {
			const element = new ListItemElement({ children: [new AnchorElement({ marginLeft: "1.5rem", href: "#", text: r[i].title, className: "text-link" })] });
			element.onclick = () => {
				if (SidebarItem.select) {
					SidebarItem.select.classList.remove("selected");
				}
				SidebarItem.select = element;
				if (r[i].link)
					Router.go(r[i].link);
				element.addClassName("selected");
			}
			elements.push(element);
		}
		return elements;
	}
}

export class Sidebar extends Component {
	constructor() {
		super({ className: "sidebar overflow-y-auto" });
		const order = new OrderedListElement({});
		this.append(
			new NavElement({
				className: "flex items-center gap-2",
				children: [order]
			}));
		for (let i = 0; i < data.sidebar.length; i++) {
			order.append(new SidebarItem({ text: data.sidebar[i].title, items: data.sidebar[i]?.items || [], link: data.sidebar[i].link }));
		}
	}
}
