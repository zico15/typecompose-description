import { DivElement, H1Element, HBoxElement, StackPane, VBoxElement } from "typecompose";

export class StackPaneDescription extends VBoxElement {


    onInit(): void {
        this.append(new H1Element({ text: "StackPane", color: "white", textAlign: "center" }));
        const pane = this.appendChild(new DivElement({ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }));
        const stackPane = new StackPane({ height: "500px", width: "500px", justifyContent: "center", alignItems: "center" });
        stackPane.appendChild(new DivElement({ backgroundColor: "blue", width: "100%", height: "100%" }));
        stackPane.appendChild(new DivElement({ backgroundColor: "green", left: "10%", top: "10%", width: "80%", height: "80%" }));
        stackPane.appendChild(new DivElement({ backgroundColor: "orange", left: "20%", top: "20%", width: "60%", height: "60%" }));
        stackPane.appendChild(new DivElement({ backgroundColor: "yellow", left: "30%", top: "30%", width: "40%", height: "40%" }));
        const options = this.appendChild(new HBoxElement({ gap: "10px", alignItems: "center" }));
        pane.append(stackPane, options);
    }
}