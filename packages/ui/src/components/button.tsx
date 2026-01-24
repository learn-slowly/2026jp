import React from 'react';

export const Button = ({ children }: { children: React.ReactNode }) => {
    return <button className="bg-justice-green px-4 py-2 rounded text-white">{children}</button>;
};
