'use client'
import React from 'react'
import { useState } from "react"
import { Eye, CheckCircle } from "react-feather"
import Button from "@/components/button"
import Image from "next/image"
import Navbar from "@/components/navbar"

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

// Course data with actual images and proper lesson videos related to each topic
const coursesContent = {
  "digital-marketing": {
    title: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800",
    status: "Open",
    price: "$99",
    description: "Master the art of digital marketing with comprehensive training in social media, SEO, and online advertising.",
    content: [
      {
        title: "Introduction to Digital Marketing",
        duration: "15 minutes",
        lessons: [
          { 
            title: "What is Digital Marketing?", 
            duration: "5 min", 
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" 
          },
          { 
            title: "Key Components of Digital Marketing", 
            duration: "5 min", 
            videoUrl: "https://www.w3schools.com/html/movie.mp4" 
          },
          { 
            title: "Setting Up Your First Campaign", 
            duration: "5 min", 
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" 
          }
        ]
      },
      {
        title: "Social Media Marketing Fundamentals",
        duration: "20 minutes",
        lessons: [
          { 
            title: "Understanding Social Platforms", 
            duration: "7 min", 
            videoUrl: "https://www.w3schools.com/html/movie.mp4" 
          },
          { 
            title: "Content Strategy Basics", 
            duration: "7 min", 
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" 
          },
          { 
            title: "Engagement Techniques", 
            duration: "6 min", 
            videoUrl: "https://www.w3schools.com/html/movie.mp4" 
          }
        ]
      }
    ]
  },
  "online-importation": {
    title: "Online Importation",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800",
    status: "Open",
    price: "$129",
    description: "Learn how to source products globally and build a successful import business.",
    content: [
      {
        title: "Getting Started with Importing",
        duration: "15 minutes",
        lessons: [
          { 
            title: "Finding Reliable Suppliers", 
            duration: "5 min", 
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" 
          },
          { 
            title: "Understanding Shipping & Logistics", 
            duration: "5 min", 
            videoUrl: "https://www.w3schools.com/html/movie.mp4" 
          },
          { 
            title: "Customs & Regulations", 
            duration: "5 min", 
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" 
          }
        ]
      }
    ]
  },
  "video-editing": {
    title: "Video Editing",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800",
    status: "Open",
    price: "$149",
    description: "Learn professional video editing techniques and tools to create compelling visual content.",
    content: [
      {
        title: "Video Editing Basics",
        duration: "20 minutes",
        lessons: [
          { 
            title: "Introduction to Video Editing", 
            duration: "7 min", 
            videoUrl: "https://www.w3schools.com/html/movie.mp4" 
          },
          { 
            title: "Basic Editing Techniques", 
            duration: "7 min", 
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" 
          },
          { 
            title: "Working with Transitions", 
            duration: "6 min", 
            videoUrl: "https://www.w3schools.com/html/movie.mp4" 
          }
        ]
      }
    ]
  },
  "graphic-design": {
    title: "Graphic Design",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800",
    status: "Open",
    price: "$119",
    description: "Master graphic design principles and tools to create eye-catching visuals for any purpose.",
    content: [
      {
        title: "Graphic Design Fundamentals",
        duration: "25 minutes",
        lessons: [
          { 
            title: "Design Principles", 
            duration: "8 min", 
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" 
          },
          { 
            title: "Color Theory", 
            duration: "8 min", 
            videoUrl: "https://www.w3schools.com/html/movie.mp4" 
          },
          { 
            title: "Typography Basics", 
            duration: "9 min", 
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" 
          }
        ]
      }
    ]
  },
  "scented-candles": {
    title: "Scented Candles Making",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800",
    status: "Open",
    price: "$79",
    description: "Learn to create beautiful handmade scented candles for personal use or as a business.",
    content: [
      {
        title: "Candle Making Basics",
        duration: "30 minutes",
        lessons: [
          { 
            title: "Introduction to Candle Making", 
            duration: "10 min", 
            videoUrl: "https://www.w3schools.com/html/movie.mp4" 
          },
          { 
            title: "Materials and Tools", 
            duration: "10 min", 
            videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" 
          },
          { 
            title: "Creating Your First Candle", 
            duration: "10 min", 
            videoUrl: "https://www.w3schools.com/html/movie.mp4" 
          }
        ]
      }
    ]
  }
};

