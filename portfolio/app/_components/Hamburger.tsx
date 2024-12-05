function Hamburger() {
  return (
    <button className="w-9 h-5 relative">
      <span className="w-full h-px bg-primary block absolute top-0"></span>
      <span className="w-[70%] h-px bg-primary block absolute top-1/2 -translate-y-1/2"></span>
      <span className="w-1/3 h-px bg-primary block absolute top-full -translate-y-1/2"></span>
    </button>
  );
}

export default Hamburger;
