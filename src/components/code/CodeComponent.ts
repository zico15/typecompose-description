import { Component } from "typecomposer";
import markdownit from 'markdown-it'
import markdownItHighlight from 'markdown-it-highlightjs';

type CodeLanguage = "typescript" | "javascript" | "bash" | "html";

export class CodeComponent extends Component {

	constructor(public props: {
		language?: CodeLanguage
		code: string
	}) {
		super();
		this.transformCode(props.language || "typescript", props.code);
	}

	transformCode(language: CodeLanguage, code: string) {
		const md = new markdownit().use(markdownItHighlight, { auto: true, code: true, language });
		const codeSnippet = `\`\`\`${language}
		\n${code.trim()}\n\n`;
		this.innerHTML = md.render(codeSnippet);
	}
}