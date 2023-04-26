import data from "./data.js"
import startAnimation from "./animation.js"

function loadData() {
    buildHouseGroup()
    buildLetters()
    buildHouseBorder()
    buildHouseLetters()

    startAnimation()
}

function commonPath(path, extra = "") {
    const element = createPath()
    element.id = path + extra
    element.setAttribute("d", data[path + "Path"])
    const length = element.getTotalLength()
    element.setAttribute("stroke-dasharray", length)
    element.setAttribute("stroke-dashoffset", length)
    return element
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
        const element = commonPath(path)
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
        const letter = commonPath(path)

        const letterShadow = commonPath(path, "Shadow")
        letterShadow.setAttribute("class", "letterShadow")

        const letterBorder = commonPath(path, "Border")
        letterBorder.setAttribute("class", "letterBorder")

        letterGroup.appendChild(letterShadow)
        letterGroup.appendChild(letterBorder)
        letterGroup.appendChild(letter)
    }
}

function buildHouseBorder() {
    const houseLetterGroup = id("houseLetterGroup")

    const container = commonPath("houseBorder")
    container.setAttribute("fill-opacity", 0)

    const border = commonPath("houseBorderShadow")
    border.setAttribute("fill-opacity", 0)

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
        const letter = commonPath(path)
        letter.setAttribute("class", "houseLetter")

        const letterShadow = commonPath(path, false)
        letterShadow.setAttribute("class", "houseLetterShadow")

        houseLetterGroup.appendChild(letterShadow)
        houseLetterGroup.appendChild(letter)
    }
}

loadData()