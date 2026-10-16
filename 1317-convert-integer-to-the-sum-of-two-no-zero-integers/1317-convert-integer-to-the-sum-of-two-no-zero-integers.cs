
public class Solution
{
    public int[] GetNoZeroIntegers(int n)
    {
        for (int a = 1; a < n; a++)
        {
            int b = n - a;

            if (!a.ToString().Contains('0') &&
                !b.ToString().Contains('0'))
            {
                return new int[] { a, b };
            }
        }

        return new int[] { };
    }
}
