const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
    {
        name: "Ramesh Sharma",
        position: "BE IT from DY Patil College",
        photo:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
        text:
            "WakeUpGradeUp helped me get an IT job within three months, and I'm very grateful for their assistance. Their personalized coaching, resume building, and interview preparation services were top-notch, and they clearly have expertise in the IT industry. If you're looking for a career development service to help you jumpstart your IT career, I highly recommend WakeUpGradeUp.",
    },
    {
        name: "Chandan Jha",
        position: "BE CSE from Alard College",
        photo: "https://randomuser.me/api/portraits/women/44.jpg",
        text:
            "For anyone looking to kickstart their IT career, I highly recommend WakeUpGradeUp. Their personalized coaching, resume building, and interview preparation helped me secure an IT job in just three months. They have expertise in the IT industry, and their services gave me a competitive edge in my job search. If you're looking for guidance and support, give WakeUpGradeUp a try.",
    },
    {
        name: "Vishal Deshpande",
        position: "BE EnTc from KJ College",
        photo: "https://randomuser.me/api/portraits/women/68.jpg",
        text:
            "Hey! WakeUpGradeUp is da bomb if you wanna start an IT career. Dey helped me find a job in just 3 months! Dey do super cool coaching, resume building, and interview prep, and dey know lots about IT. If you want help, go see WakeUpGradeUp!",
    },
    {
        name: "Chandan Deshmukh",
        position: "BE CSE from DCE College",
        photo: "https://randomuser.me/api/portraits/women/65.jpg",
        text:
            "I highly recommend WakeUpGradeUp for anyone looking to start an IT career. They helped me land an IT job in just three months! Their coaching, resume building, and interview preparation services are excellent, and they have great knowledge about the IT industry. Give WakeUpGradeUp a try!",
    },
];

let index = 0;

const updateTestimonial = () => {
    const { name, position, photo, text } = testimonials[index];
    testimonial.innerHTML = text;
    //userImage.src = photo;
    username.innerHTML = name;
    role.innerHTML = position;
    index++;
    if (index > testimonials.length - 1) index = 0;
};
updateTestimonial();
setInterval(updateTestimonial, 10000);