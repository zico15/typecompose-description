import { CodeComponent } from "@/components/code/CodeComponent";
import { Component, H1Element, ParagraphElement, SpanElement } from "typecomposer";

const codeSnippet = `
import { Component, ButtonElement } from 'typecomposer';

export class AppPage extends Component {
  constructor() {
    super();

    const button = new ButtonElement({ text: 'Click me'});
    button.onclick = () => alert('Welcome to TypeComposer!');
    button.style.fontSize = '2em';

    this.append(button);
  }
}`;
export class HomeView extends Component {


	constructor() {
		// scroll so no y
		super({ className: "flex flex-col gap-2 w-full h-full p-10 overflow-x-hidden overflow-y-auto" });
		this.append(new SpanElement({ text: "Typecomposer . Introduction" }));
		this.append(new H1Element({ text: "Overview", className: "text-[#fcfffa]" }));
		this.append(new ParagraphElement({ text: "TypeComposer is a framework for building web user interfaces using native web standards. It emphasizes a class-based approach where components are defined as ES6 classes extending HTMLElement. This structure leverages native browser APIs, resulting in efficient, streamlined JavaScript code." }));
		this.append(new CodeComponent({ code: codeSnippet }));
		this.append(new ParagraphElement({ text: "In TypeComposer, components can range from simple reusable elements to complete web applications, ensuring flexibility and scalability. Styles, event listeners, and logic are applied directly, maintaining full control over the DOM." }));
		this.append(new H1Element({ text: "Features", className: "text-[#fcfffa]" }));
		this.append(new ParagraphElement({ text: "Declarative Design: Components are defined using JavaScript classes, focusing on clean and maintainable code." }));
		this.append(new ParagraphElement({ text: "Native Performance: Built directly on web platform standards without extra runtime abstractions." }));
		this.append(new ParagraphElement({ text: "Scalability: Suitable for creating everything from small widgets to comprehensive web apps." }));
		this.append(new ParagraphElement({ text: "Integrated Component Registration: Components are automatically registered with the browser using customElements." }));
		this.append(new ParagraphElement({ text: "These pages serve as the official documentation. If you're new to TypeComposer, start with the interactive examples and return here for detailed references." }));
		//this.append(new H1Element({ text: "Get Started", className: "text-[#fcfffa]" }));
		//this.append(new ParagraphElement({ text: "Try TypeComposer live in the online playground or set up a local development environment to explore its full capabilities." }));
	}
} 