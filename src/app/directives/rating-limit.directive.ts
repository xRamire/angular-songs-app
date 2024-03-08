import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRatingLimit]'
})
export class RatingLimitDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    // Expresión regular para permitir solo números enteros de 0 a 10 o números decimales con hasta 2 decimales
    const regex = /^\d{0,2}(\.\d{0,2})?$/;

    // Si el valor no cumple con la expresión regular, se elimina el último carácter
    if (!regex.test(value)) {
      input.value = value.substring(0, value.length - 1);
      return;
    }

    // Si el valor comienza con ".", agregar "0" delante del punto decimal
    if (value.startsWith('.')) {
      input.value = '0' + value;
      return;
    }

    // Si el valor comienza con "0" y tiene más de un dígito, eliminar el "0" inicial
    if (value.startsWith('0') && value.length > 1) {
      input.value = value.substring(1);
      return;
    }

    // Convertir el valor a un número para verificar si es mayor que 10
    const floatValue = parseFloat(value);
    if (floatValue > 10) {
      // Si el valor es mayor que 10, se reemplaza con "10"
      input.value = '10';
    }
  }
}
