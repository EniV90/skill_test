import chair from "../assets/chair.png"
import globe from "../assets/globe.png"
import { motion } from "framer-motion"
import { fadeIn } from "../variants"

const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-y-10" id="about">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2"
        >
          <img src={chair} alt="" />
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-2/5"
        >
          <h2 className="md:text-5xl text-3xl font-bold text-blue mb-5 loading-normal">
            {" "}
            We have been improving our product{" "}
            <span className="text-purple">for many years.</span>
          </h2>
          <p className="text-grey text-lg mb-7">
            A good example of a paragraph contains a topic conclusion. There are
            many different kinds of animals that live in China.
          </p>
          <button className="btnPrimary">Get Started</button>
        </motion.div>
      </div>

      <div className="md:px-14 p-4 max-w-s mx-auto">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="md:w-1/2"
          >
            <img src={globe} alt="" />
          </motion.div>

          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="md:w-2/5"
          >
            <h2 className="md:text-5xl text-3xl font-bold text-blue mb-5 loading-normal">
              {" "}
              You can Practice at any{" "}
              <span className="text-purple">time convinent for you.</span>
            </h2>
            <p className="text-grey text-lg mb-7">
              A good example of a paragraph contains a topic conclusion. There
              are many different kinds of animals that live in China.
            </p>
            <button className="btnPrimary">Get Started</button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
