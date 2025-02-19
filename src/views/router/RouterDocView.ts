import { CodeComponent } from "@/components/code/CodeComponent";
import { SpanElement, H1Element, ParagraphElement, TableElement } from "typecomposer";
import { BaseView } from "../elements/Base";


export class RouterDocView extends BaseView {
	constructor() {
		super();
		this.append(new SpanElement({ innerText: "TypeComposer ∙ Router" }));

		this.append(new H1Element({ innerText: "Overview" }));
		this.append(new ParagraphElement({
			innerText: "In TypeComposer, the Router is automatically loaded when a file named `router.ts` or `router.js` is present in the project. The router is configured using `Router.create` and follows a declarative approach to define navigation paths."
		}));

		this.append(new H1Element({ innerText: "1. Key Features" }));
		this.append(new ParagraphElement({ innerText: "- Automatic loading of the router when the file is named `router.ts` or `router.js`." }));
		this.append(new ParagraphElement({ innerText: "- Uses a declarative approach to define routes." }));
		this.append(new ParagraphElement({ innerText: "- Supports nested routes with the `children` property." }));
		this.append(new ParagraphElement({ innerText: "- Provides support for history-based (`history`) and hash-based (`hash`) navigation." }));
		this.append(new ParagraphElement({ innerText: "- Supports wildcard paths and redirects." }));

		this.append(new H1Element({ innerText: "2. Defining Routes" }));
		this.append(new ParagraphElement({
			innerText: "Routes are defined inside the `Router.create()` function. The router is automatically recognized by TypeComposer and does not require manual imports."
		}));

		this.append(new H1Element({ innerText: "3. Example Routing Configuration" }));
		this.append(new CodeComponent({
			code: `import { Router } from "typecomposer";
import { MainLayout } from "@/layouts/MainLayout";
import { DashboardView } from "@/views/DashboardView";
import { SettingsView } from "@/views/SettingsView";
import { ProfileView } from "@/views/ProfileView";
import { NotFoundView } from "@/views/NotFoundView";

Router.create({
  history: "history",
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        { path: "dashboard", component: DashboardView },
        { path: "settings", component: SettingsView },
        { path: "profile", component: ProfileView }
      ]
    },
    { path: Router.PATH_WILDCARD, component: NotFoundView }
  ]
});`
		}));

		this.append(new H1Element({ innerText: "4. Properties" }));
		this.append(new TableElement({
			headers: ["Property", "Type", "Description", "Example"],
			rows: [
				["history", `"hash" | "history"`, "Defines the navigation mode (hash-based or history-based).", `"history"`],
				["routes", "Route[]", "An array of route definitions.", "[{ path: '/', component: MainLayout } ]"],
				["path", "string", "The URL path associated with the route.", `"/dashboard"`],
				["component", "Component", "The component to be rendered at the specified path.", `DashboardView`],
				["children", "Route[] (optional)", "Defines nested routes inside a parent component.", "[{ path: 'profile', component: ProfileView }]"],
				["redirect", "string (optional)", "Redirects to a different path when a route is matched.", `"/dashboard"`]
			],
			className: "border border-gray-300"
		}));

		this.append(new H1Element({ innerText: "5. Example with Nested Routes" }));
		this.append(new CodeComponent({
			code: `Router.create({
  history: "history",
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        { path: "dashboard", component: DashboardView },
        { path: "settings", component: SettingsView },
        { path: "profile", component: ProfileView }
      ]
    },
    { path: "/not-found", component: NotFoundView },
    { path: Router.PATH_WILDCARD, redirect: "/not-found" }
  ]
});`
		}));

		this.append(new H1Element({ innerText: "6. Default Behavior" }));
		this.append(new ParagraphElement({ innerText: "- The Router is loaded automatically based on the reserved filename (`router.ts` or `router.js`)." }));
		this.append(new ParagraphElement({ innerText: "- Routes must be declared inside `Router.create()`." }));
		this.append(new ParagraphElement({ innerText: "- If no matching route is found, the wildcard (`Router.PATH_WILDCARD`) can be used to redirect to a 404 page." }));

		this.append(new H1Element({ innerText: "7. When to Use the Router" }));
		this.append(new ParagraphElement({ innerText: "- When creating multi-page applications with navigable routes." }));
		this.append(new ParagraphElement({ innerText: "- When needing nested views within a parent route." }));
		this.append(new ParagraphElement({ innerText: "- When defining structured paths for different application sections." }));

		this.append(new H1Element({ innerText: "Conclusion" }));
		this.append(new ParagraphElement({
			innerText: "The TypeComposer Router provides a simple yet powerful way to handle navigation. It automatically loads from a reserved file and follows a declarative approach for defining routes, making it ideal for building scalable applications."
		}));

	}
}