# Types f testing (develper can do)

- Unit testing
- Integration testing
- End to End testing - e2e testing


unit testing - you test your react componenet in isolation. Testing one unit or one component in isolation). Write test cases for the specific part (isolated components)

integrtion testing - testing the integration of the components. IN large based application components talk to each other. So, Integrtion testing means there are multiple  components and they are talking to each other and we will develop a flow of an action in our react application that we will test. 

End to End testting = testing a react application as soon as the user land on the website to the user leaves the website.
Beasically the end to end testing will start from user lnding onto the web page, clicking on the login button you entertrin the username, password, going inside it, finding the resturant, addig items to the cart, and then checking out and like basically whatever it's basically kind of like simulaing what the user will do throughout the app.

end to end testing requirs different types of tools like cypress, puppeteer, selenium these types of tools are needed to do end to end testig.


# we will focus on two testing unit and integrtion testing (developer are solenly responsible for unit and integrtin testing)

React testing library - React Testing Library builds on top of DOM Testing Library

React testing library uses something knows as jest. 

Jest is a delightful javascript testing framework with a focus on simplicity

Jest is today is a standard to write test cases whenver it comes to javscript. It is basically a javascript testing framework and the dom testing library or the react testing library uses jest behind the sense.

React testing library needs jest in our project also and jest in turn uses babel

Jest works with projects using: Babel, Typescript, Node, React, Angular, Vue and more!

So, we need both react testing library  as well as jest into our application.

# install react testing library - npm i -D @testing-library/react

# now we wil install jest into our application - npm i -D jest

we are using jest alsong with babel. so when you are using it with babel  so you will need to install some additional dependencies

# npm install --save-dev babel-jest @babel/core @babel/preset-env

now you have to configure babel - you have to create "babel.config.js" and you have to write this:- 
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
}; inside "babel.config.js"


do you remember parcel has automatically has babel inside it. Parcel uses babel behind the scenes. now when we are using jest and when we are using these dependencies (# In short do we will do this me 3 red no. se) manually, so these dependencies will interfere with parcel.

Parcel also uses Babel and now we are trying to configure babel according to us so what will happen is there will be a conflict b/w bable and parcel. Parcel will say that I have own internal bable configurtion and we also create "babel.config.js" and add some configurtion so this will kind of try to override the exiting babel configuration that parcel has set for us.

in summary -
so parcel already uses babel behind the scenses and parcel has it's own confiration for babel now we are trying to add extra configurtion so parcel will get confused. Parcel's configuration wil conflict with "babel.config.js" configuration. 
So we will have to change parcel's behaviour to accommodate to use babel along with jest. 
We wil have to accommodate we will have to make some changes in our parcel configuration. 
lets go to parcel docs search for "jest" click on "javascript" section in the righ aside section go to "babel" read it
now find "Usage with other tool" create ".parcelrc" file in root and add this configuratin:- 
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
} 

now when you do this configuration "babel.config.js" will not conflict this:- 
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
}; inside "babel.config.js"
will be the conflict which will be used


# next step

NOW do "npm run test" when you do "npm run test" in terminal and it says "No tests found" that means you have successfully configured your react testing library, jest, babel and parcel four things are configured properly to make test cases work.


# next step

- Jest configuration = "npx jest --init"
(it will initlially iinitialize the jest and it will create a new configuration file for jest)

now when you do this as some question:-
1. Would you like to use Typescript for the configuration file? - No

2. Choose the test environment that will be used for testing - jsdom (browser-like)

# what is jsdom
-- when you run test cases so there is no server running there is no browser these test cases does not run on browser will not run on google chrome so they will need a env to run they will need a runtime where this testing code will be exucuted for that we use jsdom. 
Search in google jodom said:- Jsdom is a library which parses and interacts with assembled HTML just like a browser.

so, it is not a browser but it is like a browser which will give you the features of browser.

3. Do you want Jest to add coverage reports? - Y

4. Which provider should be used to instrument code for coverage? - babel

5. Automatically clear mock calls, instances, contexts and results before every test? - Y

# next step

install jsdom library

go to testing library : https://testing-library.com/ docs: https://testing-library.com/docs/  go Framework inside of it go to React testing library  inside of it go to Setup: https://testing-library.com/docs/react-testing-library/setup then jest 28: https://testing-library.com/docs/react-testing-library/setup#jest-28

# Jest 28 ("jest": "^29.7.0")
If you're using Jest 28 or later, jest-environment-jsdom package now must be installed separately.

"npm install --save-dev jest-environment-jsdom"



# writing test cases for learning purpose

create sum.js in components folder

create folder inside components "__tests__" - whatever files are present inside this filder and they have a extion of js or ts jest will track them

_ _ = dunder (two underscore knows as dunder)

So, if you create "__tests__" anywhere in your folder structure and any file you create, if you will create .js or .ts file inside this will be considered as your test file.

Otherwise if you don't want to use this you can create any file name .test.js or .test.ts or .spec.js or .spec.ts all these files considered as testing files
ex- Header.test.js or Header.test.ts or Header.spec.js or Header.spec.ts


# Unit testing:
unit testing menas you are testing one component


Now, we test Contact component:-
 while we do this in Contact.test.js file:
 import { render, screen } from "@testing-library/react"
import Contact from "../Contact"

test("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})


after doing npm run test in terminal we got:
SyntaxError: Support for the experimental 
syntax 'jsx' isn't currently enabled

Basically, it tries to say that we jsx isn't enabled for our test cases

to enable jsx Add @babel/preset-react inside my babel config = inside babel.config.js config

after that do npm run test you will get TypeError: expect(...).toBeInTheDocument is not a function

toBeInTheDocument is not a function because we have not installed a library - @testing-library/jest-dom

after intalling import this in Contact.test.js file like: import "@testing-library/jest-dom"

{
const inputBoxes = screen.getAllByRole("textbox");
while you do console.log(inputBoxes) this return jsx element


doing 

 it("Should load button inside Contact component", () => {
        render(<Contact />);
    
    
        const button = screen.getByText("Submit");
    
        // Assertion
        expect(button).toBeInTheDocument();
    })

    or 
    test("Should load button inside Contact component", () => {
        render(<Contact />);
    
    
        const button = screen.getByText("Submit");
    
        // Assertion
        expect(button).toBeInTheDocument();
    })

    is the same thing

}





# In short do we will do this

- install react testing library - npm i -D @testing-library/react

- install jest = npm i -D jest

- Install Babel depencies - npm install --save-dev babel-jest @babel/core @babel/preset-env

- Configure Babel - create "babel.config.js" file inside root and wite this configuration: - 
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
}; inside "babel.config.js"

- Configure parcel Config files to disable default babel transpilation 
(so Configure parcel Config files to disable default babel transpilation to use babel configuration inside "babel.config.js" )

- npm run test
(To configure your react testing library, jest, babel and parcel four things are configured properly or not to make test cases work.)

- Jest configuration = "npx jest --init"
(it will initlially iinitialize the jest and it will create a new configuration file for jest)

- install jsdom library = npm install --save-dev jest-environment-jsdom

-  install @babel/preset-react (to make jsx work in test cases) = npm i -D @babel/preset-react

- include @babel/preset-react inside my babel config = inside babel.config.js config

- install @testing-library/jest-dom = npm i -D @testing-library/jest-dom




doing this 
# "watch-test": "jest --watch" in package.json 
test cases automatically run in terminal.