import {translate} from "../assets/js/utils.js";

export default function Footer() {
    return (
        <div className="flex flex-wrap gap-x-32 gap-y-10">
            <div className="w-full lg:w-auto">
                <div className="opacity-50 text-sm tracking-widest">{translate('CALL|TÉLÉPHONE')}</div>
                <a href="tel:438-530-3938" target="_self" className="mt-5 block opacity-70 tracking-wider hover:underline">438-530-3938</a>
            </div>

            <div className="w-full lg:w-auto">
                <div className="opacity-50 text-sm tracking-widest">EMAIL</div>
                <a href="mailto:colinclissonhg@gmail.com" target="_self" className="mt-5 block opacity-70 tracking-wider hover:underline">colinclissonhg@gmail.com</a>
            </div>
        </div>
    )
}
