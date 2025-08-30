import { Coffee, Users, Globe, Heart, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We pour our heart into every cup, ensuring each brew is crafted with love and dedication."
    },
    {
      icon: Target,
      title: "Quality",
      description: "From bean selection to final pour, we maintain the highest standards of excellence."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building meaningful connections through shared coffee experiences and conversations."
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Committed to ethical sourcing and environmentally responsible practices."
    }
  ];

  const milestones = [
    { year: "2010", title: "Founded", description: "Started as a small coffee cart with big dreams" },
    { year: "2015", title: "First Cafe", description: "Opened our flagship location in downtown" },
    { year: "2018", title: "Expansion", description: "Launched our roasting facility and online store" },
    { year: "2024", title: "Innovation", description: "Introducing new brewing methods and experiences" }
  ];

  const team = [
    {
      name: "Alex Rodriguez",
      role: "Founder & Head Roaster",
      bio: "Coffee enthusiast with 15+ years of experience in specialty coffee roasting."
    },
    {
      name: "Maria Santos",
      role: "Head Barista",
      bio: "Award-winning barista with a passion for creating the perfect cup."
    },
    {
      name: "David Kim",
      role: "Operations Manager",
      bio: "Ensuring every visit to BrewCafe is a memorable experience."
    }
  ];

  return (
    <div className="h-screen">
      {/* Hero Section */}
      <section className="relative text-gray-900 min-h-screen flex items-center">
        <div className="container-custom section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From humble beginnings to becoming a beloved coffee destination, 
              our journey is one of passion, quality, and community.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                A Passion That Brews Excellence
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2010, BrewCafe began as a simple dream: to serve the perfect cup of coffee. 
                What started as a small coffee cart has grown into a beloved community gathering place, 
                where every cup tells a story of dedication and craftsmanship.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our founder, Alex Rodriguez, discovered his passion for coffee while traveling through 
                South America. The rich aromas, complex flavors, and the way coffee brought people 
                together inspired him to create a space where others could experience the same magic.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-coffee-100 p-3 rounded-full">
                  <Coffee className="h-8 w-8 text-coffee-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">14+ Years</div>
                  <div className="text-gray-600">of Coffee Excellence</div>
                </div>
              </div>
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

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do, from sourcing beans to serving customers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="bg-coffee-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-coffee-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones that shaped our coffee story
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="bg-coffee-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">{milestone.year}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {milestone.title}
                </h3>
                <p className="text-gray-600">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-coffee-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The passionate people behind every perfect cup
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-coffee-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-12 w-12 text-coffee-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-coffee-600 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default About;
