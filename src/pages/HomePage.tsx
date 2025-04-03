import { Home } from "../features/Home";
import { NavigationBar } from "../features/Navigation";
import { Skills } from "../features/Skills";
import { Projects } from "../features/Projects";

export function HomePage() {
  return (
    <>
      <NavigationBar />
      <Home />
      <Skills />
      <Projects />
    </>
  );
}
