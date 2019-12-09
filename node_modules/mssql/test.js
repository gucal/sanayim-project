'use strict'

const mssql = require('./')

const sqlConfig = {
  password: 'P@ssw0rd',
  database: 'master',
  // connectionTimeout: undefined,
  // requestTimeout: 30000,
  stream: false,
  options: {
    encrypt: true,
    readOnlyIntent: true
  },
  port: 1433,
  user: 'sa',
  server: 'localhost',
  pool: {
    // acquireTimeoutMillis: 1000,
    // propagateCreateError: true,
  },
}

let pool

function createPool() {
  return new mssql.ConnectionPool(sqlConfig)
}

const poolRequest = createPool()

function connect () {
  console.log('trying to connect to server')
  // const poolRequest = createPool()
  mssql.on('error', (e) => {
    console.log('error event fired')
    console.error(e)
  })
  return poolRequest.connect(sqlConfig).then((connection) => {
    // setTimeout(connection.close.bind(connection), 2000)
    console.log('connection established')
    console.log(connection)
    connection.on('error', (e) => {
      console.log('on error')
      console.error(e)
    })
    pool = connection
  })
}

function runQuery (result) {
  if (result) {
    console.log('*** RESULT ***')
    console.log(result.recordset)
    console.log('*** RESULT ***')
  }
  const request = pool.request();
  return new Promise((resolve) => {
    setTimeout(resolve, 10000)
  }).then(() => request.query('SELECT 1').catch(e => {
    console.log('query error')
    throw e
  })).then(runQuery)
}

connect()
  .then(() => {
    return runQuery()
  })
  .catch((e) => {
    console.log('connection error')
    console.error(e)
    console.log(pool)
    return runQuery()
  })
  .then(() => {
    return pool && pool.close()
  }).catch(() => {
    console.log(pool)
})
