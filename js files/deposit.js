document.getElementById("diposit-btn").addEventListener("click", function () {
  
  const depositField = document.getElementById("diposit-field");
  const currentDeposit = parseFloat(depositField.value);

  if(isNaN(currentDeposit)){
    alert('please enter an amount');
    return;
  }

  depositField.value = "";

  const depositBalance = document.getElementById("deposit-balance");
  const previousDeposit = parseFloat(depositBalance.innerText);

  //   depositBalance.innerText = currentDeposit;

  const currentTotalDeposit = previousDeposit + currentDeposit;
  depositBalance.innerText = currentTotalDeposit;

  const totalBalance = document.getElementById("total-balance");
  const previousBalance = parseFloat(totalBalance.innerText);

  const currentTotalBalance = previousBalance + currentDeposit;
  totalBalance.innerText = currentTotalBalance;

});
