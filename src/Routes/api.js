const express = require('express');
const router = express.Router();
//---------------------
const blogController = require('../Controllers/blogController');
const commentController = require('../Controllers/commentController');
const messageController = require('../Controllers/messageController');
const portfolioController = require('../Controllers/portfolioController');
const productController = require('../Controllers/productController');
//blogController apis 
router.get('/blogController/heading' , blogController.headingData);
router.get('/blogController/sideNav' , blogController.sideNavData);
router.get('/blogController/home' , blogController.homeData);
router.get('/blogController/footer' , blogController.footerData);

//commentController apis 
router.get('/commentController/heading' ,commentController.headingData );
router.get('/commentController/sideNav' , commentController.sideNavData);
router.get('/commentController/home' , commentController.homeData);
router.get('/commentController/footer' , commentController.footerData);

//messageController apis 
router.get('/messageController/heading' ,messageController.headingData );
router.get('/messageController/sideNav' , messageController.sideNavData);
router.get('/messageController/home' , messageController.homeData);
router.get('/messageController/footer' , messageController.footerData);

//portfolioController apis 
router.get('/portfolioController/heading' ,portfolioController.headingData );
router.get('/portfolioController/sideNav' , portfolioController.sideNavData);
router.get('/portfolioController/home' , portfolioController.homeData);
router.get('/portfolioController/footer' , portfolioController.footerData);

//productController apis 
router.get('/productController/heading' ,productController.headingData );
router.get('/productController/sideNav' , productController.sideNavData);
router.get('/productController/home' , productController.homeData);
router.get('/productController/footer' , productController.footerData);

module.exports  = router ;