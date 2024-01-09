import { BorderPaneElement, ButtonElement, CardElement, StyleOptional, H1Element, H2Element, HBoxElement, Ref, VBoxElement } from "typecompose";

export class CardDescription extends BorderPaneElement {

    private color: Ref<string> = new Ref("white");
    private backgroundColorDisplay: H2Element = new H2Element({ text: "white", color: "white" });

    constructor(data?: StyleOptional) {
        super(data);
        this.center = new VBoxElement({ gap: "10px", margin: "20px" });
    }

    onInit(): void {
        const buttons = new HBoxElement({ gap: "10px", alignItems: "center", justifyContent: "center" });
        buttons.append(new ButtonElement({ text: "red", backgroundColor: "red", color: "white", onclick: () => this.setBackgroundColor("red") }));
        buttons.append(new ButtonElement({ text: "green", backgroundColor: "green", color: "white", onclick: () => this.setBackgroundColor("green") }));
        buttons.append(new ButtonElement({ text: "blue", backgroundColor: "blue", color: "white", onclick: () => this.setBackgroundColor("blue") }));
        buttons.append(new ButtonElement({ text: "yellow", backgroundColor: "yellow", color: "black", onclick: () => this.setBackgroundColor("yellow") }));
        buttons.append(new ButtonElement({ text: "orange", backgroundColor: "orange", color: "black", onclick: () => this.setBackgroundColor("orange") }));
        buttons.append(new ButtonElement({ text: "purple", backgroundColor: "purple", color: "white", onclick: () => this.setBackgroundColor("purple") }));
        buttons.append(new ButtonElement({ text: "white", backgroundColor: "white", color: "black", onclick: () => this.setBackgroundColor("white") }));

        this.center.append(new H1Element({ text: "CardElement", color: "white", textAlign: "center" }));
        this.center.append(new CardElement({ width: "100%", height: "100px", backgroundColor: this.color }));
        this.center.append(buttons);
        this.center.append(this.backgroundColorDisplay);
        this.setBackgroundColor(this.color.value);
    }

    private setBackgroundColor(color: string): void {
        this.color.value = color;
        this.backgroundColorDisplay.innerHTML = `new CardElement({ backgroundColor: '${this.color}' });`;
    }
}
console.log("CardDescription: ");
