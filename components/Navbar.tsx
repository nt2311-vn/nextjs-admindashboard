import Image from "next/image";
import Link from "next/link";
import logo from "../img/logo.png";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <div className="bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between">
      <Link href="/">
        <Image src={logo} alt="Diag" width={40} />
      </Link>
      <Avatar>
        <AvatarImage src="https://github.com/nt2311-vn.png" alt="@nt2311-vn" />
      </Avatar>
    </div>
  );
};

export default Navbar;
