import { CodeComponent } from "@/components/code/CodeComponent";
import { SpanElement, H1Element, ParagraphElement, H2Element, TableElement } from "typecomposer";
import { BaseView } from "../elements/Base";


export class ButtonView extends BaseView {
	constructor() {
		super();
		this.append(new SpanElement({ innerText: "TypeComposer ∙ ButtonElement" }));
		this.append(new H1Element({ innerText: "Overview" }));
		this.append(new ParagraphElement({ innerText: "The ButtonElement is a core component in TypeComposer, extending the native HTMLButtonElement. It simplifies the creation of interactive buttons by combining native button functionalities with a property-driven configuration system for styling and behavior." }));

		this.append(new H1Element({ innerText: "1. Key Features" }));
		this.append(new ParagraphElement({ innerText: "- Inherits all native functionalities of HTMLButtonElement." }));
		this.append(new ParagraphElement({ innerText: "- Provides a property-driven API for styling, text, and event handling." }));
		this.append(new ParagraphElement({ innerText: "- Supports custom click behavior through the `onclick` property." }));
		this.append(new ParagraphElement({ innerText: "- Allows extensive styling, including colors, padding, borders, and hover effects." }));

		this.append(new H1Element({ innerText: "2. Basic Example" }));
		this.append(new CodeComponent({
			code: `import { ButtonElement } from "typecomposer";
		  
class ExampleButton extends ButtonElement {
constructor() {
	super({
	text: "Click Me",
	padding: "10px 20px",
	backgroundColor: "#007bff",
	color: "#fff",
	border: "none",
	borderRadius: "5px",
	onclick: () => alert("Button clicked!"),
	});
}
}

export default ExampleButton;`
		}));


		this.append(new H1Element({ innerText: "3. Properties" }));
		this.append(new TableElement({
			headers: ["Property", "Type", "Description", "Example"],
			rows: [
				["innerText", "string", "Defines the text displayed inside the button.", `"Submit"`],
				["type", "string", "Specifies the button type (e.g., 'button', 'submit', 'reset').", `"submit"`],
				["padding", "string", "Sets the internal spacing inside the button.", `"10px 15px"`],
				["backgroundColor", "string", "Defines the background color of the button.", `"#007bff"`],
				["color", "string", "Sets the text color.", `"#fff"`],
				["border", "string", "Defines the border style for the button.", `"1px solid #ccc"`],
				["borderRadius", "string | number", "Sets the radius for rounded corners.", `"5px"`],
				["hoverStyles", "object", "Specifies styles applied when the button is hovered.", `{ backgroundColor: "#0056b3" }`],
				["onclick", "function", "Event handler for click events.", `() => alert("Button clicked!")`]
			],
			className: "border border-gray-300"
		}));

		this.append(new H1Element({ innerText: "4. Examples" }));
		this.append(new H2Element({ innerText: "Primary Button" }));
		this.append(new CodeComponent({
			code: `new ButtonElement({
	text: "Primary",
	padding: "10px 20px",
	backgroundColor: "#007bff",
	color: "#fff",
	border: "none",
	borderRadius: "5px",
	onclick: () => console.log("Primary button clicked"),
});`
		}));

		this.append(new H2Element({ innerText: "Secondary Button" }));
		this.append(new CodeComponent({
			code: `new ButtonElement({
	text: "Secondary",
	padding: "8px 16px",
	backgroundColor: "#6c757d",
	color: "#fff",
	border: "none",
	borderRadius: "5px",
	onclick: () => console.log("Secondary button clicked"),
});`
		}));

		this.append(new H2Element({ innerText: "Button with Hover Effect" }));
		this.append(new CodeComponent({
			code: `new ButtonElement({
	text: "Hover Me",
	padding: "10px 20px",
	backgroundColor: "#28a745",
	color: "#fff",
	border: "none",
	borderRadius: "5px",
	hoverStyles: { backgroundColor: "#218838" },
	onclick: () => console.log("Hover button clicked"),
});`
		}));

		this.append(new H1Element({ innerText: "5. Default Behavior" }));
		this.append(new ParagraphElement({ innerText: "By default, the ButtonElement:" }));
		this.append(new ParagraphElement({ innerText: "- Inherits the native behavior of HTMLButtonElement." }));
		this.append(new ParagraphElement({ innerText: "- Does not have any predefined styles, making it fully customizable." }));
		this.append(new ParagraphElement({ innerText: "- Can trigger click events using the `onclick` property." }));

		this.append(new H1Element({ innerText: "6. When to Use ButtonElement" }));
		this.append(new ParagraphElement({ innerText: "- When you need a fully customizable button for user interactions." }));
		this.append(new ParagraphElement({ innerText: "- For creating styled buttons with minimal configuration." }));
		this.append(new ParagraphElement({ innerText: "- When you want to add hover or click behaviors easily." }));

		this.append(new H1Element({ innerText: "Conclusion" }));
		this.append(new ParagraphElement({ innerText: "The ButtonElement is an essential component for creating interactive buttons in TypeComposer. Its property-driven design makes it easy to configure and style, while its compatibility with native HTMLButtonElement ensures robust functionality. Use it to add polished and responsive buttons to your application." }));
	}
}