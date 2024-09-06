import Image from "next/image";
import { IoIosCall } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import { RiChatSmile3Line } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import img from "./../public/img/wallpaper.jpg";
import icon1 from "./../public/icons/conference.png";
import icon2 from "./../public/icons/round-table.png";
import icon3 from "./../public/icons/trophy-ceremony.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CiMobile3 } from "react-icons/ci";
import { IoIosMail } from "react-icons/io";
export default function Home() {
  return (
    <>
    <header className="w-full h-screen relative">
      <nav className="flex justify-center items-center gap-x-4 text-zinc-400 bg-zinc-800 py-2">
          <span>Have any questions?</span>
          <div className="flex gap-x-2  jusitfy-center items-center">
            <span><IoIosCall className="text-[20px]"/></span>  
            <span className="text-yellow-600  cursor-pointer hover:underline hover:text-red-500">+91 XXX XXX XXXX</span>  
          </div>           
          <div className="flex gap-x-2 jusitfy-center items-center">
            <span><IoIosCall  className="text-[20px]"/></span>  
            <span className="text-yellow-600  cursor-pointer  hover:underline hover:text-red-500">+91 XXX XXX XXXX</span>  
          </div>           
          <div className="flex gap-x-2 justify-center items-center">
            <span><FaEnvelope  className="text-[20px]"/></span>  
            <span className="text-yellow-600  cursor-pointer  hover:underline hover:text-red-500">contact@gmail.com</span>  
          </div>           
      </nav>
      <nav className="flex justify-center items-center py-2">
          <div>
            <span className="h-[200px] w-[200px] bg-red-400 rounded-full"></span>
          </div>
          <ul className="flex gap-x-16 text-white items-center">
            <li className="text-yellow-600 cursor-pointer">Home</li>
            <li className="hover:text-yellow-400  cursor-pointer duration-250">Blogs</li>
            <li className="hover:text-yellow-400 cursor-pointer duration-250">About</li>
            <li className="hover:text-yellow-400 cursor-pointer duration-250">Contact</li>
            <li className="bg-yellow-600 p-2 cursor-pointer rounded-md">Enquire Now</li>
          </ul>
      </nav>    
      <img src={img.src} alt="" className="fixed top-0 z-[-1]" />
      <span className="text-[50px] rounded-sm flex flex-col max-w-[700px] p-5 bg-yellow-600 font-bold mt-[100px] ml-[50px]">
          <span>Connect with us and make</span>
          <span className="text-black">your gathering unforgettable.</span>
            
      </span>
      </header>
      <main className="bg-black">
          <section className="flex justify-center pt-6">
            <div className="flex w-[90%] justify-center bg-zinc-800 p-4 rounded-sm">
              <div className="w-1/2 bg-red-400 max-h-[500px] mr-4 overflow-hidden">
                    <img src="https://i.pinimg.com/736x/6f/c1/49/6fc14940190f5baa3fa9012f2896c273.jpg" alt="whoiam" className="object-fit"/>
              </div>
              <div className="w-1/2">
                <h1 className="font-bold text-[35px] mb-4">Who we are</h1>
                <p>Lorem ipsum eque velit minus accusantium facilis cumque cupiditate repellat est ipsa, reprehenderit tempore ex voluptates ipsam? Praesentium reiciendis dolores ratione adipisci, sint animi asperiores rem illum placeat voluptatem unde eveniet architecto deserunt aspernatur ipsa et ex totam quasi corporis dolore exercitationem rerum modi nostrum? Ipsam corporis deleniti fugit dolore nobis alias porro deserunt qui ut aspernatur doloremque laboriosam eveniet totam odit nesciunt molestias, assumenda quam reiciendis architecto libero? Sint ullam at in eligendi modi ab omnis eum, sapiente saepe aut magnam beatae dolorum inventore perspiciatis quisquam consectetur impedit praesentium sunt dolor accusamus, deleniti laudantium blanditiis. Libero voluptatum illum quam enim aperiam culpa, aliquid nulla debitis magnam soluta a beatae animi recusandae eligendi perferendis sapiente suscipit? Est perspiciatis dolores enim officiis suscipit fuga animi illo eligendi nostrum, laborum illum beatae, vero, sint ipsam tempora nam minus at consequatur nulla quidem voluptates? Eaque unde vitae ipsam molestias maiores, iusto ducimus, ipsa deserunt facere debitis quia. Quas, nesciunt, autem consequuntur optio fugit quos ipsam ullam voluptate culpa, distinctio eveniet incidunt.</p>
                <button className="bg-yellow-600 text-white rounded-sm px-2 py-1 relative mt-6">Know More</button>
              </div>
            </div>
          </section>
          <section className="w-full flex flex-col items-center">
            <h1 className="uppercase text-center text-[40px] font-bold mt-4">Our Services</h1>
            <div className="flex justify-center gap-x-10 w-[80%]  mt-4">
              <article className="flex flex-col items-center hover:bg-zinc-800 duration-400 bg-zinc-900 py-4 px-8 rounded-lg">
                <img src={icon1.src} alt="" className="max-w-[150px]" />
                <h1 className="text-[25px] text-yellow-600  mt-4">Conference Event</h1>
              </article>
              <article className="flex flex-col items-center bg-zinc-900 hover:bg-zinc-800 duration-400 py-4 px-8 rounded-lg">
                <img src={icon2.src} alt="" className="max-w-[150px]"  />
                <h1 className="text-[25px] text-yellow-600  mt-4">Meeting Event</h1>
              </article>              
              <article className="flex flex-col items-center bg-zinc-900 hover:bg-zinc-800 duration-400 py-4 px-8 rounded-lg">
                <img src={icon3.src} alt=""  className="max-w-[150px]" />
                <h1 className="text-[25px] text-yellow-600 mt-4">Ceremony</h1>
              </article>
            </div>
          </section>
          <section className="flex flex-col items-center mt-12">
            <div className="relative mb-[150px]">
            <h1 className="text-[40px] max-w-[200px] font-bold absolute left-[-360px]">
              Check out our work
            </h1>
            </div>
            <div className="flex flex-wrap gap-x-4">
              <article>
                <h1 className="relative">Corporate Theme Events</h1>
                
                <div className="bg-red-500 min-w-[400px] h-[300px] rounded-lg overflow-hidden">
                  <img src="https://i.pinimg.com/236x/91/db/88/91db88996b763c09bdbf64b764853d47.jpg" alt="" className="w-full h-full"/>

                </div>
              </article>
              <article className="relative top-[-100px]">
                <h1>Conferences</h1>
                
                <div className="bg-red-500 min-w-[300px] min-h-[400px] overflow-hidden   rounded-lg">
                <img src="https://i.pinimg.com/736x/44/ea/68/44ea683f9c66ae66aaa0732f270cd202.jpg" className="w-full max-h-[400px]" />
                </div>
              </article>
            </div>
            <div className="flex relative top-[-50px] left-[-5px]">
              <article className="flex">
                <h1 className="-rotate-90 max-h-[20px] relative top-8 left-10">Exhibition Stalls</h1>
                
                <div className="bg-red-500 min-w-[300px] h-[300px] rounded-lg relative top-[-20px] overflow-hidden">
                <img src="https://i.pinimg.com/236x/a5/2d/72/a52d7242cd0d9ba079285eae92349cc0.jpg" alt="" className="w-full h-full"/>
                </div>
              </article>
              <article className="relative top-[-20px] ml-4">
                
                <div className="bg-red-500 min-w-[300px] h-[200px] rounded-lg overflow-hidden">
                <img src="https://i.pinimg.com/236x/11/c5/fa/11c5face9964aa5ccc5a0522bbefa112.jpg" alt="" className="w-full h-full"/>
                </div>
                <h1 className="mt-4 relative -top-2">Government/ Public Events</h1>
              <button className="bg-yellow-600 text-white px-2 py-3 rounded-md">View More</button>
              </article>

            </div>
          </section>
          <section className="flex flex-col items-center pb-12">
            <div className="relative mb-4">
              <h1 className="text-[40px] uppercase text-font font-bold">
                Team encore
              </h1>
            </div>
            <div className="flex gap-x-4">
              <div className="max-w-[250px] min-h-[400px] flex flex-col items-center">
                <img src="https://i.pinimg.com/736x/25/7f/ad/257fad36a8e43e1f4e06661a2a0398cf.jpg" alt="" className="w-[250px] h-[400px]" />
                <div className="flex flex-col items-center bg-zinc-800 w-[70%] relative -top-8 p-4">
                  <h1>Vanshaj Tiwari</h1>
                  <span className="border-b-2 border-yellow-600">Director</span>
                </div>
              </div>                
              <div className="max-w-[250px] min-h-[400px] flex flex-col items-center">
                <img src="https://i.pinimg.com/736x/25/7f/ad/257fad36a8e43e1f4e06661a2a0398cf.jpg" alt="" className="w-[250px] h-[400px]" />
                <div className="flex flex-col items-center bg-zinc-800 w-[70%] relative -top-8 p-4">
                  <h1>Vanshaj Tiwari</h1>
                  <span className="border-b-2 border-yellow-600">Director</span>
                </div>
              </div>                
              <div className="max-w-[250px] min-h-[400px] flex flex-col items-center">
                <img src="https://i.pinimg.com/736x/25/7f/ad/257fad36a8e43e1f4e06661a2a0398cf.jpg" alt="" className="w-[250px] h-[400px]" />
                <div className="flex flex-col items-center bg-zinc-800 w-[70%] relative -top-8 p-4">
                  <h1>Vanshaj Tiwari</h1>
                  <span className="border-b-2 border-yellow-600">Director</span>
                </div>
              </div>  
            </div>
          </section>
      </main>  
      <footer className="px-10 bg-black w-full">
   <div className="flex justify-between items-center">
    <div className="flex flex-col items-center justify-center">
      <span className="bg-white text-black font-bold w-[200px] h-[200px] text-[80px] flex items-center justify-center rounded-full p-4">P</span>
      <div className="flex space-x-4 mt-2 mb-4">
      <a className="text-white text-[30px]" href="#">
       <FaFacebookF/>
      </a>
      <a className="text-white text-[30px]" href="#">
       <FaTwitter/>
      </a>
      <a className="text-white text-[30px]" href="#">
        <FaYoutube/>
      </a>
      <a className="text-white text-[30px]" href="#">
        <FaInstagram/>
      </a>
      <a className="text-white text-[30px]" href="#">
        <FaLinkedin/>
      </a>
     </div>
    </div>

    <div className="flex flex-col">
     <h2 className="text-xl font-bold mb-4 text-yellow-600">
      Quick links
     </h2>
     <ul className="space-y-2">
      <li>
       <a className="text-white hover:underline hover:text-yellow-600" href="#">
        Home
       </a>
      </li>
      <li>
       <a className="text-white hover:underline hover:text-yellow-600" href="#">
        About Us
       </a>
      </li>
      <li>
       <a className="text-white hover:underline hover:text-yellow-600" href="#">
        Services
       </a>
      </li>
      <li>
       <a className="text-white hover:underline hover:text-yellow-600" href="#">
        Portfolio
       </a>
      </li>
      <li>
       <a className="text-white hover:underline hover:text-yellow-600" href="#">
        Career
       </a>
      </li>
      <li>
       <a className="text-white hover:underline hover:text-yellow-600" href="#">
        Privacy Policy
       </a>
      </li>
      <li>
       <a className="text-white hover:underline hover:text-yellow-600" href="#">
        Contact Us
       </a>
      </li>
      <li>
       <a className="text-white hover:underline hover:text-yellow-600" href="#">
        Blogs
       </a>
      </li>
     </ul>
    </div>

    <div className="flex flex-col">
     <h2 className="text-xl font-bold mb-4 text-yellow-600">
      Reach us
     </h2>
     <p className="mb-2 flex gap-x-2 items-center hover:underline hover:text-red-600">
      <FaMapMarkerAlt/>
      208, Sethi Bhawan, Rajendra Place, New Delhi - 110008
     </p>
     <p className="mb-2 flex gap-x-2 items-center hover:underline hover:text-red-600">
     <CiMobile3/>
      +91 xxx xxx xxxx
     </p>
     <p className="mb-2 flex gap-x-2 items-center hover:underline hover:text-red-600">
      <CiMobile3/>
      +91 xxxxx xxxxx
     </p>
     <p className="mb-2 flex gap-x-2 items-center hover:underline hover:text-red-600">
      <CiMobile3/>
      +91 xxxxx xxxxx
     </p>
     <p className="mb-2 flex gap-x-2 items-center hover:underline hover:text-red-600">
      <IoIosMail/>
      info@encorecreations.in
     </p>
    </div>
    <div className="flex flex-col">
     <h2 className="text-xl font-bold mb-4">
      Contact us
     </h2>
     <form className="space-y-4 max-w-[400px]">
      <input className="w-full p-2 bg-gray-800 text-white rounded" placeholder="Name" type="text"/>
      <input className="w-full p-2 bg-gray-800 text-white rounded" placeholder="Email" type="email"/>
      <textarea className="w-full p-2 bg-gray-800 text-white rounded" placeholder="Message"></textarea>
      <button className="w-full p-2 bg-yellow-500 text-black font-bold rounded" type="submit">
       Send
      </button>
     </form>
    </div>
   </div>
   <div className="mt-10 text-center text-gray-500">
    <p>
     © 2024 Project Creations. All Rights Reserved. Designed by
     <span className="text-white uppercase ml-2">
      project igi
     </span>
    </p>
   </div>

      </footer>
      <div className="fixed left-4 bottom-4 flex items-center justify-center">
          <RiChatSmile3Line className="text-[50px] rounded-full bg-yellow-600 p-2"/>
          <span className="bg-yellow-600 text-white px-2 relative left-[-10px] rounded-r-full">Chat</span>
      </div>
      <div className="fixed right-4 bottom-4 flex items-center justify-center">
        <a href="https://api.whatsapp.com/send?phone=919368644771&text=&source=&data=" target="blank">
          <FaWhatsapp className="text-[50px] rounded-full bg-green-600 p-2 shakken"/>
        </a>
      </div>
    </>
  );
}
