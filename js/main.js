//Objectif du Challenge

/*
Transformer la liste de cadeaux des enfants pas sages pour garder que 1 cadeaux de leur liste. Combien d'enfants ne sont pas sages ? Combien de cadeaux ne leurs seront pas donné pour chacun ? Combien de cadeaux ne seront pas donné au total ?
*/

const listesDeCadeaux = [
  {
    sage: true,
    cadeaux: ["baguette", "voiture", "luge"],
  },
  {
    sage: false,
    cadeaux: ["pistolet", "casquette", "chien", "PS5", "guitare"],
  },
  {
    sage: true,
    cadeaux: ["bureau", "dvd", "télé"],
  },
  {
    sage: true,
    cadeaux: ["bougie", "plante", "veste"],
  },
  {
    sage: false,
    cadeaux: ["siege", "farine", "webflow", "airtable"],
  },
  {
    sage: false,
    cadeaux: ["briquet", "laisse", "iPod", "surligneur", "montre"],
  },
  {
    sage: true,
    cadeaux: ["café", "oreiller"],
  },
  {
    sage: false,
    cadeaux: ["pince", "agenda", "camion", "sac"],
  },
];

// Résultat attendu
// Il y a ? enfants pas sages. Le premier perd ? cadeaux, le deuxième ?, le troisième ?, le quatrième ?. ? cadeaux ne seront pas donné cette année.

//TIPS
//Utiliser la méthode .filter() sur le tableau
