
function updateLikeCounter(button) {
  const counter = document.getElementById("likeCounter");

  if (!button.classList.contains("clicked")) {
    let current = parseInt(counter.textContent);
    counter.textContent = current + 1;
    button.classList.add("clicked");
  }
}

function numberOfCoinsNen(button) {
  let noOfCoins = parseInt(coins.textContent);

  if (noOfCoins < 20) {
    alert("Call invalid. Not enough coins.");
  } else if (!button.classList.contains("clicked")) {
    let updater = parseInt(coins.textContent);
    coins.textContent = updater - 20;
    button.classList.add("clicked");
    alert("Calling National Emergency Number, At 999")
  }
}

function numberOfCoinsPolce(button) {
  let noOfCoins = parseInt(coins.textContent);

  if (noOfCoins < 20) {
    alert("Call invalid. Not enough coins.");
  } else if (!button.classList.contains("clicked")) {
    let updater = parseInt(coins.textContent);
    coins.textContent = updater - 20;
    button.classList.add("clicked");
    alert("Calling Police services. At 999")
  }
}

function numberOfCoinsFreStation(button) {
  let noOfCoins = parseInt(coins.textContent);

  if (noOfCoins < 20) {
    alert("Call invalid. Not enough coins.");
  } else if (!button.classList.contains("clicked")) {
    let updater = parseInt(coins.textContent);
    coins.textContent = updater - 20;
    button.classList.add("clicked");
    alert("Calling Fire services. At 999")
  }
}
function numberOfCoinsAmbulance(button) {
  let noOfCoins = parseInt(coins.textContent);

  if (noOfCoins < 20) {
    alert("Call invalid. Not enough coins.");
  } else if (!button.classList.contains("clicked")) {
    let updater = parseInt(coins.textContent);
    coins.textContent = updater - 20;
    button.classList.add("clicked");
    alert("Calling Ambulance services. At 1994-999999")
  }
}

function numberOfCoinsWNCS(button) {
  let noOfCoins = parseInt(coins.textContent);

  if (noOfCoins < 20) {
    alert("Call invalid. Not enough coins.");
  } else if (!button.classList.contains("clicked")) {
    let updater = parseInt(coins.textContent);
    coins.textContent = updater - 20;
    button.classList.add("clicked");
    alert("Calling Women & Children Helpline. At 109")
  }
}

function numberOfCoinsAC(button) {
  let noOfCoins = parseInt(coins.textContent);

  if (noOfCoins < 20) {
    alert("Call invalid. Not enough coins.");
  } else if (!button.classList.contains("clicked")) {
    let updater = parseInt(coins.textContent);
    coins.textContent = updater - 20;
    button.classList.add("clicked");
    alert("Calling Anti-Corruption Helpline. At 106")
  }
}

function numberOfCoinsElectricity(button) {
  let noOfCoins = parseInt(coins.textContent);

  if (noOfCoins < 20) {
    alert("Call invalid. Not enough coins.");
  } else if (!button.classList.contains("clicked")) {
    let updater = parseInt(coins.textContent);
    coins.textContent = updater - 20;
    button.classList.add("clicked");
    alert("Calling Electricity Helpline. At 162156")
  }
}

function numberOfCoinsBrac(button) {
  let noOfCoins = parseInt(coins.textContent);

  if (noOfCoins < 20) {
    alert("Call invalid. Not enough coins.");
  } else if (!button.classList.contains("clicked")) {
    let updater = parseInt(coins.textContent);
    coins.textContent = updater - 20;
    button.classList.add("clicked");
    alert("Calling Brac. At 16445")
  }
}

function numberOfCoinsBDRailway(button) {
  let noOfCoins = parseInt(coins.textContent);

  if (noOfCoins < 20) {
    alert("Call invalid. Not enough coins.");
  } else if (!button.classList.contains("clicked")) {
    let updater = parseInt(coins.textContent);
    coins.textContent = updater - 20;
    button.classList.add("clicked");
    alert("Calling bangladesh Railway Helpline. At 163")
  }
}

function numberOfCopies(button) {
  const counter = document.getElementById("copies");
  let current = parseInt(counter.textContent);       
  counter.textContent = current + 1;
  alert("Number has beed saved")               
}

function clearCopies(button){
  const needToBeCleared = document.getElementById("copies");
  let clearer = parseInt(needToBeCleared.textContent)
  needToBeCleared.textContent = clearer * 0;
}
