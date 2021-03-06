enum Type {
  Weapon = `weapon`,
  Armour = `armour`,
  AdventuringGear = `adventuring gear`,
  Tools = `tools`,
  Consumable = `consumable`,
}

enum Dietary {
  Veg = `veg`,
  Omni = `omni`,
  Carni = `carni`,
}

interface Inventory {
  name: string
  cost: number
  availabilityLocation: string[]
  availability: number
}

interface Item extends Inventory {
  type: Type
}

interface Food extends Inventory {
  dietary: Dietary
}

export const inventory: (Item | Food)[] = [
  {
    name: `Dagger`,
    cost: 200,
    availabilityLocation: [`smithy`, `generalStore`],
    availability: 1,
    type: Type.Weapon,
  },
  {
    name: `Handaxe`,
    cost: 500,
    availabilityLocation: [`smithy`, `generalStore`],
    availability: 1,
    type: Type.Weapon,
  },
  {
    name: `Javelin`,
    cost: 50,
    availabilityLocation: [`smithy`],
    availability: 2,
    type: Type.Weapon,
  },
  {
    name: `Light Hammer`,
    cost: 200,
    availabilityLocation: [`smithy`, `generalStore`],
    availability: 1,
    type: Type.Weapon,
  },
  {
    name: `Sickle`,
    cost: 100,
    availabilityLocation: [`smithy`, `generalStore`],
    availability: 1,
    type: Type.Weapon,
  },
  {
    name: `Spear`,
    cost: 100,
    availabilityLocation: [`smithy`, `generalStore`],
    availability: 1,
    type: Type.Weapon,
  },
  {
    name: `Battleaxe`,
    cost: 1000,
    availabilityLocation: [`smithy`],
    availability: 2,
    type: Type.Weapon,
  },
  {
    name: `Flail`,
    cost: 1000,
    availabilityLocation: [`smithy`],
    availability: 2,
    type: Type.Weapon,
  },
  {
    name: `Glaive`,
    cost: 2000,
    availabilityLocation: [`smithy`],
    availability: 3,
    type: Type.Weapon,
  },
  {
    name: `Greataxe`,
    cost: 3000,
    availabilityLocation: [`smithy`],
    availability: 3,
    type: Type.Weapon,
  },
  {
    name: `Greatsword`,
    cost: 5000,
    availabilityLocation: [`smithy`],
    availability: 4,
    type: Type.Weapon,
  },
  {
    name: `Halberd`,
    cost: 2000,
    availabilityLocation: [`smithy`],
    availability: 4,
    type: Type.Weapon,
  },
  {
    name: `Lance`,
    cost: 1000,
    availabilityLocation: [`smithy`],
    availability: 4,
    type: Type.Weapon,
  },
  {
    name: `Longsword`,
    cost: 1500,
    availabilityLocation: [`smithy`],
    availability: 2,
    type: Type.Weapon,
  },
  {
    name: `Maul`,
    cost: 1000,
    availabilityLocation: [`smithy`],
    availability: 2,
    type: Type.Weapon,
  },
  {
    name: `Morningstar`,
    cost: 1500,
    availabilityLocation: [`smithy`],
    availability: 2,
    type: Type.Weapon,
  },
  {
    name: `Pike`,
    cost: 500,
    availabilityLocation: [`smithy`],
    availability: 1,
    type: Type.Weapon,
  },
  {
    name: `Rapier`,
    cost: 2500,
    availabilityLocation: [`smithy`],
    availability: 3,
    type: Type.Weapon,
  },
  {
    name: `Scimitar`,
    cost: 2500,
    availabilityLocation: [`smithy`],
    availability: 2,
    type: Type.Weapon,
  },
  {
    name: `Shortsword`,
    cost: 1000,
    availabilityLocation: [`smithy`],
    availability: 1,
    type: Type.Weapon,
  },
  {
    name: `Arrows (20)`,
    cost: 100,
    availabilityLocation: [`smithy`],
    availability: 1,
    type: Type.Weapon,
  },
  {
    name: `Crossbow Bolts (20)`,
    cost: 100,
    availabilityLocation: [`smithy`],
    availability: 2,
    type: Type.Weapon,
  },
  {
    name: `Padded Armour`,
    cost: 500,
    availabilityLocation: [`generalStore`],
    availability: 2,
    type: Type.Armour,
  },
  {
    name: `Hide Armour`,
    cost: 500,
    availabilityLocation: [`generalStore`],
    availability: 1,
    type: Type.Armour,
  },
  {
    name: `Leather Armor`,
    cost: 2000,
    availabilityLocation: [`generalStore`],
    availability: 2,
    type: Type.Armour,
  },
  {
    name: `Studded Leather Armor`,
    cost: 4500,
    availabilityLocation: [`smithy`, `generalStore`],
    availability: 3,
    type: Type.Armour,
  },
  {
    name: `Chain Shirt`,
    cost: 5000,
    availabilityLocation: [`smithy`],
    availability: 1,
    type: Type.Armour,
  },
  {
    name: `Scale Mail`,
    cost: 5000,
    availabilityLocation: [`smithy`],
    availability: 1,
    type: Type.Armour,
  },
  {
    name: `Breastplate`,
    cost: 40000,
    availabilityLocation: [`smithy`],
    availability: 2,
    type: Type.Armour,
  },
  {
    name: `Half Plate`,
    cost: 75000,
    availabilityLocation: [`smithy`],
    availability: 4,
    type: Type.Armour,
  },
  {
    name: `Ring Mail`,
    cost: 3000,
    availabilityLocation: [`smithy`],
    availability: 2,
    type: Type.Armour,
  },
  {
    name: `Chain Mail`,
    cost: 7500,
    availabilityLocation: [`smithy`],
    availability: 2,
    type: Type.Armour,
  },
  {
    name: `Splint`,
    cost: 20000,
    availabilityLocation: [`smithy`],
    availability: 3,
    type: Type.Armour,
  },
  {
    name: `Plate`,
    cost: 150000,
    availabilityLocation: [`smithy`],
    availability: 4,
    type: Type.Armour,
  },
  {
    name: `Shield`,
    cost: 1000,
    availabilityLocation: [`smithy`],
    availability: 1,
    type: Type.Armour,
  },
  {
    name: `Ball Bearings (1000)`,
    cost: 100,
    availabilityLocation: [`smithy`],
    availability: 2,
    type: Type.AdventuringGear,
  },
  {
    name: `Bell`,
    cost: 100,
    availabilityLocation: [`smithy`, `temple`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Block and Tackle`,
    cost: 100,
    availabilityLocation: [`smithy`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Chain (10 feet)`,
    cost: 500,
    availabilityLocation: [`smithy`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Caltrops (Bag of 20)`,
    cost: 100,
    availabilityLocation: [`smithy`],
    availability: 2,
    type: Type.AdventuringGear,
  },
  {
    name: `Crowbar`,
    cost: 200,
    availabilityLocation: [`smithy`, `generalStore`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Grappling Hook`,
    cost: 200,
    availabilityLocation: [`smithy`, `generalStore`],
    availability: 3,
    type: Type.AdventuringGear,
  },
  {
    name: `Hammer`,
    cost: 100,
    availabilityLocation: [`smithy`, `generalStore`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Sledge Hammer`,
    cost: 200,
    availabilityLocation: [`smithy`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Hunting Trap`,
    cost: 500,
    availabilityLocation: [`smithy`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Lamp`,
    cost: 50,
    availabilityLocation: [`smithy`, `temple`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Lantern, Bullseye`,
    cost: 1000,
    availabilityLocation: [`smithy`, `generalStore`],
    availability: 4,
    type: Type.AdventuringGear,
  },
  {
    name: `Lantern, Hooded`,
    cost: 500,
    availabilityLocation: [`smithy`, `temple`],
    availability: 3,
    type: Type.AdventuringGear,
  },
  {
    name: `Lock`,
    cost: 1000,
    availabilityLocation: [`smithy`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Manacles`,
    cost: 200,
    availabilityLocation: [`smithy`, `generalStore`],
    availability: 2,
    type: Type.AdventuringGear,
  },
  {
    name: `Mirror, Steel`,
    cost: 500,
    availabilityLocation: [`smithy`],
    availability: 2,
    type: Type.AdventuringGear,
  },
  {
    name: `Pick, Miner's`,
    cost: 200,
    availabilityLocation: [`smithy`, `generalStore`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Piton`,
    cost: 5,
    availabilityLocation: [`smithy`, `generalStore`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Pot, Iron`,
    cost: 200,
    availabilityLocation: [`smithy`, `generalStore`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Ram, Portable`,
    cost: 400,
    availabilityLocation: [`smithy`],
    availability: 4,
    type: Type.AdventuringGear,
  },
  {
    name: `Spikes, Iron (10)`,
    cost: 100,
    availabilityLocation: [`smithy`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Mason's Tools`,
    cost: 1000,
    availabilityLocation: [`smithy`, `generalStore`],
    availability: 2,
    type: Type.Tools,
  },
  {
    name: `Smith's Tools`,
    cost: 2000,
    availabilityLocation: [`smithy`],
    availability: 1,
    type: Type.Tools,
  },
  {
    name: `Tinker's Tools`,
    cost: 5000,
    availabilityLocation: [`smithy`, `generalStore`],
    availability: 3,
    type: Type.Tools,
  },
  {
    name: `Horn`,
    cost: 300,
    availabilityLocation: [`smithy`],
    availability: 4,
    type: Type.Tools,
  },
  {
    name: `Club`,
    cost: 10,
    availabilityLocation: [`generalStore`],
    availability: 1,
    type: Type.Weapon,
  },
  {
    name: `Dagger`,
    cost: 200,
    availabilityLocation: [`generalStore`, `smithy`],
    availability: 1,
    type: Type.Weapon,
  },
  {
    name: `Greatclub`,
    cost: 20,
    availabilityLocation: [`generalStore`],
    availability: 1,
    type: Type.Weapon,
  },
  {
    name: `Handaxe`,
    cost: 500,
    availabilityLocation: [`generalStore`, `smithy`],
    availability: 1,
    type: Type.Weapon,
  },
  {
    name: `Light Hammer`,
    cost: 200,
    availabilityLocation: [`generalStore`, `smithy`],
    availability: 1,
    type: Type.Weapon,
  },
  {
    name: `Quarterstaff`,
    cost: 20,
    availabilityLocation: [`generalStore`],
    availability: 1,
    type: Type.Weapon,
  },
  {
    name: `Light Crossbow`,
    cost: 2500,
    availabilityLocation: [`generalStore`],
    availability: 2,
    type: Type.Weapon,
  },
  {
    name: `Dart`,
    cost: 5,
    availabilityLocation: [`generalStore`],
    availability: 1,
    type: Type.Weapon,
  },
  {
    name: `Shortbow`,
    cost: 2500,
    availabilityLocation: [`generalStore`],
    availability: 1,
    type: Type.Weapon,
  },
  {
    name: `Sling`,
    cost: 10,
    availabilityLocation: [`generalStore`],
    availability: 1,
    type: Type.Weapon,
  },
  {
    name: `Whip`,
    cost: 200,
    availabilityLocation: [`generalStore`],
    availability: 1,
    type: Type.Weapon,
  },
  {
    name: `Hand Crossbow`,
    cost: 7500,
    availabilityLocation: [`generalStore`],
    availability: 3,
    type: Type.Weapon,
  },
  {
    name: `Heavy Crossbow`,
    cost: 5000,
    availabilityLocation: [`generalStore`],
    availability: 4,
    type: Type.Weapon,
  },
  {
    name: `Longbow`,
    cost: 5000,
    availabilityLocation: [`generalStore`],
    availability: 1,
    type: Type.Weapon,
  },
  {
    name: `Backpack`,
    cost: 200,
    availabilityLocation: [`generalStore`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Bedroll`,
    cost: 100,
    availabilityLocation: [`generalStore`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Blanket`,
    cost: 50,
    availabilityLocation: [`generalStore`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Block and Tackle`,
    cost: 100,
    availabilityLocation: [`generalStore`, `smithy`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Book`,
    cost: 2500,
    availabilityLocation: [`generalStore`, `temple`],
    availability: 2,
    type: Type.AdventuringGear,
  },
  {
    name: `Bottle, Glass`,
    cost: 200,
    availabilityLocation: [`generalStore`, `alchemist`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Bucket`,
    cost: 5,
    availabilityLocation: [`generalStore`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Candle`,
    cost: 1,
    availabilityLocation: [`generalStore`, `temple`],
    availability: 2,
    type: Type.AdventuringGear,
  },
  {
    name: `Case, Crossbow Bolt`,
    cost: 500,
    availabilityLocation: [`generalStore`],
    availability: 2,
    type: Type.AdventuringGear,
  },
  {
    name: `Case, Map or Scroll`,
    cost: 100,
    availabilityLocation: [`generalStore`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Chain, 10 feet`,
    cost: 500,
    availabilityLocation: [`generalStore`, `smithy`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Chest`,
    cost: 500,
    availabilityLocation: [`generalStore`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Climbers Kit`,
    cost: 2500,
    availabilityLocation: [`generalStore`],
    availability: 2,
    type: Type.AdventuringGear,
  },
  {
    name: `Clothes, Traveler's`,
    cost: 200,
    availabilityLocation: [`generalStore`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Component Pouch`,
    cost: 2500,
    availabilityLocation: [`generalStore`, `alchemist`],
    availability: 2,
    type: Type.AdventuringGear,
  },
  {
    name: `Fishing Tackle`,
    cost: 100,
    availabilityLocation: [`generalStore`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Flask or tankard`,
    cost: 2,
    availabilityLocation: [`generalStore`, `alchemist`, `temple`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Hourglass`,
    cost: 2500,
    availabilityLocation: [`generalStore`],
    availability: 3,
    type: Type.AdventuringGear,
  },
  {
    name: `Hunting Trap`,
    cost: 500,
    availabilityLocation: [`generalStore`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Ink (1 ounce)`,
    cost: 1000,
    availabilityLocation: [`generalStore`, `alchemist`, `temple`],
    availability: 3,
    type: Type.AdventuringGear,
  },
  {
    name: `Ink Pen`,
    cost: 2,
    availabilityLocation: [`generalStore`, `temple`],
    availability: 3,
    type: Type.AdventuringGear,
  },
  {
    name: `Ladder, 10ft.`,
    cost: 10,
    availabilityLocation: [`generalStore`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Lantern, Bullseye`,
    cost: 1000,
    availabilityLocation: [`generalStore`, `smithy`],
    availability: 3,
    type: Type.AdventuringGear,
  },
  {
    name: `Lantern, Hooded`,
    cost: 500,
    availabilityLocation: [`generalStore`, `smithy`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Magnifying Glass`,
    cost: 10000,
    availabilityLocation: [`generalStore`],
    availability: 3,
    type: Type.AdventuringGear,
  },
  { name: `Mess Kit`, cost: 20, availabilityLocation: [`generalStore`], availability: 3, type: Type.AdventuringGear },
  {
    name: `Steel Mirror`,
    cost: 500,
    availabilityLocation: [`generalStore`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Oil, flask`,
    cost: 10,
    availabilityLocation: [`generalStore`, `alchemist`, `temple`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Paper (one sheet)`,
    cost: 20,
    availabilityLocation: [`generalStore`, `temple`],
    availability: 4,
    type: Type.AdventuringGear,
  },
  {
    name: `Parchment (one sheet)`,
    cost: 10,
    availabilityLocation: [`generalStore`, `temple`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Pole (10 ft.)`,
    cost: 5,
    availabilityLocation: [`generalStore`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Pouch`,
    cost: 50,
    availabilityLocation: [`generalStore`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Quiver`,
    cost: 500,
    availabilityLocation: [`generalStore`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Rope, Hemp (50ft)`,
    cost: 100,
    availabilityLocation: [`generalStore`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Rope, Silk (50ft)`,
    cost: 1000,
    availabilityLocation: [`generalStore`],
    availability: 4,
    type: Type.AdventuringGear,
  },
  {
    name: `Sack`,
    cost: 1,
    availabilityLocation: [`generalStore`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Shovel`,
    cost: 200,
    availabilityLocation: [`generalStore`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Signal whistle`,
    cost: 5,
    availabilityLocation: [`generalStore`],
    availability: 3,
    type: Type.AdventuringGear,
  },
  {
    name: `Spikes, Iron (10)`,
    cost: 100,
    availabilityLocation: [`generalStore`, `smithy`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Spyglass`,
    cost: 100000,
    availabilityLocation: [`generalStore`],
    availability: 4,
    type: Type.AdventuringGear,
  },
  {
    name: `Two person tent`,
    cost: 200,
    availabilityLocation: [`generalStore`],
    availability: 2,
    type: Type.AdventuringGear,
  },
  {
    name: `Tinderbox`,
    cost: 50,
    availabilityLocation: [`generalStore`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Torch`,
    cost: 1,
    availabilityLocation: [`generalStore`, `temple`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Vial`,
    cost: 100,
    availabilityLocation: [`generalStore`, `alchemist`, `temple`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Waterskin`,
    cost: 20,
    availabilityLocation: [`generalStore`, `temple`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Cartographer's Tools`,
    cost: 1500,
    availabilityLocation: [`generalStore`],
    availability: 2,
    type: Type.Tools,
  },
  {
    name: `Calligrapher's Tools`,
    cost: 1000,
    availabilityLocation: [`temple`],
    availability: 2,
    type: Type.Tools,
  },
  {
    name: `Herbalism Kit`,
    cost: 500,
    availabilityLocation: [`generalStore`, `temple`],
    availability: 2,
    type: Type.Tools,
  },
  {
    name: `Healer's Kit`,
    cost: 500,
    availabilityLocation: [`generalStore`, `alchemist`, `temple`],
    availability: 2,
    type: Type.Tools,
  },
  {
    name: `Navigator's Tools`,
    cost: 2500,
    availabilityLocation: [`generalStore`],
    availability: 1,
    type: Type.Tools,
  },
  {
    name: `Painter's Supplies`,
    cost: 1000,
    availabilityLocation: [`generalStore`],
    availability: 3,
    type: Type.Tools,
  },
  {
    name: `Potter's Tools`,
    cost: 1000,
    availabilityLocation: [`generalStore`],
    availability: 1,
    type: Type.Tools,
  },
  {
    name: `Dice Set`,
    cost: 10,
    availabilityLocation: [`generalStore`],
    availability: 1,
    type: Type.Tools,
  },
  {
    name: `Playing Card Set`,
    cost: 50,
    availabilityLocation: [`generalStore`],
    availability: 1,
    type: Type.Tools,
  },
  {
    name: `Flute`,
    cost: 200,
    availabilityLocation: [`temple`],
    availability: 3,
    type: Type.Tools,
  },
  {
    name: `Lyre`,
    cost: 3000,
    availabilityLocation: [`temple`],
    availability: 3,
    type: Type.Tools,
  },
  {
    name: `Horn`,
    cost: 300,
    availabilityLocation: [`temple`],
    availability: 3,
    type: Type.Tools,
  },
  {
    name: `Poison, Basic`,
    cost: 10000,
    availabilityLocation: [`alchemist`],
    availability: 1,
    type: Type.Consumable,
  },
  {
    name: `Potion, Common`,
    cost: 50000,
    availabilityLocation: [`alchemist`],
    availability: 1,
    type: Type.Consumable,
  },
  {
    name: `Potion, Uncommon`,
    cost: 250000,
    availabilityLocation: [`alchemist`],
    availability: 1,
    type: Type.Consumable,
  },
  {
    name: `Potion, Rare`,
    cost: 2500000,
    availabilityLocation: [`alchemist`],
    availability: 3,
    type: Type.Consumable,
  },
  {
    name: `Potion of Healing`,
    cost: 5000,
    availabilityLocation: [`alchemist`, `temple`],
    availability: 1,
    type: Type.Consumable,
  },
  {
    name: `Potion of Poison`,
    cost: 10000,
    availabilityLocation: [`alchemist`],
    availability: 2,
    type: Type.Consumable,
  },
  {
    name: `Potion of Health`,
    cost: 12000,
    availabilityLocation: [`alchemist`],
    availability: 4,
    type: Type.Consumable,
  },
  {
    name: `Potion of Fire Breath`,
    cost: 150000,
    availabilityLocation: [`alchemist`],
    availability: 3,
    type: Type.Consumable,
  },
  {
    name: `Potion of Greater Healing`,
    cost: 15000,
    availabilityLocation: [`alchemist`],
    availability: 2,
    type: Type.Consumable,
  },
  {
    name: `Potion of Climbing`,
    cost: 18000,
    availabilityLocation: [`alchemist`],
    availability: 1,
    type: Type.Consumable,
  },
  {
    name: `Potion of Heroism`,
    cost: 18000,
    availabilityLocation: [`alchemist`],
    availability: 4,
    type: Type.Consumable,
  },
  {
    name: `Potion of Invisibility`,
    cost: 18000,
    availabilityLocation: [`alchemist`],
    availability: 4,
    type: Type.Consumable,
  },
  {
    name: `Potion of Mind Reading`,
    cost: 18000,
    availabilityLocation: [`alchemist`],
    availability: 4,
    type: Type.Consumable,
  },
  {
    name: `Potion of Water Breathing`,
    cost: 18000,
    availabilityLocation: [`alchemist`],
    availability: 2,
    type: Type.Consumable,
  },
  {
    name: `Potion of Animal Friendship`,
    cost: 20000,
    availabilityLocation: [`alchemist`],
    availability: 3,
    type: Type.Consumable,
  },
  {
    name: `Potion of Diminution`,
    cost: 27000,
    availability: 4,
    availabilityLocation: [`alchemist`],
    type: Type.Consumable,
  },
  {
    name: `Potion of Growth`,
    cost: 27000,
    availability: 3,
    availabilityLocation: [`alchemist`],
    type: Type.Consumable,
  },
  {
    name: `Potion of Gaseous Form`,
    cost: 30000,
    availability: 4,
    availabilityLocation: [`alchemist`],
    type: Type.Consumable,
  },
  {
    name: `Potion of Resistance`,
    cost: 30000,
    availability: 3,
    availabilityLocation: [`alchemist`],
    type: Type.Consumable,
  },
  {
    name: `Potion of Speed`,
    cost: 40000,
    availability: 4,
    availabilityLocation: [`alchemist`],
    type: Type.Consumable,
  },
  {
    name: `Potion of Superior Healing`,
    cost: 45000,
    availability: 3,
    availabilityLocation: [`alchemist`],
    type: Type.Consumable,
  },
  {
    name: `Potion of Flying`,
    cost: 50000,
    availability: 4,
    availabilityLocation: [`alchemist`],
    type: Type.Consumable,
  },
  {
    name: `Potion of Clairvoyance`,
    cost: 96000,
    availability: 4,
    availabilityLocation: [`alchemist`],
    type: Type.Consumable,
  },
  {
    name: `Potion of Vitality`,
    cost: 96000,
    availability: 4,
    availabilityLocation: [`alchemist`],
    type: Type.Consumable,
  },
  {
    name: `Potion of Supreme Healing`,
    cost: 135000,
    availability: 4,
    availabilityLocation: [`alchemist`],
    type: Type.Consumable,
  },
  {
    name: `Potion of Invulnerability`,
    cost: 384000,
    availability: 4,
    availabilityLocation: [`alchemist`],
    type: Type.Consumable,
  },
  {
    name: `Potion of Diminution`,
    cost: 27000,
    availabilityLocation: [`alchemist`],
    availability: 4,
    type: Type.Consumable,
  },
  {
    name: `Potion of Growth`,
    cost: 27000,
    availabilityLocation: [`alchemist`],
    availability: 3,
    type: Type.Consumable,
  },
  {
    name: `Potion of Gaseous Form`,
    cost: 30000,
    availabilityLocation: [`alchemist`],
    availability: 4,
    type: Type.Consumable,
  },
  {
    name: `Potion of Resistance`,
    cost: 30000,
    availabilityLocation: [`alchemist`],
    availability: 3,
    type: Type.Consumable,
  },
  {
    name: `Potion of Speed`,
    cost: 40000,
    availabilityLocation: [`alchemist`],
    availability: 4,
    type: Type.Consumable,
  },
  {
    name: `Potion of Superior Healing`,
    cost: 45000,
    availabilityLocation: [`alchemist`],
    availability: 3,
    type: Type.Consumable,
  },
  {
    name: `Potion of Flying`,
    cost: 50000,
    availabilityLocation: [`alchemist`],
    availability: 4,
    type: Type.Consumable,
  },
  {
    name: `Potion of Clairvoyance`,
    cost: 96000,
    availabilityLocation: [`alchemist`],
    availability: 4,
    type: Type.Consumable,
  },
  {
    name: `Potion of Vitality`,
    cost: 96000,
    availabilityLocation: [`alchemist`],
    availability: 4,
    type: Type.Consumable,
  },
  {
    name: `Potion of Supreme Healing`,
    cost: 135000,
    availabilityLocation: [`alchemist`],
    availability: 4,
    type: Type.Consumable,
  },
  {
    name: `Potion of Invulnerability`,
    cost: 384000,
    availabilityLocation: [`alchemist`],
    availability: 4,
    type: Type.Consumable,
  },
  {
    name: `Jug`,
    cost: 2,
    availabilityLocation: [`alchemist`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Anti-toxin (vial)`,
    cost: 5000,
    availabilityLocation: [`alchemist`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Brewer's Supplies`,
    cost: 2000,
    availabilityLocation: [`alchemist`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Acid`,
    cost: 2500,
    availabilityLocation: [`alchemist`],
    availability: 2,
    type: Type.AdventuringGear,
  },
  {
    name: `Poisoner's Kit`,
    cost: 50000,
    availabilityLocation: [`alchemist`],
    availability: 2,
    type: Type.Tools,
  },
  {
    name: `Alchemist's Supplies`,
    cost: 50000,
    availabilityLocation: [`alchemist`],
    availability: 2,
    type: Type.Tools,
  },
  {
    name: `Cook's Utensils`,
    cost: 20,
    availabilityLocation: [`alchemist`],
    availability: 3,
    type: Type.Tools,
  },
  {
    name: `Alchemist's Fire (flask)`,
    cost: 5000,
    availabilityLocation: [`alchemist`],
    availability: 3,
    type: Type.AdventuringGear,
  },
  {
    name: `Perfume (vial)`,
    cost: 500,
    availabilityLocation: [`alchemist`, `temple`],
    availability: 4,
    type: Type.AdventuringGear,
  },
  {
    name: `Alm's box`,
    cost: 500,
    availabilityLocation: [`temple`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Scripture Book`,
    cost: 2500,
    availabilityLocation: [`temple`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Censer`,
    cost: 500,
    availabilityLocation: [`temple`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Chalk (one piece)`,
    cost: 1,
    availabilityLocation: [`temple`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Holy symbol`,
    cost: 500,
    availabilityLocation: [`temple`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Flask of Holy Water`,
    cost: 2500,
    availabilityLocation: [`temple`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Incense (1 block)`,
    cost: 1,
    availabilityLocation: [`temple`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Scripture Book`,
    cost: 2500,
    availabilityLocation: [`temple`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Rations (1 day)`,
    cost: 50,
    availabilityLocation: [`temple`],
    availability: 1,
    type: Type.AdventuringGear,
  },
  {
    name: `Crisped Worm and Potatoes`,
    cost: 3,
    availabilityLocation: [`tavern`],
    availability: 1,
    dietary: Dietary.Omni,
  },
  {
    name: `Frogs on Skewers`,
    cost: 4,
    availabilityLocation: [`tavern`],
    availability: 1,
    dietary: Dietary.Carni,
  },
  {
    name: `Green Chili Stew`,
    cost: 3,
    availabilityLocation: [`tavern`],
    availability: 1,
    dietary: Dietary.Veg,
  },
  {
    name: `Grilled Snake and Macadamia`,
    cost: 3,
    availabilityLocation: [`tavern`],
    availability: 1,
    dietary: Dietary.Carni,
  },
  {
    name: `Humble Pie (tripe or cow heel)`,
    cost: 2,
    availabilityLocation: [`tavern`],
    availability: 1,
    dietary: Dietary.Veg,
  },
  {
    name: `Lizard Gruel with Nutbread`,
    cost: 3,
    availabilityLocation: [`tavern`],
    availability: 1,
    dietary: Dietary.Carni,
  },
  {
    name: `Plain porridge`,
    cost: 2,
    availabilityLocation: [`tavern`],
    availability: 1,
    dietary: Dietary.Veg,
  },
  {
    name: `Spiced porridge`,
    cost: 3,
    availabilityLocation: [`tavern`],
    availability: 1,
    dietary: Dietary.Veg,
  },
  {
    name: `Pot of cured meats`,
    cost: 4,
    availabilityLocation: [`tavern`],
    availability: 1,
    dietary: Dietary.Carni,
  },
  {
    name: `Bacon and Eggs`,
    cost: 6,
    availabilityLocation: [`tavern`],
    availability: 1,
    dietary: Dietary.Carni,
  },
  {
    name: `Bread and cheese`,
    cost: 3,
    availabilityLocation: [`tavern`],
    availability: 1,
    dietary: Dietary.Veg,
  },
  {
    name: `Vegetable Stew`,
    cost: 4,
    availabilityLocation: [`tavern`],
    availability: 1,
    dietary: Dietary.Veg,
  },
  {
    name: `Eggs on toast`,
    cost: 5,
    availabilityLocation: [`tavern`],
    availability: 1,
    dietary: Dietary.Veg,
  },
  {
    name: `Honeybread`,
    cost: 3,
    availabilityLocation: [`tavern`],
    availability: 1,
    dietary: Dietary.Veg,
  },
  {
    name: `Greenspear`,
    cost: 3,
    availabilityLocation: [`tavern`],
    availability: 1,
    dietary: Dietary.Veg,
  },
  {
    name: `Baked potatoes`,
    cost: 3,
    availabilityLocation: [`tavern`],
    availability: 1,
    dietary: Dietary.Veg,
  },
  {
    name: `Catch of the Day fish, served with lemon`,
    availabilityLocation: [`tavern`],
    cost: 11,
    availability: 2,
    dietary: Dietary.Carni,
  },
  {
    name: `Barbecued Gopher Legs`,
    cost: 6,
    availabilityLocation: [`tavern`],
    availability: 1,
    dietary: Dietary.Carni,
  },
  {
    name: `Bog-Beetle Dumplings`,
    cost: 4,
    availabilityLocation: [`tavern`],
    availability: 1,
    dietary: Dietary.Carni,
  },
  {
    name: `Bread-bowl stew`,
    cost: 5,
    availabilityLocation: [`tavern`],
    availability: 2,
    dietary: Dietary.Veg,
  },
  {
    name: `Leg of Mutton and eggs`,
    cost: 6,
    availabilityLocation: [`tavern`],
    availability: 2,
    dietary: Dietary.Carni,
  },
  {
    name: `Mushroom Stew with Bread`,
    cost: 5,
    availabilityLocation: [`tavern`],
    availability: 2,
    dietary: Dietary.Veg,
  },
  {
    name: `Rabbit and Baked Pumpkin`,
    cost: 6,
    availabilityLocation: [`tavern`],
    availability: 2,
    dietary: Dietary.Omni,
  },
  {
    name: `Roseapple pie`,
    cost: 3,
    availabilityLocation: [`tavern`],
    availability: 1,
    dietary: Dietary.Veg,
  },
  {
    name: `Squash and Fish Soup`,
    cost: 8,
    availabilityLocation: [`tavern`],
    availability: 2,
    dietary: Dietary.Omni,
  },
  {
    name: `Broiled Salmon and Potatoes`,
    cost: 30,
    availabilityLocation: [`tavern`],
    availability: 2,
    dietary: Dietary.Omni,
  },
  {
    name: `Cheese Pie and Onion Soup`,
    cost: 25,
    availabilityLocation: [`tavern`],
    availability: 2,
    dietary: Dietary.Veg,
  },
  {
    name: `Grilled Wild Boar Chops`,
    cost: 35,
    availabilityLocation: [`tavern`],
    availability: 2,
    dietary: Dietary.Carni,
  },
  {
    name: `Baked Loin of Pork with Gravy`,
    cost: 56,
    availabilityLocation: [`tavern`],
    availability: 3,
    dietary: Dietary.Carni,
  },
  {
    name: `Beef Steak and Kidney Pie`,
    cost: 78,
    availabilityLocation: [`tavern`],
    availability: 3,
    dietary: Dietary.Carni,
  },
  {
    name: `Pecan Pie`,
    cost: 35,
    availabilityLocation: [`tavern`],
    availability: 3,
    dietary: Dietary.Veg,
  },
  {
    name: `Buffaloaf and Honeyed Corn`,
    cost: 70,
    availabilityLocation: [`tavern`],
    availability: 3,
    dietary: Dietary.Carni,
  },
  {
    name: `Elven Bread`,
    cost: 60,
    availabilityLocation: [`tavern`],
    availability: 3,
    dietary: Dietary.Veg,
  },
  {
    name: `Honey Braised Boar Ribs`,
    cost: 85,
    availabilityLocation: [`tavern`],
    availability: 3,
    dietary: Dietary.Carni,
  },
  {
    name: `Pork Chop and Curds`,
    cost: 92,
    availabilityLocation: [`tavern`],
    availability: 3,
    dietary: Dietary.Carni,
  },
  {
    name: `Rack of Lamb Platter`,
    cost: 95,
    availabilityLocation: [`tavern`],
    availability: 3,
    dietary: Dietary.Carni,
  },
  {
    name: `Barbecued Tiger Fish and Papaya`,
    cost: 200,
    availabilityLocation: [`tavern`],
    availability: 4,
    dietary: Dietary.Omni,
  },
]
