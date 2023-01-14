function User(email,password,firstname,lastname,age,street,city,state,zip,phone,payment,color){
    this.email=email;
    this.password=password;
    this.fname=firstname;
    this.lname=lastname;
    this.age=age;
    this.street=street;
    this.city=city;
    this.state=state;
    this.zip=zip;
    this.phone=phone;
    this.payment=payment;
    this.color=color;
}

function register(){
    let inputEmail = $("#txtEmail").val();
    let inputPassword = $("#txtPassword").val();
    let inputFname = $("#txtFirstName").val();
    let inputLname = $("#txtLastName").val();
    let inputAge = $("#txtAge").val();
    let inputStreet = $("#txtStreet").val();
    let inputCity = $("#txtCity").val();
    let inputState = $("#txtState").val();
    let inputZip = $("#txtZip").val();
    let inputPhone = $("#txtPhone").val();
    let inputPayment = $("#selPayment").val();
    let inputColor = $("#selColor").val();

    let newUser=new User(inputEmail,inputPassword,inputFname,inputLname,inputAge,inputStreet,inputCity,inputState,inputZip,inputPhone,inputPayment,inputColor);

    saveUser(newUser);
}

function init(){
    $("#btnAdd").click(register);
}

window.onload=init; 