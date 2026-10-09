function calculateEMI() {
    const loanType = document.getElementById('loanType').value;
    const P = parseFloat(document.getElementById('principal').value);
    const annualRate = parseFloat(document.getElementById('rate').value);
    const years = parseFloat(document.getElementById('tenure').value);

    if (!P || !annualRate || !years) return alert("Please fill all fields.");

    const r = (annualRate / 12) / 100;
    const n = years * 12;
    
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    document.getElementById('emiResult').innerText = `Monthly EMI: ₹${Math.round(emi).toLocaleString('en-IN')}`;

    const crossSellBox = document.getElementById('crossSellBox');
    let recommendation = "";
    
    if (loanType === 'home') {
        recommendation = "<strong>Exclusive Offer:</strong> Protect your new home with ICICI Lombard Property Insurance.";
    } else if (loanType === 'car') {
        recommendation = "<strong>Drive Safe:</strong> Add ICICI Auto Insurance with Zero Depreciation to your loan package today.";
    } else {
        recommendation = "<strong>Pre-approved!</strong> Based on this loan, you are eligible for the ICICI Platinum Credit Card.";
    }

    crossSellBox.innerHTML = recommendation;
    crossSellBox.className = "cross-sell-active";
}