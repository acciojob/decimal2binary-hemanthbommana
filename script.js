function decimalToBinary(num) {
  //Write you code here
	 var str = "";
    while (num) 
    {
    
        // adding the result of num & 1 to str
        if (num & 1) // 1
            str += '1';
        else // 0
            str += '0';
            
        // Right Shift by 1
        num >>= 1;
    }
    return str;
  
}

window.decimalToBinary = decimalToBinary;
