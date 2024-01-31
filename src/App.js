
import { useState,useEffect} from 'react';

import BookingForm from './components/BookingForm/BookingForm';
import Hero from './components/HeroSection/Hero';
import Navbar from "./components/Navbar/Navbar"
import Testimonials from './components/Testimonials/Testimonials';
import styles from "./App.module.css"
import Form from "./Assets/form3D.png"
import axios from 'axios';
import { findAllInRenderedTree } from 'react-dom/test-utils';




function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredDoctors, setFilteredDoctors] = useState([]); 
  const [doctors, setDoctors] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [patients, setPatients] = useState([]);
  const [isFilteredDoctorsModalOpen, setIsFilteredDoctorsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [doctorsData, setDoctorsData] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    city: '',
    company: '',
    complaints: '',
    experience: 'no',
  });

  const config = {
    endpoint: `https://fixhealth-rmjx.onrender.com`,
  };

  const performAPICall = async () => {
 
    try {
      const response = await axios.get("https://fixhealth-rmjx.onrender.com/doctors");
      // const { data } = response;

      setDoctorsData(response.data);
    
      console.log("api call made",response.data);
    
      // return response.data;
    } catch (error) {
      console.log("Error fetching doctor data");
     
    }
    
  };

 






  
  
  const handleFormSubmit = (formData) => {
 console.log(formData);
  };



  const openModal = () => {
    setFilteredDoctors([]); 
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
   
    setStep(1);
    setFormData({
      name: '',
      phone: '',
      age: '',
      city: '',
      company: '',
      complaints: '',
      experience: 'no',
    });
   
  };

  
const handleCloseFilteredModal =() =>{
  setIsFilteredDoctorsModalOpen(true);
  setFilteredDoctors([]); 
}

 



 
  const handleSubmit = async (event) => {
    event.preventDefault();
  
 
 
   
      const doctorsInCity = doctorsData.filter(
        (doctor) => doctor.city.toLowerCase() === formData.city.toLowerCase()
      );
 
      console.log(doctorsInCity);
  
  
      setFilteredDoctors(doctorsInCity);
  
      
      localStorage.removeItem('patientName');
      localStorage.removeItem('patientCity');
  
      
      closeModal();
    
  };

console.log(filteredDoctors)

  const handleExperienceChange = (event) => {
    const experience = event.target.value;
    setFormData((prevFormData) => ({ ...prevFormData, experience }));
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };




  useEffect(() => {
    setStep(1);
  }, []);


  useEffect(() => {
    performAPICall();
  }, []);

  
  return (
    <div className="App">
<Navbar openModal={openModal}/>
<Hero/>
<div className={styles.formImgWrapper} onClick={openModal}>
    <img src={Form} alt="form" className={styles.formImg}/>
</div>

{isModalOpen && (<BookingForm 
filteredDoctors={filteredDoctors}
closeModal={closeModal}
formData={formData}
          setFormData={setFormData}
          step={step}
          nextStep={nextStep}
          prevStep={prevStep}
          handleExperienceChange={handleExperienceChange}
          handleSubmit={handleSubmit}
       
          />)}
            {filteredDoctors.length > 0 && (
  <div className={styles.filteredDoctors}>
    <h2>Available Doctors  {formData.city}</h2>
    <ul>
      {filteredDoctors.map((doctor, index) => (
        <li key={index}>
          {doctor.name} - {doctor.expertise}
        </li>
      ))}
    </ul>
    <button onClick={handleCloseFilteredModal} className={styles.closeButton}>
      Close
    </button>
  </div>
)}


<Testimonials/>
    </div>
  );
}

export default App;
