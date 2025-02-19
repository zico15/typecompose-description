import { CodeComponent } from "@/components/code/CodeComponent";
import { SpanElement, H1Element, ParagraphElement } from "typecomposer";
import { BaseView } from "../elements/Base";


export class HomeView extends BaseView {
	constructor() {
		super();
		this.append(new SpanElement({ innerText: "Typecomposer . Welcome" }));

		this.append(new H1Element({ innerText: "Overview" }));
		this.append(new ParagraphElement({
			innerText: "TypeComposer is a framework for building web user interfaces using native web standards. It emphasizes a class-based approach where components are defined as ES6 classes extending HTMLElement. This structure leverages native browser APIs, resulting in efficient, streamlined JavaScript code."
		}));

		this.append(new CodeComponent({
			code: `import { Component, ButtonElement } from 'typecomposer';
		
export class AppPage extends Component {
	constructor() {
	super();

	const button = new ButtonElement({ text: 'Click me' });
	button.onclick = () => alert('Welcome to TypeComposer!');
	button.style.fontSize = '4em';

	this.append(button);
	}
}`
		}));

		this.append(new ParagraphElement({
			innerText: "In TypeComposer, components can range from simple reusable elements to complete web applications, ensuring flexibility and scalability. Styles, event listeners, and logic are applied directly, maintaining full control over the DOM."
		}));

		this.append(new H1Element({ innerText: "Features" }));
		this.append(new ParagraphElement({ innerText: "Declarative Design: Components are defined using JavaScript classes, focusing on clean and maintainable code." }));
		this.append(new ParagraphElement({ innerText: "Native Performance: Built directly on web platform standards without extra runtime abstractions." }));
		this.append(new ParagraphElement({ innerText: "Scalability: Suitable for creating everything from small widgets to comprehensive web apps." }));
		this.append(new ParagraphElement({ innerText: "Integrated Component Registration: Components are automatically registered with the browser using customElements." }));

		this.append(new ParagraphElement({
			innerText: "These pages serve as the official documentation. If you're new to TypeComposer, start with the interactive examples and return here for detailed references."
		}));

	}
}