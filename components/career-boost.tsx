export default function CareerBoost() {
  return (
    <section className="relative py-16 bg-gradient-to-r from-orange-500 to-orange-400 text-white text-center">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
          alt="Career Boost Background" 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-orange-500/70"></div>
      </div>
      <div className="relative container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Boost Your Career by Learning High Demand Skills</h2>
        <div className="inline-flex items-center bg-white/20 text-white px-3 py-1 rounded-full text-sm">
          <span className="mr-2 bg-white rounded-full w-2 h-2"></span>
          GET STARTED
        </div>
      </div>
    </section>
  )
}

