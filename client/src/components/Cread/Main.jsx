import React from 'react'
import cm from "./custom.css"
import Icon from "./image/loogoo.gif"
import Img1 from "./image/img1.png"
import Img2 from "./image/img2.png"
import axios from "axios";

// *******************************************************************************************************
                                      // js
// *******************************************************************************************************
async function validateSelection() {
  var selectedButtons = document.querySelectorAll("#box1 button.selected, #box2 button.selected,#box3 button.selected,#box4 button.selected,#box5 button.selected");
  if (selectedButtons.length >= 10 && selectedButtons.length <= 20) {
    const selectedButtons = document.querySelectorAll(".selected");
    const selectedButtonText = [];
    selectedButtons.forEach((button) => {
      selectedButtonText.push(button.textContent);
  }) 
  console.log("Selected buttons:", selectedButtonText);
   var formData = new FormData()
   formData.append('data' , selectedButtonText)

   var url1 = 'http://localhost:5000/custom/send-data'
 
  await axios.post(url1 , formData ,  {
  headers: {
    'Content-Type': 'application/json'
  }
})


}
  else {
    alert("Please select between 10 and 20 buttons");
  }
}
    

    function toggleSelected(button) {
            button.classList.toggle("selected");
            var selectedButtons = document.querySelectorAll(".selected");
            var selectedButtonNames = "";
            selectedButtons.forEach(function(button) {
                selectedButtonNames += button.innerHTML + " ";
            });
          //   console.log("Selected buttons: " + selectedButtonNames.trim());
            
        }
    function toggleBox1() {
            var box1 = document.getElementById("box1");
            var box2 = document.getElementById("box2");
            var box3 = document.getElementById("box3");
      var box4 = document.getElementById("box4");
            var box5 = document.getElementById("box5");

            box1.style.display = "block";
            box2.style.display = "none";
            box3.style.display = "none";
      box4.style.display = "none";
      box5.style.display = "none";
        }
    function toggleBox2() {
            var box1 = document.getElementById("box1");
            var box2 = document.getElementById("box2");
            var box3 = document.getElementById("box3");
      var box4 = document.getElementById("box4");
            var box5 = document.getElementById("box5");

            box1.style.display = "none";
            box2.style.display = "block";
            box3.style.display = "none";
      box4.style.display = "none";
      box5.style.display = "none";
        }
    function toggleBox3() {
            var box1 = document.getElementById("box1");
            var box2 = document.getElementById("box2");
            var box3 = document.getElementById("box3");
      var box4 = document.getElementById("box4");
            var box5 = document.getElementById("box5");

            box1.style.display = "none";
            box2.style.display = "none";
            box3.style.display = "block";
      box4.style.display = "none";
      box5.style.display = "none";
        }
    function toggleBox4() {
            var box1 = document.getElementById("box1");
            var box2 = document.getElementById("box2");
            var box3 = document.getElementById("box3");
      var box4 = document.getElementById("box4");
            var box5 = document.getElementById("box5");

            box1.style.display = "none";
            box2.style.display = "none";
            box3.style.display = "none";
      box4.style.display = "block";
      box5.style.display = "none";
        }
    function toggleBox5() {
            var box1 = document.getElementById("box1");
            var box2 = document.getElementById("box2");
            var box3 = document.getElementById("box3");
      var box4 = document.getElementById("box4");
            var box5 = document.getElementById("box5");

            box1.style.display = "none";
            box2.style.display = "none";
            box3.style.display = "none";
      box4.style.display = "none";
      box5.style.display = "block";
        }



