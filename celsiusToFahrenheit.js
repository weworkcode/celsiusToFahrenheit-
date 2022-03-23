public class celsiusToFahrenheit {
    public static void main(String[] args) {
        double celsius = 30.8;
            System.out.println(celsiusToFahrenheit(celsius));
    }
    public static double celsiusToFahrenheit(double celsius){
        return (9.0/5) * celsius + 32;
    }
}

