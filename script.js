function calculateTax() {
    const incomeInput = document.getElementById('income').value;
    
    // Check if the input is a positive number
    if (!/^\+?\d*\.?\d+$/.test(incomeInput)) {
      document.getElementById('incomeError').innerHTML = "Please enter a valid positive number for income.";
      return;
    }
  
    const income = parseFloat(incomeInput);
    // Check if the income is negative
    if (income < 0) {
      document.getElementById('incomeError').innerHTML = "Please provide your income, not a loss.";
      return;
    }
  
    document.getElementById('incomeError').innerHTML = ''; // Clear previous error message
  
    let tax = 0;
    let taxOutput = '';
  
    if (income <= 18200) {
      tax = 0;
    } else if (income <= 45000) {
      tax = (income - 18200) * 0.19;
      taxOutput += `<p>$18,201 – $45,000: $${tax.toFixed(2)}</p>`;
    } else if (income <= 120000) {
      tax = 5092 + (income - 45000) * 0.325;
      taxOutput += `<p>$18,201 – $45,000: $5092.00</p>`;
      taxOutput += `<p>$45,001 – $120,000: $${(tax - 5092).toFixed(2)}</p>`;
    } else if (income <= 180000) {
      tax = 29467 + (income - 120000) * 0.37;
      taxOutput += `<p>$18,201 – $45,000: $5092.00</p>`;
      taxOutput += `<p>$45,001 – $120,000: $29467.00</p>`;
      taxOutput += `<p>$120,001 – $180,000: $${(tax - 29467).toFixed(2)}</p>`;
    } else {
      tax = 51667 + (income - 180000) * 0.45;
      taxOutput += `<p>$18,201 – $45,000: $5092.00</p>`;
      taxOutput += `<p>$45,001 – $120,000: $29467.00</p>`;
      taxOutput += `<p>$120,001 – $180,000: $51667.00</p>`;
      taxOutput += `<p>$180,001 and over: $${(tax - 51667).toFixed(2)}</p>`;
    }
  
    document.getElementById('taxOutput').innerHTML = `
      <p>0 – $18,200: No tax</p>
      ${taxOutput}
      <p>Total Tax: $${tax.toFixed(2)}</p>
    `;
  }
  
  function calculateDifference() {
    const taxPaidInput = document.getElementById('taxPaid').value;
    
    // Check if the input is a positive number
    if (!/^\+?\d*\.?\d+$/.test(taxPaidInput)) {
      document.getElementById('taxPaidError').innerHTML = "Please enter a valid positive number for tax paid.";
      return;
    }
  
    const taxPaid = parseFloat(taxPaidInput);
    // Check if the tax paid is negative
    if (taxPaid < 0) {
      document.getElementById('taxPaidError').innerHTML = "Please provide the tax paid, not a negative value.";
      return;
    }
  
    document.getElementById('taxPaidError').innerHTML = ''; // Clear previous error message
  
    const incomeInput = document.getElementById('income').value;
    
    // Check if the input is a positive number
    if (!/^\+?\d*\.?\d+$/.test(incomeInput)) {
      document.getElementById('incomeError').innerHTML = "Please enter a valid positive number for income.";
      return;
    }
  
    const income = parseFloat(incomeInput);
    // Check if the income is negative
    if (income < 0) {
      document.getElementById('incomeError').innerHTML = "Please provide your income, not a loss.";
      return;
    }
  
    document.getElementById('incomeError').innerHTML = ''; // Clear previous error message
  
    const tax = calculateActualTax(income);
  
    const difference = taxPaid - tax;
    let message = '';
  
    if (difference >= 0) {
      message = `Tax Return: $${difference.toFixed(2)}`;
    } else {
      message = `You owe additional tax of $${Math.abs(difference).toFixed(2)}`;
    }
  
    document.getElementById('differenceOutput').innerHTML = `
      <p>${message}</p>
    `;
  }
  
  function calculateActualTax(income) {
    let tax = 0;
  
    if (income <= 18200) {
      tax = 0;
    } else if (income <= 45000) {
      tax = (income - 18200) * 0.19;
    } else if (income <= 120000) {
      tax = 5092 + (income - 45000) * 0.325;
    } else if (income <= 180000) {
      tax = 29467 + (income - 120000) * 0.37;
    } else {
      tax = 51667 + (income - 180000) * 0.45;
    }
  
    return tax;
  }


  //ball

  document.addEventListener("DOMContentLoaded", function() {
    const glowingBall = document.querySelector(".glowing-ball");
  
    document.addEventListener("mousemove", function(e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
  
      glowingBall.style.left = mouseX + "px";
      glowingBall.style.top = mouseY + "px";
    });
  });
  