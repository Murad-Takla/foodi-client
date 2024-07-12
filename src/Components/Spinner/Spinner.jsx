import React from 'react';

const Spinner = () => {
    return (
        <div className="flex justify-center items-center h-[400px]">
            <div className="flex flex-row gap-2">
                <div className="w-3 h-3 rounded-full bg-[#e62626] animate-bounce" />
                <div className="w-3 h-3 rounded-full bg-[#e62626] animate-bounce [animation-delay:-.3s]" />
                <div className="w-3 h-3 rounded-full bg-[#e62626] animate-bounce [animation-delay:-.5s]" />
            </div>
        </div>
    );
};

export default Spinner;