import { CodeComponent } from "@/components/code/CodeComponent";
import { SpanElement, H1Element, ParagraphElement } from "typecomposer";
import { BaseView } from "../elements/Base";


export class ComponentView extends BaseView {
	constructor() {
		super();
		this.append(new SpanElement({ innerText: "TypeComposer ∙ Component" }));
		this.append(new H1Element({ innerText: "Overview" }));
		this.append(new ParagraphElement({ innerText: "The TypeComposer framework offers two main approaches for creating components, depending on your needs:" }));
		this.append(new H1Element({ innerText: "1. Extending the Component class" }));
		this.append(new ParagraphElement({ innerText: "When a component is created by extending the Component class, it generates a custom HTML tag whose name corresponds to the class name converted to kebab-case. This approach is ideal for creating entirely new and semantically unique components." }));
		this.append(new H1Element({ innerText: "Example:" }));
		this.append(new CodeComponent({
			code: `import { Component } from 'typecomposer';
		
class AppPage extends Component {
	constructor() {
	super({
		text: 'Welcome to the page!',
		padding: '20px',
	});
	}
}

export default AppPage;`
		}));
		this.append(new ParagraphElement({ innerText: "Generated HTML Tag:" }));
		this.append(new CodeComponent({
			language: "html",
			code: `<app-page>
	Welcome to the page!
</app-page>`
		}));
		this.append(new H1Element({ innerText: "Features:" }));
		this.append(new ParagraphElement({ innerText: "The class name is automatically converted to kebab-case to generate the custom tag name." }));
		this.append(new ParagraphElement({ innerText: "Full flexibility to define the component's appearance and behavior." }));
		this.append(new ParagraphElement({ innerText: "Ideal for creating application-specific, custom components." }));
		this.append(new H1Element({ innerText: "2. Extending Base Components" }));
		this.append(new ParagraphElement({ innerText: "In this approach, a component is created by extending a base component (like DivElement, ButtonElement, etc.). The HTML tag and behavior of the base component remain unchanged, but you can add specific properties and logic." }));
		this.append(new H1Element({ innerText: "Example:" }));
		this.append(new CodeComponent({
			code: `import { DivElement } from 'typecomposer';
		
class AppPage extends DivElement {
	constructor() {
	super({
		text: 'This is a custom Div.',
		padding: '10px',
		backgroundColor: '#f0f0f0',
	});
	}
}

export default AppPage;`
		}));
		this.append(new ParagraphElement({ innerText: "Generated HTML Tag:" }));
		this.append(new CodeComponent({
			language: "html",
			code: `<div style='padding: 10px; background-color: #f0f0f0;'>\n	This is a custom Div.\n</div>`
		}));
		this.append(new H1Element({ innerText: "Features:" }));
		this.append(new ParagraphElement({ innerText: "The generated HTML tag matches the base component used." }));
		this.append(new ParagraphElement({ innerText: "Perfect for creating variations or enhancements of existing HTML elements." }));
		this.append(new ParagraphElement({ innerText: "Inherits the standard functionality of the base component, reducing the need for custom logic." }));
		this.append(new H1Element({ innerText: "Conclusion" }));
		this.append(new ParagraphElement({ innerText: "The choice between the two approaches depends on your component's requirements." }));
		this.append(new ParagraphElement({ innerText: "Use Component to create new, custom HTML elements." }));
		this.append(new ParagraphElement({ innerText: "Use base components when you need lightweight extensions or to reuse existing behavior." }));
		this.append(new ParagraphElement({ innerText: "Both options preserve the simplicity and consistency of TypeComposer, making interface development and maintenance easier." }));

	}
}