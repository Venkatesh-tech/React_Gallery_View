import "./App.css";
//import "./images/fruits.jpg";
//import "./components/images";
//import ReactCardSlider from "./components/ReactCardSlider";
import ReactCardSlider from "react-card-slider-component";
function App() {
  const sliderClick = (slider) => {
    alert("hello world");
  };

  const slides = [
    {
      image:
        "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title: "The Elemental Guide to Vitamins",
      description: "Vitamins and other supplements are essential in their..",
      clickEvent: sliderClick,
    },
    {
      image:
        "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title: "Important laws of fitness",
      description: "Circumstances in life change perpetually ..",
      clickEvent: sliderClick,
    },
    {
      image:
        "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title: "Yoga and it's uses",
      description: "Doctors and scientists have said it takes 60 days ..",
      clickEvent: sliderClick,
    },
    {
      image:
        "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title: "How To Fix Your Hormones",
      description: "This guide discusses safe, effective, physiological..",
      clickEvent: sliderClick,
    },
    {
      image:
        "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title: "Treat Depression Without Medication",
      description: "A few weeks ago, depression hit me the hardest..",
      clickEvent: sliderClick,
    },
    {
      image:
        "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title: "My Most Awesome, Healthy Grocery List",
      description: "I've done a ton of research and study of nutrition..",
      clickEvent: sliderClick,
    },
    {
      image:
        "https://images.pexels.com/photos/842554/pexels-photo-842554.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title: "It’s Time to Discuss Black Mental Health",
      description: "Growing up, we focused on discussing mental health..",
      clickEvent: sliderClick,
    },
  ];
  return (
    <div id="body">
      <ReactCardSlider slides={slides} />
    </div>
  );
}

export default App;
