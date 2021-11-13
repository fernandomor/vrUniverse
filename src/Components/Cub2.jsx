import React from 'react'

export default function Cub2() {
    return (
        <div className="bg-gray-50">
            <div className="max-w-2xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                {/* Details section */}
                <section aria-labelledby="details-heading font-display">
                    <div className="flex flex-col items-center text-center font-display">
                        <h2 id="details-heading" className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Por el superhéroe que llevas dentro
                        </h2>
                        <p className="mt-3 max-w-3xl text-lg text-gray-600 font-display">
                            Usa la fuerza, destruye zombies, se esa estrella de soccer y escala el everest.
                        </p>
                        <p className="font-display">
                            VR Universe. Para los que se atreven
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
                        <div>
                            <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden ">
                                <div className="bg-indigo-700 h-full mix-blend-multiply z-10" />


                                <img
                                    src="./women3.png"
                                    alt="Drawstring top with elastic loop closure and textured interior padding."
                                    className="w-full  h-full object-center object-cover"
                                />
                            </div>
                            <p className="mt-8 text-base text-gray-500">
                                ¿Quién mata más zombies? Reta a tus amigos, juega y vence. VR Universe tiene los juegos del momento para explorar nuevos universos en una nueva realidad
                            </p>
                        </div>
                        <div>
                            <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden bg-indigo-700 mix-blend-multiply">
                                <img
                                    src="./women2.png"
                                    alt="Front zipper pouch with included key ring."
                                    className="w-full h-full object-center object-cover"
                                />
                            </div>
                            <p className="mt-8 text-base text-gray-500">
                                Explora el apocalipsis, pelea contra Darth vader y ponte al filo de un elevador. VR Universe te lleva a nuevos universos, sólo para los que se atreven.
                            </p>
                        </div>
                    </div>
                </section>
            </div >
        </div >
    )
}



