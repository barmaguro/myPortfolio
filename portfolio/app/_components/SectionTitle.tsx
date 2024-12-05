type Title = {
  title: string;
};

const SectionTitle = (props: Title) => {
  return (
    <div className="flex justify-center items-center  border-y-1 border-primary py-10">
      <h2 className="text-2xl uppercase">{props.title}</h2>
    </div>
  );
};

export default SectionTitle;
