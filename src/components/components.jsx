// createElement method Component
const methodComponent = React.createElement(span, {}, "Component from createElement method.")

// Class Component:
class classComponent extends Component {
  constructor(){
    super()
  }
  render(){
    return <span>Class Component contents.</span>
  }
}

// Pure Component:
class classComponent extends Component {
  render(){
    return <span>Pure Component contents.</span>
  }
}

// Functional Component:
const functionalComponent = () => <span>Functional Component contents.</span>
