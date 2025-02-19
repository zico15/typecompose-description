import { ButtonElement, Component, ref } from "typecomposer";

class CasTest extends Component {
  constructor() {
    super();
  }

  template() {
    return <div>cas</div>;
  }
}

export class TesPage extends Component {
  tes = ref("red");

  testDiv!: HTMLDivElement;
  tg = ref<string[]>([]);
  th = ref(true);

  constructor() {
    super({ className: "re" });
    this.append(new ButtonElement({ backgroundColor: this.tes, text: this.th, onclick: () => (this.th.value = !this.th.value) }));
    this.appendChild(
      new ButtonElement({
        backgroundColor: this.tes,
        text: this.tes,
        onclick: () => {
          if (this.tes.value == "casa") this.tes.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
          else this.tes.value = "casa";
        },
      })
    );
    this.append(new ButtonElement({ backgroundColor: this.tes, text: "push", onclick: () => this.tg.push("#" + Math.floor(Math.random() * 16777215).toString(16)) }));
  }

  template() {
    return (
      <fragment>
        {this.th.value != false ? <div>ternary</div> : this.tes.value === "casa" ? <div>teste:casa</div> : <div>59</div>}
        <div>separador</div>
        {this.tg.map((e) => (
          <div>{e}</div>
        ))}
        {this.tg.map(function (casa) {
          return <div>{casa}</div>;
        })}
        {/*{Fragment.create(
          (change) => {
            // @ts-ignore
            return this.tg.map((a, i, ar) => change(a, i, ar, (e: any) => <div>{e}</div>));
          },
          [this.tg]
        )}*/}
        <div>separador {this.tes}</div>
        {this.th.value && <div>condicao simples</div>}
        <CasTest />
      </fragment>
    );
  }
}
