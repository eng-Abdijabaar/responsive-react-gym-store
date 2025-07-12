import { useState } from "react"
import { ProductsData } from "../../mockData/data"
import { motion } from "framer-motion";
const TabComb = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Yoga', 'Fitness', 'Muscles'];

  const filteredCards =
    activeTab === 'All' ? ProductsData :
      ProductsData.filter((card) =>
        card.category === activeTab);
  return (
    <>
      <div className="px-12 md:px-18 md:py-12 my-12 md:my-16">
        {/* tabs button section */}
        <div className="flex space-x-4 mb-4 p-6">
          {tabs.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`py-2 px-4 rounded ${activeTab === tab ? "bg-primary-color" : "bg-gray-200 text-gray-700"}`}>
              {tab}
            </button>
          ))}
        </div>
        {/* tabs cards section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {
            filteredCards.map((card) => (
              <motion.div
               key={card.id} 
               initial={{opacity:0, x:10}}
               whileInView={{opacity:1, x:0}}
               className="p-4 border rounded shadow-lg space-y-2">
                <img src={card.image} alt="" className="h-[240px] w-full object-cover"/>
                <p className="text-xl font-semibold">{card.category}</p>
                <p className="text-gray-500">{card.price}</p>
              </motion.div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default TabComb