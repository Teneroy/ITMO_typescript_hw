import {Calculator} from './Calculator';
import {Controls} from './Controls';
import {Display} from './Display';

main();

function main() : void
{
	const outputElement = document.getElementById( 'display' );
	const display: Display = new Display( outputElement );
	const calculator: Calculator = new Calculator( display );
	const buttons = document.querySelectorAll( 'div.buttons>button' );
	new Controls( calculator, buttons );
}
