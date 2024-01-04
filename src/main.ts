import { BorderPaneElement, ButtonElement, RouteView, router } from 'typecompose'
import './style.css'
import { CardDescription } from './components/card/CardDescription';
import { ButtonDescription } from './components/button/ButtonDescription';
import { TabPaneDescription } from './components/tabPane/TabPaneDescription';
import { BorderPaneDescription } from './components/borderPane/BorderPaneDescription';
import { ListComponents } from './list/ListComponents';
import { StackPaneDescription } from './components/stackPane/StackPaneDescription';

export class AppPage extends BorderPaneElement {

  constructor() {
    super({ variant: "secondary" });
  }

  onInit(): void {
    this.top = new ButtonElement({
      text: "test", onclick: () => {
      }
    });


    this.left = new ListComponents({ minWidth: "200px", width: "auto" });
    this.center = new RouteView({ backgroundColor: "rgb(138, 141, 143)" });

  }


}

router.put('/', AppPage, [
  { pathname: 'card', component: CardDescription },
  { pathname: 'button', component: ButtonDescription },
  { pathname: 'tabpane', component: TabPaneDescription },
  { pathname: 'borderpane', component: BorderPaneDescription },
  { pathname: 'stackpane', component: StackPaneDescription }
])
