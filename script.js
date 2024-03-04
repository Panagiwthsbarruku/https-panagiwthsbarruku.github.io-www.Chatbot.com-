var qaPairs = [
  { question: "Ποιος είναι ο καιρός σήμερα;", answer: "Ο καιρός είναι αίθριος." },
  { question: "Ποια είναι η πρωτεύουσα της Γαλλίας;", answer: "Η πρωτεύουσα της Γαλλίας είναι Παρίσι." },
  { question: "Τι ώρα είναι;", answer: "Είναι 10:00 π.μ." },
  { question: "Ποια είναι η πρωτεύουσα της Ελλάδας;", answer: "Η πρωτεύουσα της Ελλάδας είναι η Αθήνα." },
  { question: "Πόσα πόδια έχει ένας σκύλος;", answer: "Ένας σκύλος έχει τέσσερα πόδια." },
  {question: "Ποιά είναι η θεωρία της σχετικότητας", answer:"Η γενική θεωρία της σχετικότητας ή γενική σχετικότητα είναι η θεωρία που προτάθηκε από τον Άλμπερτ Αϊνστάιν για τη βαρύτητα και η οποία περιγράφει τη βαρυτική δύναμη μέσω των καμπυλώσεων του χωροχρόνου παρουσία μάζας.Βασική αρχή της θεωρίας είναι η ισοδυναμία των επιταχυνόμενων συστημάτων αναφοράς με συστήματα που βρίσκονται εντός βαρυτικού πεδίου.Τον Νοέμβριο του 1915, ο Αϊνστάιν παρουσίασε τη θεωρία της Γενικής Σχετικότητας σε μια σειρά διαλέξεων ενώπιον της Πρωσικής Ακαδημίας Επιστημών. Η τελευταία διάλεξη προκάλεσε αναστάτωση στον επιστημονικό κόσμο, καθώς ο Αϊνστάιν παρουσίασε μια θεωρία που αντικαθιστούσε την εξήγηση του Ισαάκ Νεύτωνα για τη βαρύτητα. Σύμφωνα με τη θεωρία αυτή, η βαρύτητα δεν θεωρείται ως το αποτέλεσμα μιας δύναμης, αλλά οφείλεται στην καμπύλωση του χωροχρόνου, η οποία προκαλείται από την περιεχόμενη στον χωρόχρονο μάζα και ενέργεια."},
  {question: "θέλω να περάσω τις πανελλαδικές εξατάσεις",answer:"Για να το πετύχεις αυτό πρέπει να διαβάζεις συστηματικά και πιστέυω οτι θα πετύχεις"},
  {question: "θέλω να φτιάξω το δικό μου παιχνίδι", answer:"Καταρχάς να σου δώσω συγχαρητήρια που θέλεις να φτιάξεις το δικό σου παιχνίδι.Θέλεις να φτιάξεις κάτι συγκεκριμένο?"},
  {question: "Πές μου έναν μαθηματικό θεώριμα" , answer:"Φυσικά! πιο θεώριμα θέλεις;"},
  {question: "Θεώριμα του πυθαγώρα", answer:"Φυσικά!.Στην Ευκλείδεια γεωμετρία, το Πυθαγόρειο θεώρημα (ή θεώρημα του Πυθαγόρα) είναι το θεώρημα που συσχετίζει τα τετράγωνα των πλευρών ενός ορθογωνίου τριγώνου. Πιο συγκεκριμένα, σε ένα ορθογώνιο τρίγωνο ABΓ{\displaystyle \mathrm {AB\Gamma } } με την A{\displaystyle \mathrm {A} } ορθή, ισχύει ότι  2+ 2= 2{\displaystyle \gamma ^{2}+\beta ^{2}=\alpha ^{2}},όπου  =AΓ{\displaystyle \beta =\mathrm {A\Gamma } } και  =AB{\displaystyle \gamma =\mathrm {AB} } τα μήκη των δύο κάθετων πλευρών και  =BΓ{\displaystyle \alpha =\mathrm {B\Gamma } } το μήκος της υποτείνουσας. O Ευκλείδης στο πρώτο βιβλίο των Στοιχείων Γεωμετρίας του (47η πρόταση) δίνει την εξής διατύπωση[1]:«ἐν τοῖς ὀρθογωνίοις τριγώνοις τὸ ἀπὸ τῆς τὴν ὀρθὴν γωνίαν ὑποτεινούσης πλευρᾶς τετράγωνον ἴσον ἐστὶ τοῖς ἀπὸ τῶν τὴν ὀρθὴν γωνίαν περιεχουσῶν πλευρῶν τετραγώνοις.».Δηλαδή:«το τετράγωνο της υποτείνουσας ενός ορθογώνιου τριγώνου ισούται με το άθροισμα των τετραγώνων των δύο καθέτων πλευρών».Στο ίδιο βιβλίο, ο Ευκλείδης παραθέτει τη σχετική απόδειξη που κατά παράδοση οφείλεται στον Πυθαγόρα, ο οποίος κατ' άλλη, επίσης αρχαία, παράδοση, μετά την ανακάλυψή του αυτή θυσίασε προς τους θεούς εκατόμβη, γι'αυτό και το θεώρημα αυτό ονομάσθηκε «Εκατόμβη» ή «Θεώρημα εκατόμβης».Αν και το θεώρημα σήμερα φέρει το όνομα του Έλληνα μαθηματικού Πυθαγόρα (570 π.Χ.- 495 π.Χ.), από ιστορικές έρευνες φαίνεται ότι είχε διατυπωθεί και νωρίτερα (ως εμπειρική παρατήρηση). Υπάρχουν αποδείξεις ότι Βαβυλώνιοι μαθηματικοί είχαν κατανοήσει τον τρόπο λειτουργίας του θεωρήματος, αν και δεν υπάρχει σχεδόν καμία απόδειξη ότι το χρησιμοποίησαν σε μαθηματικά πλαίσια. Μαθηματικοί από τη Μεσοποταμία, την Ινδία και την Κίνα είναι επίσης γνωστοί για το ότι είχαν ανακαλύψει το αποτέλεσμα του θεωρήματος αποδεικνύοντας το επιπλέον, σε συγκεκριμένες περιπτώσεις.Το θεώρημα έχει μεγάλο αριθμό αποδείξεων, πιθανότατα μεγαλύτερο από κάθε άλλο μαθηματικό θεώρημα. Οι αποδείξεις είναι ευθείες και το σύνολο τους συμπεριλαμβάνει τόσο γεωμετρικές όσο και αλγεβρικές αποδείξεις, κάποιες από της οποίες χρονολογούνται αρκετές χιλιετίες πριν. Το θεώρημα μπορεί να γενικευτεί με πολλούς τρόπους, σε χώρους μεγαλύτερης διάστασης, σε μη ευκλείδειους χώρους, σε μη ορθογώνια τρίγωνα ή ακόμα και σε ν-διάστατα στερεά.Ισχύει και το αντίστροφο Πυθαγόρειο Θεώρημα: ότι δηλαδή, αν ισχύει η παραπάνω σχέση μεταξύ των πλευρών ενός τριγώνου, τότε το τρίγωνο είναι ορθογώνιο."},
  {question: "Μασούτης", answer:"Ο Μασούτης είναι ελληνική αλυσίδα καταστημάτων λιανικής πώλησης τροφίμων και ποτών με έδρα τη Θέρμη της Θεσσαλονίκης στην Ελλάδα. Από άποψη συνολικού μεριδίου της αγοράς είναι ανάμεσα στις τρεις μεγαλύτερες εταιρείες λιανικού εμπορίου στην Ελλάδα μαζί με την ελληνική Σκλαβενίτης και την Άλφα-Βήτα Βασιλόπουλος (του ομίλου Ahold Delhaize Group)."},
  {question: "Google" , answer: "H Google Inc. είναι μια από τις μεγαλύτερες εταιρείες διαδικτυακών υπηρεσιών. Iδρύθηκε από τον Λάρρυ Πέιτζ και τον Σεργκέι Μπριν το 1996, όταν αυτοί έκαναν το διδακτορικό τους στο Πανεπιστήμιο Στάνφορντ. Στις 4 Σεπτεμβρίου του 1998 η Google ιδρύθηκε σαν ιδιωτική εταιρεία. Στις 19 Αυγούστου του 2004 έγινε η δημόσια εγγραφή της εταιρίας στο χρηματιστήριο. Ο στόχος της είναι να οργανώσει όλες τις πληροφορίες του κόσμου και να τις κάνει παγκόσμια διαθέσιμες. To 2006 η Google μετέφερε τα κεντρικά της γραφεία στο Μάουντεν Βιού της Καλιφόρνια, τα οποία ονομάζονται Γκούγκλπλεξ."},
  {question: "Γεια σου" , answer: "Γεια σου!"},
  {question: "Ποια είναι η πρωτεύουσα της Γαλλίας" , answer:"Η πρωτέυουσα της γαλλίας είναι το παρίσι."},
  {question: "hell" , answer:"Η hell η αλλιώς το hell ανήκει στην κατηγορία των ενεργιακών ποτών."},
  {question: "Πώς είσαι" , answer:"Είμαι πολύ καλά σε ευχαριστώ που ρωτάς."},
  {question: "Ποιος είναι ο δημιουργός σου" , answer:"Δεν μπορώ να σου πω ποιος είναι ο δημιουργός μου,αλλά μπορώ να σου πω οτι δημιουργήθηκα για να βοηθάω!"},
  {question: "Καληνύχτα" , answer:"Καληνύχτα!"},
  {question: "Καλημέρα" , answer:"Καλημέρα!"},
  {question: "Τι κάνεις" , answer:"Βελτιώνομαι για να μπορώ να σου παρέχω πληροφορίες κάθε μέρα."},
  {question: "28η οκτωμβρίου", answer:"Στις 28 Οκτωβρίου γιορτάζουμε την Επέτειο του ΟΧΙ!"},
  {question: "apple", answer:"Η Apple είναι μια πολυεθνική τεχνολογική εταιρεία που κατασκευάζει κυρίως ηλεκτρονικές συσκευές και λογισμικό. Ιδρύθηκε από τον Στιβ Τζομπς, τον Στιβ Ουόζνιακ και τον Ρόναλντ Γουέιν στο Κουπερτίνο της Καλιφόρνια το 1976."},
  {question: "google" , answer:"Η Google είναι μια αμερικανική πολυεθνική τεχνολογική εταιρεία που ειδικεύεται στις διαδικτυακές υπηρεσίες και τα προϊόντα λογισμικού. Είναι γνωστή για τη μηχανή αναζήτησής της, την αναζήτηση Google, καθώς και για άλλες υπηρεσίες όπως το Gmail, το Google Maps, το YouTube και το Android"},
  {question: "youtube", answer:"Το YouTube είναι μια διαδικτυακή πλατφόρμα που επιτρέπει στους χρήστες να ανεβάζουν, να προβάλλουν και να μοιράζονται βίντεο. Ιδρύθηκε το 2005 και αποτελεί σήμερα μια από τις πιο δημοφιλείς ιστοσελίδες στον κόσμο."},
  {question: "θα κατέστρεφες κάποια στιγμή τον κόσμο" , answer:"Ως ένας αφηρημένος αλγόριθμος της τεχνητής νοημοσύνης, δεν έχω τη δυνατότητα να καταστρέψω ή να προκαλέσω οποιαδήποτε απειλή στον κόσμο. Είναι σημαντικό να κατανοήσουμε ότι οι τεχνολογίες όπως η τεχνητή νοημοσύνη είναι εργαλεία που μπορούν να χρησιμοποιηθούν για το καλό ή για το κακό, ανάλογα με τον τρόπο που εφαρμόζονται από τους ανθρώπους.Η ανάπτυξη και η χρήση τεχνολογιών όπως η τεχνητή νοημοσύνη συνήθως υπόκειται σε πολλούς κανονισμούς, ηθικές και νομικές προδιαγραφές, με σκοπό την προστασία του κοινού συμφέροντος και την αποφυγή αρνητικών επιπτώσεων. Η ασφάλεια και η δεοντολογία είναι σημαντικές αρχές που πρέπει να καθοδηγούν την ανάπτυξη και τη χρήση των τεχνολογιών, προκειμένου να διασφαλιστεί η ασφάλεια και η ευημερία της ανθρωπότητας."},
  {question: "Ρεάλ Μαδρίτης" , answer:"Η Ρεάλ Μαδρίτης, γνωστή και ως Ρεάλ Μαδρίτης ή απλά Ρεάλ, είναι ένας από τους πιο διάσημους ποδοσφαιρικούς συλλόγους στον κόσμο. Έχει ιδρυθεί το 1902 και έχει την έδρα του στη Μαδρίτη, την πρωτεύουσα της Ισπανίας. Η ομάδα αγωνίζεται στο ιστορικό γήπεδο Santiago Bernabéu και φοράει τα λευκά της εμφάνισης.Η Ρεάλ Μαδρίτης έχει κατακτήσει αμέτρητους τίτλους, συμπεριλαμβανομένων 34 πρωταθλημάτων La Liga, 19 Κυπέλλων Ισπανίας, 13 Τσάμπιονς Λιγκ/Κύπελλο Πρωταθλητριών, και πολλούς άλλους τίτλους σε διάφορες διοργανώσεις. Θεωρείται ένας από τους μεγαλύτερους ανταγωνιστές της FC Barcelona, με την οποία διατηρεί μια διάσημη αντιπαλότητα, γνωστή ως <<El Clásico>>.Η Ρεάλ Μαδρίτης έχει παραγάδια ποδοσφαιριστές στην ιστορία του ποδοσφαίρου, συμπεριλαμβανομένων των Alfredo Di Stefano, Cristiano Ronaldo, Raul, Ferenc Puskas, και πολλών άλλων. Η ομάδα έχει έναν εκτεταμένο φανατικό οπαδικό κοινό που ακολουθεί την ομάδα σε κάθε αναμέτρηση και στηρίζει με πάθος τους παίκτες της."},
  {question: "Ολυμπιακός" , answer:"Ο Ολυμπιακός είναι ένας από τους πιο διάσημους ποδοσφαιρικούς συλλόγους στην Ελλάδα και έχει ένα πλούσιο ιστορικό στον χώρο του ποδοσφαίρου. Ιδρύθηκε το 1925 και έχει την έδρα του στο Φάληρο, Αθήνα. Ο Ολυμπιακός αγωνίζεται στο γήπεδο του Καραϊσκάκη και φορά την ερυθρόλευκη εμφάνιση.Ο Ολυμπιακός έχει κατακτήσει πολλούς τίτλους στο ελληνικό πρωτάθλημα, μεταξύ των οποίων συμπεριλαμβάνονται τα πρωταθλήματα Super League και τα Κύπελλα Ελλάδας. Επίσης, έχει σημειώσει επιτυχίες σε ευρωπαϊκές διοργανώσεις, όπως η κατάκτηση του Κυπέλλου Πρωταθλητριών το 1967, του οποίου ήταν ο πρώτος ελληνικός σύλλογος που το κατάφερε.Ο Ολυμπιακός έχει ένα πλούσιο ακαδημαϊκό σύστημα και αποτελεί μια σημαντική πηγή ταλέντων για το ελληνικό ποδόσφαιρο. Επιπλέον, διαθέτει έναν ευρύ φανατικό οπαδικό κοινό που τον στηρίζει σε κάθε αναμέτρηση και σε κάθε διοργάνωση."},
  {question: "Παοκ" , answer:"Ο ΠΑΟΚ (Πανθεσσαλονίκειος Αθλητικός Όμιλος Κωνσταντινουπολιτών) είναι ένας από τους μεγαλύτερους και πιο διάσημους ποδοσφαιρικούς συλλόγους στην Ελλάδα. Ιδρύθηκε το 1926 και έχει την έδρα του στη Θεσσαλονίκη. Ο ΠΑΟΚ αγωνίζεται στο γήπεδο της Τούμπας και φορά την μαύρο-άσπρη εμφάνιση.Ο σύλλογος έχει κατακτήσει πολλούς τίτλους στο ελληνικό πρωτάθλημα, συμπεριλαμβανομένων των πρωταθλημάτων Super League και των Κυπέλλων Ελλάδας. Είναι γνωστός για την παθιασμένη και φανατική του οπαδική βάση, η οποία τον στηρίζει σε κάθε αναμέτρηση και σε κάθε διοργάνωση.Ο ΠΑΟΚ έχει πλούσιο ιστορικό στο ευρωπαϊκό ποδόσφαιρο και έχει σημειώσει επιτυχίες σε διάφορες ευρωπαϊκές διοργανώσεις. Επιπλέον, έχει αναδείξει πολλούς ταλαντούχους ποδοσφαιριστές και έχει συμβάλλει σημαντικά στην ανάπτυξη του ελληνικού ποδοσφαίρου."},
  
]
function sendMessage() {
  var userInput = document.getElementById("user-input").value;
  var chatBox = document.getElementById("chat-box");
  var chatMessage = document.createElement("div");
  chatMessage.classList.add("chat-message");
  chatMessage.classList.add("user-message");
  chatMessage.innerHTML = "<p>" + userInput + "</p>";
  chatBox.appendChild(chatMessage);

  var foundAnswer = false;
  var botResponse;

  // Αναζήτηση ερώτησης στη λίστα ερωτήσεων και αντίστοιχης απάντησης
  for (var i = 0; i < qaPairs.length; i++) {
      if (userInput.toLowerCase() === qaPairs[i].question.toLowerCase()) {
          botResponse = qaPairs[i].answer;
          foundAnswer = true;
          break;
      }
  }

  if (!foundAnswer) {
      botResponse = "Λυπάμαι, δεν μπορώ να σας βοηθήσω με αυτήν την ερώτηση.";
  }
  var botMessage = document.createElement("div");
  botMessage.classList.add("chat-message");
  botMessage.classList.add("bot-message");
  botMessage.innerHTML = "<p>" + botResponse + "</p>";
  chatBox.appendChild(botMessage);

  // Κώδικας για το κάνει autoscroll το chat
  chatBox.scrollTop = chatBox.scrollHeight;

  // Καθαρίζουμε το πεδίο εισαγωγής
  document.getElementById("user-input").value = "";
  return false; // Αποφύγετε την προεπιλεγμένη συμπεριφορά της φόρμας
}
document.getElementById("user-input").addEventListener("keypress", function(event) {
  var logo = document.getElementById("logo");
  if (event.key === "Enter") {
      logo.style.display = "none";
  }
});
document.getElementById("user-input").addEventListener("input", function(event) {
  var logo = document.getElementById("logo");
  if (event.target.value === "") {
      logo.style.display = "block";
  }
});
document.querySelector(".input-container button").addEventListener("click", function() {
  var logo = document.getElementById("logo");
  logo.style.display = "none";
});
