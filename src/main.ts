import { BorderPaneElement, ButtonElement, DivElement, RouteView, Router } from 'typecompose'
import './style.css'
import { SideBarElement } from './SideBarElement/SideBarElement';
import { ListComponents } from './list/ListComponents';

export class SuperDiv extends DivElement {
  constructor() {
    super({ className: "super-div" });
  }
}

export class AppPage extends BorderPaneElement {

  constructor() {
    super({ variant: "secondary" });
  }

  onInit(): void {

    this.left = new ListComponents({ minWidth: "200px", width: "auto" });
    this.center = new RouteView({ backgroundColor: "rgb(138, 141, 143)" });
    // const sidebar = new SideBarElement({ expanded: "auto" });

    // sidebar.addItem("home", "home-outline", "center", () => {
    //   console.log("home");
    // });

    // sidebar.addItem("cube", "cube-outline", "center", () => {
    //   console.log("cube");
    // });

    // sidebar.addItem("settings", "settings-outline", "center", () => {
    //   console.log("settings");
    // });

    // sidebar.addItem("exit", "exit-outline", "bottom", () => {
    //   console.log("exit");
    // });


    // this.left = sidebar;

    this.top = new ButtonElement({
      text: "test", onclick: () => {
        console.log("test");
        // sidebar.toggle();
      }
    });




  }


}


Router.use(() => import('./router'));

// router.put('/', AppPage, [
//   { pathname: 'card', component: CardDescription },
//   { pathname: 'button', component: ButtonDescription },
//   { pathname: 'tabpane', component: TabPaneDescription },
//   { pathname: 'borderpane', component: BorderPaneDescription },
//   { pathname: 'stackpane', component: StackPaneDescription }
// ])
