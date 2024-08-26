//? https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

//! Regex validate PIN code
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

Examples(Input-- > Output)
"1234"   -- > true
"12345"  -- > false
"a234"   -- > false



function validatePIN(pin) {

  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }

  if (!/^\d+$/.test(pin)) {
    return false;
  }

  const number = pin.split('').map(Number);

  if (number.some(isNaN)) {
    return false;
  }

  return true;
}
