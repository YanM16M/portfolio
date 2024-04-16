import { ProjectsSection } from "./_components/ProjectsSection";
import { SkillsSection } from "./_components/SkillsSection";
import { WelcomeSection } from "./_components/WelcomeSection";

const HomePage = () => {
    return ( 
        <div className="flex flex-col gap-40">
            <WelcomeSection />
            <ProjectsSection />
            <SkillsSection />
        </div>
    );
}
 
export default HomePage;