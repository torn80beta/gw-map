import "./page.scss";
import { currentUser } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();
  // console.log(user);
  return (
    <main className="homePage">
      Home page
      {/* <div>{user}</div> */}
    </main>
  );
}
