/********************Tri par sexe homme*****************************/

let tri_categorie_homme = sanitizeProductsList.filter((produit, sexe) => {
  sexe = "homme";
  return produit.sexe === sexe;
});
/********************Tri par sexe femme*****************************/

let tri_categorie_femme = sanitizeProductsList.filter((produit, sexe) => {
  sexe = "femme";
  return produit.sexe === sexe;
});
/*************************Tri par prix croissant*************************/

let tri_categorie_prix_croissant = sanitizeProductsList.sort(function compare(
  prix_indice_actuel,
  prix_indice_plus_un
) {
  if (prix_indice_actuel.price < prix_indice_plus_un.price) return -1;
  if (prix_indice_actuel.price > prix_indice_plus_un.price) return 1;
  return 0;
});
/*************************Tri par prix decroissant*************************/

let tri_categorie_prix_decroissant = sanitizeProductsList.sort(function compare(
  prix_indice_actuel,
  prix_indice_plus_un
) {
  if (prix_indice_actuel.price > prix_indice_plus_un.price) return -1;
  if (prix_indice_actuel.price < prix_indice_plus_un.price) return 1;
  return 0;
});
/******************************Tri par marque******************************/

let tri_titre = sanitizeProductsList.sort(function compare(marque_indice_actuel, marque_indice_plus_un) {
  if (marque_indice_actuel.brand < marque_indice_plus_un.brand) return -1;
  if (marque_indice_actuel.brand > marque_indice_plus_un.brand) return 1;
  return 0;
});
