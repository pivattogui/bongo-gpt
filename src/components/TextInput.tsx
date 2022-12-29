import React, { HTMLInputTypeAttribute } from "react"

interface TextInputProps {
    value?: string | number | readonly string[],
    setValue: (arg: string) => void,
    defaultValue?: string,
    placeholder?: string,
    type?: HTMLInputTypeAttribute,
    disabled?: boolean,
    onEnter?: () => void
}


function textInputPropsAreEqual(prevTextInput: TextInputProps, nextTextInput: TextInputProps) {
    return prevTextInput.value == nextTextInput.value &&
        prevTextInput.placeholder === nextTextInput.placeholder &&
        prevTextInput.disabled === nextTextInput.disabled
}

function TextInput({ value, setValue, defaultValue, placeholder, disabled = false, type = "text", onEnter }: TextInputProps) {
    const props = {
        value,
        onChange: (e: { target: { value: string; }; }) => setValue(e.target.value),
        defaultValue,
        className: "focus:outline-none focus:border-indigo-500 hover:ring-1 block w-full px-4 py-3 mb-2 transition-colors text-sm placeholder-gray-500 bg-white border rounded",
        type,
        placeholder,
        disabled,
        onKeyDown: ((e: { key: string; }) => handleKeyDown(e)),
    }

    // Handle enter key
    const handleKeyDown = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            onEnter && onEnter()
        }
    }

    return (
        <input {...props} />
    )
}

export default React.memo(TextInput, textInputPropsAreEqual)