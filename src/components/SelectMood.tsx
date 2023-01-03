import { Listbox, Transition } from "@headlessui/react";
import { MoodOption } from "../types";
import { OPTIONS } from "../constants";
import { Fragment } from "react";

function SelectMood({ mood, setMood }: { mood: MoodOption, setMood: (mood: MoodOption) => void }) {
    return (
        <div className="fixed right-2 top-1 w-36">
            <Listbox value={mood} onChange={setMood}>
                <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-pointer rounded-lg sm:bg-neutral-700 text-white py-2 pl-3 sm:pr-10 sm:text-left sm:shadow-md focus:outline-none focus-visible:border-neutral-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">{mood.value}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <i className="fas fa-chevron-down" />
                        </span>
                    </Listbox.Button>
                </div>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full sm:w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {OPTIONS.map((option) => (
                            <Listbox.Option
                                key={option.type}
                                value={option}
                                className={({ active }) =>
                                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${active ? 'bg-neutral-200 text-neutral-900' : 'text-gray-900'}`
                                }
                            >
                                {({ selected }) => (
                                    <>
                                        <span
                                            className={`block sm:text-base text-sm ${selected ? 'font-medium' : 'font-normal'
                                                }`}
                                        >
                                            {option.value}
                                        </span>
                                        {selected ? (
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-600">
                                                <i className="fas fa-check"></i>
                                            </span>
                                        ) : null}
                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </Listbox>
        </div>
    )
}

export default SelectMood