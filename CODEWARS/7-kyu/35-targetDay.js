//? https://www.codewars.com/kata/569218bc919ccba77000000b



// //! Target Date
// Description:
// You have an amount of money a0 > 0 and you deposit it with an interest rate of p percent divided by 360 per day
// on the 1st of January 2016. You want to have an amount a >= a0.

// Task:
// The function date_nb_days (or dateNbDays...) with parameters a0, a, p will return, as a string, 
// the date on which you have just reached a.

// Example:
// date_nb_days(100, 101, 0.98) --> "2017-01-01" (366 days)

// date_nb_days(100, 150, 2.00) --> "2035-12-26" (7299 days)

// Notes:
// The return format of the date is "YYYY-MM-DD"
// The deposit is always on the "2016-01-01"
// Don't forget to take the rate for a day to be p divided by 36000 since banks consider that there are 360 days in a year.
// You have: a0 > 0, p% > 0, a >= a0


//! corrección
function dateNbDays(a0, a, p) {
  if (a0 <= 0 || p <= 0 || a < a0) { return "Error on params" } //* tenemos que usar || para que afecte a todo

  let money = a0;
  let interestRate = (p / 100) / 360
  let goal = a


  let interestPerDay;

  let year = 2016
  let month = 1
  let day = 1

  let totalDays = 0

  while (money < goal) { //* (!money == goal) es incorrecto,  La forma correcta sería while (money < goal) para continuar mientras el dinero sea menor que la meta.
    interestPerDay = money * interestRate
    money += interestPerDay //* hay que usar += porque money + interestPerDay no está haciendo nada porque no estás asignando el valor calculado de nuevo a money
    totalDays++
  }

  let date = new Date("2016-01-01"); // Convertir la fecha en un objeto Date
  date.setDate(date.getDate() + totalDays); // Sumar los días

  return date.toISOString().split("T")[0]; // Extrae la parte de la fecha
}

//!
function dateNbDays(a0, a, p) {
  let money = a0;
  let interestRate = (p / 100) / 360
  let goal = a

  if (!a0 > 0 && p > 0 && a >= a0) { return "Error on params" } //! la expresión ! no es correcta aqui

  let interestPerDay;

  let year = 2016
  let month = 1
  let day = 1

  let totalDays;

  while (!money == goal) {
    interestPerDay = money * interestRate
    money + interestPerDay
    totalDays++
    if (money == goal) {  //! esto es redundante ya que el mismo bucle va a parar cuando llegue a la condición
      return totalDays
    }
  }
}