import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: "exponentialStrength"})
export class ExponentialStrengthPipe implements PipeTransform{
transform(value:number, expoValue: number): number{
return value*expoValue;
}
}
