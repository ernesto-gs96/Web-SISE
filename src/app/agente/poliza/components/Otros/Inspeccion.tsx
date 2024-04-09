import CheckboxFour from '@/components/Checkboxes/CheckboxFour'

export const Inspeccion = () => {
    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                    Exoneracion
                </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5 w-max">
                <CheckboxFour id={'exonaracionContinuidad'} label={'Exoneracion por continuidad otras compañias'} />
                <CheckboxFour id={'exonaracionUnidad0km'} label={'Exoneracion por unidad 0km'} />
                <CheckboxFour id={'exonaracionRenovacion'} label={'Exoneracion por renovación de póliza'} />
                <CheckboxFour id={'exonaracionOtros'} label={'Exoneracion por otros motivoss'} />
            </div>
            <div className='flex justify-center gap-4 my-4'>
                <button className="inline-flex items-center justify-center rounded-full bg-black px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
                    Cancelar
                </button>
                <button className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
                    Guardar
                </button>
            </div>
        </div>
    )
}
