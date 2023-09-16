import { SignIn } from "@clerk/nextjs";
import "./page.scss";

export default function Page() {
  return (
    <SignIn
      appearance={{
        elements: {
          footer: {
            display: "none",
          },
        },
      }}
    />
  );
}
