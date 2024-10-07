# React Components
## Introduction
It's a website showing multiple React components. The style and content of the components are editable on the code
**Components:**
  - **Badge:** a simple text box that can change its color and box styling. It expects 3 arguments:
    - `children`: the content inside the box
    - `color`: the color of the box and the text. The value has to be one of this: ["gray","red","blue","yellow","green","indigo","purple","pink"].
    - `type`: the box styling, it has two possible values: "pill" for rounded corners, "square" for normal corners. 
  - **Banner:** a more complex text box with a predefined title and style.
    - `children`: the content inside the box, below the title
    - `title`: the main title of the box. Type: String
    - `type`: a predefined list of styles, trying to confirm the type of message of the box. Possible values: ["success", "warning", "error", "info"]
  - **Card:** a box with a configurable icon, and a complete configurable content.
    - `children`: the content inside the box.
    - `icon`: the icon that will be located on the top center of the box. Type: JSX element.
    - `iconColorBackground`: the color background of the icon container. Type: String
  - **Testimonial:** a box containing the quote of a person. It can also show more information about them or the company they belong to. The style of the box will change depending if the image is avaible or not.
    - All of this properties are optional, including the quote.  
    - `children`:  extra information that will be located below the other predefined content.
    - `quote`:  the content of the quote. No quotations marks needed
    - `name`: the name of the person. Type: String
    - `role`: their role inside the company. Type: String
    - `image`: the img url of the person. Type: String
    - `logo`: the logo of the company. Type: JSX element.
