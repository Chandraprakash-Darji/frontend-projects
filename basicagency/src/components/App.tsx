import { AboutUs, Engagements, FetauredNews, Footer, Hero, Nav, Work } from ".";

function App() {
    return (
        <div
            className="text-dark bg-light dark:text-primary dark:bg-dark min-h-screen font-normal "
            style={{ fontFamily: "'Poppins',sans-serif" }}
        >
            <Nav />
            <Hero />
            <Work />
            <Engagements />
            <AboutUs />
            <FetauredNews />
            <Footer />
        </div>
    );
}

export default App;
