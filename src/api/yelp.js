import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer g457AnTwxqMKYRnvVAgSRZOnzyOteI1IA0W_ckQWSSDRlXmmTRH3dSPxlZT7kvVhhWbyLjWuDjw6ah_mgp2lyk5UsFSfxBBQ3zHfm6QvJWsySsmxj0oQwOC-phyeXXYx"
  }
});
