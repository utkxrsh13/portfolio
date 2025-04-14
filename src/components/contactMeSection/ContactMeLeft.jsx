import ContactForm from "./ContactForm";
import ContactText from "./ContactText";

const ContactMeLeft = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <ContactText />
      <ContactForm />
    </div>
  );
};

export default ContactMeLeft;
