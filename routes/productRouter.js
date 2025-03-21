const router  = require('express').Router()

const { createProduct, getAllProducts, getOneProduct, updateProduct, deleteProduct} = require('../controllers/productController.js')

const {authenticate} = require('../middleware/authentication.js')

const upload = require('../utils/multer')


/**
 * @swagger
 * /api/v1/createProduct:
 *   post:
 *     summary: this is the product creation route
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               category:
 *                 type: string
 *                 description: this is the category name of the product
 *                 example: male fashion
 *               price:
 *                 type: string
 *                 description: this is the price of the product
 *                 example: $3000.00
 *               description:
 *                 type: string
 *                 description: this is the description name of the product
 *                 example: nike air
 *               sizes:
 *                 type: string
 *                 description: this are the sizes of the product
 *                 example: 56,78,34
 *               image:
 *                 type: string
 *                 format: binary
 *                 example: nike air shoe
 *     parameters:
 *       - name: "Authorization"
 *         in: "header"
 *         required: true
 *         type: string
 *         description: takes a token after a successful login
 *         example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2Q4YjBlYTVkNzBmYmJiMTk0ZDUwMjAiLCJpYXQiOjE3NDIyNTU3MzgsImV4cCI6MTc0MjM0MjEzOH0.OCY54ivlQBuws4saWeMJrfn7bFL5LdRQP8ZRTfHN7BA
 *     responses:
 *       201:
 *         description: user created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 fullName:
 *                   type: string
 *                   description: this is the full name of the user
 *                   example: Alaekeka Ebuka
 *                 email:
 *                   type: string
 *                   description: this is the email of the user
 *                   example: alaekekaebuka200@gmail.com
 *                 password:
 *                   type: string
 *                   description: this is the password of the user
 *                   example: ebusr09
 *                 gender:
 *                   type: string
 *                   description: this is the gender of the user
 *                   example: Male
 *       400:
 *        description: user with Email already exists
 *        content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                  type: string
 *                  description: this is the email of the user
 *                  example: alaekekaebuka200@gmail.com
 * 
 * 
 * 
 * 
 */


router.post('/createProduct',authenticate, upload.single('image'), createProduct)

router.get('/getAllProducts',  getAllProducts)

router.get('/getOneProduct/:id', getOneProduct)

router.put('/updateProduct/:id',upload.single('image'), updateProduct)

router.delete('/deleteProduct/:id',upload.single('image'), deleteProduct)

module.exports = router

