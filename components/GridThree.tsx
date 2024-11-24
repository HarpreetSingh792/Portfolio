import { ProjectCardProvider } from "./providers/ProjectCardProvider";

export const GridThree = () => {
  return (
    <div className=" relative md:px-8 py-8 grid justify-center items-center place-items-center min-[320px]:grid-cols-1 md:grid-cols-2 gap-16 ">
      <ProjectCardProvider
        imgUrl="p1.svg"
        title="Talk Wave - Real Time Team Collaboration App"
        subtitle="Talk-Wave is a real-time collaboration platform built with Next.js, Prisma, and WebSocket. It features live messaging, collaborative canvas, video/audio calling, and screen sharing. Users can manage servers with roles, join global chats, or private discussions, fostering seamless teamwork and community building."
        icons={["next.svg", "re.svg", "tail.svg", "clerk.png"]}
        link="https://github.com/HarpreetSingh792/Talk-Wave"
      />
      <ProjectCardProvider
        imgUrl="p2.svg"
        title="Trendora - Ecommerce App"
        subtitle="Trendora is an e-commerce app built with React, Tailwind CSS, MongoDB, and React Query. It features seamless product browsing, secure checkout, and real-time updates. The admin panel enables efficient management of products, orders, and users, offering a streamlined experience for both customers and admins."
        icons={["re.svg", "ts.svg", "mongodb.svg","express.png"]}
        link="https://trendora-front-end.vercel.app/"
      />
      <ProjectCardProvider
        imgUrl="comingP.svg"
        title="Go"
        subtitle="Go is a ride-hailing app inspired by Uber, built with React Native, Node.js, and Firebase. It features real-time ride booking, GPS tracking, secure payments, and a user-friendly interface for passengers and drivers. The app offers dynamic pricing and admin tools for efficient ride management."
        icons={["re.svg", "tail.svg", "redux.svg","mongodb.svg"]}
        link="https://github.com/HarpreetSingh792/"
        comingSoon={true}
      />
      <ProjectCardProvider
        imgUrl="comingP.svg"
        title="Learnopoly"
        subtitle="Learnopoly is an online learning platform inspired by Udemy, built with React, Tailwind CSS, MongoDB, and React Query. It offers course creation, enrollment, and progress tracking for users. Admins can manage courses, instructors, and students, fostering an interactive and engaging e-learning experience."
        icons={["re.svg", "tail.svg", "redux.svg","mongodb.svg"]}
        link="https://github.com/HarpreetSingh792/"
        comingSoon={true}
      />

    </div>
  );
};
