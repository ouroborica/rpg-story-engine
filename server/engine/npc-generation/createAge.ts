import { AgeStage } from "../../../shared/AgeStage"
import { raceTraitsData } from "./npcData"
import { NPC } from "./npc"

export function createAge(npc: NPC) {
  const { ageDescriptors } = raceTraitsData[npc.race].ageTraits

  if (ageDescriptors) {
    const age = ageDescriptors.find(([years]) => years <= npc.ageYears)
    npc.age = (age && age[1]) || ``
  } else {
    console.log(`Called age descriptor without a valid array.`)
  }

  if (npc.ageStage === AgeStage.Child) {
    npc.hasClass = false
    npc.profession = npc.age
    npc.dndClass = npc.age
    npc.background = `child`
  }

  return npc
}

export function isOfAge(ageStage: string, race: string, ageYears: number) {
  return ageYears >= raceTraitsData[race].ageTraits[ageStage].baseAge
}
