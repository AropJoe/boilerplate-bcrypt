const express = require('express');
const helmet = require('helmet');

const app = express();
app.use(helmet());
app.use(helmet.hidePoweredBy());
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());
app.use(helmet.noCache());

app.use(
  helmet.frameguard({
    action: "deny",
  })
);

let ninetyDaysInSeconds = 90*24*60*60;
app.use(
  helmet.hsts({
    maxAge: ninetyDaysInSeconds,
    force: true,
  })
);

app.use(
  helmet.dnsPrefetchControl({
    allow: false,
  })
);
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: false,
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "trusted-cdn.com"],
    },
  })
);

app.get('/', (req, res) => {
    res.send("Just a sample site with express.js!")
});
  
app.listen(3030, (err) => {
    if (err) { console.log(err); }
    else { console.log('Server running at http://localhost:3030'); }
});
