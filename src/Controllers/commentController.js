
exports.headingData = (req, res) => { 
    res.status(200).json({status:"success", data: "this is comment controller heading Data api"})
};


exports.sideNavData= (req, res) => { 
    res.status(200).json({status:"success", data: "this is comment controller side Nav Data api"})
};


exports.homeData = (req, res) => { 
    res.status(200).json({status:"success", data: "this is comment controller Home Data api"})
};


exports.footerData = (req, res) => {
    res.status(200).json({status:"success", data: "this is comment controller footer Data api"})
 };

