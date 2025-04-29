import LogoHasText from "../LogoHasText";

export default function index() {
  return (
    <footer className="container mx-auto mt-10 flex items-baseline justify-between px-4 py-5">
      <LogoHasText />
      <small className="text-secondary">&copy;2024 motodesign</small>
    </footer>
  );
}
