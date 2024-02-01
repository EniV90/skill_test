import Banner from "../shared/Banner"
import Banner2 from "../assets/Banner2.png"

const Newsletter = () => {
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
      <Banner
        content_1={Banner2}
        heading="Each Student Can share their discount codes with friends"
        subheading={
          "A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence."
        }
        btn1={"I have a code"}
        btn2={""}
      />
    </div>
  )
}

export default Newsletter