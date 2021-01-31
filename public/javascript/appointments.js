let info = [];

async function newApptHandler(event) {
  event.preventDefault();

  // const Appointments_time = document.querySelector(
  //   'span[class="Appointments_time"]'
  // ).value;
  // const Appointments_text = document.querySelector(
  //   'span[class="Appointments_text"]'
  // ).value;
  // const Appointments_date = document.querySelector(
  //   'span[class="Appointments_date"]'
  // ).value;

  // const Appointments_date = window.location.toString().split('/')[
  //   window.location.toString().split('/').length - 1
  // ];
  // const Appointments_time = window.location.toString().split('/')[
  //   window.location.toString().split('/').length - 1
  // ];
  // const Appointments_text = window.location.toString().split('/')[
  //   window.location.toString().split('/').length - 1
  // ];

  var appointments = await fetch(`/api/schedule/all`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(appointments),
    // Appointments_date,
    // Appointments_time,
    // Appointments_text,
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      info = data;
      console.log(data);
    });

  // if (response.ok) {
  //   document.location.reload();
  // } else {
  //   alert(response.statusText);
  // }
}

document.getElementById('myBtn').addEventListener('click', newApptHandler);
