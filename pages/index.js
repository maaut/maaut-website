import {
  faGithub,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
  faTwitch,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import profilePic from "../public/maaut.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>maaut</title>
      </Head>
      <div className="container">
        <div className="content">
          <div className="avatar">
            <Image
              src={profilePic}
              alt="Picture of the author"
              width={200}
              height={200}
              placeholder="blur" // Optional blur-up while loading
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="name">
            <span id="greetings">
              hi, my name is <span id="name"> Mauricio Torres </span>
            </span>
            <br />
            <span id="job">i'm a Software Engineer</span>
            <br />
            <span id="welcome">welcome to my portfolio</span>
            <br />
            <span id="coming-soon">coming soon...</span>
          </div>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/maaut/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://github.com/maaut"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.twitter.com/maaut_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.instagram.com/maaut/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.twitch.tv/toodhy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitch} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
