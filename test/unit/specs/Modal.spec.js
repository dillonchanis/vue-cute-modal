import { createLocalVue, shallow } from '@vue/test-utils'
import CuteModalPlugin from '@/index'
import CuteModal from '@/Modal'

describe('CuteModal', () => {
  it('adds a $cuteModal method to the Vue prototype', () => {
    const localVue = createLocalVue()
    localVue.use(CuteModalPlugin)
    expect(typeof localVue.prototype.$cuteModal).toBe('object')
  })

  it('should render a slotted header', () => {
    const localVue = createLocalVue()
    localVue.use(CuteModalPlugin)

    const wrapper = shallow(CuteModal, {
      localVue,
      propsData: {
        name: 'test-modal'
      },
      slots: {
        header: '<div>Hello World</div>'
      }
    })

    wrapper.setData({ isOpen: true })

    const header = wrapper.find('.cute-modal__header')
    expect(header.text().trim()).toBe('Hello World')
  })

  it('should render a slotted body', () => {
    const localVue = createLocalVue()
    localVue.use(CuteModalPlugin)

    const wrapper = shallow(CuteModal, {
      localVue,
      propsData: {
        name: 'test-modal'
      },
      slots: {
        default: '<div>Hello World</div>'
      }
    })

    wrapper.setData({ isOpen: true })

    const body = wrapper.find('.cute-modal__body')
    expect(body.text().trim()).toBe('Hello World')
  })

  it('should render a slotted footer', () => {
    const localVue = createLocalVue()
    localVue.use(CuteModalPlugin)

    const wrapper = shallow(CuteModal, {
      localVue,
      propsData: {
        name: 'test-modal'
      },
      slots: {
        footer: '<button>Click Me!</button>'
      }
    })

    wrapper.setData({ isOpen: true })

    const footer = wrapper.find('.cute-modal__footer button')
    expect(footer.text().trim()).toBe('Click Me!')
  })

  it('should take a height and width prop', () => {
    const localVue = createLocalVue()
    localVue.use(CuteModalPlugin)

    const wrapper = shallow(CuteModal, {
      localVue,
      propsData: {
        name: 'test-modal',
        height: '800px',
        width: '400px'
      }
    })

    wrapper.setData({ isOpen: true })

    const container = wrapper.find('.cute-modal__container')
    expect(container.element.style.height).toBe('800px')
    expect(container.element.style.width).toBe('400px')
  })
})
