import './App.css'
import Card from './components/Card.jsx'


const App = () => {

const jobs = [
  {
    img: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    alt: "Amazon Logo",
    title: "Amazon",
    time: "5 Days Ago",
    description: "Senior UI/UX Designer",
    type: "Part-time",
    level: "Senior-Level",
    rate: "$120/hr",
    location: "Mumbai, India"
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/500px-Google_%22G%22_logo.svg.png",
    alt: "Google Logo",
    title: "Google",
    time: "2 Days Ago",
    description: "Frontend Developer",
    type: "Full-time",
    level: "Mid-Level",
    rate: "$80/hr",
    location: "Bangalore, India"
  },
  {
    img: "https://www.jootoor.com/wp-content/uploads/2025/04/Instagram-Logo-History.jpg",
    alt: "Instagram Logo",
    title: "Instagram",
    time: "1 Day Ago",
    description: "React Developer",
    type: "Full-time",
    level: "Senior-Level",
    rate: "$100/hr",
    location: "Hyderabad, India"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSizQq7KJ5NDbGjh-4wklylfJ9hAaOJ5vBtJA&s",
    alt: "Netflix Logo",
    title: "Netflix",
    time: "3 Days Ago",
    description: "UI Designer",
    type: "Part-time",
    level: "Junior-Level",
    rate: "$40/hr",
    location: "Delhi, India"
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/0/747.png",
    alt: "Apple Logo",
    title: "Apple",
    time: "6 Days Ago",
    description: "Product Designer",
    type: "Full-time",
    level: "Senior-Level",
    rate: "$150/hr",
    location: "Pune, India"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRmoLzF1FA_rPgBLwohs989O_z-b6YCETUmg&s",
    alt: "Flipkart Logo",
    title: "Flipkart",
    time: "4 Days Ago",
    description: "UX Researcher",
    type: "Contract",
    level: "Mid-Level",
    rate: "$90/hr",
    location: "Remote"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt2A2gxUuygCwnyVZKNiD1kHe32oGYuZrrPg&s",
    alt: "Meta Logo",
    title: "Meta",
    time: "7 Days Ago",
    description: "Backend Developer",
    type: "Full-time",
    level: "Senior-Level",
    rate: "$110/hr",
    location: "Gurgaon, India"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3GYDIvxL-beJ8TFMwamtsRNTKncCUMcXNdA&s",
    alt: "Tesla Logo",
    title: "Tesla",
    time: "2 Days Ago",
    description: "Software Engineer",
    type: "Full-time",
    level: "Mid-Level",
    rate: "$95/hr",
    location: "Chennai, India"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUEjY90pS-UfgHJU4glc8Aiupp1xCn_jcvRQ&s",
    alt: "Paytm Logo",
    title: "Paytm",
    time: "5 Days Ago",
    description: "Mobile App Developer",
    type: "Contract",
    level: "Mid-Level",
    rate: "$70/hr",
    location: "Noida, India"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGQM8mpehO210HDZ-NaU80g6nXd55Z2MMLqg&s",
    alt: "Infosys Logo",
    title: "Infosys",
    time: "1 Day Ago",
    description: "Full Stack Developer",
    type: "Full-time",
    level: "Junior-Level",
    rate: "$50/hr",
    location: "Mysore, India"
  }
];



  return (
    <div className='Parent'>
      {jobs.map((job, index) => (
            <div key={index}>
        <Card 
          img={job.img}
          alt={job.alt}
          title={job.title}
          time={job.time}
          description={job.description}
          type={job.type}
          level={job.level}
          rate={job.rate}
          location={job.location}
        />
            </div>
      ))}
   </div>
  )
}


export default App








/*{ <Card img='https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg'
         alt='Amazon Logo'
         title='Amazon'
         time='5 Days Ago'
         description='Senior UI/UX Designer'
         type='Part-time'
         level='Senior-Level'
         rate='$120/hr'
         location='Mumbai, India'
   />
   <Card img=''
         alt='Google Logo'
         title='Google'
         time='2 Days Ago'
         description='Front-End Developer'
         type='Full-time'
         level='Mid-Level'
         rate='$150/hr'
         location='California, USA'
   />
   <Card img=''https://1000logos.net/wp-content/uploads/2017/03/Netflix-Logo.png
         alt='Instagram Logo'
         title='Instagram'
         time='1 Day Ago'
         description='Graphic Designer'
         type='Contract'
         level='Entry-Level'
         rate='$100/hr'
         location='New York, USA'
   />
   <Card img=''
         alt='Netflix Logo'
         title='Netflix'
         time='3 Days Ago'
         description='Backend Developer'
         type='Full-time'
         level='Senior-Level'
         rate='$130/hr'
         location='Los Angeles, USA'
   />  }*/



