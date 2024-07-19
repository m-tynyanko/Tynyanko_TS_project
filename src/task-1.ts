function slice123(str: string, start: number, end?: number):string {
    let newStr: string = '';
   
    let lastIndex: number;
   
    if (end) {
      lastIndex = end > str.length ? str.length : end;
    } else {
      lastIndex = str.length;
    }
   
    for (let i = start; i < lastIndex; i++) {
      newStr += str[i];
    }
   
    return newStr;
  }

  let str: string = "abc123";
  console.log(slice123(str, 3))