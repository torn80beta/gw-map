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
      <AddNodeForm userName={user?.username || "unknown user"}></AddNodeForm>
    </main>
  );
}

export default page;
