"use client";
import FaqList from "../components/FaqList";
import { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "How does gear rental work?",
      answer:
        "Browse available listings near your destination, request the gear you want, arrange a pick-up or delivery, and return it when you are done. It is that simple.",
    },
    {
      question: "Who can rent gear?",
      answer:
        "Anyone over the age of 18 with a valid ID and payment method can rent through our platform.",
    },
    {
      question: "What kinds of gear are available?",
      answer:
        "Our community rents out a variety of gear. New gear is added regularly—check back often.",
    },
    {
      question: "Is the gear available in my area?",
      answer:
        "Availability depends on your location. Enter your zip code or destination city to browse nearby gear listings.",
    },
    {
      question: "How much does it cost?",
      answer:
        "Prices are set by the gear owners. You will see the cost per day, any deposit or cleaning fees, and discounts for multi-day rentals.",
    },
    {
      question: "What happens if the gear is damaged or lost?",
      answer:
        "We have a damage protection policy in place. Minor wear and tear is expected, but renters are responsible for significant damage, loss, or theft. Additional coverage options may be available at checkout.",
    },
    {
      question: "Can I list my own gear?",
      answer:
        "Absolutely! If you have well-maintained gear sitting unused, you can earn extra income by listing it on our platform. We will guide you through the process, from photos to pricing.",
    },
    {
      question: "Do you offer guided experiences?",
      answer:
        "Not yet—but we are working on it! We are planning to offer bundled experiences like guided hikes, tours, or classes in the future.",
    },
  ];

  const [showFaqs, setShowFaqs] = useState(true);
  return (
    <div className="py-[40px]">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Frequently Asked Questions
      </h1>
      <FaqList questions={faqs} />
    </div>
  );
};

export default FAQ;
