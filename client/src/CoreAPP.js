import React from 'react';
import './index.css';
import './CSS/style.css';
import './CSS/banner.css';
import './CSS/desert.css';
import Navbar from './Navbar';
import Code from './cpp/Code';
import Label from './cpp/Label';
import Tabs from './Tabs.json';

//import reportWebVitals from './reportWebVitals';
//import CartItem from './JSX/CartItem';

import P5Sketch from './P5Sketch';
import P5Maze from './P5Maze';
import P5Bubblesort from './P5Bubblesort';
import P5PermutationBinary from './P5PermuatationBinary';

class CoreAPP extends React.Component {
  constructor () {
      super();
this.state = 
{
webLinks1: Tabs,
weblinks : {
  "Fibonacci": "#Fibonacci",
  "CoinChange": "#CoinChange",
  "LIS": "#LIS",
  "HeapSort": "#HeapSort",
  "MergeSort": "#MergeSort",
  "STL": "#STL",
  "Star": "#Star",
  "Parenthesis": "#Parenthesis",
  "Permutations": "#Permutations",
  "Combinations": "#Combinations",
  "Func-Pointers": "#Func-Pointers",
  "Reverse": "#Reverse",
  "Stack": "#Stack",
  "Queue": "#Queue",
  "Strings": "#Strings",
  "GIT": "#GIT",
  "NQueens": "#NQueens",
  "Bash": "#Bash",
  "SRE": "https://github.com/cskarthik22/howtheysre",
  "Netshoot": "https://github.com/cskarthik22/netshoot",
  "DP-1": "https://www.topcoder.com/thrive/articles/dynamic-programming-and-local-memoization-in-competitive-programming",
  "DP-2": "https://www.topcoder.com/thrive/articles/dynamic-programming-and-local-memoization-part-2",
  "DP-3": "https://www.youtube.com/watch?v=P8Xa2BitN3I",
  "FFT": "https://betterexplained.com/articles/an-interactive-guide-to-the-fourier-transform/",
  "Others": "https://github.com/cskarthik22/coding-interview-university",
  "Big-O": "https://github.com/cskarthik22/Notes/blob/master/Books/big-o-cheatsheet.pdf",
  "Entropy": "https://www.youtube.com/watch?v=JnJq3Py0dyM&t=176s",
  "basecs": "https://medium.com/basecs/tagged/data-structures",
  "Docker": "http://docker-saigon.github.io/post/Docker-Internals/",
  "Linux": "https://cheatsheet.dennyzhang.com/cheatsheet-linuxinternals-a4",
  "iNode": "https://www.thegeekstuff.com/2012/01/linux-inodes/",
  "k8s-deploy-strategies": "https://github.com/ContainerSolutions/k8s-deployment-strategies",
  "sysadmin": "https://sysadmincasts.com/",
  "C/C++": "https://github.com/cskarthik22/Notes/tree/master/stanford/C/C%26C%2B%2B",
  "Binary Trees": "http://cslibrary.stanford.edu/110/BinaryTrees.html",
  "Algo-01": "https://www.cs.usfca.edu/~galles/visualization/Algorithms.html",
  "Algo-02": "https://visualgo.net/en",
  "ebooks": "https://epdf.pub/search/data+structures",
  "*IMP*": "http://courses.csail.mit.edu/iap/interview/materials.php",
  "PKI": "https://www.youtube.com/watch?v=qXLD2UHq2vk",
  "VPN": "https://www.youtube.com/watch?v=4BfL0UHrzDY",
  "DNS": "https://howdns.works/ep1/",
  "HTTPS": "https://howhttps.works/why-do-we-need-https/",
  "Network-Slides": "http://indigoo.com/",
  "Free Courses": "https://www.openculture.com/computer_science_free_courses",
  "API": "https://www.mulesoft.com/resources/api/what-is-an-api",
  "System Design": "https://cheatsheet.dennyzhang.com/cheatsheet-systemdesign-a4",
  "Leet Code": "https://www.youtube.com/watch?v=U6-X_QOwPcs&list=PLU_sdQYzUj2keVENTP0a5rdykRSgg9Wp-",
  "Secure Web API": "https://github.com/cskarthik22/Notes/tree/master/Security",
  "Memory": "http://cse1.net/recaps/memory.html",
  "Channel9": "https://channel9.msdn.com/Browse/AllContent",
  "JS": "https://bost.ocks.org/mike/algorithms/",
  "P5js": "https://thecodingtrain.com/",
  "Network_Packets_3D": "https://youtu.be/xIuBmOufbls",
  "Codeshare.io": "https://codeshare.io/",
  "WhiteBoard": "https://cocreate.csail.mit.edu/",
  "KataCoda": "https://katacoda.com/",
  "RedhatLabs": "https://lab.redhat.com"
},
programs : {
  Fibonacci: String.raw`
  int fibo(int n) {
    if( n==0 || n==1) 
        return 1;
    return fibo(n-1) + fibo(n-2);
 }

 int fibo_dp_bottomup(int n) {
    /* Effective space utilization, instead of array, just maintain
       only 2 varaibles */
    int first = 1;
    int second = 1;
    int ans = 0;
    if (n==0 || n==1)
        return 1;
    for(int i=2; i<=n; i++) {
        ans = second + first;
        first = second;
        second = ans;
    }
    return ans;
}

int fibo_dp_topdown(int n, int* dp) {
    // Memoization = Recursion + lookup table
    if( n==0 || n==1) {
        return 1;
    }
    if(dp[n]!= -1) {
        return dp[n];
    }
    int ans = fibo_dp_topdown(n-1, dp) +
              fibo_dp_topdown(n-2, dp);
    dp[n] = ans;
    
    return ans;
}                
`,
LIS: String.raw`
int LIS(int* inputarr, int size) {
  int* lis_arr = new int[size];
  for(int i=0; i<size; i++)
  lis_arr[i]=1;
  
  for(int i=1; i<size; i++){
      for(int j=0; j<i; j++) {
          if(inputarr[i]>inputarr[j] && lis_arr[i] < lis_arr[j]+1) {
              lis_arr[i] = lis_arr[j]+1;
          }
      }
  }
  int maxlength= 0;
  for( int i=0; i<size; i++) {
      if(lis_arr[i] > maxlength) {
          maxlength = lis_arr[i];
      }
  }
  delete [] lis_arr;
  return maxlength;
}`,
CoinChange: String.raw`
int coin_change_dp_bottomup(int amount, int* denomintions, int size) {
  int *ways = new int[amount+1];
  for(int i=0; i< amount+1; i++) {
      ways[i] = 0;
  }
  ways[0] = 1;
  for(int i=1; i<size; i++) {
      for(int j=1; j<amount+1; j++) {
          if( denomintions[i] <= j ) {
              ways[j] = ways[j] + ways[j-denomintions[i]];
          }
      }
  }
  int ans = ways[amount];
  delete [] ways;
  return ans;
};

int coin_change_dp_topdown(int amount, int* denomintions, int size, int** output) {
  if(amount == 0)
      return 1;
  
  if(amount < 0)
      return 0;
  
  if(size == 0)
      return 0;
  
  if(output[amount][size] &gt; -1)
      return output[amount][size];
  
  int option1 = coin_change_dp_topdown(amount-denomintions[0],denomintions,size,output);
  int option2 = coin_change_dp_topdown(amount, denomintions+1, size-1, output);
  output[amount][size] = option1 + option2;
  
  return option1 + option2;
}

int coin_change(int amount, int* denomintions, int size) {
  
  if(amount == 0)
      return 1;
  
  if(amount < 0)
      return 0;
  
  if(size == 0)
      return 0;
  /*
   option1: choose first denomination
   option2: don't choose first denomination
   */
  int option1 = coin_change(amount-denomintions[0],denomintions, size);
  int option2 = coin_change(amount, denomintions+1, size-1);
  return option1 + option2;
}`,
HeapSort: String.raw`
#include <bits/stdc++.h>
using namespace std;

void swapfunc(vector<pair<double,string>> &vp, int large, int index) {
    pair<double, string> tp = vp[index];
    vp[index] = vp[large];
    vp[large] = tp;
 }

void MaxHeapify(vector<pair<double,string>> &vp, int index, int n) {
    int left = 2*index+1;
    int right = 2*index+2;
    int large = index;
    
    if(left < n && vp[left].first > vp[index].first) {
        large = left;
    } else {
        large = index;
    }
    
    if(right < n && vp[right].first >vp[large].first) {
        large = right;
    }
    if( large != index) {
        swapfunc(vp, large, index);
        MaxHeapify(vp, large, n);
    }
}

void BuildMapHeap(vector<pair<double,string>> &vp, int n) {
    for( int i=n/2-1; i>=0; i--) {
        MaxHeapify(vp, i, n);
    }
}

void HeapSort(vector<pair<double,string>> &vp, int n) {
    
    for( int i=n-1; i>0; i--) {
        swapfunc(vp, 0, i);
        MaxHeapify(vp, 0, i);
    }
}

int main()
{
    vector<pair<double,string>> vp;
    int n;
    cin >> n;
  
    for( int i=0; i <n; i++) {
        double item;
        string name;
        cin >> item >> name;
        pair<double,string> p = make_pair(item, name);
        vp.push_back(p);
    }
    
    cout << endl;
    // 1 14 10 8 7 9 3 2 4 6
    for(auto it = vp.begin(); it != vp.end(); it++){
        cout << (*it).first << " - " << (*it).second  << endl;
    }
    BuildMapHeap(vp, n);
    
    //HeapSort(vp, n);
    
    cout << " Max heap" << endl;
    
    for(auto it = vp.begin(); it != vp.end(); it++){
        cout << (*it).first << " - " << (*it).second  << endl;
    }

    return 0;
}
/*
5                    
1 one                        
4 four                        
2 two                       
5 five                       
3 three
*/`,
STL: String.raw`
#include <stdio.h>
#include <iostream>
#include <vector>
#include <list>
#include <forward_list>
#include <stack>
#include <queue>
#include <deque>
#include <tuple>
using namespace std;

/*
list - doublelinked list
forward-list - single linked list
*/

void display(vector<int> &v){
    cout << "vector display" << endl;
    auto it = v.begin();
    while(it != v.end()){
        cout << *it << " ";
        it++;
    }
    cout << endl;
}

void display_list(list<int> &v){
    cout << "list display" << endl;
    list<int>::iterator it;
    it = v.begin();
    while(it != v.end()){
        cout << *it << " ";
        it++;
    }
    cout << endl;
}

void display_forard_list(forward_list<int> &v){
    cout << "forward_list display" << endl;
    forward_list<int>::iterator it;
    it = v.begin();
    while(it != v.end()){
        cout << *it << " ";
        it++;
    }
    cout << endl;
}

int main()
{
    vector<int> v = { 1,2,10,23,12 };
    v.push_back(25);
    display(v);
    v.pop_back();
    display(v);
    
    list<int> l = { 1,2,10,23,12 };
    l.push_back(25);
    display_list(l);
    
    forward_list<int> fl = { 1,2,10,23,12 };
    fl.push_front(25);
    display_forard_list(fl);
    
    
    stack<int> s;
    s.push(100);
    s.push(200);
    s.push(250);
    while(!(s.empty())) {
        cout << s.top() << " ";
        s.pop();
    }
    cout << endl;
    
    queue<int> q;
    q.push(100);
    q.push(200);
    q.push(250);
    while(!(q.empty())){
        cout << q.front() << " ";
        q.pop();
    }
    cout << endl;
    
    pair<int,string> p;
    p = make_pair(10, "john");
    cout << p.first << p.second << endl;
    
    vector<pair<int,string>> vp;
    vp.push_back(make_pair(1,"one"));
    vp.push_back(make_pair(2,"two"));
    vp.push_back(make_pair(3,"three"));
    
    for(auto it = vp.begin(); it != vp.end(); it++){
        cout << (*it).first << " " << (*it).second << endl;
    }
    
    tuple<int, string, int> t;
    t = make_tuple(10, "john", 35);
    cout << get<0>(t) << " " << get<1>(t) << " " << get<2>(t) << endl;
    
    vector<tuple<int,string,int>> vt;
    vt.push_back(make_tuple(10, "john", 35));
    vt.push_back(make_tuple(20, "mike", 55));
    vt.push_back(make_tuple(30, "carl", 45));
    
    for(auto it=vt.begin(); it!=vt.end(); it++){
        cout << get<0>(*it) << " " << get<1>(*it) << " " << get<2>(*it) << endl;
    }
    
    priority_queue<pair<int,string>> pq;
    pq.push(make_pair(10,"john"));
    pq.push(make_pair(30,"carl"));
    pq.push(make_pair(20,"mike"));
    
    while(!(pq.empty())){
        cout << pq.top().first << " " << pq.top().second << endl;
        pq.pop();
    }
    
    return 0;
}`,
MergeSort: String.raw`
#include <stdio.h>
    #include <stdlib.h>
    
    void Merge(int *arr, int low, int mid, int high) {
        int n1 = mid - low + 1;
        int n2 = high - mid;
        
        int arr1[n1],arr2[n2];
        int i,j,k=0;
        
        for(i=0;i<n1;i++)
           arr1[i]=arr[low+i];
        for(j=0;j<n2;j++)
          arr2[j]=arr[mid+1+j];
          i=0;
          j=0;
          k=low;
          while(i<n1 && j<n2) {
              if(arr1[i]<=arr2[j]) 
                  arr[k++]=arr1[i++];
              else 
                  arr[k++] = arr2[j++];
          }
          while(i<n1){
              arr[k++] = arr1[i++];
          }
          while(j<n2){
              arr[k++] = arr2[j++];
          }
        //printf("done...");
    }
    
    void MergeSort(int *arr,int low, int high){
        int mid; 
        if(low<high) {
            mid = low + (high-low)/2;
            MergeSort(arr,low,mid);
            MergeSort(arr,mid+1,high);
            Merge(arr,low,mid,high);
        }
    }
    
    void Display(int *arr){
        for(int i=0;arr[i]!=NULL;i++)
            printf("%d ",arr[i]);
    }
    int main()
    {
        int A[]={1,14,10,8,7,9,3,2,4,6};
        int arrlen = sizeof(A)/sizeof(int);
        Display(&A);
        printf("\n");
        MergeSort(&A,0,arrlen-1);
        Display(&A);
    }`,  
Star: String.raw`
#include <stdio.h>

int main()
{
    int n=10;
    
    for(int i=1; i<=n;i++){
        int spaces = n-i;
        for(int j = 1; j<=2*spaces; j++) printf(" "); //first in row
        for(int j = 1; j<=i; j++) printf("   A"); // middle in row
        for(int j = 1; j<=2*spaces; j++) printf(" "); // last in row
        printf("\n");
    }
    for(int i=n-1; i>=1;i--){
        int spaces = n-i;
        for(int j = 1; j<=2*spaces; j++) printf(" ");
        for(int j = 1; j<=i; j++) printf("   A");
        for(int j = 1; j<=2*spaces; j++) printf(" ");
        printf("\n");
    }
    

    return 0;
}

/*
output:

                     A                                                                                                                                           
                   A   A                                                                                                                                         
                 A   A   A                                                                                                                                       
               A   A   A   A                                                                                                                                     
             A   A   A   A   A                                                                                                                                   
           A   A   A   A   A   A                                                                                                                                 
         A   A   A   A   A   A   A                                                                                                                               
       A   A   A   A   A   A   A   A                                                                                                                             
     A   A   A   A   A   A   A   A   A                                                                                                                           
   A   A   A   A   A   A   A   A   A   A                                                                                                                         
     A   A   A   A   A   A   A   A   A                                                                                                                           
       A   A   A   A   A   A   A   A                                                                                                                             
         A   A   A   A   A   A   A                                                                                                                               
           A   A   A   A   A   A                                                                                                                                 
             A   A   A   A   A                                                                                                                                   
               A   A   A   A                                                                                                                                     
                 A   A   A                                                                                                                                       
                   A   A                                                                                                                                         
                     A                                             
*/
    `,
Permutations: String.raw`
// Program to permute a given string 

/*    
 Permutations: Deals with selection + arrangement.
 Example: select 11 out of 20 players in a cricket team and also decide batting arrangement.
 Answer: nPr => nCr * r! ==> n!/(n-r)!
*/

#include <stdio.h>
#include <stdlib.h>

int count=0;
char letters[] = "abc";
int *visited;
void permuatations(char *str, int start, int end)
{
    if(start == end) {
        printf("%s ", str);
        count++;
    } else {
        for(int i=0;i<strlen(letters); i++) {
            if(visited[i]==0) {
                str[start] = letters[i];
                visited[i] = 1;
                permuatations(str, start+1, end);
                visited[i] = 0;
                str[start] = '\0';
            }
        }
    }
}

void main() {
    int n=sizeof(letters);
    char *input = (char*)calloc(n,sizeof(char));
    visited = (int *)calloc(n,sizeof(int));
    permuatations(input,0,n-1);
    printf("\nTotal permuatations = %d", count);
}

/* OUTPUT
abc acb bac bca cab cba                                                                                                                                                                     
Total permuatations = 6
*/
`,
Parenthesis: String.raw`
// Generate all valid parenthesis
#include <stdio.h>
#include <bits/stdc++.h>
using namespace std;

void genparenthesis(int n, int open, int close, string output){
    if(output.size()==2*n)
       cout << output << endl;
    
    if(open<n)
       genparenthesis(n,open+1,close, output + "(");
       
    if(close<open)
       genparenthesis(n,open,close+1, output + ")");
    
}

int main()
{
  genparenthesis(3,0,0,"");
  return 0;
}

/* OUTPUT:
          ((()))       
          (()())                        
          (())()                       
          ()(())                        
          ()()()

*/
`,
"Func-Pointers": String.raw`
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef void (*Funstr)(char *);

void strLength(char *s) { 
  int i;
  for (i = 0; s[i] != '\0'; i++);
  printf ("strLength = %d", i);
}

void strUpper(char *s) {
  for (int i = 0; s[i] != '\0'; i++) {
    if (s[i] >= 97 && s[i] <= 122) {
       s[i] = s[i] - 32;
    }
  }
  printf ("\nUpper = %s", s);
}

void strLower(char *s) { 
  for (int i = 0; s[i] != '\0'; i++) {
    if (s[i] >= 65 && s[i] <= 90) {
	   s[i] = s[i] + 32;
	}
  }
  printf ("\nLower = %s ", s);
}

void swap(char *a, char *b) {
    *a = *a ^ *b;
    *b = *a ^ *b;
    *a = *a ^ *b;
}

void strReverse(char *s) {
    
    for(int i=0,j=strlen(s)-1;i<j;i++,j--)
       swap(&s[i], &s[j]);
    printf ("\nReverse = %s ", s);
}

void IsPalindrome(char *s) {
    for(int i=0,j=strlen(s)-1;i<j;i++,j--) {
        if (s[i] != s[j]) {
            printf("%s is not a palindrome");
            return;
        }
    }
    printf("\n%s is a palindrome", s);
    
}

int main()
{
    char str1[] = "WeLcome" , str2[] = "madam";
    
    Funstr strOperations[] = { strLength, strUpper, strLower, strReverse, IsPalindrome };
    strOperations[0](str1);
    strOperations[1](str1);
    strOperations[2](str1);
    strOperations[3](str1);
    strOperations[4](str1); strOperations[4](str2);
    

    return 0;
}`,
Combinations: String.raw`
/*
   Combination: Deals with only selection.
   Example: select 11 out of 20 players in a cricket team
   Answer: nCr => n!/((n-r)!*r!) => 20C11
*/

#include <stdio.h>

static int count=0;
void swap ( char *a, char *b)
{
    char temp;
    temp = *a;
    *a = *b;
    *b = temp;
}

void Combinations(char *str, int start, int end)
{
    int index;
   
    if(start == end)
    {
        printf("%s\n", str);
        count++;
    }
    else
    {
        for(index = start;index<=end;index++)
        {
         swap(&str[start],&str[index]);
         Combinations(str, start+1, end);
         swap(&str[start],&str[index]);
         
        }
    }
   
}

int main()
{
    
    char input[] = "abc";
    Combinations(input,0,strlen(input)-1);
    printf("Total Combinations = %d", count);
    
    return 0;
}

/* OUTPUT:

    abc                      
    acb                          
    bac                          
    bca                          
    cba                         
    cab                                                                                                                                                              
    Total Combinations = 6 

*/`,
Reverse: String.raw`
/*Reverese words in a given string */

/*
Algorithm
=========

step1: Reverse the individual words
step2: Reverse the whole string from start to end
*/

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void reverse(char *start, char *end)
{
	char temp;
	while(start < end)
	{
		temp = *start;
		*start++ = *end;
		*end-- = temp;
	}
}

void RevereseWords(char *str)
{
	char *wordBegin, *temp;
	wordBegin = '\0';
	temp = str;
	//reverse the individual words
	while(*temp)
	{
		if((wordBegin == '\0') && (*temp != ' '))
			wordBegin = temp;
		if(wordBegin && ((*(temp+1) == ' ') || (*(temp + 1) == '\0')))
		{
			reverse(wordBegin, temp);
			wordBegin = '\0';
		}
		temp++;
	}
	//reverse the whole string from start to end
	reverse(str, temp-1);
}

int main()
{
	char str[100] = "Welcome to Programming!!";

	RevereseWords(str);
	printf("%s\n", str);
	return 0;
}

/* OUTPUT:

   Programming!! to Welcome
*/`,
Stack: String.raw`
#include <stdio.h>
#include <stdlib.h>

typedef struct Node_Block {
    int data;
    struct Node_Block *link;
} node;

node *TOP = NULL;

void push(int item) {
    // Create a new node
    node *temp = (node *)malloc(sizeof(node));
    temp->data = item;
    temp->link = NULL;
    
    if ( TOP == NULL ) {
       TOP = temp;
       return;
    } 
    temp->link = TOP;
    TOP = temp;
}

void pop() {
    node *temp;
    if ( TOP == NULL ) {
        printf(" Stack is empty \n");
        return;
    } 
    temp = TOP;
    TOP=TOP->link;
    free(temp);
}

void display() {
    node *inode = TOP;
    printf("[ TOP ] => ");
    while(inode) {
        printf("[ %d ] =>", inode->data);
        inode=inode->link;
    }
}

void print_top() {
    printf("%d", TOP->data);
}

int main()
{
    printf("\n\t MENU: 1) PUSH 2) POP 3) TOP 4) Display 5) Exit \n");
    int ch;
    int item;
   
    do {
        printf("enter your choice(1-5): ");
        scanf("%d",&ch);
        
        switch(ch) {
            case 1:
                printf("\n Enter data : ");
                scanf("%d", &item);
                push(item);
                break;
            case 2:
                pop();
                break;
            case 3:
                print_top();
                break;
            case 4:
                display();
                break;
            case 5:
                // Free All nodes ( clear heap memory)
                while(TOP) {
                    node* temp = TOP;
                    TOP = TOP->link;
                    free(temp);
                    printf("Memory - Cleared \n");
                }
                exit(0);
                
            default:
                printf(" Wrong choice ;\n");
                break;
            
        }
        
    
    } while( ch != 5);

    return 0;
}`,
Queue: String.raw`
#include <stdio.h>
#include <stdlib.h>

typedef struct Node_Block {
    int data;
    struct Node_Block *link;
} node;

node *FRONT, *REAR = NULL;

void Enqueue(int item) {
    
    node *temp = (node *)malloc(sizeof(node));
    temp->data = item;
    temp->link=NULL;
    
    if( REAR == NULL) {
        FRONT = REAR = temp; 
        return;
    }
    REAR->link=temp;
    REAR = temp;
    return;
}

void Dequeue(){
    if( (FRONT==NULL) && (REAR==NULL) ) {
        printf("Queue is empty...");
    } else 
    if ( FRONT==REAR ) {
        free(FRONT);
        FRONT=REAR=NULL;
    } else {
        node *temp = FRONT;
        FRONT=FRONT->link;
        free(temp);
    }
    
}

void Display(){
    node *seeknode = FRONT;
    printf("[ FRONT ] => ");
    while(seeknode) {
        printf("[ %d ] => ", seeknode->data);
        seeknode = seeknode->link;
    }
    printf("[ REAR ] => ");
}

void Is_Empty(){
    
}

void main(){
    
    int ch, item;
    node *temp;
    printf("\n\t MENU 1) Enqueue 2) Dequeue 3) Is_Empty 4) Display 5) Exit... ");
    do {
        printf("\n Enter choice ");
        scanf("%d", &ch);
        switch(ch) {
            case 1:
                printf("\nEnter item ");
                scanf("%d", &item);
                Enqueue(item);
                break;
            case 2:
                Dequeue();
                break;
            case 3:
                Is_Empty();
                break;
            case 4:
                Display();
                break;
            case 5:
                // Free All nodes ( clear heap memory)
                
                while(FRONT) {
                    temp = FRONT;
                    FRONT = FRONT->link;
                    free(temp);
                    printf("Memory-Cleared\n");
                }
                exit(0);
            
        }
    
    } while(ch != 5);
    
}`,
Strings: String.raw`
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void swap(char *a, char *b) {
// with out temp variable using bitwise XOR operation.
    *a = *a^*b;
    *b = *a^*b;
    *a = *a^*b;
}

void swapUsingTemp(char *a, char *b) {
    char t;
    t = *a;
    *a = *b;
    *b = t;
}

void strReverse( char *s) {
    int i=0, j=strlen(s)-1;
    
    while(i < j) {
        swap(&s[i], &s[j]);
        //swapUsingTemp(&s[i], &s[j]);
        i++;
        j--;
    }
    printf("\nReverse = %s ", s);
}

void strReverse01( char *s) {
    for(int i=0, j=strlen(s)-1;i < j; i++,j--) 
       swap(&s[i], &s[j]);
    
    printf("\nReverse01 = %s ", s);
}

void findlength (char *s)
{
  int i;
  for (i = 0; s[i] != '\0'; i++);

  printf ("length of %s is %d", s, i);
}

void strUpper (char *s)
{
  int i;
  for (i = 0; s[i] != '\0' && (s[i] >= 97 && s[i] <= 122); i++)
    {
      // if( s[i] >= 97 && s[i] <=122) {
      s[i] = s[i] - 32;
      //  }
    }
  printf ("\nUpper = %s", s);
}

void strLower (char *s)
{
  int i;
  for (i = 0; s[i] != '\0'; i++)
    {
      if (s[i] >= 65 && s[i] <= 90)
	{
	  s[i] = s[i] + 32;
	}
    }
  printf ("\nLower = %s ", s);
}

char* substr(char *str,int pos,int n){
    char *s = (char *)malloc(n*sizeof(char));
    for(int i=pos;str[i]!='\0';i++)
       s[i-pos]=str[i];
  return s;
}

void main ()
{

  char str1[] = "weLcome";

  findlength (str1);
  strUpper (str1);
  strLower (str1);
  strReverse(str1);

}`,
NQueens: String.raw`
#include <stdio.h>
#include <stdlib.h>
#define SIZE 4

void printSolution(int board[SIZE][SIZE]) {
    int i,j;
    printf("=======SOL========\n");
    for (i = 0; i < SIZE; i++)
    {
        for (j = 0; j < SIZE; j++)
           printf(" %d ", board[i][j]);
        printf("\n");
    }
    printf("=================\n");
}

int isSafe(int board[SIZE][SIZE],int row, int col) {
    /*
     \
      \
    ___\(i,j)
      /
    /
    
    */
    int i,j;
    for (j=0; j <col; j++) {
        if(board[row][j])
          return 0;
    }
    for (i=row, j=col; i>=0 && j>=0; i--,j--)
        if(board[i][j])
          return 0;
    for (i=row, j=col; j>=0 && i<SIZE; i++,j--)
        if(board[i][j])
          return 0;
    return 1;
} 

void solveNQueen(int board[SIZE][SIZE], int col) {
    
    // BASE CASE
    if (col >= SIZE) {
        printSolution(board);
        
    } else {
        
        for(int row=0;row<SIZE;row++) {
        
            if (isSafe(board,row,col)) {
                
                //CHOOSE
                board[row][col] = 1;
                
                //EXPLORE
                solveNQueen(board, col+1);
                
                //UNCHOOSE
                board[row][col] = 0;
            }
        }
        
    }
    
}

void main ()
{
    int board[SIZE][SIZE] = {0};

    solveNQueen(board,0);
}`,
GIT: String.raw`
GIT - Directed Acylic Graph
git 
git add .
git commit -m'modified'
git commit -a -m'add & commit in single step'
git status
git show

git remote -v
git log --pretty=oneline --graph
git log -p
git log <<commitid>> HEAD -p
git log <<commitid>> HEAD^^^^^..HEAD^^
git log <<commitid>> HEAD~5..HEAD~2

git branch branch-01 // new branch created by userA
git checkout branch-01
git checkout -b branch-02 // new branch created by userB
git branch // shows local branches
git branch -a //shows all branches includes remote branches
** Remote branches are locally immutable

user-01:
git checkout -b branch-02
echo "hello" >> hellotest.txt
git commit -a -m'new filed added by user-01 for the branch created by user-02"

User-02 is on Branch-02:
git branch --set-upstream <<localbranch>> <<remote refspec>> 
git branch --set-upstream branch-02 origin/branch-02  // now tracking is done bi-directional
git pull // now it merges remote origin to local automatically



git branch yesterday <<commitid>>

git push command talks to the network

git push
git push origin <<branchName>>
git push remote <<branchName>>

git fetch 
git diff branch-02 origin/branch-02

git tags are like markers
git tag <<TAGNAME>>  // light weight
git tag -a <<TAGNAME>> // Heavy Weight
`,
Bash: String.raw`
**************************************** LINUX BOOT PROCESS ***********************************

1. BIOS on the mother board checks all the input/output devices and the boot process for the computer begins.
2. The Boot process ( GRUB / other ) looks for a section of a hard drive ( Boot sector ) that contains the data to 
   load operating system. 
3. Boot loader -> loads the linux Kernel.
4. Linux Kernel -> load the initial RAM disk, which contains a list of device drivers and then it starts to load 
   the computer drives to eventually mount the file system from the hard disk.
5. After the kernel is all setup and ready to to go, it then starts the initialization system

Various Initialization Systems are...
init --> upstart --> systemd 

Systemd is the most popular one.

init/upstart relies on bash shell scripts, but systemd replaced all the exisiting fucntionality with pre-compiled 'C' code.
Advandtages of systemd:
1) Socket activation
2) parallel execution

Linux Kernel has a concept, which manages all the system resources in a hierarchial grouping & labeling called
Control Groups (Cgroups)
Each Cgroups - Limits the use of the system resources ( CPU, RAM ..etc )
Each Namespace - Limits the view of the processes , creating a logical isolated boundary.

Systemd took advantage of Cgroups & grouped all its processes together into their own type of Cgroups, which has its own slice 
of resource pie

Systemd manages the units of services grouped together approproately names slices

systemd-cgls
systemd-cgtop

systemctl
systemctl status httpd.service
systemctl enable httpd.service
systemclt disable httpd.service
systemctl is-enabled httpd.servoce
systemctl help httpd.service
systemctl start httpd.service
systemctl stop httpd.service
systemctl cat httpd.service
systemctl mask httpd.service
systemctl unmask httpd.service
systemctl -H 198.0.0.1 status httpd.service
systemctl daemon-reload
systemctl list-unit-files
systemd-delta
systemctl edit --full <unit>

systemd journal

journalctl 
journalctl -r
journalctl -o verbose
journalctl -o json-pretty
echo " hello... " | systemd-cat
journalctl -r
journalctl -f
journalctl -n 20
journalctl -k ### kernal logs
journalctl --disk-usage

hostnamectl
timedatectl
localectl
systemd-analyse


systemd-inhibit wget http://example.com/abc.iso   ### prevents system from sleeping until it downloads huge file.

/etc/fstab
df -Th
lsblk


lsmod # list kernal modules
lscpu # displays cpu architecture
lspci
lsblk
lsusb
lsdev


#### Special Characters

su root -  ( ### '-' at the end will make sure all the configuration settings applied to switch user root )
/bin/false && echo 'it wont print'
/bin/true && echo ' now it prints'
/bin/true || echo 'it wont print'
/bin/false || echo 'it prints'
/bin/false; echo 'prints whatever'
\\ \$ ( ### escape characters )
### return codes 0-true, 1 -false
echo $?
ls -al | more  ( ### '|' pipe symbol gives pagination)
ls -al > output.txt ( ### redirects output to a file )

###### Environment Variables

set | more
env | more
shopt
export MYPATH = /home/user
echo $MYPATH
history


###### Processing texts
https://github.com/linuxacademy1/textfiles

sort numbers.txt
sort -n numbers.txt
sort -k2 -n numbers.txt ( ### sort second column in the text file )
cat numbers.txt
nl numbers.txt ( ### like cat it dispalys contents with line numbers exluding blank lines )
nl -ba numbers.txt ( ## number blank lines)
wc -l /etc/passwd ( ### number of lines in a file )
wc -w /etc/passwd ( ### number of words )
wc -c /etc/passwd ( ### number of characters )
expand -t 10 tabs.txt ( ### 10 spaces between each column )
cut -c 1-5 columns.txt
cut -d: -f 1,2,4 columns.txt
cut -d" " -f 1,2 columns.txt  ( ### tab is default delimeter no need to mention )
paste file1.txt file2.txt
join file1.txt file2.txt ( ### only has unique values)
uniq lines.txt
uniq -d lines.txt  ( ### print only duplicate unique lines )
uniq -D lines.txt ( ### print only duplicate lines 
head /var/log/messages ( ### displays first 10 lines )
head -n 15 /var/log/messages
tail /var/log/messages
tail -n 15 /var/log/messages
tail -f /var/log/messages ( with updates automatically )
cat tabs.txt
tac tabs.txt ( ### displays content in reverse )
split lines.txt
split -b 512 lines.txt  ( ### 512 bytes in each file)
split -k 512 lines.txt  ( ### 512 kilobytes in each file)
split -l 10 lines.txt ( ### 10 lines in each file - xaa.txt)
split -a 3 -l 10 lines.txt ( ### output file name xaaa.txt)
od telnet.rpm ( ### displays binary file in octal format, other formats -b , -o, -x, -d, -f)
pr lines.txt ( ### prints the contents of the file to terminal )
pr --columns=2 lines.txt ( ### prints in 2 columns )

tr 'a' 'A' < lines.txt ( ### translate command replaces a with A , but we cant use tr to replace entire word)
tr 'a-e' 'A-E' < lines.txt 

To replace entire word we use SED unility
sed 's/the/THE/g' sedexamples.txt ( ### substitiutes the with THE globally across the file )
sed 's/the/THE/' sedexamples.txt ( ###replaces only first instance in each line not globally )
sed -e 's/the/NOW/g' -e 's/NOW/NEVER/g' sedexamples.txt ( ### multiple commands in a single line )
vim sedopts.txt
s/the/THE/g
s/THE/NOW/g
s/NOW/NEVER/g

sed -f sedopts.txt sedexamples.txt
more lines.txt ( displays content page wise using tab space and it allows only forward)
less lines.txt ( f forward b for backword)


Basic File Management
ls -l /etc
ls -al /etc
ls -d ( lists the directories)
mkdir -p mydir/dir1/dir2/dir3 ( creates all sub directories)
file /etc/* ( diplays file types information )`,



        }
      }
      
     // this.testing();
    // <CartItem  qty={1} price={990} title={"Phone"} pic={""} />
  }
  render() {
    const { programs, weblinks } = this.state;
    const keys = Object.keys(programs);
    const webkeys = Object.keys(weblinks);
      return(
        <React.StrictMode>
        
        <div id="root-div">
        <Navbar />
            <header className="header">
               <div className="label-container">
                  { webkeys.map((key) => {
                      return (
                        <Label webLink={weblinks[key]} webLinkName={key} key={key}/>
                      )
                    }) 
                  }
               </div>
            </header>
            <div id="container">
            { keys.map((key) => {
                  return (
                    <Code programCode={programs[key]} programName={key} key={key}/>
                  )
              }) 
            }
            <P5Maze />
            <P5Bubblesort />
            <P5PermutationBinary />
            <P5Sketch />
            </div>
            
         </div>
         
     
      
         
       </React.StrictMode>
      
      );
  }
}

export default CoreAPP;


