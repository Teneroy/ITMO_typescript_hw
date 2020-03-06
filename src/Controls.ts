import { Calculator } from './Calculator';

/**
 * Элементы управления калькулятором.
 */
export class Controls
{
    private calculator: Calculator;

    /**
     * Элементы управления калькулятором.
     */
    constructor(calculator: Calculator, buttons: NodeList) {
        /** @type {Calculator} */
        this.calculator = calculator;

        const onButtonClick = ( event: { target: any; } ) =>
        {
            const target: HTMLButtonElement = ( event.target );
            const action = target.dataset.action;
            const value = target.dataset.value;
            this.doAction( action, value );
        };

        for ( const button of buttons )
        {
            button.addEventListener( 'click', onButtonClick );
        }
    }

    doAction( action: string | undefined, value: string | undefined )
    {
        switch ( action )
        {
            case 'addition':
                this.calculator.addition();
                break;

            case 'subtraction':
                this.calculator.subtraction();
                break;

            case 'multiplication':
                this.calculator.multiplication();
                break;

            case 'division':
                this.calculator.division();
                break;

            case 'square-root':
                this.calculator.squareRoot();
                break;

            case 'digit':
                if ( !value )
                {
                    throw new Error( 'Digit action should be with value' );
                }
                this.calculator.addDigit( value );
                break;

            case 'period':
                this.calculator.period();
                break;

            case 'change-sign':
                this.calculator.changeSign();
                break;

            case 'calculate':
                this.calculator.calculate();
                break;

            case 'backspace':
                this.calculator.backspace();
                break;

            case 'clear':
                this.calculator.clear();
                break;

            default:
                throw new Error( 'Unknown action' );
        }
    }
}