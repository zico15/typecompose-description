import { Component, DivElement, InputElement, LabelElement, RefComponent } from "typecompose";



export class TextField extends Component {

    // private input: InputElement = new InputElement({});

    @RefComponent({ id: "tes" })
    private tes!: DivElement

    constructor() {
        super({ className: "parent", height: "50px", width: "200px", padding: "10px" });
        // this.append(this.input);
        // this.appendChild(new LabelElement({ text: "tes", className: "child", fontSize: "6px" }));
    }

    onInit(): void {
        this.tes.innerHTML = "as"
        console.log('TextField onInit ', this.tes)
    }

    onDestroy(): void {
        console.log('TextField onDestroy')
    }
}