function beraknaMoms(pris, momsProcent) {
    // Kontrollera att inmatade värden är giltiga
    if (isNaN(pris) || isNaN(momsProcent)) {
      return "Vänligen ange giltiga tal för pris och momsprocent.";
    }
  
    // Beräkna moms och totalpris
    const moms = (pris * momsProcent) / 100;
    const totalPris = pris + moms;
  
    // Begränsa till två decimaler
    return totalPris.toFixed(2);
  }
  
  // Exempelanvändning
  console.log(beraknaMoms(100, 25)); // 125.00
  console.log(beraknaMoms(200, 12)); // 224.00
  console.log(beraknaMoms(50, 6));   // 53.00

  function investeringTillvaxt(startBelopp, ranta, antalAr) {
    // Kontrollera att inmatade värden är giltiga
    if (isNaN(startBelopp) || isNaN(ranta) || isNaN(antalAr)) {
      return "Vänligen ange giltiga tal för startbelopp, ränta och antal år.";
    }
  
    // Formel för sammansatt ränta: FV = PV * (1 + r/100)^t
    const framtidaVarde = startBelopp * Math.pow(1 + ranta / 100, antalAr);
  
    // Begränsa till två decimaler
    return framtidaVarde.toFixed(2);
  }
  
  // Exempelanvändning
  console.log(investeringTillvaxt(10000, 5, 10)); // 16288.95
  console.log(investeringTillvaxt(20000, 7, 5));  // 28053.90
  console.log(investeringTillvaxt(5000, 3, 15));  // 7781.73