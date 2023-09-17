import AddNodeForm from "@/components/forms/AddNodeForm";
import { currentUser } from "@clerk/nextjs";

async function page() {
  const user = await currentUser();
  if (!user) {
    return null;
  }
  // console.log(user.userName);

  return (
    <main className="page-container">
      <p>Add node</p>
      <AddNodeForm user={user?.username || "unknown user"}></AddNodeForm>
    </main>
  );
}

export default page;
