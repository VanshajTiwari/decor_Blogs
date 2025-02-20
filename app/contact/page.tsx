export default function Contact(){
    return (
        <>
            <header className="items-end">
                <img src={"/img/contactus.jpg"} alt=""  className="background"/>
                <div style={{fontFamily:"Arsenal"}} className="text-9xl p-4 rounded-sm text-white ">
                    <h1>CONTACT US</h1>
                </div>
            </header>
            
            <section className="bg-gray-200 text-green-900 md:p-10 grid grid-cols-2" style={{fontFamily:"'Quicksand'"}}>
                <div>
                    <h1 className="text-4xl">Contact us</h1>
                    <p>We woould love to hear you ! To get started planning you event, please fill out the below form or email us at muthalvrindavank@gmail.com .</p>
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
                        <div className="grid grid-cols-2">
                            <label className="">Email Address <span className="ml-1 font-medium">(Required)*</span></label>
                            <input type="text" className="relative -left-32 border border-black p-2 md:min-w-[475px]"/>
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
                        <div className="flex gap-x-4 items-center">
                            <label>Location</label>
                            <button className="px-2 border border-green-900 py-1 bg-green-100 text-green-900 outline-2 ring-red-200">Locate Me</button>
                        </div>
                        <div>
                            <button type="button" className="text-green-900 border-2 border-green-900  bg-gray-50 font-bold hover:bg-green-900 hover:text-white duration-200 active:scale-90 py-2 px-3 rounded-sm">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="flex flex-col gap-y-[300px] ml-6">
                    <div className="flex flex-col">
                        <span className="flex gap-x-2">
                            <span className="uppercase font-bold">BADWAUR City</span>
                            <span className="font-medium">|</span>
                            <span>999.999.9999</span>
                        </span>
                        <span>badwapui@event.com</span>
                        <div className="flex flex-col">
                            <span>115 E 23rd Street, 3rd Floor</span>
                            <span>New York, New Tork 10010</span>
                            <span className="relative top-4">*By appointment only</span>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="flex gap-x-2">
                            <span className="uppercase font-bold">BOSTON</span>
                            <span className="font-medium">|</span>
                            <span>999.999.9999</span>
                        </span>
                        <span>badwapui@event.com</span>
                        <div className="flex flex-col">
                            <span>115 E 23rd Street, 3rd Floor</span>
                            <span>New York, New Tork 10010</span>
                            <span className="relative top-4">*Mail only</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}