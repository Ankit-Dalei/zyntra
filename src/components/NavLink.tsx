import Link from "next/link";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "CONTACT", href: "/contact" },
];

const NavLinks = () => {
  return (
    <nav className="hidden lg:flex gap-10 items-center justify-center w-[60%] text-md font-medium">
      {navItems.map(({ label, href }, index) => (
        <Link key={index} href={href} className="relative group">
          <span className="text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 transition-all duration-500 ease-in-out">
            {label}
          </span>
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-500 ease-in-out rounded-full"></span>
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
