
//Function to calculate percentage
const percentage = () => {
    let math = document.getElementById('math').value;
    let phy = document.getElementById('phy').value;
    let comp = document.getElementById('comp').value;
    let chem = document.getElementById('chem').value;
    let sum = (+math + +phy + +comp + +chem);
    let perc = (sum / 400) * 100;
    let grade = "";
    let rslt = "";
    if (perc <= 100 && perc >= 80) {
        grade = 'A+';
        rslt = 'Pass';
    } else if (perc <= 80 && perc >= 70) {
        grade = 'A';
        rslt = 'Pass';
    } else if (perc <= 70 && perc >= 60) {
        grade = 'B';
        rslt = 'Pass';
    } else if (perc <= 60 && perc >= 50) {
        grade = 'C';
        rslt = 'Pass';
    } else if (perc <= 50 && perc >= 40) {
        grade = 'D';
        rslt = 'Pass';
    } else {
        grade = 'F';
        rslt = 'Fail';
    }

    let result = `Out of 400 your total marks are ${sum} and percentage is ${perc}. Your Grade is ${grade}.<br>You are ${rslt}.`;

    document.getElementById('showResult').innerHTML = result;

}
