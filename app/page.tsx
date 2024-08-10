import { ModeToggle } from "@/components/toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      liko
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
      </div>
  );
}
