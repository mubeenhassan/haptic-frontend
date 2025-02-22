// config/index.tsx

import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { cookieStorage, createStorage } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

// Your WalletConnect Cloud project ID
export const projectId = "05fb3ab2ac6a28c3f8fb4154a0d48c5e";

// Create a metadata object
const metadata = {
	name: "Haptic AI",
	description: "MAKE YOUR AI A MEAN MACHINE",
	url: "https://www.hapticai.dev/", // origin must match your domain & subdomain
	icons: ["../public/favicon.ico"],
};

// Create wagmiConfig
const chains = [mainnet, sepolia];
export const config = defaultWagmiConfig({
	chains,
	projectId,
	metadata,
	ssr: true,
	storage: createStorage({
		storage: cookieStorage,
	}),
	// ...wagmiOptions, // Optional - Override createConfig parameters
});
