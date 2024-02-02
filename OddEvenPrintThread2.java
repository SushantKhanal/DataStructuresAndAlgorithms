//odd even print implementation with future object
import java.util.function.IntPredicate;
import java.util.concurrent.CompletableFuture;
import java.util.stream.IntStream;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;


public class OddEvenPrintThread2 {
    private static Object object = new Object();
    private static IntPredicate evenCondition = (i) -> (i % 2) == 0;
    private static IntPredicate oddCondition = (i) -> (i % 2) == 1;

    public static void main(String[] args) {
        ExecutorService executorService = Executors.newFixedThreadPool(2);
        IntStream.rangeClosed(1, 10)
                .forEach(i -> {
                    CompletableFuture<Integer> oddCompletableFuture = CompletableFuture.completedFuture(i)
                            .thenApplyAsync(num -> {
                                if(num % 2 == 1) {
                                    System.out.println("Thread Name " + Thread.currentThread().getName() +
                                            ", num: " + num);
                                }
                                return num;
                            }, executorService);
                    oddCompletableFuture.join();
                    CompletableFuture<Integer> evenCompletableFuture = CompletableFuture.completedFuture(i)
                            .thenApplyAsync(num -> {
                                if(num % 2 == 0) {
                                    System.out.println("Thread Name " + Thread.currentThread().getName() +
                                            ", num: " + num);
                                }
                                return num;
                            }, executorService);
                    evenCompletableFuture.join();
                });
    }
}
