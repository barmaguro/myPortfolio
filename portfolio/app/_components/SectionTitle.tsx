type Title = {
  title: string;
};

const SectionTitle = (props: Title) => {
  return (
    <div className="flex justify-center items-center relative ">
      <h2 className="text-2xl uppercase font-bold text-secondary tracking-widest">{props.title}</h2>
    </div>
  );
};

export default SectionTitle;
