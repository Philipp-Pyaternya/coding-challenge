import React, { ReactNode } from 'react';

interface IButton {
    children: ReactNode;
    className?: string;
}

function Button({ children, className = '' }: IButton) {
    return (
        <button
            className={`${className} w-full bg-dark-gray-blue hover:bg-gradient-to-b from-[#6541FD] to-[#332CEB] rounded-full p-4 text-pale-blue font-semibold hover:brightness-125`}
        >
            {children}
        </button>
    );
}

export default Button;
