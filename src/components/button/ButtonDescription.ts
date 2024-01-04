import { ButtonElement, FormElement, HBoxElement, InputElement, StyleOptional } from "typecompose";

// @ts-ignore
export class ButtonDescription extends HBoxElement {

    constructor(styles?: StyleOptional) {
        super(styles);
        // text
        const form = new FormElement({ gap: "10px", margin: "20px", method: "get" });
        const name = new InputElement({ text: "name", type: "text", id: "name", name: "name" });
        const button = new ButtonElement({ text: "ButtonElement", color: "white", textAlign: "center", type: "submit" });
        button.onclick = () => {
            // @ts-ignore
            console.log("button: ");
        }

        form.append(name, button);
        this.appendChild(form);
        // this.tes.style.color = this.ref2;
        // console.log("ButtonDescription: ", this.tes);
        // this.tes.onclick = () => {
        //     this.ref2.value = "red";
        // }
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