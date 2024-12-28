import Experience from "@/sections/experience/Experience";
import Hero from "@/sections/hero/Hero";
import RecentWorks from "@/sections/recent-works/RecentWorks";

const Home: React.FC = () => {
    return <>
        <Hero />
        <Experience />
        <RecentWorks />
    </>;
};

export default Home;