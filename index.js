document.querySelector(".btn").addEventListener("click", function(){


    let height = parseInt(document
            .querySelector("#height").value);
    
    let weight = parseInt(document.querySelector("#weight").value);

        if (height === "" || isNaN(height)) {
          document.querySelector("#result").innerHTML =
            "enter a valid height in Cm";
          document.querySelector("#result").classList.add("danger");
        } else if (weight === "" || isNaN(weight)) {
          document.querySelector("#result").innerHTML =
            "enter a valid weight in Kg";
          document.querySelector("#result").classList.add("danger");
        } else {
          let bmi = (weight / ((height * height) / 10000)).toFixed(2);



          if (bmi < 18.6){
            result.innerHTML = `Under Weight : <span>${bmi}</span>`;
            document.querySelector("body").classList.add("yellow");
            document.querySelector(".cal-container").classList.add("yellowLight");


          }
          else 
          if (bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = `Normal : <span>${bmi}</span>`;

            document.querySelector("body").classList.add("green");
            document.querySelector(".cal-container").classList.add("greenLight");



          }
          else {
           result.innerHTML = `Over Weight : <span>${bmi}</span>`;
           document.querySelector("body").classList.add("red");
           document.querySelector(".cal-container").classList.add("redLight");


        }

    }
});
