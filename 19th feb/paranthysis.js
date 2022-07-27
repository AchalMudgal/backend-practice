function printparenthesis(n,open,close,output){
    if(open == n && close == n){
        console.log(output);
        return;
    }

    if(open < n){
        printparenthesis(n, open+1, close , output + '(');
    }

    if(close < open){
        printparenthesis(n , open , close+1 ,output + ')');
    }
}

printparenthesis(3,0,0,"");