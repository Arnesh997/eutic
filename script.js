// Sample event data
const events = [
  {
    title: "NETWORKING EVENT",
    image: "network.avif",
    date: "August 15, 2023",
    time: "6:00 PM",
    venue: "LT- 4, 40GS",
    about: "Join us at the upcoming networking event hosted by the Edinburgh University Trading and Investment Club (EUTIC). This exclusive event offers a platform for students interested in trading and investment to connect with industry professionals."
  },
  {
    title: "PUB SOCIAL",
    image: "pubsocial.jpg",
    date: "August 1, 2023",
    time: "7:30 PM",
    venue: "Library Bar, Teviot",
    about: "Join us for a delightful evening at the Pub Social, hosted by EUTIC (Edinburgh University Trading and Investment Club). Connect with fellow enthusiasts, share experiences, and enjoy the vibrant atmosphere while engaging in lively conversations and forging new connections. "
  },
  {
    title: "EUTIC BALL",
    image: "party.jpeg",
    date: "August 15, 2023",
    time: "6:00 PM",
    venue: "Caves hotel",
    about: "Experience an unforgettable night at the EUTIC Ball, an exquisite event hosted by the Edinburgh University Trading and Investment Club. Dress in your finest attire and immerse yourself in an enchanting ambiance filled with elegance and celebration. Indulge in delicious cuisine, dance to captivating music, and create lasting memories with friends and colleagues. Join us for a glamorous evening of sophistication."
  },
  

  
  // Add more event objects as needed
];



// // Get elements
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');
// const nowBtn = document.getElementById('nowBtn');
// const monthYearElement = document.getElementById('monthYear');
// const calendarBody = document.getElementById('calendarBody');

// // Event listeners for previous, next, and now buttons
// prevBtn.addEventListener('click', showPreviousMonth);
// nextBtn.addEventListener('click', showNextMonth);
// nowBtn.addEventListener('click', showCurrentMonth);

// // Initial date
// let currentDate = new Date();

// // Function to display previous month
// function showPreviousMonth() {
//   currentDate.setMonth(currentDate.getMonth() - 1);
//   displayCalendar();
// }

// // Function to display next month
// function showNextMonth() {
//   currentDate.setMonth(currentDate.getMonth() + 1);
//   displayCalendar();
// }

// // Function to display current month
// function showCurrentMonth() {
//   currentDate = new Date();
//   displayCalendar();
// }

// // Function to display the calendar
// function displayCalendar() {
//   // Clear the calendar body
//   calendarBody.innerHTML = '';

//   // Set the month and year in the header
//   const month = currentDate.toLocaleString('default', { month: 'long' });
//   const year = currentDate.getFullYear();
//   monthYearElement.textContent = `${month} ${year}`;

//   // Get the number of days in the month
//   const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

//   // Get the day of the week of the first day in the month
//   const firstDayOfWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

//   // Generate the calendar
//   let dayCounter = 1;
//   for (let i = 0; i < 6; i++) {
//     const row = document.createElement('tr');
//     for (let j = 0; j < 7; j++) {
//       if ((i === 0 && j < firstDayOfWeek) || dayCounter > daysInMonth) {
//         const cell = document.createElement('td');
//         row.appendChild(cell);
//       } else {
//         const cell = document.createElement('td');
//         cell.textContent = dayCounter;

//         // Highlight current date
//         if (
//           currentDate.getFullYear() === new Date().getFullYear() &&
//           currentDate.getMonth() === new Date().getMonth() &&
//           dayCounter === new Date().getDate()
//         ) {
//           cell.classList.add('current-date');
//         }

//         row.appendChild(cell);
//         dayCounter++;
//       }
//     }
//     calendarBody.appendChild(row);
//   }
// }


// // Initial display of the calendar
// displayCalendar();



// Function to create event boxes
function createEventBox(event) {
  const eventBox = document.createElement("div");
  eventBox.className = "event-box";

  const visibleContent = document.createElement("div");
  visibleContent.className = "visible-content";
  eventBox.appendChild(visibleContent);

  const title = document.createElement("h3");
  title.textContent = event.title;
  title.classList.add("event-box-title");
  visibleContent.appendChild(title);

  const image = document.createElement("img");
  image.src = "../" + event.image;
  image.alt = event.title;
  image.classList.add("event-image");
  visibleContent.appendChild(image);

  const hiddenBox = document.createElement("div");
  hiddenBox.className = "hid-box";
  eventBox.appendChild(hiddenBox);




  const dateAndVenue = document.createElement("p");
  dateAndVenue.classList.add("hidden-box-detail");
  dateAndVenue.textContent = event.date + "  |  " + event.venue;

  hiddenBox.appendChild(dateAndVenue);


  // const date = document.createElement("p");
  // date.textContent = "Date: " + event.date;
  // date.classList.add("hidden-box-detail"); // Add a CSS class to the date element
  // hiddenBox.appendChild(date);




  const time = document.createElement("p");
  time.textContent = "Time: " + event.time;
  time.classList.add("hidden-box-detail"); // Add a CSS class to the time element
  hiddenBox.appendChild(time);

  // const venue = document.createElement("p");
  // venue.textContent = "Venue: " + event.venue;
  // venue.classList.add("hidden-box-detail"); // Add a CSS class to the venue element
  // hiddenBox.appendChild(venue);

  const about = document.createElement("p");
  about.textContent = event.about;
  about.classList.add("hidden-box-detail"); // Add a CSS class to the about element
  hiddenBox.appendChild(about);






  // const date = document.createElement("p");
  // date.textContent = "Date: " + event.date;
  // hiddenBox.appendChild(date);

  // const time = document.createElement("p");
  // time.textContent = "Time: " + event.time;
  // hiddenBox.appendChild(time);

  // const venue = document.createElement("p");
  // venue.textContent = "Venue: " + event.venue;
  // hiddenBox.appendChild(venue);

  // const about = document.createElement("p");
  // about.textContent = "About the Event: " + event.about;
  // hiddenBox.appendChild(about)

  return eventBox;
}

// Function to add events to the page
function addEventsToPage(events) {
  const eventsContainer = document.getElementById("events-container");

  events.forEach(event => {
    const eventBox = createEventBox(event);
    eventsContainer.appendChild(eventBox);
  });
}

// Add events to the page
addEventsToPage(events);



// Function to control the slideshow
function startSlideshow() {
  const testimonials = document.querySelectorAll('.testimonial');
  let index = 0;

  function showNextTestimonial() {
    testimonials[index].classList.remove('active');
    index = (index + 1) % testimonials.length;
    testimonials[index].classList.add('active');
  }

  testimonials[index].classList.add('active');
  setInterval(showNextTestimonial, 5000); // Change testimonial every 5 seconds
}

// Start the slideshow when the page has finished loading
window.addEventListener('load', startSlideshow);



function redirectToLink(url) {
  window.location.href = "https://" + url;
}

