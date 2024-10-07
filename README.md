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
      <summary></summary>

      ```JSX
      ```
    </details>
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
    </details>
  ### Solving Prop Drilling
  - **What is Prop Drilling?** It's when you has to pass a property to a React Component, only to pass it to the child, or grandchild, etc. Depending of the sequence of levels you have to pass through, and the quantity of properties, you can end up with a lot of properties that visually overcharge your code.
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
            <Menu> // buttonProp and itemProp passed directly to the children. You avoid passing it to the Menu first
              <MenuButton buttonProp="value"> Menu </MenuButton>
              <MenuItem itemProp="value"> Item 1 </MenuItem>
              <MenuItem itemProp="value"> Item 2 </MenuItem>
              <MenuItem itemProp="value"> Item 3 </MenuItem>
            </Menu>
          )
        }
        ```
    </details> 

