import {assert} from 'chai'
import {getCssSelector} from '../src/index.ts'

describe('Shadow DOM', () => {
  let root
  let shadowRoot
  let shadowElement

  beforeEach(() => {
    root = document.body.appendChild(document.createElement('div'))
    shadowRoot = root.attachShadow({mode: 'open'})
    shadowElement = shadowRoot.appendChild(document.createElement('div'))
    shadowElement.className = 'shadowElement'
  })

  afterEach(() => {
    root.parentNode.removeChild(root)
  })

  it('should match shadow element within shadow root', () => {
    const result = getCssSelector(shadowElement, {root: shadowRoot})
    assert.equal(result, '.shadowElement')
  })

  it('should match shadow element without specifying root', () => {
    const result = getCssSelector(shadowElement)
    assert.equal(result, '.shadowElement')
  })
})