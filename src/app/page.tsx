import { Metadata } from "next";
import LP from "@/components/LP/LP";

export const metadata: Metadata = {
  title:
    "SwissP2P",
  description: "This is Peer to Peer Platform",
};

export default function Home() {
  return (
    <div className="bg-white h-full">
      <LP />
      {/* <DefaultLayout>
        <Dashboard />
      </DefaultLayout> */}
    </div>
  );
}
