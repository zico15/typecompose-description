import { ButtonElement, Component, Fragment, ref } from "typecomposer";

class TesG extends Component {
  constructor(props: any) {
    super();
    console.log("TesG: ", props);
  }
}

export class TesPage2 extends Component {
  constructor() {
    super();
  }

  tes = ref(["red", "green", "blue"]);

  a = ref("red");

  gaag = "dfdfdsfsdfsdffds";

  changecolor() {
    this.a.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
    this.tes.push(this.a.value);
    createElement("div", {});
    createFragment()
  }
}
