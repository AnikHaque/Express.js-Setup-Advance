exports.headingData = (req, res) => { 
    res.status(200).json({status:"success", data: "this is Portfolio Controller heading Data api"})
};


exports.sideNavData= (req, res) => { 
    res.status(200).json({status:"success", data: "this is Portfolio Controller side Nav Data api"})
};


exports.homeData = (req, res) => { 
    res.status(200).json({status:"success", data: "this is Portfolio Controller Home Data api"})
};


exports.footerData = (req, res) => {
    res.status(200).json({status:"success", data: "this is Portfolio Controller footer Data api"})
};