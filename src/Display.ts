// @ts-check

/**
 * Экран для отображения результата.
 */
export class Display
{
    /**
     * Экран для отображения результата.
     */
    output: HTMLElement;

    constructor(output: HTMLElement | null)
    {
        this.output = output;
    }

    /**
     * Устанавливает значение.
     *
     */
    setValue( value: string ): void
    {
        this.output.textContent = value;
    }

    /**
     * Подготавливает число к отображения на экране.
     *
     */
    prepare( number: number ): string
    {
        return number.toPrecision( 11 )
            .replace( /(?:\.0*|(\.\d+?)0*)$/, '$1' );
    }
}
