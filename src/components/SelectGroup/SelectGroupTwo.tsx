"use client";
import React, { useEffect, useState } from "react";

interface opciones {
  texto: string,
  valor: string | number;
}

interface Props {
  label: string,
  opciones: opciones[],
  opcion?: string,
  activo?: boolean,
  icono?: JSX.Element,
  setOpcion: Function
}

const SelectGroupTwo = (props: Props) => {

  const { label, opciones, opcion, activo=true, icono, setOpcion } = props;

  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);

  const changeTextColor = () => {
    setIsOptionSelected(true);
  };

  return (
    <div>
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        {label}
      </label>

      <div className="relative z-20 bg-white dark:bg-form-input">
        <span className="absolute left-4 top-1/2 z-30 -translate-y-1/2">
          {icono && icono}
        </span>

        <select
          value={selectedOption}
          title="selecttewo"
          onChange={(e) => {
            setSelectedOption(e.target.value);
            changeTextColor();
            setOpcion(e.target.value);
          }}
          className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-12 py-3 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input ${isOptionSelected ? "text-black dark:text-white" : ""
            }`}
          disabled={!activo}
        >
          <option value="" disabled className="text-body dark:text-bodydark">
            {label}
          </option>
          {opciones.map((opcion, index) =>
            <option key={`${opcion.texto}-${index}`} value={opcion.valor} className="text-body dark:text-bodydark">
              {opcion.texto}
            </option>
          )}
        </select>

        <span className="absolute right-4 top-1/2 z-10 -translate-y-1/2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.8">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                fill="#637381"
              ></path>
            </g>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default SelectGroupTwo;
