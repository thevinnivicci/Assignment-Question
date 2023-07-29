// What are Higher-Order Components (HOC) in React and how do they work?

// Higher-Order Components (HOC) are a pattern in React that allows you to reuse component logic. HOCs are not part of the React API, but they are a powerful tool that can help you to organize your code and make it more reusable.

// A HOC is a function that takes a component as an input and returns a new component as an output. The new component will have all the same functionality as the original component, plus any additional functionality that the HOC provides.

const withCounter = (Component) => {
    class HOC extends Component {
      constructor(props) {
        super(props);
        this.state = {
          count: 0,
        };
      }
  
      render() {
        return <Component {...this.props} count={this.state.count} />;
      }
    }
  
    return HOC;
  };


  const MyComponent = () => {
    return <div>Hello, world!</div>;
  };
  
  const EnhancedComponent = withCounter(MyComponent);

  
//   The EnhancedComponent component will have all the same functionality as the MyComponent component, plus the count prop.

//   HOCs can be used to add a variety of different functionality to components. For example, you could use a HOC to add a loading state to a component, or to add a Redux store to a component.
  
//   HOCs are a powerful tool that can help you to organize your code and make it more reusable. If you are looking for a way to reuse component logic, then HOCs are a great option.
  
  