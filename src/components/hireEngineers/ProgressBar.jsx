import { motion } from "framer-motion";

const ProgressBar = ({ step }) => {
  const progressWidth =
    step === 1 ? "0%" : step === 2 ? "50%" : "100%";

  return (
    <>
      <div className="progressBar">
        <motion.div
          className="progress"
          animate={{ width: progressWidth }}
          transition={{ duration: 0.4 }}
        />

        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className={`circle ${step >= item ? "active" : ""}`}
          >
            {item.toString().padStart(2, "0")}
          </div>
        ))}
      </div>

      <div className="labels">
        <span>Your Information</span>
        <span>Project Information</span>
        <span>Let's Finalize</span>
      </div>
    </>
  );
};

export default ProgressBar;