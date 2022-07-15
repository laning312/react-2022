import { SET_PERSON_NAME, SET_PERSON_WEAPON } from "./constants"
const setPersonName = data => ({type: SET_PERSON_NAME, data})

const setPersonWeapon = data => ({type: SET_PERSON_WEAPON, data})

export {
    setPersonName,
    setPersonWeapon
}