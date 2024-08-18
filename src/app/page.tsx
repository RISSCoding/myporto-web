import Photo from "@/components/Photo"
import Social from "@/components/Social"
import { Button } from "@/components/ui/button"
import { FiDownload } from 'react-icons/fi'
import Link from 'next/link'
import Stats from "@/components/Stats"

const Home = () => {
  return (
    <section className="min-h-screen">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Fullstack Developer</span>
            <h1 className="h1 mb-6">Hai saya <br /> <span className="text-accent">Faris Febrian</span></h1>
            <p className="max-w-[500px] mb-9 text-secondary/80">Saya adalah seorang developer yang berpengalaman dalam membuat website dengan kesan modern dan elegan. Saya juga ahli di beragam teknologi dan bahasa pemrograman.</p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link 
                href="https://drive.google.com/file/d/1eXbVnuGA_UNg4hdgSuTTSS0hYpkX0t72/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  variant='outline'
                  size='lg'
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl"/>
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Social containerStyle="flex gap-6" iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home