import { BorderPaneElement, CheckBox, DivElement, H1Element, HBoxElement, VBoxElement } from "typecompose";


export class BorderPaneDescription extends VBoxElement {

    oninit(): void {
        this.append(new H1Element({ text: "BorderPane", color: "white", textAlign: "center" }));
        const pane = this.appendChild(new DivElement({ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }));

        const borderPane = new BorderPaneElement({ variant: "primary", height: "500px", width: "500px" });
        borderPane.top.style.backgroundColor = "blue";
        borderPane.top.style.height = "50px";

        borderPane.left.style.backgroundColor = "green";
        borderPane.left.style.width = "50px";
        borderPane.left.style.height = "100%";

        borderPane.center.style.backgroundColor = "red";

        borderPane.right.style.backgroundColor = "yellow";
        borderPane.right.style.width = "50px";

        borderPane.bottom.style.backgroundColor = "orange";
        borderPane.bottom.style.height = "50px";

        const options = this.appendChild(new HBoxElement({ gap: "10px", alignItems: "center" }));

        pane.append(borderPane, options);
        const primary = options.appendChild(new CheckBox({ text: "primary", color: 'white' }));
        primary.checked = true;
        primary.onchange = () => {
            if (!primary.checked) {
                primary.checked = true;
                return;
            }
            borderPane.variant = "primary";
            secondary.checked = false;
        }
        const secondary = options.appendChild(new CheckBox({ text: "secondary", color: 'white' }));
        secondary.onchange = () => {
            if (!secondary.checked) {
                secondary.checked = true;
                return;
            }
            borderPane.variant = "secondary";
            primary.checked = false;
        }
    }

}