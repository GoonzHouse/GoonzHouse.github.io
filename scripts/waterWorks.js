import elementCache from "./data.js"

const id = iden => {
    if(!elementCache[iden]) elementCache[iden] = document.querySelector(`#${iden}`)
    return elementCache[iden]
}

export {
    id
}