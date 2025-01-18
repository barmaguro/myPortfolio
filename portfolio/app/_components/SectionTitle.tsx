type Title = {
  title: string;
};

const SectionTitle = (props: Title) => {
  return (
    <div className="relative flex items-center justify-center ">
      <h2 className="text-2xl font-bold uppercase tracking-widest text-secondary md:text-3xl lg:text-4xl">{props.title}</h2>
    </div>
  );
};

export default SectionTitle;
