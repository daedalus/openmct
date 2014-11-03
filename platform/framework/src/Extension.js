/*global define*/

define(
    [],
    function () {
        /**
         * An extension's plain JSON definition.
         *
         * @name ExtensionDefinition
         * @property {string} [key] the machine-readable identifier for this
         *           extension
         * @property {string} [implementation] the path to the AMD module
         *           which implements this extension; this path is relative
         *           to the containing bundle's source folder.
         * @property {string[]} [depends=[]] the dependencies needed by this
         *           extension; these are strings as shall be passed to
         *           Angular's dependency resolution mechanism.
         */

        /**
         * Instantiate a new extension based on its definition. This serves
         * primarily as a wrapper around the extension's definition to expose
         * a useful interface.
         *
         * An extension
         *
         * @param {Bundle} bundle the bundle which exposed this extension
         * @param {string} category the type of extension being exposed
         * @param {ExtensionDefinition} definition the plain definition of
         *        this extension
         * @constructor
         */
        function Extension(bundle, category, definition) {


            return {
                /**
                 * @memberof Extension#
                 * @returns {Bundle}
                 */
                getBundle: function () {
                    return bundle;
                },
                /**
                 * @memberof Extension#
                 * @returns {string}
                 */
                getCategory: function () {
                    return category;
                },
                /**
                 * Get the path to the AMD module which implements this
                 * extension. Will return undefined if there is no
                 * implementation associated with this extension.
                 *
                 * @memberof Extension#
                 * @returns {string} path to implementation, or undefined
                 */
                getImplementationPath: function () {
                    return definition.implementation ?
                            bundle.getSourcePath(definition.implementation) :
                            undefined;
                },
                /**
                 * @memberof Extension#
                 * @returns {ExtensionDefinition}
                 */
                getDefinition: function () {
                    return definition;
                }

            };
        }

        return Extension;

    }
);