const { register, login, verifyEmail, resendVerificationEmail } = require('../controllers/userController')

const router = require('express').Router()

/**
 * @swagger
 * /api/v1/register:
 *   post:
 *     summary: this is the register or signup route
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *                 description: this is the full name of the user
 *                 example: Alaekeka Ebuka
 *               email:
 *                 type: string
 *                 description: this is the email of the user
 *                 example: alaekekaebuka200@gmail.com
 *               password:
 *                 type: string
 *                 description: this is the password of the user
 *                 example: ebusr09
 *               gender:
 *                 type: string
 *                 description: this is the gender of the user
 *                 example: Male
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
router.post('/register', register)



/**
 * @swagger
 * /api/v1/login:
 *   post:
 *     summary: this is the login route
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: this is the email of the user
 *                 example: alaekekaebuka200@gmail.com
 *               password:
 *                 type: string
 *                 description: this is the password of the user
 *                 example: ebusr09
 *     responses:
 *       200:
 *         description: user login successfully
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
 * 
 * 
 */

router.post('/login', login)

router.get('/user-verify/:token', verifyEmail)

router.post('/resend-verification/', resendVerificationEmail)

module.exports = router