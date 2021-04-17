// Add zero in front of numbers < 10
function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function dayfinder(dayindex) {
  
  switch (dayindex) {
    case 0:
      return "So";
    case 1:
      return "Mo";
    case 2:
      return "Di";
    case 3:
      return "Mi";
    case 4:
      return "Do";
    case 5:
      return "Fr";
    case 6:
      return "Sa";
  }
}
function monthfinder(month) {
  
  switch (month){
    case 0:
      return "Jan";
    case 1:
      return "Feb";
    case 2:
      return "Mär";
    case 3:
      return "Apr";
    case 4:
      return "Mai";
    case 5:
      return "Jun";
    case 6:
      return "Jul";
    case 7:
      return "Aug";
    case 8:
      return "Sep";
    case 9:
      return "Okt";
    case 10:
     return "Nov";
    case 11:
      return "Dez";}
}
export {dayfinder, monthfinder,  zeroPad};

