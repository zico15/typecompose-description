import { BorderPaneElement, CardElement, RouteView, Router } from 'typecompose'
import './style.css'
import { ListComponents } from './list/ListComponents';
import { SideBarItem } from './SideBarElement/SideBarElement.ts';

export class AppPage extends BorderPaneElement {

  constructor() {
    super({ variant: "secondary" });
  }

  onInit(): void {
    this.top = new CardElement({ height: "50px", width: "100%" });
    const s = new SideBarItem();
    this.left = s;
    this.center = new RouteView({ backgroundColor: "rgb(138, 141, 143)" });
    // this.bottom = new CardElement({ height: "50px", width: "100%" });
    // // const hbox = new HBoxElement({});
    // hbox.append(new ButtonElement({ text: "home", color: "white" }));

    // const tex = hbox.appendChild(new TextFieldElement({ text: "oi field" }));
    // hbox.append(new ButtonElement({ text: "card", color: "white", onclick: () => console.log("card: ", tex.input.value) }));
    // // this.bottom.append(hbox);
  }

}

Router.use(() => import('./router/index.ts'));
