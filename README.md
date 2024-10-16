# React Components
## Introduction
It's a website showing multiple React components. The style and content of the components are editable on the code
**Components:**
  - **Badge:** a simple text box that can change its color and box styling. It expects 3 arguments:
    - `children`: the content inside the box
    - `color`: the color of the box and the text. The value has to be one of these: ["gray","red","blue","yellow","green","indigo","purple","pink"].
    - `type`: the box styling, it has two possible values: "pill" for rounded corners, "square" for normal corners. 
  - **Banner:** a more complex text box with a predefined title and style.
    - `children`: the content inside the box, below the title
    - `title`: the main title of the box. Type: String
    - `type`: a predefined list of styles, trying to confirm the type of message of the box. Possible values: ["success", "warning", "error", "info"]
  - **Card:** a box with a complete configurable icon and content.
    - `children`: the content inside the box.
    - `icon`: the icon that will be located on the top center of the box. Type: JSX element.
    - `iconColorBackground`: the color background of the icon container. Type: String
  - **Testimonial:** a box containing a person's quote. It can also provide more information about them or the company to which they belong. The style of the box will change depending on whether the image is available or not.
    - *All of these properties are optional, including the quote*.  
    - `children`:  extra information that will be located below the other predefined content.
    - `quote`:  the content of the quote. No quotation marks needed
    - `name`: the name of the person. Type: String
    - `role`: their role inside the company. Type: String
    - `image`: the img url of the person. Type: String
    - `logo`: the company's logo. Type: JSX element.
