import React from 'react';

const Hero = () => {
    return (
        <section className="h-screen flex items-end justify-center bg-green-900">
            <div className="flex flex-row items-end justify-between p-8 rounded-lg left-16 bottom-16">

                <div className="flex flex-col justify-end items-start gap-8 absolute" style={{ left: '94px', top: '314px', width: '400px' }}>
                    <h1 className="text-4xl font-outfit font-semibold text-white mb-4">
                        Imp<span className="text-orange-500">A</span>ct <br/> Ton défi, chaque jour.
                    </h1>
                    <p className="text-lg font-outfit font-normal text-white">Télécharge l'application ImpAct et rejoins la communauté de jeunes engagés pour l'environnement, en partageant chaque jour des photos pour répondre à des défis écologiques !</p>
                    <button className="py-4 px-6 bg-orange-500 hover:bg-orange-600 rounded-full text-white text-md">
                        Je veux télécharger !
                    </button>
                </div>

                <div className="flex-shrink-0 ml-8">
                    <img src="/assets/img/union.png" alt="Union" className="h-584 w-628" />
                </div>

                <div className="relative flex-shrink-0">
                    <div className="absolute top-0 right-0 w-377 h-86 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-700 bg-opacity-70 backdrop-blur-md rounded-xl"></div>
                    <img src="/assets/img/notification.png" alt="Notification" className="absolute top-2 right-2 h-24 w-auto" />
                </div>

            </div>
        </section>
    );
};

export default Hero;
