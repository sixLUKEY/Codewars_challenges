export function removeChar(str: string): string {
  //   return str.replace(str.charAt(1), "").replace(str.charAt(str.length - 1), "");
  return str.slice(1, -1)

  /** OR
   * 
    return str.split("").slice(1, -1).join('');    
   */
}

let string = "hello";

console.log(removeChar(string));
