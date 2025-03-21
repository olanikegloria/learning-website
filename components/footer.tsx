import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="relative w-40 h-16 mb-6">
              <Image src="/images/logo.png" alt="Live Your Dreams Africa" fill className="object-contain" />
            </div>
            <p className="text-gray-700 mb-6">
              Our aim is to inspire and empower individuals to actualize their dreams through the development of
              enterprises that significantly impact communities in Africa.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-orange-500">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-orange-500">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-orange-500">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-orange-500">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Popular Courses</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/courses/graphic-design-canva" className="text-orange-500 hover:underline">
                  Graphic Design - Canva
                </Link>
              </li>
              <li>
                <Link href="/courses/community-management" className="text-orange-500 hover:underline">
                  Community Management
                </Link>
              </li>
              <li>
                <Link href="/courses/social-media-management" className="text-orange-500 hover:underline">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link href="/courses/graphic-design" className="text-orange-500 hover:underline">
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link href="/courses/copywriting" className="text-orange-500 hover:underline">
                  Copywriting
                </Link>
              </li>
              <li>
                <Link href="/courses/wig-making-and-hair-styling" className="text-orange-500 hover:underline">
                  Wig Making and Hair Styling
                </Link>
              </li>
              <li>
                <Link href="/courses/social-media-management" className="text-orange-500 hover:underline">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link href="/courses/online-advertising" className="text-orange-500 hover:underline">
                  Online Advertising
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong className="block">Address:</strong>
                Lagos, Nigeria
              </li>
              <li>
                <strong className="block">Location:</strong>
                Lekki Phase 1, Lagos
              </li>
              <li>
                <strong className="block">Phone:</strong>
                +234 123 456 7890
              </li>
              <li>
                <strong className="block">Email:</strong>
                info@liveyourdreamsafrica.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-gray-600">
          <p>Copyright © 2023 LYD Academy</p>
          <p className="mt-2">Designed By Evolve</p>
        </div>
      </div>
    </footer>
  )
}

