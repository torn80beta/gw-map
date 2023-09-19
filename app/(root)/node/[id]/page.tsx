import Node from "@/components/Node/Node";
import { currentUser } from "@clerk/nextjs";

async function page() {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  return (
    <section className="page-container justify-center">
      <Node />
    </section>
  );
}

export default page;
