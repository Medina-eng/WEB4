document.getElementById("calculate-btn").addEventListener("click", function () {
    const basePrice = 100;

    const education = parseFloat(document.getElementById("education").value);
    const netWorth = parseFloat(document.getElementById("net-worth").value);
    const caste = parseInt(document.getElementById("caste").value);

    const skills = [
        document.getElementById("musical").checked ? parseInt(document.getElementById("musical").value) : 0,
        document.getElementById("cook").checked ? parseInt(document.getElementById("cook").value) : 0,
        document.getElementById("easygoing").checked ? parseInt(document.getElementById("easygoing").value) : 0,
        document.getElementById("singing").checked ? parseInt(document.getElementById("singing").value) : 0
    ].reduce((a, b) => a + b, 0);

    const age = parseFloat(document.querySelector("input[name='age']:checked").value);

    const reputation = [
        document.getElementById("parent-gossip").checked ? parseFloat(document.getElementById("parent-gossip").value) : 1,
        document.getElementById("character-gossip").checked ? parseFloat(document.getElementById("character-gossip").value) : 1,
        document.getElementById("general-gossip").checked ? parseInt(document.getElementById("general-gossip").value) : 0
    ].reduce((a, b) => a * b, 1);

    let finalPrice = basePrice * education * netWorth * age * reputation + caste + skills;

    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `The calculated dowry price is $${finalPrice.toFixed(2)}.`;

    resultDiv.style.color = finalPrice > 200 ? "green" : "red";
});