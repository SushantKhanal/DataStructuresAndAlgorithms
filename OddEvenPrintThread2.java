//odd even print implementation with future object
import java.util.function.IntPredicate;
import java.util.concurrent.CompletableFuture;
import java.util.stream.IntStream;

public class OddEvenPrintThread2 {
    private static Object object = new Object();
    private static IntPredicate evenCondition = (i) -> (i % 2) == 0;
    private static IntPredicate oddCondition = (i) -> (i % 2) == 1;

    public static void main(String[] args) {
        CompletableFuture.runAsync(() -> OddEvenPrintThread2.printNumber(oddCondition));
        CompletableFuture.runAsync(() -> OddEvenPrintThread2.printNumber(evenCondition));
        try {
            Thread.sleep(1000);
        } catch (InterruptedException ex) {
            System.out.println("InterruptedException: " + ex);
        }
    }

    private static void printNumber(IntPredicate condition) {
        IntStream.rangeClosed(1, 10).filter(condition).forEach(OddEvenPrintThread2::execute);
    }

    public static void execute(int num) {
        synchronized(object) {
            System.out.println("curr thread: " + Thread.currentThread().getName() + ", i: " + num);
            try{
                object.notify();
                object.wait();
            } catch(InterruptedException ex) {
                System.out.println("ex: " + ex);
            }
        }
    }
}
