import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Lock } from "lucide-react"

interface CoursePageProps {
  params: {
    slug: string
  }
}

export default function CoursePage({ params }: CoursePageProps) {
  const { slug } = params

  // This would normally come from a database or API
  const courseData = {
    title: "Online Advertising",
    image: "/images/course1.png",
    status: "Closed",
    description:
      "This is a course that will take you on a learning journey on how to leverage different social media platforms to boost promotions.",
    content: [
      { title: "Welcome Address - Bankole Williams", duration: "1 hour", locked: true },
      { title: "Introduction to Digital Marketing", duration: "5 hours", locked: true },
      { title: "Online Advertising", duration: "3 hours", locked: true },
      { title: "Quiz", duration: "1 hour", locked: true },
      { title: "Google Ads", duration: "7 hours", locked: true },
      { title: "YouTube Ads", duration: "3 hours", locked: true },
      { title: "Quiz", duration: "1 hour", locked: true },
      { title: "Facebook for Online Advertising", duration: "8 hours", locked: true },
      { title: "LinkedIn for Online Advertising", duration: "5 hours", locked: true },
      { title: "Twitter for Online Advertising", duration: "7 hours", locked: true },
      { title: "Quiz", duration: "1 hour", locked: true },
      { title: "Business Storytelling for SMEs", duration: "5 hours", locked: true },
      { title: "Marketing and Sales for SMEs", duration: "5 hours", locked: true },
      { title: "Consumer Personal Development and Market Orientation", duration: "5 hours", locked: true },
      { title: "Final Quiz - Online Advertising", duration: "1 hour", locked: true },
      { title: "Design Course", duration: "5 hours", locked: true },
      { title: "Mentors Session", duration: "3 hours", locked: true },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6 bg-white my-8 shadow-sm">
        <div className="relative w-full h-80 mb-6">
          <Image src="/images/course1.png" alt={courseData.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/70 to-orange-400/70 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">{courseData.title}</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="border p-4 text-center">
            <h3 className="text-sm text-gray-500 mb-2">Current Status</h3>
            <div className="bg-orange-500 text-white py-1 px-3 rounded-full inline-block">Not Enrolled</div>
          </div>

          <div className="border p-4 text-center">
            <h3 className="text-sm text-gray-500 mb-2">Price</h3>
            <div className="font-bold">Closed</div>
          </div>

          <div className="border p-4 text-center">
            <h3 className="text-sm text-gray-500 mb-2">Get Started</h3>
            <div className="text-sm">This course is currently closed</div>
          </div>
        </div>

        <p className="mb-8 text-gray-700">{courseData.description}</p>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Course Content</h2>
            <Button
              variant="outline"
              className="bg-orange-500 hover:bg-orange-600 text-white hover:text-white border-none"
            >
              Request Info
            </Button>
          </div>

          <div className="space-y-2">
            {courseData.content.map((item, index) => (
              <div key={index} className="border p-4 flex justify-between items-center">
                <div className="flex items-start gap-3">
                  <input type="checkbox" disabled className="mt-1" />
                  <div>
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-gray-500">{item.duration}</div>
                  </div>
                </div>
                <Lock className="text-orange-500" size={20} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

