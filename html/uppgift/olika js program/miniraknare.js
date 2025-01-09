function Raknare(operationer) {
    let resultat = 0; // Håller resultatet av föregående operation
  
    operationer.forEach((operation, index) => {
      // Använd 'result' som första tal om det behövs
      const tal1 = operation.tal1 === 'result' ? resultat : operation.tal1;
      const tal2 = operation.tal2;
  
      // Utför operation baserat på operator
      switch (operation.operator) {
        case '+':
          resultat = tal1 + tal2;
          break;
        case '-':
          resultat = tal1 - tal2;
          break;
        case '*':
          resultat = tal1 * tal2;
          break;
        case '/':
          if (tal2 === 0) {
            console.log(`Fel vid operation ${index + 1}: Division med noll är inte tillåten.`);
            return;
          }
          resultat = tal1 / tal2;
          break;
        default:
          console.log(`Fel vid operation ${index + 1}: Ogiltig operator '${operation.operator}'.`);
          return;
      }
  
      // Skriv ut resultatet av operationen
      console.log(`Efter operation ${index + 1}: ${tal1} ${operation.operator} ${tal2} = ${resultat}`);
    });
  
    return resultat; // Returnera slutresultatet
  }
  
  // Exempeldata
  const operationer = [
    { tal1: 10, tal2: 5, operator: '+' },
    { tal1: 'result', tal2: 3, operator: '*' },
    { tal1: 'result', tal2: 0, operator: '/' },
  ];
  
  // Kör funktionen
  Raknare(operationer);