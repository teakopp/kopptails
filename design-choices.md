# Design Choices

### Trade-offs
1.  How the single page app changes and functions
2. What variables to keep in `app.tsx`
3. Everything about the sidebar
5. Not using React Router
6. How the grid is laid out and agonizing over it
7. Dropdown menu for filter

### How the single page app changes and functions
It was an easy choice to make it a single page app, because very similar data is being displayed in every view. How the app would function was tricky though. I decided on using a single state to change app and connecting state change to buttons because having more than one or two states flowing downward can get really complicated very fast. So I try to distill it down to what absolutely needs to be there. 

### What variables to keep in `app.tsx`
I realized later on that a second state, the state used to manage filter options would be needed to be on the top level component due to how it affected other components. 

### Everything about the sidebar
The tricky part about the sidebar was the sublist buttons and whether those should exist or just be in nav or around. It seemed to make most sense and look best in sidebar, but the sublist buttons required some extra logic when buttons in sidebar started doing different things. I tried to make sidebar buttons as reusable as possible so the sidebar can grow fairly easily

### Not using React Router
I figured there wouldn't be enough page changes to warrant its use. Though, it probably would have made the filter calls much easier instead of using a dropdown.

### How the grid is laid out and agonizing over it
I decided to use flex-box for css over css-grid, which I'm still not sure was the right choice. The flex-box is nice because it scales and makes laying stuff out dynamically pretty easy, but getting a good layout took a while and I had to give up my early dreams of left and right margins.

### Dropdown
Of all the tradeoffs the biggest was the simple decision to use a dropdown to manage the search filters. I liked how it simplified a large amount of data and made it usable. The dropdown functions a little odd in React and ended up causing a delay in between states and props causing re-rendering to be a very tricky thing. In order to not blast api with calls, filter data was grabbed when filter component was loading. This took quite a few workarounds to get it functioning properly.
