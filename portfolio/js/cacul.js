
function myPrice1() {

  form1.answer.value = '0';
  form1.total.value = '0';
  form1.single.value='0' 
    form1.single.value="10"
}
function myPrice2() {

    form1.answer.value = '0';
  form1.total.value = '0';
  form1.single.value='0' 
    form1.single.value="25"
}
function myPrice3() {

    form1.answer.value = '0';
  form1.total.value = '0';
  form1.single.value='0' 
    form1.single.value="125"
}
function totalP() {
  if (form1.single.value!=0){
  form1.answer.value=eval(form1.answer.value)+1;
  form1.total.value=eval(form1.answer.value)*form1.single.value 
  }
}