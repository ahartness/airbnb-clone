import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";

const buttonLabels = [
    {key: 0, name: "Cancellation Flexibility"}, 
    {key: 1, name: "Type of Place"}, 
    {key: 2, name: "Price"}, 
    {key: 3, name: "Room and Beds"}, 
    {key: 4, name: "More Filters"}
]

function Search({ searchResults }) {
    const router = useRouter()
    const { location, guests, startDate, endDate } = router.query

    const formattedStartDate = format(new Date(startDate), "dd MMMM yy")
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy")
    const range = `${formattedStartDate} - ${formattedEndDate}`

    return (
        <div className="h-screen">
            <Head>
                <title>AirBnB - Results for {location}</title>
                <link rel="icon" href="/Airbnb.ico" />
            </Head>

            <Header placeholder={`${location} | ${range} | ${guests}`}/>

            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">300+ Stays  -  {range}  -  for {guests} guests</p>

                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        {/* Added Tailwind global css in styles/global.css */}
                        {buttonLabels.map( button => 
                            <p key={button.key} className="searchPageButton">
                                {button.name}
                            </p>
                        )}

                    </div>

                    {searchResults?.map(({ img, location, title, description,star, price, total, long, lat }) => (
                        <InfoCard
                            key={img}
                            img={img}
                            location={location}
                            title={title}
                            description={description}
                            star={star}
                            price={price}
                            total={total}
                        />
                    ))}

                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Search

export async function getServerSideProps(context) {
    const searchResults = await fetch("https://links.papareact.com/isz").then(res => res.json())

    return {
        props: {
            searchResults
        }
    }
}
