import { AnchorElement, DataElement, GridElement, ListElement } from "typecompose";

export class ListComponentItem extends GridElement {

    constructor(public discrption: string, public link?: string) {
        super({ padding: "10px" });
        this.columns = "auto 1fr";
        this.append(new AnchorElement({ rlink: link || discrption.toLowerCase(), color: "#fcfffa", text: discrption, textAlign: "center" }));
    }
}

export class ListComponents extends GridElement {

    private list: ListElement = new ListElement();

    constructor(data?: DataElement) {
        super(data);
        this.columns = "auto";
        this.rows = "auto"
        this.append(this.list);
    }

    onInit(): void {
        this.list.addItem(new ListComponentItem("Button"));
        this.list.addItem(new ListComponentItem("Card"));
        this.list.addItem(new ListComponentItem("TabPane"));
        this.list.addItem(new ListComponentItem("Input"));
        this.list.addItem(new ListComponentItem("Label"));
        this.list.addItem(new ListComponentItem("Image"));
        this.list.addItem(new ListComponentItem("Grid"));
        this.list.addItem(new ListComponentItem("HBox"));
        this.list.addItem(new ListComponentItem("VBox"));
        this.list.addItem(new ListComponentItem("BorderPane"));
        this.list.addItem(new ListComponentItem("GoogleMap"));
        this.list.addItem(new ListComponentItem("List"));
        this.list.addItem(new ListComponentItem("Paragraph"));
        this.list.addItem(new ListComponentItem("Table"));
        this.list.addItem(new ListComponentItem("Text"));
        this.list.addItem(new ListComponentItem("TextArea"));
        this.list.addItem(new ListComponentItem("Select"));
        this.list.addItem(new ListComponentItem("CheckBox"));
        this.list.addItem(new ListComponentItem("Radio"));
        this.list.addItem(new ListComponentItem("DatePicker"));
        this.list.addItem(new ListComponentItem("TimePicker"));
        this.list.addItem(new ListComponentItem("DateTimePicker"));
        this.list.addItem(new ListComponentItem("ColorPicker"));
        this.list.addItem(new ListComponentItem("Slider"));
        this.list.addItem(new ListComponentItem("Spinner"));
        this.list.addItem(new ListComponentItem("Progress"));
        this.list.addItem(new ListComponentItem("ProgressBar"));
        this.list.addItem(new ListComponentItem("Accordion"));
        this.list.addItem(new ListComponentItem("Dialog"));
        this.list.addItem(new ListComponentItem("Tooltip"));
        this.list.addItem(new ListComponentItem("Menu"));
        this.list.addItem(new ListComponentItem("MenuBar"));
        this.list.addItem(new ListComponentItem("MenuItem"));
    }


}