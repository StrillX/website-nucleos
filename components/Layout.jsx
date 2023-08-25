import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import DarkModeButton from '../components/DarkModeButton'
import { ThemeContext } from '../components/ThemeProvider'
import { useContext } from 'react'

import { FiMail } from 'react-icons/fi'
import { GiPositionMarker } from 'react-icons/gi'
import { BsInstagram, BsDiscord, BsGithub } from 'react-icons/bs'
import config from '../data/config.json'

const Layout = ({ children }) => {
  const [theme, toggle] = useContext(ThemeContext)

  const { name, keywords, socials, acronym, email, room } = config
  return (
    <div className={theme}>
      <Head>
        <meta name="description" content={name} />
        <meta name="keywords" content={keywords} />
        <title>{acronym}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {children}

      <DarkModeButton />

      <footer
        id="contacts"
        className="w-full bg-gray-700 dark:bg-gray-900 pt-24 transition-colors duration-500 ease-in-out"
      >
        <div className="container mx-auto">
          <div className="flex flex-row justify-evenly items-start mb-5">
            <ul className="flex flex-col justify-start">
              { socials['instagram'] || socials['discord'] || socials['github'] ?
                <li>
                <h2 className="text-xl text-white dark:text-blue-200 font-semibold mb-4">
                  Segue-nos
                </h2>
              </li>
              :null}

              {socials['instagram'] ? (
                <li className="mb-3">
                  <Link
                    className="text-base text-accent dark:text-accent-dark flex items-center"
                    target="_blank"
                    href={socials['instagram']}
                    rel="noopener"
                  >
                    <BsInstagram className="text-3xl mr-2" />
                    Instagram
                  </Link>
                </li>
              ) : null}

              {socials['discord'] ? (
                <li className="mb-3">
                  <Link
                    className="text-base text-accent dark:text-accent-dark flex items-center"
                    target="_blank"
                    href={socials['discord']}
                    rel="noopener"
                  >
                    <BsDiscord className="text-3xl mr-2" />
                    Discord
                  </Link>
                </li>
              ) : null}

              {socials['github'] ? (
                <li className="mb-3">
                  <Link
                    className="text-base text-accent dark:text-accent-dark flex items-center"
                    target="_blank"
                    href={socials['github']}
                    rel="noopener"
                  >
                    <BsGithub className="text-3xl mr-2" />
                    Github
                  </Link>
                </li>
              ) : null}
            </ul>
            <ul className="flex flex-col justify-start">
              { email || room ?
                <li>
                <h2 className="text-xl text-white dark:text-blue-200 font-semibold mb-4">
                  Encontra-nos
                </h2>
              </li>:null}
              { email ?
                <li className="mb-3">
                <a
                  className="text-base text-accent dark:text-accent-dark flex items-center"
                  href="mailto:necc@di.uminho.pt"
                >
                  <FiMail className="text-3xl mr-2" /> {email}
                </a>
              </li>:null}

              { room ?
                <li className="mb-3">
                <p className="text-base text-accent dark:text-accent-dark mb-2 flex items-center">
                  <GiPositionMarker className="text-3xl mr-2" />
                  {room}
                </p>
              </li>
              : null}
            </ul>
          </div>

          <p className="text-bold text-xs text-blue-300 font-mono text-center w-full py-7">
            <span className="font-sans">&copy;</span> Sponsored by 
            NECC 2023 | Developed
            with 💖
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
