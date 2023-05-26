import { id } from "./waterWorks.js"
import BezierEasing from "./curves.js"

export default function startAnimation() {
    initPaths()
    window.requestAnimationFrame(animationStep)
}

let normalPaths, houseLetterPaths
function initPaths() {
    normalPaths = [
        { group: id("house-roof"), elements: [id("house-roof")], timing: [40, 130] },
        { group: id("window-0"), elements: [id("window-0")], timing: [50, 70] },
        { group: id("window-1"), elements: [id("window-1")], timing: [70, 90] },
        { group: id("window-2"), elements: [id("window-2")], timing: [60, 80] },
        { group: id("window-3"), elements: [id("window-3")], timing: [80, 100] },
        { group: id("goonz-letter-G"), elements: Array.from(id("goonz-letter-G").children), timing: [30, 90] },
        { group: id("goonz-letter-O1"), elements: Array.from(id("goonz-letter-O1").children), timing: [40, 100] },
        { group: id("goonz-letter-O2"), elements: Array.from(id("goonz-letter-O2").children), timing: [50, 110] },
        { group: id("goonz-letter-N"), elements: Array.from(id("goonz-letter-N").children), timing: [60, 120] },
        { group: id("goonz-letter-Z"), elements: Array.from(id("goonz-letter-Z").children), timing: [70, 130] },
        { group: id("house-letter-container"), elements: Array.from(id("house-letter-container").children), timing: [60, 120] }
    ]

    houseLetterPaths = [
        { group: id("house-letter-H"), elements: Array.from(id("house-letter-H").children), timing: [80, 100] },
        { group: id("house-letter-O"), elements: Array.from(id("house-letter-O").children), timing: [90, 110] },
        { group: id("house-letter-U"), elements: Array.from(id("house-letter-U").children), timing: [100, 120] },
        { group: id("house-letter-S"), elements: Array.from(id("house-letter-S").children), timing: [110, 130] },
        { group: id("house-letter-E"), elements: Array.from(id("house-letter-E").children), timing: [120, 140] }
    ]
    
    const screenCenter = [window.innerWidth / 2, window.innerHeight / 2]
    for(const i in normalPaths) {
        const bounds = normalPaths[i].group.getBoundingClientRect()
        const center = [(bounds.left + bounds.right) / 2, (bounds.top + bounds.bottom) / 2]
        normalPaths[i].angle = Math.atan2(center[1] - screenCenter[1], center[0] - screenCenter[0])
    }
    for(const i in houseLetterPaths) {
        const bounds = houseLetterPaths[i].group.getBoundingClientRect()
        const center = [(bounds.left + bounds.right) / 2, (bounds.top + bounds.bottom) / 2]
        houseLetterPaths[i].angle = Math.atan2(center[1] - screenCenter[1], center[0] - screenCenter[0])
    }
}

const easing = BezierEasing(0.3, 0.88, 1, 1)
const easingIn = BezierEasing(0.42, 0, 1, 1)
const easingOut = BezierEasing(0, 0, 0.58, 1)

const states = [
    { function: animateLogo, cutoff: 210, cleanUp: () => {} },
    { function: animateExplosion, cutoff: 60, cleanUp: () => {
        id("logo-svg").style.display = "none"
    } },
    { function: animateCleanUp, cutoff: 60, cleanUp: () => {
        document.body.style.overflow = "auto"
    } }
]

let start, prevFrame
let state = 0
function animationStep(timestamp) {
    if(states[state] === undefined) return
    if(!states[state]) window.cancelAnimationFrame(currentAnimationFrame)
    if(start === undefined) start = timestamp
    const frame = (timestamp - start) / 16.67

    if(prevFrame != frame) states[state].function(frame)

    if(frame < states[state].cutoff) {
        prevFrame = frame
    } else {
        states[state].cleanUp()
        start = undefined
        state++
    }
    window.requestAnimationFrame(animationStep)
}

function animateLogo(frame) {
    for(const path of normalPaths) {
        if(frame >= path.timing[0] && frame <= path.timing[1] + 1) {
            const ease = (frame - path.timing[0]) / (path.timing[1] - path.timing[0])
            const length = path.elements[0].getTotalLength()
            const animateEase = length - (easing(ease) * length)
            const opacityEase = easing(ease)

            if(frame < path.timing[1]) {
                for(const element of path.elements) {
                    element.style["stroke-dashoffset"] = animateEase
                    element.style["fill-opacity"] = opacityEase
                }
            } else {
                for(const element of path.elements) {
                    element.style["stroke-dashoffset"] = 0
                    element.style["fill-opacity"] = 1
                }
            }
        }
    }

    for(const path of houseLetterPaths) {
        const offset = 10
        if(frame >= path.timing[0] && frame <= path.timing[1] + offset + 1) {
            const ease = (frame - path.timing[0]) / (path.timing[1] - path.timing[0])
            const springEase = (frame - path.timing[0]) / (path.timing[1] + offset - path.timing[0])
            const opacityEase = easing(ease)
            const springPosition = (-44 * Math.cos(3 * springEase)) * (1 - springEase)

            if(frame < path.timing[1] + 20) {
                path.elements[1].setAttribute("transform", `translate(0 ${springPosition})`)
                for(const element of path.elements) {
                    element.style["fill-opacity"] = opacityEase
                }
            } else {
                path.elements[1].setAttribute("transform", `translate(0 0)`)
                for(const element of path.elements) {
                    element.style["fill-opacity"] = 1
                }
            }
        }
    }
}

function animateExplosion(frame) {
    for(const path of [...normalPaths, ...houseLetterPaths]) {
        const ease = frame / states[1].cutoff
        const animateEase = easingIn(ease) * 1.5
        path.group.setAttribute("transform", `translate(${animateEase * 2000 * Math.cos(path.angle)} ${animateEase * 2000 * Math.sin(path.angle)})`)
    }
}

function animateCleanUp(frame) {
    const ease = frame / states[2].cutoff
    const animateEase = easingOut(ease)
    if(frame < states[2].cutoff - 1) {
        id("content-wrapper").style.top = `${(1 - animateEase) * 100}vh`
    } else {
        id("content-wrapper").style.top = "0vh"
    }
}