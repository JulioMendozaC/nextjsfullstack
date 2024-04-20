
'use client'
import { Bars3Icon } from "@heroicons/react/20/solid";
import SwitchMode from './dashboard/SwitchMode';


function Navbar({ event }: any) {

  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-white/5 bg-gray-900 px-4 shadow-sm sm:px-6 lg:px-8 border-b-2 border-gray-200">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-white xl:hidden"
        onClick={() => event(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon className="h-5 w-5" aria-hidden="true" />
      </button>

      <div className="flex flex-1 justify-between gap-x-4 self-stretch lg:gap-x-6">
        <div></div>
        <SwitchMode />
      </div>

    </div>
  );
}

export default Navbar;
