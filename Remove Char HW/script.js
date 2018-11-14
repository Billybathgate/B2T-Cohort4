function removeChar(str, char_pos) 
 {
  part1 = str.substring(0, char_pos);
  part2 = str.substring(7,char_pos + 1 , str.length);
  return (part1 + part2);
 };

console.log(removeChar("Eloquent",0));
//};
