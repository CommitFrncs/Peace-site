const form = document.querySelector("#booking-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const phone = document.querySelector("#phone").value;
  const service = document.querySelector("#service").value;
  const date = document.querySelector("#date").value;
  const state = document.querySelector("#state").value;
  const address = document.querySelector("#address").value;

  const message = `Hi Peace! I'd like to book an appointment. 

Name: ${name}
Phone: ${phone}
Service: ${service}
Date: ${date}
State: ${state}
Address: ${address}`;

  const url = `https://wa.me/2349157630903?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");

  console.log(name, phone, service, date, state, address);
});
