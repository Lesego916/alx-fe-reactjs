// src/UserContext.js
import { createContext } from "react";

/**
 * UserContext
 * Provides a place to store and consume user-related data across the app
 * without prop drilling.
 *
 * Default value is null so consumers can detect absence of a provider.
 */
const UserContext = createContext(null);

export default UserContext;
