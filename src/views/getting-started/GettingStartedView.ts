import { CodeComponent } from "@/components/code/CodeComponent";
import { SpanElement, H1Element, ParagraphElement } from "typecomposer";
import { BaseView } from "../elements/Base";


export class GettingStartedView extends BaseView {
	constructor() {
		super();
		this.append(new SpanElement({ innerText: "Typecomposer . Getting Started" }));
		this.append(new H1Element({ innerText: "Getting Started" }));
		this.append(new ParagraphElement({ innerText: "To create a new project using TypeComposer, follow these steps:" }));
		this.append(new H1Element({ innerText: "Create a New Project" }));
		this.append(new ParagraphElement({ innerText: "Use the official TypeComposer project initializer:" }));
		this.append(new CodeComponent({ code: "npm create typecomposer@latest" }));
		this.append(new ParagraphElement({ innerText: "Follow the prompts:" }));
		this.append(new ParagraphElement({ innerText: "Select the template you want:" }));
		this.append(new ParagraphElement({ innerText: "Project or Library." }));
		this.append(new ParagraphElement({ innerText: "Choose the language:" }));
		this.append(new ParagraphElement({ innerText: "TypeScript, TypeScript + TailwindCSS, or JavaScript." }));
		this.append(new ParagraphElement({ innerText: "Enter the project name." }));
		this.append(new ParagraphElement({ innerText: "Decide whether to include a router (optional)." }));
		this.append(new ParagraphElement({ innerText: "Once the setup is complete, navigate to your project directory and install dependencies:" }));
		this.append(new CodeComponent({ code: "cd <project-name>\n    npm install" }));
		this.append(new ParagraphElement({ innerText: "Start the development server:" }));
		this.append(new CodeComponent({ code: "npm start" }));
		this.append(new H1Element({ innerText: "Example" }));
		this.append(new ParagraphElement({ innerText: "For instance, to create a new TypeScript project named typecomposer-project without a router:" }));
		this.append(new CodeComponent({ code: "npm create typecomposer@latest" }));
		this.append(new ParagraphElement({ innerText: "Prompts:" }));
		this.append(new CodeComponent({ code: "Template: Project\nLanguage: TypeScript\nProject Name: typecomposer-project\nRouter: no" }));
		this.append(new H1Element({ innerText: "Commands:" }));
		this.append(new CodeComponent({ code: "cd typecomposer-project\n    npm install\n    npm start" }));
		this.append(new ParagraphElement({ innerText: "Don’t worry if you’re new to TypeComposer! Start by creating components and building your application gradually. Dive into advanced features as you get more comfortable." }));
	}
}