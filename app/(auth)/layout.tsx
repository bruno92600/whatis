import { ModeToggle } from "@/components/toggle";
import {Logo} from "./_components/logo";

const AuthLayout = ({children}: {children: React.ReactNode}) => {
    return ( 
        <div className="h-full flex flex-col items-center justify-center space-y-3">
            <Logo />
            {children}
            <ModeToggle />
        </div>
     );
}
 
export default AuthLayout;