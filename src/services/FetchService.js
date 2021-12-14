const fetchService = {
  /**
   * Implement this function to read a file from your pod (resourceUrl)
   *
   * @param {*} resourceUrl   url of the file
   * @param {*} fetch         authorized fetch
   * @returns the file in the correct format (base64)
   */
  fetchFile: async (resourceUrl, fetch) => {
    throw new Error(
      "Not implemented yet! Implement 'fetchFile' at 'FetchService.js'"
    );

    /*
    const fileContent = YOUR_IMPLEMENTATION_HERE
    // RETURN THE FETCHED ACCESS IN THE CORRECT FORMAT BY USING THIS FUNCTION
    // THE FUNCTION IS DESCRIBED AT THE BOTTOM (UNCOMMENT IT!)
    return await blobToBase64(fileContent);
    */
  },
};

/*
UNCOMMENT THIS FUNCTION!

const blobToBase64 = (blob) => {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
};
*/

export default fetchService;
