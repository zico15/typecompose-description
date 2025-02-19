import { CodeComponent } from "@/components/code/CodeComponent";
import { SpanElement, H1Element, ParagraphElement, H2Element } from "typecomposer";
import { BaseView } from "../elements/Base";


export class HeadingView extends BaseView {
	constructor() {
		super();
		this.append(new SpanElement({ innerText: "TypeComposer ∙ Heading Elements (H1Element to H6Element)" }));
		this.append(new H1Element({ innerText: "Overview" }));
		this.append(new ParagraphElement({ innerText: "The Heading Elements (H1Element through H6Element) in TypeComposer are specialized components for creating semantic and styled headings. These components correspond to the standard HTML <h1> to <h6> tags, providing developers with a consistent API for managing text content, styles, and interactivity while adhering to best practices for web accessibility and semantics." }));
		this.append(new H1Element({ innerText: "1. Key Features" }));
		this.append(new ParagraphElement({ innerText: "These are the main features of this component:" }));
		this.append(new ParagraphElement({ innerText: "- Semantic Tags: Each element maps directly to its corresponding HTML heading tag, ensuring proper document structure." }));
		this.append(new ParagraphElement({ innerText: "- Customizable Styling: Supports classes, inline styles, and other visual properties to match design requirements." }));
		this.append(new ParagraphElement({ innerText: "- Dynamic Content: Easily set or update the heading text using the `text` property." }));
		this.append(new ParagraphElement({ innerText: "- Event Handling: Allows interactions through event listeners like `onclick` and `onhover`." }));
		this.append(new ParagraphElement({ innerText: "- Responsive Design: Works well with external CSS frameworks like Tailwind for adaptive typography." }));
		this.append(new H1Element({ innerText: "2. Use Cases" }));
		this.append(new ParagraphElement({ innerText: "- Building semantic, accessible headings for websites or applications." }));
		this.append(new ParagraphElement({ innerText: "- Styling headings dynamically based on application state or user interactions." }));
		this.append(new ParagraphElement({ innerText: "- Creating responsive typography with adjustable styles for different viewports." }));

		this.append(new H1Element({ innerText: "3. Basic Examples" }));
		this.append(new H2Element({ innerText: "3.1 H1Element Example" }));
		this.append(new CodeComponent({
			code: `import { H1Element } from "typecomposer";
		
class ExampleH1 extends H1Element {
	constructor() {
	super({
		text: "Welcome to TypeComposer!",
		className: "text-4xl font-bold text-gray-800",
	});
	}
}

export default ExampleH1;`
		}));

		this.append(new H2Element({ innerText: "3.2 H2Element Example" }));
		this.append(new CodeComponent({
			code: `import { H2Element } from "typecomposer";
		
class ExampleH2 extends H2Element {
	constructor() {
	super({
		text: "Explore the Components",
		className: "text-3xl font-semibold text-gray-600",
	});
	}
}

export default ExampleH2;`
		}));

		this.append(new H2Element({ innerText: "3.3 H3Element to H6Element Example" }));
		this.append(new CodeComponent({
			code: `import { H3Element, H4Element, H5Element, H6Element } from "typecomposer";
		
class ExampleHeadings {
	constructor() {
		super();
		this.append(
		new H3Element({ text: "Section Title", className: "text-2xl text-blue-600" }),
		new H4Element({ text: "Subsection Title", className: "text-xl text-blue-500" }),
		new H5Element({ text: "Smaller Heading", className: "text-lg text-blue-400" }),
		new H6Element({ text: "Smallest Heading", className: "text-md text-blue-300" }),
		);
	}
}

export default ExampleHeadings;`
		}));

		this.append(new H1Element({ innerText: "4. Advanced Features" }));
		this.append(new ParagraphElement({ innerText: "The Heading Elements support additional properties to provide more flexibility and functionality:" }));
		this.append(new ParagraphElement({ innerText: "- **Dynamic Styles:** Use `style` property for inline styles or `className` for CSS classes." }));
		this.append(new ParagraphElement({ innerText: "- **Accessibility Features:** Add `aria-label`, `tabindex`, or `role` attributes for better accessibility." }));
		this.append(new ParagraphElement({ innerText: "- **Nested Layouts:** Easily integrate with other components to create complex structures, such as a header navigation." }));
		this.append(new ParagraphElement({ innerText: "- **Event Handlers:** Implement `onclick`, `onhover`, or custom events for interactive behavior." }));

		this.append(new H1Element({ innerText: "5. Accessibility Best Practices" }));
		this.append(new ParagraphElement({ innerText: "- Ensure heading levels are used hierarchically (e.g., <h1> followed by <h2>, not <h3>)." }));
		this.append(new ParagraphElement({ innerText: "- Use clear and descriptive text content for better SEO and user experience." }));
		this.append(new ParagraphElement({ innerText: "- Add `aria-label` attributes where additional context is needed for screen readers." }));

		this.append(new H1Element({ innerText: "6. Conclusion" }));
		this.append(new ParagraphElement({ innerText: "The Heading Elements in TypeComposer provide a robust and customizable solution for creating structured and accessible headings. By leveraging their semantic nature and property-driven configuration, developers can efficiently build visually appealing and interactive headings for their applications." }));

	}
}