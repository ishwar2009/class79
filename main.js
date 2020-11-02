nameofthestudentsarray=[];
function submit() {
    var name1= document.getElementById("nameofstudent1").value;
    var name2= document.getElementById("nameofstudent2").value;
    var name3= document.getElementById("nameofstudent3").value;
    var name4= document.getElementById("nameofstudent4").value;

    nameofthestudentsarray.push(name1);
    nameofthestudentsarray.push(name2);
    nameofthestudentsarray.push(name3);
    nameofthestudentsarray.push(name4);
    console.log(nameofthestudentsarray)

    document.getElementById("display").innerHTML=nameofthestudentsarray;
    document.getElementById("submitbutton").style.display="none";
    document.getElementById("sort").style.display="inline-block";
}
function sort() {
    nameofthestudentsarray.sort();
    document.getElementById("display").innerHTML=nameofthestudentsarray;
    
}

    