/**
 * Created by shu on 7/5/2017.
 */
import * as THREE from 'three'
import 'react-dom'
import { Component } from 'react'

type ThrottledFunction<T extends unknown[]> = (this: unknown, ...args: T) => void;

function throttle<T extends unknown[]>(
    func: (this: unknown, ...args: T) => void,
    limit: number,
    immediate?: boolean
): ThrottledFunction<T> {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let lastCallTime: number | null = null;

    return function (this: unknown, ...args: T): void {
        const now = Date.now();
        const shouldCallImmediately = immediate && !lastCallTime;

        if (shouldCallImmediately) {
            func.apply(this, args);
            lastCallTime = now;
            return;
        }

        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        const nextCallTime = (lastCallTime || 0) + limit;
        const delay = Math.max(0, nextCallTime - now);

        timeoutId = setTimeout(() => {
            func.apply(this, args);
            lastCallTime = Date.now();
        }, delay);
    };
}


// const PI_2 = Math.PI * 2
const X_CNT = 30, Y_CNT = 30, SCALE = 200

// source: three.js official demo
// modified by shu

class SliderWave extends Component {
    stop: any;
    time: any;
    camera: any;
    dots: any;
    scene: any;
    renderer: any;
    x: any;
    y: any;
    material: any;
    canvas: any;
    constructor(props: any) {
        super(props)

        this.animate = this.animate.bind(this)
        this.tick = this.tick.bind(this)
        this.initThree = this.initThree.bind(this)
    }

    componentDidMount() {
        this.initThree()
        this.animate()
    }

    componentWillUnmount() {
        this.stop = true
    }

    animate() {
        if (!this.stop) {
            requestAnimationFrame(this.animate)
        }
        this.tick()
    }

    tick() {
        const { x, y } = this
        const t = this.time
        this.camera.position.x += (x - this.camera.position.x) * .05
        this.camera.position.y += (-y - this.camera.position.y) * .05
        this.camera.lookAt(this.scene.position)

        for (let i = 0; i < X_CNT; ++i) {
            for (let j = 0; j < Y_CNT; ++j) {
                const dot = this.dots[i * X_CNT + j]
                dot.position.y = Math.sin((i + t) * .5) * 50 + Math.sin((j + t) * .5) * 50
                dot.scale.x = dot.scale.y = Math.sin((i + t) * .3) * 4 + Math.sin((j + t) * .5) * 4 + 8
            }
        }

        this.renderer.render(this.scene, this.camera)
        this.time += 0.1
    }

    initThree() {
        this.x = window.innerWidth / 2
        this.y = -window.innerHeight / 2
        this.time = 0

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000)
        this.camera.position.z = 1000

        this.scene = new THREE.Scene()

        this.dots = []

        this.material = new THREE.SpriteMaterial({
            color: 0xffffff,
            // program: (context: any) => {
            //     context.beginPath()
            //     context.arc(0, 0, .3, 0, PI_2, true)
            //     context.fill()
            // }
        })

        for (let i = 0; i < X_CNT; ++i) {
            for (let j = 0; j < Y_CNT; ++j) {
                const dot = new THREE.Sprite(this.material)
                dot.position.x = (i - X_CNT / 2) * SCALE
                dot.position.z = (j - Y_CNT / 2) * SCALE
                this.dots.push(dot)

                this.scene.add(dot)
            }
        }

        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas })
        this.renderer.setPixelRatio(1)
        this.renderer.setSize(window.innerWidth, window.innerHeight)

        let widthHalf = window.innerWidth / 2
        let heightHalf = window.innerWidth / 2
        window.addEventListener('resize', throttle(() => {
            widthHalf = window.innerWidth / 2
            heightHalf = window.innerWidth / 2

            this.camera.aspect = window.innerWidth / window.innerHeight
            this.camera.updateProjectionMatrix()
            this.renderer.setSize(window.innerWidth, window.innerHeight)
        }, 100, false), false)
        window.document.addEventListener('mousemove', ev => {
            this.x = ev.pageX - widthHalf
            this.y = ev.pageY - heightHalf - window.scrollY
        }, false)
    }

    render() {
        return <canvas className="absolute left-0 top-0 -z-20 h-screen w-screen opacity-0 md:opacity-100" key="slider-wave" ref={canvas => { this.canvas = canvas; }} />
    }
}

export default SliderWave