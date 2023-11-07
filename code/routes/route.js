import { Router } from "express";
import { login, logout, register, registerAdmin } from "../controllers/auth.js";
import {
    createCategory, createTransaction, deleteTransaction,
    getCategories, getAllTransactions, getTransactionsByUser, deleteCategory,
    getTransactionsByUserByCategory, deleteTransactions, getTransactionsByGroup, getTransactionsByGroupByCategory, updateCategory
} from "../controllers/controller.js";
import {
    getUsers, getUser, createGroup, getGroups, deleteGroup,
    getGroup, deleteUser, addToGroup, removeFromGroup
} from "../controllers/users.js";

const router = Router();

/**
 * Routes that do not require authentication
 */
router.post('/register', register)
router.post("/admin", registerAdmin)
router.post('/login', login)

/**
 * Routes for authenticated users
 */


/**
 * Admin-exclusive routes. The functions called are the same and must have different behaviors depending on the route.
 */


/**
 * Logout
 */
router.get('/logout', logout)
export default router;