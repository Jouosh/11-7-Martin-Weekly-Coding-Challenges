import java.util.Scanner;

public class harshad {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int input = scanner.nextInt();
        System.out.println(isHarshad(input));
    }

    public static boolean isHarshad(int harshad) {
        int sum = harshadReducer(harshad, 0);
        return harshad % sum == 0;
    }

    public static int harshadReducer(int in, int total) {
        if (in < 10) {
            total += in;
            return total;
        }
        total += in % 10;
        in /= 10;
        return harshadReducer(in, total);
    }

}
