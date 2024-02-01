import { useState } from "react"
import { motion } from "framer-motion"
import { fadeIn } from "../variants"


const Pricing = () => {
const [isYearly, setIsYearly] = useState(false)

  const packages = [
    {
      name: "Start",
      monthlyPrices: 19,
      yearlyPrices: 199,
      description:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      green: "/src/assets/green.png",
    },
    {
      name: "Advanced",
      monthlyPrices: 39,
      yearlyPrices: 399,
      description:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      green: "/src/assets/green.png",
    },
    {
      name: "Premium",
      monthlyPrices: 59,
      yearlyPrices: 599,
      description:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      green: "/src/assets/green.png",
    },
  ]

  return (
    <div className="md:px-14 p-4 max-w-s mx-auto py-10" id="pricing">
      <div className="text-center">
        <h2 className="md:text-5xl text-3xl font-extrabold">
          Here are all our plans
        </h2>
        <p className="text-grey md:1/3 mx-auto px-4 ">
          A simple paragraph is comprised of three major components, which is
          often a declarative sentence
        </p>

        {/* toggle */}
        <div className="mt-16">
          <label
            htmlFor="toggle"
            className="inline-flex items-center cursor-pointer"
          >
            <span className="mr-8 text-2xl font-semibold">Monthly</span>
            <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-200ease-in-out ">
              <div
                className={`w-6 h-6 rounded-full transition duration-200 ease-in-out ${
                  isYearly ? "bg-blue ml-8" : "bg-gray-500"
                }`}
              ></div>
            </div>
            <span className="ml-8 text-2xl font-semibold">Yearly</span>
          </label>
          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
        </div>
      </div>

      {/* cards */}
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto "
      >
        {packages.map((pkg, index) => (
          <div key={index} className="border py-10 md:px-6 px-4 shadow-lg ">
            <h3 className="text-3xl font-bold text-center text-blue">
              {pkg.name}
            </h3>
            <p className="text-grey text-center my-5">{pkg.description}</p>
            <p className="mt-5 text-center text-purple text-4xl font-bold">
              {isYearly ? `$${pkg.yearlyPrices}` : `$${pkg.monthlyPrices}`}{" "}
              <span className="text-base text-grey font-medium">
                /{isYearly ? "year" : "month"}
              </span>
            </p>
            <ul className="mt-4 space-y-2 px4">
              <li className="flex gap-3 items-center">
                <img src={pkg.green} alt="" className="w-4 h-4" />
                Videos of Lessons
              </li>
              <li className="flex gap-3 items-center">
                <img src={pkg.green} alt="" className="w-4 h-4" />
                Homework Check
              </li>
              <li className="flex gap-3 items-center">
                <img src={pkg.green} alt="" className="w-4 h-4" />
                Addition Practical Task
              </li>
              <li className="flex gap-3 items-center">
                <img src={pkg.green} alt="" className="w-4 h-4" />
                Monthly Conferences
              </li>
            </ul>
            <div className="w-full mx-auto mt-8 flex items-center justify-center">
              <button className="btnPrimary">Get Started</button>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Pricing
