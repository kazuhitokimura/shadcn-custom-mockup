import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="p-24">
      <h2 className="text-2xl font-bold">Title</h2>
      <p>Lorem Ipsum</p>
      <Button>Click me</Button>
    </main>
  );
}
