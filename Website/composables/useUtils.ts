export const useUtils = () => {
  const cartItems = ref<item[]>([]);
  const remove = (index: number) => cartItems.value.splice(index, 1);
  const add = (item: item) => {
    cartItems.value.push(item);
  }
  const getTotalPrice = () => {
    let TotalPrice = 0;
    for (let i = 0; i < cartItems.value.length; i++) {
      TotalPrice += cartItems.value[i].price;
    };
    return TotalPrice.toFixed(2);
  };

  return {
    cartItems,
    remove,
    add,
    getTotalPrice,
  }
}

export const description1 = "Faites des hypothèses sur le nombre de tours que vous allez remporter et enregistrez votre pari.\nPlacez des jetons sur le plateau de recherche au fur et à mesure que vous jouez votre main, et reliez de grands groupes de jetons pour marquer encore plus de points.\nPlanifiez vos tours avec soin, car vous ne pouvez pas revendiquer la couleur d'une carte dont le numéro a déjà été déclaré.\nCe serait une catastrophe, car vous venez de créer un paradoxe !";
export const description2 = "Dune : Imperium, le jeu adapté de l'oeuvre culte de Frank Herbert et du film de Denis Villeneuve ! \nArrakis. Dune. La Planète des Sables.\nHissez vos étendard par-dessus les vastes déserts qui s'étendent devant vous. \nAlors que les Grandes Maisons du Landstraad rassemblent leurs troupes et leurs espions, qui influencerez-vous, et qui trahirez-vous ? \nUn Empereur tyrannique. Les dissimulatrices du Bene Gesserit. L'habile Guilde Spatiale. Les féroces Fremen du Désert Profond. \nLa puissance de l'Imperium peut être vôtre, mais la guerre n'est pas le seul moyen. Dune: Imperium est un jeu qui puise son inspiration dans l’univers et les personnages de Dune, à la fois dans l’oeuvre littéraire de Frank Herbert, Brian Herbert, and Kevin J. Anderson dont il tire ses origines, mais également dans le prochain film de Legendary Pictures, réalisé par Denis Villeneuve.";
export const description3 = "Créez un deck unique, découvrez de puissantes reliques et terrassez le Spire ensemble ! \nDans Slay the Spire : Le jeu de plateau , rencontrez des créatures bizarres, découvrez des reliques d'un pouvoir immense et devenez enfin assez fort pour tuer le Spire ! \nRetrouvez les mécaniques du jeu de deckbuilding tiré du jeu vidéo éponyme. \nQue soit seul ou en groupe, venez à bout de vos nombreux ennemis !";
export const description4 = "Réveillez les dieux pour rentrer chez vous ! \n'Les étoiles sont-elles inconnues ici ?' demanda-t-elle, et le ciel s'assombrit soudain, les motifs des étoiles devenant étrangers et exotiques. 'C'est la mer vagabonde.' \nLes dieux t'ont amené ici, et tu dois les réveiller si tu veux rentrer chez toi.' \nVous devez travailler ensemble pour survivre, en explorant des îles exotiques, en rencontrant de nouveaux personnages et en recherchant les totems des dieux afin de pouvoir rentrer chez vous.";
export const description5 = "Gagnez la confiance de la Princesse en devenant son confident. \nLa Princesse est à la recherche d'un partenaire idéal et d'un confident pour l'aider dans ses fonctions royales lorsqu'elle accédera un jour au trône. \nVous devez prouver votre valeur et gagner sa confiance en enrôlant des alliés, des amis et la famille de la Princesse pour lui porter une lettre d'intention. ";

export class item {
  name: string;
  price: number;
  description: string;
  image: string;

  constructor(_name: string, _price: number, _description: string, _image: string) {
    this.name = _name;
    this.price = _price;
    this.description = _description;
    this.image = _image;
  }
}





