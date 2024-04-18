import { AboutMeSection } from "./_components/AboutMeSection";
import { ContactSection } from "./_components/ContactSection";
import { ProjectsSection } from "./_components/ProjectsSection";
import { SkillsSection } from "./_components/SkillsSection";
import { WelcomeSection } from "./_components/WelcomeSection";

const HomePage = () => {
    return ( 
        <div className="flex flex-col gap-28 px-4">
            <WelcomeSection />
            <AboutMeSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
        </div>
    );
}
 
export default HomePage;