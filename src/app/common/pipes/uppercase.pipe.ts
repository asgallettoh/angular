import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'upper' 
})
//implements interface
export class UppercasePipe implements PipeTransform{
	//function tranform will take arguments value from our htlm template
	transform(value: string): string{
		const transformedValue = value.toUpperCase();
		return transformedValue;
	};	
}