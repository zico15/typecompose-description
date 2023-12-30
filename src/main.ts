import { BorderPaneElement, ButtonElement, router, RouteView } from 'typecompose'
import './style.css'
import { ListComponents } from './list/ListComponents';
import { CardDescription } from './components/card/CardDescription';
import { ButtonDescription } from './components/button/ButtonDescription';
import { TabPaneDescription } from './components/tabPane/TabPaneDescription';

export class AppPage extends BorderPaneElement {

  public static ref: WeakRef<any> | undefined;
  public static weakMaps = new WeakSet();


  onInit(): void {
    this.top = new ButtonElement({
      text: "test", onclick: () => {
        console.log("AppPage.ref: ", AppPage.ref?.deref());
      }
    });


    this.left = new ListComponents({ minWidth: "200px" });
    this.center = new RouteView({ backgroundColor: "rgb(138, 141, 143)" });

  }

}

router.put('/', AppPage, [
  { pathname: 'card', component: CardDescription },
  { pathname: 'button', component: ButtonDescription },
  { pathname: 'tabpane', component: TabPaneDescription }
])
