import Banner from "@/components/Banner";
import HomePage from "@/components/HomePage";
import Image from "next/image";
import WorkoutsPage from "./workouts/page";

export default function Home() {
  return (
    <div >
      <Banner/>
      <HomePage/>
    </div>
  );
}
