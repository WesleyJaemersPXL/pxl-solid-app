const profileService = {
  /**
   * The implementation for this function is challenging! Good luck :) !
   *
   * @param {*} webId   your webId (use this webId to fetch your profile card -> start from there to read all your data)
   * @param {*} fetch   authorized fetch
   * @returns the values read from the profile
   */
  fetchProfile: async (webId, fetch) => {
    throw new Error(
      "Not implemented yet! Implement 'fetchProfile' at 'ProfileService.js'"
    );

    /*
    !! MAKE SURE YOU RETURN AN OBJECT AS FOLLOWS SO THAT THE PROGRAM DOES NOT CRASH !!

    returning {
      name: string,
      emailAddresses: string[],
      addresses: Address[]
    }

    Address: {
      countryName: string,
      postalCode: string,
      region: string
    }
    */
  },
};

export default profileService;
