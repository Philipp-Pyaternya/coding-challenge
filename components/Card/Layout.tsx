import React, { ReactNode } from 'react';

interface ILayout {
    children: ReactNode;
}

function Layout({ children }: ILayout) {
    return (
        <div className="flex flex-col md:flex-row shadow-xl rounded-[1.5rem]">
            {children}
        </div>
    );
}

export default Layout;
