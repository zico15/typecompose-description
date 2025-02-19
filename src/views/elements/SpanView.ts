import { CodeComponent } from "@/components/code/CodeComponent";
import { SpanElement, H1Element, ParagraphElement } from "typecomposer";
import { BaseView } from "../elements/Base";


export class SpanView extends BaseView {
	constructor() {
		super();
		this.append(new SpanElement({ innerText: "TypeComposer ∙ SpanElement" }));
		this.append(new H1Element({ innerText: "Overview" }));
		this.append(new ParagraphElement({ innerText: "The SpanElement is a core component in TypeComposer designed to facilitate inline text styling and behavior customization. It extends the standard HTML <span> element, allowing developers to define text, styles, and events declaratively through properties. This makes SpanElement ideal for dynamic UIs, where inline elements need to adapt to user interactions or data changes." }));

		this.append(new H1Element({ innerText: "1. Key Features" }));
		this.append(new ParagraphElement({ innerText: "The following are the core features of this component:" }));
		this.append(new ParagraphElement({ innerText: "- Text Content: Easily define inline text using the `text` property." }));
		this.append(new ParagraphElement({ innerText: "- Flexible Styling: Customize appearance with `className`, `style`, `color`, `fontSize`, and other properties." }));
		this.append(new ParagraphElement({ innerText: "- Interactive Events: Attach event handlers like `onclick`, `onhover`, and `ondblclick` to handle user interactions dynamically." }));
		this.append(new ParagraphElement({ innerText: "- Seamless Integration: Designed to work smoothly within layouts and can be nested inside other components for advanced use cases." }));
		this.append(new ParagraphElement({ innerText: "- Accessibility Support: Implements attributes like `aria-label` to enhance compatibility with screen readers and improve usability." }));


		this.append(new H1Element({ innerText: "2. Common Use Cases" }));
		this.append(new ParagraphElement({ innerText: "- Highlighting specific words or phrases within a block of text." }));
		this.append(new ParagraphElement({ innerText: "- Applying inline styles to small pieces of content." }));
		this.append(new ParagraphElement({ innerText: "- Adding tooltips, hover effects, or click events to text snippets." }));
		this.append(new ParagraphElement({ innerText: "- Dynamically updating inline text based on user actions or data." }));

		this.append(new H1Element({ innerText: "3. Detailed Example" }));
		this.append(new CodeComponent({
			code: `import { SpanElement } from "typecomposer";
		
class StyledSpan extends SpanElement {
	constructor() {
	super({
		text: "Click me!",
		className: "text-green-600 font-bold hover:text-green-800 transition-all cursor-pointer",
		style: { padding: "5px", borderRadius: "4px", border: "1px solid green" },
		onclick: () => alert("Span clicked!"),
	});
	}
}

export default StyledSpan;`
		}));

		this.append(new H1Element({ innerText: "4. Advanced Configuration" }));
		this.append(new ParagraphElement({ innerText: "The SpanElement supports additional properties to meet more complex requirements. Below are some advanced configurations:" }));
		this.append(new ParagraphElement({ innerText: "- **Dynamic Content:** Combine `text` with variables or state management tools to display dynamic data." }));
		this.append(new ParagraphElement({ innerText: "- **Custom Events:** Define your own event handlers using properties like `onmouseenter` or `onmouseleave`." }));
		this.append(new ParagraphElement({ innerText: "- **CSS Modules or Tailwind:** Use `className` to leverage external styling libraries like Tailwind or CSS modules for consistent design." }));
		this.append(new ParagraphElement({ innerText: "- **Accessibility Attributes:** Add attributes such as `role`, `tabindex`, and `aria-hidden` to improve the component's accessibility." }));

		this.append(new H1Element({ innerText: "5. Accessibility Best Practices" }));
		this.append(new ParagraphElement({ innerText: "To ensure that your SpanElement is accessible to all users, consider the following:" }));
		this.append(new ParagraphElement({ innerText: "- Use `aria-label` or `title` attributes to provide context for screen readers." }));
		this.append(new ParagraphElement({ innerText: "- Avoid using `onclick` without an accessible equivalent for keyboard or screen reader users." }));
		this.append(new ParagraphElement({ innerText: "- Test the component with assistive technologies to verify proper functionality." }));

		this.append(new H1Element({ innerText: "6. Full Example with Accessibility and Dynamic Behavior" }));
		this.append(new CodeComponent({
			code: `import { SpanElement } from "typecomposer";
		
class AccessibleDynamicSpan extends SpanElement {
	constructor() {
	super({
		text: "Hover or click me!",
		className: "text-purple-500 hover:underline focus:outline focus:ring-2 focus:ring-purple-300",
		style: { padding: "8px", display: "inline-block" },
		onclick: () => alert("You clicked the span!"),
		onhover: () => console.log("Hovered over span"),
		ariaLabel: "Interactive span example",
		tabindex: "0",
	});
	}
}

export default AccessibleDynamicSpan;`
		}));

		this.append(new H1Element({ innerText: "7. Conclusion" }));
		this.append(new ParagraphElement({ innerText: "The SpanElement in TypeComposer is a powerful tool for creating highly customizable inline text elements. Its property-driven design allows for seamless styling, event handling, and accessibility, making it an essential component for modern web development." }));

	}
}