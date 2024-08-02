class Amortissement {
    constructor(coutInitial, valeurResiduelle, dureeVie) {
      this.coutInitial = coutInitial;
      this.valeurResiduelle = valeurResiduelle;
      this.dureeVie = dureeVie;
    }
  
    calculerAmortissementAnnuel() {
      return (this.coutInitial - this.valeurResiduelle) / this.dureeVie;
    }
  
    calculerAmortissementMensuel() {
      return this.calculerAmortissementAnnuel() / 12;
    }
  }
  

  const telephone = new Amortissement(500000, 50000, 2);
  console.log(`Amortissement annuel du téléphone: ${telephone.calculerAmortissementAnnuel()}`);
  console.log(`Amortissement mensuel du téléphone: ${telephone.calculerAmortissementMensuel()}`);
  
  
  const ordinateur = new Amortissement(1000000, 200000, 4);
  console.log(`Amortissement annuel de l'ordinateur portable: ${ordinateur.calculerAmortissementAnnuel()}`);
  console.log(`Amortissement mensuel de l'ordinateur portable: ${ordinateur.calculerAmortissementMensuel()}`);
  