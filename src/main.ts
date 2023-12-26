import { BorderPaneElement, router, RouteView } from 'typecompose'
import './style.css'
import { ListComponents } from './list/ListComponents';
import { CardDescription } from './components/CardDescription';



class AppPage extends BorderPaneElement {

  onInit(): void {
    this.left = new ListComponents({ minWidth: "200px" });
    this.center = new RouteView({ backgroundColor: "rgb(138, 141, 143)" });
  }

}

await (router.put('/', AppPage, [
  { pathname: 'card', component: CardDescription },
  // { pathname: 'list', component: CardTest2 },
]));