export default function CoursePage({ params }: CoursePageProps) {
  const { slug } = React.use(params);

  // Get the course data for the current slug, or fall back to digital marketing
  const courseData = coursesContent[slug as keyof typeof coursesContent] || coursesContent["digital-marketing"];

  const [expandedSection, setExpandedSection] = useState<number | null>(null)
  const [expandedLesson, setExpandedLesson] = useState<{ section: number; lesson: number } | null>(null)
  const [allExpanded, setAllExpanded] = useState(false)
  
  // State for tracking checked sections and lessons
  const [checkedSections, setCheckedSections] = useState<Record<number, boolean>>({})
  const [checkedLessons, setCheckedLessons] = useState<Record<string, boolean>>({})
  
  const toggleSection = (index: number) => {
    if (allExpanded) {
      setAllExpanded(false)
    }
    setExpandedSection(expandedSection === index ? null : index)
  }

  const toggleLesson = (sectionIndex: number, lessonIndex: number) => {
    if (expandedLesson?.section === sectionIndex && expandedLesson?.lesson === lessonIndex) {
      setExpandedLesson(null)
    } else {
      setExpandedLesson({ section: sectionIndex, lesson: lessonIndex })
    }
  }

  const toggleAllSections = () => {
    setAllExpanded(!allExpanded)
    if (!allExpanded) {
      setExpandedSection(null)
      setExpandedLesson(null)
    }
  }
  
  const toggleCheckedSection = (e: React.MouseEvent, index: number) => {
    e.stopPropagation() // Prevent triggering the section expand/collapse
    const newCheckedSections = { ...checkedSections, [index]: !checkedSections[index] }
    setCheckedSections(newCheckedSections)

    // Automatically check/uncheck all lessons under this section
    const section = courseData.content[index]
    section.lessons.forEach((_, lessonIndex) => {
      const key = `${index}-${lessonIndex}`
      setCheckedLessons(prev => ({
        ...prev,
        [key]: newCheckedSections[index]
      }))
    })
  }
  
  const toggleCheckedLesson = (e: React.MouseEvent, sectionIndex: number, lessonIndex: number) => {
    e.stopPropagation() // Prevent triggering the lesson expand/collapse
    const key = `${sectionIndex}-${lessonIndex}`
    setCheckedLessons(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 bg-white my-8 shadow-sm">
        <div className="relative w-full h-80 mb-6">
          <Image src={courseData.image} alt={courseData.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/70 to-orange-400/70 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">{courseData.title}</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="border p-4 text-center">
            <h3 className="text-sm text-gray-500 mb-2">Current Status</h3>
            <div className="bg-orange-500 text-white py-1 px-3 rounded-full inline-block">{courseData.status}</div>
          </div>

          <div className="border p-4 text-center">
            <h3 className="text-sm text-gray-500 mb-2">Price</h3>
            <div className="font-bold">{courseData.price}</div>
          </div>

          <div className="border p-4 text-center">
            <h3 className="text-sm text-gray-500 mb-2">Get Started</h3>
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Enroll Now</Button>
          </div>
        </div>

        <p className="mb-8 text-gray-700">{courseData.description}</p>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Course Content</h2>
            <Button
              variant="outline"
              onClick={toggleAllSections}
              className="bg-orange-500 hover:bg-orange-600 text-white hover:text-white border-none"
            >
              {allExpanded ? "Collapse All" : "Expand All"}
            </Button>
          </div>

          <div className="space-y-2">
            {courseData.content.map((section, sectionIndex) => (
              <div key={sectionIndex} className="border rounded-lg overflow-hidden">
                <div
                  className="bg-gray-50 p-4 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSection(sectionIndex)}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="cursor-pointer"
                      onClick={(e) => toggleCheckedSection(e, sectionIndex)}
                    >
                      {checkedSections[sectionIndex] ? (
                        <CheckCircle className="text-green-500" size={20} />
                      ) : (
                        <div className="w-5 h-5 border-2 border-gray-300 rounded-full" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium">{section.title}</h3>
                      <p className="text-sm text-gray-500">
                        {section.duration} • {section.lessons.length} lessons
                      </p>
                    </div>
                  </div>
                  <Eye className="text-orange-500" size={20} />
                </div>
                
                {(expandedSection === sectionIndex || allExpanded) && (
                  <div className="p-4 space-y-4">                    
                    <div className="space-y-2">
                      {section.lessons.map((lesson, lessonIndex) => (
                        <div
                          key={lessonIndex}
                          className="p-3 bg-gray-50 rounded cursor-pointer hover:bg-gray-100"
                          onClick={() => toggleLesson(sectionIndex, lessonIndex)}
                        >
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                              <div 
                                className="cursor-pointer"
                                onClick={(e) => toggleCheckedLesson(e, sectionIndex, lessonIndex)}
                              >
                                {checkedLessons[`${sectionIndex}-${lessonIndex}`] ? (
                                  <CheckCircle className="text-green-500" size={20} />
                                ) : (
                                  <div className="w-5 h-5 border-2 border-gray-300 rounded-full" />
                                )}
                              </div>
                              <span>{lesson.title}</span>
                            </div>
                            <span className="text-sm text-gray-500">{lesson.duration}</span>
                          </div>
                          
                          {/* Show lesson video when lesson is expanded */}
                          {expandedLesson?.section === sectionIndex && 
                           expandedLesson?.lesson === lessonIndex && (
                            <div className="mt-3">
                              <video controls className="w-full">
                                <source src={lesson.videoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                              </video>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

