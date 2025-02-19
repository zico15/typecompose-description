import { CodeComponent } from "@/components/code/CodeComponent";
import { SpanElement, H1Element, ParagraphElement, H2Element, TableElement } from "typecomposer";
import { BaseView } from "../elements/Base";


export class LabelView extends BaseView {
	constructor() {
		super();
		this.append(new SpanElement({ innerText: "TypeComposer ∙ LabelElement" }));
		this.append(new H1Element({ innerText: "Overview" }));
		this.append(new ParagraphElement({ innerText: "The LabelElement is a versatile component in TypeComposer that extends the functionality of the native HTMLLabelElement. It simplifies the association of labels with form controls while offering customization options for styling and interaction." }));

		this.append(new H1Element({ innerText: "1. Key Features" }));
		this.append(new ParagraphElement({ innerText: "- Inherits all native functionalities of HTMLLabelElement." }));
		this.append(new ParagraphElement({ innerText: "- Supports property-driven customization for text, styles, and associations with form elements." }));
		this.append(new ParagraphElement({ innerText: "- Provides event handlers for user interactions, such as `onclick`." }));
		this.append(new ParagraphElement({ innerText: "- Enables flexible styling for creating visually appealing labels." }));

		this.append(new H1Element({ innerText: "2. Basic Example" }));
		this.append(new CodeComponent({
			code: `import { LabelElement, InputElement } from "typecomposer";
		
class ExampleLabel extends LabelElement {
	constructor() {
	super({
		text: "Name:",
		for: "nameInput",
		fontSize: "16px",
		color: "#333",
	});
	}
}

class ExampleInput extends InputElement {
	constructor() {
	super({
		id: "nameInput",
		type: "text",
		placeholder: "Enter your name",
	});
	}
}

export default { ExampleLabel, ExampleInput };`
		}));

		this.append(new H1Element({ innerText: "3. Properties" }));
		this.append(new TableElement({
			headers: ["Property", "Type", "Description", "Example"],
			rows: [
				["innerText", "string", "Defines the text displayed inside the label.", `"Name:"`],
				["for", "string", "Associates the label with a form control using its ID.", `"inputId"`],
				["fontSize", "string | number", "Sets the font size of the label.", `"14px" or 16`],
				["color", "string", "Defines the text color of the label.", `"#333"`],
				["padding", "string", "Sets padding around the label text.", `"5px"`],
				["margin", "string", "Sets margin around the label.", `"10px"`],
				["onclick", "function", "Event handler triggered when the label is clicked.", `() => alert("Label clicked!")`]
			],
			className: "border border-gray-300"
		}));

		this.append(new H1Element({ innerText: "4. Examples" }));
		this.append(new H2Element({ innerText: "Basic Label Associated with Input" }));
		this.append(new CodeComponent({
			code: `new LabelElement({
	text: "Email:",
	for: "emailInput",
	fontSize: "14px",
	color: "#555",
});

new InputElement({
	id: "emailInput",
	type: "email",
	placeholder: "Enter your email",
});`
		}));

		this.append(new H2Element({ innerText: "Styled Label with Padding" }));
		this.append(new CodeComponent({
			code: `new LabelElement({
	text: "Password:",
	for: "passwordInput",
	padding: "5px 10px",
	fontSize: "16px",
	color: "#000",
});

new InputElement({
	id: "passwordInput",
	type: "password",
	placeholder: "Enter your password",
});`
		}));

		this.append(new H2Element({ innerText: "Interactive Label with Click Event" }));
		this.append(new CodeComponent({
			code: `new LabelElement({
	text: "Click Me:",
	for: "interactiveInput",
	fontSize: "16px",
	color: "#007bff",
	onclick: () => alert("Label clicked!"),
});

new InputElement({
	id: "interactiveInput",
	type: "text",
	placeholder: "This input is linked to the label",
});`
		}));

		this.append(new H1Element({ innerText: "5. Default Behavior" }));
		this.append(new ParagraphElement({ innerText: "By default, the LabelElement:" }));
		this.append(new ParagraphElement({ innerText: "- Inherits the native behavior of HTMLLabelElement." }));
		this.append(new ParagraphElement({ innerText: "- Does not apply any predefined styles unless specified through properties." }));
		this.append(new ParagraphElement({ innerText: "- Allows association with form elements using the `for` property." }));

		this.append(new H1Element({ innerText: "6. When to Use LabelElement" }));
		this.append(new ParagraphElement({ innerText: "- For associating labels with form controls to enhance accessibility." }));
		this.append(new ParagraphElement({ innerText: "- When creating styled and interactive labels for forms." }));
		this.append(new ParagraphElement({ innerText: "- To handle user interactions, such as clicks, on labels." }));

		this.append(new H1Element({ innerText: "Conclusion" }));
		this.append(new ParagraphElement({ innerText: "The LabelElement is an essential component for creating accessible and styled form labels in TypeComposer. Its property-driven configuration simplifies customization and ensures seamless integration with other form elements, making it a vital tool for building user-friendly forms." }));

	}
}