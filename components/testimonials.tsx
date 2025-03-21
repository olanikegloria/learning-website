import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Uche Kalu",
    text: "This course is indeed an Eye opener. I have come to realize that there is more to social media than just chatting with friends. I have come to know the business side of social media and the benefits it brings to what actually caught my gist. I can go over again. I bet you, I will always have something new to learn.",
    avatar: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 2,
    name: "Adebowale Ajoke",
    text: "I have a very short attention span, but I finished this course from the beginning to the end, because it was incredible. The instructor was amazing, the content was rich, and now I am dying to have the skill and try another thing to know how to sell the skill and try another thing to know how to sell the skill. Thank you for putting this together.",
    avatar: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 3,
    name: "Adeniji Adisa",
    text: "So this entire course was out of this world! We are blessed that their wonderful professionals agreed to teach and coach us. The instructors were fantastic, God bless all the facilitators. God bless all the staff and God bless LYD!",
    avatar: "/placeholder.svg?height=50&width=50",
  },
  {
    id: 4,
    name: "Oparaeze",
    text: "The past 5 weeks of learning have been amazing. The social media management course was packed full with relevant, concise, and also very practical. It was easy to me even with all the modules. I have been finding in some of the pages I manage.",
    avatar: "/placeholder.svg?height=50&width=50",
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-orange-500 font-medium mb-2">Testimonials</div>
            <h2 className="text-3xl font-bold mb-6">Trusted by thousands of students</h2>

            <div className="grid grid-cols-1 gap-6">
              {testimonials.slice(0, 2).map((testimonial) => (
                <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 mr-4">
                      <Image
                        src="/placeholder.svg?height=50&width=50"
                        alt={testimonial.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="orange"
                            stroke="orange"
                            strokeWidth="1"
                            className="mr-1"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">{testimonial.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-6xl font-bold text-blue-900 mb-2">4.8</div>
            <div className="text-sm text-gray-500 mb-8">2,346 Ratings</div>

            <div className="grid grid-cols-1 gap-6">
              {testimonials.slice(2, 4).map((testimonial) => (
                <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 mr-4">
                      <Image
                        src="/placeholder.svg?height=50&width=50"
                        alt={testimonial.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="orange"
                            stroke="orange"
                            strokeWidth="1"
                            className="mr-1"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">{testimonial.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

