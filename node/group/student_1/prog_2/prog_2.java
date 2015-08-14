// Find the bug and fix it
class Q24 
{
	public static void main(String[] args) 
	{
		int i, j = 0;
		for (i = 1; i < 6; i++)
		if (i > 4){
		break
		else {
		j = j + i;
		System.out.println("j= " + j + " i= " + i );
		}
		System.out.println("Final j= " + j + " i= " + i);
	}
}
