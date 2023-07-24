# include<stdio.h>

int main(){
    int i,j;
    printf("Prime numbers\n");
    for(i=0;i<=10;i++){
        if(i % 2 != 0){
            printf("%d\n",i);
        }
    }
    printf("Composite numbers\n");
    for(j=0;j<=10;j++){
        if(j % 2 ==0){
            printf("%d\n",j);
        }
    }
}