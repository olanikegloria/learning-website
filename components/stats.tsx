export default function Stats() {
  return (
    <section className="py-16 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-16">Learn Anywhere. Learn Anytime</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold mb-2">5</div>
            <div className="text-orange-500 text-sm uppercase tracking-wider">Courses</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold mb-2">10</div>
            <div className="text-orange-500 text-sm uppercase tracking-wider">Instructors</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold mb-2">3,000+</div>
            <div className="text-orange-500 text-sm uppercase tracking-wider">Students</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold mb-2">100+</div>
            <div className="text-orange-500 text-sm uppercase tracking-wider">Lessons</div>
          </div>
        </div>
      </div>
    </section>
  )
}

