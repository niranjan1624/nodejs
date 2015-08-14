// What are the values of m and n after executing the following code?
class prog_1
{
	public static void main(String[] args) 
	{
		int n = 12345678;
		int m = 0;
		while (n!=0)
		{
			m=(10*m)+(n%10);
            n=n/10;
		}
        System.out.println("m: " + m);
        System.out.println("n: " + n);
	}
}
