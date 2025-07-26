import { Link } from "react-router";
import { IKImage } from "./IKImage";

const author = {
  name: "Toni Pham",
  avatar: "/userAvatar.png",
  bio: "Fullstack developer, blogger, and tech enthusiast. Sharing knowledge and building cool stuff.",
  link: '/author/toni'
};
const AuthorBio = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="m-0">Author</h3>
      <div className="author-info flex justify-between items-center">
        <div className="avatar w-1/3">
          <Link to={author.link}>
            <IKImage
              src={author.avatar}
              w={60}
              className="object-cover object-center border-white rounded-full"
            />
          </Link>
        </div>
        <div className="w-2/3">
          <h4 className="text-base">
            <Link to={author.link}>{author.name}</Link>
          </h4>
        </div>
      </div>
      <div className="author-bio text-sm">{author.bio}</div>
      <div className="author-contacts flex gap-2">
        <Link to="/">
          <IKImage src="/facebook.svg" alt="FB" className="rounded-sm" w={32} />
        </Link>
        <Link to="/">
          <IKImage
            src="/instagram.svg"
            alt="IG"
            className="rounded-sm"
            w={32}
          />
        </Link>
      </div>
    </div>
  );
};

export default AuthorBio;
