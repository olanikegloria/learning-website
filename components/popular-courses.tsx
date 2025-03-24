import Link from "next/link"
import Image from "next/image"

const courses = [
  {
    id: 1,
    slug: "digital-marketing",
    title: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800",
    price: "$99",
  },
  {
    id: 2,
    slug: "online-importation",
    title: "Online Importation",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800",
    price: "$129",
  },
  {
    id: 3,
    slug: "video-editing",
    title: "Video Editing",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800",
    price: "$149",
  },
  {
    id: 4,
    slug: "graphic-design",
    title: "Graphic Design",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800",
    price: "$119",
  },
  {
    id: 5,
    slug: "scented-candles",
    title: "Scented Candles Making",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800",
    price: "$79",
  },
]

export default function PopularCourses() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <div className="text-orange-500 font-medium mb-2">Top Courses</div>
            <h2 className="text-3xl md:text-4xl font-bold">Popular Courses</h2>
          </div>
          <Link
            href="/courses"
            className="hidden md:inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-full transition-colors"
          >
            VIEW ALL COURSES
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Link key={course.id} href={`/courses/${course.slug}`} className="block">
              <div className="border rounded-md overflow-hidden bg-white shadow-md">
                <div className="relative h-64 w-full">
                  <Image src={course.image} alt={course.title} fill className="object-cover" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">{course.title}</h3>
                  <div className="block w-full bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded-full transition-colors">
                    Enroll Now
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:hidden">
          <Link
            href="/courses"
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-full transition-colors"
          >
            VIEW ALL COURSES
          </Link>
        </div>
      </div>
    </section>
  )
}

