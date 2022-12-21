// console.log("add");

// $(document).ready(function(){ 

const submitbtn = document.getElementById("submitbtn");
const city_display = document.getElementById("city-name-display");
const cityName = document.getElementById("cityname");
let temp_image = document.getElementById("temp_image");
let data_hide = document.querySelector(".middle-layer");
let temp= document.getElementById("temperature");


// function defintion 
const getinfo =async (event)=>{
    // it is used to stop thge from reloading 
    event.preventDefault();
    let city_value = cityName.value;
    

   if(city_value === ""){
    // if input filed  is empty 
    city_display.innerText="Please write the city name : ) ";
    data_hide.classList.add('data-hide');
    
   }
    else
    {
        // use try catch if serach fiels is wrong 
        try {
            let url =`https://api.openweathermap.org/data/2.5/weather?q=${city_value}&lang=en&units=metric&appid=b36cefc76fbf5367bf2e77325c001a34`;
            const response =  await fetch(url);
            let data =  await response.json();
            const arrdata= [data];
            // console.log(arrdata); 

            city_display.innerText=`${arrdata[0].name} ,${arrdata[0].sys.country}`;

            //temp is in float value so to slice it after convert it into string 
            // let tempval= Math.ceil(arrdata[0].main.temp); 
            let tempval= arrdata[0].main.temp; 
            tempval=tempval.toString().slice(0,4);
           
            temp.innerHTML =`${tempval} <sup>0</sup>C`;
            
            // to show the weather image 
            tempimage= arrdata[0].weather[0].main;
             if(tempimage=="Clear"){
                temp_image.innerHTML= ` <i class="fas fa-sun" style='color:#eccc68'></i>`;
             }
             else if(tempimage=="Clouds"){
                temp_image.innerHTML= ` <i class="fas fa-cloud" style='color:#9dace6'></i>`;
             }
             else if(tempimage=="Rain"){
                temp_image.innerHTML= ` <i class="fas fa-cloud-rain" style='color:#a4b0be'></i>`;
            }
             else{
                temp_image.innerHTML= ` <i class="fas fa-sun" style='color:#d5b450'></i>`;
            }


            // dlt the class data hide
            data_hide.classList.remove('data-hide');
        } 
        catch(error){
         // if an error is occurred  
        city_display.innerText=" Please enter city name correctly : )"; 
        data_hide.classList.add('data-hide');
        console.log(error);
        }
    }
     
}


submitbtn.addEventListener("click",getinfo);


const day = document.getElementById("day");
const date = document.getElementById("today_date");


const getcurrentday =()=>{
    const weekday = ["Sunday","Monday","Tueday","Wednesday","Thursday","Friday","Saturday"];

      let current_time=new Date();
      return(weekday[current_time.getDay()]);  //return day
}
day.innerText=getcurrentday();

const getcurrentdate =()=>{
    let mon = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    let  currtime=new Date();
 let month= mon[currtime.getMonth()]; //index start from 0
let date= currtime.getDate();
let yr= currtime.getFullYear();

return(`${month}-${date}-${yr}`)
}

date.innerText=getcurrentdate();



// });



