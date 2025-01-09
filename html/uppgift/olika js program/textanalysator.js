function textAnalysator(text, operation, argument = "") {
    // Kontrollera att text är en sträng
    if (typeof text !== "string" || text.trim() === "") {
      return "Ogiltig text. Vänligen ange en giltig textsträng.";
    }
  
    // Kontrollera operation
    switch (operation) {
      case "countWords":
        // Räkna antalet ord genom att dela upp texten i ord
        const antalOrd = text.split(/\s+/).filter((word) => word).length;
        return `Antal ord i texten: ${antalOrd}`;
  
      case "findWord":
        // Kontrollera att argumentet (sökordet) är en sträng
        if (typeof argument !== "string" || argument.trim() === "") {
          return "Ange ett giltigt ord att söka efter.";
        }
        // Räkna förekomster av ordet i texten
        const regex = new RegExp(`\\b${argument}\\b`, "gi");
        const forekomster = (text.match(regex) || []).length;
        return `Ordet "${argument}" förekommer ${forekomster} gånger.`;
  
      case "toUpper":
        // Omvandla texten till versaler
        return text.toUpperCase();
  
      case "toLower":
        // Omvandla texten till gemener
        return text.toLowerCase();
  
      default:
        // Felaktig operation
        return "Ogiltig operation. Tillgängliga operationer är: countWords, findWord, toUpper, toLower.";
    }
  }
  
  // Exempelanvändning
  console.log(textAnalysator("Hej världen! Hej igen.", "countWords")); // Antal ord i texten: 4
  console.log(textAnalysator("Hej världen! Hej igen.", "findWord", "Hej")); // Ordet "Hej" förekommer 2 gånger.
  console.log(textAnalysator("Hej världen! Hej igen.", "toUpper")); // HEJ VÄRLDEN! HEJ IGEN.
  console.log(textAnalysator("Hej världen! Hej igen.", "toLower")); // hej världen! hej igen.
  console.log(textAnalysator("Hej världen!", "invalidOperation")); // Ogiltig operation.