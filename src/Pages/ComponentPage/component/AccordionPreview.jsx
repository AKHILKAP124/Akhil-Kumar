import { useState } from "react";

const AccordionPreview = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto border border-gray-200 dark:border-gray-600 rounded-lg">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200 dark:border-gray-600">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center p-4 text-left text-sm font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition cursor-pointer"
          >
            {item.title}
            <span className="ml-2">{openIndex === index ? "−" : "+"}</span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-40 p-4" : "max-h-0"
            }`}
          >
            <p className="text-gray-600 dark:text-gray-400 text-xs">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionPreview;