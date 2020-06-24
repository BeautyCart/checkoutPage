const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
// configure Enzyme to use the react 16 adapter
Enzyme.configure({ adapter: new Adapter() });
