import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"


const Header = () => {
  return (
    <header className="py-4 xl:py-12 text-secondary ">
        <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <Link href="/">
            <h1 className="text-4xl font-semibold">
                Riss<span className="text-accent">CODING</span>
            </h1>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <Link href="/contact">
                    <Button>
                        Hire me
                    </Button>
                </Link>
            </div>

            {/* Mobile Nav */}
            <div className="xl:hidden">
                <MobileNav />     
            </div>
        </div>
    </header>
  )
}

export default Header