import React from "react";
import styles from "./BookingForm.module.css";

const BookingForm = ({
  filteredDoctors,
  formData,
  setFormData,
  step,
  nextStep,
  prevStep,
  handleExperienceChange,
  handleSubmit,
  closeModal,
}) => {
  

  const isStepValid = () => {
    switch (step) {
      case 1:
        if (!formData.name || isNaN(formData.phone)) {
          alert("Please enter a valid phone number.");
          return false;
        }
        return true;
      case 2:
        if (
          !formData.age ||
          isNaN(formData.age) ||
          formData.age < 5 ||
          formData.age > 100 ||
          !formData.city ||
          !formData.company
        ) {
          if (!formData.age || isNaN(formData.age)) {
            alert("Please enter a valid age.");
          } else if (formData.age < 5) {
            alert("Age should be at least 5 years.");
          } else if (formData.age > 100) {
            alert("Age should not exceed 100 years.");
          } else {
            alert("Please fill in all required fields with valid data.");
          }
          return false;
        }
        return true;
      case 3:
        if (!formData.complaints || (formData.age < 40 && formData.experience === "")) {
          alert("Please fill in all required fields with valid data.");
          return false;
        }
        return true;
      default:
        return true;
    }
  };





  const handleNextStep = () => {
    if (isStepValid()) {
      nextStep();
    } 
  };

  const handleStepChange = (newStep) => {
   
    if (newStep === 1) {
      localStorage.setItem('patientName', formData.name);
    } else if (newStep === 2) {
      localStorage.setItem('patientCity', formData.city);
    }

    nextStep();
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.bookingForm}>
        {step === 1 && (
          <>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />

            <label htmlFor="phone">Phone number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
            />

            <button
              type="button"
              onClick={handleNextStep}
              className={styles.nextButton}
            >
              Next
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
              required
            />

            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            />

            <label htmlFor="company">Company:</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
            />

            <button
              type="button"
              onClick={prevStep}
              className={styles.prevButton}
            >
              Previous
            </button>
            <button
              type="button"
              onClick={handleNextStep}
              className={styles.nextButton}
            >
              Next
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <label htmlFor="complaints">Chief complaints:</label>
            <input
            className={styles.complaintsInput}
      type="text"
      id="complaints"
      name="complaints"
      value={formData.complaints}
      onChange={(e) =>
        setFormData({ ...formData, complaints: e.target.value })
      
      }
      required
    />

            {formData.age >= 40 && (
              <div>
                <label htmlFor="experience">
                  Previous experience with physiotherapy:
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleExperienceChange}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            )}

            <button
              type="button"
              onClick={prevStep}
              className={styles.prevButton}
            >
              Previous
            </button>
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>

          </>
        )}

        <span className={styles.close} onClick={closeModal}>
          &times;
        </span>
      </form>


   
    </div>
  );
};

export default BookingForm;
