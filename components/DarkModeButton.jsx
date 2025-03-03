import { useContext } from 'react';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { ThemeContext } from './ThemeProvider';

export default function DarkModeButton() {
    const [theme, toggle] = useContext(ThemeContext);

    return (
        <button id="darkmode"
            className="fixed right-4 bottom-16 z-10 h-14 w-14 rounded-full bg-gray-900 dark:bg-gray-100 focus:border-accent flex items-center justify-center focus:outline-accent focus:ring-2 ring-accent transition-colors duration-500 ease-in-out"
            role="switch" aria-checked={(theme === "dark") ? "true" : "false"} aria-label="darkmode switch" onClick={toggle}>
            {
                (theme === "dark")
                    ? <BsSun className="text-primary text-2xl" />
                    : <BsMoonStars className="text-primary text-2xl" />
            }
            <span className="icon-moon-outline text-4xl text-accent dark:text-primary"></span>
        </button>
    );
} 
