import { CodeComponent } from "@/components/code/CodeComponent";
import { H1Element, ParagraphElement, H2Element } from "typecomposer";
import { BaseView } from "../base-components/Base";


export class DivView extends BaseView {
	constructor() {
		super();
		this.append(new H1Element({ innerText: "Overview" }));
		this.append(new ParagraphElement({ innerText: "The DivElement is a foundational component in TypeComposer, extending the native HTMLDivElement. It serves as a generic container for organizing content and provides additional property-driven customization for styling, content, and behavior." }));
		this.append(new ParagraphElement({ innerText: "- Allows configuration through properties such as text, styles, and events." }));
		this.append(new ParagraphElement({ innerText: "- Supports child components, enabling nested and structured layouts." }));
		this.append(new ParagraphElement({ innerText: "- Provides extensive styling options, including padding, margins, borders, and background colors." }));

		this.append(new H1Element({ innerText: "Teste" }));
		this.append(new H2Element({ innerText: "With Nested Children" }));

		this.append(new CodeComponent({
			code: `
			import { ButtonElement, DivElement } from "typecomposer";\n\nnew DivElement({
	children: [
		new ButtonElement({ text: "Button 1", onclick: () => console.log("Button 1 clicked") }),
		new ButtonElement({ text: "Button 2", onclick: () => console.log("Button 2 clicked") }),
	],
	padding: "10px",
	backgroundColor: "#e9ecef",
});`
		}));

		this.append(new H2Element({ innerText: "Responsive Design" }));

		this.append(new CodeComponent({
			code: `new DivElement({
	text: "Responsive Div",
	width: "50%",
	height: "auto",
	padding: "15px",
	backgroundColor: "#f8f9fa",
});`
		}));

		this.append(new H1Element({ innerText: "5. Default Behavior" }));
		this.append(new ParagraphElement({ innerText: "By default, the DivElement:" }));
		this.append(new ParagraphElement({ innerText: "- Does not apply any styles unless specified through properties." }));
		this.append(new ParagraphElement({ innerText: "- Accepts plain text, HTML content, or nested child components." }));

		this.append(new H1Element({ innerText: "6. When to Use Div2Element" }));
		this.append(new ParagraphElement({ innerText: "- When you need a flexible and generic container." }));
		this.append(new ParagraphElement({ innerText: "- For creating reusable layouts or wrappers." }));
		this.append(new ParagraphElement({ innerText: "- To add interactivity with events like `onclick`." }));

		this.append(new H1Element({ innerText: "Conclusion" }));
		this.append(new ParagraphElement({ innerText: "The DivElement is a versatile and essential building block in TypeComposer. By extending the native HTMLDivElement, it provides enhanced capabilities for customization and layout structuring while retaining full compatibility with standard HTML behavior. Use it to create dynamic and structured interfaces effortlessly." }));

	}
}