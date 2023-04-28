import { Footer } from "../../shared/components/grid/Footer/Footer";
import { Header } from "../../shared/components/grid/Header/Header";
import {
	BannerSection,
	ContentSection,
	FollowSection,
	OurTeamSection,
	TestimonialsSection,
} from "../../shared/components/sections";
import { AboutSection } from "../../shared/components/sections/AboutSection/AboutSection";

export const About = () => {
	return (
		<>
			<Header />
			<BannerSection text={"Make a reservation"}></BannerSection>
			<ContentSection></ContentSection>
			<AboutSection></AboutSection>
			<OurTeamSection></OurTeamSection>
			<TestimonialsSection></TestimonialsSection>
			<FollowSection></FollowSection>
			<Footer></Footer>
		</>
	);
};
