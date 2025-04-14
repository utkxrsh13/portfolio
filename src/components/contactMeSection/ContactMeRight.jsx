// import Tooltip1 from "../ui/Linkedin";
import Button from '../ui/Linkedin.jsx'
import Button1 from '../ui/Tooltip';
import Tooltip from "../ui/Tooltip";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img
        src="../../public/images/email-image.png"
        alt="email image"
        className="max-w-[300px]"
      />
      <ContactInfo />
      <div className="flex gap-6">
      <Button1 />
      <Button />
      </div>
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;
