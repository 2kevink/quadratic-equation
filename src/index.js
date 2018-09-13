module.exports = function solveEquation(equation) {
  var m = '-';
  var i = 0;
  var a,b,c = 0;
  var tmp='';
  var tmp2='';
  var tmp3='';
  var res = [];
  if (equation[0] == m) {
    i=1;
    do {
       tmp =tmp+equation[i];
      i++;

    } while (equation[i]!=' ');
    a=-parseInt(tmp);
  }
  
  if (equation[0] != m) {
    i=0;
    do {
       tmp =tmp+equation[i];
      i++;

    } while (equation[i]!=' ');
    a=parseInt(tmp);
  }
  i=1;
  do{
    i++;
  }while(equation[i]!='^')
  i=i+3;
  b= parseInt(equation[i].toString()+'1');
  i=i+2;
  do{
    tmp2=tmp2+equation[i];
    i++;

  }while (equation[i]!=' ');
  b =b* parseInt(tmp2);

  i=i+5;
  c= parseInt(equation[i].toString()+'1');
  i=i+1;
  do{
    tmp3=tmp3+equation[i]
    i++;
  }while (i<equation.length);
  c=c*parseInt(tmp3);
  /*console.log(a);
  console.log(b);
  console.log(c);*/
  res[0] = Math.round((-b+Math.sqrt(b*b-4*a*c))/(2*a)) ;
  res[1] = Math.round((-b-Math.sqrt(b*b-4*a*c))/(2*a)) ;
  console.log(res);
  return res.sort(function(x,y) {return x-y});
}
