import { Town } from "../town/town"
import { randomValue } from "../rolls"

export interface Shrine {
  readonly god: string
  readonly material: string
  readonly senses: string
}

export interface Relic {
  readonly god: string
  readonly noun: string
  readonly adjective: string
}

export const religion = {
  shrine: {
    create(town: Town, base?: Partial<Shrine>): Shrine {
      const sensesArray = randomValue(Object.keys(this.senses))
      return {
        god: randomValue([
          randomValue(religion.namedGod),
          randomValue(religion.abstractGod),
          randomValue(religion.saint),
        ]),
        material: randomValue(this.material),
        senses: this.senses[sensesArray](town),
        ...base,
      }
    },
    readout(shrine: Shrine) {
      return `You come across a shrine dedicated to ${shrine.god}. The shrine is ${shrine.material} ${shrine.senses}`
    },
    // the shrine is _______.
    material: [
      `sculpted marble.`,
      `chiseled oak.`,
      `an old tree stump that has been carved into shape.`,
      `a huge statue made out of a common rock.`,
      `a respectable statue, inlaid with some semi-precious gems.`,
      `a rock pool with a simple altar.`,
      `a tiny structure, with an incense holder and dais sheltered by the roof.`,
      `some planks that are painted.`,
      `a boulder that has been chiseled into shape.`,
      `an artistic arrangement of rocks, logs, and natural materials.`,
      `little more than a lectern with some religious symbols carved into it.`,
      `made out of pottery.`,
      `clay, moulded and coaxed into shape.`,
      `some sort of rock, although it is now covered in a thick moss.`,
      `some type of clay that is visibly wet.`,
      `little more than a couple rocks symbolically arranged.`,
      `a natural geode that has been carved into shape. The hollow inside shines brilliant colours.`,
    ],
    senses: {
      "incense"() {
        return `You can smell the soft scent of incense having been burnt here.`
      },
      "wood chimes"() {
        return `The soft clattering of some wooden chimes can be heard in the distance.`
      },
      "candle"() {
        return `There's a melted candle on top of the shrine.`
      },
      "wax"() {
        return `There's some blobs of melted wax on the shrine.`
      },
      "pen"() {
        return `An ink pen has been left on top of the shrine, and there are some ink stains splashed on the ground.`
      },
      "bread"() {
        return `A slice of bread is on the ground, slightly trodden on and thoroughly stale.`
      },
      "dead bird"() {
        return `You can smell something rotten. Peering around the shrine, you see the corpse of a bird decomposing. Nearby, there is another, with flies buzzing around it.`
      },
      "cat"() {
        return `You hear a soft meow, and see that there's a cat sitting near the shrine, watching you.`
      },
      "hissing cat"() {
        return `You hear a hissing sound, and see that there's a cat sitting near the shrine, almost guarding it.`
      },
      "bedding"() {
        return `You can see some bedding on the ground near the shrine. It's pretty obvious that the owner left in a hurry.`
      },
      "bedding with npc"(town: Town) {
        return `You can see some bedding on the ground near the shrine. The owner is out hunting.`
      },
    },
  },
  relic: {
    create(base?: Partial<Relic>): Relic {
      return {
        god: randomValue([
          randomValue(religion.namedGod),
          randomValue(religion.abstractGod),
          randomValue(religion.saint),
        ]),
        noun: randomValue(religion.noun),
        adjective: randomValue([randomValue(religion.holy), randomValue(religion.unholy)]),
        ...base,
      }
    },
    readout(relic: Relic) {
      return `The ${relic.adjective} ${relic.noun} of ${relic.god}.`
    },
  },
  holy: [
    `Airborn`,
    `Almighty`,
    `Ancient`,
    `Ascendant`,
    `Blessed`,
    `Blue`,
    `Bronze`,
    `Burning`,
    `Ceaseless`,
    `Celestial`,
    `Charming`,
    `Colossal`,
    `Consecarted`,
    `Crystal`,
    `Curing`,
    `Diamond`,
    `Emerald`,
    `Eminent`,
    `Eternal`,
    `Ethereal`,
    `Everlasting`,
    `Fabled`,
    `Famous`,
    `Feathered`,
    `Flaming`,
    `Floating`,
    `Flying`,
    `Forceful`,
    `Gentle`,
    `Ghostly`,
    `Glass`,
    `Glorious`,
    `Glowing`,
    `Golden`,
    `Granite`,
    `Green`,
    `Grey`,
    `Healing`,
    `Heavenly`,
    `Holiest`,
    `Holy`,
    `Illuminated`,
    `Inexorable`,
    `Invincible`,
    `Just`,
    `Learned`,
    `Legendary`,
    `Life`,
    `Lighted`,
    `Lightning`,
    `Lofty`,
    `Long Lost`,
    `Lost`,
    `Lucky`,
    `Medicinal`,
    `Mighty`,
    `Moonstone`,
    `Oaken`,
    `Peaceful`,
    `Pious`,
    `Platinum`,
    `Praising`,
    `Pristine`,
    `Radiant`,
    `Red`,
    `Reflecting`,
    `Regenerating`,
    `Restoring`,
    `Righteous`,
    `Sacred`,
    `Sanctified`,
    `Sapphire`,
    `Secret`,
    `Shielding`,
    `Shining`,
    `Silk`,
    `Silver`,
    `Singing`,
    `Skyborn`,
    `Soaring`,
    `Steel`,
    `Stone`,
    `Storied`,
    `Sunstone`,
    `Thundering`,
    `Titanic`,
    `Unstoppable`,
    `Untouchable`,
    `Unyielding`,
    `Virtuous`,
    `Vorpal`,
    `Warding`,
    `Watchful`,
    `Whistling`,
    `White`,
    `Wind`,
    `Winged`,
    `Wise`,
    `Wooden`,
    `Yellow`,
  ],
  unholy: [
    `Abyssal`,
    `Acid`,
    `Ancient`,
    `Ashen`,
    `Black`,
    `Blackened`,
    `Blacksteel`,
    `Blasphemous`,
    `Bloodstone`,
    `Bony`,
    `Brass`,
    `Brutal`,
    `Burning`,
    `Callous`,
    `Chained`,
    `Charming`,
    `Clawed`,
    `Crawling`,
    `Cruel`,
    `Cursed`,
    `Dark`,
    `Darkstone`,
    `Deathly`,
    `Decaying`,
    `Desecrated`,
    `Diseased`,
    `Disentegrating`,
    `Dragonfang`,
    `Dragonscale`,
    `Eternal`,
    `Exploding`,
    `Fabled`,
    `Fallen`,
    `Fell`,
    `Flaming`,
    `Flying`,
    `Forgotten`,
    `Frightful`,
    `Ghostly`,
    `Ghoulish`,
    `Glass`,
    `Gloom`,
    `Golden`,
    `Grey`,
    `Hellborn`,
    `Hellish`,
    `Hellish`,
    `Howling`,
    `Indomitable`,
    `Infamous`,
    `Infernal`,
    `Iron`,
    `Irresistible`,
    `Jade`,
    `Jagged`,
    `Leathery`,
    `Legendary`,
    `Lightning`,
    `Lost`,
    `Magma`,
    `Mighty`,
    `Moonstone`,
    `Necrotic`,
    `Obsidian`,
    `Poisoned`,
    `Profane`,
    `Rotting`,
    `Ruby`,
    `Rusty`,
    `Sacred`,
    `Scaly`,
    `Secret`,
    `Serrated`,
    `Shadow`,
    `Silver`,
    `Sinking`,
    `Slithering`,
    `Sly`,
    `Smoky`,
    `Spectral`,
    `Spiked`,
    `Starborn`,
    `Stone`,
    `Thorny`,
    `Thundering`,
    `Toothy`,
    `Tormenting`,
    `Tricky`,
    `Tyrranical`,
    `Undying`,
    `Unholy`,
    `Unlucky`,
    `Vain`,
    `Vile`,
    `Watchful`,
    `Whispering`,
    `Wicked`,
    `Winged`,
    `Wounding`,
    `Yellow`,
  ],
  noun: [
    `Amulet`,
    `Ark`,
    `Arrow`,
    `Axe`,
    `Baldric`,
    `Barrel`,
    `Basin`,
    `Belt`,
    `Blade`,
    `Bones`,
    `Boots`,
    `Bow`,
    `Bowl`,
    `Bracers`,
    `Breastplate`,
    `Buckler`,
    `Candle`,
    `Chainmail`,
    `Chains`,
    `Chalice`,
    `Chest`,
    `Circlet`,
    `Claw`,
    `Cloak`,
    `Coat`,
    `Coffin`,
    `Crown`,
    `Cudgel`,
    `Cup`,
    `Dagger`,
    `Drum`,
    `Ear`,
    `Earrings`,
    `Epistles`,
    `Feather`,
    `Finger`,
    `Flail`,
    `Flute`,
    `Foot`,
    `Gauntlets`,
    `Gem`,
    `Globe`,
    `Goblet`,
    `Hammer`,
    `Hand`,
    `Harp`,
    `Helm`,
    `Horn`,
    `Kettle`,
    `Knife`,
    `Knot`,
    `Lantern`,
    `Light`,
    `Longsword`,
    `Mace`,
    `Mask`,
    `Mirror`,
    `Morningstar`,
    `Nail`,
    `Necklace`,
    `Orb`,
    `Pestle`,
    `Purse`,
    `Quarterstaff`,
    `Quill`,
    `Ring`,
    `Robe`,
    `Rod`,
    `Sandals`,
    `Sarcophagus`,
    `Scab`,
    `Scales`,
    `Scepter`,
    `Scroll`,
    `Shield`,
    `Shoes`,
    `Shortsword`,
    `Shroud`,
    `Shrubbery`,
    `Signet`,
    `Skull`,
    `Snout`,
    `Spear`,
    `Splinter`,
    `Spoon`,
    `Staff`,
    `Sword`,
    `Talisman`,
    `Toe`,
    `Tome`,
    `Tongue`,
    `Tooth`,
    `Torch`,
    `Tresses`,
    `Tunic`,
    `Vial`,
    `Wand`,
    `Wart`,
    `Whip`,
    `Wings`,
  ],
  namedGod: [
    `Annam`,
    `Asmodeus`,
    `Auril`,
    `Avandra`,
    `Azuth`,
    `Bahamut`,
    `Bane`,
    `Baphomet`,
    `Beory`,
    `Bhaal`,
    `Boccob`,
    `Celestian`,
    `Chauntea`,
    `Corellon Larethian`,
    `Cyndor`,
    `Cyric`,
    `Daern`,
    `Demogorgon`,
    `Deneir`,
    `Doresain`,
    `Ehlonna`,
    `Eldath`,
    `Erathis`,
    `Erythnul`,
    `Fharlanghn`,
    `Garl Glittergold`,
    `Gond`,
    `Gruumsh`,
    `Halmyr`,
    `Heironeous`,
    `Helm`,
    `Heward`,
    `Hextor`,
    `Ilmater`,
    `Incabulos`,
    `Ioun`,
    `Istus`,
    `Iuz`,
    `Joramy`,
    `Kelanen`,
    `Kelemvor`,
    `Keoghtom`,
    `Khala`,
    `Kord`,
    `Kurtulmak`,
    `Kyuss`,
    `Lathander`,
    `Leira`,
    `Liliira`,
    `Lolth`,
    `Loviatar`,
    `Maglubiyet`,
    `Malar`,
    `Mask`,
    `Melora`,
    `Mielikki`,
    `Milil`,
    `Moradin`,
    `Myrkul`,
    `Mystra`,
    `Nerull`,
    `Obad-Hai`,
    `Oghma`,
    `Olidammara`,
    `Orcus`,
    `Pelor`,
    `Pholtus`,
    `Procan`,
    `Pyremius`,
    `Rao`,
    `Saint Cuthbert`,
    `Savras`,
    `Sehanine Moonbow`,
    `Selune`,
    `Shar`,
    `Silvanas`,
    `Sune`,
    `Talona`,
    `Talos`,
    `Tempus`,
    `Tharizdun`,
    `the Raven Queen`,
    `Tiamat`,
    `Torm`,
    `Torog`,
    `Tymora`,
    `Typhos`,
    `Tyr`,
    `Umberlee`,
    `Umberlee`,
    `Urbanus`,
    `Vaprak`,
    `Vecna`,
    `Waukeen`,
    `Wee Jas`,
    `Yeenoghu`,
    `Yondalla`,
    `Zagyg`,
    `Zehir`,
    `Zoser`,
  ],
  abstractGod: [
    `Our Lady`,
    `Our Mother`,
    `the Ancient Flame`,
    `the Ancient Oak`,
    `the Autumn Singer`,
    `the Bat`,
    `the Battle-Lord`,
    `the Bear`,
    `the Beast`,
    `the Beast-Tamer`,
    `the Beast-Wife`,
    `the Beauty Queen`,
    `the Blood-Bringer`,
    `the Burning Man`,
    `the Crone`,
    `the Cruel King`,
    `the Dark Lady`,
    `the Dark Lord`,
    `the Dark Prophet`,
    `the Death Harbinger`,
    `the Doom Harbinger`,
    `the Doom-Maker`,
    `the Eagle`,
    `the Earth-Mother`,
    `the Earth-Queen`,
    `the Enemy`,
    `the Eternal Light`,
    `the Eternal Sage`,
    `the Fair Maiden`,
    `the Fatespinner`,
    `the Felled Tree`,
    `the Fire Dragon`,
    `the Forest Keeper`,
    `the Frog`,
    `the Gloom-Spider`,
    `the Goddess`,
    `the Grain-Grower`,
    `the Great Huntress`,
    `the Great Protector`,
    `the Great Smith`,
    `the Horned One`,
    `the Judge`,
    `the King Beneath the Waves`,
    `the Lawgiver`,
    `the Life-Keeper`,
    `the Life-Tree`,
    `the Light's Son`,
    `the Magic-Maid`,
    `the Messenger`,
    `the Mighty Hunter`,
    `the Mighty One`,
    `the Mighty Warrior`,
    `the Mischief-Maker`,
    `the Moon-Witch`,
    `the Mountain Forger`,
    `the Night Queen`,
    `the Oathkeeper`,
    `the Oracle`,
    `the Prophet`,
    `the Sacred Grove`,
    `the Savior`,
    `the Scorpion`,
    `the Sea Dragon`,
    `the Sea God`,
    `the Sea Queen`,
    `the Seductress`,
    `the Shadow`,
    `the Shadowkeeper`,
    `the Shadow-Serpent`,
    `the Shield-Maiden`,
    `the Ship-Taker`,
    `the Sky Father`,
    `the Soothsayer`,
    `the Soul-Collector`,
    `the Soul-Eater`,
    `the Spider`,
    `the Spring Maiden`,
    `the Starfinder`,
    `the Stone Dragon`,
    `the Storm Dragon`,
    `the Storm King`,
    `the Storm-Bringer`,
    `the Summer Mistress`,
    `the Sunkeeper`,
    `the Sword-Prince`,
    `the Thief`,
    `the Tormenter`,
    `the Tree Spirit`,
    `the Undying Light`,
    `the Unnamed One`,
    `the Unyielding Tyrant`,
    `the Voice`,
    `the Wandering Rogue`,
    `the War-Maker`,
    `the Watcher`,
    `the Watchful Eye`,
    `the Wind King`,
    `the Winemaker`,
    `the Winter Lady`,
    `the Wolf`,
  ],
  saint: [
    `Almar the Holy`,
    `Amaya the Seeress`,
    `Bahak the Preacher`,
    `Bahruz the Prophet`,
    `Lira the Flamekeeper`,
    `Mozar the Conqueror`,
    `Prince Tarunal`,
    `Queen Kalissa`,
    `Rahal the Sunsoul`,
    `Raham the Lightbringer`,
    `St. Aemilia`,
    `St. Albus`,
    `St. Anglos`,
    `St. Antonia`,
    `St. Antonus`,
    `St. Austyn`,
    `St. Bardo`,
    `St. Beatrix`,
    `St. Berta`,
    `St. Bettius`,
    `St. Bryenn`,
    `St. Buttercup`,
    `St. Carolo`,
    `St. Cedrick`,
    `St. Cordelia`,
    `St. Cowhan`,
    `St. Cumberbund`,
    `St. Dorys`,
    `St. Dreddos`,
    `St. Dwayn`,
    `St. Edwynna`,
    `St. Elayne`,
    `St. Falstyus`,
    `St. Farcas`,
    `St. Florenzo`,
    `St. Gabrella`,
    `St. Gaiorgus`,
    `St. Goodkynd`,
    `St. Hal`,
    `St. Halcincas`,
    `St. Haroldus`,
    `St. Hemingwar`,
    `St. Heraclora`,
    `St. Hermioninny`,
    `St. Hieronymus`,
    `St. Inigo`,
    `St. Jordyn`,
    `St. Katrynn`,
    `St. Lannus`,
    `St. Leo`,
    `St. Leryo`,
    `St. Londyn`,
    `St. Magio`,
    `St. Marius`,
    `St. Markuz`,
    `St. Martyn`,
    `St. Matromus`,
    `St. Morrsona`,
    `St. Morwayne`,
    `St. Murkel`,
    `St. Mychel`,
    `St. Nyneva`,
    `St. Paolo`,
    `St. Parrinus`,
    `St. Perseon`,
    `St. Petyr`,
    `St. Podryck`,
    `St. Polly`,
    `St. Pratchytt`,
    `St. Rawynn`,
    `St. Regus`,
    `St. Ricarddos`,
    `St. Roberts`,
    `St. Robinus`,
    `St. Rowhan`,
    `St. Rowlynna`,
    `St. Sansima`,
    `St. Sessimus`,
    `St. Severus`,
    `St. Stynebick`,
    `St. Symeon`,
    `St. Theseon`,
    `St. Thoryn`,
    `St. Tolkkyn`,
    `St. Twayn`,
    `St. Xavos`,
    `the Deliverer`,
    `the Doomcaller`,
    `the Doomsayer`,
    `the Lawgiver`,
    `the Oracle`,
    `the Prophet`,
    `the Savior`,
    `the Seeker`,
    `the Shadowseer`,
    `the Soothsayer`,
    `the Starwatcher`,
    `the Truthsayer`,
    `the Voice`,
    `Zefar the Sorcer`,
  ],
}
