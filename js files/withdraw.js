document.getElementById("withdraw-btn").addEventListener("click", function () {

  const withdrawField = document.getElementById("withdraw-field");
  const curerntWithdraw = parseFloat(withdrawField.value);
  if(isNaN(curerntWithdraw)){
    alert('please enter an amount');
    return;
  }

  withdrawField.value = "";

  const withdrawBalance = document.getElementById("withdraw-balance");
  const previousWithdraw = parseFloat(withdrawBalance.innerText);

  const totalBalance = document.getElementById("total-balance");
  const previousBalance = parseFloat(totalBalance.innerText);
  
  if(curerntWithdraw > previousBalance){
    alert('moye moye');
    return;
  }

  //   withdrawBalance.innerText = curerntWithdraw;

  const curerntTotalWithdraw = previousWithdraw + curerntWithdraw;
  withdrawBalance.innerText = curerntTotalWithdraw;


  const currentTotalBalance = previousBalance - curerntWithdraw;

  totalBalance.innerText = currentTotalBalance;
});
