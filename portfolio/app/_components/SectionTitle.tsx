type Title = {
  title: string;
};

const SectionTitle = (props: Title) => {
  return (
    <div className="relative flex items-center justify-center ">
      <h2 className="text-2xl font-bold uppercase tracking-widest text-secondary">{props.title}</h2>
    </div>
  );
};

export default SectionTitle;
