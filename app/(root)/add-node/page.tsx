import AddNodeForm from "@/components/forms/AddNodeForm/AddNodeForm";
import { currentUser } from "@clerk/nextjs";

async function page() {
  const user = await currentUser();
  if (!user) {
    return null;
  }

  return (
    <section className="page-container">
      <AddNodeForm userName={user?.username || "unknown user"} />
    </section>
  );
}

export default page;
