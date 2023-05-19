let a = "Women's Fashion"



async function getCategoryString(categoryString){

    var catStrArray=categoryString.split('/');

    var newCatStr="";

    for(var i=0;i<catStrArray.length;i++){
        //! replace all occurrences of spaces with hyphens, then remove all characters that are not alphanumeric characters or hyphens.
        var ct=catStrArray[i].toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
        if(i==0){
            newCatStr=ct;
        }else{
            newCatStr=newCatStr+"/"+ct;
        }
    }
    console.log("newCatStr",newCatStr)
    return newCatStr;
}

getCategoryString(a)