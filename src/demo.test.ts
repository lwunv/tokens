import { shallow } from 'enzyme'
import { TaskInput } from './components/task-input'

describe('MyComponent', () => {
  let wrapper: any

  beforeEach(() => {
    // @ts-ignore
    // wrapper = shallow(<TaskInput />)
    wrapper = shallow(TaskInput)
  })

  it('renders the form', () => {
    expect(wrapper.find('form').exists()).toBe(true)
  })

  it('updates the state when input values change', () => {
    const firstNameInput = wrapper.find('input[name="title"]')
    firstNameInput.simulate('change', { target: { name: 'title', value: 'John' } })

    const lastNameInput = wrapper.find('input[name="price"]')
    lastNameInput.simulate('change', { target: { name: 'price', value: '888888888' } })

    const emailInput = wrapper.find('input[name="logo"]')
    emailInput.simulate('change', { target: { name: 'logo', value: 'example.com/x.png' } })

    expect(wrapper.state('formValues')).toEqual({
      title: 'John',
      price: '88888',
      logo: 'example.com/x.png'
    })
  })

  it('submits the form when the submit button is clicked', () => {
    const submitButton = wrapper.find('button')
    submitButton.simulate('click', {
      preventDefault: () => ({})
    })
    expect(wrapper.state('formValues')).toEqual({
      title: '',
      price: '',
      logo: ''
    })
  })
})