/********************Trie par categorie homme*****************************/

let trie_categorie_homme = tableau_produits.filter((produit, categorie) => {
  categorie = "homme";
  return produit.categorie === categorie;
});

/********************Trie par categorie femme*****************************/

let trie_categorie_femme = tableau_produits.filter((produit, categorie) => {
  categorie = "femme";
  return produit.categorie === categorie;
});

/*************************Trie par prix croissant*************************/

let trie_categorie_prix_croissant = tableau_produits.sort(function compare(
  prix_indice_actuel,
  prix_indice_plus_un
) {
  if (prix_indice_actuel.prix < prix_indice_plus_un.prix) return -1;
  if (prix_indice_actuel.prix > prix_indice_plus_un.prix) return 1;
  return 0;
});
console.log(trie_categorie_prix_croissant);

/*************************Trie par prix decroissant*************************/

let trie_categorie_prix_decroissant = tableau_produits.sort(function compare(
  prix_indice_actuel,
  prix_indice_plus_un
) {
  if (prix_indice_actuel.prix > prix_indice_plus_un.prix) return -1;
  if (prix_indice_actuel.prix < prix_indice_plus_un.prix) return 1;
  return 0;
});
