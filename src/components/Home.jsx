import Banner from "../shared/Banner"
import content_1 from "../assets/content_1.png"
const Home = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24" id="home">
      <Banner
        content_1={content_1}
        heading="Develop your skills 
without diligence"
        subheading="A good example of a paragraph contains a topic sentence, details and a conclusion. There are many different kinds of animals that live in China."
        btn1="Get Started"
        btn2="Dicount"
      />
    </div>
  )
}

export default Home
