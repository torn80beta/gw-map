import { fetchNodes } from "@/lib/actions/node.actions";
import "./page.scss";
import { currentUser } from "@clerk/nextjs";
import SearchForm from "@/components/forms/SearchForm/SearchForm";

export default async function Home() {
  const user = await currentUser();
  const nodes = await fetchNodes(1, 10);

  return (
    <main className="page-container">
      <h3 className="font-semibold">{`Hello, ${user?.username}!`}</h3>
      <SearchForm />
      <p>Current number of nodes: {nodes.nodes.length}</p>
      <p>page bottom</p>
    </main>
  );
}
