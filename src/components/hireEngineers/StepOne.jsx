const StepOne = ({
  formData,
  handleChange,
  nextStep,
}) => {
  return (
    <>
      <div className="grid">

        <div className="field">
          <label>Full Name</label>

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Company / Organization</label>

          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Email Address</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label>Contact Number</label>

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

      </div>

      <div className="buttons end">
        <button onClick={nextStep}>
          Next →
        </button>
      </div>
    </>
  );
};

export default StepOne;