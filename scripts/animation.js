import BezierEasing from "./curves.js"

let start, prevFrame

export default function startAnimation() {
    if(id("houseRoof") === 0) return
    window.requestAnimationFrame(step)
}

const easing = BezierEasing(0.3, 0.88, 1, 1)

function step(timestamp) {
    if(start === undefined) start = timestamp
    const frame = (timestamp - start) / 16.67

    if(prevFrame != frame) animateFrame(frame)

    if(frame < 210) {
        prevFrame = frame
        window.requestAnimationFrame(step)
    }
}

const housePaths = [
    ["houseRoof", [40, 130]],
    ["window1", [50, 70]],
    ["window2", [70, 90]],
    ["window3", [60, 80]],
    ["window4", [80, 100]],
]

const letterPaths = [
    ["letterG", [30, 90]],
    ["letterO1", [40, 100]],
    ["letterO2", [50, 110]],
    ["letterN", [60, 120]],
    ["letterZ", [70, 130]],
]

const containerPaths = [
    ["houseBorder", [60, 120]]
]

function animateFrame(frame) {
    for(const path of housePaths) {
        if(frame >= path[1][0] && frame <= path[1][1] + 1) {
            const ease = (frame - path[1][0]) / (path[1][1] - path[1][0])
            const length = id(path[0]).getTotalLength()
            const animateEase = length - (easing(ease) * length)

            if(frame < path[1][1]) id(path[0]).style["stroke-dashoffset"] = animateEase
            else id(path[0]).style["stroke-dashoffset"] = 0
        }
    }

    for(const path of letterPaths) {
        if(frame >= path[1][0] && frame <= path[1][1] + 1) {
            const ease = (frame - path[1][0]) / (path[1][1] - path[1][0])
            const length = id(path[0]).getTotalLength()
            const animateEase = length - (easing(ease) * length)

            if(frame < path[1][1]) {
                id(path[0]).style["stroke-dashoffset"] = animateEase
                id(path[0] + "Shadow").style["stroke-dashoffset"] = animateEase
                id(path[0] + "Border").style["stroke-dashoffset"] = animateEase
            } else {
                id(path[0]).style["stroke-dashoffset"] = 0
                id(path[0] + "Shadow").style["stroke-dashoffset"] = 0
                id(path[0] + "Border").style["stroke-dashoffset"] = 0
            }
        }
    }

    for(const path of containerPaths) {
        if(frame >= path[1][0] && frame <= path[1][1] + 1) {
            const ease = (frame - path[1][0]) / (path[1][1] - path[1][0])
            const length = id(path[0]).getTotalLength()
            const animateEase = length - (easing(ease) * length)
            const opacityEase = easing(ease)

            const element = id(path[0])
            const shadow = id(path[0] + "Shadow")
            if(frame < path[1][1]) {
                element.style["stroke-dashoffset"] = animateEase
                element.style["fill-opacity"] = opacityEase
                shadow.style["stroke-dashoffset"] = animateEase
                shadow.style["stroke-opacity"] = opacityEase
            } else {
                element.style["stroke-dashoffset"] = 0
                element.style["fill-opacity"] = 1
                shadow.style["stroke-dashoffset"] = 0
                shadow.style["stroke-opacity"] = 1
            }
        }
    }
}

function houseRoofPath(frame) {
    const houseRoof = id("houseRoof")
    houseRoof.setAttribute("strokeOpacity", easing(frame / (130 - 40)))
}