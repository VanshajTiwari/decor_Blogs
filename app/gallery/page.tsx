import GalleryComponent from "../_component/gallery";

export default function Page(){
    return (
        <>
            <header className="">
                <img src={"/img/gallery.jpg"} alt=""  className="background"/>
            </header>
            <div className="bg-gray-300 pt-10">
                <GalleryComponent/>
            </div>
        </>
    )
}