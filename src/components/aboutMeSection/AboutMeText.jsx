import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Utkarsh, a passionate Frontend Developer with a strong focus on building interactive and responsive user interfaces using React.js. I love crafting smooth, accessible, and pixel-perfect experiences on the web — turning ideas into functional, aesthetic, and scalable interfaces. I
        I&apos;m diving deeper into backend development, learning the full MERN stack to become a well-rounded full-stack developer. I&apos;m constantly exploring technologies like Node.js, Express, and MongoDB to complement my frontend skills and bring more value to the projects I work on. <br /> I&apos;m always excited about learning, collaborating, and building impactful web experiences. Let&apos;s create something awesome together!
      </p>
      <button className="border border-green rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange hover:text-black transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointe hover:text-black transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
