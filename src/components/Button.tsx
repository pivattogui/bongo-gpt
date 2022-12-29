import React from 'react';

function Button({ text, action }: { text: string, action?: () => void}) {

    return (
        <div
            className={`flex items-center py-2 px-4 justify-center cursor-pointer font-medium 
            rounded-md text-xs text-white bg-neutral-500 hover:bg-neutral-600`}
            onClick={() => action ? action() : {}}
        >
            <span className={`text-center text-sm`}>
                {text}
            </span>
        </div>
    )
}

export default Button