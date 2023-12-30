import { BorderPaneElement, CheckBox, DataElement, H1Element, HBoxElement, ParagraphElement, TabElement, TabPane, VBoxElement } from "typecompose";

export class TabPaneDescription extends BorderPaneElement {

    private tabPane: TabPane = new TabPane();

    constructor(data?: DataElement) {
        super(data);
        this.center = new VBoxElement({ gap: "10px", margin: "20px" });
    }

    onInit(): void {
        this.center.append(new H1Element({ text: "TabPane", color: 'white', textAlign: "center" }));
        this.center.append(this.tabPane);
        const panel = this.center.appendChild(new HBoxElement({ gap: "10px", alignItems: "center" }));
        const closeable = panel.appendChild(new CheckBox({ text: "Closeable", color: 'white' }));
        closeable.onchange = () => {
            this.tabPane.closeable = closeable.checked;
            console.log("closeable: ", closeable.checked);
        }
        // this.tabPane.addTap("Tab 1", new TabElement({ text: "Tab 1", color: 'white', textAlign: "center" }) as any);
        this.tabPane.addTaps(
            new TabElement("Tab 1", new ParagraphElement({ text: "Tab 1", color: 'white', textAlign: "center" }) as any, null),
        );
    }

    destructor(): void {
        console.log("destructor: ", this.constructor.name);
    }
}