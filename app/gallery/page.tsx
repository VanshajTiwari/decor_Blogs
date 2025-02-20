import GalleryComponent from "../_component/gallery";

export default function Page(){
    return (
        <>
            <header className="items-end justify-start">
                <img src={"/img/gallery.jpg"} alt=""  className="background"/>
                <div style={{fontFamily:"Arsenal"}} className="text-9xl p-4 rounded-sm text-white ">
                    <h1>GALLERY</h1>
                </div>
            </header>
            <div className="bg-gray-300 pt-10">
                <GalleryComponent/>
            </div>
        </>
    )
}