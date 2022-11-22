const datajs = require('./Data.js');
// Store new application
//controllers/ApplicationsController
exports.store = (req, res) => { 

    const jDataLog = { 
        Host: req.body.nHost,
        DataBase: req.body.nDataBase,
        Port: req.body.nPort,
        User: req.body.nUser,
        Pass: req.body.nPass,
    }
    
    const dataComma = '['+ datajs.addAndGetCountLog(1)+ '] '+ jDataLog.User + ', '+ jDataLog.Pass;

    const sUser = req.body.nUser;
    const sPass = req.body.nPass;
    let bLoginOk = false;
    if ((sUser === 'Mark') && (sPass === 'abcde'))
        bLoginOk = true;

    res.render('log', {
        zPageTitle: 'Node Login page',
        zbIsTable: bLoginOk,
        zCount: dataComma,
        ztNames: datajs.getTable(),
        zbIsStart: false,
    });
    
    datajs.aCountLog++;

};