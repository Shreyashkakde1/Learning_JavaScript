import java.util.Scanner;

public class A{
    public static void main(String[] args) {
        int num = 10;
        Scanner sc = new Scanner(System.in);
        System.out.println("enter a value");
        int x = sc.nextInt();
        if(x>20){
            num=x;
        }
        System.out.println("Num Value: "+num);
        System.out.println("x Value: "+x);


    }
}