import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmedBooking from "./ConfirmedBooking";
import jsonData from './availableTime.json'
function BookingForm(){

  const loadData = () => JSON.parse(JSON.stringify(jsonData));
  console.log({loadData})
const [date, setDate] = useState("");
const [time,setTime]= useState("");
const [guest,setGuest]=useState(1);
const [occasion,setOccasion] = useState("Birthday")
const [availableTime, setAvailableTime]= useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
])
//const {submitHandler} = useForm();
//const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({date,time, guest, occasion});
        

        


   
   

    
  }

  const initializeTimes= () =>{

   const data= fetch({jsonData})
    .then(response => response.json())
    .then(data => {setAvailableTime(data.timeSlot);
    console.log(data);
    })
    .catch(error => console.log(error));
 console.log(data)
  }

  useEffect(()=> {
    initializeTimes();
  })

  return(
    
<form style={{display: 'grid', maxWidth: '900px',  gap: '20px', paddingLeft: '272px'}}>
   <label htmlFor="res-date">Choose date</label>
   <input type="date" id="res-date" value="{date}" onChange = {(e) => setDate(e.target.value)}/>
   <label htmlFor="res-time">Choose time</label>
   <select id="res-time" value={time} onChange = {(e) => setTime(e.target.value)}>
        {availableTime.map((time) => (
          <option key={time}>{time}</option>
        ))}
   </select>
   <label htmlFor="guests">Number of guests</label>
   <input type="number" placeholder="No. of Diners" min="1" max="10" id="guests" value={guest} onChange = {(e) => setGuest(e.target.value)}/>
   <label htmlFor="occasion">Occasion</label>
   <select id="occasion" value={occasion} onChange = {(e) => setOccasion(e.target.value)}>
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <input type="submit" value="Make Your reservation" onClick = {handleSubmit}/>
</form>
    )
}
export default BookingForm;