const fileService = {
  /**
   * Write some code so that your file gets uploaded to your pod!
   * After uploading the file, you will have to go to the AccessService to create an ACL for the uploaded file.
   *
   * Make sure you create an Access Control List for the uploaded file
   * My code automatically calls the "createAclForFile" in "./AccessService.js" to do that, the only thing you have to do is implement it!
   *    -> if the function is implemented incorreclty, you won't be able to fetch the access later on
   *
   * @param {*} file    file content
   * @param {*} url     upload path url (do not change!)
   * @param {*} fetch   authorized fetch
   */
  uploadFile: async (file, url, fetch) => {
    throw new Error(
      "Not implemented yet! Implement 'uploadFile' at 'FileService.js'"
    );
  },
};

export default fileService;
