import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Email from "../components/Email";
import ImageSlider from "../components/ImageSlider";
import CardsWidget from "../components/CardSection";
import SectionTitle from "../components/SectionTitle";
import VideoEmbedContainer from "../components/VideoEmbedContainer";
import PageHeaderWithImage from "../components/PageHeaderWithImage";
import TestimonyForm from "../components/testimonyForm";
export function sectionRenderer(section: any, index: number) {
  switch (section.__component) {
    case "sections.hero":
      return <Hero key={index} data={section} />;
    case "sections.slideshow":
      return <ImageSlider key={index} data={section} />;
    case "sections.features":
      return <Features key={index} data={section} />;
    case "sections.testimonials-group":
      return <Testimonials key={index} data={section} />;
    case "sections.pricing":
      return <Pricing key={index} data={section} />;
    case "sections.lead-form":
      return <Email key={index} data={section} />;
    case "sections.card-section":
      return <CardsWidget data={section} />;
    case "sections.section-title":
      return <SectionTitle data={section} />;
    case "sections.video-embed-collection":
      return <VideoEmbedContainer data={section} />;
    case "sections.page-header-with-image":
      return <PageHeaderWithImage data={section} />;
    case "sections.testimonyform":
      return <TestimonyForm />;

    default:
      return null;
  }
}
