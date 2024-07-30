function validationform(){
    var fname=document.validateform.fname.value;
    var lname=document.validateform.lname.value;
    var city=document.validateform.city.value;
    var num=document.validateform.num.value;
    var mail=document.validateform.email.value;
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if(fname==null||fname==""||lname==null||lname==""){
        alert("Name shouldn't be blank");
        return false;
    }
    else if(num.length<10){
        alert("Enter proper Phone number");
        return false;
    }
    else if(city==null||city==""){
        alert("Fill the city");
        return false;
    }
    else if(!pattern.test(mail)){
        alert("Enter proper mail ID");
        return false;
    }
    else{
        document.write("Form submitted sucessfully");
        return true;
    }
}