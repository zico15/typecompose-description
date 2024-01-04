import { BorderPaneElement, CheckBox, DivElement, H1Element, HBoxElement, IComponent, VBoxElement } from "typecompose";


export class BorderPaneDescription extends VBoxElement {

    onInit(): void {
        this.append(new H1Element({ text: "BorderPane", color: "white", textAlign: "center" }));
        const pane = this.appendChild(new DivElement({ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }));
        const borderPane = new BorderPaneElement({ variant: "primary", height: "500px", width: "500px" });
        borderPane.top.style.backgroundColor = "blue";
        borderPane.top.style.height = "50px";
        this.setText("top", borderPane.top);

        borderPane.left.style.backgroundColor = "green";
        borderPane.left.style.width = "50px";
        borderPane.left.style.height = "100%";
        this.setText("left", borderPane.left);

        borderPane.center.style.backgroundColor = "red";
        this.setText("center", borderPane.center);

        borderPane.right.style.backgroundColor = "yellow";
        borderPane.right.style.width = "50px";
        this.setText("right", borderPane.right);

        borderPane.bottom.style.backgroundColor = "orange";
        borderPane.bottom.style.height = "50px";
        this.setText("bottom", borderPane.bottom);

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

    private setText(text: string, component: IComponent): void {
        component.style.display = "flex";
        component.style.alignItems = "center";
        component.style.justifyContent = "center";
        component.innerHTML = text;
        component.style.color = "black";
        component.style.fontSize = "18px";
    }

}