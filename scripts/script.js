import { id } from "./waterWorks.js"
import data from "./data.js"
import startAnimation from "./animation.js"

function loadData() {
    loadLatestVideo()

    buildHouseGroup()
    buildGoonzLetterGroup()
    buildHouseLetterGroup()

    startAnimation()
}

function createPath(name, path, className="") {
    const element = document.createElementNS("http://www.w3.org/2000/svg", "path")

    element.setAttribute("id", name)
    element.setAttribute("d", path)
    element.setAttribute("fill-opacity", 0)

    const length = element.getTotalLength()
    element.setAttribute("stroke-dasharray", length)
    element.setAttribute("stroke-dashoffset", length)

    element.setAttribute("class", className)
    data.elementCache[name] = element

    return element
}

async function loadLatestVideo() {
    const iframe = id("latest-video")
    const channelID = "UCkAIW2CME5jrQ7G5VRv5VNA";
    const baseURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";

    try {
        const res = await fetch("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(baseURL) + channelID)
        const json = await res.json()
    
        const link = json.items[0].link
        const id = link.substr(link.indexOf("=") + 1)
        const src = "https://youtube.com/embed/" + id + "?controls=0&showinfo=0&rel=0"

        iframe.src = src
    } catch {
        id("latest-video-wrapper").style.display = "none"
    }
}

function buildHouseGroup() {
    const houseGroup = id("house-group")
    houseGroup.appendChild(createPath("house-roof", data.houseRoofPath))
    houseGroup.appendChild(createPath("window-0", data.window0Path))
    houseGroup.appendChild(createPath("window-1", data.window1Path))
    houseGroup.appendChild(createPath("window-2", data.window2Path))
    houseGroup.appendChild(createPath("window-3", data.window3Path))
}

function buildGoonzLetterGroup() {
    const letters = [
        {
            letter: "G",
            data: data.letterGPath
        },
        {
            letter: "O1",
            data: data.letterO1Path
        },
        {
            letter: "O2",
            data: data.letterO2Path
        },
        {
            letter: "N",
            data: data.letterNPath
        },
        {
            letter: "Z",
            data: data.letterZPath
        }
    ]
    for(const letter of letters) {
        const letterGroup = id("goonz-letter-" + letter.letter)
        letterGroup.appendChild(createPath("letter-" + letter.letter + "-shadow", letter.data, "goonz-letter-shadow"))
        letterGroup.appendChild(createPath("letter-" + letter.letter + "-border", letter.data, "goonz-letter-border"))
        letterGroup.appendChild(createPath("letter-" + letter.letter, letter.data))
    }
}

function buildHouseLetterGroup() {
    const houseLetterContainer = id("house-letter-container")
    houseLetterContainer.appendChild(createPath("house-container-shadow", data.houseBorderPath))
    houseLetterContainer.appendChild(createPath("house-container", data.houseBorderPath))

    const letters = [
        {
            letter: "H",
            data: data.houseLetterHPath
        },
        {
            letter: "O",
            data: data.houseLetterOPath
        },
        {
            letter: "U",
            data: data.houseLetterUPath
        },
        {
            letter: "S",
            data: data.houseLetterSPath
        },
        {
            letter: "E",
            data: data.houseLetterEPath
        }
    ]
    for(const letter of letters) {
        const letterGroup = id("house-letter-" + letter.letter)
        letterGroup.appendChild(createPath("house-letter-" + letter.letter + "-shadow", letter.data, "house-letter-shadow"))
        letterGroup.appendChild(createPath("house-letter-" + letter.letter, letter.data, "house-letter"))
    }
}

loadData()