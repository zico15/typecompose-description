import { CodeComponent } from "@/components/code/CodeComponent";
import { Component, H1Element, ParagraphElement, SpanElement } from "typecomposer";

export class GettingStartedView extends Component {
	constructor() {
		super({ className: "flex flex-col gap-2 w-full h-full p-10 overflow-auto" });
		this.append(new SpanElement({ text: "Typecomposer . Introduction" }));
		this.append(new H1Element({ text: "Getting Started", className: "text-[#fcfffa]" }));
		this.append(new ParagraphElement({ text: "To create a new project using TypeComposer, follow these steps:" }));
		this.append(new H1Element({ text: "Create a New Project", className: "text-[#fcfffa]" }));
		this.append(new ParagraphElement({ text: "Use the official TypeComposer project initializer:" }));
		this.append(new CodeComponent({ code: "npm create typecomposer@latest" }));
		this.append(new ParagraphElement({ text: "Follow the prompts:" }));
		this.append(new ParagraphElement({ text: "Select the template you want:" }));
		this.append(new ParagraphElement({ text: "Project or Library." }));
		this.append(new ParagraphElement({ text: "Choose the language:" }));
		this.append(new ParagraphElement({ text: "TypeScript, TypeScript + TailwindCSS, or JavaScript." }));
		this.append(new ParagraphElement({ text: "Enter the project name." }));
		this.append(new ParagraphElement({ text: "Decide whether to include a router (optional)." }));
		this.append(new ParagraphElement({ text: "Once the setup is complete, navigate to your project directory and install dependencies:" }));
		this.append(new CodeComponent({ code: "cd <project-name>\n		npm install" }));
		this.append(new ParagraphElement({ text: "Start the development server:" }));
		this.append(new CodeComponent({ code: "npm start" }));
		this.append(new H1Element({ text: "Example", className: "text-[#fcfffa]" }));
		this.append(new ParagraphElement({ text: "For instance, to create a new TypeScript project named typecomposer-project without a router:" }));
		this.append(new CodeComponent({ code: "npm create typecomposer@latest" }));
		this.append(new ParagraphElement({ text: "Prompts:" }));
		this.append(new CodeComponent({ code: "Template: Project\n		Language: TypeScript\n		Project Name: typecomposer-project\n		Router: no" }));
		this.append(new H1Element({ text: "Commands:", className: "text-[#fcfffa]" }));
		this.append(new CodeComponent({ code: "cd typecomposer-project\n		npm install\n		npm start" }));
		this.append(new ParagraphElement({ text: "Don’t worry if you’re new to TypeComposer! Start by creating components and building your application gradually. Dive into advanced features as you get more comfortable." }));
	}
}