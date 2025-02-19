import { CodeComponent } from "@/components/code/CodeComponent";
import { SpanElement, H1Element, ParagraphElement, H2Element, TableElement } from "typecomposer";
import { BaseView } from "../elements/Base";


export class VboxView extends BaseView {
	constructor() {
		super();
		this.append(new SpanElement({ innerText: "TypeComposer ∙ VBoxElement" }));
		this.append(new H1Element({ innerText: "Overview" }));
		this.append(new ParagraphElement({ innerText: "The VBoxElement is a container component in TypeComposer designed to stack its child elements vertically. It comes with built-in styles for vertical alignment and is highly customizable through its properties." }));

		this.append(new H1Element({ innerText: "1. Key Features" }));
		this.append(new ParagraphElement({ innerText: "- Automatically aligns child elements vertically using flex-direction: column." }));
		this.append(new ParagraphElement({ innerText: "- Supports customization such as spacing, alignment, and events directly through properties." }));
		this.append(new ParagraphElement({ innerText: "- Simplifies creation of column-based layouts in a structured way." }));

		this.append(new H1Element({ innerText: "2. Basic Example" }));
		this.append(new CodeComponent({
			code: `import { VBoxElement, DivElement } from "typecomposer";
		
class ExampleVBox extends VBoxElement {
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

export default ExampleVBox;`
		}));

		this.append(new H1Element({ innerText: "3. Properties" }));
		this.append(new TableElement({
			headers: ["Property", "Type", "Description", "Example"],
			rows: [
				["children", "Element[]", "An array of child components to be rendered inside the VBoxElement.", `[new DivElement(...), new ButtonElement(...)]`],
				["gap", "string (optional)", "Specifies spacing between child elements.", `"10px"`],
				["padding", "string (optional)", "Adds padding inside the container.", `"20px"`],
				["backgroundColor", "string (optional)", "Sets the background color of the container.", `"#ffffff"`],
				["border", "string (optional)", "Adds a border around the container.", `"1px solid #ccc"`],
				["alignItems", "string (optional)", "Aligns child elements horizontally (e.g., center, flex-start, flex-end).", `"center"`],
				["justifyContent", "string (optional)", "Aligns child elements vertically within the container (e.g., center, space-between).", `"center"`],
				["onclick", "function (optional)", "Event handler for click events.", `() => alert("VBox clicked!")`]
			],
			className: "border border-gray-300"
		}));

		this.append(new H1Element({ innerText: "4. Examples" }));
		this.append(new H2Element({ innerText: "Spacing Between Items" }));
		this.append(new CodeComponent({
			code: `new VBoxElement({
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
			code: `new VBoxElement({
	alignItems: "center",
	padding: "20px",
	children: [
	new DivElement({ text: "Aligned Item 1", padding: "10px" }),
	new DivElement({ text: "Aligned Item 2", padding: "10px" }),
	],
});`
		}));

		this.append(new H2Element({ innerText: "Vertical Justification" }));
		this.append(new CodeComponent({
			code: `new VBoxElement({
	justifyContent: "space-between",
	height: "200px",
	children: [
	new DivElement({ text: "Top Item", padding: "10px" }),
	new DivElement({ text: "Bottom Item", padding: "10px" }),
	],
});`
		}));

		this.append(new H1Element({ innerText: "5. Default Behavior" }));
		this.append(new ParagraphElement({ innerText: "By default, the VBoxElement:" }));
		this.append(new ParagraphElement({ innerText: "- Aligns child elements vertically using flex-direction: column." }));
		this.append(new ParagraphElement({ innerText: "- Has no spacing between elements unless specified with the gap property." }));
		this.append(new ParagraphElement({ innerText: "- Allows full customization through its properties." }));

		this.append(new H1Element({ innerText: "6. When to Use VBoxElement" }));
		this.append(new ParagraphElement({ innerText: "- When you need to stack elements vertically in a clean and structured way." }));
		this.append(new ParagraphElement({ innerText: "- When creating column-based layouts." }));
		this.append(new ParagraphElement({ innerText: "- When alignment and spacing between child elements need to be handled efficiently." }));

		this.append(new H1Element({ innerText: "Conclusion" }));
		this.append(new ParagraphElement({ innerText: "The VBoxElement simplifies the process of creating vertical layouts by providing built-in alignment and spacing properties. Its property-driven design ensures that you can quickly customize the container without needing to manually write styles. It’s the perfect choice for creating organized and responsive column-based layouts in TypeComposer." }));

	}
}