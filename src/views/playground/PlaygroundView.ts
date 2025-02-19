import { loadSandpackClient } from "@codesandbox/sandpack-client";
import { Component, IFrameElement } from "typecomposer";

const files = {
	"/tsconfig.json": {
		code: `
		{
		  "compilerOptions": {
			"target": "ESNext",
			"useDefineForClassFields": true,
			"module": "ESNext",
			"lib": ["ES2021", "DOM", "DOM.Iterable"],
			"skipLibCheck": true,
			"moduleResolution": "node",
			"allowImportingTsExtensions": true,
			"resolveJsonModule": true,
			"isolatedModules": true,
			"noEmit": true,
			"allowSyntheticDefaultImports": true,
			"strict": true,
			"noUnusedLocals": true,
			"noUnusedParameters": true,
			"noFallthroughCasesInSwitch": true,
			"experimentalDecorators": true,
			"emitDecoratorMetadata": true,
			"baseUrl": ".",
			"paths": {
			  "@/*": ["src/*"]
			},
			"types": ["vite/client", "typecomposer-plugin/client", "typecomposer/typings"]
		  },
		  "include": ["src"]
		}
	  `,
	},
	"/vite.config.js": {
		code: `
		import { defineConfig } from "vite";
		import typeComposerPlugin from "typecomposer-plugin";
		import path from "path";
  
		export default defineConfig({
		  plugins: [typeComposerPlugin()],
		  resolve: {
			alias: {
			  "@": path.resolve(__dirname, "./src"),
			},
		  },
		  css: {
			preprocessorOptions: {
			  scss: {
				api: "modern-compiler",
			  },
			},
		  },
		});
	  `,
	},
	"/package.json": {
		code: `
		{
		  "name": "typecomposer-doc",
		  "private": true,
		  "version": "0.0.0",
		  "type": "module",
		  "main": "/index.html",
		  "scripts": {
		   	"dev": "vite",
			"start": "vite",
			"build": "vite build",
			"preview": "vite"
		  },
		  "dependencies": {
			"@codesandbox/sandpack-client": "^2.19.8",
			"markdown-it": "^14.1.0",
			"markdown-it-highlightjs": "^4.2.0",
			"typecomposer": "^0.0.98"
		  },
		  "devDependencies": {
			"@types/markdown-it": "^14.1.2",
			"@types/node": "^22.5.5",
			"autoprefixer": "^10.4.20",
			"csstype": "^3.1.3",
			"sass": "^1.79.4",
			"tailwindcss": "^3.4.17",
			"typecomposer-plugin": "^0.0.35",
			"typescript": "^5.6.2",
			"vite": "^5.4.8"
		  }
		}
	  `,
	},
	"/index.html": {
		code: `
		<!DOCTYPE html>
<html lang="en" data-theme="light">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/typecomposer.svg" />
    <link rel="stylesheet" href="node_modules/typecomposer/styles/style.scss" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TypeCompose</title>
  </head>
  <body>
  
  <script>
  alert("Hello World");
 document.body.innerHTML = "<div id="app" style="width: 100vw; height: 100vh; background-color: red;" 
  </script>
  </body>
</html>
	  `,
	},
	"src/main.js": {
		code: `
		document.body.innerHTML = "<div id="app" style="width: 100vw; height: 100vh; background-color: red;"
  ></div>";


	  `,
	},
	"/src/AppPage.ts": {
		code: `
		import { BorderPaneElement } from "typecomposer";
		
		export class AppPage extends BorderPaneElement {
		
		  constructor() {
			super({width: "100vw", height: "100vh",  backgroundColor: "red"});
			
		  }
		}
		
	  `,
	},
};


export class PlaygroundView extends Component {


	constructor() {
		super({ className: "flex flex-col gap-2 overflow-hidden w-full h-full" });
		////	this.innerHTML = `<div style="width: 100%; height: 500px;">
		////	<iframe 
		////	  src="https://codesandbox.io/p/github/zico15/typecompose-description/main?import=true&embed=1"
		////	  style="width:100%; height:100%; border:0; border-radius: 4px; overflow:hidden;"
		////	  title="CodeSandbox"
		////	  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
		////	  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
		////	></iframe>
		////  </div>`
		//// @ts-ignore
		// src: "https://codesandbox.io/s/github/zico15/typecompose-description/main?autoresize=1&fontsize=14&hidenavigation=1&theme=dark", title: "CodeSandbox", allow: "accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking", sandbox: "allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts" }));
		// @ts-ignore

	}

	async onInit() {
		const iframe = this.appendChild(new IFrameElement({ className: "w-full h-full" })) as any;

		const client = await loadSandpackClient(iframe, {
			files: {}
		}, {
			clearConsoleOnFirstCompile: true,

			bundlerURL: "https://codesandbox.io/p/github/zico15/typecompose-description/main", // Substitua pelo ID do seu projeto no CodeSandbox
		});


	}
} 