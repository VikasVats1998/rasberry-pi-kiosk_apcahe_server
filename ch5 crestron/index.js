import * as CrComLib from "@crestron/ch5-crcomlib";

// Function to send a value to a digital join
function sendDigitalJoin(joinNumber, value) {
  if (joinNumber) {
    CrComLib.publishEvent("boolean", joinNumber, value);
  }
}

// Function to send a value to an analog join
function sendAnalogJoin(joinNumber, value) {
  if (joinNumber) {
    CrComLib.publishEvent("number", joinNumber, value);
  }
}

// Function to send a value to a serial join
function sendSerialJoin(joinNumber, value) {
  if (joinNumber) {
    CrComLib.publishEvent("string", joinNumber, value);
  }
}

// Attach event listeners to buttons
document.querySelectorAll(".demo").forEach((button) => {
  button.addEventListener("click", () => {
    const digitalJoin = parseInt(button.getAttribute("data-ch5-join-digital"), 10) || null;
    const analogJoin = parseInt(button.getAttribute("data-ch5-join-analog"), 10) || null;
    const serialJoin = button.getAttribute("data-ch5-join-serial") || null;
    const buttonValue = button.value;

    // Example: Toggle the digital join (true/false)
    if (digitalJoin !== null) {
      sendDigitalJoin(digitalJoin, true);
      setTimeout(() => sendDigitalJoin(digitalJoin, false), 500); // Reset after 500ms
    }

    // Example: Send the button value to analog and serial joins
    if (analogJoin !== null) {
      sendAnalogJoin(analogJoin, parseInt(buttonValue, 10));
    }

    if (serialJoin !== null) {
      sendSerialJoin(serialJoin, `Source ${buttonValue}`);
    }
  });
});
