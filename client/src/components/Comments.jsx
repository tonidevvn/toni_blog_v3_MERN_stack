import { Link } from "react-router";
import { IKImage } from "./IKImage";

const fetchedComments = [
    {
        id: 1,
        author: {
            name: "Alice",
            avatar: "/userAvatar2.png",
            link: "/author/alice",
        },
        time: "2024-06-10 10:15",
        content:
            "Great post! I learned a lot from your detailed explanation about the MERN stack. The way you broke down each component made it really easy to follow, and I appreciate the code examples you included.",
    },
    {
        id: 2,
        author: {
            name: "Bob",
            avatar: "/userAvatar3.png",
            link: "/author/bob",
        },
        time: "2024-06-10 11:00",
        content:
            "Thanks for sharing this information. I was struggling to understand how React interacts with Express, but your post clarified a lot of my doubts. Looking forward to more articles like this!",
    },
    {
        id: 3,
        author: {
            name: "Charlie",
            avatar: "/userAvatar4.png",
            link: "/author/charlie",
        },
        time: "2024-06-10 12:30",
        content:
            "Interesting perspective, I agree with your points. The section on MongoDB integration was especially helpful, and I liked how you addressed common pitfalls that beginners face.",
    },
    {
        id: 4,
        author: {
            name: "Diana",
            avatar: "/userAvatar5.png",
            link: "/author/diana",
        },
        time: "2024-06-10 13:45",
        content:
            "This was a very insightful read. I appreciate the troubleshooting tips you provided for deployment issues. It saved me a lot of time when I was setting up my own project.",
    },
    {
        id: 5,
        author: {
            name: "Ethan",
            avatar: "/userAvatar6.png",
            link: "/author/ethan",
        },
        time: "2024-06-10 14:20",
        content:
            "Your writing style is clear and concise, which makes complex topics much easier to understand. The real-world examples you used really helped solidify my understanding of the backend processes.",
    },
];
const Comments = () => {
  return (
    <div className="flex flex-col w-full lg:w-2/3 my-8 gap-8 ">
      {fetchedComments.map((comment, index) => (
        <div className="bg-white flex flex-col p-4 gap-2 rounded-xl">
          <div className="author-info flex items-center gap-4">
            <div className="avatar">
              <Link to={comment.author.link}>
                <IKImage
                  src={comment.author.avatar}
                  w={42}
                  className="object-cover object-center border-white rounded-full"
                />
              </Link>
            </div>
            <div className="author">
              <h4 className="text-base m-0">
                <Link to={comment.author.link}>{comment.author.name}</Link>
              </h4>
            </div>
            <span className="text-gray-500">{comment.time}</span>
          </div>
          <div className="comment-content">{comment.content}</div>
        </div>
      ))}
    </div>
  );
}

export default Comments