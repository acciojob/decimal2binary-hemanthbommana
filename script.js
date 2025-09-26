function decimalToBinary(num) {
  //Write you code here
	 let str = "";
    while (num != 0) 
    {
		  let str += num%2 ;
		 num = num/2;
    }
    return str;
  
}

window.decimalToBinary = decimalToBinary;
