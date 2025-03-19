import { useEffect, useState } from "react"

const useOnline = () => {

    let [isOnline, setIsOnline]= useState(true);

// used for just run this code only onces 
    useEffect(()=>{
        // this is for online
        const handleOnline= ()=>{
            setIsOnline(true)
        }

        window.addEventListener("online", handleOnline)
        // this is for offline
      
        const handleOffline = window.addEventListener("offline",()=>{
            setIsOnline(false)
        })


        // this is cleaning (using the unmount cycling) browser always keep your event listener in memory so it is important to remove it
        return ()=>{
            window.removeEventListener("online", handleOnline)
            window.removeEventListener("online", handleOffline)
        }
    },[])



  return isOnline

};

export default useOnline



