// Get the elements we are working with, slider by the id "slider", foreground-img by the class name.
const slider = document.getElementById("slider");
const foregroundImage = document.querySelector(".foreground-img");

// Create an event listener (watches for activity in the browser):
slider.addEventListener("input", (e) => {
  const sliderValue = e.target.value;

  // set the width of the foreground-img html class to the value of the sliderValue
  foregroundImage.style.width = `${sliderValue}%`;
  // console.log(sliderValue);
});
// ^ e stands for event. We are taking that event.target.value to set the value of the sliderValue Variable
// console.log(foregroundImage);
// console.dir(slider);
