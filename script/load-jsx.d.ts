/**
 * A tiny JSX loader.
 */
export function createLoader(): {
    load: (href: string, context: unknown, defaultLoad: Function) => Promise<any>;
    getFormat: (href: string, context: unknown, defaultGetFormat: Function) => any;
    transformSource: (value: Buffer, context: {
        [x: string]: unknown;
        url: string;
    }, defaultTransformSource: Function) => Promise<any>;
};
/**
 * @param {string} href
 * @param {unknown} context
 * @param {Function} defaultGetFormat
 */
export function getFormat(href: string, context: unknown, defaultGetFormat: Function): any;
/**
 * @param {string} href
 * @param {unknown} context
 * @param {Function} defaultLoad
 */
export function load(href: string, context: unknown, defaultLoad: Function): Promise<any>;
/**
 * @param {Buffer} value
 * @param {{url: string, [x: string]: unknown}} context
 * @param {Function} defaultTransformSource
 */
export function transformSource(value: Buffer, context: {
    [x: string]: unknown;
    url: string;
}, defaultTransformSource: Function): Promise<any>;
