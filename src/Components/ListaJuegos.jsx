import React from 'react'
const products = [
    {
        id: 1,
        name: 'Star Wars',
        href: '#',
        price: ' Aventura',
        imageAlt: 'Star Wars VR UNIVERSE',
    },
    {
        id: 2,
        name: 'Fit XR',
        href: '#',
        price: 'Deporte / Ritmo VR',
        imageAlt: ' ',
    },
    {
        id: 3,
        name: 'Thrill the Fight (Boxing)',
        href: '#',
        price: 'Deporte',
        imageAlt: 'Fit XR plaza sendero ',
    },
    {
        id: 4,
        name: 'Population:ONE',
        href: '',
        price: 'Acción / Aventura',
        imageAlt: 'Realidad virtual monterrey',
    },
    {
        id: 5,
        name: 'Resident Evil',
        href: '#',
        price: 'Terror / Acción',
        imageAlt: 'Juegos realidad virtual',
    },
    {
        id: 6,
        name: 'Player 22',
        href: '#',
        price: 'Acción / Aventura',
        imageAlt: 'Realidad virtual en monterrey',
    },
    {
        id: 7,
        name: 'SuperHot VR',
        href: '#',
        price: 'Acción',
        imageAlt: 'Super hot juegos VR ',
    },
    {
        id: 8,
        name: 'Sniper Elite',
        href: '#',
        price: 'Acción / Guerra',
        imageAlt: 'Sniper elite VR juegos',
    },
    {
        id: 9,
        name: 'The Climb',
        href: '#',
        price: 'Acción / Aventura',
        imageAlt: 'the climb juegalo en plaza sendero',
    },
    {
        id: 10,
        name: 'Death Horizon',
        href: '#',
        price: 'Terror / Acción',
        imageAlt: 'Juega en plaza sendero realidad virtual',
    },
    {
        id: 11,
        name: 'ONWARD',
        href: '#',
        price: 'Acción / Guerra',
        imageAlt: 'Realidad virtual monterrey ',
    },
    {
        id: 12,
        name: 'Beat Saber',
        href: '#',
        price: 'Ritmo VR',
        imageAlt: 'Beat Saber monterrey',
    },
    {
        id: 13,
        name: 'Acron',
        href: '#',
        price: 'Acción / Aventura',
        imageAlt: 'Acron Monterrey en Plaza sendero',
    },
    {
        id: 14,
        name: 'El Exorcista Legion',
        href: '#',
        price: 'Terror',
        imageAlt: 'Juegos de realidad virtual',
    },
    {
        id: 15,
        name: 'Richies Plank',
        href: '#',
        price: 'Terror / Acción',
        imageAlt: 'Richies plank en sendero',
    },
    // More products...
]
export default function ListaJuegos() {
    return (
        <div className="bg-gradient-to-l from-sky  to-morado font-display" id="juegos">
            <div className="max-w-2xl mx-auto cursor-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} href={product.href} className="group">
                            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                <img
                                    src={`./${product.id}.png`}
                                    alt={product.imageAlt}
                                    className="w-full h-full object-center object-cover cursor-auto "
                                />
                            </div>
                            <h3 className="mt-4 text-xl font-bold text-purple-900">{product.name}</h3>
                            <p className="mt-1 text-md text-black">{product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}



