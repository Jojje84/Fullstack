function valideraEmail(email) {
    // Trimma bort mellanslag i början och slutet
    const trimEmail = email.trim();
  
    // Kontrollera om det finns mellanslag i e-posten
    if (trimEmail.includes(" ")) {
      return "Ogiltig e-post: innehåller mellanslag.";
    }
  
    // Kontrollera om e-posten innehåller ett "@"-tecken
    if (trimEmail.indexOf("@") === -1) {
      return "Ogiltig e-post: saknar '@'.";
    }
  
    // E-posten är giltig
    return "Giltig e-postadress.";
  }
  
  // Exempelanvändning
  console.log(valideraEmail(" test@example.com")); // Giltig e-postadress.
  console.log(valideraEmail("test example.com"));  // Ogiltig e-post: innehåller mellanslag.
  console.log(valideraEmail("testexample.com"));   // Ogiltig e-post: saknar '@'.

  function formatteraNamn(namn) {
    // Dela upp namnet i ord
    const ord = namn.split(" ");
  
    // Formatera varje ord
    const formateradeOrd = ord.map((ord) => {
      return ord[0].toUpperCase() + ord.slice(1).toLowerCase();
    });
  
    // Slå ihop orden igen
    return formateradeOrd.join(" ");
  }
  
  // Exempelanvändning
  console.log(formatteraNamn("JOHN DOE"));          // John Doe
  console.log(formatteraNamn("jane doe"));          // Jane Doe
  console.log(formatteraNamn("aLexAnDer gustafsSon")); // Alexander Gustafsson