"use client";

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import {
  CheckIcon,
  ChevronUpDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";
import { InputGroup } from "./tw-components/input";

type Person = {
  name: string;
  username: string;
};

type AutocompleteProps = {
  onSelect?: (item: Person | null) => void;
  onChange?: (text: string) => void;
};

const items = [
  { name: "Tesla", username: "TSLA" },
  { name: "Microsoft", username: "MSFT" },
];

export default function Autocomplete({ onSelect, onChange }: AutocompleteProps) {
  const [query, setQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<Person | null>(null);

  const filteredItems =
    query === ""
      ? items
      : items.filter((item) => {
          return item.name.toLowerCase().includes(query.toLowerCase());
        });

  const handleChange = (item: Person | null) => {
    setQuery("");
    setSelectedItem(item);
    onSelect?.(item);
  };

  const onInputChange = (text: string) => {
    setQuery(text);
    onChange?.(text);
  }


  return (
    <Combobox as="div" value={selectedItem} onChange={handleChange}>
      <div className="relative">
        <InputGroup>
          <MagnifyingGlassIcon
            data-slot="icon"
            className="pointer-events-none"
            aria-hidden="true"
          />
          <ComboboxInput
            className={clsx(
              // Basic layout
              "relative block w-full appearance-none rounded-lg px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing[3])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)]",
              // Typography
              "text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white",
              // Border
              "border border-zinc-950/10 data-[hover]:border-zinc-950/20 dark:border-white/10 dark:data-[hover]:border-white/20",
              // Background color
              "bg-transparent dark:bg-white/5",
              // Hide default focus styles
              "focus:outline-none",
              // System icons
              "dark:[color-scheme:dark]",
              // Padding for the search icon
              "pl-10 sm:pl-8"
            )}
            onChange={(event) => onInputChange(event.target.value)}
            displayValue={(item: Person) => item?.name}
            placeholder="Search..."
          />
          <ComboboxButton className="absolute inset-y-0 right-0 flex items-center pr-3 sm:pr-2.5">
            <ChevronUpDownIcon
              className="size-5 sm:size-4 text-zinc-500 dark:text-zinc-400"
              aria-hidden="true"
            />
          </ComboboxButton>
        </InputGroup>

        {filteredItems.length > 0 && (
          <ComboboxOptions
            className={clsx(
              "absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-lg",
              "bg-white/75 backdrop-blur-xl dark:bg-zinc-800/75",
              "shadow-lg ring-1 ring-zinc-950/10 dark:ring-inset dark:ring-white/10",
              "py-1 text-base sm:text-sm",
              "focus:outline-none"
            )}
          >
            {filteredItems.map((item) => (
              <ComboboxOption
                key={item.username}
                value={item}
                className={({ active }) =>
                  clsx(
                    "relative cursor-default select-none py-2.5 pl-3.5 pr-9 sm:py-1.5 sm:pl-3 sm:pr-9",
                    "text-zinc-950 dark:text-white",
                    active && "bg-blue-500 text-white"
                  )
                }
              >
                {({ selected, active }) => (
                  <>
                    <div className="flex">
                      <span
                        className={clsx(
                          "truncate",
                          selected && "font-semibold"
                        )}
                      >
                        {item.name}
                      </span>
                      <span
                        className={clsx(
                          "ml-2 truncate",
                          active
                            ? "text-blue-100"
                            : "text-zinc-500 dark:text-zinc-400"
                        )}
                      >
                        {item.username}
                      </span>
                    </div>

                    {selected && (
                      <span
                        className={clsx(
                          "absolute inset-y-0 right-0 flex items-center pr-3 sm:pr-2.5",
                          active ? "text-white" : "text-blue-500"
                        )}
                      >
                        <CheckIcon
                          className="size-5 sm:size-4"
                          aria-hidden="true"
                        />
                      </span>
                    )}
                  </>
                )}
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        )}
      </div>
    </Combobox>
  );
}
