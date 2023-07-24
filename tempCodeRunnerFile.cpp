# include<iostream>

int main(){
    int i;
    cout<<"Prime numbers";
    for(i=1;i<=10;i++){
        if(i % 2 != 0){
            cout<<i;
        }
    }
    int j;
    cout<<"Composite numbers";
    for(j=1;j<=10;j++){
        if(j % 2 ==0){
            cout<<j;
        }
    }
}