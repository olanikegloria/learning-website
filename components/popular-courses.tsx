import Link from "next/link"
import Image from "next/image"

const courses = [
  {
    id: 1,
    slug: "online-advertising",
    title: "Online Advertising",
    image: "/images/online-advertising.png",
  },
  {
    id: 2,
    slug: "social-media-management",
    title: "Social Media Management",
    image: "/images/social-media.png",
  },
  {
    id: 3,
    slug: "wig-making-and-hair-styling",
    title: "Wig Making and Hair Styling",
    image: "/images/wig-making.png",
  },
  {
    id: 4,
    slug: "copywriting",
    title: "Copywriting",
    image: "/images/copywriting.png",
  },
  {
    id: 5,
    slug: "graphic-design",
    title: "Graphic Design",
    image: "/images/graphic-design.png",
  },
  {
    id: 6,
    slug: "community-management",
    title: "Community Management",
    image: "/images/community-management.png",
  },
  {
    id: 7,
    slug: "graphic-design-canva",
    title: "Graphic Design - Canva",
    image: "/images/canva.png",
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
          {courses.slice(0, 6).map((course) => (
            <div key={course.id} className="border rounded-md overflow-hidden bg-white">
              <div className="relative h-48 w-full">
                <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-contain" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-800 mb-4">{course.title}</h3>
                <Link
                  href={`/courses/${course.slug}`}
                  className="block w-full bg-[#00a0e4] hover:bg-[#0090d0] text-white text-center py-3 rounded-md transition-colors"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
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

