import ContactForm from "./formComponent";

export default function Contact(){
    return (
        <>
            <header className="items-end">
                <img src={"/img/contactus.jpg"} alt=""  className="background"/>
                <div style={{fontFamily:"Arsenal"}} className="md:text-9xl text-6xl p-4 rounded-sm text-white ">
                    <h1>CONTACT US</h1>
                </div>
            </header>
            
            <section className="bg-gray-200 text-green-900 md:p-10 md:grid md:grid-cols-2" style={{fontFamily:"'Quicksand'"}}>
                <div>
                    <h1 className="text-4xl">Contact us</h1>
                    <p>We woould love to hear you ! To get started planning you event, please fill out the below form or email us at muthalvrindavank@gmail.com .</p>
                    <ContactForm/>
                </div>
                <div className="flex flex-col gap-y-6 md:gap-y-[300px] ml-6 py-6">
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