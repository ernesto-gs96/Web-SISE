"use client";

import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne"
import SelectGroupOne from "@/components/SelectGroup/SelectGroupOne"
import SelectGroupTwo from "@/components/SelectGroup/SelectGroupTwo";

const vigencias = [
    {
        
    }
]

export const FormularioAsegurado = () => {
    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                <h2 className="font-medium text-black dark:text-white">
                    Poliza nueva
                </h2>
            </div>
            <form action="#">
                <div className="p-6.5">
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="col-sapn-6">
                            <DatePickerOne label={"Vigencia desde"} fecha={"27/03/2024"} activio={false} />
                        </div>
                        <div className="col-sapn-6">
                            <DatePickerOne label={"Vigencia hasta"} fecha={"27/03/2025"} activio={false} />
                        </div>
                        <div className="col-sapn-6">
                            <SelectGroupTwo label={"Vigencia"} opciones={[]} />
                        </div>
                        <div className="col-sapn-6">
                            {/* <SelectGroupTwo /> */}
                        </div>
                    </div>

                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                        <div className="w-full xl:w-1/2">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                First name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your first name"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>

                        <div className="w-full xl:w-1/2">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Last name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your last name"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>
                    </div>

                    <div className="mb-4.5">
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Email <span className="text-meta-1">*</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                    </div>

                    <div className="mb-4.5">
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Subject
                        </label>
                        <input
                            type="text"
                            placeholder="Select subject"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                    </div>

                    <SelectGroupOne />

                    <div className="mb-6">
                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Message
                        </label>
                        <textarea
                            rows={6}
                            placeholder="Type your message"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        ></textarea>
                    </div>

                    <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    )
}
