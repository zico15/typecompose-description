import { CodeComponent } from "@/components/code/CodeComponent";
import { SpanElement, H1Element, ParagraphElement, H2Element, TableElement, DivElement, ImageElement } from "typecomposer";
import { BaseView } from "../elements/Base";


export class BorderPaneView extends BaseView {
	constructor() {
		super();
		this.append(new SpanElement({ innerText: "TypeComposer ∙ BorderPaneElement" }));
		this.append(new H1Element({ innerText: "Overview" }));
		this.append(new ParagraphElement({ innerText: "The BorderPaneElement is a layout component in TypeComposer that divides the screen into distinct regions: top, left, right, bottom, and center. It comes with two layout variants ('primary' and 'secondary'), which define the arrangement of these regions." }));

		this.append(new H1Element({ innerText: "1. Key Features" }));
		this.append(new ParagraphElement({ innerText: "- Provides a flexible, structured layout divided into five regions: top, left, right, bottom, and center." }));
		this.append(new ParagraphElement({ innerText: "- Supports two layout variants: 'primary' (default) and 'secondary'." }));
		this.append(new ParagraphElement({ innerText: "- Easily customizable through properties for styling and behavior." }));

		this.append(new H1Element({ innerText: "2. Variants" }));
		this.append(new H2Element({ innerText: "Primary (default)" }));
		this.append(new ParagraphElement({ innerText: "The 'primary' variant arranges the regions in a typical top-bottom-left-right-center order, where the top, left, and right regions surround the central content." }));

		this.append(new H2Element({ innerText: "Secondary" }));
		this.append(new ParagraphElement({ innerText: "The 'secondary' variant places the left and right regions next to the center, while the top and bottom regions remain above and below, respectively." }));
		this.append(new DivElement({
			className: "flex justify-between",
			gap: "10px",
			children: [
				new ImageElement({ src: "/images/border-pane-primary.png", alt: "Primary Layout", className: "w-1/2" }),
				new ImageElement({ src: "/images/border-pane-secondary.png", alt: "Secondary Layout", className: "w-1/2" })
			]
		}));
		this.append(new H1Element({ innerText: "3. Basic Example" }));
		this.append(new CodeComponent({
			code: `import { BorderPaneElement } from "typecomposer";
		
export class AppPage extends BorderPaneElement {
	constructor() {
	super({
		variant: "primary", // Use 'secondary' for an alternative layout
		className: "w-screen h-screen overflow-hidden",
	});
	this.top = new NavBar();
	this.left = new Sidebar();
	this.center = new RouteView({ className: "overflow-hidden w-full h-full" });
	}
}`
		}));

		this.append(new H1Element({ innerText: "4. Properties" }));
		this.append(new TableElement({
			headers: ["Property", "Type", "Description", "Example"],
			rows: [
				["variant", `"primary" | "secondary"`, "Defines the layout variant. Defaults to 'primary'.", `"secondary"`],
				["className", "string (optional)", "CSS classes applied to the BorderPaneElement for styling.", `"w-screen h-screen overflow-hidden"`],
				["top", "Element (optional)", "The element to be displayed in the top region.", `new NavBar()`],
				["left", "Element (optional)", "The element to be displayed in the left region.", `new Sidebar()`],
				["right", "Element (optional)", "The element to be displayed in the right region.", `new WidgetPanel()`],
				["bottom", "Element (optional)", "The element to be displayed in the bottom region.", `new Footer()`],
				["center", "Element (optional)", "The element to be displayed in the center region.", `new RouteView()`]
			],
			className: "border border-gray-300"
		}));

		this.append(new H1Element({ innerText: "5. Examples" }));
		this.append(new H2Element({ innerText: "Primary Layout Example" }));
		this.append(new CodeComponent({
			code: `new BorderPaneElement({
	variant: "primary",
	className: "w-screen h-screen",
	top: new NavBar(),
	left: new Sidebar(),
	center: new RouteView({ className: "w-full h-full" }),
	right: new WidgetPanel(),
	bottom: new Footer(),
});`
		}));

		this.append(new H2Element({ innerText: "Secondary Layout Example" }));
		this.append(new CodeComponent({
			code: `new BorderPaneElement({
	variant: "secondary",
	className: "w-screen h-screen",
	top: new NavBar(),
	left: new Sidebar(),
	center: new RouteView({ className: "w-full h-full" }),
	right: new WidgetPanel(),
	bottom: new Footer(),
});`
		}));

		this.append(new H1Element({ innerText: "6. Default Behavior" }));
		this.append(new ParagraphElement({ innerText: "By default, the BorderPaneElement uses the 'primary' variant and arranges its regions accordingly." }));
		this.append(new ParagraphElement({ innerText: "If no regions (e.g., top, left, right, bottom, center) are provided, the corresponding area will simply remain empty." }));

		this.append(new H1Element({ innerText: "7. When to Use BorderPaneElement" }));
		this.append(new ParagraphElement({ innerText: "- When you need a structured layout with defined regions for top, left, right, bottom, and center areas." }));
		this.append(new ParagraphElement({ innerText: "- When your application requires consistent layouts with minimal customization effort." }));
		this.append(new ParagraphElement({ innerText: "- When you want a layout that can dynamically adapt to different content regions." }));

		this.append(new H1Element({ innerText: "Conclusion" }));
		this.append(new ParagraphElement({ innerText: "The BorderPaneElement is a powerful layout component for creating structured, multi-region layouts in TypeComposer. With its two layout variants ('primary' and 'secondary') and easy-to-customize properties, it provides a flexible solution for building complex UI layouts with minimal code." }));

	}
}