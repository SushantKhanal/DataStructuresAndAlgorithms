public class OddEvenPrintThread implements Runnable {
    Object object;
    static int i = 1;
    public OddEvenPrintThread(Object object) {
        this.object = object;
    }
    @Override
    public void run() {
        while(i <= 10) {
            if(i % 2 == 0 && Thread.currentThread().getName().equals("even")) {
                synchronized(object) {
                    System.out.println("curr thread: " + Thread.currentThread().getName() + ", i: " + i);
                    i++;
                    try{
                        object.wait();
                    } catch(InterruptedException ex) {
                        System.out.println("ex: " + ex);
                    }
                }
            } 
            if(i <= 10 && i % 2 != 0 && Thread.currentThread().getName().equals("odd")) {
                synchronized(object) {
                    System.out.println("curr thread: " + Thread.currentThread().getName() + ", i: " + i);
                    i++;
                    object.notify();
                }
            }
        }
    }
    public static void main(String[] args) {
        Object obj = new Object();
        Thread t1 = new Thread(new OddEvenPrintThread(obj), "odd");
        Thread t2 = new Thread(new OddEvenPrintThread(obj), "even");
        t1.start();
        t2.start();
    }
} 
