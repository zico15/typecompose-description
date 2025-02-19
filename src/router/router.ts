import { AppPage } from "@/pages/AppPage";
import { PlaygroundPage } from "@/pages/Playground";
import { ButtonView } from "@/views/elements/ButtonView";
import { DivView } from "@/views/elements/DivView";
import { HeadingView } from "@/views/elements/HeadingView";
import { InputView } from "@/views/elements/InputView";
import { LabelView } from "@/views/elements/LabelView";
import { SpanView } from "@/views/elements/SpanView";
import { TableView } from "@/views/elements/TableView";
import { BorderPaneView } from "@/views/components/BorderPaneView";
import { ComponentView } from "@/views/components/ComponentView";
import { HboxView } from "@/views/components/HboxView";
import { VboxView } from "@/views/components/VboxView";
import { GettingStartedView } from "@/views/getting-started/GettingStartedView";
import { HomeView } from "@/views/home/HomeView";
import { RouterDocView } from "@/views/router/RouterDocView";
import { Router } from "typecomposer";

Router.create({
	history: "hash",
	routes: [
		{
			path: "/",
			component: AppPage,
			children: [
				{ path: "docs/getting-started", component: GettingStartedView },
				{ path: "components/component", component: ComponentView },
				{ path: "elements/div", component: DivView },
				{ path: "elements/button", component: ButtonView },
				{ path: "elements/input", component: InputView },
				{ path: "elements/table", component: TableView },
				{ path: "elements/label", component: LabelView },
				{ path: "elements/span", component: SpanView },
				{ path: "elements/heading", component: HeadingView },
				{ path: "layout/vbox", component: VboxView },
				{ path: "layout/hbox", component: HboxView },
				{ path: "layout/border-pane", component: BorderPaneView },
				{ path: "docs", component: HomeView },
				{ path: "router", component: RouterDocView },
			]
		},
		{ path: "/playground", component: PlaygroundPage },
		{ path: Router.PATH_WILDCARD, redirect: "/docs" }

	]
})