import { CodeComponent } from "@/components/code/CodeComponent";
import { SpanElement, H1Element, ParagraphElement, H2Element, TableElement } from "typecomposer";
import { BaseView } from "../elements/Base";


export class HboxView extends BaseView {
	constructor() {
		super();
		this.append(new SpanElement({ innerText: "TypeComposer ∙ HBoxElement" }));
		this.append(new H1Element({ innerText: "Overview" }));
		this.append(new ParagraphElement({ innerText: "The HBoxElement is a container component in TypeComposer designed to arrange its child elements horizontally. It comes with built-in styles for horizontal alignment and is highly customizable through its properties." }));
		this.append(new H1Element({ innerText: "1. Key Features" }));
		this.append(new ParagraphElement({ innerText: "- Automatically aligns child elements horizontally using flex-direction: row." }));
		this.append(new ParagraphElement({ innerText: "- Supports customization such as spacing, alignment, and events directly through properties." }));
		this.append(new ParagraphElement({ innerText: "- Simplifies creation of row-based layouts in a structured way." }));
		this.append(new H1Element({ innerText: "2. Basic Example" }));
		this.append(new CodeComponent({
			code: `import { HBoxElement, DivElement } from "typecomposer";
		
class ExampleHBox extends HBoxElement {
	constructor() {
	super({
		gap: "10px",
		padding: "20px",
		backgroundColor: "#ffffff",
		border: "1px solid #ccc",
		children: [
		new DivElement({ text: "Item 1", padding: "10px", backgroundColor: "#f0f0f0" }),
		new DivElement({ text: "Item 2", padding: "10px", backgroundColor: "#d0d0d0" }),
		new DivElement({ text: "Item 3", padding: "10px", backgroundColor: "#b0b0b0" }),
		],
	});
	}
}

export default ExampleHBox;`
		}));
		this.append(new H1Element({ innerText: "3. Properties" }));
		this.append(new TableElement({
			headers: ["Property", "Type", "Description", "Example"],
			rows: [
				["children", "Element[]", "An array of child components to be rendered inside the HBoxElement.", `[new DivElement(...), new ButtonElement(...)]`],
				["gap", "string (optional)", "Specifies spacing between child elements.", `"10px"`],
				["padding", "string (optional)", "Adds padding inside the container.", `"20px"`],
				["backgroundColor", "string (optional)", "Sets the background color of the container.", `"#ffffff"`],
				["border", "string (optional)", "Adds a border around the container.", `"1px solid #ccc"`],
				["alignItems", "string (optional)", "Aligns child elements vertically (e.g., center, flex-start, flex-end).", `"center"`],
				["justifyContent", "string (optional)", "Aligns child elements horizontally within the container (e.g., center, space-between).", `"space-between"`],
				["onclick", "function (optional)", "Event handler for click events.", `() => alert("HBox clicked!")`]
			],
			className: "border border-gray-300"
		}));
		this.append(new H1Element({ innerText: "4. Examples" }));
		this.append(new H2Element({ innerText: "Spacing Between Items" }));
		this.append(new CodeComponent({
			code: `new HBoxElement({
	gap: "15px",
	padding: "10px",
	backgroundColor: "#f8f9fa",
	children: [
	new DivElement({ text: "Item 1", padding: "5px", backgroundColor: "#e0e0e0" }),
	new DivElement({ text: "Item 2", padding: "5px", backgroundColor: "#c0c0c0" }),
	new DivElement({ text: "Item 3", padding: "5px", backgroundColor: "#a0a0a0" }),
	],
});`
		}));
		this.append(new H2Element({ innerText: "Aligning Items" }));
		this.append(new CodeComponent({
			code: `new HBoxElement({
	alignItems: "center",
	padding: "20px",
	children: [
	new DivElement({ text: "Aligned Item 1", padding: "10px" }),
	new DivElement({ text: "Aligned Item 2", padding: "10px" }),
	],
});`
		}));
		this.append(new H2Element({ innerText: "Horizontal Justification" }));
		this.append(new CodeComponent({
			code: `new HBoxElement({
	justifyContent: "space-between",
	width: "500px",
	children: [
	new DivElement({ text: "Left Item", padding: "10px" }),
	new DivElement({ text: "Right Item", padding: "10px" }),
	],
});`
		}));
		this.append(new H1Element({ innerText: "5. Default Behavior" }));
		this.append(new ParagraphElement({ innerText: "By default, the HBoxElement:" }));
		this.append(new ParagraphElement({ innerText: "- Aligns child elements horizontally using flex-direction: row." }));
		this.append(new ParagraphElement({ innerText: "- Has no spacing between elements unless specified with the gap property." }));
		this.append(new ParagraphElement({ innerText: "- Allows full customization through its properties." }));

		this.append(new H1Element({ innerText: "6. When to Use HBoxElement" }));
		this.append(new ParagraphElement({ innerText: "- When you need to align elements horizontally in a clean and structured way." }));
		this.append(new ParagraphElement({ innerText: "- When creating row-based layouts." }));
		this.append(new ParagraphElement({ innerText: "- When alignment and spacing between child elements need to be handled efficiently." }));

		this.append(new H1Element({ innerText: "Conclusion" }));
		this.append(new ParagraphElement({ innerText: "The HBoxElement simplifies the process of creating horizontal layouts by providing built-in alignment and spacing properties. Its property-driven design ensures that you can quickly customize the container without needing to manually write styles. It’s the perfect choice for creating organized and responsive row-based layouts in TypeComposer." }));

	}
}