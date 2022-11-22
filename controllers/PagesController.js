//controllers/PagesController
//import { getTable } from './Data.js'
const datajs = require('./Data.js');

let aCounter = 0;
let aCountAb = 0;
let aCountLog = 0;

exports.home2 = (req, res) => {
    res.render('home', {
        formMessage: req.flash('form')
    });
};

//===== Routing of pages =============================================
exports.home = (xrequest, xresponse) => { 
    xresponse.render('table2', {
        zPageTitle: 'Node Main Page',
        zbIsTable: false,
        zCount: aCounter,
        ztNames: [],
    });
    aCounter++;
}; 
exports.table = (xrequest, xresponse) => { 
    xresponse.render('table2', {
        zPageTitle: 'Node Table page',
        zbIsTable: true,
        zCount: aCountAb,
        ztNames: datajs.getTable(),
    });
    aCountAb++;
}; 

exports.log = (xrequest, xresponse) => { 
    xresponse.render('log', {
        zPageTitle: 'Node Table page',
        zCount: datajs.addAndGetCountLog(1),
        ztNames: datajs.getTable(),
        zbIsTable: true,
        zbIsStart: true,
    });
    aCountLog++;
}; 

exports.about = (xrequest, xresponse) => { 
    xresponse.render('about');
};
