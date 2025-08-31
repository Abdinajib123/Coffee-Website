import { ArrowRight, Coffee } from 'lucide-react';

interface HomeProps {
  onNavigate?: (sectionId: string) => void;
}

const Home = ({ onNavigate }: HomeProps) => {
  const handleNavClick = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId);
    }
  };

  return (
    <div className="h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-coffee-900 via-coffee-800 to-coffee-700 text-white overflow-hidden h-screen flex items-center">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container-custom py-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Experience the Perfect
                <span className="text-coffee-300"> Casri</span>
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
    </div>
  );
};

export default Home;
