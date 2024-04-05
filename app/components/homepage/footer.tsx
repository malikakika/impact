    import React from 'react';

    const Footer = () => {
    return (
        <>
        <footer className="py-8 bg-green-900">
        <div className="max-w-screen-xl mx-auto">
    <div className="w-1271 border-t-2 border-solid border-yellow-300 mb-8"></div>
    </div>
        <div className="mx-110">

            <div className="flex flex-col items-start justify-center">
            {/* Logo et texte à gauche */}
            <div className="flex flex-col items-start mb-4">
                <img src="/assets/img/logo-vert-fonce.png" alt="Logo" className="h-12 w-auto mb-2" />
            </div>
            <div className="flex flex-col items-start mb-4">
                <p className="text-white font-outfit font-medium text-base leading-normal flex items-center w-96 h-96">
                ImpAct, la solution des jeunes engagés pour l'environnement, en partageant chaque jour des photos pour répondre à des défis écologiques !
                </p>
            </div>
            </div>
            <div className="flex items-center justify-end space-x-4">
            <div className="flex items-center space-x-4">
                <img src="/assets/img/rs.png" alt="Réseau social" className="h-6 w-auto" />
            </div>
            {/* Bouton */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-full">S'inscrire</button>
            </div>
            Ï       </div>
        </footer>
        </>
    );
    };

    export default Footer;
