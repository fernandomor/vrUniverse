import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    AnnotationIcon,
    ChatAlt2Icon,
    InboxIcon,
    MenuIcon,
    QuestionMarkCircleIcon,
    XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const solutions = [
    {
        name: 'Inbox',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: InboxIcon,
    },
    {
        name: 'Inbox',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: InboxIcon,
    }

]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Hero() {
    return (
        <div className="bg-white">
            {/* <header>
                <Popover className="relative bg-gray-800">
                    <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-2 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="#">
                                <span className="sr-only">Workflow</span>
                                <img
                                    className="h-8 w-auto sm:h-10"
                                    src="./TRan.png"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                        <Popover.Group as="nav" className="hidden md:flex justify-center space-x-10">
                            <Popover className="relative">
                                {({ open }) => (
                                    <>
                                        <Popover.Button
                                            className={classNames(
                                                open ? 'text-gray-900' : 'text-gray-500',
                                                'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                            )}
                                        >
                                            <span>Juegos</span>
                                            <ChevronDownIcon
                                                className={classNames(
                                                    open ? 'text-gray-600' : 'text-gray-400',
                                                    'ml-2 h-5 w-5 group-hover:text-gray-500'
                                                )}
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-3/4">
                                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                                                        {solutions.map((item) => (
                                                            <a
                                                                key={item.name}
                                                                href={item.href}
                                                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                            >
                                                                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-600 text-white sm:h-12 sm:w-12">
                                                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                                                </div>
                                                                <div className="ml-4">
                                                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                                </div>
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>


                        </Popover.Group>

                    </div>

                    <Transition
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                <div className="pt-5 pb-6 px-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <img
                                                className="h-8 w-auto"
                                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                                alt="Workflow"
                                            />
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close menu</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <nav className="grid grid-cols-1 gap-7">
                                            {solutions.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                                                >
                                                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-600 text-white">
                                                        <item.icon className="h-6 w-6" aria-hidden="true" />
                                                    </div>
                                                    <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                </div>
                                <div className="py-6 px-5">


                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
            </header> */}

            <main>
                <div>
                    {/* Hero card */}
                    <div className="relative">
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
                        <div className="">
                            <div className="relative shadow-xl rounded-b-3xl sm:overflow-hidden">
                                <div className="absolute inset-0">
                                    <video autoplay="autoplay" loop="loop" className="h-full w-full object-cover" muted defaultMuted playsinline oncontextmenu="return false;" preload="auto" id="myVideo">
                                        <source src="./cover.mp4" type="video/mp4" />
                                    </video>

                                    <div className="absolute inset-0 " />
                                </div>
                                <div className="relative px-4 py-44 sm:px-6 sm:py-36 lg:py-44 font-display">
                                    <div className="w-64 lg:w-96 mx-auto">
                                        <img src="./Blanco.png" alt="vr universe" />
                                    </div>

                                    <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                                        VR Universe
                                    </p>
                                    <p className="max-w-lg mx-auto text-center font-bold text-2xl text-indigo-200 sm:max-w-3xl">
                                        Para los que se atreven
                                    </p>
                                    <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                        <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                                            <a
                                                href="#juegos"
                                                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                                            >
                                                Explorar juegos
                                            </a>
                                            <a
                                                href="#whats"
                                                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                                            >
                                                Reservar
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Logo cloud */}
                    {/* <div className="bg-gray-100">
                        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                            <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                                Trusted by over 5 very average small businesses
                            </p>
                            <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                    <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                                </div>
                                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                    <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
                                </div>
                                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                    <img
                                        className="h-12"
                                        src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                                        alt="StaticKit"
                                    />
                                </div>
                                <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                                    <img
                                        className="h-12"
                                        src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                                        alt="Transistor"
                                    />
                                </div>
                                <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                                    <img
                                        className="h-12"
                                        src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                                        alt="Workcation"
                                    />
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>

                {/* More main page content here... */}
            </main>
        </div>
    )
}
