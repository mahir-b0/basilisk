function validateFlag() {
    const userInput = document.getElementById("userInput").value;
    const correctFlag = "t3n_gr4nd_r4nd0mh4sh"; // go ahead! you won't last a second past this point.
  
    if (userInput === correctFlag) {
      window.location.href = "https://pinocchio-gl9j.onrender.com/";
    } else {
      alert("Incorrect flag. Please try again.");
    }
}
