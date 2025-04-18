import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
	selector: "app-calculadora",
	standalone: true,
	imports: [FormsModule, CommonModule],
	templateUrl: "./calculadora.component.html",
	styleUrl: "./calculadora.component.css",
})
export class CalculadoraComponent {
	numberOne = 0;
	numberTwo = 0;
	result = 0;
	operation: "add" | "subtract" | "multiply" | "divide" = "add";
	errorMessage = "";

	calculate() {
		this.errorMessage = "";

		switch (this.operation) {
			case "add":
				this.result = this.numberOne + this.numberTwo;
				break;
			case "subtract":
				this.result = this.numberOne - this.numberTwo;
				break;
			case "multiply":
				this.result = this.numberOne * this.numberTwo;
				break;
			case "divide":
				if (this.numberTwo === 0) {
					this.errorMessage = "Não é possível dividir por zero!";
					return;
				}
				this.result = this.numberOne / this.numberTwo;
				break;
		}
	}

	clear() {
		this.numberOne = 0;
		this.numberTwo = 0;
		this.result = 0;
		this.errorMessage = "";
		this.operation = "add";
	}
}