// ******************************************************************************************************
// Main 
// ******************************************************************************************************
const Customize = () => {
  return (
    <div>
      <img id="img" className="img0" src={Icon} />
      <img id="img1" className="img9" src={Img1} />
      <img id="img2" className="img8" src={Img2} />
      <h1 className="h1"> Customize Your Colors</h1>
      <h2 className="h2">Unleash Your True Colors!</h2>
      <h3 className="h3">Tap on Tags that you feel most resonated with!</h3>
      <br />
      <h4>
        <button class="cus_button" id="two" onClick={() => toggleBox1()}>
          &nbsp;Travel Preferences
        </button>
        <br />
        <div id="box1" className="box1 rounded">
          <button
            id="btn1"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Solo Backpacking
          </button>
          <button
            id="btn2"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Luxury Gateway
          </button>
          <button
            id="btn3"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Adventure Sports
          </button>
          <button
            id="btn1"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Road Trips
          </button>
          <button
            id="btn2"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Beach Bumming
          </button>
          <button
            id="btn3"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Cultural Immersion
          </button>
          <button
            id="btn1"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Nature Trails
          </button>
          <button
            id="btn2"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Food Exploration
          </button>
          <button
            id="btn3"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Historical Sites
          </button>
          <button
            id="btn1"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Music Festivals
          </button>
        </div>
        <button id="two" class="cus_button" onClick={() => toggleBox2()}>
          &nbsp;Fitness and Health
        </button>
        <br />
        <div id="box2" className="box1 rounded">
          <button
            id="btn2"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Yoga Enthusiast
          </button>
          <button
            id="btn1"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Weight Training
          </button>
          <button
            id="btn3"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Cardio Junkie
          </button>
          <button
            id="btn2"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Healthy Eating
          </button>
          <button
            id="btn1"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Outdoor Activities
          </button>
          <button
            id="btn3"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Endurance Sports
          </button>
          <button
            id="btn2"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Group Fitness
          </button>
          <button
            id="btn1"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Home Workouts
          </button>
          <button
            id="btn3"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Mindfulness Practice
          </button>
          <button
            id="btn2"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Recovery & Relaxation
          </button>
        </div>
        <button id="three" class="cus_button" onClick={() => toggleBox3()}>
          &nbsp;Food Preferences
        </button>
        <br />
        <div id="box3" className="box1 rounded">
          <button
            id="btn2"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Vegan
          </button>
          <button
            id="btn1"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Meat Lover
          </button>
          <button
            id="btn3"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Seafood Enthusiast
          </button>
          <button
            id="btn2"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Healthy Eating
          </button>
          <button
            id="btn1"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Gourmet Foodie
          </button>
          <button
            id="btn3"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Snack Junkie
          </button>
          <button
            id="btn2"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Dessert Lover
          </button>
          <button
            id="btn1"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Home Cook
          </button>
          <button
            id="btn3"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Global Cuisine
          </button>
          <button
            id="btn2"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Comfort Food Lover
          </button>
        </div>
        <button id="four" class="cus_button" onClick={() => toggleBox4()}>
          Creative Interests
        </button>
        <br />
        <div id="box4" class="cus_button" className="box1 rounded">
          <button id="btn1" onClick={(e) => toggleSelected(e.target)}>
            Painting & Drawing
          </button>
          <button
            id="btn3"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Photography
          </button>
          <button
            id="btn2"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Musician & Singing
          </button>
          <button
            id="btn1"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Writing & Blogging
          </button>
          <button
            id="btn3"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Fashion & Style
          </button>
          <button
            id="btn2"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            DIY & Crafting
          </button>
          <button
            id="btn1"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Interior Design
          </button>
          <button
            id="btn3"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Film & Cinema
          </button>
          <button
            id="btn2"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Performing Arts
          </button>
          <button
            id="btn1"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Graphic Designing
          </button>
        </div>
        <button id="five" class="cus_button" onClick={() => toggleBox5()}>
          Career Interests
        </button>
        <br />
        <div id="box5" className="box1 rounded">
          <button
            id="btn3"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Entrepreneurship
          </button>
          <button
            id="btn2"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Freelancer
          </button>
          <button
            id="btn1"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Techie
          </button>
          <button
            id="btn3"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Social Impact
          </button>
          <button
            id="btn2"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Marketing
          </button>
          <button
            id="btn1"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Finance & Investment
          </button>
          <button
            id="btn3"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Educational
          </button>
          <button
            id="btn2"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Healthcare & Wellness
          </button>
          <button
            id="btn1"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Law & Politics
          </button>
          <button
            id="btn3"
            class="cus_button"
            onClick={(e) => toggleSelected(e.target)}
          >
            Creative Industries
          </button>
        </div>
        <br />

        <button
          id="submit"
          class="cus_button"
          onClick={() => validateSelection()}
        >
          Good to Goo!!
        </button>
      </h4>
    </div>
  );
};

export default Customize