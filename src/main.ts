import typescriptLogo from "/typescript.svg";
import logo from "/typecomposer.svg";
import { App, BorderPaneElement, ButtonElement, Component, H1Element, HBoxElement, ImageElement, RouteView, VBoxElement } from "typecomposer";
import "./style.scss";
import "highlight.js/styles/atom-one-dark.css";
import { NavBar } from "./components/navbar/NavBar";
import { Sidebar } from "./components/sidebar/Sidebar";

export class AppPage extends BorderPaneElement {



  constructor() {
    super({
      className: "w-screen h-screen overflow-hidden",
    });
    this.top = new NavBar();
    this.left = new Sidebar();
    this.center = new RouteView({ className: "overflow-hidden w-full h-full" });
  }
}

