import Skills from "@/components/Skills/Skills";
import RecentProjects from "@/components/RecentProjects/RecentProjects";
import MainProfile from "@/components/share/MainProfile/MainProfile";

const HomePage = async () => {
  return (
    <div>
      <div className="container mx-auto px-5 xl:px-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <MainProfile />
          <Skills />
          <RecentProjects />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
