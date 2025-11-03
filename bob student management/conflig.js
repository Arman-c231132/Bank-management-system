let totalBalance = 0;
    const totalBalanceEl = document.getElementById("totalBalance");
    const depositInput = document.getElementById("depositAmount");
    const withdrawInput = document.getElementById("withdrawAmount");
    const transactionHistory = document.getElementById("transactionHistory");

    function updateBalanceDisplay() {
      totalBalanceEl.textContent = `${totalBalance}`;
    }

    function addTransaction(type, amount) {
      const li = document.createElement("li");
      const date = new Date().toLocaleString();
      if (type === "Deposit") {
        li.innerHTML = `<span class="text-green-600 font-semibold">+৳${amount}</span> <span class="text-gray-500">(${date})</span>`;
      } else {
        li.innerHTML = `<span class="text-red-600 font-semibold">-৳${amount}</span> <span class="text-gray-500">(${date})</span>`;
      }

      if (transactionHistory.children[0].textContent === "No transactions yet") {
        transactionHistory.innerHTML = "";
      }

      transactionHistory.prepend(li);
    }

    document.getElementById("depositBtn").addEventListener("click", function() {
      const amount = parseFloat(depositInput.value);
      if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid deposit amount!");
        return;
      }
      totalBalance += amount;
      updateBalanceDisplay();
      addTransaction("Deposit", amount);
      depositInput.value = "";
    });

    document.getElementById("withdrawBtn").addEventListener("click", function() {
      const amount = parseFloat(withdrawInput.value);
      if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid withdraw amount!");
        return;
      }
      if (amount > totalBalance) {
        alert("Insufficient balance!");
        return;
      }
      totalBalance -= amount;
      updateBalanceDisplay();
      addTransaction("Withdraw", amount);
      withdrawInput.value = "";
    });
  