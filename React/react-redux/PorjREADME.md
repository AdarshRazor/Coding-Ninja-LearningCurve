## Procedure

create the project

add the css and js files to the project

add navbar

add shop.js the credit and withdraw button

install 'npm i redux react-redux redux-thunk'

create state > actionCreators and reducers

create actionss in actionCreator > index.js

now create the amountReducers in reducers folder
since u will have a lot of reducers in future so put all the reducers in one file > reducers/index.js

now bring all the action creators in one file > state/index.js
now create a store for the reducer > state/store.js

now provide the store access to the whole app. > index.js

### Accessing State in Redux




## TroubleShooting

![image](https://github.com/AdarshRazor/Coding-Ninja-LearningCurve/assets/33658792/b8ee8bcc-78af-4b55-985c-56a879951eff)

const var_name

export default var_name

<hr>

If any reducer is not defined properly. It will throw an error while including in state.

define reducer in reducer.js
combine all reducers index.js
configure store using all combined reducers
use useSelector properly