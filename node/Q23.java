// What is the value of s after executing the following code?
class Q23
{
	public static void main(String[] args) 
	{
		String s = "";
		int n=11,v = 1;
        System.out.println("Program");
		while (v <= n/2) 
			v = 2*v;
		while (v > 0)
		{
			if (n < v) 
			{ 
				s += 0; 
			}
			else 
			{ 
				s += 1; 
                n -= v;
			}
			v = v/2
		}
        System.out.println("output:  " + s);
	}
}
