import Heading from "../Heading"
import NewsCard from "./NewsCard"

const NewsList = ({articles=[], text="Latest"}) => {
  return (
    <div>
        <section className="mx-auto max-w-7xl px-4 py-12 ">
            <Heading text={text} />
            <div className="masonry sm:masonry-sm md:masonry-md">
              {articles.map((article, index)=>(
                  <NewsCard key={index} {...article} />
              ))}
            </div>
        </section>
    </div>
  )
}


export default NewsList