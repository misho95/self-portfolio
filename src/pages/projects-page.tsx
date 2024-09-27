const ProjectsPage = () => {
  const data = new Array(20).fill(0);

  return (
    <section className="grid grid-cols-3 gap-5">
      {data.map(() => {
        return (
          <div className="p-5 flex flex-col gap-3">
            <h4 className="font-semibold">Designo mulit page website</h4>
            <img
              src="src/assets/web.jpg"
              className="rounded-sm object-cover object-center"
            />
          </div>
        );
      })}
    </section>
  );
};

export default ProjectsPage;
