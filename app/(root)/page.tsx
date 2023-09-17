import "./page.scss";
import { currentUser } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();
  // console.log(user);
  return (
    <main className="page-container">
      <div className="">test</div>
      <p>Home page</p>
    </main>
  );
}
