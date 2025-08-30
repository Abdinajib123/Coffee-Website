import { ArrowRight, Star, Clock, Coffee, Heart } from 'lucide-react';

interface HomeProps {
  onNavigate?: (sectionId: string) => void;
}

const Home = ({ onNavigate }: HomeProps) => {
  const handleNavClick = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId);
    }
  };

  const features = [
    {
      icon: Coffee,
      title: "Premium Beans",
      description: "Sourced from the finest coffee regions around the world"
    },
    {
      icon: Clock,
      title: "Fresh Daily",
      description: "Roasted fresh every morning for the perfect cup"
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every cup crafted with passion and attention to detail"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Coffee Enthusiast",
      content: "The best coffee I've ever had! The atmosphere is amazing too.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Regular Customer",
      content: "Consistently great coffee and friendly service. My go-to spot!",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "Food Blogger",
      content: "Perfect blend of traditional and modern coffee culture.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-coffee-900 via-coffee-800 to-coffee-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Experience the Perfect
                <span className="text-coffee-300"> Brew</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Discover our handcrafted coffee made from the finest beans, 
                roasted to perfection and served with passion. Every cup tells a story.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => handleNavClick('menu')}
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Explore Menu
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button 
                  onClick={() => handleNavClick('about')}
                  className="btn-secondary text-white border-white hover:bg-white hover:text-coffee-800"
                >
                  Our Story
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-coffee-600 rounded-full w-96 h-96 mx-auto flex items-center justify-center">
                <div className="bg-coffee-500 rounded-full w-80 h-80 flex items-center justify-center">
                  <div className="bg-coffee-400 rounded-full w-64 h-64 flex items-center justify-center">
                    <Coffee className="h-32 w-32 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose BrewCafe?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to delivering exceptional coffee experiences through quality, 
              passion, and innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-coffee-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-coffee-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Crafting Coffee Excellence Since 2010
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our journey began with a simple passion for perfect coffee. Today, 
                we continue to source the world's finest beans and roast them to 
                perfection, creating memorable experiences one cup at a time.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-coffee-600">14+</div>
                  <div className="text-gray-600">Years of Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-coffee-600">50K+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
              </div>
              <button 
                onClick={() => handleNavClick('about')}
                className="btn-primary inline-flex items-center"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="relative">
              <div className="bg-coffee-200 rounded-2xl p-8">
                <div className="bg-coffee-100 rounded-xl p-6">
                  <div className="bg-coffee-50 rounded-lg p-4">
                    <Coffee className="h-24 w-24 text-coffee-600 mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-coffee-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our community
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;
