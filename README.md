### `yarn install`

In the root directory to install the project dependencies.

Then in the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `Lifecycles`

When a component is created and rendered to the DOM, it goes through some 'component lifecycles'.

These phases are:
Mounting
Updating
Unmounting

During the mounting phase, a component is created and inserted into the DOM.

Mounting is the first phase a component goes through.

As a component grows, it goes through an updating phase.

If nothing changes about state or props of the component, then it will not update.

The last phase a component goes through is the unmounting phase. This is where a component is removed from the DOM.

If there is an error, a component will go through error handling.

### `Lifecycle Methods`

During each phase a component goes through, there are available 'lifecycle methods'.

#### Mounting Phase:

1. constructor() - The first method called to bring the component to life. This is called before the component is mounted in the DOM.
   You can initialize state and bind event handlers here. You should NOT introduce any side-effects or subscripts such as event handlers here.

2. static getDerivedStateFromProps() - Not used as often, but this method takes in props and state. This method should do one of two things: return an obj to update the state OR return null to not update the component. This method is called before it is rendered into the DOM. What is a good use case for this method? When you need to update the component's STATE based on changes to PROPS.

3. render() - Required in ALL class components. This is where you will create your elements that will be rendered to the DOM. This is where your JSX will go. You could return a string, array, boolean, or null instead of JSX. IMPORTANT : do not setState or interact with external API's here. This is not the place for that.

4. componentDidMount() - A component is mounted to the DOM and then this method is immediately called. This is where you will want to make requests to fetch data or add event listeners.

#### Updating Phase:
