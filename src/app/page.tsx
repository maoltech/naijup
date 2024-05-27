import { blogHome } from "../content";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPost from "../components/Home/FeaturedPost";
import RecentPost from "../components/Home/RecentPost";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={blogHome} />
      <FeaturedPost blogs={blogHome} />
      <RecentPost blogs={blogHome} />
    </main>
  );
}
