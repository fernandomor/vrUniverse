import React from 'react'
import { CheckIcon } from '@heroicons/react/outline'

const tiers = [
    {
        name: '5 Min',
        href: '#',
        priceMonthly: 35,
        description: 'Disfruta de una selección especial para iniciarte en la realidad virtual.',


    },
    {
        name: '15 Min',
        href: '#',
        priceMonthly: 65,
        description: 'No importa si eres principiante o experto',

    },
]

export default function Pricing() {
    return (
        <div className="bg-gray-900 font-display">
            <div className="pt-12 sm:pt-16 lg:pt-24">
                <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
                        <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">Pricing</h2>
                        <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                            Reta, Juega, Vence
                        </p>
                        <p className="text-xl text-gray-300">
                            Preparate para ser el superhéroe que llevas dentro.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
                <div className="relative">
                    <div className="absolute inset-0 h-3/4 bg-gray-900" />
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
                            {tiers.map((tier) => (
                                <div key={tier.name} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                                    <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                                        <div>
                                            <h3
                                                className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600"
                                                id="tier-standard"
                                            >
                                                {tier.name}
                                            </h3>
                                        </div>
                                        <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                                            ${tier.priceMonthly}
                                            <span className="ml-1 text-2xl font-medium text-gray-500">mxn</span>
                                        </div>
                                        <p className="mt-5 text-lg text-gray-500">{tier.description}</p>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
                    <div className="max-w-md mx-auto lg:max-w-5xl">
                        <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
                            <div className="flex-1">
                                <div>
                                    <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-white text-gray-800">
                                        Plaza Sendero Escobedo
                                    </h3>
                                </div>
                                <div className="mt-4 text-lg text-gray-600">
                                    Disfruta de nuevos universos y explora lugares nunca antes visto.
                                </div>
                            </div>
                            <div className="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://goo.gl/maps/hqjovT2MUCXLXhH2A"
                                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                                >
                                    Ver ubicación
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

