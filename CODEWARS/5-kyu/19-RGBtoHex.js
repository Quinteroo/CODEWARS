//? https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript



//! RGB to Hex
// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal
// representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that
// range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"



function rgb(r, g, b) {

  const array = [r, g, b]

  let result = []

  for (let i = 0; i < array.length; i++) {
    let e
    let w
    if (array[i] >= 255) {
      e = "FF"
      result.push(e)
    } else if (array[i] <= 0) {
      e = "00"
      result.push(e)
    }


    if (e !== "FF" && e !== "00") {
      e = Math.floor(array[i] / 16)
      w = array[i] - (e * 16)

      if (e === 10) {
        e = "A"
      } else if (e === 11) {
        e = "B"
      } else if (e === 12) {
        e = "C"
      } else if (e === 13) {
        e = "D"
      } else if (e === 14) {
        e = "E"
      } else if (e === 15) {
        e = "F"
      }


      if (w === 10) {
        w = "A"
      } else if (w === 11) {
        w = "B"
      } else if (w === 12) {
        w = "C"
      } else if (w === 13) {
        w = "D"
      } else if (w === 14) {
        w = "E"
      } else if (w === 15) {
        w = "F"
      }

      result.push(`${e}${w}`);
    }

  }

  return result.join("")
}