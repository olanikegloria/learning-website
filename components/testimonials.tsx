'use client'

import { useEffect, useState } from "react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Uche Asia",
    text: "This course is indeed an Eye-opener. I have come to realize that there is more to social media than just chatting with friends. The monetization aspect of the different social media handles is what actually caught my grip. I can go over again. I bet you, I will always have something new to learn.",
  },
  {
    id: 2,
    name: "Adesokan Ajoke",
    text: "I have a very short attention span, but I finished this course from the beginning to the end, because it was incredibly loaded with so much practical knowledge and information. It is one thing to have the skill and it’s another thing to know how to sell the skill. Thank you for much for putting this together.",
  },
  {
    id: 3,
    name: "Adeniyi Atiba",
    text: "So this entire course was out of this world! We are blessed that these wonderful professionals agreed to teach and coach us. God bless all the facilitators. God bless all the staff and God bless LYDA!",
  },
  {
    id: 4,
    name: "Osoaree",
    text: "The past 5 weeks of learning have been amazing. The social media management course was packed full with relevant, concise, and also very practical. It was easy to see some of the mistakes I have been making in some of the pages I manage.",
  },
]

export default function Testimonials() {
  const [rating, setRating] = useState(0)

  useEffect(() => {
    let start = 0
    const end = 4.8
    const duration = 2000
    const increment = end / (duration / 100)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        start = end
        clearInterval(timer)
      }
      setRating(start.toFixed(1))
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <div className="text-orange-500 font-medium mb-2">Testimonials</div>
            <h2 className="text-3xl font-bold mb-6">Trusted by thousands of students</h2>
          </div>
          <div className="text-center md:text-right">
            <div className="text-6xl font-bold text-blue-900 mb-2">{rating}</div>
            <div className="flex justify-center md:justify-end items-center text-sm text-gray-500">
              <div className="flex items-center">
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
              <span className="ml-2">2,394 Ratings</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 gap-6">
            {testimonials.slice(0, 2).map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-sm relative">
                <div className="absolute top-4 left-4">
                  <Image
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt="Live Your Dreams Africa"
                    width={50}
                    height={50}
                    className="object-cover rounded-full"
                  />
                </div>
                <p className="text-gray-700 text-sm mt-12">{testimonial.text}</p>
                <div className="mt-4 font-bold">{testimonial.name}</div>
                <div className="absolute bottom-4 right-4 flex">
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
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6">
            {testimonials.slice(2, 4).map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-sm relative">
                <div className="absolute top-4 left-4">
                  <Image
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt="Live Your Dreams Africa"
                    width={50}
                    height={50}
                    className="object-cover rounded-full"
                  />
                </div>
                <p className="text-gray-700 text-sm mt-12">{testimonial.text}</p>
                <div className="mt-4 font-bold">{testimonial.name}</div>
                <div className="absolute bottom-4 right-4 flex">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

