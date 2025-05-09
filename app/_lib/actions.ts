"use server";

//Nodemailer Action Start
// export async function sendMail(formData:FormData){
//     console.log(formData);
// }
export async function getLocationAction(lat: string, lng: string) {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`,
      );
      console.log(res);
      if (!res.ok) {
        console.error(`HTTP Error: ${res.status}`);
        return null;
      }
  
      const data = await res.json();
      console.log('Location:', data.display_name); // Human-readable location
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      return null;
    }
  }
  
//Nodemailer Action End