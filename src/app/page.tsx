import Databaseslist from "./UI/databases";
import Hero from "./UI/hero";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <Hero />
      <Databaseslist />
    </main>
  );
}