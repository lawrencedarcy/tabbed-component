# Tabbed component

Reusability: This was the main focus of my approach to this component, which supports any number of tabs (within reason!). Changing one line of code will edit the sections and the amount of tabs in use. In theory this would make it easy to import and use across the site. Its flexible and responsive styles should be enough to see it through most use cases.

Accessibility: I used semantic HTML where possible to accomodate screen readers. In my CSS I retained a high-contrast text/background colour ratio (ie, I did nothing to change the default!), and added a mouseover highlight to the links. I also matched 'hover' styles with 'focus' styles to make them available on keyboard focus as well as mouseover.

Browser support: I am using vanilla JS and simple CSS styles so there shouldn't be any issues here. The only concerns are with CSS Flexbox and ES6; caniuse.com thinks IE11 may be a little buggy with these (but in this simple component, probably fine!). 



