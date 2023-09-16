import "./page.scss";
import { currentUser } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();
  // console.log(user);
  return <main className="page-container">Home page</main>;
}
