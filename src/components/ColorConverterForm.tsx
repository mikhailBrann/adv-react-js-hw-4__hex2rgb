import { useState } from 'react';
import ColorConverterFormProps  from '../types/ColorConverterFormProps';
import HexHelper from '../classes/HexHelper';

const ColorConverterForm = () => {
    const [form, setColor] = useState<ColorConverterFormProps>({
        colorHex: '',
        colorRgb: '',
        isValidLength: false,
    });

    const isValidHex = HexHelper.isValidHex;
    const hex2rgb = HexHelper.hex2rgb;

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        let rgbValue = '';
        let isValidLength = false;

        if (inputValue.length >= 7) {
            isValidLength = true;
            rgbValue = isValidHex(inputValue) ? hex2rgb(inputValue) : 'ошибка!';
        }
        // обновляем состояние компонента
        setColor({
            colorHex: inputValue,
            colorRgb: rgbValue,
            isValidLength: isValidLength,
        });
    };

    const setBackgroundView = (form: ColorConverterFormProps) => {
        if (!form.isValidLength) {
            return {backgroundColor: ""};
        }

        if (form.colorRgb.includes('ошибка!')) {
            return {backgroundColor: "red"};
        }

        return {backgroundColor: form.colorRgb};
    };

    return(
        <div className='color-form__wrap' style={setBackgroundView(form)}>
            <form className="form color-form" autoComplete="off">
                <input 
                    type="text" 
                    name="colorHex" 
                    className="form__input form-fields" 
                    placeholder="Enter color"
                    value={form.colorHex}
                    onInput={handleInput} 
                />
                <span className={form.isValidLength ? "form__output form-fields active" : "form__output form-fields"}>
                    {form.colorRgb}
                </span>
            </form>
        </div>
    )
}

export default ColorConverterForm;