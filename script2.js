function getMin(a,b){
  return a < b ? a : b;
}
function getMax(a,b){
  return a > b ? a : b;
}


const paramA = prompt("Enter a:", '');
const paramB = prompt("Enter b:", '');
const min = getMin(paramA,paramB);
const max = getMax(paramA,paramB);
alert ("Min is = " + min);
alert ("Max is = " + max);


function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);

const handleYes = () =>  alert("Вы согласились!.");
const handleNo = () =>  alert("Вы отменили выполнение.");
let ask = (question, yes, no) => confirm(question) ?
yes():
no();

ask("uestion", handleYes, handleNo)

