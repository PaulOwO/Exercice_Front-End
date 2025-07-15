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

export const description1 = "Make assumptions about how many rounds you'll win and record your bet. \nPlace tokens on the search board as you play your hand, and link large groups of tokens to score even more points. Plan your turns carefully, because you can't claim the suit of a card whose number has already been declared. \nThat would be a disaster, as you've just created a paradox!";
export const description2 = "Dune: Imperium is a game that finds inspiration in elements and characters from the Dune legacy, both the new film from Legendary Pictures and the seminal literary series from Frank Herbert, Brian Herbert, and Kevin J. Anderson. \nAs a leader of one of the Great Houses of the Landsraad, raise your banner and marshal your forces and spies. War is coming, and at the center of the conflict is Arrakis – Dune, the desert planet. \nDune: Imperium uses deck-building to add a hidden-information angle to traditional worker placement.";
export const description3 = "Create a unique deck, discover powerful relics and defeat the Spire together! \nIn Slay the Spire: The Board Game, meet bizarre creatures, discover relics of immense power and finally become strong enough to slay the Spire! \nBased on the eponymous video game, Slay the Spire is a deckbuilding game where you can play alone or in a group to defeat your numerous enemies!";
export const description4 = "You must work together to survive, exploring exotic islands, meeting new characters, and searching for the totems of the gods so you can return home. \nSleeping Gods is a game that is played in campaign mode. \nEach session can last as long as you like. \nWhen you're ready to take a break, you mark your progress on a roadmap, which allows you to easily resume the game at the same point in the game the next time you play.";
export const description5 = "Love Letter is a game of risk, deduction, and luck. \nDesigned by Seiji Kanai, the game features incredibly simple rules that create dynamic and exciting player interactions. \nPlayers attempt to deliver their love letter into the Princess’s hands while keeping other players’ letters away. \nPowerful cards lead to early gains, but make you a target. \nRely on weaker cards for too long and your letter may be tossed in the fire!";

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





