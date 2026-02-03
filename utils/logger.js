/**
 * Logger Utility - Secure Logging
 * Production'da console.log'ları devre dışı bırakır
 */

const isDevelopment = __DEV__;

const logger = {
    /**
     * Development modunda log yazdırır, production'da sessizdir
     */
    log: (...args) => {
        if (isDevelopment) {
            console.log('[LOG]', ...args);
        }
    },

    /**
     * Development modunda uyarı yazdırır, production'da sessizdir
     */
    warn: (...args) => {
        if (isDevelopment) {
            console.warn('[WARN]', ...args);
        }
    },

    /**
     * Hataları her zaman yazdırır (hem dev hem production)
     */
    error: (...args) => {
        console.error('[ERROR]', ...args);
    },

    /**
     * Debug bilgileri - sadece development
     */
    debug: (...args) => {
        if (isDevelopment) {
            console.log('[DEBUG]', ...args);
        }
    },

    /**
     * Bilgi mesajları - sadece development
     */
    info: (...args) => {
        if (isDevelopment) {
            console.info('[INFO]', ...args);
        }
    },
};

export default logger;
