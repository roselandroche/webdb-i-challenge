const server = require('./server.js');
const accountsRouter = require('./accounts/accounts-router')

const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 4000;

server.use('/api/accounts', accountsRouter)

server.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({ message: 'There is a problem.'})
})

server.listen(PORT, () => {
  console.log(`Listening on http://${HOST}:${PORT}...`);
});