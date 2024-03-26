import Link from "next/link";

export const HeroSection = () => {
    return (
        <div className="relative isolate px-6 lg:px-8">
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
            </div>
            <div className="mx-auto max-w-2xl py-32 sm:py-24 lg:py-32">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="text-gray-600 ring-gray-900/10 hover:ring-gray-900/20 relative rounded-full px-3 py-1 text-sm leading-6 ring-1">
                        ¿Como puedo ser un agente?{" "}
                        <Link href="/agente/auth/signin" className="font-semibold text-indigo-600">
                            <span className="absolute inset-0" aria-hidden="true" />
                            Mas información <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-gray-900 text-4xl font-bold tracking-tight sm:text-6xl">
                        Aseguradora
                    </h1>
                    <p className="text-gray-600 mt-6 text-lg leading-8">
                    Proteger el patrimonio y la integridad física de los propietarios de vehículos automotores asegurados, así como su responsabilidad ante terceros, por medio de un servicio de calidad, que cumpla con el contrato de seguro pactado y que satisfaga plenamente las expectativas de nuestros clientes.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/servicios/cotizar"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Cotizar poliza
                        </Link>
                        <Link
                            href="/nosotros"
                            className="text-gray-900 text-sm font-semibold leading-6"
                        >
                            ¿Quienes somos? <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                />
            </div>
        </div>
    );
};
