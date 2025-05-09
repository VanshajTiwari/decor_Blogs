import LocateMe from "./locateMe";

export default function ContactForm(){
    return(
        <>
                <form className="p-3 flex flex-col gap-y-4">
                        <h1 className="relative top-2">FullName</h1>
                        <div className="grid grid-cols-2 gap-x-2">
                            <div className="flex flex-col">
                                <label className="text-sm mb-2">First Name<span className="ml-1 font-medium">(Required)*</span></label>
                                <input type="text" className="border border-black p-2"/>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-sm mb-2">Last Name<span className="ml-1 font-medium">(Required)*</span></label>
                                <input type="text" className="border border-black p-2"/>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <label className="">Email Address <span className="ml-1 font-medium">(Required)*</span></label>
                            <input type="text" className="relative md:-left-32 border border-black p-2 md:min-w-[475px]"/>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <input type="checkbox" className="w-4 h-4"/>
                            <label htmlFor="">Sign up for news and updates</label>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className=" mb-2">How did you hear about us?<span className="ml-1 font-medium">(Required)*</span></label>
                            <select className="border border-black p-2">
                                <option value={""} defaultChecked></option>
                                <option value=""></option>
                            </select>
                        </div>
                        <div className="grid grid-cols-1">
                            <label className=" mb-2">Event Date or Ideal Date/Time of Year<span className="ml-1 font-medium">(Required)*</span></label>
                            <input type="text" className="border border-black p-2"/>
                        </div>
                        <div className="grid grid-cols-1">
                            <label className=" mb-2">Anticipated Guest Count<span className="ml-1 font-medium">(Required)*</span></label>
                            <input type="text" className="border border-black p-2"/>
                        </div>
                        <div className="flex flex-col gap-x-4">
                            <label htmlFor="" className=" mb-2">Please share more about your vision for you wedding or event.<span className="ml-1 font-medium">(Required)*</span></label>
                            <textarea className="border border-black p-2"/>
                        </div>
                        <div className="grid grid-cols-1">
                            <label htmlFor="" className=" mb-2">Overall Event Investment<span className="ml-1 font-medium">(Required)*</span></label>
                            <input type="text" className="border border-black p-2"></input>
                        </div>
                        <div>
                            <button type="button" className="text-green-900 border-2 border-green-900  bg-gray-50 font-bold hover:bg-green-900 hover:text-white duration-200 active:scale-90 py-2 px-3 rounded-sm">Submit</button>
                        </div>
                    </form>
                    <LocateMe/>
                    
        </>
    )
}