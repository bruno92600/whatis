import { Heart, Music4 } from "lucide-react";

 export const Logo = () => {
    return ( 
    <div className="flex items-center justify-center p-6">
        <Music4 />
        <Heart />
        <Music4 />
        <img src="/logomoi.svg" alt="logo" />
        <Music4 />
        <Heart />
        <Music4 />
    </div> 
    );
}
 
