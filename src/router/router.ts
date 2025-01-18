import { AppPage } from "@/main";
import { GettingStartedView } from "@/views/getting-started/GettingStartedView";
import { HomeView } from "@/views/home/HomeView";
import { Router } from "typecomposer";

Router.create({
	routes: [
		{
			path: "/",
			component: AppPage,
			children: [
				{ path: "docs", component: HomeView },
				{ path: "docs/getting-started", component: GettingStartedView },
			]
		}
	]
})