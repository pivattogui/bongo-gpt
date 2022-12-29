import React, { HTMLInputTypeAttribute } from "react"

interface TextInputProps {
    value?: string | number | readonly string[],
    setValue: (arg: string) => void,
    defaultValue?: string,
    placeholder?: string,
    area?: boolean,
    rows?: number,
    type?: HTMLInputTypeAttribute,
    disabled?: boolean,
}


function textInputPropsAreEqual(prevTextInput: TextInputProps, nextTextInput: TextInputProps) {
    return prevTextInput.value == nextTextInput.value &&
        prevTextInput.placeholder === nextTextInput.placeholder &&
        prevTextInput.area === nextTextInput.area &&
        prevTextInput.rows === nextTextInput.rows &&
        prevTextInput.disabled === nextTextInput.disabled
}

function TextInput({ value, setValue, defaultValue, placeholder, area = false, rows = 10, disabled = false, type = "text" }: TextInputProps) {
    const props = {
        value,
        onChange: (e: { target: { value: string } }) => setValue(e.target.value),
        defaultValue,
        className: "focus:outline-none focus:border-indigo-500 hover:ring-1 block w-full px-4 py-3 mb-2 transition-colors text-sm placeholder-gray-500 bg-white border rounded",
        type,
        placeholder,
        disabled
    }

    return (
        area ? <textarea rows={rows} {...props} /> : <input {...props} />
    )
}

export default React.memo(TextInput, textInputPropsAreEqual)