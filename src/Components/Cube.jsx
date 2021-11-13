import React from 'react'
const features = [
    {
        name: 'Solo',
        description: 'Bienvenido a un nuevo mundo, exploralo a tu gusto.',
    },
    {
        name: 'En grupo',
        description: 'Busca retos entre amigos y vean quien es el ganador.',
    },
    {
        name: 'AfterWork',
        description:
            'Después del trabajo, sube el everest antes de regresar a casa.',
    },
    { name: 'Retos de integración', description: 'Si eres una empresa, lleva a tus colaboradores para romper el hielo y explorar nuevas tecnologías' },
]

export default function Cube() {
    return (
        <div className="bg-white font-display">
            <section aria-labelledby="features-heading" className="relative">
                <div className="aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-16">
                    <img
                        src="./cube.jpeg"
                        alt="Black leather journal with silver steel disc binding resting on wooden shelf with machined steel pen."
                        className="h-full w-full object-center object-cover lg:h-full lg:w-full"
                    />
                </div>

                <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pb-32 sm:px-6 lg:max-w-7xl lg:pt-32 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
                    <div className="lg:col-start-2">
                        <h2 id="features-heading" className="font-medium text-gray-500">
                            Explora el universo
                        </h2>
                        <p className="mt-4 text-4xl font-extrabold text-gray-900 tracking-tight">VR Universe</p>
                        <p className="mt-4 text-gray-500">
                            Para explorar realidades alternas o luchar con zombies se necesita valentia. VR Universe es sólo para los que se atreven.
                        </p>

                        <dl className="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 text-sm sm:grid-cols-2">
                            {features.map((feature) => (
                                <div key={feature.name}>
                                    <dt className="font-medium text-gray-900">{feature.name}</dt>
                                    <dd className="mt-2 text-gray-500">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </section>
        </div>
    )
}



