import AddNodeForm from "@/components/forms/AddNodeForm/AddNodeForm";
import { currentUser } from "@clerk/nextjs";

async function page() {
  const user = await currentUser();
  if (!user) {
    return null;
  }
  // console.log(user.userName);

  return (
    <main className="page-container">
      {/* <p>Add node</p> */}
      <AddNodeForm userName={user?.username || "unknown user"}></AddNodeForm>
      {/* <p>page bottom</p> */}
    </main>
  );
}

export default page;
