function golfshotsName(strokes,par){
  if(strokes==1){
    return "Hole-in-one!";

  }
  else if (strokes<(par-2)) {
    return "Eagle";


  }
  else if (strokes=(par-1)) {
    return"Birdie";

  }
  else if(strokes==par)
  return"Par";

}
else if (strokes=(par+1)) {
  return "Bogey";

}
else if (strokes=(par+2)) {
  return"Double Bogey";

}
else if (strokes>=(par+3)) {
  return "GO Home its not your game";

}

}
var result=golfshotsName(5,3);
document.write(result);

/*
Exception: SyntaxError: expected expression, got keyword 'else'
@Scratchpad/3:19
*/
/*
Exception: SyntaxError: expected expression, got keyword 'else'
@Scratchpad/3:19
*/

/*
Exception: SyntaxError: expected expression, got keyword 'else'
@Scratchpad/5:19
*/
/*
Exception: SyntaxError: expected expression, got keyword 'else'
@Scratchpad/5:19
*/

/*
Exception: SyntaxError: expected expression, got keyword 'else'
@Scratchpad/6:19
*/