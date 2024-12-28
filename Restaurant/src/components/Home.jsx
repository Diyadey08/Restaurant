import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: "Menu", href: "/Page" },
  { name: "Reservations", href: "/Reservation" },
  { name: "About", href: "/About" },
  { name: "Contact", href: "/Contact" },
  /*{ name: "Sign In / Sign Up", href: "/auth" },*/
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container mx-auto flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-lg font-bold text-amber-500">IgnisDine House</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="transition-colors hover:text-amber-500"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between md:justify-end">
          <a href="/" className="md:hidden">
            <span className="text-lg font-bold text-amber-500">IgnisDine House</span>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          >
            <Menu className="h-6 w-6 text-white" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white"
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </button>
            </div>
            <nav className="mt-8 flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-white transition-colors hover:text-amber-500"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

