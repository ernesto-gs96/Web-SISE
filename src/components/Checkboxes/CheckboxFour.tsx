import { useState } from "react";

interface Props {
  id: string,
  label: string,
}

const CheckboxFour = ({ id, label }: Props) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div>
      <label
        htmlFor={id}
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input
            type="checkbox"
            id={id}
            className="sr-only"
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <div
            className={`mr-4 flex h-5 w-5 items-center justify-center rounded-full border ${
              isChecked && "border-primary"
            }`}
          >
            <span
              className={`h-2.5 w-2.5 rounded-full bg-transparent ${
                isChecked && "!bg-primary"
              }`}
            >
              {" "}
            </span>
          </div>
        </div>
        {label}
      </label>
    </div>
  );
};

export default CheckboxFour;
