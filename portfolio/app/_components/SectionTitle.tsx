type Title = {
  title: string;
};

const SectionTitle = (props: Title) => {
  return (
    <div className="relative flex items-center justify-center ">
      <h2 className="text-3xl font-bold uppercase tracking-widest text-secondary md:text-4xl lg:text-5xl font-mono">{props.title}</h2>
    </div>
  );
};

export default SectionTitle;
