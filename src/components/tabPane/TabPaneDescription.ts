import { BorderPaneElement, CheckBox, StyleOptional, H1Element, HBoxElement, ParagraphElement, TabElement, TabPane, TableCellElement, TableElement, TableRowElement, VBoxElement } from "typecompose";



export class TabPaneDescription extends BorderPaneElement {

    private tabPane: TabPane = new TabPane();

    constructor(data?: StyleOptional) {
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
        this.tabPane.addTaps(
            new TabElement("Tab 1", new ParagraphElement({ text: "Tab 1", color: 'white', textAlign: "center" }) as any, null),
        );

        const table = new TableElement({ border: "1px solid white", width: "100%" });

        for (let i = 0; i < 100; i++) {
            const row_1 = new TableRowElement({ overflow: "auto", height: "50px" });

            row_1.addCell(new TableCellElement({ text: "addTap_" + i, color: 'white', textAlign: "center" }));
            row_1.addCell(new TableCellElement({ text: "add new tab_" + i, color: 'white', textAlign: "center" }));
            table.addRow(row_1);
            // table.add(["addTaps", "add new tabs"]);
            this.center.append(table);
        }
    }

    destructor(): void {
        console.log("destructor: ", this.constructor.name);
    }
}
