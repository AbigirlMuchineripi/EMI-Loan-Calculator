
function Calculate(){
    //now extract values in amount, interest rate & months sections in variables
    const amount = document.querySelector("#amount").value;
    const rate = document.querySelector("#rate").value;
    const months = document.querySelector("#months").value;

    //calculate IR/month
    const interest =(amount*(rate*0.01))/months;

    //calculate total payment
    const total =((amount/months)+ interest).toFixed(2);

    document.querySelector('#total')
            .innerHTML= "EMI : (£)" + total;
}