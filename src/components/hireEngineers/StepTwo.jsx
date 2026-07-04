import TechnologyCard from "./TechnologyCard";

const technologies = [
  "UX/UI Design",
  "React JS",
  "React Native",
  "Vue JS",
  "Laravel",
  "MERN Stack",
  "MEAN Stack",
  "Quality Assurance",
  "DevOps",
  "Others",
];

const StepTwo = ({
  formData,
  toggleTechnology,
  nextStep,
  prevStep,
}) => {
  return (
    <>
      <h2>
Do you have a preferred tech stack for this project?      </h2>

      <div className="technologyGrid">

        {technologies.map((tech) => (
          <TechnologyCard
            key={tech}
            title={tech}
            selected={formData.technologies.includes(
              tech
            )}
            onClick={() =>
              toggleTechnology(tech)
            }
          />
        ))}

      </div>

      <div className="buttons">
        <button
          className="secondary"
          onClick={prevStep}
        >
          ← Back
        </button>

        <button onClick={nextStep}>
          Next →
        </button>
      </div>
    </>
  );
};

export default StepTwo;