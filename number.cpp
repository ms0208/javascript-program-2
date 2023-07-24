# include<iostream>
using namespace std;

int main(){
    int i;
    cout<<"Prime numbers"<<endl;
    for(i=1;i<=10;i++){
        if(i % 2 != 0){
           cout<<i<<endl;
        }
    }
    int j;
    cout<<"Composite numbers"<<endl;
    for(j=1;j<=10;j++){
        if(j % 2 ==0){
         cout<<j<<endl;
        
    }
    }

    return 0;
}