## Things learned
  ### General
  - <details>
      <summary>You can pass children to React components, that will be the content of that React component. The syntax is much like HTML, you write the content inside the React component tags</summary>

      ```JSX
        <ReactComponent>
          <div>Content of the React Component</div>
        </ReactComponent>
      ```
    </details>    
  - <details>
      <summary>You can then access the children of the React component through the children property of your props argument.</summary>

      ```JSX
      export default function ReactComponent(props){
        return props.children // ==> <div>Content of the React Component</div>
      }
      ```
    </details>
  - <details>
      <summary>You can destructure your props argument to work better with its properties</summary>

      ```JSX
      export default function ReactComponent({propOne, propTwo, children}){
        // *** Logic with propOne and PropTwo ***
        return children
      }
      ```
    </details> 
  - <details>
      <summary>
        Using the restructuring method, along with the rest and spread operators, you can target all of the properties that you didn't expect directly in your code, like the direct styling of your user, for example.
      </summary>
      </br>

    
      > ⚠️ **Warning** </br> 
      > Giving the freedom to pass any property to your user can cause it to override properties that you settled inside your React Component, like the className property.
      > You will have to write your code taking this into account. For className you can use the library "classnames" to add the content of your className and your user className together.

      </br>
      
      ```JSX
      // *** In App.jsx ***
      export default function App(){
        return (<ReactComponent prop1="value1" prop2="value2" className="react-component-content" style={{color:"blue"}} /* ...Other properties */> ReactComponent content </ReactComponent>)
      }

      // *** In ReactComponent.jsx ***
      export default function ReactComponent({propOne, propTwo, className, children, ...rest}){ // style, and all of the other properties will be stored in "rest"
        // *** Logic with propOne and PropTwo ***
        return (
          <div className={className} {...rest}>{children}</div> // all the values of the properties inside rest will be written there, separately 
        )
      }
      ```
  - <details>
      <summary>You can use <b>React.useRef()</b> to manage variables that you don't want to reset every time the component re-render, and you don't want that variables to re-render the component each time they change, like when using State. </summary>

      ```JSX
      export default function ReactComponent(){
        const refExample = React.useRef("value1")
        // "value1" and all other values inside the parenthesis will be stored inside a key named "current"
        console.log(refExample.current) // "value1"
        return (
          <div className="react-component"></div>
        )
      }
      ```
    </details> 
  - <details>
      <summary> You can pass the content you want your component to render through his properties (like a property "render", for example).</summary>

      - Normally passed as a function that return the content that you want to render
      - Other way to encounter this is with the function that render the content passed as a child
      ```JSX
      /* App.jsx */
      export default function App(){
        return (
          <firstReactComponent render={() => <div>Hello World</div>}/>
          <secondReactComponent>
            {() => <div>Hello World</div>}
          </secondReactComponent>
        )
      }
      /* First React Component */
      export default function FirstReactComponent({render}){
        return render() // <div>Hello World</div>
      }
      /* Second React Component */
      export default function SecondReactComponent({children}){
        return children() // <div>Hello World</div>
      }
      ```
    </details>
  - <details>
      <summary> In the same way you create libraries with Javascript, you can create Custom Hooks for React. The only difference is that Custom Hooks use React Hooks </summary>
      
      ```JSX
      /* Custom Hook */
      // This hook skip the first call of React.useEffect
      export default function useEffectOnUpdate(callback, listeners){
        const firstRender = React.useRef(true)
        React.useEffect(() => {
          if (firstRender.current) firstRender.current = false
          else callback() 
        }, listeners)
      }
      /* React Component */
      import useEffectOnUpdate from "customHookLocation"
      export default function ReactComponent(children){
        const {stateExample, setStateExample} = React.useState("value")
        useEffectOnUpdate(() => {
          console.log("hello world")
        }, [stateExample])
        return children 
      }
      ```
    </details>
  ### Solving Prop Drilling
  - **What is Prop Drilling?** It's when you has to pass a property to a React Component only to pass it to the child, or grandchild, etc. Depending of the sequence of levels you have to pass through, and the quantity of properties, you can end up with a lot of properties that visually overcharge your code.
  - **How to solve Prop Drilling**
    - <details>
      <summary><b>Compound Components</b></summary>
      
      - It's a group of components that are created with the intention of working together, much like some HTML elements (like `<ul>` and `<li>`, or `<table>` and `<tr>`).
      - They are written the same as those HTML elements, with a general component as the container, and the children for certain roles.
      - This reduces prop drilling as you can pass the property directly to the children when you are writing them.
        - ```JSX
          // ** Suppose you have a Menu, MenuButton and a MenuItem component **
          export default function App(){
            return (
              /* buttonProp and itemProp passed directly to the children. You avoid passing it to the Menu first */
              <Menu> 
                <MenuButton buttonProp="value"> Menu </MenuButton>
                <MenuItem itemProp="value"> Item 1 </MenuItem>
                <MenuItem itemProp="value"> Item 2 </MenuItem>
                <MenuItem itemProp="value"> Item 3 </MenuItem>
              </Menu>
            )
          }
          ```
      - You can create an auxiliar js file to group all of the child components inside the main one and access them in the same way you access keys inside objects, making the relation more visible.
        - ```JSX
          /* Auxiliar JS, named index.js */
          import Menu from "menuLocation"
          import MenuItem from "menuItemLocation"
          import MenuButton from "menuButtonLocation"
  
          Menu.Item = MenuItem
          Menu.Button = MenuButton
  
          export default Menu
  
          /* App.jsx */
          import Menu from "auxiliarJSLocation"
          export default function App(){
            return (
              <Menu> 
                <Menu.Button buttonProp="value"> Menu </MenuButton>
                <Menu.Item itemProp="value"> Item 1 </MenuItem>
                <Menu.Item itemProp="value"> Item 2 </MenuItem>
                <Menu.Item itemProp="value"> Item 3 </MenuItem>
              </Menu>
            )
          }
        ```
    </details>
  - <details>
      <summary><b>Implicit State</b></summary>

      - It's a method that let the children of a component interact with a state without the need to pass that state to them directly.
      - Or viewed in another way, it's a state that can be accessed and modified by a group of elements without the need to pass it to each one of them directly.
      - There are 2 ways to use **Implicit State**:
        - <details>
            <summary>Using <b>React.Children</b> and <b>React.cloneElement()</b></summary>

            - **React.children** is a utility that lets you handle the **direct** children of a component as if they were handling an array.
            - **React.cloneElement()** is another utility that clones an element, but it also let you inject additional properties to that element.
            - With this utilities, you can map over all the direct children of a component, and inject the properties you want to pass to them.
            - This method is not actually the preferred one to handle Implicit State, but it can be seen in some codes. 
            - ```JSX
              export default function ReactComponent(children){
                const [stateExample, setStateExample] = React.useState(false)
                function toggleState() {
                  setStateExample(prevStateExample => !prevStateExample)
                }
                return (
                  React.children(children, (child) => {
                    return React.cloneElement(child, {stateExample, toggleState})
                  })
                )
              }
              /* React.Children receives the array you want to work with as 1st parameter, and the function you want to run for each element as 2nd*/
              /* React.cloneElement() receives the element you want to copy as 1st parameter, and an object with the properties you want to add as 2nd */
              ```
          </details>
        - <details>
            <summary> <b>Context</b> </summary>
            
            - It's a React utility that lets you have a container/parent, with all the values you want to share, and gives the freedom to the children of that parent to access or modify those values.
            - First steps with Context:
              1. outside of your main function, create the container element using `React.createContext()` and assign it to a variable. Will be calling it "exampleContext".
              2. Write exampleContext down in the same way you write components on JSX syntax (<exampleContext></exampleContext>), but accessing a functionality inside it called "Provider" (<exampleContext.Provider></exampleContext.Provider>).
              3. Write the values to be shared inside the property "values" of exampleContext.
              4. Put the elements that you want to access those values inside exampleContext.
              5. Export exampleContext
              ```JSX
                const exampleContext = React.createContext()
                export default function ReactComponent (children){
                  const [exampleState, setExampleState] = React.useState(false)
                  function toggleState(){
                    setExampleState(prevExampleState => !prevExampleState)
                  }
                  return (
                    <exampleContext.Provider values={{exampleState, toggleState}}>
                      { children }
                    </exampleContext.Provider>
                  )
                }
                export { exampleContext }
              ```
            - How to access and modify the Context values
              1. Import the variable with Context
              2. Use React.useContext() and pass the variable with Context as a parameter. 
              3. Store the data returned from React.useContext() in another variable. There will be stored all of the variables you passed to the provider.
              ```JSX
              import { exampleContext } from "exampleContextLocation"
              export default function AnotherReactComponent(){
                const contextProperties = React.useContext(exampleContext)
                // Or destructuring the object
                const { exampleState, toggleState } = React.useContext(exampleContext)
                return (
                  <div className="another-react-component" onClick={toggleState}>
                    { exampleState }
                  </div>
                )
                /* The React component has to be a child of the context Provider */
              }
              ```
          </details>        
    </details> 

