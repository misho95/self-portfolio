const ProjectsPage = () => {
  const data = new Array(20).fill(0);

  return (
    <section className="grid grid-cols-3 gap-5">
      {data.map(() => {
        return <div className="p-5">1</div>;
      })}
    </section>
  );
};

export default ProjectsPage;
