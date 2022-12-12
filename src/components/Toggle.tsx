import { Switch } from '@headlessui/react';
import * as React from 'react';

type ToggleProps = {
  enabled?: boolean;
  setEnabled?: () => void;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
} & React.ComponentProps<any>;

const Toggle: React.FunctionComponent<ToggleProps> = (
  {
    enabled,
    setEnabled
  }
) => {
  return (
    <div className="text-center mb-0">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-[#28a745] mb-[3px] lg:mb-1" : "bg-[#e64c3c]"}
          relative inline-flex flex-shrink-0 h-[25px] w-[50px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">toggle monthly and annual plans</span>
        <span className={`${enabled ? "text-white text-xs text-center mt-[3px] ml-[2px]" : "sr-only"}`}>On</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-2" : "translate-x-0"}
          pointer-events-none inline-block h-[20px] w-[20px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-300`}
        />
        <span className={`${!enabled ? "text-dark text-xs text-center mt-[3px] ml-1" : "sr-only"}`}>Off</span>
      </Switch>
    </div>
  )
}

export default Toggle