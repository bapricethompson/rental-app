import { useState } from 'react';

const FaqList = ({ questions}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <ul className="space-y-4">
        {questions.map((q, index) => {
          const isOpen = openIndex === index;
          return (
            <li
              key={index}
              className="border border-gray-300 rounded-lg p-4 shadow-sm transition hover:shadow-md"
            >
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full flex items-center justify-between text-left text-lg font-medium focus:outline-none"
              >
                <span>{q.question}</span>
                <span
                  className={`material-icons transform transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                >
                  expand_more
                </span>
              </button>
              {isOpen && (
                <p className="mt-2 text-black transition duration-300 ease-in-out">
                  {q.answer}
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FaqList;
