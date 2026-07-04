const StepThree = ({
  formData,
  handleChange,
  selectOption,
  prevStep,
  submitForm,
  loading,
}) => {
  return (
    <>
      <div className="selectionSection">

        <h3>No. of engineers?</h3>

        <div className="options">

          {["1-2", "2-5", "More than 5"].map(
            (item) => (
              <div
                key={item}
                className={`option ${
                  formData.engineers === item
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  selectOption(
                    "engineers",
                    item
                  )
                }
              >
                {item}
              </div>
            )
          )}

        </div>

      </div>

      <div className="selectionSection">

        <h3>Specify the hire type</h3>

        <div className="options">

          {["Full Time", "Part Time"].map(
            (item) => (
              <div
                key={item}
                className={`option ${
                  formData.hireType === item
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  selectOption(
                    "hireType",
                    item
                  )
                }
              >
                {item}
              </div>
            )
          )}

        </div>

      </div>

      <div className="selectionSection">

        <h3>Required Timeline</h3>

        <div className="options">

          {[
            "Immediately",
            "Within 2 Weeks",
            "Within 1 Month",
            "1-2 Months",
            "Flexible",
          ].map((item) => (
            <div
              key={item}
              className={`option ${
                formData.timeline === item
                  ? "selected"
                  : ""
              }`}
              onClick={() =>
                selectOption(
                  "timeline",
                  item
                )
              }
            >
              {item}
            </div>
          ))}

        </div>

      </div>

      <div className="field full">

        <label>Careful Additional Notes</label>

        <textarea
          rows="5"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        />

      </div>

      <div className="buttons">

        <button
          className="secondary"
          onClick={prevStep}
        >
          ← Back
        </button>

        <button
  onClick={submitForm}
  disabled={loading}
>
  {loading ? "Submitting..." : "Submit →"}
</button>

      </div>
    </>
  );
};

export default StepThree;