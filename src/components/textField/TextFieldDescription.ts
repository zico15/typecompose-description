import { Component, H1Element, H3Element, TextFieldElement, VBoxElement } from "typecompose";
import { TextField } from "./textField/TextField";

export class TextFieldDescription extends Component {


    onInit(): void {
        this.style.padding = "200px";
        this.append(new H1Element({ text: "TextField", color: "white", textAlign: "center" }));
        this.append(new H3Element({ text: "TextField A", color: "white", textAlign: "center" }));
        const textFieldA = this.appendChild(new TextField());
        // this.append(new H3Element({ text: "TextField B", color: "white", textAlign: "center" }));
        // const textFieldB = this.appendChild(new TextFieldElement({ placeholder: "oi", variant: "underlined" }));

    }
}