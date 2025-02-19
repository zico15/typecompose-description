import { CodeComponent } from "@/components/code/CodeComponent";
import { SpanElement, H1Element, ParagraphElement, H2Element, TableElement } from "typecomposer";
import { BaseView } from "../elements/Base";


export class InputView extends BaseView {
	constructor() {
		super();
		this.append(new SpanElement({ innerText: "TypeComposer ∙ InputElement" }));
		this.append(new H1Element({ innerText: "Overview" }));
		this.append(new ParagraphElement({ innerText: "The InputElement is a fundamental component in TypeComposer, extending the native HTMLInputElement. It provides an enhanced interface for creating text inputs with additional customization options for styling, behavior, and interaction." }));

		this.append(new H1Element({ innerText: "1. Key Features" }));
		this.append(new ParagraphElement({ innerText: "- Inherits all native functionalities of HTMLInputElement." }));
		this.append(new ParagraphElement({ innerText: "- Supports a property-driven configuration for types, placeholders, and styles." }));
		this.append(new ParagraphElement({ innerText: "- Provides event handlers for user interactions, such as `oninput` and `onfocus`." }));
		this.append(new ParagraphElement({ innerText: "- Enables extensive styling, including padding, borders, and background customization." }));

		this.append(new H1Element({ innerText: "2. Basic Example" }));
		this.append(new CodeComponent({
			code: `import { InputElement } from "typecomposer";

class ExampleInput extends InputElement {
	constructor() {
	super({
		type: "text",
		placeholder: "Enter your name",
		width: "100%",
		padding: "10px",
		border: "1px solid #ccc",
		borderRadius: "5px",
		oninput: (event) => console.log("Input value:", event.target.value),
	});
	}
}

export default ExampleInput;`
		}));

		this.append(new H1Element({ innerText: "3. Properties" }));
		this.append(new TableElement({
			headers: ["Property", "Type", "Description", "Example"],
			rows: [
				["type", "string", "Defines the input type (e.g., 'text', 'password', 'email').", `"text"`],
				["placeholder", "string", "Specifies placeholder text displayed when input is empty.", `"Enter your email"`],
				["value", "string", "Sets the current value of the input.", `"John Doe"`],
				["width", "string | number", "Sets the input's width.", `"100%" or 300`],
				["padding", "string", "Applies padding inside the input field.", `"10px"`],
				["border", "string", "Defines the input's border style.", `"1px solid #000"`],
				["borderRadius", "string | number", "Defines the corner radius for rounded borders.", `"5px"`],
				["backgroundColor", "string", "Specifies the input's background color.", `"#f9f9f9"`],
				["color", "string", "Sets the text color of the input.", `"#333"`],
				["oninput", "function", "Event handler triggered when input value changes.", `(event) => console.log(event)`],
				["onfocus", "function", "Event handler triggered when input gains focus.", `() => console.log("Input focused")`],
				["onblur", "function", "Event handler triggered when input loses focus.", `() => console.log("Input blurred")`]
			],
			className: "border border-gray-300"
		}));

		this.append(new H1Element({ innerText: "4. Examples" }));
		this.append(new H2Element({ innerText: "Simple Text Input" }));
		this.append(new CodeComponent({
			code: `new InputElement({
	type: "text",
	placeholder: "Enter your name",
	padding: "10px",
	border: "1px solid #ccc",
	borderRadius: "5px",
});`
		}));

		this.append(new H2Element({ innerText: "Password Input with Custom Style" }));
		this.append(new CodeComponent({
			code: `new InputElement({
	type: "password",
	placeholder: "Enter your password",
	width: "300px",
	padding: "12px",
	border: "2px solid #007bff",
	borderRadius: "8px",
	backgroundColor: "#f0f8ff",
	onfocus: () => console.log("Password input focused"),
});`
		}));

		this.append(new H2Element({ innerText: "Email Input with Event Handling" }));
		this.append(new CodeComponent({
			code: `new InputElement({
	type: "email",
	placeholder: "Enter your email",
	padding: "10px",
	border: "1px solid #ccc",
	borderRadius: "5px",
	oninput: (event) => console.log("Email input value:", event.target.value),
});`
		}));

		this.append(new H1Element({ innerText: "5. Default Behavior" }));
		this.append(new ParagraphElement({ innerText: "By default, the InputElement:" }));
		this.append(new ParagraphElement({ innerText: "- Behaves like a native HTMLInputElement." }));
		this.append(new ParagraphElement({ innerText: "- Does not apply any predefined styles unless specified through properties." }));
		this.append(new ParagraphElement({ innerText: "- Supports all standard input types and behaviors." }));

		this.append(new H1Element({ innerText: "6. When to Use InputElement" }));
		this.append(new ParagraphElement({ innerText: "- For creating styled and interactive input fields." }));
		this.append(new ParagraphElement({ innerText: "- When you need event-driven inputs for real-time feedback." }));
		this.append(new ParagraphElement({ innerText: "- For implementing customizable form elements in your application." }));

		this.append(new H1Element({ innerText: "Conclusion" }));
		this.append(new ParagraphElement({ innerText: "The InputElement is a versatile and essential component for building forms and interactive user interfaces in TypeComposer. Its property-driven approach simplifies configuration and styling, while its compatibility with HTMLInputElement ensures reliable and familiar behavior. Use it to create polished, dynamic input fields tailored to your application's needs." }));

	}
}