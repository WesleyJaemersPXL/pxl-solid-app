const accessService = {
  /**
   * Create an Access Control List for a resource.
   *
   * Hint: first fetch the file, then create an ACL-list for that file, save it!
   *
   * @param {*} resourceUrl   url from the file
   * @param {*} webId         your webId
   * @param {*} fetch         authorized fetch
   */
  createAclForFile: async (resourceUrl, webId, fetch) => {
    throw new Error(
      "Not implemented yet! Implement 'createAclForFile' at 'AccessService.js'"
    );
  },

  /**
   * Fetch the access from a resource and return it
   *
   * @param {*} resourceUrl   url from the file/resource
   * @param {*} fetch         authorized fetch
   * @returns the fetched access list in a correct format
   */
  getAccess: async (resourceUrl, fetch) => {
    throw new Error(
      "Not implemented yet! Implement 'getAccess' at 'AccessService.js'"
    );

    // const fetchedAccess = YOUR_IMPLEMENTATION_HERE
    // RETURN THE FETCHED ACCESS IN THE CORRECT FORMAT BY USING THIS FUNCTION
    // THE FUNCTION IS DESCRIBED AT THE BOTTOM (UNCOMMENT IT!)
    // return fetchedAccessToList(fetchedAccess);
  },

  /**
   * Give access for a resource to a person (webId)
   *
   * @param {*} resourceUrl   url from the file/resource
   * @param {*} webId         webId of the person you want to give access to
   * @param {*} accessValues  access values (= ACL list => just pass it to the correct function)
   * @param {*} fetch         authorized fetch
   */
  giveAccessTo: async (resourceUrl, webId, accessValues, fetch) => {
    throw new Error(
      "Not implemented yet! Implement 'giveAccessTo' at 'AccessService.js'"
    );
  },
};

/*
UNCOMMENT THIS FUNCTION!

const fetchedAccessToList = (result) => {
  let accessList = [];
  for (const [webId, access] of Object.entries(result)) {
    accessList.push({ webId: webId, access: access });
  }
  return accessList;
};
*/

export default accessService;
