import { current } from '@reduxjs/toolkit'
import { useEffect, useRef, useState } from 'react'
import { GlowParticle } from './GlowParticles'

const COLORS = [
  // { r: 45, g: 74, b: 227 },
  // { r: 250, g: 255, b: 89 },
  // { r: 255, g: 104, b: 248 },
  // { r: 44, g: 209, b: 252 },
  // { r: 54, g: 233, b: 84 },
  { r: 52, g: 211, b: 153 },
  { r: 45, g: 212, b: 191 },
  { r: 56, g: 189, b: 248 },
  { r: 79, g: 70, b: 229 },
]

class GradientBackground {
  constructor(canvas) {
    // this.canvas = document.createElement('canvas')
    // document.body.appendChild(this.canvas)
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1
    this.totalParticles = 10
    this.particles = []
    this.maxRadius = 900
    this.minRadius = 400

    window.addEventListener('resize', this.resize.bind(this), false)
    this.resize()

    window.requestAnimationFrame(this.animate.bind(this))
  }

  resize() {
    this.stageWidth = document.body.clientWidth
    this.stateHeight = document.body.clientHeight

    this.canvas.width = this.stageWidth * this.pixelRatio
    this.canvas.height = this.stateHeight * this.pixelRatio
    // this.ctx.scale(this.pixelRatio, this.pixelRatio)

    this.ctx.globalCompositeOperation = 'overlay'

    this.createParticles()
  }

  createParticles() {
    let curColor = 0
    this.particles = []

    for (let i = 0; i < this.totalParticles; i++) {
      const item = new GlowParticle(
        Math.random() * this.stageWidth,
        Math.random() * this.stateHeight,
        Math.random() * (this.maxRadius = this.minRadius) + this.minRadius,
        COLORS[curColor]
      )

      if (++curColor >= COLORS.length) {
        curColor = 0
      }

      this.particles[i] = item
    }
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this))

    this.ctx.clearRect(0, 0, this.stageWidth, this.stateHeight)

    for (let i = 0; i < this.totalParticles; i++) {
      const item = this.particles[i]
      item.animate(this.ctx, this.stageWidth, this.stateHeight)
    }
  }
}

const Background = ({ currentPath }) => {
  const canvas = useRef(null)
  const [currentGradient, setCurrentGradient] = useState(null)
  useEffect(() => {
    if (currentGradient === null)
      setCurrentGradient(new GradientBackground(canvas.current))
    if (currentGradient !== null) currentGradient.resize()
  }, [currentPath, currentGradient])

  return (
    <canvas
      className="top-0 left-0 w-full absolute -z-10 animate-shader-pulse brightness-200 -hue-rotate-20"
      ref={canvas}
    ></canvas>
  )
}

export default Background
