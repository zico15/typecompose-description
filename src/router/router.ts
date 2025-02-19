import { AppPage } from "@/pages/AppPage";
import { PlaygroundPage } from "@/pages/Playground";
import { BaseView } from "@/views/base-components/Base";
import { ButtonView } from "@/views/base-components/ButtonView";
import { DivView } from "@/views/base-components/DivView";
import { HeadingView } from "@/views/base-components/HeadingView";
import { InputView } from "@/views/base-components/InputView";
import { LabelView } from "@/views/base-components/LabelView";
import { SpanView } from "@/views/base-components/SpanView";
import { TableView } from "@/views/base-components/TableView";
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