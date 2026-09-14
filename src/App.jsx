import { useState, useEffect } from 'react';
import Nav from './Components/navbar';
import Hero from './Components/hero';
import TechCard from './Components/card';
import YourStack from './Components/stack';
import Footer from './Components/footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {

  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState([]);

 useEffect(() => {

    fetch('/Technology.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load data');
        return res.json();
      })


      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })

  
   .catch((err) => {
        console.error(err);
        setLoading(false);

      });  }, []);


  const handleAddToStack = (tech) => {

    const isAlreadyAdded = stack.some((item) => item.id === tech.id);
    if (isAlreadyAdded) {

      toast.warn(`${tech.name} is already in your stack!`, { autoClose: 2000 });
      return;
    } 
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack!`, { autoClose: 2000 });
  }; 
  
  const handleRemoveFromStack = (id, name) => {

    setStack(stack.filter((item) => item.id !== id));
    toast.info(`${name} removed from stack`, { autoClose: 2000 });
  };


  const handleRemoveAll = () => {

    if (stack.length === 0) return;
    setStack([]);
    toast.error('All technologies removed from your stack', { autoClose: 2000 });
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-800">
      
      <ToastContainer position="top-right" />

      
      <Nav />

      <main>

        <Hero />

 <section id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Explore the <span className="text-pink-600">Technologies</span>
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>
              
   {loading ? (
            <div className="py-20 flex flex-col items-center justify-center space-y-3">
              <div className="w-10 h-10 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-sm font-medium text-gray-500">Loading technologies...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
             
              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {technologies.map((tech) => {
                  const isAdded = stack.some((item) => item.id === tech.id);
                  return (
                    <TechCard
                      key={tech.id}
                      tech={tech}
                      onAdd={handleAddToStack}
                      isAdded={isAdded}
                    />
                  );
                })}
              </div>
    

             <div className="lg:col-span-1">
                <YourStack
                  stack={stack}
                  onRemove={handleRemoveFromStack}
                  onRemoveAll={handleRemoveAll}
                />
              </div>
            </div>
          )}


        </section>
      </main>

    
      <Footer />
    </div>
  );
}





