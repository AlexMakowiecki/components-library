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

  - You can then access the children of the React component through the children property of your props argument.
    - ```JSX
      export default function ReactComponent(props){
        return props.children // ==> <div>Content of the React Component</div>
      }
      ```
  -       
