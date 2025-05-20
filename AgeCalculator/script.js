let userInput= document.getElementById("date");
userInput.max=new Date().toISOString().split("T")[0];
//only allow past dates
let result= document.getElementById("result");
function calculateAge(){
  let birthDate = new Date(userInput.value);
  let d1 =birthDate.getDate();
  let m1 =birthDate.getMonth() + 1;
  let y1 =birthDate.getFullYear();

  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();
  let d3,m3,y3;

  y3=y2-y1;

  if(m2>=m1){
    m3=m2-m1;
  }
  else{
    y3--;
    m3=12+m2-m1;
  }
  if(d2>=d1){
    d3=d2-d1;
  }
  else{
    //if the current day is less than the birth day
    //then we need to borrow a month
    m3--;
    //here we find the number of days in the previous month
    d3=getDaysInMonth(y1, m1) + d2 - d1;
    //Sometimes, subtracting 1 month makes months go negative:
    if(m3<0){
      m3=11;
      y3--;
    }
    result.innerHTML=`You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old.`;
  }
 /*
 Example:
Birthdate: April 28
Today: May 20${y3}
 getDaysInMonth(2000, 4) = 30 // April has 30 days
d3 = 30 + 20 - 28 = 22 days
m3 = m3 - 1  // because we "used up" 1 month

  */
  function getDaysInMonth(month, year) {
    //This is a built-in trick in JavaScript used to get the number of days in the previous month.
    return new Date(year, month, 0).getDate();
  }
  /*
  new Date(2024, 2, 0).getDate(); // ➜ 29 (February 2024 - leap year)
  new Date(2024, 3, 0).getDate(); // ➜ 31 (March has 31 days)
  new Date(2024, 4, 0).getDate(); // ➜ 30 (April has 30 days)

   */

}