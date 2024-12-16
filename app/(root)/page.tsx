import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();

  console.log(session);
  return (
    <>
      <h1 className="text-5xl  font-black text-violet-600">
        Welcome to World of Next.js
      </h1>
    </>
  );
};

export default Home;
