class number{
    public static void main(String args[]){
        int i;
        System.out.println("Prime numbers");
        for(i=0;i<=10;i++){
            if(i % 2 !=0){

                System.out.println(i);

            } 
        }
        int j;
        System.out.println("Composite numbers");
        for(j=1;j<=10;j++){
            if(j % 2 == 0){
                System.out.println(j);
            }
        }
    }
}