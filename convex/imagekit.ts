"use node";

import { action } from "./_generated/server";
import crypto from "crypto";

export const getAuthParams = action({
  args: {},
  handler: async () => {
    // Check if we are in production or if private key is provided
    const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
    if (!privateKey) {
      console.warn("IMAGEKIT_PRIVATE_KEY is missing in Convex environment variables. Private ImageKit feature will not work.");
      return null;
    }

    const token = crypto.randomBytes(16).toString("hex");
    const expire = Math.floor(Date.now() / 1000) + 3600; // 1 hour
    
    // Generate signature
    const signature = crypto
      .createHmac("sha1", privateKey)
      .update(token + expire)
      .digest("hex");
    
    console.log("Generated ImageKit auth params successfully.");

    return {
      token,
      expire,
      signature,
    };
  },
});
