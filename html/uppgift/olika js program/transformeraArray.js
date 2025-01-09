function transformeraArray(array, operationer) {
    if (!Array.isArray(array) || !array.every((num) => typeof num === "number")) {
      return "Ogiltig array: Vänligen ange en array med endast tal.";
    }
  
    if (!Array.isArray(operationer) || operationer.length === 0) {
      return "Ogiltiga operationer: Vänligen ange en lista med giltiga operationer.";
    }
  
    operationer.forEach((operation) => {
      // Kontrollera operationens typ och värde
      const { operation: typ, value } = operation;
  
      if (typeof value !== "number") {
        console.log(`Ogiltigt värde för operation: ${typ}.`);
        return;
      }
  
      // Utför transformationer baserat på operationstyp
      switch (typ) {
        case "add":
          array = array.map((num) => num + value);
          break;
        case "subtract":
          array = array.map((num) => num - value);
          break;
        case "multiply":
          array = array.map((num) => num * value);
          break;
        case "divide":
          array = array.map((num) =>
            value === 0
              ? (console.log("Division med noll är inte tillåten."), num)
              : num / value
          );
          break;
        default:
          console.log(`Ogiltig operation: ${typ}.`);
      }
    });
  
    return array;
  }
  
  // Exempelanvändning
  const resultat = transformeraArray(
    [1, 2, 3, 4],
    [
      { operation: "add", value: 2 },
      { operation: "multiply", value: 3 },
      { operation: "divide", value: 0 }, // Test för division med noll
      { operation: "subtract", value: 1 },
    ]
  );
  console.log(resultat);