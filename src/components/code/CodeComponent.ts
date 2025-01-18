import { Component } from "typecomposer";
import markdownit from 'markdown-it'
import markdownItHighlight from 'markdown-it-highlightjs';


export class CodeComponent extends Component {

	constructor(public props: {
		language?: "typescript" | "javascript" | "bash",
		code: string
	}) {
		super();
		this.transformCode(props.language || "typescript", props.code);
	}

	transformCode(language: "typescript" | "javascript" | "bash", code: string) {
		const md = new markdownit().use(markdownItHighlight, { auto: true, code: true, language });
		const codeSnippet = `\`\`\`${language}
		${code}
		`;
		this.innerHTML = md.render(codeSnippet);
	}
}