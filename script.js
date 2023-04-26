import data from "./assets/data.js"

/*
houseRoofPath
window1Path
window2Path
window3Path
window4Path
letterGPath
letterO1Path
letterO2Path
letterNPath
letterZPath
houseBorderPath
houseLetterHPath
houseLetterOPath
houseLetterUPath
houseLetterSPath
houseLetterEPath
*/

const id = iden => document.getElementById(iden)
const createPath = () => document.createElementNS("http://www.w3.org/2000/svg", "path")

function loadData() {
    buildHouseGroup()
    buildLetters()
    buildHouseBorder()
    buildHouseLetters()
}

function buildHouseGroup() {
    const houseGroup = id("houseGroup")
    const paths = [
        "houseRoof",
        "window1",
        "window2",
        "window3",
        "window4"
    ]

    for(const path of paths) {
        const element = createPath()
        element.id = path
        element.setAttribute("d", data[path + "Path"])
        houseGroup.appendChild(element)
    }
}

function buildLetters() {
    const letterGroup = id("letterGroup")
    const paths = [
        "letterG",
        "letterO1",
        "letterO2",
        "letterN",
        "letterZ"
    ]

    for(const path of paths) {
        const letter = createPath()
        letter.id = path
        letter.setAttribute("d", data[path + "Path"])

        const letterShadow = createPath()
        letterShadow.setAttribute("class", "letterShadow")
        letterShadow.setAttribute("d", data[path + "Path"])

        const letterBorder = createPath()
        letterBorder.setAttribute("class", "letterBorder")
        letterBorder.setAttribute("d", data[path + "Path"])

        letterGroup.appendChild(letterShadow)
        letterGroup.appendChild(letterBorder)
        letterGroup.appendChild(letter)
    }
}

function buildHouseBorder() {
    const houseLetterGroup = id("houseLetterGroup")

    const container = createPath("path")
    container.id = "houseBorder"
    container.setAttribute("d", data.houseBorderPath)

    const border = createPath()
    border.setAttribute("class", "houseBorderShadow")
    border.setAttribute("d", data.houseBorderPath)

    houseLetterGroup.appendChild(border)
    houseLetterGroup.appendChild(container)
}

function buildHouseLetters() {
    const houseLetterGroup = id("houseLetterGroup")
    const paths = [
        "houseLetterH",
        "houseLetterO",
        "houseLetterU",
        "houseLetterS",
        "houseLetterE"
    ]

    for(const path of paths) {
        const letter = createPath()
        letter.id = path
        letter.setAttribute("class", "houseLetter")
        letter.setAttribute("d", data[path + "Path"])

        const letterShadow = createPath()
        letterShadow.setAttribute("class", "houseLetterShadow")
        letterShadow.setAttribute("d", data[path + "Path"])

        houseLetterGroup.appendChild(letterShadow)
        houseLetterGroup.appendChild(letter)
    }
}

loadData()