import dva from 'dva';
import './index.css';
import createLoading from 'dva-loading';

// 1. Initialize
const app = dva();

// 2. Plugins
app.use(createLoading());

// 3. Model
// app.model(require('./models/example'));
app.model(require("./models/counter"));
app.model(require("./models/book"));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
