import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-wrap">

        <Link href="/" className="nav-logo">
          <Image
            src="/images/monogram.png"
            alt="MightyWings"
            width={52}
            height={52}
          />
          <span>MIGHTYWINGS</span>
        </Link>

        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/roster">Roster</Link>
          <Link href="/media">Media</Link>
          <Link href="/contact" className="nav-btn">
            Join Us
          </Link>
        </nav>

      </div>
    </header>
  );
}
