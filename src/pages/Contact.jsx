import Section from "../components/ui/Section";
import bgImage from "../../public/images/about-bg.jpg";
import phoneIcon from "../../public/images/phone.png";
import emailIcon from "../../public/images/email.png";
import locationIcon from "../../public/images/location.png";
import Container from "../components/ui/Container";
import ContactCards from "../components/sections/ContactCards";
import ContactForm from "../components/sections/ContactForm";
import { CLINICDATA } from "../data/clinic";

export default function Contact() {
  const contactData = [
    {
      id: 1,
      title: "Our Location",
      excerpt1: "House #5, Street Number #98,",
      excerpt2: "brasilia- 70000-000, Brazil.",
      image: locationIcon,
    },
    {
      id: 2,
      title: "Our Email Address",
      excerpt1: "contact@DOGRI.com",
      excerpt2: "support@DOGRI.com",
      image: emailIcon,
    },
    {
      id: 3,
      title: "Contact Phone Number",
      excerpt1: "+380961381876",
      excerpt2: "+380961381877",
      image: phoneIcon,
    },
  ];
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="h-80 bg-cover bg-center flex flex-col justify-center"
      >
        <Container className="text-white text-center">
          <div>
            <h1 className="text-[64px] font-bold">Contact PharmaCare</h1>
            <p className="my-5 font-bold text-[20px]">{`Home > Contact Us`}</p>
          </div>
        </Container>
      </div>

      <Container>
        <ContactCards contactData={contactData} />
      </Container>
      <Section title="Contact" className="">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4216.433331900906!2d90.36996032419312!3d23.83718617432321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1693682874850!5m2!1sen!2sbd"
              frameborder="0"
              className="w-full h-full"
            ></iframe>
          </div>
          <ContactForm clinicData={CLINICDATA} />
        </div>
      </Section>
    </>
  );
}
