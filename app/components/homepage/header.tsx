import React from 'react';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-10 bg-green-900 flex items-center justify-between px-4 py-2">
            <div className="flex items-center">
                <img src="/assets/img/logo-vert-fonce.png" alt="Logo Impact" className="w-205 h-53.18" />
            </div>

            {/* Bouton */}
            <button className="flex justify-center items-center p-4 gap-2 w-232 h-46 bg-orange-500 hover:bg-orange-600 rounded-full text-white text-md">
            Je veux télécharger !
            </button>
        </header>
    );
};

export default Header;
