import classNames from "classnames";
import { FormEventHandler } from "react";

export default function Form({
  buttonLabel,
  placeholder,
  value,
  onChange,
  onSubmit,
}: {
  buttonLabel: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit: FormEventHandler<Element>;
}) {
  const isValid = value.length > 0;
  return (
    <form onSubmit={onSubmit} className="flex">
      <input
        className="flex-grow py-1 px-2 rounded-md mr-1 border border-zinc-200 dark:border-zinc-800 dark:bg-black h-8"
        value={value}
        onChange={event => onChange(event.target.value)}
        placeholder={placeholder}
      />
      <input
        className={classNames(
          "bg-gray-300 dark:bg-gray-700  py-1 px-4 rounded-md h-8",
          {
            "cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-600": isValid,
            "text-gray-400 dark:text-gray-600": !isValid,
          }
        )}
        type="submit"
        value={buttonLabel}
        disabled={!isValid}
      />
    </form>
  );
}
