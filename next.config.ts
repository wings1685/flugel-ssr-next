import type { NextConfig } from "next";

let output = {};
if (process.env.NEXT_PUBLIC_BUILD_MODE === 'ssg') output = { output: 'export' };

const nextConfig: NextConfig = {
	...output,
  /* config options here */
//   cacheComponents: true,
//   partialPrefetching: true,
};

export default nextConfig;
