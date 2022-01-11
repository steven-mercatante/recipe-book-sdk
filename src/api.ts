/* tslint:disable */
/* eslint-disable */
/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Recipe
 */
export interface Recipe {
    /**
     * 
     * @type {string}
     * @memberof Recipe
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof Recipe
     */
    'active_time'?: string;
    /**
     * 
     * @type {string}
     * @memberof Recipe
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof Recipe
     */
    'ingredients'?: string;
    /**
     * 
     * @type {string}
     * @memberof Recipe
     */
    'instructions'?: string;
    /**
     * 
     * @type {string}
     * @memberof Recipe
     */
    'public_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof Recipe
     */
    'notes'?: string;
    /**
     * 
     * @type {string}
     * @memberof Recipe
     */
    'slug'?: string;
    /**
     * 
     * @type {string}
     * @memberof Recipe
     */
    'source'?: string;
    /**
     * 
     * @type {string}
     * @memberof Recipe
     */
    'tags': string;
    /**
     * 
     * @type {string}
     * @memberof Recipe
     */
    'total_time'?: string;
    /**
     * 
     * @type {string}
     * @memberof Recipe
     */
    'video_url'?: string;
}
/**
 * 
 * @export
 * @interface RecipeTag
 */
export interface RecipeTag {
    /**
     * 
     * @type {string}
     * @memberof RecipeTag
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof RecipeTag
     */
    'slug': string;
}

/**
 * RecipeTagsApi - axios parameter creator
 * @export
 */
export const RecipeTagsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Fetch all RecipeTags for Recipes that the current user has access to.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listRecipeTags: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/recipe-tags/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RecipeTagsApi - functional programming interface
 * @export
 */
export const RecipeTagsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RecipeTagsApiAxiosParamCreator(configuration)
    return {
        /**
         * Fetch all RecipeTags for Recipes that the current user has access to.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listRecipeTags(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<RecipeTag>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listRecipeTags(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RecipeTagsApi - factory interface
 * @export
 */
export const RecipeTagsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RecipeTagsApiFp(configuration)
    return {
        /**
         * Fetch all RecipeTags for Recipes that the current user has access to.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listRecipeTags(options?: any): AxiosPromise<Array<RecipeTag>> {
            return localVarFp.listRecipeTags(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RecipeTagsApi - object-oriented interface
 * @export
 * @class RecipeTagsApi
 * @extends {BaseAPI}
 */
export class RecipeTagsApi extends BaseAPI {
    /**
     * Fetch all RecipeTags for Recipes that the current user has access to.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipeTagsApi
     */
    public listRecipeTags(options?: AxiosRequestConfig) {
        return RecipeTagsApiFp(this.configuration).listRecipeTags(options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * RecipesApi - axios parameter creator
 * @export
 */
export const RecipesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {Recipe} [recipe] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRecipe: async (recipe?: Recipe, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/recipes/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(recipe, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        destroyRecipe: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('destroyRecipe', 'id', id)
            const localVarPath = `/recipes/{id}/`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listRecipes: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/recipes/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {Recipe} [recipe] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        partialUpdateRecipe: async (id: string, recipe?: Recipe, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('partialUpdateRecipe', 'id', id)
            const localVarPath = `/recipes/{id}/`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(recipe, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveRecipe: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('retrieveRecipe', 'id', id)
            const localVarPath = `/recipes/{id}/`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {Recipe} [recipe] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateRecipe: async (id: string, recipe?: Recipe, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateRecipe', 'id', id)
            const localVarPath = `/recipes/{id}/`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(recipe, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RecipesApi - functional programming interface
 * @export
 */
export const RecipesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RecipesApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {Recipe} [recipe] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createRecipe(recipe?: Recipe, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Recipe>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRecipe(recipe, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async destroyRecipe(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.destroyRecipe(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listRecipes(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Recipe>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listRecipes(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {Recipe} [recipe] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async partialUpdateRecipe(id: string, recipe?: Recipe, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Recipe>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.partialUpdateRecipe(id, recipe, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveRecipe(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Recipe>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveRecipe(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {Recipe} [recipe] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateRecipe(id: string, recipe?: Recipe, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Recipe>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateRecipe(id, recipe, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RecipesApi - factory interface
 * @export
 */
export const RecipesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RecipesApiFp(configuration)
    return {
        /**
         * 
         * @param {Recipe} [recipe] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRecipe(recipe?: Recipe, options?: any): AxiosPromise<Recipe> {
            return localVarFp.createRecipe(recipe, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        destroyRecipe(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.destroyRecipe(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listRecipes(options?: any): AxiosPromise<Array<Recipe>> {
            return localVarFp.listRecipes(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {Recipe} [recipe] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        partialUpdateRecipe(id: string, recipe?: Recipe, options?: any): AxiosPromise<Recipe> {
            return localVarFp.partialUpdateRecipe(id, recipe, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveRecipe(id: string, options?: any): AxiosPromise<Recipe> {
            return localVarFp.retrieveRecipe(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {Recipe} [recipe] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateRecipe(id: string, recipe?: Recipe, options?: any): AxiosPromise<Recipe> {
            return localVarFp.updateRecipe(id, recipe, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RecipesApi - object-oriented interface
 * @export
 * @class RecipesApi
 * @extends {BaseAPI}
 */
export class RecipesApi extends BaseAPI {
    /**
     * 
     * @param {Recipe} [recipe] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesApi
     */
    public createRecipe(recipe?: Recipe, options?: AxiosRequestConfig) {
        return RecipesApiFp(this.configuration).createRecipe(recipe, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesApi
     */
    public destroyRecipe(id: string, options?: AxiosRequestConfig) {
        return RecipesApiFp(this.configuration).destroyRecipe(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesApi
     */
    public listRecipes(options?: AxiosRequestConfig) {
        return RecipesApiFp(this.configuration).listRecipes(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {Recipe} [recipe] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesApi
     */
    public partialUpdateRecipe(id: string, recipe?: Recipe, options?: AxiosRequestConfig) {
        return RecipesApiFp(this.configuration).partialUpdateRecipe(id, recipe, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesApi
     */
    public retrieveRecipe(id: string, options?: AxiosRequestConfig) {
        return RecipesApiFp(this.configuration).retrieveRecipe(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {Recipe} [recipe] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecipesApi
     */
    public updateRecipe(id: string, recipe?: Recipe, options?: AxiosRequestConfig) {
        return RecipesApiFp(this.configuration).updateRecipe(id, recipe, options).then((request) => request(this.axios, this.basePath));
    }
}


