
"use client";
import { useEffect } from "react";
import { getLocationAction } from "../_lib/actions";

type Location={
    lat:string,
    lng:string
}
export default function LocateMe(){
    const location={lat:"",lng:""};
    function setLocation(){
        (async ()=>{
            await navigator.geolocation.getCurrentPosition((pos)=>
                {
                location.lat=pos.coords.latitude+"";
                location.lng=pos.coords.longitude+"";
            });
            if(await location.lat==""){
                setLocation();
            }

            await getLocationAction(location.lat,location.lng);
        })();

    }
    useEffect(()=>{

    },[]);
    return <>
                <>
                    <div className="flex w-full gap-x-4 items-center">
                                <label>Location</label>
                                <input type="text" name="address"/>
                                <button type="button" onClick={setLocation} className="px-2  border border-green-900 py-1 bg-green-100 text-green-900 outline-2 ring-red-200">Locate Me</button>
                    </div>
                </>
            </>
}