import TeamGrid from '../components/home/TeamGrid'
import SponsorCard from '../components/home/SponsorCard'
import sponsorsData from '../data/sponsors.json'
import Layout from '../components/Layout'
import config from '../data/config.json'

export default function Home() {
  const sponsors = sponsorsData.sponsors;
  const { name , acronym , description , email, room} = config;
  return (
    <Layout>
      <main id="app">
          <section id="home" className="min-h-screen flex flex-col items-center justify-center transition-colors duration-500 ease-in-out bg-fixed bg-center bg-cover bg-no-repeat px-4 bg-hero-pattern">
            <h1 className="text-white font-semibold text-6xl md:text-9xl mb-4">
              {acronym}
            </h1>
            <p className="text-white font-semibold uppercase text-lg md:text-xl">{name}</p>
          </section>
       


        <section id="about-me" className="bg-gray-100 dark:bg-gray-700 py-32 transition-colors duration-500 ease-in-out">
          <article className="container mx-auto flex flex-col items-center justify-center p-5">
            <header className="mb-4">
              <h2 className="font-semibold leading-tight text-2xl text-gray-900 dark:text-white border-b-4 border-accent">
                O que é o {acronym}?
              </h2>
            </header>
            <p className="lg:w-8/12 text-justify text-gray-800 dark:text-gray-100 leading-relaxed">
              {description}
            </p>
          </article>
        </section>

        <section id="team" className="bg-blue-50 dark:bg-gray-800 py-28 transition-colors duration-500 ease-in-out">
          <article className="container mx-auto flex flex-col items-center justify-center p-5">
            <header className="mb-16">
              <h2
                className="font-semibold leading-tight text-2xl text-gray-900 dark:text-white border-b-4 border-accent">
                A nossa equipa</h2>
            </header>
            <TeamGrid />
          </article>
        </section>

        <section id="partners" className="bg-gray-100 dark:bg-gray-700 py-28 transition-colors duration-500 ease-in-out">
          <article className="container mx-auto flex flex-col items-center p-5">
            <header className="mb-16">
              <h2
                className="font-semibold leading-tight text-2xl text-gray-900 dark:text-white border-b-4 border-accent">
                Os nossos parceiros</h2>
            </header>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              {
                sponsors.map((sponsor, index) => {
                  return <SponsorCard {...sponsor} key={index} />;
                })
              }
            </div>
          </article>
        </section>
      </main>
    </Layout>
  )
}
