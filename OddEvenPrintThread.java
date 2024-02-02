public class OddEvenPrintThread implements Runnable {
    static int count = 1;
    Object lock;
    public OddEvenPrintThread(Object obj) {
        this.lock = obj;
    }
    @Override
    public void run() {
        while(count <= 10) {
            if(count % 2 == 0 && Thread.currentThread().getName() == "even") { //even
                synchronized (lock) {
                    System.out.println(Thread.currentThread().getName() + ": " + count);
                    try {
                        count++;
                        lock.wait();
                    } catch (Exception err) {
                        System.out.println("err: " + err);
                    }
                }
            }
            if(count <= 10 && count % 2 == 1 && Thread.currentThread().getName() == "odd") { //odd
                synchronized (lock) {
                    System.out.println(Thread.currentThread().getName() + ": " + count);
                    count++;
                    lock.notify();
                }
            }
        }
    }
    public static void main(String[] args) {
        Object lock = new Object();
        Thread th1 = new Thread(new OddEvenPrintThread(lock), "odd");
        Thread th2 = new Thread(new OddEvenPrintThread(lock), "even");
        th1.start();
        th2.start();
    }
} 
