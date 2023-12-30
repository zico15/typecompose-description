import { BorderPaneElement, DataElement, DivElement, Ref, RefComponent } from "typecompose";

export class ButtonDescription extends BorderPaneElement {

    ref2 = new Ref("white");


    @RefComponent({ id: "tes" })
    tes!: DivElement;

    constructor(data?: DataElement) {
        super(data);
        this.tes.style.color = this.ref2;
        console.log("ButtonDescription: ", this.tes);
        this.tes.onclick = () => {
            this.ref2.value = "red";
        }
        // this.center = new VBoxElement({ gap: "10px", margin: "20px" });
        // AppPage.ref = new WeakRef(this);
        // // AppPage.weakMaps.set(this, AppPage.ref);
    }

    onInit(): void {
        // this.center.append(new H1Element({ text: "ButtonElement", color: this.ref2, textAlign: "center" }));
        // const inputa: InputElement = this.center.appendChild(new InputElement({ text: "ButtonElement", textAlign: "center" }));
        // const text = this.center.appendChild(new H5Element({ text: this.ref2, color: "white", textAlign: "center" }));
        // this.ref2.subscriber(text, "innerHTML");
        // text.innerHTML = "tes"
        // inputa.onchange = (e: Event) => {
        //     console.log("inputa: ", e);
        //     this.ref2.value = inputa.value;
        //     // @ts-ignore
        // }
    }

    destructor(): void {
        console.log("destructor: ", this.constructor.name);
    }
}